# E-Editions Region Variant — Implementation Orchestrator

**Created**: 2026-03-09  
**Status**: **ALL TASKS COMPLETE** (41/41 done)  
**Report**: `/reports/e-editions-region-variant-audit-2026-03-09.md`  
**Task List**: `/tasks/e-editions-region-variant-tasks.md`

---

## Background

Die Papier e-editions have been converted from simple WooCommerce products to variable products with 4 regional variants (streke). Each region maps to a `pa_streek` WooCommerce product attribute. The subscription model locks subscribers to one region chosen at signup.

## Regions

| Region | WooCommerce Slug | Issuu Embed Pattern |
|:-------|:-----------------|:--------------------|
| Gauteng en Vrystaat | `gauteng-vrystaat` | `diepapier-gauteng_{date}` |
| Wes-Kaap | `wes-kaap` | `diepapier-wc-cape_{date}` |
| Oos-Kaap | `oos-kaap` | `diepapier-ep-eastern_{date}` |
| KwaZulu-Natal | `kwazulu-natal` | `diepapier-kz-natal_{date}` |

**Issuu publisher**: `novusmedianewspapers`

## Business Rules

1. **Individual purchases**: Buyer must choose a region before adding to cart
2. **Subscriptions**: Subscriber chooses one region at signup; locked to that region for the subscription duration
3. **No trial period**: All trial/proeftydperk references removed from the prototype
4. **No multiple subscriptions**: One active subscription per user

## Terminology

| Old Term | New Term | Context |
|:---------|:---------|:--------|
| `verval` | `verstryk` | Subscription expiry status |
| `Hernu` | `Hernieu` | Subscription renewal action |
| `Verlope` | `Verstrykte` | Demo state label for expired subscribers |

## Architecture

### Data Layer
- `EEditionRegion.pdfUrl` — Region-specific Issuu embed URL
- `UserSubscription.region` / `.regionLabel` — Subscriber's chosen region
- `OwnedEdition.purchasedRegion` / `.purchasedRegionLabel` — Region for each owned edition
- `INDIVIDUAL_PURCHASE_IDS` — Array of `{ editionId, region, regionLabel }` objects

### Page Behavior

| Page | Region Behavior |
|:-----|:----------------|
| **EEditions.tsx** (archive) | Links to SingleEEdition; no direct cart action |
| **SingleEEdition.tsx** (product) | Region selector + add-to-cart; reader shows region-specific embed |
| **SubscribeEEdition.tsx** (subscribe) | Region selector required before plan selection |
| **MyEEditions.tsx** (library) | Region badge on all owned editions |
| **Cart.tsx** | "Streek: {label}" badge on variant items |

### Cart Item Structure
```ts
{
  productId: `${editionId}-${regionSlug}` | `subscription-${months}-month-${regionSlug}`,
  title: `${editionTitle} (${regionLabel})`,
  price: number,
  type: 'single' | 'subscription',
  variantSlug: regionSlug,
  variantLabel: regionLabel,
}
```

## Deferred Work

~~All deferred items now complete:~~
1. ~~**Checkout.tsx** — Add region badge to order summary~~ ✅
2. ~~**OrderConfirmation.tsx** — Show e-edition-specific order details~~ ✅
3. ~~**Dev email templates** — Update terminology in EmailPreviews.tsx~~ ✅
4. ~~**Per-edition Issuu URLs** — Currently only March 6, 2026 has real embed URLs~~ ✅ Resolved via `getIssuuEmbedUrl()` URL generator

## Per-Edition Issuu URL Architecture

Each region follows a predictable Issuu document naming convention. The `getIssuuEmbedUrl(regionSlug, editionId)` function in `eEditions.ts` generates URLs dynamically:

```
https://e.issuu.com/embed.html?d={prefix}_{DD}_{MM}_{YYYY}&u=novusmedianewspapers
```

| Region | Prefix |
|:-------|:-------|
| Gauteng en Vrystaat | `diepapier-gauteng` |
| Wes-Kaap | `diepapier-wc-cape` |
| Oos-Kaap | `diepapier-ep-eastern` |
| KwaZulu-Natal | `diepapier-kz-natal` |

The reader uses a 3-tier fallback: generated URL → static region URL → global fallback.