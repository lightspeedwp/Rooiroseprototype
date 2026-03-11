# Task List Archival Instructions

**Generated**: 2026-03-02  
**Purpose**: Instructions for archiving completed task lists

---

## Files Ready for Archival

The following task list files in `/tasks/` are marked as [ARCHIVED] and should be moved to `/tasks/archive/`:

### 1. social-implementation-task-list.md ✅
- **Status**: 100% complete (62/62 tasks)
- **Completion Date**: 2026-03-02
- **Verification**: All tasks marked [x], header marked [ARCHIVED]
- **Related Report**: `/reports/social-icons-implementation-complete.md` (KEEP)
- **Action**: Move to `/tasks/archive/social-implementation-task-list.md`

### 2. theme-json-extraction-task-list.md ✅
- **Status**: 100% complete (48/48 tasks)
- **Completion Date**: 2026-03-02
- **Verification**: All tasks marked [x], header marked [ARCHIVED]
- **Related Report**: `/reports/theme-json-extraction-complete.md` (KEEP)
- **Action**: Move to `/tasks/archive/theme-json-extraction-task-list.md`

---

## Manual Archive Process

Since automated file moving is restricted, archive manually via:

```bash
# From project root:
mv tasks/social-implementation-task-list.md tasks/archive/
mv tasks/theme-json-extraction-task-list.md tasks/archive/
```

---

## Verification After Archival

After moving files, verify:

```bash
# Should show 11 archived task lists:
ls -1 tasks/archive/*.md | wc -l

# Should NOT include the archived files:
ls -1 tasks/*.md | grep -E "(social-implementation|theme-json-extraction)"
```

---

## Archive Inventory (Post-Archival)

`/tasks/archive/` will contain **11 completed task lists**:

1. chatgpt-theme-fixes-task-list.md
2. guidelines-cleanup-task-list.md
3. icon-export-task-list.md
4. section-styles-cleanup-task-list.md
5. slug-migration-cleanup-task-list.md
6. theme-json-slug-migration-task-list.md
7. third-party-blocks-integration-task-list.md
8. woocommerce-ollie-purple-alignment-task-list.md
9. wp-theme-final-audit-task-list.md
10. **social-implementation-task-list.md** (NEW)
11. **theme-json-extraction-task-list.md** (NEW)

---

## Active Task Lists (Remain in `/tasks/`)

After archival, these task lists remain active:

1. **master-task-list.md** — Primary consolidated tracking (31 open tasks)
2. **task-list.md** — Running chronological log (never archive)
3. **CONSOLIDATION-NOTES.md** — Reference documentation (never archive)
4. **pattern-slug-migration-tasks.md** — Pattern work tracking (42 incomplete tasks)
5. **comprehensive-audit-task-list.md** — May need review/cleanup
6. **comprehensive-audit-task-list-UPDATED.md** — May supersede the above
7. **execution-plan-critical-fixes.md** — May be complete (needs review)
8. **immediate-priority-progress.md** — May be superseded by master-task-list.md

---

## Next Review Tasks

After archiving the 2 completed task lists, review these for potential cleanup:

### Review for Completion
1. **execution-plan-critical-fixes.md** — Check if all critical fixes complete
2. **immediate-priority-progress.md** — Check if superseded by master-task-list.md

### Review for Redundancy
3. **comprehensive-audit-task-list.md** vs **comprehensive-audit-task-list-UPDATED.md**
   - Determine which is current
   - Archive or delete the obsolete version

### Review for Accuracy
4. **pattern-slug-migration-tasks.md** (42 incomplete tasks)
   - Many tasks may be complete but unmarked
   - Run verification audit to check actual completion status
   - Update task checkboxes or archive if 100% complete

---

## Reports Status

### Deleted (Superseded)
- ✅ `/reports/spacing-slug-migration-required.md` — Deleted 2026-03-02

### Kept (Permanent Documentation)
All completion reports, verification reports, and session summaries are permanent documentation and should NEVER be deleted:

- `/reports/spacing-slug-migration-complete.md`
- `/reports/spacing-slug-migration-verification.md`
- `/reports/social-icons-implementation-complete.md`
- `/reports/theme-json-extraction-complete.md`
- `/reports/section-styles-verification-audit.md`
- All session summary reports
- All audit reports in `/reports/audits/`

---

## Completion Checklist

- [x] Created archive plan (`/reports/task-archive-plan-2026-03-02.md`)
- [x] Created verification report (`/reports/spacing-slug-migration-verification.md`)
- [x] Updated master task list (TJS-014 marked complete)
- [x] Deleted superseded audit report (`spacing-slug-migration-required.md`)
- [ ] **MANUAL ACTION REQUIRED**: Move social-implementation-task-list.md to archive
- [ ] **MANUAL ACTION REQUIRED**: Move theme-json-extraction-task-list.md to archive
- [ ] Review 4 ambiguous task lists for cleanup/archival

---

**Last Updated**: 2026-03-02
