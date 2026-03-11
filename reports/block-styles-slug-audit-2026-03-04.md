# Block Style Variations — Slug Audit Report

**Date**: 2026-03-04  
**Status**: ✅ **AUDIT COMPLETE**  
**Parent Audit**: `/reports/block-styles-folder-structure-audit-2026-03-04.md`

---

## Executive Summary

Systematic slug verification of all 22 top-level core block variation files reveals **17 files with WRONG slug prefixes** that violate WordPress best practices.

**CRITICAL FINDING**: 77% of top-level files use incorrect `{blockname}-{variation}` slug format instead of just `{variation}`.

---

## Slug Format Rules

### WordPress Best Practices (WP 6.2+)

**Core Block Variations in `/styles/blocks/core/{blockname}/`**:
- ✅ **CORRECT**: `"slug": "{variation}"` (e.g., `"lead"`, `"accent"`, `"rounded"`)
- ❌ **WRONG**: `"slug": "{blockname}-{variation}"` (e.g., `"paragraph-lead"`, `"heading-accent"`)

**Rationale**: WordPress automatically namespaces variations by their folder location. Adding block prefix creates redundant slugs like `core/paragraph` → `paragraph-lead` variation → className `is-style-paragraph-lead` (redundant "paragraph").

---

## Audit Results

### ❌ Files with WRONG Slugs (17 files)

| File | Current Slug | Should Be | Impact |
|:-----|:-------------|:----------|:-------|
| `heading/card-compact.json` | `"heading-card-compact"` | `"card-compact"` | ❌ WRONG |
| `heading/display.json` | `"heading-display"` | `"display"` | ❌ WRONG |
| `heading/section-title.json` | `"heading-section-title"` | `"section-title"` | ❌ WRONG |
| `heading/subtitle.json` | `"heading-subtitle"` | `"subtitle"` | ❌ WRONG |
| `image/caption-overlay.json` | `"image-caption-overlay"` | `"caption-overlay"` | ❌ WRONG |
| `image/circular.json` | `"image-circular"` | `"circular"` | ❌ WRONG |
| `image/shadow.json` | `"image-shadow"` | `"shadow"` | ❌ WRONG |
| `list/no-bullets.json` | `"list-no-bullets"` | `"no-bullets"` | ❌ WRONG |
| `navigation/badges.json` | `"navigation-badges"` | `"badges"` | ❌ WRONG |
| `paragraph/badge.json` | `"paragraph-badge"` | `"badge"` | ❌ WRONG |
| `paragraph/lead.json` | `"paragraph-lead"` | `"lead"` | ❌ DUPLICATE (delete) |
| `quote/border-left.json` | `"quote-border-left"` | `"border-left"` | ❌ WRONG |
| `quote/large-serif.json` | `"quote-large-serif"` | `"large-serif"` | ❌ WRONG |
| `quote/pull-quote.json` | `"quote-pull-quote"` | `"pull-quote"` | ❌ WRONG |
| `separator/brand-line.json` | `"separator-brand-line"` | `"brand-line"` | ❌ WRONG |
| `table/borderless.json` | `"table-borderless"` | `"borderless"` | ❌ WRONG |
| `post-template/product-card.json` | `"post-template-product-card"` | `"product-card"` | ❌ WRONG |
| `query-pagination/branded.json` | `"query-pagination-branded"` | `"branded"` | ❌ WRONG |

**Total WRONG slugs**: 18 instances (17 files + 1 duplicate to delete)

---

### ✅ Files with CORRECT Slugs (4 files)

| File | Current Slug | Status |
|:-----|:-------------|:-------|
| `navigation/header-navigation.json` | `"header-navigation"` | ✅ CORRECT |
| `buttons/filter-pill.json` | `"filter-pill"` | ✅ CORRECT |
| `column/card.json` | `"card"` | ✅ CORRECT |

**Note**: These 3 files have correct slugs but are still in wrong folder (should be in `core/` subfolder).

---

## Root Cause Analysis

### Why Do These Files Have Wrong Slugs?

**Hypothesis**: These files were created BEFORE the `/styles/blocks/core/` folder structure was adopted. At that time, developers used block prefixes to prevent slug collisions across different block types.

**Evidence**:
- Files in `core/` folder have correct slugs (no prefix)
- Files in top-level folders have wrong slugs (with prefix)
- This suggests a migration happened but wasn't completed

---

## Pattern/Template Impact Analysis

### CSS Class Names Generated

**Wrong slug** `"heading-display"` generates:
```html
<h2 class="wp-block-heading is-style-heading-display">
```

**Correct slug** `"display"` generates:
```html
<h2 class="wp-block-heading is-style-display">
```

### Pattern/Template Search Required

Need to search ALL patterns/templates/parts for className references:

**Search patterns**:
- `"is-style-heading-*"`
- `"is-style-image-*"`
- `"is-style-paragraph-*"`
- `"is-style-quote-*"`
- `"is-style-separator-*"`
- `"is-style-table-*"`
- `"is-style-list-*"`
- `"is-style-navigation-*"`
- `"is-style-post-template-*"`
- `"is-style-query-pagination-*"`

**CRITICAL**: If patterns use old className format, they will break when slugs are fixed!

---

## Cleanup Strategy

### Option 1: Move + Fix Slugs ✅ RECOMMENDED

**Actions**:
1. DELETE `/styles/blocks/paragraph/lead.json` (duplicate)
2. MOVE 21 files to `core/` subfolders
3. FIX slugs in moved files (remove block prefix)
4. SEARCH patterns/templates for old className references
5. UPDATE pattern classNames to match new slugs

**Pros**:
- WordPress best practices
- Clean folder structure
- Correct slug format

**Cons**:
- Need to update pattern references
- More complex migration

---

### Option 2: Move Only (Keep Wrong Slugs) ❌ NOT RECOMMENDED

**Actions**:
1. DELETE `/styles/blocks/paragraph/lead.json` (duplicate)
2. MOVE 21 files to `core/` subfolders
3. KEEP wrong slugs as-is

**Pros**:
- No pattern updates needed
- Simpler migration

**Cons**:
- Wrong slug format permanently
- Violates WordPress best practices
- Confusing className generation

---

## Recommended Action Plan

### Phase 1: Pattern/Template Reference Search 🔴

**Search for**:
```
is-style-heading-card-compact
is-style-heading-display
is-style-heading-section-title
is-style-heading-subtitle
is-style-image-caption-overlay
is-style-image-circular
is-style-image-shadow
is-style-list-no-bullets
is-style-navigation-badges
is-style-paragraph-badge
is-style-paragraph-lead
is-style-quote-border-left
is-style-quote-large-serif
is-style-quote-pull-quote
is-style-separator-brand-line
is-style-table-borderless
is-style-post-template-product-card
is-style-query-pagination-branded
```

**Files to search**: All 235 pattern/template/part PHP files

**Deliverable**: List of files using old className format

---

### Phase 2: Decision Point 🔴

**IF** pattern references found:
- **Option A**: Update patterns to match correct slugs ✅
- **Option B**: Keep wrong slugs to avoid pattern changes ❌

**IF** no pattern references found:
- **Proceed with slug fixes** ✅

---

### Phase 3: Move Files + Fix Slugs ⏸️

**For each file**:
1. Move to `core/` subfolder
2. Update slug (remove block prefix)
3. Verify no other changes needed

**Example**:
```bash
# Before
/styles/blocks/heading/display.json
{
  "slug": "heading-display",  // ❌
  ...
}

# After
/styles/blocks/core/heading/display.json
{
  "slug": "display",           // ✅
  ...
}
```

---

### Phase 4: Update Pattern References ⏸️

**For each pattern with old className**:
```php
<!-- Before -->
<h2 class="wp-block-heading is-style-heading-display">

<!-- After -->
<h2 class="wp-block-heading is-style-display">
```

---

### Phase 5: Cleanup Empty Folders ⏸️

Delete 13 empty top-level folders after move complete.

---

## User Decision Required

### Question 1: Slug Fix Strategy

Should we fix the slugs to remove block prefixes?

- ✅ **Option A**: Fix slugs + update pattern references (WordPress best practice)
- ❌ **Option B**: Keep wrong slugs (avoid pattern changes)

**Recommendation**: **Option A** — Fix slugs properly

---

### Question 2: Pattern Search Scope

Should we search patterns NOW or proceed with cleanup assuming no references?

- **Option A**: Search patterns first (safer, more time)
- **Option B**: Proceed with cleanup, fix patterns if issues arise (faster, riskier)

**Recommendation**: **Option A** — Search first

---

## Summary Statistics

| Metric | Count |
|:-------|:-----:|
| Total files audited | 22 |
| Files with WRONG slugs | 17 |
| Files with CORRECT slugs | 3 |
| Duplicate to delete | 1 |
| Pattern search required | YES |
| Estimated pattern updates | Unknown (need search) |

---

## Next Steps

1. 🔴 **GET USER APPROVAL**: Slug fix strategy (Option A vs B)
2. 🔴 **SEARCH PATTERNS**: Find all className references to wrong slugs
3. 🔴 **UPDATE PATTERNS**: Fix className references (if Option A)
4. 🔴 **MOVE FILES**: Relocate 21 files to core/ subfolders
5. 🔴 **FIX SLUGS**: Update slug values (if Option A)
6. ✅ **VERIFY**: Test in WordPress Block Editor
7. ✅ **CLEANUP**: Delete 13 empty folders

---

**Audit Status**: ✅ **COMPLETE**  
**Awaiting**: USER DECISION on slug fix strategy

---

**End of Slug Audit Report**
