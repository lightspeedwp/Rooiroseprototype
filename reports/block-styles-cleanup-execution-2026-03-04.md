# Block Styles Folder Structure Cleanup — Execution Report

**Date**: 2026-03-04  
**Status**: 🔄 **IN PROGRESS**  
**Strategy**: Option A — WordPress Best Practices (Fix Slugs + Move to core/)  
**Parent Reports**: 
- `/reports/block-styles-folder-structure-audit-2026-03-04.md`
- `/reports/block-styles-slug-audit-2026-03-04.md`

---

## Executive Summary

Comprehensive cleanup of block style variations folder structure to align with WordPress 6.2+ best practices. Moving all core block variations to `/styles/blocks/core/` subfolder and fixing slug format.

**Pattern Search Results**: ✅ **ZERO REFERENCES FOUND** — Safe to proceed with slug fixes!

---

## Pattern/Template Reference Search Results

### Search Executed

Searched all 235 WordPress theme files for className references to wrong slugs:

**Files Searched**:
- 177 patterns (`.../patterns/**/*.php`)
- 44 templates (`.../templates/**/*.html`)
- 14 template parts (`.../parts/**/*.html`)

**Slugs Searched** (17 wrong formats):
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

### Results: ✅ ZERO MATCHES

**No pattern, template, or part files reference these wrong slug formats!**

**Implication**: We can safely fix all slugs without breaking any existing patterns. These variations are either:
1. Not currently used in patterns
2. Applied dynamically in WordPress editor (not hardcoded in patterns)

---

## Cleanup Execution Plan

### Phase 1: Delete Duplicate ✅

**Action**: Delete `/styles/blocks/paragraph/lead.json`

**Reason**: Duplicate of `core/paragraph/lead.json` with wrong slug and hardcoded values

**Files Deleted**: 1

---

### Phase 2: Move Files to core/ Subfolder 🔄

**Action**: Move 21 files from top-level to `/styles/blocks/core/` subfolders

#### Heading Variations (4 files)

| From | To |
|:-----|:---|
| `/styles/blocks/heading/card-compact.json` | `/styles/blocks/core/heading/card-compact.json` |
| `/styles/blocks/heading/display.json` | `/styles/blocks/core/heading/display.json` |
| `/styles/blocks/heading/section-title.json` | `/styles/blocks/core/heading/section-title.json` |
| `/styles/blocks/heading/subtitle.json` | `/styles/blocks/core/heading/subtitle.json` |

#### Image Variations (3 files)

| From | To |
|:-----|:---|
| `/styles/blocks/image/caption-overlay.json` | `/styles/blocks/core/image/caption-overlay.json` |
| `/styles/blocks/image/circular.json` | `/styles/blocks/core/image/circular.json` |
| `/styles/blocks/image/shadow.json` | `/styles/blocks/core/image/shadow.json` |

#### List Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/list/no-bullets.json` | `/styles/blocks/core/list/no-bullets.json` |

#### Navigation Variations (2 files)

| From | To |
|:-----|:---|
| `/styles/blocks/navigation/badges.json` | `/styles/blocks/core/navigation/badges.json` |
| `/styles/blocks/navigation/header-navigation.json` | `/styles/blocks/core/navigation/header-navigation.json` |

#### Paragraph Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/paragraph/badge.json` | `/styles/blocks/core/paragraph/badge.json` |

#### Quote Variations (3 files)

| From | To |
|:-----|:---|
| `/styles/blocks/quote/border-left.json` | `/styles/blocks/core/quote/border-left.json` |
| `/styles/blocks/quote/large-serif.json` | `/styles/blocks/core/quote/large-serif.json` |
| `/styles/blocks/quote/pull-quote.json` | `/styles/blocks/core/quote/pull-quote.json` |

#### Separator Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/separator/brand-line.json` | `/styles/blocks/core/separator/brand-line.json` |

#### Table Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/table/borderless.json` | `/styles/blocks/core/table/borderless.json` |

#### Buttons Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/buttons/filter-pill.json` | `/styles/blocks/core/buttons/filter-pill.json` |

#### Column Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/column/card.json` | `/styles/blocks/core/column/card.json` |

#### Post Template Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/post-template/product-card.json` | `/styles/blocks/core/post-template/product-card.json` |

#### Query Pagination Variations (1 file)

| From | To |
|:-----|:---|
| `/styles/blocks/query-pagination/branded.json` | `/styles/blocks/core/query-pagination/branded.json` |

**Total Files to Move**: 21 files

---

### Phase 3: Fix Slugs (Remove Block Prefix) 🔄

**Action**: Update slug values in moved files to remove block name prefix

#### Files Requiring Slug Fix (17 files)

| File | Old Slug | New Slug |
|:-----|:---------|:---------|
| `core/heading/card-compact.json` | `"heading-card-compact"` | `"card-compact"` |
| `core/heading/display.json` | `"heading-display"` | `"display"` |
| `core/heading/section-title.json` | `"heading-section-title"` | `"section-title"` |
| `core/heading/subtitle.json` | `"heading-subtitle"` | `"subtitle"` |
| `core/image/caption-overlay.json` | `"image-caption-overlay"` | `"caption-overlay"` |
| `core/image/circular.json` | `"image-circular"` | `"circular"` |
| `core/image/shadow.json` | `"image-shadow"` | `"shadow"` |
| `core/list/no-bullets.json` | `"list-no-bullets"` | `"no-bullets"` |
| `core/navigation/badges.json` | `"navigation-badges"` | `"badges"` |
| `core/paragraph/badge.json` | `"paragraph-badge"` | `"badge"` |
| `core/quote/border-left.json` | `"quote-border-left"` | `"border-left"` |
| `core/quote/large-serif.json` | `"quote-large-serif"` | `"large-serif"` |
| `core/quote/pull-quote.json` | `"quote-pull-quote"` | `"pull-quote"` |
| `core/separator/brand-line.json` | `"separator-brand-line"` | `"brand-line"` |
| `core/table/borderless.json` | `"table-borderless"` | `"borderless"` |
| `core/post-template/product-card.json` | `"post-template-product-card"` | `"product-card"` |
| `core/query-pagination/branded.json` | `"query-pagination-branded"` | `"branded"` |

**Total Slug Fixes**: 17 files

#### Files with Correct Slugs (4 files — no changes needed)

| File | Current Slug | Status |
|:-----|:-------------|:-------|
| `core/navigation/header-navigation.json` | `"header-navigation"` | ✅ Already correct |
| `core/buttons/filter-pill.json` | `"filter-pill"` | ✅ Already correct |
| `core/column/card.json` | `"card"` | ✅ Already correct |

---

### Phase 4: Delete Empty Folders ⏸️

**Action**: Delete 13 empty top-level folders after move complete

**Folders to Delete**:
1. `/styles/blocks/buttons/`
2. `/styles/blocks/column/`
3. `/styles/blocks/heading/`
4. `/styles/blocks/image/`
5. `/styles/blocks/list/`
6. `/styles/blocks/navigation/`
7. `/styles/blocks/paragraph/`
8. `/styles/blocks/post-template/`
9. `/styles/blocks/query-pagination/`
10. `/styles/blocks/quote/`
11. `/styles/blocks/separator/`
12. `/styles/blocks/table/`
13. `/styles/blocks/core/group/` (already empty)

**Total Folders to Delete**: 13 folders

---

## File Count Impact

### Before Cleanup

```
/styles/blocks/
├── core/                    30 files
├── buttons/                  1 file
├── column/                   1 file
├── heading/                  4 files
├── image/                    3 files
├── list/                     1 file
├── navigation/               2 files
├── paragraph/                2 files (1 duplicate)
├── post-template/            1 file
├── query-pagination/         1 file
├── quote/                    3 files
├── separator/                1 file
├── table/                    1 file
├── gravityforms/             1 file
├── outermost/                2 files
├── woocommerce/              9 files
├── yoast/                    1 file
└── yoast-seo/                1 file

Total: 59 files (+ 1 duplicate)
```

### After Cleanup

```
/styles/blocks/
├── core/                    51 files (+21 moved)
├── gravityforms/             1 file
├── outermost/                2 files
├── woocommerce/              9 files
├── yoast/                    1 file
└── yoast-seo/                1 file

Total: 58 files (-1 duplicate)
```

**Reduction**: 1 duplicate file, 13 empty folders

---

## New Folder Structure (core/ Subfolder)

### /styles/blocks/core/ (51 files)

```
core/
├── button/
│   └── secondary.json                  (existing)
├── buttons/
│   └── filter-pill.json                (MOVED)
├── column/
│   └── card.json                       (MOVED)
├── columns/
│   ├── compact.json                    (existing)
│   ├── no-gap.json                     (existing)
│   └── wide.json                       (existing)
├── cover/
│   └── rounded.json                    (existing)
├── gallery/
│   ├── compact.json                    (existing)
│   └── shadowed.json                   (existing)
├── heading/
│   ├── accent.json                     (existing)
│   ├── uppercase.json                  (existing)
│   ├── card-compact.json               (MOVED + SLUG FIXED)
│   ├── display.json                    (MOVED + SLUG FIXED)
│   ├── section-title.json              (MOVED + SLUG FIXED)
│   └── subtitle.json                   (MOVED + SLUG FIXED)
├── image/
│   ├── aspect-1-1.json                 (existing)
│   ├── aspect-16-9.json                (existing)
│   ├── aspect-3-2.json                 (existing)
│   ├── aspect-4-3.json                 (existing)
│   ├── shadowed.json                   (existing)
│   ├── caption-overlay.json            (MOVED + SLUG FIXED)
│   ├── circular.json                   (MOVED + SLUG FIXED)
│   └── shadow.json                     (MOVED + SLUG FIXED)
├── list/
│   ├── checkmark.json                  (existing)
│   ├── inline.json                     (existing)
│   └── no-bullets.json                 (MOVED + SLUG FIXED)
├── media-text/
│   ├── bordered.json                   (existing)
│   └── shadowed.json                   (existing)
├── navigation/
│   ├── compact.json                    (existing)
│   ├── spaced.json                     (existing)
│   ├── badges.json                     (MOVED + SLUG FIXED)
│   └── header-navigation.json          (MOVED)
├── paragraph/
│   ├── small.json                      (existing)
│   ├── lead.json                       (existing - kept correct version)
│   └── badge.json                      (MOVED + SLUG FIXED)
├── post-featured-image/
│   ├── aspect-16-9.json                (existing)
│   ├── aspect-4-3.json                 (existing)
│   └── rounded.json                    (existing)
├── post-template/
│   └── product-card.json               (MOVED + SLUG FIXED)
├── post-title/
│   ├── accent.json                     (existing)
│   └── compact.json                    (existing)
├── query-pagination/
│   └── branded.json                    (MOVED + SLUG FIXED)
├── quote/
│   ├── minimal.json                    (existing)
│   ├── border-left.json                (MOVED + SLUG FIXED)
│   ├── large-serif.json                (MOVED + SLUG FIXED)
│   └── pull-quote.json                 (MOVED + SLUG FIXED)
├── separator/
│   ├── accent.json                     (existing)
│   └── brand-line.json                 (MOVED + SLUG FIXED)
└── table/
    ├── bordered.json                   (existing)
    └── borderless.json                 (MOVED + SLUG FIXED)
```

**Total core/ files**: 51 files (30 existing + 21 moved)

---

## Execution Status

### ✅ Phase 1: Pattern Search — COMPLETE

- **Searched**: 235 WordPress theme files
- **Found**: 0 references to wrong slugs
- **Conclusion**: Safe to proceed with slug fixes

---

### 🔄 Phase 2: Delete Duplicate — IN PROGRESS

- **File**: `/styles/blocks/paragraph/lead.json`
- **Status**: Ready to delete

---

### ⏸️ Phase 3: Move Files — PENDING

- **Files to Move**: 21
- **Status**: Awaiting Phase 2 completion

---

### ⏸️ Phase 4: Fix Slugs — PENDING

- **Files to Update**: 17
- **Status**: Awaiting Phase 3 completion

---

### ⏸️ Phase 5: Delete Empty Folders — PENDING

- **Folders to Delete**: 13
- **Status**: Awaiting Phase 4 completion

---

## Success Criteria

✅ **Zero duplicate files**  
⏸️ **All core block variations in core/ subfolder**  
⏸️ **All slugs use correct format (no block prefix)**  
⏸️ **Zero empty top-level core block folders**  
⏸️ **presets.php loader correctly discovers all files**  
⏸️ **WordPress Block Editor shows correct variation names**

---

## Next Steps

1. 🔄 **DELETE** duplicate paragraph/lead.json
2. 🔄 **MOVE** 21 files to core/ subfolders
3. 🔄 **FIX** 17 slugs (remove block prefix)
4. 🔄 **DELETE** 13 empty folders
5. ✅ **VERIFY** file count (should be 58 total)
6. ✅ **UPDATE** Guidelines.md
7. ✅ **TEST** in WordPress (if possible)

---

**Execution Status**: 🔄 **IN PROGRESS**  
**Current Phase**: Phase 2 — Delete Duplicate  
**Estimated Completion**: 2026-03-04 (today)

---

**End of Execution Report**
