/**
 * WpCodeViewer — Reusable component that loads a WordPress file from disk
 * via Vite's import.meta.glob and displays it with syntax highlighting
 * using the existing CodeBlock component.
 *
 * Features:
 * - Lazy loading with loading/error states
 * - Auto-detects language from file extension
 * - File path breadcrumb showing the actual WP path
 * - Copy-to-clipboard (via CodeBlock)
 * - Optional PHP header stripping for block markup view
 * - Caches loaded content to avoid re-fetching
 *
 * @since 2026-02-27
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FileCode, Loader2, AlertCircle, FolderOpen, ToggleLeft, ToggleRight, RefreshCw } from 'lucide-react';
import { CodeBlock, type CodeLanguage } from './CodeBlock';
import { type WpFileGlob, detectLanguage, getDisplayPath } from '../../data/wpFileLoader';

interface WpCodeViewerProps {
  /** The glob map to load from (e.g., wpPatterns, wpTemplates) */
  glob: WpFileGlob;
  /** The filename or full glob key to load */
  filename: string;
  /** Whether filename is a full glob key path (default: false — matches by filename suffix) */
  isFullPath?: boolean;
  /** Optional label displayed above the code block */
  label?: string;
  /** Max height in pixels (default: 400) */
  maxHeight?: number;
  /** Override language detection */
  language?: CodeLanguage;
  /** Whether the code block is editable (default: false) */
  editable?: boolean;
  /** Whether to show a "strip PHP header" toggle for PHP files (default: false) */
  showStripPhpHeader?: boolean;
  /** Optional className */
  className?: string;
  /** Font size override */
  fontSize?: string;
}

// ─── PHP header stripping ───────────────────────────────────────────────────

function stripPhpHeader(content: string): string {
  // Remove the PHP header block (<?php /** ... */ ?>) at the top of pattern files
  // This leaves just the block markup
  const stripped = content.replace(
    /^<\?php\s*\/\*\*[\s\S]*?\*\/\s*\?>\s*/,
    ''
  );
  return stripped.trim();
}

// ─── Component ──────────────────────────────────────────────────────────────

export const WpCodeViewer: React.FC<WpCodeViewerProps> = ({
  glob,
  filename,
  isFullPath = false,
  label,
  maxHeight = 400,
  language,
  editable = false,
  showStripPhpHeader = false,
  className = '',
  fontSize,
}) => {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stripped, setStripped] = useState(false);
  const [resolvedPath, setResolvedPath] = useState<string | null>(null);
  const cacheRef = useRef<Map<string, string>>(new Map());

  const loadFile = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Check cache
    const cacheKey = `${isFullPath ? 'full' : 'name'}:${filename}`;
    if (cacheRef.current.has(cacheKey)) {
      setContent(cacheRef.current.get(cacheKey)!);
      setLoading(false);
      return;
    }

    try {
      let match: [string, () => Promise<string>] | undefined;

      if (isFullPath) {
        const loader = glob[filename];
        if (loader) {
          match = [filename, loader];
        }
      } else {
        match = Object.entries(glob).find(([path]) =>
          path.endsWith('/' + filename) || path === filename
        );
      }

      if (!match) {
        setError(`File not found: ${filename}`);
        setLoading(false);
        return;
      }

      setResolvedPath(match[0]);
      const fileContent = await match[1]();
      cacheRef.current.set(cacheKey, fileContent);
      setContent(fileContent);
    } catch (err) {
      setError(`Failed to load: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }, [glob, filename, isFullPath]);

  useEffect(() => {
    loadFile();
  }, [loadFile]);

  // Determine language
  const detectedLang = language || detectLanguage(filename);
  const isPhp = detectedLang === 'php';
  const displayLang: CodeLanguage = stripped ? 'html' : detectedLang;

  // Display content
  const displayContent = content
    ? (stripped && isPhp ? stripPhpHeader(content) : content)
    : '';

  // ─── Loading state ─────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className={`rounded-lg border border-gray-200 dark:border-white/10 bg-[#1e1e2e] ${className}`}>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#181825] border-b border-white/5">
          {label && <span className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</span>}
        </div>
        <div className="flex items-center justify-center gap-2 py-8 text-gray-500">
          <Loader2 size={14} className="animate-spin" />
          <span className="text-xs">Loading file...</span>
        </div>
      </div>
    );
  }

  // ─── Error state ───────────────────────────────────────────────────────────

  if (error) {
    return (
      <div className={`rounded-lg border border-red-500/20 bg-red-500/5 ${className}`}>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border-b border-red-500/10">
          <AlertCircle size={12} className="text-red-400" />
          {label && <span className="text-[10px] text-red-400 uppercase tracking-wider">{label}</span>}
        </div>
        <div className="px-3 py-4">
          <p className="text-xs text-red-400">{error}</p>
          <button
            onClick={loadFile}
            className="mt-2 flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-300 transition-colors"
          >
            <RefreshCw size={10} />
            Retry
          </button>
        </div>
      </div>
    );
  }

  // ─── Success state ─────────────────────────────────────────────────────────

  return (
    <div className={className}>
      {/* File path breadcrumb */}
      {resolvedPath && (
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-white/30 font-mono truncate">
            <FolderOpen size={10} className="shrink-0" />
            <span className="truncate">{getDisplayPath(resolvedPath)}</span>
          </div>
          {showStripPhpHeader && isPhp && (
            <button
              onClick={() => setStripped(!stripped)}
              className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-white/30 hover:text-gray-300 transition-colors shrink-0"
              title={stripped ? 'Show full PHP file' : 'Strip PHP header (show block markup only)'}
            >
              {stripped ? <ToggleRight size={12} className="text-cyan-400" /> : <ToggleLeft size={12} />}
              <span>{stripped ? 'Block markup' : 'Full file'}</span>
            </button>
          )}
        </div>
      )}

      <CodeBlock
        code={displayContent}
        language={displayLang}
        label={label}
        maxHeight={maxHeight}
        editable={editable}
        showLineNumbers
        showCopy
        fontSize={fontSize}
      />
    </div>
  );
};

// ─── Inline WpCodeViewer (loads on mount without accordion) ─────────────────

interface WpCodeViewerInlineProps extends Omit<WpCodeViewerProps, 'glob' | 'filename' | 'isFullPath'> {
  /** Pre-loaded content string */
  content: string;
  /** File path for display */
  filePath?: string;
}

export const WpCodeViewerInline: React.FC<WpCodeViewerInlineProps> = ({
  content,
  filePath,
  label,
  maxHeight = 400,
  language,
  editable = false,
  showStripPhpHeader = false,
  className = '',
  fontSize,
}) => {
  const [stripped, setStripped] = useState(false);
  const detectedLang = language || (filePath ? detectLanguage(filePath) : 'text');
  const isPhp = detectedLang === 'php';
  const displayLang: CodeLanguage = stripped ? 'html' : detectedLang;
  const displayContent = stripped && isPhp ? stripPhpHeader(content) : content;

  return (
    <div className={className}>
      {filePath && (
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-white/30 font-mono truncate">
            <FolderOpen size={10} className="shrink-0" />
            <span className="truncate">{getDisplayPath(filePath)}</span>
          </div>
          {showStripPhpHeader && isPhp && (
            <button
              onClick={() => setStripped(!stripped)}
              className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-white/30 hover:text-gray-300 transition-colors shrink-0"
            >
              {stripped ? <ToggleRight size={12} className="text-cyan-400" /> : <ToggleLeft size={12} />}
              <span>{stripped ? 'Block markup' : 'Full file'}</span>
            </button>
          )}
        </div>
      )}
      <CodeBlock
        code={displayContent}
        language={displayLang}
        label={label}
        maxHeight={maxHeight}
        editable={editable}
        showLineNumbers
        showCopy
        fontSize={fontSize}
      />
    </div>
  );
};
