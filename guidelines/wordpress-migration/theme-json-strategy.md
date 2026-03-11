# theme.json Slug Migration Strategy

**Last updated**: 2026-03-02
**Version**: 1.0
**Template**: `/guidelines/_templates/strategy-guideline-template.md`
**Purpose**: Defines the plan to align Die Papier theme.json and preset slugs with the Ollie theme standard.

---

## Current State

- **Source files**: 
  - `/wordpress-export/themes/die-papier-theme/theme.json`
  - `/wordpress-export/themes/die-papier-theme/styles/presets/spacing.json`
  - `/wordpress-export/themes/die-papier-theme/styles/presets/colors.json`
  - `/wordpress-export/themes/die-papier-theme/styles/presets/typography.json`
- **Known constraints**: 
  - WordPress 6.9+ requires theme.json v3.
  - Many patterns reference custom slugs like `brand-navy` or `spacing-50`.
- **Pain points**:
  - Custom slugs make it harder to swap Ollie patterns.
  - Numeric slugs for font sizes are less intuitive for editors.

---

## Target State

- **Architecture**: A semantic slug system aligned with Ollie theme.
- **File structure**: 
  - Consolidated `theme.json` palette and sizes.
  - Synced preset JSON files.
  - Updated block and section styles.
- **Success criteria**: 
  - All patterns render correctly with new slugs.
  - No broken CSS variables in the frontend.
  - Editor shows semantic names (Small, Medium, Large) instead of numbers.

---

## Decision Log

| ID | Decision | Rationale | Source | Impact |
|---|---|---|---|---|
| D-001 | Use Ollie semantic slugs | Standardize with base theme | Audit Report | High: mass find/replace needed |
| D-002 | Map `contrast` to `main` | Ollie uses `main` for contrast color | Ollie theme.json | Variable name change |
| D-003 | Use `tertiary` for `base-2`| Align light gray surface with Ollie's Tint | Audit Report | Consistency |
| D-004 | Map numeric sizes to names | Improved editor UX | Figma Guide | Name change in editor |

---

## Execution Plan

### Phase 1: Preset Refactor
- **Scope**: Update `colors.json`, `spacing.json`, and `typography.json`.
- **Dependencies**: None.
- **Validation**: JSON validation.

### Phase 2: theme.json Refactor
- **Scope**: Update `settings` and `styles` in `theme.json`.
- **Dependencies**: Phase 1.
- **Validation**: Verify CSS variables in browser.

### Phase 3: Style Batch Update
- **Scope**: Update all files in `styles/blocks/` and `styles/sections/`.
- **Dependencies**: Phase 2.
- **Validation**: Editor style previews.

### Phase 4: Pattern Find/Replace
- **Scope**: Update all `.php` files in `patterns/`.
- **Dependencies**: Phase 3.
- **Validation**: Visual parity check on all pages.

---

## Related Files

- `/reports/theme-json-slug-migration-audit.md`
- `/tasks/theme-json-slug-migration-task-list.md`
- `/wordpress-export/themes/die-papier-theme/theme.json`
