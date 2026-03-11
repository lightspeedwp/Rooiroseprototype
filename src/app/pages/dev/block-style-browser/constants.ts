import type { BlockStyleCategory } from '../../../data/blockStylesData';

// ─── Category Colors ────────────────────────────────────────────────────────
export const CAT_COLORS: Record<BlockStyleCategory, string> = {
  core: 'bg-blue-500/20 text-blue-300',
  typography: 'bg-purple-500/20 text-purple-300',
  color: 'bg-green-500/20 text-green-300',
  woocommerce: 'bg-amber-500/20 text-amber-300',
  'third-party': 'bg-pink-500/20 text-pink-300',
};

// ─── Preset Type Labels ─────────────────────────────────────────────────────
export const PRESET_TYPE_LABELS: Record<string, { en: string; af: string; color: string }> = {
  color: { en: 'color', af: 'kleur', color: 'text-blue-400' },
  'font-size': { en: 'font-size', af: 'lettergrootte', color: 'text-purple-400' },
  'font-family': { en: 'font-family', af: 'lettergroep', color: 'text-pink-400' },
  spacing: { en: 'spacing', af: 'spasiering', color: 'text-green-400' },
  shadow: { en: 'shadow', af: 'skaduwee', color: 'text-gray-400' },
  'border-radius': { en: 'border-radius', af: 'ronding', color: 'text-amber-400' },
  'border-width': { en: 'border-width', af: 'rand', color: 'text-red-400' },
  other: { en: 'other', af: 'ander', color: 'text-gray-500' },
};

// ─── Preset Category Slugs (for linking to PresetsBrowser) ─────────────────
export const PRESET_CATEGORY_SLUGS: Record<string, string> = {
  color: 'kleure',
  'font-size': 'lettergroottes',
  'font-family': 'tipografie-voorinstellings',
  spacing: 'spasiering',
  shadow: 'skaduwees',
  'border-radius': 'rondings',
  'border-width': 'rande',
};
