# Proposed BlockGap vs Margin Strategy for Die Papier Theme

**Date**: 2026-03-04  
**Status**: PROPOSED — Awaiting approval before implementation

---

## Executive Summary

Based on WordPress best practices and ChatGPT expert advice, we need to revise our spacing strategy to use **blockGap as the primary spacing tool** and **margins only surgically** where blockGap isn't sufficient.

### Key Principle

> **blockGap acts like CSS gap** — it only creates space BETWEEN blocks, never at the top of the first block or bottom of the last block. This prevents "dead air" in containers and creates mathematically consistent vertical rhythm.

---

## Current State Analysis

### Global Spacing
- ✅ **Global blockGap**: `1.2rem` (good baseline)
- ✅ **Block-specific blockGap**: 44 instances across core/woocommerce blocks (excellent)

### Current Margin Usage (9 instances)
| Block | Current Margin | Issue |
|:------|:--------------|:------|
| **elements.heading** | top: 1.5rem, bottom: 1rem | ❌ WRONG — BlockGap should handle this |
| **core/paragraph** | top: 0, bottom: 1rem | ⚠️ MAYBE — Bottom margin might be needed for "body flow" |
| **core/image** | All: 0 | ✅ CORRECT — Reset margins |
| **core/post-featured-image** | bottom: medium | ⚠️ MAYBE — Structural separation from content |
| **core/separator** | top/bottom: medium | ❌ WRONG — BlockGap should handle separator spacing |
| **core/site-logo** | All: 0 | ✅ CORRECT — Reset margins |
| **core/spacer** | All: 0 | ✅ CORRECT — Spacer block handles its own height |
| **woocommerce/product-rating** | top/bottom: x-small | ❌ WRONG — Should use blockGap in parent container |
| **woocommerce/product-image** | All: 0 | ✅ CORRECT — Reset margins |

---

## Proposed Changes

### 1. REMOVE Margins from Elements/Blocks that BlockGap Should Handle

**REMOVE** from `elements.heading`:
```json
"spacing": {
    "margin": {
        "top": "1.5rem",
        "bottom": "1rem"
    }
}
```
**Reason**: The global `blockGap: 1.2rem` already creates proper spacing between headings and paragraphs. Margins create DOUBLE spacing and break the vertical rhythm.

---

**REMOVE** from `core/separator`:
```json
"spacing": {
    "margin": {
        "top": "var:preset|spacing|medium",
        "bottom": "var:preset|spacing|medium"
    }
}
```
**Reason**: BlockGap handles separator spacing. If separators need MORE space, use a block style variation with increased padding, not margin.

---

**REMOVE** from `woocommerce/product-rating`:
```json
"spacing": {
    "margin": {
        "top": "var:preset|spacing|x-small",
        "bottom": "var:preset|spacing|x-small"
    }
}
```
**Reason**: The parent container (`woocommerce/product-details` has `blockGap: small`) already handles spacing between rating and other elements.

---

### 2. KEEP Strategic Margins (5 instances)

**KEEP** `core/paragraph` bottom margin:
```json
"core/paragraph": {
    "spacing": {
        "margin": {
            "top": "0",
            "bottom": "1rem"
        }
    }
}
```
**Reason**: Paragraphs need bottom margin to distinguish "body flow" (text content) from "structural flow" (images, headings, separators). This is a WordPress best practice for text-heavy content.

---

**KEEP** reset margins (zero all sides):
- `core/image` — All: 0
- `core/site-logo` — All: 0
- `core/spacer` — All: 0
- `woocommerce/product-image` — All: 0

**Reason**: These blocks should have zero margins so blockGap can control their spacing consistently. This is the foundation of the "no margin philosophy."

---

**KEEP** `core/post-featured-image` bottom margin:
```json
"core/post-featured-image": {
    "spacing": {
        "margin": {
            "top": "0",
            "bottom": "var:preset|spacing|medium"
        }
    }
}
```
**Reason**: Featured images are "structural separators" between article metadata and article content. The bottom margin creates intentional breathing room.

---

### 3. ENHANCE BlockGap Strategy

**Current blockGap coverage**: 44 instances (excellent)

**Areas already using blockGap correctly**:
- ✅ Global: `1.2rem`
- ✅ Containers: columns, group, navigation, social-links
- ✅ WooCommerce: cart, checkout, product filters, gallery
- ✅ Content: post-template, query, tag-cloud

**No changes needed** — blockGap strategy is already comprehensive!

---

## Design System Alignment

### Die Papier Spacing Presets
```
x-small:   0.5rem  (8px)   — Tight spacing (social icons, tags)
small:     0.75rem (12px)  — Compact lists, buttons container
medium:    1.5rem  (24px)  — Standard content spacing
large:     2rem    (32px)  — Section separation
x-large:   3rem    (48px)  — Major sections
xx-large:  4rem    (64px)  — Hero sections
xxx-large: 6rem    (96px)  — Page sections
```

### Global BlockGap Decision
**Current**: `1.2rem` (19.2px)

**Options**:
1. **Keep 1.2rem** — Between `small` (12px) and `medium` (24px), good for text flow
2. **Change to `var:preset|spacing|small`** (12px) — Tighter, more compact
3. **Change to `var:preset|spacing|medium`** (24px) — More breathing room

**Recommendation**: **Keep 1.2rem** — It's a sweet spot between tight and spacious, works well for news content.

---

## Implementation Summary

### Changes Required

**REMOVE** (3 instances):
1. `elements.heading` → spacing.margin (top/bottom)
2. `core/separator` → spacing.margin (top/bottom)
3. `woocommerce/product-rating` → spacing.margin (top/bottom)

**KEEP** (6 instances):
1. `core/paragraph` → spacing.margin (bottom: 1rem)
2. `core/image` → spacing.margin (all: 0)
3. `core/post-featured-image` → spacing.margin (bottom: medium)
4. `core/site-logo` → spacing.margin (all: 0)
5. `core/spacer` → spacing.margin (all: 0)
6. `woocommerce/product-image` → spacing.margin (all: 0)

**NO CHANGE** to blockGap (44 instances already perfect)

---

## Expected Benefits

### 1. Vertical Rhythm Consistency
- All spacing between blocks controlled by predictable `blockGap` values
- No "double spacing" from margin + blockGap conflicts
- Mathematically aligned vertical flow

### 2. Container Behavior
- No "dead air" at top of first block or bottom of last block in containers
- Cleaner nested block spacing (groups, columns, sections)
- Responsive spacing works automatically

### 3. Maintainability
- Fewer margin values to track (9 → 6 instances)
- Clear distinction: blockGap for BETWEEN blocks, margin for EXCEPTIONS
- Easier to debug spacing issues

### 4. WordPress Best Practices
- Aligns with WordPress FSE spacing model
- Matches TwentyTwentyFive and Ollie theme patterns
- Future-proof for WordPress 6.8+ enhancements

---

## Documentation Updates Required

### 1. Update `/guidelines/design-tokens/spacing.md`
Add section:
```markdown
## BlockGap vs Margin Strategy

**Primary Tool**: Use `blockGap` for spacing BETWEEN blocks
**Surgical Tool**: Use `margin` only for exceptions

### BlockGap Philosophy
- Acts like CSS gap — creates space BETWEEN blocks only
- No "dead air" at container edges
- Override global blockGap on specific containers (columns, buttons, navigation)

### Margin Philosophy
- Reset to zero for images, logos, spacers
- Bottom margin for paragraphs (body flow distinction)
- Bottom margin for featured images (structural separation)
- NO top margins (blockGap handles this)
```

### 2. Update `/guidelines/wordpress-migration/theme-json-strategy.md`
Add guidance on when to use blockGap vs margin in theme.json.

### 3. Create new `/guidelines/wordpress-migration/vertical-rhythm.md`
Document the complete spacing strategy with visual examples.

---

## Questions for Review

1. **Global blockGap**: Keep `1.2rem` or switch to `var:preset|spacing|medium` (1.5rem)?
2. **Paragraph bottom margin**: Keep `1rem` or change to match blockGap `1.2rem`?
3. **Featured image bottom margin**: Keep `medium` (1.5rem) or increase to `large` (2rem)?
4. **Separator styling**: Should we create block style variations for separators with different spacing instead of using margin?

---

## Approval Checklist

- [ ] Review proposed margin removals (3 instances)
- [ ] Confirm paragraph bottom margin strategy
- [ ] Decide on global blockGap value (keep 1.2rem or change)
- [ ] Approve documentation updates
- [ ] Ready to implement changes to theme.json

---

## Related Files

- **Theme.json**: `/wordpress-export/themes/die-papier-theme/theme.json`
- **Spacing Guide**: `/guidelines/design-tokens/spacing.md`
- **Block Styles Index**: `/wordpress-export/themes/die-papier-theme/BLOCK-STYLES-INDEX.md`
- **ChatGPT Feedback**: `/src/imports/theme-heading-styles.json`
