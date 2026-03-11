# CPT Archive Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Archive templates in `/wordpress-export/themes/die-papier-theme/templates/`

---

This document covers archive/listing pages for custom post types.

## Pages Covered

| Page | React Source | Route | WP Template |
|:-----|:------------|:------|:------------|
| **Competitions** | `Competitions.tsx` | `/kompetisies` | `archive-dp_competition.html` |
| **Events** | `Events.tsx` | `/gebeure` | `archive-dp_event.html` |
| **Multimedia** | `Multimedia.tsx` | `/multimedia` | `archive-dp_multimedia.html` |
| **Obituaries** | `Obituaries.tsx` | `/doodsberrigte` | `archive-dp_obituary.html` |
| **E-Editions** | `EEditions.tsx` | `/e-uitgawes` | `archive-dp_eedition.html` |
| **Sponsors** | `Sponsors.tsx` | `/geborg` | `archive-dp_sponsor.html` |
| **Search Results** | `SearchResults.tsx` | `/soek` | `search.html` |
| **Author** | `Author.tsx` | `/author/:name` | `author.html` |
| **Tag Archive** | `TagArchive.tsx` | `/onderwerp/:slug` | `tag.html` |
| **Sponsor Archive** | `SponsorArchive.tsx` | `/geborg/:slug` | `archive-dp_sponsor.html` |

## Common Structure

All archive pages follow this pattern:
```
┌─ SEO + PageContainer (breadcrumbs)
│  ├─ ContentHero or simple header
│  ├─ Filter/sort controls (category tabs, date filters, search)
│  ├─ Card grid (responsive: 1→2→3 col)
│  │  └─ Custom cards per CPT (competition card, event card, etc.)
│  ├─ Pagination or "Load more"
│  └─ [Optional] CTA section
```

## Page-Specific Details

### Competitions (`Competitions.tsx`)
- **Cards**: Image + "Wen" badge + title + prize value + closing date + CTA
- **Filter**: Active / Closed / Winner Announced tabs
- **Data**: `getActiveCompetitions()`, `getClosedCompetitions()` from `/src/app/data/competitions.ts`

### Events (`Events.tsx`)
- **Cards**: Red date box + category + title + description + time/location
- **Filter**: Category tabs (Kultuur, Sport, Sakewêreld, etc.)
- **Data**: `EVENTS` from `/src/app/data/events.ts`

### Multimedia (`Multimedia.tsx`)
- **Cards**: Video (play overlay + duration), Gallery (photo count), Podcast (episode + duration)
- **Filter**: Type tabs (Video, Fotogalerye, Podcasts)
- **Data**: `VIDEO_CONTENT`, `PHOTO_GALLERIES`, `PODCASTS` from `/src/app/data/multimedia.ts`

### Obituaries (`Obituaries.tsx`)
- **Cards**: Circular portrait + name + excerpt + death date + location
- **Data**: `OBITUARIES` from `/src/app/data/obituaries.ts`

### E-Editions (`EEditions.tsx`)
- **Cards**: 3:4 cover image + title + date + "Lees" button
- **Data**: `LATEST_EDITIONS` from `/src/app/data/eEditions.ts`

### Search Results (`SearchResults.tsx`)
- **Unique features**: URL params `?q=`, debounced search, category filter, result count
- **Data**: Searches across all `CATEGORY_ARTICLES`
- **UI strings**: `SEARCH_UI` from `/src/app/data/search.ts`

### Author (`Author.tsx`)
- **Layout**: Author profile header (avatar, bio, social links) + article grid
- **Data**: Filtered from `getAllArticles()` by author name

## WordPress Mapping

Each archive page maps to its corresponding `archive-{post_type}.html` template using `core/query` with `inherit: true`.

### Existing WP Files
- `archive-dp_competition.html`
- `archive-dp_event.html`
- `archive-dp_multimedia.html`
- `archive-dp_obituary.html`
- `archive-dp_eedition.html`
- `archive-dp_sponsor.html`
- `search.html`
- `author.html`
- `tag.html`

## Dependencies

All share: `PageContainer`, `SEO`, `ImageWithFallback`, ad components, pagination patterns.

## Known Exemptions

None.
