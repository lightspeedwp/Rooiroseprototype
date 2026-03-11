# WooCommerce Blocks — Complete Reference

**Last updated**: 2026-03-03
**Plugin**: WooCommerce 9.6.0+
**Total Blocks**: 120+ (documented below)
**Theme Block Styles**: 30 custom styles across 27 block directories

Complete reference for all WooCommerce blocks available in the Die Papier FSE theme. Each block family has its own guideline file documenting block attributes, supports, block styles, pattern usage, and React component mapping.

---

## Quick Reference: Die Papier Usage Tiers

### Tier 1 — Critical (Used in commerce flow patterns)

| Block | Guideline | Patterns | Block Styles |
|-------|-----------|----------|--------------|
| `woocommerce/cart` | [cart.md](./cart.md) | `woo-cart` | 1 (default) |
| `woocommerce/checkout` | [checkout.md](./checkout.md) | `woo-checkout` | 1 (default) |
| `woocommerce/mini-cart` | [mini-cart.md](./mini-cart.md) | `woo-mini-cart` | 1 (default) |
| `woocommerce/customer-account` | [customer-account.md](./customer-account.md) | `woo-my-account` | 1 (default) |
| `woocommerce/order-confirmation-*` | [order-confirmation.md](./order-confirmation.md) | `woo-order-confirmation` | 1 (default) |
| `woocommerce/store-notices` | [store-notices.md](./store-notices.md) | 5 patterns | 0 |
| `woocommerce/add-to-cart-form` | [add-to-cart.md](./add-to-cart.md) | `woo-subscription-pricing-table`, `woo-single-product` | 0 |
| `woocommerce/product-price` | [product-price.md](./product-price.md) | `woo-product-card`, `woo-single-product` | 2 (default, accent) |
| `woocommerce/product-button` | [product-button.md](./product-button.md) | `woo-product-card` | 2 (default, primary) |
| `woocommerce/product-image` | [product-image.md](./product-image.md) | `woo-product-card`, `woo-single-product` | 2 (default, rounded) |

### Tier 2 — Active (Used in templates/patterns, with block styles)

| Block | Guideline | Block Styles |
|-------|-----------|--------------|
| `woocommerce/product-title` | [product-title.md](./product-title.md) | 1 (default) |
| `woocommerce/product-rating` | [product-rating.md](./product-rating.md) | 1 (default) |
| `woocommerce/product-summary` | [product-summary.md](./product-summary.md) | 1 (default) |
| `woocommerce/product-sale-badge` | [product-sale-badge.md](./product-sale-badge.md) | 1 (default) |
| `woocommerce/product-meta` | [product-meta.md](./product-meta.md) | 0 |
| `woocommerce/product-details` | [product-details.md](./product-details.md) | 0 |
| `woocommerce/product-reviews` | [product-reviews.md](./product-reviews.md) | 5 (reviews, author, content, date, rating) |
| `woocommerce/breadcrumbs` | [breadcrumbs.md](./breadcrumbs.md) | 1 (default) |
| `woocommerce/accordion-*` | [accordion.md](./accordion.md) | 2 (header, item) |
| `woocommerce/category-*` | [category-blocks.md](./category-blocks.md) | 2 (title, description) |
| `woocommerce/product-results-count` | [product-results-count.md](./product-results-count.md) | 1 (default) |

### Tier 3 — Styled (Block styles exist, not yet in patterns)

| Block | Guideline | Block Styles |
|-------|-----------|--------------|
| `woocommerce/product-filter-*` | [product-filters.md](./product-filters.md) | 4 (attribute, price, rating, status) |
| `woocommerce/product-gallery-*` | [product-gallery.md](./product-gallery.md) | 1 (next-previous) |
| `woocommerce/add-to-cart-with-options-*` | [add-to-cart.md](./add-to-cart.md) | 1 (variation selector attribute name) |

### Tier 4 — Available (No custom styles, not in patterns)

| Block Family | Guideline | Count |
|-------------|-----------|-------|
| Product Collection & Template | [product-collection.md](./product-collection.md) | 3 blocks |
| Catalog Browsing (All Products, By Category, etc.) | [catalog-browsing.md](./catalog-browsing.md) | 8 blocks |
| Featured Product / Category | [featured-blocks.md](./featured-blocks.md) | 2 blocks |
| Legacy Filters (deprecated) | [product-filters.md](./product-filters.md) | 4 blocks |
| Miscellaneous (Cart Link, Catalog Sorting, etc.) | [miscellaneous.md](./miscellaneous.md) | 8 blocks |

---

## Block Style Inventory

All block styles are in `/wordpress-export/themes/die-papier-theme/styles/blocks/woocommerce/`.

| Block | Style | Slug | File |
|-------|-------|------|------|
| `product-button` | Default | `wc-product-button-default` | `product-button/default.json` |
| `product-button` | Primary | `wc-product-button-primary` | `product-button/primary.json` |
| `product-image` | Default | `wc-product-image-default` | `product-image/default.json` |
| `product-image` | Rounded | `wc-product-image-rounded` | `product-image/rounded.json` |
| `product-price` | Default | `wc-product-price-default` | `product-price/default.json` |
| `product-price` | Accent | `wc-product-price-accent` | `product-price/accent.json` |
| `product-title` | Default | `wc-product-title-default` | `product-title/default.json` |
| `product-rating` | Default | `wc-product-rating-default` | `product-rating/default.json` |
| `product-summary` | Default | `wc-product-summary-default` | `product-summary/default.json` |
| `product-sale-badge` | Default | `wc-product-sale-badge-default` | `product-sale-badge/default.json` |
| `product-results-count` | Default | `wc-product-results-count-default` | `product-results-count/default.json` |
| `product-reviews` | Default | `wc-product-reviews-default` | `product-reviews/default.json` |
| `product-review-author-name` | Default | `wc-product-review-author-name-default` | `product-review-author-name/default.json` |
| `product-review-content` | Default | `wc-product-review-content-default` | `product-review-content/default.json` |
| `product-review-date` | Default | `wc-product-review-date-default` | `product-review-date/default.json` |
| `breadcrumbs` | Default | `wc-breadcrumbs-default` | `breadcrumbs/default.json` |
| `cart` | Default | `wc-cart-default` | `cart/default.json` |
| `checkout` | Default | `wc-checkout-default` | `checkout/default.json` |
| `mini-cart` | Default | `wc-mini-cart-default` | `mini-cart/default.json` |
| `customer-account` | Default | `wc-customer-account-default` | `customer-account/default.json` |
| `order-confirmation-status` | Default | `wc-order-confirmation-status-default` | `order-confirmation-status/default.json` |
| `accordion-header` | Default | `wc-accordion-header-default` | `accordion-header/default.json` |
| `accordion-item` | Default | `wc-accordion-item-default` | `accordion-item/default.json` |
| `category-title` | Default | `wc-category-title-default` | `category-title/default.json` |
| `category-description` | Default | `wc-category-description-default` | `category-description/default.json` |
| `product-filter-attribute` | Default | `wc-product-filter-attribute-default` | `product-filter-attribute/default.json` |
| `product-filter-price` | Default | `wc-product-filter-price-default` | `product-filter-price/default.json` |
| `product-filter-rating` | Default | `wc-product-filter-rating-default` | `product-filter-rating/default.json` |
| `product-filter-status` | Default | `wc-product-filter-status-default` | `product-filter-status/default.json` |
| `product-gallery-large-image-next-previous` | Default | `wc-product-gallery-large-image-next-previous-default` | `product-gallery-large-image-next-previous/default.json` |
| `add-to-cart-with-options-variation-selector-attribute-name` | Default | `wc-add-to-cart-with-options-variation-selector-attribute-name-default` | `add-to-cart-with-options-variation-selector-attribute-name/default.json` |

---

## Related Documentation

- **WooCommerce Overview**: `/guidelines/wordpress-migration/woocommerce/README.md`
- **Block Mapping Strategy**: `/guidelines/wordpress-migration/block-mapping.md`
- **Block Styles Browser**: `/ontwikkelaar/blokstyle` (React dev tool)
- **WooCommerce Patterns**: `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/`
- **WooCommerce Templates**: `/wordpress-export/themes/die-papier-theme/templates/` (page-cart, page-checkout, etc.)
