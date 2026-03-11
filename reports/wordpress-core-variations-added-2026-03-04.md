# WordPress Core Block Variations Added to theme.json

**Date**: 2026-03-04  
**Action**: Added all WordPress 6.2+ core block variations to theme.json  
**Status**: ✅ **COMPLETE**

---

## Summary

All **11 WordPress core block variations** across **8 blocks** have been successfully added to `theme.json`. These variations were previously registered as separate JSON files (duplicates) and have now been properly migrated to the theme.json `variations` sections.

---

## Variations Added

### 1. core/button (2 variations)

#### fill
- **Color**: Primary background, base text
- **Usage**: Default filled button style

#### outline  
- **Border**: 2px solid primary, rounded
- **Color**: Transparent background, primary text
- **Hover**: Fills with primary, adds shadow
- **Spacing**: Adjusted padding to compensate for border width

---

### 2. core/image (1 variation)

#### rounded
- **Border**: Uses theme border-radius (200 preset)
- **Spacing**: Margin reset to zero

---

### 3. core/separator (2 variations)

#### wide
- **Color**: Border-light text color
- **CSS**: Custom height/width rules

#### dots
- **Color**: 50% transparent current color (color-mix)

---

### 4. core/quote (1 variation)

#### plain
- **Border**: All borders removed (transparent, none, 0)
- **Spacing**: All padding removed

---

### 5. core/site-logo (1 variation)

#### rounded
- **Border**: Perfect circle (9999px radius)

---

### 6. core/social-links (2 variations)

#### logos-only
- **Color**: Transparent background

#### pill-shape
- **Border**: 40px radius (pill shape)

---

### 7. core/table (1 variation)

#### stripes
- **Typography**: Base font size
- **Border**: Border-light color
- **CSS**: Zebra striping on even rows

---

### 8. core/tag-cloud (1 variation)

#### outline
- **Border**: 1px solid
- **Spacing**: Small padding on all sides

---

## Files Migrated

The following variations were extracted from these JSON files (now ready for deletion):

### Required Migrations (from duplicate files):
1. `/styles/blocks/core/button/outline.json` → `core/button.variations.outline`
2. `/styles/blocks/button/outline.json` → `core/button.variations.outline` (wrong slug)
3. `/styles/blocks/core/image/rounded.json` → `core/image.variations.rounded`
4. `/styles/blocks/image/rounded.json` → `core/image.variations.rounded` (wrong slug)
5. `/styles/blocks/core/separator/wide.json` → `core/separator.variations.wide`
6. `/styles/blocks/separator/wide.json` → `core/separator.variations.wide` (wrong slug)
7. `/styles/blocks/separator/dots.json` → `core/separator.variations.dots`
8. `/styles/blocks/quote/plain.json` → `core/quote.variations.plain`
9. `/styles/blocks/core/table/striped.json` → `core/table.variations.stripes`

### New Additions (no previous files):
10. `core/button.variations.fill` — NEW (no previous file)
11. `core/site-logo.variations.rounded` — NEW (no previous file)
12. `core/social-links.variations.logos-only` — NEW (no previous file)
13. `core/social-links.variations.pill-shape` — NEW (no previous file)
14. `core/tag-cloud.variations.outline` — NEW (no previous file)

---

## theme.json Structure

All variations are nested under `styles.blocks.{blockName}.variations`:

```json
{
  "version": 3,
  "styles": {
    "blocks": {
      "core/button": {
        "variations": {
          "fill": { ...styles... },
          "outline": { ...styles... }
        }
      },
      "core/image": {
        "variations": {
          "rounded": { ...styles... }
        }
      },
      "core/separator": {
        "variations": {
          "wide": { ...styles... },
          "dots": { ...styles... }
        }
      },
      "core/quote": {
        "variations": {
          "plain": { ...styles... }
        }
      },
      "core/site-logo": {
        "variations": {
          "rounded": { ...styles... }
        }
      },
      "core/social-links": {
        "variations": {
          "logos-only": { ...styles... },
          "pill-shape": { ...styles... }
        }
      },
      "core/table": {
        "variations": {
          "stripes": { ...styles... }
        }
      },
      "core/tag-cloud": {
        "variations": {
          "outline": { ...styles... }
        }
      }
    }
  }
}
```

---

## Benefits

### ✅ No More Duplicates
- WordPress core "Outline" button + custom "Outline" button = **1 variation** now

### ✅ WordPress Best Practices
- Core variations belong in theme.json (not separate files)
- Proper WordPress FSE architecture

### ✅ Cleaner Block Editor
- Users won't see duplicate variations in style picker
- Consistent variation names across all sites

### ✅ Reduced File Count
- 9 duplicate files can now be safely deleted
- Simpler theme structure

---

## Next Steps

Now that variations are in theme.json, we can safely **DELETE the duplicate JSON files**:

### Files Ready for Deletion (9 files):

```bash
# Button variations (2 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/button/outline.json
/wordpress-export/themes/die-papier-theme/styles/blocks/button/outline.json

# Image variations (2 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/image/rounded.json
/wordpress-export/themes/die-papier-theme/styles/blocks/image/rounded.json

# Separator variations (3 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/separator/wide.json
/wordpress-export/themes/die-papier-theme/styles/blocks/separator/wide.json
/wordpress-export/themes/die-papier-theme/styles/blocks/separator/dots.json

# Quote variation (1 file)
/wordpress-export/themes/die-papier-theme/styles/blocks/quote/plain.json

# Table variation (1 file)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/table/striped.json
```

**User approval required before deletion.**

---

## Verification Checklist

After file deletion, verify in WordPress Block Editor:

- [ ] Button block has "Fill" and "Outline" variations (no duplicates)
- [ ] Image block has "Rounded" variation (no duplicates)
- [ ] Separator block has "Wide" and "Dots" variations (no duplicates)
- [ ] Quote block has "Plain" variation (no duplicates)
- [ ] Site Logo block has "Rounded" variation
- [ ] Social Links block has "Logos only" and "Pill shape" variations
- [ ] Table block has "Stripes" variation (not "Striped")
- [ ] Tag Cloud block has "Outline" variation
- [ ] All variations apply styles correctly
- [ ] No duplicate variation names in style picker

---

## File Statistics

### Before
- **theme.json**: 0 variation sections
- **Duplicate JSON files**: 9 files
- **Total block variation files**: 70 files

### After  
- **theme.json**: 8 variation sections (11 variations total)
- **Duplicate JSON files**: 0 files (after deletion)
- **Total block variation files**: 61 files (after deletion)

**Reduction**: 9 files (~13%)

---

## WordPress Compatibility

**Minimum WordPress Version**: 6.2  
**Minimum theme.json Version**: 3  
**Feature**: Block Style Variations in theme.json

All variations use WordPress 6.2+ syntax and are fully compatible with WordPress 6.8 (current schema version).

---

## Preset Variable Usage

All variations use proper Die Papier theme presets:

**Colors**: 
- `var:preset|color|primary`
- `var:preset|color|base`
- `var:preset|color|border-light`
- `var:preset|color|tertiary`

**Spacing**:
- `var:preset|spacing|small`
- `var:preset|spacing|medium`

**Border Radius**:
- `var(--wp--custom--border-radius--200)`
- `var(--wp--custom--border-radius--9999)`

**Shadows**:
- `var(--wp--preset--shadow--200)`

**Fonts**:
- `var:preset|font-family|brand-sans`
- `var:preset|font-size|base`

---

## Documentation Updated

- ✅ **Audit Report**: `/reports/block-style-variations-audit-2026-03-04.md`
- ✅ **Task List**: `/tasks/block-style-variations-cleanup-tasks.md`
- ✅ **This Report**: `/reports/wordpress-core-variations-added-2026-03-04.md`

---

**Status**: ✅ **Variations successfully added to theme.json**  
**Next Action**: User approval for file deletion

---

**End of Report**
