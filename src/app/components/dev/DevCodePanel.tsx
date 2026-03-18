/**
 * DevCodePanel — Reusable code preview panel for dev tool browser pages.
 *
 * Provides: Language label + copy button + scrollable <pre> block.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: BlockStyleBrowser, PresetsBrowser, ThemeJsonViewer, etc.
 */
import React from 'react';
import { DevCopyButton } from './DevCopyButton';

interface DevCodePanelProps {
  /** The code content to display */
  code: string;
  /** Language label (e.g. "JSON", "PHP", "CSS") */
  language?: string;
  /** Optional title above the code block */
  title?: string;
  /** Max height for scrollable area */
  maxHeight?: string;
  /** Additional className */
  className?: string;
}

export function DevCodePanel({
  code,
  language = 'JSON',
  title,
  maxHeight = '400px',
  className = '',
}: DevCodePanelProps) {
  return (
    <div className={`rounded-lg border border-border overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          {title && (
            <span className="text-foreground" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
              {title}
            </span>
          )}
          <span
            className="px-2 py-0.5 rounded text-muted-foreground bg-muted"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            {language}
          </span>
        </div>
        <DevCopyButton text={code} toastMessage={`${language} copied!`} />
      </div>
      {/* Code block */}
      <div className="overflow-auto" style={{ maxHeight }}>
        <pre className="p-4 bg-[#0f172a] text-[#e2e8f0]" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace", fontSize: '0.8125rem', lineHeight: '1.7', whiteSpace: 'pre', margin: 0 }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}