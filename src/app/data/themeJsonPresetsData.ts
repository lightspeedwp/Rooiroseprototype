/**
 * themeJsonPresetsData.ts — Structured preset registry derived from theme.json + style.css.
 *
 * CANONICAL SOURCE: /wordpress-export/themes/die-papier-theme/theme.json
 *                   /wordpress-export/themes/die-papier-theme/style.css
 *
 * Used by: PresetsBrowser (/ontwikkelaar/voorinstellings)
 * Cross-linked from: BlockStyleBrowser, ThemeJsonViewer, DesignSystem
 *
 * Updated to align with OllieWP slug system (2026-03-02).
 */

import { DIE_PAPIER_THEME_JSON } from './themeJsonData';

// ─── Shared Types ────────────────────────────────────────────────────────────

export type PresetCategory =
  | 'colors'
  | 'fontSizes'
  | 'spacing'
  | 'shadows'
  | 'borderRadius'
  | 'borderWidth'
  | 'aspectRatios'
  | 'typographyPresets'
  | 'guidelines';

export interface PresetEntry {
  slug: string;
  name: string;
  value: string;
  /** CSS variable: --wp--preset--{type}--{slug} */
  cssVariable: string;
  /** theme.json reference: var:preset|{type}|{slug} */
  themeJsonRef: string;
  /** Which block styles use this preset */
  usedInBlockStyles: string[];
  category: PresetCategory;
}

// ─── Color Presets ──────────────────────────────────────────────────────────

export interface ColorPreset extends PresetEntry {
  hex: string;
  /** Semantic role description */
  role: string;
  /** Tailwind equivalent class */
  tailwindClass: string;
  /** Color group for visual organization */
  group: 'brand' | 'neutral' | 'accent' | 'semantic';
  /** Dark mode paired color slug (if applicable) */
  darkPair?: string;
}

const COLOR_ROLES: Record<string, { role: string; group: ColorPreset['group']; tailwind: string; darkPair?: string }> = {
  'primary':          { role: 'Primary brand color — buttons, links, CTAs', group: 'brand', tailwind: 'bg-primary text-primary' },
  'primary-alt':      { role: 'Primary hover/active state', group: 'brand', tailwind: 'bg-primary-hover text-primary-hover' },
  'secondary':        { role: 'Dark brand background — headers, hero sections', group: 'brand', tailwind: 'bg-secondary text-secondary', darkPair: 'base' },
  'secondary-accent': { role: 'Lighter navy for gradients and accents', group: 'brand', tailwind: 'bg-secondary-accent text-secondary-accent' },
  'base':             { role: 'Base white background', group: 'neutral', tailwind: 'bg-white', darkPair: 'secondary' },
  'tertiary':         { role: 'Surface / secondary background (cards, sections)', group: 'neutral', tailwind: 'bg-gray-100', darkPair: 'secondary-accent' },
  'border-light':     { role: 'Border / divider color', group: 'neutral', tailwind: 'bg-gray-300' },
  'main':             { role: 'Primary text color', group: 'neutral', tailwind: 'text-[#2c2c2c]', darkPair: 'base' },
  'main-accent':      { role: 'Muted / secondary text', group: 'neutral', tailwind: 'text-muted-foreground' },
  'accent':           { role: 'Accessible link color (WCAG AA on white)', group: 'semantic', tailwind: 'text-accent' },
};

const COLOR_BLOCK_STYLE_USAGE: Record<string, string[]> = {
  'primary':          ['button-default', 'separator-brand-line', 'product-button-primary', 'product-price-accent'],
  'primary-alt':      ['button-default', 'product-button-primary'],
  'secondary':        ['group-navy-background', 'button-dark', 'heading-display'],
  'secondary-accent': ['group-navy-background'],
  'base':             ['button-default', 'button-outline', 'group-card', 'group-newsletter', 'button-dark', 'button-light'],
  'tertiary':         ['group-card', 'group-muted-background', 'button-tint', 'button-soft', 'paragraph-badge', 'separator-wide'],
  'border-light':     [],
  'main':             ['heading-section-title', 'paragraph-badge'],
  'main-accent':      ['heading-subtitle', 'paragraph-lead'],
  'accent':           [],
};

export const COLOR_PRESETS: ColorPreset[] = DIE_PAPIER_THEME_JSON.settings.color.palette.map(c => {
  const meta = COLOR_ROLES[c.slug] || { role: 'Custom color', group: 'neutral' as const, tailwind: '' };
  return {
    slug: c.slug,
    name: c.name,
    value: c.color,
    hex: c.color,
    cssVariable: `--wp--preset--color--${c.slug}`,
    themeJsonRef: `var:preset|color|${c.slug}`,
    usedInBlockStyles: COLOR_BLOCK_STYLE_USAGE[c.slug] || [],
    category: 'colors',
    role: meta.role,
    tailwindClass: meta.tailwind,
    group: meta.group,
    darkPair: meta.darkPair,
  };
});

// ─── Font Size Presets ──────────────────────────────────────────────────────

export interface FontSizePreset extends PresetEntry {
  /** Computed px value at 1rem = 16px */
  pxApprox: string;
  /** Font family typically used with this size */
  typicalFamily: string;
  /** Heading level typically using this size */
  typicalUsage: string;
}

const FONT_SIZE_USAGE: Record<string, { px: string; family: string; usage: string; blockStyles: string[] }> = {
  'x-small':   { px: '11px',   family: 'Inter',        usage: 'Badges, fine print',       blockStyles: [] },
  'small':     { px: '14px',   family: 'Inter',        usage: 'Body small, metadata',     blockStyles: ['heading-section-title', 'heading-card-compact'] },
  'base':      { px: '16px',   family: 'Inter',        usage: 'Body default, H6',         blockStyles: ['heading-subtitle'] },
  'medium':    { px: '18px',   family: 'Inter',        usage: 'H5, lead paragraphs',      blockStyles: [] },
  'large':     { px: '20px',   family: 'Roboto Serif', usage: 'H4',                       blockStyles: [] },
  'x-large':   { px: '24px',   family: 'Roboto Serif', usage: 'H3',                       blockStyles: [] },
  'xx-large':  { px: '28-30px', family: 'Roboto Serif', usage: 'H2 (fluid)',              blockStyles: [] },
  'xxx-large': { px: '36-48px', family: 'Roboto Serif', usage: 'H1 (fluid)',              blockStyles: ['heading-display'] },
};

export const FONT_SIZE_PRESETS: FontSizePreset[] = DIE_PAPIER_THEME_JSON.settings.typography.fontSizes.map(fs => {
  const meta = FONT_SIZE_USAGE[fs.slug] || { px: '?', family: 'Inter', usage: 'Custom', blockStyles: [] };
  return {
    slug: fs.slug,
    name: fs.name,
    value: fs.size,
    cssVariable: `--wp--preset--font-size--${fs.slug}`,
    themeJsonRef: `var:preset|font-size|${fs.slug}`,
    usedInBlockStyles: meta.blockStyles,
    category: 'fontSizes',
    pxApprox: meta.px,
    typicalFamily: meta.family,
    typicalUsage: meta.usage,
  };
});

// ─── Spacing Presets ────────────────────────────────────────────────────────

export interface SpacingPreset extends PresetEntry {
  /** Computed px at 1rem = 16px */
  pxValue: number;
  /** Block styles / patterns that use this spacing slug */
  usedInPatterns: string[];
}

const SPACING_BLOCK_STYLE_USAGE: Record<string, { blockStyles: string[]; patterns: string[] }> = {
  'x-small': { blockStyles: ['button-default', 'button-outline'], patterns: ['section-breadcrumbs'] },
  'small':   { blockStyles: ['group-container-narrow', 'quote-pull-quote'], patterns: ['section-faq'] },
  'medium':  { blockStyles: ['button-default', 'button-outline', 'image-caption-overlay', 'quote-large-serif'], patterns: ['section-newsletter-cta'] },
  'large':   { blockStyles: ['group-section-muted'], patterns: ['section-pricing-table', 'section-team-grid'] },
  'x-large': { blockStyles: [], patterns: ['section-related-articles', 'section-sponsor-grid'] },
  'xx-large': { blockStyles: [], patterns: ['page-about', 'page-contact'] },
  'xxx-large': { blockStyles: [], patterns: ['page-home', 'page-subscribe'] },
};

export const SPACING_PRESETS: SpacingPreset[] = DIE_PAPIER_THEME_JSON.settings.spacing.spacingSizes.map(sp => {
  const remVal = sp.size.includes('clamp') ? 1.5 : parseFloat(sp.size); // Approximate
  const meta = SPACING_BLOCK_STYLE_USAGE[sp.slug] || { blockStyles: [], patterns: [] };
  return {
    slug: sp.slug,
    name: sp.name,
    value: sp.size,
    cssVariable: `--wp--preset--spacing--${sp.slug}`,
    themeJsonRef: `var:preset|spacing|${sp.slug}`,
    usedInBlockStyles: meta.blockStyles,
    category: 'spacing',
    pxValue: Math.round(remVal * 16),
    usedInPatterns: meta.patterns,
  };
});

// ─── Shadow Presets ─────────────────────────────────────────────────────────

export interface ShadowPreset extends PresetEntry {
  /** Elevation level description */
  elevation: string;
}

const SHADOW_ELEVATIONS: Record<string, { elevation: string; blockStyles: string[] }> = {
  '100': { elevation: 'Subtle — borders, minimal lift',          blockStyles: [] },
  '200': { elevation: 'Small — cards, buttons hover',            blockStyles: ['group-card', 'image-shadow'] },
  '300': { elevation: 'Medium — dropdowns, popovers',            blockStyles: [] },
  '400': { elevation: 'Large — modals, sticky headers',          blockStyles: [] },
  '500': { elevation: 'XL — floating elements, hero overlays',   blockStyles: [] },
  '600': { elevation: '2XL — maximum elevation, full overlays',  blockStyles: [] },
};

export const SHADOW_PRESETS: ShadowPreset[] = DIE_PAPIER_THEME_JSON.settings.shadow.presets.map(sh => {
  const meta = SHADOW_ELEVATIONS[sh.slug] || { elevation: 'Custom', blockStyles: [] };
  return {
    slug: sh.slug,
    name: sh.name,
    value: sh.shadow,
    cssVariable: `--wp--preset--shadow--${sh.slug}`,
    themeJsonRef: `var:preset|shadow|${sh.slug}`,
    usedInBlockStyles: meta.blockStyles,
    category: 'shadows',
    elevation: meta.elevation,
  };
});

// ─── Border Radius Presets (Custom tokens) ──────────────────────────────────

export interface BorderRadiusPreset extends PresetEntry {
  /** Computed px equivalent */
  pxApprox: string;
}

const RADIUS_BLOCK_STYLES: Record<string, string[]> = {
  '100': [],
  '200': ['button-default'],
  '300': [],
  '400': ['button-outline', 'group-card', 'group-newsletter', 'image-rounded', 'product-image-rounded'],
  '500': [],
  '600': [],
  '9999': ['paragraph-badge'],
};

export const BORDER_RADIUS_PRESETS: BorderRadiusPreset[] = Object.entries(
  DIE_PAPIER_THEME_JSON.settings.custom.borderRadius
).map(([slug, value]) => ({
  slug,
  name: `Radius ${slug}`,
  value,
  cssVariable: `--wp--custom--border-radius--${slug}`,
  themeJsonRef: `var:custom|border-radius|${slug}`,
  usedInBlockStyles: RADIUS_BLOCK_STYLES[slug] || [],
  category: 'borderRadius',
  pxApprox: value.includes('px') ? value : `${Math.round(parseFloat(value) * 16)}px`,
}));

// ─── Border Width Presets (Custom tokens) ───────────────────────────────────

export interface BorderWidthPreset extends PresetEntry {}

const WIDTH_BLOCK_STYLES: Record<string, string[]> = {
  '100': ['button-outline', 'quote-border-left', 'separator-brand-line'],
  '200': ['quote-border-left'],
  '300': [],
};

export const BORDER_WIDTH_PRESETS: BorderWidthPreset[] = Object.entries(
  DIE_PAPIER_THEME_JSON.settings.custom.borderWidth
).map(([slug, value]) => ({
  slug,
  name: `Width ${slug}`,
  value,
  cssVariable: `--wp--custom--border-width--${slug}`,
  themeJsonRef: `var:custom|border-width|${slug}`,
  usedInBlockStyles: WIDTH_BLOCK_STYLES[slug] || [],
  category: 'borderWidth',
}));

// ─── Aspect Ratio Presets (standard CSS values) ─────────────────────────────

export interface AspectRatioPreset extends PresetEntry {
  /** Display label for the ratio */
  ratioLabel: string;
  /** Common usage */
  usage: string;
}

export const ASPECT_RATIO_PRESETS: AspectRatioPreset[] = [
  { slug: '1-1',   name: '1:1 Square',     value: '1/1',   ratioLabel: '1:1',   usage: 'Avatars, team photos, icons',           cssVariable: 'aspect-ratio: 1/1',   themeJsonRef: 'N/A', usedInBlockStyles: [], category: 'aspectRatios' },
  { slug: '4-3',   name: '4:3 Standard',    value: '4/3',   ratioLabel: '4:3',   usage: 'Article thumbnails, card images',       cssVariable: 'aspect-ratio: 4/3',   themeJsonRef: 'N/A', usedInBlockStyles: [],                 category: 'aspectRatios' },
  { slug: '3-2',   name: '3:2 Photo',       value: '3/2',   ratioLabel: '3:2',   usage: 'Photography, featured images',          cssVariable: 'aspect-ratio: 3/2',   themeJsonRef: 'N/A', usedInBlockStyles: [],                 category: 'aspectRatios' },
  { slug: '16-9',  name: '16:9 Widescreen', value: '16/9',  ratioLabel: '16:9',  usage: 'Video embeds, hero sliders',            cssVariable: 'aspect-ratio: 16/9',  themeJsonRef: 'N/A', usedInBlockStyles: [],                 category: 'aspectRatios' },
  { slug: '21-9',  name: '21:9 Ultrawide',  value: '21/9',  ratioLabel: '21:9',  usage: 'Cinematic hero banners',                cssVariable: 'aspect-ratio: 21/9',  themeJsonRef: 'N/A', usedInBlockStyles: [],                 category: 'aspectRatios' },
  { slug: 'a4',    name: 'A4 Paper',        value: '210/297', ratioLabel: '210:297', usage: 'E-edition cover previews, PDF pages', cssVariable: 'aspect-ratio: 210/297', themeJsonRef: 'N/A', usedInBlockStyles: [], category: 'aspectRatios' },
];

// ─── Typography Presets (Style Variations) ──────────────────────────────────

export interface TypographyPresetElementStyle {
  fontFamily: string;
  fontSize?: string;
  fontWeight: string;
  textTransform?: string;
  css?: string;
}

export interface TypographyPreset {
  slug: string;
  title: string;
  titleAf: string;
  descriptionEn: string;
  descriptionAf: string;
  /** Is this the active/default preset? */
  isDefault: boolean;
  /** File path relative to theme root */
  filePath: string;
  /** Global body typography */
  bodyFontFamily: string;
  bodyLineHeight: string;
  /** Element-level overrides */
  elements: {
    h1: TypographyPresetElementStyle;
    h2: TypographyPresetElementStyle;
    h3: TypographyPresetElementStyle;
    h4: TypographyPresetElementStyle;
    h5: TypographyPresetElementStyle;
    h6: TypographyPresetElementStyle;
  };
  /** Full JSON for copy-to-clipboard */
  json: string;
  /** Key differences from default */
  differencesEn: string[];
  differencesAf: string[];
  /** Tags for search */
  tags: string[];
}

export const TYPOGRAPHY_PRESETS: TypographyPreset[] = [
  {
    slug: 'typography-preset-default',
    title: 'Default',
    titleAf: 'Standaard',
    descriptionEn: 'The production default: Roboto Serif headings (GRAD -50, narrow wdth 64) with Inter body text. This is what ships with the theme.',
    descriptionAf: 'Die produksie-standaard: Roboto Serif opskrifte (GRAD -50, smal wdth 64) met Inter lyfkopie. Dit is wat saam met die tema versend word.',
    isDefault: true,
    filePath: 'styles/presets/typography.json',
    bodyFontFamily: '"Inter", sans-serif',
    bodyLineHeight: '1.5',
    elements: {
      h1: { fontFamily: '"Roboto Serif", serif', fontSize: 'clamp(2.25rem, 1.92rem + 1.35vw, 3rem)', fontWeight: '400', css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px;" },
      h2: { fontFamily: '"Roboto Serif", serif', fontSize: 'clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)', fontWeight: '400', css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 30; letter-spacing: -0.24px;" },
      h3: { fontFamily: '"Roboto Serif", serif', fontSize: '1.5rem', fontWeight: '400', css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 24;" },
      h4: { fontFamily: '"Roboto Serif", serif', fontSize: '1.25rem', fontWeight: '400', css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 20;" },
      h5: { fontFamily: '"Inter", sans-serif', fontSize: '1.125rem', fontWeight: '700' },
      h6: { fontFamily: '"Inter", sans-serif', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', css: 'letter-spacing: 0.8px;' },
    },
    json: JSON.stringify({
      "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
      "version": 3,
      "title": "Standaard (Default)",
      "slug": "typography-preset-default",
      "styles": {
        "typography": { "fontFamily": "var(--wp--preset--font-family--brand-sans)" },
        "elements": {
          "heading": { "typography": { "fontFamily": "var(--wp--preset--font-family--brand-serif)", "fontWeight": "400" } },
          "h1": { "typography": { "fontFamily": "var(--wp--preset--font-family--brand-serif)", "fontSize": "var(--wp--preset--font-size--xxx-large)", "fontWeight": "400" }, "css": "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px;" },
          "h2": { "typography": { "fontFamily": "var(--wp--preset--font-family--brand-serif)", "fontSize": "var(--wp--preset--font-size--xx-large)", "fontWeight": "400" }, "css": "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 30; letter-spacing: -0.24px;" },
        }
      }
    }, null, 2),
    differencesEn: ['Base theme default — no overrides'],
    differencesAf: ['Basistema-standaard — geen oorskrywings nie'],
    tags: ['default', 'standard', 'roboto serif', 'inter', 'production'],
  },
  {
    slug: 'typography-preset-editorial',
    title: 'Editorial',
    titleAf: 'Redaksioneel',
    descriptionEn: 'Full Roboto Serif everywhere — headings AND body. Traditional newspaper feel.',
    descriptionAf: 'Volledige Roboto Serif oral — opskrifte EN lyfkopie. Tradisionele koerant-gevoel.',
    isDefault: false,
    filePath: 'styles/typography/typography-preset-editorial.json',
    bodyFontFamily: '"Roboto Serif", serif',
    bodyLineHeight: '1.75',
    elements: {
      h1: { fontFamily: '"Roboto Serif", serif', fontSize: 'clamp(2.25rem, 1.92rem + 1.35vw, 3rem)', fontWeight: '400', css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px;" },
      h2: { fontFamily: '"Roboto Serif", serif', fontSize: 'clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)', fontWeight: '400', css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 30; letter-spacing: -0.24px;" },
      h3: { fontFamily: '"Roboto Serif", serif', fontSize: '1.5rem', fontWeight: '400', css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 24;" },
      h4: { fontFamily: '"Roboto Serif", serif', fontSize: '1.25rem', fontWeight: '400', css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 20;" },
      h5: { fontFamily: '"Roboto Serif", serif', fontSize: '1.125rem', fontWeight: '400' },
      h6: { fontFamily: '"Roboto Serif", serif', fontSize: '1rem', fontWeight: '400', textTransform: 'uppercase' },
    },
    json: '',
    differencesEn: ['Full serif stack'],
    differencesAf: ['Volledige serif-stapel'],
    tags: ['editorial', 'newspaper', 'serif'],
  }
];

// ─── Summary Export ─────────────────────────────────────────────────────────

export const PRESET_SUMMARY = {
  colors: COLOR_PRESETS.length,
  fontSizes: FONT_SIZE_PRESETS.length,
  spacing: SPACING_PRESETS.length,
  shadows: SHADOW_PRESETS.length,
  borderRadius: BORDER_RADIUS_PRESETS.length,
  borderWidth: BORDER_WIDTH_PRESETS.length,
  aspectRatios: ASPECT_RATIO_PRESETS.length,
  typographyPresets: TYPOGRAPHY_PRESETS.length,
  totalPresets: 0, // Placeholder, will compute below
};

PRESET_SUMMARY.totalPresets = 
  PRESET_SUMMARY.colors + 
  PRESET_SUMMARY.fontSizes + 
  PRESET_SUMMARY.spacing + 
  PRESET_SUMMARY.shadows + 
  PRESET_SUMMARY.borderRadius + 
  PRESET_SUMMARY.borderWidth + 
  PRESET_SUMMARY.aspectRatios + 
  PRESET_SUMMARY.typographyPresets;

export const PRESET_TABS: { key: PresetCategory; labelEn: string; labelAf: string; icon: string; count: number }[] = [
  { key: 'typographyPresets', labelEn: 'Typography Presets', labelAf: 'Tipografie-voorinstellings', icon: '🎭', count: PRESET_SUMMARY.typographyPresets },
  { key: 'colors', labelEn: 'Colors', labelAf: 'Kleure', icon: '🎨', count: PRESET_SUMMARY.colors },
  { key: 'fontSizes', labelEn: 'Font Sizes', labelAf: 'Lettergroottes', icon: '📏', count: PRESET_SUMMARY.fontSizes },
  { key: 'spacing', labelEn: 'Spacing', labelAf: 'Spasiering', icon: '↔️', count: PRESET_SUMMARY.spacing },
  { key: 'shadows', labelEn: 'Shadows', labelAf: 'Skaduwees', icon: '🌚', count: PRESET_SUMMARY.shadows },
  { key: 'borderRadius', labelEn: 'Border Radius', labelAf: 'Rondings', icon: '⚪', count: PRESET_SUMMARY.borderRadius },
  { key: 'borderWidth', labelEn: 'Border Widths', labelAf: 'Rande', icon: '🔳', count: PRESET_SUMMARY.borderWidth },
  { key: 'aspectRatios', labelEn: 'Aspect Ratios', labelAf: 'Aspekverhoudings', icon: '🖼️', count: PRESET_SUMMARY.aspectRatios },
  { key: 'guidelines', labelEn: 'Guidelines', labelAf: 'Riglyne', icon: '📖', count: 4 },
];