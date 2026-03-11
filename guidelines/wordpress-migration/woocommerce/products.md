# WooCommerce Products

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Overview

Die Papier uses WooCommerce primarily for **e-edition subscriptions**, not a traditional product catalogue. Standard WooCommerce product blocks are NOT used for e-editions (which use the custom `dp_eedition` post type with custom archive/single templates).

However, the following product-related patterns exist for the standard WooCommerce product pages (single product, archive, search).

---

## Product Blocks (NOT USED for E-Editions)

These blocks are available but NOT used in e-edition templates:

- `woocommerce/product-collection`
- `woocommerce/product-template`
- `woocommerce/product-image`
- `woocommerce/product-title`
- `woocommerce/product-price`
- `woocommerce/add-to-cart-button`
- `woocommerce/product-button`
- `woocommerce/product-gallery`
- `woocommerce/product-meta`
- `woocommerce/product-details`
- `woocommerce/product-summary`
- `woocommerce/single-product`
- `woocommerce/related-products`

**Why?** E-editions use custom post type (`dp_eedition`) with custom archive template (`archive-dp_eedition.html`) and custom single template (`single-dp_eedition.html`). E-edition cards are built with core blocks, not WooCommerce product blocks.

---

## Single Product Pattern (`woo-single-product.php`)

**Slug**: `die-papier/woo-single-product`
**Category**: `die-papier-woocommerce`
**Used in**: `single-product.html`
**Template Types**: `single-product`
**Inserter**: `false`

Full single product page layout (pattern-first, includes header/footer) with:
- `woocommerce/breadcrumbs` — product navigation breadcrumb trail
- `woocommerce/store-notices` — session messages
- Two-column layout: product image (480px) + sticky product details
- `woocommerce/product-image` — product gallery with rounded corners
- `wp:post-title` — product name (level 1)
- `woocommerce/product-price` — product price
- `wp:post-excerpt` — product short description
- `woocommerce/add-to-cart-with-options` — add-to-cart form (uses template parts for simple/variable products)
- Trust badges: "Veilige betaling via Payfast", "14-dag geld-terug-waarborg"
- `woocommerce/product-details` (is-style-minimal) — product description/reviews tabs
- `woocommerce/product-meta` — SKU, product categories

**Architecture Note**: Learned from Ollie theme's `woo-single-product.php`. Adapted for Die Papier's e-edition subscription products with South African trust signals (Payfast, ZAR pricing). Uses sticky product info section for scroll persistence.

---

## Subscription Pricing Table Pattern (`woo-subscription-pricing-table.php`)

**Slug**: `die-papier/woo-subscription-pricing-table`
**Category**: `die-papier-woocommerce`
**Used in**: `/inteken/e-uitgawe` page (subscribe page)

Subscription pricing table with 3 tiers:
- **Tier 1 (Maandeliks)**: R140/month, 4 issues, R35 per issue
- **Tier 2 (Kwartaalliks)** — **FEATURED**: R390/3 months, 12 issues, R32.50 per issue, Save R30
- **Tier 3 (Jaarliks)**: R1400/year, 52 issues, ~R26.92 per issue, Save R420

**Features**:
- 3-column grid layout (responsive, stacks on mobile)
- Featured tier: "GEWILDSTE KEUSE" badge, navy card background (`is-style-card-navy`)
- Each tier: Heading, price, billing frequency, features list, CTA button
- Trust signals footer: "Veilige betaling deur Payfast / 14-dag geld-terug-waarborg / Kanselleer enige tyd"
- Uses core blocks only (Group, Heading, Paragraph, List, Buttons) — NO WooCommerce blocks

**Pricing Accuracy**: All pricing values are sourced from `/guidelines/pricing.md`.

---

## Related Files

- `/patterns/woocommerce/woo-single-product.php`
- `/patterns/woocommerce/woo-subscription-pricing-table.php`
- `/templates/single-product.html`
- `/parts/simple-product-add-to-cart-with-options.html`
- `/parts/variable-product-add-to-cart-with-options.html`

---

**End of Products Guide**
