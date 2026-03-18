/**
 * Design System Tokens — rooi rose
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

  // ── Editorial Accent Colors (rooi rose magazine) ──
  {
    cssVar: 'accent-blush',
    figmaName: 'color.editorial.accent-blush',
    label: 'Blush',
    light: '#f4e5e0',
    dark: '#3a2a28',
    usage: 'Alternerende seksie agtergronde, verfynde agtergronde',
    tailwind: 'bg-accent-blush',
    category: 'neutral',
  },
  {
    cssVar: 'accent-warm-beige',
    figmaName: 'color.editorial.accent-warm-beige',
    label: 'Warm Beige',
    light: '#f8f4f0',
    dark: '#2e2a26',
    usage: 'Alternerende seksie agtergronde, warm agtergronde',
    tailwind: 'bg-accent-warm-beige',
    category: 'neutral',
  },
  {
    cssVar: 'accent-soft-grey',
    figmaName: 'color.editorial.accent-soft-grey',
    label: 'Sagte Grys',
    light: '#e8e5e2',
    dark: '#2d2d2d',
    usage: 'Aanhaling agtergronde, gedemde inhoud areas',
    tailwind: 'bg-accent-soft-grey',
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
  /** Line-height CSS variable name (e.g., '--lh-h1') */
  lineHeightCss: string;
  /** Letter spacing (CSS value) */
  letterSpacing: string;
  /** Letter-spacing CSS variable name (e.g., '--ls-h1') — optional for body text */
  letterSpacingCss?: string;
  /** Font variation settings CSS variable name (e.g., '--fvs-h1') — optional for Playfair Display SC headings */
  fvsCss?: string;
  /** Font family */
  font: 'Karla' | 'Playfair Display SC';
  /** Font variation settings string (Playfair Display SC only) */
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
  // ── Fluid Headings (Playfair Display SC 400) ────────────────────────────────
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
    lineHeightCss: '--lh-h1',
    letterSpacing: '-0.24px',
    letterSpacingCss: '--ls-h1',
    fvsCss: '--fvs-xxx-large',
    font: 'Playfair Display SC',
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
    lineHeightCss: '--lh-h2',
    letterSpacing: '-0.24px',
    letterSpacingCss: '--ls-h2',
    fvsCss: '--fvs-xx-large',
    font: 'Playfair Display SC',
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
    lineHeightCss: '--lh-h3',
    letterSpacing: '0',
    letterSpacingCss: '--ls-h3',
    fvsCss: '--fvs-large',
    font: 'Playfair Display SC',
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
    lineHeightCss: '--lh-h4',
    letterSpacing: '0',
    letterSpacingCss: '--ls-h4',
    fvsCss: '--fvs-medium',
    font: 'Playfair Display SC',
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

  // ── UI Headings (Karla) ────────────────────────────────────────────────
  {
    name: 'H5',
    label: 'Opskrif 5',
    size: '1.125rem',
    sizePx: 18,
    weight: '700',
    weightNum: 700,
    lineHeight: '1.5',
    lineHeightPx: 24,
    lineHeightCss: '--lh-h5',
    letterSpacing: '-0.09px',
    letterSpacingCss: '--ls-h5',
    font: 'Karla',
    fluid: false,
    cssVars: {
      fontSize: '--text-base',
      lineHeight: '--lh-base',
      letterSpacing: '--ls-base',
    },
    sample: 'UI Opskrif Vetdruk',
    usage: 'Karla Bold opskrifte, beklemtoning',
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
    lineHeightCss: '--lh-h6',
    letterSpacing: '0.8px',
    letterSpacingCss: '--ls-h6',
    font: 'Karla',
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

  // ── Body Text (Karla 400) ─────────────────────────────────────────────
  {
    name: 'P1',
    label: 'Liggaam 1',
    size: '1.125rem',
    sizePx: 18,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.6',
    lineHeightPx: 27,
    lineHeightCss: '--lh-p1',
    letterSpacing: 'normal',
    font: 'Karla',
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
    lineHeightCss: '--lh-p2',
    letterSpacing: 'normal',
    font: 'Karla',
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
    lineHeightCss: '--lh-p3',
    letterSpacing: 'normal',
    font: 'Karla',
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
  {
    name: 'P4',
    label: 'Klein Teks',
    size: '0.75rem',
    sizePx: 12,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.5',
    lineHeightPx: 18,
    lineHeightCss: '--lh-p4',
    letterSpacing: 'normal',
    font: 'Karla',
    fluid: false,
    cssVars: {
      fontSize: '--text-xx-small',
      lineHeight: '--lh-xx-small',
    },
    sample: 'Klein byskrifte, voetnote, klein UI-teks.',
    usage: 'Byskrifte, voetnote, klein metadata',
    element: '.text-xs, small',
    group: 'body',
  },
  {
    name: 'Small',
    label: 'Ekstra Klein',
    size: '0.6875rem',
    sizePx: 11,
    weight: '400',
    weightNum: 400,
    lineHeight: '1.45',
    lineHeightPx: 16,
    lineHeightCss: '--lh-small',
    letterSpacing: 'normal',
    font: 'Karla',
    fluid: false,
    cssVars: {
      fontSize: '--text-xxx-small',
      lineHeight: '--lh-xxx-small',
    },
    sample: 'Ekstra klein teks vir fynskrif, kennisgewings.',
    usage: 'Fynskrif, klein kennisgewings, meta-data',
    element: '.text-2xs',
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

// ─── Numeric Spacing Tokens (--space-*) ─────────────────────────────────────

/**
 * Numeric spacing tokens used in React components and inline styles.
 * These are simpler, fixed-value tokens that map to the WordPress presets.
 * Use these for component-level spacing where fluid scaling is not needed.
 */
export const NUMERIC_SPACING_TOKENS: SpacingToken[] = [
  { name: '10', slug: '10', cssVar: '--space-10', value: '0.25rem', px: 4, usage: 'Ekstra klein spasie, ikoonvulling' },
  { name: '20', slug: '20', cssVar: '--space-20', value: '0.5rem', px: 8, usage: 'Klein spasie, gapings tussen elemente' },
  { name: '30', slug: '30', cssVar: '--space-30', value: '0.75rem', px: 12, usage: 'Medium-klein spasie, kompakte vulling' },
  { name: '40', slug: '40', cssVar: '--space-40', value: '1rem', px: 16, usage: 'Standaard spasie, basis vulling' },
  { name: '50', slug: '50', cssVar: '--space-50', value: '1.25rem', px: 20, usage: 'Groter vulling, kaardseksies' },
  { name: '60', slug: '60', cssVar: '--space-60', value: '1.5rem', px: 24, usage: 'Groot vulling, seksie-opvulling' },
  { name: '80', slug: '80', cssVar: '--space-80', value: '2rem', px: 32, usage: 'Extra groot vulling, hoofafstande' },
  { name: '100', slug: '100', cssVar: '--space-100', value: '2.5rem', px: 40, usage: 'Maksimum vulling, heldseksies' },
];

// ─── Shadow Tokens ───────────────────────────────────────────────────────────

export interface ShadowToken {
  /** Display name */
  name: string;
  /** WordPress preset slug (numeric) */
  slug: string;
  /** CSS variable name */
  cssVar: string;
  /** Shadow value (light mode) */
  value: string;
  /** Shadow value (dark mode) */
  darkValue: string;
  /** Usage description (Afrikaans) */
  usage: string;
  /** Tailwind class mapping */
  tailwind: string;
}

/**
 * Shadow tokens for elevation and depth.
 * Light mode uses --wp--preset--shadow--* (subtle, standard shadows).
 * Dark mode uses --shadow-dark-* (stronger shadows visible on dark backgrounds).
 * Scale: 100 (subtle) → 600 (hero).
 */
export const SHADOW_TOKENS: ShadowToken[] = [
  { 
    name: '100', 
    slug: '100', 
    cssVar: '--wp--preset--shadow--100', 
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', 
    darkValue: '0 1px 2px rgba(0, 0, 0, 0.5)',
    usage: 'Subtiele skaduwee — kaarte, panele', 
    tailwind: 'shadow-sm' 
  },
  { 
    name: '200', 
    slug: '200', 
    cssVar: '--wp--preset--shadow--200', 
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)', 
    darkValue: '0 1px 4px rgba(0, 0, 0, 0.3)',
    usage: 'Ligte skaduwee — interaktiewe kaarte', 
    tailwind: 'shadow' 
  },
  { 
    name: '300', 
    slug: '300', 
    cssVar: '--wp--preset--shadow--300', 
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', 
    darkValue: '0 4px 12px rgba(0, 0, 0, 0.4)',
    usage: 'Medium skaduwee — kaart hover, aftrekkieslyste', 
    tailwind: 'shadow-md' 
  },
  { 
    name: '400', 
    slug: '400', 
    cssVar: '--wp--preset--shadow--400', 
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', 
    darkValue: '0 10px 15px rgba(0, 0, 0, 0.5)',
    usage: 'Groot skaduwee — modale, oorleggings', 
    tailwind: 'shadow-lg' 
  },
  { 
    name: '500', 
    slug: '500', 
    cssVar: '--wp--preset--shadow--500', 
    value: '0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)', 
    darkValue: '0 8px 24px rgba(0, 0, 0, 0.5)',
    usage: 'XL skaduwee — soek-oorlegsel, uitstaande komponente', 
    tailwind: 'shadow-xl' 
  },
  { 
    name: '600', 
    slug: '600', 
    cssVar: '--wp--preset--shadow--600', 
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)', 
    darkValue: '0 10px 30px rgba(0, 0, 0, 0.4)',
    usage: 'Hero skaduwee — nuusbrief houer, dramatiese effekte', 
    tailwind: 'shadow-2xl' 
  },
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

// ─── Gradient Tokens ─────────────────────────────────────────────────────────

export interface GradientToken {
  /** CSS variable name (without --) */
  cssVar: string;
  /** Figma variable path */
  figmaName: string;
  /** Human-readable label (Afrikaans) */
  label: string;
  /** CSS gradient value */
  value: string;
  /** Usage description (Afrikaans) */
  usage: string;
  /** Tailwind or inline CSS usage example */
  tailwind: string;
}

export const GRADIENT_TOKENS: GradientToken[] = [
  {
    cssVar: 'gradient-brand-red',
    figmaName: 'gradient.brand.red',
    label: 'rooi rose Rooi Gradiënt',
    value: 'linear-gradient(81.87deg, #ce0400 0.24%, #ff0600 18.33%, #e82c27 45.03%, #801917 71.74%, #420200 99.32%)',
    usage: 'Hoof handelsmerk gradiënt vir hero-areas, CTA-knoppe, premium-inhoud',
    tailwind: 'bg-[var(--gradient-brand-red)] or style={{ backgroundImage: "var(--gradient-brand-red)" }}',
  },
  {
    cssVar: 'wp--preset--gradient--brand-red',
    figmaName: 'gradient.wordpress.brand-red',
    label: 'WordPress rooi rose Gradiënt',
    value: 'var(--gradient-brand-red)',
    usage: 'WordPress blok gradiënt voorinstelling (mirrors --gradient-brand-red)',
    tailwind: '.has-brand-red-gradient-background',
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
    name: 'font.karla',
    cssVar: '--font-karla',
    family: 'Karla',
    fallback: 'sans-serif',
    usage: 'Liggaamsteks, UI-elemente, metadata, knoppies',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700',
    weights: [400, 600, 700],
  },
  {
    name: 'font.display',
    cssVar: '--font-display',
    family: 'Playfair Display SC',
    fallback: 'serif',
    usage: 'Opskrifte, titels, prominente teks — rooi rose magazine display headings',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700',
    weights: [400, 700],
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
      project: 'rooi rose',
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