# CPT Single Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Single templates in `/wordpress-export/themes/die-papier-theme/templates/`

---

This document covers single-item detail pages for custom post types.

## Pages Covered

| Page | React Source | Route | WP Template |
|:-----|:------------|:------|:------------|
| **Competition Single** | `CompetitionSingle.tsx` | `/kompetisies/:slug` | `single-dp_competition.html` |
| **Event Single** | `SingleEvent.tsx` | `/gebeure/:id` | `single-dp_event.html` |
| **Multimedia Single** | `SingleMultimedia.tsx` | `/multimedia/:slug` | `single-dp_multimedia.html` |
| **Obituary Single** | `SingleObituary.tsx` | `/doodsberrigte/:slug` | `single-dp_obituary.html` |
| **E-Edition Single** | `SingleEEdition.tsx` | `/e-uitgawes/:id` | `single-dp_eedition.html` |
| **Sponsor Archive** | `SponsorArchive.tsx` | `/geborg/:slug` | `single-dp_sponsor.html` |

## Common Structure

```
┌─ SEO (structured data) + PageContainer (breadcrumbs)
│  ├─ Hero/Header (image + title + metadata)
│  ├─ Content body
│  │  └─ CPT-specific fields and layout
│  ├─ SocialShare
│  ├─ RelatedContent or "More from this category"
│  └─ [Optional] CTA section
```

## Page-Specific Details

### Competition Single (`CompetitionSingle.tsx`)
- **Hero**: Full-width image + gradient overlay + status badge (CompetitionStatusBadge)
- **Content**: Prize details, rules, entry form, closing date countdown
- **Data**: `getCompetitionBySlug()` from `/src/app/data/competitions.ts`
- **WP blocks**: `dp/competition-entry-form`, `dp/competition-badge`

### Event Single (`SingleEvent.tsx`)
- **Hero**: Image + date box + category badge
- **Content**: Description, time, location (map placeholder), organiser info, registration link
- **Data**: `EVENTS.find()` from `/src/app/data/events.ts`

### Multimedia Single (`SingleMultimedia.tsx`)
- **Hero**: Video embed / Photo gallery / Podcast player
- **Content**: Description, credits, related items
- **Data**: Combined lookup from `VIDEO_CONTENT`, `PHOTO_GALLERIES`, `PODCASTS`

### Obituary Single (`SingleObituary.tsx`)
- **Layout**: Portrait photo + name + dates + tribute text + funeral details
- **Data**: `OBITUARIES.find()` from `/src/app/data/obituaries.ts`

### E-Edition Single (`SingleEEdition.tsx`)
- **Layout**: Cover image + issue details + page-turner embed/link
- **Data**: `LATEST_EDITIONS.find()` from `/src/app/data/eEditions.ts`

## WordPress Mapping

Each single page maps to its corresponding `single-{post_type}.html` template using core post blocks and custom meta blocks from `die-papier-blocks` plugin.

### Existing WP Files
- `single-dp_competition.html`
- `single-dp_event.html`
- `single-dp_multimedia.html`
- `single-dp_obituary.html`
- `single-dp_eedition.html`
- `single-dp_sponsor.html`

## Dependencies

All share: `PageContainer`, `SEO`, `SocialShare`, `ImageWithFallback`, breadcrumbs.

## Known Exemptions

None.
