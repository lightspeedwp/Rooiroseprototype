# Continue Prompt — Quick Resume Guide

**Purpose**: Use this prompt to get AI back on track with the current work  
**Last Updated**: 2026-03-13  
**Version**: 1.0

---

## 🚀 **SIMPLE CONTINUE PROMPT** (Copy & Paste)

```
Continue with the next logical task based on /tasks/CURRENT-TASKS.md. 
Read the active task list, identify the next incomplete task, 
and execute it according to the task description and acceptance criteria.
```

---

## 📋 **DETAILED CONTINUE PROMPT** (When You Need More Context)

```
I need you to continue work on the rooi rose project.

1. Read /tasks/CURRENT-TASKS.md to see active tasks
2. Read /tasks/FINAL-PROJECT-STATUS-2026-03-12.md for project context
3. Check Guidelines.md for project status and guidelines
4. Identify the next incomplete task with highest priority
5. Execute the task and update the task list progress
6. Create/update any necessary documentation
7. Confirm completion and next steps

Follow all guidelines in /guidelines/rooi-rose/ and maintain the 
existing design system (Playfair Display SC + Karla, #e01e12 brand red).
```

---

## 🎯 **TASK-SPECIFIC CONTINUE PROMPTS**

### For Shop Implementation
```
Continue implementing the rooi rose shop system. 
Check /tasks/CURRENT-TASKS.md for the next shop-related task.
Use square 1:1 product images, maintain magazine branding (Playfair Display SC),
and follow the design tokens in /guidelines/design-tokens/.
```

### For Advertising Pages
```
Continue updating advertising pages to rooi rose magazine context.
Check /tasks/CURRENT-TASKS.md for the next advertising page.
Update from newspaper to lifestyle magazine positioning,
maintaining editorial typography (Playfair Display SC headings).
```

### For Subscription Pages
```
Continue enhancing subscription pages to differentiate print vs e-edition.
Check /tasks/CURRENT-TASKS.md for the next subscription task.
Maintain WooCommerce compatibility and cart integration.
```

### For Documentation Updates
```
Continue updating documentation.
Check /tasks/CURRENT-TASKS.md for the next documentation task.
Update Guidelines.md, changelog, and any relevant guideline files
in /guidelines/rooi-rose/.
```

---

## 📁 **KEY FILES TO REFERENCE**

When resuming work, always check these files first:

1. **`/tasks/CURRENT-TASKS.md`** — Active task list (START HERE)
2. **`/tasks/FINAL-PROJECT-STATUS-2026-03-12.md`** — Project overview
3. **`/Guidelines.md`** — Project guidelines and status
4. **`/CHANGELOG.md`** — Recent changes
5. **`/guidelines/rooi-rose/brand-guidelines.md`** — Brand rules

---

## ✅ **TASK COMPLETION CHECKLIST**

After completing any task, always:

- [ ] Update task status in `/tasks/CURRENT-TASKS.md`
- [ ] Update `/CHANGELOG.md` if significant change
- [ ] Update `/Guidelines.md` if project status changed
- [ ] Test the implementation (visual check, no errors)
- [ ] Document any new patterns or components
- [ ] Confirm next task with user

---

## 🔄 **SESSION START WORKFLOW**

**At the start of each session:**

1. **Read Current Tasks**: Check `/tasks/CURRENT-TASKS.md`
2. **Read Project Status**: Check `/Guidelines.md` "Current Focus" section
3. **Identify Next Task**: Find highest priority incomplete task
4. **Confirm with User**: "I see the next task is [X]. Should I proceed?"
5. **Execute**: Complete the task following all guidelines
6. **Update & Report**: Update task list, report completion

---

## 🚨 **EMERGENCY RESUME PROMPT** (If Lost)

```
I need to resume work on the rooi rose project but I'm not sure where we are.

Please:
1. Read /tasks/CURRENT-TASKS.md
2. Read /Guidelines.md (Current Focus section)
3. Summarize the current status (what's complete, what's next)
4. Tell me what the next task is
5. Wait for my confirmation before proceeding

Do not make any changes yet - just give me a status summary.
```

---

## 📊 **TASK PRIORITY SYSTEM**

When choosing next task:

- **P0 (Critical)** — Blocking issues, must fix immediately
- **P1 (High)** — Important features, complete ASAP
- **P2 (Medium)** — Nice-to-have features, do when time permits
- **P3 (Low)** — Future enhancements, defer if needed

Always complete P0 tasks first, then P1, then P2, then P3.

---

## 💡 **QUICK TIPS**

### If Task List is Empty
```
No active tasks in /tasks/CURRENT-TASKS.md. 
Should I check Guidelines.md for new priorities or wait for instructions?
```

### If Multiple Tasks Available
```
I see 3 active tasks. Which should I prioritize?
1. [Task A] - Priority P1
2. [Task B] - Priority P2
3. [Task C] - Priority P0

I recommend starting with Task C (P0). Confirm?
```

### If Task is Unclear
```
The task "[task name]" is unclear. Can you clarify:
- What specific outcome is expected?
- Are there any constraints or requirements?
- Which files should be modified?
```

---

## 🎨 **BRAND CONSISTENCY REMINDERS**

Always maintain:
- **Brand Name**: "rooi rose" (always lowercase)
- **Typography**: Playfair Display SC (display), Karla (body)
- **Brand Red**: #e01e12
- **Magazine Context**: Lifestyle magazine, not newspaper
- **Afrikaans First**: Primary language is Afrikaans
- **Editorial Style**: Generous white space, 3:2 images, minimal design

---

## 📝 **DOCUMENTATION STANDARDS**

When documenting:
- Use Markdown (`.md` files)
- Include date in headers (YYYY-MM-DD format)
- Add "Last Updated" timestamps
- Cross-reference related docs
- Keep Guidelines.md as single source of truth

---

## 🔗 **RELATED FILES**

- **Task Orchestrator**: `/prompts/project-maintenance-orchestrator.md`
- **Quick Reference**: `/guidelines/rooi-rose/quick-reference-card.md`
- **Design System**: `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md`
- **Content Guide**: `/guidelines/rooi-rose/content-creation-guide.md`

---

**END OF CONTINUE PROMPT GUIDE**
