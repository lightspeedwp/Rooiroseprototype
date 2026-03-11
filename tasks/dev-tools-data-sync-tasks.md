# Dev Tools Data Synchronization Tasks

**Date**: 2026-03-04  
**Priority**: P1 — Data Integrity  
**Status**: 🔴 **CRITICAL** — Data files out of sync with WordPress theme

---

## Overview

Comprehensive audit of all dev tool data files revealed several data synchronization issues that need to be resolved to ensure dev tools accurately reflect the WordPress theme structure.

---

## Critical Issues Found

### 1. 🔴 Template Part Browser — Missing 5 Parts

**File**: `/src/app/data/templatePartBrowserData.ts`

**Issue**: Data file has 14 entries but theme has 19 actual HTML files

**Missing Parts** (5 files):
1. `distraction-free-header.html` — Simplified header for distraction-free reading mode
2. `post-meta-bottom.html` — Bottom post metadata (share buttons, author bio, related)
3. `post-meta-top.html` — Top post metadata (category, date, author)
4. `social-links.html` — Die Papier social media profile links
5. `social-sharing.html` — Article sharing buttons (Facebook, WhatsApp, X, Email)

**Current State**:
- **Data file**: 14 template parts
- **Theme on disk**: 19 template parts (.html files in `/parts/`)
- **Discrepancy**: 5 missing entries

**Priority**: P1 — Critical (dev tool shows incomplete data)

**Action Required**: Add 5 missing template part entries to data file with correct metadata (area, description, guidelines reference, usage)

---

### 2. 🟡 Pattern Browser — Missing 10 Patterns

**File**: `/src/app/data/patternBrowserData.ts`

**Issue**: Data file has 167 entries but theme has 177 actual PHP files

**Discrepancy**:
- **Data file**: 167 pattern entries
- **Theme on disk**: 177 pattern files (.php files in `/patterns/`)
- **Missing**: 10 pattern entries

**Priority**: P2 — Medium (most patterns are present, some new patterns missing)

**Action Required**: Identify which 10 patterns are missing from data file and add entries

**Note**: Need to cross-reference disk files with data file slugs to identify missing patterns

---

### 3. 🟢 Inc Folder Browser — Correct

**File**: `/src/app/data/incFolderData.ts`

**Status**: ✅ **CORRECT**

**Verification**:
- **Data file**: 30 entries (includes BOTH plugin and theme inc files)
- **Plugin inc files**: `/wordpress-export/plugins/die-papier-blocks/inc/` (20 files)
- **Theme inc files**: `/wordpress-export/themes/die-papier-theme/inc/` (10 files)
- **Total**: 30 entries correctly representing both sources

**No action required**.

---

### 4. 🟡 parts.php File Missing from Theme

**File**: `/wordpress-export/themes/die-papier-theme/inc/parts.php`

**Issue**: Guidelines.md Phase 3 completion claims `parts.php` was created for custom template part areas, but file doesn't exist on disk

**Expected Content**: Custom template part area registration for:
- `post-meta` area
- `sidebar` area  
- `woocommerce` area

**Current Theme Inc Files** (10):
1. `advanced-ads-memberships.php`
2. `aql-deduplication.php`
3. `block-bindings.php`
4. `custom-icons.php`
5. `font-collections.php`
6. `patterns.php`
7. `performance.php`
8. `presets.php`
9. `setup.php`
10. `woocommerce.php`

**Missing**: `parts.php` (should be #11)

**Priority**: P2 — Medium (template parts work without custom area registration, but best practice is to register custom areas)

**Action Required**: 
- Either create `parts.php` with custom area registration
- OR update Guidelines.md to reflect that custom areas were NOT created (areas default to "uncategorized")

---

## File Count Summary

| Data Source | Data File Count | Disk File Count | Status |
|:------------|:---------------:|:---------------:|:-------|
| Templates | 49 | 49 | ✅ Match |
| Template Parts | 14 | 19 | 🔴 -5 missing |
| Patterns | 167 | 177 | 🟡 -10 missing |
| Inc Files | 30 | 30 (20+10) | ✅ Match |
| Block Styles | Updated | 62 files | ✅ Paths fixed |
| Section Styles | 9 | 9 | ✅ Match |

---

## Priority Tasks

### Priority 1 — Critical Data Gaps

1. **Add 5 missing template parts** to `templatePartBrowserData.ts`:
   - distraction-free-header.html
   - post-meta-bottom.html
   - post-meta-top.html
   - social-links.html
   - social-sharing.html

### Priority 2 — Medium Data Gaps

2. **Identify and add 10 missing patterns** to `patternBrowserData.ts`
   - Cross-reference disk files with data file entries
   - Add missing pattern metadata

3. **Resolve parts.php discrepancy**:
   - Create file OR update Guidelines.md

### Priority 3 — Verification

4. **Verify all dev tool data file header comments** reflect accurate counts
5. **Update Guidelines.md** if any documented completions are inaccurate

---

## Verification Commands

```bash
# Template count (should be 49)
cd wordpress-export/themes/die-papier-theme/templates
find . -name "*.html" | wc -l

# Template part count (should be 19)
cd ../parts
find . -name "*.html" | wc -l

# Pattern count (should be 177)
cd ../patterns
find . -name "*.php" | wc -l

# Theme inc file count (should be 10, or 11 if parts.php exists)
cd ../inc
ls -1 *.php | wc -l

# Plugin inc file count (should be 20)
cd ../../plugins/die-papier-blocks/inc
ls -1 *.php | wc -l

# Block style variations count (should be 62)
cd ../../themes/die-papier-theme/styles/blocks
find . -name "*.json" | wc -l

# Core block variations count (should be 52)
cd core
find . -name "*.json" | wc -l
```

---

## Success Criteria

✅ All data file counts match actual theme file counts  
✅ All dev tool browsers show complete and accurate data  
✅ All header comments reflect correct file counts  
✅ Guidelines.md completion claims are verified accurate  
✅ Zero broken file references in any dev tool

---

## Timeline

**Estimated Effort**: 3-5 hours
- Add 5 template part entries: 1 hour
- Identify + add 10 pattern entries: 2-3 hours
- Resolve parts.php + verification: 1 hour

---

**Status**: 🔴 **AWAITING ACTION** — Critical data sync issues identified

---

**End of Task List**
