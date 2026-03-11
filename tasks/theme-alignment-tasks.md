# Theme Alignment Audit — Consolidated Implementation Task List

**Created**: 2026-03-04  
**Orchestrator**: `/prompts/theme-alignment-audit-orchestrator.md`  
**Status**: ✅ **COMPLETE** — 42/42 tasks done
**Total Tasks**: 42 (all DONE)
**Implementation Note**: Block default styles use GitHub's `styles/presets/blocks/` approach (49 preset files, auto-discovered by presets.php) instead of theme.json `styles.blocks`. This aligns with the `die-papier-tema` develop branch architecture.
**Key Findings**: 9 additional default.json files found and deleted during TA-022 content comparison. 2 missing navigation block styles (badges.json, header-navigation.json) downloaded. 5 missing templates and 5 missing parts created from GitHub.
**Reports**: 7 sub-prompt reports in `/reports/theme-alignment/`

---

## Execution Status

| # | Sub-Prompt | Status | Report |
|:--|:-----------|:-------|:-------|
| 1 | Inc/ Folder Alignment | AUDITED |
| 2 | functions.php & style.css | AUDITED |
| 3 | theme.json Block Styles | AUDITED |
| 4 | Block Styles Directory | AUDITED |
| 5 | Section Styles & Presets | AUDITED |
| 6 | Templates & Parts | AUDITED |
| 7 | WooCommerce Block Compliance | AUDITED |

---

## Priority Legend

- **P0** — Critical: Must be done first, blocks other tasks
- **P1** — Important: Required for production readiness
- **P2** — Medium: Quality improvements
- **P3** — Low: Nice-to-have, documentation

---

## Phase 1: P0 — Critical (17 tasks)

### theme.json Restoration (SP3) — DO FIRST

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-001 | Add `styles.blocks` section to theme.json with 13 core block entries (button, buttons, columns, list, navigation, post-date, post-terms, post-title, pullquote, quote, search, separator, site-title) | `theme.json` | SP3-01 |
| TA-002 | Add 24 WooCommerce block entries to `styles.blocks` (accordion-header, accordion-item, add-to-cart-variation-selector, breadcrumbs, category-description, category-title, customer-account, mini-cart, order-confirmation-status, product-filter-attribute, product-filter-price, product-filter-rating, product-filter-status, product-gallery-large-image-next-previous, product-image, product-price, product-rating, product-results-count, product-review-author-name, product-review-content, product-review-date, product-reviews, product-sale-badge, product-summary, product-title) | `theme.json` | SP3-02 |
| TA-003 | Add `settings.blocks` section with 5 block configs (outermost/icon iconSizes, outermost/social-sharing palette+typography+spacing, woocommerce/product-button color+spacing+border, woocommerce/cart spacing, woocommerce/checkout spacing) | `theme.json` | SP3-03 |
| TA-004 | Fix product-image border-radius: use `var(--wp--custom--border-radius--200)` CSS function instead of non-existent `var:preset|border-radius|small` | `theme.json` | SP3-05 |
| TA-005 | Verify ALL values in styles.blocks use preset variables — no hardcoded hex, px, or font-family strings | `theme.json` | SP3-06 |

### Inc/ Folder Alignment (SP1)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-006 | Overwrite local `setup.php` with GitHub namespace version (`DiePapierTema\includes`) | `inc/setup.php` | SP1-01 |
| TA-007 | Overwrite local `presets.php` with GitHub namespace version (auto-discovery) | `inc/presets.php` | SP1-02 |
| TA-008 | Overwrite local `patterns.php` with GitHub namespace version | `inc/patterns.php` | SP1-03 |
| TA-009 | Overwrite local `custom-icons.php` with GitHub namespace version | `inc/custom-icons.php` | SP1-04 |
| TA-010 | Overwrite local `block-bindings.php` with GitHub namespace version | `inc/block-bindings.php` | SP1-05 |

### functions.php & style.css (SP2)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-011 | Overwrite local `functions.php` with GitHub version (namespace, 4 inc loads, inline enqueue/WooCommerce/pagination/sidebar functions). Add excerpt + plugin notice from local. | `functions.php` | SP1-06, SP2-03 |
| TA-012 | Merge GitHub `style.css` into local — add all missing sections (CSS reset, forms, sticky header, mobile helpers) while keeping local-only styles (focus, text-wrap, navigation outlines) | `style.css` | SP2-01 |
| TA-013 | Update `style.css` theme header: `DiePapierTema`, WP 6.9, text domain `diepapiertema` | `style.css` | SP2-02 |

### Block Styles Directory (SP4)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-014 | Download `query-pagination/` block styles from GitHub and create locally | `styles/blocks/query-pagination/` | SP4-01 |
| TA-015 | Move content from 8 core block `default.json` files into theme.json (then delete empty directories) | `styles/blocks/{post-date,post-terms,post-title,pullquote,search,site-title,columns,button}/default.json` | SP4-02 |
| TA-016 | Move content from 27 WooCommerce block `default.json` files into theme.json (then delete empty directories) | `styles/blocks/woocommerce/*/default.json` | SP4-03 |

### WooCommerce (SP7)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-017 | Create/verify `assets/styles/woocommerce.css` with required CSS overrides | `assets/styles/woocommerce.css` | SP7-03 |

---

## Phase 2: P1 — Important (13 tasks)

### Block Styles Cleanup (SP3, SP4)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-018 | Add `yoast-seo/breadcrumbs` to theme.json `styles.blocks` (fontSize: small, color: main-accent) | `theme.json` | SP3-04 |
| TA-019 | Add `gravityforms/form` to theme.json `styles.blocks` (typography, spacing overrides) | `theme.json` | SP3-04 |
| TA-020 | Keep `button/outline.json` as named button variation (NOT a default) | `styles/blocks/button/outline.json` | SP4-05 |
| TA-021 | Keep `quote/plain.json` as named quote variation (NOT a default) | verified | SP4-05 |
| TA-022 | Content-compare all 14 matching block style directories against GitHub | `styles/blocks/` | SP4-06 |

### Inc/ Cleanup (SP1)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-023 | Delete `block-styles.php` (obsolete — block styles now in theme.json) | `inc/block-styles.php` | SP1-07 |
| TA-024 | Delete `section-styles.php` (obsolete — auto-discovered from JSON) | `inc/section-styles.php` | SP1-08 |
| TA-025 | Delete `enqueue.php` (absorbed into functions.php) | `inc/enqueue.php` | SP1-09 |
| TA-026 | Delete `parts.php` (absorbed into functions.php) | `inc/parts.php` | SP1-10 |

### Section Styles & Presets (SP5)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-027 | Compare all 9 section style JSON files between GitHub and local | `styles/sections/*.json` | SP5-01 |
| TA-028 | Compare all 11 preset JSON files between GitHub and local | `styles/presets/*.json` | SP5-03 |

### Templates & Parts (SP6)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-029 | List all template/part HTML files on GitHub vs local — identify missing/extra | `templates/`, `parts/` | SP6-01, SP6-02 |
| TA-030 | Update Inc Folder Browser data to reflect new 5-file structure | `incFolderData.ts` | SP1-16 |

---

## Phase 3: P2 — Medium (9 tasks)

### Inc/ Namespace Conversion (SP1)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-031 | Convert `woocommerce.php` to `DiePapierTema\includes` namespace | `inc/woocommerce.php` | SP1-11 |
| TA-032 | Convert `performance.php` to `DiePapierTema\includes` namespace | `inc/performance.php` | SP1-12 |
| TA-033 | Convert `advanced-ads-memberships.php` to `DiePapierTema\includes` namespace | `inc/advanced-ads-memberships.php` | SP1-13 |
| TA-034 | Convert `aql-deduplication.php` to `DiePapierTema\includes` namespace | `inc/aql-deduplication.php` | SP1-14 |

### Block Styles Verification (SP3, SP4)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-035 | Verify section styles use preset variables only (no hardcoded values) | `styles/sections/*.json` | SP5-02 |
| TA-036 | Delete core block directories that only contained `default.json` after migration to theme.json | `styles/blocks/{post-date,post-terms,post-title,pullquote,search,site-title,columns}/` | SP4-04 |
| TA-037 | Delete WooCommerce subdirectories that only contain `default.json` after migration | `styles/blocks/woocommerce/*/` | SP4-08 |
| TA-038 | Diff content of each matching template/part file against GitHub | `templates/`, `parts/` | SP6-03 |

### Text Domain (SP2)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-039 | Decide and standardize text domain: `diepapiertema` (GitHub) vs `die-papier` (local) across all PHP files | All PHP | SP2-05 |

---

## Phase 4: P3 — Low (3 tasks)

| ID | Task | File(s) | Source |
|:---|:-----|:--------|:-------|
| TA-040 | Convert `font-collections.php` to `DiePapierTema\includes` namespace | `inc/font-collections.php` | SP1-15 |
| TA-041 | Check for orphaned presets (defined but never referenced) | `styles/presets/*.json` | SP5-05 |
| TA-042 | Verify all `wp:pattern` slug references in templates resolve to existing patterns | `templates/*.html` | SP6-04 |

---

## Execution Order

The recommended execution order respects dependencies:

```
1. TA-001 through TA-005  (theme.json restoration — FIRST, everything depends on this)
2. TA-006 through TA-010  (inc/ file overwrites)
3. TA-011 through TA-013  (functions.php & style.css)
4. TA-014 through TA-017  (block styles directory cleanup + WooCommerce CSS)
5. TA-018 through TA-030  (P1 cleanup and verification)
6. TA-031 through TA-042  (P2-P3 namespace conversion and final verification)
```

---

## Key Dependencies

| Task | Depends On | Reason |
|:-----|:-----------|:-------|
| TA-015, TA-016 | TA-001, TA-002 | Don't delete default.json files until their content is in theme.json |
| TA-036, TA-037 | TA-015, TA-016 | Don't delete directories until default.json files are migrated |
| TA-023 | TA-001 | Don't delete block-styles.php until theme.json has block styles |
| TA-030 | TA-006–TA-010 | Update browser data after inc/ files are updated |

---

## Reference Files

| Document | Path |
|:---------|:-----|
| Orchestrator | `/prompts/theme-alignment-audit-orchestrator.md` |
| Diepapieralt theme.json (reference) | `lightspeedwp/Diepapieralt@fa0ae6a` |
| WooCommerce block guidelines | `/guidelines/components/blocks/woocommerce/` (28 files) |
| Section style guidelines | `/guidelines/styles/sections/` (10 files) |
| Inc/ guidelines | `/guidelines/wordpress-migration/includes/` (6 files) |
| Block guidelines master index | `/guidelines/components/blocks/README.md` |
| Design system guide | `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` |
| Preset files | `/wordpress-export/themes/die-papier-theme/styles/presets/` (11 files) |