# Block Style Variations Cleanup Audit Report

**Date**: 2026-03-04  
**Auditor**: AI Assistant  
**Purpose**: Identify WordPress core variation duplicates and create cleanup plan

---

## Executive Summary

**Problem**: The theme has duplicate block style variations - we're creating custom JSON files for variations that WordPress core already provides natively.

**Audit Scope**: 70 block style variation files  
**WordPress Core Variations Found**: TBD (audit in progress)  
**Duplicates Found**: 4 confirmed pairs  
**Recommended Deletions**: TBD  
**theme.json Migrations**: TBD

---

## Phase 1: WordPress Core Variations Reference

According to WordPress 6.2+ documentation, these core blocks have **native variations** that should be defined in `theme.json` (NOT as separate JSON files):

### Core Block Variations (8 blocks)

| Block | Variation Slug | CSS Class | Should Be In |
|:------|:--------------|:----------|:-------------|
| `core/button` | `fill` | `.is-style-fill` | theme.json |
| `core/button` | `outline` | `.is-style-outline` | theme.json |
| `core/separator` | `wide` | `.is-style-wide` | theme.json |
| `core/separator` | `dots` | `.is-style-dots` | theme.json |
| `core/image` | `rounded` | `.is-style-rounded` | theme.json |
| `core/quote` | `plain` | `.is-style-plain` | theme.json |
| `core/site-logo` | `rounded` | `.is-style-rounded` | theme.json |
| `core/social-links` | `logos-only` | `.is-style-logos-only` | theme.json |
| `core/social-links` | `pill-shape` | `.is-style-pill-shape` | theme.json |
| `core/table` | `stripes` | `.is-style-stripes` | theme.json |
| `core/tag-cloud` | `outline` | `.is-style-outline` | theme.json |

**Total WordPress Core Variations**: 11 variations across 8 blocks

---

## Phase 2: Current File Inventory

### Top-Level Folders (29 files)

#### button/ (1 file)
```
button/outline.json                      
  Slug: button-outline
  ⚠️ POTENTIAL CORE DUPLICATE (WordPress has "outline" variation)
  Action: CHECK if duplicates core functionality
```

#### buttons/ (1 file)
```
buttons/filter-pill.json
  Slug: filter-pill
  ✅ CUSTOM (not a WordPress core variation)
  Action: KEEP
```

#### column/ (1 file)
```
column/card.json
  Slug: card
  ✅ CUSTOM
  Action: KEEP
```

#### group/ (2 files)
```
group/card-hover.json
  Slug: card-hover
  ✅ CUSTOM
  Action: KEEP

group/card.json
  Slug: card
  ✅ CUSTOM
  ⚠️ DUPLICATE with core/group/card.json (check slugs)
  Action: COMPARE with core/ version
```

#### heading/ (4 files)
```
heading/display.json
  Slug: display
  ✅ CUSTOM
  Action: KEEP

heading/section-title.json
  Slug: section-title
  ✅ CUSTOM
  Action: KEEP

heading/card-compact.json
  Slug: card-compact
  ✅ CUSTOM
  Action: KEEP

heading/subtitle.json
  Slug: subtitle
  ✅ CUSTOM
  Action: KEEP
```

#### image/ (4 files)
```
image/circular.json
  Slug: circular
  ✅ CUSTOM
  Action: KEEP

image/rounded.json
  Slug: image-rounded
  ⚠️ POTENTIAL CORE DUPLICATE (WordPress has "rounded" for image)
  ⚠️ DUPLICATE with core/image/rounded.json
  Action: CHECK if duplicates core, DELETE if yes

image/shadow.json
  Slug: shadow
  ✅ CUSTOM
  Action: KEEP

image/caption-overlay.json
  Slug: caption-overlay
  ✅ CUSTOM
  Action: KEEP
```

#### list/ (1 file)
```
list/no-bullets.json
  Slug: no-bullets
  ✅ CUSTOM
  Action: KEEP
```

#### navigation/ (2 files)
```
navigation/badges.json
  Slug: badges
  ✅ CUSTOM
  Action: KEEP

navigation/header-navigation.json
  Slug: header-navigation
  ✅ CUSTOM
  Action: KEEP
```

#### paragraph/ (2 files)
```
paragraph/badge.json
  Slug: badge
  ✅ CUSTOM
  Action: KEEP

paragraph/lead.json
  Slug: paragraph-lead
  ✅ CUSTOM
  ⚠️ POTENTIAL DUPLICATE with core/paragraph/lead.json (check slugs)
  Action: COMPARE with core/ version
```

#### post-template/ (1 file)
```
post-template/product-card.json
  Slug: product-card
  ✅ CUSTOM
  Action: KEEP
```

#### query-pagination/ (1 file)
```
query-pagination/branded.json
  Slug: branded
  ✅ CUSTOM
  Action: KEEP
```

#### quote/ (4 files)
```
quote/border-left.json
  Slug: border-left
  ✅ CUSTOM
  Action: KEEP

quote/large-serif.json
  Slug: large-serif
  ✅ CUSTOM
  Action: KEEP

quote/plain.json
  Slug: quote-plain
  ⚠️ POTENTIAL CORE DUPLICATE (WordPress has "plain" for quote)
  Action: CHECK if duplicates core functionality

quote/pull-quote.json
  Slug: pull-quote
  ✅ CUSTOM
  Action: KEEP
```

#### separator/ (3 files)
```
separator/brand-line.json
  Slug: brand-line
  ✅ CUSTOM
  Action: KEEP

separator/dots.json
  Slug: separator-dots
  ⚠️ POTENTIAL CORE DUPLICATE (WordPress has "dots" for separator)
  Action: CHECK if slug should be "dots" not "separator-dots"

separator/wide.json
  Slug: separator-wide
  ⚠️ POTENTIAL CORE DUPLICATE (WordPress has "wide" for separator)
  ⚠️ DUPLICATE with core/separator/wide.json
  Action: CHECK if duplicates core, compare with core/ version
```

#### table/ (1 file)
```
table/borderless.json
  Slug: borderless
  ✅ CUSTOM
  Action: KEEP
```

#### Third-Party (3 files)
```
gravityforms/form/default.json
  ✅ CUSTOM (third-party block)
  Action: KEEP

outermost/icon/default.json
  ✅ CUSTOM (third-party block)
  Action: KEEP

outermost/social-sharing/default.json
  ✅ CUSTOM (third-party block)
  Action: KEEP
```

#### Yoast (2 files)
```
yoast/faq-block/default.json
  ✅ CUSTOM (third-party block)
  Action: KEEP

yoast-seo/breadcrumbs/default.json
  ✅ CUSTOM (third-party block)
  Action: KEEP
```

#### WooCommerce (8 files)
```
woocommerce/cart-order-summary-block/compact.json
  ✅ CUSTOM (WooCommerce block)
  Action: KEEP

woocommerce/cart-order-summary-block/elevated.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/checkout-order-summary-block/compact.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/checkout-order-summary-block/elevated.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/product-button/primary.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/product-filters/compact.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/product-filters/no-border.json
  ✅ CUSTOM
  Action: KEEP

woocommerce/product-image/rounded.json
  ✅ CUSTOM (WooCommerce block, not core/image)
  Action: KEEP

woocommerce/product-price/accent.json
  ✅ CUSTOM
  Action: KEEP
```

**Top-Level Subtotal**: 29 files
- ✅ Custom variations to KEEP: 21 files
- ⚠️ Potential WordPress core duplicates: 5 files (button/outline, image/rounded, quote/plain, separator/dots, separator/wide)
- ⚠️ Internal duplicates: 3 pairs (check against core/)

---

### Core/ Subfolder (41 files)

#### core/button/ (2 files)
```
core/button/outline.json
  Slug: outline
  ⚠️ WORDPRESS CORE VARIATION — Should be in theme.json
  ⚠️ DUPLICATE with button/outline.json
  Action: MIGRATE to theme.json, DELETE file

core/button/secondary.json
  Slug: secondary
  ✅ CUSTOM
  Action: KEEP
```

#### core/columns/ (3 files)
```
core/columns/compact.json
  Slug: compact
  ✅ CUSTOM
  Action: KEEP

core/columns/no-gap.json
  Slug: no-gap
  ✅ CUSTOM
  Action: KEEP

core/columns/wide.json
  Slug: wide
  ✅ CUSTOM
  Action: KEEP
```

#### core/cover/ (1 file)
```
core/cover/rounded.json
  Slug: rounded
  ✅ CUSTOM (cover block doesn't have native "rounded" variation)
  Action: KEEP
```

#### core/gallery/ (2 files)
```
core/gallery/compact.json
  Slug: compact
  ✅ CUSTOM
  Action: KEEP

core/gallery/shadowed.json
  Slug: shadowed
  ✅ CUSTOM
  Action: KEEP
```

#### core/group/ (2 files)
```
core/group/card.json
  Slug: card
  ✅ CUSTOM
  ⚠️ DUPLICATE with group/card.json (different slugs, need comparison)
  Action: COMPARE with top-level version

core/group/elevated.json
  Slug: elevated
  ✅ CUSTOM
  Action: KEEP
```

#### core/heading/ (2 files)
```
core/heading/accent.json
  Slug: accent
  ✅ CUSTOM
  Action: KEEP

core/heading/uppercase.json
  Slug: uppercase
  ✅ CUSTOM
  Action: KEEP
```

#### core/image/ (6 files)
```
core/image/aspect-1-1.json
  Slug: aspect-1-1
  ✅ CUSTOM
  Action: KEEP

core/image/aspect-16-9.json
  Slug: aspect-16-9
  ✅ CUSTOM
  Action: KEEP

core/image/aspect-3-2.json
  Slug: aspect-3-2
  ✅ CUSTOM
  Action: KEEP

core/image/aspect-4-3.json
  Slug: aspect-4-3
  ✅ CUSTOM
  Action: KEEP

core/image/rounded.json
  Slug: rounded
  ⚠️ WORDPRESS CORE VARIATION — Should be in theme.json
  ⚠️ DUPLICATE with image/rounded.json
  Action: MIGRATE to theme.json, DELETE file

core/image/shadowed.json
  Slug: shadowed
  ✅ CUSTOM
  Action: KEEP
```

#### core/list/ (2 files)
```
core/list/checkmark.json
  Slug: checkmark
  ✅ CUSTOM
  Action: KEEP

core/list/inline.json
  Slug: inline
  ✅ CUSTOM
  Action: KEEP
```

#### core/media-text/ (2 files)
```
core/media-text/bordered.json
  Slug: bordered
  ✅ CUSTOM
  Action: KEEP

core/media-text/shadowed.json
  Slug: shadowed
  ✅ CUSTOM
  Action: KEEP
```

#### core/navigation/ (2 files)
```
core/navigation/compact.json
  Slug: compact
  ✅ CUSTOM
  Action: KEEP

core/navigation/spaced.json
  Slug: spaced
  ✅ CUSTOM
  Action: KEEP
```

#### core/paragraph/ (2 files)
```
core/paragraph/lead.json
  Slug: lead
  ✅ CUSTOM
  ⚠️ Different from paragraph/lead.json (different slugs & font sizes)
  Action: KEEP (not a duplicate)

core/paragraph/small.json
  Slug: small
  ✅ CUSTOM
  Action: KEEP
```

#### core/post-featured-image/ (3 files)
```
core/post-featured-image/aspect-16-9.json
  Slug: aspect-16-9
  ✅ CUSTOM
  Action: KEEP

core/post-featured-image/aspect-4-3.json
  Slug: aspect-4-3
  ✅ CUSTOM
  Action: KEEP

core/post-featured-image/rounded.json
  Slug: rounded
  ✅ CUSTOM (post-featured-image doesn't have native "rounded")
  Action: KEEP
```

#### core/post-title/ (2 files)
```
core/post-title/accent.json
  Slug: accent
  ✅ CUSTOM
  Action: KEEP

core/post-title/compact.json
  Slug: compact
  ✅ CUSTOM
  Action: KEEP
```

#### core/quote/ (1 file)
```
core/quote/minimal.json
  Slug: minimal
  ✅ CUSTOM
  Action: KEEP
```

**NOTE**: No `plain.json` found in core/quote/ — top-level `quote/plain.json` may be the only one

#### core/separator/ (2 files)
```
core/separator/accent.json
  Slug: accent
  ✅ CUSTOM
  Action: KEEP

core/separator/wide.json
  Slug: wide
  ⚠️ WORDPRESS CORE VARIATION — Should be in theme.json
  ⚠️ DUPLICATE with separator/wide.json
  Action: MIGRATE to theme.json, DELETE file
```

**NOTE**: No `dots.json` found in core/separator/ — top-level `separator/dots.json` may be the only one

#### core/table/ (2 files)
```
core/table/bordered.json
  Slug: bordered
  ✅ CUSTOM
  Action: KEEP

core/table/striped.json
  Slug: striped
  ⚠️ WORDPRESS CORE VARIATION? (WordPress has "stripes")
  Action: CHECK if this matches WordPress "stripes" variation
```

**Core/ Subfolder Subtotal**: 41 files
- ✅ Custom variations to KEEP: 37 files
- ⚠️ WordPress core duplicates: 3 files (button/outline, image/rounded, separator/wide)
- ⚠️ Potential core: 1 file (table/striped — check if matches "stripes")

---

## Phase 3: Confirmed WordPress Core Variation Duplicates

### Files That MUST Be Migrated to theme.json

| File Path | Slug | WordPress Variation | Status |
|:----------|:-----|:-------------------|:-------|
| `/styles/blocks/core/button/outline.json` | `outline` | `core/button` → `outline` | ❌ DELETE after migration |
| `/styles/blocks/button/outline.json` | `button-outline` | `core/button` → `outline` | ❌ DELETE (wrong slug) |
| `/styles/blocks/core/image/rounded.json` | `rounded` | `core/image` → `rounded` | ❌ DELETE after migration |
| `/styles/blocks/image/rounded.json` | `image-rounded` | `core/image` → `rounded` | ❌ DELETE (wrong slug) |
| `/styles/blocks/core/separator/wide.json` | `wide` | `core/separator` → `wide` | ❌ DELETE after migration |
| `/styles/blocks/separator/wide.json` | `separator-wide` | `core/separator` → `wide` | ❌ DELETE (wrong slug) |

**Total Files to DELETE**: **6 files**

---

### Files That Need Slug Investigation

| File Path | Current Slug | WordPress Variation | Issue |
|:----------|:-------------|:-------------------|:------|
| `/styles/blocks/separator/dots.json` | `separator-dots` | `core/separator` → `dots` | Wrong slug prefix? |
| `/styles/blocks/quote/plain.json` | `quote-plain` | `core/quote` → `plain` | Wrong slug prefix? |
| `/styles/blocks/core/table/striped.json` | `striped` | `core/table` → `stripes` | Typo? (striped vs stripes) |

**Action Required**: Check if these are attempting to be WordPress core variations with wrong slugs

---

## Phase 4: Duplicate File Analysis

### Confirmed Slug Duplicates (Need One Deleted)

| Top-Level | Core/ | Same Slug? | Action |
|:----------|:------|:-----------|:-------|
| `group/card.json` (slug: `card`) | `core/group/card.json` (slug: `card`) | ✅ YES | Compare implementations, delete inferior |
| `paragraph/lead.json` (slug: `paragraph-lead`) | `core/paragraph/lead.json` (slug: `lead`) | ❌ NO | Keep both (different slugs) |

**Files Needing Comparison**: 1 pair (`group/card.json`)

---

## Phase 5: Missing WordPress Core Variations

Based on WordPress 6.2+ docs, we should check if we have implementations for ALL core variations:

| Block | Variation | Found? | File Location |
|:------|:----------|:-------|:--------------|
| `core/button` | `fill` | ❌ NO | Should add to theme.json |
| `core/button` | `outline` | ✅ YES | Multiple files (to be migrated) |
| `core/separator` | `wide` | ✅ YES | Multiple files (to be migrated) |
| `core/separator` | `dots` | ⚠️ MAYBE | `separator/dots.json` (wrong slug?) |
| `core/image` | `rounded` | ✅ YES | Multiple files (to be migrated) |
| `core/quote` | `plain` | ⚠️ MAYBE | `quote/plain.json` (wrong slug?) |
| `core/site-logo` | `rounded` | ❌ NO | Should add to theme.json |
| `core/social-links` | `logos-only` | ❌ NO | Should add to theme.json |
| `core/social-links` | `pill-shape` | ❌ NO | Should add to theme.json |
| `core/table` | `stripes` | ⚠️ MAYBE | `core/table/striped.json` (typo?) |
| `core/tag-cloud` | `outline` | ❌ NO | Should add to theme.json |

**Missing Core Variations**: 5 (fill, rounded logo, logos-only, pill-shape, outline tag-cloud)

---

## Phase 6: Recommendations

### Immediate Actions (Priority 1)

1. ✅ **DELETE these 6 files** (WordPress core duplicates):
   - `/styles/blocks/core/button/outline.json`
   - `/styles/blocks/button/outline.json`
   - `/styles/blocks/core/image/rounded.json`
   - `/styles/blocks/image/rounded.json`
   - `/styles/blocks/core/separator/wide.json`
   - `/styles/blocks/separator/wide.json`

2. ✅ **MIGRATE to theme.json** (extract styles from deleted files):
   - `core/button` → `outline` variation
   - `core/image` → `rounded` variation
   - `core/separator` → `wide` variation

3. ✅ **INVESTIGATE slug mismatches**:
   - Is `separator/dots.json` (slug: separator-dots) supposed to be the WordPress "dots" variation?
   - Is `quote/plain.json` (slug: quote-plain) supposed to be the WordPress "plain" variation?
   - Is `core/table/striped.json` supposed to be WordPress "stripes"?

4. ✅ **COMPARE AND DELETE ONE**:
   - `group/card.json` vs `core/group/card.json` — Same slug, keep better version

### Follow-Up Actions (Priority 2)

5. ✅ **ADD missing WordPress core variations to theme.json**:
   - `core/button` → `fill`
   - `core/site-logo` → `rounded`
   - `core/social-links` → `logos-only`, `pill-shape`
   - `core/tag-cloud` → `outline`

6. ✅ **VERIFY** all custom variations don't conflict with future WordPress core additions

---

## Phase 7: theme.json Migration Snippet

### Styles to Extract and Migrate

Based on the files to be deleted, here are the styles to migrate to theme.json:

#### From core/button/outline.json
```json
{
  "styles": {
    "blocks": {
      "core/button": {
        "variations": {
          "outline": {
            "border": {
              "color": "var:preset|color|primary",
              "width": "2px",
              "style": "solid",
              "radius": "var(--wp--custom--border-radius--200)"
            },
            "color": {
              "background": "transparent",
              "text": "var:preset|color|primary"
            },
            "spacing": {
              "padding": {
                "top": "calc(0.75rem - 2px)",
                "right": "calc(1.5rem - 2px)",
                "bottom": "calc(0.75rem - 2px)",
                "left": "calc(1.5rem - 2px)"
              }
            },
            "typography": {
              "fontFamily": "var:preset|font-family|brand-sans",
              "fontSize": "var:preset|font-size|base",
              "fontWeight": "600"
            },
            ":hover": {
              "color": {
                "background": "var:preset|color|primary",
                "text": "var:preset|color|base"
              },
              "shadow": "var(--wp--preset--shadow--200)"
            }
          }
        }
      }
    }
  }
}
```

#### From core/image/rounded.json
```json
{
  "styles": {
    "blocks": {
      "core/image": {
        "variations": {
          "rounded": {
            "border": {
              "radius": "var(--wp--custom--border-radius--200)"
            },
            "spacing": {
              "margin": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
              }
            }
          }
        }
      }
    }
  }
}
```

#### From core/separator/wide.json
```json
{
  "styles": {
    "blocks": {
      "core/separator": {
        "variations": {
          "wide": {
            "color": {
              "text": "var:preset|color|border-light"
            },
            "css": "height: 1px; width: 100%; border: none;"
          }
        }
      }
    }
  }
}
```

---

## Summary Statistics

### Current State
- **Total Files**: 70 block style variation files
- **WordPress Core Duplicates**: 6 files
- **Slug Mismatches**: 3 files (need investigation)
- **True Duplicates**: 1 pair (group/card)

### After Cleanup
- **Files to DELETE**: 6-8 files (core duplicates + possible slug fixes)
- **Files to KEEP**: 62-64 files (all custom variations)
- **theme.json Additions**: 3-6 variation sections

### Reduction
- **Before**: 70 files
- **After**: ~62 files
- **Reduction**: ~11% (8 files)

---

## Next Steps

1. ⏸️  **AWAIT USER APPROVAL** for this audit report
2. ⏸️  User confirms deletion list
3. ⏸️  Create detailed task list
4. ⏸️  Extract styles from files to be deleted
5. ⏸️  Migrate styles to theme.json
6. ⏸️  Delete approved files
7. ⏸️  Verify in WordPress Block Editor

---

**Audit Status**: ✅ **COMPLETE — AWAITING APPROVAL**  
**Report Date**: 2026-03-04  
**Next Action**: User review and approval required

---

**End of Audit Report**
