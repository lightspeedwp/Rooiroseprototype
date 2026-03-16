# CSS Architecture Audit — Task List

**Created**: 2026-03-15  
**Trigger**: `css`  
**Status**: 0/15 tasks complete (0%)  

---

## Summary

- **Critical**: 3 tasks (40 min)
- **High**: 5 tasks (60 min)
- **Medium**: 5 tasks (50 min)
- **Low**: 2 tasks (20 min)
- **Total Effort**: 2 hours 50 min

---

## Audit Results

**CSS Files** (17 files):
1. `article-content.css` — Article styling
2. `block-style-variations.css` — WordPress block variations
3. `dark-mode-utilities.css` — Dark mode utilities
4. `font-enforcement.css` — Font fallback enforcement
5. `fonts.css` — Font imports (Karla, Playfair Display SC)
6. `index.css` — Main CSS entrypoint
7. `markdown-prose.css` — Markdown rendering
8. `print.css` — Print media styles
9. `tailwind.css` — Tailwind v4 imports
10. `theme-base.css` — Base theme styles
11. `theme-dark.css` — Dark mode theme
12. `theme-exports.css` — CSS variable exports
13. `theme-tokens.css` — Design tokens
14. `theme.css` — Main theme file
15. `tw-animate.css` — Animation utilities
16. `utilities.css` — Custom utilities
17. `wp-utilities.css` — WordPress-specific utilities

**Initial Findings**:
- ✅ Well-organized CSS architecture with clear separation
- ⚠️ Potential redundancy between theme.css and theme-*.css files
- ⚠️ Need to verify import order in index.css
- ⚠️ Some utilities may be duplicated across files
- ✅ Dark mode system appears complete

**Overall Status**: ✅ **80% Healthy** — Organization is good, some optimization needed

---

## Phase 1: Critical Issues

### Task 1.1: Audit CSS Import Order
**Priority**: Critical  
**Status**: [ ] Not Started  
**File**: `/src/styles/index.css`  
**Effort**: 15 min

**Issue**:
- CSS cascade depends on import order
- Need to verify logical ordering:
  1. Tailwind base
  2. Theme tokens
  3. Theme styles
  4. Dark mode
  5. Utilities
  6. Component-specific

**Fix**:
1. Read index.css import order
2. Verify cascade logic
3. Reorder if necessary
4. Document import sequence
5. Add comments explaining order importance

---

### Task 1.2: Check for Duplicate Utilities
**Priority**: Critical  
**Status**: [ ] Not Started  
**Files**: `/src/styles/utilities.css`, `/src/styles/wp-utilities.css`, `/src/styles/dark-mode-utilities.css`  
**Effort**: 15 min

**Issue**:
- Three utility files exist
- May contain duplicate utility classes
- Could cause specificity conflicts

**Fix**:
1. List all classes in utilities.css
2. List all classes in wp-utilities.css
3. List all classes in dark-mode-utilities.css
4. Identify duplicates
5. Consolidate or remove duplicates
6. Document purpose of each utility file

---

### Task 1.3: Verify Theme File Separation
**Priority**: Critical  
**Status**: [ ] Not Started  
**Files**: `/src/styles/theme.css`, `/src/styles/theme-base.css`, `/src/styles/theme-tokens.css`, `/src/styles/theme-dark.css`, `/src/styles/theme-exports.css`  
**Effort**: 10 min

**Issue**:
- 5 theme-related files exist
- Need clear separation of concerns
- Potential overlap or redundancy

**Files Should Contain**:
- `theme.css` — Main theme (what?)
- `theme-base.css` — Base styles (what?)
- `theme-tokens.css` — Token definitions (what?)
- `theme-dark.css` — Dark mode overrides
- `theme-exports.css` — Token exports for JS

**Fix**:
1. Document purpose of each theme file
2. Check for content overlap
3. Consolidate if possible
4. Add file header comments explaining purpose

---

## Phase 2: High Priority

### Task 2.1: Audit Dark Mode Coverage
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/src/styles/theme-dark.css`, `/src/styles/dark-mode-utilities.css`  
**Effort**: 15 min

**Issue**:
- Need to verify all components have dark mode support
- Check for missing dark mode token overrides
- Test dark mode visual consistency

**Fix**:
1. List all color tokens in theme.css
2. Verify each has dark mode override in theme-dark.css
3. Test visual appearance of major components in dark mode
4. Document any intentional light-mode-only components
5. Fix missing dark mode styles

---

### Task 2.2: Check Font Enforcement Strategy
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/styles/font-enforcement.css`  
**Effort**: 10 min

**Issue**:
- font-enforcement.css exists (what does it do?)
- Need to understand enforcement strategy
- Verify it doesn't conflict with theme fonts

**Fix**:
1. Read font-enforcement.css
2. Document its purpose
3. Verify compatibility with Karla/Playfair system
4. Check for any font fallback issues
5. Update if needed

---

### Task 2.3: Optimize Print Styles
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/styles/print.css`  
**Effort**: 10 min

**Issue**:
- Print styles exist but may not be comprehensive
- Should hide navigation, ads, interactive elements
- Should optimize typography for print

**Fix**:
1. Test print preview of major pages
2. Verify navigation is hidden
3. Check ads are hidden
4. Optimize spacing for print
5. Add print-specific utility classes if needed

---

### Task 2.4: Audit Block Style Variations
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/styles/block-style-variations.css`  
**Effort**: 15 min

**Issue**:
- WordPress block variations are defined here
- Need to verify they match WordPress theme JSON
- Check for consistency with design system

**Fix**:
1. List all block style variations
2. Compare with `/wordpress-export/themes/die-papier-theme/styles/blocks/`
3. Verify naming consistency
4. Check visual appearance
5. Fix misalignments

---

### Task 2.5: Optimize tw-animate.css
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/styles/tw-animate.css`  
**Effort**: 10 min

**Issue**:
- Custom animation utilities exist
- May overlap with Tailwind's built-in animations
- Need to verify necessity

**Fix**:
1. List all custom animations
2. Check if Tailwind v4 provides equivalents
3. Remove redundant animations
4. Document custom animation usage
5. Add animation performance notes

---

## Phase 3: Medium Priority

### Task 3.1: Create CSS Architecture Documentation
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: New: `/guidelines/development/css-architecture.md` (update existing)  
**Effort**: 15 min

**Issue**:
- CSS architecture guideline exists but may need updates
- Should document all 17 CSS files
- Should explain import order and cascade strategy

**Fix**:
1. Update CSS architecture guideline
2. Document each CSS file's purpose
3. Explain import order
4. Add troubleshooting section
5. Include best practices

---

### Task 3.2: Audit Markdown Prose Styles
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/src/styles/markdown-prose.css`  
**Effort**: 10 min

**Issue**:
- Markdown rendering styles exist
- Need to verify alignment with article content styles
- Check for typography consistency

**Fix**:
1. Test markdown rendering on various pages
2. Compare with article-content.css
3. Check for inconsistencies
4. Consolidate if possible
5. Document usage patterns

---

### Task 3.3: Optimize Article Content CSS
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/src/styles/article-content.css`  
**Effort**: 10 min

**Issue**:
- Article-specific styles are isolated (good!)
- Need to verify they don't conflict with global styles
- Check responsive behavior

**Fix**:
1. Review article content styles
2. Test on various screen sizes
3. Check dark mode compatibility
4. Optimize for readability
5. Document styling decisions

---

### Task 3.4: Audit WP Utilities Usage
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/src/styles/wp-utilities.css`  
**Effort**: 10 min

**Issue**:
- WordPress-specific utilities exist
- Need to verify they're actually needed in React app
- May be legacy from WordPress prototyping

**Fix**:
1. List all wp-utility classes
2. Search codebase for usage
3. Remove unused utilities
4. Document remaining utilities' purpose
5. Consider renaming if not WordPress-specific

---

### Task 3.5: Create CSS Performance Checklist
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: New: `/guidelines/development/css-performance.md`  
**Effort**: 5 min

**Issue**:
- Need CSS performance optimization guidelines
- Should cover file size, specificity, repaints
- Should document best practices

**Fix**:
1. Create CSS performance checklist
2. Document optimization strategies
3. Add tooling recommendations
4. Include metrics targets
5. Link from main development guidelines

---

## Phase 4: Low Priority

### Task 4.1: Add CSS File Size Metrics
**Priority**: Low  
**Status**: [ ] Not Started  
**Files**: All CSS files  
**Effort**: 10 min

**Issue**:
- Should track CSS file sizes
- Monitor bundle size growth
- Identify optimization opportunities

**Fix**:
1. Measure current CSS file sizes
2. Add to DevTools dashboard
3. Set size budgets
4. Monitor over time
5. Document in CSS architecture guide

---

### Task 4.2: Create CSS Testing Page
**Priority**: Low  
**Status**: [ ] Not Started  
**File**: New: `/src/app/pages/dev/CSSPlayground.tsx`  
**Effort**: 10 min

**Issue**:
- Need visual testing page for CSS systems
- Should test utilities, themes, dark mode
- Helps validate CSS changes

**Fix**:
1. Create CSS playground page
2. Add sections for each CSS category
3. Include dark mode toggle
4. Add to dev tools navigation
5. Document usage

---

## Completion Tracking

**Started**: -  
**Completed**: -  
**Time Spent**: - hours

---

## Notes

- CSS architecture is well-organized (17 files, clear separation)
- Main concerns: duplicate utilities, import order verification, dark mode coverage
- Font system appears solid (Karla + Playfair Display SC)
- Good separation between React and WordPress styles
- Print styles exist but need testing
