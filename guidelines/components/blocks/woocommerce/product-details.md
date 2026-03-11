# WooCommerce Blocks: Product Details

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-details`, `woocommerce/product-description`, `woocommerce/product-specifications`
**Category**: `woocommerce-product-elements`

---

## Overview

Blocks for displaying product information tabs (description, additional information, reviews) and standalone product content.

---

## Block Inventory

| Block | Description | Ancestor | Key Supports |
|-------|-------------|----------|-------------|
| `product-details` | Tabbed view: description, attributes, reviews | — | align (full, wide), interactivity |
| `product-description` | Full product description content | single-product, product-template, post-template | color, spacing, typography, layout |
| `product-specifications` | Weight, dimensions, attributes table | single-product, product-template, post-template | spacing, typography |

### Product Details Attributes
`align`, `hideTabTitle`

### Product Specifications Attributes
`showAttributes`, `showDimensions`, `showWeight`

---

## Block Styles

No custom block styles. The `product-details` block uses the `is-style-minimal` class variation in the Die Papier theme.

---

## Pattern Usage

### `die-papier/woo-single-product`
```html
<!-- wp:woocommerce/product-details {"className":"is-style-minimal"} -->
<!-- /wp:woocommerce/product-details -->
```

Uses the minimal style variation for cleaner tab rendering. Placed between the product info columns and the product meta block.

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| Product info tabs | `woocommerce/product-details` |
| Description tab content | `woocommerce/product-description` |
| Specifications table | `woocommerce/product-specifications` |
