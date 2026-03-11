# Miscellaneous Components

**Last updated**: 2026-03-03
**Category**: Blocks / Utility (Mixed)
**WordPress target**: Various

---

This document covers remaining component directories not covered by other guideline files.

## Components

### SubsectionFilter (`/category/SubsectionFilter.tsx`)
- **Purpose**: Category page subsection filter chips (tag pills). Each chip links to the corresponding tag archive page. Category-specific subsection definitions hardcoded.
- **Visual**: Horizontal scrollable pill row. Active pill: `bg-brand-navy text-white`. Inactive: `border border-gray-300 text-gray-700 hover:bg-gray-100`.
- **WP Mapping**: `core/tag-cloud` or custom taxonomy filter with JS, or a custom block `dp/subsection-filter`.

### MarketingGrid (`/marketing/MarketingGrid.tsx`)
- **Purpose**: Social media marketing card carousel showing 4 social post designs in an Embla Carousel slider (2 slides visible on desktop, 1 on mobile). Used on About and Contact pages.
- **Sub-components**: `PostMegaphone`, `PostCostOfLiving`, `PostFirstReader`, `PostInYourHands` in `/marketing/socials/`
- **WP Mapping**: Static pattern or not exported (marketing material).

### NewsletterContainer (`/newsletter/NewsletterContainer.tsx`)
- **Purpose**: Wrapper component for email newsletter templates. Provides the outer email-compatible table layout, head styles, and footer.
- **WP Mapping**: Not applicable — email templates are handled by MailPoet or custom email plugin.

### RedirectToSponsor (`/redirects/RedirectToSponsor.tsx`)
- **Purpose**: Route component that redirects `/borge/:sponsorSlug` to `/geborg/:sponsorSlug`. Used for legacy URL compatibility.
- **WP Mapping**: Nginx/htaccess redirects. See `/guidelines/wordpress-migration/redirects.md`.

### NewspaperIcon (`/icons/NewspaperIcon.tsx`)
- **Purpose**: Custom SVG newspaper icon used in a few places. Inline SVG component.
- **WP Mapping**: Added to theme's SVG sprite or inline in patterns.

### Email Templates (`/templates/`)
- **Tuesday Newsletter**: `TuesdayNewsletterTemplate.tsx` — Weekly lifestyle/news email
- **Friday Newsletter**: `FridayNewsletterTemplate.tsx` — Weekly news roundup email
- **WP Mapping**: MailPoet or custom email plugin templates
- **Exemption**: Both exempt from dark mode rules (email rendering context)

## Known Exemptions

- **Email templates** — `FridayNewsletterTemplate.tsx`, `TuesdayNewsletterTemplate.tsx` are exempt from dark mode rules (email rendering context).
- **Social post marketing components** — Retain `text-primary` for brand consistency in marketing outputs.