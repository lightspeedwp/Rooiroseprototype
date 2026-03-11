# WooCommerce Blocks: Category Blocks

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/category-title`, `category-description`, `product-categories`
**Category**: `woocommerce`

---

## Overview

Blocks for displaying product category information — title, description, and category list navigation.

---

## Block Inventory

| Block | Description | Key Supports |
|-------|-------------|-------------|
| `category-title` | Current category title | color, spacing, typography, align |
| `category-description` | Current category description | color, spacing, typography, align |
| `product-categories` | Category list or dropdown | color (link, text, background), typography (fontSize, lineHeight) |

### Category Title Attributes
`isLink`, `level`, `linkTarget`, `rel`, `textAlign`

### Product Categories Attributes
`align`, `hasCount`, `hasEmpty`, `hasImage`, `isDropdown`, `isHierarchical`, `showChildrenOnly`

---

## Block Styles

### Category Title (`wc-category-title-default`)
**File**: `styles/blocks/woocommerce/category-title/default.json`

### Category Description (`wc-category-description-default`)
**File**: `styles/blocks/woocommerce/category-description/default.json`

---

## Pattern Usage

Not currently used in Die Papier patterns directly. Die Papier's e-edition archive uses custom patterns rather than WooCommerce category templates. These blocks are available for the product search/archive templates if needed.

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| Archive page heading | `woocommerce/category-title` |
| Archive page description | `woocommerce/category-description` |
| Category sidebar widget | `woocommerce/product-categories` |
