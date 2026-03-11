# Audit A: CSS Inventory & Entrypoints

**Purpose**: Document all CSS files, identify entrypoints, and categorize by purpose.

---

## Tasks

### 1) List Every CSS File

Enumerate all CSS files in the repository with:
- Full file path
- Purpose (if inferable from name or content)
- Approximate line count
- File size (KB)

**Output Format**:
```markdown
| File | Path | Purpose | Lines | Size (KB) |
|:-----|:-----|:--------|------:|----------:|
| ... | ... | ... | ... | ... |
```

### 2) Identify All CSS Entrypoints

Find files imported by:
- App build configuration (Vite, Webpack, etc.)
- HTML `<link>` tags
- JavaScript/TypeScript imports
- Other CSS files via `@import`

**Questions to Answer**:
- Is there a single entrypoint or multiple competing entrypoints?
- Where is each entrypoint imported?
- Are there any CSS files loaded directly in HTML that bypass the build system?

### 3) Confirm tailwind.css Role

**Check**:
- Is `tailwind.css` an entrypoint?
- Where is it imported? (index.html, main.tsx, index.css, etc.)
- Does it contain Tailwind directives (`@tailwind base`, etc.)?
- Does it import other CSS files?

### 4) Identify index.css Files

**Check**:
- Does an `index.css` exist?
- What is its current role? (Manifest, dumping ground, unused?)
- What files does it import?
- Is it imported by `tailwind.css` or imported separately?

### 5) Categorize All CSS Files

Assign each CSS file to a category:
- **Tokens**: Raw design tokens, semantic tokens, theme definitions
- **Base**: Resets, typography, forms, accessibility
- **Components**: Component-specific styles
- **Utilities**: Layout, spacing, color, state helpers
- **Blocks/Sections**: WordPress block styles, section styles
- **Misc**: Print styles, markdown prose, animations, etc.

---

## Output Template

```markdown
## Audit A: CSS Inventory & Entrypoints

### Inventory Table

| File | Path | Category | Lines | Size (KB) | Imported By |
|:-----|:-----|:---------|------:|----------:|:------------|
| ... | ... | ... | ... | ... | ... |

### Entrypoint Summary

**Primary Entrypoint**: [file path]  
**Imported By**: [build config / HTML / JS]

**Secondary Entrypoints** (if any):  
- [file path] — [why it exists]

**Risks**:
- [ ] Multiple competing entrypoints
- [ ] CSS loaded outside build system
- [ ] No clear entry point (scattered imports)

### tailwind.css Analysis

**Location**: [file path]  
**Role**: [entrypoint / import manifest / both]  
**Contains Tailwind Directives**: [yes / no]  
**Imports**: [list of @import statements]

### index.css Analysis

**Location**: [file path]  
**Role**: [manifest / dumping ground / unused]  
**Imports**: [list of @import statements]  
**Imported By**: [tailwind.css / HTML / JS / other]

### Categorization Summary

**Tokens**: [count] files — [list file names]  
**Base**: [count] files — [list file names]  
**Components**: [count] files — [list file names]  
**Utilities**: [count] files — [list file names]  
**Blocks/Sections**: [count] files — [list file names]  
**Misc**: [count] files — [list file names]

### Evidence

Key file paths and import statements referenced:
- [file path]: [import statement or usage note]
```

---

## Die Papier Context

**Expected Files** (from Phase 1):
- `/src/styles/index.css` — Manifest
- `/src/styles/tailwind.css` — Tailwind v4 entrypoint
- `/src/styles/theme-tokens.css` — Raw tokens (428 lines)
- `/src/styles/theme-dark.css` — Dark mode overrides (69 lines)
- `/src/styles/theme-exports.css` — Tailwind exports (68 lines)
- `/src/styles/theme-base.css` — Base elements (74 lines)
- `/src/styles/wp-utilities.css` — WordPress utilities (179 lines)
- `/src/styles/block-style-variations.css` — Block variations (65 lines)
- `/src/styles/article-content.css` — Article styles (106 lines)
- `/src/styles/dark-mode-utilities.css` — Dark utilities (64 lines)
- `/src/styles/font-enforcement.css` — Font enforcement (42 lines)
- `/src/styles/markdown-prose.css` — Markdown prose
- `/src/styles/print.css` — Print styles
- `/src/styles/fonts.css` — Font imports
- `/src/styles/theme.css` — ORPHANED (1,135 lines, no imports)

**Expected Entrypoint**: `/src/styles/index.css` imported by app build

---

## Validation Checklist

- [ ] All CSS files documented with full paths
- [ ] Entrypoint(s) identified and verified
- [ ] tailwind.css role clarified
- [ ] index.css role clarified
- [ ] All files categorized
- [ ] Orphaned files flagged (e.g., theme.css)
- [ ] Evidence includes actual import statements

---

**Next**: Proceed to Audit B (Import Graph & Conflict Detection)
