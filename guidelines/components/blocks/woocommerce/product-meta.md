# WooCommerce Blocks: Product Meta

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-meta`, `woocommerce/product-sku`, `woocommerce/product-stock-indicator`
**Category**: `woocommerce-product-elements`

---

## Overview

Blocks for displaying product metadata — SKU, categories, tags, and stock status. Used on the single product page below the product details tabs.

---

## Block Inventory

| Block | Description | Supports |
|-------|-------------|----------|
| `product-meta` | Container for SKU, categories, tags | align, interactivity (clientNavigation), reusable |
| `product-sku` | Product SKU display | color, spacing, typography (fontSize, lineHeight) |
| `product-stock-indicator` | In stock / Out of stock label | color, spacing, typography (fontSize, lineHeight) |

### Product SKU Attributes
`isDescendantOfAllProducts`, `prefix`, `productId`, `showProductSelector`, `suffix`

### Product Stock Indicator Attributes
`isDescendantOfAllProducts`

---

## Block Styles

No custom block styles. Uses theme defaults.

---

## Pattern Usage

### `die-papier/woo-single-product`
```html
<!-- wp:woocommerce/product-meta {"align":"wide"} -->
  <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <!-- wp:woocommerce/product-sku /-->
  <!-- /wp:group -->
  <!-- wp:group {"layout":{"type":"flex"}} -->
    <!-- wp:post-terms {"term":"product_cat","prefix":"Kategorie: "} /-->
    <!-- wp:post-terms {"term":"product_tag","prefix":"Merkers: "} /-->
  <!-- /wp:group -->
<!-- /wp:woocommerce/product-meta -->
```

The product meta block wraps SKU (via `woocommerce/product-sku`) and taxonomy terms (via `core/post-terms`).

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| Product metadata section | `woocommerce/product-meta` container |
| SKU display | `woocommerce/product-sku` |
| Stock status | `woocommerce/product-stock-indicator` |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| SKU | SKU |
| Category | Kategorie |
| Tags | Merkers |
| In stock | Op voorraad |
| Out of stock | Uit voorraad |
| On backorder | Op nabestelling |
