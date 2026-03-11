/**
 * FileBrowserShell — Shared folder tree + markdown viewer component.
 *
 * Used by both GuidelinesBrowser and ContentBrowser.
 * Provides: file tree with search, markdown rendering with internal link handling,
 * breadcrumb header, copy-path button.
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  FileText, Folder, FolderOpen, ChevronRight, ChevronDown,
  Search, X, Copy, Check, BookOpen,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DevToolHero, type HeroStat } from './DevToolHero';
import { DevRelatedTools, type RelatedTool } from './DevRelatedTools';

// ─── Generic types ───────────────────────────────────────────────────────────

export interface BrowserFile {
  name: string;
  path: string;
  content: string;
}

export interface BrowserFolder {
  name: string;
  files: BrowserFile[];
  folders: BrowserFolder[];
}

interface FileBrowserShellProps {
  /** Root folder data */
  data: BrowserFolder;
  /** Total file count for stats */
  totalFiles: number;
  /** Path prefix shown in breadcrumbs (e.g. "/guidelines/") */
  pathPrefix: string;
  /** Prefix used for resolving internal markdown links */
  internalLinkPrefix: string;
  /** Default file to show on mount (relative path) */
  defaultFile?: string;
  /** Folders expanded by default (by name; "root" = top-level) */
  defaultExpanded?: string[];
  /** Hero section config */
  hero: {
    icon: React.FC<{ size?: number; className?: string }>;
    iconColor: string;
    title: string;
    description: string;
    stats?: HeroStat[];
    badge?: string;
  };
  /** Related dev tools for bottom section */
  relatedTools?: RelatedTool[];
  /** Locale for i18n */
  locale?: 'af' | 'en';
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Flatten all files from a folder tree */
function flattenFiles(folder: BrowserFolder, prefix = ''): BrowserFile[] {
  const result: BrowserFile[] = [];
  for (const file of folder.files) {
    result.push(file);
  }
  for (const sub of folder.folders) {
    result.push(...flattenFiles(sub, `${prefix}${sub.name}/`));
  }
  return result;
}

/** Collect all folder names (for expand tracking) */
function collectFolderNames(folder: BrowserFolder): string[] {
  const names: string[] = [folder.name];
  for (const sub of folder.folders) {
    names.push(...collectFolderNames(sub));
  }
  return names;
}

// ─── File Tree Item ──────────────────────────────────────────────────────────

const FolderItem: React.FC<{
  folder: BrowserFolder;
  depth: number;
  expanded: Set<string>;
  toggleFolder: (name: string) => void;
  selectedPath: string;
  onSelectFile: (file: BrowserFile) => void;
  searchQuery: string;
}> = ({ folder, depth, expanded, toggleFolder, selectedPath, onSelectFile, searchQuery }) => {
  const isExpanded = expanded.has(folder.name);
  const folderKey = folder.name;

  // Filter visibility based on search
  const hasMatchingFiles = useMemo(() => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const allFiles = flattenFiles(folder);
    return allFiles.some(f => f.name.toLowerCase().includes(q) || f.path.toLowerCase().includes(q));
  }, [folder, searchQuery]);

  if (!hasMatchingFiles) return null;

  return (
    <div>
      <button
        onClick={() => toggleFolder(folderKey)}
        className="w-full flex items-center gap-1.5 py-1.5 px-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {isExpanded ? <ChevronDown size={14} className="shrink-0 text-gray-400" /> : <ChevronRight size={14} className="shrink-0 text-gray-400" />}
        {isExpanded ? <FolderOpen size={14} className="shrink-0 text-amber-500" /> : <Folder size={14} className="shrink-0 text-amber-500" />}
        <span className="truncate font-medium">{folder.name}</span>
        <span className="ml-auto text-xs text-gray-400">{flattenFiles(folder).length}</span>
      </button>

      {isExpanded && (
        <div>
          {folder.folders.map((sub) => (
            <FolderItem
              key={sub.name}
              folder={sub}
              depth={depth + 1}
              expanded={expanded}
              toggleFolder={toggleFolder}
              selectedPath={selectedPath}
              onSelectFile={onSelectFile}
              searchQuery={searchQuery}
            />
          ))}
          {folder.files
            .filter(f => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.path.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((file) => (
            <button
              key={file.path}
              onClick={() => onSelectFile(file)}
              className={`w-full flex items-center gap-1.5 py-1.5 px-2 text-sm rounded transition-colors ${
                selectedPath === file.path
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              style={{ paddingLeft: `${(depth + 1) * 16 + 8}px` }}
            >
              <FileText size={14} className="shrink-0" />
              <span className="truncate">{file.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const FileBrowserShell: React.FC<FileBrowserShellProps> = ({
  data,
  totalFiles,
  pathPrefix,
  internalLinkPrefix,
  defaultFile,
  defaultExpanded = ['root'],
  hero,
  relatedTools,
  locale = 'af',
}) => {
  const isAf = locale === 'af';

  // Find default file
  const allFiles = useMemo(() => flattenFiles(data), [data]);
  const defaultFileObj = useMemo(() => {
    if (!defaultFile) return allFiles[0] || null;
    return allFiles.find(f => f.path === defaultFile) || allFiles[0] || null;
  }, [allFiles, defaultFile]);

  const [selectedFile, setSelectedFile] = useState<BrowserFile | null>(defaultFileObj);
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set(defaultExpanded);
    // Also expand "root" folder name
    initial.add(data.name);
    return initial;
  });
  const [copied, setCopied] = useState(false);

  const toggleFolder = useCallback((name: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const handleSelectFile = useCallback((file: BrowserFile) => {
    setSelectedFile(file);
  }, []);

  const handleCopyPath = useCallback(() => {
    if (!selectedFile) return;
    const fullPath = `${pathPrefix}${selectedFile.path}`;
    navigator.clipboard.writeText(fullPath).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [selectedFile, pathPrefix]);

  // Handle internal markdown links (navigate to another file in the tree)
  const handleInternalLink = useCallback((href: string) => {
    // Strip prefix and find matching file
    let relativePath = href;
    if (href.startsWith(internalLinkPrefix)) {
      relativePath = href.slice(internalLinkPrefix.length);
    }
    // Remove leading slash
    relativePath = relativePath.replace(/^\//, '');
    const target = allFiles.find(f => f.path === relativePath || f.path.endsWith(relativePath));
    if (target) {
      setSelectedFile(target);
      // Expand parent folders
      const segments = target.path.split('/');
      setExpanded(prev => {
        const next = new Set(prev);
        next.add(data.name);
        let pathSoFar = '';
        for (let i = 0; i < segments.length - 1; i++) {
          pathSoFar += (pathSoFar ? '/' : '') + segments[i];
          next.add(segments[i]);
        }
        return next;
      });
    }
  }, [allFiles, internalLinkPrefix, data.name]);

  // Expand all / collapse all
  const handleExpandAll = useCallback(() => {
    setExpanded(new Set(collectFolderNames(data)));
  }, [data]);

  const handleCollapseAll = useCallback(() => {
    setExpanded(new Set([data.name]));
  }, [data.name]);

  // Breadcrumb segments for selected file
  const breadcrumbs = useMemo(() => {
    if (!selectedFile) return [];
    const parts = selectedFile.path.split('/');
    return parts;
  }, [selectedFile]);

  // Search-filtered file count
  const filteredCount = useMemo(() => {
    if (!searchQuery) return totalFiles;
    const q = searchQuery.toLowerCase();
    return allFiles.filter(f => f.name.toLowerCase().includes(q) || f.path.toLowerCase().includes(q)).length;
  }, [allFiles, searchQuery, totalFiles]);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <DevToolHero
        icon={hero.icon}
        iconColor={hero.iconColor}
        title={hero.title}
        description={hero.description}
        stats={hero.stats}
        badge={hero.badge}
      />

      {/* Main content: Sidebar + Viewer */}
      <div className="flex flex-col lg:flex-row gap-4 min-h-[600px]">
        {/* Sidebar — File Tree */}
        <div className="w-full lg:w-80 shrink-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col">
          {/* Search */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAf ? 'Soek lêers...' : 'Search files...'}
                className="w-full pl-9 pr-8 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            {/* Expand/Collapse + count */}
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{filteredCount} {isAf ? 'lêers' : 'files'}</span>
              <div className="flex gap-2">
                <button onClick={handleExpandAll} className="hover:text-gray-700 dark:hover:text-gray-200 underline">
                  {isAf ? 'Vou alles oop' : 'Expand all'}
                </button>
                <button onClick={handleCollapseAll} className="hover:text-gray-700 dark:hover:text-gray-200 underline">
                  {isAf ? 'Vou alles toe' : 'Collapse all'}
                </button>
              </div>
            </div>
          </div>

          {/* Tree */}
          <div className="flex-1 overflow-y-auto p-2">
            <FolderItem
              folder={data}
              depth={0}
              expanded={expanded}
              toggleFolder={toggleFolder}
              selectedPath={selectedFile?.path || ''}
              onSelectFile={handleSelectFile}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Viewer — Markdown content */}
        <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col">
          {/* Header bar */}
          {selectedFile && (
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 overflow-hidden">
                <BookOpen size={14} className="shrink-0 text-gray-400" />
                {breadcrumbs.map((segment, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <ChevronRight size={12} className="shrink-0 text-gray-300 dark:text-gray-600" />}
                    <span className={i === breadcrumbs.length - 1 ? 'font-medium text-gray-900 dark:text-gray-100 truncate' : 'truncate'}>
                      {segment}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <button
                onClick={handleCopyPath}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors shrink-0 ml-2"
                title={isAf ? 'Kopieer pad' : 'Copy path'}
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{copied ? (isAf ? 'Gekopieer!' : 'Copied!') : (isAf ? 'Kopieer pad' : 'Copy path')}</span>
              </button>
            </div>
          )}

          {/* Markdown body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            {selectedFile ? (
              <article className="md-prose max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, children, ...props }) => {
                      // Internal links — navigate within the file browser
                      if (href && (href.startsWith(internalLinkPrefix) || href.startsWith('/') || (!href.startsWith('http') && href.endsWith('.md')))) {
                        return (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleInternalLink(href);
                            }}
                            className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                            {...props}
                          >
                            {children}
                          </a>
                        );
                      }
                      // External links
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" {...props}>
                          {children}
                        </a>
                      );
                    },
                  }}
                >
                  {selectedFile.content}
                </ReactMarkdown>
              </article>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500">
                <FileText size={48} className="mb-4" />
                <p className="text-sm">{isAf ? 'Kies \'n lêer om te bekyk' : 'Select a file to view'}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Tools */}
      {relatedTools && relatedTools.length > 0 && (
        <DevRelatedTools tools={relatedTools} />
      )}
    </div>
  );
};

export default FileBrowserShell;
