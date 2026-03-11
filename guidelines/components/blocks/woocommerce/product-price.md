# WooCommerce Block: Product Price

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-price`
**Category**: `woocommerce-product-elements`
**Display Name**: Product Price

---

## Overview

Display the price of a product. Used in product cards, single product pages, and pricing tables for e-edition subscriptions.

---

## Block Specification

- **Name:** `woocommerce/product-price`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/featured-product`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Supports:** color (background, text, link), email, interactivity, spacing (margin, padding), typography (fontSize, lineHeight), html
- **Attributes:** `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `isDescendentOfSingleProductTemplate`, `productId`, `textAlign`

---

## Block Styles

### Default (`wc-product-price-default`)
**File**: `styles/blocks/woocommerce/product-price/default.json`

Standard price display with theme defaults.

### Accent (`wc-product-price-accent`)
**File**: `styles/blocks/woocommerce/product-price/accent.json`

Emphasised price in Brand Red for prominent pricing displays.

```json
{
  "typography": {
    "fontWeight": "700",
    "fontSize": "1.125rem"
  },
  "color": {
    "text": "var:preset|color|primary"
  }
}
```

---

## Pattern Usage

### `die-papier/woo-product-card`
```html
<!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true,"textAlign":"left","textColor":"main-accent","fontSize":"base","style":{"typography":{"fontStyle":"normal"}}} /-->
```
Left-aligned price in `main-accent` colour below the product title.

### `die-papier/woo-single-product`
```html
<!-- wp:woocommerce/product-price {"isDescendentOfSingleProductTemplate":true,"fontSize":"large"} /-->
```
Larger price display on the single product page, below the product title.

---

## React Component Mapping

| React Component | Props | WP Attributes |
|----------------|-------|---------------|
| `PricingCard` | `price`, `period` | `fontSize`, `textColor` |

In the React prototype, pricing is displayed via custom `PricingCard` components with hardcoded ZAR amounts. In WordPress, the price is dynamic from WooCommerce product data.

---

## Pricing Display (Die Papier)

| Product | Price | Display |
|---------|-------|---------|
| 1-Month Subscription | R140/mo | `R140` with "per maand" subtitle |
| 3-Month Subscription | R390/3mo | `R390` with "vir 3 maande" subtitle |
| 12-Month Subscription | R1 400/yr | `R1 400` with "per jaar" subtitle |
| Single E-Edition | R35 | `R35` inline |
