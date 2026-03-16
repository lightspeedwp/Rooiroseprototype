# Design Tokens CSS-to-Data Alignment Audit — 2026-03-16

**Date**: 2026-03-16  
**Session**: Design Tokens Audit (Task 1.1)  
**Status**: 🔄 **IN PROGRESS** — Alignment analysis  
**Priority**: Critical

---

## Executive Summary

Auditing alignment between CSS custom properties (`/src/styles/theme.css`) and data tokens (`/src/app/data/designTokens.ts`). Initial findings show strong foundation with 145+ documented tokens and 162+ CSS variables.

**Purpose**: Ensure single source of truth between runtime CSS and developer documentation.

---

## Token Categories

### Data Tokens (`/src/app/data/designTokens.ts`)

| Category | Export Constant | Line | Count (est) |
|:---------|:----------------|:-----|:------------|
| Colors | `COLOR_TOKENS` | 32 | ~50 tokens |
| Typography | `TYPOGRAPHY_TOKENS` | 208 | ~45 tokens |
| Spacing | `SPACING_TOKENS` | 433 | ~10 tokens |
| Radius | `RADIUS_TOKENS` | 453 | ~5 tokens |
| Shadows | `SHADOW_TOKENS` | 471 | ~10 tokens |
| Breakpoints | `BREAKPOINT_TOKENS` | 517 | ~6 tokens |
| Layout | `LAYOUT_TOKENS` | 536 | ~10 tokens |
| Fonts | `FONT_TOKENS` | 579 | ~9 tokens |

**Total**: ~145 documented tokens across 8 categories

---

### CSS Tokens (`/src/styles/theme.css`)

**File Size**: 1,135+ lines (reference file, not imported)  
**Active Runtime**: Split into 9 partials in `/src/styles/`

**Token Count**: 162+ custom properties (estimated from file_search showing 291 matches for `--[a-z]` pattern, accounting for dark mode duplicates)

**Categories** (CSS structure):
1. **Brand Colors** — `--custom-primary`, `--brand-navy`, etc.
2. **Typography Scale** — `--text-h1` through `--text-p4`, `--lh-*`, `--ls-*`, `--fvs-*`
3. **Font Families** — `--font-karla`, `--font-display`, etc.
4. **Spacing** — `--space-10` through `--space-100`
5. **UI Colors** — `--background`, `--foreground`, `--card`, etc.
6. **Border/Radius** — `--radius`
7. **Charts** — `--chart-1` through `--chart-5`
8. **Sidebar** — `--sidebar-*` tokens
9. **WordPress Presets** — `--wp--preset--*` tokens

---

## Phase 1: Color Tokens Alignment

### CSS Color Variables (from theme.css)

**Brand Colors** (9 tokens):
```css
--custom-primary: #e82c27
--custom-primary-2: #c41f20
--brand-navy-light: #1a3a5f
--brand-navy: #172134
--brand-navy-dark: #0f1923
--brand-warm-gray: #ebe7e7
--competition-dark-from: #2a2518
--competition-dark-to: #2a1e18
--gradient-brand-red: linear-gradient(...)
```

**Base Colors** (4 tokens):
```css
--base: #ffffff
--base-2: #f0f0f0
--base-3: #dddddd
--contrast: #2c2c2c
```

**UI Semantic Colors** (13 tokens):
```css
--background: #ffffff
--foreground: #2c2c2c
--card: #ffffff
--card-foreground: #2c2c2c
--popover: #ffffff
--popover-foreground: #2c2c2c
--primary: #e82c27
--primary-foreground: #ffffff
--secondary: #f0f0f0
--secondary-foreground: #1a3a5f
--muted: #f0f0f0
--muted-foreground: #636375
--accent: #f0f0f0
--accent-foreground: #1a3a5f
--destructive: #d4183d
--destructive-foreground: #ffffff
--border: #dddddd
--input: #dddddd
--ring: #e82c27
```

**Link Colors** (1 token):
```css
--text-link-red: #c41f20
```

**Focus Colors** (1 token):
```css
--color-focus-ring: #e82c27
```

**Chart Colors** (5 tokens):
```css
--chart-1: oklch(0.646 0.222 41.116)
--chart-2: oklch(0.6 0.118 184.704)
--chart-3: oklch(0.398 0.07 227.392)
--chart-4: oklch(0.828 0.189 84.429)
--chart-5: oklch(0.769 0.188 70.08)
```

**Sidebar Colors** (7 tokens):
```css
--sidebar: oklch(0.985 0 0)
--sidebar-foreground: oklch(0.145 0 0)
--sidebar-primary: #030213
--sidebar-primary-foreground: oklch(0.985 0 0)
--sidebar-accent: oklch(0.97 0 0)
--sidebar-accent-foreground: oklch(0.205 0 0)
--sidebar-border: oklch(0.922 0 0)
--sidebar-ring: oklch(0.708 0 0)
```

**Total CSS Color Variables**: ~40 tokens

---

### Data Color Tokens (`COLOR_TOKENS` array)

**Status**: Needs detailed count  
**Estimated**: ~50 tokens

**Known Categories** (from file read):
- Brand (primary, primary-alt, secondary, secondary-accent)
- Neutrals (base, tertiary, border-light)
- System (background, foreground, card, etc.)
- Charts
- Sidebar

**Initial Assessment**: ✅ **Likely well-aligned** — Data tokens appear to cover CSS variables

**Action Needed**: 
1. Count exact number of COLOR_TOKENS entries
2. Cross-reference each CSS variable with data token
3. Identify missing or extra tokens

---

## Phase 2: Typography Tokens Alignment

### CSS Typography Variables

**Heading Scale** (H1-H6):
```css
--text-h1: clamp(2.25rem, 1.92rem + 1.35vw, 3rem)
--lh-h1: clamp(2.5rem, 2.14rem + 1.46vw, 3.25rem)
--ls-h1: -0.24px
--fvs-h1: "GRAD" -50, "wdth" 64, "opsz" 48

--text-h2: clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)
--lh-h2: clamp(2rem, 1.94rem + 0.25vw, 2.1875rem)
--ls-h2: -0.24px
--fvs-h2: "GRAD" -50, "wdth" 64, "opsz" 30

--text-h3: clamp(1.25rem, 1.14rem + 0.45vw, 1.5rem)
--lh-h3: 1.75rem
--ls-h3: 0
--fvs-h3: "GRAD" 0, "wdth" 64, "opsz" 24

--text-h4: clamp(1.125rem, 1.08rem + 0.18vw, 1.25rem)
--lh-h4: 1.75rem
--ls-h4: 0
--fvs-h4: "GRAD" 0, "wdth" 64, "opsz" 20

--text-h5: clamp(1.0625rem, 1.04rem + 0.09vw, 1.125rem)
--lh-h5: 1.5rem
--ls-h5: -0.09px

--text-h6: 1rem
--lh-h6: 1.5rem
--ls-h6: 0.8px
```

**Body/Paragraph Scale** (P1-P4):
```css
--text-p1: clamp(1.0625rem, 1.04rem + 0.09vw, 1.125rem)
--lh-p1: 1.6875rem

--text-p2: 1rem
--lh-p2: 1.5rem

--text-p3: 0.875rem
--lh-p3: 1.375rem

--text-p4: 0.75rem
--lh-p4: 1.125rem

--text-small: 0.6875rem
--lh-small: 1rem
```

**Compact Heading**:
```css
--text-h-compact: 1rem
--lh-h-compact: 1.5rem
--fvs-h-compact: "GRAD" 0, "wdth" 64, "opsz" 16
--ls-h-compact: 0
```

**Font Base**:
```css
--font-size: 16px
```

**Total CSS Typography Variables**: ~30 tokens (6 headings × 4 properties + 5 body × 2 properties)

---

### Data Typography Tokens (`TYPOGRAPHY_TOKENS` array)

**Status**: Needs detailed count  
**Estimated**: ~45 tokens

**Initial Assessment**: ⚠️ **May have extra documentation** — Data tokens might include usage examples, Figma mappings, Tailwind classes

**Action Needed**:
1. Verify each CSS typography variable has corresponding data token
2. Check if data tokens include non-CSS entries (documentation-only)
3. Verify clamp() values match between CSS and data

---

## Phase 3: Spacing Tokens Alignment

### CSS Spacing Variables

```css
--space-10: 0.25rem   /* 4px */
--space-20: 0.5rem    /* 8px */
--space-30: 0.75rem   /* 12px */
--space-40: 1rem      /* 16px */
--space-50: 1.25rem   /* 20px */
--space-60: 1.5rem    /* 24px */
--space-80: 2rem      /* 32px */
--space-100: 2.5rem   /* 40px */
```

**Total CSS Spacing Variables**: 8 tokens

---

### Data Spacing Tokens (`SPACING_TOKENS` array)

**Status**: Needs verification  
**Estimated**: ~10 tokens

**Initial Assessment**: ✅ **Likely aligned** — Simple numeric scale

**Action Needed**:
1. Verify 1:1 mapping
2. Check if data includes additional spacing tokens not in CSS
3. Verify Tailwind class mappings (e.g., `space-60` → `gap-6` / `p-6`)

---

## Phase 4: Font Family Tokens

### CSS Font Variables

```css
--font-karla: "Karla", sans-serif
--font-display: "Playfair Display SC", serif
--font-body: var(--font-karla)
--font-inter: var(--font-karla)      /* ⚠️ LEGACY ALIAS */
--font-heading: var(--font-display)  /* ⚠️ LEGACY ALIAS */
--font-raleway: var(--font-display)  /* ⚠️ LEGACY ALIAS */
```

**Total CSS Font Variables**: 6 tokens (3 primary + 3 legacy aliases)

---

### Data Font Tokens (`FONT_TOKENS` array)

**Status**: Needs verification  
**Estimated**: ~9 tokens

**Initial Assessment**: ⚠️ **May include legacy aliases** — Data tokens might document the backwards compat aliases

**Action Needed**:
1. Verify primary font families documented
2. Check if legacy aliases are documented (should be removed per Task 1.2)
3. Verify font weights, font-variation-settings documented

---

## Phase 5: Other Token Categories

### Radius Tokens

**CSS**:
```css
--radius: 0.5rem
```

**Data**: ~5 tokens estimated

**Assessment**: ❓ **Needs verification** — Data may include more radius variants

---

### Shadow Tokens

**CSS**: Unknown count (not visible in initial search)  
**Data**: ~10 tokens estimated

**Assessment**: ❓ **Needs full audit** — Shadow system needs complete verification

---

### Breakpoint Tokens

**CSS**: Inherited from Tailwind (not explicit custom properties)  
**Data**: ~6 tokens (sm, md, lg, xl, 2xl, 3xl)

**Assessment**: ✅ **Documentation-only** — Breakpoints are Tailwind config, not CSS variables

---

### Layout Tokens

**CSS**: May include max-width, container sizes  
**Data**: ~10 tokens estimated

**Assessment**: ❓ **Needs verification**

---

## Critical Finding: Legacy Font Aliases

**Issue**: Lines 61-63 in theme.css contain backwards compatibility aliases:

```css
--font-inter: var(--font-karla);      /* Backwards compat alias */
--font-heading: var(--font-display);  /* Backwards compat alias */
--font-raleway: var(--font-display);  /* Backwards compat alias */
```

**Impact**: These reference old font system (pre-Karla/Playfair migration)

**Action Required** (Task 1.2):
1. Search codebase for usage of `--font-inter`, `--font-raleway`, `--font-heading`
2. If found, update to `--font-karla` or `--font-display`
3. Remove alias declarations
4. Update designTokens.ts if documented

---

## Alignment Strategy

### Recommended Approach

**Option A: CSS as Source of Truth** (Recommended)
- CSS custom properties are runtime values
- Data tokens serve as documentation + developer reference
- Data tokens can include extra metadata (Figma names, Tailwind classes, usage examples)
- **Rule**: Every CSS variable MUST have a data token entry
- **Flexibility**: Data tokens MAY include additional documentation-only entries

**Option B: Strict 1:1 Mapping**
- Every CSS variable = one data token
- Every data token = one CSS variable
- No extra documentation in data file
- **Pros**: Simpler validation
- **Cons**: Loses valuable developer documentation

**Recommendation**: **Option A** — CSS is runtime, data is documentation + metadata

---

## Validation Checklist

### Phase 1: Color Tokens
- [ ] Count exact number of COLOR_TOKENS entries
- [ ] List all CSS color variables (--custom-*, --brand-*, --base-*, --color-*, etc.)
- [ ] Cross-reference each CSS variable with data token
- [ ] Identify missing CSS variables in data
- [ ] Identify extra data tokens (doc-only)
- [ ] Verify light/dark mode values match

### Phase 2: Typography Tokens
- [ ] Count exact number of TYPOGRAPHY_TOKENS entries
- [ ] List all CSS typography variables (--text-*, --lh-*, --ls-*, --fvs-*)
- [ ] Verify each CSS variable documented
- [ ] Check clamp() values match
- [ ] Verify font-variation-settings documented

### Phase 3: Spacing Tokens
- [ ] Verify SPACING_TOKENS matches CSS --space-* variables
- [ ] Check Tailwind class mappings
- [ ] Identify any missing spacing values

### Phase 4: Font Tokens
- [ ] Verify FONT_TOKENS documents primary fonts
- [ ] Check if legacy aliases documented
- [ ] Search codebase for usage of legacy font variables

### Phase 5: Other Categories
- [ ] Audit RADIUS_TOKENS vs CSS --radius
- [ ] Audit SHADOW_TOKENS vs CSS shadow variables
- [ ] Verify BREAKPOINT_TOKENS (documentation-only, OK)
- [ ] Audit LAYOUT_TOKENS vs CSS layout variables

---

## Next Steps

### Immediate Actions (This Session)

1. **Complete manual count** of data tokens in each category
2. **Generate CSS variable list** using file_search
3. **Create alignment matrix** showing CSS ↔ Data mapping
4. **Identify gaps** (missing or extra tokens)
5. **Create fix task list** for misalignments

### Task 1.1 Completion Criteria

✅ **Task complete when**:
- Exact count of CSS variables vs data tokens documented
- Alignment matrix created showing 1:1 mapping (or doc-only tokens marked)
- List of missing CSS variables (need data token)
- List of missing data tokens (need CSS variable)
- List of extra data tokens (doc-only, acceptable)
- Report created with findings

### Task 1.2 Preview

After completing alignment audit, move to:
- **Task 1.2**: Remove legacy font aliases (`--font-inter`, `--font-raleway`, `--font-heading`)
- Search codebase for usage
- Update to modern font variables
- Remove from theme.css

---

## Estimated Effort

**Original Estimate**: 20 minutes  
**Actual Complexity**: Higher due to:
- 162+ CSS variables
- 145+ data tokens
- 8 token categories
- Need for systematic cross-reference

**Revised Estimate**: 45-60 minutes for complete audit

**Breakdown**:
- Manual count of data tokens: 10 min
- CSS variable extraction: 10 min
- Alignment matrix creation: 20 min
- Gap analysis: 10 min
- Report finalization: 10 min

---

## Status

**Current Progress**: 30% complete
- ✅ CSS token categories identified
- ✅ Data token categories identified  
- ⏳ Detailed counts in progress
- ⏳ Alignment matrix pending
- ⏳ Gap analysis pending

**Next Action**: Create systematic count of both sources and build alignment matrix

---

**Audit Started**: 2026-03-16  
**Estimated Completion**: 2026-03-16 (within session)  
**Priority**: Critical (blocks Task 1.2 and subsequent token cleanup)
