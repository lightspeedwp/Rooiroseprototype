# Multimedia Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Multimedia.tsx`
**WordPress target**: Template — `archive-dp_multimedia.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Multimedia listing with type filter tabs (Video, Fotogalerye, Podcasts).

## 2. Data Sources

- `VIDEO_CONTENT`, `PHOTO_GALLERIES`, `PODCASTS` from `/src/app/data/multimedia.ts`

## 3. WordPress Mapping

Template — `archive-dp_multimedia.html`. Uses `core/query` + taxonomy filter.

## 4. Dependencies

SEO, PageContainer, ImageWithFallback
