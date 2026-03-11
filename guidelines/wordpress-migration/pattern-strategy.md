# Pattern Strategy: React to WordPress

**Status:** Draft v1.0
**Version**: 1.0
**Context:** This document defines the strategy for migrating Die Papier's React components into WordPress Block Patterns.
**Last updated**: 2026-03-01

---

## 1. Core Philosophy: "Everything is a Pattern"

In the Die Papier block theme, we prioritize **Patterns** over custom blocks for static or semi-static layouts. Custom blocks are reserved for complex dynamic functionality (e.g., interactive polls, API integrations).

### Why Patterns?
*   **Editor Experience:** Content editors can see a preview and insert pre-built layouts with one click.
*   **Maintainability:** Code lives in theme PHP files, not database content.
*   **Flexibility:** Editors can modify the pattern instance without breaking the site (unless locked).

---

## 2. Pattern Classification

We classify patterns into three types based on their synchronization behavior and usage.

### Type A: Full Sync Patterns (`sync: 'Full'`)
*   **Description:** Global patterns where changes must propagate to all instances immediately.
*   **WordPress Mechanism:** Registered with `sync_status => 'active'` (Synced Pattern).
*   **Use Cases:** 
    *   Site Headers & Footers (via Template Parts).
    *   Newsletter CTA strips.
    *   "Contact Us" banners.
*   **Migration Rule:** 1:1 mapping from React Component to a single `.php` file in `/patterns/`.

### Type B: Unsynced Patterns (`sync: 'None'`)
*   **Description:** Layout starters. The editor inserts it, then changes the content/structure freely. Changes to the source file do NOT affect existing instances.
*   **WordPress Mechanism:** Standard registered pattern.
*   **Use Cases:**
    *   Article content layouts (e.g., "Image Left + Text Right").
    *   Hero sections (where the image needs to be different every time).
    *   Grid layouts.
*   **Migration Rule:** Define generic slots (Placeholder images, Lorem Ipsum text).

### Type C: Dynamic PHP Patterns (`sync: 'Part'`)
*   **Description:** Patterns that contain PHP logic (e.g., loops, conditionals) but aren't full custom blocks.
*   **WordPress Mechanism:** Pattern file containing a Query Loop block or custom PHP logic.
*   **Use Cases:**
    *   "Latest News" grid (using Core Query Loop).
    *   "Upcoming Events" list.
*   **Migration Rule:** Use the Core Query Loop block wherever possible. If logic is too complex (e.g., complicated meta queries), wrap in a custom dynamic block.

---

## 3. Folder Structure

Patterns are organized into subfolders by category. Each subfolder maps to a registered pattern category (prefixed `die-papier-`).

```text
/die-papier-theme/
└── patterns/
    ├── archive/               # Archive query loop layouts → die-papier-archives (20 patterns)
    │   ├── archive-default.php
    │   ├── archive-category.php
    │   ├── archive-events.php
    │   └── ...
    ├── card/                  # Small modular card components → die-papier-cards (18 patterns)
    │   ├── card-post-list.php
    │   ├── card-event-grid.php
    │   └── ...
    ├── cta/                   # Call-to-action patterns → die-papier-cta (2 patterns)
    │   ├── cta.php
    │   └── cta-card.php
    ├── footer/                # Footer patterns → die-papier-footers (3 patterns)
    │   ├── footer.php
    │   ├── footer-simple.php
    │   └── footer-checkout.php
    ├── header/                # Header patterns → die-papier-headers (4 patterns)
    │   ├── header.php
    │   ├── header-transparent.php
    │   ├── header-masthead.php
    │   └── header-checkout.php
    ├── hidden/                # Utility patterns (Inserter: false) → die-papier-hidden (9 patterns)
    │   ├── hidden-404.php
    │   ├── hidden-breadcrumbs.php
    │   └── ...
    ├── icon/                  # Icon showcase patterns → die-papier-sections (8 patterns)
    │   ├── icon-benefits-section.php
    │   └── ...
    ├── navigation/            # Navigation patterns → die-papier-navigation (1 pattern)
    │   └── menu-mobile.php
    ├── page/                  # Full page layouts → die-papier-pages (35 patterns)
    │   ├── page-home.php
    │   ├── page-about.php
    │   └── ...
    ├── parts/                 # Template part helpers → die-papier-parts (2 patterns)
    │   ├── part-post-meta-top.php
    │   └── part-post-meta-bottom.php
    ├── query/                 # Reusable query loops → die-papier-queries (10 patterns)
    │   ├── query-posts-latest.php
    │   └── ...
    ├── section/               # Reusable content sections → die-papier-sections (39 patterns)
    │   ├── section-faq.php
    │   ├── homepage-nuus.php
    │   └── ...
    ├── sidebar/               # Sidebar widget patterns → die-papier-sidebars (4 patterns)
    │   ├── sidebar-multimedia.php
    │   └── ...
    └── woocommerce/           # WooCommerce pages → die-papier-woocommerce (7 patterns)
        ├── woo-cart.php
        └── ...
```

**Total: 159 patterns across 14 subfolders and 14 registered categories.**

Categories are registered in `/inc/patterns.php`. The same file also handles recursive subdirectory pattern discovery (WordPress core only auto-discovers root-level patterns).

### Hidden Pattern Convention

Patterns prefixed with `hidden-` are utility/infrastructure patterns that should NOT appear in the pattern inserter. They are used internally by templates and other patterns.

**Required header**: `Inserter: false` (or `Inserter: no`)

```php
<?php
/**
 * Title: Breadcrumbs
 * Slug: die-papier/hidden-breadcrumbs
 * Inserter: false
 */
?>
```

**Current hidden patterns**: `hidden-breadcrumbs`, `hidden-sidebar`, `hidden-sidebar-event`, `hidden-article-hero`, `hidden-comments`, `hidden-no-results`.

### Block Types Metadata

Use `Block Types` in the pattern header to associate patterns with specific blocks. This enables patterns to appear in the block-specific inserter (e.g., when inserting a Query Loop, relevant archive patterns appear):

```php
<?php
/**
 * Title: Kategorie Argief
 * Slug: die-papier/archive-category
 * Categories: posts
 * Block Types: core/query
 * Inserter: false
 */
?>
```

**Common Block Types mappings**:
| Pattern prefix | Block Type |
|:---|:---|
| `archive-*` | `core/query` |
| `section-newsletter-*` | `gravityforms/form` |
| `header-*` | `core/template-part/header` |
| `footer-*` | `core/template-part/footer` |

---

## 4. File Header Standard

Every pattern file MUST include a standard WordPress file header.

**Template:**
```php
<?php
/**
 * Title: [Human Readable Name]
 * Slug: dp/[kebab-case-slug]
 * Categories: [comma-separated-slugs]
 * Description: [Short description for the Inserter]
 * Keywords: [search, terms]
 * Viewport Width: [width-in-px] (Optional, for preview)
 */
?>
<!-- Block Markup Below -->
```

**Example:**
```php
<?php
/**
 * Title: Home Hero Section
 * Slug: dp/section-hero-home
 * Categories: die-papier-sections, hero
 * Description: Large hero with featured post on left and list on right.
 */
?>
<div class="wp-block-group alignfull has-brand-navy-background-color">
    <!-- ... -->
</div>
```

---

## 5. Parameterization Strategy (Variables)

Since patterns are PHP files, we can use variables to make them cleaner, though WordPress Core doesn't natively support "Pattern Props" in the UI yet.

**Strategy:**
1.  Define default variables at the top of the PHP file (after the header).
2.  Use these variables in the HTML markup.
3.  *Future Proofing:* When WordPress adds Pattern Overrides, these will map easily.

**Example:**
```php
<?php
/**
 * Title: Newsletter CTA
 * Slug: dp/section-newsletter
 */

$title = 'Teken in op ons nuusbrief';
$button_text = 'Teken In';
?>
<div class="wp-block-group">
    <h2><?php echo esc_html($title); ?></h2>
    <div class="wp-block-buttons">
        <div class="wp-block-button">
            <a class="wp-block-button__link"><?php echo esc_html($button_text); ?></a>
        </div>
    </div>
</div>
```

---

## 6. CSS Class Mapping (React to WP)

Use the **Styles** tab in the Migration Tool to find exact mappings.

| React / Tailwind | WordPress Core Class | Custom Utility (`theme.css`) |
| :--- | :--- | :--- |
| `container mx-auto` | `.alignwide` or `.alignfull` | N/A |
| `bg-brand-navy` | `.has-brand-navy-background-color` | N/A |
| `text-white` | `.has-white-color` | N/A |
| `shadow-lg` | `.has-medium-shadow` | N/A (via `theme.json`) |
| `rounded-xl` | N/A | `.is-style-rounded-xl` (Custom) |
| `grid grid-cols-3` | `.wp-block-columns` | `.is-style-grid-3` (Custom) |

---

## 7. Migration Workflow

1.  **Analyze:** Open the React component in VS Code.
2.  **Classify:** Determine if it's Type A, B, or C.
3.  **Map:** Identify which sub-components (Buttons, Images) map to Core Blocks.
4.  **Scaffold:** Create the `.php` file in `/patterns/` with the standard header.
5.  **Build:** Write the block markup (avoiding raw HTML where possible).
6.  **Verify:** Check mobile responsiveness using Core Group/Stack/Row blocks.

---

## 8. Yoast SEO Blocks in Patterns

Two Yoast SEO blocks are used across multiple patterns:

### `yoast/faq-block`

**Used in**: All FAQ patterns (18 page-level FAQ sections + per-competition FAQs + dedicated FAQ page).

**Why**: Provides Schema.org `FAQPage` structured data automatically, enabling rich FAQ snippets in Google search results. See `/guidelines/components/faq-sections.md` for full migration details.

**Pattern example**:
```php
<!-- wp:group {"align":"full","className":"is-style-section-faq",
     "layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-faq">
  <!-- wp:heading {"level":2} -->
  <h2>Algemene vrae</h2>
  <!-- /wp:heading -->

  <!-- wp:yoast/faq-block -->
  <!-- Question/answer pairs here -->
  <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->
```

**Section style support**: `section-faq` (light bg), `section-navy`, `section-red` (dark bg variants).

### `yoast-seo/breadcrumbs`

**Used in**: Page templates with breadcrumb navigation — typically placed in the header area or just below it.

**Pattern example**:
```php
<!-- wp:group {"className":"is-style-section-breadcrumb",
     "layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-section-breadcrumb">
  <!-- wp:yoast-seo/breadcrumbs /-->
</div>
<!-- /wp:group -->
```

**Section style support**: `section-breadcrumb` (standalone strip), `section-header` (within header), `section-hero`, `section-navy` (dark bg variants).

### Block Inventory

All patterns must use blocks from this approved inventory:

| Category | Blocks |
|:---|:---|
| Core content | `core/heading`, `core/paragraph`, `core/image`, `core/gallery`, `core/list`, `core/quote`, `core/pullquote` |
| Core layout | `core/group`, `core/columns`, `core/column`, `core/buttons`, `core/button`, `core/separator`, `core/spacer` |
| Core interactive | `core/details`, `core/search`, `core/navigation`, `core/social-links` |
| Core query | `core/query`, `core/post-template`, `core/post-title`, `core/post-date`, `core/post-excerpt`, `core/post-featured-image`, `core/post-terms`, `core/post-author-name`, `core/query-pagination`, `core/query-no-results` |
| Core comments | `core/comments`, `core/comments-title`, `core/comment-template`, `core/comment-author-name`, `core/comment-date`, `core/comment-content`, `core/comment-edit-link`, `core/comment-reply-link`, `core/post-comments-form` |
| Core site | `core/site-title`, `core/site-logo`, `core/site-tagline` |
| Yoast SEO | `yoast/faq-block`, `yoast-seo/breadcrumbs` |
| Custom (plugin) | `dp/slider`, `dp/sponsor-banner`, `dp/subscription-cta`, `dp/competition-badge`, `dp/competition-entry`, `dp/filter-bar`, `dp/tab-bar` |
| Advanced Ads | `advanced-ads/ad-block` (all ad placements — replaces `dp/ad-unit` and `dp/sticky-footer`) |
| Advanced Query Loop | `core/query` with `namespace: 'advanced-query-loop'` (variation — adds taxonomy queries, exclude posts, meta queries, ordering, caching) |
| Gravity Forms | `gravityforms/form` (newsletter signups, polls via GF Polls add-on, contact forms) |
| WooCommerce | `woocommerce/product-button`, `woocommerce/product-image`, `woocommerce/product-price` |

---

## 9. Query Loop Patterns (DRY Principle)

> **Added 2026-02-27** — Based on template DRY audit (`/reports/template-dry-aql-audit.md`).

### 9.1 Principle: All Query Loops Live in Patterns

**Templates must NOT contain inline query loop blocks.** Every `core/query` block (including AQL variations) must live inside a pattern. Templates reference patterns via `<!-- wp:pattern {"slug":"..."} /-->`.

This enables:
- **DRY**: One query loop definition, used by one or more templates
- **Maintainability**: Edit the pattern file, all templates update
- **Editor UX**: Patterns appear in the Pattern Library for reuse
- **AQL integration**: Centralised query configuration

### 9.2 Naming Convention

| Prefix | Purpose | Examples |
|:---|:---|:---|
| `archive-*` | Full-page archive layouts (header + query + sidebar + pagination) | `archive-category`, `archive-events`, `archive-tag` |
| `section-*` | Reusable content sections (e.g., related articles, sponsor articles) | `section-related-articles`, `section-sponsor-articles` |
| `card-*` | Small card-level meta components used inside post-template | `card-event-meta`, `card-obituary-meta` |
| `hidden-*` | Utility patterns (no-results, breadcrumbs) — hidden from inserter | `hidden-no-results`, `hidden-breadcrumbs` |
| `page-*` | Full-page layouts | `page-home`, `page-about` |

### 9.3 Template Structure

Every template should follow this minimal structure:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:template-part {"slug":"breadcrumbs"} /-->
    <!-- wp:pattern {"slug":"die-papier/archive-category"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### 9.4 Breadcrumbs

Breadcrumbs are managed as a **template part** (`parts/breadcrumbs.html`) that references the `hidden-breadcrumbs` pattern (Yoast SEO breadcrumbs). All templates use `<!-- wp:template-part {"slug":"breadcrumbs"} /-->`.

### 9.5 Query Loop Pattern Inventory

| Pattern | Post Type | Query Type | AQL? | Notes |
|:---|:---|:---|:---|:---|
| `archive-default` | `post` | inherit | No | Standard post archive |
| `archive-category` | `post` | inherit | No | Category archive with sidebar |
| `archive-tag` | `post` | inherit | No | Tag archive with tag cloud sidebar |
| `archive-author` | `post` | inherit | No | Author archive with avatar header |
| `archive-search` | `post` | inherit | No | Search results |
| `archive-events` | `dp_event` | custom | **Yes** | Meta ordering by event_date ASC |
| `archive-obituaries` | `dp_obituary` | custom | **Yes** | Date DESC ordering |
| `archive-competitions` | `dp_competition` | custom | **Yes** | Date DESC, ready for status filter |
| `archive-eeditions` | `dp_eedition` | custom | **Yes** | Date DESC, ready for issue_date ordering |
| `archive-multimedia` | `dp_multimedia` | inherit | No | Grid layout |
| `archive-sponsors` | `dp_sponsor` | inherit | No | Grid layout |
| `archive-event-category` | `dp_event` | inherit | No | Event taxonomy archive |
| `archive-multimedia-category` | `dp_multimedia` | inherit | No | Multimedia taxonomy archive |
| `archive-sponsor-tier` | `dp_sponsor` | inherit | No | Sponsor tier taxonomy archive |
| `section-related-articles` | `post` | custom | **Yes** | Exclude current, cached |
| `section-sponsor-articles` | `post` | custom | **Yes** | Exclude current, cached |
| `page-home` sections | various | custom | **Yes** | Deduplication + caching |
| `hidden-sidebar` (trending) | `post` | custom | **Yes** | comment_count ordering, cached |