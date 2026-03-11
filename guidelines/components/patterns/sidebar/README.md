# Sidebar Patterns

**Last updated**: 2026-02-28
**Category**: Patterns (Sidebar)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/sidebar/`
**Total**: 4 patterns

---

## Overview

Sidebar patterns are widget compositions used in the 33% column of two-column archive and single-post layouts. They combine CTAs, mini-queries, ad placements, and newsletter signups.

---

## Pattern Inventory

| Pattern | Slug | Used In | Content |
|:---|:---|:---|:---|
| sidebar-eedition-promo | `die-papier/sidebar-eedition-promo` | Post archives, single posts | Latest e-edition cover + "Lees Nou" CTA (PHP-rendered) |
| sidebar-competition-card | `die-papier/sidebar-competition-card` | Post/event sidebars | Active competition promo card |
| sidebar-multimedia | `die-papier/sidebar-multimedia` | Multimedia archives/singles | Submit CTA, categories, ad slot, newsletter |
| sidebar-obituary | `die-papier/sidebar-obituary` | Obituary archives/singles | Submit CTA, recent obituaries, condolence policy, newsletter |

---

## Sidebar Composition in Templates

Sidebars are composed into archive/page patterns via columns:

```html
<!-- wp:columns -->
    <!-- wp:column {"width":"66.66%"} -->
        <!-- Main content / query loop -->
    <!-- /wp:column -->
    <!-- wp:column {"width":"33.33%"} -->
        <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->
        <!-- wp:pattern {"slug":"die-papier/sidebar-competition-card"} /-->
        <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->
    <!-- /wp:column -->
<!-- /wp:columns -->
```

---

## Notes

- `sidebar-eedition-promo` uses PHP (`WP_Query`) to fetch the latest e-edition. This is one of the few patterns with PHP rendering logic.
- Sidebar patterns can be combined — a typical sidebar stacks 2-3 sidebar patterns plus a newsletter CTA.
- Ad placements in sidebars use `[advanced_ads]` shortcodes managed by the Advanced Ads plugin.
- The `hidden-sidebar` and `hidden-sidebar-event` patterns in the `hidden/` folder are older sidebar compositions that may be replaced by these more specific sidebar patterns.
