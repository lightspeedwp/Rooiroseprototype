/**
 * DevEmptyState — Reusable "no results" message for dev tool browser pages.
 *
 * Provides: Icon + title + optional description + optional reset action.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: PatternBrowser, BlockStyleBrowser, TemplateBrowser, IconBrowser, etc.
 */
import React from 'react';
import { Search } from 'lucide-react';

interface DevEmptyStateProps {
  /** Title text (e.g. "No results found") */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional icon component (defaults to Search) */
  icon?: React.ElementType;
  /** Optional reset button label */
  resetLabel?: string;
  /** Optional reset callback */
  onReset?: () => void;
}

export function DevEmptyState({
  title,
  description,
  icon: Icon = Search,
  resetLabel,
  onReset,
}: DevEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-foreground mb-1" style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}>
        {title}
      </p>
      {description && (
        <p className="text-muted-foreground max-w-md" style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
          {description}
        </p>
      )}
      {resetLabel && onReset && (
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
}
