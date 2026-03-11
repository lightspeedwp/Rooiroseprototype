# WooCommerce Blocks: Catalog Browsing

**Last updated**: 2026-03-03
**Block Family**: Legacy product grid blocks
**Category**: `woocommerce`

---

## Overview

Legacy blocks for displaying product grids by various criteria. These are largely superseded by the `woocommerce/product-collection` block but remain available for backward compatibility.

---

## Block Inventory

| Block | Description | Key Attributes |
|-------|-------------|---------------|
| `all-products` | All products grid | `columns`, `rows`, `orderby`, `contentVisibility` |
| `product-category` | Products by category | `categories`, `catOperator`, `columns`, `rows` |
| `product-tag` | Products by tag | `tags`, `tagOperator`, `columns`, `rows` |
| `products-by-attribute` | Products by attribute | `attributes`, `attrOperator`, `columns`, `rows` |
| `product-best-sellers` | Best selling products | `categories`, `columns`, `rows`, `stockStatus` |
| `product-new` | Newest products | `categories`, `columns`, `rows`, `stockStatus` |
| `product-on-sale` | Products on sale | `categories`, `columns`, `rows`, `stockStatus` |
| `product-top-rated` | Top rated products | `categories`, `columns`, `rows`, `stockStatus` |
| `handpicked-products` | Manually selected products | `products`, `columns`, `orderby` |
| `catalog-sorting` | Sort order dropdown | `fontSize`, `useLabel` |

All grid blocks support: `align` (full, wide), `interactivity` (clientNavigation), and share common `contentVisibility` attributes for toggling image, title, price, rating, and button visibility.

---

## Block Styles

No custom block styles. These blocks use WooCommerce's default grid rendering.

---

## Pattern Usage

Not used in Die Papier patterns. The e-edition archive uses custom patterns with `woocommerce/product-collection` instead.

---

## Migration Notes

| Legacy Block | Modern Replacement |
|-------------|-------------------|
| `all-products` | `product-collection` |
| `product-category` | `product-collection` with category query |
| `product-tag` | `product-collection` with tag query |
| `products-by-attribute` | `product-collection` with attribute query |
| `product-best-sellers` | `product-collection` with "best-sellers" collection |
| `product-new` | `product-collection` with date sort |
| `product-on-sale` | `product-collection` with on-sale filter |
| `product-top-rated` | `product-collection` with rating sort |
| `handpicked-products` | `product-collection` with hand-picked IDs |
