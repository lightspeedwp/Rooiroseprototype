# WooCommerce Blocks: Product Collection

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-collection`, `product-collection-no-results`, `product-template`
**Category**: `woocommerce`

---

## Overview

The modern way to display product grids. `product-collection` replaces the legacy `all-products` block with a more flexible query-based approach. `product-template` renders individual product cards within the collection.

---

## Block Inventory

| Block | Description | Key Supports |
|-------|-------------|-------------|
| `product-collection` | Product query container | align (full, wide), anchor, email, interactivity |
| `product-collection-no-results` | Empty state content | color, typography, reusable |
| `product-template` | Per-product render template | align, color, email, interactivity, layout, typography |

### Product Collection Attributes
`__privatePreviewState`, `collection`, `convertedFromProducts`, `dimensions`, `displayLayout`, `forcePageReload`, `hideControls`, `query`, `queryContextIncludes`, `queryId`, `tagName`

---

## Block Styles

No custom block styles. Uses the default WooCommerce rendering.

---

## Pattern Usage

The `woo-product-card` pattern is designed to be used inside a `product-template` block, which is a child of `product-collection`:

```
woocommerce/product-collection
  +-- woocommerce/product-template
        +-- (die-papier/woo-product-card inner blocks)
```

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| E-edition grid | `woocommerce/product-collection` |
| Grid item template | `woocommerce/product-template` |
| Empty state | `woocommerce/product-collection-no-results` |
