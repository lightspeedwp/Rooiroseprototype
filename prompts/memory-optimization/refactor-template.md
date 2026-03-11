# CSS Structure Refactor — Die Papier

**Purpose**: Implement CSS architecture improvements from audit report.

**Prerequisites**:
- Audit report completed: `/reports/<DATE>_die-papier_css-audit.md`
- Task list created: `/reports/<DATE>_die-papier_task-list.md`

---

## Hard Requirements

### 1) Accessibility First

Implement changes required to reach WCAG 2.1 AA and AAA. Prefer token-level fixes; avoid scattered overrides.

**AA Requirements** (Must Pass):
- 4.5:1 contrast for normal text
- 3:1 contrast for large text
- Visible focus indicators
- Reduced motion support

**AAA Requirements** (Target):
- 7:1 contrast for normal text
- 4.5:1 contrast for large text
- Enhanced focus visibility

### 2) Tailwind Stays

Keep `tailwind.css` as single CSS entrypoint imported by the app. Tailwind may contain directives, but should primarily import `index.css` (the manifest for all other CSS).

### 3) Avoid Conflicting Imports

- No duplicate imports
- No cyclic imports
- No competing entrypoints
- Stable import order

### 4) Adopt BEM Extensively

Use phased migration to minimize breaking changes:

**Phase 1**: Introduce BEM classes alongside old classes (dual-classing)  
**Phase 2**: Migrate markup references  
**Phase 3**: Remove old classes only when unused is confirmed

### 5) WordPress Alignment

Align utilities and globals with WordPress concepts (theme.json-style presets) while keeping prototype maintainable.

---

## Implementation Steps (Follow in Order)

### A) Read and Follow Audit Report

**File**: `/reports/<DATE>_die-papier_css-audit.md`

**Extract**:
- Recommended target architecture
- Token-level fixes
- Import order recommendations
- BEM mapping plan
- WordPress alignment requirements

**Do not invent new architecture** that contradicts the report unless necessary for accessibility.

### B) Create Target Folder Structure

**Target Structure**:
```
/src/styles/
  index.css                 # Imports everything below in strict order
  tokens/
    core.css                # Raw palette/scale tokens
    semantic.css            # Semantic tokens (--color-text, --surface-1)
    themes.css              # :root light + [data-theme="dark"] overrides
    motion.css              # Durations/easing + reduced-motion hooks
  base/
    reset.css               # Only if needed (avoid fighting Tailwind preflight)
    typography.css          # Body, headings, links
    forms.css               # Form elements
    a11y.css                # focus-visible, skip-link, visually-hidden
  utilities/
    layout.css              # Flex, grid helpers using gap tokens
    spacing.css             # Padding/gap helpers
    typography.css          # Font weight, text alignment
    colour.css              # Color helpers mapping semantic tokens
    states.css              # is-/has- helpers
  components/
    c-component.css         # BEM blocks
  sections/
    s-section.css           # WordPress-like per-section/per-block styling
  wordpress/
    globals.css             # WP-aligned global classes
```

**Die Papier Current State** (Phase 1 complete):
```
/src/styles/
  index.css                 # ✅ Manifest exists
  theme-tokens.css          # ✅ Raw tokens (428 lines)
  theme-dark.css            # ✅ Dark mode (69 lines)
  theme-exports.css         # ✅ Tailwind exports (68 lines)
  theme-base.css            # ✅ Base elements (74 lines)
  wp-utilities.css          # ✅ WordPress utilities (179 lines)
  block-style-variations.css # ✅ Block variations (65 lines)
  article-content.css       # ✅ Article styles (106 lines)
  dark-mode-utilities.css   # ✅ Dark utilities (64 lines)
  font-enforcement.css      # ✅ Font enforcement (42 lines)
  markdown-prose.css        # ✅ Markdown prose
  print.css                 # ✅ Print styles
  fonts.css                 # ✅ Font imports
  theme.css                 # ⚠️ ORPHANED (1,135 lines, safe to delete via Git)
```

**Action**: Phase 1 complete. Organize into target structure during WordPress migration.

### C) Update tailwind.css

**Current** (`index.css` imports `tailwind.css`):
```css
/* index.css */
@import "./fonts.css";
@import "./tailwind.css";  /* ❌ Wrong direction */
@import "./theme-tokens.css";
/* ... */
```

**Target** (`tailwind.css` imports `index.css`):
```css
/* tailwind.css — Single entrypoint */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./index.css";
```

```css
/* index.css — Manifest for custom CSS */
@import "./fonts.css";
@import "./theme-tokens.css";
@import "./theme-dark.css";
/* ... */
```

### D) Implement Token-Driven Light/Dark Mode

**Use semantic variables everywhere**:
```css
/* ❌ Bad: Hardcoded color */
.card {
  background: #ffffff;
}

/* ✅ Good: Semantic token */
.card {
  background: var(--color-surface-1);
}
```

**Define light in :root, dark in .dark**:
```css
/* theme-tokens.css */
:root {
  --color-surface-1: #ffffff;
  --color-text-primary: #1a1a1a;
}

/* theme-dark.css */
.dark {
  --color-surface-1: #1a1a1a;
  --color-text-primary: #f9fafb;
}
```

**Add missing variables** identified in audit:
- Surface/background tokens
- Interactive state tokens
- Link state tokens
- Focus ring tokens (AAA-friendly)

### E) Implement BEM

**For each major UI block/section**:
1. Create BEM root class
2. Move styling under it
3. Keep specificity low
4. Use modifiers for variants

**Example**:
```css
/* ❌ Before: Deep nesting */
.article .header .title {
  font-size: 2rem;
}

/* ✅ After: BEM */
.c-article__title {
  font-size: var(--wp--preset--font-size--xx-large);
}
```

**Phased Migration**:
```html
<!-- Phase 1: Dual-classing -->
<div class="article c-article">
  <h2 class="title c-article__title">...</h2>
</div>

<!-- Phase 2: Remove old classes -->
<div class="c-article">
  <h2 class="c-article__title">...</h2>
</div>
```

### F) WordPress-Aligned Utilities and Globals

**Provide intentional global class set**:
```css
/* wordpress/globals.css */

/* Alignment */
.alignwide {
  max-width: var(--wp--style--global--wide-size);
  margin-inline: auto;
}

.alignfull {
  max-width: 100%;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

/* Colors */
.has-primary-color {
  color: var(--wp--preset--color--primary) !important;
}

/* Font Sizes */
.has-large-font-size {
  font-size: var(--wp--preset--font-size--large) !important;
}
```

**Map utilities to tokens** (no hardcoded colors).

### G) Break Up Large CSS Files

**Move rules into logical modules** per target structure:
- One module = one responsibility
- `index.css` = manifest only (no rules)
- Import in stable order

**Die Papier Status**: ✅ Phase 1 complete (monolithic `theme.css` split into 8 partials)

### H) Remove Unused CSS

**Confirm before deletion**:
1. Repository-wide search for selector
2. Check dynamic class generation
3. Verify no WordPress plugin dependencies

**Safe Removal**:
```bash
# Search for class usage
grep -r "class-name" src/ --include="*.tsx" --include="*.html"

# If zero results, safe to delete
```

**Die Papier**: `theme.css` orphaned (no imports), safe to delete via Git.

### I) Update Documentation

**File**: `/guidelines/design-tokens/`

**Ensure docs match implementation**:
- Token names
- Token categories
- Usage examples
- Theming approach (light/dark)
- Accessibility constraints (contrast targets, focus)

### J) Validation Checklist

**Must Pass**:
- [ ] Single CSS entrypoint import (`tailwind.css`)
- [ ] No duplicate/cyclic CSS imports
- [ ] Light/dark mode visually correct and complete
- [ ] Focus-visible styles present and clearly visible
- [ ] Contrast targets documented and enforced by tokens (AA/AAA)
- [ ] Reduced-motion supported (`prefers-reduced-motion`)
- [ ] No orphan CSS files
- [ ] No confirmed-unused selectors remain

**Testing**:
- [ ] Visual regression (Home, Article, Category, Cart, Checkout)
- [ ] Dark mode toggle works correctly
- [ ] Focus indicators visible on all interactive elements
- [ ] Keyboard navigation works
- [ ] Screen reader testing (basic)
- [ ] Contrast checker (WebAIM, axe DevTools)

---

## Deliverables

### 1) Implement Refactor in Code

- CSS file restructuring
- Token-level fixes
- BEM class additions
- Markup class updates (where needed)

### 2) Write Implementation Summary

**File**: `/reports/<DATE>_die-papier_css-refactor-summary.md`

**Include**:
- What changed
- What to review
- Remaining risks
- Visual regression test results
- Accessibility test results

### 3) Do Not Change Visual Design

**Allowed**:
- Token value changes for accessibility (contrast fixes)
- Focus indicator improvements

**Not Allowed**:
- Layout changes
- Brand color changes (without explicit approval)
- Typography changes (beyond token mappings)

---

## Example Implementation

### Before (Tailwind Utilities)

```tsx
<div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Article Title
  </h2>
  <p className="text-gray-600 dark:text-gray-300">
    Article content...
  </p>
</div>
```

### After (BEM + Tokens)

```tsx
<div className="c-article-card">
  <h2 className="c-article-card__title">
    Article Title
  </h2>
  <p className="c-article-card__content">
    Article content...
  </p>
</div>
```

```css
/* components/c-article-card.css */
.c-article-card {
  background: var(--color-surface-1);
  padding: var(--space-large);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.c-article-card__title {
  font-size: var(--font-size-xx-large);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-medium);
}

.c-article-card__content {
  color: var(--color-text-secondary);
}
```

---

## Begin Refactoring

**Step 1**: Read audit report (`/reports/<DATE>_die-papier_css-audit.md`)  
**Step 2**: Read task list (`/reports/<DATE>_die-papier_task-list.md`)  
**Step 3**: Apply steps A → J in order  
**Step 4**: Write implementation summary

---

**Last updated**: 2026-03-05  
**Status**: Template ready for execution after audit completion
