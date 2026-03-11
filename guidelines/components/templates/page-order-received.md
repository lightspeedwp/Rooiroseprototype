# Template: Page — Order Received

**Last updated**: 2026-03-04  
**File**: `templates/page-order-received.html`

---

## Overview

WooCommerce "order received" page template. Identical to `order-confirmation.html` — both exist for WooCommerce compatibility (WooCommerce changed the template slug between versions). Uses checkout-specific header/footer and the `woo-order-confirmation` pattern.

## Template Structure

1. `template-part` — `checkout-header` (tagName `header`)
2. `template-part` — `breadcrumbs` (tagName `nav`)
3. `wp:pattern` — `die-papier/woo-order-confirmation`
4. `template-part` — `checkout-footer` (tagName `footer`)

## Why Two Templates?

WooCommerce historically used `page-order-received` but newer versions use `order-confirmation`. Both templates exist to ensure the order confirmation page renders correctly regardless of WooCommerce version.

## Related Files

- `/guidelines/components/templates/order-confirmation.md` — Duplicate template
- `/guidelines/components/patterns/woocommerce/woo-order-confirmation.md` — Content pattern
