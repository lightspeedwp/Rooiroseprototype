# Block & Section Styles Audit Report

**Date**: 2026-03-04  
**Purpose**: Verify metadata completeness, spacing patterns, and identify duplicate folders

---

## Executive Summary

**Total Files Audited**: TBD  
**Metadata Issues Found**: TBD  
**Spacing Issues Found**: TBD  
**Duplicate Folders Found**: TBD  
**Status**: IN PROGRESS

---

## 1. Block Styles Audit

### Directory Structure

```
/wordpress-export/themes/die-papier-theme/styles/blocks/
├── button/
│   └── outline.json
├── buttons/
├── column/
├── core/
├── gravityforms/
├── group/
├── heading/
│   ├── display.json
│   ├── section-title.json
│   ├── card-compact.json
│   └── subtitle.json
├── image/
│   ├── circular.json
│   ├── rounded.json
│   ├── shadow.json
│   └── caption-overlay.json
├── list/
│   └── no-bullets.json
├── navigation/
├── outermost/
├── paragraph/
│   ├── badge.json
│   └── lead.json
├── post-template/
├── query-pagination/
├── quote/
├── separator/
├── table/
├── woocommerce/
├── yoast/          ⚠️ DUPLICATE?
└── yoast-seo/      ⚠️ DUPLICATE?
```

### Files Audited

#### ✅ Heading Styles (4 files)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `display.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ Uses hardcoded px values |
| `section-title.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ Has margin bottom (should use blockGap) |
| `card-compact.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ Has margin bottom (should use blockGap) |
| `subtitle.json` | ✅ | ✅ | ✅ | ✅ | ✅ | None |

**Issues**:
1. `section-title.json` — Line 29-31: Has `margin.bottom: small` ❌ Should rely on blockGap
2. `card-compact.json` — Line 15-17: Has `margin.bottom: x-small` ❌ Should rely on blockGap  
3. `display.json` — Uses `clamp(2.5rem, 5vw, 4rem)` — Could use preset instead

---

#### ✅ Image Styles (4 files)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `circular.json` | ✅ | ✅ | ✅ | ✅ | ✅ | None |
| `rounded.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ Uses `var:custom|border-radius|200` (should be `var(--wp--custom--border-radius--200)`) |
| `shadow.json` | ✅ | ✅ | ✅ | ✅ | ✅ | None |
| `caption-overlay.json` | ✅ | ✅ | ✅ | ✅ | ✅ | None |

**Issues**:
1. `rounded.json` — Line 9: Uses `var:custom|border-radius|200` — Should use `var(--wp--custom--border-radius--200)` or `var:preset|border-radius|400`

---

#### ✅ List Styles (1 file)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `no-bullets.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Correct margin reset usage |

---

#### ✅ Paragraph Styles (2 files)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `badge.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ Uses hardcoded px padding values |
| `lead.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ Uses hardcoded rem fontSize |

**Issues**:
1. `badge.json` — Lines 17-20: Uses hardcoded `4px` and `12px` padding — Could use presets
2. `lead.json` — Line 9: Uses `1.25rem` fontSize — Could use `var:preset|font-size|medium`

---

#### ✅ Button Styles (1 file)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `outline.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Correct calc() usage for border compensation |

---

### Folders Needing Investigation

1. **`yoast/`** vs **`yoast-seo/`** — Potential duplicate folders
2. **Empty folders?** — Need to check: `buttons/`, `column/`, `core/`, `gravityforms/`, `group/`, `navigation/`, `outermost/`, `post-template/`, `query-pagination/`, `quote/`, `separator/`, `table/`, `woocommerce/`

---

## 2. Section Styles Audit

### Directory

```
/wordpress-export/themes/die-papier-theme/styles/sections/
└── section-white.json
```

### Files Audited

#### ✅ Section Styles (1 file visible)
| File | Schema | Version | Title | Slug | blockTypes | Issues |
|:-----|:-------|:--------|:------|:-----|:-----------|:-------|
| `section-white.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ Uses object blockGap syntax |

**Issues**:
1. `section-white.json` — Lines 13-16: Uses object syntax for blockGap:
   ```json
   "blockGap": {
       "top": "var:preset|spacing|medium",
       "left": "var:preset|spacing|medium"
   }
   ```
   **Note**: This is CORRECT for setting both vertical AND horizontal blockGap separately. Keep as-is.

---

## 3. Spacing Pattern Issues

### ❌ MARGIN VIOLATIONS (2 files)

**Heading Styles with Margins** (should use blockGap instead):

1. **`heading/section-title.json`**
   ```json
   "margin": {
       "bottom": "var:preset|spacing|small"
   }
   ```
   **Fix**: REMOVE margin, rely on global blockGap `1.2rem` or parent container blockGap

2. **`heading/card-compact.json`**
   ```json
   "margin": {
       "bottom": "var:preset|spacing|x-small"
   }
   ```
   **Fix**: REMOVE margin, rely on blockGap in card containers

---

### ⚠️ HARDCODED VALUES (4 files)

**Hardcoded Pixel/Rem Values** (should use presets):

1. **`heading/display.json`** — Line 10
   ```json
   "fontSize": "clamp(2.5rem, 5vw, 4rem)"
   ```
   **Recommendation**: Consider using `var:preset|font-size|xxx-large` instead

2. **`paragraph/badge.json`** — Lines 17-20
   ```json
   "padding": {
       "top": "4px",
       "bottom": "4px",
       "left": "12px",
       "right": "12px"
   }
   ```
   **Recommendation**: Convert to rem or use ultra-small preset

3. **`paragraph/lead.json`** — Line 9
   ```json
   "fontSize": "1.25rem"
   ```
   **Recommendation**: Use `var:preset|font-size|medium` (already defined as 1.25rem in theme.json)

4. **`image/rounded.json`** — Line 9
   ```json
   "radius": "var:custom|border-radius|200"
   ```
   **Fix**: Change to `var(--wp--custom--border-radius--200)` or `var:preset|border-radius|400`

---

## 4. Duplicate Folders Check

### Potential Duplicates

**yoast/ vs yoast-seo/**

- Both folders exist in `/styles/blocks/`
- Need to verify contents:
  - If identical → Delete one folder
  - If different → Merge into single `yoast-seo/` folder (official namespace)

**Recommendation**: 
1. Check contents of both folders
2. Merge all files into `yoast-seo/` (official namespace)
3. Delete empty `yoast/` folder

---

## 5. Empty Folders Check

**Folders to Verify** (may be empty):

Need to check if these contain any `.json` files:
- `buttons/`
- `column/`
- `core/`
- `gravityforms/`
- `group/`
- `navigation/`
- `outermost/`
- `post-template/`
- `query-pagination/`
- `quote/`
- `separator/`
- `table/`
- `woocommerce/`

**Action**: If empty, DELETE to reduce clutter

---

## 6. Required Fixes Summary

### Priority 1 (MUST FIX)

1. **REMOVE margin from `heading/section-title.json`** (lines 29-31)
2. **REMOVE margin from `heading/card-compact.json`** (lines 15-17)
3. **Fix border-radius syntax in `image/rounded.json`** (line 9)

### Priority 2 (SHOULD FIX)

4. **Convert hardcoded fontSize in `paragraph/lead.json`** to preset variable
5. **Consider using preset for `heading/display.json` fontSize** (or document reason for clamp())

### Priority 3 (NICE TO HAVE)

6. **Convert px padding in `paragraph/badge.json`** to rem units
7. **Merge/delete yoast/ and yoast-seo/ folders**
8. **Delete empty block style folders**

---

## 7. Metadata Completeness

### All Block Styles (11 files checked)

| File | $schema | version | title | slug | blockTypes |
|:-----|:--------|:--------|:------|:-----|:-----------|
| button/outline.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| heading/display.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| heading/section-title.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| heading/card-compact.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| heading/subtitle.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| image/circular.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| image/rounded.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| image/shadow.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| image/caption-overlay.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| list/no-bullets.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| paragraph/badge.json | ✅ | ✅ | ✅ | ✅ | ✅ |
| paragraph/lead.json | ✅ | ✅ | ✅ | ✅ | ✅ |

**Result**: ✅ **100% metadata compliance** (all 11 files have all 5 required fields)

### All Section Styles (1 file checked)

| File | $schema | version | title | slug | blockTypes |
|:-----|:--------|:--------|:------|:-----|:-----------|
| section-white.json | ✅ | ✅ | ✅ | ✅ | ✅ |

**Result**: ✅ **100% metadata compliance**

---

## 8. Next Steps

1. ✅ **Create Spacing Patterns Guide** — `/guidelines/design-tokens/spacing-patterns.md` (DONE)
2. ⏳ **Fix Priority 1 Issues** — Remove margins from heading styles, fix border-radius syntax
3. ⏳ **Investigate Empty Folders** — Check all folders, delete if empty
4. ⏳ **Merge yoast Folders** — Consolidate into `yoast-seo/`
5. ⏳ **Standardize Hardcoded Values** — Convert to preset variables where possible
6. ⏳ **Update Documentation** — Add blockGap vs margin patterns to spacing guide

---

## Appendix: Correct Spacing Patterns

### ✅ Correct BlockGap Usage (Section Styles)

```json
{
  "spacing": {
    "blockGap": {
      "top": "var:preset|spacing|medium",     // Vertical spacing between blocks
      "left": "var:preset|spacing|medium"     // Horizontal spacing (columns)
    }
  }
}
```

### ✅ Correct Margin Reset (List Styles)

```json
{
  "spacing": {
    "padding": { "left": "0" },
    "margin": { "left": "0" }    // Reset to zero — blockGap will handle spacing
  },
  "css": "list-style-type: none;"
}
```

### ❌ INCORRECT Margin Usage (Heading Styles)

```json
{
  "spacing": {
    "margin": {
      "bottom": "var:preset|spacing|small"    // ❌ Should use blockGap instead
    }
  }
}
```

**Why wrong?** Global `blockGap: 1.2rem` already creates proper spacing between headings and following blocks.

---

**End of Report**
