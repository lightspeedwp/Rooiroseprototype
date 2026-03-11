# Template: single-product.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-product.html`
**React equivalent**: `SingleEEdition.tsx`

---

## 1. Purpose

WooCommerce single product template. Handles the subscription product detail page (e-edition subscriptions: 1-Month, 3-Month, 12-Month tiers). Pattern-first: delegates entirely to a single `wp:pattern` reference. Used for all `product` post type single views — in practice, only subscription products.

## 2. Structure

```
header (template part)
└─ main (constrained, 1440px)
   ├─ breadcrumbs (template part — Yoast SEO breadcrumbs)
   └─ pattern: die-papier/woo-single-product
      └─ (product image, title, price, add-to-cart-with-options, description)
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`
- `product-card` (referenced from within `woo-single-product` pattern)
- `simple-product-add-to-cart-with-options` or `variable-product-add-to-cart-with-options` (injected by WC)

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------|
| Product Image | `woocommerce/product-image` | Cover image (e-edition cover scan) |
| Product Title | `woocommerce/product-title` | Subscription name |
| Product Price | `woocommerce/product-price` | R140/mo, R390/3mo, R1400/yr |
| Add to Cart with Options | `woocommerce/add-to-cart-with-options` | Dispatches simple/variable add-to-cart parts |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | Navigation trail |

## 5. Patterns Used

- `die-papier/woo-single-product` — full product layout

## 6. Layout

- Type: `constrained`
- Content size: `1440px`
- Spacing: `padding.top: spacing|80`, inner `blockGap: spacing|60`

## 7. WP Hierarchy Position

**Priority**: P1 — `single-product.html` > `single.html` > `index.html`

Matched when: current post type = `product` AND request is for a single product view.

## 8. Related Files

- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscriptions & memberships
- `/guidelines/components/parts/product-card.md` — Product card template part
- `/guidelines/components/parts/add-to-cart.md` — Add-to-cart template parts
- `/wordpress-export/themes/die-papier-theme/templates/single-product.html`
