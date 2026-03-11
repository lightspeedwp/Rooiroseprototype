# Tag Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/TagArchive.tsx`
**WordPress target**: Template — `tag.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Tag/topic archive page showing articles tagged with a specific topic (e.g., "Politiek", "Rugby").

## 2. Route

`/onderwerp/:tagSlug`

## 3. Data Sources

- Articles filtered by tag from `/src/app/data/categoryArticles.ts`

## 4. WordPress Mapping

Template — `tag.html`. Uses `core/query` with `inherit: true` for tag context.

## 5. Dependencies

SEO, PageContainer, ArticleLink, ImageWithFallback
