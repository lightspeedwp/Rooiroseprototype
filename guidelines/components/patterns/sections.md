# Section Patterns

**Last updated**: 2026-02-27
**Category**: Patterns (Reusable Sections)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/section-*.php`

---

## Overview

Section patterns are reusable content blocks placed within page patterns or templates. They are not full pages — they compose into larger layouts. All use `core/group` as root wrapper with appropriate section styles.

---

## 1. section-content-hero

**Slug**: `die-papier/section-content-hero`
**React source**: `ContentHero.tsx`
**Block**: Uses `core/cover` block (replaces deprecated `dp/content-hero` custom block — 2026-02-27)

Full-width hero banner for static pages (About, Contact, Team, FAQ, Advertise, etc.). Uses `core/cover` with overlay colour preset, inner `core/heading` (level 1) + `core/paragraph`. Supports background image, overlay opacity, min-height, and colour variants via cover presets.

---

## 2. section-newsletter-cta

**Slug**: `die-papier/section-newsletter-cta`
**Replacement for**: ~~`dp/newsletter-cta`~~ (DEPRECATED)

Inline/sidebar newsletter signup using `gravityforms/form` block inside a styled `core/group`. Compact variant for use within columns or sidebars.

---

## 3. section-newsletter-cta-full

**Slug**: `die-papier/section-newsletter-cta-full`
**Replacement for**: ~~`dp/newsletter-cta`~~ (DEPRECATED)

Full-width newsletter CTA section with navy gradient background, decorative blurs, mail icon, heading, description, 3-benefit grid, and Gravity Forms embed. Used at page bottoms.

---

## 4. section-brand-quotes

**Slug**: `die-papier/section-brand-quotes`
**Replacement for**: ~~`dp/quote-slider`~~ (DEPRECATED)

Brand testimonial carousel using `dp/slider` block with `core/quote` InnerBlocks. Navy background (`is-style-section-navy`), 3 placeholder quotes. Auto-advances with manual navigation.

---

## 5. section-faq

**Slug**: `die-papier/section-faq`
**React source**: FAQ sections across 18+ pages

FAQ accordion section using `yoast/faq-block` for Schema.org `FAQPage` structured data. Supports `is-style-section-faq` (light bg), `section-navy`, `section-red` (dark bg variants).

---

## 6. section-related-articles

**Slug**: `die-papier/section-related-articles`
**AQL**: **Yes** — `exclude_current: true`, `enable_caching: true`

3-column grid of related articles shown at the bottom of single post pages. Uses AQL to exclude current article and cache results. Cards: featured image (16:9), title (H4), date.

---

## 7. section-sponsor-articles

**Slug**: `die-papier/section-sponsor-articles`
**AQL**: **Yes** — `exclude_current: true`, `enable_caching: true`

Articles by a specific sponsor, shown on `single-dp_sponsor.html`. 3-column card-hover grid with separator above. "Artikels deur hierdie borg" heading.

---

## 8. section-sponsor-grid

**Slug**: `die-papier/section-sponsor-grid`
**React source**: Loosely based on `Sponsors.tsx` / `SponsorArchive.tsx`

Sponsor logo showcase grouped by tier. Two `core/query` blocks:
- "Hoofborge" (3-column, larger logos, `dp_sponsor_tier: hoof`)
- "Vennote" (6-column, smaller logos, `dp_sponsor_tier: vennoot`)

---

## 9. section-sponsor-banner

**Slug**: `die-papier/section-sponsor-banner`

Compact sponsor branding banner. Uses `dp/sponsor-banner` block.

---

## 10. section-pricing-table

**Slug**: `die-papier/section-pricing-table`
**Replacement for**: ~~`dp/pricing-table`~~ (DEPRECATED)

Subscription pricing display built with core blocks (`core/columns`, `core/group`, `core/heading`, `core/list`, `core/buttons`). Three tiers: Digital (R140/pm), Delivery (R180/pm), Combo (R220/pm). Pricing follows `/guidelines/content/pricing.md`.

---

## 11. section-cta-card

**Slug**: `die-papier/section-cta-card`
**React source**: `CallToAction.tsx`

Versatile CTA banner supporting dark/light/brand themes with optional background image overlay. Used on About, Subscribe, and other static pages.

---

## 12. section-share

**Slug**: `die-papier/section-share`

Social sharing buttons row (Facebook, Twitter/X, WhatsApp, Email, Copy Link). Placed below article content on single post pages.

---

## 13. section-team-grid

**Slug**: `die-papier/section-team-grid`
**React source**: `TeamGrid.tsx`

Responsive team member grid with circular avatars, name (serif heading), role (uppercase red), optional bio, and social links. Configurable column count (2/3/4).

---

## 14. section-post-meta / section-post-meta-compact

**Slugs**: `die-papier/section-post-meta`, `die-papier/section-post-meta-compact`

Post metadata display:
- **Full**: "deur [Author] in [Category] op [Date]" + optional "Laas opgedateer" + sponsored badge
- **Compact**: Single-line with category pill, author, relative time — used inside archive cards

---

## 15. section-breadcrumbs

**Slug**: `die-papier/section-breadcrumbs`

Wrapper for `yoast-seo/breadcrumbs` block. Styled with `is-style-section-breadcrumb`. Also available as `parts/breadcrumbs.html` template part and `hidden-breadcrumbs` pattern.

---

## 16. section-homepage-poll (Planned)

**Slug**: `die-papier/section-homepage-poll`
**Status**: Planned — uses `gravityforms/form` with Gravity Forms Polls add-on

Interactive reader poll for homepage sidebar or main content.

---

## Cross-References

- [Pattern Strategy](/guidelines/wordpress-migration/pattern-strategy.md) — Naming conventions, DRY principle
- [Section Styles Architecture](/guidelines/SECTION-STYLES-CSS-TO-JSON.md) — 24 section style variations
- [FAQ Sections](/guidelines/components/faq-sections.md) — Page-level FAQ patterns