# Typography

**Last updated**: 2026-03-02
**Version**: 2.0

> **Status**: Updated to align with WordPress FSE (theme.json v3) and Ollie theme slug conventions. Numeric slugs (100–900) have been replaced with descriptive slugs.

## 1. Font Families

| Role | Family | Slug | CSS Variable |
|:---|:---|:---|:---|
| **Headings (H1-H4)** | `Roboto Serif` | `brand-serif` | `--font-heading` |
| **Body / UI (H5-H6, P)** | `Inter` | `brand-sans` | `--font-inter` |

---

## 2. Typography Scale

Die Papier uses a fluid scale for headings and a static scale for body text, all mapped to descriptive slugs in `theme.json`.

### 2.1 Headings (Roboto Serif)

| Level | Slug | Size (Desktop) | Line Height | Letter Spacing |
|:---|:---|:---|:---|:---|
| **H1** | `xxx-large` | 48px | 52px (~1.1x) | -0.24px |
| **H2** | `xx-large` | 30px | 35px (~1.17x) | -0.24px |
| **H3** | `x-large` | 24px | 28px (1.17x) | 0 |
| **H4** | `large` | 20px | 28px (1.40x) | 0 |

### 2.2 UI & Body Text (Inter)

| Role | Slug | Size | Line Height | Usage |
|:---|:---|:---|:---|:---|
| **H5 / P1** | `medium` | 18px | 27px (1.5x) | Subheadings / Large body |
| **H6 / P2** | `base` | 16px | 24px (1.5x) | Uppercase labels / Standard body |
| **P3** | `small` | 14px | 22px (1.57x) | Secondary body / Meta |
| **Small** | `x-small` | 11px | 16px (1.45x) | Captions / Fine print |

---

## 3. WordPress Alignment

All typography settings are defined in `theme.json` under `settings.typography`.

### 3.1 Font Size Slugs

Selectable in the block editor:
- `x-small` (11px)
- `small` (14px)
- `base` (16px)
- `medium` (18px)
- `large` (20px)
- `x-large` (24px)
- `xx-large` (30px)
- `xxx-large` (48px)

### 3.2 Custom Typography Properties

WordPress bridge variables in `theme.css`:

```css
/* Line Heights */
--wp--custom--line-height--x-small: var(--lh-small);
--wp--custom--line-height--small: var(--lh-p3);
--wp--custom--line-height--base: var(--lh-p2);
--wp--custom--line-height--medium: var(--lh-p1);
--wp--custom--line-height--large: var(--lh-h4);
--wp--custom--line-height--x-large: var(--lh-h3);
--wp--custom--line-height--xx-large: var(--lh-h2);
--wp--custom--line-height--xxx-large: var(--lh-h1);

/* Letter Spacing */
--wp--custom--letter-spacing--xxx-large: var(--ls-h1);
--wp--custom--letter-spacing--xx-large: var(--ls-h2);
--wp--custom--letter-spacing--x-large: 0;
--wp--custom--letter-spacing--large: 0;
```

---

## 4. Accessibility Overrides

To meet WCAG AA/AAA standards, several adjustments were made to the original design:
- **H1/H2 Line-Height**: Increased to prevent descender collision in multi-line Afrikaans headings.
- **Body Line-Height**: Set to 1.5x minimum (TYP-010).
- **Red Text Contrast**: Body-size links use the `accent` color slug (`#C41F20`).
