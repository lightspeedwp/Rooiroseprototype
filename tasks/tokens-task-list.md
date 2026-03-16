# Design Tokens Audit — Task List

**Created**: 2026-03-15  
**Trigger**: `tokens`  
**Status**: 0/12 tasks complete (0%)  

---

## Summary

- **Critical**: 2 tasks (30 min)
- **High**: 4 tasks (45 min)
- **Medium**: 4 tasks (40 min)
- **Low**: 2 tasks (20 min)
- **Total Effort**: 2 hours 15 min

---

## Audit Results

**Token Sources**:
- CSS Tokens: `/src/styles/theme.css` (162+ custom properties found)
- Data Tokens: `/src/app/data/designTokens.ts` (145+ tokens documented)
- Dark Mode: `/src/styles/theme-dark.css`
- Exports: `/src/styles/theme-exports.css`
- WordPress: `/wordpress-export/themes/die-papier-theme/styles/presets/*.json`

**Initial Findings**:
- ✅ Strong foundation: 145+ tokens in designTokens.ts
- ✅ CSS custom properties well-organized
- ⚠️ Potential misalignment between CSS and data tokens
- ⚠️ Some legacy token names (e.g., `--font-inter`, `--font-raleway` as aliases)
- ⚠️ Need to verify WordPress theme.json alignment

**Overall Status**: ✅ **85% Healthy** — Minor alignment and cleanup needed

---

## Phase 1: Critical Issues

### Task 1.1: Verify CSS-to-Data Token Alignment
**Priority**: Critical  
**Status**: [ ] Not Started  
**Files**: `/src/styles/theme.css`, `/src/app/data/designTokens.ts`  
**Effort**: 20 min

**Issue**:
- CSS defines 162+ custom properties
- Data file documents 145+ tokens
- Need to verify 1:1 mapping

**Fix**:
1. Compare COLOR_TOKENS array with CSS color variables
2. Compare TYPOGRAPHY_TOKENS with CSS font/text variables
3. Compare SPACING_TOKENS with CSS spacing variables
4. Identify missing or extra tokens in either source
5. Add missing tokens or remove unused ones

---

### Task 1.2: Remove Legacy Font Aliases
**Priority**: Critical  
**Status**: [ ] Not Started  
**File**: `/src/styles/theme.css` (lines 61-63)  
**Effort**: 10 min

**Issue**:
- Legacy aliases found:
  - `--font-inter` → `var(--font-karla)` (backwards compat)
  - `--font-heading` → `var(--font-display)` (backwards compat)
  - `--font-raleway` → `var(--font-display)` (backwards compat)
- These reference old font system (before Karla/Playfair migration)
- Should be removed if no longer used

**Fix**:
1. Search codebase for usage of `--font-inter`, `--font-raleway`, `--font-heading`
2. If found, update to use `--font-karla` or `--font-display` directly
3. Remove alias declarations from theme.css
4. Update designTokens.ts if these are documented there

---

## Phase 2: High Priority

### Task 2.1: Audit Spacing Token Coverage
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/src/app/data/designTokens.ts`, `/src/styles/theme.css`  
**Effort**: 15 min

**Issue**:
- Need to verify all spacing scales are documented
- Check for consistent naming (e.g., `--space-1` vs `--spacing-1`)
- Ensure Tailwind utility class mappings are accurate

**Fix**:
1. List all spacing tokens in theme.css
2. Verify each has entry in SPACING_TOKENS array
3. Check Tailwind class mappings
4. Add missing spacing tokens

---

### Task 2.2: Audit Shadow Token System
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/src/app/data/designTokens.ts`, `/src/styles/theme.css`  
**Effort**: 10 min

**Issue**:
- Shadow tokens may not be fully documented
- Need to verify light/dark mode shadow values
- Check CSS variable consistency

**Fix**:
1. List all shadow tokens in theme.css
2. Verify SHADOW_TOKENS array is complete
3. Test shadow rendering in light/dark modes
4. Document usage patterns

---

### Task 2.3: Verify Radius Token System
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/src/app/data/designTokens.ts`, `/src/styles/theme.css`  
**Effort**: 10 min

**Issue**:
- Border radius system needs verification
- Check for consistent naming and values
- Verify Tailwind class mappings

**Fix**:
1. List all radius tokens (--radius, --radius-sm, etc.)
2. Verify RADIUS_TOKENS array
3. Update documentation if needed

---

### Task 2.4: WordPress Theme.json Alignment Check
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/wordpress-export/themes/die-papier-theme/styles/presets/*.json`  
**Effort**: 10 min

**Issue**:
- WordPress preset files should align with design tokens
- Need to verify color, spacing, typography consistency
- Check for any drift between React and WordPress implementations

**Fix**:
1. Compare `/styles/presets/colors.json` with COLOR_TOKENS
2. Compare `/styles/presets/spacing.json` with SPACING_TOKENS
3. Compare `/styles/presets/typography.json` with TYPOGRAPHY_TOKENS
4. Document any intentional differences
5. Fix unintentional misalignments

---

## Phase 3: Medium Priority

### Task 3.1: Document Gradient Tokens
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/src/app/data/designTokens.ts`  
**Effort**: 10 min

**Issue**:
- Gradient tokens exist in CSS (`--gradient-brand-red`, etc.)
- May not be fully documented in designTokens.ts
- Usage patterns need documentation

**Fix**:
1. Find all gradient tokens in theme.css
2. Add GRADIENT_TOKENS array if missing
3. Document usage examples

---

### Task 3.2: Audit Breakpoint Tokens
**Priority**: Medium  
**Status**: [ ] Not Started  
**Files**: `/src/app/data/designTokens.ts`, `/src/styles/theme.css`  
**Effort**: 10 min

**Issue**:
- Responsive breakpoint system needs verification
- Check alignment with Tailwind breakpoints
- Document mobile-first strategy

**Fix**:
1. Verify BREAKPOINT_TOKENS array
2. Compare with Tailwind config
3. Document responsive design patterns

---

### Task 3.3: Audit Layout Tokens
**Priority**: Medium  
**Status**: [ ] Not Started  
**Files**: `/src/app/data/designTokens.ts`, `/src/styles/theme.css`  
**Effort**: 10 min

**Issue**:
- Layout tokens (max-width, container, etc.) need verification
- Check consistency across pages
- Document layout patterns

**Fix**:
1. Verify LAYOUT_TOKENS array
2. Check usage in PageContainer and other layout components
3. Document layout system

---

### Task 3.4: Create Token Migration Guide
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: New: `/guidelines/design-tokens/token-migration-guide.md`  
**Effort**: 10 min

**Issue**:
- Need guide for migrating legacy tokens to new system
- Document deprecation strategy
- Provide code examples

**Fix**:
1. Create migration guide document
2. List deprecated tokens
3. Provide find/replace patterns
4. Add to documentation index

---

## Phase 4: Low Priority

### Task 4.1: Add Token Usage Examples
**Priority**: Low  
**Status**: [ ] Not Started  
**File**: `/src/app/data/designTokens.ts`  
**Effort**: 10 min

**Issue**:
- Each token should have usage example in comments
- Helps developers understand when to use each token
- Improves documentation quality

**Fix**:
1. Add code example comments to each token category
2. Show CSS and Tailwind usage patterns
3. Document common pitfalls

---

### Task 4.2: Create Token Testing Page
**Priority**: Low  
**Status**: [ ] Not Started  
**File**: New: `/src/app/pages/dev/TokenTester.tsx`  
**Effort**: 10 min

**Issue**:
- Need visual testing page for all tokens
- Should display colors, spacing, typography, shadows, etc.
- Helps validate light/dark mode transitions

**Fix**:
1. Create TokenTester page component
2. Add route to dev tools
3. Display all token categories visually
4. Add light/dark mode toggle

---

## Completion Tracking

**Started**: -  
**Completed**: -  
**Time Spent**: - hours

---

## Notes

- Design token system is generally healthy (145+ tokens documented)
- Main issues are alignment between CSS and data, and legacy alias cleanup
- WordPress alignment check is important for migration success
- Token testing page would be valuable developer tool
