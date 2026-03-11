/**
 * DevFilterBar — Reusable horizontal filter pill bar for dev tool browser pages.
 *
 * Provides: "All" button + filter pills with active state, counts.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: PatternBrowser, BlockStyleBrowser, TemplateBrowser, etc.
 */
import React from 'react';

interface FilterOption {
  key: string;
  label: string;
  count?: number;
  color?: string;
}

interface DevFilterBarProps {
  /** List of filter options */
  options: FilterOption[];
  /** Currently active filter key (use 'all' for no filter) */
  active: string;
  /** Callback when a filter is selected */
  onSelect: (key: string) => void;
  /** Label for the "All" button (defaults to "All") */
  allLabel?: string;
  /** Total count for the "All" button */
  allCount?: number;
  /** Additional className for the container */
  className?: string;
}

export function DevFilterBar({
  options,
  active,
  onSelect,
  allLabel = 'All',
  allCount,
  className = '',
}: DevFilterBarProps) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
    >
      <button
        onClick={() => onSelect('all')}
        className={`px-3 py-1.5 rounded-full border transition-colors ${
          active === 'all'
            ? 'bg-foreground text-background border-foreground'
            : 'bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/50'
        }`}
      >
        {allLabel}
        {allCount !== undefined && (
          <span className="ml-1 opacity-70">({allCount})</span>
        )}
      </button>
      {options.map((opt) => (
        <button
          key={opt.key}
          onClick={() => onSelect(opt.key)}
          className={`px-3 py-1.5 rounded-full border transition-colors ${
            active === opt.key
              ? 'bg-foreground text-background border-foreground'
              : `bg-background border-border hover:text-foreground hover:border-foreground/50 ${opt.color || 'text-muted-foreground'}`
          }`}
        >
          {opt.label}
          {opt.count !== undefined && (
            <span className="ml-1 opacity-70">({opt.count})</span>
          )}
        </button>
      ))}
    </div>
  );
}
