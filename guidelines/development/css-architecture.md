# CSS Architecture Guidelines

**Created**: 2026-03-04  
**Last updated**: 2026-03-05 (CSS Partial Split — Memory Optimization Phase 1)  
**Status**: Active

---

## 1. CSS File Structure

All CSS files live in `/src/styles/`. The import chain is strictly ordered.

### Before (pre-2026-03-05): Monolithic theme.css (1135 lines)

The original `theme.css` contained 7+ concerns in a single file. It has been **split into 8 focused partials** for memory optimization and maintainability.

### Current Import Chain

```
/src/main.tsx
  └── imports ./styles/index.css

/src/styles/index.css (import chain root)
  ├── 1. ./fonts.css                  — Google Fonts @import (must be first)
  ├── 2. ./tailwind.css               — Tailwind v4 config + source directives
  │       └── ./tw-animate.css        — Animation utilities
  │
  │   ── Theme Partials (split from theme.css — 2026-03-05) ──
  ├── 3. ./theme-tokens.css           — @custom-variant dark + :root CSS custom properties
  ├── 4. ./theme-dark.css             — .dark {} token overrides
  ├── 5. ./theme-exports.css          — @theme inline {} — Tailwind color/font utility exports
  ├── 6. ./theme-base.css             — @layer base: *, body, .alignwide, h1-h6 heading defaults
  ├── 7. ./wp-utilities.css           — @layer base: .has-*-color, .has-*-background-color, .has-*-font-size
  ├── 8. ./block-style-variations.css — @layer base: .is-style-* block style variation classes
  ├── 9. ./article-content.css        — @layer base: .article-content typography (light + dark)
  ├── 10. ./dark-mode-utilities.css   — @layer base: dark mode global utilities (forms, scrollbar, prose)
  ├── 11. ./font-enforcement.css      — @layer base: font family enforcement (h1-h6, buttons, forms)
  │
  ├── 12. ./markdown-prose.css        — .md-prose dev tool markdown rendering
  └── 13. ./print.css                 — @media print styles
```

### Import Order Matters

- **Fonts first**: Google Fonts `@import url()` must be the very first CSS processed
- **Tailwind second**: Sets up the utility framework before custom styles
- **Tokens before dark**: `:root` variables must be defined before `.dark` overrides
- **Exports after dark**: `@theme inline` references variables from both `:root` and `.dark`
- **Base after exports**: `@layer base` can reference Tailwind utilities
- **Utilities after base**: WordPress utility classes supplement base heading defaults
- **Content last**: Article/dark mode styles override base with higher specificity
- **Prose/Print last**: Override base styles for specific contexts

---

## 2. File Responsibilities

### `/src/styles/fonts.css`
- **Only place** for `@import url()` font declarations
- Currently loads: Inter, Roboto Serif, JetBrains Mono
- Never add font imports in any other CSS file

### `/src/styles/tailwind.css`
- Imports Tailwind with `@import "tailwindcss" source(none)`
- `source(none)` disables automatic class scanning
- `@source` directives explicitly list which files to scan for classes
- Imports `tw-animate.css` for animation utilities
- **Never add component styles here** — this file is for Tailwind configuration only

### `/src/styles/theme-tokens.css`
- `@custom-variant dark` directive (must be after tailwind.css)
- All `:root {}` CSS custom properties — brand colors, typography scale, ShadCN tokens, spacing, shadows, border radius, WordPress bridge variables (`--wp--preset--*`)
- ~430 lines — largest partial, but single-concern (light mode tokens)

### `/src/styles/theme-dark.css`
- `.dark {}` block — all dark mode token overrides
- Dark shadow tokens (`--shadow-dark-*`)
- Dark ShadCN system tokens
- ~70 lines

### `/src/styles/theme-exports.css`
- `@theme inline {}` block — re-exports CSS variables as Tailwind color/font utilities
- Maps `--color-*`, `--font-*`, `--radius-*` for Tailwind class generation
- ~70 lines

### `/src/styles/theme-base.css`
- `@layer base {}` — global resets (`*`), body styles, `.alignwide` utility
- Heading element defaults (h1-h6) with full typography from `--wp--preset--*` variables
- ~75 lines

### `/src/styles/wp-utilities.css`
- `@layer base {}` — WordPress color utility classes (`.has-{slug}-color`, `.has-{slug}-background-color`)
- WordPress font size utility classes (`.has-{slug}-font-size`)
- Mirrors what WordPress generates from theme.json presets
- ~170 lines

### `/src/styles/block-style-variations.css`
- `@layer base {}` — `.is-style-*` block style variation classes
- Typography variations: `.is-style-section-title`, `.is-style-display`, `.is-style-card-compact`
- Color variations: `.is-style-navy-background`, `.is-style-red-accent`, `.is-style-muted-background`
- ~65 lines

### `/src/styles/article-content.css`
- `@layer base {}` — `.article-content` scoped typography (headings, paragraphs, lists, blockquotes, links)
- Both light and dark mode `.article-content` styles
- ~105 lines

### `/src/styles/dark-mode-utilities.css`
- `@layer base {}` — sitewide dark mode overrides
- Form elements, selection color, scrollbar, placeholder text, hr, `.prose` dark styles
- ~65 lines

### `/src/styles/font-enforcement.css`
- `@layer base {}` — font family enforcement rules
- `.font-inter`, `.font-heading` utility classes
- Element enforcement: buttons, forms, navigation → Inter; h1-h4 → Roboto Serif; h5-h6 → Inter
- ~40 lines

### `/src/styles/markdown-prose.css`
- `.md-prose` scoped styles for dev tool markdown viewers
- ~711 lines but single-purpose, only loaded behind lazy routes
- Must not leak outside `.md-prose` scope

### `/src/styles/print.css`
- `@media print` rules
- Hides navigation, ads, interactive elements
- Optimizes article layout for paper

### `/src/styles/index.css`
- Import chain only + shared CSS animations (`@keyframes dp-fade-in`, `dp-fade-out`, `dp-stagger-item`)
- No CSS variables (those go in theme-tokens.css)
- No utility classes (those go in tailwind.css or wp-utilities.css)

### `/src/styles/theme.css` (CANONICAL REFERENCE — not imported)
- Single-file snapshot of the complete design system CSS (all tokens + base styles + utilities)
- **Not imported** by `index.css` — the 8 partials handle all runtime styling
- Serves 3 purposes:
  1. **Canonical reference** — single-file overview for quick scanning and cross-referencing
  2. **WordPress export source** — basis for generating the WordPress theme's custom CSS
  3. **Diffable baseline** — verify partials stay in sync by diffing against this master
- **Sync rule**: When a token is added/changed in any partial, mirror the change in `theme.css`
- The partials are the source of truth at runtime; `theme.css` is the source of truth for documentation and export

---

## 3. Adding New Styles

### Decision Tree

```
Need a new style?
├── Is it a one-off on a single element?
│   └── Use Tailwind utility classes inline
├── Is it a CSS custom property / design token?
│   └── Add to /src/styles/theme-tokens.css in :root
│   └── Add dark mode override to /src/styles/theme-dark.css in .dark
├── Is it a WordPress bridge class (has-*-color, etc.)?
│   └── Add to /src/styles/wp-utilities.css in @layer base
├── Is it a block style variation (.is-style-*)?
│   └── Add to /src/styles/block-style-variations.css
├── Is it article content styling?
│   └── Add to /src/styles/article-content.css
├── Is it a dark mode global utility?
│   └── Add to /src/styles/dark-mode-utilities.css
├── Is it an animation / keyframe?
│   └── Add to /src/styles/index.css
├── Is it print-only?
│   └── Add to /src/styles/print.css
└── Is it a font import?
    └── Add to /src/styles/fonts.css (top of file)
```

### Never Do

- Never create component-level `.css` files (use Tailwind utilities instead)
- Never add `@import url()` outside of `fonts.css`
- Never add CSS variables outside of `theme-tokens.css` / `theme-dark.css`
- Never use `!important` unless matching WordPress specificity patterns
- Never re-merge partials back into a single file

---

## 4. Tailwind v4 Source Configuration

The `tailwind.css` file uses explicit `@source` directives:

```css
@import "tailwindcss" source(none);

@source '../app/App.tsx';
@source '../app/routes.tsx';
@source '../app/components/**/*.{tsx}';
@source '../app/pages/**/*.{tsx}';
@source '../app/context/**/*.{tsx}';
@source '../main.tsx';
```

### Excluded from scanning:
- `/src/app/data/` — 76+ data files contain markdown strings with Tailwind-like class patterns that would bloat the CSS output
- `/src/app/hooks/` — TypeScript-only files, no JSX
- `/src/app/utils/` — Utility functions, no JSX (exception: `brandItalics.tsx` and `injectArticleAds.tsx` return JSX but use standard classes already scanned)

### Adding New Scannable Directories

If you create a new directory under `/src/app/` that contains `.tsx` files with Tailwind classes, add a `@source` directive to `tailwind.css`:

```css
@source '../app/newDirectory/**/*.{tsx}';
```

---

## 5. CSS Custom Properties Reference

All design tokens are defined as CSS custom properties in `/src/styles/theme-tokens.css` (light mode) and `/src/styles/theme-dark.css` (dark mode). See `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` for the complete reference.

### Key Variable Namespaces

| Prefix | Purpose | Example |
|:-------|:--------|:--------|
| `--custom-primary` | Brand colors | `--custom-primary: #e82c27` |
| `--brand-*` | Brand-specific colors | `--brand-navy: #172134` |
| `--base`, `--base-2`, `--base-3` | Background scale | Light: white → gray |
| `--contrast` | Main text color | Light: #2c2c2c, Dark: #e8e8ed |
| `--text-h1` through `--text-h6` | Heading font sizes | Fluid clamp values |
| `--text-p1` through `--text-p4` | Body font sizes | Fixed or fluid |
| `--lh-*` | Line heights | Matching heading/body sizes |
| `--fvs-*` | Font variation settings | Roboto Serif axis values |
| `--space-*` | Spacing scale | 10=4px through 100=40px |
| `--wp--preset--*` | WordPress bridge vars | Map to existing tokens |

---

## 6. CSS Partial Split Summary (2026-03-05)

The original monolithic `theme.css` (1135 lines) was split into 8 focused partials:

| Partial | Lines | Concern |
|:--------|------:|:--------|
| `theme-tokens.css` | ~430 | `:root` CSS custom properties (light mode) |
| `theme-dark.css` | ~70 | `.dark {}` token overrides |
| `theme-exports.css` | ~70 | `@theme inline {}` Tailwind exports |
| `theme-base.css` | ~75 | Body, headings, `.alignwide` |
| `wp-utilities.css` | ~170 | WordPress `.has-*` color/font utilities |
| `block-style-variations.css` | ~65 | `.is-style-*` block variations |
| `article-content.css` | ~105 | `.article-content` typography |
| `dark-mode-utilities.css` | ~65 | Dark mode global utilities |
| `font-enforcement.css` | ~40 | Font family enforcement |

**Benefits**: Each file is now single-concern, easier to navigate in IDE, and can be independently reviewed. `@layer base` blocks are additive — multiple partials safely contribute to the same layer.