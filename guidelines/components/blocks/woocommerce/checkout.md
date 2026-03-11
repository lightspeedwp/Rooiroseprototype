# WooCommerce Block: Checkout

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/checkout`
**Category**: `woocommerce`
**Display Name**: Checkout

---

## Overview

Display a checkout form for customers to submit orders. Die Papier uses this on the `/betaal` page with a distraction-free layout (checkout-specific header/footer, no ads, no sidebar).

---

## Block Specification

- **Name:** `woocommerce/checkout`
- **Supports:** align (wide), html, multiple
- **Attributes:** `align`, `isPreview`, `showFormStepNumbers`

---

## Block Styles

### Default (`wc-checkout-default`)
**File**: `styles/blocks/woocommerce/checkout/default.json`

Brand-aligned checkout styling.

---

## Inner Block Hierarchy

```
woocommerce/checkout
  +-- woocommerce/checkout-fields-block
  |     +-- woocommerce/checkout-express-payment-block
  |     +-- woocommerce/checkout-contact-information-block
  |     +-- woocommerce/checkout-shipping-method-block
  |     +-- woocommerce/checkout-pickup-options-block
  |     +-- woocommerce/checkout-shipping-address-block
  |     +-- woocommerce/checkout-billing-address-block
  |     +-- woocommerce/checkout-shipping-methods-block
  |     +-- woocommerce/checkout-payment-block
  |     +-- woocommerce/checkout-additional-information-block
  |     +-- woocommerce/checkout-order-note-block
  |     +-- woocommerce/checkout-terms-block
  |     +-- woocommerce/checkout-actions-block
  +-- woocommerce/checkout-totals-block
        +-- woocommerce/checkout-order-summary-block
              +-- woocommerce/checkout-order-summary-cart-items-block
              +-- woocommerce/checkout-order-summary-coupon-form-block
              +-- woocommerce/checkout-order-summary-totals-block
                    +-- woocommerce/checkout-order-summary-subtotal-block
                    +-- woocommerce/checkout-order-summary-fee-block
                    +-- woocommerce/checkout-order-summary-discount-block
                    +-- woocommerce/checkout-order-summary-shipping-block
                    +-- woocommerce/checkout-order-summary-taxes-block
```

### Key Inner Blocks

| Block | Purpose | Notes |
|-------|---------|-------|
| `checkout-fields-block` | Left column (form fields) | — |
| `checkout-totals-block` | Right column (order summary) | — |
| `checkout-contact-information-block` | Name, email | Guest checkout DISABLED |
| `checkout-billing-address-block` | Billing address | Required for SA payments |
| `checkout-shipping-address-block` | Shipping address | May be hidden (digital products) |
| `checkout-shipping-method-block` | Delivery vs pickup | "Digitale aflewering" for e-editions |
| `checkout-payment-block` | Payment method selection | Payfast integration |
| `checkout-terms-block` | T&C checkbox | Attributes: `checkbox`, `text` |
| `checkout-actions-block` | Place order button | Attributes: `cartPageId`, `showReturnToCart` |
| `checkout-order-note-block` | Optional order note | — |
| `checkout-express-payment-block` | Express payment (disabled) | Not used by Die Papier |

---

## Pattern Usage

### `die-papier/woo-checkout`
**File**: `patterns/woocommerce/woo-checkout.php`
**Template**: `page-checkout.html`

The checkout pattern includes:
1. A `woocommerce/cart-link` for "Terug na mandjie" navigation
2. `woocommerce/page-content-wrapper` (page: "checkout") with store notices
3. Distraction-free layout (section-muted background, no sidebar)

---

## Die Papier Configuration

| Setting | Value | Reason |
|---------|-------|--------|
| Guest checkout | **Disabled** | Account required for subscription access |
| Shipping fields | **Hidden** | Digital product (no physical delivery) |
| Express payment | **Disabled** | Payfast only |
| Payment gateway | **Payfast** | SA payment provider (Visa, MC, EFT) |
| Form step numbers | **Enabled** | Visual progress indicator |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Checkout | Betaal |
| Contact Information | Kontakinligting |
| Billing Address | Faktuuradres |
| Payment Method | Betaalmetode |
| Place Order | Plaas bestelling |
| Return to Cart | Terug na mandjie |
| Terms and Conditions | Bepalings en voorwaardes |
| Order Notes | Bestelnota |
