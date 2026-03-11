# Subscribe E-Edition

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/SubscribeEEdition.tsx`
**WordPress target**: Pattern — `page-subscribe-eedition.php`
**Shell doc**: [Commerce & Account Pages](./commerce-account-pages.md)

---

## 1. Purpose

Digital e-edition subscription landing page. Displays 3 pricing tiers (1/3/12 months) with features and "Teken In" buttons that add the subscription product to cart and navigate directly to checkout.

## 2. Route

`/inteken/e-uitgawe`

Also serves `/inteken` (general subscription page with different hero image variant).

## 3. Page Sections (Top to Bottom)

| # | Section | Notes |
|---|---------|-------|
| 1 | **ContentHero** | Background image, value proposition. Uses `HERO_IMAGES.eEditions` for e-edition route, `HERO_IMAGES.subscription` for general route. |
| 2 | **Pricing cards** (3 tiers) | Side-by-side cards with plan details, features, and "Teken In" button |
| 3 | **QuoteSlider** | Brand testimonials carousel |
| 4 | **Upsell options** | Cards linking to single issue (`/e-uitgawes`) and print subscription (`/inteken/aflewering`) |
| 5 | **FAQ section** | `SUBSCRIBE_FAQS` accordion |

## 4. Pricing Tiers

All prices must match `/guidelines/content/pricing.md` § E-Koerant:

| Plan | Price | Per Issue | Features | Badge |
|------|-------|-----------|----------|-------|
| 1 Maand | R140 | R35 | 4 e-uitgawes, Toegang vanaf intekeningdatum, Kanselleer enige tyd, 14-dae gratis proeftydperk | — |
| 3 Maande | R390 | R32.50 | 12 e-uitgawes, Toegang vanaf intekeningdatum, Spaar R30, 14-dae gratis proeftydperk | Gewild |
| 12 Maande | R1,400 | ~R26.92 | 52 e-uitgawes, Toegang vanaf intekeningdatum, Spaar R420, 14-dae gratis proeftydperk | Gewild |

> **Free Trial:** All plans include a 14-day free trial with access to max 2 e-editions. Card details required at sign-up via Payfast. After 14 days, the subscription auto-bills.

## 5. "Teken In" Flow

1. User clicks "Teken In" on a plan card
2. `handleSubscribe()` calls `addItem()` with `type: 'subscription'` and the plan's `productId` (`subscription-{months}-month`)
3. Immediately navigates to `/betaal` (cart page is bypassed)
4. Checkout page shows subscription product pre-loaded in order summary

## 6. Hero Image Variant Logic

```typescript
const isEEditionRoute = location.pathname.includes('/e-uitgawe');
const heroImage = isEEditionRoute ? HERO_IMAGES.eEditions : HERO_IMAGES.subscription;
```

- `/inteken/e-uitgawe` → E-Edition hero (reading theme)
- `/inteken` → General subscription hero (building theme)

## 7. Data Sources

- `E_EDITION_SUBSCRIPTIONS` from `/src/app/data/subscriptions.ts`
- `SUBSCRIBE_FAQS` from `/src/app/data/pageFaqs.ts`
- `CartContext` — `addItem()` for subscription products

## 8. WordPress Mapping

| React Element | WP Construct |
|---|---|
| Hero | `die-papier/section-content-hero` pattern |
| Pricing cards | `die-papier/section-pricing-table` pattern or `dp/pricing-table` block |
| "Teken In" buttons | Links to `/betaal/?add-to-cart={product_id}` (WooCommerce auto-add-to-cart URL) |
| QuoteSlider | `dp/quote-slider` block |
| FAQ | `die-papier/section-faq` pattern |

## 9. Dependencies

SEO, PageContainer, ContentHero, PageFAQSection, QuoteSlider, CartContext, Button, Card

## 10. Cross-References

- [E-Editions User Journeys § 3.4](/guidelines/content/e-editions-user-journeys.md) — Subscribe page specification
- [Pricing](/guidelines/content/pricing.md) — Canonical subscription pricing (MUST match exactly)
- [Commerce & Account Pages](./commerce-account-pages.md) — Group overview