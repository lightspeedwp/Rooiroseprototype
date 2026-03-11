# WooCommerce Block: On-Sale Badge

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-sale-badge`
**Category**: `woocommerce-product-elements`
**Display Name**: On-Sale Badge

---

## Overview

Displays an on-sale badge if the product is on sale. Used inside the product image block in product cards.

---

## Block Specification

- **Name:** `woocommerce/product-sale-badge`
- **Ancestor:** `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`, `woocommerce/product-gallery`
- **Supports:** align, color (background, gradients, text, link), email, interactivity (clientNavigation), spacing (margin), typography (fontSize, lineHeight), html
- **Attributes:** `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `isDescendentOfSingleProductTemplate`, `productId`

---

## Block Styles

### Default (`wc-product-sale-badge-default`)
**File**: `styles/blocks/woocommerce/product-sale-badge/default.json`

---

## Pattern Usage

### `die-papier/woo-product-card`
```html
<!-- wp:woocommerce/product-sale-badge {"isDescendentOfQueryLoop":true,"align":"right","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}}} /-->
```
Right-aligned badge inside the product image, with white link text.
