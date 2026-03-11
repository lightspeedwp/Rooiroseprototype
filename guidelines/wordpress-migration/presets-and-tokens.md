# Standardising Presets and Tokens in Block Themes

## *Single Source of Truth: A predictable, token-based system for **colours, typography, spacing, shadows, and borders** keeps design, editor UI, and front-end output aligned.*

**Last updated**: 2026-03-03

> **Cross-reference**: For actual token values (hex codes, clamp expressions, scales), see `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md`. This document covers WordPress preset **mechanics** — how presets map to CSS variables, slug naming rules, and JSON syntax.

---

- [1) How WordPress Presets Work](#1-how-wordpress-presets-work)
- [2) WordPress CSS Variable Reference (Namespaces)](#2-wordpress-css-variable-reference-namespaces)
- [3) Slug Rules (LightSpeed Standard)](#3-slug-rules-lightspeed-standard)
- [4) Colours (Semantic Roles + Prefixed Scales)](#4-colours-semantic-roles--prefixed-scales)
- [5) Typography](#5-typography)
- [6) Spacing](#6-spacing)
- [7) Shadows](#7-shadows)
- [8) Borders (Radius Presets + Width Tokens)](#8-borders-radius-presets--width-tokens)
- [9) Layout Width Variables (Content + Wide)](#9-layout-width-variables-content--wide)
- [10) Aspect Ratios](#10-aspect-ratios)
- [11) Implementation Checklist](#11-implementation-checklist)
- [12) References (for maintainers)](#12-references-for-maintainers)

---

This document defines:

- **Slug conventions** (with a bias to numeric-only slugs for size-like presets)
- **Recommended preset scales** (initial values you can ship)
- **WordPress-generated CSS custom properties** (the "WordPress variables" you can rely on)
- **How to reference presets** in `theme.json` and CSS

**Important note on "numeric slugs for all presets"**

Numeric-only slugs are ideal for *size-like* presets (spacing, font sizes, shadows, radii, border widths).

For **colours**, numeric-only slugs become ambiguous/collide (you typically need *multiple* scales: semantic roles + neutrals + accents). For colours, use **semantic slugs** for roles (`base`, `contrast`, `primary`, `cta`) and a **prefixed numeric scale** for ramps (`neutral-100...900`, `accent-100...900`).

If you truly require numeric-only for colour *values*, use `settings.custom` tokens (not editor palette presets) and keep the editor palette semantic.

---

## 1) How WordPress Presets Work

### 1.1 Presets vs Custom Tokens

- **Presets** (registered under `settings.*`) can appear in the editor UI and often generate CSS variables under `--wp--preset--...`.
- **Custom tokens** (registered under `settings.custom`) do **not** automatically create UI pickers, but *do* generate stable CSS variables under `--wp--custom--...`.

### 1.2 Referencing Presets in `theme.json`

Use:

- `var:preset|{feature}|{slug}`

Examples:

- `var:preset|color|primary`
- `var:preset|font-size|200`
- `var:preset|spacing|20`
- `var:preset|shadow|300`
- `var:preset|border-radius|400`

### 1.3 Referencing Presets in CSS

Use the generated CSS variables directly:

- `var(--wp--preset--{feature}--{slug})`

Examples:

- `var(--wp--preset--color--primary)`
- `var(--wp--preset--font-size--200)`
- `var(--wp--preset--spacing--20)`
- `var(--wp--preset--shadow--300)`
- `var(--wp--preset--border-radius--400)`

---

## 2) WordPress CSS Variable Reference (Namespaces)

This is the canonical "what WordPress generates" reference for presets and key global style values.

### 2.1 Preset Variables (`--wp--preset--...`)

| Preset type | `theme.json` setting path | CSS variable pattern | Notes |
| :--- | :--- | :--- | :--- |
| Colours | `settings.color.palette[]` | `--wp--preset--color--{slug}` | Also generates utility classes (see Colours section). |
| Gradients | `settings.color.gradients[]` | `--wp--preset--gradient--{slug}` | Used by gradient picker. |
| Duotone | `settings.color.duotone[]` | *(no CSS variables generated)* | Presets exist for UI; no custom properties. |
| Font families | `settings.typography.fontFamilies[]` | `--wp--preset--font-family--{slug}` | Used by typography controls. |
| Font sizes | `settings.typography.fontSizes[]` | `--wp--preset--font-size--{slug}` | Numeric-only slugs recommended. |
| Spacing sizes | `settings.spacing.spacingSizes[]` | `--wp--preset--spacing--{slug}` | Numeric-only slugs recommended. |
| Shadows | `settings.shadow.presets[]` | `--wp--preset--shadow--{slug}` | Numeric-only slugs recommended. |
| Border radius sizes | `settings.border.radiusSizes[]` | `--wp--preset--border-radius--{slug}` | Numeric-only slugs recommended. |
| Aspect ratios | `settings.dimensions.aspectRatios[]` | `--wp--preset--aspect-ratio--{slug}` | Generated in newer WP/theme.json v3 flows. |
| Dimension sizes | `settings.dimensions.dimensionSizes[]` | `--wp--preset--dimension--{slug}` | Less commonly used; optional. |

### 2.2 Custom Token Variables (`--wp--custom--...`)

| Token type | `theme.json` path | CSS variable pattern | Notes |
| :--- | :--- | :--- | :--- |
| Custom tokens | `settings.custom` | `--wp--custom--{kebab-case-path}` | Great for border widths, z-index, motion, etc. Nested objects become `--wp--custom--a--b--c`. |

Example:

```json
"custom": {
  "borderWidth": {
    "100": "1px",
    "200": "2px"
  }
}
```

Generated:

- `--wp--custom--border-width--100: 1px;`
- `--wp--custom--border-width--200: 2px;`

### 2.3 Style Output Variables (`--wp--style--...`)

| Style variable | Origin | Notes |
| :--- | :--- | :--- |
| `--wp--style--block-gap` | `styles.spacing.blockGap` | Controls spacing between inner blocks for layout-enabled containers. |
| `--wp--style--global--content-size` | `settings.layout.contentSize` | Used by constrained layouts to define content width. |
| `--wp--style--global--wide-size` | `settings.layout.wideSize` | Used for wide-aligned blocks in constrained layouts. |

---

## 3) Slug Rules (LightSpeed Standard)

### 3.1 General Rules

- **Use numeric-only slugs** for *size-like* presets:
  - spacing sizes, font sizes, shadows, border radius sizes, and tokenised border widths.
- **Keep slugs stable** forever; change *values*, not *slugs*.
- **Avoid redundant prefixes** in slugs:
  - `200` -> `--wp--preset--font-size--200`
  - `font-size-200` -> `--wp--preset--font-size--font-size-200`

### 3.2 Recommended Labels (shared scale)

Use this label set wherever a "bigger/smaller" scale is needed:

| Slug | Label |
| ---: | :--- |
| 100 | Tiny |
| 200 | Base |
| 300 | Small |
| 400 | Medium |
| 500 | Large |
| 600 | X-Large |
| 700 | Huge |
| 800 | Gigantic |
| 900 | Colossal |

For **shadows**, ship **100-600** initially to avoid overwhelming editors; reserve **700-900** for later.

---

## 4) Colours (Semantic Roles + Prefixed Scales)

### 4.1 Slug Conventions

Colours should remain **semantic** to keep intent clear and avoid collisions:

- Semantic roles: `base`, `contrast`, `primary`, `brand`, `cta`, `primary-light`, `primary-dark`
- Scales: `neutral-100...neutral-900`, `accent-100...accent-900`

### 4.2 Recommended Colour Structure

**Core semantic**

- `base` -> backgrounds, surfaces
- `contrast` -> text
- `primary` -> primary UI/brand
- `brand` -> identity moments (can mirror `primary`)
- `cta` -> conversion elements
- `primary-light` / `primary-dark` -> interaction states

**Neutral ramp**

- `neutral-100...900` for UI foundations

**Accent ramp**

- `accent-100...900` for branded accents/utility hues

### 4.3 Example `theme.json` (Colours)

```json
{
  "settings": {
    "color": {
      "defaultPalette": false,
      "palette": [
        { "slug": "base",     "name": "Base",     "color": "#FFFFFF" },
        { "slug": "contrast", "name": "Contrast", "color": "#111111" },
        { "slug": "primary",  "name": "Primary",  "color": "#0A84FF" },
        { "slug": "brand",    "name": "Brand",    "color": "#0A84FF" },
        { "slug": "cta",      "name": "Call to Action", "color": "#0066CC" },
        { "slug": "cta-hover","name": "Call to Action Hover", "color": "#0055AA" },
        { "slug": "neutral-100", "name": "Neutral 100", "color": "#F9FAFB" },
        { "slug": "neutral-900", "name": "Neutral 900", "color": "#111111" },
        { "slug": "accent-100", "name": "Accent 100", "color": "#0A84FF" },
        { "slug": "accent-900", "name": "Accent 900", "color": "#FFDCD2" }
      ]
    }
  }
}
```

### 4.4 Generated Variables

For each colour slug `{slug}`:

- `--wp--preset--color--{slug}`

Examples:

- `--wp--preset--color--base`
- `--wp--preset--color--neutral-100`

### 4.5 Utility Classes (Editor + Front-end)

WordPress commonly generates helper classes for palette entries, such as:

- `.has-{slug}-color`
- `.has-{slug}-background-color`
- `.has-{slug}-border-color`

(Exact output depends on block supports and context, but the slug-based pattern is the key convention.)

### 4.6 Usage Examples

In `theme.json`:

```json
"styles": {
  "color": {
    "background": "var:preset|color|base",
    "text": "var:preset|color|contrast"
  }
}
```

In CSS:

```css
color: var(--wp--preset--color--contrast);
background: var(--wp--preset--color--base);
```

---

## 5) Typography

### 5.1 Font Families (semantic slugs)

Use semantic slugs for font families (they are not "sizes"):

- `brand-sans`, `brand-serif`, `brand-mono`

**Generated variable:**

- `--wp--preset--font-family--{slug}`

### 5.2 Font Sizes (numeric-only slugs)

Use numeric-only slugs to produce clean variables:

- `--wp--preset--font-size--100`, `--wp--preset--font-size--200`, ...

#### Recommended Scale (multiples of 8px)

| Slug | Label | px | rem (16px base) |
| ---: | :--- | ---: | ---: |
| 100 | Tiny | 12px | 0.75rem |
| 200 | Base | 16px | 1rem |
| 300 | Small | 20px | 1.25rem |
| 400 | Medium | 24px | 1.5rem |
| 500 | Large | 32px | 2rem |
| 600 | X-Large | 40px | 2.5rem |
| 700 | Huge | 48px | 3rem |
| 800 | Gigantic | 64px | 4rem |
| 900 | Colossal | 80px | 5rem |

### 5.3 Example `theme.json` (Typography)

```json
{
  "settings": {
    "typography": {
      "fontFamilies": [
        { "slug": "brand-sans", "name": "Brand Sans", "fontFamily": "Mona Sans, sans-serif" },
        { "slug": "brand-serif", "name": "Brand Serif", "fontFamily": "Literata, serif" }
      ],
      "fontSizes": [
        { "slug": "100", "name": "Tiny", "size": "0.75rem" },
        { "slug": "200", "name": "Base", "size": "1rem" },
        { "slug": "300", "name": "Small", "size": "1.25rem" },
        { "slug": "400", "name": "Medium", "size": "1.5rem" },
        { "slug": "500", "name": "Large", "size": "2rem" },
        { "slug": "600", "name": "X-Large", "size": "2.5rem" },
        { "slug": "700", "name": "Huge", "size": "3rem" },
        { "slug": "800", "name": "Gigantic", "size": "4rem" },
        { "slug": "900", "name": "Colossal", "size": "5rem" }
      ]
    }
  }
}
```

### 5.4 Generated Variables

- `--wp--preset--font-family--brand-sans`
- `--wp--preset--font-size--200`
- etc.

---

## 6) Spacing

### 6.1 Slug Conventions

Spacing is the strongest candidate for numeric-only slugs:

- `10`, `20`, `30`, ... `100`

**Generated variable:**

- `--wp--preset--spacing--{slug}`

### 6.2 Recommended Scale (extend WP defaults)

WP defaults often use `10...60`. Extend upward for layout needs:

| Slug | Label | px | rem (16px base) |
| ---: | :--- | :--- | :--- |
| 5 | XXS | 5px | 0.325rem |
| 10 | XS | 10px | 0.625rem |
| 20 | S | 20px | 1.25rem |
| 30 | M | 30px | 1.875rem |
| 40 | L | 40px | 2.5rem |
| 50 | XL | 50px | 3.125rem |
| 60 | XXL | 60px | 3.5rem |
| 70 | XXXL | 70px | 3.75rem |
| 80 | XXXXL | 80px | 4rem |
| 90 | Giant | 90px | 4.5rem |
| 100 | Colossal | 100px | 5rem |

### 6.3 Example `theme.json` (Spacing Sizes)

Use `spacingSizes` when you want explicit values:

```json
{
  "settings": {
    "spacing": {
      "spacingSizes": [
        { "slug": "10", "name": "10px", "size": "0.625rem" },
        { "slug": "20", "name": "20px", "size": "1.25rem" },
        { "slug": "40", "name": "40px", "size": "2.5rem" },
        { "slug": "100", "name": "80px", "size": "5rem" }
      ]
    }
  }
}
```

### 6.4 Generated Variables

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--40`
- etc.

### 6.5 `blockGap` Variable (Layout Spacing)

If you set:

```json
"styles": {
  "spacing": {
    "blockGap": "1.5rem"
  }
}
```

WordPress outputs:

- `--wp--style--block-gap: 1.5rem;`

---

## 7) Shadows

### 7.1 Slug Conventions (numeric-only)

Use numeric-only slugs for shadow "elevation" steps:

- Start with **100-600** (tight editor UX)
- Reserve **700-900** for future

**Generated variable:**

- `--wp--preset--shadow--{slug}`

### 7.2 Recommended Initial Scale (100-600)

| Slug | Label | Intent |
| ---: | :--- | :--- |
| 100 | Tiny | subtle lift (chips, inputs) |
| 200 | Base | default cards |
| 300 | Small | raised cards / dropdowns |
| 400 | Medium | modals / sticky UI |
| 500 | Large | high emphasis |
| 600 | X-Large | hero overlays / "floating" |

### 7.3 Example `theme.json` (Shadows)

```json
{
  "settings": {
    "shadow": {
      "defaultPresets": false,
      "presets": [
        { "slug": "100", "name": "Tiny",    "shadow": "0 1px 2px 0 rgb(0 0 0 / 0.06)" },
        { "slug": "200", "name": "Base",    "shadow": "0 1px 3px 0 rgb(0 0 0 / 0.10)" },
        { "slug": "300", "name": "Small",   "shadow": "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)" },
        { "slug": "400", "name": "Medium",  "shadow": "0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)" },
        { "slug": "500", "name": "Large",   "shadow": "0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)" },
        { "slug": "600", "name": "X-Large", "shadow": "0 25px 50px -12px rgb(0 0 0 / 0.25)" }
      ]
    }
  }
}
```

### 7.4 Generated Variables

- `--wp--preset--shadow--100`
- `--wp--preset--shadow--600`

---

## 8) Borders (Radius Presets + Width Tokens)

Borders are split across:

- **Radius**: supports **presets** (`radiusSizes`) -> `--wp--preset--border-radius--...`
- **Width**: UI exists, but **no preset list** -> use `settings.custom` tokens for consistency
- **Colour**: use palette presets (`--wp--preset--color--...`)

### 8.1 Border Radius Presets (numeric-only)

Border radius size presets are available in newer WordPress versions (notably WP 6.9+).

**Generated variable:**

- `--wp--preset--border-radius--{slug}`

#### Recommended Scale (0 + 100-900)

| Slug | Label | Suggested value |
| ---: | :--- | :--- |
| 0 | None | 0 |
| 100 | Tiny | 0.125rem |
| 200 | Base | 0.25rem |
| 300 | Small | 0.375rem |
| 400 | Medium | 0.5rem |
| 500 | Large | 0.75rem |
| 600 | X-Large | 1rem |
| 700 | Huge | 1.5rem |
| 800 | Gigantic | 2rem |
| 900 | Colossal | 9999px (pill/full) |

#### Example `theme.json` (Radius)

```json
{
  "settings": {
    "border": {
      "radius": true,
      "radiusSizes": [
        { "slug": "0",   "name": "None",     "size": "0" },
        { "slug": "200", "name": "Base",     "size": "0.25rem" },
        { "slug": "400", "name": "Medium",   "size": "0.5rem" },
        { "slug": "900", "name": "Colossal", "size": "9999px" }
      ]
    }
  }
}
```

### 8.2 Border Width Tokens (numeric-only via `settings.custom`)

Because there is no `border.widthSizes` preset list, define widths as **custom tokens**:

**Generated variable:**

- `--wp--custom--border-width--{slug}`

#### Recommended Width Scale

| Slug | Label | Suggested value |
| ---: | :--- | :--- |
| 0 | None | 0 |
| 100 | Base | 1px |
| 200 | Small | 2px |
| 300 | Medium | 4px |
| 400 | Large | 8px |

#### Example `theme.json` (Border Width Tokens)

```json
{
  "settings": {
    "custom": {
      "borderWidth": {
        "0": "0",
        "100": "1px",
        "200": "2px",
        "300": "4px",
        "400": "8px"
      }
    }
  }
}
```

Usage in CSS:

```css
border-width: var(--wp--custom--border-width--200);
```

### 8.3 Border Colour

Use your existing colour palette and reference:

- `var(--wp--preset--color--neutral-300)` etc.

---

## 9) Layout Width Variables (Content + Wide)

If you set:

```json
{
  "settings": {
    "layout": {
      "contentSize": "40rem",
      "wideSize": "64rem"
    }
  }
}
```

WordPress outputs:

- `--wp--style--global--content-size: 40rem;`
- `--wp--style--global--wide-size: 64rem;`

These are used by constrained layouts (e.g. `.is-layout-constrained`) to control alignment widths.

---

## 10) Aspect Ratios

Theme.json implementation:

```json
{
  "settings": {
    "dimensions": {
      "aspectRatio": true,
      "defaultAspectRatios": true,
      "aspectRatios": [
        {
          "name": "Extra Wide - 2:1",
          "slug": "2-1",
          "ratio": "2/1"
        },
        {
          "name": "Cinema - 21:9",
          "slug": "21-9",
          "ratio": "21/9"
        }
      ]
    }
  }
}
```

To add only "custom" (specified) aspect ratios, set `defaultAspectRatios` to `false` and define all required aspect ratios. To include the WordPress defaults and only add new ones, set `defaultAspectRatios` to `true` and define only the additions.

WordPress outputs:

- `--wp--preset--aspect-ratio--2-1`
- `--wp--preset--aspect-ratio--21-9`

---

## 11) Implementation Checklist

- [ ] Use **numeric-only slugs** for font sizes, spacing sizes, shadows, border radius sizes, and custom border widths.
- [ ] Keep **semantic slugs** for core colour roles; use prefixed numeric ramps for neutrals/accents.
- [ ] Ensure all numeric slugs are **strings** in JSON (quoted).
- [ ] Disable defaults where you want strict curation (e.g. `shadow.defaultPresets: false`, `color.defaultPalette: false`).
- [ ] Document the mapping between Figma tokens and `theme.json` slugs (same naming + same scale).
- [ ] Treat `settings.custom` as your home for tokens WordPress does not yet support as UI presets (border widths, z-index, motion, etc.).

---

## 12) References (for maintainers)

- WordPress Developer Resources -- Global Settings & Styles (`theme.json`). [https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/)
- WordPress Developer Resources -- Using Presets. [https://developer.wordpress.org/themes/global-settings-and-styles/styles/using-presets/](https://developer.wordpress.org/themes/global-settings-and-styles/styles/using-presets/)
- WordPress Developer Resources -- Border settings. [https://developer.wordpress.org/themes/global-settings-and-styles/settings/border/](https://developer.wordpress.org/themes/global-settings-and-styles/settings/border/)
- WordPress Developer Blog -- Using the box shadow feature for themes. [https://developer.wordpress.org/news/2023/01/using-the-box-shadow-feature-for-themes/](https://developer.wordpress.org/news/2023/01/using-the-box-shadow-feature-for-themes/)
- WordPress Developer Blog -- Border radius size presets (WP 6.9+). [https://developer.wordpress.org/news/2025/09/border-radius-size-presets-in-wordpress-6-9/](https://developer.wordpress.org/news/2025/09/border-radius-size-presets-in-wordpress-6-9/)
- WordPress Developer Blog -- Adding and using custom settings in `theme.json`. [https://developer.wordpress.org/news/2023/08/adding-and-using-custom-settings-in-theme-json/](https://developer.wordpress.org/news/2023/08/adding-and-using-custom-settings-in-theme-json/)
- Make WordPress Core -- Theme.json version 3 (example output variables). [https://make.wordpress.org/core/2024/06/19/theme-json-version-3/](https://make.wordpress.org/core/2024/06/19/theme-json-version-3/)
- WordPress Code Reference -- `WP_Theme_JSON` (global content/wide variables in output). [https://developer.wordpress.org/reference/classes/wp_theme_json/](https://developer.wordpress.org/reference/classes/wp_theme_json/)

**Last updated**: 2026-03-02
**Version**: 1.0