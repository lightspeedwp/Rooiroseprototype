# Homepage Pattern Specification

**Last updated**: 2026-02-28
**Pattern file**: `/wordpress-export/themes/die-papier-theme/patterns/page/page-home.php`
**Slug**: `die-papier/page-home`

---

## Overview

The homepage is the most complex pattern in the theme. It composes 10+ sections using multiple AQL query loops with page-level article deduplication. Total sections: ~13.

---

## Section Sequence

### 1. Hero Slider

- **Query**: AQL, `sticky: "only"`, 5 posts
- **Query pattern**: `query-posts-sticky`
- **Card**: `card-post-featured-hero`
- **Layout**: Full-width cover with gradient overlay
- **Deduplication**: First query on page — seeds the dedup tracker

### 2. Feature Grid

- **Query**: AQL, `sticky: "exclude"`, 6 posts
- **Query pattern**: `query-posts-latest`
- **Card**: `card-post-grid-3col`
- **Layout**: 3-column grid
- **Deduplication**: Excludes hero posts

### 3–8. Category Sections (× 6)

Categories: **Nuus**, **Sport**, **Sake**, **Leefstyl**, **Dink**, **Skole**

- **Query**: AQL, `taxQuery: { category: ["<slug>"] }`, 3 posts each
- **Card**: Inline (intentionally — custom font-size presets, not archive variant)
- **Layout**: 3-column grid per section
- **Section header**: Inter SemiBold uppercase H2 (`is-style-section-title`) + "Sien alles →" link
- **Deduplication**: Each section excludes posts from all previous sections

### 9. Events Widget

- **Query**: AQL, post type `dp_event`, upcoming events
- **Card**: `card-event-grid`
- **Layout**: 3-column grid, no pagination

### 10. Competitions Widget

- **Query**: AQL, post type `dp_competition`, active competitions
- **Card**: `card-competition-grid`
- **Layout**: 3-column grid, no pagination

### 11. Poll Section

- **Pattern**: `section-homepage-poll`
- **Content**: Interactive reader poll (JavaScript-powered)

### 12. Sponsor Grid

- **Pattern**: `section-sponsor-grid`
- **Content**: Gold/silver/bronze sponsor logos

### 13. Newsletter CTA

- **Pattern**: `section-newsletter-cta-full`
- **Content**: Full-width navy newsletter signup with Gravity Forms

---

## Deduplication Flow

```
Hero (sticky)     → tracked IDs: [1, 2, 3, 4, 5]
Feature Grid      → excludes: [1, 2, 3, 4, 5] → tracked: [1–11]
Nuus section      → excludes: [1–11] → tracked: [1–14]
Sport section     → excludes: [1–14] → tracked: [1–17]
... and so on
```

Powered by `DiePapier\AQL\Deduplication_Tracker` class (mu-plugin / block plugin).

---

## Typography

| Element | Token | Font |
|:---|:---|:---|
| Section title (H2) | `--text-h6` | Inter SemiBold, uppercase |
| Card title (H3) | `--text-heading-4` | Roboto Serif |
| Card meta | `--text-caption` | Inter |
| Card excerpt | `--text-body-small` | Inter |
| "Sien alles →" link | `--text-caption` | Inter SemiBold |

---

## Spacing

| Element | Token |
|:---|:---|
| Section top/bottom padding | `--wp--preset--spacing--60` |
| Section internal gap | `--wp--preset--spacing--40` |
| Card internal padding | `--wp--preset--spacing--30` |
| Grid column gap | `--wp--preset--spacing--40` |

---

## Notes

- The homepage is the primary candidate for AQL deduplication — no other page has this many overlapping queries.
- Category section cards are intentionally inline (not using `card-post-grid-3col`) because they use a minimal variant with custom font-size presets that differ from the archive version.
- The hero slider uses `is-style-hero-slider` section style which enables full-bleed horizontal scroll or carousel behaviour.
- All AQL queries on the homepage should have `enable_caching: true` for performance (1-hour transient cache).
