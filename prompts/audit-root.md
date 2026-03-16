# Root Directory Compliance Audit

**Type**: Single Prompt  
**Created**: 2026-03-15  
**Version**: 1.0.0  
**Estimated Duration**: 5-10 minutes  
**Trigger Word**: `audit-root`

---

## Purpose

Quick audit to ensure project root directory contains ONLY the three authorized .md files and nothing else. Identifies and relocates any unauthorized files.

---

## Prerequisites

**Required Before Running**:
- [ ] `/guidelines/development/prompt-report-task-workflow.md` reviewed

---

## Authorized Root Files

**ONLY these .md files are allowed in project root (`/`)**:

1. ✅ `/ATTRIBUTIONS.md` - Third-party credits and licenses
2. ✅ `/README.md` - Project overview and quick start
3. ✅ `/CHANGELOG.md` - Version history (Keep a Changelog format)

**Everything else must be in designated folders**:
- `/prompts/` - Prompt files
- `/reports/` - Report files
- `/tasks/` - Task lists
- `/guidelines/` - Documentation
- `/docs/` - Technical documentation

---

## Execution Instructions

### Phase 1: Scan Root Directory (Est. 2 min)

**Objective**: List all .md files in project root

**Tasks**:
1. List all files in `/` (root directory)
2. Filter for .md files only
3. Compare against authorized list

**Output**:
- List of all .md files found
- Status: Compliant or Non-Compliant

### Phase 2: Identify Violations (Est. 2 min)

**Objective**: Find unauthorized .md files

**For Each Unauthorized File**:
1. Determine content purpose
2. Recommend proper location
3. Check if content should be merged with existing file

**Common Relocations**:
```
/WHATS-NEXT.md → /tasks/upcoming-tasks.md
/TODO.md → /tasks/todo-task-list.md
/NOTES.md → /docs/project-notes.md
/PLAN.md → /docs/project-plan.md
/STATUS.md → /reports/project-status-YYYY-MM-DD.md
/DOCUMENTATION-INDEX.md → /guidelines/MASTER-INDEX.md
```

### Phase 3: Relocate Files (Est. 5 min)

**Objective**: Move unauthorized files to proper locations

**For Each Violation**:
1. Read file contents
2. Create file in proper location
3. Update any references to old location
4. Delete old file from root
5. Document relocation in report

**Output**:
- Files relocated
- References updated
- Root directory clean

---

## Report Requirements

**Report Location**: `/reports/root-audit-report-YYYY-MM-DD.md`

**Required Sections**:

### 1. Executive Summary
```markdown
## Executive Summary

**Audit Date**: YYYY-MM-DD
**Status**: ✅ Compliant | ❌ Non-Compliant

**Authorized Files Status**:
- ✅ /ATTRIBUTIONS.md - Present
- ✅ /README.md - Present
- ✅ /CHANGELOG.md - Present

**Unauthorized Files Found**: X

**Actions Taken**:
- Relocated: X files
- Deleted: Y files
- Merged: Z files
```

### 2. Violations Details
```markdown
## Unauthorized Files

### File 1: /FILENAME.md

**Original Location**: /FILENAME.md
**Content Purpose**: [Description]
**New Location**: /proper/path/filename.md
**Action**: Relocated
**References Updated**: X files
```

### 3. Relocation Summary
```markdown
## Relocation Summary

| Original | New Location | Action | Reason |
|----------|--------------|--------|--------|
| /FILE.md | /tasks/file-task-list.md | Moved | Task list content |
```

---

## Auto-Fix Mode

This prompt can auto-fix violations without creating a task list.

**Auto-Fix Process**:
1. Identify violations
2. Determine proper locations
3. Relocate files immediately
4. Update references
5. Create report documenting changes

**No Task List Required** - Changes made immediately during audit.

---

## Success Criteria

- [ ] Root directory scanned
- [ ] All unauthorized .md files identified
- [ ] Files relocated to proper locations
- [ ] References updated
- [ ] Root directory contains ONLY 3 authorized files
- [ ] Report created documenting all changes

---

## Quick Check Command

**To verify compliance manually**:
```bash
ls -la / | grep '.md$'
```

**Expected output**:
```
ATTRIBUTIONS.md
CHANGELOG.md
README.md
```

**If you see more files** → Run this audit

---

## Notes

**Common Violations**:
- `WHATS-NEXT.md` - Should be in `/tasks/`
- `TODO.md` - Should be in `/tasks/`
- `DOCUMENTATION-INDEX.md` - Should be in `/guidelines/`
- `PROJECT-STATUS.md` - Should be in `/reports/`
- Any other .md files - Determine purpose and relocate

**Merge vs. Relocate**:
- **Relocate**: If content is unique and standalone
- **Merge**: If content duplicates existing file
- **Delete**: If content is outdated or superseded

---

**Related Prompts**:
- `/prompts/cleanup.md`
- `/prompts/audit-files.md`

**Created By**: DevOps Team  
**Last Updated**: 2026-03-15
