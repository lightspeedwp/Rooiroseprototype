# WooCommerce Blocks: Product Reviews

**Last updated**: 2026-03-03
**Block Family**: `woocommerce/product-reviews`, `product-review-*`, `product-reviews-*`, `all-reviews`, `reviews-by-*`
**Category**: `woocommerce`

---

## Overview

A comprehensive family of blocks for displaying and submitting product reviews. Die Papier does not currently enable reviews on e-edition products, but the blocks are fully styled for potential future use.

---

## Block-Based Reviews (New)

### Product Reviews Container

- **Name:** `woocommerce/product-reviews`
- **Supports:** align (full, wide), color (background, gradients, heading, link, text), interactivity, spacing, typography
- **Attributes:** `tagName`

### Inner Blocks

| Block | Description | Key Supports |
|-------|-------------|-------------|
| `product-review-template` | Template for individual reviews | align, spacing, typography |
| `product-review-author-name` | Reviewer name | color, spacing, typography. Attributes: `isLink`, `linkTarget`, `textAlign` |
| `product-review-content` | Review text | color, spacing, typography. Attributes: `textAlign` |
| `product-review-date` | Review date | color, spacing, typography. Attributes: `format`, `isLink` |
| `product-review-rating` | Star rating per review | color. Attributes: `textAlign` |
| `product-review-form` | Review submission form | color, spacing, typography |
| `product-reviews-title` | "X resensies" heading | color, spacing, typography. Attributes: `level`, `showProductTitle`, `showReviewsCount` |

### Pagination

| Block | Description |
|-------|-------------|
| `product-reviews-pagination` | Pagination container. Attributes: `paginationArrow` |
| `product-reviews-pagination-next` | Next page link. Attributes: `label` |
| `product-reviews-pagination-previous` | Previous page link. Attributes: `label` |
| `product-reviews-pagination-numbers` | Page number links |

### Block Hierarchy

```
woocommerce/product-reviews
  +-- woocommerce/product-reviews-title
  +-- woocommerce/product-review-template
  |     +-- woocommerce/product-review-rating
  |     +-- woocommerce/product-review-author-name
  |     +-- woocommerce/product-review-date
  |     +-- woocommerce/product-review-content
  +-- woocommerce/product-reviews-pagination
  |     +-- woocommerce/product-reviews-pagination-previous
  |     +-- woocommerce/product-reviews-pagination-numbers
  |     +-- woocommerce/product-reviews-pagination-next
  +-- woocommerce/product-review-form
```

---

## Legacy Review Blocks

| Block | Description |
|-------|-------------|
| `woocommerce/all-reviews` | List of all product reviews across the store |
| `woocommerce/reviews-by-category` | Reviews filtered by product category |
| `woocommerce/reviews-by-product` | Reviews for a specific product |

These legacy blocks are less flexible than the block-based `product-reviews` system above.

---

## Block Styles

5 custom block styles for the review system:

| Block | Style | File |
|-------|-------|------|
| `product-reviews` | Default | `product-reviews/default.json` |
| `product-review-author-name` | Default | `product-review-author-name/default.json` |
| `product-review-content` | Default | `product-review-content/default.json` |
| `product-review-date` | Default | `product-review-date/default.json` |
| `product-review-rating` | Default | implied via parent styling |

---

## Pattern Usage

Not currently used in Die Papier patterns. Reviews are disabled for e-edition products.

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| Reviews | Resensies |
| Leave a review | Skryf 'n resensie |
| Your rating | Jou gradering |
| Your review | Jou resensie |
| Submit | Dien in |
| Previous | Vorige |
| Next | Volgende |
