# WooCommerce Block: Cart

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/cart`
**Category**: `woocommerce`
**Display Name**: Cart

---

## Overview

Display a full shopping cart with line items, totals, coupons, and a proceed-to-checkout button. Die Papier uses this on the `/winkelmandjie` page for e-edition subscription purchases.

---

## Block Specification

- **Name:** `woocommerce/cart`
- **Supports:** align (wide), html, multiple
- **Attributes:** `align`, `isPreview`

---

## Block Styles

### Default (`wc-cart-default`)
**File**: `styles/blocks/woocommerce/cart/default.json`

Brand-aligned cart styling with Die Papier typography and spacing.

---

## Inner Block Hierarchy

The Cart block is a composite block with a deep hierarchy:

```
woocommerce/cart
  +-- woocommerce/filled-cart-block
  |     +-- woocommerce/cart-items-block
  |     |     +-- woocommerce/cart-line-items-block
  |     |     +-- woocommerce/cart-cross-sells-block
  |     |           +-- woocommerce/cart-cross-sells-products-block
  |     +-- woocommerce/cart-totals-block
  |           +-- woocommerce/cart-order-summary-block
  |           |     +-- woocommerce/cart-order-summary-heading-block
  |           |     +-- woocommerce/cart-order-summary-coupon-form-block
  |           |     +-- woocommerce/cart-order-summary-totals-block
  |           |           +-- woocommerce/cart-order-summary-subtotal-block
  |           |           +-- woocommerce/cart-order-summary-fee-block
  |           |           +-- woocommerce/cart-order-summary-discount-block
  |           |           +-- woocommerce/cart-order-summary-shipping-block
  |           |           +-- woocommerce/cart-order-summary-taxes-block
  |           +-- woocommerce/cart-express-payment-block
  |           +-- woocommerce/proceed-to-checkout-block
  |           +-- woocommerce/cart-accepted-payment-methods-block
  +-- woocommerce/empty-cart-block
```

### Key Inner Blocks

| Block | Purpose | Supports |
|-------|---------|----------|
| `filled-cart-block` | Shown when cart has items | align (wide) |
| `empty-cart-block` | Shown when cart is empty | align (wide) |
| `cart-items-block` | Column with line items | align |
| `cart-line-items-block` | Product list | align |
| `cart-totals-block` | Column with totals | align |
| `cart-order-summary-block` | Order summary | align |
| `cart-order-summary-heading-block` | "Besteltotaal" heading | Attributes: `content` |
| `cart-order-summary-coupon-form-block` | Coupon input | — |
| `cart-order-summary-subtotal-block` | Subtotal row | — |
| `cart-order-summary-fee-block` | Fee row | — |
| `cart-order-summary-discount-block` | Discount row | — |
| `cart-order-summary-shipping-block` | Shipping row | — |
| `cart-order-summary-taxes-block` | Tax row | — |
| `cart-express-payment-block` | Express pay (disabled) | Attributes: `buttonBorderRadius`, `buttonHeight` |
| `proceed-to-checkout-block` | "Gaan voort na betaal" | — |
| `cart-accepted-payment-methods-block` | Payment icons | — |
| `cart-cross-sells-block` | Cross-sell products | — |

---

## Pattern Usage

### `die-papier/woo-cart`
**File**: `patterns/woocommerce/woo-cart.php`
**Template**: `page-cart.html`

The cart pattern wraps `woocommerce/page-content-wrapper` (page: "cart") with store notices and a "Gaan voort met inkopies" outline button for empty cart state.

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| `CartPage` | `woocommerce/cart` (full page) |
| Cart item rows | `woocommerce/cart-line-items-block` |
| Order summary | `woocommerce/cart-order-summary-block` |
| Empty state CTA | `woocommerce/empty-cart-block` content |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Your Cart | Jou Mandjie |
| Proceed to Checkout | Gaan voort na betaal |
| Continue Shopping | Gaan voort met inkopies |
| Apply Coupon | Pas koepon toe |
| Order Summary | Besteltotaal |
| Subtotal | Subtotaal |
| Shipping | Aflewering |
| Tax | Belasting |
| Total | Totaal |
