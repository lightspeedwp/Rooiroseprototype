# Typography — rooi rose Magazine

**Last updated**: 2026-03-11  
**Version**: 3.0 (rooi rose Redesign)

> **Status**: Updated for rooi rose magazine brand. New editorial typography system featuring Playfair Display SC for display headings and Karla for body text.

---

## 1. Font Families

rooi rose uses a sophisticated two-font system that balances editorial elegance with modern readability.

| Role | Family | Weights | CSS Variable | Usage |
|:-----|:-------|:--------|:-------------|:------|
| **Display** | Playfair Display SC | 400, 600 | `--font-display` | H1, H2, category labels, pull quotes |
| **Body** | Karla | 400, 600, 700 | `--font-body` | H3-H6, body text, UI elements |

### Font Import

```css
/* Google Fonts Import (add to /src/styles/fonts.css) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;600&family=Karla:wght@400;600;700&display=swap');

:root {
  --font-display: 'Playfair Display SC', serif;
  --font-body: 'Karla', sans-serif;
  --font-heading: var(--font-display); /* Alias for H1-H2 */
}
```

### Why These Fonts?

**Playfair Display SC** (Small Caps):
- Elegant serif with editorial sophistication
- Small caps variant adds premium magazine feel
- Excellent readability at large sizes (H1, H2)
- Strong personality for brand differentiation

**Karla**:
- Clean, modern sans-serif
- Optimized for long-form reading
- Excellent legibility at small sizes
- Neutral enough to support Playfair Display SC without competing

---

## 2. Typography Scale (Editorial)

rooi rose uses a fluid typography scale optimized for long-form editorial content with generous line-heights for comfortable reading.

### 2.1 Display Headings (Playfair Display SC)

| Level | Slug | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing | Font |
|:------|:-----|:---------------|:--------------|:------------|:---------------|:-----|
| **H1** | `xxx-large` | 48px | 36px (clamp) | 1.1 (52px) | +0.05em | Playfair Display SC 400 |
| **H2** | `xx-large` | 36px | 28px (clamp) | 1.15 (41px) | +0.05em | Playfair Display SC 400 |

**Fluid Sizing**:
```css
--text-xxx-large: clamp(2.25rem, 1.5rem + 2vw, 3rem); /* H1: 36px → 48px */
--text-xx-large: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem); /* H2: 28px → 36px */
```

**Editorial Notes**:
- H1 reserved for article headlines and hero sections
- H2 used for major section breaks within articles
- Small caps (+0.05em letter-spacing) enhance premium feel
- Regular weight (400) preferred over bold for elegance

---

### 2.2 UI Headings (Karla)

| Level | Slug | Size | Line Height | Letter Spacing | Font |
|:------|:-----|:-----|:------------|:---------------|:-----|
| **H3** | `x-large` | 28px (clamp 24-28px) | 1.2 (34px) | 0 | Karla 600 |
| **H4** | `large` | 22px | 1.3 (29px) | 0 | Karla 600 |
| **H5** | `medium` | 18px | 1.4 (25px) | 0 | Karla 600 |
| **H6** | `small` | 14px | 1.5 (21px) | +0.02em | Karla 600 |

**Fluid Sizing**:
```css
--text-x-large: clamp(1.5rem, 1.25rem + 0.75vw, 1.75rem); /* H3: 24px → 28px */
--text-large: 1.375rem; /* H4: 22px (static) */
--text-medium: 1.125rem; /* H5: 18px (static) */
--text-small: 0.875rem; /* H6: 14px (static) */
```

**Editorial Notes**:
- H3-H6 use Karla for contrast with display headings
- Bold weight (600) for clear hierarchy
- H6 uses slight letter-spacing for small-caps effect

---

### 2.3 Body Text & UI (Karla)

| Element | Slug | Size | Line Height | Font | Usage |
|:--------|:-----|:-----|:------------|:-----|:------|
| **Body (P1)** | `medium` | 18px | 1.6 (29px) | Karla 400 | Long-form articles, featured paragraphs |
| **Body (P2)** | `base` | 16px | 1.6 (26px) | Karla 400 | Standard body text, lists |
| **Small** | `small` | 14px | 1.5 (21px) | Karla 400 | Meta info, bylines, captions |
| **Caption** | `x-small` | 12px | 1.4 (17px) | Karla 400 | Image captions, legal text |

**Editorial Line-Height Philosophy**:
- **1.6** for body text (18px/16px) — Optimal for long-form magazine articles
- **1.5** for small text (14px) — Maintains readability at smaller sizes
- **1.4** for captions (12px) — Compact but legible

```css
--text-medium: 1.125rem; /* 18px (P1) */
--text-base: 1rem; /* 16px (P2) */
--text-small: 0.875rem; /* 14px */
--text-x-small: 0.75rem; /* 12px */

--lh-body: 1.6; /* Long-form reading */
--lh-ui: 1.5; /* UI elements, small text */
--lh-caption: 1.4; /* Captions, dense content */
```

---

## 3. WordPress Preset Mapping

rooi rose typography tokens map to WordPress `theme.json` font size presets.

| Theme.json Slug | CSS Variable | Size | Usage |
|:----------------|:-------------|:-----|:------|
| `xxx-large` | `--wp--preset--font-size--xxx-large` | clamp(36px→48px) | H1 |
| `xx-large` | `--wp--preset--font-size--xx-large` | clamp(28px→36px) | H2 |
| `x-large` | `--wp--preset--font-size--x-large` | clamp(24px→28px) | H3 |
| `large` | `--wp--preset--font-size--large` | 22px | H4 |
| `medium` | `--wp--preset--font-size--medium` | 18px | H5, P1 |
| `base` | `--wp--preset--font-size--base` | 16px | H6, P2 |
| `small` | `--wp--preset--font-size--small` | 14px | Small, meta |
| `x-small` | `--wp--preset--font-size--x-small` | 12px | Caption |

**WordPress Utility Classes**:
- **Font Size**: `.has-xxx-large-font-size`, `.has-medium-font-size`
- **Font Family**: Classes not typically generated (use heading tags)

---

## 4. Editorial Typography Styles

### 4.1 Pull Quotes

Pull quotes use Playfair Display SC in italic for emphasis and elegance.

```css
.c-pull-quote {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 1.25rem + 0.5vw, 1.75rem); /* 24-28px */
  font-style: italic;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: var(--custom-primary);
}
```

**Visual**: 24-28px Playfair Display SC Italic, red (#e01e12), with 4px left border.

---

### 4.2 Category Labels

Category labels use Playfair Display SC in uppercase small-caps for magazine aesthetic.

```css
.c-category-label {
  font-family: var(--font-display);
  font-size: var(--text-small); /* 14px */
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--custom-primary);
}
```

**Visual**: 14px Playfair Display SC, uppercase, +0.1em tracking, red (#e01e12).

---

### 4.3 Drop Caps (First Paragraph)

Editorial articles feature drop caps using Playfair Display SC.

```css
.article-content p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.85;
  margin: 0.1em 0.1em 0 0;
  color: var(--custom-primary);
}
```

**Visual**: 3.5x body size (63px at 18px base), red (#e01e12), floated left.

---

### 4.4 Deck/Summary (Article Subheadings)

The deck/summary below article headlines uses Karla 18px for readability.

```css
.c-article-deck {
  font-family: var(--font-body);
  font-size: var(--text-medium); /* 18px */
  font-weight: 400;
  line-height: 1.5;
  color: var(--muted-foreground);
  max-width: 680px;
}
```

**Visual**: 18px Karla Regular, grey (#424242), max 3 sentences.

---

## 5. CSS Implementation

### 5.1 Token Definitions (`/src/styles/theme-tokens.css`)

```css
:root {
  /* === ROOI ROSE TYPOGRAPHY TOKENS === */
  
  /* Font Families */
  --font-display: 'Playfair Display SC', serif;
  --font-body: 'Karla', sans-serif;
  --font-heading: var(--font-display); /* H1-H2 alias */
  
  /* Font Sizes (Fluid Scale) */
  --text-xxx-large: clamp(2.25rem, 1.5rem + 2vw, 3rem); /* 36px → 48px (H1) */
  --text-xx-large: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem); /* 28px → 36px (H2) */
  --text-x-large: clamp(1.5rem, 1.25rem + 0.75vw, 1.75rem); /* 24px → 28px (H3) */
  --text-large: 1.375rem; /* 22px (H4) */
  --text-medium: 1.125rem; /* 18px (H5, P1) */
  --text-base: 1rem; /* 16px (H6, P2) */
  --text-small: 0.875rem; /* 14px */
  --text-x-small: 0.75rem; /* 12px */
  
  /* Line Heights */
  --lh-h1: 1.1; /* 52px at 48px */
  --lh-h2: 1.15; /* 41px at 36px */
  --lh-h3: 1.2; /* 34px at 28px */
  --lh-h4: 1.3; /* 29px at 22px */
  --lh-body: 1.6; /* Long-form reading (18px/16px) */
  --lh-ui: 1.5; /* UI elements, small text (14px) */
  --lh-caption: 1.4; /* Captions (12px) */
  
  /* Letter Spacing */
  --ls-display: 0.05em; /* Playfair Display SC enhancement */
  --ls-uppercase: 0.1em; /* Category labels, H6 */
  
  /* WordPress Preset Mapping */
  --wp--preset--font-size--xxx-large: var(--text-xxx-large);
  --wp--preset--font-size--xx-large: var(--text-xx-large);
  --wp--preset--font-size--x-large: var(--text-x-large);
  --wp--preset--font-size--large: var(--text-large);
  --wp--preset--font-size--medium: var(--text-medium);
  --wp--preset--font-size--base: var(--text-base);
  --wp--preset--font-size--small: var(--text-small);
  --wp--preset--font-size--x-small: var(--text-x-small);
}
```

---

### 5.2 Base Typography Styles (`/src/styles/theme-base.css`)

```css
@layer base {
  /* === ROOI ROSE MAGAZINE BASE TYPOGRAPHY === */
  
  body {
    font-family: var(--font-body);
    font-size: var(--text-medium); /* 18px for editorial feel */
    line-height: var(--lh-body); /* 1.6 for long-form reading */
    color: var(--body-text);
    background-color: var(--base);
  }
  
  /* Display Headings (Playfair Display SC) */
  h1 {
    font-family: var(--font-display);
    font-size: var(--text-xxx-large);
    line-height: var(--lh-h1);
    letter-spacing: var(--ls-display);
    color: var(--contrast);
    font-weight: 400; /* Regular for elegance */
  }
  
  h2 {
    font-family: var(--font-display);
    font-size: var(--text-xx-large);
    line-height: var(--lh-h2);
    letter-spacing: var(--ls-display);
    color: var(--contrast);
    font-weight: 400;
  }
  
  /* UI Headings (Karla) */
  h3 {
    font-family: var(--font-body);
    font-size: var(--text-x-large);
    line-height: var(--lh-h3);
    color: var(--contrast);
    font-weight: 600;
  }
  
  h4, h5, h6 {
    font-family: var(--font-body);
    color: var(--contrast);
    font-weight: 600;
  }
  
  h4 { 
    font-size: var(--text-large); 
    line-height: var(--lh-h4); 
  }
  
  h5 { 
    font-size: var(--text-medium); 
    line-height: var(--lh-body); 
  }
  
  h6 { 
    font-size: var(--text-small); 
    line-height: var(--lh-ui); 
    letter-spacing: var(--ls-uppercase); 
    text-transform: uppercase; 
  }
  
  /* Body Text */
  p {
    margin-bottom: 1rem;
  }
  
  /* Links */
  a {
    color: var(--custom-primary-accessible);
    text-decoration: none;
    transition: color 200ms ease;
  }
  
  a:hover {
    color: var(--custom-primary-hover);
  }
  
  /* Strong & Emphasis */
  strong, b {
    font-weight: 700;
  }
  
  em, i {
    font-style: italic;
  }
  
  /* Small Text */
  small {
    font-size: var(--text-small);
    line-height: var(--lh-ui);
  }
}
```

---

## 6. Responsive Typography

### Breakpoint Scale Adjustments

| Breakpoint | H1 | H2 | H3 | Body |
|:-----------|:---|:---|:---|:-----|
| Mobile (< 480px) | 36px | 28px | 24px | 16px |
| Tablet (480-768px) | 42px | 32px | 26px | 18px |
| Desktop (> 768px) | 48px | 36px | 28px | 18px |

**Implementation**: Fluid `clamp()` values handle responsive sizing automatically without media queries.

---

## 7. Accessibility Guidelines

### Minimum Font Sizes

- **Body Text**: Minimum 16px (1rem) — Never scale below
- **Small Text**: Minimum 14px (0.875rem) — For meta, captions
- **Legal Text**: Minimum 12px (0.75rem) — Use sparingly

### Line-Height for Readability

- **Long-form Articles**: 1.6 (WCAG AAA recommendation)
- **UI Elements**: 1.5 (minimum 1.4 for small text)
- **Headings**: 1.1-1.3 (tight for visual impact)

### Letter-Spacing

- **Playfair Display SC**: +0.05em enhances small-caps readability
- **Category Labels**: +0.1em for uppercase tracking
- **Body Text**: 0 (default) for optimal reading speed

---

## 8. Migration from Die Papier

### Font Family Changes

| Die Papier | rooi rose | Change Rationale |
|:-----------|:----------|:-----------------|
| Roboto Serif (headings) | Playfair Display SC | More editorial, sophisticated, magazine aesthetic |
| Inter (body) | Karla | Similar readability, slightly warmer, cleaner at small sizes |

### Typography Scale Changes

| Die Papier | rooi rose | Change |
|:-----------|:----------|:-------|
| H1: 48px (static) | H1: clamp(36px→48px) | Fluid scaling for mobile |
| H2: 30px | H2: clamp(28px→36px) | Larger for editorial hierarchy |
| Body: 16px | Body: 18px | Larger for magazine reading comfort |
| Line-height: 1.4 (body) | Line-height: 1.6 (body) | More generous for long-form |

**Impact**: rooi rose typography is larger, more generous, and more fluid than Die Papier's tighter newspaper style.

---

## 9. Variable Font Settings (Future Enhancement)

Playfair Display SC and Karla do not currently use variable font features. If migrating to variable fonts in the future:

**Playfair Display (Variable)**:
```css
--font-display: 'Playfair Display', serif;
font-variation-settings: 'wght' 400, 'opsz' 48; /* Optical sizing */
font-feature-settings: 'smcp' 1; /* Small caps */
```

**Karla (Variable)**:
```css
--font-body: 'Karla', sans-serif;
font-variation-settings: 'wght' 400;
```

---

## 10. Related Guidelines

- [Colors](/guidelines/design-tokens/colors.md) — rooi rose color palette
- [Spacing](/guidelines/design-tokens/spacing.md) — Magazine spacing scale
- [Editorial Components](/guidelines/design-tokens/editorial-components.md) — Pull quotes, category labels
- [Typography Implementation Guide](/guidelines/design-tokens/typography-implementation-guide.md) — Font enforcement rules
- [rooi rose Editorial Style Guide](/guidelines/rooi-rose/editorial-style-guide.md) — Article structure and typography hierarchy
