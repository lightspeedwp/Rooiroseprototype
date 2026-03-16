# File Size & Organization Audit

**Type**: Single Prompt  
**Created**: 2026-03-15  
**Version**: 1.0.0  
**Estimated Duration**: 30-45 minutes  
**Trigger Word**: `audit-files`

---

## Purpose

Audit all project files for size violations and organizational issues. Identify files that are too large for optimal AI processing and recommend splitting strategies.

---

## Prerequisites

**Required Before Running**:
- [ ] All related guidelines are up-to-date
- [ ] No pending uncommitted changes

**Guidelines to Review**:
- `/guidelines/development/file-organization.md`
- `/guidelines/development/prompt-report-task-workflow.md`
- `/guidelines/development/component-guidelines.md`

---

## Scope

**In Scope**:
- All TypeScript/TSX files in `/src/`
- All CSS files in `/src/styles/`
- All data files in `/src/app/data/`
- All guideline files in `/guidelines/`
- All prompt files in `/prompts/`
- All report files in `/reports/`

**Out of Scope**:
- Node modules
- Build output
- Third-party libraries

---

## File Size Thresholds

| File Type | Max Lines | Reason |
|-----------|-----------|--------|
| Component (.tsx) | 200 | AI processing, maintainability |
| Data files (.ts) | 300 | Memory optimization |
| CSS files (.css) | 200 | Specificity management |
| Guidelines (.md) | 500 | AI chunking limits |
| Reports (.md) | 1000 | Comprehensive but readable |
| Prompts (.md) | 400 | Clear instructions |

---

## Execution Instructions

### Phase 1: Scan All Files (Est. 10 min)

**Objective**: Inventory all files and their line counts

**Tasks**:
1. Scan `/src/app/components/` - count lines in all .tsx files
2. Scan `/src/app/data/` - count lines in all .ts files
3. Scan `/src/styles/` - count lines in all .css files
4. Scan `/guidelines/` - count lines in all .md files
5. Scan `/prompts/` - count lines in all .md files
6. Scan `/reports/` - count lines in all .md files

**Output**:
- File inventory with line counts
- List of files exceeding thresholds

### Phase 2: Analyze Violations (Est. 10 min)

**Objective**: Categorize violations by severity

**Tasks**:
1. Mark files 50%+ over threshold as Critical
2. Mark files 25-50% over threshold as High
3. Mark files 10-25% over threshold as Medium
4. Mark files under 10% over threshold as Low
5. Group violations by file type

**Output**:
- Severity breakdown
- Category grouping

### Phase 3: Recommend Splitting Strategies (Est. 15 min)

**Objective**: Provide specific refactoring recommendations

**For Each Violation**:
1. Analyze file structure
2. Identify logical splitting points
3. Recommend new file organization
4. Estimate effort to split

**Example Recommendation**:
```
File: /src/app/data/posts.ts (850 lines) - CRITICAL
Threshold: 300 lines
Over by: 550 lines (183%)

Recommended Split:
/src/app/data/posts/index.ts (50 lines - exports)
/src/app/data/posts/gesondheid/index.ts (20 lines)
/src/app/data/posts/gesondheid/post-001.ts (50 lines)
/src/app/data/posts/gesondheid/post-002.ts (50 lines)
[... continue pattern]

Effort: 45 minutes
```

### Phase 4: Check Root Directory (Est. 5 min)

**Objective**: Ensure only authorized .md files in root

**Tasks**:
1. List all .md files in project root `/`
2. Verify only these exist:
   - ATTRIBUTIONS.md
   - README.md
   - CHANGELOG.md
3. Flag any additional .md files

**Output**:
- List of unauthorized root files (if any)
- Recommended relocation paths

---

## Report Requirements

**Report Location**: `/reports/file-audit-report-YYYY-MM-DD.md`

**Required Sections**:

### 1. Executive Summary
```markdown
## Executive Summary

**Audit Date**: YYYY-MM-DD
**Total Files Scanned**: X
**Files with Violations**: Y
**Compliance Rate**: Z%

**Severity Breakdown**:
- Critical (>50% over): X files
- High (25-50% over): X files
- Medium (10-25% over): X files
- Low (<10% over): X files

**Root Directory Status**:
- Authorized .md files: 3/3 ✅
- Unauthorized .md files: X ❌
```

### 2. Violations by File Type
```markdown
## Violations by File Type

### Components (.tsx)
- Total files: X
- Violations: Y (Z%)
- Largest: /path/to/file.tsx (X lines, Y% over)

[Repeat for each file type]
```

### 3. Critical Violations
```markdown
## Critical Violations (>50% Over Threshold)

### Violation 1: [Filename]

**File**: /path/to/file.ext
**Current Size**: X lines
**Threshold**: Y lines
**Over By**: Z lines (W%)
**Severity**: Critical

**Recommended Split**:
[Detailed splitting strategy]

**Effort**: X minutes
```

### 4. Root Directory Issues
```markdown
## Root Directory Compliance

**Status**: ✅ Compliant | ❌ Non-Compliant

**Authorized Files**:
- ✅ /ATTRIBUTIONS.md
- ✅ /README.md
- ✅ /CHANGELOG.md

**Unauthorized Files** (if any):
- ❌ /FILE.md → Should move to /path/to/proper/location.md
```

### 5. Recommendations Summary
```markdown
## Recommendations Summary

**Total Tasks**: X
**Estimated Effort**: Y hours

**Priority Breakdown**:
- P1 (Critical): X tasks (Y hours)
- P2 (High): X tasks (Y hours)
- P3 (Medium): X tasks (Y hours)
- P4 (Low): X tasks (Y hours)
```

---

## Task List Creation

**Task List Location**: `/tasks/file-audit-task-list.md`

**Only create after report is complete**

**Task Format**:
```markdown
## Priority 1: Critical

- [ ] **Split [filename]**  
  **File**: /path/to/file.ext  
  **Size**: X lines (Y% over threshold)  
  **Split Into**: [List of new files]  
  **Effort**: X min  
  **Report**: #Violation-1

[Continue for all violations]
```

---

## Success Criteria

- [ ] All files scanned and line counts recorded
- [ ] Violations categorized by severity
- [ ] Splitting strategies recommended for each violation
- [ ] Root directory compliance verified
- [ ] Report created with all sections
- [ ] Task list generated (if violations found)
- [ ] No errors or warnings during scan

---

## Notes

**File Reading Strategy**:
- Use line counting to determine violations
- Don't read full file contents unless needed for analysis
- Focus on quantitative metrics first, qualitative second

**Common Splitting Patterns**:

**Components**:
```
Large.tsx (500 lines)
→ Large.tsx (100 lines)
→ LargeHeader.tsx (80 lines)
→ LargeBody.tsx (120 lines)
→ LargeFooter.tsx (60 lines)
→ LargeUtils.ts (80 lines)
```

**Data Files**:
```
posts.ts (1000 lines)
→ posts/index.ts (50 lines)
→ posts/category-a/index.ts
→ posts/category-a/post-001.ts
→ posts/category-a/post-002.ts
```

**CSS Files**:
```
components.css (600 lines)
→ components/buttons.css (100 lines)
→ components/cards.css (120 lines)
→ components/forms.css (90 lines)
→ components/navigation.css (110 lines)
```

---

**Related Prompts**:
- `/prompts/cleanup.md`
- `/prompts/optimize-memory.md`

**Created By**: DevOps Team  
**Last Updated**: 2026-03-15
