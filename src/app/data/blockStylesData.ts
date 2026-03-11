/**
 * Block Styles Data — Structured registry of all WordPress block style variations.
 * Source: /guidelines/wordpress-migration/block-styles.md
 * Used by: BlockStyleBrowser (/ontwikkelaar/block-styles)
 *
 * Format reference: WordPress theme.json v3 block style variation files
 * - TwentyTwentyFive: https://github.com/WordPress/twentytwentyfive/tree/trunk/styles/blocks/
 * - Ollie: https://github.com/OllieWP/ollie/tree/main/styles/blocks/
 *
 * Updated: 2026-03-04 (Block styles folder structure cleanup — all core blocks moved to core/)
 */

import { wpBlockStyles, loadWpJsonFile, loadAllWpJsonFiles } from './wpFileLoader';

export type BlockStyleCategory = 'core' | 'woocommerce' | 'third-party';

/** WordPress theme.json v3 block style variation file format */
export interface WpThemeJsonBlockStyle {
  $schema: string;
  version: number;
  title: string;
  slug: string;
  blockTypes: string[];
  styles: Record<string, unknown>;
  settings?: Record<string, unknown>; // for icon settings file
}

export interface BlockStyleEntry {
  id: string;
  /** Style variation name (used as className `.is-style-{name}`) */
  name: string;
  /** Display label shown in WordPress editor */
  label: string;
  /** Block the style applies to (e.g. core/button, core/group) */
  targetBlock: string;
  /** Category for filtering */
  category: BlockStyleCategory;
  /** CSS class auto-generated */
  cssClass: string;
  /** Description of the visual treatment */
  description: string;
  /** JSON schema — the style object from theme.json (legacy — use wpThemeJson for full v3 output) */
  jsonStyle: Record<string, unknown>;
  /** Full WordPress theme.json v3 block style variation file (the actual file that lives on disk) */
  wpThemeJson: WpThemeJsonBlockStyle;
  /** CSS fallback code */
  cssFallback: string;
  /** Where the style is used in React components */
  usedIn: string[];
  /** Related patterns that use this block style */
  patterns: string[];
  /** JSON file path in WordPress export */
  wpFilePath: string;
  /** CSS file path in WordPress export (if custom CSS is needed beyond JSON) */
  cssFilePath?: string;
  /** Whether this is a default style for the block type */
  isDefault: boolean;
}

const SCHEMA = 'https://schemas.wp.org/wp/6.8/theme.json';
const V = 3;

// ─── Core Button Styles ─────────────────────────────────────────────────
const BUTTON_STYLES: BlockStyleEntry[] = [
  {
    id: 'button-default',
    name: 'default',
    label: 'Solid',
    targetBlock: 'core/button',
    category: 'core',
    cssClass: '',
    description: 'Solid background (#E82C27 brand red), white text. Primary CTA button.',
    jsonStyle: { color: { text: 'var:preset|color|base', background: 'var:preset|color|primary' }, border: { radius: 'var:preset|border-radius|400' }, spacing: { padding: { top: 'var:preset|spacing|x-small', bottom: 'var:preset|spacing|x-small', left: 'var:preset|spacing|medium', right: 'var:preset|spacing|medium' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Solid', slug: 'button-default',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' },
        ':hover': { color: { background: 'var:preset|color|primary-alt', text: 'var:preset|color|base' } },
      },
    },
    cssFallback: '.wp-block-button__link { background: var(--wp--preset--color--primary); color: var(--wp--preset--color--base); border-radius: var(--wp--preset--border-radius--400); padding: var(--wp--preset--spacing--x-small) var(--wp--preset--spacing--medium); }',
    usedIn: ['PricingTable.tsx', 'SubscribeEEdition.tsx', 'NewsletterCTA.tsx'],
    patterns: ['section-pricing-table', 'section-newsletter-cta', 'page-subscribe-eedition'],
    wpFilePath: 'styles/blocks/button/button-default.json',
    isDefault: true,
  },
  {
    id: 'button-outline',
    name: 'outline',
    label: 'Outline',
    targetBlock: 'core/button',
    category: 'core',
    cssClass: '.is-style-outline',
    description: 'Transparent background, red border, red text. Secondary CTA button.',
    jsonStyle: { color: { text: 'var:preset|color|primary', background: 'transparent' }, border: { color: 'var:preset|color|primary', width: '1px', radius: 'var:preset|border-radius|400' }, spacing: { padding: { top: 'var:preset|spacing|x-small', bottom: 'var:preset|spacing|x-small', left: 'var:preset|spacing|medium', right: 'var:preset|spacing|medium' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Outline', slug: 'button-outline',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'transparent', text: 'var:preset|color|primary' },
        border: { color: 'var:preset|color|primary', width: '1px' },
        ':hover': { color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' } },
      },
    },
    cssFallback: '.is-style-outline .wp-block-button__link { background: transparent; color: var(--wp--preset--color--primary); border: 1px solid var(--wp--preset--color--primary); border-radius: var(--wp--preset--border-radius--400); }',
    usedIn: ['About.tsx', 'Contact.tsx'],
    patterns: ['page-about', 'page-contact'],
    wpFilePath: 'styles/blocks/button/outline.json',
    isDefault: false,
  },
  {
    id: 'button-ghost',
    name: 'ghost',
    label: 'Ghost',
    targetBlock: 'core/button',
    category: 'core',
    cssClass: '.is-style-ghost',
    description: 'No background, red text, hover underline. Tertiary/text-link button.',
    jsonStyle: { color: { text: 'var:preset|color|primary', background: 'transparent' }, border: { width: '0' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Ghost', slug: 'button-ghost',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'transparent', text: 'var:preset|color|primary' },
        border: { width: '0' },
        ':hover': { color: { text: 'var:preset|color|primary-alt' } },
      },
    },
    cssFallback: '.is-style-ghost .wp-block-button__link { background: transparent; color: var(--wp--preset--color--primary); border: none; text-decoration: underline; }',
    usedIn: ['ArticleHero.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/button/button-ghost.json',
    isDefault: false,
  },
  {
    id: 'button-arrow',
    name: 'arrow',
    label: 'Arrow Link',
    targetBlock: 'core/button',
    category: 'core',
    cssClass: '.is-style-arrow',
    description: 'Text with trailing arrow icon (→). Navigation-style link button.',
    jsonStyle: { color: { text: 'var:preset|color|primary', background: 'transparent' }, border: { width: '0' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Arrow Link', slug: 'button-arrow',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'transparent', text: 'var:preset|color|primary' },
        border: { width: '0' },
      },
    },
    cssFallback: '.is-style-arrow .wp-block-button__link::after { content: " →"; } .is-style-arrow .wp-block-button__link { color: var(--wp--preset--color--primary); }',
    usedIn: ['NewsCard.tsx', 'SponsorBanner.tsx'],
    patterns: ['section-sponsor-banner'],
    wpFilePath: 'styles/blocks/button/button-arrow.json',
    isDefault: false,
  },
  {
    id: 'button-dark',
    name: 'dark',
    label: 'Dark',
    targetBlock: 'core/button',
    category: 'color',
    cssClass: '.is-style-dark',
    description: 'Navy background with white text. Matches Ollie button-dark pattern.',
    jsonStyle: { color: { background: 'var:preset|color|secondary', text: 'var:preset|color|base' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Dark', slug: 'button-dark',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'var:preset|color|secondary', text: 'var:preset|color|base' },
        ':hover': { color: { background: 'color-mix(in srgb, var(--wp--preset--color--secondary) 85%, transparent)' } },
      },
    },
    cssFallback: '.is-style-dark .wp-block-button__link { background: var(--wp--preset--color--secondary); color: var(--wp--preset--color--base); }',
    usedIn: ['Footer.tsx', 'ContentHero.tsx'],
    patterns: ['section-content-hero'],
    wpFilePath: 'styles/blocks/button/button-dark.json',
    isDefault: false,
  },
  {
    id: 'button-light',
    name: 'light',
    label: 'Light',
    targetBlock: 'core/button',
    category: 'color',
    cssClass: '.is-style-light',
    description: 'White/base background with navy text. Inverse of dark button. Matches Ollie button-light pattern.',
    jsonStyle: { color: { background: 'var:preset|color|base', text: 'var:preset|color|secondary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Light', slug: 'button-light',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'var:preset|color|base', text: 'var:preset|color|secondary' },
        ':hover': { color: { background: 'var:preset|color|tertiary' } },
      },
    },
    cssFallback: '.is-style-light .wp-block-button__link { background: var(--wp--preset--color--base); color: var(--wp--preset--color--secondary); }',
    usedIn: ['NewsletterCTA.tsx'],
    patterns: ['section-newsletter-cta'],
    wpFilePath: 'styles/blocks/button/button-light.json',
    isDefault: false,
  },
  {
    id: 'button-tint',
    name: 'tint',
    label: 'Tint',
    targetBlock: 'core/button',
    category: 'color',
    cssClass: '.is-style-tint',
    description: 'Soft tinted background (tertiary) with dark text. Matches Ollie button-tint pattern.',
    jsonStyle: { color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|secondary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Tint', slug: 'button-tint',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|secondary' },
        ':hover': { color: { background: 'var:preset|color|border-light' } },
      },
    },
    cssFallback: '.is-style-tint .wp-block-button__link { background: var(--wp--preset--color--tertiary); color: var(--wp--preset--color--secondary); }',
    usedIn: ['About.tsx'],
    patterns: ['page-about'],
    wpFilePath: 'styles/blocks/button/button-tint.json',
    isDefault: false,
  },
  {
    id: 'button-soft',
    name: 'soft',
    label: 'Soft',
    targetBlock: 'core/button',
    category: 'color',
    cssClass: '.is-style-soft',
    description: 'Soft tertiary background with contrast text. Subtle de-emphasized button.',
    jsonStyle: { color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Soft', slug: 'button-soft',
      blockTypes: ['core/button'],
      styles: {
        color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main' },
        border: { width: '0' },
        ':hover': { color: { background: 'var:preset|color|border-light' } },
      },
    },
    cssFilePath: 'style.css',
    usedIn: ['FAQPage.tsx'],
    patterns: ['page-faq'],
    wpFilePath: 'styles/blocks/button/soft.json',
    isDefault: false,
  },
];

// ─── Core Image Styles ──────────────────────────────────────────────────
const IMAGE_STYLES: BlockStyleEntry[] = [
  {
    id: 'image-rounded',
    name: 'rounded',
    label: 'Rounded',
    targetBlock: 'core/image',
    category: 'core',
    cssClass: '.is-style-rounded',
    description: '8px border radius. Standard rounded image treatment.',
    jsonStyle: { border: { radius: 'var:preset|border-radius|400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Rounded', slug: 'image-rounded',
      blockTypes: ['core/image'],
      styles: { border: { radius: 'var:preset|border-radius|400' } },
    },
    cssFallback: '.is-style-rounded img { border-radius: var(--wp--preset--border-radius--400); }',
    usedIn: ['NewsCard.tsx', 'About.tsx'],
    patterns: ['section-related-articles', 'page-about'],
    wpFilePath: 'styles/blocks/core/image/rounded.json',
    isDefault: false,
  },
  {
    id: 'image-circular',
    name: 'circular',
    label: 'Circular',
    targetBlock: 'core/image',
    category: 'core',
    cssClass: '.is-style-circular',
    description: '50% border radius. Used for team member / author photos.',
    jsonStyle: { border: { radius: '50%' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Circular', slug: 'image-circular',
      blockTypes: ['core/image'],
      styles: { border: { radius: '50%' } },
    },
    cssFallback: '.is-style-circular img { border-radius: 50%; }',
    usedIn: ['Team.tsx', 'Author.tsx'],
    patterns: ['section-team-grid'],
    wpFilePath: 'styles/blocks/core/image/circular.json',
    isDefault: false,
  },
  {
    id: 'image-shadow',
    name: 'shadow',
    label: 'Shadow',
    targetBlock: 'core/image',
    category: 'core',
    cssClass: '.is-style-shadow',
    description: 'Drop shadow for featured images. Adds depth to prominent images.',
    jsonStyle: { shadow: 'var:preset|shadow|200' },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Shadow', slug: 'image-shadow',
      blockTypes: ['core/image'],
      styles: { shadow: 'var:preset|shadow|200' },
    },
    cssFallback: '.is-style-shadow img { box-shadow: var(--wp--preset--shadow--200); }',
    usedIn: ['ArticleHero.tsx', 'EEditions.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/image/shadow.json',
    isDefault: false,
  },
  {
    id: 'image-caption-overlay',
    name: 'caption-overlay',
    label: 'Caption Overlay',
    targetBlock: 'core/image',
    category: 'core',
    cssClass: '.is-style-caption-overlay',
    description: 'Caption overlaid on image bottom with gradient background. Used for hero images with attribution.',
    jsonStyle: { border: { radius: 'var:preset|border-radius|400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Caption Overlay', slug: 'image-caption-overlay',
      blockTypes: ['core/image'],
      styles: { border: { radius: 'var:preset|border-radius|400' } },
    },
    cssFallback: '.is-style-caption-overlay { position: relative; overflow: hidden; } .is-style-caption-overlay figcaption { position: absolute; bottom: 0; left: 0; right: 0; padding: var(--wp--preset--spacing--medium); background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: var(--wp--preset--color--base); }',
    cssFilePath: 'style.css',
    usedIn: ['ArticleHero.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/image/caption-overlay.json',
    isDefault: false,
  },
];

// ─── Heading Typography Styles ──────────────────────────────────────────
const HEADING_STYLES: BlockStyleEntry[] = [
  {
    id: 'heading-section-title',
    name: 'section-title',
    label: 'Section Title',
    targetBlock: 'core/heading',
    category: 'typography',
    cssClass: '.is-style-section-title',
    description: 'H6-style uppercase Inter heading (16px, weight 600, +0.8px tracking). Section headers, category labels, eyebrow text.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-sans', fontSize: 'var:preset|font-size|small', lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '600', textTransform: 'uppercase' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Section Title', slug: 'heading-section-title',
      blockTypes: ['core/heading'],
      styles: { typography: { fontFamily: 'var:preset|font-family|brand-sans', fontSize: 'var:preset|font-size|small', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' } },
    },
    cssFallback: '.is-style-section-title { font-family: var(--wp--preset--font-family--brand-sans); font-size: 16px; line-height: 24px; letter-spacing: 0.8px; font-weight: 600; text-transform: uppercase; }',
    usedIn: ['Home.tsx', 'Category.tsx', 'NewsletterCTA.tsx'],
    patterns: ['page-home', 'archive-default', 'section-newsletter-cta'],
    wpFilePath: 'styles/blocks/core/heading/section-title.json',
    isDefault: false,
  },
  {
    id: 'heading-display',
    name: 'display',
    label: 'Display',
    targetBlock: 'core/heading',
    category: 'typography',
    cssClass: '.is-style-display',
    description: 'H1-style display heading for hero sections (fluid scaling Roboto Serif).',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|xxx-large', lineHeight: '1.1', fontWeight: '400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Display', slug: 'heading-display',
      blockTypes: ['core/heading'],
      styles: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|xxx-large', fontWeight: '400' } },
    },
    cssFallback: '.is-style-display { font-family: var(--wp--preset--font-family--brand-serif); font-size: clamp(2.25rem, 1.92rem + 1.35vw, 3rem); line-height: 1.1; letter-spacing: -0.24px; font-weight: 400; }',
    usedIn: ['NewsletterCTA.tsx', 'ContentHero.tsx'],
    patterns: ['section-newsletter-cta-full', 'section-content-hero'],
    wpFilePath: 'styles/blocks/core/heading/display.json',
    isDefault: false,
  },
  {
    id: 'heading-card-compact',
    name: 'card-compact',
    label: 'Card Compact',
    targetBlock: 'core/heading',
    category: 'typography',
    cssClass: '.is-style-card-compact',
    description: 'Compact card heading (16px Roboto Serif). News card headings, event cards, competition cards.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|small', lineHeight: '1.5', fontWeight: '400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Card Compact', slug: 'heading-card-compact',
      blockTypes: ['core/heading'],
      styles: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|small', fontWeight: '400' } },
    },
    cssFallback: '.is-style-card-compact { font-family: var(--wp--preset--font-family--brand-serif); font-size: 16px; line-height: 24px; letter-spacing: 0; font-weight: 400; }',
    usedIn: ['NewsCard.tsx', 'CompetitionCard.tsx', 'EventCard.tsx'],
    patterns: ['section-related-articles', 'archive-default'],
    wpFilePath: 'styles/blocks/core/heading/card-compact.json',
    isDefault: false,
  },
  {
    id: 'heading-subtitle',
    name: 'subtitle',
    label: 'Subtitle',
    targetBlock: 'core/heading',
    category: 'typography',
    cssClass: '.is-style-subtitle',
    description: 'Lighter weight heading for subtitles and secondary headings. Inter sans-serif, normal weight, muted color.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-sans', fontSize: 'var:preset|font-size|base', fontWeight: '400', letterSpacing: '0.01em' }, color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Subtitle', slug: 'heading-subtitle',
      blockTypes: ['core/heading'],
      styles: {
        typography: { fontFamily: 'var:preset|font-family|brand-sans', fontSize: 'var:preset|font-size|base', fontWeight: '400', letterSpacing: '0.01em' },
        color: { text: 'var:preset|color|main-accent' },
      },
    },
    cssFallback: '.is-style-subtitle { font-family: var(--wp--preset--font-family--brand-sans); font-weight: 400; color: var(--wp--preset--color--main-accent); }',
    usedIn: ['About.tsx', 'ContentHero.tsx'],
    patterns: ['page-about', 'section-content-hero'],
    wpFilePath: 'styles/blocks/core/heading/subtitle.json',
    isDefault: false,
  },
];

// ─── Separator Styles ───────────────────────────────────────────────────
const SEPARATOR_STYLES: BlockStyleEntry[] = [
  {
    id: 'separator-brand-line',
    name: 'brand-line',
    label: 'Brand Line',
    targetBlock: 'core/separator',
    category: 'core',
    cssClass: '.is-style-brand-line',
    description: 'Gradient red line separator. 3px height, brand red gradient.',
    jsonStyle: { color: { background: 'linear-gradient(90deg, var(--wp--preset--color--primary), transparent)' }, border: { width: '0' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Brand Line', slug: 'separator-brand-line',
      blockTypes: ['core/separator'],
      styles: { color: { text: 'var:preset|color|primary' }, border: { width: '0' } },
    },
    cssFallback: '.is-style-brand-line hr { height: 3px; background: linear-gradient(90deg, var(--wp--preset--color--primary), transparent); border: none; }',
    usedIn: ['Article.tsx', 'About.tsx'],
    patterns: ['page-about'],
    wpFilePath: 'styles/blocks/core/separator/brand-line.json',
    isDefault: false,
  },
  {
    id: 'separator-dots',
    name: 'dots',
    label: 'Dots',
    targetBlock: 'core/separator',
    category: 'core',
    cssClass: '.is-style-dots',
    description: 'Three centered dots separator. Content break indicator.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Dots', slug: 'separator-dots',
      blockTypes: ['core/separator'],
      styles: { color: { text: 'color-mix(in srgb, currentColor 50%, transparent)' } },
    },
    cssFallback: '.is-style-dots hr { border: none; text-align: center; } .is-style-dots hr::before { content: "•••"; letter-spacing: 1em; color: var(--muted-foreground); }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/separator/dots.json',
    isDefault: false,
  },
  {
    id: 'separator-wide',
    name: 'wide',
    label: 'Wide',
    targetBlock: 'core/separator',
    category: 'core',
    cssClass: '.is-style-wide',
    description: 'Full-width separator line. Stretches to container width unlike default 100px max-width.',
    jsonStyle: { border: { width: '0' }, dimensions: { maxWidth: '100%' }, color: { background: 'var:preset|color|tertiary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Wide', slug: 'separator-wide',
      blockTypes: ['core/separator'],
      styles: { border: { width: '0' }, dimensions: { maxWidth: '100%' }, color: { background: 'var:preset|color|tertiary' } },
    },
    cssFallback: '.is-style-wide { max-width: 100%; width: 100%; border: none; height: 1px; background: var(--wp--preset--color--tertiary); }',
    cssFilePath: 'style.css',
    usedIn: ['Article.tsx', 'Footer.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/separator/wide.json',
    isDefault: false,
  },
  {
    id: 'separator-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/separator',
    category: 'core',
    cssClass: '',
    description: 'Default separator styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'separator-default',
      blockTypes: ['core/separator'],
      styles: {},
    },
    cssFallback: '',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/separator/default.json',
    isDefault: true,
  },
];

// ─── Additional Core Block Styles ────────────────────────────────────────
const ADDITIONAL_CORE_STYLES: BlockStyleEntry[] = [
  // ── Buttons (container) ──
  {
    id: 'buttons-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/buttons',
    category: 'core',
    cssClass: '',
    description: 'Default buttons container styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'buttons-default',
      blockTypes: ['core/buttons'],
      styles: {},
    },
    cssFallback: '',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/buttons/default.json',
    isDefault: true,
  },
  // ── Columns ──
  {
    id: 'columns-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/columns',
    category: 'core',
    cssClass: '',
    description: 'Default columns layout styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'columns-default',
      blockTypes: ['core/columns'],
      styles: {},
    },
    cssFallback: '',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/columns/default.json',
    isDefault: true,
  },
  // ── List ──
  {
    id: 'list-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/list',
    category: 'core',
    cssClass: '',
    description: 'Default list styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'list-default',
      blockTypes: ['core/list'],
      styles: {},
    },
    cssFallback: '',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/list/default.json',
    isDefault: true,
  },
  {
    id: 'list-no-bullets',
    name: 'no-bullets',
    label: 'No Bullets',
    targetBlock: 'core/list',
    category: 'core',
    cssClass: '.is-style-no-bullets',
    description: 'List without bullet markers, with zero left padding/margin.',
    jsonStyle: { spacing: { padding: { left: '0' }, margin: { left: '0' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'No Bullets', slug: 'no-bullets',
      blockTypes: ['core/list'],
      styles: { spacing: { padding: { left: '0' }, margin: { left: '0' } }, css: 'list-style-type: none;' },
    },
    cssFallback: '.is-style-no-bullets { list-style-type: none; padding-left: 0; margin-left: 0; }',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/list/no-bullets.json',
    isDefault: false,
  },
  // ── Navigation ──
  {
    id: 'navigation-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/navigation',
    category: 'core',
    cssClass: '',
    description: 'Default navigation styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'navigation-default',
      blockTypes: ['core/navigation'],
      styles: {},
    },
    cssFallback: '',
    usedIn: ['Header.tsx'],
    patterns: ['die-papier/header'],
    wpFilePath: 'styles/blocks/core/navigation/default.json',
    isDefault: true,
  },
  // ── Paragraph ──
  {
    id: 'paragraph-lead',
    name: 'lead',
    label: 'Lead',
    targetBlock: 'core/paragraph',
    category: 'typography',
    cssClass: '.is-style-lead',
    description: 'Larger introductory paragraph (1.25rem, line-height 1.6, muted color).',
    jsonStyle: { typography: { fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '400' }, color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Lead', slug: 'paragraph-lead',
      blockTypes: ['core/paragraph'],
      styles: { typography: { fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '400' }, color: { text: 'var:preset|color|main-accent' } },
    },
    cssFallback: '.is-style-lead { font-size: 1.25rem; line-height: 1.6; font-weight: 400; color: var(--wp--preset--color--main-accent); }',
    usedIn: ['Article.tsx', 'About.tsx'],
    patterns: ['page-about'],
    wpFilePath: 'styles/blocks/core/paragraph/lead.json',
    isDefault: false,
  },
  {
    id: 'paragraph-badge',
    name: 'badge',
    label: 'Badge',
    targetBlock: 'core/paragraph',
    category: 'typography',
    cssClass: '.is-style-badge',
    description: 'Pill-shaped badge text (0.75rem, bold uppercase, tertiary background, full border radius).',
    jsonStyle: { typography: { fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: '1' }, spacing: { padding: { top: '4px', bottom: '4px', left: '12px', right: '12px' } }, border: { radius: '9999px' }, color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Badge', slug: 'paragraph-badge',
      blockTypes: ['core/paragraph'],
      styles: { typography: { fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: '1' }, spacing: { padding: { top: '4px', bottom: '4px', left: '12px', right: '12px' } }, border: { radius: '9999px' }, color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main' } },
    },
    cssFallback: '.is-style-badge { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 12px; border-radius: 9999px; background: var(--wp--preset--color--tertiary); color: var(--wp--preset--color--main); }',
    usedIn: ['NewsCard.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/paragraph/badge.json',
    isDefault: false,
  },
  // ── Post Date ──
  {
    id: 'post-date-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/post-date',
    category: 'core',
    cssClass: '',
    description: 'Default post date styling with small font size.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'post-date-default',
      blockTypes: ['core/post-date'],
      styles: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' } },
    },
    cssFallback: '.wp-block-post-date { font-size: var(--wp--preset--font-size--small); color: var(--wp--preset--color--main-accent); }',
    usedIn: ['NewsCard.tsx', 'Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/post-date/default.json',
    isDefault: true,
  },
  // ── Post Terms ──
  {
    id: 'post-terms-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/post-terms',
    category: 'core',
    cssClass: '',
    description: 'Default post terms styling.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'post-terms-default',
      blockTypes: ['core/post-terms'],
      styles: { color: { text: 'var:preset|color|main' } },
    },
    cssFallback: '.wp-block-post-terms { color: var(--wp--preset--color--main); }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/post-terms/default.json',
    isDefault: true,
  },
  // ── Post Title ──
  {
    id: 'post-title-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/post-title',
    category: 'core',
    cssClass: '',
    description: 'Default post title styling with x-large font and tight line-height.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|x-large', lineHeight: '1.18' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'post-title-default',
      blockTypes: ['core/post-title'],
      styles: { typography: { fontSize: 'var:preset|font-size|x-large', lineHeight: '1.18' } },
    },
    cssFallback: '.wp-block-post-title { font-size: var(--wp--preset--font-size--x-large); line-height: 1.18; }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/post-title/default.json',
    isDefault: true,
  },
  // ── Pullquote ──
  {
    id: 'pullquote-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/pullquote',
    category: 'core',
    cssClass: '',
    description: 'Default pullquote styling with large font size.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|large' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'pullquote-default',
      blockTypes: ['core/pullquote'],
      styles: { typography: { fontSize: 'var:preset|font-size|large' } },
    },
    cssFallback: '.wp-block-pullquote { font-size: var(--wp--preset--font-size--large); }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/pullquote/default.json',
    isDefault: true,
  },
  // ── Quote ──
  {
    id: 'quote-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/quote',
    category: 'core',
    cssClass: '',
    description: 'Default quote styling.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'quote-default',
      blockTypes: ['core/quote'],
      styles: { color: { text: 'var:preset|color|main' } },
    },
    cssFallback: '.wp-block-quote { color: var(--wp--preset--color--main); }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/quote/default.json',
    isDefault: true,
  },
  {
    id: 'quote-border-left',
    name: 'border-left',
    label: 'Border Left',
    targetBlock: 'core/quote',
    category: 'core',
    cssClass: '.is-style-border-left',
    description: 'Quote with 4px brand red left border and 24px left padding.',
    jsonStyle: { border: { left: { color: 'var:preset|color|primary', width: '4px', style: 'solid' } }, spacing: { padding: { left: '24px' } }, color: { background: 'transparent' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Border Left', slug: 'quote-border-left',
      blockTypes: ['core/quote'],
      styles: { border: { left: { color: 'var:preset|color|primary', width: '4px', style: 'solid' } }, spacing: { padding: { left: '24px' } }, color: { background: 'transparent' } },
    },
    cssFallback: '.is-style-border-left { border-left: 4px solid var(--wp--preset--color--primary); padding-left: 24px; background: transparent; }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/quote/border-left.json',
    isDefault: false,
  },
  {
    id: 'quote-large-serif',
    name: 'large-serif',
    label: 'Large Serif',
    targetBlock: 'core/quote',
    category: 'typography',
    cssClass: '.is-style-large-serif',
    description: 'Large italic serif quote (1.5rem Roboto Serif) centered with no borders. Citation in small sans-serif.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: '1.5rem', fontStyle: 'italic', lineHeight: '1.4' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Large Serif', slug: 'quote-large-serif',
      blockTypes: ['core/quote'],
      styles: {
        typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: '1.5rem', fontStyle: 'italic', lineHeight: '1.4' },
        spacing: { padding: { top: 'var:preset|spacing|large', bottom: 'var:preset|spacing|large' } },
        elements: { cite: { typography: { fontSize: 'var:preset|font-size|x-small', fontFamily: 'var:preset|font-family|brand-sans', fontStyle: 'normal' }, color: { text: 'var:preset|color|main-accent' } } },
        css: 'border: none; text-align: center;',
      },
    },
    cssFallback: '.is-style-large-serif { font-family: var(--wp--preset--font-family--brand-serif); font-size: 1.5rem; font-style: italic; line-height: 1.4; border: none; text-align: center; }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/quote/large-serif.json',
    isDefault: false,
  },
  {
    id: 'quote-plain',
    name: 'plain',
    label: 'Plain',
    targetBlock: 'core/quote',
    category: 'core',
    cssClass: '.is-style-plain',
    description: 'Borderless, padding-free quote for minimal styling.',
    jsonStyle: { border: { color: 'transparent', style: 'none', width: '0', radius: '0' }, spacing: { padding: { top: '0', right: '0', bottom: '0', left: '0' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Plain', slug: 'quote-plain',
      blockTypes: ['core/quote'],
      styles: { border: { color: 'transparent', style: 'none', width: '0', radius: '0' }, spacing: { padding: { top: '0', right: '0', bottom: '0', left: '0' } } },
    },
    cssFallback: '.is-style-plain { border: none; padding: 0; }',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/quote/plain.json',
    isDefault: false,
  },
  {
    id: 'quote-pull-quote',
    name: 'pull-quote',
    label: 'Pull Quote',
    targetBlock: 'core/quote',
    category: 'typography',
    cssClass: '.is-style-pull-quote',
    description: 'Centered serif italic quote with top+bottom red border lines. Citation in small sans-serif.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|large', fontStyle: 'italic', fontWeight: '400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Pull Quote', slug: 'quote-pull-quote',
      blockTypes: ['core/quote'],
      styles: {
        typography: { fontFamily: 'var:preset|font-family|brand-serif', fontSize: 'var:preset|font-size|large', fontStyle: 'italic', fontWeight: '400' },
        border: { top: { width: '4px', style: 'solid', color: 'var:preset|color|primary' }, bottom: { width: '4px', style: 'solid', color: 'var:preset|color|primary' }, left: { width: '0' }, right: { width: '0' } },
        spacing: { padding: { top: 'var:preset|spacing|medium', bottom: 'var:preset|spacing|medium' } },
        elements: { cite: { typography: { fontSize: 'var:preset|font-size|x-small', fontFamily: 'var:preset|font-family|brand-sans', fontStyle: 'normal' }, color: { text: 'var:preset|color|main-accent' } } },
        css: 'text-align: center;',
      },
    },
    cssFallback: '.is-style-pull-quote { font-family: var(--wp--preset--font-family--brand-serif); font-style: italic; border-top: 4px solid var(--wp--preset--color--primary); border-bottom: 4px solid var(--wp--preset--color--primary); text-align: center; }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/core/quote/pull-quote.json',
    isDefault: false,
  },
  // ── Search ──
  {
    id: 'search-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/search',
    category: 'core',
    cssClass: '',
    description: 'Default search block styling.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'search-default',
      blockTypes: ['core/search'],
      styles: { color: { text: 'var:preset|color|main' } },
    },
    cssFallback: '.wp-block-search { color: var(--wp--preset--color--main); }',
    usedIn: ['Header.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/search/default.json',
    isDefault: true,
  },
  // ── Site Title ──
  {
    id: 'site-title-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'core/site-title',
    category: 'core',
    cssClass: '',
    description: 'Default site title styling.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'site-title-default',
      blockTypes: ['core/site-title'],
      styles: { color: { text: 'var:preset|color|main' } },
    },
    cssFallback: '.wp-block-site-title { color: var(--wp--preset--color--main); }',
    usedIn: ['Header.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/site-title/default.json',
    isDefault: true,
  },
  // ── Table ──
  {
    id: 'table-borderless',
    name: 'borderless',
    label: 'Borderless',
    targetBlock: 'core/table',
    category: 'core',
    cssClass: '.is-style-borderless',
    description: 'Table with no borders and alternating row striping (tertiary background).',
    jsonStyle: { border: { top: { width: '0px', style: 'none' }, right: { width: '0px', style: 'none' }, bottom: { width: '0px', style: 'none' }, left: { width: '0px', style: 'none' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Borderless', slug: 'table-borderless',
      blockTypes: ['core/table'],
      styles: { border: { top: { width: '0px', style: 'none' }, right: { width: '0px', style: 'none' }, bottom: { width: '0px', style: 'none' }, left: { width: '0px', style: 'none' } }, css: '& table, & td, & th { border: none; } & tr:nth-child(even) { background: var(--wp--preset--color--tertiary); }' },
    },
    cssFallback: '.is-style-borderless table, .is-style-borderless td, .is-style-borderless th { border: none; } .is-style-borderless tr:nth-child(even) { background: var(--wp--preset--color--tertiary); }',
    usedIn: [],
    patterns: [],
    wpFilePath: 'styles/blocks/core/table/borderless.json',
    isDefault: false,
  },
];

// ─── Color-Based Block Styles ──────────────────────────────────────────
const COLOR_STYLES: BlockStyleEntry[] = [
  {
    id: 'group-navy-background',
    name: 'navy-background',
    label: 'Navy Background',
    targetBlock: 'core/group',
    category: 'color',
    cssClass: '.is-style-navy-background',
    description: 'Full-width sections with brand navy background and white text. Common for CTAs, hero sections, footer areas.',
    jsonStyle: { color: { text: 'var:preset|color|base', background: 'var:preset|color|secondary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Navy Background', slug: 'group-navy',
      blockTypes: ['core/group', 'core/columns', 'core/column'],
      styles: {
        color: { background: 'var:preset|color|secondary', text: 'var:preset|color|base' },
        blocks: {
          'core/separator': { color: { text: 'color-mix(in srgb, currentColor 25%, transparent)' } },
          'core/post-date': { color: { text: 'color-mix(in srgb, currentColor 85%, transparent)' }, elements: { link: { color: { text: 'color-mix(in srgb, currentColor 85%, transparent)' } } } },
          'core/post-terms': { color: { text: 'currentColor' }, elements: { link: { color: { text: 'currentColor' } } } },
        },
        elements: {
          button: {
            color: { background: 'var:preset|color|base', text: 'var:preset|color|secondary' },
            ':hover': { color: { background: 'color-mix(in srgb, var(--wp--preset--color--base) 85%, transparent)', text: 'var:preset|color|secondary' } },
          },
        },
      },
    },
    cssFallback: '.is-style-navy-background { background: var(--wp--preset--color--secondary); color: var(--wp--preset--color--base); }',
    usedIn: ['NewsletterCTA.tsx', 'Footer.tsx', 'ContentHero.tsx'],
    patterns: ['section-newsletter-cta', 'section-subscription-cta', 'section-content-hero'],
    wpFilePath: 'styles/blocks/group/navy-background.json',
    isDefault: false,
  },
  {
    id: 'group-red-accent',
    name: 'red-accent',
    label: 'Red Accent',
    targetBlock: 'core/group',
    category: 'color',
    cssClass: '.is-style-red-accent',
    description: 'Subtle red-tinted background for highlighting important content blocks. Used for featured content areas.',
    jsonStyle: { color: { background: 'color-mix(in srgb, var(--wp--preset--color--primary) 5%, transparent)' }, border: { left: { color: 'var:preset|color|primary', width: '4px' } } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Red Accent', slug: 'group-red-accent',
      blockTypes: ['core/group'],
      styles: {
        color: { background: 'color-mix(in srgb, var(--wp--preset--color--primary) 5%, transparent)' },
        border: { left: { color: 'var:preset|color|primary', width: '4px' } },
      },
    },
    cssFallback: '.is-style-red-accent { background: rgba(215, 0, 37, 0.05); border-left: 4px solid var(--wp--preset--color--primary); }',
    usedIn: ['Article.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/group/red-accent.json',
    isDefault: false,
  },
  {
    id: 'group-muted-background',
    name: 'muted-background',
    label: 'Muted Background',
    targetBlock: 'core/group',
    category: 'color',
    cssClass: '.is-style-muted-background',
    description: 'Light gray background with muted foreground text. Alternating section backgrounds, info boxes.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent', background: 'var:preset|color|tertiary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Muted Background', slug: 'group-muted',
      blockTypes: ['core/group', 'core/columns', 'core/column'],
      styles: {
        color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main-accent' },
      },
    },
    cssFallback: '.is-style-muted-background { background: var(--wp--preset--color--tertiary); color: var(--wp--preset--color--main-accent); }',
    usedIn: ['Home.tsx', 'FAQPage.tsx'],
    patterns: ['page-home', 'section-faq'],
    wpFilePath: 'styles/blocks/group/muted-background.json',
    isDefault: false,
  },
];

// ─── WooCommerce Styles ─────────────────────────────────────────────────
const WOOCOMMERCE_STYLES: BlockStyleEntry[] = [
  {
    id: 'wc-product-button-primary',
    name: 'primary',
    label: 'Primary',
    targetBlock: 'woocommerce/product-button',
    category: 'woocommerce',
    cssClass: '.is-style-primary',
    description: 'Matches core button default. Brand red solid background.',
    jsonStyle: { color: { text: 'var:preset|color|base', background: 'var:preset|color|primary' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Primary', slug: 'wc-product-button-primary',
      blockTypes: ['woocommerce/product-button'],
      styles: {
        color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' },
        ':hover': { color: { background: 'var:preset|color|primary-alt' } },
      },
    },
    cssFallback: '.is-style-primary .wc-block-components-product-button__button { background: var(--wp--preset--color--primary); color: var(--wp--preset--color--base); }',
    usedIn: ['EEditions.tsx', 'SingleEEdition.tsx'],
    patterns: ['archive-dp-eedition', 'single-dp-eedition'],
    wpFilePath: 'styles/blocks/woocommerce/product-button/primary.json',
    isDefault: true,
  },
  {
    id: 'wc-product-image-rounded',
    name: 'rounded',
    label: 'Rounded',
    targetBlock: 'woocommerce/product-image',
    category: 'woocommerce',
    cssClass: '.is-style-rounded',
    description: 'Consistent with core image rounded style. 8px border radius.',
    jsonStyle: { border: { radius: 'var:preset|border-radius|400' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Rounded', slug: 'wc-product-image-rounded',
      blockTypes: ['woocommerce/product-image'],
      styles: { border: { radius: 'var:preset|border-radius|400' } },
    },
    cssFallback: '.is-style-rounded .wc-block-components-product-image img { border-radius: var(--wp--preset--border-radius--400); }',
    usedIn: ['EEditions.tsx'],
    patterns: ['archive-dp-eedition'],
    wpFilePath: 'styles/blocks/woocommerce/product-image/rounded.json',
    isDefault: false,
  },
  {
    id: 'wc-product-price-accent',
    name: 'accent',
    label: 'Accent',
    targetBlock: 'woocommerce/product-price',
    category: 'woocommerce',
    cssClass: '.is-style-accent',
    description: 'Red text color, bold weight. Emphasizes price display.',
    jsonStyle: { color: { text: 'var:preset|color|primary' }, typography: { fontWeight: '700' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Accent', slug: 'wc-product-price-accent',
      blockTypes: ['woocommerce/product-price'],
      styles: { color: { text: 'var:preset|color|primary' }, typography: { fontWeight: '700' } },
    },
    cssFallback: '.is-style-accent .wc-block-components-product-price { color: var(--wp--preset--color--primary); font-weight: 700; }',
    usedIn: ['PricingTable.tsx', 'SingleEEdition.tsx'],
    patterns: ['section-pricing-table'],
    wpFilePath: 'styles/blocks/woocommerce/product-price/accent.json',
    isDefault: false,
  },
  // ── WooCommerce Default Block Styles (from disk) ──
  {
    id: 'wc-accordion-header-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/accordion-header', category: 'woocommerce', cssClass: '', description: 'Accordion header with brand text color, base font size, normal weight.',
    jsonStyle: { color: { text: 'var:preset|color|main' }, spacing: { padding: { top: '0.75rem', bottom: '0.75rem' } }, typography: { fontSize: 'var:preset|font-size|base', fontWeight: '400' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-accordion-header-default', blockTypes: ['woocommerce/accordion-header'], styles: { color: { text: 'var:preset|color|main' }, spacing: { padding: { top: '0.75rem', bottom: '0.75rem' } }, typography: { fontSize: 'var:preset|font-size|base', fontWeight: '400' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/accordion-header/default.json', isDefault: true,
  },
  {
    id: 'wc-accordion-item-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/accordion-item', category: 'woocommerce', cssClass: '', description: 'Accordion item with bottom border and zero block gap.',
    jsonStyle: { border: { bottom: { color: 'var:preset|color|border-light', style: 'solid', width: '1px' } }, spacing: { blockGap: '0' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-accordion-item-default', blockTypes: ['woocommerce/accordion-item'], styles: { border: { bottom: { color: 'var:preset|color|border-light', style: 'solid', width: '1px' } }, spacing: { blockGap: '0' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/accordion-item/default.json', isDefault: true,
  },
  {
    id: 'wc-add-to-cart-variation-attr-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/add-to-cart-with-options-variation-selector-attribute-name', category: 'woocommerce', cssClass: '', description: 'Variation attribute label with muted color and small font.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent' }, typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.5' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-add-to-cart-variation-attr-default', blockTypes: ['woocommerce/add-to-cart-with-options-variation-selector-attribute-name'], styles: { color: { text: 'var:preset|color|main-accent' }, typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.5' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/add-to-cart-with-options-variation-selector-attribute-name/default.json', isDefault: true,
  },
  {
    id: 'wc-breadcrumbs-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/breadcrumbs', category: 'woocommerce', cssClass: '', description: 'WooCommerce breadcrumbs with small font and muted text.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-breadcrumbs-default', blockTypes: ['woocommerce/breadcrumbs'], styles: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive', 'woo-product-search'], wpFilePath: 'styles/blocks/woocommerce/breadcrumbs/default.json', isDefault: true,
  },
  {
    id: 'wc-cart-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/cart', category: 'woocommerce', cssClass: '', description: 'Cart block with large block gap spacing.',
    jsonStyle: { spacing: { blockGap: 'var(--wp--preset--spacing--large)' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-cart-default', blockTypes: ['woocommerce/cart'], styles: { spacing: { blockGap: 'var(--wp--preset--spacing--large)' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-cart'], wpFilePath: 'styles/blocks/woocommerce/cart/default.json', isDefault: true,
  },
  {
    id: 'wc-category-description-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/category-description', category: 'woocommerce', cssClass: '', description: 'Category description with small font size.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-category-description-default', blockTypes: ['woocommerce/category-description'], styles: { typography: { fontSize: 'var:preset|font-size|small' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/category-description/default.json', isDefault: true,
  },
  {
    id: 'wc-category-title-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/category-title', category: 'woocommerce', cssClass: '', description: 'Category title with base font size.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|base' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-category-title-default', blockTypes: ['woocommerce/category-title'], styles: { typography: { fontSize: 'var:preset|font-size|base' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/category-title/default.json', isDefault: true,
  },
  {
    id: 'wc-checkout-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/checkout', category: 'woocommerce', cssClass: '', description: 'Checkout block with large block gap spacing.',
    jsonStyle: { spacing: { blockGap: 'var(--wp--preset--spacing--large)' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-checkout-default', blockTypes: ['woocommerce/checkout'], styles: { spacing: { blockGap: 'var(--wp--preset--spacing--large)' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-checkout'], wpFilePath: 'styles/blocks/woocommerce/checkout/default.json', isDefault: true,
  },
  {
    id: 'wc-customer-account-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/customer-account', category: 'woocommerce', cssClass: '', description: 'Customer account icon/link with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-customer-account-default', blockTypes: ['woocommerce/customer-account'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['die-papier/header'], wpFilePath: 'styles/blocks/woocommerce/customer-account/default.json', isDefault: true,
  },
  {
    id: 'wc-mini-cart-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/mini-cart', category: 'woocommerce', cssClass: '', description: 'Mini cart flyout with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-mini-cart-default', blockTypes: ['woocommerce/mini-cart'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-mini-cart'], wpFilePath: 'styles/blocks/woocommerce/mini-cart/default.json', isDefault: true,
  },
  {
    id: 'wc-order-confirmation-status-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/order-confirmation-status', category: 'woocommerce', cssClass: '', description: 'Order confirmation status with muted accent color.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-order-confirmation-status-default', blockTypes: ['woocommerce/order-confirmation-status'], styles: { color: { text: 'var:preset|color|main-accent' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-order-confirmation'], wpFilePath: 'styles/blocks/woocommerce/order-confirmation-status/default.json', isDefault: true,
  },
  {
    id: 'wc-product-button-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-button', category: 'woocommerce', cssClass: '', description: 'Default product button with brand red background and styled padding.',
    jsonStyle: { color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-button-default', blockTypes: ['woocommerce/product-button'], styles: { color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' }, spacing: { padding: { top: 'var:preset|spacing|medium', right: 'var:preset|spacing|x-large', bottom: 'var:preset|spacing|medium', left: 'var:preset|spacing|x-large' } }, border: { radius: 'var:custom|border-radius|200' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product', 'woo-product-card'], wpFilePath: 'styles/blocks/woocommerce/product-button/default.json', isDefault: true,
  },
  {
    id: 'wc-product-filter-attribute-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-filter-attribute', category: 'woocommerce', cssClass: '', description: 'Product filter attribute with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-filter-attribute-default', blockTypes: ['woocommerce/product-filter-attribute'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/product-filter-attribute/default.json', isDefault: true,
  },
  {
    id: 'wc-product-filter-price-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-filter-price', category: 'woocommerce', cssClass: '', description: 'Product filter price with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-filter-price-default', blockTypes: ['woocommerce/product-filter-price'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/product-filter-price/default.json', isDefault: true,
  },
  {
    id: 'wc-product-filter-rating-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-filter-rating', category: 'woocommerce', cssClass: '', description: 'Product filter rating with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-filter-rating-default', blockTypes: ['woocommerce/product-filter-rating'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/product-filter-rating/default.json', isDefault: true,
  },
  {
    id: 'wc-product-filter-status-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-filter-status', category: 'woocommerce', cssClass: '', description: 'Product filter status with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-filter-status-default', blockTypes: ['woocommerce/product-filter-status'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/product-filter-status/default.json', isDefault: true,
  },
  {
    id: 'wc-product-gallery-nav-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-gallery-large-image-next-previous', category: 'woocommerce', cssClass: '', description: 'Product gallery navigation arrows.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-gallery-nav-default', blockTypes: ['woocommerce/product-gallery-large-image-next-previous'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-gallery-large-image-next-previous/default.json', isDefault: true,
  },
  {
    id: 'wc-product-image-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-image', category: 'woocommerce', cssClass: '', description: 'Default product image with small border radius and 3:4 aspect ratio.',
    jsonStyle: { border: { radius: 'var:preset|border-radius|small' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-image-default', blockTypes: ['woocommerce/product-image'], styles: { border: { radius: 'var:preset|border-radius|small' }, css: '& img { aspect-ratio: 3/4; object-fit: cover; }' } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-card', 'woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-image/default.json', isDefault: true,
  },
  {
    id: 'wc-product-price-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-price', category: 'woocommerce', cssClass: '', description: 'Default product price with medium font and bold weight.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|medium', lineHeight: '1.5', fontWeight: '700' }, color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-price-default', blockTypes: ['woocommerce/product-price'], styles: { typography: { fontSize: 'var:preset|font-size|medium', lineHeight: '1.5', fontWeight: '700' }, color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-card', 'woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-price/default.json', isDefault: true,
  },
  {
    id: 'wc-product-rating-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-rating', category: 'woocommerce', cssClass: '', description: 'Product star rating with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-rating-default', blockTypes: ['woocommerce/product-rating'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-rating/default.json', isDefault: true,
  },
  {
    id: 'wc-product-results-count-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-results-count', category: 'woocommerce', cssClass: '', description: 'Results count with muted accent color.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-results-count-default', blockTypes: ['woocommerce/product-results-count'], styles: { color: { text: 'var:preset|color|main-accent' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-archive'], wpFilePath: 'styles/blocks/woocommerce/product-results-count/default.json', isDefault: true,
  },
  {
    id: 'wc-product-review-author-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-review-author-name', category: 'woocommerce', cssClass: '', description: 'Review author name with small bold font.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.7', fontWeight: '700' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-review-author-default', blockTypes: ['woocommerce/product-review-author-name'], styles: { typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.7', fontWeight: '700' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-review-author-name/default.json', isDefault: true,
  },
  {
    id: 'wc-product-review-content-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-review-content', category: 'woocommerce', cssClass: '', description: 'Review content with muted accent text.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-review-content-default', blockTypes: ['woocommerce/product-review-content'], styles: { color: { text: 'var:preset|color|main-accent' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-review-content/default.json', isDefault: true,
  },
  {
    id: 'wc-product-review-date-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-review-date', category: 'woocommerce', cssClass: '', description: 'Review date with small font.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.7' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-review-date-default', blockTypes: ['woocommerce/product-review-date'], styles: { typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.7' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-review-date/default.json', isDefault: true,
  },
  {
    id: 'wc-product-reviews-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-reviews', category: 'woocommerce', cssClass: '', description: 'Product reviews container.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-reviews-default', blockTypes: ['woocommerce/product-reviews'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-reviews/default.json', isDefault: true,
  },
  {
    id: 'wc-product-sale-badge-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-sale-badge', category: 'woocommerce', cssClass: '', description: 'Sale badge with brand red background and white text.',
    jsonStyle: { color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' }, border: { radius: '0' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-sale-badge-default', blockTypes: ['woocommerce/product-sale-badge'], styles: { typography: { fontSize: 'var:preset|font-size|small', lineHeight: '1.7', fontWeight: '400', textTransform: 'none' }, color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' }, border: { radius: '0', style: 'solid', width: '1px', color: 'var:preset|color|primary' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-card'], wpFilePath: 'styles/blocks/woocommerce/product-sale-badge/default.json', isDefault: true,
  },
  {
    id: 'wc-product-summary-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-summary', category: 'woocommerce', cssClass: '', description: 'Product summary with muted accent text.',
    jsonStyle: { color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-summary-default', blockTypes: ['woocommerce/product-summary'], styles: { color: { text: 'var:preset|color|main-accent' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-summary/default.json', isDefault: true,
  },
  {
    id: 'wc-product-title-default', name: 'default', label: 'Default', targetBlock: 'woocommerce/product-title', category: 'woocommerce', cssClass: '', description: 'Product title with brand text color.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'wc-product-title-default', blockTypes: ['woocommerce/product-title'], styles: { color: { text: 'var:preset|color|main' } } },
    cssFallback: '', usedIn: [], patterns: ['woo-product-card', 'woo-single-product'], wpFilePath: 'styles/blocks/woocommerce/product-title/default.json', isDefault: true,
  },
  {
    id: 'post-template-product-card',
    name: 'product-card',
    label: 'Product Card',
    targetBlock: 'core/post-template',
    category: 'woocommerce',
    cssClass: '.is-style-product-card',
    description: 'Grid layout for WooCommerce Product Collection blocks with card styling.',
    jsonStyle: {},
    wpThemeJson: {
      $schema: SCHEMA,
      version: V,
      title: 'Product Card',
      slug: 'post-template-product-card',
      blockTypes: ['core/post-template'],
      styles: {
        blocks: {
          'core/post-template': {
            css: '& { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--wp--preset--spacing--medium); } & > li { list-style: none; background: var(--wp--preset--color--base); border: 1px solid var(--wp--preset--color--border-light); border-radius: 12px; padding: var(--wp--preset--spacing--small); transition: all 0.2s ease; } & > li:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); transform: translateY(-2px); } & .wc-block-components-product-image { margin-bottom: var(--wp--preset--spacing--x-small); border-radius: 8px; overflow: hidden; } & .wc-block-components-product-title { font-size: var(--wp--preset--font-size--medium); font-weight: 600; margin-bottom: var(--wp--preset--spacing--x-small); } & .wc-block-components-product-price { font-size: var(--wp--preset--font-size--large); font-weight: 700; color: var(--wp--preset--color--primary); } & .wc-block-components-product-button { margin-top: var(--wp--preset--spacing--small); }'
          }
        }
      }
    },
    cssFallback: '.is-style-product-card { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--wp--preset--spacing--medium); } .is-style-product-card > li { list-style: none; background: var(--wp--preset--color--base); border: 1px solid var(--wp--preset--color--border-light); border-radius: 12px; padding: var(--wp--preset--spacing--small); }',
    usedIn: ['EEditions.tsx'],
    patterns: ['woo-product-collection', 'archive-dp-eedition'],
    wpFilePath: 'styles/blocks/core/post-template/product-card.json',
    isDefault: false,
  },
];

// ─── Third Party Block Styles ───────────────────────────────────────────
const THIRD_PARTY_STYLES: BlockStyleEntry[] = [
  {
    id: 'outermost-icon-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'outermost/icon',
    category: 'third-party',
    cssClass: '',
    description: 'Standard icon styling with brand color inheritance.',
    jsonStyle: { color: { text: 'currentColor' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'default',
      blockTypes: ['outermost/icon'],
      styles: { color: { text: 'currentColor' } },
    },
    cssFallback: '.wp-block-outermost-icon svg { fill: currentColor; }',
    usedIn: ['NewsCard.tsx', 'Header.tsx'],
    patterns: [],
    wpFilePath: 'styles/blocks/outermost/icon/default.json',
    isDefault: true,
  },
  {
    id: 'outermost-social-sharing-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'outermost/social-sharing',
    category: 'third-party',
    cssClass: '',
    description: 'Standard social sharing row with brand red active states.',
    jsonStyle: { color: { text: 'var:preset|color|main' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'default',
      blockTypes: ['outermost/social-sharing'],
      styles: { color: { text: 'var:preset|color|main' } },
    },
    cssFallback: '.wp-block-outermost-social-sharing { color: var(--wp--preset--color--main); }',
    usedIn: ['Article.tsx', 'Footer.tsx'],
    patterns: ['section-share'],
    wpFilePath: 'styles/blocks/outermost/social-sharing/default.json',
    isDefault: true,
  },
  {
    id: 'yoast-faq-block-default',
    name: 'default',
    label: 'Default',
    targetBlock: 'yoast/faq-block',
    category: 'third-party',
    cssClass: '',
    description: 'Standard Yoast FAQ accordion with brand typography.',
    jsonStyle: { typography: { fontFamily: 'var:preset|font-family|brand-sans' } },
    wpThemeJson: {
      $schema: SCHEMA, version: V, title: 'Default', slug: 'default',
      blockTypes: ['yoast/faq-block'],
      styles: { typography: { fontFamily: 'var:preset|font-family|brand-sans' } },
    },
    cssFallback: '.schema-faq-question { font-family: var(--wp--preset--font-family--brand-sans); }',
    usedIn: ['FAQPage.tsx'],
    patterns: ['page-faq', 'section-faq'],
    wpFilePath: 'styles/blocks/yoast/faq-block/default.json',
    isDefault: true,
  },
  {
    id: 'gravityforms-form-default', name: 'default', label: 'Default', targetBlock: 'gravityforms/form', category: 'third-party', cssClass: '', description: 'Gravity Forms styling with brand button, border-light inputs, and label typography.',
    jsonStyle: { spacing: { blockGap: 'var:preset|spacing|medium' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'gravityforms-form-default', blockTypes: ['gravityforms/form'], styles: { spacing: { blockGap: 'var:preset|spacing|medium' }, elements: { button: { color: { background: 'var:preset|color|primary', text: 'var:preset|color|base' }, border: { radius: 'var:custom|border-radius|200' } } } } },
    cssFallback: '', usedIn: ['Contact.tsx', 'NewsletterSubscribe.tsx'], patterns: ['section-contact-form', 'section-newsletter-form'], wpFilePath: 'styles/blocks/gravityforms/form/default.json', isDefault: true,
  },
  {
    id: 'yoast-seo-breadcrumbs-default', name: 'default', label: 'Default', targetBlock: 'yoast-seo/breadcrumbs', category: 'third-party', cssClass: '', description: 'Yoast SEO breadcrumbs with small font, muted text, and flexbox layout.',
    jsonStyle: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' } },
    wpThemeJson: { $schema: SCHEMA, version: V, title: 'Default', slug: 'yoast-seo-breadcrumbs-default', blockTypes: ['yoast-seo/breadcrumbs'], styles: { typography: { fontSize: 'var:preset|font-size|small' }, color: { text: 'var:preset|color|main-accent' }, elements: { link: { color: { text: 'var:preset|color|main-accent' }, ':hover': { typography: { textDecoration: 'underline' } } } } } },
    cssFallback: '', usedIn: ['Breadcrumbs.tsx'], patterns: ['hidden-breadcrumbs'], wpFilePath: 'styles/blocks/yoast-seo/breadcrumbs/default.json', isDefault: true,
  },
];

// ─── Combined exports (LEGACY - will be replaced by dynamic loading) ──────
// Note: These manual arrays are kept for backward compatibility but may be outdated.
// Use loadAllBlockStylesFromDisk() for the complete, up-to-date list from disk.
export const ALL_BLOCK_STYLES: BlockStyleEntry[] = [
  ...BUTTON_STYLES,
  ...IMAGE_STYLES,
  ...HEADING_STYLES,
  ...SEPARATOR_STYLES,
  ...ADDITIONAL_CORE_STYLES,
  ...COLOR_STYLES,
  ...WOOCOMMERCE_STYLES,
  ...THIRD_PARTY_STYLES,
];

// ─── Dynamic Block Styles Registry (loaded from disk) ──────────────────────
let _allBlockStylesCache: BlockStyleEntry[] | null = null;
let _allBlockStylesPromise: Promise<BlockStyleEntry[]> | null = null;

/**
 * Get all block styles dynamically loaded from disk.
 * This replaces the static ALL_BLOCK_STYLES array with real-time disk data.
 * Cached after first load.
 */
export async function getAllBlockStyles(): Promise<BlockStyleEntry[]> {
  if (_allBlockStylesCache) return _allBlockStylesCache;
  if (_allBlockStylesPromise) return _allBlockStylesPromise;

  _allBlockStylesPromise = (async () => {
    try {
      const styles = await loadAllBlockStylesFromDisk();
      _allBlockStylesCache = styles;
      return styles;
    } finally {
      _allBlockStylesPromise = null;
    }
  })();

  return _allBlockStylesPromise;
}

export const BLOCK_STYLE_CATEGORIES: { key: BlockStyleCategory | 'all'; labelAf: string; labelEn: string; count: number }[] = [
  { key: 'all', labelAf: 'Alles', labelEn: 'All', count: ALL_BLOCK_STYLES.length },
  { key: 'core', labelAf: 'Kern Blokke', labelEn: 'Core Blocks', count: ALL_BLOCK_STYLES.filter(s => s.category === 'core').length },
  { key: 'woocommerce', labelAf: 'WooCommerce', labelEn: 'WooCommerce', count: ALL_BLOCK_STYLES.filter(s => s.category === 'woocommerce').length },
  { key: 'third-party', labelAf: 'Derde Party', labelEn: 'Third Party', count: ALL_BLOCK_STYLES.filter(s => s.category === 'third-party').length },
];

/** Unique target blocks for group-by-block view */
export const UNIQUE_TARGET_BLOCKS = [...new Set(ALL_BLOCK_STYLES.map(s => s.targetBlock))];

/**
 * Get block style categories with up-to-date counts from disk.
 */
export async function getBlockStyleCategories(): Promise<{ key: BlockStyleCategory | 'all'; labelAf: string; labelEn: string; count: number }[]> {
  const allStyles = await getAllBlockStyles();
  return [
    { key: 'all', labelAf: 'Alles', labelEn: 'All', count: allStyles.length },
    { key: 'core', labelAf: 'Kern Blokke', labelEn: 'Core Blocks', count: allStyles.filter(s => s.category === 'core').length },
    { key: 'woocommerce', labelAf: 'WooCommerce', labelEn: 'WooCommerce', count: allStyles.filter(s => s.category === 'woocommerce').length },
    { key: 'third-party', labelAf: 'Derde Party', labelEn: 'Third Party', count: allStyles.filter(s => s.category === 'third-party').length },
  ];
}

/**
 * Get unique target blocks from all loaded block styles.
 */
export async function getUniqueTargetBlocks(): Promise<string[]> {
  const allStyles = await getAllBlockStyles();
  return [...new Set(allStyles.map(s => s.targetBlock))].sort();
}

// ─── Disk-sourced full JSON loader ──────────────────────────────────────────

/** Cache for disk-loaded block style JSON */
let _diskBlockStyleCache: Map<string, WpThemeJsonBlockStyle> | null = null;
let _diskBlockStylePromise: Promise<Map<string, WpThemeJsonBlockStyle>> | null = null;

/**
 * Load all block style JSON files from disk (via import.meta.glob) and
 * return as a map keyed by filename (e.g., 'button-outline.json').
 * Cached after first call.
 */
export async function loadBlockStylesFromDisk(): Promise<Map<string, WpThemeJsonBlockStyle>> {
  if (_diskBlockStyleCache) return _diskBlockStyleCache;
  if (_diskBlockStylePromise) return _diskBlockStylePromise;

  _diskBlockStylePromise = (async () => {
    try {
      const parsed = await loadAllWpJsonFiles<WpThemeJsonBlockStyle>(wpBlockStyles);
      _diskBlockStyleCache = parsed;
      return parsed;
    } finally {
      _diskBlockStylePromise = null;
    }
  })();

  return _diskBlockStylePromise;
}

/**
 * Load the full disk JSON for a single block style by its wpFilePath.
 * e.g., 'styles/blocks/button/button-outline.json'
 */
export async function loadBlockStyleJson(wpFilePath: string): Promise<WpThemeJsonBlockStyle | null> {
  // Extract the filename portion that matches the glob pattern
  const filename = wpFilePath.split('/').pop() || wpFilePath;
  return loadWpJsonFile<WpThemeJsonBlockStyle>(wpBlockStyles, filename);
}

/**
 * Get an enriched copy of a BlockStyleEntry with the full disk JSON merged
 * into wpThemeJson (replacing the inline summary).
 */
export async function getEnrichedBlockStyle(entry: BlockStyleEntry): Promise<BlockStyleEntry> {
  const diskJson = await loadBlockStyleJson(entry.wpFilePath);
  if (!diskJson) return entry;
  return { ...entry, wpThemeJson: diskJson };
}

/**
 * Auto-generate a BlockStyleEntry from a WpThemeJsonBlockStyle loaded from disk.
 * This creates minimal metadata - manual entries can add richer descriptions.
 */
export function generateBlockStyleEntry(
  json: WpThemeJsonBlockStyle,
  wpFilePath: string
): BlockStyleEntry {
  // Determine category from file path
  let category: BlockStyleCategory = 'core';
  if (wpFilePath.includes('/woocommerce/')) {
    category = 'woocommerce';
  } else if (wpFilePath.includes('/outermost/') || wpFilePath.includes('/yoast/') || wpFilePath.includes('/gravityforms/')) {
    category = 'third-party';
  }

  // Extract block name from blockTypes
  const targetBlock = json.blockTypes?.[0] || 'unknown';
  
  // Generate ID from slug or file path
  const id = json.slug || wpFilePath.replace('styles/blocks/', '').replace('.json', '').replace(/\//g, '-');
  
  // Determine if this is a default style
  const isDefault = (json.slug?.endsWith('-default')) || json.title === 'Default' || wpFilePath.endsWith('/default.json');
  
  // Generate CSS class name
  const cssClass = isDefault ? '' : `.is-style-${(json.slug || id).replace(/^[^-]+-/, '')}`;
  
  return {
    id,
    name: (json.slug || id).replace(/^[^-]+-/, ''), // Remove block prefix from slug
    label: json.title,
    targetBlock,
    category,
    cssClass,
    description: `${json.title} style for ${targetBlock}`,
    jsonStyle: json.styles || {},
    wpThemeJson: json,
    cssFallback: '',
    usedIn: [],
    patterns: [],
    wpFilePath,
    isDefault,
  };
}

/**
 * Load ALL block styles from disk and auto-generate BlockStyleEntry objects.
 * This replaces the manual arrays above with dynamic disk-sourced data.
 */
export async function loadAllBlockStylesFromDisk(): Promise<BlockStyleEntry[]> {
  const diskMap = await loadBlockStylesFromDisk();
  const entries: BlockStyleEntry[] = [];
  
  for (const [fullPath, json] of diskMap.entries()) {
    // Skip the icon settings file (has settings instead of styles)
    if (json.settings && !json.styles) {
      continue;
    }
    
    // Extract the relative path from the full glob path
    // e.g., '/wordpress-export/themes/die-papier-theme/styles/blocks/button/outline.json'
    // → 'styles/blocks/button/outline.json'
    const wpFilePath = fullPath
      .replace('/wordpress-export/themes/die-papier-theme/', '')
      .replace(/^\//, ''); // Remove leading slash if present
    
    entries.push(generateBlockStyleEntry(json, wpFilePath));
  }
  
  return entries.sort((a, b) => a.targetBlock.localeCompare(b.targetBlock) || a.name.localeCompare(b.name));
}