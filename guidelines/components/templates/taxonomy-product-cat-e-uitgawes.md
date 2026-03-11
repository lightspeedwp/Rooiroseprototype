# Template: taxonomy-product_cat-e-uitgawes.html

**Last updated**: 2026-03-03
**Category**: Template — WooCommerce Product Category
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/taxonomy-product_cat-e-uitgawes.html`
**React equivalent**: `EEditions.tsx`

---

## 1. Purpose

WooCommerce product category archive template for the **E-Uitgawes** (E-Editions) product category. Displays the edition grid with subscription CTA, FAQ section, and sidebar. Auto-resolved by WordPress template hierarchy when the product category slug is `e-uitgawes`.

**Route**: `/e-uitgawes` (product category archive)

## 2. Structure

```
header (template part)
└─ main
   ├─ breadcrumbs (template part)
   └─ pattern: die-papier/woo-archive-e-uitgawes
      ├─ Category Header
      │  ├─ query-title (archive, h1)
      │  └─ paragraph (description)
      ├─ Content Area (70/30 columns)
      │  ├─ column (66.66%)
      │  │  └─ woocommerce/product-collection (grid, 24 per page)
      │  │     ├─ product cards (cover image, title, date, price, buy/owned badge)
      │  │     ├─ advads/gblock (dp-archive-in-feed)
      │  │     └─ pagination
      │  └─ column (33.33%)
      │     └─ sidebar (template part)
      │        ├─ Subscription CTA card
      │        ├─ Newsletter signup
      │        └─ Sidebar ads
      ├─ advads/gblock (dp-archive-footer-leaderboard)
      ├─ pattern: section-faq-eeditions (FAQ accordion)
      └─ pattern: section-newsletter-cta
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `sidebar`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------| 
| Product Collection | `woocommerce/product-collection` | Edition grid query |
| Product Image | `woocommerce/product-image` | Edition cover |
| Product Title | `woocommerce/product-title` | Edition title |
| Product Price | `woocommerce/product-price` | Price display |

## 5. Patterns Used

- `die-papier/woo-archive-e-uitgawes` — main content
- `die-papier/section-faq-eeditions` — FAQ accordion
- `die-papier/section-newsletter-cta` — newsletter CTA

## 6. WP Hierarchy Position

`taxonomy-product_cat-e-uitgawes.html` > `taxonomy-product_cat.html` > `archive-product.html` > `archive.html` > `index.html`

Does NOT need `customTemplates` registration (standard taxonomy hierarchy).

## 7. React Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| `EEditionsPage` grid | `woocommerce/product-collection` (grid layout) |
| Edition card | Product image + title + price blocks |
| `DemoStateSwitcher` | WooCommerce Memberships access control (server-side) |
| `PageFAQSection` | `die-papier/section-faq-eeditions` pattern |
| `SidebarAds` | Inherited from sidebar template part |

## 8. Related Files

- `/guidelines/components/templates/archive-dp-eedition.md` — CPT e-edition archive
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscriptions & memberships
- `/prompts/e-editions-orchestrator.md` — E-editions canonical reference
- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-archive-e-uitgawes.php`
