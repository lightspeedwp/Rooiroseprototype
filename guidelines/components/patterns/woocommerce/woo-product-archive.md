# WooCommerce: Product Archive (Shop Page)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/woo-product-archive`  
**Folder**: `woocommerce/`  
**Source**: `patterns/woocommerce/woo-product-archive.php`  
**Template Types**: `archive-product`  
**Inserter**: false  
**Referenced by**: `archive-product.html` template

---

## Overview

Full product archive/shop page. Includes WooCommerce breadcrumbs, store notices, archive title, term description, result count, sorting controls, a 4-column product grid using `woocommerce/product-collection`, pagination, and a "no results" fallback message. All UI text is in Afrikaans.

## Composition

- **Layout**: Constrained, `main` tag
- **Padding**: `medium` top/bottom, `medium` blockGap
- **Grid**: 4-column flex layout via `woocommerce/product-collection`
- **Product card**: Uses `template-part` slug `product-card` (article tag)

## Block Structure

- `core/group` (`tagName: main`, constrained, padding medium)
  - `woocommerce/breadcrumbs`
  - `woocommerce/store-notices`
  - `core/query-title` (type archive, left-aligned)
  - `core/term-description` (left-aligned)
  - `core/group` (flex, space-between) — Grid controls
    - `woocommerce/product-results-count`
    - `woocommerce/catalog-sorting`
  - `woocommerce/product-collection` (perPage 12, inherit true, 4-column flex)
    - `woocommerce/product-template`
      - `core/template-part` (slug `product-card`, tagName `article`)
    - `core/query-pagination` (flex, center) — Vorige / Numbers / Volgende
    - `core/query-no-results`
      - H2 — "Geen produkte gevind nie"
      - Paragraph — "Ons kon geen produkte vind..."
      - Button (outline) — "Terug na winkel" (links to `wc_get_page_permalink('shop')`)

## Afrikaans Labels

- Pagination: "Vorige" / "Volgende"
- No results: "Geen produkte gevind nie"
- Back button: "Terug na winkel"

## React Equivalent

- WooCommerce shop page (not directly implemented in React prototype)

## Related Files

- `/guidelines/components/patterns/woocommerce/woo-product-card.md` — Product card pattern
- `/guidelines/components/templates/archive-product.md` — Template that uses this pattern
