# Report Creation Guidelines

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Purpose**: Standardize report formatting, naming, and lifecycle management  
**Applies to**: All files in `/reports/` folder

---

## 📋 **REPORT TYPES**

### 1. Audit Reports
**Filename Pattern**: `[topic]-audit-YYYY-MM-DD.md`  
**Example**: `css-audit-2026-03-06.md`  
**Purpose**: Document findings from comprehensive code/system audits  
**Lifespan**: 30 days (archive after 30 days, delete after 90 days)

### 2. Completion Reports
**Filename Pattern**: `[phase-name]-complete-YYYY-MM-DD.md`  
**Example**: `phase-13-complete-final-2026-03-12.md`  
**Purpose**: Document major phase or feature completions  
**Lifespan**: Permanent (archive after 60 days for historical reference)

### 3. Maintenance Reports
**Filename Pattern**: `maintenance-report-YYYY-MM-DD.md`  
**Example**: `maintenance-report-2026-03-13.md`  
**Purpose**: Document cleanup sessions and system maintenance  
**Lifespan**: 30 days (archive after 30 days, delete after 90 days)

### 4. Cleanup Reports
**Filename Pattern**: `cleanup-YYYY-MM-DD.md`  
**Example**: `cleanup-2026-03-13.md`  
**Purpose**: Document cleanup prompt executions (from `/prompts/cleanup.md`)  
**Lifespan**: 30 days (archive after 30 days, delete after 90 days)

### 5. Migration Reports
**Filename Pattern**: `[migration-topic]-migration-YYYY-MM-DD.md`  
**Example**: `spacing-slug-migration-complete.md`  
**Purpose**: Document data/code migrations and refactoring projects  
**Lifespan**: Permanent (archive after 60 days for rollback reference)

### 6. Verification Reports
**Filename Pattern**: `[topic]-verification-YYYY-MM-DD.md`  
**Example**: `theme-structure-verification-final.md`  
**Purpose**: Document verification and QA checks  
**Lifespan**: 30 days (archive after 30 days, delete after 90 days)

---

## 📂 **REPORT NAMING RULES**

### Filename Format
```
[topic]-[type]-[YYYY-MM-DD].md
```

**Components**:
- `[topic]` — Lowercase, hyphen-separated (e.g., `css`, `block-pattern`, `theme-structure`)
- `[type]` — One of: `audit`, `complete`, `migration`, `verification`, `maintenance`, `cleanup`
- `[YYYY-MM-DD]` — ISO date format (e.g., `2026-03-13`)
- Extension: Always `.md` (Markdown)

**Examples**:
- ✅ `css-audit-2026-03-06.md`
- ✅ `phase-13-complete-final-2026-03-12.md`
- ✅ `spacing-slug-migration-complete.md`
- ❌ `CSS Audit March 6.md` (spaces, no date format)
- ❌ `audit-2026-03-06.txt` (wrong extension)
- ❌ `theme_audit.md` (underscores, no date)

### Special Cases

**Final Reports** (end of multi-session project):
```
[topic]-[type]-final-YYYY-MM-DD.md
```
Example: `block-pattern-validation-final-report-2026-03-04.md`

**Progress Reports** (interim updates):
```
[topic]-[type]-phase-[N]-progress.md
```
Example: `block-pattern-validation-phase-3-progress.md`

---

## 📝 **REPORT STRUCTURE TEMPLATE**

### Standard Report Template

```markdown
# [Report Title]

**Created**: YYYY-MM-DD  
**Type**: [Audit | Completion | Migration | Verification | Maintenance | Cleanup]  
**Status**: [In Progress | Complete | Archived]  
**Related Task List**: `/tasks/[task-file].md` (if applicable)  
**Orchestrator**: `/prompts/[orchestrator].md` (if applicable)

---

## Summary

[2-3 sentence executive summary of what this report documents]

**Key Metrics**:
- Metric 1: Value
- Metric 2: Value
- Metric 3: Value

---

## Background

[Why was this work needed? What problem does it solve?]

---

## Execution

### Phase 1: [Phase Name]

**Duration**: X hours  
**Tasks Completed**: X/Y

- [x] Task 1 — Description
- [x] Task 2 — Description
- [ ] Task 3 — Deferred (reason)

**Files Modified**:
- `/path/to/file1.tsx` — Brief description of changes
- `/path/to/file2.md` — Brief description of changes

### Phase 2: [Phase Name]

[Repeat structure for each phase]

---

## Results

**Before**:
- Metric 1: Old value
- Metric 2: Old value

**After**:
- Metric 1: New value
- Metric 2: New value

**Improvement**: X% improvement in [metric]

---

## Files Changed

| File | Lines Changed | Type | Description |
|:-----|:-------------:|:-----|:------------|
| `/path/to/file1.tsx` | +50 -20 | Modified | Added feature X |
| `/path/to/file2.md` | +10 -0 | Created | New guideline |
| `/path/to/file3.css` | +0 -100 | Deleted | Obsolete styles |

**Total**: X files modified, Y files created, Z files deleted

---

## Next Steps

- [ ] Follow-up task 1
- [ ] Follow-up task 2
- [ ] Documentation update

---

## Archive Status

**Archive Date**: YYYY-MM-DD (30/60/90 days after creation)  
**Archive Location**: `/reports/archived/YYYY-MM/[filename].md`  
**Deletion Date**: YYYY-MM-DD (if applicable)

---

**Created by**: Figma Make AI  
**Reviewed by**: [Name] (if applicable)  
**Version**: 1.0
```

---

## 🗂️ **REPORT LIFECYCLE**

### Creation (Day 0)
1. Create report in `/reports/[filename].md`
2. Add front matter (Created, Type, Status)
3. Document findings/results
4. Link from related task list or Guidelines.md

### Active Period (Days 0-30)
- Report lives in `/reports/` (root level)
- Referenced in task lists, Guidelines.md, CHANGELOG.md
- Updated if new information emerges

### Archive Period (Days 30-90)
1. Move to `/reports/archived/YYYY-MM/[filename].md`
2. Update links in Guidelines.md to point to archived location
3. Add "Archive Status" section to report front matter
4. Report remains accessible for reference

### Deletion (Day 90+)
**Only for**: Audit, Maintenance, Verification, Cleanup reports  
**Never delete**: Completion reports, Migration reports (permanent historical record)

1. Verify report is no longer referenced in active documentation
2. Delete file from `/reports/archived/YYYY-MM/`
3. Document deletion in cleanup report

---

## 📏 **REPORT QUALITY CHECKLIST**

Before finalizing a report, verify:

- [ ] **Filename follows naming convention** (topic-type-YYYY-MM-DD.md)
- [ ] **Front matter includes all required fields** (Created, Type, Status)
- [ ] **Summary section exists** (2-3 sentences + key metrics)
- [ ] **Background section explains context** (why was this needed?)
- [ ] **Execution section documents phases** (tasks completed, files changed)
- [ ] **Results section quantifies impact** (before/after metrics)
- [ ] **Files Changed table is accurate** (paths, descriptions)
- [ ] **Next Steps section outlines follow-ups** (if applicable)
- [ ] **Archive Status section prepared** (for future archiving)
- [ ] **No sensitive data included** (API keys, passwords, PII)
- [ ] **Markdown formatting correct** (headers, lists, tables, code blocks)
- [ ] **Links are valid** (internal links to files/guidelines work)

---

## 🎯 **SPECIAL REPORT TYPES**

### Cleanup Reports
Created by `/prompts/cleanup.md` execution.

**Required sections**:
1. Summary (files deleted, moved, updates)
2. Phase 1-7 checklists (all checked off)
3. Before/After metrics
4. Health score (0-100%)
5. Next steps

**Template**: See `/prompts/cleanup.md` for full template.

### Completion Reports
Created at end of major phases (e.g., Phase 13 Editorial Redesign).

**Required sections**:
1. Executive summary (what was accomplished)
2. Timeline (start date, end date, duration)
3. Deliverables (all files created/modified)
4. Metrics (before/after comparison)
5. Production readiness status (100% ready or blockers)

**Lifespan**: Permanent (never delete, archive after 60 days)

### Migration Reports
Created for data/code refactoring projects.

**Required sections**:
1. Migration scope (what was migrated)
2. Before/after comparison (old vs new patterns)
3. Affected files (complete list with change counts)
4. Verification results (0 regressions)
5. Rollback instructions (if needed)

**Lifespan**: Permanent (keep for rollback reference)

---

## 📊 **REPORT METRICS STANDARDS**

### File Change Metrics
```markdown
**Files Modified**: 42 files
**Lines Added**: +1,234
**Lines Removed**: -567
**Net Change**: +667 lines
```

### Coverage Metrics
```markdown
**Before**: 144/177 patterns (81% coverage)
**After**: 177/177 patterns (100% coverage)
**Improvement**: +33 patterns (+19%)
```

### Health Metrics
```markdown
**Broken Imports**: 0
**Missing Routes**: 0
**TypeScript Errors**: 0
**Documentation Coverage**: 100%
**Health Score**: ✅ 100%
```

### Time Metrics
```markdown
**Estimated Effort**: 12-17 hours
**Actual Effort**: 14.5 hours
**Efficiency**: 93% (within estimate)
```

---

## 🔗 **REPORT CROSS-REFERENCING**

### Link from Reports to Other Files
```markdown
**Related Task List**: `/tasks/theme-completeness-tasks.md`
**Related Guideline**: `/guidelines/wordpress-migration/block-pattern-validation.md`
**Related Orchestrator**: `/prompts/new-templates-patterns-orchestrator.md`
```

### Link from Other Files to Reports
In Guidelines.md:
```markdown
**Report**: `/reports/theme-completeness-audit-2026-03-04.md`
```

In task lists:
```markdown
**Report**: `/reports/phase-13-complete-final-2026-03-12.md`
```

In CHANGELOG.md:
```markdown
See `/reports/cleanup-2026-03-13.md` for details.
```

---

## ⚠️ **REPORT DON'TS**

**DO NOT**:
- ❌ Include API keys, passwords, or sensitive data
- ❌ Use generic filenames (`report.md`, `audit.md`)
- ❌ Create reports without dates in filename
- ❌ Delete completion or migration reports (permanent record)
- ❌ Archive reports while still referenced in active docs
- ❌ Use emojis in report titles (only in section headers)
- ❌ Create duplicate reports for the same work
- ❌ Leave "Status: In Progress" after completion

**DO**:
- ✅ Follow naming convention exactly
- ✅ Include all required front matter fields
- ✅ Quantify results with metrics
- ✅ Link to related task lists and guidelines
- ✅ Update status to "Complete" when done
- ✅ Archive reports after 30-60 days
- ✅ Use Markdown formatting consistently
- ✅ Include next steps for follow-up work

---

## 📅 **ARCHIVE SCHEDULE**

| Report Type | Active Period | Archive After | Delete After |
|:------------|:-------------:|:-------------:|:------------:|
| Audit | 30 days | Day 30 | Day 90 |
| Completion | Permanent | Day 60 | Never |
| Maintenance | 30 days | Day 30 | Day 90 |
| Cleanup | 30 days | Day 30 | Day 90 |
| Migration | Permanent | Day 60 | Never |
| Verification | 30 days | Day 30 | Day 90 |

**Archive folder structure**:
```
/reports/
├── active-report-1.md (Days 0-30)
├── active-report-2.md (Days 0-30)
└── archived/
    ├── 2026-01/
    │   └── old-report-jan.md
    ├── 2026-02/
    │   └── old-report-feb.md
    └── 2026-03/
        └── old-report-mar.md
```

---

## 🎯 **QUICK REFERENCE**

**Creating a new report**:
1. Determine report type (audit, completion, etc.)
2. Use filename pattern: `[topic]-[type]-YYYY-MM-DD.md`
3. Copy appropriate template from this guideline
4. Fill in all required sections
5. Link from task list or Guidelines.md
6. Update status to "Complete" when done

**Archiving a report**:
1. Check report age (30-60 days depending on type)
2. Create `/reports/archived/YYYY-MM/` if doesn't exist
3. Move report to archive folder
4. Update links in Guidelines.md, task lists
5. Add "Archive Status" section to report

**Deleting a report**:
1. Verify report is deletable (not completion/migration)
2. Verify report is 90+ days old
3. Verify no active references in documentation
4. Delete file from archive folder
5. Document deletion in next cleanup report

---

**Related Guidelines**:
- `/guidelines/development/file-organization.md` — File placement rules
- `/guidelines/development/task-management-guidelines.md` — Task list standards
- `/prompts/cleanup.md` — Cleanup orchestrator (creates cleanup reports)

---

**Version History**:
- **v1.0.0** (2026-03-13) — Initial creation with 6 report types and lifecycle management

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-13
