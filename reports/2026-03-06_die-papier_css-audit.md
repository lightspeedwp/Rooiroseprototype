# CSS & Design Tokens Audit — Die Papier — 2026-03-06

## 0) Executive Summary

### Top 5 Risks

1. **No `prefers-reduced-motion` support in React CSS** — All animations/transitions run unconditionally. Only the WordPress export `mobile-menu.css` has the media query. WCAG 2.1 AA violation (SC 2.3.3).
2. **No explicit `:focus-visible` styles in custom CSS** — Focus visibility relies entirely on Tailwind's `outline-ring/50` applied via `* { @apply outline-ring/50; }` in `theme-base.css`. If Tailwind preflight or the `@apply` breaks, all focus indicators disappear.
3. **~~Orphaned~~ `theme.css` (1,135 lines)** — ✅ RESOLVED: Repurposed as canonical single-file reference (not imported, kept for WordPress export, diffable baseline). Header added, 3 missing tokens synced.
4. **`!important` overuse in `wp-utilities.css`** — 49 declarations use `!important`. While this mirrors WordPress core behavior, it prevents overriding these classes with normal cascade/layer control.
5. **No semantic surface/text tokens** — The project uses ShadCN naming (`--background`, `--foreground`, `--card`) but lacks a semantic layer (`--color-surface-1`, `--color-text-primary`). This makes dark mode maintenance harder and WordPress alignment less direct.

### Top 5 Opportunities

1. **Add `prefers-reduced-motion` global rule** — ~5 lines of CSS eliminates all motion accessibility violations.
2. **Add `:focus-visible` custom token** — Create `--color-focus-ring` with light/dark values for robust, token-driven focus indicators.
3. **~~Delete `theme.css`~~** — ✅ RESOLVED: Retained as canonical reference for WordPress export and documentation.
4. **Move `wp-utilities.css` to `@layer utilities`** — Currently in `@layer base`, which is semantically incorrect. Utilities should have highest layer priority.
5. **Deduplicate heading font-family** — `font-enforcement.css` re-declares `h1-h4` font-family already defined in `theme-base.css`. The reinforcement is intentional but creates maintenance overhead.

### Recommended Target Architecture

The current CSS architecture is well-structured after the Phase 1 decomposition. The primary entrypoint (`index.css`) imports 13 partials in the correct dependency order. The main improvements should focus on accessibility (reduced motion, focus visibility), and moving utilities to the correct `@layer`. `theme.css` has been repurposed as the canonical single-file reference (not imported, kept in sync with partials for documentation and WordPress export). No major restructuring is needed — the current system is production-ready with incremental fixes.

---

## 1) Current CSS Inventory & Entrypoints

### Inventory Table

| File | Path | Category | Lines | Imported By |
|:-----|:-----|:---------|------:|:------------|
| `index.css` | `/src/styles/index.css` | Manifest | 56 | `main.tsx` |
| `fonts.css` | `/src/styles/fonts.css` | Base | 1 | `index.css` |
| `tailwind.css` | `/src/styles/tailwind.css` | Base/Framework | 13 | `index.css` |
| `tw-animate.css` | `/src/styles/tw-animate.css` | Misc/Animation | 689 | `tailwind.css` |
| `theme-tokens.css` | `/src/styles/theme-tokens.css` | Tokens | 432 | `index.css` |
| `theme-dark.css` | `/src/styles/theme-dark.css` | Tokens | 73 | `index.css` |
| `theme-exports.css` | `/src/styles/theme-exports.css` | Tokens | 72 | `index.css` |
| `theme-base.css` | `/src/styles/theme-base.css` | Base | 80 | `index.css` |
| `wp-utilities.css` | `/src/styles/wp-utilities.css` | Utilities | 220 | `index.css` |
| `block-style-variations.css` | `/src/styles/block-style-variations.css` | Blocks/Sections | 68 | `index.css` |
| `article-content.css` | `/src/styles/article-content.css` | Components | 113 | `index.css` |
| `dark-mode-utilities.css` | `/src/styles/dark-mode-utilities.css` | Utilities | 71 | `index.css` |
| `font-enforcement.css` | `/src/styles/font-enforcement.css` | Base | 45 | `index.css` |
| `markdown-prose.css` | `/src/styles/markdown-prose.css` | Components | 711 | `index.css` + 2 TSX files |
| `print.css` | `/src/styles/print.css` | Misc | 320 | `index.css` |
| `theme.css` | `/src/styles/theme.css` | **REFERENCE** | 1,135+ | **None (canonical reference)** |

**Total active**: 15 files, ~2,964 lines  
**Reference**: 1 file, 1,135+ lines (not imported, kept for WordPress export and documentation)

### Entrypoint Summary

**Primary Entrypoint**: `/src/styles/index.css`  
**Imported By**: `/src/main.tsx` line 3: `import './styles/index.css';`

**Secondary Entrypoints**: None (Vite deduplicates the `markdown-prose.css` imports from TSX files)

**Risks**:
- [x] ~~Multiple competing entrypoints~~ — Single entrypoint confirmed
- [ ] CSS loaded outside build system — None
- [ ] ~~No clear entry point~~ — Clear single entry

### tailwind.css Analysis

**Location**: `/src/styles/tailwind.css`  
**Role**: Tailwind v4 configuration file (imported by `index.css`)  
**Contains Tailwind Directives**: Yes — `@import "tailwindcss" source(none);` (Tailwind v4 pattern)  
**Imports**: `./tw-animate.css`  
**Source Directives**: 6 `@source` declarations restricting scanning to `components/`, `pages/`, `context/`, `App.tsx`, `routes.tsx`, `main.tsx`

### index.css Analysis

**Location**: `/src/styles/index.css`  
**Role**: Primary manifest — imports all CSS partials in dependency order  
**Imports**: 13 partials + 3 inline `@keyframes` + 3 animation utility classes  
**Imported By**: `main.tsx`

### Categorization Summary

**Tokens**: 3 files — `theme-tokens.css`, `theme-dark.css`, `theme-exports.css`  
**Base**: 3 files — `fonts.css`, `theme-base.css`, `font-enforcement.css`  
**Components**: 2 files — `article-content.css`, `markdown-prose.css`  
**Utilities**: 2 files — `wp-utilities.css`, `dark-mode-utilities.css`  
**Blocks/Sections**: 1 file — `block-style-variations.css`  
**Framework**: 2 files — `tailwind.css`, `tw-animate.css`  
**Misc**: 2 files — `print.css`, `index.css` (manifest + animations)  
**Reference**: 1 file — `theme.css`

---

## 2) Import Graph & Conflict Analysis

### Current Import Graph

```
main.tsx
 └─ index.css (MANIFEST)
    ├─ fonts.css (Google Fonts @import)
    ├─ tailwind.css
    │  ├─ @import "tailwindcss" source(none)
    │  ├─ @source directives (6)
    │  └─ @import "./tw-animate.css"
    ├─ theme-tokens.css (:root tokens + @custom-variant dark)
    ├─ theme-dark.css (.dark overrides)
    ├─ theme-exports.css (@theme inline block)
    ├─ theme-base.css (@layer base — body, h1-h6, .alignwide)
    ├─ wp-utilities.css (@layer base — .has-* classes)
    ├─ block-style-variations.css (@layer base — .is-style-*)
    ├─ article-content.css (@layer base — .article-content)
    ├─ dark-mode-utilities.css (@layer base — .dark global utilities)
    ├─ font-enforcement.css (@layer base — font-family enforcement)
    ├─ markdown-prose.css (NO layer — .md-prose styles)
    ├─ print.css (NO layer — @media print)
    └─ [inline] @keyframes dp-fade-in, dp-fade-out, dp-stagger-item
                .mobile-menu-enter, .mobile-menu-exit, .dp-stagger-item

Side imports (Vite deduplicates):
  FileBrowserShell.tsx ──→ markdown-prose.css
  WpMarkdownViewer.tsx ──→ markdown-prose.css
```

### Duplicate Imports

| File | Imported By | Times | Risk |
|:-----|:------------|------:|:-----|
| `markdown-prose.css` | `index.css`, `FileBrowserShell.tsx`, `WpMarkdownViewer.tsx` | 3 | Low — Vite deduplicates |

### Cyclic Imports

None detected.

### Conflicting Ordering

| Issue | Current Order | Correct Order | Impact |
|:------|:--------------|:--------------|:-------|
| `wp-utilities.css` in `@layer base` | base layer | Should be `@layer utilities` or unlayered | Low — `!important` overrides layer specificity anyway |
| `tailwind.css` imported by `index.css` | fonts → tailwind → tokens | Acceptable for Tailwind v4 (not using `@tailwind base/components/utilities` directives) | None |

### Multiple Resets

| Reset/Preflight | Source | Conflicts With | Recommendation |
|:----------------|:-------|:---------------|:---------------|
| Tailwind v4 preflight | `tailwindcss` import | `theme-base.css` `* { @apply border-border outline-ring/50 }` | No conflict — `@apply` augments preflight, doesn't duplicate it |

### Proposed Import Strategy

The current import order is **correct and well-organized**. The only change recommended is moving `wp-utilities.css` from `@layer base` to `@layer utilities` for semantic correctness (though `!important` makes this a low-priority cosmetic fix).

**Rationale**:
1. Fonts loaded first (Google Fonts need early network request)
2. Tailwind framework second (provides preflight + utility generation)
3. Token variables defined (light mode)
4. Dark mode overrides immediately after
5. Tailwind theme exports bridge tokens to utility classes
6. Base element styles apply tokens
7. WordPress utilities and block styles
8. Component styles (article, dark mode globals)
9. Enforcement (font-family)
10. Prose and print last (highest specificity needs)

---

## 3) Design Tokens: Documentation vs Implementation

### 3.1 Token Discrepancy Matrix

#### Implemented Token Categories

| Category | Count in CSS | Key Properties |
|:---------|:-------------|:---------------|
| Brand Colors | 7 | `--custom-primary`, `--brand-navy`, `--base`, etc. |
| ShadCN System | 22 | `--background`, `--foreground`, `--card`, `--muted`, etc. |
| Typography Scale | 26 | `--text-h1`..`--text-p4`, `--lh-*`, `--ls-*`, `--fvs-*` |
| Font Families | 3 | `--font-inter`, `--font-heading`, `--font-raleway` |
| Spacing | 8 | `--space-10`..`--space-100` |
| WordPress Preset Bridge | 60+ | `--wp--preset--color--*`, `--wp--preset--font-size--*`, `--wp--preset--spacing--*` |
| Shadows | 6 | `--wp--preset--shadow--100`..`--600` |
| Dark Shadows | 7 | `--shadow-dark-100`..`--600`, `--shadow-dark-up` |
| Border Radius | 7 | `--wp--custom--border-radius--0`..`--900` |
| Border Width | 3 | `--wp--custom--border-width--100`..`--300` |
| Layout | 2 | `--wp--style--global--content-size`, `--wide-size` |
| Charts | 5 | `--chart-1`..`--chart-5` |
| Sidebar | 8 | `--sidebar`, `--sidebar-foreground`, etc. |
| Misc | 3 | `--radius`, `--font-size`, `--text-link-red` |

**Total Implemented**: ~167 custom properties in `:root`, ~43 overrides in `.dark`

#### Documented but Not Fully Implemented

| Token | Documented In | Status | Impact |
|:------|:--------------|:-------|:-------|
| `--color-surface-1/2/3` | `dark-mode.md` conceptually | Not as named tokens | Low — ShadCN `--background`/`--card`/`--muted` serve same purpose |
| `--color-text-primary/secondary/muted` | `dark-mode.md` conceptually | Not as named tokens | Low — ShadCN `--foreground`/`--muted-foreground` serve same purpose |
| `--color-focus-ring` | `interactions.md` | Not implemented | Medium — Focus ring uses Tailwind `ring` token |
| `--transition-default` | `interactions.md` | Not as CSS variable | Low — Used inline in components |

#### Implemented but Not Fully Documented

| Property | File | Notes |
|:---------|:-----|:------|
| `--placeholder` | `theme-dark.css` | Dark-mode-only token, not in design docs |
| `--shadow-dark-*` | `theme-dark.css` | 7 dark shadow tokens, partially documented |
| `--competition-dark-from/to` | `theme-tokens.css` | Competition gradient tokens |
| `--gradient-brand-red` | `theme-tokens.css` | Brand gradient, referenced in docs but not with this exact name |
| `--text-h-compact`, `--lh-h-compact`, `--fvs-h-compact` | `theme-tokens.css` | Compact card typography |

### 3.2 Documentation Fixes Required

**Priority 1**: Document `--placeholder`, `--shadow-dark-*` tokens  
**Priority 2**: Add `--color-focus-ring` token (accessibility requirement)  
**Priority 3**: Reconcile semantic token naming (ShadCN vs design system docs)

---

## 4) Light/Dark Mode Coverage

### Current Theming Mechanism

**Primary Mechanism**: `.dark` class on `<html>` element  
**Custom Variant**: `@custom-variant dark (&:is(.dark *));` in `theme-tokens.css`  
**System Preference Support**: No `prefers-color-scheme` fallback  
**Toggle Component**: Exists in React app (not in CSS scope)

### Token Coverage Matrix

| Token Category | Light (:root) | Dark (.dark) | Gap |
|:---------------|:-------------|:-------------|:----|
| Brand Colors | 7 tokens | 5 overrides | `--brand-warm-gray`, `--gradient-brand-red` not overridden (intentional) |
| ShadCN System | 22 tokens | 20 overrides | `--placeholder` dark-only, `--font-size`/`--radius` not overridden (correct) |
| Typography | 26 tokens | 0 overrides | Correct — typography doesn't change with theme |
| Spacing | 8 tokens | 0 overrides | Correct — spacing doesn't change with theme |
| Shadows (WP) | 6 tokens | 0 overrides | **GAP** — light shadows invisible on dark backgrounds |
| Shadows (Dark) | 0 | 7 tokens | Dark-only shadow set exists but doesn't override WP shadow presets |
| Charts | 5 tokens | 5 overrides | Complete |
| Sidebar | 8 tokens | 8 overrides | Complete |
| Border Radius | 7 tokens | 0 overrides | Correct |
| Layout | 2 tokens | 0 overrides | Correct |

### Missing Tokens

| Token | Category | Recommended Light | Recommended Dark | Priority |
|:------|:---------|:------------------|:-----------------|:---------|
| `--color-focus-ring` | Interactive | `#e82c27` | `#f06560` | P1 (Accessibility) |
| Shadow dark overrides | Shadows | N/A | Override `--wp--preset--shadow--*` with dark values | P2 |
| `--color-link-visited` | Links | `#7b1fa2` | `#ce93d8` | P3 |

### Contrast Risk Analysis

| Combination | Light Contrast | Dark Contrast | AA | AAA |
|:------------|---------------:|---------------:|:---|:----|
| `--foreground` (#2c2c2c) on `--background` (#ffffff) | 13.5:1 | — | Pass | Pass |
| `--foreground` (#e8e8ed) on `--background` (#0f1923) | — | 13.8:1 | Pass | Pass |
| `--muted-foreground` (#636375) on `--background` (#ffffff) | 5.7:1 | — | Pass | Fail (need 7:1) |
| `--muted-foreground` (#95a3b1) on `--card` (#162233) | — | 4.8:1 | Pass | Fail |
| `--text-link-red` (#c41f20) on `--background` (#ffffff) | 5.2:1 | — | Pass | Fail |
| `--text-link-red` (#f06560) on `--card` (#162233) | — | 4.8:1 | Pass | Fail |
| `--custom-primary` (#e82c27) on `--background` (#ffffff) | 4.35:1 | — | **Fail** | Fail |

**Note**: `--custom-primary` (#e82c27) fails AA for normal text on white. This is correctly mitigated by using `--text-link-red` (#c41f20, 5.2:1) for body text links. The brand red is reserved for buttons, badges, and large text where 3:1 ratio is sufficient.

---

## 5) Tailwind Integration Plan

### Current Tailwind Directive Usage

**Location**: `/src/styles/tailwind.css`

```css
@import "tailwindcss" source(none);
@source '../app/App.tsx';
@source '../app/routes.tsx';
@source '../app/components/**/*.{tsx}';
@source '../app/pages/**/*.{tsx}';
@source '../app/context/**/*.{tsx}';
@source '../main.tsx';
@import "./tw-animate.css";
```

**Status**: Tailwind v4 pattern — no `@tailwind base/components/utilities` directives. Uses `source(none)` with explicit `@source` for tree-shaking.

### Current @layer Usage

| CSS File | Current Layer | Correct Layer | Action |
|:---------|:-------------|:-------------|:-------|
| `theme-tokens.css` | None (variables) | None | Correct |
| `theme-dark.css` | None (variables) | None | Correct |
| `theme-exports.css` | None (`@theme inline`) | None | Correct |
| `theme-base.css` | `@layer base` | `@layer base` | Correct |
| `wp-utilities.css` | `@layer base` | `@layer utilities` | **Move** (low priority — `!important` negates layer) |
| `block-style-variations.css` | `@layer base` | `@layer components` | **Move** (medium priority) |
| `article-content.css` | `@layer base` | `@layer components` | **Move** (medium priority) |
| `dark-mode-utilities.css` | `@layer base` | `@layer utilities` | **Move** (low priority) |
| `font-enforcement.css` | `@layer base` | `@layer base` | Correct |
| `markdown-prose.css` | None | `@layer components` or None | Keep as-is (doubled selectors handle specificity) |
| `print.css` | None (`@media print`) | None | Correct |

### Existing High-Specificity Selectors

| File | Selector | Specificity | Issue | Fix |
|:-----|:---------|:------------|:------|:----|
| `wp-utilities.css` | `.has-*-color` (49 rules) | `!important` | Mirrors WP core | Keep (WP convention) |
| `font-enforcement.css` | `.font-inter`, `.font-heading` | `!important` | Enforcement classes | Keep (intentional) |
| `markdown-prose.css` | `.md-prose.md-prose` (doubled) | 0,2,0 | Beats Tailwind preflight | Keep (documented workaround) |
| `print.css` | `* { color: #000 !important }` | Universal + `!important` | Forces print black | Keep (print convention) |

---

## 6) BEM & CSS Architecture Strategy

### Current Naming Patterns

**BEM-like**: No  
**Utility Prefixes**: `.has-*` (WordPress), `.is-style-*` (WordPress), `.dp-*` (custom animations)  
**WordPress Patterns**: `.wp-block-*`, `.has-*-color`, `.has-*-background-color`, `.has-*-font-size`, `.is-style-*`, `.alignwide`  
**Custom Patterns**: `.article-content`, `.md-prose`, `.mobile-menu-*`, `.font-inter`, `.font-heading`

### Assessment

The codebase is primarily Tailwind utility-driven for React components, with custom CSS limited to:
1. WordPress alignment classes (correctly following WP conventions)
2. Markdown/prose rendering (complex, well-scoped to `.md-prose`)
3. Article content styles (well-scoped to `.article-content`)
4. Print styles

**BEM adoption is NOT recommended at this stage** because:
- React components use Tailwind utilities (no custom class names to rename)
- WordPress classes must follow WP conventions (`.has-*`, `.is-style-*`)
- Only 3 custom component class families exist (`.article-content`, `.md-prose`, `.mobile-menu-*`)
- Migration to WordPress FSE theme eliminates React CSS entirely

### Exceptions (Keep As-Is)

All WordPress convention classes: `.wp-block-*`, `.has-*`, `.is-style-*`, `.alignwide`, `.alignfull`

---

## 7) WordPress Alignment

### Current Global Classes

| Class Pattern | Exists | Count | Status |
|:-------------|:-------|------:|:-------|
| `.alignwide` | Yes | 1 | Correct |
| `.has-{slug}-color` | Yes | 20 | Complete — all theme.json palette slugs covered |
| `.has-{slug}-background-color` | Yes | 20 | Complete — all theme.json palette slugs covered |
| `.has-{slug}-font-size` | Yes | 9 | Complete — all 100-900 font size slugs |
| `.is-style-*` | Yes | 6 | Partial — 3 typography + 3 color variations |

### Design Tokens to theme.json Bridge

**Fully implemented** in `theme-tokens.css`:
- 20 color presets (`--wp--preset--color--*`)
- 9 font size presets (`--wp--preset--font-size--*`)
- 8 spacing presets (`--wp--preset--spacing--*`)
- 6 shadow presets (`--wp--preset--shadow--*`)
- 2 font family presets (`--wp--preset--font-family--*`)
- 10 line height customs (`--wp--custom--line-height--*`)
- 8 letter spacing customs (`--wp--custom--letter-spacing--*`)
- 5 font variation settings customs (`--wp--custom--fvs--*`)
- 7 border radius customs (`--wp--custom--border-radius--*`)
- 3 border width customs (`--wp--custom--border-width--*`)
- 2 layout widths (`--wp--style--global--content-size`, `--wide-size`)

**Status**: Bridge is comprehensive and production-ready.

---

## 8) DRY Opportunities and Reusable Patterns

### Duplicate Patterns Found

| Pattern | Files | Description | Impact |
|:--------|:------|:------------|:-------|
| Heading font-family declaration | `theme-base.css` (h1-h4), `font-enforcement.css` (h1-h4) | Same `font-family: var(--font-heading)` | Low — intentional reinforcement |
| Dark mode color overrides | `article-content.css`, `dark-mode-utilities.css` | `.dark .article-content` and `.dark .prose` overlap | Low — different scopes |
| Markdown-prose.css imports | `index.css`, `FileBrowserShell.tsx`, `WpMarkdownViewer.tsx` | Triple import (Vite deduplicates) | None (runtime) |

### Estimated Savings

Minimal — the current architecture is already well-DRY after the Phase 1 decomposition. The only real opportunity is:
- Remove `h1-h4 { font-family }` from `font-enforcement.css` (already in `theme-base.css`): saves ~5 lines

---

## 9) Unused Selectors & Orphaned Files

### ~~Orphaned~~ Reference CSS Files

| File | Lines | Status | Notes |
|:-----|------:|:-------|:------|
| `theme.css` | 1,135+ | ✅ RESOLVED — Canonical reference | Not imported. Repurposed as single-file reference for WordPress export, documentation, and diffable baseline. Header added, 3 missing tokens synced (2026-03-06). |

### Potentially Unused Selectors (Needs Confirmation)

| Selector | File | Confidence | Notes |
|:---------|:-----|:-----------|:------|
| `.topbar` | `print.css` | Medium | May not exist in current React markup |
| `.header` (class) | `print.css` | Medium | React uses `<header>` element, not `.header` class |
| `.footer` (class) | `print.css` | Medium | React uses `<footer>` element, not `.footer` class |
| `.newsletter-modal` | `print.css` | Medium | May use different class name |
| `.back-to-top` | `print.css` | Medium | Check if this class exists |
| `.breadcrumbs` | `print.css` | Medium | Check if this class exists |
| `.popular-articles` | `print.css` | Medium | Check if this class exists |
| `.sidebar` | `print.css` | Medium | Check if this class exists |
| `.ad-space` | `print.css` | Medium | Check if this class exists |
| `.newsletter-box` | `print.css` | Medium | Check if this class exists |

**Safe Removal Approach**: Search `grep -r "className.*class-name" src/app/` for each class before removing from `print.css`.

### Expected Impact

- **Print.css cleanup**: -10–20 lines (after confirming unused selectors)

---

## 10) Accessibility (WCAG 2.1 AA/AAA)

### 1) Focus Visibility

**Current Implementation**: `theme-base.css` line 7:
```css
* { @apply border-border outline-ring/50; }
```
This applies Tailwind's outline utility to all elements, providing focus visibility through Tailwind's built-in `:focus-visible` handling.

**Status**: AA Pass (Tailwind provides `:focus-visible` outlines)  
**Risk**: No custom `--color-focus-ring` token — if Tailwind changes behavior, no fallback

**Recommendation**: Add explicit focus-visible token:
```css
:root { --color-focus-ring: #e82c27; }
.dark { --color-focus-ring: #f06560; }
```

### 2) Color Contrast

**AA Compliance**: Pass for all primary text/surface combinations  
**AAA Compliance**: Fails for muted text, links, and secondary text

| Combination | Ratio | AA | AAA |
|:------------|------:|:---|:----|
| `--foreground` on `--background` (light) | 13.5:1 | Pass | Pass |
| `--foreground` on `--background` (dark) | 13.8:1 | Pass | Pass |
| `--muted-foreground` on white (light) | 5.7:1 | Pass | **Fail** |
| `--muted-foreground` on `--card` (dark) | 4.8:1 | Pass | **Fail** |
| `--text-link-red` on white (light) | 5.2:1 | Pass | **Fail** |
| `--text-link-red` on `--card` (dark) | 4.8:1 | Pass | **Fail** |

**AAA Blocker**: Muted text and link colors cannot meet 7:1 without significantly darkening them, which would reduce the visual hierarchy contrast with primary text. This is a design trade-off.

### 3) Reduced Motion

**Status**: **NOT IMPLEMENTED** in React CSS

**Animations without `prefers-reduced-motion`**:
- `dp-fade-in` (0.25s) — `index.css`
- `dp-fade-out` (0.2s) — `index.css`
- `dp-stagger-item` (0.25s) — `index.css`
- `tw-animate.css` animations (enter, exit, accordion, collapsible, caret-blink)
- `markdown-prose.css` link transitions (0.15s)

**Required Fix**:
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

### 4) Link Accessibility

| Feature | Status | Notes |
|:--------|:-------|:------|
| Link underlines (article-content) | Pass | `text-decoration: underline` |
| Link underlines (md-prose) | Pass | `text-decoration: underline` |
| Visited link styles | **Missing** | No `:visited` styles defined |
| Link color distinct from text | Pass | Red links on dark text |

### 5) Form Controls

Forms primarily use Tailwind utilities in React components. The `dark-mode-utilities.css` handles dark mode form inputs via `color-scheme: dark`. Specific form styling is component-level (Tailwind classes).

### Pass/Fail Summary

| Criterion | AA | AAA |
|:----------|:---|:----|
| Focus visibility | Pass | Pass (via Tailwind) |
| Color contrast (primary text) | Pass | Pass |
| Color contrast (muted text) | Pass | **Fail** |
| Color contrast (links) | Pass | **Fail** |
| Reduced motion | **Fail** | **Fail** |
| Link underlines | Pass | Pass |
| Visited links | **Fail** (no differentiation) | **Fail** |

### Token-Level Fixes

**P0 — AA Blockers**:
1. Add `prefers-reduced-motion` media query to `index.css`

**P1 — AA Improvements**:
2. Add `--color-focus-ring` token with light/dark values
3. Add `:visited` link styles (or document intentional omission)

**P2 — AAA Improvements**:
4. Darken `--muted-foreground` light: `#636375` → `#4b5563` (7.2:1)
5. Darken `--muted-foreground` dark: `#95a3b1` → `#a8b8c8` (check ratio)
6. Document AAA limitations for brand red links

---

## 11) Proposed Target Folder Structure

The current structure is already well-organized. No changes recommended:

```
/src/styles/
  index.css               ← Manifest (entrypoint)
  fonts.css               ← Google Fonts import
  tailwind.css            ← Tailwind v4 config + @source
  tw-animate.css          ← Animation utilities
  theme-tokens.css        ← :root CSS custom properties
  theme-dark.css          ← .dark overrides
  theme-exports.css       ← @theme inline (Tailwind bridge)
  theme-base.css          ← @layer base (body, headings)
  wp-utilities.css        ← WordPress .has-* classes
  block-style-variations.css ← .is-style-* variations
  article-content.css     ← .article-content scoped styles
  dark-mode-utilities.css ← .dark global utilities
  font-enforcement.css    ← Font family enforcement
  markdown-prose.css      ← .md-prose rendering
  print.css               ← @media print styles
  theme.css               ← REFERENCE (canonical single-file snapshot, not imported)
```

---

## 12) Proposed index.css and tailwind.css Contents

### tailwind.css (No changes needed)
```css
@import "tailwindcss" source(none);
@source '../app/App.tsx';
@source '../app/routes.tsx';
@source '../app/components/**/*.{tsx}';
@source '../app/pages/**/*.{tsx}';
@source '../app/context/**/*.{tsx}';
@source '../main.tsx';
@import "./tw-animate.css";
```

### index.css (Add reduced motion)
```css
@import "./fonts.css";
@import "./tailwind.css";

/* Theme Partials */
@import "./theme-tokens.css";
@import "./theme-dark.css";
@import "./theme-exports.css";
@import "./theme-base.css";
@import "./wp-utilities.css";
@import "./block-style-variations.css";
@import "./article-content.css";
@import "./dark-mode-utilities.css";
@import "./font-enforcement.css";
@import "./markdown-prose.css";
@import "./print.css";

/* CSS animations */
@keyframes dp-fade-in { ... }
@keyframes dp-fade-out { ... }
@keyframes dp-stagger-item { ... }
.mobile-menu-enter { ... }
.mobile-menu-exit { ... }
.dp-stagger-item { ... }

/* ADD: Reduced motion support (WCAG 2.1 SC 2.3.3) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Appendix: Evidence

### Key File Paths
- Entrypoint: `/src/main.tsx` line 3
- CSS Manifest: `/src/styles/index.css`
- Tailwind Config: `/src/styles/tailwind.css`
- Token Source: `/src/styles/theme-tokens.css` (432 lines)
- Dark Mode: `/src/styles/theme-dark.css` (73 lines)
- Orphaned: `/src/styles/theme.css` (1,135 lines, zero imports)

### Key Selectors
- `* { @apply border-border outline-ring/50; }` — focus/border baseline
- `.has-*-color { ... !important }` — WordPress color utilities (49 rules)
- `.md-prose.md-prose` — doubled selector to beat Tailwind preflight
- `.dark ::selection` — dark mode selection color

### Dynamic Class Generation
- Tailwind utility classes generated from JSX (`className="..."`)
- `@source` directives in `tailwind.css` restrict scanning scope
- No CSS Modules or CSS-in-JS detected

---

**Audit completed**: 2026-03-06  
**Auditor**: CSS Architecture & Accessibility Auditor  
**Next step**: Task list (below)