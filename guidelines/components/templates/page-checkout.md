# Template: page-checkout.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/page-checkout.html`
**React equivalent**: None (WooCommerce-native)
**Afrikaans URL**: `/betaal`

---

## 1. Purpose

WooCommerce checkout page template. Matched by the page assigned as the WooCommerce "Checkout" page in WC Settings → Advanced → Page Setup. Uses a distraction-free header/footer variant. Pattern-first: delegates to a single `wp:pattern` reference.

## 2. Structure

```
header-checkout (template part — stripped-down header, no nav)
└─ main (constrained, 1440px)
   └─ pattern: die-papier/woo-checkout
      └─ woocommerce/checkout block
         ├─ Contact Information (email, create account option)
         ├─ Shipping Address (collected even for digital products)
         ├─ Billing Address
         ├─ Payment Method (PayFast — Visa, Mastercard, EFT, SnapScan)
         └─ Order Summary (right column on desktop)
footer-checkout (template part — minimal footer, no nav)
```

## 3. Template Parts Used

- `header-checkout`, `footer-checkout`
- No breadcrumbs (checkout is a funnel page — remove navigation distractions)

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------|
| Checkout | `woocommerce/checkout` | Full checkout block |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | Omitted on this template |

The `woocommerce/checkout` block is a **compound block** — inner blocks (contact, shipping, billing, payment, summary) are managed by WooCommerce.

## 5. Patterns Used

- `die-papier/woo-checkout` — checkout page layout wrapper

## 6. Layout

- Type: `constrained`
- Content size: `800px` (narrower than standard — checkout is single-column on mobile, two-column on desktop)
- Spacing: `padding.top: spacing|70`, inner `blockGap: spacing|60`

## 7. WP Hierarchy Position

**Priority**: P0 — `page-checkout.html` matched by WooCommerce checkout page slug (`betaal` or `checkout`).

## 8. Key Behaviours

- **Guest checkout**: DISABLED — users must create an account to purchase subscriptions
- **Payment gateway**: PayFast (configured in WC Settings → Payments)
- **Order confirmation**: On success, WooCommerce redirects to `page-order-received.html` (template)
- **Coupon codes**: Coupon field may appear in order summary if enabled in WC settings

## 9. Styling

See `/guidelines/wordpress-migration/woocommerce/checkout.md` for full theme.json + CSS styling spec.

## 10. Related Files

- `/guidelines/wordpress-migration/woocommerce/checkout.md` — Checkout block full styling spec
- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/components/templates/page-cart.md` — Previous step in the commerce flow
- `/guidelines/components/templates/page-my-account.md` — Post-purchase account view
- `/wordpress-export/themes/die-papier-theme/templates/page-checkout.html`
- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-checkout.php`
