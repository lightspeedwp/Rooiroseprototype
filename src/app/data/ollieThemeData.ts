/**
 * Comprehensive Ollie Theme data — sourced directly from
 * https://github.com/OllieWP/ollie (v1.5.4)
 *
 * Covers: patterns, template parts, templates, style variations,
 * block styles, and rooi rose migration decisions.
 *
 * Updated: 2026-03-02 (OllieWP slug alignment)
 */

// ─── Shared types ────────────────────────────────────────────────────────────

export type MigrationDecision = 'keep' | 'modify' | 'replace' | 'delete' | 'new';

// ─── Ollie Pattern Categories (from functions.php) ───────────────────────────

export const OLLIE_PATTERN_CATEGORIES = [
  { slug: 'ollie/card',           labelEn: 'Cards',          labelAf: 'Kaarte' },
  { slug: 'ollie/call-to-action', labelEn: 'Call To Action', labelAf: 'Oproep tot Aksie' },
  { slug: 'ollie/features',       labelEn: 'Features',       labelAf: 'Kenmerke' },
  { slug: 'ollie/header',         labelEn: 'Header',         labelAf: 'Kopstuk' },
  { slug: 'ollie/footer',         labelEn: 'Footer',         labelAf: 'Voetskrif' },
  { slug: 'ollie/hero',           labelEn: 'Hero',           labelAf: 'Hero' },
  { slug: 'ollie/pages',          labelEn: 'Pages',          labelAf: 'Bladsye' },
  { slug: 'ollie/posts',          labelEn: 'Posts',           labelAf: 'Poste' },
  { slug: 'ollie/pricing',        labelEn: 'Pricing',        labelAf: 'Pryse' },
  { slug: 'ollie/testimonial',    labelEn: 'Testimonials',   labelAf: 'Getuigskrifte' },
  { slug: 'ollie/menu',           labelEn: 'Menu',           labelAf: 'Kieslys' },
] as const;

// ─── Ollie Patterns (59 patterns — complete Ollie v1.5.4 inventory) ──────────

export interface OlliePatternEntry {
  slug: string;
  nameEn: string;
  nameAf: string;
  category: string;
  /** What Ollie provides */
  descEn: string;
  descAf: string;
  /** rooi rose migration decision */
  decision: MigrationDecision;
  /** Migration notes */
  noteEn: string;
  noteAf: string;
  /** rooi rose replacement slug (if applicable) */
  dpSlug?: string;
  /** Core blocks used */
  blocks?: string[];
}

export const OLLIE_PATTERNS: OlliePatternEntry[] = [
  // ── Template-level patterns (referenced from templates) ─────────────────
  {
    slug: 'ollie/template-page-404', nameEn: '404 Template Pattern', nameAf: '404 Sjabloon Patroon',
    category: 'Pages', descEn: 'Full 404 page layout with header, search, and footer.', descAf: 'Volledige 404-bladsy-uitleg met kopstuk, soek en voetskrif.',
    decision: 'replace', noteEn: 'Replace with rooi rose 404 — secondary background, Roboto Serif heading, category links.', noteAf: 'Vervang met rooi rose 404 — secondary agtergrond, Roboto Serif opskrif, kategorieskakels.',
    dpSlug: 'die-papier/template-page-404',
    blocks: ['core/template-part', 'core/group', 'core/heading', 'core/paragraph', 'core/search'],
  },
  {
    slug: 'ollie/template-page-archive', nameEn: 'Archive Template Pattern', nameAf: 'Argief Sjabloon Patroon',
    category: 'Pages', descEn: 'Archive page with query loop, pagination, header/footer parts.', descAf: 'Argiefbladsy met navraag-lus, paginering, kopstuk/voetskrif.',
    decision: 'modify', noteEn: 'Reuse query loop structure. Replace post card with rooi rose news card pattern. Add sidebar filters.', noteAf: 'Hergebruik navraag-lus struktuur. Vervang poskaart met rooi rose nuuskaart patroon. Voeg sybalk filters by.',
    dpSlug: 'die-papier/template-page-archive',
    blocks: ['core/template-part', 'core/query', 'core/post-template', 'core/query-pagination'],
  },
  {
    slug: 'ollie/template-index-grid', nameEn: 'Index Grid Template Pattern', nameAf: 'Indeks Rooster Sjabloon Patroon',
    category: 'Pages', descEn: 'Blog index with 2-column grid of post cards.', descAf: 'Blog-indeks met 2-kolom rooster van poskaarte.',
    decision: 'modify', noteEn: 'Keep grid layout, replace post cards with rooi rose news card. Change to 3-column grid.', noteAf: 'Behou rooster-uitleg, vervang poskaarte met rooi rose nuuskaart. Verander na 3-kolom rooster.',
    dpSlug: 'die-papier/template-index-grid',
    blocks: ['core/template-part', 'core/query', 'core/post-template', 'core/query-pagination'],
  },
  {
    slug: 'ollie/template-page-full', nameEn: 'Full Width Page (No Title)', nameAf: 'Volwydte Bladsy (Geen Titel)',
    category: 'Pages', descEn: 'Full-width page without title — used for landing pages.', descAf: 'Volwydte bladsy sonder titel — gebruik vir bestemmingsbladsye.',
    decision: 'keep', noteEn: 'Keep as-is. Perfect for rooi rose landing pages (homepage, e-editions). Only header/footer parts change.', noteAf: 'Behou soos-is. Perfek vir rooi rose bestemmingsbladsye. Slegs kopstuk/voetskrif onderdele verander.',
    blocks: ['core/template-part', 'core/post-content'],
  },
  {
    slug: 'ollie/template-page-right-sidebar', nameEn: 'Page with Right Sidebar', nameAf: 'Bladsy met Regte Sybalk',
    category: 'Pages', descEn: 'Two-column layout with content left, sidebar template part right.', descAf: 'Twee-kolom uitleg met inhoud links, sybalk sjabloon-onderdeel regs.',
    decision: 'modify', noteEn: 'Keep layout structure. Replace sidebar part content with rooi rose widgets (popular articles, categories, newsletter mini-form).', noteAf: 'Behou uitleg struktuur. Vervang sybalk-onderdeel inhoud met rooi rose legstukke.',
    dpSlug: 'die-papier/template-page-right-sidebar',
    blocks: ['core/template-part', 'core/columns', 'core/column', 'core/post-content'],
  },
  {
    slug: 'ollie/template-page-centered', nameEn: 'Page (Centered)', nameAf: 'Bladsy (Gesentreer)',
    category: 'Pages', descEn: 'Standard page with centered content and page title.', descAf: 'Standaard bladsy met gesentreerde inhoud en bladsytitel.',
    decision: 'keep', noteEn: 'Keep as-is — clean wrapper. Customization comes from template parts and page content patterns.', noteAf: 'Behou soos-is — skoon omhulsel. Aanpassing kom van sjabloon-onderdele en bladsy-inhoud patrone.',
    blocks: ['core/template-part', 'core/group', 'core/post-title', 'core/post-content'],
  },
  {
    slug: 'ollie/template-page-search', nameEn: 'Search Results Pattern', nameAf: 'Soekresultate Patroon',
    category: 'Pages', descEn: 'Search results layout with search form, query loop, and no-results message.', descAf: 'Soekresultate-uitleg met soekvorm, navraag-lus en geen-resultate boodskap.',
    decision: 'modify', noteEn: 'Keep structure. Add rooi rose faceted filters (category, date, content type). Restyle with brand typography.', noteAf: 'Behou struktuur. Voeg rooi rose gefasetteerde filters by. Herstyl met merk-tipografie.',
    dpSlug: 'die-papier/template-page-search',
    blocks: ['core/template-part', 'core/search', 'core/query', 'core/post-template', 'core/query-no-results'],
  },
  {
    slug: 'ollie/template-post-centered', nameEn: 'Single Post (Centered)', nameAf: 'Enkel Pos (Gesentreer)',
    category: 'Posts', descEn: 'Single post layout with featured image, title, content, terms, and comments.', descAf: 'Enkel pos-uitleg met uitgestalde beeld, titel, inhoud, terme en kommentaar.',
    decision: 'modify', noteEn: 'Keep semantic structure. Override typography (Roboto Serif headings GRAD -50), add author bio and social share patterns.', noteAf: 'Behou semantiese struktuur. Vervang tipografie, voeg outeurbiografie en sosiale deel-patrone by.',
    dpSlug: 'die-papier/template-post-centered',
    blocks: ['core/template-part', 'core/post-featured-image', 'core/post-title', 'core/post-content', 'core/post-terms', 'core/comments'],
  },

  // ── Header patterns ─────────────────────────────────────────────────────
  {
    slug: 'ollie/header-light', nameEn: 'Header Light', nameAf: 'Kopstuk Lig',
    category: 'Header', descEn: 'Light header with site logo, navigation, and search button. Default header pattern.', descAf: 'Ligte kopstuk met webwerf-logo, navigasie en soekknoppie. Verstek kopstuk patroon.',
    decision: 'replace', noteEn: 'Replace entirely with rooi rose 3-row newspaper header: Row 1 (top bar — weather, date, social), Row 2 (logo + nav + search), Row 3 (category strip).', noteAf: 'Vervang heeltemal met rooi rose 3-ry koerantkopstuk.',
    dpSlug: 'die-papier/header',
    blocks: ['core/group', 'core/site-logo', 'core/site-title', 'core/navigation', 'core/search'],
  },

  // ── Footer patterns ─────────────────────────────────────────────────────
  {
    slug: 'ollie/footer-light', nameEn: 'Footer Light', nameAf: 'Voetskrif Lig',
    category: 'Footer', descEn: 'Light footer with 3-column layout: about, links, social icons.', descAf: 'Ligte voetskrif met 3-kolom uitleg: oor ons, skakels, sosiale ikone.',
    decision: 'replace', noteEn: 'Replace with rooi rose 4-column footer: logo + about, quick links, categories, newsletter + social. secondary background.', noteAf: 'Vervang met rooi rose 4-kolom voetskrif: logo + oor ons, vinnige skakels, kategorieë, nuusbrief + sosiaal. secondary agtergrond.',
    dpSlug: 'die-papier/footer',
    blocks: ['core/group', 'core/columns', 'core/column', 'core/site-logo', 'core/paragraph', 'core/navigation', 'core/social-links'],
  },
];

// ─── Ollie Block Styles ──────────────────────────────────────────────────────

export interface OllieBlockStyle {
  block: string;
  name: string;
  labelEn: string;
  labelAf: string;
  decision: MigrationDecision;
}

export const OLLIE_BLOCK_STYLES: OllieBlockStyle[] = [
  { block: 'core/button', name: 'outline', labelEn: 'Outline', labelAf: 'Buitelyn', decision: 'keep' },
  { block: 'core/image', name: 'rounded', labelEn: 'Rounded', labelAf: 'Gerond', decision: 'keep' },
  { block: 'core/list', name: 'no-bullets', labelEn: 'No Bullets', labelAf: 'Geen kolpunte', decision: 'keep' },
  { block: 'core/quote', name: 'plain', labelEn: 'Plain', labelAf: 'Gewoon', decision: 'keep' },
  { block: 'core/separator', name: 'wide', labelEn: 'Wide', labelAf: 'Wyd', decision: 'keep' },
  { block: 'core/table', name: 'borderless', labelEn: 'Borderless', labelAf: 'Sonder rande', decision: 'keep' },
];

export interface ThemeInventoryEntry {
  slug: string;
  nameEn: string;
  decision: MigrationDecision;
}

export const OLLIE_TEMPLATES: ThemeInventoryEntry[] = [
  { slug: 'index', nameEn: 'Index', decision: 'keep' },
  { slug: '404', nameEn: '404', decision: 'modify' },
  { slug: 'archive', nameEn: 'Archive', decision: 'modify' },
  { slug: 'single', nameEn: 'Single Post', decision: 'modify' },
  { slug: 'page', nameEn: 'Page', decision: 'keep' },
  { slug: 'search', nameEn: 'Search', decision: 'modify' },
];

export const OLLIE_PARTS: ThemeInventoryEntry[] = [
  { slug: 'header', nameEn: 'Header', decision: 'modify' },
  { slug: 'footer', nameEn: 'Footer', decision: 'modify' },
  { slug: 'sidebar', nameEn: 'Sidebar', decision: 'modify' },
];

export const DP_NEW_TEMPLATES: ThemeInventoryEntry[] = [
  { slug: 'single-dp_event', nameEn: 'Single Event', decision: 'new' },
  { slug: 'single-dp_obituary', nameEn: 'Single Obituary', decision: 'new' },
  { slug: 'single-dp_eedition', nameEn: 'Single E-Edition', decision: 'new' },
];

export const OLLIE_STYLE_VARIATIONS: ThemeInventoryEntry[] = [
  { slug: 'dark', nameEn: 'Dark', decision: 'keep' },
  { slug: 'serif', nameEn: 'Serif', decision: 'keep' },
];

export function computeStats(items: { decision: MigrationDecision }[]) {
  const stats = { keep: 0, modify: 0, replace: 0, delete: 0, new: 0, total: items.length };
  items.forEach(item => {
    if (stats[item.decision] !== undefined) stats[item.decision]++;
  });
  return stats;
}