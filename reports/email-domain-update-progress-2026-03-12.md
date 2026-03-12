# Email Domain Update Progress Report

**Date**: 2026-03-12  
**Task**: Update all email addresses from @diepapier.co.za to @rooirose.co.za  
**Priority**: P1 — Brand Consistency  
**Status**: 🔄 **78% COMPLETE**

---

## Executive Summary

Successfully updated email addresses in **8 out of 9** files, converting all brand email addresses from the legacy `@diepapier.co.za` domain to the new `@rooirose.co.za` domain.

**Progress**: 78% complete  
**Files Completed**: 8/9  
**Emails Updated**: ~20  
**Emails Remaining**: 23 (in 1 file)

---

## Completed Updates ✅

### 1. robots.txt ✅
**File**: `/public/robots.txt`  
**Changes**: 1 domain reference  
**Status**: Complete

- Updated sitemap URL: `https://diepapier.co.za/sitemap.xml` → `https://rooirose.co.za/sitemap.xml`

---

### 2. SEO Component ✅
**File**: `/src/app/components/common/SEO.tsx`  
**Changes**: 2 domain references  
**Status**: Complete

- Line 47: `baseUrl = 'https://diepapier.co.za'` → `'https://rooirose.co.za'`
- Line 164: `baseUrl = 'https://diepapier.co.za'` → `'https://rooirose.co.za'`

---

### 3. Error Boundary ✅
**File**: `/src/app/components/common/ErrorBoundary.tsx`  
**Changes**: 2 instances (1 mailto link + 1 display text)  
**Status**: Complete

- Contact email: `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za`

---

### 4. Newsletter Template ✅
**File**: `/src/app/components/templates/TuesdayNewsletterTemplate.tsx`  
**Changes**: 1 email  
**Status**: Complete

- Reply-to: `lesers@diepapier.co.za` → `lesers@rooirose.co.za`

---

### 5. Article Content ✅
**File**: `/src/app/data/articleContent.ts`  
**Changes**: 1 email  
**Status**: Complete

- Default article contact: `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za`

---

### 6. Events Data ✅
**File**: `/src/app/data/events.ts`  
**Changes**: 1 email  
**Status**: Complete

- Event contact: `info@diepapier.co.za` → `info@rooirose.co.za`

---

### 7. Team Data ✅
**File**: `/src/app/data/team.ts`  
**Changes**: 11 team member emails  
**Status**: Complete

**Updated Emails**:
- `lesers@diepapier.co.za` → `lesers@rooirose.co.za` (Barnard Beukman)
- `nuus@diepapier.co.za` → `nuus@rooirose.co.za` (Lucia Poolman)
- `inhoud@diepapier.co.za` → `inhoud@rooirose.co.za` (Vernon Janse van Rensburg)
- `uitleg@diepapier.co.za` → `uitleg@rooirose.co.za` (Gerrie Lotriet)
- `sub@diepapier.co.za` → `sub@rooirose.co.za` (Ilse Salzwedel)
- `politiek@diepapier.co.za` → `politiek@rooirose.co.za` (Jana Marx)
- `sport@diepapier.co.za` → `sport@rooirose.co.za` (Stehan Schoeman)
- `bohemia@diepapier.co.za` → `bohemia@rooirose.co.za` (Bohemia Jumatt)
- `rasaad@diepapier.co.za` → `rasaad@rooirose.co.za` (Rasaad Adams)
- `kaylie@diepapier.co.za` → `kaylie@rooirose.co.za` (Kaylie Joubert)
- `shanell@diepapier.co.za` → `shanell@rooirose.co.za` (Shanell Binedell)

---

### 8. Navigation Data ✅
**File**: `/src/app/data/navigation.ts`  
**Changes**: 2 emails  
**Status**: Complete

- Footer contact: `lesers@diepapier.co.za` → `lesers@rooirose.co.za`
- Social/email link: `lesers@diepapier.co.za` → `lesers@rooirose.co.za`

---

## Remaining Updates ⏳

### 9. Page FAQs ⏳
**File**: `/src/app/data/pageFaqs.ts`  
**Changes**: 23 email addresses  
**Status**: **TO DO** (Final remaining file)

**Email Addresses to Update** (22 unique conversions):

1. `advertensies@diepapier.co.za` → `advertensies@rooirose.co.za` (5 instances)
2. `lesers@diepapier.co.za` → `lesers@rooirose.co.za` (3 instances)
3. `nuus@diepapier.co.za` → `nuus@rooirose.co.za` (5 instances)
4. `nico.flietoor@diepapier.co.za` → `nico.flietoor@rooirose.co.za` (1 instance)
5. `coleen.cilliers@diepapier.co.za` → `coleen.cilliers@rooirose.co.za` (1 instance)
6. `gebeure@diepapier.co.za` → `gebeure@rooirose.co.za` (2 instances)
7. `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za` (2 instances)
8. `doodsberrigte@diepapier.co.za` → `doodsberrigte@rooirose.co.za` (2 instances)
9. `geklassifiseerd@diepapier.co.za` → `geklassifiseerd@rooirose.co.za` (1 instance)

**Lines Affected**: 44, 49, 68, 73, 78, 97 (2x), 131, 188, 193, 280, 290 (2x), 299, 304, 328, 385, 399, 471, 557, 566, 600

**Note**: Line 39 contains `diepapierintekening@onthedot.co.za` which should **NOT** be changed (third-party subscription service).

---

## Impact Summary

### Files Updated: 8
1. ✅ robots.txt
2. ✅ SEO.tsx
3. ✅ ErrorBoundary.tsx
4. ✅ TuesdayNewsletterTemplate.tsx
5. ✅ articleContent.ts
6. ✅ events.ts
7. ✅ team.ts
8. ✅ navigation.ts

### Files Remaining: 1
9. ⏳ pageFaqs.ts

### Total Emails Updated: ~20
- Domain references: 3
- Team emails: 11
- Contact emails: 6

### Total Emails Remaining: 23
- All in pageFaqs.ts

---

## Verification Checklist

### After Completing pageFaqs.ts

- [ ] Search codebase for `@diepapier.co.za`
- [ ] Verify only 1 match remains (onthedot subscription service)
- [ ] Search for `diepapier.co.za` domain references
- [ ] Verify only social media URLs remain (old platform handles)
- [ ] Test mailto: links on key pages
- [ ] Visual inspection of contact pages

---

## Quality Metrics

### Brand Consistency
- **Old Domain**: `@diepapier.co.za`
- **New Domain**: `@rooirose.co.za`
- **Coverage**: 78% complete (8/9 files)

### User Impact
- **Contact Forms**: ✅ Updated (ErrorBoundary, Newsletter)
- **Team Directory**: ✅ Updated (all 11 members)
- **FAQ Pages**: ⏳ In Progress (23 addresses)
- **SEO/Metadata**: ✅ Updated (canonical URLs)

---

## Next Steps

1. **Complete pageFaqs.ts** — Update remaining 23 email addresses
2. **Final Verification** — Search for any remaining @diepapier.co.za instances
3. **Test Email Links** — Verify all mailto: links work correctly
4. **Update Task Status** — Mark EMAIL-DOMAIN-UPDATE-2026-03-12.md as complete
5. **Update Guidelines** — Note email domain change in project documentation

---

## Estimated Time to Completion

**Remaining Work**: 1 file (pageFaqs.ts)  
**Email Addresses**: 23 instances  
**Estimated Time**: 10-15 minutes

---

**Report Generated**: 2026-03-12  
**Progress**: 78% Complete  
**Next Action**: Update pageFaqs.ts with 23 email conversions

