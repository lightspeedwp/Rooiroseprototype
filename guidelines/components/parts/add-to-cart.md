# Add to Cart (Template Parts)

**Last updated**: 2026-03-02
**Category**: Part — WooCommerce
**React source**: No direct equivalent (purchase flow is WordPress/WooCommerce-native)
**WordPress target**:
- `/wordpress-export/themes/die-papier-theme/parts/simple-product-add-to-cart-with-options.html`
- `/wordpress-export/themes/die-papier-theme/parts/variable-product-add-to-cart-with-options.html`

---

## 1. Purpose

Two WooCommerce template parts that handle the add-to-cart interaction on the single product page. The correct part is automatically injected by the `woocommerce/add-to-cart-with-options` block based on the product type:

- **Simple product** → `simple-product-add-to-cart-with-options.html`
- **Variable product** → `variable-product-add-to-cart-with-options.html`

For Die Papier's e-editions, subscriptions are configured as **variable products** (3 plan variations: 1-Month, 3-Month, 12-Month). The simple product part exists as a fallback.

Learned from Ollie theme. These are the standardised WooCommerce 9.x template parts for the new block-based product editor.

---

## 2. Simple Product — Add to Cart

**File**: `simple-product-add-to-cart-with-options.html`

### Visual Structure

```
┌─ Add to Cart Form (core/group)
│  ├─ Quantity Selector (woocommerce/add-to-cart-with-options-quantity-selector)
│  └─ Buy Button (woocommerce/product-button)
```

### Block Composition

```html
<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|40"}}} -->
  <!-- wp:woocommerce/add-to-cart-with-options-quantity-selector /-->
  <!-- wp:woocommerce/product-button
    {"text":"Voeg by winkelmandjie","width":100} /-->
<!-- /wp:group -->
```

### WooCommerce Blocks

| Block | Slug | Purpose |
|-------|------|---------|
| Quantity Selector | `woocommerce/add-to-cart-with-options-quantity-selector` | Number input (min 1) |
| Product Button | `woocommerce/product-button` | Add to cart submit |

---

## 3. Variable Product — Add to Cart (Primary — E-Editions)

**File**: `variable-product-add-to-cart-with-options.html`

### Visual Structure

```
┌─ Variation Selector Group (core/group)
│  └─ Attribute Selector (Plan)
│     ├─ Selector Name ("Plan")
│     └─ Selector Options (pills: "1 Maand", "3 Maande", "12 Maande")
│        └─ Variation Description ("Sluit 4 uitgawes in...")
├─ Quantity Selector
└─ Buy Button ("Teken in")
```

### Block Composition

```html
<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|50"}}} -->

  <!-- wp:woocommerce/add-to-cart-with-options-variation-selector -->
    <!-- wp:woocommerce/add-to-cart-with-options-variation-selector-attribute -->
      <!-- wp:woocommerce/add-to-cart-with-options-variation-selector-attribute-name /-->
      <!-- wp:woocommerce/add-to-cart-with-options-variation-selector-attribute-options /-->
    <!-- /wp:woocommerce/add-to-cart-with-options-variation-selector-attribute -->
    <!-- wp:woocommerce/add-to-cart-with-options-variation-description /-->
  <!-- /wp:woocommerce/add-to-cart-with-options-variation-selector -->

  <!-- wp:woocommerce/add-to-cart-with-options-quantity-selector /-->

  <!-- wp:woocommerce/product-button
    {"text":"Teken in","width":100} /-->

<!-- /wp:group -->
```

### WooCommerce Blocks

| Block | Slug | Purpose |
|-------|------|---------|
| Variation Selector | `woocommerce/add-to-cart-with-options-variation-selector` | Outer wrapper per attribute |
| Attribute | `woocommerce/add-to-cart-with-options-variation-selector-attribute` | One block per attribute (e.g. "Plan") |
| Attribute Name | `woocommerce/add-to-cart-with-options-variation-selector-attribute-name` | Label ("Plan") |
| Attribute Options | `woocommerce/add-to-cart-with-options-variation-selector-attribute-options` | Pills/swatches/dropdown |
| Variation Description | `woocommerce/add-to-cart-with-options-variation-description` | Description for selected variation |
| Quantity Selector | `woocommerce/add-to-cart-with-options-quantity-selector` | Hidden for subscriptions (qty always 1) |
| Product Button | `woocommerce/product-button` | Subscribe submit |

### Variation Display

| Attribute option type | Setting | Notes |
|:---|:---|:---|
| Pills (default) | `displayStyle: "pills"` | Die Papier style — shows 3 plan pills |
| Dropdown | `displayStyle: "dropdown"` | Fallback if too many variations |

---

## 4. Sizing & Spacing

| Property | Value |
|:---------|:------|
| Outer `blockGap` | `spacing|50` (16–32px fluid) |
| Between selector + button | `spacing|50` |
| Within selector group | `spacing|40` (12–16px fluid) |
| Button width | `100%` (full column width) |

## 5. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` | Stack vertically; pills wrap if needed |
| `≥ 768px` | Pills in one row; button full width below |

## 6. Dark Mode

| Element | Change |
|:--------|:-------|
| Pill background (unselected) | `--contrast-2` (light grey → dark grey) |
| Pill background (selected) | `--brand-navy` (navy, unchanged) |
| Pill text (selected) | `--base` (white, unchanged) |
| Button | `--primary` (red, unchanged) |

## 7. Accessibility

- Variation selector renders as ARIA radio group — keyboard navigable
- Selected variation clearly indicated (background + outline change)
- Quantity input has explicit label association
- Button text is descriptive ("Teken in" / "Voeg by winkelmandjie")

## 8. WordPress Mapping

**Injected by**: `woocommerce/add-to-cart-with-options` block on `single-product.html`

**Consumed by**: `single-product.html` template → `woo-single-product` pattern

## 9. Related Files

- `/guidelines/components/templates/single-product.md` — Parent template
- `/guidelines/wordpress-migration/woocommerce/products.md` — Product blocks reference
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscription product setup
- `/wordpress-export/themes/die-papier-theme/parts/simple-product-add-to-cart-with-options.html`
- `/wordpress-export/themes/die-papier-theme/parts/variable-product-add-to-cart-with-options.html`
