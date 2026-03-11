# WooCommerce Blocks: Accordion

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/accordion-group`, `accordion-item`, `accordion-header`, `accordion-panel`
**Category**: `woocommerce`

---

## Overview

A group of headers and associated expandable content. Can be used for FAQ sections, product information tabs, or collapsible content areas.

---

## Block Inventory

| Block | Description | Parent | Key Supports |
|-------|-------------|--------|-------------|
| `accordion-group` | Container for accordion items | — | align, background, color, layout, shadow, spacing (blockGap) |
| `accordion-item` | Single expandable section | `accordion-group` | align, color, layout, shadow, spacing |
| `accordion-header` | Clickable header/trigger | `accordion-item` | anchor, border, color, shadow, spacing, typography |
| `accordion-panel` | Expandable content area | `accordion-item` | border, color, layout, shadow, spacing, typography |

### Accordion Group Attributes
`allowedBlocks`, `autoclose`, `iconPosition`

### Accordion Header Attributes
`icon`, `iconPosition`, `level`, `levelOptions`, `openByDefault`, `textAlignment`, `title`

### Accordion Item Attributes
`openByDefault`

### Accordion Panel Attributes
`allowedBlocks`, `isSelected`, `openByDefault`, `templateLock`

---

## Block Hierarchy

```
woocommerce/accordion-group
  +-- woocommerce/accordion-item
  |     +-- woocommerce/accordion-header
  |     +-- woocommerce/accordion-panel
  |           +-- (any inner blocks)
  +-- woocommerce/accordion-item
        +-- woocommerce/accordion-header
        +-- woocommerce/accordion-panel
```

---

## Block Styles

### Accordion Header (`wc-accordion-header-default`)
**File**: `styles/blocks/woocommerce/accordion-header/default.json`

### Accordion Item (`wc-accordion-item-default`)
**File**: `styles/blocks/woocommerce/accordion-item/default.json`

---

## Pattern Usage

Not currently used in Die Papier patterns. FAQ sections use `yoast/faq-block` instead (for Schema.org FAQ structured data). The accordion blocks may be used for future product information or help sections.

---

## Notes

- The `autoclose` attribute on `accordion-group` controls whether opening one item automatically closes others.
- The `iconPosition` attribute can place the expand/collapse icon on the left or right of the header.
- Consider using these for non-FAQ accordion content where Schema.org FAQ markup is not needed.
