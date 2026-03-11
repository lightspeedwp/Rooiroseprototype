# CSS Cleanup & Optimization Guidelines

**Purpose**: Unified approach for cleaning up and optimizing CSS in the Die Papier project. Ensures token-driven architecture, WCAG 2.1 AA/AAA accessibility, and WordPress theme.json alignment.

**Related**: 
- `/guidelines/development/css-architecture.md` — Current CSS partial structure
- `/prompts/memory-optimization/` — Audit and refactor prompts
- `/guidelines/design-tokens/` — Design token documentation

---

## Key Principles

### 1. Token-First Architecture

Define a small set of raw design tokens (color palette, spacing scale, typography scale, radii, shadows, borders, z-index) in dedicated CSS partials. WordPress's theme.json demonstrates how presets are converted into CSS custom properties [[1]](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/).

**Die Papier Implementation**:
- Raw tokens: `/src/styles/theme-tokens.css` (428 lines of CSS custom properties)
- Semantic tokens: Built on top of raw tokens (e.g., `--color-text-primary`, `--surface-card`)
- Theme exports: `/src/styles/theme-exports.css` (Tailwind v4 `@theme inline` block)

**Rules**:
- Publish all tokens as CSS variables (e.g., `--space-sm`, `--radius-md`, `--color-surface-1`)
- Build semantic tokens on top of raw tokens
- Utilities/components should only use semantic tokens, never raw hex values

### 2. Accessibility by Design

Every color combination must satisfy WCAG 2.1 contrast ratios [[2]](https://www.w3.org/TR/WCAG21/):
- **Level AA**: 4.5:1 for normal text, 3:1 for large text
- **Level AAA**: 7:1 for normal text, 4.5:1 for large text

**Requirements**:
- Visible focus indicators via outlines
- Honor `prefers-reduced-motion` preference
- Do not rely on color alone to convey state (use icons, text, patterns)

### 3. Light/Dark Mode Support

Define theme variables for both light and dark modes using a single theming mechanism.

**Die Papier Implementation**:
- Light mode: `:root` selector in `/src/styles/theme-tokens.css`
- Dark mode: `.dark` selector in `/src/styles/theme-dark.css`
- All semantic tokens must have definitions in both light and dark blocks

**Rules**:
- Avoid hard-coded colors
- Reference semantic tokens that resolve to different values under different themes
- Use `[data-theme="dark"]` or `.dark` class on `<html>` element

### 4. No Tailwind Utility Classes in Markup

**Current State**: Die Papier uses Tailwind v4 extensively in React components.

**WordPress Migration**: All utility classes (e.g., `bg-gray-100`, `p-4`, `grid-cols-2`) must be removed from markup and replaced with BEM-styled class names and token-driven CSS.

**Exception**: Tailwind remains as a build tool. Use `@layer` directive to inject custom styles [[3]](https://tailwindcss.com/docs/adding-custom-styles).

### 5. Adopt BEM Naming

Use Block-Element-Modifier methodology for all component and section styles:
- **Blocks**: Self-contained components (e.g., `.c-card`)
- **Elements**: Parts of the block (e.g., `.c-card__header`)
- **Modifiers**: Variations (e.g., `.c-card--featured`)

**Prefixes**:
- `c-` for components
- `l-` for layout utilities
- `u-` for simple one-off utility classes
- `is-` / `has-` for state classes

**Rules**:
- Avoid deeply nested selectors
- Prefer single class selectors for predictability
- Keep specificity low

### 6. Minimal Margin Usage

Use spacing tokens via `gap`, `padding`, and layout utilities (flex/grid) instead of margins.

**Die Papier Spacing Scale**:
- `x-small` (0.5rem / 8px)
- `small` (0.75rem / 12px)
- `medium` (1rem / 16px)
- `large` (1.5rem / 24px)
- `x-large` (2rem / 32px)
- `xx-large` (3rem / 48px)
- `xxx-large` (4rem / 64px)

**Rules**:
- Only apply margins to separate large sections when absolutely necessary
- Prefer `gap` for flex/grid spacing
- Use consistent spacing scale exposed as tokens

### 7. Per-Block CSS Files

Break large CSS files into logical pieces. Store each block or section's styles in its own file.

**Die Papier Structure** (Phase 1 complete):
```
/src/styles/
  index.css                    # Manifest importing all modules
  theme-tokens.css             # Raw palette, spacing, typography tokens
  theme-dark.css               # Dark mode token overrides
  theme-exports.css            # Tailwind v4 @theme inline exports
  theme-base.css               # Base element styles (body, headings)
  wp-utilities.css             # WordPress utility classes
  block-style-variations.css   # WordPress block variations
  article-content.css          # Article content container styles
  dark-mode-utilities.css      # Dark mode global utilities
  font-enforcement.css         # Font family enforcement
```

### 8. Remove Hard-Coded Values

**Forbidden**:
- Hard-coded hex colors (e.g., `#142135`)
- Hard-coded font names (e.g., `"Inter", sans-serif`)
- Hard-coded line heights (e.g., `1.5`)
- Hard-coded radii (e.g., `8px`)
- Hard-coded shadows
- Hard-coded z-index values

**Required**:
- Map all values to closest token or create new token in design system
- Document all new tokens in `/guidelines/design-tokens/`

### 9. Design Tokens Documentation

Each repository must maintain `/guidelines/design-tokens/` folder documenting:
- Available tokens and intended usage
- Token categories (colors, typography, spacing, shadows, etc.)
- Semantic token mappings
- Light/dark mode token pairs

**Die Papier Documentation**:
- `DESIGN-SYSTEM-GUIDE.md` — Canonical reference (145+ tokens)
- Individual token category files (typography, colors, spacing, etc.)

### 10. Import Order & Cascade Layers

When using Tailwind or custom resets, use `@layer` directive to inject custom styles [[3]](https://tailwindcss.com/docs/adding-custom-styles).

**Die Papier Import Order** (index.css):
```css
@import "./fonts.css";
@import "./tailwind.css";
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
```

**Rules**:
- Avoid duplicate imports
- Avoid cyclic dependencies
- Create stable import order: base → components → utilities

---

## Recommended File Structure

```
src/styles/
  index.css              # Manifest importing all other CSS modules in order
  tokens/
    core.css             # Raw palette, spacing, typography, radii, shadow, border, z-index
    semantic.css         # Semantic tokens (--color-text-primary, --surface-card, etc.)
    themes.css           # Light mode (:root) + dark mode ([data-theme="dark"])
    motion.css           # Motion durations, easing, reduced-motion hooks
  base/
    reset.css            # Reset/preflight (avoid duplicates with Tailwind preflight)
    typography.css       # Default typography (body, headings, links)
    forms.css            # Form elements and controls
    accessibility.css    # Focus outlines, skip links, visually hidden helpers
  utilities/
    layout.css           # Flex and grid helpers using gap tokens
    spacing.css          # Padding/gap helpers based on spacing tokens
    typography.css       # Font weight, text alignment helpers
    color.css            # Color helpers mapping semantic tokens to classes
    states.css           # is-/has- state helpers for interactive states
  components/
    c-component-name.css # BEM blocks for reusable components
  sections/
    s-section-name.css   # Styles scoped to specific templates/page sections
  wordpress/
    globals.css          # WordPress-aligned global classes (.alignwide, .has-text-color)
```

**Die Papier Status**: Phase 1 complete (tokens/base split done), awaiting WordPress migration for full structure.

---

## Light/Dark Mode Implementation

Use CSS custom properties for theming:

1. **Light mode** — Default values in `:root` selector
2. **Dark mode** — Overrides in `[data-theme="dark"]` or `.dark` selector
3. **Semantic tokens** — Must have definitions in both light and dark blocks

**Example**:
```css
/* theme-tokens.css (light mode) */
:root {
  --color-text-primary: #1a1a1a;
  --color-surface-1: #ffffff;
  --color-border-default: #e5e7eb;
}

/* theme-dark.css (dark mode) */
.dark {
  --color-text-primary: #f9fafb;
  --color-surface-1: #1a1a1a;
  --color-border-default: #374151;
}
```

---

## Accessibility Checklist

### Contrast

- ✅ Verify all text/background combinations meet WCAG 2.1 requirements
- ✅ AA: 4.5:1 for normal text, 3:1 for large text
- ✅ AAA: 7:1 for normal text, 4.5:1 for large text
- ✅ Adjust tokens if necessary

### Focus Visibility

- ✅ Every interactive element must have visible focus style
- ✅ Use token for focus outline color and thickness
- ✅ Outline must meet contrast requirements

### Reduced Motion

- ✅ Provide `[data-reduce-motion]` or `prefers-reduced-motion: reduce` mechanism
- ✅ Use motion token scale
- ✅ Reduce durations or disable non-essential animations when enabled

### Color Independence

- ✅ Do not rely solely on color to convey state
- ✅ Use icons, text, or patterns in addition to color

---

## Best Practices

### Plan Token Updates Centrally

Introduce new tokens through design token documentation, not ad-hoc in code. Ensures all projects share semantic values and maintain consistency.

### Flatten Complex Selectors

Avoid deep descendant chains. Use single class names for components. Scope nested elements within the block. Improves maintainability and keeps specificity low.

### Avoid `!important`

Instead of raising specificity with `!important`, organize imports using layers and keep selectors simple. Use `@layer` directive to ensure correct cascade order [[3]](https://tailwindcss.com/docs/adding-custom-styles).

### Audit and Remove Unused CSS

Use static analysis or audits to identify unused selectors and orphaned CSS files. Remove them to reduce bundle size.

**Die Papier**: Phase 1 complete — `theme.css` repurposed as canonical single-file reference (not imported, kept in sync with partials for WordPress export, documentation, and diffable baseline).

### Per-Repository Documentation

Keep `/guidelines/design-tokens/` up to date. Audit process will flag mismatches for correction.

---

## Migration Strategy (React → WordPress)

### Phase 1: Token Extraction ✅ Complete
- Split monolithic CSS into focused partials
- Establish token-driven architecture
- Implement light/dark mode token pairs

### Phase 2: BEM Adoption (Pending WordPress Migration)
1. **Dual-classing**: Introduce BEM classes alongside Tailwind utilities
2. **Markup migration**: Replace Tailwind utilities with BEM classes
3. **Cleanup**: Remove old utilities when confirmed unused

### Phase 3: WordPress Alignment (Pending WordPress Migration)
1. Create WordPress-aligned global classes
2. Map utilities to theme.json presets
3. Implement per-block CSS files
4. Convert section styles to JSON variations

### Phase 4: Validation
- ✅ Single CSS entrypoint import
- ✅ No duplicate/cyclic CSS imports
- ✅ Light/dark mode visually correct
- ✅ Focus-visible styles present
- ✅ Contrast targets documented
- ✅ Reduced-motion supported
- ✅ No orphan CSS files
- ✅ No confirmed-unused selectors

---

## References

1. [Global Settings & Styles (theme.json) – Block Editor Handbook](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/)
2. [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
3. [Using CSS Cascade Layers to Manage Custom Styles in a Tailwind Project](https://tailwindcss.com/docs/adding-custom-styles)

---

**Last updated**: 2026-03-05  
**Status**: Phase 1 complete, WordPress migration pending  
**Related audits**: `/reports/memory-optimization-audit-2026-03-05.md`