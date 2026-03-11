/**
 * DevStatsBar — Reusable "Showing X of Y" summary bar for dev tool browser pages.
 *
 * Provides: Filtered count + total count + optional stat badges.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: PatternBrowser, BlockStyleBrowser, TemplateBrowser, IconBrowser, etc.
 */
import React from 'react';

interface StatBadge {
  label: string;
  value: number | string;
  color?: string;
}

interface DevStatsBarProps {
  /** Number of currently filtered/visible items */
  filtered: number;
  /** Total number of items */
  total: number;
  /** Label for the items (e.g. "patterns", "styles", "templates") */
  itemLabel: string;
  /** Optional additional stat badges */
  badges?: StatBadge[];
  /** Additional className */
  className?: string;
}

export function DevStatsBar({
  filtered,
  total,
  itemLabel,
  badges,
  className = '',
}: DevStatsBarProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 border border-border ${className}`}
      style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
    >
      <span className="text-muted-foreground">
        {filtered === total ? (
          <>{total} {itemLabel}</>
        ) : (
          <>Showing <span className="text-foreground">{filtered}</span> of {total} {itemLabel}</>
        )}
      </span>
      {badges && badges.length > 0 && (
        <>
          <span className="text-border">|</span>
          {badges.map((badge, i) => (
            <span key={i} className={`inline-flex items-center gap-1 ${badge.color || 'text-muted-foreground'}`}>
              <span>{badge.label}:</span>
              <span className="text-foreground">{badge.value}</span>
            </span>
          ))}
        </>
      )}
    </div>
  );
}
