# Continue Prompt — Task Resumption Helper

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Purpose**: Simple prompt to resume work on active task lists  
**Trigger Word**: `continue`

---

## 🎯 **MISSION**

**Resume work on the next logical task** from the active task list in `/tasks/` folder. This prompt gets the AI back on track quickly after interruptions, new sessions, or context switches.

---

## 📋 **EXECUTION STEPS**

Execute these steps **in sequence**:

### Step 1: Read Master Task Status (30 seconds)

Read `/tasks/task-list.md` to determine:
- Which task lists are active (`[ ]` = Todo, `[~]` = In Progress)
- Which task lists are blocked (`[!]` = Blocked)
- Which task lists point to other task files

**Output**: Identify the **primary active task list file**.

---

### Step 2: Read Primary Task List (1 minute)

Read the identified task list file (e.g., `/tasks/CURRENT-TASKS.md`).

Scan for:
- **Current status** (how many tasks complete vs remaining)
- **Next recommended task** (look for "NEXT TASK" markers or task execution order section)
- **Blocked tasks** (skip these)
- **Priority flags** (P0 = critical, P1 = high, P2 = medium, P3 = low)

**Output**: Identify the **single next task to execute**.

---

### Step 3: Confirm Task with User (10 seconds)

Before starting work, briefly tell the user:

```
I found the next task: [Task Name]
File: [File Path]
Priority: [P0/P1/P2/P3]
Estimated time: [X minutes/hours]

I'll start working on this now. Let me know if you'd prefer a different task.
```

**Wait 3 seconds** for user confirmation (assume yes if no response).

---

### Step 4: Execute the Task (varies)

Follow the task's **Required Changes** checklist:

1. Read the file(s) mentioned in the task
2. Make the required changes using `fast_apply_tool` or `edit_tool`
3. Verify changes by reading the modified file
4. Check off each sub-task as you complete it
5. Test for TypeScript errors (if applicable)

---

### Step 5: Update Task Status (2 minutes)

After completing the task:

1. Update the task list file — mark task as complete (`[x]`)
2. Update task counts (e.g., "2/11 complete" → "3/11 complete")
3. Update completion percentage
4. Update "Last Updated" timestamp

---

### Step 6: Brief Summary (30 seconds)

Tell the user what you completed:

```
✅ Task [X.X] complete: [Task Name]

Changes made:
- [File 1]: [Brief description]
- [File 2]: [Brief description]

Next task: [Task Y.Y] — [Task Name]
Type "continue" to proceed, or let me know if you need something else.
```

---

## 🎯 **DECISION TREE**

### If `/tasks/task-list.md` points to another file:
→ Read that file and identify next task

### If primary task list has 0 open tasks:
→ Tell user: "All tasks in [task list name] are complete! Should I run the cleanup prompt or is there another priority?"

### If all tasks are blocked:
→ Tell user: "All remaining tasks are blocked. Blockers: [list]. What would you like me to work on instead?"

### If task list is unclear:
→ Read `/tasks/CURRENT-TASKS.md` (fallback)  
→ Read `/Guidelines.md` "Current Focus" section (second fallback)  
→ Ask user: "I couldn't find an active task list. What should I work on?"

---

## 📝 **TASK PRIORITY SYSTEM**

When multiple tasks are available, prioritize:

1. **P0 (Critical)** — Blockers, broken functionality, deployment issues
2. **P1 (High)** — Core features, user-facing improvements
3. **P2 (Medium)** — Nice-to-have features, documentation updates
4. **P3 (Low)** — Optimizations, refactoring, cleanup

Within same priority level, use **task execution order** section in task list.

---

## 🛡️ **PROTECTED FILES**

When working on tasks, **NEVER** modify these files without explicit task instructions:

- `/src/main.tsx` — React entrypoint
- `/src/app/App.tsx` — Root component
- `/src/app/routes.tsx` — Route definitions (unless task specifically requires route changes)
- `/vite.config.ts` — Build config
- `/package.json` — Dependencies (unless installing new packages)
- `/Guidelines.md` — Master guidelines (only update completion statuses)
- `/CHANGELOG.md` — Changelog (only append, never delete)

See `/guidelines/development/dev-tools-protection.md` for complete list.

---

## ⚠️ **FIGMA MAKE ENVIRONMENT NOTES**

**You are working in the Figma Make environment**. Remember:

- ❌ **DO NOT** tell the user to "refresh your browser" — changes are live instantly
- ❌ **DO NOT** tell the user to "clear your cache" — not applicable in Figma Make
- ❌ **DO NOT** tell the user to "run npm install" — use `install_package` tool instead
- ❌ **DO NOT** tell the user to "restart the dev server" — no dev server exists
- ❌ **DO NOT** tell the user to "check the console" — you cannot see the browser console
- ✅ **DO** use tool calls to read, write, and edit files directly
- ✅ **DO** verify changes by reading files after modification
- ✅ **DO** use `file_search` to validate imports and find files
- ✅ **DO** assume changes are immediately visible to the user

**If you encounter an error**:
1. Read the error message carefully
2. Check the file for issues (imports, syntax, TypeScript errors)
3. Fix the issue using `fast_apply_tool` or `edit_tool`
4. Verify the fix by reading the file again
5. Tell the user: "I fixed an error in [file]. The issue was [description]. Changes are live now."

---

## 📚 **FALLBACK TASK SOURCES**

If `/tasks/task-list.md` doesn't exist or is empty, check these files **in order**:

1. `/tasks/CURRENT-TASKS.md` — Most recent task list
2. `/tasks/master-task-list.md` — Master task tracking
3. `/Guidelines.md` — Look for "Current Focus" or "Next Steps" section
4. `/CHANGELOG.md` — Look for "Unreleased" → "In Progress" section
5. Ask user: "I couldn't find an active task list. What would you like me to work on?"

---

## 🎯 **SUCCESS CRITERIA**

Continue prompt is **successful** when:

- ✅ You identified the correct next task within 2 minutes
- ✅ You confirmed the task with the user before starting
- ✅ You completed the task according to its checklist
- ✅ You updated the task list status
- ✅ You provided a brief completion summary
- ✅ You told the user what the next task is

---

## 💬 **EXAMPLE EXECUTION**

**User types**: `continue`

**AI Response**:

```
Reading /tasks/task-list.md...

Found active task list: /tasks/CURRENT-TASKS.md
Status: 2/11 tasks complete (18%)

Next task: Task 2.1 — Update Classifieds Page
File: /src/app/pages/advertise/ClassifiedsPage.tsx
Priority: P1
Estimated time: 20-30 minutes

This task updates the Classifieds page from newspaper to magazine context.

I'll start working on this now. Let me know if you'd prefer a different task.

[Proceeds to execute task...]
```

---

## 🔄 **WHEN TO USE THIS PROMPT**

Use `continue` when:

1. **Starting a new session** — Pick up where you left off
2. **After an interruption** — Get back on track quickly
3. **After completing a task** — Move to the next task seamlessly
4. **When context is lost** — Reorient to the current priorities
5. **After running `cleanup`** — Resume work after maintenance

---

## 🔗 **COMPLEMENTARY PROMPTS**

- Run **`cleanup`** first if you need to:
  - Archive completed task lists
  - Update documentation statuses
  - Sync DevTools data
  - Clean up filesystem

- Run **`continue`** after cleanup to resume work

**Recommended workflow**:
1. Every 2-3 weeks: `cleanup`
2. After cleanup: `continue`
3. Daily work sessions: `continue`

---

## 📝 **TASK LIST FILE STRUCTURE**

When reading task lists, expect this structure:

```markdown
# Task List Name

**Status**: X/Y tasks complete (Z%)
**Priority**: P0/P1/P2/P3

## Task X.X: Task Name

**Priority**: P1
**Status**: [ ] Not Started | [~] In Progress | [x] Complete | [!] Blocked
**File**: /path/to/file.tsx

**Required Changes**:
- [ ] Sub-task 1
- [ ] Sub-task 2
- [ ] Sub-task 3

**Acceptance Criteria**:
- Criterion 1
- Criterion 2
```

**Status markers**:
- `[ ]` = Todo (not started)
- `[~]` = In Progress (partially complete)
- `[x]` = Done (100% complete)
- `[!]` = Blocked (cannot proceed)

---

## 🎯 **QUICK REFERENCE**

| Situation | Action |
|:----------|:-------|
| Task list has open tasks | Execute next task in sequence |
| All tasks complete | Ask user: run cleanup or new priority? |
| All tasks blocked | List blockers, ask for alternative |
| Multiple P0 tasks | Pick first P0 in execution order |
| Task list not found | Check fallback sources, then ask user |
| Task unclear | Read task requirements, ask for clarification |
| File doesn't exist | Create file following task template |
| TypeScript errors | Fix errors, verify with file read |

---

## 💡 **TIPS FOR EFFECTIVE CONTINUATION**

1. **Always read before writing** — Understand current file state
2. **Use fast_apply_tool for edits** — More reliable than edit_tool
3. **Verify changes** — Read file after modification to confirm
4. **Check off sub-tasks** — Update task list as you work
5. **Test as you go** — Don't wait until the end to check for errors
6. **Brief summaries** — 2-3 sentences max, user can ask for details
7. **Suggest next steps** — Tell user what's next after each task

---

## 🔧 **TROUBLESHOOTING**

### Problem: "I can't find the next task"
**Solution**: 
1. Read `/tasks/task-list.md`
2. If empty, read `/tasks/CURRENT-TASKS.md`
3. If still unclear, read `/Guidelines.md` "Current Focus"
4. Ask user: "What should I work on?"

### Problem: "The task file doesn't exist"
**Solution**: 
1. Check if task list has typo in filename
2. Use `file_search` to find similar filenames
3. Ask user: "I couldn't find [file]. Should I create it or is there a different file?"

### Problem: "I don't understand the task requirements"
**Solution**: 
1. Read related guideline files (check task's "Related Files" section)
2. Read similar completed files for reference
3. Ask user: "I need clarification on [specific requirement]. Could you explain [question]?"

### Problem: "The task is blocked"
**Solution**: 
1. Note the blocker in task status
2. Skip to next unblocked task
3. Tell user: "Task X.X is blocked by [reason]. Continuing with Task Y.Y instead."

---

**Version History**:
- **v1.0.0** (2026-03-13) — Initial creation with simple 6-step workflow

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-13
