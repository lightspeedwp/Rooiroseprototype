/**
 * Data File Index — rooi rose
 *
 * Centralised re-exports for all data modules. Organised by domain.
 * Each section includes WordPress pattern references showing where the
 * data maps to in the WordPress FSE theme.
 *
 * @see /guidelines/components/patterns/README.md — Pattern system overview
 * @see /guidelines/data-structure/overview.md — Data structure docs
 */

// ─────────────────────────────────────────────────────────
// Articles & Content
// WordPress patterns: page-home, archive-category-*, archive-default, archive-tag, archive-search
// Card patterns: card-post-grid-3col, card-post-list, card-post-featured-hero
// Query patterns: query-posts-latest, query-posts-sticky, query-posts-category, query-posts-related
// ─────────────────────────────────────────────────────────
export { TOP_STORIES, LATEST_NEWS } from './articles';
export { ARTICLE_CONTENT, getArticleContent } from './articleContent';
export type { ArticleContent } from './articleContent';
export {
  CATEGORY_ARTICLES,
  getArticlesByCategory,
  getFeaturedArticles,
  getArticlesByTag,
  getArticlesBySponsor,
  getAllSponsoredArticles,
  getHomepageSponsoredArticle,
  getAllCategories,
  getArticleById,
  getAllArticles,
} from './categoryArticles';
export type { CategoryArticle } from './categoryArticles';
export { TRENDING_ARTICLES } from './trendingArticles';
export { BREAKING_NEWS_ITEMS, formatTimeAgo } from './breakingNews';
export type { BreakingNewsItem } from './breakingNews';
export { COMMENTS_DATA } from './comments';

// ─────────────────────────────────────────────────────────
// Homepage
// WordPress pattern: page-home (13 sections)
// ─────────────────────────────────────────────────────────
export { HOME_SEO, HOME_CONTENT } from './home';

// ─────────────────────────────────────────────────────────
// Events
// WordPress patterns: archive-events, archive-event-category, query-events-upcoming
// Card patterns: card-event-grid, card-event-meta
// ─────────────────────────────────────────────────────────
export { EVENTS } from './events';

// ─────────────────────────────────────────────────────────
// Competitions
// WordPress patterns: archive-competitions, query-competitions-active
// Card patterns: card-competition-grid, card-competition-meta
// ─────────────────────────────────────────────────────────
export { COMPETITIONS } from './competitions';

// ─────────────────────────────────────────────────────────
// E-Editions & Commerce
// WordPress patterns: page-e-editions, page-my-eeditions, page-subscribe-eedition, archive-eeditions
// Card patterns: card-eedition-grid-4col
// Sidebar: sidebar-eedition-promo
// ─────────────────────────────────────────────────────────
export { LATEST_EDITIONS } from './eEditions';
export * from './eEditionsCommerceData';
export { SUBSCRIPTION_PLANS } from './subscriptions';

// ─────────────────────────────────────────────────────────
// Multimedia
// WordPress patterns: archive-multimedia, archive-multimedia-category, query-multimedia-latest
// Card patterns: card-multimedia-grid, card-multimedia-meta-compact
// Sidebar: sidebar-multimedia
// ─────────────────────────────────────────────────────────
export {
  MULTIMEDIA_CATEGORIES,
  MULTIMEDIA_ITEMS,
  getMultimediaBySlug,
  getMultimediaById,
  getMultimediaByCategory,
  VIDEO_CONTENT,
  PHOTO_GALLERIES,
  PODCASTS,
} from './multimedia';

// ─────────────────────────────────────────────────────────
// Obituaries
// WordPress patterns: archive-obituaries, query-obituaries-latest
// Card patterns: card-obituary-grid, card-obituary-meta
// Sidebar: sidebar-obituary
// ─────────────────────────────────────────────────────────
export { OBITUARIES } from './obituaries';

// ─────────────────────────────────────────────────────────
// Sponsors
// WordPress patterns: archive-sponsors, archive-sponsor-tier, query-sponsors-tier
// Card patterns: card-sponsor-gold, card-sponsor-silver, card-sponsor-bronze
// ─────────────────────────────────────────────────────────
export * from './sponsors';

// ─────────────────────────────────────────────────────────
// Newsletter
// WordPress patterns: page-newsletter, page-newsletter-archive, page-newsletter-confirm,
//   page-newsletter-manage, page-newsletter-reengage, page-newsletter-unsub
// Section patterns: section-newsletter-cta, section-newsletter-cta-full
// Card patterns: card-newsletter-grid
// ─────────────────────────────────────────────────────────
export { NEWSLETTER_CONTENT } from './newsletter';
export { NEWSLETTER_ARCHIVE } from './newsletterArchive';
export { NEWSLETTER_OPTIONS } from './newsletterOptions';
export { NEWSLETTER_UNSUB_CONTENT } from './newsletterUnsubscribe';

// ─────────────────────────────────────────────────────────
// Navigation & Layout
// WordPress patterns: header, header-transparent, header-masthead, footer, footer-simple
// Template parts: parts/header.html, parts/footer.html
// ─────────────────────────────────────────────────────────
export {
  TOP_NAVIGATION,
  CATEGORY_NAVIGATION,
  SOCIAL_LINKS,
  MAIN_NAVIGATION,
  HEADER_TOP_BAR_LINKS,
  HEADER_CATEGORY_BAR_LINKS,
  FOOTER_LINK_COLUMNS,
  FOOTER_LEGAL_LINKS,
  FOOTER_CONTENT,
  FOOTER_NAVIGATION,
  MOBILE_CATEGORY_LINKS,
  MOBILE_SECONDARY_LINKS,
} from './navigation';
export { HEADER_DATA } from './header';

// ─────────────────────────────────────────────────────────
// Static Pages
// WordPress patterns: page-about, page-team, page-contact, page-advertise,
//   page-policies, page-faq, page-sitemap, page-submit*
// ─────────────────────────────────────────────────────────
export { ABOUT_CONTENT } from './about';
export { TEAM_PAGE_CONTENT, TEAM_MEMBERS } from './team';
export { CONTACT_CONTENT } from './contact';
export { ADVERTISING_CONTENT } from './advertising';
export { POLICIES } from './policies';
export { PAGE_FAQS } from './pageFaqs';
export { SITEMAP_SECTIONS } from './sitemap';
export { SUBMIT_CONTENT } from './submit';

// ─────────────────────────────────────────────────────────
// Weather & Traffic
// WordPress patterns: page-weather, page-traffic
// ─────────────────────────────────────────────────────────
export { CITIES } from './weather';
export type { CityWeather, ForecastDay, WeatherIcon } from './weather';
export { TRAFFIC_DATA } from './traffic';

// ─────────────────────────────────────────────────────────
// Polls
// WordPress pattern: section-homepage-poll (page-home)
// ─────────────────────────────────────────────────────────
export { POLLS } from './polls';

// ─────────────────────────────────────────────────────────
// Ads
// WordPress: Advanced Ads plugin integration
// @see /guidelines/wordpress-migration/woocommerce/advanced-ads-integration.md
// ─────────────────────────────────────────────────────────
export { ADS } from './ads';

// ─────────────────────────────────────────────────────────
// Search & SEO
// WordPress patterns: page-search, archive-search
// ─────────────────────────────────────────────────────────
export { SEARCH_CONTENT } from './search';
export { ROUTE_SEO } from './routeSeoConfig';

// ─────────────────────────────────────────────────────────
// User & Auth
// WordPress patterns: page-auth, page-activation, page-my-account
// ─────────────────────────────────────────────────────────
export { USER_DATA } from './user';
export { MOCK_USER_ACCESS } from './mockUserAccess';

// ─────────────────────────────────────────────────────────
// Cookie Banner
// ─────────────────────────────────────────────────────────
export { COOKIE_BANNER } from './cookieBanner';

// ─────────────────────────────────────────────────────────
// Design System & Dev Tools
// WordPress: theme.json, block styles, section styles
// @see /guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md
// ─────────────────────────────────────────────────────────
// NOTE: Dev-only data removed from barrel (2026-03-05 memory optimization).
// Dev tool pages import directly from their specific data files:
//   blockStylesData, sectionStylesData, globalStyleVariationsData,
//   designTokens, contentData, devToolHeroData, imageAssets, marketing.

// ─────────────────────────────────────────────────────────
// Hero Images (used by production pages: Advertise, Contact, etc.)
// ─────────────────────────────────────────────────────────
export { HERO_IMAGES } from './heroImages';