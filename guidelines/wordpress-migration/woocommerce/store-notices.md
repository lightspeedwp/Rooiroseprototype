# WooCommerce Store Notices

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Overview

The `woocommerce/store-notices` block displays global error/success/info messages across all WooCommerce pages. It is auto-injected by WooCommerce and is included in all commerce patterns.

---

## Usage

Store notices appear in these patterns:
- `die-papier/woo-cart` — cart validation errors, coupon messages
- `die-papier/woo-checkout` — checkout validation, payment errors
- `die-papier/woo-my-account` — session messages, profile update confirmations
- `die-papier/woo-order-confirmation` — order status messages

---

## Theme.json Styling

Store notices inherit the theme's global notification styles. No custom block-level styling is applied in `theme.json`.

---

## Afrikaans Translations

Store notice messages are translated via the WooCommerce translation file. See `/guidelines/wordpress-migration/woocommerce/translations.md` for the full translation table.

---

**End of Store Notices Guide**
