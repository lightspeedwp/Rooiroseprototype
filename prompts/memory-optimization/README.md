# Memory Optimization Prompts

**Purpose**: Comprehensive CSS architecture audit and refactoring prompts for Die Papier project. Ensures token-driven architecture, WCAG 2.1 AA/AAA accessibility, and WordPress theme.json alignment.

**Related Guidelines**:
- `/guidelines/development/css-optimization-guidelines.md` — CSS optimization principles
- `/guidelines/development/css-architecture.md` — Current CSS partial structure
- `/guidelines/design-tokens/` — Design token documentation

---

## Prompt Structure

### 1. Orchestrator (Run Once)

**File**: `orchestrator.md`

The main orchestrator coordinates the entire audit process. It:
- Runs 10 audit prompts (A-J) in sequence
- Writes consolidated audit report to `/reports/`
- Only then creates task list
- Enforces strict ordering to prevent incomplete audits

**Usage**:
```
Run orchestrator.md in Figma Make or AI assistant.
It will execute all audits and generate:
- /reports/<YYYY-MM-DD>_die-papier_css-audit.md
- /reports/<YYYY-MM-DD>_die-papier_task-list.md
```

### 2. Individual Audit Prompts (A-J)

Each audit prompt focuses on a specific aspect of the codebase:

| Prompt | File | Focus Area |
|:-------|:-----|:-----------|
| A | `audit-a-inventory.md` | CSS inventory & entrypoints |
| B | `audit-b-import-graph.md` | Import graph & conflict detection |
| C | `audit-c-tokens.md` | Design tokens documentation vs implementation |
| D | `audit-d-theming.md` | Light/dark mode token coverage |
| E | `audit-e-tailwind.md` | Tailwind + custom CSS layering |
| F | `audit-f-bem.md` | BEM adoption audit |
| G | `audit-g-wordpress.md` | WordPress alignment (theme.json, globals) |
| H | `audit-h-dry.md` | DRY & pattern opportunities |
| I | `audit-i-unused.md` | Unused selectors & orphaned files |
| J | `audit-j-accessibility.md` | Accessibility CSS audit (WCAG 2.1) |

**Usage**:
```
Run individually if you want granular control.
Each prompt writes findings to a section in the audit report.
```

### 3. Figma Memory Audit

**File**: `figma-memory-audit.md`

**Purpose**: Audit Figma Make prototype for memory waste. Addresses the 2GB WASM memory limit in browser tabs.

**Focus Areas**:
- Image compression
- Hidden/duplicate layer removal
- Vector flattening
- Component variant reduction
- File splitting strategies

**Usage**:
```
Run this FIRST if Figma is showing memory warnings.
Reduces memory before running CSS audits.
```

### 4. Refactor Template

**File**: `refactor-template.md`

**Purpose**: Implementation prompt for executing audit recommendations.

**Implements**:
- Token-driven architecture
- BEM adoption (phased migration)
- WordPress alignment
- Accessibility fixes (AA/AAA)
- Unused CSS removal

**Usage**:
```
Run AFTER audit is complete and task list is created.
References the audit report for specific actions.
```

---

## Workflow

### Standard Workflow (Full Audit)

1. **Run orchestrator** → Executes all 10 audits → Writes report + task list
2. **Review reports** → Understand findings and prioritization
3. **Run refactor template** → Implement fixes based on task list
4. **Validate** → Verify accessibility, performance, WordPress alignment

### Granular Workflow (Individual Audits)

1. **Run specific audit** (e.g., `audit-j-accessibility.md`)
2. **Review findings** → Capture in notes or partial report
3. **Iterate** → Run other audits as needed
4. **Consolidate** → Manually create combined report
5. **Run refactor template** → Implement fixes

### Memory-First Workflow (Figma Issues)

1. **Run figma-memory-audit** → Fix memory bottlenecks FIRST
2. **Run orchestrator** → Execute full CSS audit
3. **Run refactor template** → Implement fixes

---

## Die Papier Status

### Completed Work

✅ **Phase 1: CSS Decomposition** (Memory Optimization Initiative)
- Split monolithic `theme.css` (1,135 lines) into 8 partials
- Established token-driven architecture
- Implemented light/dark mode token pairs
- Created `/guidelines/development/css-architecture.md`

✅ **Phase 2: Data Barrel Cleanup**
- Removed ~430KB from production bundle
- Fixed duplicate IDs in pattern data

✅ **Phase 3-6: Component Optimization**
- Created 6 shared dev components (DRY)
- Split 7 dev browser pages into 27 sub-components
- Created 2 shared layouts
- Audited production pages (all under thresholds)

### Pending Work

⏸️ **WordPress Migration** (Prerequisites for BEM adoption)
- Theme.json alignment
- WordPress-aligned global classes
- Per-block CSS files
- Block style variations (JSON)

⏸️ **BEM Migration** (Blocked by WordPress migration)
- Phase 1: Dual-classing (Tailwind + BEM)
- Phase 2: Markup migration
- Phase 3: Tailwind cleanup

### Deferred Tasks

- **Task #21**: Split `categoryArticles.ts` (79KB) — Low priority, no bundle impact
- **Task #55**: Delete `theme.css` — System-protected, safe to delete via Git

---

## Audit Report Template

All audits write to: `/reports/<YYYY-MM-DD>_die-papier_css-audit.md`

**Structure**:
```markdown
# CSS & Design Tokens Audit — Die Papier — <DATE>

## 0) Executive Summary
- Top 5 risks
- Top 5 opportunities
- Recommended target architecture

## 1) Current CSS Inventory & Entrypoints
## 2) Import Graph & Conflict Analysis
## 3) Design Tokens: Documentation vs Implementation
## 4) Light/Dark Mode Coverage
## 5) Tailwind Integration Plan
## 6) BEM & CSS Architecture Strategy
## 7) WordPress Alignment
## 8) DRY Opportunities
## 9) Unused Selectors & Orphaned Files
## 10) Accessibility (WCAG 2.1 AA/AAA)
## 11) Proposed Target Folder Structure
## 12) Proposed index.css and tailwind.css Contents

## Appendix: Evidence
```

---

## Task List Template

All task lists write to: `/reports/<YYYY-MM-DD>_die-papier_task-list.md`

**Structure**:
```markdown
# CSS Optimization Task List — Die Papier — <DATE>

## Priority Levels
- P0: Critical (accessibility blockers, build errors)
- P1: High (token mismatches, import conflicts)
- P2: Medium (BEM adoption, DRY improvements)
- P3: Low (nice-to-have optimizations)

## Phase 1: Token & Import Fixes (P0-P1)
## Phase 2: WordPress Alignment (P1)
## Phase 3: BEM Migration (P2)
## Phase 4: Cleanup & Validation (P2-P3)

## Acceptance Criteria
- [ ] All P0 tasks complete
- [ ] Accessibility (AA/AAA) verified
- [ ] No duplicate/cyclic imports
- [ ] Token documentation matches implementation
- [ ] Visual regression tests pass
```

---

## Non-Negotiables

1. **Accessibility First**: Target WCAG 2.1 AA AND AAA. Flag any AAA criteria that can't be met without design changes.

2. **No Task List Before Report**: Orchestrator must write audit report successfully before creating task list.

3. **Tailwind Stays**: Keep `tailwind.css` as primary entrypoint. BEM replaces utility classes in markup, not in build.

4. **BEM Adoption**: Implement "as extensively as possible" in strategy, but don't rename during audit—only propose mappings.

5. **Token Documentation**: Evaluate `/guidelines/design-tokens/` vs implementation. Document all discrepancies.

6. **Light/Dark Mode**: Add missing CSS variables to extend utility and preset classes using token-driven semantics.

---

## Stop Conditions

**Orchestrator must STOP if**:
- Cannot write to `/reports/` directory
- Any audit (A-J) fails to complete
- Design token documentation is missing

**When stopped**:
- Print report content to console
- Clearly state why file could not be written
- Do NOT create task list

---

## References

- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [WordPress theme.json](https://developer.wordpress.org/themes/features/theme-json/)
- [Tailwind CSS Layers](https://tailwindcss.com/docs/adding-custom-styles)
- [Figma Memory Limits](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc)

---

**Last updated**: 2026-03-05  
**Status**: Prompts ready for execution  
**Next step**: Run `orchestrator.md` or `figma-memory-audit.md` (if memory issues exist)
