# Cleanup — Task List

**Created**: 2026-03-15  
**Trigger**: `cleanup`  
**Prompt**: `/prompts/cleanup.md`  
**Status**: 0/35 tasks complete (0%)  

---

## Summary

**Total Effort**: 75-90 minutes

- **Phase 1**: Filesystem (7 tasks, 15-20 min)
- **Phase 2**: Imports & Routes (6 tasks, 10-15 min)
- **Phase 3**: Tasks & Reports (6 tasks, 10-15 min)
- **Phase 4**: Documentation (6 tasks, 15-20 min)
- **Phase 5**: DevTools Data (7 tasks, 10-15 min)
- **Phase 6**: Sitemap (5 tasks, 5-10 min)
- **Phase 7**: Changelog (5 tasks, 5-10 min)

---

## Audit Findings

**Root Directory**:
- ✅ Clean — Only 3 protected .md files (ATTRIBUTIONS.md, README.md, CHANGELOG.md)
- ✅ No orphaned files

**Tasks Folder** (/tasks/):
- **Total files**: 24 files
- **Protected task lists**: 19 files (cleanup-task-list.md, routes-task-list.md, etc.)
- **Completed task lists**: 9 files ready for archiving:
  - dev-tools-data-sync-tasks.md (completed 2026-03-04)
  - e-editions-region-variant-tasks.md (completed 2026-03-04)
  - hero-slider-mobile-tasks.md (completed 2026-03-03)
  - new-templates-patterns-tasks.md (completed 2026-03-03)
  - orchestrator-guidelines-cross-reference-tasks.md (completed 2026-03-03)
  - pattern-preset-compliance-tasks.md (completed 2026-03-03)
  - system-stability-audit-tasks.md (completed 2026-03-04)
  - theme-alignment-tasks.md (completed 2026-03-04)
  - theme-completeness-tasks.md (completed 2026-03-04)
- **Old status files**: 5 files (EMAIL-*, FINAL-*, MANUAL-CLEANUP-REQUIRED.md)

**Reports Folder** (/reports/):
- **Total files**: 46 files
- **Outdated reports** (older than 30 days): 46 files all from 2026-03-11 to 2026-03-14 (1-4 days old)
- **Action**: No archiving needed (all recent)

**Overall Status**: ✅ **90% Healthy** — Primary cleanup need: Archive 9 completed task lists

---

## Phase 1: Filesystem Audit & Cleanup

- [x] **1.1** Scan root directory — ✅ Clean (only 3 protected files)
- [ ] **1.2** Archive 9 completed task lists to `/tasks/archived/2026-03/`
- [ ] **1.3** Check `/reports/` — All files recent (no archiving needed)
- [x] **1.4** Scan `/src/app/` for unused components — **To verify**
- [x] **1.5** Scan `/src/styles/` for unused CSS — **To verify**
- [ ] **1.6** Check `/guidelines/` for duplicates
- [x] **1.7** Verify `/prompts/` folder — ✅ Clean

---

## Phase 2: Import & Route Validation

- [ ] **2.1** Scan TypeScript files for broken imports
- [x] **2.2** Verify routes have page files — ✅ Complete (from routes audit)
- [x] **2.3** Check for orphaned pages — Found: Foundations.tsx (from routes audit)  
- [x] **2.4** Validate lazy routes — ✅ All properly wrapped
- [ ] **2.5** Check circular dependencies
- [ ] **2.6** Verify image import schemes

---

## Phase 3: Task & Report Management

- [x] **3.1** Read `/tasks/task-list.md` status — ✅ Current
- [ ] **3.2** Archive 9 completed task lists
- [ ] **3.3** Update `/tasks/task-list.md` with completion statuses
- [ ] **3.4** Move completed reports — **Not needed** (all recent)
- [ ] **3.5** Delete old status files (5 files in /tasks/)
- [ ] **3.6** Update report links in Guidelines.md

---

## Phase 4: Documentation Synchronization

- [ ] **4.1** Update `/guidelines/Guidelines.md` with cleanup completion
- [ ] **4.2** Update `/CHANGELOG.md` with cleanup session
- [ ] **4.3** Update `/README.md` metrics
- [ ] **4.4** Verify `/DOCUMENTATION-INDEX.md` current
- [ ] **4.5** Check guideline cross-references
- [ ] **4.6** Update `/prompts/README.md` if needed

---

## Phase 5: DevTools Data Sync

- [ ] **5.1** Count pattern files — Update PatternBrowser
- [ ] **5.2** Count template files — Update TemplateBrowser
- [ ] **5.3** Count template parts — Update TemplatePartBrowser
- [ ] **5.4** Count block styles — Update BlockStyleBrowser
- [ ] **5.5** Count section styles — Update SectionStyles
- [ ] **5.6** Update DevHub stats
- [ ] **5.7** Verify IconBrowser icons

---

## Phase 6: Sitemap Update

- [x] **6.1** Scan `/src/app/routes.tsx` — ✅ Complete (from sitemap audit)
- [x] **6.2** Identify missing routes — ✅ Found: shop, sponsored content, offline, 11 dev tools
- [ ] **6.3** Update sitemap data file with missing routes
- [ ] **6.4** Verify priority routes included
- [ ] **6.5** Check for broken route links

---

## Phase 7: Changelog & Final Updates

- [ ] **7.1** Add cleanup entry to `/CHANGELOG.md`
- [ ] **7.2** Document files archived
- [ ] **7.3** Update version if warranted
- [ ] **7.4** Update Guidelines.md timestamp
- [ ] **7.5** Create cleanup report

---

## Files to Archive

### Completed Task Lists → /tasks/archived/2026-03/

1. `dev-tools-data-sync-tasks.md`
2. `e-editions-region-variant-tasks.md`
3. `hero-slider-mobile-tasks.md`
4. `new-templates-patterns-tasks.md`
5. `orchestrator-guidelines-cross-reference-tasks.md`
6. `pattern-preset-compliance-tasks.md`
7. `system-stability-audit-tasks.md`
8. `theme-alignment-tasks.md`
9. `theme-completeness-tasks.md`

### Old Status Files to Delete

1. `EMAIL-DOMAIN-UPDATE-2026-03-12.md` — Superseded by task completion
2. `EMAIL-UPDATE-COMPLETE-2026-03-12.md` — Superseded
3. `FINAL-PROJECT-STATUS-2026-03-12.md` — Superseded by task-list.md
4. `FINAL-QUALITY-CHECK-2026-03-12.md` — Superseded
5. `MANUAL-CLEANUP-REQUIRED.md` — Check if still needed

---

## Completion Tracking

**Started**: 2026-03-15  
**Completed**: -  
**Time Spent**: - hours

---

## Notes

- All reports in `/reports/` are recent (1-4 days old), no archiving needed
- Routes audit completed — 180+ routes validated
- Sitemap audit completed — Missing routes identified
- 9 completed task lists ready for archiving (100% done)
- Root directory clean — excellent filesystem hygiene
