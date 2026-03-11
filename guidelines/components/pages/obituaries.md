# Obituaries Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Obituaries.tsx`
**WordPress target**: Template — `archive-dp_obituary.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Obituaries listing with circular portrait cards, name, excerpt, death date, and location.

## 2. Data Sources

- `OBITUARIES` from `/src/app/data/obituaries.ts`

## 3. WordPress Mapping

Template — `archive-dp_obituary.html`. Uses `core/query` with `dp_obituary` post type.

## 4. Dependencies

SEO, PageContainer, ImageWithFallback
