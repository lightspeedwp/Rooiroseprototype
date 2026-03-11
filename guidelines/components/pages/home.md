# Home Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Home.tsx`
**WordPress target**: Template — `/wordpress-export/themes/die-papier-theme/templates/front-page.html`

---

## 1. Purpose

The main homepage assembling all homepage sections in a newspaper-style vertical layout with a 300px sidebar on desktop. This is the most complex page in the site, composing 15+ pattern components and multiple ad placements.

## 2. Visual Structure (Section Order)

```
1. TakeoverRails (disabled)
2. LeaderboardAd (header)
3. BreakingNews (disabled)
4. HeroSlider (5-article carousel + Nuusflitse sidebar)
5. Main + Sidebar layout (.alignwide, flex col→row, gap-8)
   ├─ Main (flex-1):
   │   ├─ FeatureGrid (1 featured + 3 list + 3 compact)
   │   ├─ CategorySection: Nuus
   │   ├─ CategorySection: Sport
   │   ├─ LeaderboardAd
   │   ├─ CategorySection: Skole
   │   ├─ SidebarCategorySection: Lewenstyl
   │   ├─ CategorySection: Dink
   │   └─ LeaderboardAd
   └─ Sidebar (w-[300px]):
       ├─ E-Edition promo card (cover + navy panel + CTA)
       ├─ MediumRectangleAd
       ├─ Poll widget
       ├─ MediumRectangleAd
       ├─ Competition card (featured)
       ├─ "Sien alle kompetisies" link
       ├─ Delivery CTA (red gradient card)
       └─ SidebarAds
6. QuoteSlider (lazy-loaded, brand campaign)
7. MultimediaSection
8. LeaderboardAd
9. ObituariesSection
10. EventsSection
11. ArchiveSection
12. NewsletterCTA (full-width)
13. StickyMobileFooter ad
```

## 3. Props / Attributes

Self-contained — no external props. Route: `/` (index).

## 4. Data Sources

- **Category articles**: `CATEGORY_ARTICLES` from `/src/app/data/categoryArticles.ts` (memoized)
- **Poll**: `getActivePoll()` from `/src/app/data/polls.ts`
- **Competition**: `getActiveCompetitions()[0]` from `/src/app/data/competitions.ts`
- **SEO**: `HOME_SEO` from `/src/app/data/home.ts`
- **UI strings**: `HOME_CONTENT.sidebar.*` from `/src/app/data/home.ts`
- **WordPress source**: `front-page.html` template using multiple `core/query` blocks

## 5. Design Tokens

### Page-level

| Property | Value |
|:---------|:------|
| Background | `bg-white dark:bg-background` |
| Sidebar width | `lg:w-[300px]` |
| Main/sidebar gap | `gap-8` |
| Container | `.alignwide my-6` |

### Sidebar E-Edition Card

| Element | Value |
|:--------|:------|
| Cover image | `h-80 object-cover` |
| Navy panel | `bg-brand-navy px-4 py-4` |
| Title | `--font-heading`, `text-[32px]`, `--fvs-h3` |
| CTA button | `bg-brand-red hover:bg-brand-red-hover` |

### Sidebar Delivery CTA

| Element | Value |
|:--------|:------|
| Background | `bg-gradient-to-br from-brand-red to-brand-red-hover` |
| Title | `--font-heading`, `text-lg`, `--fvs-h4` |
| Button | `bg-white text-brand-red` |

## 6–10. Standard

Responsive: Below `lg`, sidebar drops below main content. All child patterns handle their own responsive, dark mode, and accessibility behaviour.

## 11. WordPress Mapping

### Construct Type
Template — `front-page.html`

### Block Composition

The `front-page.html` template chains all homepage sections:
```html
<!-- wp:template-part {"slug":"header"} /-->
<!-- wp:group {"tagName":"main"} -->
    <!-- wp:pattern {"slug":"die-papier/hero-slider"} /-->
    <!-- wp:columns {"align":"wide"} -->
        <!-- wp:column {"width":"calc(100% - 332px)"} -->
            <!-- wp:pattern {"slug":"die-papier/feature-grid"} /-->
            <!-- wp:pattern {"slug":"die-papier/category-nuus"} /-->
            <!-- wp:pattern {"slug":"die-papier/category-sport"} /-->
            <!-- ...more category sections... -->
        <!-- /wp:column -->
        <!-- wp:column {"width":"300px"} -->
            <!-- wp:pattern {"slug":"die-papier/sidebar-eedition"} /-->
            <!-- wp:pattern {"slug":"die-papier/sidebar-poll"} /-->
            <!-- wp:pattern {"slug":"die-papier/sidebar-competition"} /-->
            <!-- wp:pattern {"slug":"die-papier/sidebar-delivery"} /-->
        <!-- /wp:column -->
    <!-- /wp:columns -->
    <!-- wp:pattern {"slug":"die-papier/section-multimedia"} /-->
    <!-- wp:pattern {"slug":"die-papier/section-obituaries"} /-->
    <!-- wp:pattern {"slug":"die-papier/section-events"} /-->
    <!-- wp:pattern {"slug":"die-papier/section-archive"} /-->
    <!-- wp:pattern {"slug":"die-papier/newsletter-cta"} /-->
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer"} /-->
```

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/front-page.html`

## 12. Dependencies

- **Pattern components**: HeroSlider, FeatureGrid, BreakingNews, CategorySection, SidebarCategorySection, MultimediaSection, ObituariesSection, EventsSection, ArchiveSection, NewsletterCTA, Poll, QuoteSlider
- **Ad components**: LeaderboardAd, SidebarAds, MediumRectangleAd, TakeoverRails, StickyMobileFooter
- **Common components**: SEO, ImageWithFallback

## 13. Known Exemptions

None.
