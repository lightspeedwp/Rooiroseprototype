# [Template Part Name]

**Last updated**: 2026-03-02
**Version**: 1.0
**Template**: `/guidelines/_templates/template-part-guideline-template.md`
**Purpose**: _[One sentence: what site region this part renders and where it's reused.]_

---

## WordPress Part

<!-- Part registration and usage details. -->

- **Part file**: `/wordpress-export/themes/die-papier-theme/parts/part-name.html`
- **Area**: _[`header` | `footer` | `sidebar` | `uncategorized`]_
- **Used in templates**: _[list which templates include this part]_

### Patterns Injected

<!-- Which patterns does this part load? -->

| Order | Pattern Slug | Purpose |
|---|---|---|
| 1 | `die-papier/header` | Main header layout |

### Block Composition

<!-- Top-level block structure within this part. -->

1. `core/group` (wrapper)
   - `core/site-title`
   - `core/navigation`
   - `dp/mini-cart`

---

## React Reference

<!-- The equivalent React component. -->

- **Component path**: `/src/app/components/...`
- **Parity notes**: _[what differs between React and WP versions]_

---

## Accessibility + Semantic Notes

<!-- Landmark roles, ARIA attributes, keyboard navigation. -->

- **HTML landmark**: _[e.g., `<header>`, `<footer>`, `<nav>`]_
- **ARIA role**: _[e.g., `role="banner"`, `role="contentinfo"`]_
- **Keyboard behaviour**: _[e.g., "Skip-to-content link targets main content area"]_

---

## Spacing Rules

<!-- How spacing is handled within this part. -->

- **Internal blockGap**: _[e.g., "spacing|40"]_
- **Padding**: _[e.g., "padding-left/right: spacing|50"]_

---

## Related Files

<!-- Absolute repo paths only. -->

- `/wordpress-export/themes/die-papier-theme/parts/...`
- `/wordpress-export/themes/die-papier-theme/templates/...`
- `/guidelines/components/parts/...`
- `/src/app/components/...`