# Typography Implementation Guide

**Last updated**: 2026-03-02
**Version**: 2.0

This document defines **comprehensive typography guidelines** for all text elements across the Die Papier website, ensuring consistent font family usage (Inter and Roboto Serif only) and alignment with the WordPress FSE slug system.

---

## Font Family Rules (CRITICAL)

**Only two font families are permitted:**

1. **Inter** (`brand-sans`) — All UI elements, body text, labels, buttons, forms, navigation.
2. **Roboto Serif** (`brand-serif`) — All headings (H1–H4), article titles, section headings.

**NO system fonts, fallbacks, or other typefaces are permitted.**

---

## 1. Headings (Roboto Serif)

All headings use **Roboto Serif** with condensed width variation settings (`wdth: 64`).

| Level | Slug | Size (Desktop) | Line Height | Letter Spacing | FVS Settings |
|:---|:---|:---|:---|:---|:---|
| **H1** | `xxx-large` | 48px | 52px (~1.1x) | -0.24px | `'GRAD' -50, 'wdth' 64, 'opsz' 48` |
| **H2** | `xx-large` | 30px | 35px (~1.17x) | -0.24px | `'GRAD' -50, 'wdth' 64, 'opsz' 30` |
| **H3** | `x-large` | 24px | 28px (1.17x) | 0 | `'GRAD' 0, 'wdth' 64, 'opsz' 24` |
| **H4** | `large` | 20px | 28px (1.40x) | 0 | `'GRAD' 0, 'wdth' 64, 'opsz' 20` |

---

## 2. UI & Body Text (Inter)

All UI elements and body paragraphs use **Inter**.

| Role | Slug | Size | Line Height | Weight | Usage |
|:---|:---|:---|:---|:---|:---|
| **P1 / H5** | `medium` | 18px | 27px (1.5x) | 400 (P1) / 700 (H5) | Article body / Subheadings |
| **P2 / H6** | `base` | 16px | 24px (1.5x) | 400 (P2) / 600 (H6) | Standard body / UI labels |
| **P3** | `small` | 14px | 22px (1.57x) | 400 | Secondary body / Meta |
| **Micro** | `x-small` | 11px | 16px (1.45x) | 400 | Captions / Fine print |

---

## 3. Implementation Rules

### 3.1 WordPress Bridge Variables

In WordPress patterns or custom CSS, reference the bridge variables in `theme.css`:

- **Line Height**: `var(--wp--custom--line-height--{slug})`
- **Letter Spacing**: `var(--wp--custom--letter-spacing--{slug})`
- **Font Variation**: `var(--wp--custom--fvs--{slug})`

### 3.2 Explicit Font Families

Every component must explicitly declare its font family in React:
- `fontFamily: 'var(--font-inter)'`
- `fontFamily: 'var(--font-heading)'`

### 3.3 Tailwind Utilities

**DO NOT use Tailwind's font-size utilities** (`text-sm`, `text-lg`, etc.). Use the CSS custom properties instead:
- `fontSize: 'var(--text-p2)'`
- `lineHeight: 'var(--lh-p2)'`
