# WooCommerce Blocks: Product Gallery

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-gallery`, `product-gallery-large-image`, `product-gallery-large-image-next-previous`, `product-gallery-thumbnails`
**Category**: `woocommerce`

---

## Overview

Blocks for displaying product image galleries with thumbnails and navigation. Die Papier uses `woocommerce/product-image` for single cover images; the gallery blocks are available for products with multiple images.

---

## Block Inventory

| Block | Description | Ancestor | Key Supports |
|-------|-------------|----------|-------------|
| `product-gallery` | Gallery container | `single-product` | align, email, interactivity, layout |
| `product-gallery-large-image` | Main/featured image | `product-gallery` | interactivity |
| `product-gallery-large-image-next-previous` | Prev/next navigation buttons | `product-gallery-large-image`, `product-collection` | color, layout, shadow, spacing |
| `product-gallery-thumbnails` | Thumbnail strip | `product-gallery` | spacing (margin). Attributes: `aspectRatio`, `thumbnailSize` |

### Product Gallery Attributes
`fullScreenOnClick`, `hoverZoom`

---

## Block Styles

### Next/Previous Buttons (`wc-product-gallery-large-image-next-previous-default`)
**File**: `styles/blocks/woocommerce/product-gallery-large-image-next-previous/default.json`

---

## Pattern Usage

Not currently used in Die Papier patterns. E-edition products have a single cover image displayed via `woocommerce/product-image`.
