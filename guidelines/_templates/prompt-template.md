# [Prompt Name]

**Type**: Single Prompt | Orchestrator Prompt  
**Created**: YYYY-MM-DD  
**Version**: 1.0.0  
**Estimated Duration**: [X] minutes  

---

## Purpose

[Brief description of what this prompt accomplishes and why it's needed]

---

## Prerequisites

**Required Before Running**:
- [ ] All related guidelines are up-to-date
- [ ] No pending changes in working directory
- [ ] Relevant documentation reviewed
- [ ] [Additional prerequisites specific to this prompt]

**Guidelines to Review**:
- `/guidelines/[relevant-guideline-1].md`
- `/guidelines/[relevant-guideline-2].md`
- `/guidelines/design-tokens/[relevant-tokens].md`

---

## Scope

**In Scope**:
- [List specific areas this prompt will audit/modify]
- [Component types, file patterns, etc.]

**Out of Scope**:
- [List what this prompt will NOT touch]
- [Excluded areas or file types]

---

## Execution Instructions

### Phase 1: [Phase Name] (Est. [X] min)

**Objective**: [What this phase accomplishes]

**Tasks**:
1. [Specific task with expected outcome]
2. [Specific task with expected outcome]
3. [Specific task with expected outcome]

**Output**:
- [File created or modified]
- [Data collected]

### Phase 2: [Phase Name] (Est. [X] min)

**Objective**: [What this phase accomplishes]

**Tasks**:
1. [Specific task with expected outcome]
2. [Specific task with expected outcome]

**Output**:
- [File created or modified]

[Continue for all phases...]

---

## Report Requirements

**Report Location**: `/reports/[prompt-name]-report-YYYY-MM-DD.md`

**Required Sections**:
1. **Executive Summary**
   - Total issues found
   - Severity breakdown
   - Estimated effort to fix

2. **Detailed Findings**
   - Issue by issue breakdown
   - File location
   - Violation description
   - Recommended fix

3. **Compliance Status**
   - Percentage compliance with guidelines
   - Areas of concern
   - Areas of excellence

4. **Recommendations**
   - Priority order
   - Effort estimation
   - Risk assessment

---

## Task List Creation

**Task List Location**: `/tasks/[prompt-name]-task-list.md`

**Only create task list AFTER**:
- [ ] Report is complete
- [ ] All findings documented
- [ ] Recommendations reviewed

**Task List Format**:
```markdown
# [Prompt Name] - Task List

**Created**: YYYY-MM-DD  
**Based on Report**: /reports/[prompt-name]-report-YYYY-MM-DD.md  
**Total Tasks**: [X]  
**Status**: Not Started | In Progress | Complete  

---

## Priority 1: Critical (Must Fix)

- [ ] Task 1: [Description] - [File location] - [Est. time]
- [ ] Task 2: [Description] - [File location] - [Est. time]

## Priority 2: High (Should Fix)

- [ ] Task 3: [Description] - [File location] - [Est. time]

## Priority 3: Medium (Nice to Have)

- [ ] Task 4: [Description] - [File location] - [Est. time]
```

---

## Success Criteria

- [ ] All phases completed
- [ ] Report created with all required sections
- [ ] Task list generated
- [ ] No errors or warnings
- [ ] All findings documented
- [ ] Recommendations actionable

---

## Notes

[Any additional context, gotchas, or special considerations]

---

**Related Prompts**:
- `/prompts/[related-prompt-1].md`
- `/prompts/[related-prompt-2].md`

**Created By**: [Author]  
**Last Updated**: YYYY-MM-DD
