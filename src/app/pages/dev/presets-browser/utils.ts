import React, { useState } from 'react';
import type { TabSlugMap } from '../../../hooks/useTabRoute';
import type { PresetCategory } from '../../../data/themeJsonPresetsData';

// ─── Copy Helper Hook ────────────────────────────────────────────────────────

export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };
  return { copied, copy };
}

// ─── CSS Parser ──────────────────────────────────────────────────────────────

/**
 * Parse a CSS string like "font-variation-settings: 'GRAD' -50; letter-spacing: -0.24px;"
 * into a React CSSProperties object.
 */
export function parseCssString(css: string): React.CSSProperties {
  if (!css) return {};
  const result: Record<string, string> = {};
  const declarations = css.split(';').filter(d => d.trim());
  for (const decl of declarations) {
    const [prop, value] = decl.split(':').map(s => s.trim());
    if (prop && value) {
      // Convert kebab-case to camelCase (e.g., letter-spacing → letterSpacing)
      const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelProp] = value;
    }
  }
  return result as React.CSSProperties;
}

// ─── Tab Slug Map ────────────────────────────────────────────────────────────

export const PRESETS_TAB_SLUGS: TabSlugMap<PresetCategory> = {
  typographyPresets: 'tipografie',
  colors: 'kleure',
  fontSizes: 'lettergroottes',
  spacing: 'spasiering',
  shadows: 'skaduwees',
  borderRadius: 'rondings',
  borderWidth: 'rande',
  aspectRatios: 'aspekverhoudings',
  guidelines: 'riglyne',
};
