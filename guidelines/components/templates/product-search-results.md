# Template: product-search-results.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/product-search-results.html`
**React equivalent**: None (WooCommerce-native)

---

## 1. Purpose

WooCommerce product search results template. Handles search queries scoped to the `product` post type (i.e. searching within the WooCommerce product catalog). Pattern-first: delegates to a single `wp:pattern` reference. For Die Papier's subscription model, this is a low-traffic template — most e-edition discovery happens through the archive and single-edition browse pages.

## 2. Structure

```
header (template part)
└─ main (constrained, 1440px)
   ├─ breadcrumbs (template part — Yoast SEO breadcrumbs)
   └─ pattern: die-papier/woo-product-search
      └─ (search header, product-collection block with query filter)
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------|
| Product Collection | `woocommerce/product-collection` | Filtered product query |
| Product Template | `woocommerce/product-template` | Iterates over results |
| No Results | `core/query-no-results` | Empty state message |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | Navigation trail |

## 5. Patterns Used

- `die-papier/woo-product-search` — search results layout

## 6. Layout

- Type: `constrained`
- Content size: `1440px`
- Spacing: `padding.top: spacing|80`, inner `blockGap: spacing|50`

## 7. WP Hierarchy Position

**Priority**: P1 — `product-search-results.html` > `search.html` > `index.html`

Matched when: current request is a WooCommerce product search result page.

## 8. Related Files

- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/wordpress-migration/woocommerce/product-collection.md` — Product collection block guide
- `/guidelines/components/templates/archive-product.md` — Product archive template
- `/wordpress-export/themes/die-papier-theme/templates/product-search-results.html`
