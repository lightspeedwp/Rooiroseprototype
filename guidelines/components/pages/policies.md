# Policies Hub

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Policies.tsx`
**WordPress target**: Pattern — `page-policy.php`
**Shell doc**: [Policy Pages](./policy-pages.md)

---

## 1. Purpose

The "Beleid" (Policies) hub page listing all policy documents with links and summaries.

## 2. Route

`/beleid`

## 3. Data Sources

- `POLICIES`, `POLICIES_HERO`, `POLICIES_SUMMARY` from `/src/app/data/policies.ts`
- `POLICIES_FAQS` from `/src/app/data/pageFaqs.ts`

## 4. WordPress Mapping

Static parent page using `page-policy.php` pattern. Child policy pages set this as parent.

## 5. Dependencies

SEO, PageContainer, ContentHero, PageFAQSection, renderWithBrandItalics
