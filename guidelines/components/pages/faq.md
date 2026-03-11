# FAQ Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/FAQPage.tsx`
**WordPress target**: Pattern — `page-faq.php`
**Shell doc**: [Static Info Pages](./static-info-pages.md)

---

## 1. Purpose

The "Gereelde Vrae" (FAQ) page — a master collection of all FAQ sections grouped by topic (about, contact, advertise, events, e-editions, weather, team, etc.).

## 2. Data Sources

- **All FAQ collections**: Imported from `/src/app/data/pageFaqs.ts` — every `*_FAQS` constant
- **Hero image**: `figma:asset/...` (FAQ-specific hero)

## 3. WordPress Mapping

Full-page pattern — `page-faq.php`. Uses ShadCN Accordion → `core/details` blocks in WP.

## 4. Dependencies

SEO, PageContainer, ContentHero, Accordion (ShadCN), renderWithBrandItalics
