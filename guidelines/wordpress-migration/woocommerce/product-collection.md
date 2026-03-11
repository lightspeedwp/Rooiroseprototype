# WooCommerce Product Collection & Archives

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Overview

These patterns provide standard WooCommerce product catalog pages using the `woocommerce/product-collection` block. They were added for completeness (Ollie theme alignment) even though Die Papier's primary commerce flow uses the custom `dp_eedition` post type.

---

## Product Card Pattern (`woo-product-card.php`)

**Slug**: `die-papier/woo-product-card`
**Category**: `die-papier-woocommerce`
**Inserter**: `false`
**Used in**: `product-card.html` template part (via pattern reference)

Reusable product card for product archives and search results (Ollie architecture — part wraps pattern):
- Product image (3:4 aspect ratio from theme.json, rounded corners)
- Sale badge (positioned inside image, Die Papier red)
- Product title (h3, linked)
- Product price (muted contrast-2)
- Full-width add-to-cart button

---

## Product Archive Pattern (`woo-product-archive.php`)

**Slug**: `die-papier/woo-product-archive`
**Category**: `die-papier-woocommerce`
**Template Types**: `archive-product`
**Inserter**: `false`

Full product catalog archive page with:
- Header/footer template parts
- `woocommerce/breadcrumbs`
- `woocommerce/store-notices`
- Archive title and term description
- Results count + catalog sorting (flex row)
- `woocommerce/product-collection` (4 columns, uses `product-card` template part)
- Pagination (Vorige/Volgende)
- No-results state: "Geen produkte gevind nie" + "Terug na winkel" button

---

## Product Search Pattern (`woo-product-search.php`)

**Slug**: `die-papier/woo-product-search`
**Category**: `die-papier-woocommerce`
**Template Types**: `product-search-results`
**Inserter**: `false`

Product search results page with:
- Header/footer template parts
- `woocommerce/breadcrumbs`
- `woocommerce/store-notices`
- Search title (`query-title type: search`)
- Results count + catalog sorting
- `woocommerce/product-collection` (4 columns, uses `product-card` template part)
- Pagination (Vorige/Volgende)
- No-results state: "Geen soekresultate gevind nie" + "Terug na winkel" button

---

## Related Files

- `/patterns/woocommerce/woo-product-card.php`
- `/patterns/woocommerce/woo-product-archive.php`
- `/patterns/woocommerce/woo-product-search.php`
- `/templates/archive-product.html`
- `/templates/product-search-results.html`
- `/parts/product-card.html`

---

**End of Product Collection Guide**
