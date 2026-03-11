# WooCommerce Block: Product Image

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-image`
**Category**: `woocommerce-product-elements`
**Display Name**: Product Image

---

## Overview

Display the main product image. Used in product cards and the single product page. Die Papier uses this for e-edition cover thumbnails.

---

## Block Specification

- **Name:** `woocommerce/product-image`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Supports:** dimensions (aspectRatio), email, interactivity (clientNavigation), spacing (margin, padding), typography (fontSize), html
- **Attributes:** `aspectRatio`, `height`, `imageSizing`, `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `productId`, `saleBadgeAlign`, `scale`, `showProductLink`, `showSaleBadge`, `width`

---

## Block Styles

### Default (`wc-product-image-default`)
**File**: `styles/blocks/woocommerce/product-image/default.json`

Standard image display with no border radius.

### Rounded (`wc-product-image-rounded`)
**File**: `styles/blocks/woocommerce/product-image/rounded.json`

Image with rounded corners (8px radius).

```json
{
  "border": {
    "radius": "8px"
  }
}
```

---

## Pattern Usage

### `die-papier/woo-product-card`
```html
<!-- wp:woocommerce/product-image {"imageSizing":"thumbnail","isDescendentOfQueryLoop":true} -->
```
Thumbnail-sized image in the product grid card. Contains an inner sale badge.

### `die-papier/woo-single-product`
```html
<!-- wp:woocommerce/product-image {"showProductLink":false,"showSaleBadge":false,"style":{"border":{"radius":"8px"}}} /-->
```
Full product image with rounded corners on the single product page. Link and sale badge disabled (handled separately).

---

## Related Blocks

### Product Image Gallery (`woocommerce/product-image-gallery`)
- **Name:** `woocommerce/product-image-gallery`
- **Supports:** align, interactivity (clientNavigation), multiple
- **Purpose:** Display multiple product images. Not currently used by Die Papier (e-editions have a single cover image).

### Product Gallery (`woocommerce/product-gallery`)
- **Name:** `woocommerce/product-gallery`
- **Ancestor:** `woocommerce/single-product`
- **Supports:** align, email, interactivity, layout
- **Attributes:** `fullScreenOnClick`, `hoverZoom`
- **Block Styles:** `product-gallery-large-image-next-previous/default.json`

### Large Image (`woocommerce/product-gallery-large-image`)
- **Name:** `woocommerce/product-gallery-large-image`
- **Ancestor:** `woocommerce/product-gallery`

### Thumbnails (`woocommerce/product-gallery-thumbnails`)
- **Name:** `woocommerce/product-gallery-thumbnails`
- **Ancestor:** `woocommerce/product-gallery`
- **Attributes:** `aspectRatio`, `thumbnailSize`

---

## React Component Mapping

| React Component | Props | WP Attributes |
|----------------|-------|---------------|
| E-edition cover `<img>` | `src`, `alt` | `imageSizing`, `aspectRatio` |

In the React prototype, e-edition covers are rendered with standard `<img>` tags. In WordPress, the product image pulls from the WooCommerce product featured image.
