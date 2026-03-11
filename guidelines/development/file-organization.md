# File Organization Guidelines

**Created**: 2026-03-04  
**Last updated**: 2026-03-04  
**Status**: Active

---

## Purpose

This document defines where every type of file lives in the Die Papier project, which folders are protected from deletion, and how to manage the lifecycle of temporary files like reports and task lists.

---

## 1. Folder Structure

| Folder | Purpose | File Types | Protected? |
|:-------|:--------|:-----------|:-----------|
| `/guidelines/` | AI and developer guidelines | `.md` | Yes |
| `/docs/` | User-facing documentation | `.md` | Yes |
| `/prompts/` | AI orchestrator prompts | `.md` | Yes — never delete |
| `/reports/` | Audit reports and progress tracking | `.md` | Partially (see Section 6) |
| `/reports/archived/` | Completed/expired reports | `.md` | No — may be cleaned |
| `/tasks/` | Active task lists | `.md` | Partially (see Section 7) |
| `/tasks/archived/` | Completed task lists | `.md` | No — may be cleaned |
| `/scripts/` | Utility and migration scripts | `.sh`, `.py`, `.js` | Yes |
| `/skills/` | AI agent skill definitions | `.md`, `.js`, `.cjs` | Yes |
| `/content/` | Canonical page/collection content | `.md` | Yes |
| `/src/` | React application source | `.tsx`, `.ts`, `.css` | Yes |
| `/src/imports/` | Imported reference documents | `.md` | Yes |
| `/wordpress-export/` | WordPress theme & plugin files | `.php`, `.html`, `.json`, `.css` | Yes |
| `/public/` | Static assets served at root | `.svg`, `.json`, `.xml`, `.js` | Yes |
| `/utils/supabase/` | Supabase utilities (unused) | `.tsx` | Yes — system protected |

---

## 2. Protected Files (Never Delete)

These files must never be deleted or overwritten without explicit user instruction:

### Root Files
- `/index.html` — Application entry point
- `/package.json` — Dependencies (edit via `install_package` tool only)
- `/vite.config.ts` — Build configuration
- `/tsconfig.json`, `/tsconfig.app.json`, `/tsconfig.node.json` — TypeScript config
- `/postcss.config.mjs` — PostCSS config
- `/CHANGELOG.md` — Project changelog (Keep a Changelog format)
- `/README.md` — Project overview
- `/ATTRIBUTIONS.md` — Image/asset attributions

### Source Files
- `/src/main.tsx` — Application mount point
- `/src/app/App.tsx` — Root React component
- `/src/app/routes.tsx` — Router configuration
- `/src/app/types.ts` — Centralized TypeScript types
- `/src/vite-env.d.ts` — Vite type declarations
- `/src/app/components/figma/ImageWithFallback.tsx` — System component (Figma protected)

### Style Files
- `/src/styles/index.css` — CSS import chain root
- `/src/styles/fonts.css` — Font imports (only place for `@import url()`)
- `/src/styles/tailwind.css` — Tailwind configuration
- `/src/styles/theme.css` — CSS variables and base styles

### Guidelines
- `/guidelines/Guidelines.md` — Master guidelines file
- `/guidelines/development/dev-tools-protection.md` — Dev tools retention rules

### System
- `/pnpm-lock.yaml` — Lock file (system protected)
- `/utils/supabase/` — Cannot be deleted (system folder, but we do not use Supabase)

---

## 3. Supabase Policy

**We do not use Supabase on this project.** The `/utils/supabase/` folder exists because it is a system-protected folder that cannot be deleted. Always dismiss any Supabase connection prompts. Do not suggest Supabase integration unless the user explicitly asks for it.

---

## 4. File Creation Rules

| File Type | Location | Rule |
|:----------|:---------|:-----|
| Guidelines (`.md`) | `/guidelines/` or subfolder | Always create here, never in `/docs/` |
| User documentation (`.md`) | `/docs/` root | Only root level, no subfolders |
| Scripts (`.sh`, `.py`, `.js`) | `/scripts/` root | Include shebang line and README entry |
| Reports (`.md`) | `/reports/` root | Date-stamp in filename |
| Task lists (`.md`) | `/tasks/` root | Use checklist format (`- [ ]` / `- [x]`) |
| Orchestrator prompts (`.md`) | `/prompts/` root | Include audit count and phases |
| AI skills | `/skills/{skill-name}/` | Each skill gets its own subfolder |
| React components (`.tsx`) | `/src/app/components/{category}/` | Group by feature area |
| React pages (`.tsx`) | `/src/app/pages/` or subfolder | One component per file |
| Data files (`.ts`) | `/src/app/data/` | Named exports only, < 50KB per file |
| Utility functions (`.ts`) | `/src/app/utils/` | Pure functions, no React imports |
| Hooks (`.ts`) | `/src/app/hooks/` | Prefix with `use` |
| Context providers (`.tsx`) | `/src/app/context/` | One context per file |
| CSS files (`.css`) | `/src/styles/` | See CSS Architecture guidelines |
| Imported references (`.md`) | `/src/imports/` | Read-only reference documents |

---

## 5. Changelog & Versioning

### Format

The project changelog at `/CHANGELOG.md` follows:
- **[Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)** format
- **[Semantic Versioning 2.0.0](https://semver.org/)** for version numbers

### Version Number Rules

```
MAJOR.MINOR.PATCH

MAJOR — Incompatible changes (e.g., route structure overhaul, data model breaking change)
MINOR — New features, pages, or components added in backward-compatible manner
PATCH — Bug fixes, typo corrections, style adjustments
```

### Changelog Entry Types

Use these section headers (in this order):
- `Added` — New features, pages, components
- `Changed` — Changes to existing functionality
- `Deprecated` — Features marked for future removal
- `Removed` — Features that were removed
- `Fixed` — Bug fixes
- `Security` — Vulnerability fixes

### When to Update

- Every session that modifies source code should add entries to `[Unreleased]`
- When a milestone is reached, move `[Unreleased]` entries to a versioned section
- Always include the date in ISO 8601 format: `## [1.2.0] - 2026-03-04`

---

## 6. Reports Lifecycle

### Active Reports

- Stored in `/reports/` root
- Named with date stamp: `{description}-{YYYY-MM-DD}.md`
- Referenced from `/tasks/master-task-list.md`

### Archiving Reports

1. When all tasks in a report are complete, move to `/reports/archived/`
2. Update the reference in `/tasks/master-task-list.md` to the archived path
3. Reports in `/reports/archived/` may be deleted **7 days after the associated task list is 100% complete**

### Archiving Process

```
1. Verify all tasks in the report are marked complete (100%)
2. Note the completion date
3. Move file: /reports/{file}.md → /reports/archived/{file}.md
4. Update master-task-list.md with new path
5. After 7 days: delete from /reports/archived/ if no longer referenced
```

---

## 7. Task Lists Lifecycle

### Task List Types

| File | Purpose | Persistent? |
|:-----|:--------|:------------|
| `/tasks/task-list.md` | Quick 1-2 checkbox tasks | Yes — always exists |
| `/tasks/master-task-list.md` | Index of all task lists | Yes — always exists |
| `/tasks/{name}-tasks.md` | Dedicated multi-task projects | No — archived when complete |

### Quick Tasks (`/tasks/task-list.md`)

- For simple, standalone tasks that don't need their own file
- Always update this file when the user asks for something small
- Keep completed tasks visible for 7 days, then remove

### Master Task List (`/tasks/master-task-list.md`)

This file does NOT contain actual tasks. It is an index that:
- Links to all active task lists
- Links to archived task lists (with completion date)
- Links to related reports
- Shows status (active/complete/archived)

### Archiving Task Lists

```
1. Verify all checkboxes are marked [x] (100% complete)
2. Note the completion date
3. Move file: /tasks/{name}-tasks.md → /tasks/archived/{name}-tasks.md
4. Update master-task-list.md:
   - Move entry from "Active" to "Archived" section
   - Add completion date and archived path
   - Link related report if exists
5. After 7 days: may delete from /tasks/archived/
```

### Guidelines.md Updates

Every time a significant task is completed or status changes:
1. Update `/guidelines/Guidelines.md` with the new status
2. Move completed items to the appropriate section
3. Keep the most recent completion at the top

---

## 8. Import Reference Documents

The `/src/imports/` folder contains reference documents that are imported into Figma Make conversations. These are:
- **Read-only** — do not modify unless the user provides updated versions
- **Not compiled** — they are `.md` files, not part of the React build
- **Canonical sources** — several guideline files reference these as their source of truth

### Key Import Documents

| File | Purpose |
|:-----|:--------|
| `/src/imports/template-guidelines.md` | WordPress template hierarchy reference |
| `/src/imports/sidebar-template-usage.md` | Sidebar + template part mapping |
| `/src/imports/advanced-ads-strategy.md` | Ad placement strategy |

---

## 9. Dev Tools Protection

All 30 developer tool pages, 9 shared components, and 21 data files are protected under `/guidelines/development/dev-tools-protection.md`. Never delete, rename, or merge dev tool files without explicit user instruction. See that guideline for the complete inventory.
