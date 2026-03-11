# Team Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Team.tsx`
**WordPress target**: Pattern — `page-team.php`
**Shell doc**: [Static Info Pages](./static-info-pages.md)

---

## 1. Purpose

The "Span" (Team) page showing editorial staff and reporters in grouped TeamGrid sections.

## 2. Data Sources

- **Team members**: `TEAM_MEMBERS` from `/src/app/data/team.ts` (filtered by department: redaksioneel, verslaggewers)
- **Content**: `TEAM_PAGE_CONTENT` from `/src/app/data/team.ts`
- **FAQs**: `TEAM_FAQS` from `/src/app/data/pageFaqs.ts`

## 3. WordPress Mapping

Full-page pattern — `page-team.php`. Uses TeamGrid pattern with `core/query` for staff CPT or static group blocks.

## 4. Dependencies

SEO, PageContainer, ContentHero, TeamGrid, CallToAction, PageFAQSection
