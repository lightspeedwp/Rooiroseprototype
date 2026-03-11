# Plugin Architecture: `die-papier-blocks`

**Last updated**: 2026-03-02
**Version**: 2.0
**Version at launch**: 1.0.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

This document defines the structure and development standards for the custom WordPress plugin that houses all "Die Papier" specific blocks, custom post types (CPTs), and taxonomies.

## 1. Plugin Overview

*   **Name**: Die Papier Blocks
*   **Slug**: `die-papier-blocks`
*   **Description**: Custom blocks, patterns, and content types for the Die Papier news platform.
*   **Dependencies**: WooCommerce, Payfast Payment Gateway, WooCommerce Subscriptions, WooCommerce Memberships.

## 2. Directory Structure

```text
die-papier-blocks/
├── build/                  # Compiled assets (JS/CSS)
├── src/                    # Source files
│   ├── blocks/             # Custom Blocks (React/PHP)
│   │   ├── slider/
│   │   │   ├── block.json
│   │   │   ├── edit.js
│   │   │   ├── index.js
│   │   │   ├── render.php
│   │   │   ├── view.js        # Interactivity API carousel logic
│   │   │   └── style.scss
│   │   ├── article-hero/
│   │   ├── competition-badge/
│   │   ├── competition-entry/
│   │   ├── content-hero/
│   │   ├── filter-bar/
│   │   ├── search-filters/
│   │   ├── sponsor-banner/
│   │   ├── tab-bar/
│   │   ├── traffic-widget/
│   │   └── weather-widget/
│   ├── aql-extension/      # AQL deduplication extension (JS + PHP)
│   │   ├── index.js         # Deduplication toggle control
│   │   └── deduplication.php # aql_query_vars filter
│   ├── assets/             # Shared assets (images, icons)
│   └── utils/              # Shared JS utilities
├── inc/                    # PHP Includes
│   ├── post-types.php      # CPT Registration
│   ├── taxonomies.php      # Taxonomy Registration
│   ├── patterns.php        # Pattern Category Registration
│   └── acf-fields.php      # ACF Field Definitions (PHP export)
├── die-papier-blocks.php   # Main Plugin File
└── package.json            # Build scripts (@wordpress/scripts)
```

### Deprecated Block Directories (To Be Removed)

The following block directories exist in the current codebase but are **deprecated** and should be deleted:

| Directory | Replaced By | See |
|:---|:---|:---|
| `hero-slider/` | 6 hero patterns + `dp/slider` | `/guidelines/wordpress-migration/block-mapping.md` §3.1 |
| `quote-slider/` | `die-papier/brand-quotes` pattern + `dp/slider` | `/guidelines/wordpress-migration/block-mapping.md` §3.4 |
| `ad-mrec/` | Advanced Ads block | `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md` |
| `sticky-footer/` | Advanced Ads Pro sticky placement | `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md` |
| `newsletter-cta/` | Pattern with Gravity Forms block | Audit: `/prompts/block-plugin-cleanup-orchestrator.md` |
| `pricing-table/` | Pattern using core blocks | Audit: `/prompts/block-plugin-cleanup-orchestrator.md` |
| `eedition-access/` | WooCommerce Memberships + Subscriptions | Not needed — access via WC extensions |

## 3. Custom Post Types (CPTs)

Registered in `inc/post-types.php`.

| Slug | Singular | Plural | Supports | Taxonomies |
| :--- | :--- | :--- | :--- | :--- |
| `dp_event` | Gebeurtenis | Gebeure | Title, Editor, Thumbnail, Excerpt | `dp_event_category` |
| `dp_obituary` | Doodsberig | Doodsberrigte | Title, Editor, Thumbnail | `dp_obituary_category` |
| `dp_multimedia` | Multimedia | Multimedia | Title, Editor, Thumbnail | `dp_media_type` |
| `dp_competition` | Kompetisie | Kompetisies | Title, Editor, Thumbnail | - |
| `dp_sponsor` | Borg | Borge | Title, Thumbnail | `dp_sponsor_tier` |
| `dp_eedition` | E-Uitgawe | E-Uitgawes | Title, Thumbnail | `dp_edition_type` |

## 4. Block Schemas (`block.json`)

### 4.1 Slider (`dp/slider`) — Generic Carousel Block

A reusable carousel/slider block used inside hero patterns, brand quote patterns, and any other pattern that needs sliding content. Uses InnerBlocks to accept slide content — the block itself only provides carousel mechanics.

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/slider",
  "title": "Skuifbalk",
  "category": "die-papier-blocks",
  "icon": "slides",
  "description": "Generic carousel/slider block. Add slides as InnerBlocks. Used inside hero and quote patterns.",
  "keywords": ["slider", "carousel", "skuifbalk"],
  "attributes": {
    "autoplay": { "type": "boolean", "default": true },
    "interval": { "type": "number", "default": 5000, "minimum": 1000, "maximum": 30000 },
    "loop": { "type": "boolean", "default": true },
    "showArrows": { "type": "boolean", "default": true },
    "showDots": { "type": "boolean", "default": true },
    "slidesPerView": { "type": "number", "default": 1 },
    "pauseOnHover": { "type": "boolean", "default": true }
  },
  "supports": {
    "align": ["full", "wide"],
    "html": false,
    "spacing": { "margin": true, "padding": true }
  },
  "usesContext": [],
  "textdomain": "die-papier-blocks",
  "editorScript": "file:./index.js",
  "editorStyle": "file:./index.css",
  "style": "file:./style-index.css",
  "viewScriptModule": "file:./view.js",
  "render": "file:./render.php"
}
```

**Key implementation notes:**

- Uses **InnerBlocks** for slides — each direct child of the slider wrapper is a slide.
- `view.js` uses the WordPress Interactivity API for all client-side carousel logic (slide transitions, autoplay timer, arrow/dot navigation, pause on hover, swipe gestures).
- `render.php` outputs the static HTML structure with `data-wp-interactive="dp/slider"` directives.
- CSS uses `scroll-snap` as the no-JS fallback, enhanced by the Interactivity API when JS loads.
- In the editor, slides are shown vertically with "Slide 1/5" labels for easy editing.

**Interactivity API store (`dp/slider`):**

| Action | Directive | Description |
| :--- | :--- | :--- |
| `init` | `data-wp-init` | Reads attributes from context; starts autoplay timer if enabled. |
| `next` | `data-wp-on--click` (→ arrow) | Advances to next slide (loops if `loop: true`). |
| `prev` | `data-wp-on--click` (← arrow) | Goes to previous slide. |
| `goTo` | `data-wp-on--click` (dot) | Jumps to specific slide index. |
| `pause` | `data-wp-on--mouseenter` | Pauses autoplay timer. |
| `resume` | `data-wp-on--mouseleave` | Resumes autoplay timer. |

**Used inside these patterns:**

| Pattern | Slider Config |
| :--- | :--- |
| `die-papier/hero-home` | `autoplay: true`, `interval: 5000`, `showArrows: true`, `showDots: true` |
| `die-papier/hero-category` | `autoplay: true`, `interval: 5000`, `showArrows: true`, `showDots: true` |
| `die-papier/brand-quotes` | `autoplay: true`, `interval: 6000`, `showArrows: false`, `showDots: true` |

### 4.2 Newsletter CTA (`dp/newsletter-cta`)

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/newsletter-cta",
  "title": "Newsletter CTA",
  "category": "die-papier-blocks",
  "icon": "email",
  "attributes": {
    "title": { "type": "string", "default": "Bly op hoogte" },
    "description": { "type": "string", "default": "Ontvang die jongste nuus..." },
    "listId": { "type": "string", "default": "1" },
    "variant": { "type": "string", "default": "full" }
  },
  "render": "file:./render.php"
}
```

### 4.3 Quote Slider — DEPRECATED (Use `die-papier/brand-quotes` pattern)

> **⚠️ DEPRECATED**: The `dp/quote-slider` custom block has been replaced by the `die-papier/brand-quotes` pattern, which uses the generic `dp/slider` block inside it. See `/guidelines/components/blocks/brand-quotes.md`.

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/quote-slider",
  "title": "Quote Slider",
  "category": "die-papier-blocks",
  "icon": "format-quote",
  "attributes": {
    "quotes": {
      "type": "array",
      "default": []
    },
    "interval": { "type": "number", "default": 5000 }
  },
  "render": "file:./render.php"
}
```

### 4.4 Sponsor Banner (`dp/sponsor-banner`) — P2 ✅ DONE 2026-02-21

Replaces `SponsoredInFeed.tsx`. Dynamic block — server-rendered via `render.php` using the `dp_sponsor` CPT and `sponsor_url` SCF meta field.

**Source directory:** `wordpress-export/plugins/die-papier-blocks/src/blocks/sponsor-banner/`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/sponsor-banner",
  "version": "1.0.0",
  "title": "Borg Banner",
  "category": "die-papier-blocks",
  "icon": "megaphone",
  "description": "Displays a single sponsor logo and link, fetched dynamically from the dp_sponsor CPT.",
  "attributes": {
    "sponsorId": { "type": "number", "default": 0 },
    "alignment": { "type": "string", "default": "center", "enum": ["left", "center", "right"] },
    "size":      { "type": "string", "default": "medium", "enum": ["small", "medium", "large"] }
  },
  "supports": {
    "align": ["full", "wide"],
    "html": false,
    "spacing": { "margin": true, "padding": true },
    "color":   { "background": true, "text": false }
  },
  "textdomain": "die-papier-blocks",
  "editorScript": "file:./index.js",
  "editorStyle":  "file:./index.css",
  "style":        "file:./style-index.css",
  "render":       "file:./render.php"
}
```

**Editor UX notes:**
- `index.js` uses `ComboboxControl` backed by `@wordpress/core-data` (`getEntityRecords('postType', 'dp_sponsor', ...)`) so editors search sponsors by name rather than entering a raw post ID.
- `Placeholder` component is shown until a sponsor is selected.
- `SelectControl` for `alignment` and `size` live in `InspectorControls`.

**Frontend render (`render.php`) logic:**
1. Guard: returns early if `sponsorId` is 0 or post type is not `dp_sponsor`.
2. Reads `get_post_thumbnail_id()` → `wp_get_attachment_image_url()` for logo.
3. Reads `get_post_meta($id, 'sponsor_url', true)` for link destination.
4. Outputs logo in `<a rel="noopener noreferrer sponsored">` wrapper if URL present.
5. Max-height CSS class (`max-h-8 / max-h-12 / max-h-20`) applied to `<img>` for size variants.

**SCF dependency:** Requires `sponsor_url` text field registered in `inc/scf-fields.php` under the `dp_sponsor` CPT field group.

### 4.5 Sticky Mobile Footer — DEPRECATED (Use Advanced Ads Pro)

> **⚠️ DEPRECATED**: The `dp/sticky-footer` block for mobile ads has been replaced by **Advanced Ads Pro** sticky placement. See `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`.
>
> If `dp/sticky-footer` is needed for non-ad sticky content (e.g., cookie consent), it may be retained for that purpose only.

Replaces `StickyMobileFooter.tsx`. Uses the **WordPress Interactivity API** (`viewScriptModule`) for all client-side logic. The PHP render outputs a static shell; `view.js` handles the delay timer, mobile guard, GAM display call, and dismiss interaction.

**Source directory:** `wordpress-export/plugins/die-papier-blocks/src/blocks/sticky-footer/`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/sticky-footer",
  "version": "1.0.0",
  "title": "Sticky Mobile Footer Ad",
  "category": "die-papier-blocks",
  "icon": "arrow-down-alt2",
  "attributes": {
    "slotIdentifier": { "type": "string",  "default": "DP_Sticky_Mobile_Footer" },
    "delaySeconds":   { "type": "number",  "default": 3, "minimum": 0, "maximum": 30 },
    "dismissible":    { "type": "boolean", "default": true },
    "zIndex":         { "type": "number",  "default": 40 }
  },
  "supports": { "html": false, "multiple": false, "reusable": false },
  "viewScriptModule": "file:./view.js",
  "editorScript": "file:./index.js",
  "editorStyle":  "file:./index.css",
  "style":        "file:./style-index.css",
  "render":       "file:./render.php"
}
```

**Key implementation notes:**

- `multiple: false` — prevents editors placing more than one sticky footer per page.
- `reusable: false` — prevents saving to the Reusable Blocks library (position-sensitive).
- `viewScriptModule` (ESM, deferred) loads `@wordpress/interactivity` store only on the frontend; zero JS on desktop if the mobile guard in `init()` bails early.
- `render.php` uses `data-wp-interactive`, `data-wp-context`, `data-wp-init`, and `data-wp-class--is-visible` directives so the Interactivity API can toggle visibility without React.
- `style.scss` hides the element by default (`display: none`), overrides to `display: block` at `max-width: 767px`, and uses `transform: translateY(100%)` / `opacity: 0` → `.is-visible` transition.

**Interactivity API store actions:**
| Action | Directive | Description |
| :--- | :--- | :--- |
| `init` | `data-wp-init` | Guards `< 768px`; waits `delaySeconds`; sets `context.visible = true`; calls `googletag.display()`. Returns cleanup to clear timer on unmount. |
| `dismiss` | `data-wp-on--click` (× button) | Sets `context.visible = false`. |

**GAM dependency:** Assumes `googletag` global is initialised by the theme's `<head>` snippet. The slot div (`id="div-gpt-ad-sticky-footer"`) must be defined in the page-level GPT setup. `view.js` only triggers `googletag.cmd.push(googletag.display(...))` once visible — preventing wasted impressions.

## 5. Build Workflow

We use standard `@wordpress/scripts` for building blocks.

**package.json**:
```json
{
  "name": "die-papier-blocks",
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start",
    "format": "wp-scripts format",
    "lint:css": "wp-scripts lint-style",
    "lint:js": "wp-scripts lint-js"
  },
  "dependencies": {
    "@wordpress/icons": "^9.0.0",
    "@wordpress/scripts": "^26.0.0",
    "classnames": "^2.3.2"
  }
}
```

## 6. PHP Rendering Strategy

For dynamic content that needs server-side queries, use **Dynamic Rendering** (`render.php`). The `dp/slider` block's `render.php` outputs the carousel shell with Interactivity API data attributes — the actual slide content comes from InnerBlocks rendered by WordPress.

**Example pattern usage (hero-home pattern querying posts into slider slides):**

```php
<?php
/**
 * Title: Home Hero
 * Slug: die-papier/hero-home
 * Categories: die-papier-hero
 */
?>
<!-- wp:group {"align":"full","className":"is-style-section-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero">
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column {"width":"66.66%"} -->
    <div class="wp-block-column" style="flex-basis:66.66%">
      <!-- wp:dp/slider {"autoplay":true,"interval":5000,"showArrows":true,"showDots":true} -->
        <!-- Slides are InnerBlocks — each wp:group child is a slide -->
        <!-- wp:query {"queryId":1,"query":{"perPage":5,"postType":"post"},"displayLayout":{"type":"list"}} -->
          <!-- wp:post-template -->
            <!-- wp:group {"className":"slide"} -->
              <!-- wp:post-featured-image {"aspectRatio":"16/9","isLink":true} /-->
              <!-- wp:post-title {"level":2,"isLink":true} /-->
              <!-- wp:post-excerpt /-->
            <!-- /wp:group -->
          <!-- /wp:post-template -->
        <!-- /wp:query -->
      <!-- /wp:dp/slider -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"33.33%"} -->
    <div class="wp-block-column" style="flex-basis:33.33%">
      <!-- wp:heading {"level":3} --><h3>Nuusflitse</h3><!-- /wp:heading -->
      <!-- wp:query {"queryId":2,"query":{"perPage":5,"postType":"post","offset":5},"displayLayout":{"type":"list"}} -->
        <!-- wp:post-template -->
          <!-- wp:post-title {"level":4,"isLink":true,"fontSize":"small"} /-->
          <!-- wp:post-date {"fontSize":"x-small"} /-->
        <!-- /wp:post-template -->
      <!-- /wp:query -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```
