# About Page

**Last updated**: 2026-02-25
**Category**: Page
**React source**: `/src/app/pages/About.tsx`
**WordPress target**: Pattern — `page-about.php`
**Shell doc**: [Static Info Pages](./static-info-pages.md)

---

## 1. Purpose

The "Oor Ons" (About Us) page. Introduces Die Papier, its parent company Novus Media/Novus Holdings, editorial values, mission, management team, and regional managers.

## 2. Visual Structure

```
┌─ SEO + PageContainer (breadcrumbs: [Oor ons])
│  ├─ ContentHero (ABOUT_HERO — "Gehalte-joernalistiek in Afrikaans")
│  ├─ Quick links grid (5 cards: Ons span, Adverteer, Teken in, E-uitgawes, Kontak ons)
│  ├─ Intro section ("Meer oor ons" — 3 paragraphs)
│  ├─ Values grid (6 cards: Respek, Dapperheid, Integriteit, Inklusiwiteit, Uitnemendheid, Innovasie)
│  ├─ Mission section ("Ons missie" — description + 2 goals)
│  ├─ Novus Media section (6 paragraphs)
│  ├─ Novus Holdings section (3 paragraphs)
│  ├─ TeamGrid (Management Team — 5 members)
│  ├─ TeamGrid (Regional Managers — 3 members)
│  ├─ Ethics section ("Etiese kode" — 2 paragraphs)
│  ├─ MarketingGrid (social post slider — "Wat die mense sê")
│  └─ PageFAQSection (ABOUT_FAQS)
```

## 3. Data Sources

- **All content**: `/src/app/data/about.ts` — `ABOUT_HERO`, `QUICK_LINKS` (5 items), `ABOUT_INTRO`, `VALUES` (6), `MISSION`, `NOVUS_MEDIA`, `NOVUS_HOLDINGS`, `MANAGEMENT_TEAM` (5), `REGIONAL_MANAGERS` (3), `ETHICS`
- **FAQs**: `ABOUT_FAQS` from `/src/app/data/pageFaqs.ts`
- **Content source**: `/content/pages/about-us.md`

## 4. WordPress Mapping

Full-page pattern — `page-about.php`. Content via core blocks + `core/cover` hero (replaces deprecated `dp/content-hero`) + TeamGrid pattern + FAQ section pattern.

### Existing WP Files
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/page-about.php`

## 5. Dependencies

SEO, PageContainer, ContentHero, PageFAQSection, TeamGrid, MarketingGrid, renderWithBrandItalics

## 6. Known Exemptions

- **About.tsx `dark:border-card`** — Manually edited, intentional dark mode border override.

## 7. Decision Pending

The React component includes 5 sections NOT in the canonical content spec (`about-us.md`). Pending user decision on whether to keep, move, or remove:

1. Social Proof ("Wat die mense sê" — MarketingGrid)
2. BEE Credentials
3. Governance (Korporatiewe bestuur)
4. Social Media (Volg ons aanlyn)
5. Contact CTA