# Block Styles Folder Structure Audit — Orchestrator

**Date Created**: 2026-03-04  
**Priority**: P0 — CRITICAL (Duplicate Detection)  
**Status**: 🔴 **AUDIT REQUIRED**  
**Estimated Effort**: 2-3 hours

---

## Problem Statement

During the block style variations cleanup, we deleted duplicates between `/styles/blocks/core/button/` and `/styles/blocks/button/`, but we need to verify if this duplication pattern exists across ALL blocks.

**Critical Questions**:
1. Are there duplicate files between `/styles/blocks/core/{BLOCKNAME}/` and `/styles/blocks/{BLOCKNAME}/`?
2. Which folder structure is correct: `core/` subfolder or top-level blocks?
3. Are the duplicate files identical or do they have differences?
4. Which version should we keep?

---

## Folder Structure Context

### Current Structure

```
/styles/blocks/
├── core/
│   ├── button/
│   │   └── secondary.json
│   ├── columns/
│   │   ├── compact.json
│   │   ├── no-gap.json
│   │   └── wide.json
│   ├── cover/
│   │   └── rounded.json
│   ├── gallery/
│   │   ├── compact.json
│   │   └── shadowed.json
│   ├── heading/
│   │   ├── accent.json
│   │   └── uppercase.json
│   ├── image/
│   │   ├── aspect-1-1.json
│   │   ├── aspect-16-9.json
│   │   ├── aspect-3-2.json
│   │   ├── aspect-4-3.json
│   │   └── shadowed.json
│   ├── list/
│   │   ├── checkmark.json
│   │   └── inline.json
│   ├── media-text/
│   │   ├── bordered.json
│   │   └── shadowed.json
│   ├── navigation/
│   │   ├── compact.json
│   │   └── spaced.json
│   ├── paragraph/
│   │   ├── lead.json
│   │   └── small.json
│   ├── post-featured-image/
│   │   ├── aspect-16-9.json
│   │   ├── aspect-4-3.json
│   │   └── rounded.json
│   ├── post-title/
│   │   ├── accent.json
│   │   └── compact.json
│   ├── quote/
│   │   └── minimal.json
│   ├── separator/
│   │   └── accent.json
│   └── table/
│       └── bordered.json
└── (top-level blocks)/
    ├── buttons/
    │   └── filter-pill.json
    ├── column/
    │   └── card.json
    ├── heading/
    │   ├── card-compact.json
    │   ├── display.json
    │   ├── section-title.json
    │   └── subtitle.json
    ├── image/
    │   ├── caption-overlay.json
    │   ├── circular.json
    │   └── shadow.json
    ├── list/
    │   └── no-bullets.json
    ├── navigation/
    │   ├── badges.json
    │   └── header-navigation.json
    ├── paragraph/
    │   ├── badge.json
    │   └── lead.json
    ├── post-template/
    │   └── product-card.json
    ├── query-pagination/
    │   └── branded.json
    ├── quote/
    │   ├── border-left.json
    │   ├── large-serif.json
    │   └── pull-quote.json
    ├── separator/
    │   └── brand-line.json
    └── table/
        └── borderless.json
```

### Potential Duplicates Identified

| Block | core/ Folder | Top-level Folder | Duplicate? |
|:------|:------------|:-----------------|:-----------|
| heading | accent.json, uppercase.json | card-compact.json, display.json, section-title.json, subtitle.json | ❓ AUDIT NEEDED |
| image | aspect-*.json, shadowed.json | caption-overlay.json, circular.json, shadow.json | ❓ AUDIT NEEDED |
| list | checkmark.json, inline.json | no-bullets.json | ❓ AUDIT NEEDED |
| navigation | compact.json, spaced.json | badges.json, header-navigation.json | ❓ AUDIT NEEDED |
| paragraph | lead.json, small.json | badge.json, lead.json | ⚠️ **DUPLICATE DETECTED** |
| quote | minimal.json | border-left.json, large-serif.json, pull-quote.json | ❓ AUDIT NEEDED |
| separator | accent.json | brand-line.json | ❓ AUDIT NEEDED |
| table | bordered.json | borderless.json | ❓ AUDIT NEEDED |

---

## Audit Tasks

### Task 1: Directory Structure Scan ✅

**Objective**: List all files in both `/styles/blocks/core/` and `/styles/blocks/` (top-level)

**Actions**:
1. Read all files in `/styles/blocks/core/` recursively
2. Read all files in `/styles/blocks/` (top-level only, exclude core/)
3. Create master inventory with file paths

**Deliverable**: File inventory table

---

### Task 2: Duplicate File Detection 🔴

**Objective**: Identify files with matching names in both locations

**Logic**:
```
For each file in /styles/blocks/core/{BLOCKNAME}/{FILENAME}.json:
  Check if /styles/blocks/{BLOCKNAME}/{FILENAME}.json exists
  If exists → DUPLICATE DETECTED
```

**Deliverable**: List of duplicate pairs with file paths

---

### Task 3: Content Comparison 🔴

**Objective**: Compare content of duplicate files byte-by-byte

**Actions**:
1. For each duplicate pair, read both files
2. Compare JSON structure and values
3. Classify as:
   - **IDENTICAL**: Files are byte-for-byte identical
   - **FUNCTIONALLY EQUIVALENT**: Different formatting but same styles
   - **DIFFERENT**: Different style definitions

**Deliverable**: Comparison table with diff summaries

---

### Task 4: Slug Validation 🔴

**Objective**: Verify block variation slugs are correct

**Rules**:
- Core WordPress blocks (core/button, core/image, etc.) should have variations in `/styles/blocks/core/BLOCKNAME/`
- Top-level files in `/styles/blocks/BLOCKNAME/` should have slugs matching `{blockname}-{variation}` format

**Example**:
```json
// CORRECT: /styles/blocks/core/button/secondary.json
{
  "slug": "secondary",
  "blockTypes": ["core/button"]
}

// WRONG: /styles/blocks/button/secondary.json (should be in core/)
{
  "slug": "button-secondary",  // Wrong prefix
  "blockTypes": ["core/button"]
}
```

**Deliverable**: List of files with incorrect slugs or folder placement

---

### Task 5: Folder Structure Decision 🔴

**Objective**: Determine canonical folder structure

**WordPress Best Practices** (as of WP 6.2+):
1. **Core block variations** → `/styles/blocks/core/{blockname}/{variation}.json`
2. **Third-party block variations** → `/styles/blocks/{namespace}/{blockname}/{variation}.json`

**Question**: Should top-level `/styles/blocks/{blockname}/` folders exist at all for core blocks?

**Decision Criteria**:
- ✅ If files in `core/` and top-level are identical → delete top-level, keep `core/`
- ✅ If files have different slugs → fix slugs, consolidate to `core/`
- ❓ If files are genuinely different variations → keep both, but ensure slug uniqueness

**Deliverable**: Folder structure decision + migration plan

---

### Task 6: presets.php Loader Verification 🔴

**Objective**: Confirm recursive loader finds files in correct locations

**Context**: The `/inc/presets.php` file recursively loads all JSON files from `/styles/` directory. We need to ensure:
1. It correctly loads files from both `core/` and top-level folders
2. It doesn't register duplicate variation slugs
3. Slug conflicts are detected

**Test**:
```php
// Check if loader handles:
/styles/blocks/core/button/secondary.json → slug: "secondary"
/styles/blocks/button/secondary.json → slug: "button-secondary"
```

**Deliverable**: Loader compatibility assessment

---

### Task 7: Cleanup Execution 🔴

**Objective**: Delete duplicate files and consolidate to canonical structure

**Actions**:
1. Based on Task 5 decision, delete redundant files
2. Move files to correct folders if needed
3. Update slugs in JSON files if needed
4. Verify no broken references

**Deliverable**: List of deleted files + final file count

---

## Expected Findings

### Hypothesis 1: Top-level folders are legacy duplicates

**Evidence**:
- We already found `/styles/blocks/button/outline.json` duplicating `/styles/blocks/core/button/outline.json`
- Same pattern likely exists for other core blocks

**Action**: Delete all top-level core block folders, keep only `/styles/blocks/core/`

---

### Hypothesis 2: Top-level folders use wrong slug format

**Evidence**:
- `/styles/blocks/button/outline.json` had slug `button-outline` (wrong)
- `/styles/blocks/core/button/outline.json` had slug `outline` (correct)

**Action**: Fix slugs or delete wrong versions

---

### Hypothesis 3: Some top-level files are unique variations

**Evidence**:
- `/styles/blocks/heading/display.json` might be a unique variation not in `core/heading/`
- `/styles/blocks/navigation/header-navigation.json` might be theme-specific

**Action**: Keep unique variations, ensure slug uniqueness

---

## Deliverables

### 1. Audit Report

**File**: `/reports/block-styles-folder-structure-audit-2026-03-04.md`

**Contents**:
- Complete file inventory (both folders)
- Duplicate detection results
- Content comparison table
- Slug validation errors
- Folder structure recommendation
- Cleanup execution plan

---

### 2. Task List

**File**: `/tasks/block-styles-folder-structure-cleanup-tasks.md`

**Contents**:
- [ ] Task 1: Scan directories
- [ ] Task 2: Detect duplicates
- [ ] Task 3: Compare content
- [ ] Task 4: Validate slugs
- [ ] Task 5: Decide structure
- [ ] Task 6: Verify loader
- [ ] Task 7: Execute cleanup

---

### 3. Cleanup Script (if needed)

**File**: `/scripts/cleanup-duplicate-block-styles.sh` (optional)

**Purpose**: Automate deletion of duplicate files after user approval

---

## Success Criteria

✅ **100% of duplicate files identified**  
✅ **Content differences documented**  
✅ **Canonical folder structure defined**  
✅ **All slug conflicts resolved**  
✅ **Zero duplicate variation registrations**  
✅ **File count reduction quantified**

---

## Risk Assessment

### High Risk: Deleting wrong version

**Mitigation**: Always compare file contents before deletion

### Medium Risk: Breaking pattern/template references

**Mitigation**: Search all patterns/templates for `className` references to deleted variations

### Low Risk: Slug conflicts after cleanup

**Mitigation**: Test in WordPress Block Editor after cleanup

---

## Next Steps

1. ✅ Create this orchestrator
2. 🔴 Execute Task 1-7 audit
3. 🔴 Present findings to user
4. 🔴 Get user approval for cleanup
5. 🔴 Execute cleanup
6. 🔴 Update Guidelines.md

---

**Orchestrator Status**: ✅ **CREATED**  
**Audit Status**: 🔴 **PENDING EXECUTION**  
**User Approval Required**: YES (before any file deletion)

---

**End of Orchestrator**
