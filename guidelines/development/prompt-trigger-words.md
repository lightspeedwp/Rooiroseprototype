# Prompt Trigger Words — AI Command System

**Version**: 1.0.0  
**Created**: 2026-03-13  
**Purpose**: Define trigger words that execute orchestrator prompts automatically  
**Target**: Figma Make AI assistant

---

## 🎯 **WHAT ARE TRIGGER WORDS?**

Trigger words are **single-word commands** that tell the AI to execute a specific orchestrator prompt with predefined parameters. They act like shortcuts to run complex multi-step workflows.

**Benefits**:
- ⚡ **Fast** — Type one word instead of explaining the full task
- 🎯 **Consistent** — Same workflow every time
- 📋 **Documented** — Each trigger has a full prompt spec
- 🔄 **Reusable** — Run maintenance tasks on a regular schedule

---

## 📚 **AVAILABLE TRIGGER WORDS**

### `cleanup`
**Purpose**: Execute comprehensive project maintenance  
**Prompt**: `/prompts/cleanup.md`  
**Duration**: 60-80 minutes (single session)  
**Frequency**: Every 2-3 weeks or after major completions

**What it does**:
1. Audits filesystem for orphaned files
2. Validates all imports and routes
3. Archives completed task lists and reports
4. Updates documentation (Guidelines.md, CHANGELOG.md, README.md)
5. Syncs DevTools data (pattern counts, template counts, etc.)
6. Updates sitemap with new routes
7. Creates cleanup report

**When to use**:
- After completing a major phase (e.g., Phase 13 Editorial Redesign)
- Every 2-3 weeks as regular maintenance
- Before production deployment
- When filesystem feels cluttered

**Example usage**:
```
User: cleanup
AI: [Executes /prompts/cleanup.md — runs all 7 phases in one session]
```

---

### `continue`
**Purpose**: Resume work on next logical task from active task list  
**Prompt**: `/prompts/continue.md`  
**Duration**: Varies (depends on next task)  
**Frequency**: Start of each work session

**What it does**:
1. Reads `/tasks/task-list.md` to find active task list
2. Reads active task list (e.g., `/tasks/CURRENT-TASKS.md`)
3. Identifies next task in execution order
4. Confirms task with user
5. Executes task according to its checklist
6. Updates task status to complete
7. Tells user what the next task is

**When to use**:
- Starting a new work session
- After an interruption or context switch
- After completing a task (to move to next task)
- After running `cleanup` (to resume work)

**Example usage**:
```
User: continue
AI: Found next task: Task 2.1 — Update Classifieds Page
    File: /src/app/pages/advertise/ClassifiedsPage.tsx
    Priority: P1
    
    I'll start working on this now.
    [Proceeds to execute task...]
```

---

## 🔧 **HOW TRIGGER WORDS WORK**

### Recognition Pattern

When the AI sees a **single lowercase word** that matches a trigger word, it should:

1. **Recognize the trigger** — Check if word matches defined triggers
2. **Load the prompt** — Read the corresponding `/prompts/[trigger].md` file
3. **Execute immediately** — Follow the prompt's instructions exactly
4. **Complete in one session** — Don't split into multiple sessions (unless prompt allows)

### Trigger Word Rules

**Valid trigger format**:
- ✅ Single word, lowercase: `cleanup`, `continue`
- ✅ Standalone (not part of a sentence): `cleanup` (not "please cleanup the files")

**Invalid trigger format**:
- ❌ Multiple words: `clean up`, `continue work`
- ❌ Capitalized: `Cleanup`, `CONTINUE`
- ❌ Part of sentence: "Can you cleanup the filesystem?" (use explicit instruction instead)

---

## 📋 **TRIGGER WORD REFERENCE TABLE**

| Trigger | Prompt | Duration | Frequency | Purpose |
|:--------|:-------|:---------|:----------|:--------|
| `cleanup` | `/prompts/cleanup.md` | 60-80 min | Every 2-3 weeks | Project maintenance & documentation sync |
| `continue` | `/prompts/continue.md` | Varies | Daily | Resume work on next task |

**Future triggers** (not yet implemented):
- `audit` — Run comprehensive system audit
- `sync` — Sync DevTools data only (subset of cleanup)
- `migrate` — Execute migration orchestrator
- `deploy` — Pre-deployment checklist

---

## 🎯 **CREATING NEW TRIGGER WORDS**

To add a new trigger word:

### Step 1: Create the Prompt
1. Create file in `/prompts/[trigger-name].md`
2. Use existing prompts (`cleanup.md`, `continue.md`) as templates
3. Include these sections:
   - Mission statement
   - Execution checklist
   - Success criteria
   - Figma Make environment notes
   - Related guidelines

### Step 2: Document the Trigger
1. Add entry to this guideline's reference table
2. Add entry to `/Guidelines.md` Quick Start section (if major trigger)
3. Create example usage section

### Step 3: Test the Trigger
1. Type the trigger word in a chat
2. Verify AI recognizes and executes the prompt
3. Verify AI completes all steps in one session (if required)
4. Verify AI creates appropriate reports/updates

### Step 4: Maintain the Trigger
1. Update prompt file when workflow changes
2. Update this guideline when adding/removing triggers
3. Archive obsolete triggers to `/prompts/archived/`

---

## ⚠️ **IMPORTANT NOTES FOR AI**

### When You See a Trigger Word

**DO**:
1. ✅ **Immediately recognize** the trigger word
2. ✅ **Read the corresponding prompt** from `/prompts/[trigger].md`
3. ✅ **Execute all steps** in the prompt exactly as written
4. ✅ **Complete in one session** (unless prompt specifies otherwise)
5. ✅ **Create required reports** as specified in prompt
6. ✅ **Update documentation** (Guidelines.md, CHANGELOG.md, task lists)
7. ✅ **Tell the user** when complete and what was accomplished

**DO NOT**:
1. ❌ **Ask for confirmation** before executing (triggers are pre-approved commands)
2. ❌ **Split into multiple sessions** (unless prompt explicitly allows)
3. ❌ **Skip steps** in the prompt checklist
4. ❌ **Modify the workflow** without user permission
5. ❌ **Forget to create reports** (required for audit trail)

### Figma Make Environment Reminders

When executing trigger prompts, remember:

- ❌ **DO NOT** tell user to "refresh browser" — changes are live instantly
- ❌ **DO NOT** tell user to "clear cache" — not applicable
- ❌ **DO NOT** tell user to "run npm install" — use `install_package` tool
- ❌ **DO NOT** tell user to "restart dev server" — no dev server exists
- ✅ **DO** use tool calls to read/write files directly
- ✅ **DO** verify changes by reading files after modification
- ✅ **DO** assume all changes are immediately visible

---

## 📊 **TRIGGER WORD METRICS**

Track these metrics for each trigger execution:

### Cleanup Trigger
- **Files deleted**: X files
- **Files archived**: Y files
- **Broken imports fixed**: Z imports
- **Documentation updates**: W files
- **Duration**: X minutes
- **Health score**: 0-100%

### Continue Trigger
- **Task identified**: Task X.X name
- **Task priority**: P0/P1/P2/P3
- **Task duration**: X minutes (estimated vs actual)
- **Files modified**: Y files
- **Status update**: X/Y tasks complete

---

## 🔗 **RELATED GUIDELINES**

Before creating or using trigger words, review:

- `/prompts/cleanup.md` — Cleanup orchestrator prompt
- `/prompts/continue.md` — Continue helper prompt
- `/guidelines/development/file-organization.md` — File placement rules
- `/guidelines/development/report-creation-guidelines.md` — Report standards
- `/guidelines/development/task-management-guidelines.md` — Task list standards
- `/guidelines/development/dev-tools-protection.md` — Protected files list

---

## 💡 **BEST PRACTICES**

### For Users
1. **Use triggers regularly** — `cleanup` every 2-3 weeks, `continue` daily
2. **Trust the workflow** — Triggers execute pre-tested procedures
3. **Review reports** — Check cleanup reports to see what changed
4. **Provide feedback** — Tell the team if a trigger isn't working well

### For AI
1. **Execute exactly as written** — Don't deviate from prompt instructions
2. **Complete in one session** — Don't ask to continue unless prompt allows
3. **Create all required outputs** — Reports, updates, documentation
4. **Verify all changes** — Read files after modification to confirm
5. **Update metrics** — Track and report what was accomplished

### For Maintainers
1. **Keep prompts updated** — Review and update workflows quarterly
2. **Test before deploying** — Always test new triggers before documenting
3. **Archive obsolete triggers** — Move old triggers to `/prompts/archived/`
4. **Document changes** — Update this guideline when adding/removing triggers

---

## 📝 **TRIGGER WORD CHANGELOG**

### v1.0.0 (2026-03-13)
- ✅ Created initial trigger word system
- ✅ Added `cleanup` trigger → `/prompts/cleanup.md`
- ✅ Added `continue` trigger → `/prompts/continue.md`
- ✅ Documented recognition pattern and execution rules

### Future Additions
- [ ] `audit` trigger — Comprehensive system audit
- [ ] `sync` trigger — DevTools data synchronization only
- [ ] `migrate` trigger — Execute migration orchestrators
- [ ] `deploy` trigger — Pre-deployment checklist

---

## 🎯 **QUICK REFERENCE**

**To run cleanup**:
```
cleanup
```
Result: 60-80 minute maintenance session (7 phases)

**To resume work**:
```
continue
```
Result: AI picks up next task from active task list

**To check what triggers exist**:
```
What trigger words are available?
```
Result: AI lists all triggers from this guideline

**To create a new trigger**:
1. Create `/prompts/[trigger-name].md`
2. Add to this guideline's reference table
3. Test execution
4. Document in Guidelines.md

---

**Related Files**:
- `/prompts/cleanup.md` — Cleanup orchestrator
- `/prompts/continue.md` — Continuation helper
- `/Guidelines.md` — Master guidelines (includes trigger word table)

---

**Version History**:
- **v1.0.0** (2026-03-13) — Initial creation with 2 core triggers

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-13
