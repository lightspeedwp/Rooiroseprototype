# Skeletons

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/Skeletons.tsx`
**WordPress target**: Not applicable — WordPress renders full HTML server-side

---

## 1. Purpose

A collection of loading placeholder (skeleton) components used as `Suspense` fallbacks throughout the site. Provides visual loading states for: article cards, hero articles, sidebar items, category grids, article content, search results, e-edition cards, newsletter previews, table rows, list items, author profiles, inline spinners, and full-page loading.

## 2. Skeleton Components

| Export | Used For | Key Dimensions |
|:-------|:---------|:---------------|
| `ArticleCardSkeleton` | Category/archive pages | 16:10 image + 3 text lines |
| `HeroArticleSkeleton` | Homepage hero | 16:9 image + large text lines |
| `SidebarArticleSkeleton` | News flash sidebar | 3 text lines only |
| `CategoryGridSkeleton` | Category page (N cards) | 1-2-3 col grid of `ArticleCardSkeleton` |
| `ArticleContentSkeleton` | Single article page | Breadcrumbs + title + meta + image + body |
| `SearchResultSkeleton` | Search results | Text lines, no image |
| `EEditionCardSkeleton` | E-editions page | 3:4 image + 2 text lines + button |
| `NewsletterSkeleton` | Newsletter archive | Image + text + button |
| `TableRowSkeleton` | My Account tables | N columns of grey bars |
| `ListItemSkeleton` | Generic list loading | Circle + 2 text lines |
| `AuthorProfileSkeleton` | Author page | Circle avatar + bio text |
| `LoadingSpinner` | Inline loading (sm/md/lg) | Spinning circle border |
| `PageLoadingSkeleton` | Full page loading | Centered spinner + "Laai..." |

## 3. Design Tokens

| Element | Light | Dark |
|:--------|:------|:-----|
| Skeleton bg | `bg-gray-200` | `bg-muted` |
| Animation | `animate-pulse` | Same |
| Spinner border | `border-brand-red border-r-transparent` | Same |
| Card bg | `bg-white` | `bg-card` |
| Card border | `border-gray-100` | `border-border` |

## 4–10. Standard

No responsive changes — skeletons mirror the layout of their target components. Dark mode: `bg-gray-200` → `bg-muted`, `bg-white` → `bg-card`.

## 11. WordPress Mapping

Not needed — WordPress renders complete HTML server-side. Client-side loading states only apply to Interactivity API transitions, which would use CSS-only skeleton patterns.

## 12. Dependencies

- **Consumed by**: Various page components via `Suspense` fallback, `Category.tsx`, `Article.tsx`, `EEditions.tsx`, `Search.tsx`, `MyAccount.tsx`

## 13. Known Exemptions

None.
