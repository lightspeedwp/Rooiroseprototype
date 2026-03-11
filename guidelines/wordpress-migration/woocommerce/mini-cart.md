# WooCommerce Mini Cart

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Mini Cart Pattern (`woo-mini-cart.php`)

**Slug**: `die-papier/woo-mini-cart`
**Category**: `die-papier-woocommerce`
**Used in**: `header.php`

Mini cart icon for header with:
- `woocommerce/mini-cart` block (cart icon + item count badge)
- Styled with Die Papier brand colors (Navy icon, Red badge)
- Opens slide-out cart drawer on click
- Displays cart total and item count

### Block Structure

```html
<!-- wp:woocommerce/mini-cart {"hasHiddenPrice":false,"miniCartIcon":"bag"} /-->
```

### Block Attributes

```json
{
  "miniCartIcon": "bag",
  "addToCartBehaviour": "none",
  "hasHiddenPrice": false,
  "priceColor": "#142135",
  "iconColor": "#142135",
  "productCountColor": "#D70025"
}
```

**Die Papier Settings**:
- `miniCartIcon`: `"bag"` (shopping bag icon)
- `iconColor`: Navy (`#142135`)
- `productCountColor`: Red (`#D70025`) — badge color

---

## Theme.json Styling

```json
"woocommerce/mini-cart": {
  "color": {
    "text": "var(--wp--preset--color--contrast)"
  }
}
```

---

## Related Files

- `/patterns/woocommerce/woo-mini-cart.php`
- `/patterns/header/header.php` (includes mini cart)

---

**End of Mini Cart Guide**
