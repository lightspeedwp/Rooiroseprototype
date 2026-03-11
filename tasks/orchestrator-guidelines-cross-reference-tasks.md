# Orchestrator & Guidelines Cross-Reference Task List

**Generated**: 2026-03-03
**Last updated**: 2026-03-04
**Source**: `/reports/audit-orchestrator-guidelines-cross-reference-2026-03-03.md` (28 findings)
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: ✅ **[ARCHIVED]** — 30/30 tasks complete (100%)

---

## Phase 1: Orchestrator Cross-References (P0)

- [x] **ORC-001** (P0): Add "Related Orchestrators & Guideline Dependencies" section to `comprehensive-theme-audit-orchestrator.md` — Finding 1
- [x] **ORC-002** (P0): ✅ Executed full 10-audit guidelines-cleanup orchestrator — Finding 2
  - Report: `/reports/audits/guidelines-cleanup/audit-consolidated-2026-03-03.md`
  - Task List: `/tasks/guidelines-cleanup-task-list.md` (19/19 tasks complete)

---

## Phase 2: Missing Guideline Files — Patterns (P1)

- [x] **GDL-001** (P1): Create `/guidelines/components/patterns/section/section-category-hero.md` — Finding 10
  - Content: Block composition (core/query + core/cover), AQL config, gradient overlay settings, relationship to React `HeroSlider` + `HeroSlideCard`
  - Cross-references: 5 category template guidelines, `archives.md`

- [x] **GDL-002** (P1): Create `/guidelines/components/patterns/woocommerce/woo-archive-e-uitgawes.md` — Finding 12
  - Content: Product query config, sidebar CTA, FAQ section, AQL integration
  - Cross-references: `taxonomy-product-cat-e-uitgawes.md` template guideline

- [x] **GDL-003** (P1): Create `/guidelines/components/patterns/woocommerce/woo-single-e-uitgawe.md` — Finding 13
  - Content: WooCommerce product blocks used, access gate integration, membership considerations
  - Cross-references: `single-product-e-uitgawe.md` template guideline

- [x] **GDL-004** (P2): Create `/guidelines/components/patterns/woocommerce/woo-coming-soon.md` — Finding 11
  - Content: WooCommerce Coming Soon mode constraints, no header/footer rule
  - Cross-references: `page-coming-soon.md` template guideline

- [x] **GDL-005** (P2): Document `filter-pill.json` block style in `/guidelines/wordpress-migration/block-styles.md` — Finding 14
  - ✅ Added full documentation section with JSON schema, usage, visual treatment, and file location
  - ✅ Added to directory listing and block style count table

---

## Phase 3: Missing Guideline Files — Development & Design Tokens (P1-P2)

- [x] **GDL-006** (P1): Create `/guidelines/development/performance.md` — Finding 6
  - Content: Lazy loading rules, code splitting patterns, image optimization standards, bundle size targets, memoization guidelines
  - Cross-references: `performance-optimization-orchestrator.md`

- [x] **GDL-007** (P2): Create `/guidelines/design-tokens/borders.md` — Finding 7
  - ✅ Created with border width presets (4), border radius presets (7), dark mode border colours, WP/Tailwind mapping
  - ✅ Added to PresetsBrowser GUIDELINE_DOCS and Guidelines.md index

- [x] **GDL-008** (P2): Create `/guidelines/design-tokens/shadows.md` — Finding 8
  - ✅ Created with shadow presets (6), dark mode overrides, hover lift patterns, WP/Tailwind mapping
  - ✅ Added to PresetsBrowser GUIDELINE_DOCS and Guidelines.md index

- [x] **GDL-009** (P2): Create `/guidelines/design-tokens/aspect-ratios.md` — Finding 9
  - ✅ Created with 6 CSS utility classes, React-only `aspect-landscape` token, WP/Tailwind mapping
  - ✅ Added to PresetsBrowser GUIDELINE_DOCS and Guidelines.md index

---

## Phase 4: Sub-Orchestrator Updates (P1-P2)

- [x] **ORC-003** (P1): Add guideline references + output deliverables to `performance-optimization-orchestrator.md` — Finding 20
  - Add: Reads `/guidelines/development/dev-tools-protection.md`
  - Add: Creates `/guidelines/development/performance.md`
  - Add: Parent orchestrator reference

- [x] **ORC-004** (P1): Add missing pattern guideline deliverables to `new-templates-patterns-orchestrator.md` — Finding 21
  - Add to Audit 4 deliverables: `section-category-hero.md`, `woo-coming-soon.md`, `woo-archive-e-uitgawes.md`, `woo-single-e-uitgawe.md`

- [x] **ORC-005** (P2): Add category template guideline references to `advanced-ads-audit-orchestrator.md` — Finding 18
  - Add to "Reference Files": 5 category template guidelines + `archives.md`

- [x] **ORC-006** (P2): Add parent orchestrator reference to `guidelines-cleanup-orchestrator.md` — Finding 19

---

## Phase 5: Date Freshness & Index Updates (P2-P3)

- [x] **DATE-001** (P2): Review and update date on `/guidelines/development/dev-tools-protection.md` — Finding 15
  - ✅ Date updated to 2026-03-03 (content verified current)

- [x] **DATE-002** (P3): Review and update date on `/guidelines/components/patterns/homepage.md` — Finding 16
  - ✅ Date updated to 2026-03-03 (content verified current)

- [x] **DATE-003** (P3): Batch review WooCommerce pattern guidelines (8 files) for stale content — Finding 17
  - ✅ 7 original files verified (dated 2026-03-01, content accurate)
  - ✅ README.md updated: date → 2026-03-03, total 11→14, added "E-Editions & Coming Soon" section with 3 new patterns

---

## Phase 6: Guidelines.md & Structural Improvements (P2-P3)

- [x] **IDX-001** (P2): Add hero slider orchestrator to Guidelines.md audit index — Finding 23
  - ✅ Added to new "Audits & Orchestrators" table in Guidelines.md

- [x] **IDX-002** (P2): Update performance orchestrator entry status in Guidelines.md — Finding 22
  - ✅ Added to orchestrator table with status "Created, not executed"

- [x] **IDX-003** (P2): Consider restructuring "Audits & Quality" into orchestrator summary table — Finding 24
  - ✅ Created new "🔍 Audits & Orchestrators" section with summary table (6 orchestrators)

- [x] **IDX-004** (P2): Audit `presets-and-tokens.md` for overlap with Design System Guide — Finding 26
  - ✅ No action needed — cross-reference note already exists (added in GC-019). The two docs serve complementary purposes: presets-and-tokens covers WP mechanics, DESIGN-SYSTEM-GUIDE covers token values.

- [x] **IDX-005** (P2): Audit `/guidelines/wordpress-migration/blocks/` for overlap with `/guidelines/components/blocks/` — Finding 27
  - ✅ Resolved by guidelines-cleanup Audit 3 (Finding 4: no major overlap). `wordpress-migration/blocks/` contains migration specs; `components/blocks/` contains component-level docs. README.md added in GC-016.

- [x] **IDX-006** (P3): Review `/guidelines/wordpress-migration/content/` directory — Finding 28
  - ✅ Already added to Guidelines.md index in GC-017 (Content Migration subsection with 6 file entries)

---

## Phase 7: Guideline Templates (P1) — Dependent on ORC-002

- [x] **TPL-001** (P1): Create `/guidelines/_templates/block-guideline-template.md` — Finding 25
  - ✅ Completed via GC-008

- [x] **TPL-002** (P1): Create `/guidelines/_templates/pattern-guideline-template.md` — Finding 25
  - ✅ Completed via GC-004

- [x] **TPL-003** (P1): Create `/guidelines/_templates/template-guideline-template.md` — Finding 25
  - ✅ Completed via GC-003

- [x] **TPL-004** (P1): Create `/guidelines/_templates/part-guideline-template.md` — Finding 25
  - ✅ Completed via GC-005

- [x] **TPL-005** (P1): Create `/guidelines/_templates/design-token-guideline-template.md` — Finding 25
  - ✅ Completed via GC-006

- [x] **TPL-006** (P1): Create `/guidelines/_templates/plugin-guideline-template.md` — Finding 25
  - ✅ Completed via GC-007

---

## Summary

| Phase | Tasks | Priority | Status |
|:------|:------|:---------|:-------|
| 1. Orchestrator Cross-References | 2 | P0 | 2/2 ✅ |
| 2. Missing Pattern Guidelines | 5 | P1-P2 | 5/5 ✅ |
| 3. Missing Dev & Token Guidelines | 4 | P1-P2 | 4/4 ✅ |
| 4. Sub-Orchestrator Updates | 4 | P1-P2 | 4/4 ✅ |
| 5. Date Freshness | 3 | P2-P3 | 3/3 ✅ |
| 6. Guidelines.md & Structural | 6 | P2-P3 | 6/6 ✅ |
| 7. Guideline Templates | 6 | P1 | 6/6 ✅ |
| **Total** | **30** | | **30/30 ✅** |

**All tasks complete.** Both task lists are now at 100%:
- `/tasks/guidelines-cleanup-task-list.md` — 19/19 ✅
- `/tasks/orchestrator-guidelines-cross-reference-tasks.md` — 30/30 ✅