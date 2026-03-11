# Template Part: mini-cart.html

**Last updated**: 2026-03-03
**Category**: Template Part — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/parts/mini-cart.html`
**React equivalent**: Mini-cart drawer in `Header.tsx` / cart components
**Area**: `mini-cart` (custom area registered in `inc/parts.php`)

---

## 1. Purpose

WooCommerce Mini Cart **drawer contents** — the slide-out panel that appears when a user clicks the mini-cart icon in the header. Contains the cart item list, subtotal, and action buttons.

**IMPORTANT DISTINCTION**: This template part defines the **drawer contents**. The `woo-mini-cart.php` pattern defines the **header icon** (bag icon with product count badge). These serve separate purposes:

| Component | File | Purpose |
|:----------|:-----|:--------|
| Header icon/dropdown | `patterns/woocommerce/woo-mini-cart.php` | Mini-cart trigger in header nav |
| Drawer contents | `parts/mini-cart.html` | Slide-out cart panel when icon is clicked |

## 2. Structure

```
woocommerce/mini-cart-contents
├─ woocommerce/filled-mini-cart-contents-block
│  ├─ woocommerce/mini-cart-title-block
│  │  ├─ mini-cart-title-label-block
│  │  └─ mini-cart-title-items-counter-block
│  ├─ woocommerce/mini-cart-items-block
│  │  └─ mini-cart-products-table-block (thumbnails, titles, qty, prices)
│  └─ woocommerce/mini-cart-footer-block
│     ├─ mini-cart-cart-button-block ("Gaan na mandjie" / View Cart)
│     └─ mini-cart-checkout-button-block ("Gaan betaal" / Checkout)
└─ woocommerce/empty-mini-cart-contents-block
   ├─ pattern: woocommerce/mini-cart-empty-cart-message
   └─ mini-cart-shopping-button-block ("Begin inkopies" / Start Shopping)
```

## 3. Afrikaans Labels

Labels are NOT set in the template markup. WooCommerce handles i18n via translation files (`.po`/`.mo`). Verify the following translations are loaded:

| English | Afrikaans |
|:--------|:----------|
| Your cart | Jou mandjie |
| View Cart | Gaan na mandjie |
| Checkout | Gaan betaal |
| Your cart is empty | Jou mandjie is leeg |
| Start Shopping | Begin inkopies |

## 4. theme.json Registration

```json
{ "name": "mini-cart", "title": "Mini Mandjie", "area": "mini-cart" }
```

The `mini-cart` area is registered as a custom area in `inc/parts.php`.

## 5. Related Files

- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-mini-cart.php` — Header icon pattern
- `/guidelines/components/parts/header.md` — Header template part (contains mini-cart icon)
- `/guidelines/wordpress-migration/woocommerce/README.md` — WooCommerce blocks overview
