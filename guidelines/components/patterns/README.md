# Pattern System

**Last updated**: 2026-02-28
**Category**: Patterns
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/`

---

## Overview

Die Papier uses a **composition-first** pattern architecture. Patterns are the primary building blocks of the WordPress FSE theme — templates contain no inline markup, only pattern references. This ensures DRY (Don't Repeat Yourself) layouts where every piece of UI is defined once and reused everywhere.

**Total patterns**: 120+ files across 10 subfolders.

---

## Folder Structure

```
patterns/
├── archive/       (20 files) — Full-page archive layouts for listings
├── card/          (17 files) — Reusable card components for query loops
├── cta/           (2 files)  — Call-to-action blocks
├── footer/        (2 files)  — Footer template parts
├── header/        (3 files)  — Header template parts
├── hidden/        (8 files)  — Utility/infrastructure patterns (Inserter: false)
├── page/          (38 files) — Full-page layouts for static pages
├── query/         (10 files) — Query loop configurations (AQL-powered)
├── section/       (21 files) — Reusable section blocks
└── sidebar/       (4 files)  — Sidebar widget compositions
```

---

## Composition Model

The pattern system follows a **3-tier composition** model:

### Tier 1: Atomic Patterns (Cards, Meta, Utilities)

Small, single-purpose patterns used inside query loops or other patterns. Always have `Inserter: false` — they're building blocks, not standalone insertable patterns.

- **Card patterns** (`card/`): Post template layouts for query loops
- **Meta patterns** (`card/*-meta*.php`): PHP-rendered CPT metadata (event dates, competition prizes, obituary details)
- **Hidden patterns** (`hidden/`): Infrastructure (404, no-results, breadcrumbs, comments)

### Tier 2: Section & Query Patterns

Mid-level patterns that compose Tier 1 patterns into functional sections:

- **Query patterns** (`query/`): AQL-powered query configurations that wrap card patterns
- **Section patterns** (`section/`): Reusable content sections (newsletter CTAs, related articles, sponsor grids, pricing tables)
- **Sidebar patterns** (`sidebar/`): Sidebar compositions with widgets, CTAs, and mini-queries

### Tier 3: Page & Archive Patterns

Full-page layouts that compose Tier 1 and Tier 2 patterns:

- **Page patterns** (`page/`): Complete page layouts for static pages
- **Archive patterns** (`archive/`): Complete listing pages with query loops, pagination, and sidebars

---

## Pattern Registration

Patterns are auto-discovered via `dp_register_subdirectory_patterns()` in `/inc/patterns.php`. This function:

1. Recursively scans all 10 subfolders
2. Parses standard WordPress pattern headers (`Title`, `Slug`, `Categories`, `Keywords`, `Description`, `Inserter`, `Block Types`, `Post Types`, `Template Types`)
3. Registers each pattern with `register_block_pattern()`
4. Runs on the `init` hook

**No manual registration needed** — drop a `.php` file in any subfolder and it's automatically available.

---

## AQL Integration (Advanced Query Loop)

All query patterns use the **Advanced Query Loop** plugin (`namespace: "advanced-query-loop"`) instead of raw `WP_Query` calls. Benefits:

- GUI-configurable query parameters in the block editor
- Built-in transient caching (`enable_caching: true`)
- Article deduplication via `aql_query_vars` PHP filter
- Taxonomy queries, meta queries, date queries — all without custom PHP
- Standard `core/post-template` InnerBlocks (no custom render needed)

See [Advanced Query Loop Integration Guide](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) for full details.

---

## Naming Conventions

| Folder | Prefix | Example |
|:---|:---|:---|
| archive/ | `archive-` | `archive-events.php` |
| card/ | `card-` | `card-post-grid-3col.php` |
| cta/ | `cta-` | `cta-card.php` |
| footer/ | `footer-` | `footer-simple.php` |
| header/ | `header-` | `header-transparent.php` |
| hidden/ | `hidden-` | `hidden-no-results.php` |
| page/ | `page-` | `page-home.php` |
| query/ | `query-` | `query-posts-latest.php` |
| section/ | `section-` | `section-newsletter-cta.php` |
| sidebar/ | `sidebar-` | `sidebar-eedition-promo.php` |

**Slug format**: `die-papier/{filename-without-extension}` (e.g., `die-papier/card-post-grid-3col`)

---

## Pattern Header Template

Every pattern file must include a standard WordPress pattern header:

```php
<?php
/**
 * Title: Human-Readable Title (Afrikaans)
 * Slug: die-papier/pattern-slug
 * Categories: category-name
 * Keywords: keyword1, keyword2, keyword3
 * Description: Brief description of what this pattern does.
 * Inserter: false
 *
 * @package die-papier-theme
 */
?>
```

### Header Rules

- **Title**: Afrikaans where possible (e.g., "Jongste Artikels" not "Latest Posts")
- **Slug**: Always prefixed with `die-papier/`
- **Categories**: Match the subfolder name (e.g., `card`, `query`, `archive`)
- **Inserter: false**: Required for all card, meta, hidden, and query patterns
- **Description**: One line explaining purpose and usage context

---

## Section Styles

Patterns use WordPress block style variations via `is-style-*` classes:

- `is-style-card` — Standard card with border, padding, rounded corners
- `is-style-card-hover` — Card with hover elevation effect
- `is-style-section-muted` — Muted background section
- `is-style-section-navy` — Navy background section (brand-navy)
- `is-style-section-red` — Red accent section (brand-red)
- `is-style-hero-slider` — Full-width hero slider layout

See [Section Styles Architecture](/guidelines/SECTION-STYLES-CSS-TO-JSON.md) for all 24 styles.

---

## Pattern Composition Examples

### Archive page composing card + sidebar patterns

```html
<!-- wp:columns -->
    <!-- wp:column {"width":"66.66%"} -->
        <!-- wp:query -->
            <!-- wp:post-template -->
                <!-- wp:pattern {"slug":"die-papier/card-post-list"} /-->
            <!-- /wp:post-template -->
            <!-- wp:query-pagination /-->
        <!-- /wp:query -->
    <!-- /wp:column -->
    <!-- wp:column {"width":"33.33%"} -->
        <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->
    <!-- /wp:column -->
<!-- /wp:columns -->
```

### Homepage section composing query + card patterns

```html
<!-- wp:pattern {"slug":"die-papier/query-posts-category"} /-->
```

Which internally renders:

```html
<!-- wp:query {"query":{"taxQuery":{"category":["sport"]}}} -->
    <!-- wp:post-template -->
        <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
    <!-- /wp:post-template -->
<!-- /wp:query -->
```

---

## Category Documentation

Each subfolder has its own README with detailed pattern specs:

- [Archive Patterns](archives.md) — 20 archive listing layouts
- [Card Patterns](card/README.md) — 17 reusable card components
- [CTA Patterns](cta/README.md) — 2 call-to-action blocks
- [Footer Patterns](footer/README.md) — 2 footer variants
- [Header Patterns](header/README.md) — 3 header variants
- [Hidden Patterns](hidden/README.md) — 8 utility/infrastructure patterns
- [Homepage Patterns](homepage.md) — Homepage composition spec
- [Page Patterns](page/README.md) — 38 full-page layouts
- [Query Patterns](query/README.md) — 10 AQL-powered query loops
- [Section Patterns](sections.md) — 21 reusable section blocks
- [Sidebar Patterns](sidebar/README.md) — 4 sidebar compositions

---

## Dependencies

| Dependency | Required By | Notes |
|:---|:---|:---|
| Advanced Query Loop (AQL) | All query patterns | Free plugin by Ryan Welcher |
| Yoast SEO | FAQ sections, breadcrumbs | `yoast/faq-block`, `yoast-seo/breadcrumbs` |
| Gravity Forms | Newsletter, contact forms | `gravityforms/form` block |
| WooCommerce | E-edition commerce pages | Cart, checkout, my-account patterns |
| Advanced Ads | Ad placements | `[advanced_ads]` shortcodes in sidebars |
| Secure Custom Fields (SCF) | CPT meta patterns | Event dates, competition prizes, obituary details |