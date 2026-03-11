# Task List Consolidation Notes

**Date**: 2026-03-02  
**Action**: Merged 5 separate task list files into single master task list

---

## Files Consolidated

The following 5 task list files were reviewed and merged into `/tasks/master-task-list.md`:

1. **`/tasks/section-styles-cleanup-task-list.md`**
   - 72 total tasks (5 complete in Phase 1 orphan cleanup)
   - 67 open tasks extracted → SS-001 to SS-072

2. **`/tasks/chatgpt-theme-fixes-task-list.md`**
   - **SUPERSEDED** by section-styles-cleanup-task-list.md
   - No tasks extracted (duplicate content)

3. **`/tasks/theme-json-slug-migration-task-list.md`**
   - 20 total tasks (3 complete in Phase 2)
   - 17 open tasks extracted → TJS-001 to TJS-017

4. **`/tasks/slug-migration-cleanup-task-list.md`**
   - 74 total tasks (59 complete: Phases 1, 2, 3, 5)
   - 15 open tasks extracted → SMC-001 to SMC-015 (Phase 6 only)

5. **`/tasks/guidelines-cleanup-task-list.md`**
   - 53 total tasks (49 complete: Phases 1-5 mostly done)
   - 4 open tasks extracted → GC-006, GC-007, GC-029, GC-053

---

## Master Task List Summary

**Total open tasks**: 83

### Section 1: Section Styles Cleanup (48 tasks)
- SS-001 to SS-072 (with some already complete from Phase 1)
- Covers: Delete unused styles, migrate used styles, delete orphaned directory, delete duplicates, update docs

### Section 2: Theme.json Slug Migration (17 tasks)
- TJS-001 to TJS-017
- Covers: Section style prerequisites, theme.json refactor, block/section updates, pattern migration, typography consolidation

### Section 3: Slug Migration Dev Tools (15 tasks)
- SMC-001 to SMC-015
- Covers: Design system browser, WordPress migration browser, pattern/template browsers, style variations browser, presets browser, guidelines content, data files

### Section 4: Guidelines Cleanup (4 tasks)
- GC-006, GC-007, GC-029, GC-053
- Covers: Spacing preset verification, WooCommerce padding, pattern inventory standardization, final verification audit

---

## Execution Strategy

**Priority order**:
1. **P0 (Critical)**: SS-001 to SS-005, SS-052 to SS-068 (delete unused/duplicate styles)
2. **P1 (High)**: SS-006 to SS-051 (migrate section styles) → TJS-001 to TJS-017 (verify slug migration)
3. **P2 (Medium)**: SS-069 to SS-072 (update docs) → SMC-001 to SMC-015 (dev tools) → GC-006, GC-007, GC-029
4. **P3 (Final)**: GC-053 (verification audit)

**Dependencies**:
- Section 2 (TJS) depends on Section 1 (SS) completion
- Section 3 (SMC) depends on Section 1 + 2 completion
- Section 4 final audit (GC-053) depends on all other sections

---

## Files to Archive (After Consolidation)

Once all tasks are complete, the following files should be moved to `/tasks/archive/`:

1. `/tasks/section-styles-cleanup-task-list.md` → `/tasks/archive/`
2. `/tasks/chatgpt-theme-fixes-task-list.md` → `/tasks/archive/` (already superseded)
3. `/tasks/theme-json-slug-migration-task-list.md` → `/tasks/archive/`
4. `/tasks/slug-migration-cleanup-task-list.md` → `/tasks/archive/`
5. `/tasks/guidelines-cleanup-task-list.md` → `/tasks/archive/`

**Do NOT delete** — these are historical records showing the evolution of the cleanup process.

---

## Changes Made

1. ✅ Created `/tasks/master-task-list.md` with all 83 open tasks
2. ✅ Updated `/guidelines/Guidelines.md` Audits section to reference master task list
3. ✅ Created this consolidation notes file for historical reference

---

**End of Consolidation Notes**
