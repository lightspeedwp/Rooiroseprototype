# Template: front-page.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/front-page.html`
**React equivalent**: `Home.tsx`

---

## 1. Purpose

Homepage template. Loads the `die-papier/page-home` full-page pattern containing all homepage sections.

## 2. Structure

```
header (template part)
└─ main (constrained)
   └─ pattern: die-papier/page-home
footer (template part)
```

## 3. Template Parts Used

- `header`
- `footer`

## 4. Patterns Used

- `die-papier/page-home` — contains hero slider, feature grid, category sections, sidebar, multimedia, obituaries, events, archive, newsletter CTA

## 5. Layout

- Type: `constrained`
- No explicit `contentSize` (inherits from theme.json)
