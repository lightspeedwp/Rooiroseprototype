# Sponsor Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/SponsorArchive.tsx`
**WordPress target**: Template — `single-dp_sponsor.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Single sponsor page showing sponsor branding, description, and their sponsored article archive.

## 2. Route

`/geborg/:sponsorSlug`

## 3. Data Sources

- Sponsor data + filtered articles from `/src/app/data/categoryArticles.ts`

## 4. WordPress Mapping

Template — `single-dp_sponsor.html`. Uses `dp/sponsor-banner` block + `core/query`.

## 5. Dependencies

SEO, PageContainer, ArticleLink, ImageWithFallback
