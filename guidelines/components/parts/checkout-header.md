# Template Part: checkout-header.html

**Last updated**: 2026-03-03
**Category**: Template Part — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/parts/checkout-header.html`
**React equivalent**: Checkout header variant in `Header.tsx`
**Area**: `header`

---

## 1. Purpose

Distraction-free checkout header. Replaces the main site header on the checkout page (`page-checkout.html`) to remove navigation links and focus the user on completing their purchase. Contains only the site logo and trust/security indicators.

## 2. Structure

```
pattern: die-papier/header-checkout
└─ group (full, base background, small padding)
   └─ group (wide, flex, space-between)
      ├─ site-logo (180px, links to homepage)
      └─ group (flex, right-aligned, x-small gap)
         ├─ paragraph: "🔒 Veilige betaling" (small, main-accent color)
         └─ image: Payfast logo (80px width)
```

## 3. Design Decisions

- **No main navigation**: Prevents users from abandoning checkout
- **Logo links to homepage**: Escape hatch if user wants to leave
- **Trust indicators**: "Veilige betaling" (Secure payment) text + Payfast logo build confidence
- **Minimal height**: Small top/bottom padding keeps the header compact

## 4. Pattern Used

- `die-papier/header-checkout` (`patterns/header/header-checkout.php`) — Block Types: `core/template-part/header`

## 5. theme.json Registration

```json
{ "name": "checkout-header", "title": "Betaal Kopstuk", "area": "header" }
```

## 6. Used By Templates

- `page-checkout.html` — WooCommerce checkout page

## 7. Related Files

- `/wordpress-export/themes/die-papier-theme/patterns/header/header-checkout.php`
- `/guidelines/components/templates/page-checkout.md` — Checkout template
- `/guidelines/components/parts/header.md` — Main header (full navigation)
