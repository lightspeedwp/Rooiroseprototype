# WooCommerce Checkout

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Checkout Pattern (`woo-checkout.php`)

**Slug**: `die-papier/woo-checkout`
**Category**: `die-papier-woocommerce`
**Used in**: `page-checkout.html`
**Template Types**: `page-checkout`
**Inserter**: `false`

Distraction-free checkout layout (pattern-first, includes checkout header/footer) with:
- `woocommerce/page-content-wrapper` (page: checkout) — ensures WC checkout block renders correctly
- `woocommerce/store-notices` — validation errors, success messages
- `woocommerce/cart-link` — "Terug na mandjie" link in header
- `wp:post-content` — renders the WC checkout block from the page
- Uses checkout-specific header/footer (distraction-free)

**Critical Notes**:
- Guest checkout is **DISABLED** in WooCommerce settings (users must create account)
- Email becomes username (WooCommerce default)

### Block Attributes

```json
{
  "showOrderNotes": false,
  "showPolicyLinks": true,
  "showReturnToCart": true,
  "cartPageId": 456,
  "showCompanyField": false,
  "requireCompanyField": false,
  "showApartmentField": true,
  "showPhoneField": true,
  "requirePhoneField": false
}
```

**Die Papier Settings**:
- `showOrderNotes`: `false` (not needed for e-editions)
- `showPolicyLinks`: `true` (required for legal compliance)
- `showReturnToCart`: `true` (UX best practice)
- `showCompanyField`: `false` (B2C only, no business accounts)
- `showPhoneField`: `true` (useful for support, not required)

---

## Order Confirmation Pattern (`woo-order-confirmation.php`)

**Slug**: `die-papier/woo-order-confirmation`
**Category**: `die-papier-woocommerce`
**Used in**: `page-order-received.html`, `order-confirmation.html`
**Template Types**: `order-confirmation`
**Inserter**: `false`

Full order confirmation layout (pattern-first, includes checkout header/footer) with:
- `woocommerce/order-confirmation-status` — status banner in page header
- `woocommerce/store-notices` — session messages
- E-edition success CTA: "Jou e-uitgawe is gereed!" with "Lees jou e-uitgawe" and "Gaan na My Rekening" buttons
- `woocommerce/order-confirmation-summary` — order overview
- `woocommerce/order-confirmation-totals-wrapper` — itemized order details ("Bestelbesonderhede")
- `woocommerce/order-confirmation-downloads-wrapper` — digital downloads ("Aflaaie")
- `woocommerce/order-confirmation-billing-wrapper` — billing address ("Faktuuradres")
- `woocommerce/order-confirmation-additional-fields-wrapper` — additional info ("Bykomende inligting")
- `woocommerce/order-confirmation-additional-information` — WC additional info

---

## Template Parts

### Checkout Header (`checkout-header.html`)

**Slug**: `checkout-header`
**Pattern**: `die-papier/header-checkout`

Minimal header for checkout pages with:
- Logo (linked to home)
- Security badge: "Veilige betaling deur Payfast"
- Payfast logo
- NO main navigation, NO search, NO categories, NO ads, NO mini cart

**Why?** Distraction-free checkout reduces cart abandonment.

### Checkout Footer (`checkout-footer.html`)

**Slug**: `checkout-footer`
**Pattern**: `die-papier/footer-checkout`

Minimal footer for checkout pages with:
- Payment icons (Visa, Mastercard, Payfast) with "Aanvaar:" label
- Privacy policy link
- Copyright notice
- NO newsletter signup, NO social links, NO full navigation, NO ads

---

## PHP Integration

### Order Button Text

```php
function dp_woocommerce_order_button_text() {
    return 'Plaas Bestelling';
}
```

### Subscription Add-to-Cart Text

```php
function dp_subscription_add_to_cart_text() {
    return 'Teken in';
}
```

---

## Related Files

- `/patterns/woocommerce/woo-checkout.php`
- `/patterns/woocommerce/woo-order-confirmation.php`
- `/patterns/header/header-checkout.php`
- `/patterns/footer/footer-checkout.php`
- `/templates/page-checkout.html`
- `/templates/page-order-received.html`
- `/templates/order-confirmation.html`
- `/parts/checkout-header.html`
- `/parts/checkout-footer.html`

---

**End of Checkout Guide**
