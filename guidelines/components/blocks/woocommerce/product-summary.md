# WooCommerce Block: Product Summary

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-summary`
**Category**: `woocommerce-product-elements`
**Display Name**: Product Summary

---

## Overview

Display a short description about a product. Die Papier uses `core/post-excerpt` with `__woocommerceNamespace` instead for better theme integration.

---

## Block Specification

- **Name:** `woocommerce/product-summary`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/featured-product`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Supports:** color (background, link, text), interactivity (clientNavigation), spacing (margin, padding), typography (fontSize, lineHeight, textAlign)
- **Attributes:** `isDescendantOfAllProducts`, `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `isDescendentOfSingleProductTemplate`, `linkText`, `productId`, `showDescriptionIfEmpty`, `showLink`, `summaryLength`

---

## Block Styles

### Default (`wc-product-summary-default`)
**File**: `styles/blocks/woocommerce/product-summary/default.json`

---

## Pattern Usage

Die Papier uses `core/post-excerpt` instead:

```html
<!-- wp:post-excerpt {"excerptLength":100,"fontSize":"base","__woocommerceNamespace":"woocommerce/product-query/product-summary"} /-->
```

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| Product description text | `core/post-excerpt` with `__woocommerceNamespace` |
