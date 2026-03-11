# WooCommerce: Product Search Results

**Last updated**: 2026-03-04  
**Slug**: `die-papier/woo-product-search`  
**Folder**: `woocommerce/`  
**Source**: `patterns/woocommerce/woo-product-search.php`  
**Template Types**: `product-search-results`  
**Inserter**: false  
**Referenced by**: `product-search-results.html` template

---

## Overview

Product search results page. Nearly identical to the product archive but uses `search` type query title instead of `archive`. Shows WooCommerce breadcrumbs, store notices, search title, 4-column product grid, pagination, and an Afrikaans "no results" fallback.

## Composition

- **Layout**: Constrained, `main` tag
- **Padding**: `medium` top/bottom, `medium` blockGap
- **Grid**: 4-column flex layout via `woocommerce/product-collection` (inherit true)

## Block Structure

- `core/group` (`tagName: main`, constrained, padding medium)
  - `woocommerce/breadcrumbs`
  - `woocommerce/store-notices`
  - `core/query-title` (type **search**, left-aligned)
  - `core/group` (flex, space-between) — Grid controls
    - `woocommerce/product-results-count`
    - `woocommerce/catalog-sorting`
  - `woocommerce/product-collection` (perPage 12, inherit true, 4-column flex)
    - `woocommerce/product-template`
      - `core/template-part` (slug `product-card`, tagName `article`)
    - `core/query-pagination` — Vorige / Numbers / Volgende
    - `core/query-no-results`
      - H2 — "Geen soekresultate gevind nie"
      - Paragraph — "Ons kon geen produkte vind..."
      - Button (outline) — "Terug na winkel"

## Differences from Product Archive

- Query title type: `search` (not `archive`)
- No `term-description` block
- No results heading: "Geen soekresultate gevind nie" (not "Geen produkte gevind nie")

## Related Files

- `/guidelines/components/patterns/woocommerce/woo-product-archive.md` — Similar archive pattern
- `/guidelines/components/templates/product-search-results.md` — Template
