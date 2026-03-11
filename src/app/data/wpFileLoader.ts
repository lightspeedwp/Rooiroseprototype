/**
 * WordPress File Loader
 *
 * Uses Vite's import.meta.glob with ?raw to lazy-load WordPress theme and plugin
 * files directly from /wordpress-export/ at build time. Each file is fetched on
 * demand when the user opens it in a dev tool browser — no bundle bloat.
 *
 * Every rebuild automatically picks up file changes from disk.
 *
 * @module wpFileLoader
 * @since 2026-02-27
 */

// ─── Theme: Patterns (PHP) ──────────────────────────────────────────────────
export const wpPatterns = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/patterns/**/*.php',
  { query: '?raw', import: 'default' }
);

// ─── Guidelines: Canonical Documentation (Markdown) ────────────────────────
// Broad glob for future guideline tabs beyond pattern-only docs.
export const wpAllGuidelines = import.meta.glob<string>(
  '/guidelines/**/*.md',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Section Styles (JSON) ───────────────────────────────────────────
export const wpSectionStyles = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/styles/sections/*.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Block Styles (nested JSON) ──────────────────────────────────────
export const wpBlockStyles = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/styles/blocks/**/*.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Color Presets (JSON) ────────────────────────────────────────────
export const wpColorPresets = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/styles/colors/*.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Typography Presets (JSON) ───────────────────────────────────────
export const wpTypographyPresets = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/styles/typography/*.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Global Style Variations (top-level JSON) ────────────────────────
export const wpGlobalVariations = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/styles/*.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Templates (HTML) ────────────────────────────────────────────────
export const wpTemplates = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/templates/*.html',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Template Parts (HTML) ───────────────────────────────────────────
export const wpParts = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/parts/*.html',
  { query: '?raw', import: 'default' }
);

// ─── Theme: Inc (PHP) ───────────────────────────────────────────────────────
export const wpThemeInc = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/inc/*.php',
  { query: '?raw', import: 'default' }
);

// ─── Theme: theme.json ──────────────────────────────────────────────────────
export const wpThemeJson = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/theme.json',
  { query: '?raw', import: 'default' }
);

// ─── Theme: functions.php ──────────────────────────────────────────────────
export const wpThemeMain = import.meta.glob<string>(
  '/wordpress-export/themes/die-papier-theme/functions.php',
  { query: '?raw', import: 'default' }
);

// ─── Plugin: Inc (PHP) ──────────────────────────────────────────────────────
export const wpPluginInc = import.meta.glob<string>(
  '/wordpress-export/plugins/die-papier-blocks/inc/*.php',
  { query: '?raw', import: 'default' }
);

// ─── Plugin: Block Source (all files per block) ─────────────────────────────
export const wpBlockSource = import.meta.glob<string>(
  '/wordpress-export/plugins/die-papier-blocks/src/blocks/**/*',
  { query: '?raw', import: 'default' }
);

// ─── Plugin: Main plugin file ───────────────────────────────────────────────
export const wpPluginMain = import.meta.glob<string>(
  '/wordpress-export/plugins/die-papier-blocks/die-papier-blocks.php',
  { query: '?raw', import: 'default' }
);

// ─── Plugin: webpack config ─────────────────────────────────────────────────
export const wpPluginWebpack = import.meta.glob<string>(
  '/wordpress-export/plugins/die-papier-blocks/webpack.config.js',
  { query: '?raw', import: 'default' }
);

// ─── Types ──────────────────────────────────────────────────────────────────

export type WpFileGlob = Record<string, () => Promise<string>>;

// ─── Helper: resolve a glob key to content ──────────────────────────────────

/**
 * Load a file from a glob map by matching the end of the path.
 * Returns null if not found.
 *
 * @example
 * const content = await loadWpFile(wpPatterns, 'page-home.php');
 */
export async function loadWpFile(
  glob: WpFileGlob,
  filename: string
): Promise<string | null> {
  const match = Object.entries(glob).find(([path]) =>
    path.endsWith('/' + filename) || path.endsWith(filename)
  );
  if (!match) return null;
  try {
    return await match[1]();
  } catch {
    // Dynamic import may fail in preview environments (e.g. PHP files)
    return null;
  }
}

/**
 * Load a file by exact glob key path.
 */
export async function loadWpFileByPath(
  glob: WpFileGlob,
  fullPath: string
): Promise<string | null> {
  const loader = glob[fullPath];
  if (!loader) return null;
  try {
    return await loader();
  } catch {
    return null;
  }
}

/**
 * Get all filenames from a glob map.
 */
export function getWpFileNames(glob: WpFileGlob): string[] {
  return Object.keys(glob).map(path => {
    const parts = path.split('/');
    return parts[parts.length - 1];
  });
}

/**
 * Get all full paths from a glob map.
 */
export function getWpFilePaths(glob: WpFileGlob): string[] {
  return Object.keys(glob);
}

/**
 * Detect language from file extension for CodeBlock.
 */
export function detectLanguage(filename: string): 'json' | 'php' | 'css' | 'html' | 'javascript' | 'markdown' | 'text' {
  const ext = filename.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'php': return 'php';
    case 'json': return 'json';
    case 'html': return 'html';
    case 'css':
    case 'scss': return 'css';
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx': return 'javascript';
    case 'md':
    case 'markdown': return 'markdown';
    default: return 'text';
  }
}

/**
 * Load and parse a JSON file from a glob map.
 * Returns null if file not found or parsing fails.
 */
export async function loadWpJsonFile<T = Record<string, unknown>>(
  glob: WpFileGlob,
  filename: string
): Promise<T | null> {
  const raw = await loadWpFile(glob, filename);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Load all JSON files from a glob map and return as a parsed map.
 * Keys are full paths (e.g., '/wordpress-export/themes/die-papier-theme/styles/blocks/button/outline.json'),
 * values are parsed JSON objects.
 * 
 * PERFORMANCE: Sequential loading to avoid overwhelming the message port in sandbox environments (BSP-018).
 */
export async function loadAllWpJsonFiles<T = Record<string, unknown>>(
  glob: WpFileGlob
): Promise<Map<string, T>> {
  const entries = Object.entries(glob);
  const results = new Map<string, T>();
  
  // Load files in series to avoid overwhelming the iframe message bridge
  for (const [path, loader] of entries) {
    try {
      const raw = await loader();
      results.set(path, JSON.parse(raw) as T);
    } catch (e) {
      console.warn(`Failed to load/parse WP JSON file: ${path}`, e);
    }
  }
  
  return results;
}

/**
 * Extract the short display path from a full glob key.
 * e.g. "/wordpress-export/themes/die-papier-theme/patterns/page-home.php"
 *   → "themes/die-papier-theme/patterns/page-home.php"
 */
export function getDisplayPath(fullPath: string): string {
  return fullPath.replace(/^\/wordpress-export\//, '');
}

// ─── Disk File Analysis Utilities ───────────────────────────────────────────

export interface DiskFileStats {
  found: boolean;
  lineCount: number;
  /** Count of `<!-- wp:` block references (HTML files) */
  blockCount: number;
  /** Count of `<!-- wp:template-part` references */
  templatePartCount: number;
  /** Count of `<!-- wp:pattern` references */
  patternRefCount: number;
  /** Unique block type names found */
  blockTypes: string[];
  /** Count of PHP function definitions (PHP files) */
  functionCount: number;
  /** PHP function names found */
  functionNames: string[];
  /** Count of WordPress hook calls (add_action/add_filter) */
  hookCount: number;
  /** File size in bytes (approximate from string length) */
  sizeBytes: number;
}

const EMPTY_STATS: DiskFileStats = {
  found: false, lineCount: 0, blockCount: 0, templatePartCount: 0,
  patternRefCount: 0, blockTypes: [], functionCount: 0, functionNames: [],
  hookCount: 0, sizeBytes: 0,
};

/**
 * Analyse a raw file string for block markup, functions, hooks, etc.
 */
export function analyseFileContent(raw: string): Omit<DiskFileStats, 'found'> {
  const lines = raw.split('\n');
  const lineCount = lines.length;
  const sizeBytes = raw.length;

  // Block analysis (HTML/block markup)
  const blockMatches = raw.match(/<!-- wp:([a-z0-9-]+\/)?([a-z0-9-]+)/g) || [];
  const blockCount = blockMatches.length;
  const blockTypeSet = new Set<string>();
  for (const m of blockMatches) {
    const type = m.replace('<!-- wp:', '').split(/\s/)[0];
    blockTypeSet.add(type);
  }
  const blockTypes = Array.from(blockTypeSet).sort();
  const templatePartCount = (raw.match(/<!-- wp:template-part/g) || []).length;
  const patternRefCount = (raw.match(/<!-- wp:pattern/g) || []).length;

  // PHP analysis
  const fnMatches = raw.match(/function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g) || [];
  const functionCount = fnMatches.length;
  const functionNames = fnMatches.map(m => {
    const name = m.match(/function\s+([a-zA-Z_][a-zA-Z0-9_]*)/);
    return name ? name[1] : '';
  }).filter(Boolean);
  const hookCount = (raw.match(/add_(action|filter)\s*\(/g) || []).length;

  return { lineCount, blockCount, templatePartCount, patternRefCount, blockTypes, functionCount, functionNames, hookCount, sizeBytes };
}

/**
 * Load a file from a glob and return its disk stats.
 */
export async function loadDiskFileStats(
  glob: WpFileGlob,
  filename: string
): Promise<DiskFileStats> {
  const raw = await loadWpFile(glob, filename);
  if (!raw) return { ...EMPTY_STATS };
  return { found: true, ...analyseFileContent(raw) };
}