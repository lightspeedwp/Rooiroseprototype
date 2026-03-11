# [Page Name]

**Last updated**: 2026-03-02
**Version**: 1.0
**Template**: `/guidelines/_templates/page-guideline-template.md`
**Purpose**: _[One sentence: what this page displays and its role in the site.]_

---

## Route Mapping

<!-- React route and WordPress template/pattern equivalents. -->

| Layer | Path / File |
|---|---|
| React route | `/route-path` |
| WP template | `/wordpress-export/themes/die-papier-theme/templates/page-slug.html` |
| WP pattern | `/wordpress-export/themes/die-papier-theme/patterns/page/page-slug.php` |

---

## Section Composition

<!-- Top-to-bottom breakdown of the page sections. -->

1. **Hero** — _[pattern slug or template part]_
2. **Content section** — _[description, section style applied]_
3. **CTA** — _[pattern slug]_
4. **FAQ** — _[Yoast FAQ block, section style]_
5. **Newsletter CTA** — _[pattern slug]_

---

## React Implementation

- **Page component**: `/src/app/pages/...`
- **Key sub-components**: _[list with paths]_
- **Data source**: _[e.g., "Mock data from `/src/app/data/...`"]_

---

## WordPress Implementation

- **Template**: Uses `page-slug.html` which loads pattern `die-papier/page-slug`
- **Spacing architecture**: _[e.g., "Main content blockGap: spacing|80, child sections use spacing|40"]_
- **Section styles used**: _[list of `is-style-section-*` applied]_

---

## SEO & Meta

<!-- Yoast SEO configuration for this page. -->

- **Title template**: _[e.g., "%%title%% - Die Papier"]_
- **Schema type**: _[e.g., "WebPage", "FAQPage"]_
- **Breadcrumb trail**: _[e.g., "Tuis > Oor Ons"]_

---

## Content (Afrikaans)

<!-- Exact production strings. Do NOT paraphrase. -->

- Page title: _[exact string]_
- Meta description: _[exact string]_
- Key headings: _[exact strings]_

---

## Related Files

<!-- Absolute repo paths only. -->

- `/wordpress-export/themes/die-papier-theme/templates/...`
- `/wordpress-export/themes/die-papier-theme/patterns/page/...`
- `/src/app/pages/...`
- `/guidelines/site-structure/sitemap.md`