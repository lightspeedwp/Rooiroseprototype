# Template: {filename}.html

**Last updated**: YYYY-MM-DD
**Category**: Template — {type}
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/{filename}.html`
**React equivalent**: `{ComponentName}.tsx`

---

## 1. Purpose

{One paragraph describing what this template does and when WordPress resolves to it.}

**Route**: `/{url-path}`

## 2. Structure

```
header (template part)
+-- main
|   +-- breadcrumbs (template part)
|   +-- pattern: die-papier/{pattern-slug}
|   |   +-- {Block tree showing hierarchy}
|   +-- advads/gblock ({ad-slot-name})
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`
- {List any additional template parts}

## 4. Patterns Used

- `die-papier/{pattern-slug}` -- {description}
- {List all patterns referenced}

## 5. WP Hierarchy Position

`{this-template}.html` > `{fallback}.html` > `archive.html` > `index.html`

{Note whether this is auto-resolved or requires customTemplates registration.}

## 6. React Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| `{Component}` | `{wp-block/pattern}` |

## 7. Ad Slots

| Slot | Position | Format |
|------|----------|--------|
| `dp-{slot-name}` | {position} | {format} |

## 8. Related Files

- `/guidelines/components/templates/{related}.md`
- `/guidelines/components/patterns/{related}.md`
- `/wordpress-export/themes/die-papier-theme/templates/{filename}.html`
