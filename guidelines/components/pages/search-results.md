# Search Results

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/SearchResults.tsx`
**WordPress target**: Template — `search.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Search results page with debounced text search, category filter, result count, and paginated article grid with in-feed ads.

## 2. Route

`/soek?q={query}`

## 3. Data Sources

- Searches across all `CATEGORY_ARTICLES` from `/src/app/data/categoryArticles.ts`
- **UI strings**: `SEARCH_UI` from `/src/app/data/search.ts`
- **Categories**: `ARTICLE_CATEGORIES` from `/src/app/data/taxonomies.ts`

## 4. WordPress Mapping

Template — `search.html`. Uses native WP search + `core/search` + `core/query` with `inherit: true`.

## 5. Dependencies

SEO, PageContainer, ArticleLink, ImageWithFallback, useDebounce hook, ad components
