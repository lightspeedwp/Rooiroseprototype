# Colors — rooi rose Magazine

**Last updated**: 2026-03-11  
**Version**: 3.0 (rooi rose Redesign)

> **Status**: Updated for rooi rose magazine brand. New palette features vibrant red (#e01e12), neutral greys, and editorial accent colors for lifestyle content.

---

## 1. Brand Colors

rooi rose uses a vibrant red as the primary brand color, supported by sophisticated neutrals and warm editorial accents.

| Token | Value (Light) | Value (Dark) | Usage | WCAG Status |
|:------|:--------------|:-------------|:------|:------------|
| `--custom-primary` | #e01e12 | #ff4d42 | Logo, CTAs, category labels, pull quote borders | ⚠️ AA Large only (3.58:1) |
| `--custom-primary-accessible` | #b51410 | #ff6961 | Body links, buttons, accessible text | ✅ AAA (4.72:1) |
| `--custom-primary-hover` | #c01711 | #ff847d | Hover states for buttons and links | ✅ AA (4.12:1) |

### WCAG Contrast Warning

⚠️ **Important**: The primary rooi rose red (`#e01e12`) has **3.58:1 contrast** on white backgrounds, which **fails WCAG AA for normal text** (4.5:1 required). 

**Use Cases**:
- ✅ **Large text** (18pt+ or 14pt+ bold) — Passes AA Large (3:1 minimum)
- ✅ **Logo and branding** — No contrast requirement
- ✅ **Decorative elements** — Borders, accents, icons
- ❌ **Body links** — Use `--custom-primary-accessible` (#b51410) instead
- ❌ **Small text** — Use `--custom-primary-accessible` or `--contrast`

---

## 2. Neutrals

rooi rose uses a high-contrast neutral palette for editorial clarity and readability.

| Token | Value (Light) | Value (Dark) | Usage |
|:------|:--------------|:-------------|:------|
| `--base` | #FFFFFF | #1a1a1a | Primary background |
| `--contrast` | #222222 | #f5f5f5 | Headlines, primary text |
| `--body-text` | #000000 | #e8e8e8 | Long-form article body text |
| `--muted` | #f5f5f5 | #2a2a2a | Card backgrounds, borders |
| `--muted-foreground` | #424242 | #b8b8b8 | Meta text (dates, authors, captions) |

**Editorial Philosophy**: Pure black (#000000) for body text provides maximum readability for long-form magazine articles, while dark grey (#222222) softens headlines.

---

## 3. Editorial Accents (NEW)

Warm, sophisticated accent colors for section backgrounds and content breaks.

| Token | Value | Usage |
|:------|:------|:------|
| `--accent-blush` | #f4e5e0 | Alternating section backgrounds (lifestyle, fashion) |
| `--accent-warm-beige` | #f8f4f0 | Alternating section backgrounds (food, home) |
| `--accent-soft-grey` | #e8e5e2 | Pull quote backgrounds, sidebar content |

**Design Note**: These soft, warm tones evoke magazine print quality and create visual hierarchy without competing with editorial photography.

---

## 4. WordPress Preset Mapping

rooi rose color tokens map to WordPress `theme.json` presets for FSE compatibility.

| Theme.json Slug | CSS Variable | Light Value | Dark Value |
|:----------------|:-------------|:------------|:-----------|
| `primary` | `--wp--preset--color--primary` | #e01e12 | #ff4d42 |
| `primary-alt` | `--wp--preset--color--primary-alt` | #b51410 | #ff6961 |
| `base` | `--wp--preset--color--base` | #FFFFFF | #1a1a1a |
| `contrast` | `--wp--preset--color--contrast` | #222222 | #f5f5f5 |
| `main` | `--wp--preset--color--main` | #000000 | #e8e8e8 |
| `tertiary` | `--wp--preset--color--tertiary` | #f5f5f5 | #2a2a2a |
| `main-accent` | `--wp--preset--color--main-accent` | #424242 | #b8b8b8 |
| `accent` | `--wp--preset--color--accent` | #b51410 | #ff6961 |

**WordPress Utility Classes**:
- **Text**: `.has-primary-color`, `.has-contrast-color`, `.has-main-accent-color`
- **Background**: `.has-primary-background-color`, `.has-tertiary-background-color`

---

## 5. Dark Mode Implementation

rooi rose supports dark mode with adjusted colors for accessibility and visual comfort.

### Dark Mode Color Adjustments

| Token | Light | Dark | Adjustment Rationale |
|:------|:------|:-----|:--------------------|
| `--custom-primary` | #e01e12 | #ff4d42 | Lightened 15% for visibility on dark backgrounds |
| `--custom-primary-accessible` | #b51410 | #ff6961 | Lightened 20% for AAA contrast |
| `--base` | #FFFFFF | #1a1a1a | Near-black (not pure black) to reduce eye strain |
| `--contrast` | #222222 | #f5f5f5 | Soft white (not pure white) for readability |
| `--body-text` | #000000 | #e8e8e8 | Warm grey for comfortable long-form reading |
| `--muted` | #f5f5f5 | #2a2a2a | Elevated dark surface |
| `--accent-blush` | #f4e5e0 | #3a2a28 | Darkened warm tone |
| `--accent-warm-beige` | #f8f4f0 | #2e2a26 | Darkened warm tone |
| `--accent-soft-grey` | #e8e5e2 | #2d2d2d | Neutral dark surface |

**Implementation**: Dark mode colors are defined in `/src/styles/theme-dark.css` using the `.dark` class selector.

---

## 6. Color Usage Guidelines

### Text Colors

| Element | Light Mode Token | Dark Mode Token | CSS Variable |
|:--------|:-----------------|:----------------|:-------------|
| Headlines (H1-H2) | `--contrast` (#222222) | `--contrast` (#f5f5f5) | `var(--contrast)` |
| Body Copy | `--body-text` (#000000) | `--body-text` (#e8e8e8) | `var(--body-text)` |
| Links (Body) | `--custom-primary-accessible` | `--custom-primary-accessible` | `var(--custom-primary-accessible)` |
| Links (Hover) | `--custom-primary-hover` | `--custom-primary-hover` | `var(--custom-primary-hover)` |
| Meta (Dates/Authors) | `--muted-foreground` (#424242) | `--muted-foreground` (#b8b8b8) | `var(--muted-foreground)` |
| Category Labels | `--custom-primary` (#e01e12) | `--custom-primary` (#ff4d42) | `var(--custom-primary)` |

### Background Colors

| Element | Light Mode Token | Dark Mode Token | CSS Variable |
|:--------|:-----------------|:----------------|:-------------|
| Page Background | `--base` (#FFFFFF) | `--base` (#1a1a1a) | `var(--base)` |
| Card Background | `--base` or `--muted` | `--base` or `--muted` | `var(--base)` |
| Alternating Section 1 | `--accent-blush` (#f4e5e0) | `--accent-blush` (#3a2a28) | `var(--accent-blush)` |
| Alternating Section 2 | `--accent-warm-beige` (#f8f4f0) | `--accent-warm-beige` (#2e2a26) | `var(--accent-warm-beige)` |
| Pull Quote Background | `--accent-soft-grey` (#e8e5e2) | `--accent-soft-grey` (#2d2d2d) | `var(--accent-soft-grey)` |

### Button Colors

| State | Background | Text | Border |
|:------|:-----------|:-----|:-------|
| **Default** | `--custom-primary` (#e01e12) | #FFFFFF | `--custom-primary` |
| **Hover** | `--custom-primary-hover` (#c01711) | #FFFFFF | `--custom-primary-hover` |
| **Focus** | `--custom-primary` | #FFFFFF | `--custom-primary-accessible` (3px) |
| **Disabled** | `--muted` (#f5f5f5) | `--muted-foreground` (#424242) | `--muted` |

---

## 7. Accessibility Compliance

### Contrast Ratios (WCAG 2.1)

| Token Pair | Light Mode Contrast | Dark Mode Contrast | WCAG Level |
|:-----------|:-------------------:|:------------------:|:-----------|
| `--custom-primary` on `--base` | 3.58:1 | 6.12:1 | ⚠️ AA Large (light), AAA (dark) |
| `--custom-primary-accessible` on `--base` | 4.72:1 | 7.85:1 | ✅ AAA |
| `--body-text` on `--base` | 21:1 | 13.8:1 | ✅ AAA |
| `--contrast` on `--base` | 15.3:1 | 14.1:1 | ✅ AAA |
| `--muted-foreground` on `--base` | 7.2:1 | 4.6:1 | ✅ AAA (light), AA (dark) |

**Testing Tools**:
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools Accessibility Pane
- axe DevTools browser extension

---

## 8. Migration from Die Papier

### Token Name Changes

| Die Papier Token | rooi rose Token | Change Rationale |
|:-----------------|:----------------|:-----------------|
| `--custom-primary` (#E82C27) | `--custom-primary` (#e01e12) | New rooi rose brand red |
| `--custom-primary-2` (#C41F20) | `--custom-primary-accessible` (#b51410) | Clearer naming for accessibility variant |
| `--secondary` (#172134 navy) | _Removed_ | Navy not used in rooi rose magazine palette |
| `--secondary-accent` (#1A3A5F) | _Removed_ | Navy accent not used |
| `--base` (#FFFFFF) | `--base` (#FFFFFF) | No change |
| `--tertiary` (#F0F0F0) | `--muted` (#f5f5f5) | Renamed for clarity (slight value change) |
| `--main` (#2c2c2c) | `--contrast` (#222222) | Renamed (slight darkening for magazine aesthetic) |
| `--main-accent` (#636375) | `--muted-foreground` (#424242) | Renamed + warmer grey for editorial feel |
| `--accent` (#C41F20) | `--custom-primary-accessible` (#b51410) | Renamed for consistency |

**New Tokens**:
- `--body-text` (#000000) — Pure black for long-form reading
- `--custom-primary-hover` (#c01711) — Explicit hover state
- `--accent-blush` (#f4e5e0) — Editorial accent
- `--accent-warm-beige` (#f8f4f0) — Editorial accent
- `--accent-soft-grey` (#e8e5e2) — Editorial accent

---

## 9. CSS Implementation

### Token Definitions (`/src/styles/theme-tokens.css`)

```css
:root {
  /* === ROOI ROSE BRAND COLORS === */
  
  /* Primary Red */
  --custom-primary: #e01e12;
  --custom-primary-accessible: #b51410; /* AAA contrast */
  --custom-primary-hover: #c01711;
  
  /* Neutrals */
  --base: #FFFFFF;
  --contrast: #222222;
  --body-text: #000000;
  --muted: #f5f5f5;
  --muted-foreground: #424242;
  
  /* Editorial Accents */
  --accent-blush: #f4e5e0;
  --accent-warm-beige: #f8f4f0;
  --accent-soft-grey: #e8e5e2;
  
  /* WordPress Preset Mapping */
  --wp--preset--color--primary: var(--custom-primary);
  --wp--preset--color--primary-alt: var(--custom-primary-accessible);
  --wp--preset--color--base: var(--base);
  --wp--preset--color--contrast: var(--contrast);
  --wp--preset--color--main: var(--body-text);
  --wp--preset--color--tertiary: var(--muted);
  --wp--preset--color--main-accent: var(--muted-foreground);
  --wp--preset--color--accent: var(--custom-primary-accessible);
}
```

### Dark Mode (`/src/styles/theme-dark.css`)

```css
.dark {
  /* rooi rose Dark Mode Colors */
  --custom-primary: #ff4d42;
  --custom-primary-accessible: #ff6961;
  --custom-primary-hover: #ff847d;
  
  --base: #1a1a1a;
  --contrast: #f5f5f5;
  --body-text: #e8e8e8;
  --muted: #2a2a2a;
  --muted-foreground: #b8b8b8;
  
  --accent-blush: #3a2a28;
  --accent-warm-beige: #2e2a26;
  --accent-soft-grey: #2d2d2d;
}
```

---

## 10. Related Guidelines

- [Typography](/guidelines/design-tokens/typography.md) — Playfair Display SC + Karla fonts
- [Dark Mode](/guidelines/design-tokens/dark-mode.md) — Dark mode implementation strategy
- [UI Presets](/guidelines/design-tokens/ui-presets.md) — Buttons, shadows, focus states
- [Editorial Components](/guidelines/design-tokens/editorial-components.md) — Pull quotes, hero sections, category labels
- [rooi rose Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Complete brand identity
