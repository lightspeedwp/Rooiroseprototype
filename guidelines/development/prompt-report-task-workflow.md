# Prompt → Report → Task Workflow

**Category**: Development  
**Version**: 1.0.0  
**Last Updated**: 2026-03-15  
**Status**: Active  

---

## Purpose

This guideline establishes the **mandatory** workflow for creating prompts, generating reports, and producing task lists. This ensures consistency, traceability, and proper organization of all project audits, improvements, and development work.

---

## Core Principles

1. **Guidelines First**: All guidelines must be current before running prompts
2. **Prompts Generate Reports**: Prompts produce structured audit reports
3. **Reports Generate Tasks**: Task lists are created ONLY after reports are complete
4. **Proper Location**: Everything has a designated folder location
5. **No Root Clutter**: Only 3 .md files allowed in project root

---

## File Organization Rules

### Root Directory - ONLY These Files

The project root (`/`) **must contain ONLY these .md files**:

1. `/ATTRIBUTIONS.md` - Third-party credits and licenses
2. `/README.md` - Project overview and quick start
3. `/CHANGELOG.md` - Version history following Keep a Changelog format

**❌ NEVER create**:
- `/WHATS-NEXT.md`
- `/TODO.md`
- `/NOTES.md`
- `/PLAN.md`
- Any other .md files in root

### Designated Folders

| Content Type | Location | Description |
|--------------|----------|-------------|
| **Prompts** | `/prompts/` | All prompt files (single and orchestrators) |
| **Reports** | `/reports/` | All audit/completion reports |
| **Tasks** | `/tasks/` | All task lists with checkboxes |
| **Guidelines** | `/guidelines/` | All standards and documentation |
| **Documentation** | `/docs/` | Technical documentation |

---

## Workflow Phases

### Phase 1: Guidelines Update

**BEFORE creating or running ANY prompt**, ensure all related guidelines are current.

```mermaid
Guidelines → Prompts → Reports → Tasks
    ↑
  START HERE
```

**Checklist**:
- [ ] Identify all guidelines related to the audit/change
- [ ] Review each guideline for accuracy
- [ ] Update outdated information
- [ ] Add new sections if design tokens or requirements changed
- [ ] Commit guideline updates

**Example**:
```bash
# If auditing typography, update these first:
/guidelines/design-tokens/typography.md
/guidelines/design-tokens/typography-implementation-guide.md
/guidelines/components/component-guidelines.md (if relevant)
```

**Why This Matters**:
- Prompts reference guidelines to identify violations
- Outdated guidelines = inaccurate audits
- AI needs current standards to audit against

---

## Standardized Trigger Word Prompts

**NEW (2026-03-15)**: Trigger word prompts (like `cleanup`, `audit-files`, `sync-guidelines`) follow a standardized two-phase workflow:

### Phase 1: Audit Phase
1. Run comprehensive audit based on prompt type
2. Generate findings and identify issues
3. Create standardized task list file

### Phase 2: Task List Creation
1. Create task list file: `/tasks/[trigger-name]-task-list.md`
2. Add reference to `/tasks/task-list.md` (master list)
3. Include status tracking

### Protected Task List Files

These task list files are **PROTECTED** and should never be deleted during cleanup:

| Trigger Word | Task List File | Purpose |
|:-------------|:---------------|:--------|
| `cleanup` | `/tasks/cleanup-task-list.md` | Project maintenance tasks |
| `audit-files` | `/tasks/files-task-list.md` | File size/organization tasks |
| `audit-root` | `/tasks/root-task-list.md` | Root directory cleanup tasks |
| `sync-guidelines` | `/tasks/guidelines-task-list.md` | Guideline sync tasks |
| `update-docs` | `/tasks/docs-task-list.md` | Documentation update tasks |
| _Custom triggers_ | `/tasks/routes-task-list.md` | Route audit tasks |
| _Custom triggers_ | `/tasks/tokens-task-list.md` | Design token tasks |
| _Custom triggers_ | `/tasks/release-task-list.md` | Release preparation tasks |
| _Custom triggers_ | `/tasks/changelog-task-list.md` | Changelog maintenance tasks |
| _Custom triggers_ | `/tasks/reports-task-list.md` | Report cleanup tasks |
| _Custom triggers_ | `/tasks/status-task-list.md` | Status update tasks |
| _Custom triggers_ | `/tasks/data-task-list.md` | Data validation tasks |
| _Custom triggers_ | `/tasks/responsive-task-list.md` | Responsive design tasks |
| _Custom triggers_ | `/tasks/a11y-task-list.md` | Accessibility tasks |
| _Custom triggers_ | `/tasks/css-task-list.md` | CSS refactoring tasks |
| _Custom triggers_ | `/tasks/patterns-task-list.md` | Pattern audit tasks |
| _Custom triggers_ | `/tasks/blocks-task-list.md` | Block audit tasks |

### Workflow Example

```bash
# User types trigger word
User: cleanup

# AI executes audit phase
AI: [Runs 7-phase maintenance audit]
    - Scans filesystem
    - Identifies issues
    - Documents findings

# AI creates standardized task list
AI: [Creates /tasks/cleanup-task-list.md with all tasks]

# AI updates master task list
AI: [Adds entry to /tasks/task-list.md]
    ## Cleanup Tasks (2026-03-15)
    **Task List**: /tasks/cleanup-task-list.md
    **Status**: Not Started
    **Total Tasks**: 25
    **Progress**: 0/25 (0%)

# AI reports completion
AI: "Created cleanup task list with 25 tasks. Added to master task list."
```

### Task List Format for Trigger Words

```markdown
# [Trigger Name] — Task List

**Created**: YYYY-MM-DD  
**Trigger**: `[trigger-word]`  
**Prompt**: `/prompts/[trigger-word].md`  
**Status**: X/Y tasks complete (Z%)  

---

## Summary

- **Critical**: X tasks (Y hours)
- **High**: X tasks (Y hours)
- **Medium**: X tasks (Y hours)
- **Low**: X tasks (Y hours)
- **Total Effort**: X hours

---

## Phase 1: [Phase Name]

- [ ] **Task 1.1**: [Description]  
  **File**: /path/to/file.ext  
  **Priority**: Critical | High | Medium | Low  
  **Effort**: X min

- [ ] **Task 1.2**: [Description]  
  **File**: /path/to/file.ext  
  **Priority**: Critical | High | Medium | Low  
  **Effort**: X min

---

## Completion Tracking

**Started**: YYYY-MM-DD  
**Completed**: -  
**Time Spent**: - hours
```

---

### Phase 2: Prompt Creation

#### Single Prompts

**Location**: `/prompts/[prompt-name].md`

**Format**: Use `/guidelines/_templates/prompt-template.md`

**Naming Convention**: `[topic]-audit.md` or `[topic]-implementation.md`

**Examples**:
```
/prompts/typography-audit.md
/prompts/color-consistency-audit.md
/prompts/accessibility-check.md
```

**Structure**:
```markdown
# [Prompt Name]

**Type**: Single Prompt
**Duration**: [X] minutes
**Version**: 1.0.0

## Purpose
[What this audits or implements]

## Prerequisites
- [ ] Guidelines X, Y, Z are up-to-date

## Execution Instructions
[Step-by-step phases]

## Report Requirements
**Report Location**: /reports/[name]-report-YYYY-MM-DD.md
[Required sections]

## Task List Creation
**Only after report is complete**
```

#### Orchestrator Prompts

**Location**: `/prompts/[orchestrator-name]/`

**Structure**:
```
/prompts/[orchestrator-name]/
├── orchestrator.md          # Main orchestrator file
├── phase-1-[name].md        # Sub-prompt 1
├── phase-2-[name].md        # Sub-prompt 2
└── phase-3-[name].md        # Sub-prompt 3
```

**Examples**:
```
/prompts/comprehensive-audit/
├── orchestrator.md
├── phase-1-guidelines-review.md
├── phase-2-component-audit.md
└── phase-3-documentation-sync.md
```

**Report Structure**:
```
/reports/[orchestrator-name]/
├── phase-1-report-YYYY-MM-DD.md
├── phase-2-report-YYYY-MM-DD.md
└── phase-3-report-YYYY-MM-DD.md
```

---

### Phase 3: Prompt Execution & Report Generation

#### Running the Prompt

1. **Read the prompt file completely**
2. **Verify all prerequisites checked**
3. **Execute phases in order**
4. **Document findings continuously**

#### Report Creation

**Location Rules**:

| Prompt Type | Report Location |
|-------------|-----------------|
| Single Prompt | `/reports/[prompt-name]-report-YYYY-MM-DD.md` |
| Orchestrator | `/reports/[orchestrator-name]/phase-[X]-report-YYYY-MM-DD.md` |

**Use Template**: `/guidelines/_templates/report-template.md`

**Required Sections**:

1. **Executive Summary**
   ```markdown
   ## Executive Summary
   
   **Audit Scope**: [What was audited]
   **Completion Date**: YYYY-MM-DD
   **Total Issues**: [X]
   **Severity Breakdown**:
   - Critical: [X]
   - High: [X]
   - Medium: [X]
   - Low: [X]
   ```

2. **Detailed Findings**
   ```markdown
   ## Detailed Findings
   
   ### Issue 1: [Title]
   
   **Severity**: Critical | High | Medium | Low
   **Location**: /path/to/file.ext
   **Guideline**: /guidelines/[guideline].md
   **Violation**: [What's wrong]
   **Recommendation**: [How to fix]
   **Estimated Effort**: [X hours/minutes]
   ```

3. **Compliance Metrics**
   ```markdown
   ## Compliance Metrics
   
   **Overall Compliance**: X%
   **Files Audited**: X
   **Files Compliant**: X
   **Files with Issues**: X
   
   **By Category**:
   - Typography: X%
   - Colors: X%
   - Spacing: X%
   ```

4. **Recommendations**
   ```markdown
   ## Recommendations
   
   ### Priority 1: Critical
   - [Recommendation with effort estimate]
   
   ### Priority 2: High
   - [Recommendation with effort estimate]
   ```

**Example Report**:
```markdown
# Typography Audit Report

**Date**: 2026-03-15
**Prompt**: /prompts/typography-audit.md
**Auditor**: AI System

## Executive Summary

**Scope**: All component files in /src/app/components/
**Total Files Audited**: 45
**Issues Found**: 12
**Compliance**: 73%

**Severity**:
- Critical: 2
- High: 4
- Medium: 5
- Low: 1

## Detailed Findings

### Issue 1: Hardcoded Font Sizes in Header.tsx

**Severity**: High
**Location**: /src/app/components/parts/Header.tsx:45
**Guideline**: /guidelines/design-tokens/typography.md
**Violation**: Using hardcoded `fontSize: '24px'` instead of design token
**Current Code**:
```tsx
<h1 style={{ fontSize: '24px' }}>Title</h1>
```
**Should Be**:
```tsx
<h1 className="text-2xl">Title</h1>
```
**Effort**: 5 minutes

[Continue for all issues...]

## Compliance Metrics

**Overall**: 73% compliant
**Font Sizes**: 68% using tokens
**Font Families**: 100% compliant
**Line Heights**: 80% compliant

## Recommendations

### Priority 1: Critical (Must Fix)
1. Fix Header.tsx hardcoded sizes (5 min)
2. Update Footer.tsx font family (10 min)

### Priority 2: High (Should Fix)
3. Standardize button typography (30 min)
4. Fix card component line heights (20 min)

### Priority 3: Medium (Nice to Have)
5. Update old heading styles (45 min)

---

**Next Steps**: Create task list at /tasks/typography-audit-task-list.md
```

---

### Phase 4: Task List Creation

**⚠️ CRITICAL RULE**: Task lists are created **ONLY AFTER** the report is complete and reviewed.

**Why?**
- Report provides full context
- All issues are documented
- Effort estimates are known
- Priorities are clear

**Location Rules**:

| Prompt Type | Task List Location |
|-------------|-------------------|
| Single Prompt | `/tasks/[prompt-name]-task-list.md` |
| Orchestrator | `/tasks/[orchestrator-name]-task-list.md` (consolidated) |

**Format**: Use `/guidelines/_templates/task-list-template.md`

**Structure**:
```markdown
# [Prompt Name] - Task List

**Created**: YYYY-MM-DD
**Based on Report**: /reports/[report-name].md
**Total Tasks**: [X]
**Status**: Not Started

---

## Summary

- **Critical**: [X] tasks ([X] hours)
- **High**: [X] tasks ([X] hours)
- **Medium**: [X] tasks ([X] hours)
- **Total Effort**: [X] hours

---

## Priority 1: Critical (Must Fix)

- [ ] **Task 1**: [Description]  
  **File**: /path/to/file.ext  
  **Issue**: [Brief issue description]  
  **Fix**: [What to do]  
  **Effort**: [X] min  
  **Report**: #Issue-1

- [ ] **Task 2**: [Description]  
  **File**: /path/to/file.ext  
  **Effort**: [X] min  
  **Report**: #Issue-2

## Priority 2: High (Should Fix)

- [ ] **Task 3**: [Description]  
  **File**: /path/to/file.ext  
  **Effort**: [X] min

## Priority 3: Medium (Nice to Have)

- [ ] **Task 4**: [Description]  
  **File**: /path/to/file.ext  
  **Effort**: [X] min

## Priority 4: Low (Optional)

- [ ] **Task 5**: [Description]  
  **Effort**: [X] min

---

## Completion Tracking

**Started**: YYYY-MM-DD (when first task marked complete)
**Completed**: YYYY-MM-DD (when all tasks done)
**Total Time Spent**: [X] hours

---

## Notes

[Any additional context or dependencies]
```

**Example Task List**:
```markdown
# Typography Audit - Task List

**Created**: 2026-03-15
**Based on Report**: /reports/typography-audit-report-2026-03-15.md
**Total Tasks**: 12
**Status**: Not Started

---

## Summary

- **Critical**: 2 tasks (15 min)
- **High**: 4 tasks (1.5 hours)
- **Medium**: 5 tasks (2 hours)
- **Low**: 1 task (10 min)
- **Total Effort**: 4 hours

---

## Priority 1: Critical

- [ ] **Fix Header.tsx hardcoded font sizes**  
  **File**: /src/app/components/parts/Header.tsx  
  **Issue**: Using `fontSize: '24px'` instead of Tailwind classes  
  **Fix**: Replace with `className="text-2xl"`  
  **Effort**: 5 min  
  **Report**: #Issue-1

- [ ] **Update Footer.tsx font family**  
  **File**: /src/app/components/parts/Footer.tsx  
  **Issue**: Using system font instead of Karla  
  **Fix**: Add `font-sans` class  
  **Effort**: 10 min  
  **Report**: #Issue-2

## Priority 2: High

- [ ] **Standardize button typography**  
  **Files**: /src/app/components/ui/button.tsx (and 5 others)  
  **Issue**: Inconsistent button text sizes  
  **Fix**: Apply typography presets consistently  
  **Effort**: 30 min  
  **Report**: #Issue-3

[Continue...]

---

## Completion Tracking

**Started**: -
**Completed**: -
**Total Time Spent**: -

---

## Notes

- Some button components require testing after typography changes
- Coordinate with design team on heading sizes before final changes
```

---

## Master Task List Integration

All task lists **must** also be tracked in `/tasks/task-list.md` (master task list).

**After creating a specific task list**, add entry to master:

```markdown
## Typography Audit Tasks

**Task List**: /tasks/typography-audit-task-list.md
**Status**: Not Started | In Progress | Complete
**Total Tasks**: 12
**Progress**: 0/12 (0%)

Quick Summary:
- [ ] Fix critical typography issues (2 tasks)
- [ ] Update high priority typography (4 tasks)
- [ ] Medium priority improvements (5 tasks)
```

---

## File Size Guidelines

### Keep Files Small

**Maximum Recommended Sizes**:
- **Guideline files**: ~500 lines
- **Component files**: ~200 lines
- **Data files**: ~300 lines
- **Report files**: ~1000 lines (break into phases if larger)

**Why?**
- AI processes smaller files more accurately
- Easier to review and maintain
- Faster to load and parse
- Better memory optimization

### When Files Get Too Large

#### Guidelines
```
Instead of:
/guidelines/design-tokens/design-system.md (2000 lines)

Break into:
/guidelines/design-tokens/colors.md
/guidelines/design-tokens/typography.md
/guidelines/design-tokens/spacing.md
/guidelines/design-tokens/shadows.md
```

#### Components
```
Instead of:
/src/app/components/Header.tsx (500 lines)

Break into:
/src/app/components/parts/Header.tsx (100 lines)
/src/app/components/parts/HeaderNav.tsx (80 lines)
/src/app/components/parts/HeaderLogo.tsx (40 lines)
/src/app/components/parts/HeaderActions.tsx (60 lines)
```

#### Data Files
```
Instead of:
/src/app/data/posts.ts (1000 lines)

Break into:
/src/app/data/posts/gesondheid/index.ts
/src/app/data/posts/gesondheid/post-001.ts
/src/app/data/posts/gesondheid/post-002.ts
/src/app/data/posts/kos/index.ts
/src/app/data/posts/kos/post-001.ts
```

#### CSS Files
```
Instead of:
/src/styles/components.css (800 lines)

Break into:
/src/styles/components/buttons.css
/src/styles/components/cards.css
/src/styles/components/forms.css
/src/styles/components/navigation.css
```

---

## Examples

### Example 1: Single Prompt Workflow

```
1. Update Guidelines:
   /guidelines/design-tokens/colors.md
   /guidelines/development/component-guidelines.md

2. Create Prompt:
   /prompts/color-audit.md

3. Run Prompt → Generate Report:
   /reports/color-audit-report-2026-03-15.md

4. Create Task List:
   /tasks/color-audit-task-list.md

5. Update Master:
   /tasks/task-list.md (add reference to color-audit-task-list.md)
```

### Example 2: Orchestrator Workflow

```
1. Update Guidelines:
   /guidelines/design-tokens/*.md (all relevant)
   /guidelines/development/*.md (all relevant)

2. Create Orchestrator:
   /prompts/comprehensive-audit/
   ├── orchestrator.md
   ├── phase-1-colors.md
   ├── phase-2-typography.md
   └── phase-3-spacing.md

3. Run Phase 1 → Generate Report:
   /reports/comprehensive-audit/phase-1-colors-report-2026-03-15.md

4. Run Phase 2 → Generate Report:
   /reports/comprehensive-audit/phase-2-typography-report-2026-03-15.md

5. Run Phase 3 → Generate Report:
   /reports/comprehensive-audit/phase-3-spacing-report-2026-03-15.md

6. Create Consolidated Task List:
   /tasks/comprehensive-audit-task-list.md

7. Update Master:
   /tasks/task-list.md
```

---

## Validation Checklist

Before committing any prompt/report/task work:

### Guidelines
- [ ] All related guidelines reviewed and updated
- [ ] No outdated information in referenced guidelines
- [ ] Design tokens current and accurate

### Prompts
- [ ] Prompt in correct location (/prompts/)
- [ ] Uses template format
- [ ] Prerequisites clearly listed
- [ ] Phases well-defined
- [ ] Report requirements specified

### Reports
- [ ] Report in correct location (/reports/)
- [ ] All required sections present
- [ ] Issues clearly documented with locations
- [ ] Recommendations prioritized
- [ ] Effort estimates included

### Task Lists
- [ ] Created ONLY after report complete
- [ ] In correct location (/tasks/)
- [ ] References source report
- [ ] Tasks have checkboxes
- [ ] Priorities assigned
- [ ] File locations specified
- [ ] Added to master task list

### Root Directory
- [ ] No unnecessary .md files in root
- [ ] Only ATTRIBUTIONS.md, README.md, CHANGELOG.md present

---

## Common Mistakes to Avoid

### ❌ Creating Tasks Before Report

**Wrong**:
```
1. Run prompt
2. Create task list
3. Generate report (maybe?)
```

**Correct**:
```
1. Update guidelines
2. Run prompt thoroughly
3. Generate complete report
4. THEN create task list from report
```

### ❌ Root Directory Clutter

**Wrong**:
```
/WHATS-NEXT.md
/TODO.md
/NOTES.md
/PLAN.md
```

**Correct**:
```
/tasks/whats-next-task-list.md
/docs/project-notes.md
/docs/architecture-plan.md
```

### ❌ Skipping Guidelines Update

**Wrong**:
```
1. Create prompt
2. Run against outdated guidelines
3. Get inaccurate results
```

**Correct**:
```
1. Update all relevant guidelines FIRST
2. Create prompt referencing current guidelines
3. Run prompt
4. Get accurate audit results
```

### ❌ Large Monolithic Files

**Wrong**:
```
/src/app/components/AllComponents.tsx (3000 lines)
/guidelines/everything.md (5000 lines)
```

**Correct**:
```
/src/app/components/Header.tsx (100 lines)
/src/app/components/Footer.tsx (120 lines)
/src/app/components/Navigation.tsx (90 lines)

/guidelines/design-tokens/colors.md (200 lines)
/guidelines/design-tokens/typography.md (250 lines)
```

---

## Enforcement

These rules are **mandatory** and will be enforced through:

1. **Automated Checks**:
   - Root directory .md file validation
   - File size warnings (>500 lines for guidelines)
   - Location validation for prompts/reports/tasks

2. **Manual Review**:
   - Pull request reviews check compliance
   - Guidelines must be current before prompt execution
   - Report completeness before task list creation

3. **AI Agent Instructions**:
   - AI must follow this workflow
   - No shortcuts or workarounds
   - Strict adherence to file locations

---

## Quick Reference

**Workflow Order**:
```
Guidelines → Prompts → Reports → Tasks
```

**File Locations**:
```
Prompts:   /prompts/
Reports:   /reports/
Tasks:     /tasks/
Guidelines: /guidelines/
Docs:      /docs/
```

**Root Only**:
```
/ATTRIBUTIONS.md
/README.md
/CHANGELOG.md
```

**Size Limits**:
```
Guidelines: ~500 lines
Components: ~200 lines
Data: ~300 lines
CSS: ~200 lines per file
```

---

## Templates

All templates located in `/guidelines/_templates/`:

- `prompt-template.md`
- `report-template.md`
- `task-list-template.md`
- `general-guideline-template.md`
- `ATTRIBUTIONS-template.md`
- `README-template.md`
- `CHANGELOG-template.md`

---

## Related Guidelines

- [Task Management Guidelines](/guidelines/development/task-management-guidelines.md)
- [Report Creation Guidelines](/guidelines/development/report-creation-guidelines.md)
- [File Organization](/guidelines/development/file-organization.md)
- [Core Repository Guidelines](/guidelines/core-repository-guidelines.md)

---

**Maintained By**: DevOps Team  
**Questions**: Contact development team  
**Last Review**: 2026-03-15