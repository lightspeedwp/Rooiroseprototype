# WooCommerce Afrikaans Translations

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Overview

All WooCommerce UI strings must be translated to Afrikaans. Translations are stored in `/wp-content/languages/plugins/woocommerce-af_ZA.po`.

---

## Critical Strings

| English | Afrikaans | Context |
|---------|-----------|---------|
| Cart | Mandjie | Cart page title |
| Checkout | Betaal | Checkout page title |
| My Account | My Rekening | Account page title |
| Order received | Bestelling ontvang | Order confirmation |
| Proceed to checkout | Gaan voort na betaal | Cart CTA button |
| Add to cart | Voeg by mandjie | Product CTA |
| Remove | Verwyder | Cart item action |
| Coupon code | Koeponkode | Cart input |
| Apply coupon | Pas koepon toe | Cart button |
| Update cart | Werk mandjie by | Cart button |
| Subtotal | Subtotaal | Cart summary |
| Total | Totaal | Cart summary |
| Billing details | Fakeurbeskonderhede | Checkout section |
| Payment method | Betaalmetode | Checkout section |
| Place order | Plaas bestelling | Checkout CTA |
| Thank you | Dankie | Order confirmation |
| Your order | Jou bestelling | Order confirmation |
| Order number | Bestellingsnommer | Order confirmation |
| Dashboard | Dashboard | My Account tab |
| Orders | Bestellings | My Account tab |
| Subscriptions | Intekeninge | My Account tab |
| Account details | Rekeningbesonderhede | My Account tab |
| Logout | Teken uit | My Account tab |

---

## Translation File Structure

```po
# WooCommerce Afrikaans (South Africa) Translation
msgid "Cart"
msgstr "Mandjie"

msgid "Checkout"
msgstr "Betaal"

msgid "My Account"
msgstr "My Rekening"

msgid "Proceed to checkout"
msgstr "Gaan voort na betaal"

msgid "Add to cart"
msgstr "Voeg by mandjie"

# ... (400+ strings total)
```

---

## Subscription Checkout Strings

Translated via PHP `gettext` filter in `functions.php`:

| English | Afrikaans |
|:--------|:----------|
| Sign up now | Teken nou in |
| Your subscription | Jou intekening |
| Recurring total | Herhalende totaal |
| First renewal | Eerste hernuwing |
| Subscription Length | Intekeningperiode |
| Sign Up Fee | Registrasiefooi |
| Free Trial | Gratis proeftydperk |

---

## Task

**Phase 2.2 (P0)**: Create translation files for WooCommerce, WC Subscriptions, WC Memberships.

---

**End of Translations Guide**
