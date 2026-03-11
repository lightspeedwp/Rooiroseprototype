# Multimedia Single

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/SingleMultimedia.tsx`
**WordPress target**: Template — `single-dp_multimedia.html`
**Shell doc**: [CPT Singles](./cpt-singles.md)

---

## 1. Purpose

Single multimedia detail page. Renders video embed, photo gallery, or podcast player depending on type.

## 2. Data Sources

- Combined lookup from `VIDEO_CONTENT`, `PHOTO_GALLERIES`, `PODCASTS` in `/src/app/data/multimedia.ts`

## 3. WordPress Mapping

Template — `single-dp_multimedia.html`. Media embed via `core/embed` or `core/video`.

## 4. Dependencies

SEO, PageContainer, SocialShare, ImageWithFallback
