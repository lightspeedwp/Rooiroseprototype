# CSS Optimization Task List

**Created**: 2026-03-16  
**Source**: `/reports/comprehensive-system-audit-2026-03-16.md`  
**Priority**: P3 (Low)  
**Status**: 0/4 tasks complete (0%)  

---

## Overview

This task list addresses CSS cleanup and optimization opportunities identified in the comprehensive system audit. These are low-priority maintenance tasks that improve code cleanliness without affecting functionality.

**Total Estimated Time**: 1-2 hours

---

## Task 1: Remove unused sidebar tokens from theme-tokens.css

**Priority**: P3 (Low)  
**Estimated Time**: 30 minutes  
**Status**: ⏳ Not started

**Description**:
Remove ShadCN sidebar tokens that are not used in the rooi rose project.

**Unused Tokens** (6 tokens):
- `--sidebar`
- `--sidebar-foreground`
- `--sidebar-primary`
- `--sidebar-primary-foreground`
- `--sidebar-accent`
- `--sidebar-accent-foreground`

**Subtasks**:
- [ ] Search entire codebase for usage of each token
- [ ] Confirm zero usages
- [ ] Remove all 6 tokens from `/src/styles/theme-tokens.css`
- [ ] Remove from dark mode file `/src/styles/theme-dark.css` (if present)
- [ ] Test build
- [ ] Verify no visual changes

**Files to Modify**:
- `/src/styles/theme-tokens.css`
- `/src/styles/theme-dark.css` (if tokens present)

**Acceptance Criteria**:
- All sidebar tokens removed
- Build passes without errors
- No visual regressions
- File size reduced by ~200 bytes

**Estimated File Size Reduction**: 200-300 bytes

---

## Task 2: Remove legacy competition gradient tokens

**Priority**: P3 (Low)  
**Estimated Time**: 30 minutes  
**Status**: ⏳ Not started

**Description**:
Remove old competition gradient tokens since the competition system was redesigned and no longer uses these gradients.

**Unused Tokens** (3 tokens):
- `--competition-dark-from`
- `--competition-dark-to`
- `--gradient-brand-red`

**Subtasks**:
- [ ] Search for usage of `--competition-dark-from`
- [ ] Search for usage of `--competition-dark-to`
- [ ] Search for usage of `--gradient-brand-red`
- [ ] Confirm zero usages
- [ ] Remove all 3 tokens from `/src/styles/theme-tokens.css`
- [ ] Remove from dark mode file if present
- [ ] Test build
- [ ] Verify competition cards still look correct

**Files to Modify**:
- `/src/styles/theme-tokens.css`

**Acceptance Criteria**:
- Gradient tokens removed
- Competition system unaffected
- Build passes
- File size reduced

**Estimated File Size Reduction**: 300-400 bytes

---

## Task 3: Document oklch() chart color system

**Priority**: P3 (Low)  
**Estimated Time**: 15 minutes  
**Status**: ⏳ Not started

**Description**:
Add documentation comments explaining the oklch() color syntax used for chart colors in the design system.

**Background**:
The theme uses oklch() for chart colors:
```css
--chart-1: oklch(0.646 0.222 41.116);
--chart-2: oklch(0.6 0.118 184.704);
/* etc. */
```

This is a valid modern color syntax but needs documentation for developers unfamiliar with it.

**Subtasks**:
- [ ] Add comment block above chart color definitions in `theme-tokens.css`
- [ ] Explain oklch() syntax: `oklch(Lightness Chroma Hue)`
- [ ] Document benefits: perceptual uniformity, better color interpolation
- [ ] Provide example of how to create new chart colors
- [ ] Add link to oklch() specification or learning resource
- [ ] Note browser support (modern browsers only)

**Files to Modify**:
- `/src/styles/theme-tokens.css`

**Example Documentation**:
```css
/* ── Chart Colors (oklch() syntax) ──────────────────────────
 * oklch() = Lightness Chroma Hue (perceptually uniform color space)
 * 
 * Format: oklch(L C H)
 *   L = Lightness (0-1, where 0=black, 1=white)
 *   C = Chroma (0+, color intensity)
 *   H = Hue (0-360, color angle on wheel)
 * 
 * Benefits:
 *   - Perceptually uniform (equal numeric changes = equal visual changes)
 *   - Better color interpolation than RGB/HSL
 *   - Wider color gamut support
 * 
 * Browser Support: Chrome 111+, Safari 15.4+, Firefox 113+
 * Fallback: Modern browsers only (2023+)
 * 
 * Generator: https://oklch.com/
 * ──────────────────────────────────────────────────────────── */
--chart-1: oklch(0.646 0.222 41.116); /* Warm red-orange */
--chart-2: oklch(0.6 0.118 184.704);   /* Cool cyan-blue */
/* ... */
```

**Acceptance Criteria**:
- Clear explanation of oklch() syntax
- Benefits documented
- Browser support noted
- Link to generator tool
- Easy to understand for developers

**Estimated Addition**: ~20 lines of comments

---

## Task 4: Verify and cleanup --brand-warm-gray usage

**Priority**: P3 (Low)  
**Estimated Time**: 20 minutes  
**Status**: ⏳ Not started

**Description**:
The token `--brand-warm-gray` has only 1 usage in the codebase. Verify if this token is still necessary or can be removed.

**Token Details**:
- **CSS Variable**: `--brand-warm-gray: #ebe7e7;`
- **Usage Count**: 1 instance
- **Description**: "Warm off-white — social post backgrounds"

**Subtasks**:
- [ ] Search codebase for all usages of `--brand-warm-gray`
- [ ] Identify the single usage location
- [ ] Determine if usage is critical:
  - If YES: Keep token and document its specific use case
  - If NO: Replace with alternative (e.g., `--accent-warm-beige`) and remove token
- [ ] Update documentation if keeping
- [ ] Remove if not needed
- [ ] Test affected component
- [ ] Verify visual appearance

**Files to Check**:
- Search all `.tsx` and `.css` files for `brand-warm-gray`
- `/src/styles/theme-tokens.css`

**Decision Matrix**:

| Scenario | Action |
|:---------|:-------|
| Used in social media feature | **Keep** — Document as "Social media post background" |
| Used in generic background | **Replace** with `--accent-warm-beige` or `--tertiary` |
| Used in one-off component | **Replace** with closest editorial accent color |
| Not used (false positive) | **Remove** token |

**Acceptance Criteria**:
- Token usage verified
- Decision made (keep or remove)
- If keeping: Usage documented
- If removing: Replacement token used
- No visual regressions

---

## Summary

| Task | Priority | Time | Impact | File Size Reduction |
|:-----|:---------|:-----|:-------|:-------------------:|
| Remove sidebar tokens | P3 | 30 min | None | 200-300 bytes |
| Remove competition gradients | P3 | 30 min | None | 300-400 bytes |
| Document oklch() system | P3 | 15 min | Documentation | +20 lines (comments) |
| Verify brand-warm-gray | P3 | 20 min | Minimal | 0-50 bytes |
| **Total** | **P3** | **1h 35m** | **Low** | **~500-750 bytes** |

---

## Benefits of Completion

1. **Cleaner Codebase**: Remove ~750 bytes of unused CSS
2. **Better Documentation**: Developers understand oklch() color system
3. **Reduced Confusion**: No orphaned tokens in theme files
4. **Easier Maintenance**: Less code to maintain going forward

---

## When to Execute

These tasks can be completed:
- During slow development periods
- As part of quarterly maintenance
- Before major releases (code cleanup)
- When refactoring CSS architecture

**Not urgent** — Can be deferred if higher priority work exists

---

## Progress Tracking

| Task | Status | Completed By | Date |
|:-----|:-------|:-------------|:-----|
| Task 1: Remove sidebar tokens | ⏳ Not started | — | — |
| Task 2: Remove gradient tokens | ⏳ Not started | — | — |
| Task 3: Document oklch() | ⏳ Not started | — | — |
| Task 4: Verify brand-warm-gray | ⏳ Not started | — | — |

**Overall Progress**: 0/4 (0%)

---

**Created by**: Figma Make AI  
**Last Updated**: 2026-03-16  
**Review Status**: Ready for execution (low priority)  
**Recommended Timeline**: Within 1-2 months
