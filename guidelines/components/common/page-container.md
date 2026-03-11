# Page Container

**Last updated**: 2026-02-23
**Category**: Common (Layout Helper)
**React source**: `/src/app/components/common/PageContainer.tsx`
**WordPress target**: `.alignwide` class in theme CSS + `core/group` with constrained layout

---

## 1. Purpose

A standardised wrapper for page content that provides the `.alignwide` container (1440px max-width, fluid padding), optional `<Breadcrumbs>`, and `pt-8` spacing between breadcrumbs and content. Used by most static pages.

## 2. Props

| Prop | Type | Default |
|:-----|:-----|:--------|
| `breadcrumbs` | `BreadcrumbItem[]?` | — (optional) |
| `children` | `ReactNode` | — (required) |
| `className` | `string` | `""` |
| `noPadding` | `boolean` | `false` (adds `pt-8` between breadcrumbs and content) |

## 3. WordPress Mapping

In WordPress, the `.alignwide` constraint is built into `theme.json`:
```json
{ "layout": { "contentSize": "800px", "wideSize": "1280px" } }
```
And breadcrumbs are a separate template part inserted before the content group. The `pt-8` spacing is applied via block spacing settings.

## 4. Dependencies

- **Sub-components**: `Breadcrumbs` (part)
- **Consumed by**: `About.tsx`, `Contact.tsx`, `Team.tsx`, `FAQPage.tsx`, `Advertise.tsx`, `Sitemap.tsx`, `Policies.tsx`, `Events.tsx`, and most static pages
