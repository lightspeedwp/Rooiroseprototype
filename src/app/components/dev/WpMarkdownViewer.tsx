/**
 * WpMarkdownViewer — Renders a WordPress guideline file as formatted markdown.
 *
 * Uses the same glob-based file loading as WpCodeViewer but renders content
 * with ReactMarkdown + remarkGfm using the md-prose stylesheet, matching
 * the FileBrowserShell rendering.
 *
 * Provides a raw/formatted toggle per GC-044.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, Code2, Eye, Clock, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { WpFileGlob } from '../../data/wpFileLoader';

interface WpMarkdownViewerProps {
  /** The glob map to load from (e.g., wpAllGuidelines) */
  glob: WpFileGlob;
  /** The filename or full glob key to load */
  filename: string;
  /** Whether filename is a full glob key path (default: false) */
  isFullPath?: boolean;
  /** Optional label displayed above the content */
  label?: string;
  /** Max height in pixels (default: 500) */
  maxHeight?: number;
  /** Optional className */
  className?: string;
  /** Locale for bilingual labels */
  locale?: 'af' | 'en';
}

export const WpMarkdownViewer: React.FC<WpMarkdownViewerProps> = ({
  glob,
  filename,
  isFullPath = false,
  label,
  maxHeight = 500,
  className = '',
  locale = 'en',
}) => {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');
  const cacheRef = useRef<Map<string, string>>(new Map());
  const isAf = locale === 'af';

  const loadFile = useCallback(async () => {
    if (!filename) {
      setError(isAf ? 'Geen riglyn gespesifiseer nie.' : 'No guideline specified.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

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
        if (loader) match = [filename, loader];
      } else {
        match = Object.entries(glob).find(([path]) =>
          path.endsWith('/' + filename) || path === filename
        );
      }

      if (!match) {
        setError(isAf ? `Leer nie gevind nie: ${filename}` : `File not found: ${filename}`);
        setLoading(false);
        return;
      }

      const fileContent = await match[1]();
      cacheRef.current.set(cacheKey, fileContent);
      setContent(fileContent);
    } catch (err) {
      setError(
        isAf
          ? `Kon nie laai nie: ${err instanceof Error ? err.message : 'Onbekende fout'}`
          : `Failed to load: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    } finally {
      setLoading(false);
    }
  }, [glob, filename, isFullPath, isAf]);

  useEffect(() => {
    loadFile();
  }, [loadFile]);

  // Loading state
  if (loading) {
    return (
      <div className={`flex items-center justify-center gap-2 py-8 text-sm text-gray-400 dark:text-white/30 ${className}`}>
        <Clock size={14} className="animate-spin" />
        {isAf ? 'Laai riglyn...' : 'Loading guideline...'}
      </div>
    );
  }

  // Error / not found
  if (error || !content) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <AlertCircle size={24} className="mx-auto text-gray-300 dark:text-white/10 mb-2" />
        <p className="text-gray-500 dark:text-white/40 text-sm">
          {error || (isAf ? 'Geen riglyn gevind nie.' : 'No guideline found.')}
        </p>
        {label && (
          <p className="text-[11px] text-gray-400 dark:text-white/25 mt-1 font-mono">
            {label}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Header bar with label + view toggle */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-white/30">
          <BookOpen size={10} />
          {label && <span className="font-mono">{label}</span>}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-0.5 bg-gray-100 dark:bg-white/5 rounded-md p-0.5">
          <button
            onClick={() => setViewMode('formatted')}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] transition-colors ${
              viewMode === 'formatted'
                ? 'bg-white dark:bg-white/10 text-gray-700 dark:text-white/80 shadow-sm'
                : 'text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50'
            }`}
            title={isAf ? 'Geformateer' : 'Formatted'}
          >
            <Eye size={10} />
            {isAf ? 'Geformateer' : 'Formatted'}
          </button>
          <button
            onClick={() => setViewMode('raw')}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] transition-colors ${
              viewMode === 'raw'
                ? 'bg-white dark:bg-white/10 text-gray-700 dark:text-white/80 shadow-sm'
                : 'text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50'
            }`}
            title={isAf ? 'Bronkode' : 'Raw'}
          >
            <Code2 size={10} />
            {isAf ? 'Bronkode' : 'Raw'}
          </button>
        </div>
      </div>

      {/* Content area */}
      <div
        className="overflow-y-auto rounded-lg border border-gray-200 dark:border-white/5"
        style={{ maxHeight }}
      >
        {viewMode === 'formatted' ? (
          <article className="md-prose md-prose max-w-none p-5">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto border border-gray-200 dark:border-white/10 rounded-lg my-4">
                    <table {...props} />
                  </div>
                ),
                a: ({ node, href, children, ...props }) => {
                  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                        {children}
                      </a>
                    );
                  }
                  return <a href={href} {...props}>{children}</a>;
                },
                pre: ({ node, children, ...props }) => (
                  <div className="code-block-wrapper">
                    <pre {...props}>{children}</pre>
                  </div>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        ) : (
          <pre className="text-xs text-gray-700 dark:text-white/60 whitespace-pre-wrap overflow-x-auto bg-gray-50 dark:bg-black/20 p-4 font-mono">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
};