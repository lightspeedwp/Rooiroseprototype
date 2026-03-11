# WooCommerce Patterns

**Last updated**: 2026-03-03
**Category**: Patterns (WooCommerce)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/`
**Total**: 14 patterns

---

## Overview

WooCommerce patterns provide the specialized UI for the e-edition commerce experience. They align with the Ollie theme's pattern-first approach, ensuring that all WooCommerce templates remain lean.

---

## Pattern Inventory

### Commerce Core (4)

| Pattern | Slug | Purpose | Template Used |
|:---|:---|:---|:---|
| woo-cart | `die-papier/woo-cart` | Full Shopping Cart | page-cart.html |
| woo-checkout | `die-papier/woo-checkout` | Checkout Interface | page-checkout.html |
| woo-empty-cart | `die-papier/woo-empty-cart` | Empty Cart State | page-cart.html |
| woo-order-confirmation | `die-papier/woo-order-confirmation` | Thank You Page | order-confirmation.html |

### Account & Products (4)

| Pattern | Slug | Purpose | Template Used |
|:---|:---|:---|:---|
| woo-my-account | `die-papier/woo-my-account` | User Dashboard | page-my-account.html |
| woo-single-product | `die-papier/woo-single-product` | Product Detail | single-product.html |
| woo-product-archive | `die-papier/woo-product-archive` | Catalog Listing | archive-product.html |
| woo-product-search | `die-papier/woo-product-search` | Shop Search Results | product-search-results.html |

### Atomic Elements (3)

| Pattern | Slug | Purpose | Used In |
|:---|:---|:---|:---|
| woo-mini-cart | `die-papier/woo-mini-cart` | Header cart popup | mini-cart.html |
| woo-product-card | `die-papier/woo-product-card` | Atomic product tile | All catalogs |
| woo-subscription-pricing-table | `die-papier/woo-subscription-pricing-table` | Pricing tiers | Subscriptions page |

### E-Editions & Coming Soon (3) — NEW 2026-03-03

| Pattern | Slug | Purpose | Template Used |
|:---|:---|:---|:---|
| woo-archive-e-uitgawes | `die-papier/woo-archive-e-uitgawes` | E-edition catalog listing | taxonomy-product_cat-e-uitgawes.html |
| woo-single-e-uitgawe | `die-papier/woo-single-e-uitgawe` | Single e-edition product | single-product-e-uitgawe.html |
| woo-coming-soon | `die-papier/woo-coming-soon` | WooCommerce Coming Soon page | coming-soon.html |

---

## Implementation Standards

### Block Namespace
All patterns use the `woocommerce/` and `wc/` namespaces for specialized blocks.

### Style Overrides
These patterns rely heavily on block style variations defined in `styles/blocks/woocommerce/` to match the brand identity.

### Template Integration
Templates reference these patterns using the single pattern tag:

```html
<!-- wp:pattern {"slug":"die-papier/woo-cart"} /-->
```
This keeps templates extremely maintainable.