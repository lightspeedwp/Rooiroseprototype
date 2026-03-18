# Audit CSS — CSS Architecture Audit Orchestrator

**Version**: 1.0.0  
**Created**: 2026-03-16  
**Purpose**: Comprehensive CSS architecture audit, file organization, and optimization analysis  
**Trigger Word**: `audit css`  
**Duration**: 15-20 minutes

---

## 🎯 **MISSION**

Execute a **complete CSS architecture audit** across all stylesheets, identify organizational issues, check for duplicates, verify dark mode coverage, analyze file sizes, and recommend optimizations.

---

## 📋 **EXECUTION WORKFLOW**

Execute these phases **in sequence**:

### Phase 1: CSS File Inventory (3-5 min)

#### Step 1.1: Scan All CSS Files
**Action**: List all CSS files in `/src/styles/`

**Files to Inventory**:
- Core theme files (theme.css, theme-*.css)
- Component styles (article-content.css, utilities.css)
- WordPress styles (wp-utilities.css, block-style-variations.css)
- Utility files (tailwind.css, dark-mode-utilities.css)
- Font files (fonts.css, font-enforcement.css)
- Other styles (markdown-prose.css, print.css)

**Metrics to Collect**:
- Total CSS files
- File sizes (bytes, KB)
- Line counts
- Total CSS size

---

#### Step 1.2: Verify Import Order
**Action**: Check `/src/styles/index.css` for correct import sequence

**Expected Import Order**:
1. Fonts first (`fonts.css`)
2. Tailwind base (`tailwind.css`)
3. Theme tokens (`theme-tokens.css`)
4. Theme dark mode (`theme-dark.css`)
5. Theme exports (`theme-exports.css`)
6. Base styles (`theme-base.css`)
7. WordPress utilities (`wp-utilities.css`)
8. Block variations (`block-style-variations.css`)
9. Component styles (`article-content.css`, `utilities.css`)
10. Dark mode utilities (`dark-mode-utilities.css`)
11. Font enforcement (`font-enforcement.css`)
12. Special files (`markdown-prose.css`, `print.css`)
13. Animations (`tw-animate.css`)

**Issues to Flag**:
- Out-of-order imports
- Missing imports
- Duplicate imports
- Circular dependencies

---

### Phase 2: CSS Organization Analysis (4-6 min)

#### Step 2.1: Analyze CSS Layers
**Action**: Verify proper use of `@layer` directive

**Layer Structure**:
- `@layer base` — Global resets, element defaults
- `@layer components` — Reusable components (BEM blocks)
- `@layer utilities` — Single-purpose utilities
- `@layer overrides` — WordPress/plugin overrides

**Checks**:
- Are layers used consistently?
- Are BEM blocks in `@layer components`?
- Are utilities in `@layer utilities`?
- Any styles outside layers?

---

#### Step 2.2: Check for Duplicate Utilities
**Action**: Scan all CSS files for duplicate class definitions

**Duplicate Patterns to Find**:
- Same class name in multiple files
- Identical CSS rules with different selectors
- Redundant utility classes

**Example**:
```css
/* Duplicate if found in multiple files */
.text-center { text-align: center; }
.center-text { text-align: center; }
```

---

### Phase 3: Dark Mode Coverage Audit (3-4 min)

#### Step 3.1: Scan Dark Mode Definitions
**Action**: Check all CSS files for dark mode support

**Dark Mode Patterns**:
1. `@media (prefers-color-scheme: dark)` blocks
2. `.dark {}` class overrides
3. CSS variables with `-dark` suffix

**Coverage Metrics**:
- Total color-related classes
- Classes with dark mode variants
- Dark mode coverage percentage

**Example Check**:
```css
/* Light mode */
.article-title { color: var(--contrast); }

/* Dark mode - REQUIRED */
@media (prefers-color-scheme: dark) {
  .article-title { color: var(--base); }
}
```

---

#### Step 3.2: Identify Dark Mode Gaps
**Action**: Find classes using colors without dark variants

**High Priority Gaps**:
- Text color classes without dark mode
- Background color classes without dark mode
- Border color classes without dark mode

---

### Phase 4: CSS Variable Usage (2-3 min)

#### Step 4.1: Audit CSS Variable Consistency
**Action**: Verify all styles use CSS variables instead of hardcoded values

**Checks**:
- Count hardcoded color values (e.g., `#e01e12`, `rgb()`, `hsl()`)
- Count hardcoded spacing values (e.g., `16px`, `2rem`)
- Count hardcoded font values (e.g., `"Karla"`, `sans-serif`)

**Expected**:
- ✅ `color: var(--custom-primary)`
- ❌ `color: #e01e12`

---

#### Step 4.2: Verify Token Alignment
**Action**: Check if CSS variables match design tokens

**Files to Compare**:
- `/src/styles/theme.css` — Canonical token definitions
- `/src/styles/theme-tokens.css` — Active token file
- `/src/app/data/designTokens.ts` — TypeScript token data

**Checks**:
- Are CSS variables in sync with TypeScript?
- Are token names consistent?
- Any missing tokens?

---

### Phase 5: File Size & Performance (2-3 min)

#### Step 5.1: Measure CSS File Sizes
**Action**: Calculate total CSS size and identify large files

**Size Thresholds**:
- 🟢 **Small**: < 10 KB (optimal)
- 🟡 **Medium**: 10-30 KB (acceptable)
- 🟠 **Large**: 30-50 KB (review for splitting)
- 🔴 **Very Large**: > 50 KB (needs optimization)

**Metrics**:
- Total CSS size (all files combined)
- Largest file
- Average file size

---

#### Step 5.2: Identify Optimization Opportunities
**Action**: Find CSS that can be optimized

**Optimization Checks**:
- Unused CSS selectors (classes not found in TSX)
- Overly specific selectors (e.g., `.class1 .class2 .class3 .class4`)
- Repeated CSS rules (same properties in multiple places)
- Large media query blocks
- Commented-out code blocks

---

### Phase 6: Responsive Breakpoints (2-3 min)

#### Step 6.1: Audit Breakpoint Usage
**Action**: Verify consistent responsive breakpoints

**Standard Breakpoints**:
- `640px` (sm) — Mobile landscape
- `768px` (md) — Tablet portrait
- `1024px` (lg) — Tablet landscape / small desktop
- `1280px` (xl) — Desktop
- `1536px` (2xl) — Large desktop

**Checks**:
- Are custom breakpoints used consistently?
- Any non-standard breakpoints (e.g., `@media (max-width: 720px)`)?
- Are breakpoints mobile-first (`min-width`) or desktop-first (`max-width`)?

---

### Phase 7: Create Report (2-3 min)

#### Step 7.1: Generate CSS Audit Report
**Action**: Create comprehensive report at `/reports/css-audit-YYYY-MM-DD.md`

**Report Template**:
```markdown
# CSS Architecture Audit Report — YYYY-MM-DD

**Executed**: YYYY-MM-DD  
**Duration**: XX minutes  
**Status**: ✅ Complete  

---

## Summary

- **Total CSS Files**: XX
- **Total CSS Size**: XXX KB
- **Largest File**: filename.css (XX KB)
- **Import Order**: ✅ / ⚠️ / ❌
- **Dark Mode Coverage**: XX%
- **CSS Variable Usage**: XX%
- **Duplicate Utilities**: XX found
- **Optimization Score**: XX/100

---

## File Inventory

| File | Size | Lines | Layer | Status |
|:-----|:-----|:------|:------|:-------|
| theme-tokens.css | XX KB | XXX | base | ✅ |
| theme-dark.css | XX KB | XXX | base | ✅ |
| article-content.css | XX KB | XXX | components | ⚠️ Large |
| ... | ... | ... | ... | ... |

---

## Import Order Validation

✅ **Status**: Correct order  
OR  
⚠️ **Issues Found**:
- fonts.css imported after theme-tokens.css (should be first)
- Missing import: dark-mode-utilities.css

---

## Dark Mode Coverage

**Coverage**: XX% (XX classes with dark variants / XX total classes)

**Missing Dark Mode**:
- `.class-name` (uses color but no dark variant)
- `.another-class` (uses background-color but no dark variant)

---

## CSS Variable Consistency

**Hardcoded Values Found**: XX instances

**Violations**:
- `file.css:42` — `color: #e01e12` (should use `var(--custom-primary)`)
- `file.css:87` — `padding: 32px` (should use `var(--wp--preset--spacing--medium)`)

---

## Duplicate Utilities

**Duplicates Found**: XX instances

**Examples**:
- `.text-center` defined in utilities.css AND wp-utilities.css
- `.flex-center` duplicates `.flex-center-items`

---

## File Size Analysis

**Total CSS Size**: XXX KB

**Large Files**:
- theme.css — XX KB (reference file, not imported ✅)
- block-style-variations.css — XX KB (consider splitting by block type)

---

## Optimization Opportunities

1. **Unused CSS**: XX selectors not found in any TSX file
2. **Overly Specific Selectors**: XX instances of 4+ level nesting
3. **Repeated Rules**: XX duplicate property sets
4. **Commented Code**: XX lines of commented CSS (remove?)

---

## Recommendations

### High Priority
- [ ] Fix import order issues
- [ ] Add dark mode variants for XX classes
- [ ] Replace XX hardcoded values with CSS variables

### Medium Priority
- [ ] Remove duplicate utilities
- [ ] Optimize large files (split if >50 KB)
- [ ] Run unused CSS detection

### Low Priority
- [ ] Clean up commented code
- [ ] Standardize breakpoints
- [ ] Document CSS architecture in guidelines

---

## Next Steps

1. Create task list: `/tasks/css-task-list.md`
2. Fix critical issues (import order, hardcoded values)
3. Expand dark mode coverage to 100%
4. Run `audit tokens` to verify token alignment

---

**Completed by**: Figma Make AI  
**Review Status**: Ready for review  
**Next Audit**: YYYY-MM-DD (30 days)
```

---

## 📊 **SUCCESS CRITERIA**

CSS audit is **100% complete** when:

- ✅ All CSS files inventoried with sizes and line counts
- ✅ Import order verified in index.css
- ✅ CSS layers checked for proper usage
- ✅ Duplicate utilities identified
- ✅ Dark mode coverage percentage calculated
- ✅ CSS variable usage audited (hardcoded values flagged)
- ✅ File sizes measured and large files identified
- ✅ Responsive breakpoints checked for consistency
- ✅ Report created at `/reports/css-audit-YYYY-MM-DD.md`
- ✅ Recommendations provided with priority levels

---

## 💬 **HOW TO TRIGGER THIS PROMPT**

Simply type:

```
audit css
```

The AI will execute the full CSS architecture audit automatically.

---

**Version History**:
- **v1.0.0** (2026-03-16) — Initial creation

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-16
