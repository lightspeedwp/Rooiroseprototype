# Section Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Sections)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/section/`
**Total**: 21 patterns

---

## Overview

Section patterns are **Tier 2** components that define reusable content sections. They typically compose one or more query patterns, card patterns, and structural blocks into a functional UI region.

---

## Homepage Category Sections (13)

These sections are specifically designed for the homepage composition. They use `is-style-section-white` or `is-style-section-muted` for background variation.

| Pattern | Slug | Category | Background |
|:---|:---|:---|:---|
| homepage-top-stories | `die-papier/homepage-top-stories` | Featured | White |
| homepage-nuus | `die-papier/homepage-nuus` | Nuus | White |
| homepage-sport | `die-papier/homepage-sport` | Sport | White |
| homepage-sake | `die-papier/homepage-sake` | Sake | White |
| homepage-skole | `die-papier/homepage-skole` | Skole | White |
| homepage-leefstyl | `die-papier/homepage-leefstyl` | Leefstyl | White |
| homepage-dink | `die-papier/homepage-dink` | Dink/Opinie | White |
| homepage-nuusflitse | `die-papier/homepage-nuusflitse` | Breaking | Navy |
| homepage-multimedia | `die-papier/homepage-multimedia` | Multimedia | White |
| homepage-obituaries | `die-papier/homepage-obituaries` | Obituaries | Muted |
| homepage-events | `die-papier/homepage-events` | Events | White |
| section-brand-quotes | `die-papier/section-brand-quotes` | Testimonials | Navy |
| section-homepage-poll | `die-papier/section-homepage-poll` | Interactive | Muted |

---

## Reusable Functional Sections (8)

These patterns provide standardized UI for common page features.

| Pattern | Slug | Purpose | Sync Type |
|:---|:---|:---|:---|
| section-newsletter-cta | `die-papier/section-newsletter-cta` | Inline signup box | Full |
| section-newsletter-cta-full | `die-papier/section-newsletter-cta-full` | Full-width banner | Full |
| section-newsletter-form | `die-papier/section-newsletter-form` | Dedicated form page | Part |
| section-faq | `die-papier/section-faq` | FAQ Accordion | Part |
| section-related-articles | `die-papier/section-related-articles` | Related articles loop | Part |
| section-subscription-cta | `die-papier/section-subscription-cta` | Navy benefit banner | Full |
| section-pricing-table | `die-papier/section-pricing-table` | Pricing tier grid | Part |
| section-team-grid | `die-papier/section-team-grid` | Staff member grid | Part |

---

## Implementation Standards

### Section Styling
All section patterns must use standardized `tagName` and `className` attributes:

```html
<!-- wp:group {"tagName":"section","className":"is-style-section-white","layout":{"type":"constrained"}} -->
<section class="wp-block-group is-style-section-white">
    <!-- Inner blocks / patterns -->
</section>
<!-- /wp:group -->
```

### Headings
Section titles must use `is-style-section-title` (H2 or H3 depending on hierarchy):

```html
<!-- wp:heading {"level":2,"className":"is-style-section-title"} -->
<h2 class="is-style-section-title">Nuus</h2>
<!-- /wp:heading -->
```

---

## Usage in Templates

### Single Post Template
The `single.html` template composes these sections at the bottom of the article:

1. `die-papier/section-share`
2. `die-papier/section-related-articles`
3. `die-papier/section-newsletter-cta`
4. `die-papier/hidden-comments`

### Static Page Template
The `page.html` template uses `section-faq` as a standard footer component for all information pages.
