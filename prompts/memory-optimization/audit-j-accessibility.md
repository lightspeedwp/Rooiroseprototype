# Audit J: Accessibility CSS Audit (WCAG 2.1 AA/AAA)

**Purpose**: Verify CSS-driven accessibility meets WCAG 2.1 AA and AAA standards.

---

## Output Template

```markdown
## Audit J: Accessibility CSS Audit (WCAG 2.1 AA/AAA)

### 1) Focus Visibility

**:focus-visible Styles**:

| Element Type | Selector | Outline | Contrast | Status |
|:-------------|:---------|:--------|:---------|:-------|
| Links | `a:focus-visible` | 2px solid blue | 3:1 | ✅ AA / ❌ AAA |
| Buttons | `button:focus-visible` | 2px solid blue | 3:1 | ✅ AA / ❌ AAA |
| Form inputs | `input:focus-visible` | 2px solid blue | 3:1 | ✅ AA / ❌ AAA |

**Issues**:
- [ ] Focus indicator removed with `outline: none` (violation)
- [ ] Insufficient contrast for focus ring
- [ ] Missing `:focus-visible` support (only `:focus`)

**Recommendations**:
```css
/* ✅ Good focus styles */
:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Ensure focus ring meets contrast */
:root {
  --color-focus-ring: #0066cc; /* 4.5:1 on white */
}

.dark {
  --color-focus-ring: #66b3ff; /* 4.5:1 on dark bg */
}
```

### 2) Color Contrast (AA/AAA)

**Text on Surface Combinations**:

| Combination | Light Contrast | Dark Contrast | AA (4.5:1) | AAA (7:1) | Fix |
|:------------|---------------:|---------------:|:-----------|:----------|:----|
| Primary text on surface-1 | 16:1 | 14:1 | ✅ | ✅ | None |
| Secondary text on surface-1 | 4.6:1 | 4.8:1 | ✅ | ❌ | Acceptable for AA |
| Muted text on surface-2 | 3.2:1 | 3.1:1 | ❌ | ❌ | Increase contrast |

**Link Colors**:

| Link State | Contrast | AA | AAA | Fix |
|:-----------|----------:|:---|:----|:----|
| Default | 4.5:1 | ✅ | ❌ | AAA: Increase to 7:1 |
| Hover | 5.2:1 | ✅ | ❌ | AAA: Increase to 7:1 |
| Visited | 4.5:1 | ✅ | ❌ | AAA: Increase to 7:1 |

**AAA Blockers**:
- Secondary/muted text colors fall short of 7:1
- Link colors fall short of 7:1
- Some UI elements (badges, tags) use low-contrast colors

**Token-Level Fixes**:
```css
/* Current (AA compliant, not AAA) */
:root {
  --color-text-secondary: #6b7280; /* 4.6:1 on white */
}

/* Proposed (AAA compliant) */
:root {
  --color-text-secondary: #4b5563; /* 7.2:1 on white */
}
```

### 3) Reduced Motion

**prefers-reduced-motion Support**:

| Animation/Transition | Respects Preference | Fix |
|:---------------------|:--------------------|:----|
| Page transitions | ❌ | Add media query |
| Hover animations | ❌ | Add media query |
| Scroll animations | ❌ | Add media query |

**Recommendations**:
```css
/* Add to all animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4) States & Affordances

**Interactive Element States**:

| Element | Default | Hover | Active | Focus | Disabled | Status |
|:--------|:--------|:------|:-------|:------|:---------|:-------|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | Complete |
| Link | ✅ | ✅ | ✅ | ✅ | N/A | Complete |
| Input | ✅ | ✅ | ✅ | ✅ | ✅ | Complete |
| Checkbox | ✅ | ✅ | ✅ | ✅ | ✅ | Complete |

**Link Underlines**:
- [ ] Links underlined by default (don't rely on color alone)
- [ ] Visited links distinguishable

**Recommendations**:
```css
/* Don't rely on color alone for links */
a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

a:visited {
  color: var(--color-link-visited);
  /* Underline remains for non-color differentiation */
}
```

### 5) Form Controls

**Form Accessibility**:

| Feature | Status | Fix |
|:--------|:-------|:----|
| Visible labels | ✅ | None |
| Error states | ✅ | Ensure contrast meets AA/AAA |
| Required indicators | ✅ | Use text + icon, not color alone |
| Disabled state | ✅ | Ensure contrast for disabled text |

**Error State Example**:
```css
/* ❌ Bad: Color only */
.input--error {
  border-color: red;
}

/* ✅ Good: Color + icon + text */
.input--error {
  border-color: var(--color-error);
  background-image: url('icon-error.svg');
  background-position: right 0.5rem center;
}

.input--error + .error-message {
  color: var(--color-error-text);
  /* Ensure error text meets 4.5:1 contrast */
}
```

### Pass/Fail Summary

**AA Compliance**:
- ✅ **Focus visibility**: All interactive elements have visible focus
- ⚠️ **Contrast**: 3 color combinations fail (muted text, some badges)
- ❌ **Reduced motion**: Not implemented
- ✅ **States**: All states present
- ✅ **Form controls**: Properly styled

**AAA Compliance**:
- ✅ **Focus visibility**: Focus ring meets AAA contrast
- ❌ **Contrast**: 15 combinations fall short of 7:1
- ❌ **Reduced motion**: Not implemented
- ✅ **States**: All states present
- ✅ **Form controls**: Properly styled

**Priority Fixes** (AA blockers):
1. [ ] Add `prefers-reduced-motion` support
2. [ ] Fix 3 muted text contrast failures
3. [ ] Ensure link underlines (don't rely on color alone)

**Priority Fixes** (AAA blockers):
1. [ ] Adjust 15 token values to meet 7:1 contrast
2. [ ] May require brand color adjustments (Navy #142135, Red #D70025)
3. [ ] Document AAA limitations if brand colors cannot be changed

### Token-Level Fixes (Preferred)

**Instead of scattered CSS overrides, fix tokens**:

```css
/* theme-tokens.css — Adjust these tokens */
:root {
  /* Current AA-compliant values */
  --color-text-secondary: #6b7280; /* 4.6:1 */
  --color-text-muted: #9ca3af; /* 3.2:1 ❌ */
  
  /* Proposed AAA-compliant values */
  --color-text-secondary: #4b5563; /* 7.2:1 ✅ */
  --color-text-muted: #374151; /* 10.5:1 ✅ */
}
```

**Impact**: All components using these tokens automatically become AAA-compliant.

### Evidence

**Focus Styles**:
```css
[Current focus styles from CSS]
```

**Contrast Failures**:
[List specific selectors with contrast ratios]

**Missing Reduced Motion**:
[List animations/transitions without media query]
```

---

## Die Papier Context

**Current Accessibility**:
- 235 WordPress files validated (Phase 5 complete)
- Focus styles exist
- Contrast likely needs AAA improvements

**Expected Findings**:
- AA compliance mostly achieved
- AAA compliance requires token adjustments
- Reduced motion support missing

---

## Validation Checklist

- [ ] Focus visibility documented with contrast ratios
- [ ] All text/surface combinations tested for AA/AAA
- [ ] Reduced motion support assessed
- [ ] Interactive states verified
- [ ] Form controls checked
- [ ] Pass/Fail summary with priorities
- [ ] Token-level fixes provided (preferred)
- [ ] AAA blockers identified with resolution path

---

**End of Audits**: All 10 audits (A-J) complete. Proceed to write consolidated report.
