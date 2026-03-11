# Single E-Uitgawe Product Pattern

**Last updated**: 2026-03-03
**Folder**: patterns/woocommerce/
**Slug**: die-papier/woo-single-e-uitgawe
**File**: `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-single-e-uitgawe.php`

## Description

Full product layout pattern for individual E-Uitgawe (E-Edition) products. Displays edition cover image, title, date, price, add-to-cart button, trust badges, social sharing, embedded Issuu viewer (for members), related editions, and newsletter CTA.

**Template consumer**: `single-product-e-uitgawe.html` (custom template, requires manual assignment)

## React Equivalent

- **Component**: `SingleEEdition.tsx`
- **Key features**: Product image, price/buy section, Issuu embedded viewer, DemoStateSwitcher (purchase states), related editions grid, social sharing
- **Route**: `/e-uitgawe/:slug`

## Block Composition

```
woocommerce/store-notices
core/columns (50/50, blockGap: x-large)
├── core/column (50%)
│   └── woocommerce/product-image
│       └── aspect: 3/4 (aspect-newspaper for magazine covers)
└── core/column (50%)
    ├── woocommerce/product-title (h1, xx-large)
    ├── core/paragraph (edition date, small, main-accent)
    ├── woocommerce/product-price (x-large, primary)
    ├── woocommerce/add-to-cart-with-options
    │   └── Simple product: quantity selector + "Voeg by mandjie" button
    ├── core/group (trust badges, flex, blockGap: small)
    │   ├── outermost/icon (shield-check) + "Veilige betaling"
    │   ├── outermost/icon (download) + "Onmiddellike toegang"
    │   └── outermost/icon (refresh-ccw) + "Geen hernuwing"
    └── outermost/social-sharing (Facebook, WhatsApp, X, Email, Copy Link)
core/group (Issuu Viewer Section, section-muted)
└── core/group (constrained)
    ├── core/heading (h2) — "Lees hierdie uitgawe"
    ├── core/html (Issuu iframe embed placeholder)
    └── core/paragraph (access gate message for non-members)
core/group (Related Editions, section-white)
└── core/group (constrained)
    ├── core/heading (h2) — "Verwante uitgawes"
    └── woocommerce/product-collection
        ├── same category, exclude current, 4 items
        └── grid layout (4 columns desktop, 2 mobile)
pattern: die-papier/section-newsletter-cta
```

## Design Details

- **Product image**: `aspect-newspaper` (210/297) for magazine cover proportions
- **Two-column layout**: Equal 50/50 split with `x-large` gap
- **Trust badges**: `outermost/icon` blocks (sm size, 16px) with `main-accent` text
- **Social sharing**: SA priority order (Facebook, WhatsApp, X, Email, Copy Link)
- **Issuu viewer**: Wrapped in `section-muted` background, constrained width
- **Related editions**: 4-column grid, same `is-style-card` treatment as archive

## Membership & Access Control

| User State | Product Button | Issuu Viewer | Price Display |
|-----------|---------------|-------------|---------------|
| Non-member, not purchased | "Voeg by mandjie" | Hidden, gate message shown | Full price |
| Non-member, purchased | "Gelees" badge | Visible, embedded iframe | "Gekoop" |
| Subscriber member | "Gelees" badge | Visible, embedded iframe | "Ingesluit by intekening" |

- **Implementation**: WooCommerce Memberships restricts `core/html` (Issuu embed) visibility server-side
- **React equivalent**: `DemoStateSwitcher` simulates these three states

## Ad Slots

None within this pattern. Single product pages rely on:
- Header leaderboard (from header template part)
- Sidebar ads (none — this template has no sidebar)

## WooCommerce Blocks Used

- `woocommerce/store-notices` — Cart/purchase feedback messages
- `woocommerce/product-image` — Edition cover scan
- `woocommerce/product-title` — Edition title
- `woocommerce/product-price` — Individual purchase price
- `woocommerce/add-to-cart-with-options` — Purchase button with quantity
- `woocommerce/product-collection` — Related editions query

## Related Files

- `/guidelines/components/templates/single-product-e-uitgawe.md` — Consumer template guideline
- `/guidelines/components/patterns/woocommerce/woo-archive-e-uitgawes.md` — E-Uitgawes archive pattern
- `/guidelines/components/templates/taxonomy-product-cat-e-uitgawes.md` — Archive template
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscriptions & memberships
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md` — Social sharing integration
- `/prompts/e-editions-orchestrator.md` — E-editions canonical reference

## Related Blocks

- woocommerce/store-notices
- woocommerce/product-image
- woocommerce/product-title
- woocommerce/product-price
- woocommerce/add-to-cart-with-options
- woocommerce/product-collection
- outermost/social-sharing
- outermost/icon
- core/group
- core/columns
- core/column
- core/heading
- core/paragraph
- core/html
