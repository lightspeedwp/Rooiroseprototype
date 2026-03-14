# Orchestrator Prompts — Overview

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Purpose**: Central directory for all orchestrator prompts and trigger word commands  
**Maintained by**: rooi rose Development Team

---

## 📋 **WHAT ARE ORCHESTRATOR PROMPTS?**

Orchestrator prompts are **comprehensive, self-contained instruction files** that guide the AI through complex multi-step workflows. They act as "runbooks" for:

- **Project maintenance** (cleanup, audits, synchronization)
- **Task continuation** (resuming work after interruptions)
- **System validation** (checking for broken imports, missing routes)
- **Documentation updates** (syncing Guidelines.md, CHANGELOG.md, DevTools)

Each orchestrator prompt can be **triggered with a single word command** for maximum efficiency.

---

## ⚡ **ACTIVE TRIGGER WORDS**

| Trigger | Prompt | Duration | Purpose | Frequency |
|:--------|:-------|:---------|:--------|:----------|
| `cleanup` | [cleanup.md](cleanup.md) | 60-80 min | Comprehensive project maintenance & audit | Every 2-3 weeks |
| `continue` | [continue.md](continue.md) | Varies | Resume work on next logical task | Daily/as needed |

---

## 📁 **PROMPT FILES IN THIS DIRECTORY**

### Active Prompts

#### 1. cleanup.md
**Trigger**: `cleanup`  
**Purpose**: One-session comprehensive project maintenance  
**Phases**: 7 (Filesystem, Imports, Tasks, Documentation, DevTools, Sitemap, Changelog)  
**Output**: Cleanup report in `/reports/cleanup-YYYY-MM-DD.md`

**When to run**:
- After completing major phases (e.g., Phase 13 Editorial Redesign)
- Every 2-3 weeks as regular maintenance
- Before production deployment
- When filesystem feels cluttered with old reports/tasks

**What it does**:
1. ✅ Audits filesystem for orphaned files
2. ✅ Validates all imports and routes (fixes broken imports)
3. ✅ Archives completed task lists and outdated reports
4. ✅ Updates Guidelines.md, CHANGELOG.md, README.md
5. ✅ Syncs DevTools data (pattern counts, template counts, etc.)
6. ✅ Updates sitemap with new routes
7. ✅ Creates comprehensive cleanup report

**Protected files**: See [dev-tools-protection.md](/guidelines/development/dev-tools-protection.md)

---

#### 2. continue.md
**Trigger**: `continue`  
**Purpose**: Simple task resumption helper  
**Phases**: 6 steps (Read task list, Identify next task, Confirm, Execute, Update status, Summarize)  
**Output**: Updated task list with completion status

**When to run**:
- Starting a new work session
- After an interruption or context switch
- After completing a task (to move to next task seamlessly)
- After running `cleanup` (to resume work)

**What it does**:
1. ✅ Reads `/tasks/task-list.md` to find active task list
2. ✅ Identifies next task in execution order
3. ✅ Confirms task with user before starting
4. ✅ Executes task according to its checklist
5. ✅ Updates task status to complete
6. ✅ Tells user what the next task is

**Fallback sources**: CURRENT-TASKS.md → master-task-list.md → Guidelines.md → Ask user

---

### Legacy Prompts (Reference Only)

These orchestrator prompts were used for specific one-time projects and are now **archived for reference**:

- `rooi-rose-redesign-orchestrator.md` — 6-phase magazine redesign (2026-03-11)
- `rooi-rose-content-architecture-orchestrator.md` — Content navigation structure (2026-03-11)
- `performance-optimization-orchestrator.md` — 7-audit performance review (2026-03-04)
- `system-stability-audit-orchestrator.md` — 7-audit system health check (2026-03-04)
- `theme-alignment-audit-orchestrator.md` — WordPress theme compliance (2026-03-04)
- `comprehensive-theme-audit-orchestrator.md` — Master audit orchestrator (2026-03-04)
- `block-pattern-validation-orchestrator.md` — 235-file validation (2026-03-04)
- `guidelines-cleanup-orchestrator.md` — Guidelines directory cleanup (2026-03-03)
- `new-templates-patterns-orchestrator.md` — Template documentation (2026-03-04)
- `dev-tools-filtering-enhancement-orchestrator.md` — DevTools filters (2026-03-02)

**Status**: All legacy orchestrators are **100% complete**. They remain in this directory for:
- Historical reference (how was this project done?)
- Template reuse (copy structure for new orchestrators)
- Audit trail (what steps were taken?)

---

## 🎯 **HOW TO USE TRIGGER WORDS**

### Simple Usage (Recommended)

Just type the trigger word:

```
cleanup
```

The AI will:
1. Recognize the trigger word
2. Read the corresponding prompt file
3. Execute all steps in one session
4. Create required reports
5. Tell you what was accomplished

### Explicit Usage (If Needed)

If the trigger word doesn't work, use explicit instruction:

```
Execute the cleanup orchestrator prompt from /prompts/cleanup.md.
Run all 7 phases in a single session.
```

---

## 📚 **SUPPORTING GUIDELINES**

Before creating or using orchestrator prompts, review:

| Guideline | Purpose |
|:----------|:--------|
| [prompt-trigger-words.md](/guidelines/development/prompt-trigger-words.md) | How trigger words work, how to create new triggers |
| [report-creation-guidelines.md](/guidelines/development/report-creation-guidelines.md) | Report naming, structure, lifecycle |
| [task-management-guidelines.md](/guidelines/development/task-management-guidelines.md) | Task list creation, status tracking, archiving |
| [file-organization.md](/guidelines/development/file-organization.md) | Where files go, protected files, changelog format |
| [dev-tools-protection.md](/guidelines/development/dev-tools-protection.md) | Files that must NEVER be deleted |

---

## 🔧 **CREATING NEW ORCHESTRATOR PROMPTS**

### Step 1: Identify the Need
Ask:
- Is this a **recurring task** (cleanup, sync) or **one-time project** (migration, refactor)?
- Would a **single-word trigger** make this easier?
- Does this replace a **multi-step manual process**?

If yes to any: create an orchestrator prompt.

### Step 2: Choose a Template
Use these as templates:
- **Recurring maintenance** → Copy [cleanup.md](cleanup.md) structure
- **Task continuation** → Copy [continue.md](continue.md) structure
- **One-time audit** → Copy any legacy orchestrator (e.g., `system-stability-audit-orchestrator.md`)

### Step 3: Define the Workflow
1. **Mission statement** — What does this orchestrator do? (1-2 sentences)
2. **Execution checklist** — All steps with checkboxes
3. **Success criteria** — How do you know it's 100% complete?
4. **Protected files** — What must NOT be modified/deleted?
5. **Output requirements** — What reports/updates are created?

### Step 4: Create the File
```
/prompts/[descriptive-name]-orchestrator.md
```

**Filename rules**:
- Lowercase, hyphen-separated
- Ends with `-orchestrator.md` (for audits/migrations)
- Or just `[trigger].md` (for trigger word commands like `cleanup.md`)

### Step 5: Add Trigger Word (Optional)
If this should be triggerable with a single word:

1. Add entry to [prompt-trigger-words.md](/guidelines/development/prompt-trigger-words.md)
2. Add entry to [Guidelines.md](/guidelines/Guidelines.md) Quick Commands table
3. Document the trigger in this README

### Step 6: Test & Document
1. **Test execution** — Run the prompt manually, verify all steps work
2. **Test trigger** — Type trigger word, verify AI executes correctly
3. **Document outcomes** — Add to this README's reference table
4. **Create example report** — Show what the output looks like

---

## 📊 **PROMPT METRICS**

Track these metrics for each orchestrator execution:

### cleanup.md Metrics
- Files deleted: X
- Files archived: Y
- Broken imports fixed: Z
- Documentation updates: W files
- DevTools synced: X browsers
- Duration: Y minutes
- Health score: 0-100%

### continue.md Metrics
- Task identified: Task X.X
- Task priority: P0/P1/P2/P3
- Task duration: X minutes
- Files modified: Y files
- Tasks remaining: Z tasks

---

## 🎯 **BEST PRACTICES**

### For Creating Prompts
1. **Single session design** — Prompt should complete in ONE session (don't require follow-ups)
2. **Clear success criteria** — Define exactly when the prompt is 100% done
3. **Comprehensive checklists** — Every step should have a checkbox
4. **Protected file guards** — Explicitly list files that must NOT be touched
5. **Output requirements** — Specify exactly what reports/updates are created
6. **Figma Make notes** — Remind AI about environment limitations (no "refresh browser")

### For Using Prompts
1. **Trust the workflow** — Let the prompt run to completion
2. **Review reports** — Always check the generated reports for accuracy
3. **Run regularly** — Cleanup every 2-3 weeks, continue daily
4. **Update as needed** — If workflow changes, update the prompt file
5. **Archive when obsolete** — Move completed one-time orchestrators to `/prompts/archived/`

### For Maintaining Prompts
1. **Keep updated** — Review quarterly, update as project evolves
2. **Test before deploying** — Always test new prompts before documenting
3. **Version control** — Add version history section to each prompt
4. **Cross-reference** — Link to supporting guidelines (file-organization, task-management, etc.)

---

## 🔄 **PROMPT LIFECYCLE**

### Creation
1. Identify recurring workflow or complex one-time project
2. Create prompt file in `/prompts/`
3. Define trigger word (if applicable)
4. Add to this README and Guidelines.md
5. Test execution

### Active Period
- Prompt lives in `/prompts/` (root level)
- Used regularly (recurring) or until project complete (one-time)
- Updated as workflow evolves

### Archive Period (One-Time Prompts Only)
1. After project 100% complete, move to `/prompts/archived/YYYY-MM/`
2. Update links in Guidelines.md to archived location
3. Keep for historical reference and template reuse

### Permanent (Recurring Prompts)
- Never archive `cleanup.md`, `continue.md` (always active)
- Update in place as project needs evolve
- Increment version number with each major update

---

## 📝 **PROMPT VERSION CONTROL**

Each prompt should include a version history section:

```markdown
**Version History**:
- **v1.0.0** (2026-03-13) — Initial creation
- **v1.1.0** (2026-04-01) — Added Phase 8 (Database sync)
- **v2.0.0** (2026-05-15) — Complete rewrite for new workflow
```

Use **semantic versioning**:
- **Major** (v2.0.0) — Complete rewrite or workflow change
- **Minor** (v1.1.0) — New phase/step added
- **Patch** (v1.0.1) — Bug fix or clarification

---

## 🔗 **RELATED DOCUMENTATION**

- [Guidelines.md](/guidelines/Guidelines.md) — Master guidelines with Quick Commands table
- [Prompt Trigger Words](/guidelines/development/prompt-trigger-words.md) — How to create and use triggers
- [Report Creation Guidelines](/guidelines/development/report-creation-guidelines.md) — Report standards
- [Task Management Guidelines](/guidelines/development/task-management-guidelines.md) — Task list standards
- [File Organization](/guidelines/development/file-organization.md) — File placement rules

---

## 💡 **OPTIMIZATION OPPORTUNITIES**

### Current System Strengths
✅ **Single-word triggers** — Fast, easy to remember  
✅ **Comprehensive prompts** — All steps documented  
✅ **One-session execution** — No follow-up needed  
✅ **Protected file guards** — Prevents accidental deletions  
✅ **Figma Make compatibility** — Environment-aware instructions

### Potential Improvements
🔧 **Add more triggers** — `audit`, `sync`, `deploy`, `migrate`  
🔧 **Nested orchestrators** — `cleanup` could call `sync` as sub-task  
🔧 **Progress indicators** — Real-time % complete during execution  
🔧 **Dry-run mode** — Preview what cleanup will do before executing  
🔧 **Rollback prompts** — Undo cleanup changes if needed  
🔧 **Scheduled execution** — Auto-run cleanup every 2 weeks  
🔧 **Health dashboard** — Show project health score (0-100%)

### Advanced Trigger Features
💡 **Parameterized triggers** — `cleanup --quick` (skip phases 4-7)  
💡 **Conditional execution** — Skip phase if no changes needed  
💡 **Parallel execution** — Run phases 1-3 simultaneously  
💡 **Smart scheduling** — Auto-detect when cleanup is needed  
💡 **Integration with GitHub** — Auto-commit cleanup changes  

---

## 🎯 **QUICK REFERENCE**

**To run cleanup**:
```
cleanup
```

**To resume work**:
```
continue
```

**To create a new orchestrator**:
1. Copy template from existing prompt
2. Create `/prompts/[name]-orchestrator.md`
3. Define workflow and success criteria
4. Add trigger word to [prompt-trigger-words.md](/guidelines/development/prompt-trigger-words.md)
5. Test execution

**To archive a completed orchestrator**:
1. Verify project 100% complete
2. Move to `/prompts/archived/YYYY-MM/`
3. Update links in Guidelines.md

---

**Maintained by**: rooi rose Development Team  
**Last Updated**: 2026-03-13  
**Next Review**: 2026-04-01 (add new triggers if needed)

**Version History**:
- **v1.0.0** (2026-03-13) — Initial README with cleanup/continue prompts
