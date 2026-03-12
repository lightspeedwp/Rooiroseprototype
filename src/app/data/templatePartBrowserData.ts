/**
 * Template Part Browser Data — Structured registry of all WordPress theme parts.
 * Source: /wordpress-export/themes/die-papier-theme/parts/
 * Used by: TemplatePartBrowser (/ontwikkelaar/sjabloon-onderdele)
 * 
 * IMPORTANT: This file must contain all 19 template parts on disk.
 */

export interface TemplatePartEntry {
  id: string;
  /** HTML filename */
  filename: string;
  /** Display name */
  name: string;
  /** Area: 'header' | 'footer' | 'sidebar' | 'post-meta' | 'woocommerce' */
  area: 'header' | 'footer' | 'sidebar' | 'post-meta' | 'woocommerce';
  /** Description */
  description: string;
  /** Blocks used in this part */
  blocks: string[];
  /** Patterns called within this part */
  patterns: string[];
  /** Priority */
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  /** Path to guideline markdown file (relative to /guidelines/components/parts/) */
  guidelinePath: string;
}

export const TEMPLATE_PARTS: TemplatePartEntry[] = [
  {
    id: 'header',
    filename: 'header.html',
    name: 'Default Header',
    area: 'header',
    description: 'Main site navigation header with logo, search, and mini-cart.',
    blocks: ['core/group', 'core/columns', 'core/navigation', 'woocommerce/mini-cart'],
    patterns: ['die-papier/header'],
    priority: 'P0',
    guidelinePath: 'header.md',
  },
  {
    id: 'checkout-header',
    filename: 'checkout-header.html',
    name: 'Checkout Header',
    area: 'header',
    description: 'Minimal header for the checkout experience to reduce distraction.',
    blocks: ['core/group', 'core/columns', 'die-papier/logo'],
    patterns: ['die-papier/header-checkout'],
    priority: 'P1',
    guidelinePath: 'checkout-header.md',
  },
  {
    id: 'breadcrumbs',
    filename: 'breadcrumbs.html',
    name: 'Breadcrumbs Wrapper',
    area: 'header',
    description: 'Container for Breadcrumbs used across all inner pages.',
    blocks: ['core/group', 'yoast/breadcrumbs'],
    patterns: ['die-papier/hidden-breadcrumbs'],
    priority: 'P0',
    guidelinePath: 'breadcrumbs.md',
  },
  {
    id: 'distraction-free-header',
    filename: 'distraction-free-header.html',
    name: 'Distraction-Free Header',
    area: 'header',
    description: 'Minimal header for distraction-free reading mode with just logo and minimal navigation.',
    blocks: ['core/group', 'core/site-logo'],
    patterns: [],
    priority: 'P2',
    guidelinePath: 'header.md',
  },
  {
    id: 'footer',
    filename: 'footer.html',
    name: 'Default Footer',
    area: 'footer',
    description: 'Main site footer with 4-column layout, social links, and legal info.',
    blocks: ['core/group', 'core/columns', 'core/navigation', 'outermost/social-sharing'],
    patterns: ['die-papier/footer'],
    priority: 'P0',
    guidelinePath: 'footer.md',
  },
  {
    id: 'checkout-footer',
    filename: 'checkout-footer.html',
    name: 'Checkout Footer',
    area: 'footer',
    description: 'Minimal footer for checkout with trust signals.',
    blocks: ['core/group', 'die-papier/icon-trust-signals'],
    patterns: ['die-papier/footer-checkout'],
    priority: 'P1',
    guidelinePath: 'footer.md',
  },
  {
    id: 'social-links',
    filename: 'social-links.html',
    name: 'Social Links',
    area: 'footer',
    description: 'rooi rose social media profile links (Facebook, Instagram, X, YouTube, etc.).',
    blocks: ['core/social-links'],
    patterns: ['die-papier/hidden-social-profiles'],
    priority: 'P1',
    guidelinePath: 'social-links.md',
  },
  {
    id: 'social-sharing',
    filename: 'social-sharing.html',
    name: 'Social Sharing',
    area: 'post-meta',
    description: 'Article sharing buttons for Facebook, WhatsApp, X (Twitter), Email, and Copy Link.',
    blocks: ['outermost/social-sharing'],
    patterns: ['die-papier/hidden-social-sharing'],
    priority: 'P1',
    guidelinePath: 'social-sharing.md',
  },
  {
    id: 'sidebar',
    filename: 'sidebar.html',
    name: 'Default Sidebar',
    area: 'sidebar',
    description: 'Main article sidebar with ads, newsletter CTA, and trending posts.',
    blocks: ['core/group', 'gravityforms/form', 'die-papier/query-posts-latest'],
    patterns: ['die-papier/hidden-sidebar'],
    priority: 'P0',
    guidelinePath: 'sidebar.md',
  },
  {
    id: 'sidebar-home',
    filename: 'sidebar-home.html',
    name: 'Homepage Sidebar',
    area: 'sidebar',
    description: 'Specialized sidebar for the homepage with e-edition promo and poll.',
    blocks: ['core/group', 'die-papier/sidebar-eedition-promo', 'die-papier/section-homepage-poll'],
    patterns: ['die-papier/sidebar-home'],
    priority: 'P1',
    guidelinePath: 'sidebar.md',
  },
  {
    id: 'sidebar-event',
    filename: 'sidebar-event.html',
    name: 'Event Sidebar',
    area: 'sidebar',
    description: 'Sidebar for event single pages with map and upcoming events.',
    blocks: ['core/group', 'die-papier/query-events-upcoming'],
    patterns: ['die-papier/hidden-sidebar-event'],
    priority: 'P1',
    guidelinePath: 'sidebar-event.md',
  },
  {
    id: 'post-meta-article',
    filename: 'post-meta-article.html',
    name: 'Post Meta (Article)',
    area: 'post-meta',
    description: 'Reusable block of metadata for single articles (author, date, reading time).',
    blocks: ['core/group', 'core/post-author', 'core/post-date', 'die-papier/reading-time'],
    patterns: ['die-papier/section-post-meta'],
    priority: 'P0',
    guidelinePath: 'post-meta.md',
  },
  {
    id: 'post-meta-top',
    filename: 'post-meta-top.html',
    name: 'Post Meta Top',
    area: 'post-meta',
    description: 'Top metadata section for article single page (category badge, publish date, author).',
    blocks: ['core/group', 'core/post-terms', 'core/post-date', 'core/post-author'],
    patterns: ['die-papier/part-post-meta-top'],
    priority: 'P1',
    guidelinePath: 'post-meta.md',
  },
  {
    id: 'post-meta-bottom',
    filename: 'post-meta-bottom.html',
    name: 'Post Meta Bottom',
    area: 'post-meta',
    description: 'Bottom metadata section for article single page (tags, share buttons, author bio).',
    blocks: ['core/group', 'core/post-terms', 'outermost/social-sharing', 'core/post-author-biography'],
    patterns: ['die-papier/part-post-meta-bottom'],
    priority: 'P1',
    guidelinePath: 'post-meta.md',
  },
  {
    id: 'simple-product-add-to-cart-with-options',
    filename: 'simple-product-add-to-cart-with-options.html',
    name: 'Simple Product — Add to Cart',
    area: 'woocommerce',
    description: 'Add-to-cart form for simple products with quantity selector and buy button.',
    blocks: ['core/group', 'woocommerce/product-button', 'woocommerce/add-to-cart-with-options-quantity-selector'],
    patterns: [],
    priority: 'P1',
    guidelinePath: 'add-to-cart.md',
  },
  {
    id: 'variable-product-add-to-cart-with-options',
    filename: 'variable-product-add-to-cart-with-options.html',
    name: 'Variable Product — Add to Cart',
    area: 'woocommerce',
    description: 'Add-to-cart form for variable products with variation selectors.',
    blocks: ['core/group', 'woocommerce/product-button', 'woocommerce/add-to-cart-with-options-quantity-selector'],
    patterns: [],
    priority: 'P1',
    guidelinePath: 'add-to-cart.md',
  },
  {
    id: 'external-product-add-to-cart-with-options',
    filename: 'external-product-add-to-cart-with-options.html',
    name: 'External Product — Add to Cart',
    area: 'woocommerce',
    description: 'Add-to-cart form for external/affiliate products.',
    blocks: ['core/group', 'woocommerce/product-button'],
    patterns: [],
    priority: 'P1',
    guidelinePath: 'add-to-cart.md',
  },
  {
    id: 'grouped-product-add-to-cart-with-options',
    filename: 'grouped-product-add-to-cart-with-options.html',
    name: 'Grouped Product — Add to Cart',
    area: 'woocommerce',
    description: 'Add-to-cart form for grouped product sets.',
    blocks: ['core/group', 'woocommerce/product-button'],
    patterns: [],
    priority: 'P1',
    guidelinePath: 'add-to-cart.md',
  },
  {
    id: 'mini-cart',
    filename: 'mini-cart.html',
    name: 'Mini Cart',
    area: 'woocommerce',
    description: 'Floating mini-cart widget implementation.',
    blocks: ['woocommerce/mini-cart'],
    patterns: [],
    priority: 'P1',
    guidelinePath: 'mini-cart.md',
  },
];

export const PART_AREAS: { key: TemplatePartEntry['area'] | 'all'; labelAf: string; labelEn: string; count: number }[] = [
  { key: 'all', labelAf: 'Alles', labelEn: 'All', count: TEMPLATE_PARTS.length },
  { key: 'header', labelAf: 'Opskrifte', labelEn: 'Headers', count: TEMPLATE_PARTS.filter(p => p.area === 'header').length },
  { key: 'footer', labelAf: 'Voetnote', labelEn: 'Footers', count: TEMPLATE_PARTS.filter(p => p.area === 'footer').length },
  { key: 'sidebar', labelAf: 'Kantbalke', labelEn: 'Sidebars', count: TEMPLATE_PARTS.filter(p => p.area === 'sidebar').length },
  { key: 'post-meta', labelAf: 'Pos-meta', labelEn: 'Post Meta', count: TEMPLATE_PARTS.filter(p => p.area === 'post-meta').length },
  { key: 'woocommerce', labelAf: 'WooCommerce', labelEn: 'WooCommerce', count: TEMPLATE_PARTS.filter(p => p.area === 'woocommerce').length },
];