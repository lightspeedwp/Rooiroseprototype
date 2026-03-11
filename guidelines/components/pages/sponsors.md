# Sponsors Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Sponsors.tsx`
**WordPress target**: Template — `archive-dp_sponsor.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Sponsors listing page showing all active sponsors/partners with branding and links to their sponsored content.

## 2. Data Sources

- Sponsor data from `/src/app/data/sponsors.ts`

## 3. WordPress Mapping

Template — `archive-dp_sponsor.html`. Uses `core/query` with `dp_sponsor` post type.

## 4. Dependencies

SEO, PageContainer, ImageWithFallback
