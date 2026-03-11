# Contact Page

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Contact.tsx`
**WordPress target**: Pattern — `page-contact.php`
**Shell doc**: [Static Info Pages](./static-info-pages.md)

---

## 1. Purpose

The "Kontak ons" page with contact info grid, department contacts, office details, office hours, a contact form, and marketing slider.

## 2. Visual Structure

```
┌─ SEO + PageContainer (breadcrumbs: [Kontak ons], noPadding)
│  ├─ ContentHero (CONTACT_HERO)
│  ├─ Department contact cards grid
│  ├─ Office details + office hours side-by-side
│  ├─ ContactForm
│  ├─ MarketingGrid
│  └─ PageFAQSection (CONTACT_FAQS)
```

## 3. Data Sources

- **Content**: `/src/app/data/contact.ts` — `CONTACT_HERO`, `CONTACT_PAGE_CONTENT`, `DEPARTMENTS`, `OFFICE_DETAILS`, `OFFICE_HOURS`
- **Hero image**: `HERO_IMAGES` from `/src/app/data/heroImages.ts`
- **FAQs**: `CONTACT_FAQS` from `/src/app/data/pageFaqs.ts`

## 4. WordPress Mapping

Full-page pattern — `page-contact.php`. ContactForm replaced by Gravity Forms in WP.

## 5. Dependencies

SEO, PageContainer, ContentHero, ContactForm, PageFAQSection, MarketingGrid, ImageWithFallback
