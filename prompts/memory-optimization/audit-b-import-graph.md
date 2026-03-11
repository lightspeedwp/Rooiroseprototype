# Audit B: Import Graph & Conflict Detection

**Purpose**: Map all CSS import dependencies, identify conflicts, and propose optimal import strategy.

---

## Tasks

### 1) Build the Import Graph

Document all CSS @import chains, JavaScript CSS imports, and HTML link tags.

**Trace**:
- Start from entrypoint(s) identified in Audit A
- Follow every `@import` statement
- Follow every JavaScript `import './styles/...'`
- Document depth and order

**Output Format**:
```
index.css
├─ fonts.css
├─ tailwind.css
│  └─ (Tailwind directives)
├─ theme-tokens.css
├─ theme-dark.css
├─ ...
```

### 2) Identify Issues

**Check for**:

#### Duplicate Imports
- Same file imported more than once in different branches
- Same file imported in multiple entrypoints

#### Cyclic Imports
- File A imports File B, File B imports File A (directly or indirectly)
- Can cause build errors or infinite loops

#### Conflicting Ordering
- Utilities loaded before tokens/base
- Dark mode loaded before light mode tokens
- Components loaded before base styles

#### Multiple Resets/Preflights
- Tailwind preflight + custom reset
- Normalize + reset
- Competing base styles

### 3) Propose Target Import Strategy

**Goal**: Single entrypoint with stable, non-conflicting import order.

**Recommended Structure**:
```
tailwind.css (single app entrypoint)
  ├─ Tailwind directives (@tailwind base; @tailwind components; @tailwind utilities;)
  └─ @import "index.css";

index.css (manifest for all custom CSS)
  ├─ Base layer
  │  ├─ fonts.css
  │  ├─ theme-tokens.css
  │  ├─ theme-dark.css
  │  ├─ theme-exports.css
  │  └─ theme-base.css
  ├─ Components layer
  │  ├─ wp-utilities.css
  │  ├─ block-style-variations.css
  │  └─ article-content.css
  └─ Utilities layer
     ├─ dark-mode-utilities.css
     ├─ font-enforcement.css
     ├─ markdown-prose.css
     └─ print.css
```

### 4) Provide Rationale

Explain why the proposed order is optimal:
- Tokens before usage
- Base before components
- Components before utilities
- Dark mode overrides after light mode definitions
- Print styles last (highest specificity)

---

## Output Template

```markdown
## Audit B: Import Graph & Conflict Detection

### Current Import Graph

[Textual tree representation of all imports]

### Issues Found

#### Duplicate Imports

| File | Imported By | Times | Risk |
|:-----|:------------|------:|:-----|
| ... | ... | ... | ... |

#### Cyclic Imports

| Cycle | Description | Fix |
|:------|:------------|:----|
| ... | ... | ... |

#### Conflicting Ordering

| Issue | Current Order | Correct Order | Impact |
|:------|:--------------|:--------------|:-------|
| ... | ... | ... | ... |

#### Multiple Resets

| Reset/Preflight | Source | Conflicts With | Recommendation |
|:----------------|:-------|:---------------|:---------------|
| ... | ... | ... | ... |

### Proposed Import Strategy

**Entrypoint**: `tailwind.css`

**Contents**:
```css
/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import all custom CSS */
@import "./index.css";
```

**Manifest**: `index.css`

**Contents**:
```css
/* Base layer — tokens, theme, base elements */
@import "./fonts.css";
@import "./theme-tokens.css";
@import "./theme-dark.css";
@import "./theme-exports.css";
@import "./theme-base.css";

/* Components layer — WordPress utilities, blocks, sections */
@import "./wp-utilities.css";
@import "./block-style-variations.css";
@import "./article-content.css";

/* Utilities layer — dark mode, enforcement, prose, print */
@import "./dark-mode-utilities.css";
@import "./font-enforcement.css";
@import "./markdown-prose.css";
@import "./print.css";
```

**Rationale**:
1. Tokens defined first (light mode)
2. Dark mode overrides immediately after
3. Tailwind exports define theme bridge
4. Base element styles apply tokens
5. WordPress utilities and block styles come next
6. Dark mode utilities and enforcement last
7. Print styles have highest specificity

### Conflict Avoidance Rules

1. **Never duplicate imports** — Each file imported exactly once
2. **Stable order** — Changes to import order require documentation
3. **No cyclic dependencies** — Files must form directed acyclic graph (DAG)
4. **Single reset** — Use Tailwind preflight OR custom reset, not both
5. **Token-first** — All token definitions before any usage
6. **Dark after light** — Dark mode overrides after light mode definitions

### Implementation Steps

1. Verify `tailwind.css` is sole app entrypoint
2. Ensure `tailwind.css` imports `index.css` exactly once
3. Consolidate all custom CSS imports into `index.css`
4. Remove any duplicate or cyclic imports
5. Reorder imports in `index.css` to match proposed structure
6. Delete any orphaned CSS files (e.g., `theme.css`)
7. Test build — verify no errors
8. Visual regression test — verify no style changes

### Evidence

[List actual import statements from files, with line numbers]
```

---

## Die Papier Context

**Current Entrypoint**: `/src/styles/index.css` (imported by Vite)

**Current Import Order**:
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

**Orphaned File**: `/src/styles/theme.css` (1,135 lines, no imports, safe to delete)

**Expected Issues**:
- `index.css` imports `tailwind.css` (should be reverse)
- `theme.css` orphaned but not deleted (system-protected file)

---

## Validation Checklist

- [ ] Complete import graph documented
- [ ] All duplicate imports identified
- [ ] All cyclic imports identified
- [ ] All ordering conflicts identified
- [ ] Proposed import strategy is stable and conflict-free
- [ ] Rationale explains why proposed order is optimal
- [ ] Implementation steps are actionable
- [ ] Evidence includes actual import statements

---

**Next**: Proceed to Audit C (Design Tokens Documentation vs Implementation)
