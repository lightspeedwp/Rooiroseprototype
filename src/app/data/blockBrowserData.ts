/**
 * Block Browser Data — Comprehensive registry of all blocks across React, WordPress Core,
 * WooCommerce, and third-party plugins.
 *
 * Source: /guidelines/components/blocks/README.md
 * Used by: BlockBrowser (/ontwikkelaar/blokke)
 *
 * Updated: 2026-03-04
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BlockDomain = 'react' | 'core' | 'woocommerce' | 'third-party';

export type BlockCategory =
  | 'ads'
  | 'home'
  | 'patterns'
  | 'parts'
  | 'common'
  | 'ui'
  | 'brand'
  | 'marketing'
  | 'layout'
  | 'text'
  | 'media'
  | 'widgets'
  | 'query'
  | 'commerce'
  | 'product'
  | 'cart-checkout'
  | 'forms'
  | 'seo'
  | 'icons'
  | 'social';

export interface BlockEntry {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Domain: react, core, woocommerce, third-party */
  domain: BlockDomain;
  /** Subcategory for filtering */
  category: BlockCategory;
  /** Description of the block */
  description: string;
  /** React component file (if applicable) */
  reactFile?: string;
  /** React component directory */
  reactDir?: string;
  /** WordPress block name (e.g. core/button) */
  wpBlock?: string;
  /** Block style JSON directory in WordPress export (relative to styles/blocks/) */
  styleDir?: string;
  /** Number of block style JSON files */
  styleCount: number;
  /** Block styles applied to this block (names) */
  blockStyles: string[];
  /** Section styles this block uses */
  sectionStyles: string[];
  /** CSS file path (React side) */
  cssFile?: string;
  /** CSS approach: 'tailwind-inline' | 'css-file' | 'json-only' | 'none' */
  cssApproach: 'tailwind-inline' | 'css-file' | 'json-only' | 'none';
  /** Missing CSS files noted */
  cssMissing?: string;
  /** Guideline file path (relative to /guidelines/) */
  guidelinePath?: string;
  /** Patterns that use this block */
  patterns: string[];
  /** Templates that use this block */
  templates: string[];
  /** Template parts that use this block */
  parts: string[];
}

// ---------------------------------------------------------------------------
// Domain colors for UI
// ---------------------------------------------------------------------------

import { Box, Blocks, ShoppingCart, Puzzle } from 'lucide-react';

export const DOMAIN_COLORS: Record<BlockDomain, string> = {
  react: 'bg-blue-500/20 text-blue-300',
  core: 'bg-emerald-500/20 text-emerald-300',
  woocommerce: 'bg-amber-500/20 text-amber-300',
  'third-party': 'bg-pink-500/20 text-pink-300',
};

export const DOMAIN_ICONS: Record<BlockDomain, React.ComponentType<{ size?: number; className?: string }>> = {
  react: Box,
  core: Blocks,
  woocommerce: ShoppingCart,
  'third-party': Puzzle,
};

export const DOMAIN_LABELS: Record<BlockDomain, { af: string; en: string }> = {
  react: { af: 'React', en: 'React' },
  core: { af: 'WordPress Kern', en: 'WordPress Core' },
  woocommerce: { af: 'WooCommerce', en: 'WooCommerce' },
  'third-party': { af: 'Derdeparty', en: 'Third-Party' },
};

export const CATEGORY_LABELS: Record<BlockCategory, { af: string; en: string }> = {
  ads: { af: 'Advertensies', en: 'Ads' },
  home: { af: 'Tuisblad', en: 'Home' },
  patterns: { af: 'Patrone', en: 'Patterns' },
  parts: { af: 'Onderdele', en: 'Parts' },
  common: { af: 'Algemeen', en: 'Common' },
  ui: { af: 'UI', en: 'UI' },
  brand: { af: 'Handelsmerk', en: 'Brand' },
  marketing: { af: 'Bemarking', en: 'Marketing' },
  layout: { af: 'Uitleg', en: 'Layout' },
  text: { af: 'Teks', en: 'Text' },
  media: { af: 'Media', en: 'Media' },
  widgets: { af: 'Legstukke', en: 'Widgets' },
  query: { af: 'Navraag', en: 'Query' },
  commerce: { af: 'Handel', en: 'Commerce' },
  product: { af: 'Produk', en: 'Product' },
  'cart-checkout': { af: 'Mandjie/Betaal', en: 'Cart/Checkout' },
  forms: { af: 'Vorms', en: 'Forms' },
  seo: { af: 'SEO', en: 'SEO' },
  icons: { af: 'Ikone', en: 'Icons' },
  social: { af: 'Sosiaal', en: 'Social' },
};

// ---------------------------------------------------------------------------
// All blocks
// ---------------------------------------------------------------------------

export const ALL_BLOCKS: BlockEntry[] = [

  // ═══════════════════════════════════════════════
  // REACT COMPONENTS
  // ═══════════════════════════════════════════════

  // --- Ads ---
  { id: 'react-ad-container', name: 'AdContainer', domain: 'react', category: 'ads', description: 'Generic ad container wrapper for Advanced Ads placements.', reactFile: 'AdContainer.tsx', reactDir: 'ads', wpBlock: 'advanced-ads shortcode', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-ad-slot', name: 'AdSlot', domain: 'react', category: 'ads', description: 'Generic ad slot placeholder.', reactFile: 'AdSlot.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-half-page-ad', name: 'HalfPageAd', domain: 'react', category: 'ads', description: '300x600 sidebar ad placement.', reactFile: 'HalfPageAd.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-in-feed-ad', name: 'InFeedAd', domain: 'react', category: 'ads', description: 'In-article ad placement between content blocks.', reactFile: 'InFeedAd.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-leaderboard-ad', name: 'LeaderboardAd', domain: 'react', category: 'ads', description: '728x90 banner ad placement.', reactFile: 'LeaderboardAd.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-mrec-ad', name: 'MediumRectangleAd', domain: 'react', category: 'ads', description: '300x250 MREC ad placement.', reactFile: 'MediumRectangleAd.tsx', reactDir: 'ads', wpBlock: 'advanced-ads placement', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-mrec.md', patterns: [], templates: [], parts: [] },
  { id: 'react-sidebar-ads', name: 'SidebarAds', domain: 'react', category: 'ads', description: 'Sidebar ad stack for article/category pages.', reactFile: 'SidebarAds.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-skyscraper-ad', name: 'SkyscraperAd', domain: 'react', category: 'ads', description: '160x600 skyscraper ad placement.', reactFile: 'SkyscraperAd.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },
  { id: 'react-sticky-footer', name: 'StickyMobileFooter', domain: 'react', category: 'ads', description: 'Mobile sticky footer ad placement.', reactFile: 'StickyMobileFooter.tsx', reactDir: 'ads', wpBlock: 'dp/sticky-footer (replaced)', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/sticky-footer.md', patterns: [], templates: [], parts: [] },
  { id: 'react-takeover-rails', name: 'TakeoverRails', domain: 'react', category: 'ads', description: 'Desktop takeover rail ads flanking content.', reactFile: 'TakeoverRails.tsx', reactDir: 'ads', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/ad-components.md', patterns: [], templates: [], parts: [] },

  // --- Home ---
  { id: 'react-breaking-news', name: 'BreakingNews', domain: 'react', category: 'home', description: 'Breaking news ticker bar at top of homepage.', reactFile: 'BreakingNews.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-nuusflitse', styleCount: 0, blockStyles: [], sectionStyles: ['section-navy'], cssApproach: 'tailwind-inline', patterns: ['homepage-nuusflitse'], templates: ['front-page.html'], parts: [] },
  { id: 'react-hero-slider', name: 'HeroSlider', domain: 'react', category: 'home', description: 'Homepage hero slider with featured articles.', reactFile: 'HeroSlider.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-top-stories', styleCount: 0, blockStyles: [], sectionStyles: ['section-white'], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/hero-slider.md', patterns: ['homepage-top-stories'], templates: ['front-page.html'], parts: [] },
  { id: 'react-category-section', name: 'CategorySection', domain: 'react', category: 'home', description: 'Homepage category section with article cards.', reactFile: 'CategorySection.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-*', styleCount: 0, blockStyles: [], sectionStyles: ['section-white', 'section-muted'], cssApproach: 'tailwind-inline', patterns: ['homepage-nuus', 'homepage-sport', 'homepage-sake', 'homepage-skole', 'homepage-leefstyl', 'homepage-dink'], templates: ['front-page.html'], parts: [] },
  { id: 'react-multimedia-section', name: 'MultimediaSection', domain: 'react', category: 'home', description: 'Multimedia section with video and gallery content.', reactFile: 'MultimediaSection.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-multimedia', styleCount: 0, blockStyles: [], sectionStyles: ['section-white'], cssApproach: 'tailwind-inline', patterns: ['homepage-multimedia'], templates: ['front-page.html'], parts: [] },
  { id: 'react-obituaries-section', name: 'ObituariesSection', domain: 'react', category: 'home', description: 'Obituaries listing section.', reactFile: 'ObituariesSection.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-obituaries', styleCount: 0, blockStyles: [], sectionStyles: ['section-muted'], cssApproach: 'tailwind-inline', patterns: ['homepage-obituaries'], templates: ['front-page.html'], parts: [] },
  { id: 'react-events-section', name: 'EventsSection', domain: 'react', category: 'home', description: 'Events listing section on homepage.', reactFile: 'EventsSection.tsx', reactDir: 'home', wpBlock: 'pattern: homepage-events', styleCount: 0, blockStyles: [], sectionStyles: ['section-white'], cssApproach: 'tailwind-inline', patterns: ['homepage-events'], templates: ['front-page.html'], parts: [] },
  { id: 'react-news-card', name: 'NewsCard', domain: 'react', category: 'home', description: 'Article card component used in listings.', reactFile: 'NewsCard.tsx', reactDir: 'home', wpBlock: 'core/post-template child', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: [], templates: [], parts: [] },
  { id: 'react-poll', name: 'Poll', domain: 'react', category: 'home', description: 'Sidebar poll widget.', reactFile: 'Poll.tsx', reactDir: 'home', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: ['sidebar-home'], templates: [], parts: [] },

  // --- Patterns ---
  { id: 'react-cta', name: 'CallToAction', domain: 'react', category: 'patterns', description: 'Call-to-action section with button and text.', reactFile: 'CallToAction.tsx', reactDir: 'patterns', wpBlock: 'pattern: cta', styleCount: 0, blockStyles: [], sectionStyles: ['section-red'], cssApproach: 'tailwind-inline', patterns: ['cta'], templates: [], parts: [] },
  { id: 'react-newsletter-cta', name: 'NewsletterCTA', domain: 'react', category: 'patterns', description: 'Newsletter subscription CTA with form.', reactFile: 'NewsletterCTA.tsx', reactDir: 'patterns', wpBlock: 'pattern: section-newsletter-cta', styleCount: 0, blockStyles: [], sectionStyles: ['section-muted'], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/newsletter-cta.md', patterns: ['section-newsletter-cta'], templates: [], parts: [] },
  { id: 'react-contact-form', name: 'ContactForm', domain: 'react', category: 'patterns', description: 'Contact form mapped to Gravity Forms.', reactFile: 'ContactForm.tsx', reactDir: 'patterns', wpBlock: 'gravityforms/form', styleCount: 0, blockStyles: [], sectionStyles: ['section-gradient-navy'], cssApproach: 'tailwind-inline', patterns: ['section-contact-form'], templates: [], parts: [] },
  { id: 'react-content-hero', name: 'ContentHero', domain: 'react', category: 'patterns', description: 'Content page hero with title and breadcrumbs.', reactFile: 'ContentHero.tsx', reactDir: 'patterns', styleCount: 0, blockStyles: [], sectionStyles: ['section-hero-default', 'section-cover-hero'], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/content-hero.md', patterns: [], templates: [], parts: [] },
  { id: 'react-faq-section', name: 'PageFAQSection', domain: 'react', category: 'patterns', description: 'FAQ accordion section using Yoast FAQ block.', reactFile: 'PageFAQSection.tsx', reactDir: 'patterns', wpBlock: 'yoast/faq-block', styleCount: 0, blockStyles: [], sectionStyles: ['section-faq'], cssApproach: 'tailwind-inline', patterns: ['page-faq', 'section-faq'], templates: [], parts: [] },
  { id: 'react-team-grid', name: 'TeamGrid', domain: 'react', category: 'patterns', description: 'Team member grid layout.', reactFile: 'TeamGrid.tsx', reactDir: 'patterns', wpBlock: 'pattern: page-team', styleCount: 0, blockStyles: [], sectionStyles: ['section-navy'], cssApproach: 'tailwind-inline', patterns: ['page-team'], templates: [], parts: [] },

  // --- Parts ---
  { id: 'react-header', name: 'Header', domain: 'react', category: 'parts', description: 'Main site header with navigation, search, and mini-cart.', reactFile: 'Header.tsx', reactDir: 'parts', wpBlock: 'core/template-part (header)', styleCount: 0, blockStyles: [], sectionStyles: ['section-white'], cssApproach: 'tailwind-inline', patterns: [], templates: [], parts: ['header.html'] },
  { id: 'react-footer', name: 'Footer', domain: 'react', category: 'parts', description: 'Site footer with links, social icons, and copyright.', reactFile: 'Footer.tsx', reactDir: 'parts', wpBlock: 'core/template-part (footer)', styleCount: 0, blockStyles: [], sectionStyles: ['section-navy', 'section-red'], cssApproach: 'tailwind-inline', patterns: ['footer'], templates: [], parts: ['footer.html'] },
  { id: 'react-breadcrumbs', name: 'Breadcrumbs', domain: 'react', category: 'parts', description: 'Breadcrumbs navigation using Yoast SEO block.', reactFile: 'Breadcrumbs.tsx', reactDir: 'parts', wpBlock: 'yoast-seo/breadcrumbs', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: [], templates: [], parts: ['breadcrumbs.html'] },
  { id: 'react-mobile-menu', name: 'MobileMenu', domain: 'react', category: 'parts', description: 'Mobile hamburger menu with navigation and social links.', reactFile: 'MobileMenu.tsx', reactDir: 'parts', wpBlock: 'pattern: menu-mobile', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: ['menu-mobile'], templates: [], parts: [] },

  // --- Common ---
  { id: 'react-social-share', name: 'SocialShare', domain: 'react', category: 'common', description: 'Social sharing buttons (Facebook, WhatsApp, X, Email, Copy).', reactFile: 'SocialShare.tsx', reactDir: 'common', wpBlock: 'outermost/social-sharing', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: ['hidden-social-sharing'], templates: [], parts: ['post-meta-bottom.html'] },
  { id: 'react-logo', name: 'Logo', domain: 'react', category: 'common', description: 'Site logo component.', reactFile: 'Logo.tsx', reactDir: 'common', wpBlock: 'core/site-logo', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: [], templates: [], parts: ['header.html'] },
  { id: 'react-related-content', name: 'RelatedContent', domain: 'react', category: 'common', description: 'Related articles section using AQL query loop.', reactFile: 'RelatedContent.tsx', reactDir: 'common', wpBlock: 'core/query (AQL)', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', patterns: [], templates: ['single.html'], parts: [] },

  // --- Brand ---
  { id: 'react-quote-slider', name: 'QuoteSlider', domain: 'react', category: 'brand', description: 'Brand testimonial quote carousel.', reactFile: 'QuoteSlider.tsx', reactDir: 'brand-quotes', wpBlock: 'pattern: section-brand-quotes', styleCount: 0, blockStyles: [], sectionStyles: ['section-navy'], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/quote-slider.md', patterns: ['section-brand-quotes'], templates: [], parts: [] },
  { id: 'react-brand-quote', name: 'BrandQuote', domain: 'react', category: 'brand', description: 'Individual brand testimonial quote card.', reactFile: 'BrandQuote.tsx', reactDir: 'brand-quotes', wpBlock: 'core/quote', styleCount: 0, blockStyles: [], sectionStyles: [], cssApproach: 'tailwind-inline', guidelinePath: 'components/blocks/brand-quotes.md', patterns: [], templates: [], parts: [] },

  // ═══════════════════════════════════════════════
  // WORDPRESS CORE BLOCKS
  // ═══════════════════════════════════════════════

  { id: 'core-button', name: 'core/button', domain: 'core', category: 'text', description: 'Button block with multiple style variations (solid, outline, ghost, text-link).', wpBlock: 'core/button', styleDir: 'button', styleCount: 4, blockStyles: ['default', 'outline', 'ghost', 'text-link'], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/design/core-blocks-styling.md', patterns: ['section-pricing-table', 'section-newsletter-cta', 'page-subscribe-eedition', 'cta'], templates: [], parts: [] },
  { id: 'core-buttons', name: 'core/buttons', domain: 'core', category: 'layout', description: 'Button group container.', wpBlock: 'core/buttons', styleDir: 'buttons', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-column', name: 'core/column', domain: 'core', category: 'layout', description: 'Individual column within a columns block.', wpBlock: 'core/column', styleDir: 'column', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-columns', name: 'core/columns', domain: 'core', category: 'layout', description: 'Multi-column layout container.', wpBlock: 'core/columns', styleDir: 'columns', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-group', name: 'core/group', domain: 'core', category: 'layout', description: 'Group container block — primary target for section style variations.', wpBlock: 'core/group', styleDir: 'group', styleCount: 1, blockStyles: [], sectionStyles: ['section-white', 'section-muted', 'section-navy', 'section-navy-light', 'section-red', 'section-gradient-navy', 'section-hero-default', 'section-faq'], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-heading', name: 'core/heading', domain: 'core', category: 'text', description: 'Heading block (H1-H6) with wp-block-heading class.', wpBlock: 'core/heading', styleDir: 'heading', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-image', name: 'core/image', domain: 'core', category: 'media', description: 'Image block with responsive and lazy loading support.', wpBlock: 'core/image', styleDir: 'image', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-list', name: 'core/list', domain: 'core', category: 'text', description: 'List block (ordered/unordered).', wpBlock: 'core/list', styleDir: 'list', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-navigation', name: 'core/navigation', domain: 'core', category: 'widgets', description: 'Navigation menu block.', wpBlock: 'core/navigation', styleDir: 'navigation', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: ['header.html'] },
  { id: 'core-paragraph', name: 'core/paragraph', domain: 'core', category: 'text', description: 'Paragraph text block.', wpBlock: 'core/paragraph', styleDir: 'paragraph', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-post-date', name: 'core/post-date', domain: 'core', category: 'query', description: 'Post date display block.', wpBlock: 'core/post-date', styleDir: 'post-date', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: ['single.html'], parts: ['post-meta-top.html'] },
  { id: 'core-post-template', name: 'core/post-template', domain: 'core', category: 'query', description: 'Post template for query loops.', wpBlock: 'core/post-template', styleDir: 'post-template', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: ['archive.html', 'category.html'], parts: [] },
  { id: 'core-post-terms', name: 'core/post-terms', domain: 'core', category: 'query', description: 'Post terms/taxonomy display.', wpBlock: 'core/post-terms', styleDir: 'post-terms', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: ['single.html'], parts: ['post-meta-top.html'] },
  { id: 'core-post-title', name: 'core/post-title', domain: 'core', category: 'query', description: 'Post title display block.', wpBlock: 'core/post-title', styleDir: 'post-title', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: ['single.html'], parts: [] },
  { id: 'core-pullquote', name: 'core/pullquote', domain: 'core', category: 'text', description: 'Pullquote block for highlighted text.', wpBlock: 'core/pullquote', styleDir: 'pullquote', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-quote', name: 'core/quote', domain: 'core', category: 'text', description: 'Blockquote block.', wpBlock: 'core/quote', styleDir: 'quote', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: ['section-brand-quotes'], templates: [], parts: [] },
  { id: 'core-search', name: 'core/search', domain: 'core', category: 'widgets', description: 'Search form block.', wpBlock: 'core/search', styleDir: 'search', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: ['search.html'], parts: ['header.html'] },
  { id: 'core-separator', name: 'core/separator', domain: 'core', category: 'layout', description: 'Horizontal rule/divider block.', wpBlock: 'core/separator', styleDir: 'separator', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-site-title', name: 'core/site-title', domain: 'core', category: 'widgets', description: 'Site title block.', wpBlock: 'core/site-title', styleDir: 'site-title', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: ['header.html'] },
  { id: 'core-table', name: 'core/table', domain: 'core', category: 'text', description: 'Table block.', wpBlock: 'core/table', styleDir: 'table', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', patterns: [], templates: [], parts: [] },
  { id: 'core-cover', name: 'core/cover', domain: 'core', category: 'media', description: 'Cover block with image/video background overlay.', wpBlock: 'core/cover', styleCount: 0, blockStyles: [], sectionStyles: ['section-cover-hero'], cssApproach: 'none', patterns: [], templates: [], parts: [] },
  { id: 'core-social-links', name: 'core/social-links', domain: 'core', category: 'social', description: 'Social media profile icon links.', wpBlock: 'core/social-links', styleCount: 0, blockStyles: ['logos-only', 'pill-shape'], sectionStyles: [], cssApproach: 'none', guidelinePath: 'components/blocks/theme/social-links.md', cssMissing: 'No custom CSS — uses WordPress default styles + theme.json element overrides', patterns: ['hidden-social-profiles'], templates: [], parts: ['footer.html'] },

  // ═══════════════════════════════════════════════
  // WOOCOMMERCE BLOCKS
  // ═══════════════════════════════════════════════

  { id: 'woo-accordion-header', name: 'woocommerce/accordion-header', domain: 'woocommerce', category: 'commerce', description: 'Accordion header/trigger element.', wpBlock: 'woocommerce/accordion-header', styleDir: 'woocommerce/accordion-header', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/accordion.md', patterns: [], templates: [], parts: [] },
  { id: 'woo-accordion-item', name: 'woocommerce/accordion-item', domain: 'woocommerce', category: 'commerce', description: 'Accordion collapsible content item.', wpBlock: 'woocommerce/accordion-item', styleDir: 'woocommerce/accordion-item', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/accordion.md', patterns: [], templates: [], parts: [] },
  { id: 'woo-add-to-cart', name: 'woocommerce/add-to-cart-with-options', domain: 'woocommerce', category: 'product', description: 'Add to cart button with product options.', wpBlock: 'woocommerce/add-to-cart-with-options-variation-selector-attribute-name', styleDir: 'woocommerce/add-to-cart-with-options-variation-selector-attribute-name', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/add-to-cart.md', patterns: ['woo-single-product'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-breadcrumbs', name: 'woocommerce/breadcrumbs', domain: 'woocommerce', category: 'commerce', description: 'WooCommerce breadcrumbs navigation.', wpBlock: 'woocommerce/breadcrumbs', styleDir: 'woocommerce/breadcrumbs', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/breadcrumbs.md', patterns: [], templates: [], parts: [] },
  { id: 'woo-cart', name: 'woocommerce/cart', domain: 'woocommerce', category: 'cart-checkout', description: 'Shopping cart block.', wpBlock: 'woocommerce/cart', styleDir: 'woocommerce/cart', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/cart.md', patterns: [], templates: ['page-cart.html'], parts: [] },
  { id: 'woo-checkout', name: 'woocommerce/checkout', domain: 'woocommerce', category: 'cart-checkout', description: 'Checkout block with payment integration.', wpBlock: 'woocommerce/checkout', styleDir: 'woocommerce/checkout', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/checkout.md', patterns: [], templates: ['page-checkout.html'], parts: [] },
  { id: 'woo-customer-account', name: 'woocommerce/customer-account', domain: 'woocommerce', category: 'commerce', description: 'Customer account icon/link block.', wpBlock: 'woocommerce/customer-account', styleDir: 'woocommerce/customer-account', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/customer-account.md', patterns: [], templates: [], parts: ['header.html'] },
  { id: 'woo-mini-cart', name: 'woocommerce/mini-cart', domain: 'woocommerce', category: 'cart-checkout', description: 'Header mini-cart flyout block.', wpBlock: 'woocommerce/mini-cart', styleDir: 'woocommerce/mini-cart', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/mini-cart.md', patterns: [], templates: [], parts: ['header.html', 'mini-cart.html'] },
  { id: 'woo-product-button', name: 'woocommerce/product-button', domain: 'woocommerce', category: 'product', description: 'Product add-to-cart button.', wpBlock: 'woocommerce/product-button', styleDir: 'woocommerce/product-button', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-button.md', patterns: ['woo-product-card'], templates: [], parts: [] },
  { id: 'woo-product-image', name: 'woocommerce/product-image', domain: 'woocommerce', category: 'product', description: 'Product featured image block.', wpBlock: 'woocommerce/product-image', styleDir: 'woocommerce/product-image', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-image.md', patterns: ['woo-single-product', 'woo-product-card'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-product-price', name: 'woocommerce/product-price', domain: 'woocommerce', category: 'product', description: 'Product price display block.', wpBlock: 'woocommerce/product-price', styleDir: 'woocommerce/product-price', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-price.md', patterns: ['woo-single-product', 'woo-product-card'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-product-rating', name: 'woocommerce/product-rating', domain: 'woocommerce', category: 'product', description: 'Product star rating display.', wpBlock: 'woocommerce/product-rating', styleDir: 'woocommerce/product-rating', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-rating.md', patterns: ['woo-single-product'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-product-results-count', name: 'woocommerce/product-results-count', domain: 'woocommerce', category: 'product', description: 'Results count for product archives.', wpBlock: 'woocommerce/product-results-count', styleDir: 'woocommerce/product-results-count', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-results-count.md', patterns: ['woo-product-archive'], templates: [], parts: [] },
  { id: 'woo-product-reviews', name: 'woocommerce/product-reviews', domain: 'woocommerce', category: 'product', description: 'Product reviews display block.', wpBlock: 'woocommerce/product-reviews', styleDir: 'woocommerce/product-reviews', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-reviews.md', patterns: ['woo-single-product'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-product-sale-badge', name: 'woocommerce/product-sale-badge', domain: 'woocommerce', category: 'product', description: 'Sale badge overlay on product images.', wpBlock: 'woocommerce/product-sale-badge', styleDir: 'woocommerce/product-sale-badge', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-sale-badge.md', patterns: ['woo-product-card'], templates: [], parts: [] },
  { id: 'woo-product-summary', name: 'woocommerce/product-summary', domain: 'woocommerce', category: 'product', description: 'Product short description/summary.', wpBlock: 'woocommerce/product-summary', styleDir: 'woocommerce/product-summary', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-summary.md', patterns: ['woo-single-product'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-product-title', name: 'woocommerce/product-title', domain: 'woocommerce', category: 'product', description: 'Product title block.', wpBlock: 'woocommerce/product-title', styleDir: 'woocommerce/product-title', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-title.md', patterns: ['woo-single-product', 'woo-product-card'], templates: ['single-product.html'], parts: [] },
  { id: 'woo-order-confirmation', name: 'woocommerce/order-confirmation-status', domain: 'woocommerce', category: 'cart-checkout', description: 'Order confirmation status display.', wpBlock: 'woocommerce/order-confirmation-status', styleDir: 'woocommerce/order-confirmation-status', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/order-confirmation.md', patterns: [], templates: ['order-confirmation.html'], parts: [] },
  { id: 'woo-category-desc', name: 'woocommerce/category-description', domain: 'woocommerce', category: 'commerce', description: 'Product category description.', wpBlock: 'woocommerce/category-description', styleDir: 'woocommerce/category-description', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/category-blocks.md', patterns: [], templates: ['taxonomy-product_cat.html'], parts: [] },
  { id: 'woo-category-title', name: 'woocommerce/category-title', domain: 'woocommerce', category: 'commerce', description: 'Product category title.', wpBlock: 'woocommerce/category-title', styleDir: 'woocommerce/category-title', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/category-blocks.md', patterns: [], templates: ['taxonomy-product_cat.html'], parts: [] },
  { id: 'woo-product-filters', name: 'woocommerce/product-filter-*', domain: 'woocommerce', category: 'product', description: 'Product filter blocks (attribute, price, rating, status).', wpBlock: 'woocommerce/product-filter-attribute', styleDir: 'woocommerce/product-filter-attribute', styleCount: 4, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'components/blocks/woocommerce/product-filters.md', patterns: ['woo-product-archive', 'woo-product-search'], templates: [], parts: [] },

  // ═══════════════════════════════════════════════
  // THIRD-PARTY BLOCKS
  // ═══════════════════════════════════════════════

  { id: 'tp-icon-block', name: 'outermost/icon-block', domain: 'third-party', category: 'icons', description: 'Custom SVG icon block from Outermost plugin.', wpBlock: 'outermost/icon-block', styleDir: 'outermost/icon', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'wordpress-migration/third-party-plugins/icon-block.md', patterns: ['icon-service-grid', 'icon-benefits-section'], templates: [], parts: [] },
  { id: 'tp-social-sharing', name: 'outermost/social-sharing', domain: 'third-party', category: 'social', description: 'Social sharing buttons for content pages.', wpBlock: 'outermost/social-sharing', styleDir: 'outermost/social-sharing', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'wordpress-migration/third-party-plugins/social-sharing.md', patterns: ['hidden-social-sharing'], templates: [], parts: ['post-meta-bottom.html'] },
  { id: 'tp-gravity-forms', name: 'gravityforms/form', domain: 'third-party', category: 'forms', description: 'Gravity Forms form block for contact, submission, and newsletter forms.', wpBlock: 'gravityforms/form', styleDir: 'gravityforms', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'wordpress-migration/third-party-plugins/gravity-forms.md', patterns: ['section-contact-form', 'page-submit-feedback', 'page-submit-letter', 'page-submit-shoutout', 'page-submit-story', 'page-submit-tip'], templates: [], parts: [] },
  { id: 'tp-yoast-breadcrumbs', name: 'yoast-seo/breadcrumbs', domain: 'third-party', category: 'seo', description: 'Yoast SEO breadcrumbs navigation block.', wpBlock: 'yoast-seo/breadcrumbs', styleDir: 'yoast-seo', styleCount: 1, blockStyles: [], sectionStyles: [], cssApproach: 'json-only', guidelinePath: 'wordpress-migration/third-party-plugins/yoast-seo.md', patterns: [], templates: [], parts: ['breadcrumbs.html'] },
  { id: 'tp-yoast-faq', name: 'yoast/faq-block', domain: 'third-party', category: 'seo', description: 'Yoast SEO FAQ block with Schema.org structured data.', wpBlock: 'yoast/faq-block', styleDir: 'yoast', styleCount: 1, blockStyles: [], sectionStyles: ['section-faq'], cssApproach: 'json-only', guidelinePath: 'wordpress-migration/third-party-plugins/yoast-seo.md', patterns: ['page-faq', 'section-faq', 'page-e-editions', 'page-newsletter', 'page-subscribe-delivery'], templates: [], parts: [] },
];

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

/** Get all blocks for a given domain */
export function getBlocksByDomain(domain: BlockDomain): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.domain === domain);
}

/** Get all blocks for a given category */
export function getBlocksByCategory(category: BlockCategory): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.category === category);
}

/** Get unique domains */
export function getUniqueDomains(): BlockDomain[] {
  return [...new Set(ALL_BLOCKS.map(b => b.domain))];
}

/** Get unique categories */
export function getUniqueCategories(): BlockCategory[] {
  return [...new Set(ALL_BLOCKS.map(b => b.category))];
}

/** Get categories for a specific domain */
export function getCategoriesForDomain(domain: BlockDomain): BlockCategory[] {
  return [...new Set(ALL_BLOCKS.filter(b => b.domain === domain).map(b => b.category))];
}

/** Get blocks that reference a given pattern */
export function getBlocksForPattern(patternSlug: string): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.patterns.includes(patternSlug));
}

/** Get blocks that reference a given template */
export function getBlocksForTemplate(templateFile: string): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.templates.includes(templateFile));
}

/** Get blocks that reference a given part */
export function getBlocksForPart(partFile: string): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.parts.includes(partFile));
}

/** Get blocks with a specific section style */
export function getBlocksForSectionStyle(styleSlug: string): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.sectionStyles.includes(styleSlug));
}

/** Get blocks with block style overrides */
export function getBlocksWithStyles(): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.styleCount > 0 || b.blockStyles.length > 0);
}

/** Get blocks with missing CSS notes */
export function getBlocksWithMissingCss(): BlockEntry[] {
  return ALL_BLOCKS.filter(b => b.cssMissing);
}

/** Summary stats */
export function getBlockStats() {
  return {
    total: ALL_BLOCKS.length,
    react: ALL_BLOCKS.filter(b => b.domain === 'react').length,
    core: ALL_BLOCKS.filter(b => b.domain === 'core').length,
    woocommerce: ALL_BLOCKS.filter(b => b.domain === 'woocommerce').length,
    thirdParty: ALL_BLOCKS.filter(b => b.domain === 'third-party').length,
    withStyles: ALL_BLOCKS.filter(b => b.styleCount > 0).length,
    withGuidelines: ALL_BLOCKS.filter(b => b.guidelinePath).length,
    missingCss: ALL_BLOCKS.filter(b => b.cssMissing).length,
  };
}