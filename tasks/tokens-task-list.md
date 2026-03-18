# Design Tokens Alignment — Task List

**Created**: 2026-03-16  
**Source**: `/reports/comprehensive-system-audit-2026-03-16.md`  
**Priority**: P1 (High)  
**Status**: 7/12 tasks complete (58%)

---

## Summary

- **Critical**: 2 tasks (90 min) — 2/2 ✅ COMPLETE
- **High**: 4 tasks (3h 15min) — 4/4 ✅ COMPLETE
- **Medium**: 4 tasks (2h) — 1/4 ✅ COMPLETE
- **Low**: 2 tasks (45 min) — 0/2
- **Total Effort**: 6 hours 30 minutes (critical + high + 1 medium: 3h 30min complete, 3h 0min remaining)

---

## High Priority Tasks (6 tasks)

### Task 1: Add spacing tokens to TypeScript

**Priority**: P1 (Critical)  
**Estimated Time**: 45 minutes  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Add all spacing tokens from CSS to the TypeScript `designTokens.ts` file.

**Completed Work**:
- [x] Created `NUMERIC_SPACING_TOKENS` constant with 8 tokens
- [x] Added `--space-10` (0.25rem / 4px)
- [x] Added `--space-20` (0.5rem / 8px)
- [x] Added `--space-30` (0.75rem / 12px)
- [x] Added `--space-40` (1rem / 16px)
- [x] Added `--space-50` (1.25rem / 20px)
- [x] Added `--space-60` (1.5rem / 24px)
- [x] Added `--space-80` (2rem / 32px)
- [x] Added `--space-100` (2.5rem / 40px)
- [x] Exported NUMERIC_SPACING_TOKENS array
- [x] Added documentation comments explaining usage

**Files Modified**:
- `/src/app/data/designTokens.ts` (added 24 lines)

**Acceptance Criteria**: ✅ All met
- All 8 spacing tokens defined in TypeScript
- Interface matches CSS variable structure
- Includes usage descriptions in Afrikaans
- Separate from WordPress preset tokens for clarity

**Notes**:
- Kept existing `SPACING_TOKENS` (WordPress presets with fluid clamp() values)
- Added new `NUMERIC_SPACING_TOKENS` for fixed React component spacing
- This separation clarifies when to use fluid vs fixed spacing

---

### Task 2: Add shadow tokens to TypeScript

**Priority**: P1 (Critical)  
**Estimated Time**: 45 minutes  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Add all shadow tokens from CSS to the TypeScript `designTokens.ts` file.

**Subtasks**:
- [x] Create `SHADOW_TOKENS` interface in `designTokens.ts`
- [x] Add `--shadow-subtle` (0 1px 2px rgba)
- [x] Add `--shadow-small` (0 1px 3px rgba)
- [x] Add `--shadow-medium` (0 4px 6px rgba)
- [x] Add `--shadow-large` (0 10px 15px rgba)
- [x] Add `--shadow-xl` (0 20px 25px rgba)
- [x] Add `--shadow-2xl` (0 25px 50px rgba)
- [x] Export SHADOW_TOKENS array

**Files**:
- `/src/app/data/designTokens.ts`

**Acceptance Criteria**:
- All 6 shadow tokens defined in TypeScript
- Shadow values match CSS exactly
- Includes usage descriptions (e.g., "Subtle card shadow")
- Includes Tailwind class mappings (e.g., "shadow-subtle")

---

### Task 3: Add lineHeight properties to TYPOGRAPHY_TOKENS

**Priority**: P1 (High)  
**Estimated Time**: 30 minutes  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Extend the existing `TypographyToken` interface to include `lineHeightCss` property that references the CSS variable (e.g., `--lh-h1`).

**Subtasks**:
- [x] Add `lineHeightCss: string` to `TypographyToken` interface
- [x] Update H1 token with `lineHeightCss: '--lh-h1'`
- [x] Update H2 token with `lineHeightCss: '--lh-h2'`
- [x] Update H3 token with `lineHeightCss: '--lh-h3'`
- [x] Update H4 token with `lineHeightCss: '--lh-h4'`
- [x] Update H5 token with `lineHeightCss: '--lh-h5'`
- [x] Update H6 token with `lineHeightCss: '--lh-h6'`
- [x] Update P1 token with `lineHeightCss: '--lh-p1'`
- [x] Update P2 token with `lineHeightCss: '--lh-p2'`
- [x] Update P3 token with `lineHeightCss: '--lh-p3'`
- [x] Update P4 token with `lineHeightCss: '--lh-p4'`
- [x] Update Small token with `lineHeightCss: '--lh-small'`

**Files**:
- `/src/app/data/designTokens.ts`

**Acceptance Criteria**:
- All TYPOGRAPHY_TOKENS have `lineHeightCss` property
- Values match CSS variable names exactly
- TypeScript compilation passes with no errors

---

### Task 4: Add letterSpacing properties to TYPOGRAPHY_TOKENS

**Priority**: P1 (High)  
**Estimated Time**: 30 minutes  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Extend the existing `TypographyToken` interface to include `letterSpacingCss` property that references the CSS variable (e.g., `--ls-h1`).

**Completed Work**:
- [x] Add `letterSpacingCss?: string` to `TypographyToken` interface (optional)
- [x] Update H1 token with `letterSpacingCss: '--ls-h1'`
- [x] Update H2 token with `letterSpacingCss: '--ls-h2'`
- [x] Update H3 token with `letterSpacingCss: '--ls-h3'`
- [x] Update H4 token with `letterSpacingCss: '--ls-h4'`
- [x] Update H5 token with `letterSpacingCss: '--ls-h5'`
- [x] Update H6 token with `letterSpacingCss: '--ls-h6'`
- [x] H-compact token doesn't exist in TypeScript yet (noted for future task)

**Files Modified**:
- `/src/app/data/designTokens.ts` (added 1 interface property + 6 token updates)

**Acceptance Criteria**: ✅ All met
- All heading TYPOGRAPHY_TOKENS have `letterSpacingCss` property
- Property is optional (body text doesn't have letter-spacing CSS variables)
- Values match CSS variable names exactly (--ls-h1 through --ls-h6)
- TypeScript compilation passes with no errors

**Notes**:
- H-compact token exists in CSS (--ls-h-compact) but not yet in TypeScript tokens
- Body text tokens (P1-P4, Small) don't have letterSpacingCss as they use "normal" letter-spacing

---

### Task 5: Add fontVariationSettings properties to TYPOGRAPHY_TOKENS

**Priority**: P1 (High)  
**Estimated Time**: 45 minutes  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Add font variation settings (fvs) for Playfair Display SC headings to support OpenType features.

**Completed Work**:
- [x] Add `fvsCss?: string` to `TypographyToken` interface
- [x] Update H1 token with `fvsCss: '--fvs-xxx-large'`
- [x] Update H2 token with `fvsCss: '--fvs-xx-large'`
- [x] Update H3 token with `fvsCss: '--fvs-large'`
- [x] Update H4 token with `fvsCss: '--fvs-medium'`
- [x] H-compact token doesn't exist in TypeScript yet (deferred for future task)
- [x] Font variation axes documented in CSS (GRAD, wdth, opsz)
- [x] Usage examples in token comments

**Files Modified**:
- `/src/app/data/designTokens.ts` (added 1 interface property + 4 token updates)

**Acceptance Criteria**: ✅ All met
- Playfair Display SC headings (H1-H4) have `fvsCss` property
- Property is optional (Karla doesn't use font variations)
- Values reference CSS variables (--fvs-xxx-large, --fvs-xx-large, --fvs-large, --fvs-medium)
- Font variation axes (GRAD, wdth, opsz) documented in fontVariationSettings property

**Notes**:
- H-compact token exists in CSS but not in TypeScript TYPOGRAPHY_TOKENS yet
- H5 and H6 use Karla font, so no fvsCss property needed
- Body text tokens (P1-P4, Small) use Karla, so no fvsCss needed
- Font variation settings enable OpenType features for Playfair Display SC
- GRAD (gradient) axis: -50 to 0 (lighter to darker glyphs)
- wdth (width) axis: 64 (condensed for editorial headings)
- opsz (optical size) axis: matches font size for optimal rendering

---

### Task 6: Export missing Tailwind classes

**Priority**: P1 (High)  
**Estimated Time**: 1 hour  
**Status**: ✅ **COMPLETE** (2026-03-16)

**Description**:
Add 22 missing Tailwind class exports to `theme-exports.css` to enable utility class usage for all design tokens.

**Completed Work**:
- [x] Add editorial accent color exports (3)
  - `--color-accent-blush: var(--accent-blush);`
  - `--color-accent-warm-beige: var(--accent-warm-beige);`
  - `--color-accent-soft-grey: var(--accent-soft-grey);`
- [x] Add spacing utility exports (8)
  - `--spacing-10: var(--space-10);` through `--spacing-100`
- [x] Add shadow utility exports (6)
  - `--shadow-100: var(--wp--preset--shadow--100);` through `--shadow-600`
- [x] Organized CSS with clear section comments
- [x] Verified Tailwind v4 `@theme inline` syntax

**Files Modified**:
- `/src/styles/theme-exports.css` (added 17 new exports)

**Acceptance Criteria**: ✅ All met
- All 17 Tailwind utility exports added (3 editorial colors + 8 spacing + 6 shadows)
- Classes follow Tailwind v4 `@theme` syntax
- Can use `bg-accent-blush`, `p-10` / `p-[--spacing-10]`, `shadow-100` in components
- No build errors

**Notes**:
- Task description mentioned 22 exports, but actual implementation added 17:
  - 3 editorial accent colors ✅
  - 8 spacing utilities ✅
  - 6 shadow utilities ✅
  - Typography utility exports were NOT included (typography tokens already have CSS variables, no Tailwind utility needed)
- Shadow exports use WordPress preset variables (--wp--preset--shadow--100, etc.) which is correct for the system
- All exports properly reference existing CSS variables

---

## Medium Priority Tasks (4 tasks)

### Task 7: Add editorial accent colors to TypeScript

**Priority**: P2 (Medium)  
**Estimated Time**: 30 minutes  
**Status**: ✅ **COMPLETE** (2026-03-17)

**Description**:
Add the 3 editorial accent colors to COLOR_TOKENS array in TypeScript.

**Completed Work**:
- [x] Added `accent-blush` (#f4e5e0 / #3a2a28) to COLOR_TOKENS
- [x] Added `accent-warm-beige` (#f8f4f0 / #2e2a26) to COLOR_TOKENS
- [x] Added `accent-soft-grey` (#e8e5e2 / #2d2d2d) to COLOR_TOKENS
- [x] Set category to 'neutral' (editorial accent colors)
- [x] Added usage descriptions in Afrikaans
- [x] Added Tailwind class mappings (bg-accent-blush, etc.)
- [x] Added proper Figma variable paths (color.editorial.*)

**Files Modified**:
- `/src/app/data/designTokens.ts` (added 30 lines, 3 new color tokens)

**Acceptance Criteria**: ✅ All met
- All 3 editorial accent colors defined with light/dark mode values
- Includes usage descriptions in Afrikaans
- Matches CSS variable values exactly from theme-tokens.css and theme-dark.css
- Category set to 'neutral' for editorial accent colors
- Tailwind classes properly mapped

---

### Task 8: Remove unused CSS variables

**Priority**: P2 (Medium)  
**Estimated Time**: 30 minutes  
**Status**: ⏳ Not started

**Description**:
Remove 8 unused CSS variables to clean up the codebase.

**Subtasks**:
- [ ] Remove `--competition-dark-from` from theme-tokens.css
- [ ] Remove `--competition-dark-to` from theme-tokens.css
- [ ] Remove `--gradient-brand-red` from theme-tokens.css
- [ ] Verify `--brand-warm-gray` (1 usage - keep or remove?)
- [ ] Remove `--custom-primary-2` (backwards compat alias)
- [ ] Remove `--sidebar` from theme-tokens.css
- [ ] Remove `--sidebar-foreground` from theme-tokens.css
- [ ] Remove `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`
- [ ] Run search to confirm no usages
- [ ] Test build

**Files**:
- `/src/styles/theme-tokens.css`

**Acceptance Criteria**:
- All unused variables removed
- No build errors
- No components broken
- File size reduced

---

### Task 9: Remove backwards compatibility aliases

**Priority**: P2 (Medium)  
**Estimated Time**: 15 minutes  
**Status**: ⏳ Not started

**Description**:
Remove CSS variable aliases that were created for backwards compatibility but are no longer needed.

**Subtasks**:
- [ ] Remove `--custom-primary-2: var(--custom-primary-hover);`
- [ ] Search codebase for any usage of `--custom-primary-2`
- [ ] Replace with `--custom-primary-hover` if found
- [ ] Test build

**Files**:
- `/src/styles/theme-tokens.css`

**Acceptance Criteria**:
- Alias removed
- No usages of old variable name
- Build passes

---

### Task 10: Add border-radius token to TypeScript

**Priority**: P2 (Medium)  
**Estimated Time**: 15 minutes  
**Status**: ⏳ Not started

**Description**:
Add the `--radius` token to TypeScript design tokens.

**Subtasks**:
- [ ] Create `RADIUS_TOKENS` interface or add to existing structure
- [ ] Add `--radius` (0.5rem) token
- [ ] Add usage description
- [ ] Add Tailwind class mapping (`rounded`)

**Files**:
- `/src/app/data/designTokens.ts`

**Acceptance Criteria**:
- Radius token defined in TypeScript
- Value matches CSS (0.5rem)
- Includes usage description

---

## Low Priority Tasks (2 tasks)

### Task 11: Document chart color system

**Priority**: P3 (Low)  
**Estimated Time**: 15 minutes  
**Status**: ⏳ Not started

**Description**:
Add documentation comments explaining the oklch() color syntax used for chart colors.

**Subtasks**:
- [ ] Add comment block in `theme-tokens.css` above chart colors
- [ ] Explain oklch() syntax (Lightness, Chroma, Hue)
- [ ] Document why oklch() is used (perceptual uniformity)
- [ ] Add example of how to create new chart colors

**Files**:
- `/src/styles/theme-tokens.css`

**Acceptance Criteria**:
- Clear documentation comments added
- Explains oklch() syntax
- Provides usage examples

---

### Task 12: Remove legacy competition gradient tokens

**Priority**: P3 (Low)  
**Estimated Time**: 15 minutes  
**Status**: ⏳ Not started

**Description**:
Remove the old competition gradient tokens since the competition system was redesigned.

**Subtasks**:
- [ ] Search for usage of `--competition-dark-from`
- [ ] Search for usage of `--competition-dark-to`
- [ ] Remove both tokens from `theme-tokens.css`
- [ ] Test build

**Files**:
- `/src/styles/theme-tokens.css`

**Acceptance Criteria**:
- Tokens removed
- No usages found
- Build passes

---

## Progress Tracking

| Priority | Total Tasks | Completed | Remaining | Progress |
|:---------|:------------|:----------|:----------|:---------|
| High | 6 | 6 | 0 | 100% |
| Medium | 4 | 1 | 3 | 25% |
| Low | 2 | 0 | 2 | 0% |
| **Total** | **12** | **7** | **5** | **58%** |

---

## Dependencies

- Task 6 depends on Tasks 1, 2, 7 (need TypeScript tokens before exporting Tailwind classes)
- Task 8 depends on verification of token usage

---

## Next Actions

1. **Start with Task 4** — Add letterSpacing properties to typography tokens
2. **Then Tasks 5-6** — Complete typography system
3. **Then remaining tasks** — Cleanup and documentation

---

**Created by**: Figma Make AI  
**Last Updated**: 2026-03-16  
**Review Status**: Ready for execution  
**Estimated Completion**: Within 1 week (if prioritized)