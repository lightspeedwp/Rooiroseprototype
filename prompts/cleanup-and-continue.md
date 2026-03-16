---
type: Workflow Trigger
category: Maintenance
trigger: cleanup and continue
duration: 60-80 min
version: 1.0.0
created: 2026-03-15
last_updated: 2026-03-15
---

# Cleanup and Continue

**Mission**: Execute comprehensive project maintenance (cleanup) and immediately resume work on the next task (continue).

---

## Workflow

This trigger combines two existing triggers in sequence:

### Step 1: Execute Cleanup (60-80 min)
Run `/prompts/cleanup.md` in full:
- Audit filesystem
- Validate imports
- Archive completed tasks
- Update documentation
- Sync DevTools data
- Update sitemap
- Create cleanup report

### Step 2: Execute Continue (Varies)
After cleanup completes, run `/prompts/continue.md`:
- Read `/tasks/task-list.md`
- Identify next task
- Confirm with user
- Execute task
- Update task status
- Report completion

---

## Success Criteria

- [ ] Cleanup completed successfully
- [ ] Cleanup report created
- [ ] Next task identified
- [ ] Task execution started
- [ ] No errors during either phase

---

## Usage

```
User: cleanup and continue
AI: [Runs cleanup orchestrator, then immediately picks up next task]
```

**When to use**: End of major milestone to clean up and resume work
