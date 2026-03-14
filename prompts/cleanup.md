# Cleanup Prompt — Project Maintenance Orchestrator

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Purpose**: One-session comprehensive project cleanup and synchronization  
**Trigger Word**: `cleanup`

---

## 🎯 **MISSION**

Execute a **single-session comprehensive audit and cleanup** of the rooi rose project. This prompt should be run regularly (every 2-3 weeks or after major feature completions) to maintain codebase health, documentation accuracy, and filesystem organization.

**⚠️ IMPORTANT**: This is a **ONE-SESSION** task. Do NOT split into multiple sessions. Complete all audits, updates, and cleanup in a single execution.

---

## 📋 **EXECUTION CHECKLIST**

Execute these tasks **in sequence**. Check off each item as you complete it:

### Phase 1: Filesystem Audit & Cleanup (15-20 min)

- [ ] **1.1** Scan root directory (`/`) for orphaned files (no `.env`, no build artifacts, no OS files)
- [ ] **1.2** Check `/tasks/` folder for completed task lists (move to `/tasks/archived/YYYY-MM/`)
- [ ] **1.3** Check `/reports/` folder for outdated reports (archive reports older than 30 days)
- [ ] **1.4** Scan `/src/app/` for unused components (check imports across codebase)
- [ ] **1.5** Scan `/src/styles/` for unused CSS files (check import chains)
- [ ] **1.6** Check `/guidelines/` for duplicate or outdated files
- [ ] **1.7** Verify `/prompts/` folder contains only active orchestrator prompts

### Phase 2: Import & Route Validation (10-15 min)

- [ ] **2.1** Scan all TypeScript files for broken imports (CSS, components, data, utils)
- [ ] **2.2** Verify all routes in `/src/app/routes.tsx` have corresponding page files
- [ ] **2.3** Check for missing routes (scan `/src/app/pages/` for orphaned page files)
- [ ] **2.4** Validate lazy-loaded routes are properly wrapped in `lazy()`
- [ ] **2.5** Check for circular dependencies (especially in data barrel exports)
- [ ] **2.6** Verify all images use proper import schemes (`figma:asset` vs relative paths)

### Phase 3: Task & Report Management (10-15 min)

- [ ] **3.1** Read `/tasks/task-list.md` master status
- [ ] **3.2** Identify completed task lists (100% done) and archive them
- [ ] **3.3** Update `/tasks/task-list.md` with current task statuses
- [ ] **3.4** Move completed reports to `/reports/archived/YYYY-MM/`
- [ ] **3.5** Delete duplicate or superseded reports
- [ ] **3.6** Update report links in Guidelines.md to point to archived locations

### Phase 4: Documentation Synchronization (15-20 min)

- [ ] **4.1** Update `/Guidelines.md` with latest completion statuses
- [ ] **4.2** Update `/CHANGELOG.md` with recent changes (if not already done)
- [ ] **4.3** Update `/README.md` metrics (page count, pattern count, completion %)
- [ ] **4.4** Verify `/DOCUMENTATION-INDEX.md` includes all guidelines
- [ ] **4.5** Check guideline cross-references (ensure links aren't broken)
- [ ] **4.6** Update orchestrator status in `/prompts/` README (if exists)

### Phase 5: DevTools Data Sync (10-15 min)

- [ ] **5.1** Count actual pattern files in `/die-papier-theme/patterns/` — update PatternBrowser data
- [ ] **5.2** Count actual template files in `/die-papier-theme/templates/` — update TemplateBrowser data
- [ ] **5.3** Count actual template parts in `/die-papier-theme/parts/` — update TemplatePartBrowser data
- [ ] **5.4** Count actual block styles in `/styles/blocks/` — update BlockStyleBrowser data
- [ ] **5.5** Count section styles in `/styles/sections/` — update SectionStyles page data
- [ ] **5.6** Update DevHub stats cards with accurate counts
- [ ] **5.7** Verify IconBrowser has all lucide-react icons used in codebase

### Phase 6: Sitemap Update (5-10 min)

- [ ] **6.1** Scan `/src/app/routes.tsx` for all route paths
- [ ] **6.2** Update `/src/app/pages/Sitemap.tsx` with any missing routes
- [ ] **6.3** Organize routes by category (Dev Tools, Shop, Articles, Legal, etc.)
- [ ] **6.4** Verify all priority routes (P0/P1) are included
- [ ] **6.5** Check for broken route links in sitemap display

### Phase 7: Changelog & Final Updates (5-10 min)

- [ ] **7.1** Add cleanup session entry to `/CHANGELOG.md` (Unreleased section)
- [ ] **7.2** Document any files deleted, moved, or renamed
- [ ] **7.3** Update version number if warranted (use semantic versioning)
- [ ] **7.4** Update Guidelines.md "Last Updated" timestamp
- [ ] **7.5** Create cleanup report in `/reports/cleanup-YYYY-MM-DD.md`

---

## 🛡️ **PROTECTED FILES & FOLDERS**

**NEVER DELETE OR MODIFY** these files without explicit user approval:

### Critical System Files
- `/src/main.tsx` — React entrypoint
- `/src/app/App.tsx` — Root component
- `/src/app/routes.tsx` — Route definitions
- `/index.html` — HTML entrypoint
- `/vite.config.ts` — Build configuration
- `/package.json` — Dependencies
- `/tsconfig.json` — TypeScript config
- `/tailwind.config.ts` — Tailwind config (if exists)
- `/.gitignore` — Git exclusions

### Protected Component Files
See `/guidelines/development/dev-tools-protection.md` for full list:
- All files in `/src/app/pages/dev/` (31+ dev tool pages)
- All files in `/src/app/components/dev/` (8+ shared dev components)
- All files in `/src/app/data/` (21+ data files for dev browsers)

### Protected Documentation
- `/Guidelines.md` — Master guidelines (update only, never delete)
- `/README.md` — Project readme (update only)
- `/CHANGELOG.md` — Version history (append only)
- `/DOCUMENTATION-INDEX.md` — Master doc index
- `/guidelines/MASTER-INDEX.md` — Role-based navigation

### Protected Theme Files
- All files in `/die-papier-theme/` (WordPress export)
- All files in `/styles/` (CSS architecture)
- `/src/imports/` — Figma imported assets (SVGs, images)

---

## 📝 **CLEANUP REPORT TEMPLATE**

After completing all phases, create a report at `/reports/cleanup-YYYY-MM-DD.md`:

```markdown
# Project Cleanup Report — YYYY-MM-DD

**Executed**: YYYY-MM-DD  
**Duration**: ~XX minutes  
**Status**: ✅ Complete  

---

## Summary

- **Files Deleted**: X files (X KB freed)
- **Files Moved**: X files archived
- **Broken Imports Fixed**: X imports
- **Missing Routes Added**: X routes
- **Documentation Updates**: X files updated
- **DevTools Data Synced**: X browsers updated

---

## Phase 1: Filesystem Cleanup

- [x] Root directory clean (0 orphaned files)
- [x] `/tasks/` archived — X files moved to `/tasks/archived/YYYY-MM/`
- [x] `/reports/` archived — X files moved to `/reports/archived/YYYY-MM/`
- [x] `/src/app/` scanned — 0 unused components
- [x] `/src/styles/` scanned — 0 unused CSS files
- [x] `/guidelines/` scanned — 0 duplicates
- [x] `/prompts/` scanned — X active orchestrators

**Files Deleted**:
- `/path/to/file1.md` — Reason
- `/path/to/file2.tsx` — Reason

**Files Moved**:
- `/tasks/old-task-list.md` → `/tasks/archived/2026-03/old-task-list.md`
- `/reports/old-report.md` → `/reports/archived/2026-03/old-report.md`

---

## Phase 2: Import & Route Validation

- [x] TypeScript imports scanned — X broken imports fixed
- [x] Routes validated — X missing routes added
- [x] Lazy routes verified — 100% compliant
- [x] Circular dependencies checked — 0 issues
- [x] Image imports validated — 100% correct scheme usage

**Broken Imports Fixed**:
- `/src/app/ComponentX.tsx` — Fixed CSS import path
- `/src/app/ComponentY.tsx` — Updated data import

**Missing Routes Added**:
- `/new-route` → NewPage.tsx

---

## Phase 3: Task & Report Management

- [x] `/tasks/task-list.md` updated — X tasks marked complete
- [x] Completed task lists archived — X files
- [x] Outdated reports archived — X files
- [x] Report links updated in Guidelines.md

**Task Lists Archived**:
- `/tasks/completed-task-1.md` — 100% complete
- `/tasks/completed-task-2.md` — 100% complete

---

## Phase 4: Documentation Synchronization

- [x] `/Guidelines.md` updated — Phase X completion added
- [x] `/CHANGELOG.md` updated — Version X.X.X entry added
- [x] `/README.md` metrics updated
- [x] `/DOCUMENTATION-INDEX.md` verified — 100% accurate
- [x] Guideline cross-references checked — 0 broken links

**Documentation Updates**:
- Guidelines.md: Added Phase X completion (line XXX)
- CHANGELOG.md: Added cleanup session entry (Unreleased)
- README.md: Updated page count (XX → YY pages)

---

## Phase 5: DevTools Data Sync

- [x] PatternBrowser — XXX patterns (accurate)
- [x] TemplateBrowser — XX templates (accurate)
- [x] TemplatePartBrowser — XX parts (accurate)
- [x] BlockStyleBrowser — XX styles (accurate)
- [x] SectionStyles — X styles (accurate)
- [x] DevHub stats updated
- [x] IconBrowser synced — XX icons

**Data Updates**:
- PatternBrowser comment: 177 patterns (was XXX)
- TemplateBrowser comment: 49 templates (was XXX)

---

## Phase 6: Sitemap Update

- [x] Routes scanned — XX total routes
- [x] Sitemap updated — X routes added
- [x] Categories organized
- [x] Priority routes verified
- [x] Broken links checked — 0 issues

**Sitemap Additions**:
- `/new-route-1` — Category: Shop
- `/new-route-2` — Category: Legal

---

## Phase 7: Changelog & Final Updates

- [x] Cleanup entry added to CHANGELOG.md
- [x] Deletions/moves documented
- [x] Version updated: vX.X.X → vX.X.X
- [x] Guidelines.md timestamp updated
- [x] Cleanup report created

---

## Metrics

**Before Cleanup**:
- Total files: XXXX
- /tasks/ files: XX
- /reports/ files: XX
- Broken imports: X
- Missing routes: X

**After Cleanup**:
- Total files: XXXX (-XX)
- /tasks/ files: XX (XX archived)
- /reports/ files: XX (XX archived)
- Broken imports: 0
- Missing routes: 0

**Health Score**: ✅ 100% (all checks passed)

---

## Next Steps

- [ ] Run `continue` prompt to resume active task list
- [ ] Consider running cleanup again in 2-3 weeks
- [ ] Review archived files for permanent deletion (after 90 days)

---

**Completed by**: Figma Make AI  
**Review Status**: Ready for user review  
**Next Cleanup**: YYYY-MM-DD (estimated)
```

---

## 🔧 **TECHNICAL GUIDANCE**

### How to Archive Files

```bash
# Create archive folders if they don't exist
/tasks/archived/YYYY-MM/
/reports/archived/YYYY-MM/

# Move completed task lists
/tasks/completed-task.md → /tasks/archived/2026-03/completed-task.md

# Move outdated reports
/reports/old-report.md → /reports/archived/2026-03/old-report.md
```

### How to Check for Broken Imports

1. Use `file_search` tool to search for import statements
2. Check each imported path exists in the filesystem
3. Verify CSS imports use correct relative paths
4. Verify `figma:asset` imports (never use `./` prefix)
5. Check data barrel exports (`/src/app/data/index.ts`)

### How to Find Missing Routes

1. Scan all files in `/src/app/pages/`
2. For each page file, check if it's referenced in `/src/app/routes.tsx`
3. Exclude dev tool pages (already in dev routes)
4. Exclude component files (non-page components)
5. Add missing routes to appropriate parent route

### How to Count WordPress Files

```bash
# Patterns
Count files in: /die-papier-theme/patterns/*.php

# Templates
Count files in: /die-papier-theme/templates/*.html

# Template Parts
Count files in: /die-papier-theme/parts/*.html

# Block Styles
Count files in: /styles/blocks/**/*.json (recursive)

# Section Styles
Count files in: /styles/sections/*.json
```

---

## 🎯 **SUCCESS CRITERIA**

Cleanup is **100% complete** when:

- ✅ All 7 phases executed and checked off
- ✅ 0 orphaned files in root directory
- ✅ 0 broken imports across entire codebase
- ✅ 0 missing routes (all pages routable)
- ✅ All completed task lists archived
- ✅ All outdated reports archived
- ✅ `/Guidelines.md` reflects current status
- ✅ `/CHANGELOG.md` includes cleanup session
- ✅ DevTools data counts 100% accurate
- ✅ Sitemap includes all active routes
- ✅ Cleanup report created at `/reports/cleanup-YYYY-MM-DD.md`

---

## ⚠️ **FIGMA MAKE ENVIRONMENT NOTES**

**You are working in the Figma Make environment**. Remember:

- ❌ **DO NOT** tell the user to "refresh your browser" — changes are live instantly
- ❌ **DO NOT** tell the user to "clear your cache" — not applicable in Figma Make
- ❌ **DO NOT** tell the user to "run npm install" — packages auto-install
- ❌ **DO NOT** tell the user to "restart the dev server" — no dev server exists
- ✅ **DO** use tool calls to read, write, and edit files directly
- ✅ **DO** verify changes by reading files after modification
- ✅ **DO** use `file_search` to find files and validate imports

---

## 📚 **RELATED GUIDELINES**

Before running cleanup, familiarize yourself with:

- `/guidelines/development/file-organization.md` — File placement rules
- `/guidelines/development/dev-tools-protection.md` — Protected files list
- `/guidelines/development/report-creation-guidelines.md` — Report formatting standards
- `/guidelines/development/task-management-guidelines.md` — Task list lifecycle

---

## 🔄 **WHEN TO RUN CLEANUP**

Run this prompt:

1. **After major feature completions** (e.g., Phase 13 Editorial Redesign complete)
2. **Every 2-3 weeks** as regular maintenance
3. **Before major releases** to ensure documentation accuracy
4. **When filesystem feels cluttered** (too many old reports/tasks)
5. **After multi-session projects** to consolidate scattered reports

---

## 💬 **HOW TO TRIGGER THIS PROMPT**

Simply type:

```
cleanup
```

The AI should recognize this trigger word and execute this orchestrator prompt automatically (if configured in Guidelines.md).

---

**Version History**:
- **v1.0.0** (2026-03-13) — Initial creation with 7-phase cleanup workflow

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-13
