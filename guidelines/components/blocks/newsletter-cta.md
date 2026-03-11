# ⛔ DEPRECATED — Block: dp/newsletter-cta

**Last updated**: 2026-02-27
**Version**: 1.0
**Status**: DEPRECATED — block source deleted from plugin (2026-02-25)
**Replacement**: Gravity Forms — `gravityforms/form` block in patterns `section-newsletter-cta.php` and `section-newsletter-cta-full.php`
**See**: `/guidelines/components/patterns/sections.md` (Newsletter CTA section)

---

## Replacement Guide

Newsletter signup is now handled by Gravity Forms. Two pattern variants exist:

- `die-papier/section-newsletter-cta` — inline/sidebar variant
- `die-papier/section-newsletter-cta-full` — full-width variant with decorative background

Both use `<!-- wp:gravityforms/form {"formId":"NEWSLETTER_FORM_ID"} /-->` inside a styled `core/group` wrapper.

## Historical Reference

Full-width newsletter signup CTA section with decorative background blurs, large serif heading, description, 3-benefit grid, CTA button, and social proof text. Navy gradient background (`bg-gradient-to-br from-brand-navy`). Three variants: `full`, `inline`, `sidebar`. Content sourced from `NEWSLETTER_CTA` data object. Used MailPoet integration for signup.