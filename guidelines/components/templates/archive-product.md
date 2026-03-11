# Template: archive-product.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/archive-product.html`
**React equivalent**: `EEditions.tsx` (archive listing)

---

## 1. Purpose

WooCommerce product archive template. Overrides `archive.html` for the `product` post type. Pattern-first: delegates entirely to a single `wp:pattern` reference. For Die Papier this serves as the e-editions subscription landing page — not a traditional product grid.

## 2. Structure

```
header (template part)
└─ main (constrained, 1440px)
   ├─ breadcrumbs (template part — Yoast SEO breadcrumbs)
   └─ pattern: die-papier/woo-archive-product
      └─ (hero section, subscription tiers, product collection/query)
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------|
| Product Collection | `woocommerce/product-collection` | Query products with filters |
| Product Template | `woocommerce/product-template` | Iterates over products |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | Navigation trail |

**Note**: Die Papier does not use a traditional product grid here — subscriptions are presented as pricing cards, not as WC product items. The `product-collection` block is available but may be replaced by a pricing table pattern.

## 5. Patterns Used

- `die-papier/woo-archive-product` — subscription tiers layout

## 6. Layout

- Type: `constrained`
- Content size: `1440px`
- Spacing: `padding.top: spacing|80`, inner `blockGap: spacing|60`

## 7. WP Hierarchy Position

**Priority**: P1 — `archive-product.html` > `archive.html` > `index.html`

Matched when: current post type = `product` AND request is for an archive view (e.g. `/e-uitgawes/`).

## 8. Related Files

- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/wordpress-migration/woocommerce/product-collection.md` — Product collection block guide
- `/guidelines/wordpress-migration/woocommerce/products.md` — Product blocks reference
- `/guidelines/components/templates/product-search-results.md` — Product search results template
- `/wordpress-export/themes/die-papier-theme/templates/archive-product.html`
