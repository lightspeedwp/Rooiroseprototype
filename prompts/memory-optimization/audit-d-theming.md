# Audit D: Light/Dark Mode Token Coverage & Missing Variables

**Purpose**: Ensure complete light/dark mode support with semantic tokens that work across all utilities and component classes.

---

## Tasks

### 1) Determine Current Theming Mechanism

**Check**:
- Does the project use `data-theme` attribute?
- Does it use a class on `<html>` or `<body>` (e.g., `.dark`)?
- Does it use `prefers-color-scheme` media query?
- Does it support both manual toggle and system preference?

**Document**:
- Primary mechanism (what actually controls theming)
- Fallback mechanism (if any)
- Where theme toggle is implemented (component, context, etc.)

### 2) Identify Themeable Variables That Are Missing

**Check for variables that should be themeable but aren't**:

#### Surface/Background Layers
- `--color-surface-1`, `--color-surface-2`, `--color-surface-3`
- `--color-background-primary`, `--color-background-secondary`
- `--color-overlay`, `--color-modal-backdrop`

#### Text Colors
- `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- `--color-text-inverse`, `--color-text-muted`
- `--color-heading`, `--color-body`

#### Borders/Dividers
- `--color-border-default`, `--color-border-subtle`, `--color-border-strong`
- `--color-divider`, `--color-separator`

#### Interactive States
- `--color-hover`, `--color-active`, `--color-focus`
- `--color-disabled`, `--color-loading`

#### Links
- `--color-link-default`, `--color-link-visited`, `--color-link-hover`

#### Focus Ring and Outlines
- `--color-focus-ring`, `--outline-offset`, `--outline-width`

#### Shadows
- `--shadow-sm`, `--shadow-md`, `--shadow-lg` (often differ in dark mode)
- `--shadow-color` (base shadow color that changes with theme)

### 3) Ensure Tokens Support Utilities & Preset Classes

**Verify that utilities can reference tokens without hardcoding**:

| Utility Type | Example Classes | Token Required | Light Value | Dark Value |
|:-------------|:----------------|:---------------|:------------|:-----------|
| Background | `.bg-surface-1` | `--color-surface-1` | ... | ... |
| Text | `.text-primary` | `--color-text-primary` | ... | ... |
| Border | `.border-default` | `--color-border-default` | ... | ... |

**Check**:
- Can WordPress preset classes (`.has-*-color`, `.has-*-background-color`) reference tokens?
- Do component classes reference tokens or hardcode colors?

### 4) Identify Contrast Risks

**For each semantic token pair (light + dark)**:

| Token | Light Value | Dark Value | Contrast (AA) | Contrast (AAA) | Risk |
|:------|:------------|:-----------|:--------------|:---------------|:-----|
| `--color-text-primary` on `--color-surface-1` | ... | ... | ✅ / ❌ | ✅ / ❌ | ... |

**Flag**:
- Any combinations that fail WCAG 2.1 AA (4.5:1 for normal text)
- Any combinations that fail WCAG 2.1 AAA (7:1 for normal text)

---

## Output Template

```markdown
## Audit D: Light/Dark Mode Token Coverage & Missing Variables

### Current Theming Mechanism

**Primary Mechanism**: [data-theme="dark"] / .dark class / prefers-color-scheme

**Implementation**:
- Light mode selector: [`:root` / other]
- Dark mode selector: [`[data-theme="dark"]` / `.dark` / `@media (prefers-color-scheme: dark)`]
- Toggle component: [file path or "none"]
- System preference support: [yes / no]

**How It Works**:
[Brief description of how theme switching happens]

### Missing Token List

#### Surface/Background Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-surface-1 | ✅ / ❌ | ... | ... | ... |
| --color-surface-2 | ✅ / ❌ | ... | ... | ... |
| --color-surface-3 | ✅ / ❌ | ... | ... | ... |

#### Text Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-text-primary | ✅ / ❌ | ... | ... | ... |
| --color-text-secondary | ✅ / ❌ | ... | ... | ... |
| --color-text-muted | ✅ / ❌ | ... | ... | ... |

#### Border/Divider Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-border-default | ✅ / ❌ | ... | ... | ... |
| --color-divider | ✅ / ❌ | ... | ... | ... |

#### Interactive State Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-hover | ✅ / ❌ | ... | ... | ... |
| --color-focus | ✅ / ❌ | ... | ... | ... |

#### Link Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-link-default | ✅ / ❌ | ... | ... | ... |
| --color-link-hover | ✅ / ❌ | ... | ... | ... |

#### Focus Ring Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --color-focus-ring | ✅ / ❌ | ... | ... | ... |
| --outline-width | ✅ / ❌ | ... | ... | ... |

#### Shadow Tokens

| Token Name | Currently Exists | Recommended Value (Light) | Recommended Value (Dark) | Used By |
|:-----------|:-----------------|:--------------------------|:-------------------------|:--------|
| --shadow-color | ✅ / ❌ | rgba(0,0,0,0.1) | rgba(0,0,0,0.5) | ... |
| --shadow-sm | ✅ / ❌ | ... | ... | ... |

### Proposed Light/Dark Variable Blocks

**Light Mode** (`theme-tokens.css`):
```css
:root {
  /* Surface/Background */
  --color-surface-1: #ffffff;
  --color-surface-2: #f9fafb;
  --color-surface-3: #f3f4f6;
  
  /* Text */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
  
  /* Borders */
  --color-border-default: #e5e7eb;
  --color-border-subtle: #f3f4f6;
  
  /* Interactive */
  --color-hover: rgba(0, 0, 0, 0.05);
  --color-focus: #3b82f6;
  
  /* Links */
  --color-link-default: #2563eb;
  --color-link-hover: #1d4ed8;
  
  /* Focus */
  --color-focus-ring: #3b82f6;
  --outline-width: 2px;
  
  /* Shadows */
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

**Dark Mode** (`theme-dark.css`):
```css
.dark {
  /* Surface/Background */
  --color-surface-1: #1a1a1a;
  --color-surface-2: #262626;
  --color-surface-3: #404040;
  
  /* Text */
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-muted: #9ca3af;
  
  /* Borders */
  --color-border-default: #374151;
  --color-border-subtle: #4b5563;
  
  /* Interactive */
  --color-hover: rgba(255, 255, 255, 0.1);
  --color-focus: #60a5fa;
  
  /* Links */
  --color-link-default: #60a5fa;
  --color-link-hover: #93c5fd;
  
  /* Focus */
  --color-focus-ring: #60a5fa;
  --outline-width: 2px;
  
  /* Shadows */
  --shadow-color: rgba(0, 0, 0, 0.5);
}
```

### Utility & Preset Class Coverage

**WordPress Preset Classes**:

| Class | Token Reference | Light Value | Dark Value | Status |
|:------|:----------------|:------------|:-----------|:-------|
| `.has-primary-color` | `--wp--preset--color--primary` | ... | ... | ✅ / ❌ |
| `.has-base-background-color` | `--wp--preset--color--base` | ... | ... | ✅ / ❌ |

**Custom Utility Classes**:

| Class | Token Reference | Light Value | Dark Value | Status |
|:------|:----------------|:------------|:-----------|:-------|
| `.bg-surface-1` | `--color-surface-1` | ... | ... | ✅ / ❌ |
| `.text-primary` | `--color-text-primary` | ... | ... | ✅ / ❌ |

### Contrast Risk Analysis

**AA Compliance (4.5:1 normal text, 3:1 large text)**:

| Combination | Light Contrast | Dark Contrast | AA Status | Recommended Fix |
|:------------|---------------:|---------------:|:----------|:----------------|
| text-primary on surface-1 | 4.5:1 | 4.5:1 | ✅ / ❌ | ... |
| text-secondary on surface-1 | 3.8:1 | 3.8:1 | ⚠️ | Darken text-secondary |

**AAA Compliance (7:1 normal text, 4.5:1 large text)**:

| Combination | Light Contrast | Dark Contrast | AAA Status | Recommended Fix |
|:------------|---------------:|---------------:|:----------|:----------------|
| text-primary on surface-1 | 7:1 | 7:1 | ✅ / ❌ | ... |
| heading on surface-1 | 9:1 | 9:1 | ✅ | ... |

**Blockers**:
- [List any combinations that cannot meet AAA without changing brand colors]

### Implementation Recommendations

**Priority 1 (Blocking)**:
- [ ] Add [count] missing semantic tokens for surface/text/border
- [ ] Fix [count] AA contrast failures
- [ ] Ensure all utilities reference tokens (no hardcoded colors)

**Priority 2 (Important)**:
- [ ] Add [count] missing interactive state tokens
- [ ] Fix [count] AAA contrast failures (if possible without brand changes)
- [ ] Add shadow tokens with different light/dark values

**Priority 3 (Nice-to-have)**:
- [ ] Add link state tokens (default/visited/hover)
- [ ] Add focus ring customization tokens
- [ ] Document theming mechanism in `/guidelines/`

### Evidence

**Current Light Mode Tokens**:
```css
[Excerpt from theme-tokens.css showing current :root variables]
```

**Current Dark Mode Tokens**:
```css
[Excerpt from theme-dark.css showing current .dark variables]
```

**Hardcoded Color Example**:
```css
[Example of component using hardcoded color instead of token]
```
```

---

## Die Papier Context

**Theming Mechanism**: `.dark` class on `<html>` element

**Current Coverage**:
- Light mode: 428 lines of `:root` properties in `theme-tokens.css`
- Dark mode: 69 lines of `.dark` overrides in `theme-dark.css`

**Brand Colors**:
- Primary: Navy (#142135)
- Accent: Red (#D70025)

**Expected Findings**:
- Some semantic tokens may be missing dark mode values
- Some utilities may hardcode colors instead of using tokens
- Contrast ratios should be verified for AA/AAA compliance

---

## Validation Checklist

- [ ] Current theming mechanism documented
- [ ] All missing semantic tokens identified
- [ ] Proposed light/dark variable blocks provided
- [ ] Utility/preset class coverage verified
- [ ] Contrast risks identified with AA/AAA ratings
- [ ] Implementation recommendations prioritized
- [ ] Evidence includes actual code excerpts

---

**Next**: Proceed to Audit E (Tailwind + Custom CSS Layering Plan)
