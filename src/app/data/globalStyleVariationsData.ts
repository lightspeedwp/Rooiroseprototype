/**
 * Global Style Variations Data — Browser for color/typography/global style presets.
 * Source: /wordpress-export/themes/die-papier-theme/styles/
 * Used by: Dev tools — Global Style Variations browser (planned)
 *
 * Updated: 2026-03-02 (OllieWP slug alignment)
 */

export interface GlobalStyleVariation {
  id: string;
  /** Filename without extension */
  slug: string;
  /** Display name */
  name: string;
  /** Afrikaans label */
  labelAf: string;
  /** Category */
  category: 'color' | 'typography' | 'global';
  /** File path relative to theme root */
  filePath: string;
  /** Description */
  description: string;
  /** Key changes from default */
  keyChanges: string[];
}

// ─── Global Style Variations ────────────────────────────────────────────────
// Note: These represent potential variations. Verify presence on disk before linking.

export const GLOBAL_STYLE_VARIATIONS: GlobalStyleVariation[] = [
  // ─── Global Variations ────────────────────
  {
    id: 'dark',
    slug: 'dark',
    name: 'Dark Mode',
    labelAf: 'Donkermodus',
    category: 'global',
    filePath: 'styles/dark.json',
    description: 'Dark theme variation with secondary/charcoal backgrounds and light text.',
    keyChanges: [
      'Base background → #0F1923',
      'Surface (tertiary) → #162233',
      'Text (main) → #E8E8ED',
      'Muted text → #9CA3AF',
      'Card backgrounds → #1A2D45',
    ],
  },
  {
    id: 'serif',
    slug: 'serif',
    name: 'Serif Override',
    labelAf: 'Serif Oorheersing',
    category: 'global',
    filePath: 'styles/serif.json',
    description: 'Typography variation using Roboto Serif for body text instead of Inter.',
    keyChanges: [
      'Body font-family → Roboto Serif',
      'H5/H6 font-family → Roboto Serif (instead of Inter)',
      'Button font-family → Roboto Serif',
      'All text uses serif typeface',
    ],
  },

  // ─── Color Presets (Consolidated in styles/presets/colors.json) ─────────────
  {
    id: 'color-primary-palette',
    slug: 'primary-palette',
    name: 'Primary Color Palette',
    labelAf: 'Primêre Kleurpalet',
    category: 'color',
    filePath: 'styles/presets/colors.json',
    description: 'Default brand palette with primary red (#E82C27) and secondary navy (#172134).',
    keyChanges: ['Primary → #E82C27', 'Primary alt → #C41F20', 'Secondary → #172134', 'Secondary accent → #1A3A5F'],
  },

  // ─── Typography Presets (Consolidated in styles/presets/typography.json) ────
  {
    id: 'typo-default',
    slug: 'default',
    name: 'Default Typography',
    labelAf: 'Verstek Tipografie',
    category: 'typography',
    filePath: 'styles/presets/typography.json',
    description: 'Default typography: Inter for body/UI, Roboto Serif for headings.',
    keyChanges: ['Body → Inter', 'Headings → Roboto Serif', '8-step fluid size scale'],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getVariationsByCategory(category: GlobalStyleVariation['category']): GlobalStyleVariation[] {
  return GLOBAL_STYLE_VARIATIONS.filter(v => v.category === category);
}

export const VARIATION_CATEGORIES: { key: GlobalStyleVariation['category'] | 'all'; labelAf: string; labelEn: string; count: number }[] = [
  { key: 'all', labelAf: 'Alles', labelEn: 'All', count: GLOBAL_STYLE_VARIATIONS.length },
  { key: 'global', labelAf: 'Globaal', labelEn: 'Global', count: GLOBAL_STYLE_VARIATIONS.filter(v => v.category === 'global').length },
  { key: 'color', labelAf: 'Kleur', labelEn: 'Color', count: GLOBAL_STYLE_VARIATIONS.filter(v => v.category === 'color').length },
  { key: 'typography', labelAf: 'Tipografie', labelEn: 'Typography', count: GLOBAL_STYLE_VARIATIONS.filter(v => v.category === 'typography').length },
];