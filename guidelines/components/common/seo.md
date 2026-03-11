# SEO & Route SEO Provider

**Last updated**: 2026-02-23
**Category**: Common (Meta)
**React source**: `/src/app/components/common/SEO.tsx` + `/src/app/components/common/RouteSEOProvider.tsx`
**WordPress target**: Yoast SEO plugin

---

## 1. Purpose

### `SEO` Component
Manages `<meta>` tags dynamically: `<title>`, description, keywords, Open Graph, Twitter Card, canonical URL, and article-specific schema. Sets `og:locale` to `af_ZA`. Also provides `DefaultSEO` (home page defaults) and `generateArticleStructuredData()` for JSON-LD `NewsArticle` schema.

### `RouteSEOProvider`
Invisible component that calls `useRouteSEO()` hook to apply centralised per-route meta tags. Rendered in `MainLayout`.

## 2. Props (SEO)

| Prop | Type | Default |
|:-----|:-----|:--------|
| `title` | `string?` | Appends ` \| Die Papier` |
| `description` | `string` | Default Afrikaans description |
| `keywords` | `string` | Default Afrikaans keywords |
| `image` | `string` | `/og-image.jpg` |
| `author` | `string?` | — |
| `publishedTime` | `string?` | — |
| `modifiedTime` | `string?` | — |
| `type` | `'website' \| 'article'` | `'website'` |
| `canonical` | `string?` | Auto from pathname |

## 3. WordPress Mapping

**Yoast SEO** handles all meta tags, canonical URLs, Open Graph, Twitter Cards, and structured data automatically. No custom component needed.

## 4. Dependencies

- **Hook**: `useRouteSEO()` from `/src/app/hooks/useRouteSEO.ts`
- **Consumed by**: `MainLayout.tsx` (RouteSEOProvider), individual page components (SEO)
