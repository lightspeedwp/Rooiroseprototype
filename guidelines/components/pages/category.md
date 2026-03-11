# Category Archive Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Category.tsx`
**WordPress target**: Template — `/wordpress-export/themes/die-papier-theme/templates/category.html`

---

## 1. Purpose

The category archive page for Nuus, Sport, Skole, Sake, Lewenstyl, Dink, and Skole Rugby. Features a hero slider for featured articles, a subsection filter (tabs), a paginated article grid (9 per page), sidebar ads, and in-feed ads. Supports URL-based search params for filtering and pagination.

## 2. Visual Structure

```
┌─ SEO + PageContainer (breadcrumbs)
│  ├─ HeroSlider (featured articles for this category)
│  ├─ SubsectionFilter (tabs for subcategories)
│  ├─ Flex row
│  │  ├─ Main (flex-1)
│  │  │  ├─ Article grid (1→2→3 col)
│  │  │  │  └─ Article cards with InFeedAd every 6th position
│  │  │  └─ Pagination (prev/next + page numbers)
│  │  └─ Sidebar (lg:w-[300px])
│  │     └─ SidebarAds
│  └─ LeaderboardAd
```

## 3. Props / Route Params

| Prop | Type | Source |
|:-----|:-----|:-------|
| `categoryName` | `string` | Passed from `routes.tsx` (e.g., "Nuus", "Sport") |

## 4. Data Sources

- **Articles**: `getArticlesByCategory(categoryName)` and `getFeaturedArticles(categoryName)` from `/src/app/data/categoryArticles.ts`
- **Subsections**: Category-specific subsection definitions
- **WordPress source**: `category.html` template using `core/query` with `categoryName` filter

## 5. Key Design Tokens

Same as home page patterns — uses V2 section labels (`--font-inter`, `--text-h6`, SemiBold, uppercase) and article card typography.

## 6–10. Standard

Responsive: grid collapses from 3→2→1 col. Sidebar hidden below `lg`. Pagination stacks on mobile.

## 11. WordPress Mapping

### Construct Type
Template — `category.html`

Uses `core/query` with `inherit: true` to pull posts from the current category context.

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/category.html`

## 12. Dependencies

- **Components**: HeroSlider (local), SubsectionFilter (category), PageContainer, SEO, ArticleLink, ImageWithFallback, Skeletons
- **Ads**: LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter

## 13. Known Exemptions

None.
