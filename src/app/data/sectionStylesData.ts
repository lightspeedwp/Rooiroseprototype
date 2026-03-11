/**
 * Section Styles Data — 9 active section style variations
 *
 * Each entry provides inline summary wpThemeJson (top-level color/spacing/elements only).
 * Full block-level overrides are loaded on demand from disk JSON via:
 *   - loadSectionStyleJson(slug) → single entry
 *   - loadSectionStylesFromDisk() → all entries
 *   - getEnrichedSectionStyle(entry) → replaces inline wpThemeJson with disk version
 *
 * Disk JSON source: wordpress-export/themes/die-papier-theme/styles/sections/
 */

import { wpSectionStyles, loadWpJsonFile, loadAllWpJsonFiles } from './wpFileLoader';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SectionStyleCategory = 'background' | 'gradient' | 'component' | 'infrastructure';

export interface WpThemeJsonSectionStyle {
  $schema: string;
  version: number;
  title: string;
  slug: string;
  blockTypes: string[];
  styles: Record<string, unknown>;
}

export interface SectionStyleEntry {
  id: string;
  name: string;
  label: string;
  labelEn: string;
  category: SectionStyleCategory;
  reactClass: string;
  cssBackground?: string;
  cssText?: string;
  darkBg?: string;
  darkText?: string;
  cssGradient?: string;
  darkGradient?: string;
  keyProperties?: string;
  wpBlock: string;
  wpThemeJson: WpThemeJsonSectionStyle;
  templates: string[];
  parts: string[];
  patterns: string[];
  wpFilePath: string;
  usedInReact: string[];
}

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------

const S = 'https://schemas.wp.org/wp/6.8/theme.json';
const V = 3;

/** Default blockTypes for background/gradient sections */
const BT_GCS: string[] = ['core/group', 'core/columns', 'core/column', 'core/stack', 'core/grid'];

/** Light-section element defaults (primary buttons, red links) */
const ELEMENTS_LIGHT = {
  button: {
    color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' },
    ':hover': { color: { background: 'var:preset|color|primary-alt' } },
  },
  link: {
    color: { text: 'var:preset|color|accent' },
    ':hover': { color: { text: 'var:preset|color|primary' } },
  },
  heading: { color: { text: 'var:preset|color|main' } },
};

/** Dark-section element defaults (inverted buttons, currentColor links) */
const ELEMENTS_DARK = (bgColor: string) => ({
  button: {
    color: { background: 'var:preset|color|base', text: `var:preset|color|${bgColor}` },
    ':hover': { color: { background: 'color-mix(in srgb, var(--wp--preset--color--base) 85%, transparent)' } },
  },
  link: {
    color: { text: 'currentColor' },
    ':hover': { color: { text: 'color-mix(in srgb, currentColor 75%, transparent)' } },
  },
  heading: { color: { text: 'var:preset|color|base' } },
});

// ---------------------------------------------------------------------------
// THE 9 ACTIVE SECTION STYLES
// ---------------------------------------------------------------------------

export const ALL_SECTION_STYLES: SectionStyleEntry[] = [

  // =========================================================================
  // CATEGORY: background (5 entries)
  // =========================================================================

  {
    id: 'section-white',
    name: 'section-white',
    label: 'Wit afdeling',
    labelEn: 'White Section',
    category: 'background',
    reactClass: 'bg-white',
    cssBackground: '--color--base',
    cssText: '--color--main',
    darkBg: '#0F1923',
    darkText: '#E8E8ED',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Wit afdeling',
      slug: 'section-white',
      blockTypes: BT_GCS,
      styles: {
        color: { background: 'var:preset|color|base', text: 'var:preset|color|main' },
        elements: ELEMENTS_LIGHT,
      },
    },
    templates: ['front-page.html', 'page.html', 'single.html', '404.html', 'archive.html', 'category.html', 'tag.html', 'search.html'],
    parts: ['header.html', 'footer.html'],
    patterns: ['page-home', 'page-about', 'page-subscribe', 'page-contact', 'hidden-404', 'hidden-no-search-results', 'homepage-top-stories', 'homepage-nuus', 'homepage-sport', 'homepage-skole', 'homepage-leefstyl', 'homepage-dink', 'homepage-sake', 'homepage-multimedia', 'homepage-events', 'woo-subscription-pricing-table', 'icon-service-grid'],
    wpFilePath: 'styles/sections/section-white.json',
    usedInReact: ['Home.tsx', 'About.tsx', 'Contact.tsx', 'Advertise.tsx'],
  },

  {
    id: 'section-muted',
    name: 'section-muted',
    label: 'Gedempte afdeling',
    labelEn: 'Muted Section',
    category: 'background',
    reactClass: 'bg-tertiary',
    cssBackground: '--color--tertiary',
    cssText: '--color--main',
    darkBg: '#162233',
    darkText: '#E8E8ED',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Gedempte afdeling',
      slug: 'section-muted',
      blockTypes: BT_GCS,
      styles: {
        color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main' },
        elements: ELEMENTS_LIGHT,
      },
    },
    templates: ['archive.html', 'category.html', 'tag.html', 'page.html', 'single.html', '404.html'],
    parts: ['sidebar.html', 'sidebar-home.html', 'sidebar-event.html'],
    patterns: ['archive-category-dink', 'archive-category-leefstyl', 'archive-category-nuus', 'archive-category-sake', 'archive-category-sport', 'page-about', 'page-subscribe', 'page-my-eeditions', 'page-faq', 'page-newsletter-archive', 'page-e-editions', 'page-newsletter', 'page-subscribe-delivery', 'page-subscribe-eedition', 'page-policies', 'page-team', 'page-advertise', 'hidden-404', 'hidden-no-search-results', 'section-newsletter-cta', 'section-newsletter-cta-full', 'section-newsletter-form', 'homepage-obituaries', 'sidebar-obituary', 'woo-empty-cart'],
    wpFilePath: 'styles/sections/section-muted.json',
    usedInReact: ['Home.tsx', 'PoliciesHub.tsx', 'FAQ.tsx'],
  },

  {
    id: 'section-navy',
    name: 'section-navy',
    label: 'Marine-afdeling',
    labelEn: 'Navy Section',
    category: 'background',
    reactClass: 'bg-[var(--wp--preset--color--secondary)] text-white',
    cssBackground: '--color--secondary',
    cssText: '#ffffff',
    darkBg: '#0A1018',
    darkText: '#E8E8ED',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Navy',
      slug: 'section-navy',
      blockTypes: BT_GCS,
      styles: {
        color: { background: 'var:preset|color|secondary', text: 'var:preset|color|base' },
        elements: ELEMENTS_DARK('secondary'),
      },
    },
    templates: ['front-page.html', 'page.html'],
    parts: ['footer.html'],
    patterns: ['page-about', 'page-subscribe', 'page-team', 'section-brand-quotes', 'section-subscription-cta', 'homepage-nuusflitse', 'icon-benefits-section'],
    wpFilePath: 'styles/sections/section-navy.json',
    usedInReact: ['Home.tsx', 'EEditions.tsx', 'Footer.tsx'],
  },

  {
    id: 'section-navy-light',
    name: 'section-navy-light',
    label: 'Marine-lig afdeling',
    labelEn: 'Navy Light Section',
    category: 'background',
    reactClass: 'bg-secondary-accent text-white',
    cssBackground: '--color--secondary-accent',
    cssText: '#ffffff',
    darkBg: '#253D54',
    darkText: '#E8E8ED',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Navy Light',
      slug: 'section-navy-light',
      blockTypes: BT_GCS,
      styles: {
        color: { background: 'var:preset|color|secondary-accent', text: 'var:preset|color|base' },
        elements: ELEMENTS_DARK('secondary-accent'),
      },
    },
    templates: ['page.html'],
    parts: [],
    patterns: ['section-pricing-table'],
    wpFilePath: 'styles/sections/section-navy-light.json',
    usedInReact: ['Home.tsx', 'EEditions.tsx'],
  },

  {
    id: 'section-red',
    name: 'section-red',
    label: 'Rooi afdeling',
    labelEn: 'Red Section',
    category: 'background',
    reactClass: 'bg-[var(--wp--preset--color--primary)] text-white',
    cssBackground: '--color--primary',
    cssText: '#ffffff',
    darkBg: '#E83050',
    darkText: '#ffffff',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Red',
      slug: 'section-red',
      blockTypes: BT_GCS,
      styles: {
        color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' },
        elements: ELEMENTS_DARK('primary'),
      },
    },
    templates: ['front-page.html', 'index.html'],
    parts: ['footer.html'],
    patterns: ['footer', 'cta'],
    wpFilePath: 'styles/sections/section-red.json',
    usedInReact: ['Home.tsx', 'EEditions.tsx'],
  },

  // =========================================================================
  // CATEGORY: gradient (1 entry)
  // =========================================================================

  {
    id: 'section-gradient-navy',
    name: 'section-gradient-navy',
    label: 'Gradiënt Marine',
    labelEn: 'Gradient Navy',
    category: 'gradient',
    reactClass: 'bg-gradient-to-br from-[var(--wp--preset--color--secondary)] to-[var(--wp--preset--color--secondary-accent)]',
    cssGradient: 'linear-gradient(135deg, var(--wp--preset--color--secondary), var(--wp--preset--color--secondary-accent))',
    darkGradient: 'linear-gradient(135deg, #0A1018, #162233)',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Gradiënt Marine',
      slug: 'section-gradient-navy',
      blockTypes: BT_GCS,
      styles: {
        color: {
          background: 'var:preset|color|secondary',
          text: 'var:preset|color|base',
          gradient: 'linear-gradient(135deg, var(--wp--preset--color--secondary) 0%, var(--wp--preset--color--secondary-accent) 100%)',
        },
        elements: ELEMENTS_DARK('secondary'),
      },
    },
    templates: ['page.html'],
    parts: [],
    patterns: ['section-contact-form'],
    wpFilePath: 'styles/sections/section-gradient-navy.json',
    usedInReact: ['Home.tsx', 'EEditions.tsx'],
  },

  // =========================================================================
  // CATEGORY: component (3 entries)
  // =========================================================================

  {
    id: 'section-hero-default',
    name: 'section-hero-default',
    label: 'Held-afdeling (Verstek)',
    labelEn: 'Hero Section (Default)',
    category: 'component',
    reactClass: 'relative min-h-[300px]',
    keyProperties: 'Min-height 300px, base background, main text',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Held-afdeling (Verstek)',
      slug: 'section-hero-default',
      blockTypes: ['core/group'],
      styles: {
        color: { background: 'var:preset|color|base', text: 'var:preset|color|main' },
        spacing: { padding: { top: 'var:preset|spacing|xxx-large', bottom: 'var:preset|spacing|xxx-large' } },
      },
    },
    templates: ['archive.html', 'category.html', 'tag.html', 'search.html', 'page.html'],
    parts: [],
    patterns: ['archive-category-dink', 'archive-category-leefstyl', 'archive-category-nuus', 'archive-category-sake', 'archive-category-sport', 'archive-search', 'page-my-eeditions', 'page-newsletter-manage', 'page-faq', 'page-newsletter-archive', 'page-search', 'page-e-editions'],
    wpFilePath: 'styles/sections/section-hero-default.json',
    usedInReact: ['Category.tsx', 'SearchResults.tsx'],
  },

  {
    id: 'section-cover-hero',
    name: 'section-cover-hero',
    label: 'Bedek-held',
    labelEn: 'Cover Hero',
    category: 'component',
    reactClass: 'min-h-[400px] flex items-center',
    keyProperties: 'Cover block variation with overlay',
    wpBlock: 'core/cover',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Bedek-held',
      slug: 'section-cover-hero',
      blockTypes: ['core/cover'],
      styles: {
        spacing: { padding: { top: 'var:preset|spacing|xxx-large', bottom: 'var:preset|spacing|xxx-large' } },
      },
    },
    templates: ['page.html'],
    parts: [],
    patterns: ['page-newsletter', 'page-subscribe-delivery', 'page-subscribe-eedition', 'page-policies', 'page-team', 'page-advertise'],
    wpFilePath: 'styles/sections/section-cover-hero.json',
    usedInReact: ['NewsletterSubscribe.tsx', 'About.tsx'],
  },

  {
    id: 'section-faq',
    name: 'section-faq',
    label: 'Vrae-afdeling',
    labelEn: 'FAQ Section',
    category: 'component',
    reactClass: 'Accordion',
    keyProperties: 'Border-bottom items, focused reading width',
    wpBlock: 'core/group',
    wpThemeJson: {
      $schema: S, version: V,
      title: 'Vrae-afdeling',
      slug: 'section-faq',
      blockTypes: BT_GCS,
      styles: {
        spacing: { blockGap: 'var:preset|spacing|small' },
      },
    },
    templates: ['page.html', 'single.html'],
    parts: [],
    patterns: ['page-faq', 'page-e-editions', 'page-newsletter', 'page-subscribe-delivery', 'section-faq'],
    wpFilePath: 'styles/sections/section-faq.json',
    usedInReact: ['EEditions.tsx', 'Advertise.tsx', 'FAQ.tsx'],
  },
];

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

/** Get all section styles that reference a given pattern slug (fuzzy match) */
export function getSectionStylesForPattern(slug: string): SectionStyleEntry[] {
  const shortSlug = slug.replace('die-papier/', '');
  return ALL_SECTION_STYLES.filter(s =>
    s.patterns.some(p => p === shortSlug || shortSlug.includes(p) || p.includes(shortSlug)),
  );
}

/** Build a Map<patternSlug, SectionStyleEntry[]> for quick lookups */
export function buildPatternToSectionStylesMap(): Map<string, SectionStyleEntry[]> {
  const m = new Map<string, SectionStyleEntry[]>();
  for (const s of ALL_SECTION_STYLES) {
    for (const p of s.patterns) {
      const a = m.get(p) || [];
      a.push(s);
      m.set(p, a);
    }
  }
  return m;
}

// ---------------------------------------------------------------------------
// Disk JSON loaders (full block-level overrides)
// ---------------------------------------------------------------------------

let _cache: Map<string, WpThemeJsonSectionStyle> | null = null;

/** Load ALL section style JSON files from disk into a Map<slug, json> */
export async function loadSectionStylesFromDisk(): Promise<Map<string, WpThemeJsonSectionStyle>> {
  if (_cache) return _cache;
  const pairs = await loadAllWpJsonFiles<WpThemeJsonSectionStyle>(wpSectionStyles);
  const m = new Map<string, WpThemeJsonSectionStyle>();
  for (const [filename, json] of pairs) {
    m.set(filename.replace('.json', ''), json);
  }
  _cache = m;
  return m;
}

/** Load a single section style JSON from disk by slug */
export async function loadSectionStyleJson(slug: string): Promise<WpThemeJsonSectionStyle | null> {
  return loadWpJsonFile<WpThemeJsonSectionStyle>(wpSectionStyles, slug + '.json');
}

/** Replace inline wpThemeJson with the full disk version (if available) */
export async function getEnrichedSectionStyle(entry: SectionStyleEntry): Promise<SectionStyleEntry> {
  const diskJson = await loadSectionStyleJson(entry.id);
  return diskJson ? { ...entry, wpThemeJson: diskJson } : entry;
}

// ---------------------------------------------------------------------------
// Analysis helpers
// ---------------------------------------------------------------------------

/** Count block-level overrides in a section style JSON */
export function countBlockOverrides(json: WpThemeJsonSectionStyle): number {
  const blocks = (json.styles as Record<string, unknown>)?.blocks;
  return blocks && typeof blocks === 'object' ? Object.keys(blocks).length : 0;
}

/** Count element-level overrides in a section style JSON */
export function countElements(json: WpThemeJsonSectionStyle): number {
  const elements = (json.styles as Record<string, unknown>)?.elements;
  return elements && typeof elements === 'object' ? Object.keys(elements).length : 0;
}