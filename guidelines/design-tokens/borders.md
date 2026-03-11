# Borders & Radii

**Last updated**: 2026-03-03
**Version**: 1.0

Border width and border radius tokens for Die Papier. Values are defined in both the React prototype (Tailwind CSS) and the WordPress FSE theme (theme.json `custom` settings). Border controls are fully enabled in the Site Editor via `settings.border`.

> **Cross-reference**: See Section 8 of `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` for the canonical token table.

---

## Border Widths

Die Papier uses **4 named border width presets** via `settings.custom.borderWidth` in theme.json.

| Preset slug | Name | Value | CSS Variable | Usage |
|:---:|:---|:---:|:---|:---|
| `0` | None | `0` | `--wp--custom--border-width--0` | Remove borders |
| `100` | Default | `1px` | `--wp--custom--border-width--100` | Cards, inputs, dividers |
| `200` | Thick | `2px` | `--wp--custom--border-width--200` | Active states, emphasis, button outlines |
| `300` | Accent | `4px` | `--wp--custom--border-width--300` | Blockquote left border (brand red) |

### Theme.json Source

```json
{
  "settings": {
    "custom": {
      "borderWidth": {
        "0": "0",
        "100": "1px",
        "200": "2px",
        "300": "4px"
      }
    }
  }
}
```

**Preset file**: `/wordpress-export/themes/die-papier-theme/styles/presets/borders.json`

---

## Border Radius

Die Papier uses **7 named border radius presets** via `settings.custom.borderRadius` in theme.json.

| Preset slug | Name | Value | Equivalent | CSS Variable | Usage |
|:---:|:---|:---:|:---:|:---|:---|
| `100` | 2XS | `0.125rem` | 2px | `--wp--custom--border-radius--100` | Subtle rounding |
| `200` | XS | `0.25rem` | 4px | `--wp--custom--border-radius--200` | Small elements, tags |
| `300` | Small | `0.375rem` | 6px | `--wp--custom--border-radius--300` | Inputs |
| `400` | Medium | `0.5rem` | 8px | `--wp--custom--border-radius--400` | Cards, buttons (default) |
| `500` | Large | `0.75rem` | 12px | `--wp--custom--border-radius--500` | Large cards, heroes |
| `600` | XL | `1rem` | 16px | `--wp--custom--border-radius--600` | Modals, large containers |
| `9999` | Full | `9999px` | pill | `--wp--custom--border-radius--9999` | Badges, avatars, pills |

### Theme.json Source

```json
{
  "settings": {
    "border": {
      "color": true,
      "radius": true,
      "style": true,
      "width": true
    },
    "custom": {
      "borderRadius": {
        "100": "0.125rem",
        "200": "0.25rem",
        "300": "0.375rem",
        "400": "0.5rem",
        "500": "0.75rem",
        "600": "1rem",
        "9999": "9999px"
      }
    }
  }
}
```

**Preset file**: `/wordpress-export/themes/die-papier-theme/styles/presets/radii.json`

---

## WordPress Usage

```html
<!-- Border width in block JSON attributes -->
"style": {
  "border": {
    "width": "var(--wp--custom--border-width--100)"
  }
}

<!-- Border radius in block JSON attributes -->
"style": {
  "border": {
    "radius": "var(--wp--custom--border-radius--400)"
  }
}

<!-- Border color using preset -->
"style": {
  "border": {
    "color": "var:preset|color|border-light"
  }
}
```

> **Note**: `borderWidth` and `borderRadius` are custom settings (not preset slugs), so they use the `var(--wp--custom--...)` syntax rather than `var:preset|...|...`.

---

## React / Tailwind Usage

| Token | Tailwind Class | CSS Variable |
|:------|:--------------|:-------------|
| `radius-sm` | `rounded-sm` (4px) | `--radius-sm` |
| `radius-md` | `rounded-md` (6px) | `--radius-md` |
| `radius-lg` | `rounded-lg` (8px) | `--radius` |
| `radius-xl` | `rounded-xl` (12px) | `--radius-xl` |
| `radius-full` | `rounded-full` (9999px) | -- |
| `border-default` | `border` (1px) | -- |
| `border-thick` | `border-2` (2px) | -- |
| `border-accent` | `border-l-4` (4px) | -- |

---

## Dark Mode Border Colours

| Light Class | Dark Override |
|:---|:---|
| `border-gray-200` | `dark:border-[#1E3044]` |
| `border-gray-100` | `dark:border-[#162233]` |
| `border-gray-300` | `dark:border-[#253D54]` |

---

## Usage Guidelines

- **Cards**: Use `border-default` (1px) with `radius-lg` (8px) as the standard card treatment.
- **Inputs & buttons**: Use `radius-md` (6px) for inputs, `radius-lg` (8px) for buttons.
- **Blockquotes**: Always use `border-accent` (4px) on the left side with `primary` colour (`#E82C27`).
- **Pill shapes**: Use `radius-full` (9999px) for badges, category pills, and avatar images.
- **Active/focus states**: Use `border-thick` (2px) for outline-style emphasis.
- **Anti-pattern**: Never use hardcoded `px` values for border radius in theme.json block styles -- always reference `var(--wp--custom--border-radius--{slug})`.

---

## Related Files

- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` -- Master token reference (Section 8)
- `/guidelines/design-tokens/ui-presets.md` -- Button/card styling with radii
- `/guidelines/design-tokens/colors.md` -- Border colour tokens
- `/wordpress-export/themes/die-papier-theme/styles/presets/borders.json` -- WP border width presets
- `/wordpress-export/themes/die-papier-theme/styles/presets/radii.json` -- WP border radius presets
