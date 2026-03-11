# WooCommerce Block: Add to Cart Button

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/product-button`
**Category**: `woocommerce-product-elements`
**Display Name**: Add to Cart Button

---

## Overview

Display a call to action button which either adds the product to the cart, or links to the product page. Used in product grids and product cards for the Die Papier e-edition store.

---

## Block Specification

- **Name:** `woocommerce/product-button`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `core/post-template`, `woocommerce/product-template`
- **Supports:** align (full, wide), color (background, text, link), email, interactivity, spacing (margin, padding), typography (fontSize, lineHeight), html
- **Attributes:** `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `productId`, `textAlign`, `width`

---

## Block Styles

### Default (`wc-product-button-default`)
**File**: `styles/blocks/woocommerce/product-button/default.json`

Standard button styling for product grids. Uses the theme's secondary color scheme.

### Primary (`wc-product-button-primary`)
**File**: `styles/blocks/woocommerce/product-button/primary.json`

Brand Red CTA button for prominent add-to-cart actions.

```json
{
  "color": {
    "background": "var:preset|color|primary",
    "text": "var:preset|color|base"
  },
  ":hover": {
    "color": { "background": "var:preset|color|primary-alt" }
  },
  "border": {
    "radius": "var:custom|border-radius|200",
    "width": "0px"
  },
  "typography": {
    "fontWeight": "700",
    "fontSize": "0.875rem",
    "textTransform": "uppercase",
    "letterSpacing": "0.05em"
  }
}
```

---

## Pattern Usage

### `die-papier/woo-product-card`
```html
<!-- wp:woocommerce/product-button {"textAlign":"center","width":100,"isDescendentOfQueryLoop":true,"fontSize":"base"} /-->
```
Full-width button at the bottom of each product card in the e-edition grid.

---

## React Component Mapping

| React Component | Props | WP Attributes |
|----------------|-------|---------------|
| N/A (no direct React equivalent) | — | `textAlign`, `width`, `fontSize` |

The product button is WooCommerce-native and doesn't map to a custom React component. In the React prototype, product CTAs are rendered as standard `<Button>` components with "Koop" or "Teken in" labels.

---

## Afrikaans Labels

| English | Afrikaans | Context |
|---------|-----------|---------|
| Add to Cart | Voeg by mandjie | Default button text |
| Buy Now | Koop nou | Single product |
| Subscribe | Teken in | Subscription product |
