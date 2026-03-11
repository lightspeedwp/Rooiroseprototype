# Template: category-sake.html

**Last updated**: 2026-03-03
**Category**: Template — Dedicated Category Archive
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/category-sake.html`
**React equivalent**: `Category.tsx` (`categoryName="Sake"`)

---

## 1. Purpose

Dedicated archive template for the **Sake** (Business) category. Overrides the generic `category.html` template. This is a **premium category** — ad components receive a `premium` flag for higher-value ad slots.

**Category Route**: `/sake`
**Category Title**: Sake
**Category Subheading**: "Alle verwikkelings op die sakefront wat vir jou saak maak."

## 2. Structure

```
header (template part)
└─ main
   ├─ breadcrumbs (template part)
   └─ pattern: die-papier/archive-category-sake
      ├─ Category Header (section-hero-default)
      │  ├─ query-title (archive, h1, centered)
      │  └─ paragraph (subheading, centered)
      ├─ Hero Section (featured post cover block)
      ├─ Tag Filter Section (muted)
      │  └─ buttons (is-style-filter-pill)
      │     ├─ "Alles" → /sake
      │     ├─ "Ekonomie" → /onderwerp/ekonomie
      │     ├─ "Landbou" → /onderwerp/landbou
      │     ├─ "Geldsake" → /onderwerp/geldsake
      │     ├─ "Markte" → /onderwerp/markte
      │     └─ "Maatskappye" → /onderwerp/maatskappye
      ├─ Content Area (70/30 columns)
      │  ├─ column (66.66%) — query + pagination + in-feed ad
      │  └─ column (33.33%) — sidebar template part
      ├─ advads/gblock (dp-archive-footer-leaderboard)
      └─ pattern: section-newsletter-cta
footer (template part)
```

## 3. Canonical Tag List

| Tag | URL |
|-----|-----|
| Ekonomie | `/onderwerp/ekonomie` |
| Landbou | `/onderwerp/landbou` |
| Geldsake | `/onderwerp/geldsake` |
| Markte | `/onderwerp/markte` |
| Maatskappye | `/onderwerp/maatskappye` |

## 4. Ad Slots

Same as Nuus template. Premium category flag may trigger higher-value GAM line items.

## 5. WP Hierarchy Position

`category-sake.html` > `category.html` > `archive.html` > `index.html`

## 6. Related Files

- `/guidelines/components/templates/category-nuus.md` — Sibling template (canonical reference for full structure details)
- `/wordpress-export/themes/die-papier-theme/patterns/archive/archive-category-sake.php`
