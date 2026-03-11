// ─── Pattern Browser Data ──────────────────────────────────────────────────
// All 177 WordPress block patterns (on disk) with implementation details, block HTML outlines,
// and migration guidance. Source: /wordpress-export/themes/die-papier-theme/patterns/
// Updated: 2026-03-04 (Added 10 missing patterns: 5 submission forms + 3 WooCommerce + 2 sections)

/** Legacy category type — kept for backward compatibility with existing entries */
export type PatternType = 'page' | 'archive' | 'single' | 'auth' | 'submission' | 'newsletter' | 'thankyou' | 'policy' | 'utility' | 'section';

/** The 14 actual subfolder names on disk */
export type PatternFolder = 'archive' | 'card' | 'cta' | 'footer' | 'header' | 'hidden' | 'icon' | 'navigation' | 'page' | 'parts' | 'query' | 'section' | 'sidebar' | 'woocommerce';

export type PatternPriority = 'P0' | 'P1' | 'P2' | 'P3';
export type SyncType = 'Full' | 'None' | 'Part';
export type PatternStatus = 'not-started' | 'in-progress' | 'complete';

export interface PhpParam {
  name: string;
  type: string;
  default: string;
  description: string;
  blockAttribute?: string;
}

export interface PatternUsage {
  type: 'template' | 'part' | 'page-content' | 'inline';
  slug: string;
  label: string;
}

export interface PatternEntry {
  id: number;
  name: string;
  slug: string;
  category: PatternType;
  /** Actual disk subfolder */
  folder: PatternFolder;
  patternCategory: string;
  /** Path to guideline markdown file (relative to /guidelines/components/patterns/) */
  guidelinePath: string;
  reactSource: string;
  wpFile: string;
  priority: PatternPriority;
  syncType: SyncType;
  phpParams?: PhpParam[];
  usedIn?: PatternUsage[];
  sections?: string[];
  typographyNotes?: string[];
  description?: string;
  /** Detailed implementation guide for the WP developer */
  implementationNotes?: string;
  /** Block HTML outline showing the WP block structure */
  blockHtml?: string;
  /** Related WP blocks used in this pattern */
  wpBlocks?: string[];
  /** Dynamic features requiring JS/PHP logic beyond static block markup */
  dynamicFeatures?: string[];
  /** CSS class mapping notes (React/Tailwind → WP) */
  cssNotes?: string[];
}

// ─── PHP Header Parameters Reference ────────────────────────────────────────

export const PHP_HEADER_PARAMS: { name: string; required: boolean; type: string; description: string; example: string }[] = [
  { name: 'Title', required: true, type: 'string', description: 'Human-readable name shown in the block inserter', example: 'Homepage Layout' },
  { name: 'Slug', required: true, type: 'string', description: 'Unique identifier prefixed with theme slug (namespace/slug)', example: 'die-papier/page-home' },
  { name: 'Categories', required: true, type: 'string (CSV)', description: 'Comma-separated category slugs for grouping in inserter', example: 'pages, layout' },
  { name: 'Description', required: false, type: 'string', description: 'Short description shown in the inserter tooltip', example: 'Full homepage layout with hero and category sections' },
  { name: 'Keywords', required: false, type: 'string (CSV)', description: 'Comma-separated search terms for the inserter', example: 'home, landing, front-page' },
  { name: 'Viewport Width', required: false, type: 'number', description: 'Width in pixels for the pattern preview in the inserter', example: '1440' },
  { name: 'Block Types', required: false, type: 'string (CSV)', description: 'Block types this pattern can transform from', example: 'core/template-part/header' },
  { name: 'Post Types', required: false, type: 'string (CSV)', description: 'Post types this pattern is restricted to', example: 'page, wp_template' },
  { name: 'Template Types', required: false, type: 'string (CSV)', description: 'Template types this pattern can be used with (WP 6.4+)', example: 'home, front-page' },
  { name: 'Inserter', required: false, type: 'boolean', description: 'Whether the pattern appears in the inserter (default: true)', example: 'false' },
];

// ─── Subfolder Metadata ─────────────────────────────────────────────────────

export interface FolderMeta {
  key: PatternFolder;
  labelAf: string;
  labelEn: string;
  color: string;
  icon: string;
  descriptionAf: string;
  descriptionEn: string;
}

export const FOLDER_META: FolderMeta[] = [
  { key: 'archive', labelAf: 'Argief', labelEn: 'Archive', color: 'bg-green-500', icon: 'Archive', descriptionAf: 'Argief bladsye en lysaansig-patrone', descriptionEn: 'Archive pages and list view patterns' },
  { key: 'card', labelAf: 'Kaarte', labelEn: 'Cards', color: 'bg-amber-500', icon: 'LayoutGrid', descriptionAf: 'Pos- en inhoudskaarte vir roosters', descriptionEn: 'Post and content cards for grid layouts' },
  { key: 'cta', labelAf: 'Oproep tot Aksie', labelEn: 'CTA', color: 'bg-rose-500', icon: 'Megaphone', descriptionAf: 'Oproep-tot-aksie en promosie-patrone', descriptionEn: 'Call-to-action and promotional patterns' },
  { key: 'footer', labelAf: 'Voetskrif', labelEn: 'Footer', color: 'bg-gray-600', icon: 'PanelBottom', descriptionAf: 'Webwerf voetskrif-patrone', descriptionEn: 'Site footer patterns' },
  { key: 'header', labelAf: 'Kopskrif', labelEn: 'Header', color: 'bg-indigo-500', icon: 'PanelTop', descriptionAf: 'Webwerf kopskrif- en navigasie-patrone', descriptionEn: 'Site header and navigation patterns' },
  { key: 'hidden', labelAf: 'Versteek', labelEn: 'Hidden', color: 'bg-gray-400', icon: 'EyeOff', descriptionAf: 'Versteekte patrone (nie in inserter nie)', descriptionEn: 'Hidden patterns (not in block inserter)' },
  { key: 'icon', labelAf: 'Ikone', labelEn: 'Icons', color: 'bg-pink-500', icon: 'Image', descriptionAf: 'Pasgemaakte ikoon-gebaseerde patrone', descriptionEn: 'Custom icon-based patterns' },
  { key: 'navigation', labelAf: 'Navigasie', labelEn: 'Navigation', color: 'bg-orange-500', icon: 'Menu', descriptionAf: 'Navigasie- en spyskaart-patrone', descriptionEn: 'Navigation and menu patterns' },
  { key: 'page', labelAf: 'Bladsy', labelEn: 'Page', color: 'bg-blue-500', icon: 'FileText', descriptionAf: 'Volbladsy-patrone (tuisblad, beleid, ens.)', descriptionEn: 'Full-page patterns (home, policy, etc.)' },
  { key: 'parts', labelAf: 'Onderdele', labelEn: 'Parts', color: 'bg-emerald-500', icon: 'Component', descriptionAf: 'Komponente en sjabloon-onderdele', descriptionEn: 'Components and template parts' },
  { key: 'query', labelAf: 'Navraag', labelEn: 'Query', color: 'bg-cyan-500', icon: 'Database', descriptionAf: 'AQL navraag-lus patrone', descriptionEn: 'Advanced Query Loop patterns' },
  { key: 'section', labelAf: 'Afdeling', labelEn: 'Section', color: 'bg-violet-500', icon: 'Layers', descriptionAf: 'Herbruikbare afdelingspatrone', descriptionEn: 'Reusable section patterns' },
  { key: 'sidebar', labelAf: 'Sybalk', labelEn: 'Sidebar', color: 'bg-teal-500', icon: 'PanelRight', descriptionAf: 'Sybalk-legstukke en widgets', descriptionEn: 'Sidebar widgets and components' },
  { key: 'woocommerce', labelAf: 'WooCommerce', labelEn: 'WooCommerce', color: 'bg-purple-600', icon: 'ShoppingCart', descriptionAf: 'E-handel en mandjie patrone', descriptionEn: 'E-commerce and cart patterns' },
];

// ─── Folder Derivation Helpers ──────────────────────────────────────────────

/** Derive the correct subfolder from a pattern slug */
export function getPatternFolder(slug: string): PatternFolder {
  const short = slug.replace('die-papier/', '');
  if (short.startsWith('archive-')) return 'archive';
  if (short.startsWith('card-')) return 'card';
  if (short === 'cta' || short.startsWith('cta-') || short.startsWith('section-cta')) return 'cta';
  if (short === 'footer' || short.startsWith('footer-')) return 'footer';
  if (short === 'header' || short.startsWith('header-')) return 'header';
  if (short.startsWith('hidden-')) return 'hidden';
  if (short.startsWith('icon-')) return 'icon';
  if (short.startsWith('menu-')) return 'navigation';
  if (short.startsWith('part-')) return 'parts';
  if (short.startsWith('query-')) return 'query';
  if (short.startsWith('sidebar-')) return 'sidebar';
  if (short.startsWith('woo-')) return 'woocommerce';
  if (short.startsWith('section-') || short.startsWith('homepage-')) return 'section';
  return 'page';
}

/** Get the correct wpFile path with subfolder */
export function getCorrectWpFile(slug: string): string {
  const short = slug.replace('die-papier/', '');
  const folder = getPatternFolder(slug);
  return `patterns/${folder}/${short}.php`;
}

/** Get the resolved folder for a pattern entry */
export function resolveFolder(entry: PatternEntry): PatternFolder {
  return entry.folder;
}

/** Get patterns grouped by folder */
export function getPatternsByFolder(): Record<PatternFolder, PatternEntry[]> {
  const grouped: Record<PatternFolder, PatternEntry[]> = {
    archive: [], card: [], cta: [], footer: [], header: [],
    hidden: [], icon: [], navigation: [], page: [], parts: [],
    query: [], section: [], sidebar: [], woocommerce: [],
  };
  for (const p of PATTERNS) {
    const folder = resolveFolder(p);
    if (grouped[folder]) {
      grouped[folder].push(p);
    }
  }
  return grouped;
}

/** Get folder file count from disk (based on wpPatterns glob) */
export function getFolderFileCounts(globPaths: string[]): Record<PatternFolder, number> {
  const counts: Record<PatternFolder, number> = {
    archive: 0, card: 0, cta: 0, footer: 0, header: 0,
    hidden: 0, icon: 0, navigation: 0, page: 0, parts: 0,
    query: 0, section: 0, sidebar: 0, woocommerce: 0,
  };
  for (const p of globPaths) {
    const match = p.match(/patterns\/([^/]+)\//);
    if (match && match[1] in counts) {
      counts[match[1] as PatternFolder]++;
    }
  }
  return counts;
}

// ─── Pattern Data ──────────────────────────────────────────────────────────

export const PATTERNS: PatternEntry[] = [
  // ═══ Page Patterns (ID 1-12, 35-41, 61-62, 95-105, 141-147) ═══
  {
    id: 1, name: 'Homepage', slug: 'die-papier/page-home', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Home.tsx', wpFile: 'patterns/page/page-home.php',
    guidelinePath: 'page/page-home.md', priority: 'P0', syncType: 'None',
    description: 'Full homepage with core/cover hero, category sections (AQL), sidebar widgets, and newsletter CTA.',
    implementationNotes: 'The most complex pattern. Uses a 70/30 column split. The hero uses core/cover block. Each category section uses a core/query block filtered by category ID. The newsletter CTA at the bottom uses Gravity Forms (gravityforms/form block). Brand quotes use section-brand-quotes pattern.',
    phpParams: [
      { name: 'show_breaking_news', type: 'boolean', default: 'true', description: 'Show breaking news ticker', blockAttribute: 'showBreakingNews' },
      { name: 'featured_category_id', type: 'number', default: '0', description: 'ID for Hero/Feature grid source', blockAttribute: 'featuredCategoryId' },
      { name: 'newsletter_form_id', type: 'number', default: '1', description: 'Gravity Forms ID for newsletter', blockAttribute: 'newsletterFormId' },
    ],
    usedIn: [{ type: 'template', slug: 'front-page.html', label: 'Front Page Template' }],
    wpBlocks: ['core/group', 'core/columns', 'core/query', 'core/cover', 'gravityforms/form', 'die-papier/slider'],
  },
  {
    id: 2, name: 'About Us', slug: 'die-papier/page-about', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'About.tsx', wpFile: 'patterns/page/page-about.php',
    guidelinePath: 'page/page-about.md', priority: 'P1', syncType: 'None',
    description: 'About page with hero, team grids, mission values, and FAQ.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'core/columns', 'core/group', 'core/heading', 'die-papier/section-team-grid', 'die-papier/section-faq'],
  },
  {
    id: 3, name: 'Contact', slug: 'die-papier/page-contact', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Contact.tsx', wpFile: 'patterns/page/page-contact.php',
    guidelinePath: 'page/page-contact.md', priority: 'P1', syncType: 'None',
    description: 'Contact page with department cards, Gravity Forms contact form, sidebar with office details and map.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'core/columns', 'gravityforms/form', 'die-papier/section-faq'],
  },
  {
    id: 4, name: 'Advertise', slug: 'die-papier/page-advertise', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Advertise.tsx', wpFile: 'patterns/page/page-advertise.php',
    guidelinePath: 'page/page-advertise.md', priority: 'P1', syncType: 'None',
    description: 'Advertising page with ad options grid, benefits, lead form, and FAQ.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'core/columns', 'gravityforms/form', 'die-papier/section-faq'],
  },
  {
    id: 5, name: 'Subscriptions', slug: 'die-papier/page-subscribe', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'SubscribeEEdition.tsx', wpFile: 'patterns/page/page-subscribe.php',
    guidelinePath: 'page/page-subscribe.md', priority: 'P1', syncType: 'None',
    description: 'Landing page for subscription options with links to E-Edition and Delivery.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'core/columns'],
  },
  {
    id: 6, name: 'Subscribe: Delivery', slug: 'die-papier/page-subscribe-delivery', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'SubscribeDelivery.tsx', wpFile: 'patterns/page/page-subscribe-delivery.php',
    guidelinePath: 'page/page-subscribe-delivery.md', priority: 'P1', syncType: 'None',
    description: 'Print delivery subscription page with pricing cards and FAQ.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'die-papier/section-pricing-table', 'die-papier/section-faq'],
  },
  {
    id: 7, name: 'Subscribe: E-Edition', slug: 'die-papier/page-subscribe-eedition', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'SubscribeEEdition.tsx', wpFile: 'patterns/page/page-subscribe-eedition.php',
    guidelinePath: 'page/page-subscribe-eedition.md', priority: 'P1', syncType: 'None',
    description: 'E-Edition subscription page with pricing tiers and FAQ.',
    usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }],
    wpBlocks: ['core/cover', 'die-papier/section-pricing-table', 'die-papier/section-faq'],
  },
  {
    id: 8, name: 'FAQ', slug: 'die-papier/page-faq', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'FAQPage.tsx', wpFile: 'patterns/page/page-faq.php',
    guidelinePath: 'page/page-faq.md', priority: 'P2', syncType: 'None',
    description: 'Dedicated FAQ page with categorized accordion sections.',
    wpBlocks: ['core/group', 'core/heading', 'yoast/faq-block'],
  },
  {
    id: 9, name: 'Team', slug: 'die-papier/page-team', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Team.tsx', wpFile: 'patterns/page/page-team.php',
    guidelinePath: 'page/page-team.md', priority: 'P2', syncType: 'None',
    description: 'Team page showing editorial staff in a grid layout.',
    wpBlocks: ['core/group', 'die-papier/section-team-grid'],
  },
  {
    id: 10, name: 'Sitemap', slug: 'die-papier/page-sitemap', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Sitemap.tsx', wpFile: 'patterns/page/page-sitemap.php',
    guidelinePath: 'page/page-sitemap.md', priority: 'P3', syncType: 'None',
    description: 'HTML sitemap page listing all site sections and pages.',
  },
  {
    id: 11, name: 'Weather', slug: 'die-papier/page-weather', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Weather.tsx', wpFile: 'patterns/page/page-weather.php',
    guidelinePath: 'page/page-weather.md', priority: 'P3', syncType: 'None',
    description: 'Weather page showing regional weather data.',
  },
  {
    id: 12, name: 'Traffic', slug: 'die-papier/page-traffic', category: 'page', folder: 'page',
    patternCategory: 'die-papier-pages', reactSource: 'Traffic.tsx', wpFile: 'patterns/page/page-traffic.php',
    guidelinePath: 'page/page-traffic.md', priority: 'P3', syncType: 'None',
    description: 'Traffic information page with updates.',
  },
  { id: 35, name: 'Submit Hub', slug: 'die-papier/page-submit-hub', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'SubmitHub.tsx', wpFile: 'patterns/page/page-submit-hub.php', guidelinePath: 'page/page-submit-hub.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Hub for content submissions.' },
  { id: 36, name: 'Submit Event', slug: 'die-papier/page-submit-event', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'SubmitEvent.tsx', wpFile: 'patterns/page/page-submit-event.php', guidelinePath: 'page/page-submit-event.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Event submission form.' },
  { id: 37, name: 'Newsletter Subscribe', slug: 'die-papier/page-newsletter', category: 'newsletter', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'NewsletterSubscribe.tsx', wpFile: 'patterns/page/page-newsletter.php', guidelinePath: 'page/page-newsletter.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Newsletter signup page.' },
  { id: 38, name: 'Newsletter Manage', slug: 'die-papier/page-newsletter-manage', category: 'newsletter', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'ManageNewsletters.tsx', wpFile: 'patterns/page/page-newsletter-manage.php', guidelinePath: 'page/page-newsletter-manage.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Newsletter preference management.' },
  { id: 39, name: 'Newsletter Confirm', slug: 'die-papier/page-newsletter-confirm', category: 'newsletter', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'NewsletterConfirmation.tsx', wpFile: 'patterns/page/page-newsletter-confirm.php', guidelinePath: 'page/page-newsletter-confirm.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Newsletter confirmation landing.' },
  { id: 40, name: 'Newsletter Unsubscribe', slug: 'die-papier/page-newsletter-unsub', category: 'newsletter', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'NewsletterUnsubscribeConfirm.tsx', wpFile: 'patterns/page/page-newsletter-unsub.php', guidelinePath: 'page/page-newsletter-unsub.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Unsubscribe confirmation page.' },
  { id: 41, name: 'Newsletter Re-engage', slug: 'die-papier/page-newsletter-reengage', category: 'newsletter', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'NewsletterReEngagement.tsx', wpFile: 'patterns/page/page-newsletter-reengage.php', guidelinePath: 'page/page-newsletter-reengage.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Re-engagement for inactive subscribers.' },
  { id: 61, name: 'Offline', slug: 'die-papier/page-offline', category: 'utility', folder: 'page', patternCategory: 'die-papier-utility', reactSource: 'Offline.tsx', wpFile: 'patterns/page/page-offline.php', guidelinePath: 'page/page-offline.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [], description: 'Offline fallback page.' },
  { id: 62, name: 'Competition Terms', slug: 'die-papier/page-competition-terms', category: 'utility', folder: 'page', patternCategory: 'die-papier-utility', reactSource: 'CompetitionTerms.tsx', wpFile: 'patterns/page/page-competition-terms.php', guidelinePath: 'page/page-competition-terms.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Generic Page Template' }], description: 'Competition terms and conditions.' },
  { id: 95, name: 'Default Page', slug: 'die-papier/page-default', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'n/a', wpFile: 'patterns/page/page-default.php', guidelinePath: 'page/page-default.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'template', slug: 'page.html', label: 'Page Template' }], description: 'Default page layout.' },
  { id: 96, name: 'Account Activation', slug: 'die-papier/page-activation', category: 'auth', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'AccountActivation.tsx', wpFile: 'patterns/page/page-activation.php', guidelinePath: 'page/page-activation.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Account activation confirmation.' },
  { id: 97, name: 'Auth (Login/Register)', slug: 'die-papier/page-auth', category: 'auth', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'Register.tsx', wpFile: 'patterns/page/page-auth.php', guidelinePath: 'page/page-auth.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Login/register dual-pane layout.' },
  { id: 98, name: 'Cart', slug: 'die-papier/page-cart', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'Cart.tsx', wpFile: 'patterns/page/page-cart.php', guidelinePath: 'page/page-cart.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Shopping cart.' },
  { id: 99, name: 'Checkout', slug: 'die-papier/page-checkout', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'Checkout.tsx', wpFile: 'patterns/page/page-checkout.php', guidelinePath: 'page/page-checkout.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Checkout page.' },
  { id: 100, name: 'My Account', slug: 'die-papier/page-my-account', category: 'auth', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'MyAccount.tsx', wpFile: 'patterns/page/page-my-account.php', guidelinePath: 'page/page-my-account.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'User account dashboard.' },
  { id: 101, name: 'My E-Editions', slug: 'die-papier/page-my-eeditions', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'MyEEditions.tsx', wpFile: 'patterns/page/page-my-eeditions.php', guidelinePath: 'page/page-my-eeditions.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Purchased e-editions library.' },
  { id: 102, name: 'Policy Hub', slug: 'die-papier/page-policy', category: 'policy', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'Policies.tsx', wpFile: 'patterns/page/page-policy.php', guidelinePath: 'page/page-policy.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Policy hub linking to all sub-pages.' },
  { id: 103, name: 'Submit (Story/Letter)', slug: 'die-papier/page-submit', category: 'submission', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'SubmitHub.tsx', wpFile: 'patterns/page/page-submit.php', guidelinePath: 'page/page-submit.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Story/letter submission.' },
  { id: 105, name: 'Thank You', slug: 'die-papier/page-thank-you', category: 'thankyou', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'ThankYouContact.tsx', wpFile: 'patterns/page/page-thank-you.php', guidelinePath: 'page/page-thank-you.md', priority: 'P2', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Generic thank you confirmation.' },
  { id: 141, name: 'E-Editions Hub', slug: 'die-papier/page-e-editions', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'EEditions.tsx', wpFile: 'patterns/page/page-e-editions.php', guidelinePath: 'page/page-e-editions.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'E-editions landing page.' },
  { id: 142, name: 'Newsletter Archive Page', slug: 'die-papier/page-newsletter-archive', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'NewsletterArchive.tsx', wpFile: 'patterns/page/page-newsletter-archive.php', guidelinePath: 'page/page-newsletter-archive.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Newsletter edition archive.' },
  { id: 143, name: 'Policies Hub', slug: 'die-papier/page-policies', category: 'policy', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'Policies.tsx', wpFile: 'patterns/page/page-policies.php', guidelinePath: 'page/page-policies.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Policies overview.' },
  { id: 144, name: 'Search Page', slug: 'die-papier/page-search', category: 'page', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'SearchResults.tsx', wpFile: 'patterns/page/page-search.php', guidelinePath: 'page/page-search.md', priority: 'P1', syncType: 'None', phpParams: [], usedIn: [{ type: 'template', slug: 'search.html', label: 'Search Template' }], description: 'Search results page.' },
  { id: 145, name: 'Thank You: Ads', slug: 'die-papier/page-thank-you-ads', category: 'thankyou', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'ThankYouAdvertising.tsx', wpFile: 'patterns/page/page-thank-you-ads.php', guidelinePath: 'page/page-thank-you-ads.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Thank you after ad enquiry.' },
  { id: 146, name: 'Thank You: Contact', slug: 'die-papier/page-thank-you-contact', category: 'thankyou', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'ThankYouContact.tsx', wpFile: 'patterns/page/page-thank-you-contact.php', guidelinePath: 'page/page-thank-you-contact.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Thank you after contact submission.' },
  { id: 147, name: 'Thank You: Register', slug: 'die-papier/page-thank-you-register', category: 'thankyou', folder: 'page', patternCategory: 'die-papier-page', reactSource: 'ThankYouRegistration.tsx', wpFile: 'patterns/page/page-thank-you-register.php', guidelinePath: 'page/page-thank-you-register.md', priority: 'P3', syncType: 'None', phpParams: [], usedIn: [{ type: 'page-content', slug: 'page.html', label: 'Page Template' }], description: 'Thank you after registration.' },

  // ═══ Archive Patterns (ID 13-23, 77-80, 119-123) ═══
  { id: 13, name: 'Default Archive', slug: 'die-papier/archive-default', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-default.php', guidelinePath: 'archive/archive-default.md', priority: 'P0', syncType: 'Part', description: 'Fallback archive layout.' },
  { id: 14, name: 'Events Archive', slug: 'die-papier/archive-events', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Events.tsx', wpFile: 'patterns/archive/archive-events.php', guidelinePath: 'archive/archive-events.md', priority: 'P1', syncType: 'Part', description: 'Events listing.' },
  { id: 15, name: 'Obituaries Archive', slug: 'die-papier/archive-obituaries', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Obituaries.tsx', wpFile: 'patterns/archive/archive-obituaries.php', guidelinePath: 'archive/archive-obituaries.md', priority: 'P1', syncType: 'Part', description: 'Obituaries listing.' },
  { id: 16, name: 'Multimedia Archive', slug: 'die-papier/archive-multimedia', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Multimedia.tsx', wpFile: 'patterns/archive/archive-multimedia.php', guidelinePath: 'archive/archive-multimedia.md', priority: 'P2', syncType: 'Part', description: 'Multimedia gallery.' },
  { id: 17, name: 'Competitions Archive', slug: 'die-papier/archive-competitions', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Competitions.tsx', wpFile: 'patterns/archive/archive-competitions.php', guidelinePath: 'archive/archive-competitions.md', priority: 'P2', syncType: 'Part', description: 'Active and closed competitions.' },
  { id: 18, name: 'Sponsor Archive', slug: 'die-papier/archive-sponsors', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'SponsorArchive.tsx', wpFile: 'patterns/archive/archive-sponsors.php', guidelinePath: 'archive/archive-sponsors.md', priority: 'P3', syncType: 'Part', description: 'Sponsor directory.' },
  { id: 19, name: 'E-Editions Archive', slug: 'die-papier/archive-eeditions', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'EEditions.tsx', wpFile: 'patterns/archive/archive-eeditions.php', guidelinePath: 'archive/archive-eeditions.md', priority: 'P1', syncType: 'Part', description: 'E-Editions grid.' },
  { id: 20, name: 'Newsletter Archive', slug: 'die-papier/archive-newsletters', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'NewsletterArchive.tsx', wpFile: 'patterns/archive/archive-newsletters.php', guidelinePath: 'archive/archive-newsletters.md', priority: 'P3', syncType: 'Part', description: 'Past newsletters archive.' },
  { id: 21, name: 'Author Archive', slug: 'die-papier/archive-author', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Author.tsx', wpFile: 'patterns/archive/archive-author.php', guidelinePath: 'archive/archive-author.md', priority: 'P2', syncType: 'Part', description: 'Author profile and articles.' },
  { id: 22, name: 'Tag Archive', slug: 'die-papier/archive-tag', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'TagArchive.tsx', wpFile: 'patterns/archive/archive-tag.php', guidelinePath: 'archive/archive-tag.md', priority: 'P2', syncType: 'Part', description: 'Tag-filtered listing.' },
  { id: 23, name: 'Search Results', slug: 'die-papier/archive-search', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'SearchResults.tsx', wpFile: 'patterns/archive/archive-search.php', guidelinePath: 'archive/archive-search.md', priority: 'P1', syncType: 'Part', description: 'Search results layout.' },
  { id: 77, name: 'Category Archive', slug: 'die-papier/archive-category', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category.php', guidelinePath: 'archive/archive-category.md', priority: 'P0', syncType: 'None', description: 'Generic category archive.' },
  { id: 78, name: 'Event Category Archive', slug: 'die-papier/archive-event-category', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Events.tsx', wpFile: 'patterns/archive/archive-event-category.php', guidelinePath: 'archive/archive-event-category.md', priority: 'P2', syncType: 'None', description: 'Event category taxonomy.' },
  { id: 79, name: 'Multimedia Category Archive', slug: 'die-papier/archive-multimedia-category', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Multimedia.tsx', wpFile: 'patterns/archive/archive-multimedia-category.php', guidelinePath: 'archive/archive-multimedia-category.md', priority: 'P2', syncType: 'None', description: 'Multimedia category taxonomy.' },
  { id: 80, name: 'Sponsor Tier Archive', slug: 'die-papier/archive-sponsor-tier', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'SponsorArchive.tsx', wpFile: 'patterns/archive/archive-sponsor-tier.php', guidelinePath: 'archive/archive-sponsor-tier.md', priority: 'P2', syncType: 'None', description: 'Sponsor tier taxonomy.' },
  { id: 119, name: 'Category: Dink', slug: 'die-papier/archive-category-dink', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category-dink.php', guidelinePath: 'archive/archive-category-dink.md', priority: 'P2', syncType: 'None', description: 'Dink category variant.' },
  { id: 120, name: 'Category: Leefstyl', slug: 'die-papier/archive-category-leefstyl', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category-leefstyl.php', guidelinePath: 'archive/archive-category-leefstyl.md', priority: 'P2', syncType: 'None', description: 'Leefstyl category variant.' },
  { id: 121, name: 'Category: Nuus', slug: 'die-papier/archive-category-nuus', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category-nuus.php', guidelinePath: 'archive/archive-category-nuus.md', priority: 'P1', syncType: 'None', description: 'Nuus category variant.' },
  { id: 122, name: 'Category: Sake', slug: 'die-papier/archive-category-sake', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category-sake.php', guidelinePath: 'archive/archive-category-sake.md', priority: 'P2', syncType: 'None', description: 'Sake category variant.' },
  { id: 123, name: 'Category: Sport', slug: 'die-papier/archive-category-sport', category: 'archive', folder: 'archive', patternCategory: 'die-papier-archives', reactSource: 'Category.tsx', wpFile: 'patterns/archive/archive-category-sport.php', guidelinePath: 'archive/archive-category-sport.md', priority: 'P1', syncType: 'None', description: 'Sport category variant.' },

  // ═══ Card Patterns (ID 124-137, 81-83, 128-130) ═══
  { id: 124, name: 'Competition Grid Card', slug: 'die-papier/card-competition-grid', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Competitions.tsx', wpFile: 'patterns/card/card-competition-grid.php', guidelinePath: 'card/card-competition-grid.md', priority: 'P2', syncType: 'None', phpParams: [], description: 'Competition card.' },
  { id: 81, name: 'Competition Card Meta', slug: 'die-papier/card-competition-meta', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'CompetitionSingle.tsx', wpFile: 'patterns/card/card-competition-meta.php', guidelinePath: 'card/card-competition-meta.md', priority: 'P2', syncType: 'None', description: 'Competition metadata block.' },
  { id: 125, name: 'E-Edition Grid Card', slug: 'die-papier/card-eedition-grid-4col', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'EEditions.tsx', wpFile: 'patterns/card/card-eedition-grid-4col.php', guidelinePath: 'card/card-eedition-grid-4col.md', priority: 'P2', syncType: 'None', description: 'E-edition card.' },
  { id: 126, name: 'Event Grid Card', slug: 'die-papier/card-event-grid', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Events.tsx', wpFile: 'patterns/card/card-event-grid.php', guidelinePath: 'card/card-event-grid.md', priority: 'P2', syncType: 'None', description: 'Event card.' },
  { id: 82, name: 'Event Card Meta', slug: 'die-papier/card-event-meta', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Events.tsx', wpFile: 'patterns/card/card-event-meta.php', guidelinePath: 'card/card-event-meta.md', priority: 'P2', syncType: 'None', description: 'Event metadata block.' },
  { id: 127, name: 'Multimedia Grid Card', slug: 'die-papier/card-multimedia-grid', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Multimedia.tsx', wpFile: 'patterns/card/card-multimedia-grid.php', guidelinePath: 'card/card-multimedia-grid.md', priority: 'P2', syncType: 'None', description: 'Multimedia card.' },
  { id: 128, name: 'Multimedia Meta Compact', slug: 'die-papier/card-multimedia-meta-compact', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Multimedia.tsx', wpFile: 'patterns/card/card-multimedia-meta-compact.php', guidelinePath: 'card/card-multimedia-meta-compact.md', priority: 'P2', syncType: 'None', description: 'Compact multimedia meta.' },
  { id: 129, name: 'Newsletter Grid Card', slug: 'die-papier/card-newsletter-grid', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'NewsletterArchive.tsx', wpFile: 'patterns/card/card-newsletter-grid.php', guidelinePath: 'card/card-newsletter-grid.md', priority: 'P3', syncType: 'None', description: 'Newsletter edition card.' },
  { id: 130, name: 'Obituary Grid Card', slug: 'die-papier/card-obituary-grid', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Obituaries.tsx', wpFile: 'patterns/card/card-obituary-grid.php', guidelinePath: 'card/card-obituary-grid.md', priority: 'P2', syncType: 'None', description: 'Obituary card.' },
  { id: 83, name: 'Obituary Card Meta', slug: 'die-papier/card-obituary-meta', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Obituaries.tsx', wpFile: 'patterns/card/card-obituary-meta.php', guidelinePath: 'card/card-obituary-meta.md', priority: 'P2', syncType: 'None', description: 'Obituary metadata block.' },
  { id: 131, name: 'Post Featured Hero Card', slug: 'die-papier/card-post-featured-hero', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Home.tsx', wpFile: 'patterns/card/card-post-featured-hero.php', guidelinePath: 'card/card-post-featured-hero.md', priority: 'P0', syncType: 'None', description: 'Large featured hero card.' },
  { id: 132, name: 'Post Grid 2-Col Card', slug: 'die-papier/card-post-grid-2col', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Category.tsx', wpFile: 'patterns/card/card-post-grid-2col.php', guidelinePath: 'card/card-post-grid-2col.md', priority: 'P0', syncType: 'None', description: '2-column post card.' },
  { id: 133, name: 'Post Grid 3-Col Card', slug: 'die-papier/card-post-grid-3col', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Category.tsx', wpFile: 'patterns/card/card-post-grid-3col.php', guidelinePath: 'card/card-post-grid-3col.md', priority: 'P1', syncType: 'None', description: '3-column post card.' },
  { id: 134, name: 'Post List Card', slug: 'die-papier/card-post-list', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Category.tsx', wpFile: 'patterns/card/card-post-list.php', guidelinePath: 'card/card-post-list.md', priority: 'P1', syncType: 'None', description: 'Horizontal list post card.' },
  { id: 135, name: 'Sponsor Card: Bronze', slug: 'die-papier/card-sponsor-bronze', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Sponsors.tsx', wpFile: 'patterns/card/card-sponsor-bronze.php', guidelinePath: 'card/card-sponsor-bronze.md', priority: 'P3', syncType: 'None', description: 'Bronze sponsor card.' },
  { id: 136, name: 'Sponsor Card: Gold', slug: 'die-papier/card-sponsor-gold', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Sponsors.tsx', wpFile: 'patterns/card/card-sponsor-gold.php', guidelinePath: 'card/card-sponsor-gold.md', priority: 'P2', syncType: 'None', description: 'Gold sponsor card.' },
  { id: 137, name: 'Sponsor Card: Silver', slug: 'die-papier/card-sponsor-silver', category: 'section', folder: 'card', patternCategory: 'die-papier-cards', reactSource: 'Sponsors.tsx', wpFile: 'patterns/card/card-sponsor-silver.php', guidelinePath: 'card/card-sponsor-silver.md', priority: 'P3', syncType: 'None', description: 'Silver sponsor card.' },

  // ═══ CTA Patterns (ID 138, 70) ═══
  { id: 138, name: 'CTA Section', slug: 'die-papier/section-cta', category: 'section', folder: 'cta', patternCategory: 'die-papier-cta', reactSource: 'n/a', wpFile: 'patterns/cta/cta.php', guidelinePath: 'cta/cta.md', priority: 'P2', syncType: 'None', description: 'Reusable subscription prompt.' },
  { id: 70, name: 'CTA Card', slug: 'die-papier/section-cta-card', category: 'section', folder: 'cta', patternCategory: 'die-papier-cta', reactSource: 'CTACard.tsx', wpFile: 'patterns/cta/cta-card.php', guidelinePath: 'cta/cta-card.md', priority: 'P2', syncType: 'None', description: 'Generic CTA card.' },

  // ═══ Footer Patterns (ID 87-88) ═══
  { id: 87, name: 'Footer', slug: 'die-papier/footer', category: 'utility', folder: 'footer', patternCategory: 'die-papier-footers', reactSource: 'Footer.tsx', wpFile: 'patterns/footer/footer.php', guidelinePath: 'footer/footer.md', priority: 'P0', syncType: 'Full', usedIn: [{ type: 'part', slug: 'footer.html', label: 'Footer Part' }], description: 'Main site footer.' },
  { id: 88, name: 'Footer Checkout', slug: 'die-papier/footer-checkout', category: 'utility', folder: 'footer', patternCategory: 'die-papier-footers', reactSource: 'Footer.tsx', wpFile: 'patterns/footer/footer-checkout.php', guidelinePath: 'footer/footer-checkout.md', priority: 'P1', syncType: 'Full', usedIn: [{ type: 'part', slug: 'checkout-footer.html', label: 'Checkout Footer Part' }], description: 'Minimal footer for checkout with trust signals.' },

  // ═══ Header Patterns (ID 84-86) ═══
  { id: 84, name: 'Header', slug: 'die-papier/header', category: 'utility', folder: 'header', patternCategory: 'die-papier-headers', reactSource: 'Header.tsx', wpFile: 'patterns/header/header.php', guidelinePath: 'header/header.md', priority: 'P0', syncType: 'Full', usedIn: [{ type: 'part', slug: 'header.html', label: 'Header Part' }], description: 'Main site header.' },
  { id: 85, name: 'Header Checkout', slug: 'die-papier/header-checkout', category: 'utility', folder: 'header', patternCategory: 'die-papier-headers', reactSource: 'Header.tsx', wpFile: 'patterns/header/header-checkout.php', guidelinePath: 'header/header-checkout.md', priority: 'P1', syncType: 'Full', usedIn: [{ type: 'part', slug: 'checkout-header.html', label: 'Checkout Header Part' }], description: 'Minimal distraction-free header for checkout experience.' },

  // ═══ Hidden Patterns (ID 89-94, 139-140) ═══
  { id: 89, name: 'Article Hero (Hidden)', slug: 'die-papier/hidden-article-hero', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'Article.tsx', wpFile: 'patterns/hidden/hidden-article-hero.php', guidelinePath: 'hidden/hidden-article-hero.md', priority: 'P0', syncType: 'None', description: 'Post hero assembly.' },
  { id: 90, name: 'Breadcrumbs (Hidden)', slug: 'die-papier/hidden-breadcrumbs', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'Breadcrumbs.tsx', wpFile: 'patterns/hidden/hidden-breadcrumbs.php', guidelinePath: 'hidden/hidden-breadcrumbs.md', priority: 'P1', syncType: 'Full', description: 'Yoast breadcrumbs.' },
  { id: 91, name: 'Comments (Hidden)', slug: 'die-papier/hidden-comments', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'Article.tsx', wpFile: 'patterns/hidden/hidden-comments.php', guidelinePath: 'hidden/hidden-comments.md', priority: 'P1', syncType: 'None', description: 'Comments assembly.' },
  { id: 92, name: 'No Results (Hidden)', slug: 'die-papier/hidden-no-results', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'SearchResults.tsx', wpFile: 'patterns/hidden/hidden-no-results.php', guidelinePath: 'hidden/hidden-no-results.md', priority: 'P2', syncType: 'None', description: 'Empty state.' },
  { id: 93, name: 'Sidebar (Hidden)', slug: 'die-papier/hidden-sidebar', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'n/a', wpFile: 'patterns/hidden/hidden-sidebar.php', guidelinePath: 'hidden/hidden-sidebar.md', priority: 'P1', syncType: 'None', description: 'Default sidebar.' },
  { id: 94, name: 'Event Sidebar (Hidden)', slug: 'die-papier/hidden-sidebar-event', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'SingleEvent.tsx', wpFile: 'patterns/hidden/hidden-sidebar-event.php', guidelinePath: 'hidden/hidden-sidebar-event.md', priority: 'P2', syncType: 'None', description: 'Event sidebar.' },
  { id: 139, name: '404 Page (Hidden)', slug: 'die-papier/hidden-404', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'NotFound.tsx', wpFile: 'patterns/hidden/hidden-404.php', guidelinePath: 'hidden/hidden-404.md', priority: 'P0', syncType: 'None', description: '404 error page.' },
  { id: 140, name: 'Search Filters (Hidden)', slug: 'die-papier/hidden-search-filters', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'SearchResults.tsx', wpFile: 'patterns/hidden/hidden-search-filters.php', guidelinePath: 'hidden/hidden-search-filters.md', priority: 'P2', syncType: 'None', description: 'Search filters.' },
  { id: 165, name: 'No Search Results (Hidden)', slug: 'die-papier/hidden-no-search-results', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'SearchResults.tsx', wpFile: 'patterns/hidden/hidden-no-search-results.php', guidelinePath: 'hidden/hidden-no-search-results.md', priority: 'P2', syncType: 'None', description: 'Empty search state.' },
  { id: 199, name: 'Social Profiles (Hidden)', slug: 'die-papier/hidden-social-profiles', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'Footer.tsx', wpFile: 'patterns/hidden/hidden-social-profiles.php', guidelinePath: 'hidden/hidden-social-profiles.md', priority: 'P1', syncType: 'Full', description: 'Core social links block with Die Papier profile URLs (Facebook, Instagram, X, YouTube, LinkedIn, TikTok). Hidden from inserter.' },
  { id: 200, name: 'Social Sharing (Hidden)', slug: 'die-papier/hidden-social-sharing', category: 'utility', folder: 'hidden', patternCategory: 'die-papier-hidden', reactSource: 'Article.tsx', wpFile: 'patterns/hidden/hidden-social-sharing.php', guidelinePath: 'hidden/hidden-social-sharing.md', priority: 'P1', syncType: 'Full', description: 'Outermost social sharing row (Facebook, WhatsApp, X, Email, Copy Link). Hidden from inserter.' },

  // ═══ Query Patterns (ID 148-157) ═══
  { id: 148, name: 'Query: Active Competitions', slug: 'die-papier/query-competitions-active', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Competitions.tsx', wpFile: 'patterns/query/query-competitions-active.php', guidelinePath: 'query/query-competitions-active.md', priority: 'P2', syncType: 'None', description: 'AQL active competitions.' },
  { id: 149, name: 'Query: Latest E-Editions', slug: 'die-papier/query-eeditions-latest', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'EEditions.tsx', wpFile: 'patterns/query/query-eeditions-latest.php', guidelinePath: 'query/query-eeditions-latest.md', priority: 'P2', syncType: 'None', description: 'AQL latest e-editions.' },
  { id: 150, name: 'Query: Upcoming Events', slug: 'die-papier/query-events-upcoming', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Events.tsx', wpFile: 'patterns/query/query-events-upcoming.php', guidelinePath: 'query/query-events-upcoming.md', priority: 'P2', syncType: 'None', description: 'AQL upcoming events.' },
  { id: 151, name: 'Query: Latest Multimedia', slug: 'die-papier/query-multimedia-latest', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Multimedia.tsx', wpFile: 'patterns/query/query-multimedia-latest.php', guidelinePath: 'query/query-multimedia-latest.md', priority: 'P2', syncType: 'None', description: 'AQL latest multimedia.' },
  { id: 152, name: 'Query: Latest Obituaries', slug: 'die-papier/query-obituaries-latest', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Obituaries.tsx', wpFile: 'patterns/query/query-obituaries-latest.php', guidelinePath: 'query/query-obituaries-latest.md', priority: 'P2', syncType: 'None', description: 'AQL latest obituaries.' },
  { id: 153, name: 'Query: Posts by Category', slug: 'die-papier/query-posts-category', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Home.tsx', wpFile: 'patterns/query/query-posts-category.php', guidelinePath: 'query/query-posts-category.md', priority: 'P0', syncType: 'None', description: 'AQL posts filtered by category.' },
  { id: 154, name: 'Query: Latest Posts', slug: 'die-papier/query-posts-latest', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Home.tsx', wpFile: 'patterns/query/query-posts-latest.php', guidelinePath: 'query/query-posts-latest.md', priority: 'P0', syncType: 'None', description: 'AQL latest posts.' },
  { id: 155, name: 'Query: Related Posts', slug: 'die-papier/query-posts-related', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Article.tsx', wpFile: 'patterns/query/query-posts-related.php', guidelinePath: 'query/query-posts-related.md', priority: 'P1', syncType: 'None', description: 'AQL related articles.' },
  { id: 156, name: 'Query: Sticky Posts', slug: 'die-papier/query-posts-sticky', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Home.tsx', wpFile: 'patterns/query/query-posts-sticky.php', guidelinePath: 'query/query-posts-sticky.md', priority: 'P1', syncType: 'None', description: 'AQL featured sticky posts.' },
  { id: 157, name: 'Query: Sponsors by Tier', slug: 'die-papier/query-sponsors-tier', category: 'section', folder: 'query', patternCategory: 'die-papier-queries', reactSource: 'Sponsors.tsx', wpFile: 'patterns/query/query-sponsors-tier.php', guidelinePath: 'query/query-sponsors-tier.md', priority: 'P2', syncType: 'None', description: 'AQL tiered sponsors.' },

  // ═══ Section Patterns (ID 63-76, 106-116, 158-159, 162-164) ═══
  { id: 63, name: 'Newsletter CTA (Inline)', slug: 'die-papier/section-newsletter-cta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'NewsletterCTA.tsx', wpFile: 'patterns/section/section-newsletter-cta.php', guidelinePath: 'section/section-newsletter-cta.md', priority: 'P1', syncType: 'Full', description: 'Sidebar signup box.' },
  { id: 64, name: 'Newsletter CTA (Full)', slug: 'die-papier/section-newsletter-cta-full', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'NewsletterCTA.tsx', wpFile: 'patterns/section/section-newsletter-cta-full.php', guidelinePath: 'section/section-newsletter-cta-full.md', priority: 'P1', syncType: 'Full', description: 'Full-width newsletter banner.' },
  { id: 162, name: 'FAQ Accordion', slug: 'die-papier/section-faq', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'PageFAQSection.tsx', wpFile: 'patterns/section/section-faq.php', guidelinePath: 'section/section-faq.md', priority: 'P1', syncType: 'None', description: 'Reusable FAQ section.' },
  { id: 66, name: 'Sponsor Banner', slug: 'die-papier/section-sponsor-banner', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SponsorBanner.tsx', wpFile: 'patterns/section/section-sponsor-banner.php', guidelinePath: 'section/section-sponsor-banner.md', priority: 'P2', syncType: 'Full', description: 'Sponsor logo bar.' },
  { id: 67, name: 'Sponsor Grid', slug: 'die-papier/section-sponsor-grid', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SponsorGrid.tsx', wpFile: 'patterns/section/section-sponsor-grid.php', guidelinePath: 'section/section-sponsor-grid.md', priority: 'P2', syncType: 'None', description: 'Grid of sponsor logos.' },
  { id: 68, name: 'Related Articles', slug: 'die-papier/section-related-articles', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'RelatedContent.tsx', wpFile: 'patterns/section/section-related-articles.php', guidelinePath: 'section/section-related-articles.md', priority: 'P1', syncType: 'None', description: 'Related posts grid.' },
  { id: 69, name: 'Content Hero', slug: 'die-papier/section-content-hero', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'ContentHero.tsx', wpFile: 'patterns/section/section-content-hero.php', guidelinePath: 'section/section-content-hero.md', priority: 'P1', syncType: 'None', description: 'Reusable page hero.' },
  { id: 71, name: 'Breadcrumbs', slug: 'die-papier/section-breadcrumbs', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Breadcrumbs.tsx', wpFile: 'patterns/section/section-breadcrumbs.php', guidelinePath: 'section/section-breadcrumbs.md', priority: 'P1', syncType: 'Full', description: 'Navigation hierarchy.' },
  { id: 72, name: 'Share Buttons', slug: 'die-papier/section-share', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SocialShare.tsx', wpFile: 'patterns/section/section-share.php', guidelinePath: 'section/section-share.md', priority: 'P1', syncType: 'Full', description: 'Social share bar.' },
  { id: 73, name: 'Pricing Table', slug: 'die-papier/section-pricing-table', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'PricingTable.tsx', wpFile: 'patterns/section/section-pricing-table.php', guidelinePath: 'section/section-pricing-table.md', priority: 'P1', syncType: 'None', description: 'Subscription tier grid.' },
  { id: 74, name: 'Team Grid', slug: 'die-papier/section-team-grid', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'TeamGrid.tsx', wpFile: 'patterns/section/section-team-grid.php', guidelinePath: 'section/section-team-grid.md', priority: 'P2', syncType: 'None', description: 'Staff member cards.' },
  { id: 163, name: 'Subscription CTA', slug: 'die-papier/section-subscription-cta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SubscriptionCTA.tsx', wpFile: 'patterns/section/section-subscription-cta.php', guidelinePath: 'section/section-subscription-cta.md', priority: 'P1', syncType: 'Full', description: 'Navy benefit banner.' },
  { id: 164, name: 'Subscription CTA (Sidebar)', slug: 'die-papier/section-subscription-cta-sidebar', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SubscriptionCTASidebar.tsx', wpFile: 'patterns/section/section-subscription-cta-sidebar.php', guidelinePath: 'section/section-subscription-cta-sidebar.md', priority: 'P1', syncType: 'Full', description: 'Compact sidebar widget.' },
  { id: 106, name: 'Brand Quotes', slug: 'die-papier/section-brand-quotes', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Home.tsx', wpFile: 'patterns/section/section-brand-quotes.php', guidelinePath: 'section/section-brand-quotes.md', priority: 'P2', syncType: 'None', description: 'Testimonial slider.' },
  { id: 107, name: 'Competition Meta', slug: 'die-papier/section-competition-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'CompetitionSingle.tsx', wpFile: 'patterns/section/section-competition-meta.php', guidelinePath: 'section/section-competition-meta.md', priority: 'P2', syncType: 'None', description: 'Competition details.' },
  { id: 108, name: 'E-Edition Meta', slug: 'die-papier/section-eedition-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SingleEEdition.tsx', wpFile: 'patterns/section/section-eedition-meta.php', guidelinePath: 'section/section-eedition-meta.md', priority: 'P1', syncType: 'None', description: 'E-edition metadata.' },
  { id: 109, name: 'Event Meta', slug: 'die-papier/section-event-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SingleEvent.tsx', wpFile: 'patterns/section/section-event-meta.php', guidelinePath: 'section/section-event-meta.md', priority: 'P1', syncType: 'None', description: 'Event details.' },
  { id: 110, name: 'Homepage Poll', slug: 'die-papier/section-homepage-poll', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Home.tsx', wpFile: 'patterns/section/section-homepage-poll.php', guidelinePath: 'section/section-homepage-poll.md', priority: 'P3', syncType: 'None', description: 'Interactive poll.' },
  { id: 111, name: 'Multimedia Meta', slug: 'die-papier/section-multimedia-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SingleMultimedia.tsx', wpFile: 'patterns/section/section-multimedia-meta.php', guidelinePath: 'section/section-multimedia-meta.md', priority: 'P2', syncType: 'None', description: 'Multimedia details.' },
  { id: 112, name: 'Obituary Meta', slug: 'die-papier/section-obituary-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SingleObituary.tsx', wpFile: 'patterns/section/section-obituary-meta.php', guidelinePath: 'section/section-obituary-meta.md', priority: 'P1', syncType: 'None', description: 'Obituary details.' },
  { id: 113, name: 'Post Meta', slug: 'die-papier/section-post-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Article.tsx', wpFile: 'patterns/section/section-post-meta.php', guidelinePath: 'section/section-post-meta.md', priority: 'P0', syncType: 'None', description: 'Post metadata.' },
  { id: 114, name: 'Post Meta Compact', slug: 'die-papier/section-post-meta-compact', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Article.tsx', wpFile: 'patterns/section/section-post-meta-compact.php', guidelinePath: 'section/section-post-meta-compact.md', priority: 'P1', syncType: 'None', description: 'Compact post meta.' },
  { id: 115, name: 'Sponsor Articles', slug: 'die-papier/section-sponsor-articles', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Sponsors.tsx', wpFile: 'patterns/section/section-sponsor-articles.php', guidelinePath: 'section/section-sponsor-articles.md', priority: 'P2', syncType: 'None', description: 'Sponsored articles loop.' },
  { id: 116, name: 'Sponsor Meta', slug: 'die-papier/section-sponsor-meta', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Sponsors.tsx', wpFile: 'patterns/section/section-sponsor-meta.php', guidelinePath: 'section/section-sponsor-meta.md', priority: 'P2', syncType: 'None', description: 'Sponsor profile data.' },
  { id: 158, name: 'Contact Form Section', slug: 'die-papier/section-contact-form', category: 'section', folder: 'section', patternCategory: 'die-papier-forms', reactSource: 'Contact.tsx', wpFile: 'patterns/section/section-contact-form.php', guidelinePath: 'section/section-contact-form.md', priority: 'P1', syncType: 'None', description: 'Contact form block.' },
  { id: 159, name: 'Newsletter Form Section', slug: 'die-papier/section-newsletter-form', category: 'section', folder: 'section', patternCategory: 'die-papier-forms', reactSource: 'NewsletterSubscribe.tsx', wpFile: 'patterns/section/section-newsletter-form.php', guidelinePath: 'section/section-newsletter-form.md', priority: 'P1', syncType: 'None', description: 'Newsletter signup block.' },
  { id: 166, name: 'Homepage: Dink', slug: 'die-papier/homepage-dink', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-dink.php', guidelinePath: 'section/homepage-dink.md', priority: 'P2', syncType: 'None', description: 'Opinion/Dink section for home.' },
  { id: 167, name: 'Homepage: Events', slug: 'die-papier/homepage-events', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-events.php', guidelinePath: 'section/homepage-events.md', priority: 'P1', syncType: 'None', description: 'Upcoming events for home.' },
  { id: 168, name: 'Homepage: Leefstyl', slug: 'die-papier/homepage-leefstyl', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-leefstyl.php', guidelinePath: 'section/homepage-leefstyl.md', priority: 'P2', syncType: 'None', description: 'Lifestyle section for home.' },
  { id: 169, name: 'Homepage: Multimedia', slug: 'die-papier/homepage-multimedia', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-multimedia.php', guidelinePath: 'section/homepage-multimedia.md', priority: 'P2', syncType: 'None', description: 'Latest multimedia for home.' },
  { id: 170, name: 'Homepage: Nuus', slug: 'die-papier/homepage-nuus', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-nuus.php', guidelinePath: 'section/homepage-nuus.md', priority: 'P1', syncType: 'None', description: 'Latest news for home.' },
  { id: 171, name: 'Homepage: Nuusflitse', slug: 'die-papier/homepage-nuusflitse', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-nuusflitse.php', guidelinePath: 'section/homepage-nuusflitse.md', priority: 'P1', syncType: 'None', description: 'Breaking news flashes.' },
  { id: 172, name: 'Homepage: Obituaries', slug: 'die-papier/homepage-obituaries', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-obituaries.php', guidelinePath: 'section/homepage-obituaries.md', priority: 'P2', syncType: 'None', description: 'Obituary section for home.' },
  { id: 173, name: 'Homepage: Sake', slug: 'die-papier/homepage-sake', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-sake.php', guidelinePath: 'section/homepage-sake.md', priority: 'P2', syncType: 'None', description: 'Business section for home.' },
  { id: 174, name: 'Homepage: Skole', slug: 'die-papier/homepage-skole', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-skole.php', guidelinePath: 'section/homepage-skole.md', priority: 'P2', syncType: 'None', description: 'Schools section for home.' },
  { id: 175, name: 'Homepage: Sport', slug: 'die-papier/homepage-sport', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-sport.php', guidelinePath: 'section/homepage-sport.md', priority: 'P1', syncType: 'None', description: 'Sport section for home.' },
  { id: 176, name: 'Homepage: Top Stories', slug: 'die-papier/homepage-top-stories', category: 'section', folder: 'section', patternCategory: 'die-papier-homepage', reactSource: 'Home.tsx', wpFile: 'patterns/section/homepage-top-stories.php', guidelinePath: 'section/homepage-top-stories.md', priority: 'P0', syncType: 'None', description: 'Top curated stories for home.' },

  // ═══ Sidebar Patterns (ID 117-118, 160-161) ═══
  { id: 117, name: 'Competition Sidebar Card', slug: 'die-papier/sidebar-competition-card', category: 'section', folder: 'sidebar', patternCategory: 'die-papier-sidebars', reactSource: 'n/a', wpFile: 'patterns/sidebar/sidebar-competition-card.php', guidelinePath: 'sidebar/sidebar-competition-card.md', priority: 'P2', syncType: 'Full', description: 'Active competition promo.' },
  { id: 118, name: 'E-Edition Sidebar Promo', slug: 'die-papier/sidebar-eedition-promo', category: 'section', folder: 'sidebar', patternCategory: 'die-papier-sidebars', reactSource: 'n/a', wpFile: 'patterns/sidebar/sidebar-eedition-promo.php', guidelinePath: 'sidebar/sidebar-eedition-promo.md', priority: 'P2', syncType: 'Full', description: 'E-edition promo widget.' },
  { id: 160, name: 'Multimedia Sidebar', slug: 'die-papier/sidebar-multimedia', category: 'section', folder: 'sidebar', patternCategory: 'die-papier-sidebars', reactSource: 'SingleMultimedia.tsx', wpFile: 'patterns/sidebar/sidebar-multimedia.php', guidelinePath: 'sidebar/sidebar-multimedia.md', priority: 'P2', syncType: 'None', description: 'Multimedia sidebar.' },
  { id: 161, name: 'Obituary Sidebar', slug: 'die-papier/sidebar-obituary', category: 'section', folder: 'sidebar', patternCategory: 'die-papier-sidebars', reactSource: 'SingleObituary.tsx', wpFile: 'patterns/sidebar/sidebar-obituary.php', guidelinePath: 'sidebar/sidebar-obituary.md', priority: 'P2', syncType: 'None', description: 'Obituary sidebar.' },
  
  // ═══ Icon Patterns (ID 177-184) ═══
  { id: 177, name: 'Benefits Section', slug: 'die-papier/icon-benefits-section', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-benefits-section.php', guidelinePath: 'icon/icon-benefits-section.md', priority: 'P2', syncType: 'None', description: 'Large feature icons grid.' },
  { id: 178, name: 'Callouts', slug: 'die-papier/icon-callouts', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-callouts.php', guidelinePath: 'icon/icon-callouts.md', priority: 'P2', syncType: 'None', description: 'Alert and notice boxes.' },
  { id: 179, name: 'Contact Info Icons', slug: 'die-papier/icon-contact-info', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-contact-info.php', guidelinePath: 'icon/icon-contact-info.md', priority: 'P2', syncType: 'None', description: 'Contact list with icons.' },
  { id: 180, name: 'CTA Buttons Icons', slug: 'die-papier/icon-cta-buttons', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-cta-buttons.php', guidelinePath: 'icon/icon-cta-buttons.md', priority: 'P2', syncType: 'None', description: 'Buttons with icons.' },
  { id: 181, name: 'Feature List', slug: 'die-papier/icon-feature-list', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-feature-list.php', guidelinePath: 'icon/icon-feature-list.md', priority: 'P1', syncType: 'None', description: 'Checkmark benefit list.' },
  { id: 182, name: 'Service Grid Icons', slug: 'die-papier/icon-service-grid', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-service-grid.php', guidelinePath: 'icon/icon-service-grid.md', priority: 'P2', syncType: 'None', description: 'Category icons grid.' },
  { id: 183, name: 'Timeline', slug: 'die-papier/icon-timeline', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-timeline.php', guidelinePath: 'icon/icon-timeline.md', priority: 'P2', syncType: 'None', description: 'Step-by-step process.' },
  { id: 184, name: 'Trust Signals', slug: 'die-papier/icon-trust-signals', category: 'section', folder: 'icon', patternCategory: 'die-papier-icons', reactSource: 'n/a', wpFile: 'patterns/icon/icon-trust-signals.php', guidelinePath: 'icon/icon-trust-signals.md', priority: 'P2', syncType: 'None', description: 'Security and badge row.' },

  // ═══ Navigation Patterns (ID 185, 201-202) ═══
  { id: 185, name: 'Mobile Menu', slug: 'die-papier/menu-mobile', category: 'utility', folder: 'navigation', patternCategory: 'die-papier-navigation', reactSource: 'MobileMenu.tsx', wpFile: 'patterns/navigation/menu-mobile.php', guidelinePath: 'parts/mobile-menu.md', priority: 'P0', syncType: 'Full', description: 'Fullscreen mobile overlay.' },
  { id: 201, name: 'Menu Card: Latest Edition', slug: 'die-papier/menu-card-latest-edition', category: 'utility', folder: 'navigation', patternCategory: 'die-papier-navigation', reactSource: 'Header.tsx', wpFile: 'patterns/navigation/menu-card-latest-edition.php', guidelinePath: 'navigation/menu-card-latest-edition.md', priority: 'P2', syncType: 'None', description: 'Mega menu card showing latest e-edition cover with link.' },
  { id: 202, name: 'Menu Card: Subscribe CTA', slug: 'die-papier/menu-card-subscribe-cta', category: 'utility', folder: 'navigation', patternCategory: 'die-papier-navigation', reactSource: 'Header.tsx', wpFile: 'patterns/navigation/menu-card-subscribe-cta.php', guidelinePath: 'navigation/menu-card-subscribe-cta.md', priority: 'P2', syncType: 'None', description: 'Mega menu card with subscription call-to-action.' },

  // ═══ Part Patterns (ID 186-187) ═══
  { id: 186, name: 'Post Meta Bottom', slug: 'die-papier/part-post-meta-bottom', category: 'utility', folder: 'parts', patternCategory: 'die-papier-parts', reactSource: 'Article.tsx', wpFile: 'patterns/parts/part-post-meta-bottom.php', guidelinePath: 'parts/post-meta.md', priority: 'P1', syncType: 'None', description: 'Article tags and share.' },
  { id: 187, name: 'Post Meta Top', slug: 'die-papier/part-post-meta-top', category: 'utility', folder: 'parts', patternCategory: 'die-papier-parts', reactSource: 'Article.tsx', wpFile: 'patterns/parts/part-post-meta-top.php', guidelinePath: 'parts/post-meta.md', priority: 'P1', syncType: 'None', description: 'Article date and author.' },

  // ═══ WooCommerce Patterns (ID 188-195) ═══
  { id: 188, name: 'WC Cart', slug: 'die-papier/woo-cart', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'Cart.tsx', wpFile: 'patterns/woocommerce/woo-cart.php', guidelinePath: 'pages/cart.md', priority: 'P1', syncType: 'None', description: 'Full cart page with page-content-wrapper, store notices, breadcrumbs, continue shopping link. Template Types: page-cart.' },
  { id: 189, name: 'WC Checkout', slug: 'die-papier/woo-checkout', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'Checkout.tsx', wpFile: 'patterns/woocommerce/woo-checkout.php', guidelinePath: 'pages/checkout.md', priority: 'P1', syncType: 'None', description: 'Distraction-free checkout with page-content-wrapper, store notices, cart-link. Template Types: page-checkout.' },
  { id: 190, name: 'WC Empty Cart', slug: 'die-papier/woo-empty-cart', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'Cart.tsx', wpFile: 'patterns/woocommerce/woo-empty-cart.php', guidelinePath: 'pages/cart.md', priority: 'P2', syncType: 'None', description: 'Empty cart state with e-edition CTA and pricing cards.' },
  { id: 191, name: 'WC Mini Cart', slug: 'die-papier/woo-mini-cart', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'Header.tsx', wpFile: 'patterns/woocommerce/woo-mini-cart.php', guidelinePath: 'parts/header.md', priority: 'P2', syncType: 'None', description: 'Mini cart popup for header.' },
  { id: 192, name: 'WC My Account', slug: 'die-papier/woo-my-account', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'MyAccount.tsx', wpFile: 'patterns/woocommerce/woo-my-account.php', guidelinePath: 'pages/my-account.md', priority: 'P1', syncType: 'None', description: 'Full account page with header, breadcrumbs, store notices, post-content. Template Types: page-my-account.' },
  { id: 193, name: 'WC Order Conf', slug: 'die-papier/woo-order-confirmation', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'OrderConfirmation.tsx', wpFile: 'patterns/woocommerce/woo-order-confirmation.php', guidelinePath: 'pages/order-confirmation.md', priority: 'P1', syncType: 'None', description: 'Full order confirmation with totals, downloads, billing address, additional fields, e-edition CTA. Template Types: order-confirmation.' },
  { id: 194, name: 'WC Subs Pricing', slug: 'die-papier/woo-subscription-pricing-table', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'PricingTable.tsx', wpFile: 'patterns/woocommerce/woo-subscription-pricing-table.php', guidelinePath: 'section/section-pricing-table.md', priority: 'P1', syncType: 'None', description: 'Subscription tiers grid (1M/3M/12M) with add-to-cart and trust signals.' },
  { id: 195, name: 'WC Single Product', slug: 'die-papier/woo-single-product', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'SingleEEdition.tsx', wpFile: 'patterns/woocommerce/woo-single-product.php', guidelinePath: 'pages/single-eedition.md', priority: 'P1', syncType: 'None', description: 'Single product page with two-column layout, gallery, sticky details, add-to-cart, tabs, trust badges. Template Types: single-product.' },
  { id: 196, name: 'WC Product Card', slug: 'die-papier/woo-product-card', category: 'utility', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'n/a', wpFile: 'patterns/woocommerce/woo-product-card.php', guidelinePath: 'pages/cart.md', priority: 'P1', syncType: 'None', description: 'Reusable product card for archives and search. Product image (3:4), sale badge, title, price, add-to-cart. Inserter: false.' },
  { id: 197, name: 'WC Product Archive', slug: 'die-papier/woo-product-archive', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'n/a', wpFile: 'patterns/woocommerce/woo-product-archive.php', guidelinePath: 'pages/cart.md', priority: 'P1', syncType: 'None', description: 'Full product catalog archive with breadcrumbs, store notices, results count, sorting, 4-column product grid, pagination, no-results state. Template Types: archive-product.' },
  { id: 198, name: 'WC Product Search', slug: 'die-papier/woo-product-search', category: 'section', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'n/a', wpFile: 'patterns/woocommerce/woo-product-search.php', guidelinePath: 'pages/cart.md', priority: 'P1', syncType: 'None', description: 'Product search results with breadcrumbs, search title, results count, sorting, 4-column product grid, pagination, no-results state. Template Types: product-search-results.' },

  // ═══ Additional WooCommerce Patterns (ID 209-211, renumbered from 199-201 to fix duplicates — 2026-03-05) ═══
  { id: 209, name: 'WC Archive: E-Uitgawes', slug: 'die-papier/woo-archive-e-uitgawes', category: 'archive', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'EEditions.tsx', wpFile: 'patterns/woocommerce/woo-archive-e-uitgawes.php', guidelinePath: 'archive/archive-eeditions.md', priority: 'P1', syncType: 'None', description: 'E-Editions archive page with breadcrumbs, archive header, product grid. Template Types: archive-product, taxonomy-dp_eedition_year.' },
  { id: 210, name: 'WC Single: E-Uitgawe', slug: 'die-papier/woo-single-e-uitgawe', category: 'single', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'SingleEEdition.tsx', wpFile: 'patterns/woocommerce/woo-single-e-uitgawe.php', guidelinePath: 'pages/single-eedition.md', priority: 'P1', syncType: 'None', description: 'Single e-edition product page variant. Template Types: single-product.' },
  { id: 211, name: 'WC Coming Soon', slug: 'die-papier/woo-coming-soon', category: 'page', folder: 'woocommerce', patternCategory: 'die-papier-commerce', reactSource: 'n/a', wpFile: 'patterns/woocommerce/woo-coming-soon.php', guidelinePath: 'page/page-coming-soon.md', priority: 'P2', syncType: 'None', description: 'Coming soon page for store launch. Must not be renamed (WooCommerce dependency). Template Types: page.' },

  // ═══ Additional Section Patterns (ID 212, 203; renumbered 202→212 to fix duplicate — 2026-03-05) ═══
  { id: 212, name: 'Category Hero', slug: 'die-papier/section-category-hero', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'Category.tsx', wpFile: 'patterns/section/section-category-hero.php', guidelinePath: 'section/section-category-hero.md', priority: 'P1', syncType: 'None', description: 'Category archive hero section with category name, description, and featured image.' },
  { id: 203, name: 'Competition Entry Form', slug: 'die-papier/section-competition-entry', category: 'section', folder: 'section', patternCategory: 'die-papier-sections', reactSource: 'SingleCompetition.tsx', wpFile: 'patterns/section/section-competition-entry.php', guidelinePath: 'section/section-competition-entry.md', priority: 'P1', syncType: 'None', description: 'Competition entry form section with Gravity Forms integration and terms acceptance.' },

  // ═══ Additional Submission Patterns (ID 204-208) ═══
  { id: 204, name: 'Submit: Feedback', slug: 'die-papier/page-submit-feedback', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'n/a', wpFile: 'patterns/page/page-submit-feedback.php', guidelinePath: 'page/page-submit-feedback.md', priority: 'P2', syncType: 'None', description: 'General feedback submission form page with Gravity Forms integration.' },
  { id: 205, name: 'Submit: Letter', slug: 'die-papier/page-submit-letter', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'n/a', wpFile: 'patterns/page/page-submit-letter.php', guidelinePath: 'page/page-submit-letter.md', priority: 'P2', syncType: 'None', description: 'Letter to editor submission form page with Gravity Forms integration and submission guidelines.' },
  { id: 206, name: 'Submit: Shoutout', slug: 'die-papier/page-submit-shoutout', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'n/a', wpFile: 'patterns/page/page-submit-shoutout.php', guidelinePath: 'page/page-submit-shoutout.md', priority: 'P2', syncType: 'None', description: 'Community shoutout submission form page with Gravity Forms integration.' },
  { id: 207, name: 'Submit: Story', slug: 'die-papier/page-submit-story', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'n/a', wpFile: 'patterns/page/page-submit-story.php', guidelinePath: 'page/page-submit-story.md', priority: 'P2', syncType: 'None', description: 'News story submission form page with Gravity Forms integration, media uploads, and contributor guidelines.' },
  { id: 208, name: 'Submit: Tip', slug: 'die-papier/page-submit-tip', category: 'submission', folder: 'page', patternCategory: 'die-papier-pages', reactSource: 'n/a', wpFile: 'patterns/page/page-submit-tip.php', guidelinePath: 'page/page-submit-tip.md', priority: 'P2', syncType: 'None', description: 'News tip submission form page with Gravity Forms integration and anonymous submission option.' },
];
