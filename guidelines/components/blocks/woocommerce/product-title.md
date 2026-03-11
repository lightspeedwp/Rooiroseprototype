# WooCommerce Block: Product Title

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-title`
**Category**: `woocommerce-product-elements`
**Display Name**: Product Title

---

## Overview

Display the title of a product. Note: Die Papier primarily uses `core/post-title` with `__woocommerceNamespace` for product titles in templates, as this provides better theme.json integration.

---

## Block Specification

- **Name:** `woocommerce/product-title`
- **Ancestor:** `woocommerce/all-products`
- **Supports:** color (background, gradients, text, link), interactivity (clientNavigation), spacing (margin), typography (fontSize, lineHeight), html
- **Attributes:** `align`, `headingLevel`, `linkTarget`, `productId`, `showProductLink`

---

## Block Styles

### Default (`wc-product-title-default`)
**File**: `styles/blocks/woocommerce/product-title/default.json`

---

## Pattern Usage

Die Papier uses `core/post-title` instead of `woocommerce/product-title` for better template compatibility:

### `die-papier/woo-product-card`
```html
<!-- wp:post-title {"textAlign":"left","level":3,"isLink":true,"fontSize":"medium","__woocommerceNamespace":"woocommerce/product-collection/product-title"} /-->
```

### `die-papier/woo-single-product`
```html
<!-- wp:post-title {"level":1,"fontSize":"xx-large","__woocommerceNamespace":"woocommerce/product-query/product-title"} /-->
```

---

## React Component Mapping

| React Component | Props | WP Block/Attribute |
|----------------|-------|-------------------|
| Product title in card | `title` | `core/post-title` with `__woocommerceNamespace` |
