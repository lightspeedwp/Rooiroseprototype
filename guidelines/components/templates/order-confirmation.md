# Template: Order Confirmation

**Last updated**: 2026-03-04  
**File**: `templates/order-confirmation.html`

---

## Overview

WooCommerce order confirmation page displayed after successful checkout. Uses the minimal checkout header/footer (distraction-free) and the `woo-order-confirmation` pattern for content.

## Template Structure

1. `template-part` — `checkout-header` (tagName `header`)
2. `template-part` — `breadcrumbs` (tagName `nav`)
3. `wp:pattern` — `die-papier/woo-order-confirmation`
4. `template-part` — `checkout-footer` (tagName `footer`)

## Notes

- Uses checkout-specific header/footer (no main navigation)
- Identical structure to `page-order-received.html` — WooCommerce uses both template slugs for compatibility

## Related Files

- `/guidelines/components/templates/page-order-received.md` — Duplicate template
- `/guidelines/components/patterns/woocommerce/woo-order-confirmation.md` — Content pattern
- `/guidelines/components/parts/checkout-header.md` — Checkout header part
