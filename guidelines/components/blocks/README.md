# Block Guidelines — Master Index

**Last updated**: 2026-03-04  
**Dev tool**: `/ontwikkelaar/blokke` (Blocks Browser)  
**CSS location**: `/src/styles/` (React) | `/wordpress-export/themes/die-papier-theme/styles/blocks/` (WordPress)

---

## Overview

This index catalogs every block used in the Die Papier project across four domains:

1. **React Components** — Custom React blocks in `/src/app/components/`
2. **WordPress Core Blocks** — Standard Gutenberg blocks with theme customizations
3. **WooCommerce Blocks** — E-commerce blocks with theme style overrides
4. **Third-Party Plugin Blocks** — Outermost, Gravity Forms, Yoast SEO

Each block entry documents:
- React component file(s) and CSS
- WordPress block name and style variations
- Block style JSON files (in `/styles/blocks/`)
- Related guidelines and patterns

---

## CSS Architecture

### React CSS Files

All React component styles are in `/src/styles/`:

| CSS File | Purpose |
|:---------|:--------|
| `theme.css` | Global theme tokens, colors, typography, spacing |
| `tailwind.css` | Tailwind v4 source config |
| `index.css` | Import chain root |
| `fonts.css` | @font-face declarations |
| `markdown-prose.css` | Prose/article typography |
| `print.css` | Print stylesheet |
| `tw-animate.css` | Animation utilities |

**Note**: There is **no per-component CSS file** system in React. All component styling uses Tailwind utility classes inline. This is by design — Tailwind v4 handles all component-level styling through utility classes in TSX files.

### WordPress Block Style JSON Files

WordPress block styles live in `/wordpress-export/themes/die-papier-theme/styles/blocks/`. Each block type gets a directory containing one or more JSON style variation files:

```
styles/blocks/
  button/          → core/button styles
  columns/         → core/columns styles
  group/           → core/group styles
  heading/         → core/heading styles
  image/           → core/image styles
  paragraph/       → core/paragraph styles
  ...
  woocommerce/     → WooCommerce block styles
  outermost/       → Third-party block styles
  yoast/           → Yoast SEO block styles
```

---

## 1. React Components

### Ads (`/src/app/components/ads/`)

| Component | File | WordPress Block | CSS | Notes |
|:----------|:-----|:----------------|:----|:------|
| AdContainer | `AdContainer.tsx` | `dp/ad-unit` (replaced by Advanced Ads) | Tailwind inline | Container wrapper |
| AdSlot | `AdSlot.tsx` | Advanced Ads shortcode | Tailwind inline | Generic ad slot |
| HalfPageAd | `HalfPageAd.tsx` | Advanced Ads placement | Tailwind inline | 300x600 sidebar |
| InFeedAd | `InFeedAd.tsx` | Advanced Ads placement | Tailwind inline | In-article ads |
| LeaderboardAd | `LeaderboardAd.tsx` | Advanced Ads placement | Tailwind inline | 728x90 banner |
| MediumRectangleAd | `MediumRectangleAd.tsx` | Advanced Ads placement | Tailwind inline | 300x250 MREC |
| SidebarAds | `SidebarAds.tsx` | Advanced Ads placement | Tailwind inline | Sidebar stack |
| SkyscraperAd | `SkyscraperAd.tsx` | Advanced Ads placement | Tailwind inline | 160x600 |
| StickyMobileFooter | `StickyMobileFooter.tsx` | `dp/sticky-footer` (replaced) | Tailwind inline | Mobile sticky ad |
| TakeoverRails | `TakeoverRails.tsx` | Advanced Ads placement | Tailwind inline | Desktop takeover |

**Guideline**: [Ad Components](/guidelines/components/blocks/ad-components.md)  
**CSS Note**: No dedicated CSS files. All ad components use Tailwind inline classes.

### Home (`/src/app/components/home/`)

| Component | File | WordPress Block/Pattern | CSS | Notes |
|:----------|:-----|:------------------------|:----|:------|
| ArchiveSection | `ArchiveSection.tsx` | Pattern: `archive-*` | Tailwind inline | Category archive |
| BreakingNews | `BreakingNews.tsx` | Pattern: `homepage-nuusflitse` | Tailwind inline | Ticker bar |
| CategorySection | `CategorySection.tsx` | Pattern: `homepage-*` | Tailwind inline | Homepage sections |
| CompetitionsSection | `CompetitionsSection.tsx` | Pattern: `section-competition-entry` | Tailwind inline | Competitions |
| EventsSection | `EventsSection.tsx` | Pattern: `homepage-events` | Tailwind inline | Events listing |
| FeatureGrid | `FeatureGrid.tsx` | Pattern: `homepage-top-stories` | Tailwind inline | Featured grid |
| Hero | `Hero.tsx` | Pattern: hero patterns | Tailwind inline | Page hero |
| HeroSlider | `HeroSlider.tsx` | Pattern: `homepage-top-stories` | Tailwind inline | Sliding hero |
| NewsCard | `NewsCard.tsx` | `core/post-template` child | Tailwind inline | Article card |
| MultimediaSection | `MultimediaSection.tsx` | Pattern: `homepage-multimedia` | Tailwind inline | Video/gallery |
| ObituariesSection | `ObituariesSection.tsx` | Pattern: `homepage-obituaries` | Tailwind inline | Obituaries |
| Poll | `Poll.tsx` | Pattern: `sidebar-home` | Tailwind inline | Sidebar poll |
| SidebarCategorySection | `SidebarCategorySection.tsx` | Pattern: sidebar patterns | Tailwind inline | Sidebar section |
| SponsoredInFeed | `SponsoredInFeed.tsx` | Advanced Ads placement | Tailwind inline | Sponsored card |

**Guideline**: [Hero Slider](/guidelines/components/blocks/hero-slider.md)  
**CSS Note**: No dedicated CSS files.

### Patterns (`/src/app/components/patterns/`)

| Component | File | WordPress Block/Pattern | CSS |
|:----------|:-----|:------------------------|:----|
| CallToAction | `CallToAction.tsx` | Pattern: `cta` | Tailwind inline |
| CommentsSection | `CommentsSection.tsx` | `core/comments` | Tailwind inline |
| ContactForm | `ContactForm.tsx` | `gravityforms/form` | Tailwind inline |
| ContentHero | `ContentHero.tsx` | Pattern: content hero | Tailwind inline |
| NewsletterCTA | `NewsletterCTA.tsx` | Pattern: `section-newsletter-cta` | Tailwind inline |
| NewsletterModal | `NewsletterModal.tsx` | N/A (React-only) | Tailwind inline |
| PageFAQSection | `PageFAQSection.tsx` | `yoast/faq-block` | Tailwind inline |
| TeamGrid | `TeamGrid.tsx` | Pattern: `page-team` | Tailwind inline |

**Guidelines**: [Newsletter CTA](/guidelines/components/blocks/newsletter-cta.md), [Content Hero](/guidelines/components/blocks/content-hero.md)

### Parts (`/src/app/components/parts/`)

| Component | File | WordPress Part | CSS |
|:----------|:-----|:---------------|:----|
| Breadcrumbs | `Breadcrumbs.tsx` | `yoast-seo/breadcrumbs` | Tailwind inline |
| Footer | `Footer.tsx` | Part: `footer.html` | Tailwind inline |
| Header | `Header.tsx` | Part: `header.html` | Tailwind inline |
| MobileMenu | `MobileMenu.tsx` | Pattern: `menu-mobile` | Tailwind inline |

### Common (`/src/app/components/common/`)

| Component | File | WordPress Block | CSS |
|:----------|:-----|:----------------|:----|
| ArticleLink | `ArticleLink.tsx` | `core/post-title` | Tailwind inline |
| AuthorLink | `AuthorLink.tsx` | `core/post-author` | Tailwind inline |
| BackToTopButton | `BackToTopButton.tsx` | N/A (JS-only) | Tailwind inline |
| CompetitionStatusBadge | `CompetitionStatusBadge.tsx` | Custom plugin block | Tailwind inline |
| CookieBanner | `CookieBanner.tsx` | N/A (JS-only) | Tailwind inline |
| HeroSlideCard | `HeroSlideCard.tsx` | Pattern: hero cards | Tailwind inline |
| Logo | `Logo.tsx` | `core/site-logo` | Tailwind inline |
| RelatedContent | `RelatedContent.tsx` | AQL query loop | Tailwind inline |
| ScrollDownArrow | `ScrollDownArrow.tsx` | N/A (JS-only) | Tailwind inline |
| SocialShare | `SocialShare.tsx` | `outermost/social-sharing` | Tailwind inline |
| ThemeToggle | `ThemeToggle.tsx` | N/A (JS-only) | Tailwind inline |

### UI Components (`/src/app/components/ui/`)

48 ShadCN-based UI components. These are primitive UI building blocks (accordion, button, card, dialog, etc.) and do **not** have direct WordPress block equivalents. They use Tailwind + CSS variables from `theme.css`.

**CSS Note**: UI components get their base styles from `/src/styles/theme.css` CSS variables and Tailwind classes. No per-component CSS files.

### Brand Quotes (`/src/app/components/brand-quotes/`)

| Component | File | WordPress Block | CSS |
|:----------|:-----|:----------------|:----|
| BrandLogo | `BrandLogo.tsx` | `core/image` | Tailwind inline |
| BrandQuote | `BrandQuote.tsx` | `core/quote` with style | Tailwind inline |
| QuoteSlider | `QuoteSlider.tsx` | Pattern: `section-brand-quotes` | Tailwind inline |

**Guideline**: [Brand Quotes](/guidelines/components/blocks/brand-quotes.md), [Quote Slider](/guidelines/components/blocks/quote-slider.md)

---

## 2. WordPress Core Blocks

### Blocks with Theme Style Overrides

These core blocks have JSON style variation files in `/styles/blocks/`:

| Block | Style Directory | JSON Files | Guideline |
|:------|:----------------|:-----------|:----------|
| `core/button` | `styles/blocks/button/` | Multiple style variants | [core-blocks-styling.md](/guidelines/components/blocks/design/core-blocks-styling.md) |
| `core/buttons` | `styles/blocks/buttons/` | Container styles | — |
| `core/column` | `styles/blocks/column/` | Column variations | — |
| `core/columns` | `styles/blocks/columns/` | Layout variations | — |
| `core/group` | `styles/blocks/group/` | Group container styles | — |
| `core/heading` | `styles/blocks/heading/` | Typography overrides | — |
| `core/image` | `styles/blocks/image/` | Image treatment styles | — |
| `core/list` | `styles/blocks/list/` | List styling | — |
| `core/navigation` | `styles/blocks/navigation/` | Navigation styles | — |
| `core/paragraph` | `styles/blocks/paragraph/` | Paragraph variants | — |
| `core/post-date` | `styles/blocks/post-date/` | Date display styles | — |
| `core/post-template` | `styles/blocks/post-template/` | Query loop card styles | — |
| `core/post-terms` | `styles/blocks/post-terms/` | Taxonomy term styles | — |
| `core/post-title` | `styles/blocks/post-title/` | Title typography | — |
| `core/pullquote` | `styles/blocks/pullquote/` | Pullquote styling | — |
| `core/quote` | `styles/blocks/quote/` | Blockquote styles | — |
| `core/search` | `styles/blocks/search/` | Search form styles | — |
| `core/separator` | `styles/blocks/separator/` | Divider styles | — |
| `core/site-title` | `styles/blocks/site-title/` | Site title typography | — |
| `core/table` | `styles/blocks/table/` | Table styling | — |
| `core/social-links` | N/A (no JSON override) | — | [social-links.md](/guidelines/components/blocks/theme/social-links.md) |

### Core Blocks WITHOUT Style Overrides

These blocks are used in patterns/templates but have no custom style files:

`core/cover`, `core/embed`, `core/file`, `core/gallery`, `core/html`, `core/media-text`, `core/more`, `core/page-list`, `core/pattern`, `core/post-author`, `core/post-content`, `core/post-excerpt`, `core/post-featured-image`, `core/query`, `core/query-pagination`, `core/read-more`, `core/spacer`, `core/template-part`

---

## 3. WooCommerce Blocks

All WooCommerce block styles live in `/styles/blocks/woocommerce/`:

| Block | Style Directory | Guideline |
|:------|:----------------|:----------|
| `woocommerce/accordion-header` | `woocommerce/accordion-header/` | [accordion.md](/guidelines/components/blocks/woocommerce/accordion.md) |
| `woocommerce/accordion-item` | `woocommerce/accordion-item/` | [accordion.md](/guidelines/components/blocks/woocommerce/accordion.md) |
| `woocommerce/add-to-cart-*` | `woocommerce/add-to-cart-*/` | [add-to-cart.md](/guidelines/components/blocks/woocommerce/add-to-cart.md) |
| `woocommerce/breadcrumbs` | `woocommerce/breadcrumbs/` | [breadcrumbs.md](/guidelines/components/blocks/woocommerce/breadcrumbs.md) |
| `woocommerce/cart` | `woocommerce/cart/` | [cart.md](/guidelines/components/blocks/woocommerce/cart.md) |
| `woocommerce/category-description` | `woocommerce/category-description/` | [category-blocks.md](/guidelines/components/blocks/woocommerce/category-blocks.md) |
| `woocommerce/category-title` | `woocommerce/category-title/` | [category-blocks.md](/guidelines/components/blocks/woocommerce/category-blocks.md) |
| `woocommerce/checkout` | `woocommerce/checkout/` | [checkout.md](/guidelines/components/blocks/woocommerce/checkout.md) |
| `woocommerce/customer-account` | `woocommerce/customer-account/` | [customer-account.md](/guidelines/components/blocks/woocommerce/customer-account.md) |
| `woocommerce/mini-cart` | `woocommerce/mini-cart/` | [mini-cart.md](/guidelines/components/blocks/woocommerce/mini-cart.md) |
| `woocommerce/order-confirmation-status` | `woocommerce/order-confirmation-status/` | [order-confirmation.md](/guidelines/components/blocks/woocommerce/order-confirmation.md) |
| `woocommerce/product-button` | `woocommerce/product-button/` | [product-button.md](/guidelines/components/blocks/woocommerce/product-button.md) |
| `woocommerce/product-filter-*` | `woocommerce/product-filter-*/` | [product-filters.md](/guidelines/components/blocks/woocommerce/product-filters.md) |
| `woocommerce/product-gallery-*` | `woocommerce/product-gallery-*/` | [product-gallery.md](/guidelines/components/blocks/woocommerce/product-gallery.md) |
| `woocommerce/product-image` | `woocommerce/product-image/` | [product-image.md](/guidelines/components/blocks/woocommerce/product-image.md) |
| `woocommerce/product-price` | `woocommerce/product-price/` | [product-price.md](/guidelines/components/blocks/woocommerce/product-price.md) |
| `woocommerce/product-rating` | `woocommerce/product-rating/` | [product-rating.md](/guidelines/components/blocks/woocommerce/product-rating.md) |
| `woocommerce/product-results-count` | `woocommerce/product-results-count/` | [product-results-count.md](/guidelines/components/blocks/woocommerce/product-results-count.md) |
| `woocommerce/product-review-*` | `woocommerce/product-review-*/` | [product-reviews.md](/guidelines/components/blocks/woocommerce/product-reviews.md) |
| `woocommerce/product-reviews` | `woocommerce/product-reviews/` | [product-reviews.md](/guidelines/components/blocks/woocommerce/product-reviews.md) |
| `woocommerce/product-sale-badge` | `woocommerce/product-sale-badge/` | [product-sale-badge.md](/guidelines/components/blocks/woocommerce/product-sale-badge.md) |
| `woocommerce/product-summary` | `woocommerce/product-summary/` | [product-summary.md](/guidelines/components/blocks/woocommerce/product-summary.md) |
| `woocommerce/product-title` | `woocommerce/product-title/` | [product-title.md](/guidelines/components/blocks/woocommerce/product-title.md) |
| `woocommerce/store-notices` | N/A | [store-notices.md](/guidelines/components/blocks/woocommerce/store-notices.md) |

**Guideline Index**: [WooCommerce Blocks README](/guidelines/components/blocks/woocommerce/README.md)  
**CSS Note**: All WooCommerce block styles are JSON-only. No companion CSS files.

---

## 4. Third-Party Plugin Blocks

### Outermost Blocks

| Block | Style Directory | Guideline |
|:------|:----------------|:----------|
| `outermost/icon-block` | `styles/blocks/outermost/icon/` | [Icon Block](/guidelines/wordpress-migration/third-party-plugins/icon-block.md) |
| `outermost/social-sharing` | `styles/blocks/outermost/social-sharing/` | [Social Sharing](/guidelines/wordpress-migration/third-party-plugins/social-sharing.md) |

### Gravity Forms

| Block | Style Directory | Guideline |
|:------|:----------------|:----------|
| `gravityforms/form` | `styles/blocks/gravityforms/` | [Gravity Forms](/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md) |

### Yoast SEO

| Block | Style Directory | Guideline |
|:------|:----------------|:----------|
| `yoast-seo/breadcrumbs` | `styles/blocks/yoast-seo/` | [Yoast SEO](/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md) |
| `yoast/faq-block` | `styles/blocks/yoast/` | [Yoast SEO](/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md) |

---

## 5. Missing CSS Files Audit

### React Side

**Status**: By design, there are **no per-component CSS files** in React. All styling uses Tailwind inline utility classes. The only CSS files are global:

| File | Contents |
|:-----|:---------|
| `/src/styles/theme.css` | CSS custom properties (tokens) |
| `/src/styles/tailwind.css` | Tailwind v4 source |
| `/src/styles/fonts.css` | Font imports |
| `/src/styles/markdown-prose.css` | Article body typography |
| `/src/styles/print.css` | Print styles |
| `/src/styles/tw-animate.css` | Animation classes |

**Missing**: If per-component CSS isolation is desired in WordPress, CSS files would need to be created per block. Currently, WordPress block styles are JSON-only (no CSS companions).

### WordPress Side

**Status**: Block styles are **100% JSON** — no CSS files exist in `/styles/blocks/`. This is correct for theme.json v3 architecture. CSS is only needed for effects that can't be expressed in JSON (e.g., animations, pseudo-elements).

**Potentially Missing CSS**:
- Social links hover animations — currently no CSS file
- Navigation mobile toggle animations — handled by WordPress JS
- Cookie banner styles — React-only (no WordPress equivalent)

---

## Directory Structure

```
/guidelines/components/blocks/
  README.md              ← This file (master index)
  wordpress-blocks.md    ← WordPress block mapping overview
  ad-components.md       ← Ad block guidelines
  article-hero.md        ← Article hero component
  author-profile.md      ← Author profile block
  brand-quotes.md        ← Brand quotes block
  competition-badge.md   ← Competition badge
  competition-entry.md   ← Competition entry form
  content-hero.md        ← Content hero section
  edition-access.md      ← E-edition access gate
  filter-bar.md          ← Filter/search bar
  hero-slider.md         ← Hero slider component
  miscellaneous-components.md ← Misc components
  newsletter-cta.md      ← Newsletter CTA
  pricing-table.md       ← Subscription pricing
  quote-slider.md        ← Quote carousel
  search-filters.md      ← Search filter UI
  sponsor-banner.md      ← Sponsor banner
  sticky-footer.md       ← Sticky mobile footer
  tab-bar.md             ← Tab navigation
  traffic-widget.md      ← Traffic widget
  weather-widget.md      ← Weather widget
  core/                  ← WordPress core block guidelines
    social-links.md      ← (future: more core block guides)
  theme/                 ← Theme-specific block guidelines
    social-links.md      ← Social Links block guide
  woocommerce/           ← WooCommerce block guidelines (28 files)
    README.md
    accordion.md
    add-to-cart.md
    ... (see directory listing)
  design/                ← Design/styling guides
    accordion.md
    core-blocks-styling.md
```

---

## Related Documentation

- [Block Styles Browser](/ontwikkelaar/blok-styl) — Visual browser for all block style JSON files
- [Section Styles](/guidelines/styles/sections/README.md) — Section style guidelines
- [Block Mapping](/guidelines/wordpress-migration/block-mapping.md) — React-to-WordPress block mapping
- [Block Styles Guide](/guidelines/wordpress-migration/block-styles.md) — Block style variation architecture
- [Design System](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md) — Design tokens reference
