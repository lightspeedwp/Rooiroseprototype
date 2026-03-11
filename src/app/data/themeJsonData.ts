/**
 * themeJsonData.ts — Typed Die Papier theme.json data for dev tools.
 *
 * CANONICAL SOURCE: /wordpress-export/themes/die-papier-theme/theme.json
 * This file provides typed interfaces and the data for the ThemeJsonViewer dev tool.
 *
 * UPDATED: Combined from theme.json + styles/presets/*.json (2026-03-02)
 */

// ─── Interfaces ─────────────────────────────────────────────────────────────

export interface ThemeJsonColorEntry {
  slug: string;
  color: string;
  name: string;
}

export interface ThemeJsonFontFace {
  fontFamily: string;
  fontDisplay?: string;
  fontWeight?: string;
  fontStretch?: string;
  fontStyle: string;
  src?: string[];
}

export interface ThemeJsonFontFamily {
  fontFamily: string;
  slug: string;
  name: string;
  fontFace?: ThemeJsonFontFace[];
}

export interface ThemeJsonFontSize {
  slug: string;
  size: string;
  name: string;
}

export interface ThemeJsonSpacingSize {
  slug: string;
  size: string;
  name: string;
}

export interface ThemeJsonShadowPreset {
  slug: string;
  name: string;
  shadow: string;
}

export interface ThemeJsonCustomBorderRadius {
  [key: string]: string;
}

export interface ThemeJsonCustomBorderWidth {
  [key: string]: string;
}

export interface ThemeJsonSettings {
  appearanceTools: boolean;
  layout: { contentSize: string; wideSize: string };
  color: { defaultPalette: boolean; palette: ThemeJsonColorEntry[] };
  typography: { fontFamilies: ThemeJsonFontFamily[]; fontSizes: ThemeJsonFontSize[] };
  spacing: {
    spacingScale: { steps: number };
    spacingSizes: ThemeJsonSpacingSize[];
    units: string[];
  };
  border: { radius: boolean };
  shadow: { defaultPresets: boolean; presets: ThemeJsonShadowPreset[] };
  custom: {
    borderWidth: ThemeJsonCustomBorderWidth;
    borderRadius: ThemeJsonCustomBorderRadius;
  };
}

export interface ThemeJsonElementStyle {
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    textTransform?: string;
  };
  color?: { text?: string; background?: string };
  border?: { radius?: string };
  css?: string;
}

export interface ThemeJsonStyles {
  color: { background: string; text: string };
  typography: { fontFamily: string; fontSize: string; lineHeight: string };
  elements: Record<string, ThemeJsonElementStyle>;
}

export interface ThemeJsonTemplatePart {
  name: string;
  title: string;
  area: string;
}

export interface ThemeJsonCustomTemplate {
  name: string;
  title: string;
  postTypes: string[];
}

export interface ThemeJsonV3 {
  $schema: string;
  version: number;
  settings: ThemeJsonSettings;
  styles: ThemeJsonStyles;
  templateParts: ThemeJsonTemplatePart[];
  customTemplates: ThemeJsonCustomTemplate[];
}

// ─── Die Papier theme.json data ─────────────────────────────────────────────

export const DIE_PAPIER_THEME_JSON: ThemeJsonV3 = {
  $schema: "https://schemas.wp.org/wp/6.8/theme.json",
  version: 3,
  settings: {
    appearanceTools: true,
    layout: { contentSize: "1280px", wideSize: "1400px" },
    color: {
      defaultPalette: false,
      palette: [
        { slug: "primary", color: "#E82C27", name: "Brand Red" },
        { slug: "primary-alt", color: "#C41F20", name: "Brand Red (Darker)" },
        { slug: "secondary", color: "#172134", name: "Brand Navy" },
        { slug: "secondary-accent", color: "#1A3A5F", name: "Navy Light" },
        { slug: "base", color: "#FFFFFF", name: "White" },
        { slug: "tertiary", color: "#F0F0F0", name: "Brand Light" },
        { slug: "border-light", color: "#DDDDDD", name: "Border Base" },
        { slug: "main", color: "#2c2c2c", name: "Foreground" },
        { slug: "main-accent", color: "#636375", name: "Muted Foreground" },
        { slug: "accent", color: "#C41F20", name: "Text Link Red" },
      ],
    },
    typography: {
      fontFamilies: [
        {
          fontFamily: '"Roboto Serif", serif',
          slug: "brand-serif",
          name: "Brand Serif",
        },
        {
          fontFamily: '"Inter", sans-serif',
          slug: "brand-sans",
          name: "Brand Sans",
        },
        { fontFamily: '"Roboto Serif", serif', slug: "heading", name: "Heading (alias)" },
        { fontFamily: '"Inter", sans-serif', slug: "body", name: "Body (alias)" },
      ],
      fontSizes: [
        { slug: "x-small", size: "0.6875rem", name: "Extra Small" },
        { slug: "small", size: "0.875rem", name: "Small" },
        { slug: "base", size: "1rem", name: "Base" },
        { slug: "medium", size: "1.125rem", name: "Medium" },
        { slug: "large", size: "1.25rem", name: "Large" },
        { slug: "x-large", size: "1.5rem", name: "Extra Large" },
        { slug: "xx-large", size: "1.875rem", name: "2XL" },
        { slug: "xxx-large", size: "3rem", name: "3XL" },
      ],
    },
    spacing: {
      spacingScale: { steps: 0 },
      spacingSizes: [
        { slug: "x-small", size: "clamp(0.25rem, 1vw, 0.5rem)", name: "Extra Small" },
        { slug: "small", size: "clamp(0.5rem, 2vw, 0.75rem)", name: "Small" },
        { slug: "medium", size: "clamp(0.75rem, 2.5vw, 1rem)", name: "Medium" },
        { slug: "large", size: "clamp(1rem, 4vw, 2rem)", name: "Large" },
        { slug: "x-large", size: "clamp(1.5rem, 5vw, 3rem)", name: "Extra Large" },
        { slug: "xx-large", size: "clamp(2rem, 7vw, 5rem)", name: "2XL" },
        { slug: "xxx-large", size: "clamp(3rem, 10vw, 7rem)", name: "3XL" },
      ],
      units: ["%", "px", "em", "rem", "vh", "vw"],
    },
    border: { radius: true },
    shadow: {
      defaultPresets: false,
      presets: [
        { slug: "100", name: "100 (Subtle)", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
        { slug: "200", name: "200 (Small)", shadow: "0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px 0 rgb(0 0 0 / 0.06)" },
        { slug: "300", name: "300 (Medium)", shadow: "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)" },
        { slug: "400", name: "400 (Large)", shadow: "0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)" },
        { slug: "500", name: "500 (XL)", shadow: "0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)" },
        { slug: "600", name: "600 (2XL)", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
      ],
    },
    custom: {
      borderWidth: { "100": "1px", "200": "2px", "300": "4px" },
      borderRadius: {
        "100": "2px",
        "200": "4px",
        "300": "6px",
        "400": "8px",
        "500": "12px",
        "600": "16px",
        "9999": "9999px",
      },
    },
  },
  styles: {
    color: {
      background: "var(--wp--preset--color--base)",
      text: "var(--wp--preset--color--main)",
    },
    typography: {
      fontFamily: "var(--wp--preset--font-family--brand-sans)",
      fontSize: "var(--wp--preset--font-size--base)",
      lineHeight: "1.5",
    },
    elements: {
      h1: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-serif)",
          fontSize: "var(--wp--preset--font-size--xxx-large)",
          fontWeight: "400",
        },
        css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px; line-height: clamp(2.5rem, 2.14rem + 1.46vw, 3.25rem);",
      },
      h2: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-serif)",
          fontSize: "var(--wp--preset--font-size--xx-large)",
          fontWeight: "400",
        },
        css: "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 30; letter-spacing: -0.24px; line-height: clamp(2rem, 1.94rem + 0.25vw, 2.1875rem);",
      },
      h3: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-serif)",
          fontSize: "var(--wp--preset--font-size--x-large)",
          fontWeight: "400",
        },
        css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 24; letter-spacing: 0; line-height: 1.75rem;",
      },
      h4: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-serif)",
          fontSize: "var(--wp--preset--font-size--large)",
          fontWeight: "400",
        },
        css: "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 20; letter-spacing: 0; line-height: 1.75rem;",
      },
      h5: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-sans)",
          fontSize: "var(--wp--preset--font-size--medium)",
          fontWeight: "700",
        },
        css: "letter-spacing: -0.09px; line-height: 1.5rem;",
      },
      h6: {
        typography: {
          fontFamily: "var(--wp--preset--font-family--brand-sans)",
          fontSize: "var(--wp--preset--font-size--base)",
          fontWeight: "600",
          textTransform: "uppercase",
        },
        css: "letter-spacing: 0.8px; line-height: 1.5rem;",
      },
      button: {
        ":hover": {
          color: {
            background: "color-mix(in srgb, var(--wp--preset--color--primary) 90%, #000)"
          }
        }
      },
    },
  },
  templateParts: [
    { name: "header", title: "Kopstuk", area: "header" },
    { name: "checkout-header", title: "Betaal Kopstuk", area: "header" },
    { name: "breadcrumbs", title: "Broodkrummels", area: "header" },
    { name: "footer", title: "Voetskrif", area: "footer" },
    { name: "footer-simple", title: "Eenvoudige voetskrif", area: "footer" },
    { name: "checkout-footer", title: "Betaal Voetskrif", area: "footer" },
    { name: "sidebar", title: "Sybalk", area: "sidebar" },
    { name: "sidebar-event", title: "Gebeurtenis Sybalk", area: "sidebar" },
    { name: "sidebar-home", title: "Tuisblad Sybalk", area: "sidebar" },
    { name: "post-meta-article", title: "Artikel Metadata", area: "post-meta" },
    { name: "product-card", title: "Produkkaart", area: "woocommerce" },
    { name: "simple-product-add-to-cart-with-options", title: "Eenvoudige produk — Voeg by mandjie", area: "woocommerce" },
    { name: "variable-product-add-to-cart-with-options", title: "Veranderlike produk — Voeg by mandjie", area: "woocommerce" },
    { name: "external-product-add-to-cart-with-options", title: "Eksterne produk — Voeg by mandjie", area: "woocommerce" },
    { name: "grouped-product-add-to-cart-with-options", title: "Gegroepeerde produk — Voeg by mandjie", area: "woocommerce" },
    { name: "mini-cart", title: "Mini Mandjie", area: "woocommerce" }
  ],
  customTemplates: [
    { name: "page-no-title", title: "Bladsy (Sonder Titel)", postTypes: ["page"] },
    { name: "page-full-width", title: "Bladsy (Volwydte)", postTypes: ["page"] },
  ],
};

// ─── Summary helpers ────────────────────────────────────────────────────────

export const THEME_JSON_SUMMARY = {
  version: DIE_PAPIER_THEME_JSON.version,
  colorCount: DIE_PAPIER_THEME_JSON.settings.color.palette.length,
  fontFamilyCount: DIE_PAPIER_THEME_JSON.settings.typography.fontFamilies.length,
  fontSizeCount: DIE_PAPIER_THEME_JSON.settings.typography.fontSizes.length,
  spacingSizeCount: DIE_PAPIER_THEME_JSON.settings.spacing.spacingSizes.length,
  shadowCount: DIE_PAPIER_THEME_JSON.settings.shadow.presets.length,
  borderRadiusCount: Object.keys(DIE_PAPIER_THEME_JSON.settings.custom.borderRadius).length,
  borderWidthCount: Object.keys(DIE_PAPIER_THEME_JSON.settings.custom.borderWidth).length,
  templatePartCount: DIE_PAPIER_THEME_JSON.templateParts.length,
  customTemplateCount: DIE_PAPIER_THEME_JSON.customTemplates.length,
  elementStyleCount: Object.keys(DIE_PAPIER_THEME_JSON.styles.elements).length,
};

/**
 * Sections of the theme.json for the overview tab.
 */
export interface ThemeJsonSection {
  key: string;
  labelAf: string;
  labelEn: string;
  descAf: string;
  descEn: string;
  itemCount: number;
  icon: string; // emoji for compact display
}

export const THEME_JSON_SECTIONS: ThemeJsonSection[] = [
  {
    key: 'colors',
    labelAf: 'Kleure',
    labelEn: 'Colors',
    descAf: 'Pasgemaakte kleurpalet met 10 semantiese slugs',
    descEn: 'Custom color palette with 10 semantic slugs',
    itemCount: THEME_JSON_SUMMARY.colorCount,
    icon: '🎨',
  },
  {
    key: 'typography',
    labelAf: 'Tipografie',
    labelEn: 'Typography',
    descAf: '4 lettertipe-families (2 primaries + 2 aliasse), 8 font-groottes',
    descEn: '4 font families (2 primaries + 2 aliases), 8 font sizes',
    itemCount: THEME_JSON_SUMMARY.fontFamilyCount + THEME_JSON_SUMMARY.fontSizeCount,
    icon: '🔤',
  },
  {
    key: 'spacing',
    labelAf: 'Spasiëring',
    labelEn: 'Spacing',
    descAf: '7 spasiërings-groottes (x-small tot xxx-large)',
    descEn: '7 spacing sizes (x-small to xxx-large)',
    itemCount: THEME_JSON_SUMMARY.spacingSizeCount,
    icon: '📏',
  },
  {
    key: 'shadows',
    labelAf: 'Skaduwees',
    labelEn: 'Shadows',
    descAf: '6 skaduwee-voorinstellings (100-600 numeriese slugs)',
    descEn: '6 shadow presets (100-600 numeric slugs)',
    itemCount: THEME_JSON_SUMMARY.shadowCount,
    icon: '🌑',
  },
  {
    key: 'borders',
    labelAf: 'Rande & Rondings',
    labelEn: 'Borders & Radii',
    descAf: '3 randwydtes + 7 rondings-groottes (insluitend pill 9999)',
    descEn: '3 border widths + 7 radius sizes (including pill 9999)',
    itemCount: THEME_JSON_SUMMARY.borderRadiusCount + THEME_JSON_SUMMARY.borderWidthCount,
    icon: '⬜',
  },
  {
    key: 'elements',
    labelAf: 'Element Style',
    labelEn: 'Element Styles',
    descAf: 'Globale style vir h1-h6, knoppies — Roboto Serif koppe, Inter liggaam',
    descEn: 'Global styles for h1-h6, buttons — Roboto Serif headings, Inter body',
    itemCount: THEME_JSON_SUMMARY.elementStyleCount,
    icon: '🏷️',
  },
  {
    key: 'templateParts',
    labelAf: 'Sjabloon Onderdele',
    labelEn: 'Template Parts',
    descAf: '16 sjabloon-onderdele (kopstuk, voetskrif, sybalk, meta, woo)',
    descEn: '16 template parts (header, footer, sidebar, meta, woo)',
    itemCount: THEME_JSON_SUMMARY.templatePartCount,
    icon: '🧩',
  },
  {
    key: 'customTemplates',
    labelAf: 'Pasgemaakte Sjablone',
    labelEn: 'Custom Templates',
    descAf: '2 pasgemaakte bladsysjablone (sonder titel, volwydte)',
    descEn: '2 custom page templates (no title, full width)',
    itemCount: THEME_JSON_SUMMARY.customTemplateCount,
    icon: '📄',
  },
];
