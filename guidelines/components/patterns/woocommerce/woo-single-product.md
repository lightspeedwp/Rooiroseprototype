# WooCommerce: Single Product

**Last updated**: 2026-03-04  
**Slug**: `die-papier/woo-single-product`  
**Folder**: `woocommerce/`  
**Source**: `patterns/woocommerce/woo-single-product.php`  
**Template Types**: `single-product`  
**Inserter**: false  
**Referenced by**: `single-product.html` template

---

## Overview

Single product page with a 2-column layout: product image (left, 480px fixed) and product details (right, sticky). Includes store notices, social sharing, add-to-cart with options, trust badges, and product details tabs in a tertiary-background card. Designed for e-edition subscription products.

## Composition

- **Layout**: Constrained, `main` tag
- **Padding**: `medium` top, `large` bottom
- **Columns**: 2-column layout — left 480px fixed, right fill
- **Sticky**: Product details section uses `position: sticky; top: 0px`

## Block Structure

- `core/group` (`tagName: main`, constrained)
  - `core/group` — Store Notice
    - `woocommerce/store-notices`
  - `core/columns` (alignwide, blockGap medium)
    - `core/column` (480px) — Product Image
      - `woocommerce/product-image` (no link, no sale badge, 8px radius)
    - `core/column` — Product Details
      - `core/group` (min-height 100%) — Details wrapper
        - `core/group` (sticky, top 0) — Sticky content
          - `core/group` (blockGap x-small) — Product info
            - `core/post-title` (H1, `fontSize: xx-large`)
            - `woocommerce/product-price` (`fontSize: large`)
            - `core/post-excerpt` (excerptLength 100, `fontSize: base`)
          - `core/group` — Social Sharing
            - Paragraph — "Deel hierdie produk:" (bold 600)
            - `outermost/social-sharing` (whatsapp, facebook, x, email, copy)
          - `woocommerce/add-to-cart-with-options`
          - `core/group` — Trust Badges (flex wrap)
            - "Veilige betaling via Payfast"
            - "14-dag geld-terug-waarborg"
  - `core/group` (alignwide, tertiary background, 8px radius, padding medium)
    - `woocommerce/product-details` (`is-style-minimal`)
    - `woocommerce/product-meta` (SKU, product_cat terms)

## Design Tokens

- **Image**: 480px width, 8px border radius
- **Trust badges**: `main-accent` text color, emoji icons
- **Details section**: `tertiary` background, 8px radius, `medium` padding

## Afrikaans Labels

- "Deel hierdie produk:" (Share this product)
- "Veilige betaling via Payfast" (Secure payment)
- "14-dag geld-terug-waarborg" (14-day money-back guarantee)

## Related Files

- `/guidelines/components/templates/single-product.md` — Template
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md` — Social sharing block
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — WooCommerce integration
