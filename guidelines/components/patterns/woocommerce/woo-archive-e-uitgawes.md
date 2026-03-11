# E-Uitgawes Archive Pattern

**Last updated**: 2026-03-03
**Folder**: patterns/woocommerce/
**Slug**: die-papier/woo-archive-e-uitgawes
**File**: `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-archive-e-uitgawes.php`

## Description

Main content pattern for the E-Uitgawes (E-Editions) product category archive. Displays a responsive grid of edition products with cover images, titles, dates, prices, and purchase/owned badges. Includes a 70/30 content/sidebar layout, in-feed ad slot, footer leaderboard ad, FAQ accordion, and newsletter CTA.

**Template consumer**: `taxonomy-product_cat-e-uitgawes.html`

## React Equivalent

- **Component**: `EEditions.tsx`
- **Key features**: Edition grid with product cards, DemoStateSwitcher (owned/purchase states), sidebar with subscription CTA, FAQ accordion, newsletter CTA
- **Route**: `/e-uitgawes`

## Block Composition

```
core/group (full, section-white)
├── core/query-title (archive, h1, center)
├── core/paragraph (description, center, main-accent)
├── core/columns (70/30 split, blockGap: large)
│   ├── core/column (66.66%)
│   │   └── woocommerce/product-collection
│   │       ├── layout: grid, columns 3 (lg) / 2 (md) / 1 (sm)
│   │       ├── perPage: 24
│   │       ├── filter: product_cat = e-uitgawes
│   │       └── core/post-template
│   │           └── core/group (is-style-card, border, padding: medium)
│   │               ├── woocommerce/product-image (aspect: 3/4 or aspect-newspaper)
│   │               ├── woocommerce/product-title (small, isLink)
│   │               ├── core/paragraph (edition date, x-small, main-accent)
│   │               ├── woocommerce/product-price (medium, primary)
│   │               └── woocommerce/product-button ("Koop" / "Gelees" badge)
│   │       ├── advads/gblock (dp-archive-in-feed, after row 1)
│   │       └── woocommerce/pagination
│   └── core/column (33.33%)
│       └── wp:template-part (slug: sidebar, tagName: aside)
├── advads/gblock (dp-archive-footer-leaderboard)
├── pattern: die-papier/section-faq-eeditions
└── pattern: die-papier/section-newsletter-cta
```

## Design Details

- **Section style**: `section-white`
- **Product cards**: `is-style-card` with `border-light` border, `medium` padding, `shadow-200` on hover
- **Cover images**: `aspect-newspaper` (210/297) for correct magazine proportions
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Pagination**: Standard WooCommerce pagination with brand-red active state

## Ad Slots

| Slot | Position | Format |
|------|----------|--------|
| `dp-archive-in-feed` | After row 1 (3-4 cards) | MREC/Leaderboard |
| `dp-archive-footer-leaderboard` | Below content, above FAQ | Leaderboard (728x90) |

Additional ads inherited from sidebar template part.

## WooCommerce Blocks Used

- `woocommerce/product-collection` — Edition grid query
- `woocommerce/product-image` — Edition cover
- `woocommerce/product-title` — Edition title
- `woocommerce/product-price` — Price display
- `woocommerce/product-button` — Add to cart / owned badge

## Membership Integration

- **Access gates**: WooCommerce Memberships controls "Gelees" (Read) vs "Koop" (Buy) state per product
- **Server-side**: Membership status determines product button text and linked viewer access
- **React equivalent**: `DemoStateSwitcher` component simulates these states

## Related Files

- `/guidelines/components/templates/taxonomy-product-cat-e-uitgawes.md` — Consumer template guideline
- `/guidelines/components/templates/single-product-e-uitgawe.md` — Individual e-edition template
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscriptions & memberships
- `/prompts/e-editions-orchestrator.md` — E-editions canonical reference
- `/guidelines/components/patterns/woocommerce/woo-single-e-uitgawe.md` — Single e-edition pattern

## Related Blocks

- woocommerce/product-collection
- woocommerce/product-image
- woocommerce/product-title
- woocommerce/product-price
- woocommerce/product-button
- core/group
- core/columns
- core/column
- core/query-title
- advads/gblock
