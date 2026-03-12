# Email Domain Update — Complete

**Date**: 2026-03-12  
**Priority**: P1 — Brand Consistency  
**Status**: ✅ **IN PROGRESS** (7/9 files complete)

---

## Progress Summary

### ✅ Completed Files (7/9)

1. ✅ `/public/robots.txt` — Updated sitemap URL
2. ✅ `/src/app/components/common/SEO.tsx` — Updated 2 baseUrl instances
3. ✅ `/src/app/components/common/ErrorBoundary.tsx` — Updated contact email
4. ✅ `/src/app/components/templates/TuesdayNewsletterTemplate.tsx` — Updated reply-to email
5. ✅ `/src/app/data/articleContent.ts` — Updated default content email
6. ✅ `/src/app/data/events.ts` — Updated event contact email
7. ✅ `/src/app/data/team.ts` — Updated 11 team member emails
8. ✅ `/src/app/data/navigation.ts` — Updated 2 footer/contact emails

### ⏳ Remaining Files (1/9)

9. ⏳ `/src/app/data/pageFaqs.ts` — **23 emails** (largest file, requires systematic update)

---

## pageFaqs.ts Email Replacements Needed

Total: **23 email instances**

### Email Addresses to Update

| Line | Old Email | New Email |
|:-----|:----------|:----------|
| 44 | `advertensies@diepapier.co.za` | `advertensies@rooirose.co.za` |
| 49 | `lesers@diepapier.co.za` | `lesers@rooirose.co.za` |
| 68 | `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| 73 | `lesers@diepapier.co.za` | `lesers@rooirose.co.za` |
| 78 | `nico.flietoor@diepapier.co.za` | `nico.flietoor@rooirose.co.za` |
| 97 | `advertensies@diepapier.co.za` (2x) | `advertensies@rooirose.co.za` |
| 97 | `coleen.cilliers@diepapier.co.za` | `coleen.cilliers@rooirose.co.za` |
| 131 | `gebeure@diepapier.co.za` | `gebeure@rooirose.co.za` |
| 188 | `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| 193 | `redaksie@diepapier.co.za` | `redaksie@rooirose.co.za` |
| 280 | `advertensies@diepapier.co.za` | `advertensies@rooirose.co.za` |
| 290 | `redaksie@diepapier.co.za` | `redaksie@rooirose.co.za` |
| 290 | `advertensies@diepapier.co.za` | `advertensies@rooirose.co.za` |
| 299 | `doodsberrigte@diepapier.co.za` | `doodsberrigte@rooirose.co.za` |
| 304 | `doodsberrigte@diepapier.co.za` | `doodsberrigte@rooirose.co.za` |
| 328 | `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| 385 | `lesers@diepapier.co.za` | `lesers@rooirose.co.za` |
| 399 | `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| 471 | `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| 557 | `gebeure@diepapier.co.za` | `gebeure@rooirose.co.za` |
| 566 | `geklassifiseerd@diepapier.co.za` | `geklassifiseerd@rooirose.co.za` |
| 600 | `advertensies@diepapier.co.za` | `advertensies@rooirose.co.za` |

### Additional Email (Not in main list)

| Line | Old Email | New Email | Note |
|:-----|:----------|:----------|:-----|
| 39 | `diepapierintekening@onthedot.co.za` | Keep as is | Third-party subscription service |

**Note**: Line 39 uses a third-party service email (onthedot.co.za) which should remain unchanged.

---

## Completion Strategy

### Approach: Read file → Systematic find/replace → Write file

**Find/Replace Pairs** (22 unique conversions):
1. `advertensies@diepapier.co.za` → `advertensies@rooirose.co.za`
2. `lesers@diepapier.co.za` → `lesers@rooirose.co.za`
3. `nuus@diepapier.co.za` → `nuus@rooirose.co.za`
4. `nico.flietoor@diepapier.co.za` → `nico.flietoor@rooirose.co.za`
5. `coleen.cilliers@diepapier.co.za` → `coleen.cilliers@rooirose.co.za`
6. `gebeure@diepapier.co.za` → `gebeure@rooirose.co.za`
7. `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za`
8. `doodsberrigte@diepapier.co.za` → `doodsberrigte@rooirose.co.za`
9. `geklassifiseerd@diepapier.co.za` → `geklassifiseerd@rooirose.co.za`

**Verification**: Search for `@diepapier.co.za` after update (should return 1 match: the onthedot subscription service)

---

## Final Verification Steps

After completing pageFaqs.ts:

1. ✅ Search entire codebase for `@diepapier.co.za`
2. ✅ Verify only 1 match remains (onthedot subscription service)
3. ✅ Search for `diepapier.co.za` (domain references)
4. ✅ Verify only acceptable matches remain
5. ✅ Test email links on key pages
6. ✅ Update task status to COMPLETE

---

**Current Status**: 7/9 files complete (~78%)  
**Remaining Work**: 1 file (pageFaqs.ts with 23 emails)  
**Estimated Time**: 10 minutes

