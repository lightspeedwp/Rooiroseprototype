# WordPress Custom Blocks

**Last updated**: 2026-02-27
**Version**: 1.0
**Category**: Blocks (WordPress)
**Source**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/`
**WordPress target**: Custom Gutenberg blocks registered by `die-papier-blocks` plugin

---

## 1. Purpose

Custom Gutenberg blocks created for the `die-papier-blocks` WordPress plugin. These blocks provide functionality that cannot be achieved with core WordPress blocks alone.

## 2. Active Block Inventory (9 blocks)

| Block | Directory | Purpose | Guideline |
|:------|:---------|:--------|:----------|
| `dp/competition-badge` | `competition-badge/` | Active/Closed/Winner status badge | [competition-badge.md](competition-badge.md) |
| `dp/competition-entry` | `competition-entry/` | Competition entry form with date gating | [competition-entry.md](competition-entry.md) |
| `dp/filter-bar` | `filter-bar/` | Category/tag filter chips for archives | [filter-bar.md](filter-bar.md) |
| `dp/slider` | `slider/` | Generic carousel (InnerBlocks). Replaces `dp/hero-slider` and `dp/quote-slider` | — |
| `dp/sponsor-banner` | `sponsor-banner/` | Compact sponsored content header banner | [sponsor-banner.md](sponsor-banner.md) |
| `dp/search-filters` | `search-filters/` | Faceted sidebar: taxonomy dropdowns, date ranges, post type selection | — |
| `dp/tab-bar` | `tab-bar/` | Tabbed content navigation | [tab-bar.md](tab-bar.md) |
| `dp/traffic-widget` | `traffic-widget/` | Readership/traffic statistics widget | [traffic-widget.md](traffic-widget.md) |
| `dp/weather-widget` | `weather-widget/` | Local weather embed widget | [weather-widget.md](weather-widget.md) |

## 3. Deprecated Blocks (9 — deleted from plugin)

These blocks were deleted from the plugin source and replaced with patterns or third-party plugins:

| Block | Replacement | Notes |
|:------|:-----------|:------|
| `dp/ad-mrec` | Advanced Ads plugin (`[advanced_ads]` shortcode) | All ad placements now via Advanced Ads |
| `dp/article-hero` | `hidden-article-hero.php` pattern (`core/post-title` + `core/post-featured-image` + `core/columns`) | Deprecated 2026-02-27 |
| `dp/content-hero` | `section-content-hero.php` pattern (`core/cover` block) | Deprecated 2026-02-27 |
| `dp/eedition-access` | WooCommerce Memberships content restriction | Access gating via WC Memberships |
| `dp/hero-slider` | `section-content-hero.php` pattern (`core/cover`) + `dp/slider` block | Homepage hero uses cover pattern; carousels use slider |
| `dp/newsletter-cta` | Gravity Forms (`gravityforms/form` block) | Patterns: `section-newsletter-cta.php`, `section-newsletter-cta-full.php` |
| `dp/pricing-table` | Core blocks pattern (`section-pricing-table.php`) | Built with `core/columns` + `core/group` + `core/list` |
| `dp/quote-slider` | Pattern `section-brand-quotes.php` with `dp/slider` + `core/quote` | Generic slider reused |
| `dp/sticky-footer` | Advanced Ads Pro sticky placement | No custom block needed |

### Planned Blocks (not yet on disk)

| Block | Purpose | Notes |
|:------|:--------|:------|
| `dp/subscription-cta` | Navy subscription value proposition banner | May be better served as a pattern using `core/group` with `is-style-group-navy` |

## 4. Block Architecture

Each block follows the WordPress block API structure:
```
block-name/
├── block.json          # Block registration, attributes, supports
├── edit.js / edit.tsx  # Block Editor (admin) component
├── render.php          # Server-side rendering (front-end)
├── view.js             # Client-side interactivity (Interactivity API)
├── style.scss          # Front-end styles
└── editor.scss         # Editor-only styles
```

## 5. Block Categories

All blocks register under the `die-papier-patterns` category in the block inserter.

## 6. Interactivity API Usage

Blocks requiring client-side JS (`dp/slider`, `dp/filter-bar`, `dp/tab-bar`, `dp/competition-entry`) use the WordPress Interactivity API (`@wordpress/interactivity`) for state management and DOM manipulation without jQuery.

## 7. Dependencies

- **Plugin**: `die-papier-blocks` (must be active)
- **Core deps**: `@wordpress/blocks`, `@wordpress/block-editor`, `@wordpress/interactivity`
- **Theme**: Requires `die-papier-theme` for CSS custom properties and section styles

## 8. Related Guidelines

- Block mapping: `/guidelines/wordpress-migration/block-mapping.md`
- Block styles: `/guidelines/wordpress-migration/block-styles.md`
- Plugin structure: `/guidelines/wordpress-migration/third-party-plugins/plugin-structure.md`
- Pattern strategy: `/guidelines/wordpress-migration/pattern-strategy.md`