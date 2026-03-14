# Process Reports Orchestrator

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Trigger Word**: `process-reports`  
**Estimated Duration**: 45-60 minutes  
**Purpose**: Process all reports in `/reports/` folder, extract violations/feedback, create/update task lists, and update master tracking

---

## 📋 **OVERVIEW**

This orchestrator processes project reports to:
- Extract unresolved violations, issues, and feedback
- Create new task lists for unresolved items
- Update existing task lists with report findings
- Archive completed reports (after verification)
- Update master task list with current priorities
- Generate summary of active tasks and next actions

---

## 🎯 **EXECUTION PHASES**

### **Phase 1: Report Inventory & Classification** (8-10 min)

**Objective**: Catalog all reports and classify by type and age

**Tasks**:
1. Read `/reports/` directory
2. Extract dates from all report filenames
3. Calculate age of each report (days since creation)
4. Classify reports by type:
   - **Audit Reports**: Violations/issues needing fixes
   - **Completion Reports**: Project milestones, no action needed
   - **Progress Reports**: Ongoing work tracking
   - **Maintenance Reports**: System health checks
   - **Status Reports**: Executive summaries
5. Identify reports older than 30 days (archival candidates)
6. Identify reports older than 7 days (review priority)

**Output**:
```
Report Inventory:
- Total reports: [count]
- Audit reports: [count]
- Completion reports: [count]
- Age distribution: 0-7 days ([count]), 7-30 days ([count]), 30+ days ([count])
- Archival candidates: [list]
```

**Guidelines Referenced**:
- `/guidelines/development/prompt-trigger-words.md` — Orchestrator execution patterns
- `/reports/cleanup-2026-03-13.md` — Archive schedule (30 days)

---

### **Phase 2: Audit Report Processing** (15-20 min)

**Objective**: Extract violations, issues, and action items from audit reports

**Tasks**:
1. Read all audit reports (e.g., `*-audit-*.md`, `*-violations-*.md`, `*-issues-*.md`)
2. For each audit report:
   - Extract violations list (sections with "❌", "⚠️", "Issues", "Violations")
   - Extract recommendations (sections with "Recommendations", "Next Steps", "Action Items")
   - Check if violations reference specific files/line numbers
   - Verify if violations still exist in codebase
3. Create verification checklist:
   - Read referenced files
   - Check if issues are still present
   - Mark as "RESOLVED" or "ACTIVE"
4. Categorize active violations by priority:
   - **P0 (Critical)**: Breaks functionality, accessibility violations
   - **P1 (High)**: UX issues, performance problems, design inconsistencies
   - **P2 (Medium)**: Polish, optimization opportunities
   - **P3 (Low)**: Nice-to-have improvements

**Output**:
```
Active Violations:
- P0: [count] violations
- P1: [count] violations  
- P2: [count] violations
- P3: [count] violations

Resolved Violations: [count]
Reports Ready for Archive: [list]
```

**Guidelines Referenced**:
- `/guidelines/development/TASK-MANAGEMENT.md` — Priority classification
- `/guidelines/rooi-rose/quality-checklist.md` — Acceptance criteria

---

### **Phase 3: Task List Creation/Update** (12-15 min)

**Objective**: Create new task lists or update existing ones based on report findings

**Tasks**:
1. For each category of active violations:
   - Check if related task list exists in `/tasks/`
   - If exists: Update with new items from reports
   - If not exists: Create new task list file
2. Task list file naming: `[category]-tasks-[date].md`
3. Task list structure:
   ```markdown
   # [Category] Tasks
   
   **Created**: YYYY-MM-DD
   **Source**: [Report filename(s)]
   **Priority**: P0/P1/P2/P3
   **Status**: X/Y tasks complete
   
   ## Tasks
   
   ### Task 1: [Description]
   - [ ] Subtask 1
   - [ ] Subtask 2
   
   **File**: `/path/to/file.tsx`
   **Acceptance Criteria**: [Criteria]
   ```
4. Cross-reference with existing task lists:
   - `/tasks/CURRENT-TASKS.md` — Current shop/advertising work
   - `/tasks/master-task-list.md` — Master tracking
   - `/tasks/task-list.md` — Quick task list
5. Update existing task lists with:
   - New findings from reports
   - Completion status updates
   - Archive completed tasks

**Output**:
```
Task Lists Created: [count]
Task Lists Updated: [count]
Total Active Tasks: [count]
```

**Guidelines Referenced**:
- `/guidelines/development/TASK-MANAGEMENT.md` — Task list templates
- `/tasks/master-task-list.md` — Master task tracking format

---

### **Phase 4: Completion Verification** (8-10 min)

**Objective**: Verify completed reports can be safely archived

**Tasks**:
1. Read completion reports (e.g., `*-complete-*.md`, `*-completion-*.md`)
2. For each completion report:
   - Extract list of completed items
   - Verify completion claims:
     - Check if files exist
     - Verify implementation matches claims
     - Check for any unresolved TODOs/FIXMEs in completed files
3. Cross-check with task lists:
   - Ensure related task list is marked complete
   - Update master task list if needed
4. Mark verified completion reports for archival:
   - Older than 7 days + 100% verified = ready to archive
   - Create archive destination: `/reports/archived/YYYY-MM/`

**Output**:
```
Completion Reports Verified: [count]
Ready for Archive: [list]
Unverified Claims: [count]
```

**Guidelines Referenced**:
- `/reports/cleanup-2026-03-13.md` — Archive procedures
- `/tasks/master-task-list.md` — Completion tracking

---

### **Phase 5: Master Task List Update** (5-8 min)

**Objective**: Update master task list with current priorities

**Tasks**:
1. Read `/tasks/master-task-list.md`
2. Update active tasks section:
   - Add new task lists from Phase 3
   - Update completion percentages
   - Archive 100% complete task lists
3. Update archived tasks section:
   - Move completed task lists to archive section
   - Record completion dates
4. Update overview metrics:
   - Total active tasks
   - Total archived tasks
   - Current priority breakdown (P0/P1/P2/P3)
5. Update "Next Steps" section with immediate priorities
6. Update "Last Updated" timestamp

**Output**:
```
Master Task List Updated:
- Active task lists: [count]
- Archived task lists: [count]
- Total tasks: [count]
- Next priority: [Task name]
```

**Guidelines Referenced**:
- `/tasks/master-task-list.md` — Current format
- `/guidelines/development/TASK-MANAGEMENT.md` — Task management workflow

---

### **Phase 6: Report Archive Execution** (3-5 min)

**Objective**: Archive verified completed reports

**Tasks**:
1. For each report marked for archival:
   - Determine archive destination: `/reports/archived/YYYY-MM/`
   - Create archive directory if needed
   - Move report to archive (or note for manual move if restricted)
2. Update report index (if exists)
3. Update Guidelines.md quick reference links (if any archived reports are referenced)
4. Create archive log entry:
   ```
   Archived YYYY-MM-DD:
   - [report-name.md] → /reports/archived/YYYY-MM/
   ```

**Output**:
```
Reports Archived: [count]
Archive Directories Created: [count]
Active Reports Remaining: [count]
```

**Note**: If file deletion/moving is restricted in Figma Make environment, generate manual commands for user execution.

**Guidelines Referenced**:
- `/reports/cleanup-2026-03-13.md` — Archive schedule and procedures

---

### **Phase 7: Summary & Next Actions** (5-7 min)

**Objective**: Generate comprehensive summary report

**Tasks**:
1. Create summary report: `/reports/report-processing-[date].md`
2. Include:
   - Total reports processed
   - Active violations found (by priority)
   - Task lists created/updated
   - Reports archived
   - Master task list status
   - Immediate next actions (top 3 priorities)
3. Update `/tasks/task-list.md` with current priorities
4. Update `/Guidelines.md` if new task lists created
5. Generate user-facing summary:
   ```
   ## Process Reports Complete
   
   **Processed**: [count] reports
   **Active Issues**: [count] (P0: X, P1: Y, P2: Z)
   **Task Lists**: [count] created, [count] updated
   **Next Action**: [Priority task]
   
   See: /reports/report-processing-[date].md for details
   ```

**Output**: Final summary report + console output

**Guidelines Referenced**:
- `/prompts/cleanup.md` — Summary report format
- `/guidelines/development/prompt-trigger-words.md` — User-facing output standards

---

## 🔧 **EXECUTION WORKFLOW**

```
1. User types: "process-reports"
2. AI reads this orchestrator (/prompts/process-reports.md)
3. Execute Phases 1-7 sequentially
4. Generate summary report
5. Update Guidelines.md with completion timestamp
6. Output: Summary + next recommended action
```

---

## 📊 **SUCCESS CRITERIA**

- ✅ All reports in `/reports/` reviewed and classified
- ✅ All active violations extracted and verified
- ✅ Task lists created/updated for all unresolved items
- ✅ Completed reports verified and archived (or flagged for archive)
- ✅ Master task list reflects current state
- ✅ Summary report generated
- ✅ User knows exact next action

---

## 🔗 **RELATED GUIDELINES**

### **Core References**
- `/guidelines/development/TASK-MANAGEMENT.md` — Task list templates and workflow
- `/guidelines/development/prompt-trigger-words.md` — Orchestrator execution patterns
- `/guidelines/rooi-rose/quality-checklist.md` — Acceptance criteria and standards

### **Task Management**
- `/tasks/master-task-list.md` — Master task tracking format
- `/tasks/CURRENT-TASKS.md` — Current active work (shop/advertising)
- `/tasks/task-list.md` — Quick task list

### **Report References**
- `/reports/cleanup-2026-03-13.md` — Archive procedures, 30-day schedule
- `/reports/project-status-summary-2026-03-12.md` — Project completion metrics
- `/reports/next-actions-2026-03-12.md` — Priority framework

### **Brand & Quality**
- `/guidelines/rooi-rose/brand-guidelines.md` — Brand standards for task content
- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` — Design system compliance criteria
- `/guidelines/wordpress-migration/visual-qa-checklist.md` — QA standards for completed tasks

### **Process Documentation**
- `/prompts/cleanup.md` — Complementary maintenance orchestrator
- `/prompts/continue.md` — Task continuation orchestrator
- `/guidelines/development/ORCHESTRATOR-DEVELOPMENT.md` — Orchestrator best practices (if exists)

---

## 📝 **VALIDATION CHECKLIST**

Before marking orchestrator complete, verify:

- [ ] Phase 1: All reports inventoried and classified
- [ ] Phase 2: All audit reports processed, violations verified
- [ ] Phase 3: Task lists created/updated correctly
- [ ] Phase 4: Completion reports verified
- [ ] Phase 5: Master task list updated
- [ ] Phase 6: Reports archived (or archive commands provided)
- [ ] Phase 7: Summary report generated
- [ ] Guidelines.md updated with new task lists (if any)
- [ ] User receives clear next action

---

## 🎯 **EXAMPLE OUTPUTS**

### **Phase 1 Output**
```
📊 Report Inventory Complete

Total Reports: 43
- Audit Reports: 8
- Completion Reports: 12
- Progress Reports: 10
- Maintenance Reports: 3
- Status Reports: 10

Age Distribution:
- 0-7 days: 5 reports (current)
- 7-30 days: 38 reports (active)
- 30+ days: 0 reports (none ready for archive)

Next: Phase 2 — Processing audit reports...
```

### **Phase 2 Output**
```
🔍 Audit Report Processing Complete

Reports Processed: 8
Active Violations Found: 23
- P0 (Critical): 2 violations
- P1 (High): 8 violations
- P2 (Medium): 10 violations
- P3 (Low): 3 violations

Resolved Violations: 47
Reports Verified Complete: 4

Next: Phase 3 — Creating task lists...
```

### **Phase 3 Output**
```
📋 Task Lists Updated

Task Lists Created: 2
- accessibility-improvements-2026-03-13.md (P1, 8 tasks)
- performance-optimization-2026-03-13.md (P2, 10 tasks)

Task Lists Updated: 1
- CURRENT-TASKS.md (updated completion status)

Total Active Tasks: 29

Next: Phase 4 — Verifying completions...
```

### **Final Summary**
```
✅ PROCESS REPORTS COMPLETE

**Metrics**:
- Reports Processed: 43
- Active Issues: 23 (P0: 2, P1: 8, P2: 12, P3: 1)
- Task Lists: 2 created, 1 updated
- Reports Archived: 0 (all < 30 days)
- Master Task List: Updated

**Immediate Next Actions**:
1. P0: Fix accessibility violations (2 tasks)
2. P1: Address advertising page rebranding (8 tasks)
3. P2: Optimize performance (10 tasks)

**Recommended Command**: `continue` (to resume Task 2.5 - Sponsorships Page)

📄 Full Report: /reports/report-processing-2026-03-13.md
```

---

## 🔄 **INTEGRATION WITH OTHER ORCHESTRATORS**

This orchestrator works in conjunction with:

1. **`cleanup` orchestrator** (`/prompts/cleanup.md`):
   - Cleanup handles filesystem, imports, DevTools
   - Process-reports handles report analysis and task creation
   - Run together: `cleanup && process-reports` for comprehensive maintenance

2. **`continue` orchestrator** (`/prompts/continue.md`):
   - Process-reports identifies tasks
   - Continue executes tasks
   - Workflow: `process-reports` → (review) → `continue`

3. **Future orchestrators**:
   - Could trigger `process-reports` after major completion milestones
   - Could auto-run weekly as part of maintenance schedule

---

## ⚙️ **CONFIGURATION OPTIONS**

### **Archive Threshold**
Default: 30 days (per `/reports/cleanup-2026-03-13.md`)

To customize:
```markdown
Archive reports older than: [X] days
```

### **Priority Classification**
Default: P0 (Critical), P1 (High), P2 (Medium), P3 (Low)

Customize in Phase 2 based on project needs.

### **Report Types**
Default types: Audit, Completion, Progress, Maintenance, Status

Add new types in Phase 1 classification as needed.

---

## 📚 **MAINTENANCE NOTES**

**Version History**:
- v1.0.0 (2026-03-13): Initial orchestrator creation

**Known Limitations**:
- Cannot physically delete/move files in Figma Make (generates manual commands)
- Requires manual verification for complex violations
- Report parsing assumes markdown structure

**Future Enhancements**:
- Auto-detect report types from content (not just filename)
- AI-powered violation verification (check if code still has issue)
- Integration with GitHub Issues for task tracking
- Automated weekly scheduling

---

**Created by**: Figma Make AI  
**Last Updated**: 2026-03-13  
**Trigger Word**: `process-reports`  
**Related Commands**: `cleanup`, `continue`
