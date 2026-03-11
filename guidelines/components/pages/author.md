# Author Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Author.tsx`
**WordPress target**: Template — `author.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Author profile page. Shows author avatar, bio, social links, and a grid of all their articles.

## 2. Route

`/author/:authorName`

## 3. Data Sources

- `getAllArticles()` from `/src/app/data/categoryArticles.ts` — filtered by author name

## 4. WordPress Mapping

Template — `author.html`. Uses `core/query` with `inherit: true` for author context.

## 5. Dependencies

SEO, PageContainer, ArticleLink, renderWithBrandItalics
