# Page Composition Guide

**Last updated**: 2026-02-28
**Category**: Patterns (Pages)

---

## Overview

This guide documents how page patterns are composed from lower-tier patterns, and provides best practices for creating new page patterns in the Die Papier theme.

---

## Composition Layers

### Layer 1: Template → Page Pattern

WordPress FSE templates are thin wrappers that reference a single page pattern:

```html
<!-- templates/page-about.html -->
<!-- wp:template-part {"slug":"header"} /-->
<!-- wp:pattern {"slug":"die-papier/page-about"} /-->
<!-- wp:template-part {"slug":"footer"} /-->
```

### Layer 2: Page Pattern → Section/Query Patterns

Page patterns compose multiple section and query patterns:

```html
<!-- patterns/page/page-about.php -->
<!-- wp:pattern {"slug":"die-papier/section-content-hero"} /-->
<!-- wp:pattern {"slug":"die-papier/hidden-breadcrumbs"} /-->
<!-- Main content blocks -->
<!-- wp:pattern {"slug":"die-papier/section-team-grid"} /-->
<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta-full"} /-->
```

### Layer 3: Section/Query Patterns → Card Patterns

Query and section patterns compose card patterns inside post templates:

```html
<!-- patterns/query/query-posts-latest.php -->
<!-- wp:query -->
    <!-- wp:post-template -->
        <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
    <!-- /wp:post-template -->
<!-- /wp:query -->
```

---

## Standard Page Skeleton

Use this skeleton when creating new page patterns:

```php
<?php
/**
 * Title: [Afrikaans Page Title]
 * Slug: die-papier/page-[slug]
 * Categories: page
 * Keywords: [keywords]
 * Description: [description]
 */
?>

<!-- Hero Section (optional — use for marketing/landing pages) -->
<!-- wp:cover {"overlayColor":"brand-navy","dimRatio":60,"minHeight":300,"align":"full"} -->
<div class="wp-block-cover alignfull">
    <span class="wp-block-cover__background has-brand-navy-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:heading {"level":1,"textAlign":"center","textColor":"base"} -->
        <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color">[Page Title]</h1>
        <!-- /wp:heading -->
    </div>
</div>
<!-- /wp:cover -->

<!-- Breadcrumbs -->
<!-- wp:pattern {"slug":"die-papier/hidden-breadcrumbs"} /-->

<!-- Main Content -->
<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
    <!-- Page-specific content here -->
</div>
<!-- /wp:group -->

<!-- FAQ Section (optional — use Yoast FAQ block for Schema.org) -->
<!-- wp:yoast/faq-block -->
<!-- /wp:yoast/faq-block -->

<!-- Newsletter CTA (optional — for engagement pages) -->
<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta-full"} /-->
```

---

## Two-Column Layout (with Sidebar)

For pages that need a sidebar (e.g., submission pages, content pages):

```html
<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
    <!-- wp:column {"width":"66.66%"} -->
    <div class="wp-block-column" style="flex-basis:66.66%">
        <!-- Main content -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"33.33%"} -->
    <div class="wp-block-column" style="flex-basis:33.33%">
        <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->
        <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->
    </div>
    <!-- /wp:column -->
</div>
<!-- /wp:columns -->
```

---

## Best Practices

1. **Never inline card markup in page patterns** — always use `<!-- wp:pattern -->` references to card patterns
2. **Use section patterns for reusable blocks** — newsletter CTAs, sponsor grids, related articles
3. **Use Yoast FAQ blocks** for FAQ sections — generates Schema.org structured data automatically
4. **Include breadcrumbs** on all non-homepage pages via `hidden-breadcrumbs`
5. **Use Gravity Forms** for all form embeds — never hardcode form HTML
6. **Keep content in Afrikaans** — all user-facing text in page patterns must be Afrikaans
7. **Apply section styles** via `is-style-section-*` classes on `core/group` blocks
8. **Use spacing presets** — never hardcode pixel values, use `var:preset|spacing|*` tokens

---

## Content Sources

Page pattern content should be sourced from:

1. **React source components** — `/src/app/components/pages/` and `/src/app/data/`
2. **Content export files** — `/guidelines/content/master-content-export.md`
3. **WordPress data model** — `/guidelines/data-structure/wordpress-data-model.md`

When recreating a page pattern from React, verify all content (especially Afrikaans text, pricing, contact details) against the original React component for accuracy.
