/**
 * Design System Tokens — Die Papier
 * ──────────────────────────────────
 * Centralized, single-source-of-truth for every design token used in the project.
 * Derived from /src/styles/theme-tokens.css, theme-dark.css, theme-exports.css
 * (split from theme.css — 2026-03-05) and the guidelines documentation.
 *
 * Updated to align with OllieWP slug system (2026-03-02).
 */

// ─── Color Tokens ────────────────────────────────────────────────────────────

export interface ColorToken {
  /** Internal CSS variable name (without --) */
  cssVar: string;
  /** Figma variable path */
  figmaName: string;
  /** Human-readable label (Afrikaans) */
  label: string;
  /** Light mode hex value */
  light: string;
  /** Dark mode hex value */
  dark: string;
  /** Usage description (Afrikaans) */
  usage: string;
  /** Tailwind class(es) to use */
  tailwind: string;
  /** Category grouping */
  category: 'brand' | 'neutral' | 'system' | 'chart' | 'sidebar';
}

export const COLOR_TOKENS: ColorToken[] = [
  // ── Brand ──
  {
    cssVar: 'primary',
    figmaName: 'color.brand.primary',
    label: 'Primêr Rooi',
    light: '#E82C27',
    dark: '#E83050',
    usage: 'Hoof CTA, aktiewe skakels, handelsmerk-kleur',
    tailwind: 'text-primary / bg-primary',
    category: 'brand',
  },
  {
    cssVar: 'primary-alt',
    figmaName: 'color.brand.primary-alt',
    label: 'Donker Rooi',
    light: '#C41F20',
    dark: '#C4243E',
    usage: 'Hover-toestande, donkerder primêre skakering',
    tailwind: 'text-[#C41F20]',
    category: 'brand',
  },
  {
    cssVar: 'secondary',
    figmaName: 'color.brand.secondary',
    label: 'Navy',
    light: '#172134',
    dark: '#0A1018',
    usage: 'Hoonavigasie, voetteks, donker agtergronde, opskrifte',
    tailwind: 'text-secondary / bg-secondary',
    category: 'brand',
  },
  {
    cssVar: 'secondary-accent',
    figmaName: 'color.brand.secondary-accent',
    label: 'Navy Lig',
    light: '#1A3A5F',
    dark: '#253D54',
    usage: 'Sub-opskrifte, UI-elemente, sekondêre aandag',
    tailwind: 'text-[#1A3A5F]',
    category: 'brand',
  },

  // ── Neutrals ──
  {
    cssVar: 'base',
    figmaName: 'color.base',
    label: 'Basis Wit',
    light: '#ffffff',
    dark: '#0F1923',
    usage: 'Hooagtergrond, kaart-agtergronde',
    tailwind: 'bg-white dark:bg-[#0F1923]',
    category: 'neutral',
  },
  {
    cssVar: 'tertiary',
    figmaName: 'color.tertiary',
    label: 'Liggrys',
    light: '#F0F0F0',
    dark: '#162233',
    usage: 'Sekondêre agtergronde, gedemde areas',
    tailwind: 'bg-gray-100 dark:bg-[#162233]',
    category: 'neutral',
  },
  {
    cssVar: 'border-light',
    figmaName: 'color.border-light',
    label: 'Grens Grys',
    light: '#DDDDDD',
    dark: '#1E3044',
    usage: 'Grense, invoervelde, verdelers',
    tailwind: 'border-gray-200 dark:border-[#1E3044]',
    category: 'neutral',
  },
  {
    cssVar: 'main',
    figmaName: 'color.main',
    label: 'Teks Donker',
    light: '#2c2c2c',
    dark: '#E8E8ED',
    usage: 'Liggaamsteks, hoovoorgrond',
    tailwind: 'text-[#2c2c2c] dark:text-[#E8E8ED]',
    category: 'neutral',
  },
  {
    cssVar: 'main-accent',
    figmaName: 'color.main-accent',
    label: 'Gedemde Teks',
    light: '#636375',
    dark: '#95A3B1',
    usage: 'Byskrifte, sekondêre teks, metadata',
    tailwind: 'text-muted-foreground',
    category: 'neutral',
  },
  {
    cssVar: 'accent',
    figmaName: 'color.accent',
    label: 'Skakel Rooi',
    light: '#C41F20',
    dark: '#E83050',
    usage: 'Teks skakels in inhoud',
    tailwind: 'text-accent',
    category: 'brand',
  },

  // ── ShadCN System Tokens ──
  {
    cssVar: 'shadcn-primary',
    figmaName: 'shadcn.primary',
    label: 'ShadCN Primêr',
    light: '#E82C27',
    dark: '#E83050',
    usage: 'ShadCN Button primêr, Ring-kleur',
    tailwind: 'bg-primary text-primary',
    category: 'system',
  },
  {
    cssVar: 'shadcn-border',
    figmaName: 'shadcn.border',
    label: 'ShadCN Grens',
    light: '#DDDDDD',
    dark: '#1E3044',
    usage: 'Standaard grens-kleur vir kaarte, invoervelde',
    tailwind: 'border-border',
    category: 'system',
  },
];

// ─── Typography Tokens ───────────────────────────────────────────────────────

export interface TypographyToken {
  /** Short name: H1, H2, ..., H6, P1, P2, P3, P4, Small */
  name: string;
  /** Human-readable label (Afrikaans) */
  label: string;
  /** Desktop font size (CSS value — may be clamp() for fluid) */
  size: string;
  /** Desktop font size in px */
  sizePx: number;
  /** Mobile font size in px (only for fluid types) */
  sizeMobilePx?: number;
  /** Font weight */
  weight: string;
  /** Font weight numeric */
  weightNum: number;
  /** Desktop line-height (CSS value) */
  lineHeight: string;
  /** Desktop line-height in px */
  lineHeightPx: number;
  /** Letter spacing (CSS value) */
  letterSpacing: string;
  /** Font family */
  font: 'Inter' | 'Roboto Serif';
  /** Font variation settings string (Roboto Serif only) */
  fontVariationSettings?: string;
  /** Text transform (H6 = uppercase) */
  textTransform?: string;
  /** Whether font-size uses clamp() */
  fluid: boolean;
  /** CSS custom property references */
  cssVars: {
    fontSize: string;
    lineHeight: string;
    letterSpacing?: string;
    fvs?: string;
  };
  /** Afrikaans sample text */
  sample: string;
  /** Usage description (Afrikaans) */
  usage: string;
  /** Equivalent HTML element or role */
  element: string;
  /** Group for display */
  group: 'heading-serif' | 'heading-sans' | 'body';
}

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  // ── Fluid Headings (Roboto Serif 400) ──────────────────────────────────
  {
    name: 'H1',
    label: 'Opskrif 1',
    size: 'clamp(2.25rem, 1.92rem + 1.35vw, 3rem)',
    sizePx: 48,
    sizeMobilePx: 36,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.1',
    lineHeightPx: 52,
    letterSpacing: '-0.24px',
    font: 'Roboto Serif',
    fontVariationSettings: "'GRAD' -50, 'wdth' 64, 'opsz' 48",
    fluid: true,
    cssVars: {
      fontSize: '--text-xxx-large',
      lineHeight: '--lh-xxx-large',
      letterSpacing: '--ls-xxx-large',
      fvs: '--fvs-xxx-large',
    },
    sample: 'Groot Impak Opskrif',
    usage: 'Bladsyopskrifte, heldgebiede',
    element: '<h1>',
    group: 'heading-serif',
  },
  {
    name: 'H2',
    label: 'Opskrif 2',
    size: 'clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)',
    sizePx: 30,
    sizeMobilePx: 28,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.2',
    lineHeightPx: 35,
    letterSpacing: '-0.24px',
    font: 'Roboto Serif',
    fontVariationSettings: "'GRAD' -50, 'wdth' 64, 'opsz' 30",
    fluid: true,
    cssVars: {
      fontSize: '--text-xx-large',
      lineHeight: '--lh-xx-large',
      letterSpacing: '--ls-xx-large',
      fvs: '--fvs-xx-large',
    },
    sample: 'Hoofnuus van die Dag',
    usage: 'Seksie-opskrifte, kaart-titels',
    element: '<h2>',
    group: 'heading-serif',
  },
  {
    name: 'H3',
    label: 'Opskrif 3',
    size: '1.5rem',
    sizePx: 24,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.3',
    lineHeightPx: 28,
    letterSpacing: '0',
    font: 'Roboto Serif',
    fontVariationSettings: "'GRAD' 0, 'wdth' 64, 'opsz' 24",
    fluid: false,
    cssVars: {
      fontSize: '--text-large',
      lineHeight: '--lh-large',
      letterSpacing: '--ls-large',
      fvs: '--fvs-large',
    },
    sample: 'Belangrike Nuusopskrif',
    usage: 'Sub-seksie-opskrifte',
    element: '<h3>',
    group: 'heading-serif',
  },
  {
    name: 'H4',
    label: 'Opskrif 4',
    size: '1.25rem',
    sizePx: 20,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.4',
    lineHeightPx: 28,
    letterSpacing: '0',
    font: 'Roboto Serif',
    fontVariationSettings: "'GRAD' 0, 'wdth' 64, 'opsz' 20",
    fluid: false,
    cssVars: {
      fontSize: '--text-medium',
      lineHeight: '--lh-medium',
      letterSpacing: '--ls-medium',
      fvs: '--fvs-medium',
    },
    sample: 'Inleidende Sub-opskrif',
    usage: 'Kleinste serifopskrif, beklemtoning',
    element: '<h4>',
    group: 'heading-serif',
  },

  // ── UI Headings (Inter) ────────────────────────────────────────────────
  {
    name: 'H5',
    label: 'Opskrif 5',
    size: '1.125rem',
    sizePx: 18,
    weight: '700',
    weightNum: 700,
    lineHeight: '1.5',
    lineHeightPx: 24,
    letterSpacing: '-0.09px',
    font: 'Inter',
    fluid: false,
    cssVars: {
      fontSize: '--text-base',
      lineHeight: '--lh-base',
      letterSpacing: '--ls-base',
    },
    sample: 'UI Opskrif Vetdruk',
    usage: 'Inter Bold opskrifte, beklemtoning',
    element: '<h5>',
    group: 'heading-sans',
  },
  {
    name: 'H6',
    label: 'Opskrif 6',
    size: '1rem',
    sizePx: 16,
    weight: '600',
    weightNum: 600,
    lineHeight: '1.5',
    lineHeightPx: 24,
    letterSpacing: '0.8px',
    font: 'Inter',
    textTransform: 'uppercase',
    fluid: false,
    cssVars: {
      fontSize: '--text-small',
      lineHeight: '--lh-small',
      letterSpacing: '--ls-small',
    },
    sample: 'HOOFLETTER OPSKRIF',
    usage: 'Hoofletter-etikette, klein opskrifte',
    element: '<h6>',
    group: 'heading-sans',
  },

  // ── Body Text (Inter 400) ─────────────────────────────────────────────
  {
    name: 'P1',
    label: 'Liggaam 1',
    size: '1.125rem',
    sizePx: 18,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.6',
    lineHeightPx: 27,
    letterSpacing: 'normal',
    font: 'Inter',
    fluid: false,
    cssVars: {
      fontSize: '--text-base',
      lineHeight: '--lh-base',
    },
    sample: 'Artikelinhoud word in hierdie grootte gelees vir beter leesbaarheid op skerms.',
    usage: 'Artikelliggaam, lang lees (.article-content)',
    element: '.article-content p',
    group: 'body',
  },
  {
    name: 'P2',
    label: 'Liggaam 2',
    size: '1rem',
    sizePx: 16,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.5',
    lineHeightPx: 24,
    letterSpacing: 'normal',
    font: 'Inter',
    fluid: false,
    cssVars: {
      fontSize: '--text-small',
      lineHeight: '--lh-small',
    },
    sample: 'Standaard liggaamsteks vir paragrawe en algemene inhoud.',
    usage: 'Standaard liggaamsteks, paragrawe',
    element: '<p>, body default',
    group: 'body',
  },
  {
    name: 'P3',
    label: 'UI Teks',
    size: '0.875rem',
    sizePx: 14,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.4',
    lineHeightPx: 22,
    letterSpacing: 'normal',
    font: 'Inter',
    fluid: false,
    cssVars: {
      fontSize: '--text-x-small',
      lineHeight: '--lh-x-small',
    },
    sample: 'Standaard UI-teks vir knoppies, etikette en navigasie.',
    usage: 'Knoppies, etikette, navigasie',
    element: '<button>, .text-sm',
    group: 'body',
  },
];

// ─── Spacing Tokens ──────────────────────────────────────────────────────────

export interface SpacingToken {
  name: string;
  slug: string;
  cssVar: string;
  value: string;
  px: number;
  usage: string;
}

export const SPACING_TOKENS: SpacingToken[] = [
  { name: 'Extra Small', slug: 'x-small', cssVar: '--wp--preset--spacing--x-small', value: 'clamp(0.25rem, 1vw, 0.5rem)', px: 8, usage: 'Stywe gapings, ikoonafstand' },
  { name: 'Small', slug: 'small', cssVar: '--wp--preset--spacing--small', value: 'clamp(0.5rem, 2vw, 0.75rem)', px: 12, usage: 'Klein vulling, merker-spasie' },
  { name: 'Medium', slug: 'medium', cssVar: '--wp--preset--spacing--medium', value: 'clamp(0.75rem, 2.5vw, 1rem)', px: 16, usage: 'Interne komponentvulling' },
  { name: 'Large', slug: 'large', cssVar: '--wp--preset--spacing--large', value: 'clamp(1rem, 4vw, 2rem)', px: 24, usage: 'Standaard vulling, kaartvulling' },
  { name: 'Extra Large', slug: 'x-large', cssVar: '--wp--preset--spacing--x-large', value: 'clamp(1.5rem, 5vw, 3rem)', px: 40, usage: 'Groot vulling, seksieskeiding' },
  { name: '2XL', slug: 'xx-large', cssVar: '--wp--preset--spacing--xx-large', value: 'clamp(2rem, 7vw, 5rem)', px: 64, usage: 'Seksieskeiding, na broodkrummels' },
  { name: '3XL', slug: 'xxx-large', cssVar: '--wp--preset--spacing--xxx-large', value: 'clamp(3rem, 10vw, 7rem)', px: 96, usage: 'Groot seksieskeiding' },
];

// ─── Radius Tokens ───────────────────────────────────────────────────────────

export interface RadiusToken {
  name: string;
  value: string;
  px: number;
  usage: string;
  tailwind: string;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  { name: 'radius.sm', value: '2px', px: 2, usage: 'Klein elemente, kentekens', tailwind: 'rounded-sm' },
  { name: 'radius.md', value: '4px', px: 4, usage: 'Invoervelde, knoppies', tailwind: 'rounded-md' },
  { name: 'radius.lg', value: '8px', px: 8, usage: 'Kaarte, hoofkomponente', tailwind: 'rounded-lg' },
  { name: 'radius.xl', value: '12px', px: 12, usage: 'Helde, baners, groot elemente', tailwind: 'rounded-xl' },
];

// ─── Shadow / Elevation Tokens ───────────────────────────────────────────────

export interface ShadowToken {
  name: string;
  label: string;
  lightValue: string;
  darkValue: string;
  tailwind: string;
  usage: string;
}

export const SHADOW_TOKENS: ShadowToken[] = [
  {
    name: 'elevation.1',
    label: 'Elevasie 1',
    lightValue: '0 1px 2px rgba(0,0,0,0.05)',
    darkValue: '0 1px 2px rgba(0,0,0,0.5)',
    tailwind: 'shadow-sm dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]',
    usage: 'Kaarte, ligte hoogte',
  },
  {
    name: 'elevation.2',
    label: 'Elevasie 2',
    lightValue: '0 4px 6px rgba(0,0,0,0.1)',
    darkValue: '0 4px 6px rgba(0,0,0,0.5)',
    tailwind: 'shadow-md dark:shadow-[0_4px_6px_rgba(0,0,0,0.5)]',
    usage: 'Aktiewe kaarte, sweef-effek',
  },
  {
    name: 'elevation.3',
    label: 'Elevasie 3',
    lightValue: '0 10px 15px rgba(0,0,0,0.1)',
    darkValue: '0 10px 15px rgba(0,0,0,0.5)',
    tailwind: 'shadow-lg dark:shadow-[0_10px_15px_rgba(0,0,0,0.5)]',
    usage: 'Modals, dropdowns',
  },
  {
    name: 'elevation.4',
    label: 'Elevasie 4',
    lightValue: '0 20px 25px rgba(0,0,0,0.15)',
    darkValue: '0 20px 25px rgba(0,0,0,0.5)',
    tailwind: 'shadow-xl dark:shadow-[0_20px_25px_rgba(0,0,0,0.5)]',
    usage: 'Prominente modals, overlay-panele',
  },
];

// ─── Breakpoint Tokens ───────────────────────────────────────────────────────

export interface BreakpointToken {
  name: string;
  label: string;
  value: string;
  px: number;
  tailwindPrefix: string;
  usage: string;
}

export const BREAKPOINT_TOKENS: BreakpointToken[] = [
  { name: 'bp.mobile', label: 'Selfoon', value: '375px', px: 375, tailwindPrefix: '(verstek)', usage: 'Smal skerms, selfone' },
  { name: 'bp.sm', label: 'Klein Tablet', value: '640px', px: 640, tailwindPrefix: 'sm:', usage: 'Klein tablette, landskapmodus selfone' },
  { name: 'bp.md', label: 'Tablet', value: '768px', px: 768, tailwindPrefix: 'md:', usage: 'Tablette, smal lessenare' },
  { name: 'bp.lg', label: 'Lessenaar', value: '1024px', px: 1024, tailwindPrefix: 'lg:', usage: 'Standaard lessenaarskerms' },
  { name: 'bp.xl', label: 'Wye Lessenaar', value: '1280px', px: 1280, tailwindPrefix: 'xl:', usage: 'Wye skerms (inhoud max: 1280px)' },
  { name: 'bp.2xl', label: 'Ultra-wyd', value: '1536px', px: 1536, tailwindPrefix: '2xl:', usage: 'Ultra-wye skerms' },
];

// ─── Layout Tokens ───────────────────────────────────────────────────────────

export interface LayoutToken {
  name: string;
  label: string;
  value: string;
  classes: string;
  usage: string;
}

export const LAYOUT_TOKENS: LayoutToken[] = [
  {
    name: 'layout.align-wide',
    label: 'Align-Wide Houer',
    value: 'max-width: 1440px; padding: clamp(1rem, 4vw, 2rem)',
    classes: 'alignwide',
    usage: 'Primêre bladsyhouer — GEBRUIK ALTYD hierdie patroon',
  },
  {
    name: 'layout.grid',
    label: 'Hoof Rooster',
    value: '12-kolom rooster',
    classes: 'grid grid-cols-12 gap-6',
    usage: 'Kategorie-argiewe, soekuitslae-uitleg',
  },
  {
    name: 'layout.sidebar',
    label: 'Sybalk Wydte',
    value: '320px',
    classes: 'w-[320px]',
    usage: 'Kategorie-argief sybalke',
  },
  {
    name: 'layout.narrow-content',
    label: 'Smal Inhoud',
    value: 'max-width: 900px',
    classes: 'max-w-[900px]',
    usage: 'Beleidsbladsye, lang teksinhoud',
  },
];

// ─── Font Stack Tokens ───────────────────────────────────────────────────────

export interface FontToken {
  name: string;
  cssVar: string;
  family: string;
  fallback: string;
  usage: string;
  googleFontsUrl: string;
  weights: number[];
}

export const FONT_TOKENS: FontToken[] = [
  {
    name: 'font.inter',
    cssVar: '--font-inter',
    family: 'Inter',
    fallback: 'sans-serif',
    usage: 'Liggaamsteks, UI-elemente, metadata, knoppies',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700',
    weights: [400, 500, 600, 700],
  },
  {
    name: 'font.heading',
    cssVar: '--font-heading',
    family: 'Roboto Serif',
    fallback: 'serif',
    usage: 'Opskrifte, titels, prominente teks',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wdth,wght,GRAD@8..144,50..150,100..900,-50..100',
    weights: [400],
  },
];

// ─── Full JSON Export ────────────────────────────────────────────────────────

export interface DesignTokenExport {
  meta: {
    project: string;
    version: string;
    generatedAt: string;
    source: string;
  };
  colors: Record<string, { light: string; dark: string; figma: string; usage: string }>;
  typography: Record<string, {
    size: string;
    sizePx: number;
    sizeMobilePx?: number;
    weight: number;
    lineHeight: string;
    lineHeightPx: number;
    letterSpacing: string;
    font: string;
    fontVariationSettings?: string;
    textTransform?: string;
    fluid: boolean;
    cssVars: Record<string, string>;
    element: string;
  }>;
  spacing: Record<string, { value: string; px: number }>;
  radii: Record<string, { value: string; px: number }>;
  breakpoints: Record<string, { value: string; px: number }>;
  fonts: Record<string, { family: string; fallback: string; weights: number[] }>;
}

export function extractDesignTokensJSON(): DesignTokenExport {
  const colors: DesignTokenExport['colors'] = {};
  COLOR_TOKENS.forEach(t => {
    colors[t.cssVar] = { light: t.light, dark: t.dark, figma: t.figmaName, usage: t.usage };
  });

  const typography: DesignTokenExport['typography'] = {};
  TYPOGRAPHY_TOKENS.forEach(t => {
    typography[t.name] = {
      size: t.size,
      sizePx: t.sizePx,
      ...(t.sizeMobilePx ? { sizeMobilePx: t.sizeMobilePx } : {}),
      weight: t.weightNum,
      lineHeight: t.lineHeight,
      lineHeightPx: t.lineHeightPx,
      letterSpacing: t.letterSpacing,
      font: t.font,
      ...(t.fontVariationSettings ? { fontVariationSettings: t.fontVariationSettings } : {}),
      ...(t.textTransform ? { textTransform: t.textTransform } : {}),
      fluid: t.fluid,
      cssVars: t.cssVars as Record<string, string>,
      element: t.element,
    };
  });

  const spacing: DesignTokenExport['spacing'] = {};
  SPACING_TOKENS.forEach(t => {
    spacing[t.slug] = { value: t.value, px: t.px };
  });

  const radii: DesignTokenExport['radii'] = {};
  RADIUS_TOKENS.forEach(t => {
    radii[t.name] = { value: t.value, px: t.px };
  });

  const breakpoints: DesignTokenExport['breakpoints'] = {};
  BREAKPOINT_TOKENS.forEach(t => {
    breakpoints[t.name] = { value: t.value, px: t.px };
  });

  const fonts: DesignTokenExport['fonts'] = {};
  FONT_TOKENS.forEach(t => {
    fonts[t.name] = { family: t.family, fallback: t.fallback, weights: t.weights };
  });

  return {
    meta: {
      project: 'Die Papier',
      version: '1.1.0',
      generatedAt: new Date().toISOString(),
      source: '/src/styles/theme-tokens.css',
    },
    colors,
    typography,
    spacing,
    radii,
    breakpoints,
    fonts,
  };
}