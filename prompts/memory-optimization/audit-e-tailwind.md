# Audit E: Tailwind + Custom CSS Layering Plan

**Purpose**: Propose how custom CSS should integrate with Tailwind using `@layer` directive to avoid specificity conflicts.

---

## Tasks

### 1) Check for Tailwind Directives

**Locate and document**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Questions**:
- Where are these directives? (`tailwind.css`, `index.css`, other?)
- Are all three present or only some?
- Are they in the correct order?

### 2) Propose @layer Integration

**Tailwind Layers**:
- `@layer base` — Resets, base elements, typography
- `@layer components` — Reusable component classes
- `@layer utilities` — Single-purpose utility classes

**Mapping for Die Papier**:

| CSS File | Recommended Layer | Rationale |
|:---------|:------------------|:----------|
| tokens (all) | None (variables, not selectors) | CSS variables don't need layers |
| theme-base.css | `@layer base` | Body, heading styles |
| wp-utilities.css | `@layer utilities` | WordPress utility classes |
| block-style-variations.css | `@layer components` | Block variations are components |
| article-content.css | `@layer components` | Content container styles |
| dark-mode-utilities.css | `@layer utilities` | Theme toggle utilities |
| font-enforcement.css | `@layer base` | Font family enforcement |

### 3) Identify High-Specificity Selectors

**Search for**:
- Use of `!important`
- Deep descendant selectors (`.a .b .c .d`)
- Tag + class selectors (`div.class`)
- ID selectors (`#id`)

**Document**:
- File and line number
- Selector text
- Specificity score
- Why it's problematic
- Recommended fix

### 4) Propose Conflict Avoidance Strategy

**Rules**:
1. Never use `!important` except in layer-aware utilities
2. Keep component selectors at single-class specificity
3. Use @layer to control cascade order, not specificity
4. Avoid tag selectors except in base layer
5. Never duplicate Tailwind's preflight/reset

---

## Output Template

```markdown
## Audit E: Tailwind + Custom CSS Layering Plan

### Current Tailwind Directive Usage

**Location**: [file path]

**Directives Found**:
```css
[Actual directive code]
```

**Status**: ✅ All three present / ❌ Missing [which]

### Proposed @layer Strategy

#### Base Layer (Lowest Specificity)

**Files**:
- `theme-base.css` — Body, headings, links
- `font-enforcement.css` — Font family enforcement

**Example**:
```css
@layer base {
  body {
    font-family: var(--font-body);
    color: var(--color-text-primary);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
}
```

#### Components Layer (Medium Specificity)

**Files**:
- `block-style-variations.css` — WordPress block variations (`.is-style-*`)
- `article-content.css` — Content container (`.article-content`)

**Example**:
```css
@layer components {
  .is-style-display {
    font-size: var(--wp--preset--font-size--xxx-large);
  }
  
  .article-content {
    max-width: var(--wp--preset--layout--content-size);
  }
}
```

#### Utilities Layer (Highest Specificity)

**Files**:
- `wp-utilities.css` — WordPress utilities (`.has-*-color`)
- `dark-mode-utilities.css` — Dark mode toggles

**Example**:
```css
@layer utilities {
  .has-primary-color {
    color: var(--wp--preset--color--primary) !important;
  }
  
  .dark .invert {
    filter: invert(1);
  }
}
```

### Existing High-Specificity Selectors

| File | Line | Selector | Specificity | Issue | Fix |
|:-----|-----:|:---------|:------------|:------|:----|
| ... | ... | ... | [0,1,2,3] | ... | ... |

**Examples**:
```css
/* ❌ Bad: High specificity */
div.container .header .nav a {
  color: blue;
}

/* ✅ Good: Single class */
.c-nav__link {
  color: var(--color-link-default);
}
```

### Conflict Avoidance Rules

1. **Token Variables First**
   - Define all CSS custom properties before any @layer directives
   - Variables are globally scoped, not affected by layers

2. **Layer Order**
   ```css
   @layer base, components, utilities;
   ```

3. **Never Duplicate Base Styles**
   - Use Tailwind's preflight OR custom reset, not both
   - If custom base needed, wrap in `@layer base`

4. **Component Specificity**
   - Prefer single-class selectors: `.c-card`
   - Avoid deep nesting: `.c-card .header .title` → `.c-card__title`

5. **Utility Override Pattern**
   - Utilities should win over components
   - Use `!important` ONLY in utility layer
   - Document any exceptions

6. **Dark Mode Integration**
   - `.dark` class applies at root level
   - Dark mode utilities in utilities layer
   - Dark mode tokens override light mode variables

### Proposed Integration Example

**File**: `tailwind.css`
```css
/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import custom CSS */
@import "./index.css";
```

**File**: `index.css`
```css
/* Tokens (no layer — global variables) */
@import "./theme-tokens.css";
@import "./theme-dark.css";
@import "./theme-exports.css";

/* Base layer */
@import "./fonts.css";
@layer base {
  @import "./theme-base.css";
  @import "./font-enforcement.css";
}

/* Components layer */
@layer components {
  @import "./wp-utilities.css"; /* Actually utilities, recategorize */
  @import "./block-style-variations.css";
  @import "./article-content.css";
}

/* Utilities layer */
@layer utilities {
  @import "./dark-mode-utilities.css";
}

/* Non-layered (highest specificity) */
@import "./markdown-prose.css";
@import "./print.css";
```

**Note**: `wp-utilities.css` should move to utilities layer since it contains `.has-*` classes.

### Implementation Steps

1. **Add layer declarations** to top of `index.css`:
   ```css
   @layer base, components, utilities;
   ```

2. **Wrap imports** in appropriate `@layer` blocks

3. **Refactor high-specificity selectors** identified in audit

4. **Test cascade**:
   - Verify utilities override components
   - Verify components override base
   - Verify dark mode works correctly

5. **Document exceptions**:
   - Any selectors that must remain outside layers
   - Rationale for each exception

### Evidence

**Current tailwind.css**:
```css
[Actual contents]
```

**Current index.css**:
```css
[Actual contents]
```

**Example High-Specificity Selector**:
```css
[Problematic selector from codebase]
```
```

---

## Die Papier Context

**Tailwind Version**: v4.0  
**Tailwind File**: `/src/styles/tailwind.css`  
**Build Tool**: Vite

**Current Import Order** (from `index.css`):
- ✅ Tokens before usage
- ⚠️ No `@layer` wrapping yet
- ⚠️ `tailwind.css` imported BY `index.css` (should be reverse)

**Expected Issues**:
- No `@layer` directive usage
- Some high-specificity selectors in WordPress utilities
- Import order needs reversal (tailwind.css should import index.css)

---

## Validation Checklist

- [ ] Tailwind directives located and documented
- [ ] Proposed @layer strategy maps all CSS files to layers
- [ ] High-specificity selectors identified with fixes
- [ ] Conflict avoidance rules documented
- [ ] Proposed integration example provided
- [ ] Implementation steps are actionable
- [ ] Evidence includes actual file contents

---

**Next**: Proceed to Audit F (BEM Adoption Audit)
