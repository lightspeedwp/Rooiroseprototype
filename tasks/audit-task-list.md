# Audit task list - 2026-03-17

**Source**: `/reports/comprehensive-audit-2026-03-17.md`  
**Created**: 2026-03-17  
**Priority**: High → Medium → Low

---

## Task summary

| Priority | Tasks | Estimated | Status |
|:---------|:------|:----------|:-------|
| **High** | 15 | 6-8 hours | 🔄 Ready |
| **Medium** | 12 | 4-6 hours | 📋 Planned |
| **Low** | 8 | 2-3 hours | 📋 Planned |
| **TOTAL** | **35** | **12-17 hours** | - |

---

## High priority tasks (15 tasks)

### BEM compliance

- [ ] **Task 1.1**: Audit `/src/app/components/layouts/Header.tsx` for BEM violations
- [ ] **Task 1.2**: Apply BEM to Header component
- [ ] **Task 1.3**: Audit `/src/app/components/layouts/Footer.tsx` for BEM violations
- [ ] **Task 1.4**: Apply BEM to Footer component
- [ ] **Task 1.5**: Audit `/src/app/components/navigation/MobileMenu.tsx` for BEM violations
- [ ] **Task 1.6**: Apply BEM to MobileMenu component
- [ ] **Task 1.7**: Audit `/src/app/components/navigation/MegaMenu.tsx` for BEM violations
- [ ] **Task 1.8**: Apply BEM to MegaMenu component
- [ ] **Task 1.9**: Audit all `/src/app/components/category/` components for BEM violations
- [ ] **Task 1.10**: Apply BEM to category components

### Component structure

- [ ] **Task 2.1**: Split Header.tsx into sub-components (extract TopBar, MainNav, MegaMenu)
- [ ] **Task 2.2**: Split MegaMenu.tsx into sub-components (extract category sections)
- [ ] **Task 2.3**: Verify all components have proper TypeScript interfaces
- [ ] **Task 2.4**: Add JSDoc comments to complex components
- [ ] **Task 2.5**: Review component file sizes (>300 lines needs splitting)

---

## Medium priority tasks (12 tasks)

### Token verification

- [ ] **Task 3.1**: Scan all components for hardcoded colors (search `bg-[#`, `text-[#`)
- [ ] **Task 3.2**: Replace hardcoded colors with design tokens
- [ ] **Task 3.3**: Scan all components for hardcoded spacing values
- [ ] **Task 3.4**: Replace hardcoded spacing with semantic tokens
- [ ] **Task 3.5**: Verify all defined color tokens are used (remove unused)
- [ ] **Task 3.6**: Verify all spacing tokens are used (remove unused)

### Dark mode

- [ ] **Task 4.1**: Test all pages in dark mode (prefers-color-scheme: dark)
- [ ] **Task 4.2**: Verify all color tokens have dark mode equivalents
- [ ] **Task 4.3**: Check dark mode contrast ratios (WCAG AA compliance)
- [ ] **Task 4.4**: Fix any dark mode-only visual issues

### CSS cleanup

- [ ] **Task 5.1**: Consolidate `theme.css` and `theme-base.css`
- [ ] **Task 5.2**: Review CSS import order in `index.css`

---

## Low priority tasks (8 tasks)

### Data validation

- [ ] **Task 6.1**: Verify all article dates use ISO 8601 format
- [ ] **Task 6.2**: Check all article image paths for consistency
- [ ] **Task 6.3**: Validate category ID references across data files
- [ ] **Task 6.4**: Check Afrikaans content completeness (no English placeholders)

### CSS optimization

- [ ] **Task 7.1**: Merge `utilities.css` and `dark-mode-utilities.css`
- [ ] **Task 7.2**: Identify and remove unused CSS variables
- [ ] **Task 7.3**: Document CSS architecture in `/docs/CSS-ARCHITECTURE.md`
- [ ] **Task 7.4**: Measure CSS file sizes and optimize largest files

---

## Task dependencies

```
BEM compliance (Tasks 1.1-1.10)
  ↓
Component structure (Tasks 2.1-2.5)
  ↓
Token verification (Tasks 3.1-3.6)
  ↓
Dark mode (Tasks 4.1-4.4)
  ↓
CSS cleanup (Tasks 5.1-5.2)
  ↓
Data validation (Tasks 6.1-6.4)
  ↓
CSS optimization (Tasks 7.1-7.4)
```

---

## Execution strategy

### Phase 1: BEM compliance (6-8 hours)

**Execute immediately** (this session):
1. Run automated BEM scan
2. Generate BEM violation report
3. Apply BEM fixes component by component
4. Test visual consistency after changes

**Tools**:
- Regex search for class name patterns
- Find/replace for common violations
- Visual diff for verification

### Phase 2: Token & structure (4-6 hours)

**Execute next** (follow-up session):
1. Component splitting
2. Token verification
3. Dark mode testing
4. CSS consolidation

### Phase 3: Optimization (2-3 hours)

**Execute last** (maintenance session):
1. Data validation
2. CSS optimization
3. Documentation updates

---

## Success criteria

### BEM compliance

- ✅ All custom components use BEM naming (block__element--modifier)
- ✅ No single-hyphen element separators (use double underscore)
- ✅ Consistent modifier patterns (double hyphen)
- ✅ UI library components excluded (shadcn/ui can stay utility-first)

### Token usage

- ✅ No hardcoded colors in custom components
- ✅ All spacing uses semantic tokens
- ✅ No unused tokens in designTokens.ts
- ✅ Dark mode tokens verified

### Component structure

- ✅ No component files >300 lines
- ✅ All components have TypeScript interfaces
- ✅ Complex components split into sub-components
- ✅ JSDoc comments on public APIs

### CSS architecture

- ✅ CSS files consolidated (17 → 12)
- ✅ No unused CSS variables
- ✅ Clear import order
- ✅ Documented architecture

---

## Automation opportunities

### BEM scanning

Create automated script to detect BEM violations:

```bash
# Find single-hyphen class names (potential violations)
grep -r "className=\"[a-z]+-[a-z]+" src/app/components/ --exclude-dir=ui

# Find double-hyphen modifiers (correct)
grep -r "className=\"[a-z]+--" src/app/components/

# Find double-underscore elements (correct)
grep -r "className=\"[a-z]+__" src/app/components/
```

### Token scanning

```bash
# Find hardcoded colors
grep -r "bg-\[#" src/app/components/
grep -r "text-\[#" src/app/components/
grep -r "border-\[#" src/app/components/

# Find hardcoded spacing
grep -r "gap-[0-9]" src/app/components/
grep -r "p-[0-9]" src/app/components/
grep -r "m-[0-9]" src/app/components/
```

---

## Risk assessment

### High risk changes

**BEM refactoring**:
- **Risk**: Breaking visual styles
- **Mitigation**: Visual diff testing, CSS specificity check
- **Rollback**: Git branches, incremental changes

### Medium risk changes

**Component splitting**:
- **Risk**: Breaking imports/references
- **Mitigation**: TypeScript compilation check, search for imports
- **Rollback**: Keep original files until verified

### Low risk changes

**CSS consolidation**:
- **Risk**: Import order issues
- **Mitigation**: Test in Figma Make after changes
- **Rollback**: Simple file restore

---

## Notes

### BEM exceptions

**Allow utility-first for**:
- `/src/app/components/ui/*` — shadcn/ui library
- Layout utilities (flex, grid) — Can mix with BEM
- Responsive modifiers — Tailwind breakpoints OK

**Example acceptable pattern**:
```tsx
<div className="article-card flex flex-col gap-4 md:flex-row">
  <img className="article-card__image rounded-lg" />
  <div className="article-card__content">
    <h3 className="article-card__title">Title</h3>
  </div>
</div>
```

### Token usage exceptions

**Allow hardcoded values for**:
- One-off unique sizes (very rare cases)
- Third-party component overrides
- Animations (can use arbitrary values)

**But document why**:
```tsx
// ✅ Documented exception
<div className="w-[347px]"> {/* Figma design spec: exact match */}
```

---

## Progress tracking

**Update this section as tasks complete**:

```
Total tasks: 35
Completed: 0
In progress: 0
Blocked: 0
Remaining: 35

Progress: 0%
```

---

## Related files

- **Audit report**: `/reports/comprehensive-audit-2026-03-17.md`
- **BEM task list**: Will be generated by `apply bem` command
- **Design tokens**: `/src/app/data/designTokens.ts`
- **CSS files**: `/src/styles/*`
- **Components**: `/src/app/components/*`

---

**Created by**: AI Assistant  
**Date**: 2026-03-17  
**Source**: Comprehensive audit report  
**Status**: Ready for execution
