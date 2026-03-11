# WooCommerce Block: Mini-Cart

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/mini-cart`
**Category**: `woocommerce`
**Display Name**: Mini-Cart

---

## Overview

Display a button for shoppers to quickly view their cart. Renders as a bag icon in the header with a product count badge. Opens a slide-out panel with cart contents.

---

## Block Specification

- **Name:** `woocommerce/mini-cart`
- **Supports:** spacing (margin, padding), typography (fontSize), html, multiple
- **Attributes:** `addToCartBehaviour`, `cartAndCheckoutRenderStyle`, `hasHiddenPrice`, `iconColor`, `iconColorValue`, `isPreview`, `miniCartIcon`, `onCartClickBehaviour`, `priceColor`, `priceColorValue`, `productCountColor`, `productCountColorValue`, `productCountVisibility`

---

## Block Styles

### Default (`wc-mini-cart-default`)
**File**: `styles/blocks/woocommerce/mini-cart/default.json`

Brand-aligned mini cart with Navy icon and Red count badge.

---

## Pattern Usage

### `die-papier/woo-mini-cart`
**File**: `patterns/woocommerce/woo-mini-cart.php`

```html
<!-- wp:woocommerce/mini-cart {
  "miniCartIcon":"bag",
  "priceColor":{"name":"Brand Navy","slug":"secondary","color":"#142135"},
  "iconColor":{"name":"Brand Navy","slug":"secondary","color":"#142135"},
  "productCountColor":{"name":"White","slug":"base","color":"#FFFFFF"},
  "productCountBackgroundColor":{"name":"Brand Red","slug":"primary","color":"#D70025"},
  "hasHiddenPrice":false,
  "fontSize":"base"
} /-->
```

**Icon**: Bag (not default cart)
**Icon colour**: Navy (`secondary`)
**Count badge**: White text on Red background (`primary`)
**Price visible**: Yes

---

## Inner Block Hierarchy (Mini-Cart Contents)

```
woocommerce/mini-cart-contents
  +-- woocommerce/filled-mini-cart-contents-block
  |     +-- woocommerce/mini-cart-title-block
  |     |     +-- woocommerce/mini-cart-title-label-block
  |     |     +-- woocommerce/mini-cart-title-items-counter-block
  |     +-- woocommerce/mini-cart-items-block
  |     |     +-- woocommerce/mini-cart-products-table-block
  |     +-- woocommerce/mini-cart-footer-block
  |           +-- woocommerce/mini-cart-cart-button-block
  |           +-- woocommerce/mini-cart-checkout-button-block
  +-- woocommerce/empty-mini-cart-contents-block
        +-- woocommerce/mini-cart-shopping-button-block
```

### Key Inner Blocks

| Block | Purpose | Attributes |
|-------|---------|------------|
| `mini-cart-title-label-block` | "Jou mandjie" label | `label` |
| `mini-cart-title-items-counter-block` | "(3 items)" counter | — |
| `mini-cart-products-table-block` | Product list | — |
| `mini-cart-cart-button-block` | "Bekyk mandjie" | `cartButtonLabel` |
| `mini-cart-checkout-button-block` | "Gaan betaal" | `checkoutButtonLabel` |
| `mini-cart-shopping-button-block` | Empty state CTA | `startShoppingButtonLabel` |

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| Cart icon in `Header` | `woocommerce/mini-cart` |
| Cart badge count | `productCountColor` attribute |
| Cart slide-out | `woocommerce/mini-cart-contents` |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Your Cart | Jou Mandjie |
| View Cart | Bekyk mandjie |
| Go to Checkout | Gaan betaal |
| Start Shopping | Begin inkopies |
