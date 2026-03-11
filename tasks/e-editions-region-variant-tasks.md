# E-Editions Region Variant — Task List

**Created**: 2026-03-09  
**Updated**: 2026-03-09 (Session 2)  
**Report**: `/reports/e-editions-region-variant-audit-2026-03-09.md`  
**Status**: **ALL TASKS COMPLETE** (41/41)

---

## Completed Tasks

### P0 — Trial Period Removal
- [x] 1. Remove trial demo state from `EEditions.tsx`
- [x] 2. Remove trial demo state + banner from `SingleEEdition.tsx`
- [x] 3. Remove trial demo state + banner from `SubscribeEEdition.tsx`
- [x] 4. Remove trial demo state from `MyEEditions.tsx`
- [x] 5. Remove "14-dae gratis proeftydperk" from subscription features (`subscriptions.ts`)
- [x] 6. Remove trial reference from FAQ answer eed-5 (`pageFaqs.ts`)

### P0 — Terminology Updates
- [x] 7. Replace `verval` with `verstryk` in `EEditions.tsx`
- [x] 8. Replace `verval` with `verstryk` in `SingleEEdition.tsx`
- [x] 9. Replace `verval` with `verstryk` in `SubscribeEEdition.tsx`
- [x] 10. Replace `verval` with `verstryk` in `MyEEditions.tsx`
- [x] 11. Replace `Hernu` with `Hernieu` in `EEditions.tsx`
- [x] 12. Replace `Hernu` with `Hernieu` in `SingleEEdition.tsx`
- [x] 13. Replace `Hernu` with `Hernieu` in `SubscribeEEdition.tsx`
- [x] 14. Replace `Hernu` with `Hernieu` in `MyEEditions.tsx`

### P0 — Region Data Update
- [x] 15. Update `EDITION_REGIONS` to new regions: Gauteng en Vrystaat, Wes-Kaap, Oos-Kaap, KwaZulu-Natal
- [x] 16. Add Issuu embed `pdfUrl` to each region
- [x] 17. Update hero subtitle in `EEditions.tsx` with new region names

### P1 — Subscription Region Selector
- [x] 18. Add region selector UI to `SubscribeEEdition.tsx`
- [x] 19. Add validation (must choose region before subscribing)
- [x] 20. Include `variantSlug` and `variantLabel` in subscription cart item
- [x] 21. Add "Kies jou streek by intekening" to subscription features
- [x] 22. Add region info note replacing trial info note

### P1 — Mock Data Region Support
- [x] 23. Add `region` and `regionLabel` to `UserSubscription` interface
- [x] 24. Update `MOCK_SUBSCRIPTION` with default region
- [x] 25. Convert `INDIVIDUAL_PURCHASE_IDS` to include region data
- [x] 26. Add `purchasedRegion` and `purchasedRegionLabel` to `OwnedEdition`
- [x] 27. Update `buildUserLibrary()` to include region from both subscription and purchases
- [x] 28. Update `getOwnershipStatus()` for new INDIVIDUAL_PURCHASE_IDS format

### P1 — Library Region Badge
- [x] 29. Add region badge to `EditionCard` grid view in `MyEEditions.tsx`
- [x] 30. Add region badge to `EditionCard` list view in `MyEEditions.tsx`

### P1 — Region-Specific Reader
- [x] 31. Update `SingleEEdition.tsx` reader to use region-specific Issuu embed URL
- [x] 32. Add "Jy lees die {Region} uitgawe" indicator above reader

### P2 — Import Cleanup
- [x] 33. Remove unused `toast` import from `EEditions.tsx`
- [x] 34. Remove unused `useCart` import from `EEditions.tsx`
- [x] 35. Remove unused `Lock` icon import from `SingleEEdition.tsx`

### P2 — Checkout & Order Confirmation
- [x] 36. Add region variant badge to `Checkout.tsx` order summary
- [x] 37. Update `OrderConfirmation.tsx` to show e-edition order details (title, date, region)

### P3 — Dev Tools & Email Templates
- [x] 38. Update `EmailPreviews.tsx` text: `verval` → `verstryk`, `hernu` → `hernieu`
- [x] 39. Update `EEditionsCommerce.tsx` text where applicable

### P3 — Per-Edition Issuu URLs
- [x] 40. Create `getIssuuEmbedUrl(regionSlug, editionId)` utility function in `eEditions.ts`
- [x] 41. Wire per-edition URL generator into `SingleEEdition.tsx` reader (3-tier fallback: generated → static region → global fallback)

---

## Summary

| Priority | Total | Done |
|:---------|:-----:|:----:|
| P0 | 17 | 17 |
| P1 | 15 | 15 |
| P2 | 5 | 5 |
| P3 | 4 | 4 |
| **Total** | **41** | **41** |

## Per-Edition Issuu URL Architecture (Task 40-41)

### URL Generation Pattern

Each region follows a predictable Issuu document naming convention:

```
https://e.issuu.com/embed.html?d={prefix}_{DD}_{MM}_{YYYY}&u=novusmedianewspapers
```

| Region | Prefix |
|:-------|:-------|
| Gauteng en Vrystaat | `diepapier-gauteng` |
| Wes-Kaap | `diepapier-wc-cape` |
| Oos-Kaap | `diepapier-ep-eastern` |
| KwaZulu-Natal | `diepapier-kz-natal` |

### Date Extraction

The edition ID (`uitgawe-YYYY-MM-DD`) is parsed to extract day/month/year and reformatted as `DD_MM_YYYY` for the Issuu document ID.

### Fallback Chain (3 tiers)

1. **Generated URL** — `getIssuuEmbedUrl(regionSlug, editionId)` — preferred
2. **Static region URL** — `EDITION_REGIONS[n].pdfUrl` — fallback for non-standard IDs
3. **Global fallback** — `FALLBACK_ISSUU_URL` — last resort (Gauteng en Vrystaat, latest edition)
