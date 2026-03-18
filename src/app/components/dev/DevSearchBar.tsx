/**
 * DevSearchBar — Reusable search input for dev tool browser pages.
 *
 * Provides: Search icon, text input, clear (X) button.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: PatternBrowser, BlockStyleBrowser, TemplateBrowser, IconBrowser, etc.
 */
import React from 'react';
import { Search, X } from 'lucide-react';

interface DevSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function DevSearchBar({ value, onChange, placeholder = 'Search...', className = '' }: DevSearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
        style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}