# WooCommerce Blocks: Add to Cart

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/add-to-cart-form`, `woocommerce/add-to-cart-with-options-*`
**Category**: `woocommerce-product-elements`
**Display Name**: Add to Cart with Options

---

## Overview

Blocks for adding products to the cart. The `add-to-cart-form` block is the traditional form, while `add-to-cart-with-options` is the newer block-based approach for variable and grouped products.

---

## Add to Cart Form (Traditional)

### Block Specification

- **Name:** `woocommerce/add-to-cart-form`
- **Category:** `woocommerce-product-elements`
- **Supports:** interactivity
- **Attributes:** `quantitySelectorStyle`

### Pattern Usage

Used in the subscription pricing table for direct add-to-cart:

```html
<!-- wp:woocommerce/add-to-cart-form {"productId":0,"align":"center","fontSize":"base"} /-->
```

Appears **3 times** in `woo-subscription-pricing-table.php` (one per pricing tier).

---

## Add to Cart with Options (Beta — Block-based)

### Block Specification

- **Name:** `woocommerce/add-to-cart-with-options`
- **Category:** `woocommerce-product-elements`
- **Supports:** interactivity
- **Attributes:** `isDescendantOfAddToCartWithOptions`

### Pattern Usage

Used on the single product page:

```html
<!-- wp:woocommerce/add-to-cart-with-options /-->
```

Appears in `woo-single-product.php` inside the product details column.

### Inner Block Hierarchy

```
woocommerce/add-to-cart-with-options
  +-- woocommerce/add-to-cart-with-options-quantity-selector
  +-- woocommerce/add-to-cart-with-options-variation-selector
  |     +-- woocommerce/add-to-cart-with-options-variation-selector-attribute
  |           +-- woocommerce/add-to-cart-with-options-variation-selector-attribute-name
  |           +-- woocommerce/add-to-cart-with-options-variation-selector-attribute-options
  +-- woocommerce/add-to-cart-with-options-variation-description
  +-- woocommerce/add-to-cart-with-options-grouped-product-selector
        +-- woocommerce/add-to-cart-with-options-grouped-product-item
              +-- woocommerce/add-to-cart-with-options-grouped-product-item-label
              +-- woocommerce/add-to-cart-with-options-grouped-product-item-selector
```

### Block Styles

**Variation Selector Attribute Name** has a custom block style:
- **File**: `styles/blocks/woocommerce/add-to-cart-with-options-variation-selector-attribute-name/default.json`

### Sub-Block Details

| Block | Purpose | Key Supports |
|-------|---------|-------------|
| `quantity-selector` | Number input for quantity | interactivity |
| `variation-selector` | Variable product attribute chooser | interactivity |
| `variation-selector-attribute` | Single attribute template | interactivity |
| `variation-selector-attribute-name` | Attribute label (e.g. "Size") | color, spacing, typography |
| `variation-selector-attribute-options` | Attribute value picker | Attributes: `optionStyle` |
| `variation-description` | Selected variation description | color, spacing, typography |
| `grouped-product-selector` | Grouped product list | interactivity |
| `grouped-product-item` | Single grouped product | interactivity |
| `grouped-product-item-label` | Product title in group | color, spacing, typography |
| `grouped-product-item-selector` | Add-to-cart for grouped item | interactivity |

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| "Teken in" button in `PricingCard` | `woocommerce/add-to-cart-form` |
| Product page CTA | `woocommerce/add-to-cart-with-options` |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Add to Cart | Voeg by mandjie |
| Subscribe | Teken in |
| Quantity | Hoeveelheid |
| Select options | Kies opsies |
