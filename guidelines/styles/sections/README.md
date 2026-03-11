# Section Style Guidelines

**Last updated**: 2026-03-04  
**Source**: `/wordpress-export/themes/die-papier-theme/styles/sections/`  
**Data file**: `/src/app/data/sectionStylesData.ts`  
**Dev tool**: `/ontwikkelaar/afdeling-style`

---

## Overview

Section styles are **block style variations** applied to `core/group`, `core/columns`, `core/column`, `core/stack`, and `core/grid` blocks. They define the visual treatment for full-width page sections (background color, text color, element overrides for buttons/links/headings).

Each section style is a single `.json` file in `/styles/sections/` that WordPress automatically discovers and merges into the global theme.json at runtime. **No companion CSS files are needed** — all styling is expressed declaratively in JSON.

---

## Active Section Styles (9)

| # | Slug | Label (AF) | Label (EN) | Category | Target Block |
|:--|:-----|:-----------|:-----------|:---------|:-------------|
| 1 | `section-white` | Wit afdeling | White Section | background | `core/group` |
| 2 | `section-muted` | Gedempte afdeling | Muted Section | background | `core/group` |
| 3 | `section-navy` | Marine-afdeling | Navy Section | background | `core/group` |
| 4 | `section-navy-light` | Marine-lig afdeling | Navy Light Section | background | `core/group` |
| 5 | `section-red` | Rooi afdeling | Red Section | background | `core/group` |
| 6 | `section-gradient-navy` | Gradient Marine | Gradient Navy | gradient | `core/group` |
| 7 | `section-hero-default` | Held-afdeling (Verstek) | Hero Section (Default) | component | `core/group` |
| 8 | `section-cover-hero` | Bedek-held | Cover Hero | component | `core/cover` |
| 9 | `section-faq` | Vrae-afdeling | FAQ Section | component | `core/group` |

---

## Categories

### Background (5 styles)
Solid background color with matching text and element overrides.
- [section-white.md](./section-white.md)
- [section-muted.md](./section-muted.md)
- [section-navy.md](./section-navy.md)
- [section-navy-light.md](./section-navy-light.md)
- [section-red.md](./section-red.md)

### Gradient (1 style)
CSS gradient backgrounds with dark-mode fallbacks.
- [section-gradient-navy.md](./section-gradient-navy.md)

### Component (3 styles)
Specialized section types with unique layout/spacing behavior.
- [section-hero-default.md](./section-hero-default.md)
- [section-cover-hero.md](./section-cover-hero.md)
- [section-faq.md](./section-faq.md)

---

## File Structure

```
wordpress-export/themes/die-papier-theme/styles/sections/
  section-white.json
  section-muted.json
  section-navy.json
  section-navy-light.json
  section-red.json
  section-gradient-navy.json
  section-hero-default.json
  section-cover-hero.json
  section-faq.json
```

---

## CSS Files

**None** — Section styles are pure theme.json v3 JSON files. No companion CSS files exist or are needed.

---

## Related Documentation

- [Section Styles Architecture](/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md) — Master architecture guide
- [Block Style Browser](/guidelines/styles/blocks/README.md) — Block-level style variations
- [Design System Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md) — Design tokens reference
- [Colors](/guidelines/design-tokens/colors.md) — Brand palette
