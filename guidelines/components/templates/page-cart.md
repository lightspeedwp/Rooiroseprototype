# Template: page-cart.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/page-cart.html`
**React equivalent**: None (WooCommerce-native)
**Afrikaans URL**: `/winkelmandjie`

---

## 1. Purpose

WooCommerce cart page template. Matched by the page assigned as the WooCommerce "Cart" page in WC Settings → Advanced → Page Setup. Pattern-first: delegates to a single `wp:pattern` reference.

## 2. Structure

```
header (template part)
└─ main (constrained, 1440px)
   ├─ breadcrumbs (template part — Yoast SEO breadcrumbs)
   └─ pattern: die-papier/woo-cart
      └─ woocommerce/cart block
         ├─ Cart Line Items (products, quantities, remove)
         ├─ Cart Cross-Sells (recommended subscriptions)
         └─ Cart Totals (subtotal, proceed to checkout CTA)
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------|
| Cart | `woocommerce/cart` | Full cart block (manages line items + totals) |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | Navigation trail |

The `woocommerce/cart` block is a **compound block** — it auto-renders line items, cross-sells, and totals using inner blocks managed by WooCommerce.

## 5. Patterns Used

- `die-papier/woo-cart` — cart page layout wrapper

## 6. Layout

- Type: `constrained`
- Content size: `1440px`
- Spacing: `padding.top: spacing|80`, inner `blockGap: spacing|60`

## 7. WP Hierarchy Position

**Priority**: P0 — `page-cart.html` matched by WooCommerce cart page slug (`winkelmandjie` or `cart`).

## 8. Key Behaviours

- **Empty cart**: WooCommerce renders an empty state automatically ("Jou winkelmandjie is leeg")
- **Coupon support**: Coupon field shown in totals area if coupons are enabled in WC settings
- **Mini cart sync**: Adding/removing items updates the `woocommerce/mini-cart` block in the header in real time (no page reload)

## 9. Styling

See `/guidelines/wordpress-migration/woocommerce/cart.md` for full theme.json + CSS styling spec.

## 10. Related Files

- `/guidelines/wordpress-migration/woocommerce/cart.md` — Cart block full styling spec
- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/components/templates/page-checkout.md` — Next step in the commerce flow
- `/wordpress-export/themes/die-papier-theme/templates/page-cart.html`
- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-cart.php`
