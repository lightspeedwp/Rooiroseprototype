# Template: category-nuus.html

**Last updated**: 2026-03-03
**Category**: Template — Dedicated Category Archive
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/category-nuus.html`
**React equivalent**: `Category.tsx` (`categoryName="Nuus"`)

---

## 1. Purpose

Dedicated archive template for the **Nuus** (News) category. Overrides the generic `category.html` template via WordPress template hierarchy (`category-{slug}.html` > `category.html`). Features a featured article hero, tag filter chips, article query loop with sidebar, and ad slot integration.

**Category Route**: `/nuus`
**Category Title**: Nuus
**Category Subheading**: "Die jongste plaaslike en internasionale nuus."

## 2. Structure

```
header (template part)
└─ main
   ├─ breadcrumbs (template part)
   ├─ pattern: die-papier/archive-category-nuus
   │  ├─ Category Header (section-hero-default)
   │  │  ├─ query-title (archive, h1, centered)
   │  │  └─ paragraph (subheading, centered)
   │  ├─ Hero Section (featured post cover block)
   │  │  └─ query (1 post, sticky) → cover with gradient
   │  ├─ Tag Filter Section (muted background)
   │  │  └─ buttons (is-style-filter-pill)
   │  │     ├─ "Alles" → /nuus
   │  │     ├─ "Aktueel" → /onderwerp/aktueel
   │  │     ├─ "Politiek" → /onderwerp/politiek
   │  │     ├─ "Misdaad" → /onderwerp/misdaad
   │  │     ├─ "Wêreld" → /onderwerp/wreld
   │  │     └─ "Omgewing" → /onderwerp/omgewing
   │  ├─ Content Area (70/30 columns)
   │  │  ├─ column (66.66%)
   │  │  │  └─ query (12 per page, inherit: true)
   │  │  │     ├─ post-template → card-post-list pattern
   │  │  │     ├─ advads/gblock (dp-archive-in-feed) — after 4th item
   │  │  │     ├─ pagination (centered, Vorige/Volgende)
   │  │  │     └─ no-results: hidden-no-results
   │  │  └─ column (33.33%)
   │  │     └─ sidebar (template part, tagName: aside)
   │  ├─ advads/gblock (dp-archive-footer-leaderboard)
   │  └─ pattern: section-newsletter-cta
   └─ (end main)
footer (template part)
```

## 3. Template Parts Used

- `header` (area: header)
- `breadcrumbs` (area: header)
- `sidebar` (area: sidebar) — default sidebar pattern with e-edition promo, newsletter, ads, trending
- `footer` (area: footer)

## 4. Canonical Tag List

| Tag | URL |
|-----|-----|
| Aktueel | `/onderwerp/aktueel` |
| Politiek | `/onderwerp/politiek` |
| Misdaad | `/onderwerp/misdaad` |
| Wêreld | `/onderwerp/wreld` |
| Omgewing | `/onderwerp/omgewing` |

Source: `SubsectionFilter.tsx` line 16, `/src/imports/template-guidelines.md` lines 36-40.

## 5. Ad Slots

| Placement ID | Position | Format |
|:-------------|:---------|:-------|
| `dp-archive-in-feed` | After 4th article | In-feed MREC |
| `dp-archive-footer-leaderboard` | Below pagination | Leaderboard 728×90 |
| (inherited via sidebar) | Sidebar | MREC 300×250 |
| (inherited via header) | Above content | Leaderboard |

## 6. Patterns Used

- `die-papier/archive-category-nuus` — main content pattern
- `die-papier/card-post-list` — article card in query loop
- `die-papier/hidden-no-results` — empty state
- `die-papier/section-newsletter-cta` — newsletter signup CTA

## 7. Layout

- Type: `constrained`
- Content columns: 66.66% / 33.33% split
- Gap: `var:preset|spacing|large`

## 8. WP Hierarchy Position

**Priority**: P1 — `category-nuus.html` > `category.html` > `archive.html` > `index.html`

Matched when: current archive = category with slug `nuus`.

Does NOT need `customTemplates` registration in `theme.json` (standard hierarchy resolution).

## 9. React Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| `HeroSlider` | `core/query` (1 sticky post) + `core/cover` with gradient |
| `SubsectionFilter` | `core/buttons` with `is-style-filter-pill` |
| `ArticleCard` | `core/post-template` → `card-post-list` pattern |
| Pagination | `core/query-pagination` |
| Sidebar | `core/template-part` (slug: sidebar) |
| `LeaderboardAd` | Inherited from header template part |
| `InFeedAd` | `advads/gblock` (dp-archive-in-feed) |
| `SidebarAds` | Inherited from sidebar template part |

**Known Limitation**: React HeroSlider auto-advances every 6s with dot/arrow navigation. WordPress core blocks cannot replicate this carousel behavior — the WP equivalent shows a single featured post cover block.

## 10. Related Files

- `/guidelines/components/templates/category.md` — Generic category fallback
- `/guidelines/components/parts/sidebar.md` — Sidebar template part
- `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md` — Ad placement strategy
- `/wordpress-export/themes/die-papier-theme/patterns/archive/archive-category-nuus.php`
- `/wordpress-export/themes/die-papier-theme/templates/category-nuus.html`
