# Block Style Variations Cleanup Orchestrator

**Date Created**: 2026-03-04  
**Priority**: P1 — Production Readiness  
**Estimated Effort**: 6-8 hours

---

## Problem Statement

The Die Papier theme currently has **duplicate block style variations** that conflict with WordPress core variations. We're registering custom JSON files for variations that WordPress already provides natively (e.g., `core/button` outline, `core/image` rounded, etc.).

**Critical Issue**: When you register a block style variation in a separate JSON file AND WordPress core already has that variation, you end up with:
- A WordPress core variation (e.g., "Outline")
- A duplicate custom variation (e.g., "Outline") 

This creates confusion in the Block Editor and violates WordPress best practices.

---

## WordPress Core Block Variations (6.2+)

According to WordPress documentation, these core blocks have **native variations** that should be defined in `theme.json` NOT as separate JSON files:

| Block | Native Variations | Example Slug |
|:------|:------------------|:-------------|
| `core/button` | `fill` (default), `outline` | `.is-style-outline` |
| `core/separator` | `wide`, `dots` | `.is-style-wide`, `.is-style-dots` |
| `core/image` | `rounded` | `.is-style-rounded` |
| `core/quote` | `plain` | `.is-style-plain` |
| `core/site-logo` | `rounded` | `.is-style-rounded` |
| `core/social-links` | `logos-only`, `pill-shape` | `.is-style-logos-only`, `.is-style-pill-shape` |
| `core/table` | `stripes` | `.is-style-stripes` |
| `core/tag-cloud` | `outline` | `.is-style-outline` |

**Source**: `/src/imports/theme-styles.json` (WordPress 6.2+ documentation)

---

## Correct Implementation Method

### ❌ WRONG: Separate JSON Files
```
/styles/blocks/button/outline.json
/styles/blocks/core/button/outline.json
/styles/blocks/image/rounded.json
/styles/blocks/core/image/rounded.json
```

### ✅ CORRECT: theme.json Variations
```json
{
  "version": 3,
  "styles": {
    "blocks": {
      "core/button": {
        "variations": {
          "outline": {
            "border": { "width": "2px", "color": "var:preset|color|primary" },
            "color": { "background": "transparent", "text": "var:preset|color|primary" }
          }
        }
      }
    }
  }
}
```

---

## Audit Objectives

### Phase 1: Inventory & Classification
1. ✅ List ALL 79 block style variation files
2. ✅ Classify each file as:
   - **WordPress Core Variation** (should be in theme.json)
   - **Custom Variation** (should stay as JSON file)
   - **Duplicate** (exists in both top-level and core/)
3. ✅ Identify files to DELETE
4. ✅ Identify styles to MIGRATE to theme.json

### Phase 2: WordPress Core Variation Detection
For each WordPress core variation (8 blocks × ~2 variations = ~16 variations):
1. ✅ Check if we have a JSON file for it
2. ✅ Extract its styles
3. ✅ Prepare theme.json migration snippet

### Phase 3: Duplicate Resolution
1. ✅ Compare top-level vs core/ files with same names
2. ✅ Determine which version has better implementation
3. ✅ Mark inferior version for deletion

### Phase 4: Custom Variation Inventory
1. ✅ List all CUSTOM variations that should remain as JSON files
2. ✅ Verify they don't conflict with core variations
3. ✅ Ensure proper metadata (schema, version, title, slug, blockTypes)

### Phase 5: Migration Plan
1. ✅ Create theme.json snippet with all core variations
2. ✅ Create deletion task list (files to remove)
3. ✅ Create verification checklist

---

## Expected Outcomes

### Files to DELETE (Estimated: 15-25 files)
- All JSON files for WordPress core variations
- Duplicate files (either top-level OR core/, not both)
- Empty or orphaned variation files

### theme.json Migration
- Add `styles.blocks.{blockName}.variations` sections
- Migrate all core variation styles from JSON files
- Ensure proper preset variable usage

### Final Structure
```
/styles/blocks/
  ├── button/                    (CUSTOM variations only)
  │   └── secondary.json         ✅ Keep (custom)
  ├── heading/                   (ALL custom variations)
  │   ├── display.json           ✅ Keep
  │   ├── section-title.json     ✅ Keep
  │   └── subtitle.json          ✅ Keep
  ├── group/                     (ALL custom variations)
  │   ├── card.json              ✅ Keep
  │   └── card-hover.json        ✅ Keep
  └── [... other custom variations]

/styles/presets/blocks/         (Block DEFAULT styles - untouched)
  ├── core-button.json          ✅ Keep (default styles)
  └── [... 48 other files]

theme.json                      (Core variations added)
  └── styles.blocks.core/button.variations.outline ✅ New
```

---

## Audit Tasks

### Phase 1: Inventory (2-3 hours)
- [ ] Read all 70 block variation JSON files
- [ ] Extract slug, title, blockTypes from each
- [ ] Classify as CORE or CUSTOM
- [ ] Identify duplicates between top-level and core/
- [ ] Create comprehensive inventory report

### Phase 2: WordPress Core Detection (1-2 hours)
- [ ] Check for `core/button` outline variation files
- [ ] Check for `core/button` fill variation files
- [ ] Check for `core/separator` wide variation files
- [ ] Check for `core/separator` dots variation files
- [ ] Check for `core/image` rounded variation files
- [ ] Check for `core/quote` plain variation files
- [ ] Check for `core/site-logo` rounded variation files
- [ ] Check for `core/social-links` logos-only variation files
- [ ] Check for `core/social-links` pill-shape variation files
- [ ] Check for `core/table` stripes variation files
- [ ] Check for `core/tag-cloud` outline variation files

### Phase 3: Duplicate Analysis (1 hour)
- [ ] Compare `button/outline.json` vs `core/button/outline.json`
- [ ] Compare `image/rounded.json` vs `core/image/rounded.json`
- [ ] Compare `group/card.json` vs `core/group/card.json`
- [ ] Compare `separator/wide.json` vs `core/separator/wide.json`
- [ ] Determine which version to keep for each duplicate

### Phase 4: theme.json Migration (1-2 hours)
- [ ] Extract styles from core variation JSON files
- [ ] Convert to theme.json variation format
- [ ] Ensure proper preset variable usage
- [ ] Merge with existing theme.json structure

### Phase 5: Verification & Task List (1 hour)
- [ ] Create deletion task list with file paths
- [ ] Create theme.json migration snippet
- [ ] Create verification checklist
- [ ] Document custom variations that remain

---

## Deliverables

1. **Audit Report** (`/reports/block-style-variations-audit-2026-03-04.md`)
   - Complete file inventory (79 files)
   - Classification (core vs custom)
   - Duplicate analysis
   - Recommendations

2. **Task List** (`/tasks/block-style-variations-cleanup-tasks.md`)
   - Files to DELETE (with paths)
   - theme.json migration snippet
   - Verification steps

3. **theme.json Snippet** (ready to merge)
   - All core variation styles
   - Proper preset variables
   - WordPress 6.2+ compatible

---

## Success Criteria

- ✅ No duplicate block style variations
- ✅ All WordPress core variations in theme.json
- ✅ All custom variations as separate JSON files
- ✅ Zero conflicts in Block Editor
- ✅ Reduced file count (estimated 70 → 45-50 files)

---

## Constraints

- **DO NOT DELETE** `/styles/presets/blocks/` files (these are block DEFAULT styles, not variations)
- **DO NOT DELETE** `/styles/sections/` files (these are section styles)
- **WAIT FOR APPROVAL** before deleting any files
- **VERIFY** all custom variations don't conflict with core

---

## Execution Plan

1. ✅ Read this orchestrator
2. ✅ Execute Phase 1-5 audits
3. ✅ Write comprehensive report
4. ✅ Create task list
5. ⏸️  **WAIT FOR USER APPROVAL**
6. ⏸️  Execute deletions (after approval)
7. ⏸️  Update theme.json (after approval)
8. ⏸️  Verify in WordPress (after approval)

---

**Status**: Ready to execute audit  
**Next Step**: Begin Phase 1 inventory

---

**End of Orchestrator**
