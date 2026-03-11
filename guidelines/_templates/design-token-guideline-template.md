# {Token Category Name}

**Last updated**: YYYY-MM-DD
**Version**: 1.0

{Brief overview of this token category and its role in the design system.}

---

## Token Table

| Preset slug | Name | Value | CSS Variable |
|:---:|:---|:---|:---|
| `{slug}` | {Name} | {value} | `--wp--preset--{type}--{slug}` |

## WordPress Usage

```html
<!-- In block JSON attributes -->
"{attributeName}": "var:preset|{type}|{slug}"

<!-- In inline CSS (theme.json styles) -->
"var(--wp--preset--{type}--{slug})"
```

## React / Tailwind Usage

| Token | Tailwind Class | CSS Variable |
|:------|:--------------|:-------------|
| `{slug}` | `{tailwind-class}` | `var(--dp-{token})` |

## Usage Guidelines

- {When to use each token value}
- {Common patterns and combinations}
- {Anti-patterns to avoid}

## Related Files

- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` -- Master token reference
- `/guidelines/design-tokens/{related}.md`
- `/wordpress-export/themes/die-papier-theme/styles/presets/{preset-file}.json`
