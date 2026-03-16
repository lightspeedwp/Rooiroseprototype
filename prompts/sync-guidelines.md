# Guidelines Synchronization

**Type**: Single Prompt  
**Created**: 2026-03-15  
**Version**: 1.0.0  
**Estimated Duration**: 20-30 minutes  
**Trigger Word**: `sync-guidelines`

---

## Purpose

Synchronize all guidelines with current project state. Update documentation to reflect actual implementation, design tokens, and standards. Ensure guidelines are accurate before running any audits.

---

## Prerequisites

**Required Before Running**:
- [ ] Recent changes to design tokens or implementation completed
- [ ] New components or patterns added

---

## Scope

**Guidelines to Sync**:

### Design Tokens
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/design-tokens/shadows.md`
- `/guidelines/design-tokens/borders.md`
- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md`

### Component Guidelines
- `/guidelines/components/component-library.md`
- `/guidelines/development/component-guidelines.md`

### Development Guidelines
- `/guidelines/development/file-organization.md`
- `/guidelines/development/coding-standards.md`
- `/guidelines/development/css-architecture.md`

### Master Documents
- `/guidelines/Guidelines.md`
- `/guidelines/MASTER-INDEX.md`
- `/README.md`

---

## Execution Instructions

### Phase 1: Scan Current State (Est. 10 min)

**Objective**: Inventory current implementation

**Tasks**:
1. **Design Tokens**:
   - Read `/src/styles/theme.css` - extract current CSS custom properties
   - Read `/src/styles/theme-tokens.css` - extract design token values
   - Count total tokens by category (colors, spacing, typography, etc.)

2. **Components**:
   - List all components in `/src/app/components/`
   - Count components by category (common, patterns, ui, etc.)
   - Identify new components since last sync

3. **Routes & Pages**:
   - Read `/src/app/routes.tsx` - count total routes
   - List all pages in `/src/app/pages/`
   - Verify sitemap accuracy

4. **Patterns & Templates**:
   - Count WordPress patterns in `/wordpress-export/themes/die-papier-theme/patterns/`
   - Count templates in `/wordpress-export/themes/die-papier-theme/templates/`

**Output**:
- Current state inventory
- Counts for all major categories

### Phase 2: Compare with Guidelines (Est. 10 min)

**Objective**: Identify discrepancies between docs and implementation

**For Each Guideline**:
1. Read guideline file
2. Extract documented counts/lists
3. Compare with current state inventory
4. Flag differences

**Common Discrepancies**:
- Guideline says "50 components" but actual is 75
- Guideline missing new design tokens
- Component list outdated
- Route count incorrect
- Examples reference old file structures

**Output**:
- List of discrepancies
- Severity (critical, high, medium, low)

### Phase 3: Update Guidelines (Est. 10 min)

**Objective**: Bring all guidelines up to date

**For Each Discrepancy**:
1. Update counts/numbers
2. Add missing components/tokens
3. Remove deprecated items
4. Update examples to match current structure
5. Verify cross-references still valid

**Priority Updates**:

1. **Design System Guide**:
   - Update token counts
   - Update color palette if changed
   - Update typography scale if changed

2. **Component Library**:
   - Add new components
   - Update component counts
   - Verify all examples work

3. **Master Index**:
   - Update document counts
   - Verify all links work
   - Add new sections if needed

4. **README**:
   - Update project status
   - Update feature list
   - Update statistics

**Output**:
- Updated guideline files
- Change summary

---

## Report Requirements

**Report Location**: `/reports/guidelines-sync-report-YYYY-MM-DD.md`

**Required Sections**:

### 1. Executive Summary
```markdown
## Executive Summary

**Sync Date**: YYYY-MM-DD
**Guidelines Updated**: X files
**Discrepancies Found**: Y
**All Fixed**: ✅ Yes | ❌ No

**Categories Updated**:
- Design Tokens: X changes
- Components: Y changes
- Routes: Z changes
- Patterns: W changes
```

### 2. Current State Inventory
```markdown
## Current State Inventory

### Design Tokens
- Total Tokens: X
- Colors: Y
- Typography: Z
- Spacing: W
- Shadows: V
- Borders: U

### Components
- Total Components: X
- Common: Y
- Patterns: Z
- UI: W
- Pages: V

### Routes
- Total Routes: X
- Public Routes: Y
- Auth Routes: Z

### WordPress Assets
- Patterns: X
- Templates: Y
- Template Parts: Z
```

### 3. Discrepancies Found
```markdown
## Discrepancies Found

### Discrepancy 1: Component Count Mismatch

**Guideline**: /guidelines/components/component-library.md
**Documented**: 50 components
**Actual**: 75 components
**Severity**: High
**Fixed**: ✅ Updated count to 75
```

### 4. Changes Made
```markdown
## Changes Made

### Updated Files

1. **/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md**
   - Updated token count from 120 to 145
   - Added new shadow tokens
   - Updated color palette section

2. **/guidelines/components/component-library.md**
   - Updated component count from 50 to 75
   - Added 25 new components to inventory
   - Updated examples for 5 components

[Continue for all updated files]
```

### 5. Verification
```markdown
## Verification

**All Cross-References**: ✅ Valid
**All Examples**: ✅ Working
**All Counts**: ✅ Accurate
**All Links**: ✅ Active
```

---

## Auto-Update Mode

This prompt auto-updates guidelines without creating a task list.

**Why?**
- Guideline sync is maintenance, not a feature
- Changes are straightforward (update numbers, add items)
- No complex refactoring required

**Process**:
1. Scan current state
2. Compare with guidelines
3. Update immediately
4. Create report
5. Done

---

## Success Criteria

- [ ] All guidelines scanned
- [ ] Current state inventory complete
- [ ] Discrepancies identified
- [ ] All discrepancies fixed
- [ ] Guidelines updated
- [ ] Cross-references verified
- [ ] Report created

---

## Notes

**When to Run**:
- Before running any audit prompts
- After adding new components
- After updating design tokens
- Before major releases
- Monthly as regular maintenance

**What to Update**:
- Counts (components, tokens, routes, patterns)
- Lists (new components, new pages)
- Examples (ensure they work with current code)
- Cross-references (verify links still valid)
- Statistics (compliance rates, coverage percentages)

**What NOT to Change**:
- Core principles or standards
- Architectural decisions (unless explicitly changed)
- Guideline structure
- Template formats

---

**Related Prompts**:
- `/prompts/cleanup.md`
- `/prompts/audit-files.md`

**Related Guidelines**:
- `/guidelines/development/prompt-report-task-workflow.md`
- `/guidelines/core-repository-guidelines.md`

**Created By**: DevOps Team  
**Last Updated**: 2026-03-15
