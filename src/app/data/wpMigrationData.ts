/**
 * WordPress Migration — Extended Data
 * ────────────────────────────────────
 * Complete file inventories, content model, and guideline tree
 * for the WordPress Migration dev tool page.
 *
 * Updated: 2026-03-02
 */

import { ALL_BLOCK_STYLES } from './blockStylesData';

// ─── Theme File Inventory ────────────────────────────────────────────────────

export interface ThemeFile {
  file: string;
  category: string;
  priority: 'critical' | 'important' | 'optional';
  description: string;
  react: string;
}

export const EXTENDED_THEME_FILES: ThemeFile[] = [
  // Root
  { file: 'style.css', category: 'root', priority: 'critical', description: 'Theme header and metadata declaration', react: '—' },
  { file: 'theme.json', category: 'root', priority: 'critical', description: 'Global settings, presets, styles (v3 schema)', react: 'theme.css' },
  { file: 'functions.php', category: 'root', priority: 'critical', description: 'Theme setup, enqueue, after_setup_theme', react: 'App.tsx' },
  { file: 'screenshot.png', category: 'root', priority: 'optional', description: 'Theme preview (1200x900)', react: '—' },

  // Templates — Core (7)
  { file: 'templates/index.html', category: 'templates', priority: 'critical', description: 'Blog index / fallback template', react: 'Home.tsx' },
  { file: 'templates/front-page.html', category: 'templates', priority: 'critical', description: 'Homepage — die-papier/page-home pattern', react: 'Home.tsx' },
  { file: 'templates/single.html', category: 'templates', priority: 'critical', description: 'Single article — 70/30 columns (content + sidebar)', react: 'Article.tsx' },
  { file: 'templates/page.html', category: 'templates', priority: 'critical', description: 'Static page — die-papier/page-default pattern', react: 'About.tsx' },
  { file: 'templates/archive.html', category: 'templates', priority: 'important', description: 'Category/tag archive', react: 'Category.tsx' },
  { file: 'templates/search.html', category: 'templates', priority: 'important', description: 'Search results with filter integration', react: 'SearchResults.tsx' },
  { file: 'templates/404.html', category: 'templates', priority: 'important', description: '404 error page', react: 'NotFound.tsx' },
  { file: 'templates/author.html', category: 'templates', priority: 'important', description: 'Author archive', react: 'Author.tsx' },
  { file: 'templates/tag.html', category: 'templates', priority: 'optional', description: 'Tag archive', react: '—' },

  // Templates — CPT Singles (6)
  { file: 'templates/single-dp_event.html', category: 'cpt-templates', priority: 'critical', description: 'Event single — date/time/location meta', react: 'EventDetail.tsx' },
  { file: 'templates/single-dp_obituary.html', category: 'cpt-templates', priority: 'important', description: 'Obituary single — birth/death/funeral meta', react: 'ObituaryDetail.tsx' },
  { file: 'templates/single-dp_multimedia.html', category: 'cpt-templates', priority: 'important', description: 'Multimedia single — video/gallery/podcast', react: 'MultimediaDetail.tsx' },
  { file: 'templates/single-dp_competition.html', category: 'cpt-templates', priority: 'important', description: 'Competition single — prize/dates/entry form', react: 'CompetitionDetail.tsx' },
  { file: 'templates/single-dp_eedition.html', category: 'cpt-templates', priority: 'critical', description: 'E-edition single — access gate + Flipbook', react: 'EEditionViewer.tsx' },
  { file: 'templates/single-dp_sponsor.html', category: 'cpt-templates', priority: 'optional', description: 'Sponsor profile page', react: 'SponsorDetail.tsx' },

  // Templates — CPT Archives (5)
  { file: 'templates/archive-dp_event.html', category: 'cpt-templates', priority: 'critical', description: 'Event archive — calendar sort', react: 'Events.tsx' },
  { file: 'templates/archive-dp_obituary.html', category: 'cpt-templates', priority: 'important', description: 'Obituary archive', react: 'Obituaries.tsx' },
  { file: 'templates/archive-dp_multimedia.html', category: 'cpt-templates', priority: 'important', description: 'Multimedia archive — video/gallery tabs', react: 'Multimedia.tsx' },
  { file: 'templates/archive-dp_competition.html', category: 'cpt-templates', priority: 'important', description: 'Competition archive — active/closed filter', react: 'Competitions.tsx' },
  { file: 'templates/archive-dp_sponsor.html', category: 'cpt-templates', priority: 'optional', description: 'Sponsor archive — tier grid', react: 'Sponsors.tsx' },

  // Templates — Taxonomy Archives (3)
  { file: 'templates/taxonomy-dp_event_category.html', category: 'taxonomy-templates', priority: 'important', description: 'Event category archive', react: '—' },
  { file: 'templates/taxonomy-dp_multimedia_category.html', category: 'taxonomy-templates', priority: 'optional', description: 'Media type taxonomy archive', react: '—' },
  { file: 'templates/taxonomy-dp_sponsor_tier.html', category: 'taxonomy-templates', priority: 'optional', description: 'Sponsor tier taxonomy archive', react: '—' },

  // Templates — WooCommerce (3)
  { file: 'templates/page-cart.html', category: 'woocommerce', priority: 'critical', description: 'Cart — wp:pattern {"slug":"die-papier/woo-cart"}', react: 'Cart.tsx' },
  { file: 'templates/page-checkout.html', category: 'woocommerce', priority: 'critical', description: 'Checkout — wp:pattern {"slug":"die-papier/woo-checkout"}', react: 'Checkout.tsx' },
  { file: 'templates/page-my-account.html', category: 'woocommerce', priority: 'critical', description: 'My Account — wp:pattern {"slug":"die-papier/woo-my-account"}', react: 'MyAccount.tsx' },

  // Template Parts (9)
  { file: 'parts/header.html', category: 'parts', priority: 'critical', description: 'Default header — logo, nav, search, user menu', react: 'Header.tsx' },
  { file: 'parts/header-transparent.html', category: 'parts', priority: 'important', description: 'Overlay header for hero pages', react: 'Header.tsx' },
  { file: 'parts/footer.html', category: 'parts', priority: 'critical', description: 'Default footer — 4-col layout, copyright', react: 'Footer.tsx' },
  { file: 'parts/footer-simple.html', category: 'parts', priority: 'optional', description: 'Simplified footer (checkout/login)', react: 'Footer.tsx' },
  { file: 'parts/sidebar.html', category: 'parts', priority: 'important', description: 'Default article sidebar — ads + related', react: '—' },
  { file: 'parts/sidebar-event.html', category: 'parts', priority: 'optional', description: 'Event-specific sidebar', react: '—' },
  { file: 'parts/mini-cart.html', category: 'parts', priority: 'important', description: 'Floating mini-cart widget', react: 'Header.tsx' },
  { file: 'parts/post-meta-article.html', category: 'parts', priority: 'important', description: 'Author, date, reading time meta bar', react: 'PostMeta.tsx' },
  { file: 'parts/breadcrumbs.html', category: 'parts', priority: 'important', description: 'Breadcrumb navigation wrapper', react: 'Breadcrumbs.tsx' },
];

// ─── Plugin File Inventory ───────────────────────────────────────────────────

export interface PluginFile {
  file: string;
  category: string;
  priority: 'critical' | 'important' | 'optional';
  description: string;
  react: string;
}

export const EXTENDED_PLUGIN_FILES: PluginFile[] = [
  // Root
  { file: 'die-papier-blocks.php', category: 'root', priority: 'critical', description: 'Main plugin file — header, activation hooks', react: '—' },
  { file: 'package.json', category: 'root', priority: 'critical', description: '@wordpress/scripts build pipeline', react: 'package.json' },

  // Inc — Functional Files
  { file: 'inc/block-styles.php', category: 'config', priority: 'critical', description: 'Custom block style registrations', react: '—' },
  { file: 'inc/cpt-event.php', category: 'cpt', priority: 'critical', description: 'dp_event — Gebeure (Events)', react: 'Events.tsx' },
  { file: 'inc/cpt-obituary.php', category: 'cpt', priority: 'important', description: 'dp_obituary — Doodsberrigte', react: 'Obituaries.tsx' },
  { file: 'inc/cpt-sponsor.php', category: 'cpt', priority: 'important', description: 'dp_sponsor — Borge (Sponsors)', react: 'Sponsors.tsx' },
  { file: 'inc/cpt-competition.php', category: 'cpt', priority: 'important', description: 'dp_competition — Kompetisies', react: 'Competitions.tsx' },
  { file: 'inc/cpt-multimedia.php', category: 'cpt', priority: 'important', description: 'dp_multimedia — Multimedia', react: 'Multimedia.tsx' },
  { file: 'inc/cpt-eedition.php', category: 'cpt', priority: 'critical', description: 'dp_eedition — E-Uitgawes', react: 'EEditions.tsx' },
  { file: 'inc/cpt-faq.php', category: 'cpt', priority: 'important', description: 'dp_faq — Page-specific FAQs', react: 'pageFaqs.ts' },

  // Blocks — Active Custom Gutenberg (9)
  { file: 'src/blocks/competition-badge/', category: 'blocks', priority: 'important', description: 'dp/competition-badge — Active/Closed/Winner status', react: 'CompetitionStatusBadge.tsx' },
  { file: 'src/blocks/competition-entry/', category: 'blocks', priority: 'important', description: 'dp/competition-entry — Gravity Forms embed', react: 'CompetitionEntry.tsx' },
  { file: 'src/blocks/filter-bar/', category: 'blocks', priority: 'important', description: 'dp/filter-bar — horizontal filter pills', react: 'FilterBar.tsx' },
  { file: 'src/blocks/slider/', category: 'blocks', priority: 'critical', description: 'dp/slider — generic carousel (InnerBlocks, Interactivity API)', react: 'HeroSlider.tsx + QuoteSlider.tsx' },
  { file: 'src/blocks/sponsor-banner/', category: 'blocks', priority: 'important', description: 'dp/sponsor-banner — sponsorId, alignment, size', react: 'SponsoredInFeed.tsx' },
  { file: 'src/blocks/tab-bar/', category: 'blocks', priority: 'important', description: 'dp/tab-bar — tabbed content navigation', react: 'TabBar.tsx' },
  { file: 'src/blocks/traffic-widget/', category: 'blocks', priority: 'optional', description: 'dp/traffic-widget — route data, server-side render', react: 'TrafficWidget.tsx' },
  { file: 'src/blocks/weather-widget/', category: 'blocks', priority: 'optional', description: 'dp/weather-widget — Transients API (1hr), OpenWeatherMap', react: 'WeatherWidget.tsx' },
];

// ─── Content Model (CPTs, Fields, Taxonomies) ────────────────────────────────

export interface CptField {
  key: string;
  type: string;
  description: string;
  required?: boolean;
}

export interface CptDefinition {
  slug: string;
  singular: string;
  singularEn: string;
  plural: string;
  pluralEn: string;
  supports: string[];
  taxonomies: string[];
  fields: CptField[];
  description: string;
  descriptionEn: string;
  reactSource: string;
  icon: string;
}

export const CPT_DEFINITIONS: CptDefinition[] = [
  {
    slug: 'dp_event',
    singular: 'Gebeurtenis', singularEn: 'Event',
    plural: 'Gebeure', pluralEn: 'Events',
    supports: ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
    taxonomies: ['dp_event_category'],
    description: 'Kalendergebeure vir die "Gebeure" afdeling',
    descriptionEn: 'Calendar events for the "Gebeure" section',
    reactSource: 'Events.tsx / events.ts',
    icon: 'calendar',
    fields: [
      { key: 'event_date', type: 'Date Picker (Ymd)', description: 'Key for sorting — determines display order', required: true },
      { key: 'event_time', type: 'Time Picker / Text', description: 'Event start time', required: false },
      { key: 'event_location', type: 'Text / Google Maps', description: 'Physical location or venue', required: false },
      { key: 'event_ticket_url', type: 'URL', description: 'External ticketing link', required: false },
    ],
  },
  {
    slug: 'dp_competition',
    singular: 'Kompetisie', singularEn: 'Competition',
    plural: 'Kompetisies', pluralEn: 'Competitions',
    supports: ['title', 'editor', 'thumbnail'],
    taxonomies: ['dp_competition_category'],
    description: 'Leser-kompetisies en weggeegeleenthede',
    descriptionEn: 'Reader competitions and giveaways',
    reactSource: 'Competitions.tsx / competitions.ts',
    icon: 'trophy',
    fields: [
      { key: 'prize', type: 'Text', description: 'Prize description — e.g. "R5000 Kontant"', required: true },
      { key: 'prize_value', type: 'Text', description: 'Monetary value — e.g. "R 5,000"', required: false },
      { key: 'open_date', type: 'Date Picker', description: 'Competition opens date', required: true },
      { key: 'closing_date', type: 'Date Picker', description: 'Competition closes date', required: true },
      { key: 'winner_announcement_date', type: 'Date Picker', description: 'Winner announcement date', required: false },
      { key: 'sponsor_name', type: 'Text', description: 'Legacy simple sponsor name', required: false },
      { key: 'sponsor_id', type: 'Post Object → dp_sponsor', description: 'Advanced relationship to sponsor CPT', required: false },
      { key: 'entry_form_id', type: 'Number', description: 'Gravity Forms form ID', required: true },
      { key: 'status', type: 'Select: Active|Closed|Winner Announced', description: 'Can derive from dates or set manually', required: false },
    ],
  },
  {
    slug: 'dp_sponsor',
    singular: 'Borg', singularEn: 'Sponsor',
    plural: 'Borge', pluralEn: 'Sponsors',
    supports: ['title', 'excerpt', 'thumbnail'],
    taxonomies: ['dp_sponsor_tier'],
    description: 'Profiele vir adverteerders en vennote',
    descriptionEn: 'Profiles for advertisers and partners',
    reactSource: 'Sponsors.tsx / sponsors.ts',
    icon: 'star-filled',
    fields: [
      { key: 'website_url', type: 'URL', description: 'Sponsor website link', required: false },
      { key: 'contact_email', type: 'Email', description: 'Contact email address', required: false },
      { key: 'primary_color', type: 'Color Picker', description: 'Brand primary color for banner styling', required: false },
    ],
  },
  {
    slug: 'dp_eedition',
    singular: 'E-Uitgawe', singularEn: 'E-Edition',
    plural: 'E-Uitgawes', pluralEn: 'E-Editions',
    supports: ['title', 'editor', 'thumbnail'],
    taxonomies: ['dp_edition_type'],
    description: 'Digitale PDF-replikas van die gedrukte koerant',
    descriptionEn: 'Digital PDF replicas of the printed newspaper',
    reactSource: 'EEditions.tsx / mockEEditions.ts',
    icon: 'media-document',
    fields: [
      { key: 'publication_date', type: 'Date Picker', description: 'Publication date for sorting', required: true },
      { key: 'pdf_file', type: 'File Upload', description: 'PDF file for Flipbook viewer', required: true },
      { key: 'edition_number', type: 'Number', description: 'Sequential edition number', required: false },
      { key: 'page_count', type: 'Number', description: 'Number of pages', required: false },
      { key: 'linked_product_id', type: 'Number', description: 'WooCommerce Product ID for single purchase (R35)', required: true },
    ],
  },
  {
    slug: 'dp_obituary',
    singular: 'Doodsberig', singularEn: 'Obituary',
    plural: 'Doodsberrigte', pluralEn: 'Obituaries',
    supports: ['title', 'editor', 'excerpt', 'thumbnail'],
    taxonomies: ['dp_obituary_category'],
    description: 'Doodskennisgewings en huldeblykke',
    descriptionEn: 'Death notices and tributes',
    reactSource: 'Obituaries.tsx / obituaries.ts',
    icon: 'heart',
    fields: [
      { key: 'date_of_birth', type: 'Date Picker', description: 'Date of birth', required: false },
      { key: 'date_of_death', type: 'Date Picker', description: 'Date of death', required: true },
      { key: 'location', type: 'Text', description: 'Town/city', required: false },
      { key: 'survived_by', type: 'Textarea', description: 'Surviving family members', required: false },
      { key: 'funeral_details', type: 'Textarea', description: 'Funeral service date, time, venue', required: false },
    ],
  },
  {
    slug: 'dp_multimedia',
    singular: 'Multimedia', singularEn: 'Multimedia',
    plural: 'Multimedia', pluralEn: 'Multimedia',
    supports: ['title', 'editor', 'thumbnail'],
    taxonomies: ['dp_media_type'],
    description: 'Video, galerye, en poduitsendings',
    descriptionEn: 'Videos, galleries, and podcasts',
    reactSource: 'Multimedia.tsx / multimedia.ts',
    icon: 'video-alt3',
    fields: [
      { key: 'media_url', type: 'URL', description: 'YouTube/Vimeo embed URL or audio URL', required: true },
      { key: 'duration', type: 'Text', description: 'Duration string (e.g. "12:34")', required: false },
    ],
  },
  {
    slug: 'dp_faq',
    singular: 'Vraag', singularEn: 'FAQ',
    plural: 'Vrae', pluralEn: 'FAQs',
    supports: ['title', 'editor'],
    taxonomies: ['dp_faq_category'],
    description: 'Bladsy-spesifieke FAQ pare (~80 V&A oor ~30 kategorieë)',
    descriptionEn: 'Page-specific FAQ pairs (~80 Q&A across ~30 categories)',
    reactSource: 'pageFaqs.ts / PageFAQSection.tsx',
    icon: 'editor-help',
    fields: [
      { key: 'faq_answer', type: 'WYSIWYG', description: 'Answer content (title = question)', required: true },
      { key: 'display_order', type: 'Number', description: 'Sort order within category', required: false },
    ],
  },
];

// Standard Post Extensions
export const POST_EXTENSIONS: CptField[] = [
  { key: '_read_time', type: 'Number', description: 'Calculated reading time in minutes', required: false },
  { key: '_is_featured', type: 'Boolean / Checkbox', description: 'Featured post flag — appears in hero slider', required: false },
  { key: '_is_breaking', type: 'Boolean / Checkbox', description: 'Breaking news flag — shows alert banner', required: false },
  { key: '_sponsor_id', type: 'Post Object → dp_sponsor', description: 'Sponsored article — links to sponsor CPT', required: false },
];

// ─── Taxonomy Definitions ────────────────────────────────────────────────────

export interface TaxonomyTerm {
  slug: string;
  name: string;
}

export interface TaxonomyDefinition {
  slug: string;
  label: string;
  labelEn: string;
  hierarchical: boolean;
  postTypes: string[];
  terms?: TaxonomyTerm[];
}

export const TAXONOMY_DEFINITIONS: TaxonomyDefinition[] = [
  {
    slug: 'category',
    label: 'Kategorie', labelEn: 'Category',
    hierarchical: true,
    postTypes: ['post'],
    terms: [
      { slug: 'nuus', name: 'Nuus' },
      { slug: 'sport', name: 'Sport' },
      { slug: 'sakenuus', name: 'Sakenuus' },
      { slug: 'leefstyl', name: 'Leefstyl' },
      { slug: 'ontspanning', name: 'Ontspanning' },
      { slug: 'misdaad', name: 'Misdaad' },
      { slug: 'eiendom', name: 'Eiendom' },
      { slug: 'motors', name: 'Motors' },
      { slug: 'menings', name: 'Menings' },
      { slug: 'gesondheid', name: 'Gesondheid' },
      { slug: 'tegnologie', name: 'Tegnologie' },
      { slug: 'opvoeding', name: 'Opvoeding' },
      { slug: 'landbou', name: 'Landbou' },
      { slug: 'gemeenskap', name: 'Gemeenskap' },
    ],
  },
  {
    slug: 'dp_event_category',
    label: 'Geleentheidskategorie', labelEn: 'Event Category',
    hierarchical: true,
    postTypes: ['dp_event'],
    terms: [
      { slug: 'konsert', name: 'Konsert' },
      { slug: 'uitstalling', name: 'Uitstalling' },
      { slug: 'mark', name: 'Mark' },
      { slug: 'sport-event', name: 'Sportbyeenkoms' },
      { slug: 'gemeenskap-event', name: 'Gemeenskapsbyeenkoms' },
      { slug: 'fondsinsamelings', name: 'Fondsinsamelings' },
      { slug: 'ander', name: 'Ander' },
    ],
  },
];

// ─── Guidelines File Tree ────────────────────────────────────────────────────

export interface GuidelineFile {
  path: string;
  label: string;
  category: string;
}

export const GUIDELINE_FILES: GuidelineFile[] = [
  // WordPress Migration
  { path: '/guidelines/wordpress-migration/theme-structure.md', label: 'Theme & Plugin Structure', category: 'Migration' },
  { path: '/guidelines/wordpress-migration/pattern-strategy.md', label: 'Pattern Strategy', category: 'Migration' },
  { path: '/guidelines/wordpress-migration/theme-json-strategy.md', label: 'Theme.json Strategy', category: 'Migration' },
  { path: '/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md', label: 'Section Styles Architecture', category: 'Migration' },

  // Design Tokens
  { path: '/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md', label: 'Design System Guide (Canonical)', category: 'Design Tokens' },
  { path: '/guidelines/design-tokens/typography.md', label: 'Typography', category: 'Design Tokens' },
  { path: '/guidelines/design-tokens/colors.md', label: 'Colors', category: 'Design Tokens' },
  { path: '/guidelines/design-tokens/spacing.md', label: 'Spacing', category: 'Design Tokens' },

  // Components
  { path: '/guidelines/components/README.md', label: 'Components Overview', category: 'Components' },
  { path: '/guidelines/components/component-library.md', label: 'Component Library (ShadCN)', category: 'Components' },
  { path: '/guidelines/components/layout-components.md', label: 'Layout Components', category: 'Components' },

  // Development
  { path: '/guidelines/development/coding-standards.md', label: 'Coding Standards', category: 'Development' },
  { path: '/guidelines/development/dev-tools-protection.md', label: 'Dev Tools Protection (CRITICAL)', category: 'Development' },
];

export const GUIDELINE_CATEGORIES = ['Migration', 'Design Tokens', 'Components', 'Content', 'Site Structure', 'Development', 'Commerce'];

// ─── Block Styles Mapping ─────────────────────────────────────────────────────

export interface BlockStyleMigrationEntry {
  block: string;
  name: string;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  json: any;
  css: string;
  usage: string;
  usageEn: string;
  wpMarkup: string;
}

export const BLOCK_STYLES: BlockStyleMigrationEntry[] = ALL_BLOCK_STYLES.map(s => ({
  block: s.targetBlock,
  name: s.name,
  label: s.label,
  labelEn: s.label,
  description: s.description,
  descriptionEn: s.description,
  json: s.wpThemeJson.styles,
  css: s.cssClass || `.is-style-${s.name}`,
  usage: `Gebruik in ${s.patterns.join(', ') || 'algemene bladsye'}.`,
  usageEn: `Used in ${s.patterns.join(', ') || 'general pages'}.`,
  wpMarkup: `<!-- wp:${s.targetBlock} {"className":"is-style-${s.name}"} -->\n<div class="wp-block-${s.targetBlock.replace('/', '-')} is-style-${s.name}"></div>\n<!-- /wp:${s.targetBlock} -->`,
}));

// ─── Color Block Styles ───────────────────────────────────────────────────────

export const COLOR_BLOCK_STYLES: BlockStyleMigrationEntry[] = [
  {
    block: 'core/group',
    name: 'navy-background',
    label: 'Navy Agtergrond',
    labelEn: 'Navy Background',
    description: 'Donker blou agtergrond met wit teks vir volle-wydte seksies.',
    descriptionEn: 'Dark navy background with white text for full-width sections.',
    json: { color: { background: 'var:preset|color|secondary', text: 'var:preset|color|base' } },
    css: '.is-style-navy-background',
    usage: 'Held-afdelings, voetskrifte, CTAs.',
    usageEn: 'Hero sections, footers, CTAs.',
    wpMarkup: '<!-- wp:group {"tagName":"section","className":"is-style-navy-background"} -->',
  },
  {
    block: 'core/group',
    name: 'muted-background',
    label: 'Gedempte Agtergrond',
    labelEn: 'Muted Background',
    description: 'Ligte grys agtergrond vir visuele skeiding tussen wit seksies.',
    descriptionEn: 'Light gray background for visual separation between white sections.',
    json: { color: { background: 'var:preset|color|tertiary', text: 'var:preset|color|main-accent' } },
    css: '.is-style-muted-background',
    usage: 'Alternatiewe afdelings op die tuisblad.',
    usageEn: 'Alternating sections on the homepage.',
    wpMarkup: '<!-- wp:group {"tagName":"section","className":"is-style-muted-background"} -->',
  },
];

// ─── Color Utility Classes ────────────────────────────────────────────────────

export const COLOR_UTILITY_CLASSES = {
  text: [
    { name: '.text-brand-red', color: 'var(--wp--preset--color--primary)', usage: 'Hoof handelsmerk rooi teks', note: 'Legacy — gebruik .text-primary' },
    { name: '.text-brand-navy', color: 'var(--wp--preset--color--secondary)', usage: 'Hoof handelsmerk navy teks', note: 'Legacy — gebruik .text-secondary' },
    { name: '.text-muted-foreground', color: 'var(--wp--preset--color--main-accent)', usage: 'Gedempte grys teks' },
    { name: '.text-primary', color: 'var(--wp--preset--color--primary)', usage: 'Moderne primêre kleur teks (aanbeveel)' },
    { name: '.text-secondary', color: 'var(--wp--preset--color--secondary)', usage: 'Moderne sekondêre kleur teks (aanbeveel)' },
  ],
  background: [
    { name: '.bg-brand-red', color: 'var(--wp--preset--color--primary)', usage: 'Handelsmerk rooi agtergrond', note: 'Legacy — gebruik .bg-primary' },
    { name: '.bg-brand-navy', color: 'var(--wp--preset--color--secondary)', usage: 'Handelsmerk navy agtergrond', note: 'Legacy — gebruik .bg-secondary' },
    { name: '.bg-gray-100', color: 'var(--wp--preset--color--tertiary)', usage: 'Ligte grys agtergrond' },
    { name: '.bg-primary', color: 'var(--wp--preset--color--primary)', usage: 'Moderne primêre kleur agtergrond (aanbeveel)' },
    { name: '.bg-secondary', color: 'var(--wp--preset--color--secondary)', usage: 'Moderne sekondêre kleur agtergrond (aanbeveel)' },
  ],
};

// ─── Content Relationships ───────────────────────────────────────────────────

export interface ContentRelationship {
  from: string;
  fromField: string;
  to: string;
  cardinality: 'one-to-one' | 'many-to-one' | 'many-to-many';
  description: string;
  descriptionEn: string;
}

export const CONTENT_RELATIONSHIPS: ContentRelationship[] = [
  {
    from: 'dp_competition', fromField: 'sponsor_id', to: 'dp_sponsor',
    cardinality: 'many-to-one',
    description: 'Kompetisie word geborg deur \'n borg',
    descriptionEn: 'Competition is sponsored by a sponsor',
  },
  {
    from: 'dp_event', fromField: 'venue_id', to: 'dp_sponsor',
    cardinality: 'many-to-one',
    description: 'Geleentheid vind plaas by \'n plek/borg',
    descriptionEn: 'Event takes place at a venue/sponsor',
  },
];