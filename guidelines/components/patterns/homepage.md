# Homepage Patterns

**Last updated**: 2026-03-03 (date review — content verified current)
**Category**: Patterns (Homepage)
**Pattern file**: `/wordpress-export/themes/die-papier-theme/patterns/page-home.php`

---

## Overview

The homepage (`page-home.php`) is the most complex pattern in the theme. It composes multiple section patterns and query loops into a single full-page layout. Uses AQL (Advanced Query Loop) for deduplication across sections and caching.

---

## 1. Content Hero (Homepage Hero)

**Pattern**: Inner section of `page-home.php` (uses `core/cover` block)
**Replaces**: ~~`dp/hero-slider`~~ (DEPRECATED) → ~~`dp/content-hero`~~ (DEPRECATED 2026-02-27) → `core/cover`

Full-width hero banner with navy overlay, centred title, and subtitle. Now uses the native `core/cover` block with `overlayColor: brand-navy`, `dimRatio: 60`, inner heading + paragraph.

**Block composition**: `core/cover` with `core/heading` (level 1) + `core/paragraph` inner blocks.

---

## 2. Category Sections (Nuus, Sport, Sake, Leefstyl, Dink, Skole)

**React source**: `CategorySection.tsx`
**WordPress**: `core/query` blocks inside `page-home.php`, filtered by `categoryName`

Each category renders a section with:
- Section header: Inter SemiBold uppercase H2 (`is-style-section-title`) + "Sien alles →" link
- 3-column grid of compact article cards (AQL, `perPage: 3`)
- Bottom border: 2px brand-navy

**Typography**: Section label uses `--text-h6` token, `font-weight: 600`, `text-transform: uppercase`.

Categories rendered: Nuus, Sport, Sake, Leefstyl, Dink, Skole (each with dedicated `core/query` block).

---

## 3. News Card (Compact)

**React source**: `NewsCard.tsx` (compact variant)
**WordPress**: Inside `core/post-template` in category sections

Card layout within homepage category grids:
- Featured image (16:9, linked, `border-radius: 4px`)
- Category badge pill (`is-style-badge`)
- Title (H3, `is-style-card-compact` — 16px Roboto Serif)
- Author + relative date

---

## 4. Competitions Section

**React source**: `CompetitionsSection.tsx`
**WordPress**: Inner section of `page-home.php` + `sidebar-competition-card.php`

Featured competition banner (gradient overlay) + up to 3 competition cards in 2-column grid. Uses `core/query` with `postType: dp_competition`, `perPage: 4`. CTA: "Sien alle kompetisies".

---

## 5. Events Section

**React source**: `EventsSection.tsx`
**WordPress**: Inner section of `page-home.php`

Next 4 upcoming events in 2-column card grid. Each card: red date box (day + month), category badge, title, description excerpt, time, location. Uses `core/query` with `postType: dp_event`, AQL meta ordering by `event_date` ASC. CTAs: "Sien alle gebeure" + "Dien jou gebeurtenis in".

---

## 6. Multimedia Section

**React source**: `MultimediaSection.tsx`
**WordPress**: Inner section of `page-home.php`

Latest 6 multimedia items in 3-column grid. Each card: thumbnail (16:9), media type icon overlay, title, date. Uses `core/query` with `postType: dp_multimedia`, `perPage: 6`.

---

## 7. Obituaries Section

**React source**: `ObituariesSection.tsx`
**WordPress**: Inner section of `page-home.php`

Latest 4 obituaries in a horizontal scroll/grid. Each card: circular photo (120px), name, dates. Uses `core/query` with `postType: dp_obituary`, `perPage: 4`.

---

## 8. Feature Grid

**React source**: `FeatureGrid.tsx`
**WordPress**: Inner section of `page-home.php`

Mixed-layout content grid combining a large featured article (left, 60%) with 2 stacked smaller cards (right, 40%). Uses `core/query` with offset to avoid repeating articles shown in hero.

---

## 9. Homepage Poll

**Pattern**: `section-homepage-poll.php` (planned)
**Replacement for**: ~~`dp/poll`~~ block
**WordPress**: `gravityforms/form` block with Gravity Forms Polls add-on

Interactive reader poll embedded in the homepage sidebar or main content area.

---

## 10. Sidebar Category Section

**React source**: `SidebarCategorySection.tsx`
**WordPress**: 70/30 column layout within `page-home.php` where the 30% column contains sidebar patterns

Homepage sections that include a sidebar column with:
- `sidebar-eedition-promo.php` (latest e-edition cover)
- `sidebar-competition-card.php` (active competition)
- Advanced Ads MREC placement
- Newsletter CTA (Gravity Forms)

---

## 11. Sponsored In-Feed

**React source**: `SponsoredInFeed.tsx`
**WordPress**: `dp/sponsor-banner` block placed between homepage sections

Sponsored content banner appearing between category sections. Uses `dp/sponsor-banner` block with sponsor CPT context.

---

## 12. Breaking News (Disabled)

**React source**: `BreakingNews.tsx`
**Status**: Disabled — renders `null`. Reserved for future breaking news ticker.

---

## 13. Legacy Hero (Superseded)

**React source**: `Hero.tsx`
**Status**: Superseded by `HeroSlider.tsx` → then by `dp/content-hero` block → then by `core/cover` pattern. No longer rendered.

---

## Cross-References

- [Full Page Patterns](/guidelines/wordpress-migration/full-page-patterns.md) — Detailed block structure
- [AQL Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) — Homepage deduplication strategy
- [Page: Home](/guidelines/components/pages/home.md) — React page specification