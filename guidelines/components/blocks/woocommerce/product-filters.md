# WooCommerce Blocks: Product Filters

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-filters`, `product-filter-*` (new) + `active-filters`, `attribute-filter`, `price-filter`, `rating-filter`, `stock-filter` (legacy)
**Category**: `woocommerce`

---

## Overview

Two generations of filter blocks for product collections. The new `product-filter-*` blocks are Interactivity API-based and replace the legacy filter blocks.

---

## New Filter System (Interactivity API)

### Product Filters Container

- **Name:** `woocommerce/product-filters`
- **Supports:** align, color (background, button, heading, text), interactivity, layout, spacing (blockGap), typography (fontSize)
- **Attributes:** `isPreview`

### Filter Blocks

| Block | Description | Ancestor | Key Attributes |
|-------|-------------|----------|---------------|
| `product-filter-active` | Active filter pills | `product-filters` | — |
| `product-filter-attribute` | Filter by attribute (e.g. colour) | `product-filters` | `attributeId`, `displayStyle`, `hideEmpty`, `queryType`, `selectType`, `showCounts`, `sortOrder` |
| `product-filter-price` | Filter by price range | `product-filters` | — |
| `product-filter-price-slider` | Price range slider | `product-filter-price` | `inlineInput`, `showInputFields`, slider colour attributes |
| `product-filter-rating` | Filter by star rating | `product-filters` | `minRating`, `showCounts` |
| `product-filter-status` | Filter by stock status | `product-filters` | `displayStyle`, `hideEmpty`, `showCounts` |
| `product-filter-taxonomy` | Filter by any taxonomy | `product-filters` | `displayStyle`, `hideEmpty`, `showCounts`, `sortOrder`, `taxonomy` |

### Display Blocks

| Block | Description | Ancestor |
|-------|-------------|----------|
| `product-filter-checkbox-list` | Checkbox list display | attribute, status, taxonomy, rating |
| `product-filter-chips` | Chip/tag display | attribute, taxonomy, status |
| `product-filter-removable-chips` | Active filter removable chips | `product-filter-active` |
| `product-filter-clear-button` | "Clear all" button | `product-filter-active` |

---

## Block Styles

4 custom styles for the new filter system:

| Block | Style | File |
|-------|-------|------|
| `product-filter-attribute` | Default | `product-filter-attribute/default.json` |
| `product-filter-price` | Default | `product-filter-price/default.json` |
| `product-filter-rating` | Default | `product-filter-rating/default.json` |
| `product-filter-status` | Default | `product-filter-status/default.json` |

---

## Legacy Filter Blocks (Deprecated)

These blocks are maintained for backward compatibility but should be replaced with the new system:

| Block | Description | Replacement |
|-------|-------------|-------------|
| `woocommerce/active-filters` | Active filter display | `product-filter-active` |
| `woocommerce/attribute-filter` | Attribute filter | `product-filter-attribute` |
| `woocommerce/price-filter` | Price filter | `product-filter-price` |
| `woocommerce/rating-filter` | Rating filter | `product-filter-rating` |
| `woocommerce/stock-filter` | Stock filter | `product-filter-status` |
| `woocommerce/filter-wrapper` | Filter wrapper | `product-filters` |

---

## Pattern Usage

Not currently used in Die Papier patterns. E-editions are browsed via custom archive patterns, not filtered product grids. Available for future product catalog expansion.

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Filter by | Filter volgens |
| Price | Prys |
| Rating | Gradering |
| In stock | Op voorraad |
| Clear all | Verwyder alles |
| Apply | Pas toe |
