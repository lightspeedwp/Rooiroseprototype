# Product Card

**Last updated**: 2026-03-02
**Category**: Part — WooCommerce
**React source**: `EEditionCard.tsx` (conceptual equivalent)
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/product-card.html`

---

## 1. Purpose

Reusable WooCommerce product card template part. Used inside `woocommerce/product-template` blocks (which iterate over `woocommerce/product-collection` queries). Displays product image (with sale badge overlay), product title, price, and an add-to-cart button. Exists as a template part so it can be referenced from `woocommerce/product-template` inner blocks.

Learned from Ollie theme pattern. For Die Papier's subscription model, this card is used in the product archive/search results templates — not on the primary e-editions browse page (which uses a custom pricing table pattern instead).

## 2. Visual Structure

```
┌─ Product Card (core/group — card style)
│  ├─ Image wrapper (core/group — relative position)
│  │  ├─ woocommerce/product-image
│  │  └─ woocommerce/product-sale-badge (absolute, top-left)
│  ├─ core/post-title (product name)
│  ├─ woocommerce/product-price (current + original price)
│  └─ woocommerce/product-button ("Voeg by" / "Add to cart")
```

## 3. Block Composition

```html
<!-- wp:group {"style":{"spacing":{"padding":"var:preset|spacing|40"}},"className":"is-style-card"} -->
  <!-- wp:group {"style":{"position":{"type":"relative"}}} -->
    <!-- wp:woocommerce/product-image {"showSaleBadge":false} /-->
    <!-- wp:woocommerce/product-sale-badge
      {"style":{"position":{"type":"absolute","top":"0","left":"0"}}} /-->
  <!-- /wp:group -->

  <!-- wp:post-title {"isLink":true,"level":3} /-->
  <!-- wp:woocommerce/product-price /-->
  <!-- wp:woocommerce/product-button
    {"text":"Voeg by winkelmandjie","width":100} /-->
<!-- /wp:group -->
```

## 4. WooCommerce Blocks

| Block | Slug | Notes |
|-------|------|-------|
| Product Image | `woocommerce/product-image` | Cover image; aspect ratio 2:3 (portrait) for e-edition covers |
| Sale Badge | `woocommerce/product-sale-badge` | Shown when `sale_price` set; positioned absolute |
| Product Price | `woocommerce/product-price` | Shows strikethrough original if on sale |
| Product Button | `woocommerce/product-button` | Adds to cart or links to product for variable products |

## 5. Sizing & Spacing

| Property | Value |
|:---------|:------|
| Card padding | `spacing|40` (12–16px fluid) |
| Image aspect ratio | 2:3 (portrait — e-edition cover format) |
| Title font | Roboto Serif, heading level H3 |
| Gap between elements | `spacing|30` (8–12px fluid) |
| Button width | `100%` (full card width) |

## 6. Section Style

`is-style-card` — applies card border, shadow, and hover lift. Defined in `/wordpress-export/themes/die-papier-theme/styles/blocks/group/card.json`.

## 7. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` | Single column — card is full width |
| `768px – 1023px` | 2 columns |
| `≥ 1024px` | 3–4 columns (set by parent `product-collection` block) |

## 8. Dark Mode

| Element | Change |
|:--------|:-------|
| Card background | `--background` (dark variant) |
| Title text | `--foreground` (auto inverts) |
| Price text | `--foreground` (auto inverts) |
| Sale badge | Retains red accent (`--brand-red`) |

## 9. Accessibility

- Product image has automatic `alt` text from WooCommerce product media
- "Voeg by winkelmandjie" button text is explicit — no icon-only buttons
- Sale badge includes hidden text via WooCommerce's default markup

## 10. WordPress Mapping

**Consumed by**: `woocommerce/product-template` inside `woocommerce/product-collection` blocks in:
- `archive-product.html`
- `product-search-results.html`

## 11. Related Files

- `/guidelines/components/templates/archive-product.md` — Uses this part
- `/guidelines/components/templates/product-search-results.md` — Uses this part
- `/guidelines/wordpress-migration/woocommerce/products.md` — Product blocks reference
- `/wordpress-export/themes/die-papier-theme/parts/product-card.html`
