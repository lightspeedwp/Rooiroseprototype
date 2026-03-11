# Colors

**Last updated**: 2026-03-02
**Version**: 2.0

> **Status**: Updated to align with WordPress FSE (theme.json v3) and Ollie theme slug conventions. All legacy prototype tokens (contrast-2, base-2, etc.) have been removed.

## Brand Palette

| Token | Slug | Value | Description |
|:---|:---|:---|:---|
| `Brand Red` | `primary` | `#E82C27` | Primary brand color. |
| `Brand Red (Darker)` | `primary-alt` | `#C41F20` | Darker red for WCAG-compliant links. |
| `Brand Navy` | `secondary` | `#172134` | Deep navy for backgrounds and footer. |
| `Navy Light` | `secondary-accent` | `#1A3A5F` | Lighter navy for accents and hovers. |
| `White` | `base` | `#FFFFFF` | Primary background color. |
| `Tint` | `tertiary` | `#F0F0F0` | Secondary background / muted surfaces. |
| `Border Base` | `border-light` | `#DDDDDD` | Default border color. |
| `Foreground` | `main` | `#2c2c2c` | Primary body text. |
| `Muted Foreground` | `main-accent` | `#636375` | Secondary text, captions. |
| `Text Link Red` | `accent` | `#C41F20` | Body-size inline text links. |

## UI Presets (theme.json mapping)

| Name | Slug | Color | Usage |
|:---|:---|:---|:---|
| **Background** | `base` | `#FFFFFF` | Main page background |
| **Muted BG** | `tertiary` | `#F0F0F0` | Muted sections, card backgrounds |
| **Foreground** | `main` | `#2c2c2c` | Primary text |
| **Muted Text** | `main-accent` | `#636375` | Secondary text / captions |
| **Primary** | `primary` | `#E82C27` | Buttons, badges, display text |
| **Primary Alt** | `primary-alt` | `#C41F20` | Primary hover state |
| **Secondary** | `secondary` | `#172134` | Navy sections / Footer |
| **Secondary Alt** | `secondary-accent` | `#1A3A5F` | Navy hover state |
| **Border** | `border-light` | `#DDDDDD` | Default borders |
| **Link** | `accent` | `#C41F20` | Inline links (accessible) |

---

## Accessibility — Brand Red Contrast

### Solution: `accent` Token

The primary brand red `#E82C27` does not meet WCAG AA contrast for small text on white. The `accent` token (`#C41F20`) provides compliant contrast (~5.2:1) for inline links.

| Mode | Token | Value | On Background | Contrast Ratio | WCAG AA |
|:---|:---|:---|:---|:---:|:---:|
| Light | `accent` | `#C41F20` | `#FFFFFF` | ~5.2:1 | ✅ PASS |
| Dark | `accent` | `#F06560` | `#162233` | ~4.8:1 | ✅ PASS |

---

## WordPress Utility Classes

WordPress generates utility classes from `theme.json` color slugs:

- **Text**: `.has-{slug}-color` (e.g., `.has-primary-color`, `.has-main-accent-color`)
- **Background**: `.has-{slug}-background-color` (e.g., `.has-secondary-background-color`)

### Migration Reference

| Legacy Slug | New Slug |
|:---|:---|
| `brand-navy` | `secondary` |
| `brand-navy-light` | `secondary-accent` |
| `base-2` | `tertiary` |
| `base-3` | `border-light` |
| `contrast-2` | `main-accent` |
| `contrast` | `main` |
| `primary-hover` | `primary-alt` |
| `text-link-red` | `accent` |

---

## Dark Mode Implementation

Dark mode values are defined in `theme.json` style variations or via CSS custom properties in `theme.css`.

| Token | Light Value | Dark Value |
|:---|:---|:---|
| `base` | `#FFFFFF` | `#0F1923` |
| `main` | `#2c2c2c` | `#E8E8ED` |
| `main-accent` | `#636375` | `#95A3B1` |
| `accent` | `#C41F20` | `#F06560` |
| `tertiary` | `#F0F0F0` | `#162233` |
| `border-light` | `#DDDDDD` | `#1E3044` |
