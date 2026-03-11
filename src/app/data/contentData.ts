/**
 * Content Data — Auto-Discovery via import.meta.glob
 * ────────────────────────────────────────────────────────────────────────────
 * Uses Vite's import.meta.glob to eagerly import ALL .md files under
 * /content/ as raw strings. The folder tree is built dynamically from
 * the file paths — no manual maintenance needed.
 *
 * When a new content file is added anywhere under /content/, it
 * automatically appears in the Content Browser on next hot-reload.
 */

export interface ContentFile {
  name: string;
  path: string;
  content: string;
}

export interface ContentFolder {
  name: string;
  files: ContentFile[];
  folders: ContentFolder[];
}

// ─── Auto-import ALL .md files under /content/ ────────────────────────────
// Vite resolves this at build time — every .md file is imported as a raw string.
const rawModules = import.meta.glob('/content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// ─── Build folder tree from flat path map ────────────────────────────────────

function buildFolderTree(modules: Record<string, string>): ContentFolder {
  const root: ContentFolder = {
    name: 'content',
    files: [],
    folders: [],
  };

  // Sort paths for consistent ordering
  const paths = Object.keys(modules).sort((a, b) => a.localeCompare(b));

  for (const fullPath of paths) {
    const content = modules[fullPath];
    // Strip the leading '/content/' prefix to get relative path
    const relativePath = fullPath.replace(/^\/content\//, '');
    const segments = relativePath.split('/');
    const fileName = segments[segments.length - 1];
    const folderSegments = segments.slice(0, -1);

    // Navigate/create folder hierarchy
    let current = root;
    for (const segment of folderSegments) {
      let existing = current.folders.find((f) => f.name === segment);
      if (!existing) {
        existing = { name: segment, files: [], folders: [] };
        current.folders.push(existing);
      }
      current = existing;
    }

    // Add file to current folder
    current.files.push({
      name: fileName,
      path: relativePath,
      content: typeof content === 'string' ? content : String(content),
    });
  }

  // Sort folders and files within each level
  sortFolder(root);

  return root;
}

function sortFolder(folder: ContentFolder): void {
  // Sort folders alphabetically
  folder.folders.sort((a, b) => a.name.localeCompare(b.name));
  // Sort files: README.md first, then alphabetically
  folder.files.sort((a, b) => {
    if (a.name === 'README.md') return -1;
    if (b.name === 'README.md') return 1;
    return a.name.localeCompare(b.name);
  });
  // Recurse
  for (const subfolder of folder.folders) {
    sortFolder(subfolder);
  }
}

// ─── Export ──────────────────────────────────────────────────────────────────

export const CONTENT_DATA = buildFolderTree(rawModules);

// Calculate total file count
function countFiles(folder: ContentFolder): number {
  let count = folder.files.length;
  for (const subfolder of folder.folders) {
    count += countFiles(subfolder);
  }
  return count;
}

export const CONTENT_TOTAL_FILES = countFiles(CONTENT_DATA);
