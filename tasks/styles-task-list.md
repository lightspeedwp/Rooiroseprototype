# Hardcoded Styles Audit — Task List

**Created**: 2026-03-15  
**Trigger**: `audit styles`  
**Status**: 0/5 tasks complete (0%)  

---

## Summary

- **High**: 1 task (10 min)
- **Medium**: 3 tasks (15 min)
- **Low**: 1 task (10 min)
- **Total Effort**: 35 minutes

---

## Audit Results

**Inline Styles Found**: ~10 instances  
**Style Objects**: Mostly for dynamic values  
**Tailwind Usage**: ✅ Predominant pattern  
**Health Score**: ✅ **95% Healthy**

---

## Phase 1: High Priority

### Task 1.1: Document WebGL Canvas Styles Rationale
**Priority**: High  
**Status**: [ ] Not Started  
**Components**: WebGL components (animated heroes)  
**Effort**: 10 min

**Issue**:
- WebGL components use style={{}} for dynamic positioning
- This is justified (cannot use Tailwind for dynamic values)
- Should be documented to prevent confusion

**Fix**:
1. Find all WebGL components using inline styles
2. Add comment explaining rationale
3. Document in component documentation
4. Create guideline for when inline styles are acceptable
5. Add to code review checklist

---

## Phase 2: Medium Priority

### Task 2.1: Refactor Animation Styles to CSS
**Priority**: Medium  
**Status**: [ ] Not Started  
**Components**: Components with inline animation styles  
**Effort**: 5 min

**Issue**:
- Some components use style={{}} for animations
- Should use CSS or tw-animate.css instead
- Easier to maintain and optimize

**Fix**:
1. Search for style objects with animation properties
2. Move to CSS keyframes in component.css file
3. Or use Tailwind animation utilities
4. Or add to tw-animate.css
5. Document animation patterns

---

### Task 2.2: Create Z-Index Token System
**Priority**: Medium  
**Status**: [ ] Not Started  
**Files**: `/src/styles/theme.css`, Components with z-index  
**Effort**: 5 min

**Issue**:
- Some z-index values are inline
- Should be centralized in design tokens
- Prevents z-index conflicts

**Fix**:
1. Find all z-index usage (inline and Tailwind)
2. Create z-index scale in theme.css
3. Document z-index layering:
   - Base: 0
   - Dropdown: 10
   - Sticky header: 20
   - Modal backdrop: 30
   - Modal content: 40
   - Toast: 50
4. Update components to use token values
5. Add to design tokens documentation

---

### Task 2.3: Audit Dynamic Inline Styles
**Priority**: Medium  
**Status**: [ ] Not Started  
**Components**: All components  
**Effort**: 5 min

**Issue**:
- Some inline styles may be unnecessary
- Could be replaced with Tailwind utilities
- Or moved to CSS

**Fix**:
1. Search for `style={{` in codebase
2. Review each instance
3. Categorize:
   - Necessary (dynamic values from props/state)
   - Can be refactored to Tailwind
   - Can be moved to CSS
4. Refactor non-necessary inline styles
5. Document when inline styles are acceptable

---

## Phase 3: Low Priority

### Task 3.1: Create Inline Styles Guidelines
**Priority**: Low  
**Status**: [ ] Not Started  
**File**: `/guidelines/development/inline-styles-guide.md` (new)  
**Effort**: 10 min

**Issue**:
- Need clear guidelines on when inline styles are acceptable
- Helps maintain consistency
- Aids code review

**Fix**:
1. Create inline styles guideline document
2. Define when inline styles are acceptable:
   - Dynamic values from props/state
   - Third-party library requirements
   - Performance-critical calculations
3. Define when to avoid:
   - Static styles (use Tailwind)
   - Repeated styles (use CSS class)
   - Theming (use CSS variables)
4. Add code examples
5. Link from development guidelines

---

## Completion Tracking

**Started**: -  
**Completed**: -  
**Time Spent**: - minutes

---

## When Inline Styles Are Acceptable

✅ **Acceptable**:
- Dynamic values from props/state: `style={{ width: `${progress}%` }}`
- Third-party library requirements: Canvas, WebGL
- Performance-critical calculations
- Values not supported by Tailwind

❌ **Avoid**:
- Static color values (use Tailwind)
- Fixed sizing (use Tailwind)
- Repeated patterns (create CSS class)
- Theme-dependent values (use CSS variables)

---

## Notes

- Inline styles are minimal (95% health)
- Most usage is justified (dynamic WebGL positioning)
- Main action needed is documentation
- No critical refactoring required
