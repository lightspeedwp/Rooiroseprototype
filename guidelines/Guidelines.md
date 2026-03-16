# Project Guidelines

**Last updated**: 2026-03-15 (Editorial Demo Pages v12.0)

---

## 📖 **QUICK START**

**New to this project?** Start here:

→ **[COMPLETE DOCUMENTATION INDEX](/DOCUMENTATION-INDEX.md)** — 300+ documents organized by category  
→ **[MASTER INDEX](/guidelines/MASTER-INDEX.md)** — Documentation organized by role and purpose  
→ **[PROJECT STATUS](/reports/project-status-summary-2026-03-12.md)** — Executive summary, metrics, completion  
→ **[NEXT ACTIONS](/reports/next-actions-2026-03-12.md)** — Immediate priorities, timeline, workflow  

**By Role**:
- 👤 **Content Editors**: [Content Creation Guide](/guidelines/rooi-rose/content-creation-guide.md) | [Quick Reference](/guidelines/rooi-rose/quick-reference-card.md)
- 💻 **Developers**: [Quick Reference Card](/guidelines/rooi-rose/quick-reference-card.md) | [Design System](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md)
- 🚀 **Launch Teams**: [Launch Readiness Checklist](/reports/launch-readiness-checklist-2026-03-12.md) | [QA Checklist](/guidelines/wordpress-migration/visual-qa-checklist.md)
- 📈 **Marketing**: [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) | [Content Calendar](/guidelines/rooi-rose/content-calendar-template.md)
- 👔 **Stakeholders**: [README](/README.md) | [Project Status Summary](/reports/project-status-summary-2026-03-12.md)

---

## ⚡ **QUICK COMMANDS (AI Trigger Words)**

**For Figma Make AI**: When you see these single-word commands, execute the corresponding prompt immediately.

| Command | Purpose | Duration | Prompt |
|:--------|:--------|:---------|:-------|
| **`cleanup`** | Run comprehensive project maintenance | 60-80 min | [/prompts/cleanup.md](/prompts/cleanup.md) |
| **`continue`** | Resume work on next logical task | Varies | [/prompts/continue.md](/prompts/continue.md) |
| **`audit-files`** | Audit file sizes and organization | 30-45 min | [/prompts/audit-files.md](/prompts/audit-files.md) |
| **`audit-root`** | Check root directory compliance | 5-10 min | [/prompts/audit-root.md](/prompts/audit-root.md) |
| **`sync-guidelines`** | Sync guidelines with project state | 20-30 min | [/prompts/sync-guidelines.md](/prompts/sync-guidelines.md) |
| **`update-docs`** | Update CHANGELOG, README, ATTRIBUTIONS | 15-20 min | [/prompts/update-docs.md](/prompts/update-docs.md) |

**Usage Examples**:
```
User: cleanup
AI: [Executes 7-phase maintenance: filesystem audit, import validation, 
     documentation sync, DevTools data update, task archiving, etc.]

User: continue
AI: [Reads /tasks/task-list.md, identifies next task, executes it, 
     updates status, reports completion]

User: audit-files
AI: [Scans all files, identifies files >200 lines (components) or >500 lines
     (guidelines), recommends splitting strategies, generates task list]

User: audit-root
AI: [Checks root for unauthorized .md files, auto-relocates to proper folders,
     ensures only ATTRIBUTIONS.md, README.md, CHANGELOG.md remain]

User: sync-guidelines
AI: [Critical before audits! Scans current state, updates guideline counts,
     adds new components/tokens, verifies all documentation current]

User: update-docs
AI: [Updates CHANGELOG.md with recent changes, README.md stats, ATTRIBUTIONS.md
     dependencies, verifies all links, follows Keep a Changelog format]
```

**Full Documentation**: [Prompt Trigger Words Guide](/guidelines/development/prompt-trigger-words.md)

---

## ⚠️ **FIGMA MAKE ENVIRONMENT NOTES**

**You are working in the Figma Make environment**. Critical reminders:

- ❌ **DO NOT** tell the user to "refresh your browser" — changes are live instantly in Figma Make
- ❌ **DO NOT** tell the user to "clear your cache" — not applicable in Figma Make
- ❌ **DO NOT** tell the user to "run npm install" — use the `install_package` tool instead
- ❌ **DO NOT** tell the user to "restart the dev server" — there is no dev server in Figma Make
- ✅ **DO** use tool calls to read, write, and edit files directly
- ✅ **DO** verify changes by reading files after modification
- ✅ **DO** assume all changes are immediately visible to the user

### Iframe Communication Fix

**Status**: ✅ Fixed with MessageChannel blocking (v11.21)

The rooi rose app **completely prevents React from loading in Figma's iframe environment AND blocks MessageChannel/event APIs** to prevent Figma's message port errors.

**Strategy (v11.21 - Nuclear MessageChannel Blocking)**:
1. **FIRST SCRIPT (Nuclear)**: Delete + redefine MessageChannel/MessagePort as non-configurable null BEFORE Figma can execute
2. **SECOND SCRIPT**: Detect iframe and set flags to disable React
3. **Inline CSS**: Show/hide elements based on figma-iframe class
4. **THIRD SCRIPT**: Triple-check flags before loading Vite/React

**User Experience**:
- **Figma Make**: Instant static preview (CSS-driven), zero errors, zero MessageChannel usage
- **Production**: Full React app with routing loads normally

**Technical Details**: See [/docs/FIGMA-IFRAME-FIX.md](/docs/FIGMA-IFRAME-FIX.md)

---

## 📝 **STYLING NOTES**

**Important**: Some of the base components you are using may have styling (e.g., gap/typography) baked in as defaults. Make sure you **explicitly set any styling information** from the guidelines in the generated React to override the defaults.

---

## 📂 **PROTECTED ROOT-LEVEL FILES**

The project root should remain **clean and minimal**. Only the following markdown files are permitted in the root directory:

### Protected Markdown Files (3 files)

| File | Purpose | Notes |
|:-----|:--------|:------|
| `/ATTRIBUTIONS.md` | Third-party dependencies and licenses | Always uppercase filename |
| `/README.md` | Project overview and quick start | Always uppercase filename |
| `/CHANGELOG.md` | Version history and release notes | Always uppercase filename |

### File Organization Rules

- ✅ **DO** keep only the 3 protected files above in the root directory
- ✅ **DO** create all new guidelines in `/guidelines/` or appropriate subdirectory
- ✅ **DO** use templates from `/guidelines/_templates/` when creating new documentation
- ✅ **DO** follow the naming conventions in each template
- ❌ **DO NOT** create additional `.md` files in the root directory
- ❌ **DO NOT** create `.md` files with lowercase names (e.g., `attributions.md`)
- ❌ **DO NOT** create duplicate documentation in multiple locations

### Cleanup Commands

When running the `cleanup` command, the system will:
1. Check for unauthorized `.md` files in the root directory
2. Identify if they contain important guidelines
3. Move important content to appropriate `/guidelines/` subdirectories
4. Delete non-essential markdown files from root
5. Ensure only `/ATTRIBUTIONS.md`, `/README.md`, and `/CHANGELOG.md` remain

**See also**: [Dev Tools Protection](/guidelines/development/dev-tools-protection.md) for additional protected files

---

## 📋 **PROTECTED TASK LIST FILES**

When running trigger word prompts (like `cleanup`, `audit-files`, `sync-guidelines`), standardized task list files are created in `/tasks/`. These files are **PROTECTED** and should never be deleted during cleanup operations:

### Protected Task Lists (17 files)

| Task List File | Trigger Word | Purpose |
|:---------------|:-------------|:--------|
| `/tasks/task-list.md` | _master_ | Master task list (single source of truth) |
| `/tasks/CURRENT-TASKS.md` | _active_ | Current work-in-progress tasks |
| `/tasks/cleanup-task-list.md` | `cleanup` | Project maintenance tasks |
| `/tasks/files-task-list.md` | `audit-files` | File size/organization tasks |
| `/tasks/root-task-list.md` | `audit-root` | Root directory cleanup tasks |
| `/tasks/guidelines-task-list.md` | `sync-guidelines` | Guideline sync tasks |
| `/tasks/docs-task-list.md` | `update-docs` | Documentation update tasks |
| `/tasks/routes-task-list.md` | _custom_ | Route audit tasks |
| `/tasks/tokens-task-list.md` | _custom_ | Design token tasks |
| `/tasks/release-task-list.md` | _custom_ | Release preparation tasks |
| `/tasks/changelog-task-list.md` | _custom_ | Changelog maintenance tasks |
| `/tasks/reports-task-list.md` | _custom_ | Report cleanup tasks |
| `/tasks/status-task-list.md` | _custom_ | Status update tasks |
| `/tasks/data-task-list.md` | _custom_ | Data validation tasks |
| `/tasks/responsive-task-list.md` | _custom_ | Responsive design tasks |
| `/tasks/a11y-task-list.md` | _custom_ | Accessibility tasks |
| `/tasks/css-task-list.md` | _custom_ | CSS refactoring tasks |
| `/tasks/patterns-task-list.md` | _custom_ | Pattern audit tasks |
| `/tasks/blocks-task-list.md` | _custom_ | Block audit tasks |

### Trigger Word Workflow

When a trigger word prompt is run:
1. **Audit Phase**: Comprehensive scan and analysis
2. **Task List Creation**: Standardized task list created in `/tasks/[trigger]-task-list.md`
3. **Master Update**: Reference added to `/tasks/task-list.md`
4. **Status Tracking**: Progress tracked in master list

**Example**:
```bash
User: cleanup
AI: [Runs audit] → [Creates /tasks/cleanup-task-list.md] 
    → [Updates /tasks/task-list.md with reference]
    → Reports: "Created cleanup task list with 25 tasks"
```

**See also**: [Prompt → Report → Task Workflow](/guidelines/development/prompt-report-task-workflow.md) for full workflow documentation

---

## 🎨 **BACKGROUND**

I'm migrating the "Die Papier" website to a WordPress FSE theme based on Ollie, rebranded as "rooi rose" - an Afrikaans lifestyle magazine brand (always lowercase). The site uses consistent card container styling, maintains `coming-soon.html` naming, and handles e-editions as variable products with 4 regional variants mapped to `pa_streek` WooCommerce attribute. I've completed 100% comprehensive rebranding and all 6 phases of the redesign orchestrator plan, with the project now production-ready for WordPress deployment. I need to implement a comprehensive shop with square product images selling rooi rose swag products, paid competitions, magazine subscriptions (both print delivery and e-editions), and update all advertising pages to be specific to rooi rose magazine context.

---

## 📊 **CURRENT STATE**

We've successfully created the complete shop system with 18 swag products across 5 categories, built the Shop page with square 1:1 aspect ratio product images and category filtering, and just completed a comprehensive Project Maintenance & Audit Orchestrator that validated 100% system health. We experienced persistent `IframeMessageAbortError` issues in Figma's iframe environment and resolved them with a hybrid approach (v11.0) - delayed script loading + no routing in iframe.

### Latest Fix (v11.5)
- ✅ **Hybrid strategy**: Combines delayed loading + BrowserRouter mode
- ✅ **Pure delay approach**: No event listeners - 180s (3 minutes) pure setTimeout to avoid ANY interference with Figma's onload
- ✅ **BrowserRouter mode**: Provides router context without RouterProvider (no route initialization)
- ✅ **Complete layout**: Header + Home + Footer rendered in iframe
- ✅ Figma Make: 180-190s load time, full Home preview with navigation UI (links non-functional)
- ✅ Production: Instant load, full routing with functional navigation
- ✅ Eliminates `IframeMessageAbortError` and router hook errors

---

## 🎯 **NEXT STEPS**

✅ **All Shop & Advertising Tasks Complete!** (11/11 = 100%)

**Phase 1: Shop System** (3/3 Complete) ✅
- ✅ Task 1.1: Create Product Data
- ✅ Task 1.2: Create Shop Page
- ✅ Task 1.3: Add Shop Routes

**Phase 2: Advertising Pages Rebrand** (6/6 Complete) ✅
- ✅ Task 2.1: Update Classifieds Page
- ✅ Task 2.2: Update Display Advertising Page
- ✅ Task 2.3: Update Leaflets Page
- ✅ Task 2.4: Update Sponsored Content Page
- ✅ Task 2.5: Update Sponsorships Page
- ✅ Task 2.6: Update Supplements Page

**Phase 3: Subscription Enhancement** (2/2 Complete) ✅
- ✅ Task 3.1: E-Edition Subscription Enhancement
- ✅ Task 3.2: Print Delivery Subscription Enhancement

**Status**: All planned shop and advertising features have been successfully implemented. The rooi rose website now has a complete shop system with 18 swag products, rebranded advertising pages reflecting lifestyle magazine positioning, and enhanced subscription pages with clear differentiation between digital and print offerings.

**What's next?** You can:
- Type `cleanup` to run project maintenance and archive completed tasks
- Request new features or improvements
- Ask for a status report on the overall project

---

## 📚 **KEY DOCUMENTATION**

### Development Guidelines
- [Prompt Trigger Words](/guidelines/development/prompt-trigger-words.md) — AI command system
- [Prompt → Report → Task Workflow](/guidelines/development/prompt-report-task-workflow.md) — **MANDATORY workflow for all prompts, reports, and tasks**
- [Report Creation Guidelines](/guidelines/development/report-creation-guidelines.md) — Report standards
- [Task Management Guidelines](/guidelines/development/task-management-guidelines.md) — Task list standards
- [File Organization](/guidelines/development/file-organization.md) — File placement rules
- [Dev Tools Protection](/guidelines/development/dev-tools-protection.md) — Protected files list

### Brand & Design
- [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — rooi rose brand identity
- [Design System Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md) — 145+ design tokens
- [Editorial Components](/guidelines/design-tokens/editorial-components.md) — Magazine-style components
- [Typography Guidelines](/guidelines/design-tokens/typography.md) — Playfair Display SC + Karla

### WordPress Migration
- [Block Pattern Validation](/guidelines/wordpress-migration/block-pattern-validation.md) — 177 patterns
- [Theme Structure](/guidelines/wordpress-migration/theme-structure.md) — WordPress FSE architecture
- [Visual QA Checklist](/guidelines/wordpress-migration/visual-qa-checklist.md) — Pre-launch QA

### Operational Guides
- [Content Creation Guide](/guidelines/rooi-rose/content-creation-guide.md) — Editorial workflow
- [Quick Reference Card](/guidelines/rooi-rose/quick-reference-card.md) — Developer quick start
- [Maintenance Operations Manual](/guidelines/rooi-rose/maintenance-operations-manual.md) — Daily/weekly/monthly tasks

---

## 📂 **PROJECT STRUCTURE**

```
rooi-rose/
├── /src/
│   ├── /app/
│   │   ├── /components/       # React components
│   │   ├── /data/            # Data files (products, articles, navigation)
│   │   ├── /pages/           # Page components (lazy-loaded)
│   │   ├── /utils/           # Utility functions
│   │   ├── App.tsx           # Root component (deferred router)
│   │   └── routes.tsx        # React Router v7 routes
│   ├── /styles/              # CSS architecture
│   ├── /imports/             # Figma assets (SVGs, images)
│   └── main.tsx              # Entrypoint (deferred mount)
├── /die-papier-theme/        # WordPress theme export
├── /guidelines/              # 65+ comprehensive documents
├── /prompts/                 # Orchestrator prompts (cleanup, continue)
├── /reports/                 # Audit and completion reports
├── /tasks/                   # Task lists and tracking
├── /docs/                    # Technical documentation
└── index.html                # HTML entrypoint (iframe delay logic)
```

---

## 🔗 **RELATED FILES**

**Iframe Fix**:
- `/index.html` — MessageChannel blocking + event override logic
- `/src/main.tsx` — React mount logic
- `/src/app/App.tsx` — Router initialization
- `/docs/FIGMA-IFRAME-FIX.md` — Technical documentation

**Orchestrator Prompts**:
- `/prompts/cleanup.md` — 7-phase maintenance orchestrator
- `/prompts/continue.md` — Task resumption helper
- `/prompts/README.md` — Orchestrator directory overview

**Task Tracking**:
- `/tasks/task-list.md` — Master task status
- `/tasks/CURRENT-TASKS.md` — Active work (9 tasks remaining)

---

**Version**: 3.9.0 (Iframe Fix v11.20 - Ultimate MessageChannel Blocking)  
**Last Updated**: 2026-03-15  
**Status**: ✅ Production Ready + Zero Iframe Errors