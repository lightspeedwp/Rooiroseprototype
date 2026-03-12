# Email Domain Update Task — rooi rose

**Date**: 2026-03-12  
**Priority**: P1 — Brand Consistency  
**Status**: ⏳ To Do

---

## Issue

Multiple email addresses throughout the codebase still reference the old `@diepapier.co.za` domain instead of the new `@rooirose.co.za` domain.

**Files Affected**: 8 files, 43+ instances

---

## Email Mappings

### Generic Addresses

| Old Email | New Email |
|:----------|:----------|
| `redaksie@diepapier.co.za` | `redaksie@rooirose.co.za` |
| `lesers@diepapier.co.za` | `lesers@rooirose.co.za` |
| `nuus@diepapier.co.za` | `nuus@rooirose.co.za` |
| `advertensies@diepapier.co.za` | `advertensies@rooirose.co.za` |
| `info@diepapier.co.za` | `info@rooirose.co.za` |
| `gebeure@diepapier.co.za` | `gebeure@rooirose.co.za` |
| `inhoud@diepapier.co.za` | `inhoud@rooirose.co.za` |
| `uitleg@diepapier.co.za` | `uitleg@rooirose.co.za` |
| `sub@diepapier.co.za` | `sub@rooirose.co.za` |
| `politiek@diepapier.co.za` | `politiek@rooirose.co.za` |
| `sport@diepapier.co.za` | `sport@rooirose.co.za` |

### Personal Addresses

| Old Email | New Email |
|:----------|:----------|
| `bohemia@diepapier.co.za` | `bohemia@rooirose.co.za` |
| `rasaad@diepapier.co.za` | `rasaad@rooirose.co.za` |
| `kaylie@diepapier.co.za` | `kaylie@rooirose.co.za` |
| `shanell@diepapier.co.za` | `shanell@rooirose.co.za` |
| `nico.flietoor@diepapier.co.za` | `nico.flietoor@rooirose.co.za` |
| `coleen.cilliers@diepapier.co.za` | `coleen.cilliers@rooirose.co.za` |

---

## Files to Update

### 1. `/src/app/components/common/ErrorBoundary.tsx`
- Lines 140-141
- Update: `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za`

### 2. `/src/app/components/common/SEO.tsx`
- Lines 47, 164
- Update: `https://diepapier.co.za` → `https://rooirose.co.za`

### 3. `/src/app/components/templates/TuesdayNewsletterTemplate.tsx`
- Line 27
- Update: `lesers@diepapier.co.za` → `lesers@rooirose.co.za`

### 4. `/src/app/data/articleContent.ts`
- Line 188
- Update: `redaksie@diepapier.co.za` → `redaksie@rooirose.co.za`

### 5. `/src/app/data/events.ts`
- Line 221
- Update: `info@diepapier.co.za` → `info@rooirose.co.za`

### 6. `/src/app/data/team.ts`
- Lines 50, 60, 70, 80, 90, 101, 111, 121, 131, 141, 151
- Update all email addresses (11 instances)

### 7. `/src/app/data/navigation.ts`
- Lines 163, 187
- Update: `lesers@diepapier.co.za` → `lesers@rooirose.co.za`

### 8. `/src/app/data/pageFaqs.ts`
- Multiple lines (44, 49, 68, 73, 78, 97, 131, 188, 193, 280+)
- Update all email addresses in FAQ answers (15+ instances)

---

## Implementation Notes

### Domain Update
- Old domain: `diepapier.co.za`
- New domain: `rooirose.co.za`

### Email Format
- Keep username parts unchanged (e.g., `redaksie@`, `lesers@`)
- Only change domain portion

### Testing
After updates, verify:
1. All `mailto:` links work correctly
2. No broken email links in rendered pages
3. Search codebase for any remaining `@diepapier.co.za` instances

---

## Search Command

To find all instances:
```bash
grep -r "@diepapier.co.za" src/
```

To find domain references:
```bash
grep -r "diepapier\.co\.za" src/
```

---

## Priority

**P1 (High)** — This affects brand consistency and user contact information. Should be completed before final handoff to ensure all email communications go to the correct domain.

---

## Estimated Time

**Time**: 15-20 minutes (8 files, systematic find-and-replace)

---

## Status

⏳ **To Do** — Ready to execute

