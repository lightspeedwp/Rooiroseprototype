# Archive Patterns

**Last updated**: 2026-03-03
**Category**: Patterns (Archives)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/archive-*.php`

---

## Overview

Archive patterns provide the full-page layout for listing pages (category, tag, author, CPT archives, taxonomy archives, search). All templates reference these patterns via `<!-- wp:pattern {"slug":"die-papier/archive-*"} /-->` — templates contain no inline query loops (DRY principle).

All archive patterns follow this structure:
1. Title/description header
2. Two-column layout (66%/33% or full-width)
3. Query loop with post-template grid
4. Pagination (Afrikaans labels: "Vorige" / "Volgende")
5. No-results fallback → `hidden-no-results` pattern

---

## 1. archive-default

**Slug**: `die-papier/archive-default`
**Post type**: `post` (inherit from template)
**Layout**: 70/30 columns + sidebar
**Grid**: 1-column list cards (image left 35%, content right 65%)
**AQL**: No

Fallback archive for any uncategorized archive page. Cards show featured image, title, compact post meta, and 25-word excerpt.

---

## 2. archive-category

**Slug**: `die-papier/archive-category`
**Post type**: `post` (inherit from template)
**Layout**: 66/33 columns + sidebar
**Grid**: 1-column list cards (flex row: 200px image + content stack)
**AQL**: No
**Ad Slots**: `dp-archive-footer-leaderboard` (added 2026-03-03)

Generic category fallback archive. Shows `query-title` (category name) + `term-description` header. Cards display category badge, date, title (H3), excerpt, and author. Sidebar via `wp:template-part`. Overridden by dedicated `category-{slug}.html` templates for Nuus, Sake, Leefstyl, Dink, and Sport.

---

## 2a. archive-category-nuus (NEW)

**Slug**: `die-papier/archive-category-nuus`
**Post type**: `post` (inherit)
**Layout**: 70/30 columns + sidebar
**Grid**: 3-column post cards
**AQL**: No
**Template**: `category-nuus.html`
**Ad Slots**: `dp-archive-in-feed`, `dp-archive-footer-leaderboard`

Dedicated Nuus (News) category archive. Hero section (featured sticky post cover with gradient), tag filter chips (Aktueel, Politiek, Misdaad, Wêreld, Omgewing), article query grid, sidebar template part, newsletter CTA.

## 2b. archive-category-sake (NEW)

**Slug**: `die-papier/archive-category-sake`
**Template**: `category-sake.html`
**Tags**: Ekonomie, Landbou, Geldsake, Markte, Maatskappye
**Description**: "Alle verwikkelings op die sakefront wat vir jou saak maak."

Same structure as archive-category-nuus. Premium category (higher-value ad slots).

## 2c. archive-category-leefstyl (NEW)

**Slug**: `die-papier/archive-category-leefstyl`
**Template**: `category-leefstyl.html`
**Tags**: Vermaak, Kos en resepte, Reis en buitelewe, Kuns en kultuur, Blokkiesraaisels
**Description**: "Kuns, kultuur, kos en alles wat die lewe lekker maak."

Same structure as archive-category-nuus.

## 2d. archive-category-dink (NEW)

**Slug**: `die-papier/archive-category-dink`
**Template**: `category-dink.html`
**Tags**: Aktueel, Rubrieke, Profiele, Kommentaar, Spotprente, Menings
**Description**: "Ontledings van die sake van die dag, met 'n persoonlike aanslag"

Same structure as archive-category-nuus. Premium category.

## 2e. archive-category-sport (NEW)

**Slug**: `die-papier/archive-category-sport`
**Template**: `category-sport.html`
**Tags**: Rugby, Sokker, Krieket, Skolesport, Motorsport, Ander
**Description**: "Al die aksie op en af van die veld."

Same structure as archive-category-nuus.

---

## 3. archive-tag

**Slug**: `die-papier/archive-tag`
**Post type**: `post` (inherit from template)
**Layout**: 70/30 columns + sidebar
**AQL**: No

Tag-filtered archive. Similar to default archive but with tag-specific header showing tag name and description.

---

## 4. archive-author

**Slug**: `die-papier/archive-author`
**Post type**: `post` (inherit from template)
**Layout**: 70/30 columns + sidebar
**AQL**: No

Author archive with avatar header, author bio, and list of their articles.

---

## 5. archive-search

**Slug**: `die-papier/archive-search`
**Post type**: `post` (inherit from template)
**Layout**: 70/30 columns + sidebar
**AQL**: No

Search results page. Displays search query in header, matched results in list layout.

---

## 6. archive-events

**Slug**: `die-papier/archive-events`
**Post type**: `dp_event`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: **Yes** — meta ordering by `event_date` ASC, date query for future events

Events listing with `dp/filter-bar` for category filtering. Cards show featured image, `card-event-meta` pattern (date/time/location), and title. Newsletter CTA at bottom.

---

## 7. archive-obituaries

**Slug**: `die-papier/archive-obituaries`
**Post type**: `dp_obituary`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: **Yes** — date DESC ordering, ready for `death_date` meta ordering

Obituaries listing with search bar. Cards show circular photo (120px, `border-radius: 50%`), centered title, `card-obituary-meta` pattern, and short excerpt.

---

## 8. archive-competitions

**Slug**: `die-papier/archive-competitions`
**Post type**: `dp_competition`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: **Yes** — date DESC, ready for `status=active` meta filter

Competitions listing. Cards show featured image, `dp/competition-badge` block, title, and `card-competition-meta` pattern. Newsletter CTA at bottom.

---

## 9. archive-eeditions

**Slug**: `die-papier/archive-eeditions`
**Post type**: `dp_eedition`
**Layout**: Full-width (no sidebar)
**Grid**: 4-column cards
**AQL**: **Yes** — date DESC, ready for `issue_date` meta ordering

E-editions grid. Cards show cover image (3:4 aspect), centered title, and publication date. Newsletter CTA at bottom.

---

## 10. archive-multimedia

**Slug**: `die-papier/archive-multimedia`
**Post type**: `dp_multimedia`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: No

Multimedia gallery listing. Cards show thumbnail (16:9), title, and media type indicator.

---

## 11. archive-sponsors

**Slug**: `die-papier/archive-sponsors`
**Post type**: `dp_sponsor`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: No

Sponsor directory. Cards show logo (1:1 aspect), centered title, and short description.

---

## 12. archive-event-category

**Slug**: `die-papier/archive-event-category`
**Post type**: `dp_event` (inherit)
**Taxonomy**: `dp_event_category`
**Layout**: 66/33 columns + sidebar-event
**Grid**: 2-column cards
**AQL**: No

Event category taxonomy archive. Cards show featured image, title, compact post meta, and excerpt.

---

## 13. archive-multimedia-category

**Slug**: `die-papier/archive-multimedia-category`
**Post type**: `dp_multimedia` (inherit)
**Taxonomy**: `dp_multimedia_category`
**Layout**: 66/33 columns + sidebar
**Grid**: 3-column cards
**AQL**: No

Multimedia category taxonomy archive. Cards show featured image (16:9), title, and compact post meta.

---

## 14. archive-sponsor-tier

**Slug**: `die-papier/archive-sponsor-tier`
**Post type**: `dp_sponsor` (inherit)
**Taxonomy**: `dp_sponsor_tier`
**Layout**: Full-width (no sidebar)
**Grid**: 3-column cards
**AQL**: No

Sponsor tier taxonomy archive. Cards show logo (1:1, 120px), centered title, and short excerpt.

---

## Cross-References

- [Pattern Strategy § 9](/guidelines/wordpress-migration/pattern-strategy.md) — Query Loop DRY patterns
- [Templates & Parts](/guidelines/wordpress-migration/templates-and-parts.md) — Template hierarchy
- [AQL Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) — AQL configuration
- [Category Template Guidelines](/guidelines/components/templates/category-nuus.md) — Canonical reference for dedicated category templates
- [Section Category Hero](/wordpress-export/themes/die-papier-theme/patterns/section/section-category-hero.php) — Featured post hero pattern
- [Filter Pill Block Style](/wordpress-export/themes/die-papier-theme/styles/blocks/buttons/filter-pill.json) — Tag filter chip styling