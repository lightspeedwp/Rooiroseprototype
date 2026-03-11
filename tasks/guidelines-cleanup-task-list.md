# Guidelines Cleanup & Dev Tools Integration Task List

**Generated**: 2026-03-03
**Last updated**: 2026-03-04
**Source**: `/reports/audits/guidelines-cleanup/audit-consolidated-2026-03-03.md` (22 findings, 10 audits)
**Orchestrator**: `/prompts/guidelines-cleanup-orchestrator.md`
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: ✅ **[ARCHIVED]** — 19/19 tasks complete (100%)

---

## Phase 1: P0 Blockers (immediate fixes)

- [x] **GC-001** (P0): Fix Block Style Browser broken guideline reference — Finding 12
  - **File**: `/src/app/pages/dev/BlockStyleBrowser.tsx` (lines 768, 860, 865, 866)
  - **Problem**: References `core-blocks-styling.md` which doesn't exist
  - **Fix**: Change to `block-styles.md` (which exists at `/guidelines/wordpress-migration/block-styles.md`)

- [x] **GC-002** (P0): Fix checkout-header part guideline path — Finding 10
  - **File**: `/src/app/data/templatePartBrowserData.ts:48`
  - **Problem**: `guidelinePath: 'header.md'` should be `'checkout-header.md'`
  - **Fix**: Change value to `'checkout-header.md'`

---

## Phase 2: Guideline Templates (P1)

- [x] **GC-003** (P1): Create `/guidelines/_templates/template-guideline-template.md`
  - Sections: Purpose, Structure, Template Parts, Patterns, WP Hierarchy, React Mapping, Ad Slots, Related Files

- [x] **GC-004** (P1): Create `/guidelines/_templates/pattern-guideline-template.md`
  - Sections: Description, React Equivalent, Block Composition, Design Details, Ad Slots, Related Files, Related Blocks

- [x] **GC-005** (P1): Create `/guidelines/_templates/part-guideline-template.md`
  - Sections: Purpose, Visual Structure, Area Assignment, Templates, Patterns, Related Files

- [x] **GC-006** (P1): Create `/guidelines/_templates/design-token-guideline-template.md`
  - Sections: Overview, Token Table, WordPress Usage, React Usage, Usage Guidelines, Related Files

- [x] **GC-007** (P1): Create `/guidelines/_templates/plugin-guideline-template.md`
  - Sections: Plugin Overview, Block Names, Usage Pattern, Configuration, Section Style Integration, Assets, Related Files

- [x] **GC-008** (P1): Create `/guidelines/_templates/block-guideline-template.md`
  - Sections: Block Name, React Equivalent, Attributes, Styles, Section Style Behaviour, Usage, Related Files

---

## Phase 3: Dev Tools Data Fixes (P1-P2)

- [x] **GC-009** (P2): Add block-specific guideline resolution to Block Style Browser — Finding 13
  - **File**: `/src/app/pages/dev/BlockStyleBrowser.tsx`
  - **Logic**: `resolveBlockGuideline()` checks for `/guidelines/components/blocks/{namespace}/{block-name}.md` → falls back to `block-styles.md`
  - ✅ Implemented with green "Block-specific guideline" indicator badge when specific file found

- [x] **GC-010** (P2): Add 3 new design token guideline entries to PresetsBrowser GUIDELINE_DOCS — Finding 8
  - **File**: `/src/app/pages/dev/PresetsBrowser.tsx` (GUIDELINE_DOCS array)
  - ✅ Created `borders.md`, `shadows.md`, `aspect-ratios.md` in `/guidelines/design-tokens/`
  - ✅ Added all 3 entries to GUIDELINE_DOCS with categories and 'New' badge

- [x] **GC-011** (P3): Add `presets-and-tokens.md` to PresetsBrowser GUIDELINE_DOCS — Finding 9
  - **File**: `/src/app/pages/dev/PresetsBrowser.tsx` (GUIDELINE_DOCS array)
  - **Entry**: Title "WordPress Presets Reference", categories: ['All Presets'], badge: 'WP'

---

## Phase 4: Stale/Draft Block Specs Cleanup (P2)

- [x] **GC-012** (P2): Review `wordpress-migration/blocks/event-list.md` — Finding 1
  - ✅ Status: Deprecated — replaced by AQL

- [x] **GC-013** (P2): Review `wordpress-migration/blocks/reading-time.md` — Finding 1
  - ✅ Status: Active — custom block still required

- [x] **GC-014** (P2): Review `wordpress-migration/blocks/sponsored-in-feed.md` — Finding 1
  - ✅ Status: Deprecated — replaced by Advanced Ads

- [x] **GC-015** (P2): Review `wordpress-migration/blocks/ui-components.md` — Finding 1
  - ✅ Status: Planned — Interactivity API candidates

- [x] **GC-016** (P2): Add README.md to `wordpress-migration/blocks/` — Finding 6
  - Explain purpose: custom block migration specs, distinct from `/components/blocks/`

---

## Phase 5: Index & Documentation Updates (P2-P3)

- [x] **GC-017** (P2): Add `/guidelines/wordpress-migration/content/` to Guidelines.md index — Finding 3
  - 6 files: cpt-definitions.md, data-migration.md, import-execution.md, media-import.md, menu-strategy.md, taxonomy-mapping.md
  - Add under new "Content Migration" subsection

- [x] **GC-018** (P2): Verify `woocommerce-e-editions-setup.md` canonical location — Finding 15
  - ✅ Verified: Neither file exists at either referenced path. The canonical WooCommerce setup info lives inside `woocommerce.md` itself. No duplication. Stale reference in Guidelines.md.

- [x] **GC-019** (P3): Add cross-reference notes between `presets-and-tokens.md` and `DESIGN-SYSTEM-GUIDE.md` — Finding 2
  - ✅ Cross-reference notes added to both files

---

## Summary

| Phase | Tasks | Priority | Status |
|:------|:------|:---------|:-------|
| 1. P0 Blockers | 2 | P0 | 2/2 |
| 2. Guideline Templates | 6 | P1 | 6/6 |
| 3. Dev Tools Data Fixes | 3 | P2-P3 | 3/3 |
| 4. Draft Block Specs | 5 | P2 | 5/5 |
| 5. Index & Docs | 3 | P2-P3 | 3/3 |
| **Total** | **19** | | **19/19** |

**Dependencies**:
- GC-009 depends on GC-001
- ~~GC-010 depends on GDL-007/008/009 (design token guideline files from orchestrator cross-ref task list)~~ ✅ Resolved