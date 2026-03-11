# Block Mapping Strategy

**Last updated**: 2026-03-03
**Version**: 1.0

This document details the mapping of React components to WordPress Editor (Gutenberg) constructs.

## 1. Mapping Types

| Type | Description |
| :--- | :--- |
| **Core** | Standard WordPress blocks (Paragraph, Group, Columns) with `theme.json` styles. |
| **Pattern** | Pre-composed groups of Core blocks, saved as `patterns/*.php`. |
| **Custom** | React-based blocks registered via `block.json` (handled in `die-papier-blocks` plugin). |
| **Variation** | Core block with a specific style variation (e.g. `is-style-card`). |

---

## 2. Component Mapping Table

### 2.1 UI Primitives (Cards & Layouts)

| React Component | Variant / Prop | WP Construct | Attributes / Implementation Details |
| :--- | :--- | :--- | :--- |
| `ArticleCard` | `default` | **Pattern** | `die-papier/card-default`<br>Stack: Image (Aspect 16:9), Title (H3), Excerpt, Meta. |
| `ArticleCard` | `compact` | **Pattern** | `die-papier/card-compact`<br>Stack: Image (Aspect 16:9), Title (H4), No Excerpt. |
| `ArticleCard` | `list` | **Pattern** | `die-papier/card-list`<br>Flex Row: Image (Left, 80px), Content (Right). |
| `ArticleCard` | `featured` | **Pattern** | `die-papier/card-featured`<br>Large Image, Title (H2), Excerpt (Large). |
| `FeatureGrid` | - | **Pattern** | `die-papier/feature-grid`<br>Columns: 2/3 (Featured Card) + 1/3 (List Cards). |
| `PageContainer` | - | **Core** | `core/group` with `layout: { type: 'constrained', contentSize: '1440px' }`. |
| `Section` | - | **Core** | `core/group` with `align: full` and `padding`. |
| `Breadcrumbs` | - | **Yoast SEO** | `yoast-seo/breadcrumbs`<br>Yoast SEO breadcrumb block with Schema.org markup. Section style: `section-breadcrumb` (standalone) or within `section-header`. |
| `PageFAQSection` | - | **Yoast SEO** | `yoast/faq-block`<br>Yoast FAQ block with `FAQPage` Schema.org structured data. Section style: `section-faq`. See `/guidelines/components/faq-sections.md`. |

### 2.2 Content Blocks

| React Component | WP Construct | Attributes (Props -> Attributes) |
| :--- | :--- | :--- |
| `HeroSlider` | **Pattern** (multiple hero variants using `dp/slider`) | 4-6 hero patterns: `die-papier/hero-home` (carousel + Nuusflitse sidebar), `die-papier/hero-category` (category featured carousel), `die-papier/hero-article` (title left, image right), `die-papier/hero-page` (cover with title overlay), `die-papier/hero-eedition` (single issue display), `die-papier/hero-sponsor` (sponsor archive). All carousel variants use the `dp/slider` custom block inside the pattern. |
| `MultimediaSection` | **Pattern** (`die-papier/section-multimedia`) | Composition of:<br>1. Group (Header)<br>2. Query (Video CPT)<br>3. Columns (Gallery CPT / Podcast CPT) |
| `QuoteSlider` | **Pattern** (`die-papier/brand-quotes`) using `dp/slider` | Pattern containing the generic `dp/slider` block with brand quote `core/group` children as slides. Autoplay 6s, dots visible, no arrows. |
| `MarketingGrid` | **Pattern** (`die-papier/marketing-grid`) | Grid of `core/image` blocks representing the social proof cards. |
| `NewsletterCTA` | **Pattern** (`die-papier/newsletter-cta`) with Gravity Forms | Pattern wrapping a `gravityforms/form` block with branded styling. Replaces custom `dp/newsletter-cta` block. Section style: `section-newsletter`. |
| `LeaderboardAd` | **Advanced Ads** (`advanced-ads/ad-block`) | Advanced Ads block with manual placement. Placement slug: `dp-header-leaderboard`, `dp-mid-leaderboard-{n}`, or `dp-post-footer-leaderboard`. See `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`. |
| `SidebarAds` | **Advanced Ads** (`advanced-ads/ad-block`) | Advanced Ads block with manual placement. Placement slugs: `dp-sidebar-mrec`, `dp-sidebar-hpage`. |
| `StickyMobileFooter`| **Advanced Ads Pro** (Sticky placement) | Advanced Ads Pro sticky footer placement (`dp-sticky-mobile`). Mobile-only (< 768px), delay 3s, dismissible. See `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`. |

### 2.3 Navigation & Meta

| React Component | WP Construct | Implementation |
| :--- | :--- | :--- |
| `Header` | **Template Part** | `header.html`: Logo, Navigation, Search, User Menu. |
| `Footer` | **Template Part** | `footer.html`: 4-col layout, Copyright. |
| `Pagination` | **Core** | `core/query-pagination` |
| `SocialShare` | **Core** | `core/social-links` (style: `logos-only` or custom classes). |

### 2.4 Sponsor Components

| React Component | WP Construct | Attributes (Props -> Attributes) |
| :--- | :--- | :--- |
| `SponsoredInFeed` (inline card) | **Custom** (`dp/sponsor-banner`) | `sponsorId`: number (post ID of `dp_sponsor` CPT)<br>`alignment`: `'left'` \| `'center'` \| `'right'` (default `'center'`)<br>`size`: `'small'` \| `'medium'` \| `'large'` (logo max-height 32/48/80 px) |
| `SponsorsPage` (archive grid) | **Pattern** (`die-papier/sponsors-archive`) | Composition: `core/query` (postType: `dp_sponsor`) + `die-papier/card-sponsor` pattern per item. |
| `SponsorArchive` hero | **Pattern** | `archive-dp_sponsor.html` — uses `die-papier/hero-sponsor` pattern. |

---

## 3. Block Attribute Definitions

### 3.1 Hero Slider — DEPRECATED (Use hero patterns + `dp/slider`)

> **⚠️ DEPRECATED**: The `dp/hero-slider` custom block has been replaced by **4-6 hero patterns** that use the generic `dp/slider` block for carousel functionality. This approach is more flexible — each page type gets a purpose-built hero pattern rather than one block trying to handle all cases.
>
> **Hero pattern inventory:**
>
> | Pattern Slug | Page Context | Layout |
> |:---|:---|:---|
> | `die-papier/hero-home` | Homepage | 5-article carousel (2/3 width) + Nuusflitse sidebar (1/3) |
> | `die-papier/hero-category` | Category archive | Featured articles carousel for specific category |
> | `die-papier/hero-article` | Single article | Title left + featured image right (NovaNews style) |
> | `die-papier/hero-page` | Static pages | Cover image with title overlay |
> | `die-papier/hero-eedition` | E-edition single | Single issue cover display |
> | `die-papier/hero-sponsor` | Sponsor archive | Sponsor showcase |
>
> All carousel-based heroes use `dp/slider` inside the pattern. Non-carousel heroes (article, page) use standard `core/group` + `core/cover` blocks.
>
> See `/guidelines/wordpress-migration/third-party-plugins/plugin-structure.md` for `dp/slider` block.json and Interactivity API spec.

```json
{
  "name": "dp/hero-slider",
  "attributes": {
    "showSidebar": { "type": "boolean", "default": true },
    "sidebarTitle": { "type": "string", "default": "Nuusflitse" },
    "query": { "type": "object", "default": { "perPage": 5, "postType": "post" } }
  }
}
```

### 3.2 Newsletter CTA (`dp/newsletter-cta`)

Designed to replace `NewsletterCTA.tsx`. Renders MailPoet form markup dynamically.

```json
{
  "name": "dp/newsletter-cta",
  "attributes": {
    "title": { "type": "string", "default": "Bly op hoogte" },
    "description": { "type": "string", "default": "Ontvang die jongste nuus..." },
    "buttonText": { "type": "string", "default": "Teken in" },
    "variant": { "type": "string", "default": "full" },
    "listId": { "type": "string", "default": "1" }
  }
}
```

### 3.3 Ad Unit — DEPRECATED (Use Advanced Ads)

> **⚠️ DEPRECATED**: The `dp/ad-unit` custom block spec has been replaced by the **Advanced Ads** plugin. All ad placements are now managed centrally via Advanced Ads → Placements. See `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md` for the full migration guide.
>
> The Advanced Ads plugin provides its own Gutenberg block (`advanced-ads/ad-block`) that can display individual ads, ad groups, or placements. For in-content ads, use auto-injection placements (no block needed). For sticky/popup ads, use Advanced Ads Pro.

```json
{
  "name": "dp/ad-unit",
  "attributes": {
    "slotIdentifier": { "type": "string" },
    "format": { "type": "string", "enum": ["leaderboard", "mrec", "billboard"] },
    "responsive": { "type": "boolean", "default": true }
  }
}
```

### 3.4 Quote Slider — DEPRECATED (Use `die-papier/brand-quotes` pattern)

> **⚠️ DEPRECATED**: The `dp/quote-slider` custom block has been replaced by the `die-papier/brand-quotes` pattern. This pattern uses the generic `dp/slider` block with brand quote cards as InnerBlocks slides.
>
> **Pattern structure:**
> ```html
> <!-- wp:group {"align":"full","className":"is-style-section-gradient-navy","layout":{"type":"constrained"}} -->
>   <!-- wp:dp/slider {"autoplay":true,"interval":6000,"showArrows":false,"showDots":true} -->
>     <!-- wp:group {"className":"brand-quote-slide"} -->
>       <!-- wp:quote -->
>       <blockquote><p>"Quote text here"</p><cite>Author — Role</cite></blockquote>
>       <!-- /wp:quote -->
>     <!-- /wp:group -->
>     <!-- ...more slides... -->
>   <!-- /wp:dp/slider -->
> <!-- /wp:group -->
> ```

```json
{
  "name": "dp/quote-slider",
  "attributes": {
    "quotes": {
      "type": "array",
      "source": "query",
      "selector": ".quote-item",
      "query": {
        "text": { "source": "html", "selector": "blockquote" },
        "author": { "source": "text", "selector": "cite" }
      }
    }
  }
}
```

### 3.5 Sponsor Banner (`dp/sponsor-banner`)

Replaces the sponsored in-feed card in `SponsoredInFeed.tsx` and sidebar sponsor slots. Fully scaffolded in `wordpress-export/plugins/die-papier-blocks/src/blocks/sponsor-banner/` (P2 — **DONE 2026-02-21**).

```json
{
  "name": "dp/sponsor-banner",
  "attributes": {
    "sponsorId": { "type": "number", "default": 0 },
    "alignment": { "type": "string", "default": "center", "enum": ["left", "center", "right"] },
    "size":      { "type": "string", "default": "medium", "enum": ["small", "medium", "large"] }
  }
}
```

**Files:**
| File | Purpose |
| :--- | :--- |
| `block.json` | Schema, attribute definitions, asset pointers (`editorStyle`, `style`, `render`). |
| `index.js` | Editor `Edit` component. Uses `ComboboxControl` + `@wordpress/core-data` REST store to search `dp_sponsor` posts by name. Falls back to `Placeholder` when no sponsor is selected. |
| `render.php` | Server-side render. Reads `sponsorId`, fetches title / post-thumbnail / `sponsor_url` meta, outputs logo wrapped in an optional `<a>` with `rel="sponsored"`. |
| `style.scss` | Frontend + editor styles. All colours reference V2 CSS custom property tokens (`--wp--preset--color--*`, `--wp--preset--spacing--*`). Supports `size-small/medium/large` and `align-left/center/right` modifiers. |

**Usage example (block markup):**
```html
<!-- wp:dp/sponsor-banner {"sponsorId":42,"alignment":"center","size":"medium"} /-->
```

### 3.6 Sticky Mobile Footer — DEPRECATED (Use Advanced Ads Pro)

> **⚠️ DEPRECATED**: The `dp/sticky-footer` block spec for mobile ads has been replaced by **Advanced Ads Pro** sticky placement type. The sticky footer ad is now managed entirely through the Advanced Ads dashboard — no custom block needed. Configure: position=bottom, mobile-only (< 768px), delay=3s, dismissible=yes. See `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`.
>
> **Note**: If `dp/sticky-footer` is used for non-ad sticky content (e.g., cookie consent banner), the block may be retained for that purpose only.

```json
{
  "name": "dp/sticky-footer",
  "attributes": {
    "slotIdentifier": { "type": "string",  "default": "DP_Sticky_Mobile_Footer" },
    "delaySeconds":   { "type": "number",  "default": 3, "minimum": 0, "maximum": 30 },
    "dismissible":    { "type": "boolean", "default": true },
    "zIndex":         { "type": "number",  "default": 40 }
  }
}
```

**Interactivity API store (`dp/sticky-footer`):**
| Action | Trigger | Behaviour |
| :--- | :--- | :--- |
| `init` | `data-wp-init` on mount | Guards mobile-only (`< 768px`); sets `setTimeout(delaySeconds)` then sets `context.visible = true` and calls `googletag.display()`. Returns cleanup fn to clear timer. |
| `dismiss` | `data-wp-on--click` on × button | Sets `context.visible = false`. |

**Files:**
| File | Purpose |
| :--- | :--- |
| `block.json` | Schema, `viewScriptModule`, asset pointers. `multiple: false` prevents duplicate placement. |
| `index.js` | Editor `Edit` — `Placeholder` + `InspectorControls` with `RangeControl` (delay), `ToggleControl` (dismissible), `TextControl` (slot ID). |
| `render.php` | Outputs `<div data-wp-interactive="dp/sticky-footer" data-wp-context="{…}" data-wp-init="actions.init">` shell. |
| `view.js` | Interactivity API store — handles delay, mobile guard, GAM `googletag.display()`, and dismiss. |
| `style.scss` | `position: fixed; bottom: 0;` layout with `.is-visible` transition. All tokens use `--wp--preset--*` variables. |

---

## 3.7 Subscription CTA (`dp/subscription-cta`)

Replaces the subscription CTA section in `SingleEEdition.tsx`. A full-width navy banner promoting digital subscriptions, shown only when the user does not have access to the current e-edition.

```json
{
  "name": "dp/subscription-cta",
  "attributes": {
    "heading": {
      "type": "string",
      "default": "Kry onbeperkte toegang tot alle e-uitgawes"
    },
    "description": {
      "type": "string",
      "default": "Met 'n digitale intekening lees jy elke uitgawe — verlede, hede en toekoms — op enige toestel. Geen beperkings nie."
    },
    "features": {
      "type": "array",
      "default": [
        "Toegang tot alle uitgawes vanaf jou intekeningdatum",
        "Nuwe uitgawes onmiddellik beskikbaar",
        "Lees op foon, tablet of rekenaar"
      ]
    },
    "buttonText": {
      "type": "string",
      "default": "Bekyk intekeningplanne"
    },
    "buttonUrl": {
      "type": "string",
      "default": "/inteken/e-uitgawe"
    },
    "showPlanSummary": {
      "type": "boolean",
      "default": true
    }
  }
}
```

**Rendering strategy:**
- `render.php` is a dynamic block that checks `wc_memberships_is_post_content_restricted()` and `current_user_can()` to decide whether to render. If the user already has access, the block outputs nothing.
- When `showPlanSummary` is `true`, `render.php` queries WooCommerce Subscription products (SKUs `DP-SUB-1M`, `DP-SUB-3M`, `DP-SUB-12M`) to pull live prices, avoiding hardcoded amounts.
- The left column renders the heading, description, feature list (with SVG icons), and CTA button.
- The right column (optional sidebar) renders the plan summary with prices and badges.

**Layout:**
| Column | Width | Content |
| :--- | :--- | :--- |
| Left (value prop) | `flex: 1` | Eyebrow "DIGITALE INTEKENING", H3 heading, description, 3 feature bullets with icons, primary CTA button |
| Right (plan summary) | `280–320px` | "Planne vanaf" label, large R140/maand price, 3 plan rows with prices and optional "Gewild" / "Beste waarde" badges |

**Placement:** Used inside `single-dp_eedition.html` template, positioned between the locked preview section and the social share block. Conditionally rendered — hidden for users with membership access.

---

## 4. WooCommerce Block Mapping

WooCommerce provides **120+ blocks**. Die Papier uses a subset for the e-edition commerce flow. Full individual block documentation is in `/guidelines/components/blocks/woocommerce/`.

### 4.1 Commerce Flow Blocks (Critical)

| React Component | WP Block | Pattern | Notes |
|:---|:---|:---|:---|
| `CartPage` | `woocommerce/cart` | `woo-cart` | Full cart with line items, totals, checkout CTA |
| `CheckoutPage` | `woocommerce/checkout` | `woo-checkout` | Billing, payment (Payfast), terms |
| Cart icon in `Header` | `woocommerce/mini-cart` | `woo-mini-cart` | Bag icon, Navy/Red brand colours |
| `AccountPage` | `woocommerce/customer-account` | `woo-my-account` | Login/dashboard |
| `OrderConfirmation` | `woocommerce/order-confirmation-*` | `woo-order-confirmation` | Status, summary, totals, downloads |
| Store alerts | `woocommerce/store-notices` | 5 patterns | Auto-injected WooCommerce notices |

### 4.2 Product Display Blocks

| React Component | WP Block | Pattern | Block Styles |
|:---|:---|:---|:---|
| Product CTA button | `woocommerce/product-button` | `woo-product-card` | `default`, `primary` (Brand Red) |
| E-edition cover | `woocommerce/product-image` | `woo-product-card`, `woo-single-product` | `default`, `rounded` (8px) |
| Price display | `woocommerce/product-price` | `woo-product-card`, `woo-single-product` | `default`, `accent` (Brand Red, bold) |
| Sale badge | `woocommerce/product-sale-badge` | `woo-product-card` | `default` |
| Product title | `core/post-title` (with `__woocommerceNamespace`) | `woo-product-card`, `woo-single-product` | — |
| Product excerpt | `core/post-excerpt` (with `__woocommerceNamespace`) | `woo-single-product` | — |
| Add to cart form | `woocommerce/add-to-cart-form` | `woo-subscription-pricing-table` | — |
| Add to cart (block-based) | `woocommerce/add-to-cart-with-options` | `woo-single-product` | — |
| Product tabs | `woocommerce/product-details` | `woo-single-product` | `is-style-minimal` |
| Product metadata | `woocommerce/product-meta` + `product-sku` | `woo-single-product` | — |

### 4.3 Navigation & Utility Blocks

| React Component | WP Block | Usage |
|:---|:---|:---|
| Breadcrumbs | `woocommerce/breadcrumbs` | **Replaced** by `yoast-seo/breadcrumbs` |
| Cart link | `woocommerce/cart-link` | Checkout page "Terug na mandjie" |
| Page wrapper | `woocommerce/page-content-wrapper` | Cart, Checkout, Order Confirmation |
| Product grid | `woocommerce/product-collection` + `product-template` | E-edition archive |

> **Full block reference**: See `/guidelines/components/blocks/woocommerce/README.md` for the complete 120+ block inventory with block styles, supports, and attributes.

---

## 5. Pattern Compositions

### 5.1 Feature Grid Pattern
**Slug:** `die-papier/feature-grid`

Structure:
```html
<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
  <!-- wp:column {"width":"66.66%"} -->
  <div class="wp-block-column" style="flex-basis:66.66%">
    <!-- wp:query {"queryId":1,"displayLayout":{"type":"list"},"query":{"perPage":1}} -->
      <!-- wp:post-template -->
        <!-- wp:pattern {"slug":"die-papier/card-featured"} /-->
      <!-- /wp:post-template -->
    <!-- /wp:query -->
  </div>
  <!-- /wp:column -->

  <!-- wp:column {"width":"33.33%"} -->
  <div class="wp-block-column" style="flex-basis:33.33%">
    <!-- wp:query {"queryId":2,"displayLayout":{"type":"list"},"query":{"perPage":3,"offset":1}} -->
      <!-- wp:post-template -->
        <!-- wp:pattern {"slug":"die-papier/card-list"} /-->
      <!-- /wp:post-template -->
    <!-- /wp:query -->
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->
```

### 5.2 Article Card (Default)
**Slug:** `die-papier/card-default`

Structure:
```html
<!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}}} -->
<div class="wp-block-group">
    <!-- wp:post-featured-image {"aspectRatio":"16/9"} /-->
    <!-- wp:die-papier/category-badge /-->
    <!-- wp:post-title {"level":3,"isLink":true} /-->
    <!-- wp:post-excerpt {"moreText":""} /-->
    <!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->
        <!-- wp:post-date /-->
        <!-- wp:post-author /-->
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

---

## 6. Third-Party Block Mappings

### 6.1 WooCommerce Blocks

**Complete documentation**: `/guidelines/wordpress-migration/woocommerce/README.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `woocommerce/cart` | `CartPage` component | Cart page template (`page-cart.html`) |
| `woocommerce/checkout` | `CheckoutPage` component | Checkout page template (`page-checkout.html`) |
| `woocommerce/customer-account` | `AccountIcon` component | Header template part (account link/icon) |
| `woocommerce/mini-cart` | `MiniCart` component | Header template part (cart icon/drawer) |
| `woocommerce/product-price` | `ProductPrice` component | Pricing tables, product cards |
| `woocommerce/product-title` | `ProductTitle` component | Subscription product cards |
| `woocommerce/product-button` | `AddToCartButton` component | Add-to-cart buttons |
| `woocommerce/breadcrumbs` | - | Product pages (WooCommerce-specific breadcrumbs) |
| `woocommerce/order-confirmation-status` | `OrderConfirmation` component | Order confirmation template |

**Key Attributes**:
- All WooCommerce blocks inherit product context from page/template
- `woocommerce/cart`: `{"hasDarkControls":false,"isShippingCalculatorEnabled":false}`
- `woocommerce/customer-account`: `{"displayStyle":"icon_only","iconStyle":"alt"}`
- `woocommerce/mini-cart`: `{"miniCartIcon":"bag-alt"}`

---

### 6.2 Yoast SEO Blocks

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `yoast-seo/breadcrumbs` | `Breadcrumbs` component | All templates (except homepage, 404) |
| `yoast-seo/faq-block` | `FAQSection` component | FAQ patterns, static pages with FAQs |

**Key Attributes**:
- `yoast-seo/breadcrumbs`: `{"separator":"›"}` (matches Die Papier style)
- `yoast-seo/faq-block`: Contains `questions` array with `jsonQuestion` and `jsonAnswer` properties
- Both blocks output Schema.org structured data (BreadcrumbList, FAQPage)

---

### 6.3 Gravity Forms Block

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `gravityforms/form` | `NewsletterForm`, `ContactForm` components | Newsletter patterns, contact page, dev tools pages |

**Key Attributes**:
```json
{
  "formId": "1",
  "title": false,
  "description": false,
  "ajax": true
}
```

**Form ID Mapping**:
- Form ID `1` → Newsletter signup (footer, newsletter CTA pattern)
- Form ID `2` → Generic contact form (contact page)
- Form ID `3` → Dev tools contact form (developer tools pages)

---

### 6.4 Social Sharing Block

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `outermost/social-sharing` | `SocialShareButtons` component | Article footer, sidebar, archive cards |

**Key Attributes**:
```json
{
  "networks": ["facebook", "whatsapp", "x", "email", "copy-link"],
  "iconSize": "default",
  "iconStyle": "filled",
  "showLabels": true,
  "layout": "horizontal"
}
```

**Network Priority** (Die Papier):
1. Facebook (largest social network in South Africa)
2. WhatsApp (most popular messaging app)
3. X (Twitter) (news sharing platform)
4. Email (direct sharing)
5. Copy Link (versatile option)

---

### 6.5 Icon Block

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/icon-block.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `outermost/icon` | `Icon` component (from lucide-react) | Feature lists, service grids, UI enhancements |

**Key Attributes**:
```json
{
  "icon": "<svg>...</svg>",
  "iconSize": "md",
  "iconColor": "red",
  "linkUrl": "",
  "align": "left"
}
```

**Size Mapping** (Die Papier icon scale):
- `xs` → 12px (inline icons)
- `sm` → 16px (list bullets)
- `md` → 20px (feature list icons) **default**
- `lg` → 24px (section icons)
- `xl` → 32px (large features)
- `2xl` → 40px (hero sections)
- `3xl` → 48px (homepage sections)

---

### 6.6 Advanced Ads Block

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `advads/gblock` | `LeaderboardAd`, `SidebarAds`, `InFeedAd` components | All ad placements (manual) |

**Key Attributes**:
```json
{
  "itemID": "dp-header-leaderboard",
  "align": "center"
}
```

**GAM Ad Units** (7 production ads):

| GAM Ad Name | Ad ID | Format |
|:------------|:------|:-------|
| `GAM: DP_Header` | `309952` | 728×90 (Leaderboard) |
| `GAM: DP_Sidebar_1` | `309954` | 300×250 (MREC) |
| `GAM: DP_Sidebar_2` | `309955` | 300×250 (MREC) |
| `GAM: DP_Sticky_Footer` | `309956` | 320×50 (Mobile Banner) |
| `GAM: DP_Popup` | `309953` | Variable (Interstitial) |
| `GAM: DP-L` | `309964` | Variable (Wallpaper) |
| `GAM: DP-R` | `309965` | Variable (Wallpaper) |

**Theme Placement ID Mapping** (12 manual + 5 auto-inject):
- `dp-header-leaderboard` → `GAM: DP_Header` (309952) — Header leaderboard
- `dp-home-sidebar-top` → `GAM: DP_Sidebar_1` (309954) — Homepage sidebar
- `dp-mid-leaderboard-1/2/3` → `GAM: DP_Header` (309952) — Homepage mid-content
- `dp-sidebar-mrec` → `GAM: DP_Sidebar_1` (309954) — Default sidebar MREC
- `dp-sidebar-hpage` → `GAM: DP_Sidebar_1` (309954) — Desktop half-page
- `dp-eedition-archive-leaderboard` → `GAM: DP_Header` (309952) — E-Editions archive

**Auto-inject placements** (no `advads/gblock` block needed):
- Sticky footer (mobile), in-content ads, pop-up, wallpaper left/right — all managed via Advanced Ads Pro placement configuration.

---

### 6.7 Advanced Query Loop (AQL)

**Complete documentation**: `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md`

| Block | React Equivalent | Usage |
|:---|:---|:---|
| `core/query` (with AQL namespace) | Query-based components (article grids, archive listings) | Homepage sections, archive templates, related articles |

**Key Attributes**:
```json
{
  "queryId": 1,
  "query": {
    "perPage": 5,
    "postType": "post",
    "namespace": "advanced-query-loop",
    "deduplication": true,
    "enable_caching": true,
    "taxonomy_query_builder": {...}
  },
  "namespace": "advanced-query-loop"
}
```

**AQL-Specific Features**:
- `deduplication` → Die Papier custom extension (page-level article deduplication)
- `taxonomy_query_builder` → Advanced taxonomy filtering (category, tag queries)
- `post_meta_query` → Custom field filtering/ordering (events by date, etc.)
- `enable_caching` → 1-hour transient cache for performance

---

## 7. Cross-References

**Integration Guidelines**:
- `/guidelines/wordpress-migration/woocommerce/README.md`
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`
- `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md`
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md`
- `/guidelines/wordpress-migration/third-party-plugins/icon-block.md`
- `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`
- `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md`

**Audit Reports**:
- `/reports/audits/third-party-blocks-integration-orchestrator.md`
- `/reports/audits/woocommerce-blocks-audit.md`
- `/reports/audits/gravity-forms-block-audit.md`
- `/reports/audits/yoast-seo-blocks-audit.md`

**Task List**: `/tasks/third-party-blocks-integration-task-list.md`

---

**End of Document**