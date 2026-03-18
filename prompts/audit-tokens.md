# Audit Tokens — Design Token Audit Orchestrator

**Version**: 1.0.0  
**Created**: 2026-03-16  
**Purpose**: Comprehensive design token audit, CSS-to-TypeScript alignment verification, and token gap analysis  
**Trigger Word**: `audit tokens`  
**Duration**: 15-20 minutes

---

## 🎯 **MISSION**

Execute a **complete design token audit** comparing CSS variables with TypeScript data, identify misalignments, find unused tokens, detect missing tokens, and verify Tailwind class mappings.

---

## 📋 **EXECUTION WORKFLOW**

Execute these phases **in sequence**:

### Phase 1: Token Inventory (4-6 min)

#### Step 1.1: Scan CSS Token Definitions
**Action**: Extract all CSS variables from theme files

**Files to Scan**:
- `/src/styles/theme.css` — Canonical reference (1,135+ lines)
- `/src/styles/theme-tokens.css` — Active token definitions
- `/src/styles/theme-dark.css` — Dark mode overrides

**Token Categories**:
1. **Colors** (e.g., `--custom-primary`, `--brand-navy`)
2. **Typography** (e.g., `--font-display`, `--text-h1`)
3. **Spacing** (e.g., `--wp--preset--spacing--medium`)
4. **Shadows** (e.g., `--shadow-md`)
5. **Radius** (e.g., `--radius`)
6. **Font Variation Settings** (e.g., `--fvs-h1`)
7. **Line Heights** (e.g., `--lh-h1`)
8. **Letter Spacing** (e.g., `--ls-h1`)

**Output**: CSS token inventory with counts by category

---

#### Step 1.2: Scan TypeScript Token Definitions
**Action**: Extract all tokens from TypeScript data files

**Files to Scan**:
- `/src/app/data/designTokens.ts` — TypeScript design tokens

**Expected Structure**:
```typescript
export const designTokens = {
  colors: {
    primary: '#e82c27',
    // ...
  },
  typography: {
    fontDisplay: 'Playfair Display SC',
    // ...
  },
  spacing: {
    small: '16px',
    // ...
  }
};
```

**Output**: TypeScript token inventory with counts by category

---

### Phase 2: CSS-to-TypeScript Alignment (5-7 min)

#### Step 2.1: Compare Token Definitions
**Action**: Match CSS variables to TypeScript tokens

**Alignment Checks**:

1. **Name Consistency**
   - CSS: `--custom-primary`
   - TypeScript: `designTokens.colors.primary`
   - Do they reference the same value?

2. **Value Consistency**
   - CSS: `--custom-primary: #e82c27;`
   - TypeScript: `primary: '#e82c27'`
   - Do values match exactly?

3. **Category Organization**
   - CSS colors in `:root`
   - TypeScript colors in `designTokens.colors`
   - Are categories aligned?

**Alignment Matrix Output**:
```markdown
| CSS Variable | TypeScript Token | Value Match | Status |
|:-------------|:-----------------|:------------|:-------|
| --custom-primary | colors.primary | ✅ #e82c27 | Aligned |
| --brand-navy | colors.secondary | ✅ #172134 | Aligned |
| --font-display | typography.fontDisplay | ✅ "Playfair Display SC" | Aligned |
| --text-h1 | typography.h1.size | ❌ CSS: clamp(...), TS: "3rem" | Misaligned |
```

---

#### Step 2.2: Calculate Alignment Score
**Action**: Measure CSS-to-TypeScript alignment percentage

**Formula**:
```
Alignment Score = (Matching Tokens / Total Tokens) × 100
```

**Scoring**:
- 🟢 **Excellent**: 95-100% (fully aligned)
- 🟡 **Good**: 85-94% (minor misalignments)
- 🟠 **Fair**: 70-84% (needs attention)
- 🔴 **Poor**: <70% (major refactoring needed)

---

### Phase 3: Token Gap Analysis (3-4 min)

#### Step 3.1: Find Missing CSS Variables
**Action**: Identify TypeScript tokens without CSS equivalents

**Example**:
```typescript
// In designTokens.ts
export const designTokens = {
  colors: {
    accentBlue: '#3b82f6' // ❌ No CSS variable --accent-blue
  }
};
```

**Impact Assessment**:
- **Critical**: Core tokens (primary colors, fonts)
- **High**: Frequently used tokens (spacing, typography)
- **Medium**: Occasional tokens (shadows, radius)
- **Low**: Rare tokens (special effects, decorative)

---

#### Step 3.2: Find Unused CSS Variables
**Action**: Identify CSS variables not used in any file

**Process**:
1. Extract all CSS variable names from theme files
2. Search all `.tsx` and `.css` files for variable usage
3. Flag variables with zero occurrences

**Example**:
```css
/* In theme.css */
--old-color: #ff0000; /* ❌ Not used in any file */
```

**Recommendation**: Remove or document unused variables

---

#### Step 3.3: Find Missing TypeScript Tokens
**Action**: Identify CSS variables without TypeScript equivalents

**Example**:
```css
/* In theme.css */
:root {
  --custom-accent-gold: #d4af37; /* ❌ No TypeScript equivalent */
}
```

**Impact**: TypeScript components can't reference this token via `designTokens` object

---

### Phase 4: Tailwind Class Mapping (2-3 min)

#### Step 4.1: Verify Tailwind-to-Token Alignment
**Action**: Check if Tailwind classes map to CSS variables

**Expected Pattern** (Tailwind v4 + `@theme`):
```css
/* In theme-exports.css */
@theme inline {
  --color-primary: var(--custom-primary);
  --color-brand-navy: var(--brand-navy);
  --font-display: var(--font-display);
}
```

**Checks**:
- Are Tailwind color classes exported? (e.g., `text-primary`)
- Are Tailwind spacing classes exported? (e.g., `p-medium`)
- Are Tailwind font classes exported? (e.g., `font-display`)

---

#### Step 4.2: Identify Tailwind Gaps
**Action**: Find tokens that should have Tailwind classes but don't

**Example**:
```css
/* CSS variable exists */
--custom-accent-blue: #3b82f6;

/* But no Tailwind export */
/* MISSING: --color-accent-blue: var(--custom-accent-blue); */
```

**Recommendation**: Add missing exports to `theme-exports.css`

---

### Phase 5: WordPress Preset Alignment (2-3 min)

#### Step 5.1: Verify WordPress Preset Tokens
**Action**: Check alignment with WordPress naming conventions

**WordPress Patterns**:
- `--wp--preset--color--{name}`
- `--wp--preset--font-size--{name}`
- `--wp--preset--spacing--{name}`
- `--wp--preset--font-family--{name}`

**Checks**:
- Are WordPress presets defined?
- Do they map to rooi rose tokens?
- Are they used in block variations?

**Example**:
```css
/* WordPress preset */
--wp--preset--color--primary: var(--custom-primary);

/* Used in WordPress blocks */
.has-primary-color { color: var(--wp--preset--color--primary); }
```

---

#### Step 5.2: Check Block Variation Usage
**Action**: Verify tokens are used in WordPress block styles

**File to Check**: `/src/styles/block-style-variations.css`

**Pattern**:
```css
.is-style-featured {
  color: var(--wp--preset--color--primary); /* ✅ Uses WordPress preset */
}
```

---

### Phase 6: Token Naming Conventions (2-3 min)

#### Step 6.1: Audit Token Naming Consistency
**Action**: Verify all tokens follow rooi rose naming conventions

**Naming Standards**:

1. **Brand Tokens**
   - ✅ `--custom-primary` (rooi rose red)
   - ✅ `--brand-navy` (secondary color)
   - ❌ `--red` (too generic)

2. **Semantic Tokens**
   - ✅ `--text-link-red` (purpose-based)
   - ✅ `--body-text` (semantic)
   - ❌ `--color-1` (non-semantic)

3. **WordPress Tokens**
   - ✅ `--wp--preset--spacing--medium` (WordPress convention)
   - ❌ `--spacing-md` (not WordPress-aligned)

4. **Dark Mode Tokens**
   - ✅ `--custom-primary-dark` (explicit dark variant)
   - ❌ Dark overrides in separate file only (no variable name)

---

### Phase 7: Create Report (2-3 min)

#### Step 7.1: Generate Token Audit Report
**Action**: Create comprehensive report at `/reports/tokens-audit-YYYY-MM-DD.md`

**Report Template**:
```markdown
# Design Token Audit Report — YYYY-MM-DD

**Executed**: YYYY-MM-DD  
**Duration**: XX minutes  
**Status**: ✅ Complete  

---

## Summary

- **Total CSS Tokens**: XXX
- **Total TypeScript Tokens**: XXX
- **CSS-to-TypeScript Alignment**: XX% (🟢/🟡/🟠/🔴)
- **Missing CSS Variables**: XX
- **Unused CSS Variables**: XX
- **Missing TypeScript Tokens**: XX
- **Tailwind Mapping Coverage**: XX%
- **WordPress Preset Coverage**: XX%
- **Token Health Score**: XX/100

---

## Token Inventory

### CSS Variables (XXX tokens)

| Category | Count | Examples |
|:---------|:------|:---------|
| Colors | XX | --custom-primary, --brand-navy |
| Typography | XX | --font-display, --text-h1 |
| Spacing | XX | --wp--preset--spacing--medium |
| Shadows | XX | --shadow-md |
| Other | XX | --radius, --fvs-h1 |

### TypeScript Tokens (XXX tokens)

| Category | Count | File |
|:---------|:------|:-----|
| Colors | XX | designTokens.ts |
| Typography | XX | designTokens.ts |
| Spacing | XX | designTokens.ts |

---

## CSS-to-TypeScript Alignment

**Alignment Score**: XX% (🟢 Excellent / 🟡 Good / 🟠 Fair / 🔴 Poor)

### Aligned Tokens (XXX)
✅ Tokens with matching CSS and TypeScript definitions

### Misaligned Tokens (XX)

| CSS Variable | TypeScript Token | Issue | Priority |
|:-------------|:-----------------|:------|:---------|
| --text-h1 | typography.h1.size | Value mismatch | High |
| --custom-accent | colors.accent | Missing in TS | Medium |

---

## Token Gaps

### Missing CSS Variables (XX tokens)

TypeScript tokens without CSS equivalents:

| TypeScript Token | Suggested CSS Variable | Impact | Priority |
|:-----------------|:-----------------------|:-------|:---------|
| colors.accentBlue | --custom-accent-blue | Medium | Medium |
| spacing.xxSmall | --wp--preset--spacing--xx-small | Low | Low |

### Unused CSS Variables (XX tokens)

CSS variables not used in any file:

| CSS Variable | Defined In | Recommendation |
|:-------------|:-----------|:---------------|
| --old-color | theme.css | Remove (unused) |
| --legacy-font | theme-tokens.css | Document or remove |

### Missing TypeScript Tokens (XX tokens)

CSS variables without TypeScript equivalents:

| CSS Variable | Suggested TypeScript Path | Impact |
|:-------------|:--------------------------|:-------|
| --custom-accent-gold | designTokens.colors.accentGold | Low |

---

## Tailwind Class Mapping

**Coverage**: XX% (XX tokens exported / XX total tokens)

### Exported Tailwind Classes ✅
- `text-primary` → `--custom-primary`
- `bg-brand-navy` → `--brand-navy`
- `font-display` → `--font-display`

### Missing Tailwind Exports ⚠️
- `--custom-accent-blue` (no `text-accent-blue` class)
- `--wp--preset--spacing--xx-small` (no `p-xx-small` class)

---

## WordPress Preset Alignment

**Coverage**: XX% (XX presets / XX expected)

### WordPress Presets Defined ✅
- `--wp--preset--color--primary` ✅
- `--wp--preset--font-size--x-large` ✅
- `--wp--preset--spacing--medium` ✅

### Missing WordPress Presets ⚠️
- `--wp--preset--color--accent` (no WordPress equivalent for --custom-accent)

### Block Variation Usage ✅
- Block variations use WordPress presets: XX%
- Direct CSS variable usage: XX%

---

## Token Naming Consistency

### Naming Convention Compliance: XX%

**Violations**:
- `--red` (too generic, should be `--custom-{name}` or `--brand-{name}`)
- `--color-1` (non-semantic, should describe purpose)

**Recommendations**:
- Rename generic tokens to semantic names
- Follow rooi rose naming conventions
- Use WordPress presets for theme.json compatibility

---

## Recommendations

### High Priority (Critical Misalignments)
- [ ] Fix XX CSS-to-TypeScript value mismatches
- [ ] Add XX missing CSS variables for TypeScript tokens
- [ ] Remove XX unused CSS variables (or document)

### Medium Priority (Optimization)
- [ ] Add XX missing Tailwind exports
- [ ] Create XX missing WordPress presets
- [ ] Rename XX tokens to follow conventions

### Low Priority (Enhancements)
- [ ] Document token usage patterns
- [ ] Create token migration guide
- [ ] Add token validation tests

---

## Token Health Score Breakdown

| Metric | Score | Weight | Weighted Score |
|:-------|:------|:-------|:---------------|
| CSS-to-TS Alignment | XX% | 30% | XX |
| Missing Tokens | XX% | 25% | XX |
| Unused Tokens | XX% | 15% | XX |
| Tailwind Mapping | XX% | 15% | XX |
| WordPress Presets | XX% | 10% | XX |
| Naming Consistency | XX% | 5% | XX |
| **Total** | **XX/100** | **100%** | **XX** |

---

## Next Steps

1. Create task list: `/tasks/tokens-task-list.md`
2. Fix critical CSS-to-TypeScript misalignments
3. Add missing tokens identified in gap analysis
4. Run `audit css` to verify CSS architecture
5. Update designTokens.ts with all CSS variables

---

**Completed by**: Figma Make AI  
**Review Status**: Ready for review  
**Next Audit**: YYYY-MM-DD (30 days)
```

---

## 📊 **SUCCESS CRITERIA**

Token audit is **100% complete** when:

- ✅ All CSS variables inventoried from theme files
- ✅ All TypeScript tokens inventoried from designTokens.ts
- ✅ CSS-to-TypeScript alignment score calculated
- ✅ Missing CSS variables identified
- ✅ Unused CSS variables flagged
- ✅ Missing TypeScript tokens identified
- ✅ Tailwind class mapping coverage measured
- ✅ WordPress preset alignment verified
- ✅ Token naming consistency audited
- ✅ Report created at `/reports/tokens-audit-YYYY-MM-DD.md`
- ✅ Recommendations provided with priority levels

---

## 💬 **HOW TO TRIGGER THIS PROMPT**

Simply type:

```
audit tokens
```

The AI will execute the full design token audit automatically.

---

**Version History**:
- **v1.0.0** (2026-03-16) — Initial creation

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-16
