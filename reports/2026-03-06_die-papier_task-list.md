# CSS & Design Tokens — Prioritized Task List — 2026-03-06

**Source**: `/reports/2026-03-06_die-papier_css-audit.md`

---

## P0 — Accessibility Blockers (AA Compliance)

### Task 1: Add `prefers-reduced-motion` support
**Audit Reference**: Section 10.3  
**File**: `/src/styles/index.css`  
**Action**: Add reduced motion media query at the end of `index.css`  
**Code**:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
**Acceptance Criteria**:
- [ ] All animations respect `prefers-reduced-motion: reduce`
- [ ] No visible motion when OS setting is enabled
- [ ] Accordion/collapsible components still function (height changes instantly)
- [ ] WCAG 2.1 SC 2.3.3 compliance

**Effort**: 5 minutes  
**Risk**: None
**Status**: ✅ COMPLETE (2026-03-06)

---

## P1 — Accessibility Improvements

### Task 2: Add `--color-focus-ring` token
**Audit Reference**: Section 10.1, 4  
**Files**: `/src/styles/theme-tokens.css`, `/src/styles/theme-dark.css`  
**Action**: Add focus ring token with light/dark values  
**Code** (theme-tokens.css, add to `:root`):
```css
--color-focus-ring: #e82c27;
```
**Code** (theme-dark.css, add to `.dark`):
```css
--color-focus-ring: #f06560;
```
**Acceptance Criteria**:
- [ ] Token defined in both light and dark modes
- [ ] Contrast ratio meets 3:1 on respective backgrounds (AA for UI components)
- [ ] Documented in design tokens guide

**Effort**: 10 minutes  
**Risk**: None
**Status**: ✅ COMPLETE (2026-03-06)

### Task 3: Add dark mode shadow overrides for WP presets
**Audit Reference**: Section 4  
**File**: `/src/styles/theme-dark.css`  
**Action**: Override `--wp--preset--shadow--*` in `.dark` to use stronger shadows  
**Code**:
```css
--wp--preset--shadow--100: var(--shadow-dark-100);
--wp--preset--shadow--200: var(--shadow-dark-200);
--wp--preset--shadow--300: var(--shadow-dark-300);
--wp--preset--shadow--400: var(--shadow-dark-400);
--wp--preset--shadow--500: var(--shadow-dark-500);
--wp--preset--shadow--600: var(--shadow-dark-600);
```
**Acceptance Criteria**:
- [ ] WP shadow presets use dark shadow values when `.dark` is active
- [ ] Shadows are visible on dark backgrounds
- [ ] No visual regression in light mode

**Effort**: 10 minutes  
**Risk**: Low — verify no components rely on specific shadow values
**Status**: ✅ COMPLETE (2026-03-06)

---

## P2 — Cleanup & Optimization

### Task 4: Repurpose as canonical reference
**Audit Reference**: Section 9  
**File**: `/src/styles/theme.css`  
**Action**: ~~Delete via Git~~ → Repurposed as canonical single-file reference  
**What was done**:
- Added 30-line header documenting role (reference, WP export source, diffable baseline)
- Synced 3 missing tokens (`--color-focus-ring` light/dark, WP shadow preset bridge)
- Updated `css-architecture.md` — changed from "LEGACY — orphaned" to "CANONICAL REFERENCE — not imported"
- Updated `Guidelines.md` — Task #55 marked RESOLVED

**Acceptance Criteria**:
- [x] Header comment explains file role and sync rule
- [x] All tokens in sync with partials (3 missing tokens added)
- [x] `css-architecture.md` updated with new role
- [x] `Guidelines.md` updated (15/15 tasks complete)

**Effort**: 15 minutes  
**Risk**: None  
**Status**: ✅ COMPLETE (2026-03-06) — Retained, not deleted

### Task 5: Move `wp-utilities.css` from `@layer base` to `@layer utilities`
**Audit Reference**: Section 5  
**File**: `/src/styles/wp-utilities.css`  
**Action**: Change `@layer base {` to `@layer utilities {`  
**Acceptance Criteria**:
- [ ] Layer declaration changed
- [ ] No visual changes (all rules use `!important`, layer is cosmetic)
- [ ] Semantic correctness: utilities in utilities layer

**Effort**: 1 minute  
**Risk**: None (`!important` overrides layer specificity)
**Status**: ✅ COMPLETE (2026-03-06)

### Task 6: Move `block-style-variations.css` from `@layer base` to `@layer components`
**Audit Reference**: Section 5  
**File**: `/src/styles/block-style-variations.css`  
**Action**: Change `@layer base {` to `@layer components {`  
**Acceptance Criteria**:
- [ ] Layer declaration changed
- [ ] `.is-style-*` classes still apply correctly
- [ ] No specificity regressions (test with Tailwind utility overrides)

**Effort**: 1 minute  
**Risk**: Low — test that `.is-style-*` classes aren't accidentally overridden by base layer
**Status**: ✅ COMPLETE (2026-03-06)

### Task 7: Move `article-content.css` from `@layer base` to `@layer components`
**Audit Reference**: Section 5  
**File**: `/src/styles/article-content.css`  
**Action**: Change `@layer base {` to `@layer components {`  
**Acceptance Criteria**:
- [ ] Layer declaration changed
- [ ] Article content typography renders correctly
- [ ] Dark mode article styles still apply

**Effort**: 1 minute  
**Risk**: Low — article-content uses descendant selectors that may need component-level specificity
**Status**: ✅ COMPLETE (2026-03-06)

### Task 8: Move `dark-mode-utilities.css` from `@layer base` to `@layer utilities`
**Audit Reference**: Section 5  
**File**: `/src/styles/dark-mode-utilities.css`  
**Action**: Change `@layer base {` to `@layer utilities {`  
**Acceptance Criteria**:
- [ ] Layer declaration changed
- [ ] Dark mode form inputs, scrollbar, selection, placeholder, hr, prose all render correctly

**Effort**: 1 minute  
**Risk**: Low — verify `.dark .prose` selectors still work at utility layer
**Status**: ✅ COMPLETE (2026-03-06)

### Task 9: Remove duplicate `markdown-prose.css` imports from TSX files
**Audit Reference**: Section 2  
**Files**: `/src/app/components/dev/FileBrowserShell.tsx`, `/src/app/components/dev/WpMarkdownViewer.tsx`  
**Action**: Remove `import '../../../styles/markdown-prose.css';` from both files (already imported by `index.css`)  
**Acceptance Criteria**:
- [ ] Import lines removed
- [ ] Markdown prose rendering unchanged (Vite was deduplicating anyway)
- [ ] Build succeeds

**Effort**: 2 minutes  
**Risk**: None
**Status**: ✅ COMPLETE (2026-03-06)

### Task 10: Audit `print.css` for unused selectors
**Audit Reference**: Section 9  
**File**: `/src/styles/print.css`  
**Action**: Search for `.topbar`, `.header` (class), `.footer` (class), `.newsletter-modal`, `.back-to-top`, `.breadcrumbs`, `.social-share`, `.comments-section`, `.related-articles`, `.sidebar`, `.ad-space`, `.newsletter-box`, `.popular-articles` in React source. Remove any confirmed-unused selectors.  
**Acceptance Criteria**:
- [ ] Each selector verified against `grep -r "className.*{name}" src/app/`
- [ ] Unused selectors removed
- [ ] Print output unchanged for existing pages

**Effort**: 15 minutes  
**Risk**: Low — print styles are behind `@media print`, no runtime impact
**Status**: ✅ COMPLETE (2026-03-06)

### Task 11: Remove duplicate heading font-family from `font-enforcement.css`
**Audit Reference**: Section 8  
**File**: `/src/styles/font-enforcement.css`  
**Action**: Remove `h1, h2, h3, h4 { font-family: var(--font-heading); }` and `h5, h6 { font-family: var(--font-inter); }` — already defined in `theme-base.css`  
**Acceptance Criteria**:
- [ ] Heading fonts still render correctly (covered by `theme-base.css`)
- [ ] `font-enforcement.css` retains button/form/navigation/role enforcement
- [ ] `.font-inter` and `.font-heading` utility classes retained

**Effort**: 2 minutes  
**Risk**: Low — verify `theme-base.css` heading rules have same specificity
**Status**: ✅ COMPLETE (2026-03-06)

---

## P3 — Documentation & Nice-to-Have

### Task 12: Document `--placeholder` token
**Audit Reference**: Section 3.2  
**File**: `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` (or appropriate doc)  
**Action**: Add `--placeholder` (#5A6B7D, dark-only) to design tokens documentation  
**Acceptance Criteria**:
- [ ] Token documented with value, purpose, and dark-mode context

**Effort**: 5 minutes
**Status**: ✅ COMPLETE (2026-03-06) — Added to DESIGN-SYSTEM-GUIDE.md Section 3 (UI/Semantic Colours)

### Task 13: Document `--shadow-dark-*` tokens
**Audit Reference**: Section 3.2  
**File**: `/guidelines/design-tokens/shadows.md`  
**Action**: Add dark shadow scale (100-600 + up) to shadow documentation  
**Acceptance Criteria**:
- [ ] All 7 dark shadow tokens documented
- [ ] Usage guidance provided

**Effort**: 10 minutes
**Status**: ✅ COMPLETE (2026-03-06) — Added full dark shadow token scale, WP preset bridge, and Tailwind usage to shadows.md

### Task 14: Add `:visited` link styles (or document omission)
**Audit Reference**: Section 10.4  
**Files**: `/src/styles/article-content.css`, `/src/styles/markdown-prose.css`  
**Action**: Either add `:visited` styles or document intentional omission in accessibility notes  
**Acceptance Criteria**:
- [ ] Decision documented
- [ ] If implemented: visited links visually distinct from unvisited

**Effort**: 10 minutes  
**Risk**: Low
**Status**: ✅ COMPLETE (2026-03-06) — Documented intentional omission in article-content.css with rationale

### Task 15: Update `designTokens.ts` source reference
**Audit Reference**: Section 9 (file_search evidence)  
**File**: `/src/app/data/designTokens.ts`  
**Action**: Update comment on line 5 and `source` on line 680 from `theme.css` to `theme-tokens.css` (or `theme partials`)  
**Acceptance Criteria**:
- [ ] Source references updated to reflect current CSS architecture

**Effort**: 2 minutes
**Status**: ✅ COMPLETE (2026-03-06) — Source references updated to theme-tokens.css / theme partials

---

## Summary

| Priority | Tasks | Effort | Impact | Status |
|:---------|------:|:-------|:-------|:-------|
| P0 | 1 | 5 min | WCAG 2.1 AA compliance (reduced motion) | ✅ COMPLETE |
| P1 | 2 | 20 min | Accessibility tokens + dark shadow bridge | ✅ COMPLETE |
| P2 | 8 | 25 min | Layer correctness, cleanup, DRY | ✅ COMPLETE |
| P3 | 4 | 27 min | Documentation accuracy | ✅ COMPLETE |
| **Total** | **15** | **~77 min** | | **15/15 COMPLETE** |