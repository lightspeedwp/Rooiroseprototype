# E-Editions Region Variant Audit Report

**Date**: 2026-03-09  
**Priority**: P1 — Feature Completion  
**Status**: COMPLETE — All tasks implemented

---

## Scope

Audit and update all e-edition pages to support regional variants (variable WooCommerce products), remove trial period references, update terminology, and integrate region-specific Issuu embeds.

## Changes Made

### 1. Region Data Updated (`eEditions.ts`)

**Old regions** (4): Vrystaat, Noordwes, Gauteng, Noord-Kaap  
**New regions** (4): Gauteng en Vrystaat, Wes-Kaap, Oos-Kaap, KwaZulu-Natal

Each region now has a `pdfUrl` pointing to the correct Issuu embed URL:

| Region | Slug | Issuu Embed |
|:-------|:-----|:------------|
| Gauteng en Vrystaat | `gauteng-vrystaat` | `diepapier-gauteng_06_03_2026` |
| Wes-Kaap | `wes-kaap` | `diepapier-wc-cape_06_03_2026` |
| Oos-Kaap | `oos-kaap` | `diepapier-ep-eastern_06_03_2026` |
| KwaZulu-Natal | `kwazulu-natal` | `diepapier-kz-natal_06_03_2026` |

### 2. Trial Period Removed (All Pages)

All references to `proeftydperk`, `14-dae`, trial banners, trial demo states, and trial subscription features removed from:

- `EEditions.tsx` — Removed trial demo state option and banner
- `SingleEEdition.tsx` — Removed trial state, `isTrial` variable, trial banner
- `SubscribeEEdition.tsx` — Removed trial demo state and banner, updated info note
- `MyEEditions.tsx` — Removed trial demo state
- `subscriptions.ts` — Replaced "14-dae gratis proeftydperk" feature with "Kies jou streek by intekening"
- `pageFaqs.ts` — Removed trial reference from FAQ answer (eed-5)

### 3. Terminology Updates

| Old | New | Context |
|:----|:----|:--------|
| `verval` | `verstryk` | Subscription expiry status |
| `Hernu` | `Hernieu` | Subscription renewal action |
| `Verlope intekenaar` | `Verstrykte intekenaar` | Demo state label |

**Files updated**: EEditions.tsx, SingleEEdition.tsx, SubscribeEEdition.tsx, MyEEditions.tsx

**Files NOT updated** (different context, not e-edition specific):
- `OrderConfirmation.tsx` — "Verval" is credit card expiry column header
- `TermsAndConditions.tsx` — Legal text uses "hernuwing" (different conjugation)
- `AccountActivation.tsx` — Link expiration context
- `CompetitionTerms.tsx` — Prize claim context
- `dev/*.tsx` — Developer tools (EmailPreviews, SystemConfig, EEditionsCommerce)

### 4. Subscription Region Model

**Model chosen**: Subscribers are locked to one region. They choose their region at signup and receive only that region's e-edition for the duration of their subscription. Multiple subscriptions are disallowed.

**Implementation**:
- `SubscribeEEdition.tsx` — Added prominent region selector above pricing cards, with validation (must choose before subscribing)
- `handleSubscribe()` — Now includes `variantSlug` and `variantLabel` in the cart item
- `Cart.tsx` — Already shows "Streek: {label}" badge (no changes needed)
- `mockUserAccess.ts` — `UserSubscription` interface extended with `region` and `regionLabel` fields

### 5. Library Region Badge (`MyEEditions.tsx`)

- Grid view: Blue region badge with MapPin icon positioned at bottom-left of cover
- List view: Blue region badge with MapPin icon in the badge row (next to subscription/purchase badge)
- `OwnedEdition` interface extended with `purchasedRegion` and `purchasedRegionLabel`

### 6. Region-Specific Reader (`SingleEEdition.tsx`)

- Reader now determines the user's region from mock data (subscription region or default for purchased)
- Displays "Jy lees die {Region} uitgawe" indicator above the Issuu iframe
- Uses region-specific Issuu embed URL instead of a single fallback URL

### 7. Import Cleanup (`EEditions.tsx`)

- Removed unused `toast` import (from sonner)
- Removed unused `useCart` import (from CartContext)
- Removed unused `Clock` icon import

### 8. Mock Data Updates (`mockUserAccess.ts`)

- `INDIVIDUAL_PURCHASE_IDS` changed from `string[]` to `{ editionId, region, regionLabel }[]`
- `buildUserLibrary()` updated to include region data from both subscription and individual purchases

## Files Modified (11)

| File | Changes |
|:-----|:--------|
| `/src/app/data/eEditions.ts` | Updated EDITION_REGIONS (4 new regions with Issuu URLs) |
| `/src/app/data/subscriptions.ts` | Removed trial features, added region feature |
| `/src/app/data/pageFaqs.ts` | Removed trial reference from FAQ eed-5 |
| `/src/app/data/mockUserAccess.ts` | Added region to UserSubscription, OwnedEdition, INDIVIDUAL_PURCHASE_IDS; updated buildUserLibrary |
| `/src/app/pages/EEditions.tsx` | Removed trial state, unused imports, fixed text, updated hero subtitle |
| `/src/app/pages/SingleEEdition.tsx` | Removed trial, fixed text, region-specific reader embed |
| `/src/app/pages/SubscribeEEdition.tsx` | Removed trial, added region selector, fixed text |
| `/src/app/pages/MyEEditions.tsx` | Removed trial, added region badges, fixed text |
| `/src/app/pages/Cart.tsx` | No changes needed (already had variant badge) |
| `/src/app/context/CartContext.tsx` | No changes needed (already had variant fields) |
| `/src/app/types.ts` | No changes needed (EEditionRegion already had optional pdfUrl) |

## Known Deferred Items

1. **Checkout.tsx order summary** — Does not yet display region variant for e-edition items (lower priority)
2. **OrderConfirmation.tsx** — Still uses generic mock products, not e-edition aware (separate task)
3. **EmailPreviews.tsx** — Dev tool email templates still reference `verval`/`hernu` (dev-only, not user-facing)
4. **Issuu URLs per older edition** — Only the March 6, 2026 edition has real Issuu embed URLs; older editions fall back to the default Gauteng en Vrystaat embed
