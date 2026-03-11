# Static Information Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Static pages using `page.html` or `page-full-width.html` templates

---

This document covers the following static information pages that share a common structural pattern: ContentHero + PageContainer + content sections + PageFAQSection.

## Pages Covered

| Page | React Source | Route | WP Template |
|:-----|:------------|:------|:------------|
| **About** | `About.tsx` | `/oor-ons` | `page.html` |
| **Contact** | `Contact.tsx` | `/kontak` | `page.html` |
| **Team** | `Team.tsx` | `/span` | `page.html` |
| **FAQ** | `FAQPage.tsx` | `/vrae` | `page.html` |
| **Advertise** | `Advertise.tsx` | `/adverteer` | `page.html` |
| **Sitemap** | `Sitemap.tsx` | `/werfkaart` | `page.html` |

## Common Structure

```
┌─ <div> (bg-white dark:bg-background, min-h-screen)
│  ├─ SEO (page-specific title, description, keywords)
│  ├─ PageContainer (breadcrumbs, noPadding)
│  ├─ ContentHero (title, subtitle, image, height/align variants)
│  ├─ Page-specific content sections (.alignwide, py-10)
│  │  └─ Prose content, cards, grids, contact forms, etc.
│  ├─ PageFAQSection (page-specific FAQ items from /data/pageFaqs.ts)
│  └─ [Optional] CallToAction or NewsletterCTA
```

## Page-Specific Details

### About (`About.tsx`)
- **Sections**: Intro, Values grid (6 cards), Mission, Novus Media, Novus Holdings, Management Team (TeamGrid), Regional Managers (TeamGrid), Ethics, MarketingGrid
- **Data**: All from `/src/app/data/about.ts`
- **FAQs**: `ABOUT_FAQS`

### Contact (`Contact.tsx`)
- **Sections**: ContentHero, Contact info grid (departments, office details, office hours), ContactForm, MarketingGrid
- **Data**: `/src/app/data/contact.ts`
- **FAQs**: `CONTACT_FAQS`
- **Note**: ContactForm is deprecated for WP (→ Gravity Forms)

### Team (`Team.tsx`)
- **Sections**: ContentHero, TeamGrid (editorial staff), TeamGrid (regional managers)
- **Data**: `/src/app/data/team.ts`
- **Uses**: TeamGrid pattern component

### FAQ (`FAQPage.tsx`)
- **Sections**: ContentHero, multiple PageFAQSections grouped by topic
- **Data**: `/src/app/data/pageFaqs.ts` (global FAQ collection)

### Advertise (`Advertise.tsx`)
- **Sections**: ContentHero, ad specifications, pricing tiers, contact CTA
- **Data**: `/src/app/data/advertise.ts`
- **FAQs**: `ADVERTISE_FAQS`

### Sitemap (`Sitemap.tsx`)
- **Sections**: ContentHero, hierarchical link tree of all site routes
- **Data**: Hardcoded route structure

## WordPress Mapping

All map to static WordPress pages using the `page.html` template. Content is placed directly in the block editor using core blocks (headings, paragraphs, columns, groups) and custom patterns.

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/page.html`
- Template: `/wordpress-export/themes/die-papier-theme/templates/page-full-width.html`

## Dependencies

All share: `SEO`, `PageContainer`, `ContentHero`, `PageFAQSection`, `renderWithBrandItalics()`

## Known Exemptions

None.
