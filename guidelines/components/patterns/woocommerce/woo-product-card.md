# WooCommerce: Product Card

**Last updated**: 2026-03-04  
**Slug**: `die-papier/woo-product-card`  
**Folder**: `woocommerce/`  
**Source**: `patterns/woocommerce/woo-product-card.php`  
**Inserter**: false  
**Referenced by**: Used within `woocommerce/product-template` loops in archive and search patterns

---

## Overview

Reusable product card pattern for product archive grids and search results. Displays product image with sale badge, product title (H3), price, and a full-width add-to-cart button. Based on Ollie theme architecture.

## Composition

- **Layout**: Constrained, vertical stack
- **Block Gap**: `x-small`

## Block Structure

- `core/group` (constrained, blockGap `x-small`)
  - `woocommerce/product-image` (thumbnail sizing, query loop descendant)
    - `core/group` (min-height 100%, vertical flex)
      - `woocommerce/product-sale-badge` (right-aligned, link color `base`)
  - `core/group` (blockGap 4px) — Product details
    - `core/post-title` (H3, left-aligned, linked, `fontSize: medium`)
    - `woocommerce/product-price` (left-aligned, `textColor: main-accent`, `fontSize: base`, normal font style)
  - `woocommerce/product-button` (center, width 100%, `fontSize: base`)

## Design Tokens

- **Title**: H3, `medium` font, linked
- **Price**: `base` font, `main-accent` color
- **Button**: Full-width (100%), center-aligned
- **Sale badge**: Right-aligned, `base` text color on badge

## Related Files

- `/guidelines/components/patterns/woocommerce/woo-product-archive.md` — Archive using this card
- `/guidelines/components/patterns/woocommerce/woo-product-search.md` — Search using this card
- `/guidelines/components/parts/product-card.md` — Part-level product card guideline
