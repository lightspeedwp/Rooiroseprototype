# Manual Cleanup Required — Git Operations

**Created**: 2026-03-04  
**Status**: BLOCKED — Requires Git access (cannot be done in Figma Make)  
**Related Tasks**: Theme Alignment Audit (TA-036, TA-037)

---

## Overview

The Theme Alignment Audit successfully migrated all `default.json` block style files to the canonical `styles/presets/blocks/` architecture. However, the old directory structure remains and must be manually deleted using Git commands.

**Why Manual Deletion?** Figma Make has no Git access, so `git rm -r` commands cannot be executed. These directories must be deleted manually in the WordPress theme repository.

---

## Directories to Delete

### Core Block Directories (7 directories)

All of these directories originally contained only a `default.json` file. That content has been migrated to `styles/presets/blocks/core-{blockname}.json`.

**Location**: `wordpress-export/themes/die-papier-theme/styles/blocks/`

```bash
# From theme root:
cd wordpress-export/themes/die-papier-theme/styles/blocks/

git rm -r post-date/
git rm -r post-terms/
git rm -r post-title/
git rm -r pullquote/
git rm -r search/
git rm -r site-title/
git rm -r columns/
```

**Verification**: After deletion, `styles/blocks/` should only contain directories with **named style variations** (not defaults):

- ✅ `button/` — contains `outline.json` variation (default migrated)
- ✅ `buttons/` — contains `filter-pill.json` variation
- ✅ `column/` — contains `card.json` variation
- ✅ `group/` — contains `card.json`, `card-hover.json` variations
- ✅ `heading/` — contains 4 named variations
- ✅ `image/` — contains 4 named variations
- ✅ `list/` — contains `no-bullets.json` variation
- ✅ `navigation/` — contains 2 named variations
- ✅ `paragraph/` — contains `badge.json`, `lead.json` variations
- ✅ `post-template/` — contains `product-card.json` variation
- ✅ `quote/` — contains 4 named variations
- ✅ `separator/` — contains 3 named variations
- ✅ `table/` — contains `borderless.json` variation
- ✅ `gravityforms/` — third-party block variation
- ✅ `outermost/` — third-party block variations
- ✅ `woocommerce/` — WooCommerce block variations (see below)
- ✅ `yoast/` — third-party block variation
- ✅ `yoast-seo/` — third-party block variation

---

### WooCommerce Block Subdirectories (Conditional — Verify First)

**Location**: `wordpress-export/themes/die-papier-theme/styles/blocks/woocommerce/`

The report identified **27 WooCommerce subdirectories**, each originally containing only a `default.json` file. These defaults have been migrated to `styles/presets/blocks/woocommerce-{blockname}.json`.

**⚠️ IMPORTANT**: Only delete WooCommerce subdirectories if they are **completely empty** or contain **only** `default.json`. If a subdirectory contains additional named style variations (e.g., `primary.json`, `accent.json`), **DO NOT DELETE** the directory — only delete the `default.json` file within it.

**Manual Verification Required**:

```bash
# From theme root:
cd wordpress-export/themes/die-papier-theme/styles/blocks/woocommerce/

# List all subdirectories with their contents
for dir in */; do
  echo "=== $dir ==="
  ls -1 "$dir"
done
```

**Expected WooCommerce Subdirectories** (from Block Styles report):

Current `styles/blocks/woocommerce/` structure should only contain named variations:

- ✅ `product-button/` — contains `primary.json` variation (default migrated to presets)
- ✅ `product-image/` — contains `rounded.json` variation (default migrated to presets)
- ✅ `product-price/` — contains `accent.json` variation (default migrated to presets)

**If any other WooCommerce subdirectories exist with ONLY `default.json`**, delete them:

```bash
# Example deletion (verify first!):
git rm -r woocommerce/accordion-header/     # if empty or only default.json
git rm -r woocommerce/accordion-item/       # if empty or only default.json
# ... etc for other directories confirmed empty
```

---

## Post-Deletion Verification

After deleting directories, verify the theme structure:

### 1. Block Styles Directory Structure

```bash
ls -1 wordpress-export/themes/die-papier-theme/styles/blocks/
```

**Expected Output** (only directories with named variations):
- button/
- buttons/
- column/
- gravityforms/
- group/
- heading/
- image/
- list/
- navigation/
- outermost/
- paragraph/
- post-template/
- quote/
- separator/
- table/
- woocommerce/
- yoast/
- yoast-seo/

### 2. Preset Files Verification

```bash
ls -1 wordpress-export/themes/die-papier-theme/styles/presets/blocks/
```

**Expected Output** (49 preset files):
- All migrated default styles should now be in individual preset files
- File naming convention: `core-{blockname}.json`, `woocommerce-{blockname}.json`, `{namespace}-{blockname}.json`

---

## Git Workflow

**Recommended commit message**:

```bash
git add -A
git commit -m "chore: remove empty block style directories after preset migration

- Delete 7 core block directories (post-date, post-terms, post-title, pullquote, search, site-title, columns)
- Delete empty WooCommerce block subdirectories (if applicable)
- All default block styles now in styles/presets/blocks/ (auto-discovered)
- Related: Theme Alignment Audit tasks TA-036, TA-037"
```

---

## Why This Matters

**Architecture Alignment**: The `die-papier-tema` theme on GitHub uses the `styles/presets/blocks/` architecture where all block defaults are auto-discovered by `presets.php`. The old `styles/blocks/{blockname}/default.json` pattern is deprecated in this theme.

**Cleaner Structure**: Removing empty directories prevents confusion and ensures the theme follows the canonical architecture pattern.

**Auto-Discovery**: The `presets.php` file recursively loads all JSON files from `styles/presets/blocks/`, so no manual registration is needed. Orphaned directories in `styles/blocks/` serve no purpose once defaults are migrated.

---

## Related Documentation

- **Theme Alignment Audit**: `/tasks/theme-alignment-tasks.md` (tasks TA-036, TA-037)
- **Block Styles Report**: `/reports/theme-alignment/sub-prompt-4-block-styles-comparison.md`
- **Presets Loader**: `/guidelines/wordpress-migration/includes/presets.md`
- **Block Styles Guide**: `/guidelines/wordpress-migration/block-styles.md`

---

## Status

- [x] Content migrated from `default.json` files to `styles/presets/blocks/`
- [x] 49 preset files created and verified
- [ ] **BLOCKED**: Delete 7 empty core block directories (requires Git access)
- [ ] **BLOCKED**: Delete empty WooCommerce subdirectories (requires manual verification + Git access)

**Next Steps**: Execute deletion commands in WordPress theme repository with Git access.
