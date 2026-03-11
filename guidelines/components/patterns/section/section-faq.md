# Afdeling: FAQ Akkoordion

**Last updated**: 2026-03-02
**Slug**: `die-papier/section-faq`
**Folder**: `section/`
**Source**: `patterns/section/section-faq.php`

---

## Overview
A dynamic FAQ section that uses the Yoast SEO FAQ block for improved search engine schema (Schema.org).

## Composition
- **Layout**: 1-column, constrained width
- **Blocks**: `yoast/faq-block` with individual `yoast/faq-question` and `yoast/faq-answer` items.

## Block Structure
- `core/group` (`is-style-section-white`, inner padding 60px)
  - `core/heading` (H2, "Gereelde Vrae")
  - `core/yoast/faq-block`
    - `core/yoast/faq-question` (H3 or H4)
    - `core/yoast/faq-answer` (Rich text)

## Implementation Notes
- **SEO**: Always use the Yoast FAQ block instead of standard accordion blocks to ensure the site ranks better for "People Also Ask" search results.
- **Language**: All questions and answers should be in Afrikaans.
- **Placement**: Commonly used at the bottom of informational pages (About, Contact, Subscriptions).
- **CPT Integration**: In production, it can be updated to use a `core/query` to fetch FAQs from the `dp_faq` CPT.