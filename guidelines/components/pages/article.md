# Article (Single Post)

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Article.tsx`
**WordPress target**: Template — `/wordpress-export/themes/die-papier-theme/templates/single.html`

---

## 1. Purpose

The single article view — the most visited page type. Displays full article content with breadcrumbs, hero image, metadata (author, date, read time, category), body text with injected in-article ads, social sharing, comments section, related content tabs, and a sidebar with ads. Handles sponsored content with distinct badging. Generates JSON-LD `NewsArticle` structured data.

## 2. Visual Structure

```
┌─ PageContainer (breadcrumbs)
│  └─ Flex row (.alignwide, gap-8)
│     ├─ Main article (flex-1)
│     │  ├─ Category badge + Sponsored badge [if sponsored]
│     │  ├─ H1 title (serif, --fvs-h1)
│     │  ├─ P excerpt (text-xl, text-gray-600)
│     │  ├─ Meta row: Author (link) + Date + Read time + Category (link)
│     │  ├─ Hero image (aspect-[16/9])
│     │  ├─ Article body (prose, with injected ads)
│     │  ├─ Tags section (link pills)
│     │  ├─ SocialShare
│     │  ├─ RelatedContent (tabs: articles, events, e-editions)
│     │  └─ CommentsSection
│     └─ Sidebar (lg:w-[300px])
│        └─ SidebarAds
│
└─ LeaderboardAd (below content)
   StickyMobileFooter
```

## 3. Props / Route Params

| Param | Type | Source |
|:------|:-----|:-------|
| `slug` | `string` | URL param `/artikel/:slug` |

Article ID extracted via `getIdFromSlug(slug)`. Article data from `getArticleById()`.

## 4. Data Sources

- **Article**: `getArticleById()` from `/src/app/data/categoryArticles.ts`
- **Full content**: `getArticleContent()` from `/src/app/data/articleContent.ts`
- **Related**: Same-category articles, `EVENTS`, `LATEST_EDITIONS`
- **WordPress source**: `single.html` template using `core/post-content`, `core/post-title`, `core/post-featured-image`, etc.

## 5. Key Design Tokens

| Element | Font | Token |
|:--------|:-----|:------|
| Title H1 | `--font-heading` | `--fvs-h1`, `--lh-h1`, `--ls-h1` |
| Body | Prose styling | `text-gray-700 dark:text-gray-300`, `leading-relaxed` |
| Excerpt | `--font-inter` | `text-xl`, `text-gray-600` |
| Category badge | `--font-inter` | `text-xs`, `uppercase`, `bg-brand-red` |
| Sponsored badge | `--font-inter` | `bg-brand-navy` |

## 6–10. Standard

Responsive: sidebar hidden below `lg`. Dark mode: standard `bg-white` → `bg-card`, `text-gray-700` → `text-gray-300`.

## 11. WordPress Mapping

### Construct Type
Template — `single.html`

Uses core post blocks: `core/post-title`, `core/post-featured-image`, `core/post-content`, `core/post-date`, `core/post-author`, `core/post-terms`, plus custom blocks for social share and related content.

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/single.html`

## 12. Dependencies

- **Patterns**: CommentsSection, SocialShare, RelatedContent
- **Common**: PageContainer, SEO, ArticleLink, AuthorLink, ImageWithFallback
- **Ads**: LeaderboardAd, SidebarAds, StickyMobileFooter, injectArticleAds
- **Utilities**: generateArticleStructuredData, getIdFromSlug, slugify, getCategorySlug

## 13. Known Exemptions

None.
