# Shadows

**Last updated**: 2026-03-06
**Version**: 1.1

Shadow presets for Die Papier. The WordPress theme defines **6 shadow presets** via `settings.shadow.presets` in theme.json, with `defaultPresets` disabled to enforce the custom scale. The React prototype uses standard Tailwind shadow utilities.

> **Cross-reference**: See Section 7 of `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` for the canonical token table.

---

## Shadow Scale

Die Papier uses a **6-step numeric shadow scale** (100-600) that maps to Tailwind's named shadow utilities. Default WordPress shadow presets are disabled.

| Preset slug | Name | CSS Value | Tailwind | CSS Variable | Usage |
|:---:|:---|:---|:---:|:---|:---|
| `100` | Subtle | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `shadow-sm` | `--wp--preset--shadow--100` | Buttons, inputs |
| `200` | Small | `0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px 0 rgb(0 0 0 / 0.06)` | `shadow` | `--wp--preset--shadow--200` | Cards at rest |
| `300` | Medium | `0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)` | `shadow-md` | `--wp--preset--shadow--300` | Hover states, dropdowns |
| `400` | Large | `0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)` | `shadow-lg` | `--wp--preset--shadow--400` | Modals, sticky headers |
| `500` | XL | `0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)` | `shadow-xl` | `--wp--preset--shadow--500` | Hero overlays |
| `600` | 2XL | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | `shadow-2xl` | `--wp--preset--shadow--600` | Full-screen effects |

### Theme.json Source

```json
{
  "settings": {
    "shadow": {
      "defaultPresets": false,
      "presets": [
        { "slug": "100", "name": "100 (Subtle)",  "shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
        { "slug": "200", "name": "200 (Small)",   "shadow": "0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px 0 rgb(0 0 0 / 0.06)" },
        { "slug": "300", "name": "300 (Medium)",   "shadow": "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)" },
        { "slug": "400", "name": "400 (Large)",    "shadow": "0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)" },
        { "slug": "500", "name": "500 (XL)",       "shadow": "0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)" },
        { "slug": "600", "name": "600 (2XL)",      "shadow": "0 25px 50px -12px rgb(0 0 0 / 0.25)" }
      ]
    }
  }
}
```

**Preset file**: `/wordpress-export/themes/die-papier-theme/styles/presets/shadows.json`

---

## WordPress Usage

```html
<!-- In block JSON attributes (preferred) -->
"style": {
  "shadow": "var:preset|shadow|300"
}

<!-- In inline CSS (theme.json styles) -->
"shadow": "var(--wp--preset--shadow--300)"
```

> **Important**: Always use the `var:preset|shadow|{slug}` syntax in block attributes, never hardcoded CSS shadow values. The preset validation in the Block Style Browser flags hardcoded values as warnings.

---

## React / Tailwind Usage

| Token | Tailwind Class | CSS Value |
|:------|:--------------|:----------|
| `shadow-sm` | `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `shadow` | `shadow` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| `shadow-md` | `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| `shadow-lg` | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)` |
| `shadow-xl` | `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| `shadow-2xl` | `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` |

---

## Dark Mode Shadows

Dark mode uses stronger shadows to create visual separation against dark backgrounds.

| Light Class | Dark Override |
|:---|:---|
| `shadow-sm` | `dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]` |
| `shadow-md` | `dark:shadow-[0_4px_6px_rgba(0,0,0,0.5)]` |
| Cards (general) | `dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)]` |

### Dark Shadow Token Scale (CSS Custom Properties)

Defined in `.dark` selector in `/src/styles/theme-dark.css`. These tokens use higher opacity values (0.3–0.5) because standard light-mode shadows are invisible on dark backgrounds.

| Token | CSS Variable | CSS Value | Equivalent Light Preset | Usage |
|:---:|:---|:---|:---:|:---|
| `dark-100` | `--shadow-dark-100` | `0 1px 2px rgba(0, 0, 0, 0.5)` | `--wp--preset--shadow--100` | Subtle — cards, panels |
| `dark-200` | `--shadow-dark-200` | `0 1px 4px rgba(0, 0, 0, 0.3)` | `--wp--preset--shadow--200` | Light — interactive cards |
| `dark-300` | `--shadow-dark-300` | `0 4px 12px rgba(0, 0, 0, 0.4)` | `--wp--preset--shadow--300` | Medium — card hover, dropdowns |
| `dark-400` | `--shadow-dark-400` | `0 10px 15px rgba(0, 0, 0, 0.5)` | `--wp--preset--shadow--400` | Large — modals, overlays |
| `dark-500` | `--shadow-dark-500` | `0 8px 24px rgba(0, 0, 0, 0.5)` | `--wp--preset--shadow--500` | XL — search overlay |
| `dark-600` | `--shadow-dark-600` | `0 10px 30px rgba(0, 0, 0, 0.4)` | `--wp--preset--shadow--600` | Hero — newsletter container |
| `dark-up` | `--shadow-dark-up` | `0 -4px 20px rgba(0, 0, 0, 0.4)` | _(no light equivalent)_ | Upward — cookie banner, bottom sheets |

### WordPress Preset Bridge (Dark Mode)

In dark mode, the `--wp--preset--shadow--{slug}` variables are overridden to use the dark token values. This means any WordPress block using `var:preset|shadow|300` automatically gets the stronger dark shadow without per-block overrides.

```css
/* In .dark selector (theme-dark.css) */
--wp--preset--shadow--100: var(--shadow-dark-100);
--wp--preset--shadow--200: var(--shadow-dark-200);
--wp--preset--shadow--300: var(--shadow-dark-300);
--wp--preset--shadow--400: var(--shadow-dark-400);
--wp--preset--shadow--500: var(--shadow-dark-500);
--wp--preset--shadow--600: var(--shadow-dark-600);
```

### Tailwind Usage (Dark Mode)

```html
<!-- Use dark shadow tokens via arbitrary values -->
<div class="shadow-sm dark:shadow-[var(--shadow-dark-100)]">

<!-- Or use the Tailwind dark: override pattern -->
<div class="shadow-sm dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
```

---

## Common Patterns

### Card Hover Lift

```html
<!-- React / Tailwind -->
<div class="shadow-sm hover:shadow-lg transition-shadow duration-300">

<!-- WordPress block style JSON -->
"styles": {
  "shadow": "var:preset|shadow|100"
}
```

### Sticky Header Shadow

```html
<!-- Applied via JS on scroll -->
<header class="shadow-none scroll-shadow:shadow-md transition-shadow duration-300">
```

---

## Usage Guidelines

- **Buttons & inputs**: Use `100` (Subtle) as the resting shadow.
- **Cards at rest**: Use `200` (Small) for default card elevation.
- **Hover states**: Transition from `200` to `400` for the standard hover lift effect.
- **Modals & overlays**: Use `500` (XL) or `600` (2XL) for full overlay depth.
- **Sticky headers**: Apply `300` (Medium) on scroll via JavaScript.
- **Dark mode**: Always pair light shadows with dark overrides -- dark backgrounds absorb light shadows.
- **Anti-pattern**: Never hardcode `box-shadow` CSS values in block styles. Always use `var:preset|shadow|{slug}`.

---

## Related Files

- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` -- Master token reference (Section 7)
- `/guidelines/design-tokens/ui-presets.md` -- Shadow usage in component presets (Section 3.3)
- `/wordpress-export/themes/die-papier-theme/styles/presets/shadows.json` -- WP shadow presets