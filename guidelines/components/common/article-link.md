# Article Link

**Last updated**: 2026-02-23
**Category**: Common (Utility)
**React source**: `/src/app/components/common/ArticleLink.tsx`
**WordPress target**: Not applicable — WordPress uses `get_permalink()` natively

---

## 1. Purpose

A wrapper around `<Link>` that generates article URLs from `id` + `title` via `generateArticleSlug()`. Produces URLs in the format `/artikel/{id}-{slugified-title}`.

## 2. Props

| Prop | Type | Default |
|:-----|:-----|:--------|
| `id` | `number` | — (required) |
| `title` | `string` | — (required) |
| `className` | `string?` | `undefined` |
| `children` | `ReactNode` | — (required) |

## 3. WordPress Mapping

Not needed — WordPress generates permalinks natively via `get_permalink()`. The slug structure is set in Settings → Permalinks.

## 4. Dependencies

- **Utility**: `generateArticleSlug()` from `/src/app/utils/slugify.ts`
- **Consumed by**: `Hero.tsx`, `HeroSlider.tsx`, `RelatedContent.tsx`
