# Rooi Rose Guidelines Cleanup Plan

**Date**: 2026-03-11  
**Priority**: P0 — Pre-Redesign Cleanup  
**Goal**: Reduce guidelines from ~50 files to ~30 focused rooi rose files

---

## Executive Summary

The current `/guidelines/` folder contains extensive Die Papier newspaper documentation that is no longer relevant to the rooi rose magazine redesign. This cleanup plan identifies:

- **15 files to DELETE** (obsolete Die Papier content)
- **12 files to UPDATE** (rebrand to rooi rose)
- **5 files to CREATE** (new rooi rose editorial guidelines)
- **25 files to RETAIN** (universal architecture/dev docs)

**Context Reduction**: ~40% reduction in guideline file count, focusing documentation on rooi rose magazine editorial needs.

---

## Section 1: Files to DELETE

### 1.1 WordPress Migration — Obsolete Content (6 files)

| File | Reason for Deletion |
|:-----|:-------------------|
| `/guidelines/wordpress-migration/redirects.md` | Die Papier English→Afrikaans URL redirects (newspaper-specific) |
| `/guidelines/wordpress-migration/full-page-patterns.md` | 159 Die Papier newspaper patterns inventory (will be recreated for magazine) |
| `/guidelines/content/master-content-export.md` | Die Papier static page content exports |
| `/guidelines/data-structure/wordpress-data-model.md` | Die Papier newspaper CPT structure (obituaries, classifieds, etc.) |
| `/guidelines/wordpress-migration/content/taxonomy-mapping.md` | Die Papier category→taxonomy mapping |
| `/guidelines/wordpress-migration/content/menu-strategy.md` | Die Papier navigation menus (newspaper structure) |

**Justification**: These files document Die Papier newspaper-specific content structures (news sections, obituaries, classifieds) that don't apply to rooi rose lifestyle magazine. New magazine-specific equivalents will be created during redesign.

---

### 1.2 Imported Reference Files (4 files)

| File | Reason for Deletion |
|:-----|:-------------------|
| `/src/imports/css-guidelines.md` | Superseded by `/guidelines/design-tokens/` folder |
| `/src/imports/cleanup-guidelines.md` | Merged into main `Guidelines.md` |
| `/src/imports/pasted_text/rooi-rose-plan.md` | One-time reference (archived after implementation) |
| `/guidelines/wordpress-migration/third-party-plugins/plugin-structure.md` | Generic WordPress plugin doc (not rooi rose-specific) |

**Justification**: These are either duplicate documentation or one-time reference materials that have been integrated into permanent guidelines.

---

### 1.3 Outdated Reports & Tasks (5 files)

| File | Reason for Deletion |
|:-----|:-------------------|
| `/reports/block-styles-cleanup-complete-2026-03-04.md` | Completed Die Papier task |
| `/reports/block-pattern-validation-final-report-2026-03-04.md` | Completed Die Papier validation |
| `/reports/memory-optimization-audit-2026-03-05.md` | Completed optimization (universal learnings retained) |
| `/tasks/memory-optimization-tasks.md` | Completed task list |
| `/tasks/theme-completeness-tasks.md` | Die Papier theme completion tasks |

**Justification**: These completed reports and task lists document Die Papier newspaper development. Archive to `/tasks/archived/2026-03/` instead of deleting entirely.

---

## Section 2: Files to UPDATE (Rebrand to rooi rose)

### 2.1 Design Tokens — Core Updates (6 files)

| File | Updates Required |
|:-----|:-----------------|
| `/guidelines/design-tokens/colors.md` | Replace Die Papier navy (#142135) + red (#E82C27) with rooi rose palette (#e01e12 + neutrals + editorial accents) |
| `/guidelines/design-tokens/typography.md` | Replace Roboto Serif + Inter with Playfair Display SC + Karla, update editorial scale |
| `/guidelines/design-tokens/spacing.md` | Add magazine-specific spacing tokens (xx-small → xxx-large, 4px → 128px) |
| `/guidelines/design-tokens/layout.md` | Update from newspaper 4-column to magazine 12-column modular grid |
| `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` | Update all token references to rooi rose brand |
| `/guidelines/design-tokens/typography-implementation-guide.md` | Update font enforcement rules for Playfair Display SC + Karla |

**Priority**: P0 — These are the foundation for all CSS and component updates.

---

### 2.2 WordPress Migration — Generic Updates (4 files)

| File | Updates Required |
|:-----|:-----------------|
| `/guidelines/wordpress-migration/theme-structure.md` | Update theme name references: DiePapierTema → RooiRoseTema |
| `/guidelines/wordpress-migration/block-mapping.md` | Update React component examples with rooi rose tokens |
| `/guidelines/wordpress-migration/theme-json-strategy.md` | Update theme.json examples with rooi rose palette |
| `/guidelines/wordpress-migration/templates-and-parts.md` | Rebrand template part references |

**Priority**: P1 — WordPress export compatibility.

---

### 2.3 Guidelines.md Master Index (2 files)

| File | Updates Required |
|:-----|:-----------------|
| `/guidelines/Guidelines.md` | Remove Die Papier completion summaries, add rooi rose redesign orchestrator reference |
| `/README.md` | Update project description: newspaper → magazine |

**Priority**: P0 — Navigation and project overview.

---

## Section 3: Files to CREATE (New rooi rose Guidelines)

### 3.1 Brand & Editorial Guidelines (5 files)

| File | Purpose |
|:-----|:--------|
| `/guidelines/rooi-rose/brand-guidelines.md` | rooi rose brand identity: colors, fonts, voice, photography style |
| `/guidelines/rooi-rose/editorial-style-guide.md` | Article structure, typography hierarchy, image guidelines, spacing patterns |
| `/guidelines/rooi-rose/magazine-layouts.md` | Homepage, category, single post layouts with component inventory |
| `/guidelines/design-tokens/editorial-components.md` | Pull quotes, hero sections, category labels, scrollytelling specs |
| `/guidelines/rooi-rose/content-strategy.md` | Content focus areas (lifestyle, food, fashion, home), article types, publishing calendar |

**Priority**: P0 — Core rooi rose design language.

---

## Section 4: Files to RETAIN (Universal Documentation)

### 4.1 Development Guidelines (10 files) ✅ KEEP

```
/guidelines/development/
├── dev-tools-protection.md ✅ Universal protection rules
├── file-organization.md ✅ Universal file structure
├── css-architecture.md ✅ Token-first architecture (update token examples only)
├── performance.md ✅ Universal performance rules
└── launch-checklist.md ✅ Universal checklist

/guidelines/design-tokens/
├── ui-presets.md ✅ Buttons, shadows, radii (update with rooi rose tokens)
├── borders.md ✅ Border system (universal)
├── aspect-ratios.md ✅ Aspect ratio utilities (universal)
├── dark-mode.md ✅ Dark mode strategy (update with rooi rose dark tokens)
└── interactions.md ✅ Transition/animation tokens (universal)
```

---

### 4.2 WordPress Block Documentation (8 files) ✅ KEEP

```
/guidelines/components/blocks/
├── README.md ✅ Block catalog (universal)
├── core/social-links.md ✅ Update URLs to rooi rose social profiles
└── ... (all block documentation retains structure)

/guidelines/wordpress-migration/
├── block-pattern-validation.md ✅ Universal validation rules
├── block-plugin-strategy.md ✅ Universal Gutenberg strategy
├── block-styles.md ✅ Block style variation system (universal)
└── SECTION-STYLES-CSS-TO-JSON.md ✅ Section style architecture (universal)
```

---

### 4.3 Third-Party Plugin Integration (7 files) ✅ KEEP (Update URLs/Branding Only)

```
/guidelines/wordpress-migration/third-party-plugins/
├── woocommerce.md ✅ Update product names (e-koerant → e-tydskrif)
├── advanced-ads.md ✅ Universal ad placement strategy
├── gravity-forms.md ✅ Universal form strategy
├── yoast-seo.md ✅ Universal SEO strategy
├── social-sharing.md ✅ Universal sharing strategy
├── icon-block.md ✅ Universal icon block docs
└── advanced-query-loop.md ✅ Universal query strategy
```

---

## Implementation Plan

### Phase 1: Delete Obsolete Files (1 hour)

```bash
# Delete obsolete guidelines
rm /guidelines/wordpress-migration/redirects.md
rm /guidelines/wordpress-migration/full-page-patterns.md
rm /guidelines/content/master-content-export.md
rm /guidelines/data-structure/wordpress-data-model.md
rm /guidelines/wordpress-migration/content/taxonomy-mapping.md
rm /guidelines/wordpress-migration/content/menu-strategy.md

# Delete superseded reference files
rm /src/imports/css-guidelines.md
rm /src/imports/cleanup-guidelines.md
rm /src/imports/pasted_text/rooi-rose-plan.md
rm /guidelines/wordpress-migration/third-party-plugins/plugin-structure.md

# Archive completed reports/tasks
mkdir -p /tasks/archived/2026-03
mv /reports/block-styles-cleanup-complete-2026-03-04.md /tasks/archived/2026-03/
mv /reports/block-pattern-validation-final-report-2026-03-04.md /tasks/archived/2026-03/
mv /reports/memory-optimization-audit-2026-03-05.md /tasks/archived/2026-03/
mv /tasks/memory-optimization-tasks.md /tasks/archived/2026-03/
mv /tasks/theme-completeness-tasks.md /tasks/archived/2026-03/
```

---

### Phase 2: Update Core Design Tokens (4 hours)

**Order of Updates** (dependencies matter):
1. `/guidelines/design-tokens/colors.md` — Foundation
2. `/guidelines/design-tokens/typography.md` — Font families + scale
3. `/guidelines/design-tokens/spacing.md` — Magazine spacing
4. `/guidelines/design-tokens/layout.md` — Grid system
5. `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` — Master reference
6. `/guidelines/design-tokens/typography-implementation-guide.md` — Enforcement rules

---

### Phase 3: Create rooi rose Brand Guidelines (3 hours)

**New Files** (in order):
1. `/guidelines/rooi-rose/brand-guidelines.md` — Identity foundation
2. `/guidelines/rooi-rose/editorial-style-guide.md` — Editorial rules
3. `/guidelines/design-tokens/editorial-components.md` — Component specs
4. `/guidelines/rooi-rose/magazine-layouts.md` — Layout patterns
5. `/guidelines/rooi-rose/content-strategy.md` — Content planning

---

### Phase 4: Update Supporting Documentation (2 hours)

**Files to Update**:
1. `/guidelines/Guidelines.md` — Remove Die Papier summaries, add rooi rose orchestrator
2. `/README.md` — Update project description
3. `/guidelines/wordpress-migration/theme-structure.md` — Theme name updates
4. `/guidelines/wordpress-migration/block-mapping.md` — Token examples
5. `/guidelines/wordpress-migration/theme-json-strategy.md` — Palette examples
6. `/guidelines/wordpress-migration/templates-and-parts.md` — Branding updates

---

## Before & After Comparison

| Category | Before (Die Papier) | After (rooi rose) | Change |
|:---------|:-------------------|:------------------|:-------|
| **Total Guideline Files** | ~50 files | ~32 files | -36% |
| **Design Token Guides** | 12 files | 13 files | +1 (editorial-components.md) |
| **rooi rose Brand Guides** | 0 files | 5 files | +5 NEW |
| **WordPress Migration** | 18 files | 12 files | -6 (obsolete content) |
| **Development Guides** | 5 files | 5 files | No change |
| **Plugin Integration** | 7 files | 7 files | No change (updated only) |
| **Archived Reports/Tasks** | 0 files | 5 files | Moved to `/tasks/archived/` |

**Total Context Reduction**: ~18 files removed/archived, 5 new focused files created.

---

## Success Criteria

### Cleanup Complete When:
- [ ] 15 obsolete files deleted or archived
- [ ] 12 files updated with rooi rose branding
- [ ] 5 new rooi rose brand guidelines created
- [ ] Guidelines.md master index updated
- [ ] All internal cross-references validated (no broken links)
- [ ] Total file count reduced to ~32 core guidelines

### Quality Checks:
- [ ] No references to "Die Papier" in active guidelines (except historical context)
- [ ] All design token files reference rooi rose palette (#e01e12, neutrals, accents)
- [ ] All typography references use Playfair Display SC + Karla
- [ ] All layout examples use 12-column magazine grid
- [ ] WCAG contrast warnings documented for #e01e12

---

## Rollback Plan

If cleanup causes issues:
1. Git revert to pre-cleanup commit
2. Restore files from `/tasks/archived/2026-03/` if needed
3. Document issues in `/reports/guidelines-cleanup-rollback.md`

---

## Next Steps After Cleanup

1. **Execute rooi rose Redesign Orchestrator** (`/prompts/rooi-rose-redesign-orchestrator.md`)
2. **Update CSS tokens** (Phase 2 of orchestrator)
3. **Redesign homepage** (Phase 3 of orchestrator)
4. **Create Figma component library** with rooi rose tokens
5. **Export to WordPress** with new theme.json palette

---

## References

- [rooi rose Redesign Orchestrator](/prompts/rooi-rose-redesign-orchestrator.md)
- [rooi rose Plan](/src/imports/pasted_text/rooi-rose-plan.md)
- [Guidelines Master Index](/guidelines/Guidelines.md)
- [Design System Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md)
