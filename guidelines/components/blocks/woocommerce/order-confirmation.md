# WooCommerce Blocks: Order Confirmation

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/order-confirmation-*`
**Category**: `woocommerce`
**Display Name**: Order Confirmation

---

## Overview

A family of blocks that display order details on the confirmation/thank-you page. Die Papier uses these on the `/order-received/{order-id}` page after successful Payfast payment.

---

## Block Inventory

| Block | Description | Supports |
|-------|-------------|----------|
| `order-confirmation-status` | "Dankie vir jou bestelling" message | color, spacing, typography (fontSize, lineHeight) |
| `order-confirmation-summary` | Order date, email, payment method | color, spacing, typography |
| `order-confirmation-totals` | Line items and totals table | color (incl. link), spacing, typography |
| `order-confirmation-totals-wrapper` | Section wrapper for totals | spacing, Attributes: `heading` |
| `order-confirmation-billing-address` | Billing address display | color, spacing, typography |
| `order-confirmation-billing-wrapper` | Section wrapper for billing | spacing, Attributes: `heading` |
| `order-confirmation-shipping-address` | Shipping address display | color, spacing, typography |
| `order-confirmation-shipping-wrapper` | Section wrapper for shipping | spacing, Attributes: `heading` |
| `order-confirmation-downloads` | Download links for digital products | color (incl. link), spacing, typography |
| `order-confirmation-downloads-wrapper` | Section wrapper for downloads | spacing, Attributes: `heading` |
| `order-confirmation-additional-fields` | Custom field values | spacing |
| `order-confirmation-additional-fields-wrapper` | Section wrapper for additional fields | spacing, Attributes: `heading` |
| `order-confirmation-additional-information` | Third-party extension info | spacing |
| `order-confirmation-create-account` | Post-purchase account creation | color (incl. button), spacing |

---

## Block Styles

### Order Confirmation Status (`wc-order-confirmation-status-default`)
**File**: `styles/blocks/woocommerce/order-confirmation-status/default.json`

Styled status message for the order confirmation page.

---

## Pattern Usage

### `die-papier/woo-order-confirmation`
**File**: `patterns/woocommerce/woo-order-confirmation.php`
**Template**: `page-order-received.html`

The order confirmation pattern uses the following blocks:

```
Section (section-white): Hero area
  +-- Heading: "Jou e-uitgawe is gereed!"
  +-- order-confirmation-status (fontSize: base)
  +-- Buttons: "Lees jou e-uitgawe" (primary) + "Gaan na My Rekening" (outline)

Section (section-muted): Confirmation content
  +-- order-confirmation-summary
  +-- order-confirmation-totals-wrapper
  |     +-- Heading: "Bestellingbesonderhede"
  |     +-- order-confirmation-totals
  +-- order-confirmation-downloads-wrapper
  |     +-- Heading: "Aflaaie"
  |     +-- order-confirmation-downloads
  +-- order-confirmation-billing-wrapper
  |     +-- Heading: "Faktuuradres"
  |     +-- order-confirmation-billing-address
  +-- order-confirmation-additional-fields-wrapper
  |     +-- Heading: "Addisionele inligting"
  |     +-- order-confirmation-additional-fields
  +-- order-confirmation-additional-information
```

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| `OrderConfirmation` page | Full pattern composition |
| Status message | `order-confirmation-status` |
| Order details table | `order-confirmation-totals` |
| Download links | `order-confirmation-downloads` |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Your e-edition is ready! | Jou e-uitgawe is gereed! |
| Read your e-edition | Lees jou e-uitgawe |
| Go to My Account | Gaan na My Rekening |
| Order Details | Bestellingbesonderhede |
| Downloads | Aflaaie |
| Billing Address | Faktuuradres |
| Additional Information | Addisionele inligting |
