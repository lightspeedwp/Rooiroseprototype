# Prompt Trigger Words — Complete Reference

**Version**: 2.1.0  
**Last Updated**: 2026-03-16  
**Purpose**: Single-word commands that execute complex orchestrator workflows  

---

## 🎯 **Quick Reference**

### Maintenance Commands
- **`cleanup`** — 7-phase project maintenance (60-80 min)
- **`continue`** — Resume work on next task (varies)
- **`sync-guidelines`** — Sync guidelines with project state (20-30 min)
- **`update-docs`** — Update CHANGELOG, README, ATTRIBUTIONS (15-20 min)

### Code Quality Commands
- **`apply bem`** — BEM compliance audit + automated fixes (45-90 min)

### Audit Commands
- **`audit`** — Run ALL audits (creates 8 reports, ~90 min)
- **`audit routes`** — Routes system audit (creates report)
- **`audit sitemap`** — Sitemap data audit (creates report)
- **`audit tokens`** — Design token usage audit (creates report)
- **`audit css`** — CSS architecture audit (creates report)
- **`audit a11y`** — WCAG accessibility audit (creates report)
- **`audit data`** — Data file sizes audit (creates report)
- **`audit responsive`** — Responsive patterns audit (creates report)
- **`audit styles`** — Hardcoded styles audit (creates report)
- **`audit guidelines`** — Guideline compliance audit (creates report)

### Report Processing
- **`process reports`** — Convert all reports to task lists (15-20 min)

### Combined Workflows
- **`audit && process reports`** — Full audit + task creation (2-3 hours)
- **`cleanup && continue`** — Maintenance + resume next task (varies)

---

## 📋 **Detailed Command Reference**

### 1. Maintenance Commands

#### `cleanup`
**Prompt**: `/prompts/cleanup.md`  
**Duration**: 60-80 minutes  
**Output**: `/reports/cleanup-YYYY-MM-DD.md`, `/tasks/cleanup-task-list.md`  

**What It Does**:
- Phase 1: Filesystem audit & cleanup (15-20 min)
- Phase 2: Import & route validation (10-15 min)
- Phase 3: Task & report management (10-15 min)
- Phase 4: Documentation synchronization (15-20 min)
- Phase 5: DevTools data sync (10-15 min)
- Phase 6: Sitemap update (5-10 min)
- Phase 7: Changelog & final updates (5-10 min)

**When to Use**:
- Every 2-3 weeks as regular maintenance
- After major feature completions
- Before major releases
- When filesystem feels cluttered

**Example**:
```
User: cleanup
AI: [Executes 7-phase maintenance, creates cleanup report and task list]
```

---

#### `continue`
**Prompt**: `/prompts/continue.md`  
**Duration**: Varies  
**Output**: Depends on next task  

**What It Does**:
1. Reads `/tasks/task-list.md`
2. Identifies highest priority incomplete task
3. Executes that task
4. Updates task status
5. Reports completion

**When to Use**:
- After completing a task
- To resume work on active task lists
- When you want AI to pick next logical step

**Example**:
```
User: continue
AI: [Reads task-list.md, executes Routes Audit Task 1.2, updates status]
```

---

#### `sync-guidelines`
**Prompt**: `/prompts/sync-guidelines.md`  
**Duration**: 20-30 minutes  
**Output**: Updated guideline files  

**What It Does**:
- Scans current project state
- Updates component counts in guidelines
- Adds new components/tokens to documentation
- Verifies all documentation is current
- Updates cross-references

**When to Use**:
- Before running audits
- After adding new components
- Monthly maintenance
- Before major documentation updates

**Example**:
```
User: sync-guidelines
AI: [Scans project, updates 12 guideline files with current counts]
```

---

#### `update-docs`
**Prompt**: `/prompts/update-docs.md`  
**Duration**: 15-20 minutes  
**Output**: `/CHANGELOG.md`, `/README.md`, `/ATTRIBUTIONS.md`  

**What It Does**:
- Updates CHANGELOG.md with recent changes (Keep a Changelog format)
- Updates README.md stats (page count, pattern count, completion %)
- Updates ATTRIBUTIONS.md dependencies
- Verifies all links work
- Updates version numbers if warranted

**When to Use**:
- After completing major features
- Before releases
- Monthly documentation updates
- After dependency changes

**Example**:
```
User: update-docs
AI: [Updates CHANGELOG with v3.8.0 entry, README metrics, ATTRIBUTIONS deps]
```

---

### 2. Code Quality Commands

#### `apply bem`
**Prompt**: `/prompts/apply-bem.md`  
**Duration**: 45-90 minutes  
**Output**: `/reports/bem-audit-YYYY-MM-DD.md`, `/tasks/bem-task-list.md` (optional)  

**What It Does**:
- **Phase 1**: Scans all `.tsx` files for BEM compliance violations (15-20 min)
  - Missing BEM blocks
  - Inline styles replacing CSS variables
  - Tailwind over-use instead of semantic BEM
  - Inconsistent naming conventions
  - Orphan BEM classes (no CSS definition)
  - Non-editorial BEM patterns
- **Phase 2**: Verifies editorial design alignment (10-15 min)
  - Checks against `/guidelines/design-tokens/editorial-components.md`
  - Validates typography system (Playfair Display SC + Karla)
  - Verifies rooi rose brand color usage
  - Checks WCAG 2.2 AA/AAA compliance (color contrast, touch targets)
- **Phase 3**: Applies automated BEM fixes (20-40 min)
  - Converts inline styles to CSS variables
  - Replaces Tailwind clusters with semantic BEM classes
  - Standardizes naming to kebab-case
  - Creates missing BEM CSS definitions
  - Adds light/dark mode support
- **Phase 4**: Token gap analysis (10-15 min)
  - Identifies missing design tokens
  - Compares against existing CSS variable inventory
  - Recommends `audit tokens` if 5+ tokens missing
  - Recommends `audit css` if 10+ CSS issues found
- **Phase 5**: Creates comprehensive report (5-10 min)

**Editorial Design Requirements**:
- All BEM classes must follow magazine aesthetic
- Typography: Playfair Display SC (headings), Karla (body)
- Colors: Primary red (#e01e12), Navy (#172134), category accents
- 100% CSS variables (never hardcoded values)
- Light/dark mode support mandatory
- WCAG 2.2 AA minimum (AAA preferred)

**Violation Types Detected**:
1. **Critical**: Inline styles replacing CSS variables
2. **High**: Missing BEM blocks, WCAG violations
3. **Medium**: Tailwind over-use, inconsistent naming
4. **Low**: Orphan BEM classes, missing dark mode

**When to Use**:
- After major component additions
- Monthly code quality checks
- Before major releases
- After design system updates
- When BEM violations are suspected

**Example**:
```
User: apply bem
AI: [Scans 150 .tsx files, finds 42 violations, applies 38 auto-fixes]
    Created: /reports/bem-audit-2026-03-16.md
    Summary: 42 violations found, 38 fixed, 4 manual fixes needed
    Recommendations: Run audit tokens (5 missing tokens identified)
```

---

### 3. Audit Commands

#### `audit` (Meta-Command)
**Prompt**: `/prompts/audit.md` (NEW)  
**Duration**: ~90 minutes  
**Output**: 8 audit reports in `/reports/`  

**What It Does**:
Runs ALL audit commands in sequence:
1. `audit routes` (10 min)
2. `audit sitemap` (10 min)
3. `audit tokens` (15 min)
4. `audit css` (15 min)
5. `audit a11y` (20 min)
6. `audit data` (10 min)
7. `audit responsive` (10 min)
8. `audit styles` (10 min)

**Output Reports**:
- `/reports/routes-audit-YYYY-MM-DD.md`
- `/reports/sitemap-audit-YYYY-MM-DD.md`
- `/reports/tokens-audit-YYYY-MM-DD.md`
- `/reports/css-audit-YYYY-MM-DD.md`
- `/reports/a11y-audit-YYYY-MM-DD.md`
- `/reports/data-audit-YYYY-MM-DD.md`
- `/reports/responsive-audit-YYYY-MM-DD.md`
- `/reports/styles-audit-YYYY-MM-DD.md`

**When to Use**:
- Monthly comprehensive health checks
- Before major releases
- After large refactors
- When you want full project visibility

**Next Step**: Run `process reports` to convert to task lists

**Example**:
```
User: audit
AI: [Runs 8 audits sequentially, creates 8 reports in ~90 minutes]
```

---

#### `audit routes`
**Prompt**: `/prompts/audit-routes.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/routes-audit-YYYY-MM-DD.md`  

**What It Does**:
- Scans `/src/app/routes.tsx` for all routes
- Verifies route → page file mappings
- Checks for orphaned pages
- Validates lazy-loaded routes
- Identifies missing routes
- Tests route redirects
- Counts total routes

**Report Includes**:
- Total routes count
- Missing routes list
- Orphaned pages list
- Broken redirects
- Route health score

**Example Output**:
```markdown
# Routes Audit Report — 2026-03-15

**Routes Found**: 180
**Missing Routes**: 2 (Foundations, LegacyCompetition)
**Orphaned Pages**: 1 (Foundations.tsx)
**Health Score**: 98%
```

---

#### `audit sitemap`
**Prompt**: `/prompts/audit-sitemap.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/sitemap-audit-YYYY-MM-DD.md`  

**What It Does**:
- Scans `/src/app/data/sitemap.ts`
- Compares sitemap data with routes.tsx
- Identifies missing sitemap entries
- Checks for broken sitemap links
- Verifies category organization
- Tests sitemap page rendering

**Report Includes**:
- Total sitemap entries
- Missing routes from sitemap
- Broken sitemap links
- Category coverage
- Sitemap health score

---

#### `audit tokens`
**Prompt**: `/prompts/audit-tokens.md` (NEW)  
**Duration**: 15 minutes  
**Output**: `/reports/tokens-audit-YYYY-MM-DD.md`  

**What It Does**:
- Compares CSS tokens (theme.css) with data tokens (designTokens.ts)
- Checks for token misalignment
- Identifies unused tokens
- Finds missing tokens
- Verifies Tailwind class mappings
- Checks WordPress preset alignment

**Report Includes**:
- Total tokens count
- CSS-to-data alignment score
- Missing tokens list
- Unused tokens list
- Recommendations

---

#### `audit css`
**Prompt**: `/prompts/audit-css.md` (NEW)  
**Duration**: 15 minutes  
**Output**: `/reports/css-audit-YYYY-MM-DD.md`  

**What It Does**:
- Scans all 17 CSS files
- Checks import order in index.css
- Identifies duplicate utilities
- Verifies dark mode coverage
- Analyzes file sizes
- Checks for unused CSS
- Tests responsive breakpoints

**Report Includes**:
- CSS file count and sizes
- Import order validation
- Duplicate utilities found
- Dark mode coverage %
- Optimization opportunities

---

#### `audit a11y`
**Prompt**: `/prompts/audit-a11y.md` (NEW)  
**Duration**: 20 minutes  
**Output**: `/reports/a11y-audit-YYYY-MM-DD.md`  

**What It Does**:
- Runs automated WCAG 2.1 AA checks
- Tests keyboard navigation
- Checks color contrast ratios
- Validates ARIA labels
- Tests screen reader compatibility
- Checks form accessibility
- Validates heading hierarchy
- Tests image alt text

**Report Includes**:
- WCAG compliance score
- Critical issues count
- Color contrast violations
- Missing ARIA labels
- Keyboard navigation issues
- Recommendations by priority

---

#### `audit data`
**Prompt**: `/prompts/audit-data.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/data-audit-YYYY-MM-DD.md`  

**What It Does**:
- Scans all files in `/src/app/data/`
- Measures file sizes
- Identifies large data files (>100KB)
- Checks for duplicate data
- Analyzes import patterns
- Suggests optimizations

**Report Includes**:
- Data file count
- Total data size
- Large files list
- Duplicate data found
- Optimization recommendations

---

#### `audit responsive`
**Prompt**: `/prompts/audit-responsive.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/responsive-audit-YYYY-MM-DD.md`  

**What It Does**:
- Tests responsive breakpoints
- Checks mobile-first patterns
- Validates media queries
- Tests touch targets (min 44x44px)
- Checks viewport meta tags
- Tests text readability on mobile

**Report Includes**:
- Breakpoint usage analysis
- Mobile-first compliance
- Touch target violations
- Responsive issues by page
- Recommendations

---

#### `audit styles`
**Prompt**: `/prompts/audit-styles.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/styles-audit-YYYY-MM-DD.md`  

**What It Does**:
- Scans all TypeScript/TSX files for inline styles
- Identifies hardcoded style objects
- Finds `style={{}}` usage
- Checks for className vs style patterns
- Suggests Tailwind replacements

**Report Includes**:
- Hardcoded styles count
- Files with inline styles
- Style → Tailwind suggestions
- Style consistency score

---

#### `audit guidelines`
**Prompt**: `/prompts/audit-guidelines.md` (NEW)  
**Duration**: 10 minutes  
**Output**: `/reports/guidelines-audit-YYYY-MM-DD.md`  

**What It Does**:
- Verifies guideline counts match reality
- Checks for outdated documentation
- Validates cross-references
- Tests guideline links
- Checks for missing guidelines

**Report Includes**:
- Total guidelines count
- Outdated guidelines list
- Broken cross-references
- Missing guidelines
- Documentation health score

---

### 4. Report Processing

#### `process reports`
**Prompt**: `/prompts/process-reports.md`  
**Duration**: 15-20 minutes  
**Output**: Task lists in `/tasks/`  

**What It Does**:
1. Scans `/reports/` for all audit reports
2. Extracts issues from each report
3. Creates prioritized task lists
4. Estimates effort for each task
5. Updates `/tasks/task-list.md`
6. Archives processed reports

**Task Lists Created**:
- `/tasks/routes-task-list.md`
- `/tasks/sitemap-task-list.md`
- `/tasks/tokens-task-list.md`
- `/tasks/css-task-list.md`
- `/tasks/a11y-task-list.md`
- `/tasks/data-task-list.md`
- `/tasks/responsive-task-list.md`
- `/tasks/styles-task-list.md`

**When to Use**:
- After running `audit` command
- After creating individual audit reports
- To convert findings into actionable tasks

**Example**:
```
User: process reports
AI: [Scans 8 reports, creates 8 task lists with 120 total tasks]
```

---

### 5. Combined Workflows

#### `audit && process reports`
**Duration**: 2-3 hours  
**Output**: 8 reports + 8 task lists  

**What It Does**:
1. Runs `audit` (all 8 audits, ~90 min)
2. Runs `process reports` (converts to tasks, ~20 min)
3. Updates master task list
4. Creates summary report

**When to Use**:
- Monthly comprehensive project health check
- Before major releases
- After large refactors
- For complete project visibility + action plan

**Example**:
```
User: audit && process reports
AI: [Runs all audits, creates reports, converts to task lists]
    Summary: 8 audits complete, 120 tasks created across 8 lists
```

---

#### `cleanup && continue`
**Duration**: Varies  
**Output**: Cleanup report + next task completion  

**What It Does**:
1. Runs `cleanup` (7-phase maintenance)
2. Runs `continue` (executes next priority task)

**When to Use**:
- Regular maintenance sessions
- After completing task batches
- Weekly project upkeep

**Example**:
```
User: cleanup && continue
AI: [Runs cleanup, creates report, then executes Routes Audit Task 1.2]
```

---

## 🔄 **Workflow Recommendations**

### Monthly Maintenance Workflow
```
Week 1: audit && process reports
Week 2: continue (work through high-priority tasks)
Week 3: continue (work through medium-priority tasks)
Week 4: cleanup && sync-guidelines
```

### Pre-Release Workflow
```
1. sync-guidelines
2. audit && process reports
3. Work through critical/high priority tasks
4. cleanup
5. update-docs
6. Final QA pass
```

### After Major Feature Workflow
```
1. cleanup
2. audit (just the relevant audits)
3. process reports
4. continue (fix critical issues)
5. update-docs
```

---

## 📂 **File Organization**

### Prompts Directory (`/prompts/`)
```
cleanup.md
continue.md
sync-guidelines.md
update-docs.md
audit.md (NEW - meta-audit)
audit-routes.md (NEW)
audit-sitemap.md (NEW)
audit-tokens.md (NEW)
audit-css.md (NEW)
audit-a11y.md (NEW)
audit-data.md (NEW)
audit-responsive.md (NEW)
audit-styles.md (NEW)
audit-guidelines.md (NEW)
process-reports.md (existing)
apply-bem.md (NEW)
```

### Reports Directory (`/reports/`)
```
cleanup-YYYY-MM-DD.md
routes-audit-YYYY-MM-DD.md
sitemap-audit-YYYY-MM-DD.md
tokens-audit-YYYY-MM-DD.md
css-audit-YYYY-MM-DD.md
a11y-audit-YYYY-MM-DD.md
data-audit-YYYY-MM-DD.md
responsive-audit-YYYY-MM-DD.md
styles-audit-YYYY-MM-DD.md
guidelines-audit-YYYY-MM-DD.md
bem-audit-YYYY-MM-DD.md (NEW)
```

### Tasks Directory (`/tasks/`)
```
task-list.md (master)
cleanup-task-list.md
routes-task-list.md
sitemap-task-list.md
tokens-task-list.md
css-task-list.md
a11y-task-list.md
data-task-list.md
responsive-task-list.md
styles-task-list.md
guidelines-task-list.md
bem-task-list.md (NEW)
```

---

## 🎯 **Trigger Word Standards**

### Naming Conventions
- **Single word**: `cleanup`, `continue`, `audit`
- **Compound**: `audit routes`, `audit css`, `process reports`
- **Combined**: `cleanup && continue`, `audit && process reports`

### Prompt File Requirements
1. **Location**: `/prompts/[trigger-name].md`
2. **Version**: Include version number
3. **Duration**: Estimated execution time
4. **Output**: What files are created
5. **Checklist**: Step-by-step execution tasks
6. **Success Criteria**: Clear completion metrics

### Report File Requirements
1. **Location**: `/reports/[audit-name]-YYYY-MM-DD.md`
2. **Template**: Follow report template structure
3. **Metrics**: Include quantitative health scores
4. **Issues**: Prioritized list (Critical, High, Medium, Low)
5. **Recommendations**: Actionable next steps

### Task List File Requirements
1. **Location**: `/tasks/[audit-name]-task-list.md`
2. **Template**: Follow task list template structure
3. **Phases**: Group tasks by phase
4. **Priority**: Mark each task priority
5. **Effort**: Estimate time for each task
6. **Status**: Track completion percentage

---

## 📚 **Related Documentation**

- [Prompt Trigger Words Guide](/guidelines/development/prompt-trigger-words.md) — Original guide (keep in sync)
- [Prompt → Report → Task Workflow](/guidelines/development/prompt-report-task-workflow.md) — Workflow standards
- [Report Creation Guidelines](/guidelines/development/report-creation-guidelines.md) — Report formatting
- [Task Management Guidelines](/guidelines/development/task-management-guidelines.md) — Task list standards
- [File Organization](/guidelines/development/file-organization.md) — File placement rules

---

## 🔧 **For AI Assistants**

### How to Recognize Trigger Words
1. User types single word or compound phrase
2. Match against trigger list (case-insensitive)
3. If match found, read corresponding prompt file
4. Execute prompt instructions
5. Create output files as specified
6. Report completion to user

### Example Recognition Flow
```
User input: "audit css"
↓
AI checks: Is "audit css" in trigger list? YES
↓
AI reads: /prompts/audit-css.md
↓
AI executes: CSS architecture audit
↓
AI creates: /reports/css-audit-2026-03-15.md
↓
AI reports: "CSS audit complete. Created report with 15 findings."
```

---

**Version History**:
- **v2.1.0** (2026-03-16) — Added `apply bem` code quality trigger + BEM methodology integration
- **v2.0.0** (2026-03-15) — Added comprehensive audit framework, 9 new audit triggers
- **v1.0.0** (2026-03-13) — Initial creation with cleanup, continue, sync-guidelines, update-docs

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-16