# Template: single-product-inteken.html

**Last updated**: 2026-03-03
**Category**: Template — WooCommerce Custom Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-product-inteken.html`
**React equivalent**: `SubscribeEEdition.tsx`

---

## 1. Purpose

WooCommerce single product template for the **Inteken** (Subscribe) product. Displays the subscription pricing table with 3 tiers (1-month, 3-month, 12-month), FAQ section, and testimonials. This template auto-resolves for the product with slug `inteken` via the WordPress template hierarchy (`single-product-{slug}.html`).

**Route**: `/product/inteken` (WooCommerce product permalink)

## 2. Structure

```
header (template part)
└─ main
   ├─ breadcrumbs (template part)
   └─ pattern: die-papier/woo-subscription-pricing-table
      ├─ Section Header
      │  ├─ heading (h2): "Kies jou plan"
      │  └─ paragraph: "Teken in vir onbeperkte toegang..."
      ├─ Pricing Columns (3 cards)
      │  ├─ 1-Maand: R140/maand
      │  ├─ 3-Maande: R390 (R130/maand) — "Gewildste" badge
      │  └─ 12-Maande: R1400 (R116.67/maand) — "Beste waarde" badge
      │  └─ Each card: features list + woocommerce/add-to-cart button
      ├─ Trust Section (logos, guarantees)
      ├─ FAQ Section
      └─ pattern: section-newsletter-cta
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------| 
| Product Price | `woocommerce/product-price` | Tier pricing |
| Add to Cart | `woocommerce/add-to-cart-form` | Subscribe buttons |
| Store Notices | `woocommerce/store-notices` | Feedback |

## 5. Patterns Used

- `die-papier/woo-subscription-pricing-table` — pricing table (already exists)
- `die-papier/section-newsletter-cta` — newsletter CTA

## 6. theme.json Registration

```json
{
  "name": "single-product-inteken",
  "title": "Inteken Produk",
  "postTypes": ["product"]
}
```

## 7. WP Hierarchy Position

**Custom Template** registered in `theme.json`. Can also auto-resolve via `single-product-inteken.html` for product slug `inteken`.

Fallback: `single-product.html` > `single.html` > `index.html`

## 8. React Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| Pricing cards (3 tiers) | `woo-subscription-pricing-table` pattern |
| `handleSubscribe()` | WooCommerce Add to Cart + redirect |
| `QuoteSlider` | Testimonial block or pattern |
| `PageFAQSection` | FAQ accordion pattern |
| `DemoStateSwitcher` | WooCommerce Memberships (server-side) |

## 9. Ad Slots

Minimal ads — subscription page. Sidebar ads only if sidebar is present (currently pattern is full-width).

## 10. Related Files

- `/guidelines/components/templates/single-product.md` — Generic single product
- `/guidelines/content/pricing.md` — Canonical subscription pricing
- `/prompts/e-editions-orchestrator.md` — E-editions canonical reference
- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-subscription-pricing-table.php`
