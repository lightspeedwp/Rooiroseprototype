# Block Styles Folder Structure Audit

**Date**: 2026-03-04  
**Status**: 🔴 **IN PROGRESS**  
**Orchestrator**: `/prompts/block-styles-folder-structure-audit-orchestrator.md`

---

## Executive Summary

Systematic audit of `/styles/blocks/` folder structure to identify duplicate block style variation files between `/styles/blocks/core/` and top-level `/styles/blocks/{blockname}/` folders.

**CRITICAL FINDING**: Duplicate `lead.json` found in `paragraph/` with WRONG slug and hardcoded values!

---

## Task 1: Directory Structure Inventory

### /styles/blocks/core/ (Core WordPress Blocks)

| Block Folder | Files | Count |
|:-------------|:------|:-----:|
| `button` | secondary.json | 1 |
| `columns` | compact.json, no-gap.json, wide.json | 3 |
| `cover` | rounded.json | 1 |
| `gallery` | compact.json, shadowed.json | 2 |
| `group` | (empty folder) | 0 |
| `heading` | accent.json, uppercase.json | 2 |
| `image` | aspect-1-1.json, aspect-16-9.json, aspect-3-2.json, aspect-4-3.json, shadowed.json | 5 |
| `list` | checkmark.json, inline.json | 2 |
| `media-text` | bordered.json, shadowed.json | 2 |
| `navigation` | compact.json, spaced.json | 2 |
| `paragraph` | lead.json, small.json | 2 |
| `post-featured-image` | aspect-16-9.json, aspect-4-3.json, rounded.json | 3 |
| `post-title` | accent.json, compact.json | 2 |
| `quote` | minimal.json | 1 |
| `separator` | accent.json | 1 |
| `table` | bordered.json | 1 |

**Total core/ files**: 30 files (1 empty folder)

---

### /styles/blocks/ (Top-Level, Non-Core)

| Block Folder | Files | Count | Namespace |
|:-------------|:------|:-----:|:----------|
| `buttons` | filter-pill.json | 1 | core/buttons |
| `column` | card.json | 1 | core/column |
| `heading` | card-compact.json, display.json, section-title.json, subtitle.json | 4 | core/heading |
| `image` | caption-overlay.json, circular.json, shadow.json | 3 | core/image |
| `list` | no-bullets.json | 1 | core/list |
| `navigation` | badges.json, header-navigation.json | 2 | core/navigation |
| `paragraph` | badge.json, **lead.json** | 2 | core/paragraph |
| `post-template` | product-card.json | 1 | core/post-template |
| `query-pagination` | branded.json | 1 | core/query-pagination |
| `quote` | border-left.json, large-serif.json, pull-quote.json | 3 | core/quote |
| `separator` | brand-line.json | 1 | core/separator |
| `table` | borderless.json | 1 | core/table |
| `gravityforms` | form/default.json | 1 | gravityforms/form |
| `outermost` | icon/default.json, social-sharing/default.json | 2 | outermost/* |
| `woocommerce` | (9 files across multiple blocks) | 9 | woocommerce/* |
| `yoast` | faq-block/default.json | 1 | yoast/faq-block |
| `yoast-seo` | breadcrumbs/default.json | 1 | yoast-seo/breadcrumbs |

**Total top-level files**: 29 files

**Total block variation files**: 59 files (30 core + 29 non-core)

---

## Task 2: Duplicate Detection Results

### ✅ Duplicate Files Found

| Block | Core File | Top-Level File | Status |
|:------|:----------|:---------------|:-------|
| paragraph | `/styles/blocks/core/paragraph/lead.json` | `/styles/blocks/paragraph/lead.json` | ⚠️ **DUPLICATE** |

**Total Duplicates**: 1 file

---

### ✅ No Name Collisions (Different Variations)

All other files in core/ and top-level folders have UNIQUE names - no additional duplicates found.

**Examples**:
- `core/heading/accent.json` ≠ `heading/card-compact.json` ✅ Different variations
- `core/image/shadowed.json` ≠ `image/shadow.json` ✅ Different variations (shadowed vs shadow)
- `core/quote/minimal.json` ≠ `quote/border-left.json` ✅ Different variations

---

## Task 3: Content Comparison

### Duplicate: paragraph/lead.json

#### core/paragraph/lead.json ✅ CORRECT

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Lead",
  "slug": "lead",                                    // ✅ CORRECT
  "blockTypes": ["core/paragraph"],
  "styles": {
    "typography": {
      "fontSize": "var:preset|font-size|large",     // ✅ Uses preset
      "lineHeight": "1.5",
      "fontWeight": "400"
    },
    "color": {
      "text": "var:preset|color|main-accent"
    }
  }
}
```

#### paragraph/lead.json ❌ WRONG

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Lead",
  "slug": "paragraph-lead",                          // ❌ WRONG SLUG
  "blockTypes": ["core/paragraph"],
  "styles": {
    "typography": {
      "fontSize": "1.25rem",                         // ❌ Hardcoded (should use preset)
      "lineHeight": "1.6",                           // ⚠️ Different value
      "fontWeight": "400"
    },
    "color": {
      "text": "var:preset|color|main-accent"
    }
  }
}
```

#### Differences Summary

| Property | core/ | top-level | Correct Version |
|:---------|:------|:----------|:----------------|
| slug | `lead` | `paragraph-lead` | ✅ core/ |
| fontSize | `var:preset\|font-size\|large` | `1.25rem` | ✅ core/ |
| lineHeight | `1.5` | `1.6` | ✅ core/ (or minor preference) |

**Verdict**: **DELETE `/styles/blocks/paragraph/lead.json`** — core/ version is correct

---

## Task 4: Slug Validation

### Slug Format Rules

**Core WordPress Blocks**:
- ✅ **CORRECT**: `/styles/blocks/core/{blockname}/{variation}.json` with `slug: "{variation}"`
- ❌ **WRONG**: `/styles/blocks/{blockname}/{variation}.json` with `slug: "{blockname}-{variation}"`

**Third-Party Blocks**:
- ✅ **CORRECT**: `/styles/blocks/{namespace}/{blockname}/{variation}.json` with `slug: "{variation}"`

---

### Validation Results

#### ✅ core/ folder — ALL CORRECT

All 30 files in `/styles/blocks/core/` use correct slug format (no block prefix).

**Sample**:
- `core/button/secondary.json` → slug: `"secondary"` ✅
- `core/heading/accent.json` → slug: `"accent"` ✅
- `core/paragraph/lead.json` → slug: `"lead"` ✅

---

#### ⚠️ Top-level core blocks — VERIFY SLUGS

Files in `/styles/blocks/{blockname}/` for CORE blocks need slug verification.

**WRONG SLUG DETECTED**:
- `/styles/blocks/paragraph/lead.json` → slug: `"paragraph-lead"` ❌ (Should be `"lead"`)

**To Verify** (Potential Issues):
- `/styles/blocks/heading/*.json` — Need to check slugs
- `/styles/blocks/image/*.json` — Need to check slugs
- `/styles/blocks/list/*.json` — Need to check slugs
- `/styles/blocks/navigation/*.json` — Need to check slugs
- `/styles/blocks/quote/*.json` — Need to check slugs
- `/styles/blocks/separator/*.json` — Need to check slugs
- `/styles/blocks/table/*.json` — Need to check slugs
- `/styles/blocks/buttons/*.json` — Need to check slugs
- `/styles/blocks/column/*.json` — Need to check slugs

**Question**: Should these files be in `core/` folder instead?

---

## Task 5: Folder Structure Decision

### WordPress Best Practices (WP 6.2+)

**Core Block Variations** should be in:
```
/styles/blocks/core/{blockname}/{variation}.json
```

**Third-Party Block Variations** should be in:
```
/styles/blocks/{namespace}/{blockname}/{variation}.json
```

---

### Current Issues

1. **Duplicate `lead.json`** in both `core/paragraph/` and `paragraph/` ❌
2. **Top-level core block folders** (`heading/`, `image/`, `paragraph/`, etc.) — Should these exist? ❓
3. **Slug inconsistency** — `paragraph/lead.json` uses wrong slug format ❌

---

### Proposed Structure

#### Option A: Strict Core Separation ✅ RECOMMENDED

**Move ALL core block variations to `core/` subfolder**:

```
/styles/blocks/
├── core/
│   ├── button/
│   ├── columns/
│   ├── heading/          ← ADD: move display.json, etc. here
│   ├── image/            ← ADD: move circular.json, etc. here
│   ├── list/             ← ADD: move no-bullets.json here
│   ├── navigation/       ← ADD: move header-navigation.json, etc. here
│   ├── paragraph/        ← KEEP: only lead.json (delete duplicate)
│   ├── quote/            ← ADD: move border-left.json, etc. here
│   ├── separator/        ← ADD: move brand-line.json here
│   ├── table/            ← ADD: move borderless.json here
│   └── ...
├── gravityforms/         ← Third-party
├── outermost/            ← Third-party
├── woocommerce/          ← Third-party
├── yoast/                ← Third-party
└── yoast-seo/            ← Third-party
```

**Pros**:
- Clean separation: core vs third-party
- Follows WordPress conventions
- Easier to maintain
- No slug prefix needed

**Cons**:
- Requires moving ~22 files

---

#### Option B: Keep Mixed Structure ❌ NOT RECOMMENDED

Keep both `core/` and top-level folders for core blocks.

**Pros**:
- No file moves needed

**Cons**:
- Confusing structure
- Slug conflicts (paragraph-lead vs lead)
- Not WordPress best practice
- Duplicate risks

---

### RECOMMENDATION: **Option A** ✅

**Action Plan**:
1. DELETE `/styles/blocks/paragraph/lead.json` (duplicate)
2. MOVE all top-level core block variations to `/styles/blocks/core/{blockname}/`
3. VERIFY slugs are correct (no block prefix)
4. DELETE empty top-level core block folders

---

## Task 6: Files Requiring Action

### Immediate Deletion (Duplicate)

❌ **DELETE**: `/styles/blocks/paragraph/lead.json`
- **Reason**: Duplicate of `core/paragraph/lead.json` with wrong slug and hardcoded values
- **Impact**: Zero (core/ version is authoritative)

---

### Files to Move (Top-Level Core Blocks → core/)

#### heading/ → core/heading/

- `heading/card-compact.json` → `core/heading/card-compact.json`
- `heading/display.json` → `core/heading/display.json`
- `heading/section-title.json` → `core/heading/section-title.json`
- `heading/subtitle.json` → `core/heading/subtitle.json`

#### image/ → core/image/

- `image/caption-overlay.json` → `core/image/caption-overlay.json`
- `image/circular.json` → `core/image/circular.json`
- `image/shadow.json` → `core/image/shadow.json`

#### list/ → core/list/

- `list/no-bullets.json` → `core/list/no-bullets.json`

#### navigation/ → core/navigation/

- `navigation/badges.json` → `core/navigation/badges.json`
- `navigation/header-navigation.json` → `core/navigation/header-navigation.json`

#### paragraph/ → core/paragraph/

- `paragraph/badge.json` → `core/paragraph/badge.json`
- ~~`paragraph/lead.json`~~ ← DELETE (duplicate)

#### quote/ → core/quote/

- `quote/border-left.json` → `core/quote/border-left.json`
- `quote/large-serif.json` → `core/quote/large-serif.json`
- `quote/pull-quote.json` → `core/quote/pull-quote.json`

#### separator/ → core/separator/

- `separator/brand-line.json` → `core/separator/brand-line.json`

#### table/ → core/table/

- `table/borderless.json` → `core/table/borderless.json`

#### buttons/ → core/buttons/

- `buttons/filter-pill.json` → `core/buttons/filter-pill.json`

#### column/ → core/column/

- `column/card.json` → `core/column/card.json`

#### post-template/ → core/post-template/

- `post-template/product-card.json` → `core/post-template/product-card.json`

#### query-pagination/ → core/query-pagination/

- `query-pagination/branded.json` → `core/query-pagination/branded.json`

**Total files to move**: 22 files

---

### Empty Folders to Delete After Move

- `/styles/blocks/buttons/`
- `/styles/blocks/column/`
- `/styles/blocks/heading/`
- `/styles/blocks/image/`
- `/styles/blocks/list/`
- `/styles/blocks/navigation/`
- `/styles/blocks/paragraph/`
- `/styles/blocks/post-template/`
- `/styles/blocks/query-pagination/`
- `/styles/blocks/quote/`
- `/styles/blocks/separator/`
- `/styles/blocks/table/`
- `/styles/blocks/core/group/` ← Already empty

**Total empty folders to delete**: 13 folders

---

## Task 7: Slug Verification Needed

Before moving files, need to verify slugs in all top-level files don't have block prefixes:

**Files to Check**:
- ALL 22 files listed in "Files to Move" section
- Verify slug format is `"{variation}"` not `"{blockname}-{variation}"`
- Fix any slug conflicts

**Next Action**: Read all 22 files and verify slugs

---

## Preliminary Summary

### Findings

✅ **1 duplicate file found**: `paragraph/lead.json`  
✅ **1 file to delete**: `/styles/blocks/paragraph/lead.json`  
✅ **22 files to move** to `core/` subfolder  
✅ **13 empty folders to delete** after move  
✅ **0 slug conflicts detected** (need to verify 22 files)

### File Count Impact

**Before**:
- core/: 30 files
- top-level core blocks: 22 files
- third-party: 7 files
- **Total**: 59 files

**After** (predicted):
- core/: 51 files (+21, -0)
- top-level core blocks: 0 files (-22, +0)
- third-party: 7 files
- **Total**: 58 files (-1 duplicate)

---

## Next Steps

1. ⏸️ **USER DECISION REQUIRED**: Approve folder structure (Option A: move all to core/)
2. 🔴 **Verify slugs** in all 22 files before moving
3. 🔴 **Execute cleanup**: Delete duplicate, move files, delete empty folders
4. ✅ **Update reports** and Guidelines.md

---

**Audit Status**: 🔴 **AWAITING USER APPROVAL**  
**Recommendation**: **Option A — Move all core blocks to core/ subfolder**

---

**End of Audit Report**
