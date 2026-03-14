# Project Guidelines

**Last updated**: 2026-03-14 (Shop Implementation & Iframe Fix v5.0)

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
| **`process-reports`** | Process reports, create task lists from findings | 45-60 min | [/prompts/process-reports.md](/prompts/process-reports.md) |

**Usage Examples**:
```
User: cleanup
AI: [Executes 7-phase maintenance: filesystem audit, import validation, 
     documentation sync, DevTools data update, task archiving, etc.]

User: continue
AI: [Reads /tasks/task-list.md, identifies next task, executes it, 
     updates status, reports completion]

User: process-reports
AI: [Processes all reports in /reports/, extracts violations/issues,
     creates/updates task lists, archives completed reports]
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

**Status**: ✅ Fixed with hybrid approach (v11.0)

The rooi rose app uses **both delayed script loading AND disabled routing** in Figma's iframe environment to prevent `IframeMessageAbortError`. This is completely normal and ensures stable operation.

**Dual strategy**:
1. **Delayed loading**: HTML waits for window.load + 30s before loading React (prevents JS during iframe onload)
2. **No routing**: App.tsx shows HomePage directly in iframe (prevents router conflicts)

**User Experience**:
- **Figma Make**: 30-40 second load time, HomePage preview only (no navigation)
- **Production**: Instant load, full routing and navigation

**Technical Details**: See [/docs/FIGMA-IFRAME-FIX.md](/docs/FIGMA-IFRAME-FIX.md)

---

## 📝 **STYLING NOTES**

**Important**: Some of the base components you are using may have styling (e.g., gap/typography) baked in as defaults. Make sure you **explicitly set any styling information** from the guidelines in the generated React to override the defaults.

---

## 🎨 **BACKGROUND**

I'm migrating the "Die Papier" website to a WordPress FSE theme based on Ollie, rebranded as "rooi rose" - an Afrikaans lifestyle magazine brand (always lowercase). The site uses consistent card container styling, maintains `coming-soon.html` naming, and handles e-editions as variable products with 4 regional variants mapped to `pa_streek` WooCommerce attribute. I've completed 100% comprehensive rebranding and all 6 phases of the redesign orchestrator plan, with the project now production-ready for WordPress deployment. I need to implement a comprehensive shop with square product images selling rooi rose swag products, paid competitions, magazine subscriptions (both print delivery and e-editions), and update all advertising pages to be specific to rooi rose magazine context.

---

## 📊 **CURRENT STATE**

We've successfully created the complete shop system with 18 swag products across 5 categories, built the Shop page with square 1:1 aspect ratio product images and category filtering, and just completed a comprehensive Project Maintenance & Audit Orchestrator that validated 100% system health. We experienced persistent `IframeMessageAbortError` issues in Figma's iframe environment and resolved them with a hybrid approach (v11.0) - delayed script loading + no routing in iframe.

### Latest Fix (v11.0)
- ✅ **Hybrid strategy**: Combines delayed loading + routing disable
- ✅ **Delayed loading**: window.load + 30s prevents JS during iframe onload
- ✅ **No routing**: HomePage shown directly in iframe (no router conflicts)
- ✅ Figma Make: 30-40s load time, HomePage preview only
- ✅ Production: Instant load, full routing
- ✅ Eliminates `IframeMessageAbortError` completely

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
- `/index.html` — Script delay logic (5s in iframe)
- `/src/main.tsx` — React mount logic
- `/src/app/App.tsx` — Router initialization (2s delay)
- `/docs/FIGMA-IFRAME-FIX.md` — Technical documentation

**Orchestrator Prompts**:
- `/prompts/cleanup.md` — 7-phase maintenance orchestrator
- `/prompts/continue.md` — Task resumption helper
- `/prompts/README.md` — Orchestrator directory overview

**Task Tracking**:
- `/tasks/task-list.md` — Master task status
- `/tasks/CURRENT-TASKS.md` — Active work (9 tasks remaining)

---

**Version**: 3.5.0 (Iframe Fix v11.0)  
**Last Updated**: 2026-03-14  
**Status**: ✅ Production Ready + Stable Figma Make Operation