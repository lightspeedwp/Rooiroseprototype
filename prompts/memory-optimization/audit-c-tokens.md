# Audit C: Design Tokens Documentation vs Implementation

**Purpose**: Cross-reference documented design tokens with actual CSS implementation to identify mismatches and missing documentation.

---

## Tasks

### 1) Extract Documented Tokens

**Location**: `/guidelines/design-tokens/`

**Extract**:
- Token naming conventions
- Token categories (color, typography, spacing, radius, shadow, motion, z-index, etc.)
- Semantic token guidance (e.g., `--color-surface-1`, `--color-text-primary`)
- Intended usage examples
- Light/dark mode token pairs

**Key Files**:
- `DESIGN-SYSTEM-GUIDE.md` — Canonical reference (145+ tokens)
- `typography.md` — Font families, sizes, usage
- `colors.md` — Brand palette
- `spacing.md` — Spacing scale
- `ui-presets.md` — Buttons, shadows, radii
- `borders.md`, `shadows.md`, `aspect-ratios.md`, `dark-mode.md`, `interactions.md`

### 2) Extract Implemented Tokens

**Location**: `/src/styles/`

**Extract from**:
- `theme-tokens.css` — `:root` CSS custom properties
- `theme-dark.css` — `.dark` overrides
- `theme-exports.css` — Tailwind `@theme inline` exports
- Any other CSS files defining custom properties

**Catalog**:
- Property name
- Light mode value
- Dark mode value (if exists)
- Where it's used (which CSS files reference it)

### 3) Produce Discrepancy Matrix

**Compare documentation vs implementation**:

| Discrepancy Type | Description | Impact |
|:-----------------|:------------|:-------|
| **Documented but not implemented** | Token exists in docs but not in CSS | Usage will fail, documentation misleading |
| **Implemented but not documented** | Token exists in CSS but not in docs | Hidden tokens, unclear intent, hard to maintain |
| **Name mismatch** | Docs use one name, code uses another | Confusion, hard to reference |
| **Meaning mismatch** | Docs intent doesn't match actual usage | Semantic errors, incorrect applications |
| **Missing dark mode value** | Light mode value exists, dark mode missing | Dark mode broken or using light value |
| **Orphaned token** | Token defined but never used | Dead code, bloat |

---

## Output Template

```markdown
## Audit C: Design Tokens Documentation vs Implementation

### Documented Tokens Summary

**Total Documented**: [count]

**Categories**:
- Colors: [count]
- Typography: [count]
- Spacing: [count]
- Radii: [count]
- Shadows: [count]
- Borders: [count]
- Motion: [count]
- Z-index: [count]
- Other: [count]

**Naming Convention**: [describe pattern, e.g., "--color-{semantic}", "--space-{size}"]

**Semantic Token Guidance**: [yes/no, describe if exists]

### Implemented Tokens Summary

**Total Implemented**: [count]

**Sources**:
- `theme-tokens.css`: [count] properties
- `theme-dark.css`: [count] overrides
- `theme-exports.css`: [count] Tailwind exports
- Other files: [list]

**Naming Pattern**: [describe actual pattern used in code]

### Discrepancy Matrix

#### Documented but Not Implemented

| Token Name | Category | Documented In | Impact | Recommended Action |
|:-----------|:---------|:--------------|:-------|:-------------------|
| ... | ... | ... | ... | ... |

#### Implemented but Not Documented

| Property Name | File | Value (Light) | Value (Dark) | Used By | Recommended Action |
|:--------------|:-----|:--------------|:-------------|:--------|:-------------------|
| ... | ... | ... | ... | ... | ... |

#### Name Mismatches

| Documented Name | Implemented Name | File | Fix |
|:----------------|:-----------------|:-----|:----|
| ... | ... | ... | ... |

#### Meaning Mismatches

| Token | Documented Intent | Actual Usage | File | Fix |
|:------|:------------------|:-------------|:-----|:----|
| ... | ... | ... | ... | ... |

#### Missing Dark Mode Values

| Token | Light Value | Dark Value | File | Fix |
|:------|:------------|:-----------|:-----|:----|
| ... | ... | (missing) | ... | ... |

#### Orphaned Tokens

| Token | Defined In | Used By | Recommended Action |
|:------|:-----------|:--------|:-------------------|
| ... | ... | (none) | Delete or document intended usage |

### Token Usage Analysis

**Most Used Tokens** (top 10):

| Token | Category | Usage Count | Files |
|:------|:---------|------------:|:------|
| ... | ... | ... | ... |

**Unused Tokens** (defined but never referenced):

| Token | Category | Defined In | Reason |
|:------|:---------|:-----------|:-------|
| ... | ... | ... | ... |

### Single Source of Truth Recommendation

**Current State**:
- Design token documentation: `/guidelines/design-tokens/`
- CSS implementation: `/src/styles/theme-tokens.css`, `theme-dark.css`, `theme-exports.css`

**Recommendation**:
[Describe how to maintain alignment between docs and code. Options:
- Generate CSS from documentation (token pipeline)
- Generate documentation from CSS (reverse pipeline)
- Manual sync with validation script
- Canonical source designation]

**Proposed Workflow**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Documentation Fixes Required

**Priority 1 (Blocking)**:
- [ ] Document [count] implemented tokens missing from docs
- [ ] Remove [count] documented tokens that don't exist in code
- [ ] Fix [count] name mismatches

**Priority 2 (Important)**:
- [ ] Add [count] missing dark mode values
- [ ] Clarify [count] meaning mismatches
- [ ] Document [count] orphaned tokens (or delete)

**Priority 3 (Nice-to-have)**:
- [ ] Create usage examples for all semantic tokens
- [ ] Add cross-references between token categories
- [ ] Document token deprecation process

### Evidence

**Sample Documentation Excerpt**:
```markdown
[Quote from /guidelines/design-tokens/ showing documented tokens]
```

**Sample Implementation Excerpt**:
```css
[Quote from theme-tokens.css showing CSS custom properties]
```

**Sample Usage**:
```css
[Quote from component CSS showing token usage]
```
```

---

## Die Papier Context

**Design Token Documentation**:
- 145+ documented tokens across 10 categories
- Semantic token naming (e.g., `--color-text-primary`, `--space-medium`)
- Light/dark mode token pairs documented

**CSS Implementation**:
- `theme-tokens.css`: 428 lines of `:root` properties
- `theme-dark.css`: 69 lines of `.dark` overrides
- `theme-exports.css`: 68 lines of Tailwind exports

**Expected Findings**:
- Some implemented tokens may not be documented
- Some documented tokens may not be implemented
- Dark mode coverage may be incomplete

---

## Validation Checklist

- [ ] All documented tokens cataloged
- [ ] All implemented tokens cataloged
- [ ] Discrepancy matrix complete for all 6 discrepancy types
- [ ] Token usage analysis includes usage counts
- [ ] Single source of truth recommendation provided
- [ ] Documentation fixes prioritized
- [ ] Evidence includes actual excerpts from docs and code

---

**Next**: Proceed to Audit D (Light/Dark Mode Token Coverage)
