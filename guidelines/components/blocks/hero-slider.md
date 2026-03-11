# ⛔ DEPRECATED — Block: dp/hero-slider

**Last updated**: 2026-02-27
**Status**: DEPRECATED — block source deleted from plugin (2026-02-25)
**Replacement**: `section-content-hero.php` pattern (`core/cover` block) + `dp/slider` block (generic carousel)
**See**: `/guidelines/components/blocks/content-hero.md`, pattern `section-brand-quotes.php`

---

## Replacement Guide

The homepage hero slider has been replaced by the `section-content-hero.php` pattern (using `core/cover` block) for hero banners. For carousel/slider functionality (e.g., brand quotes), use the generic `dp/slider` block with `core/quote` InnerBlocks.

The `dp/slider` block supports: `slidesToShow`, `autoplay`, `interval`, `arrows`, `dots`, `loop` attributes, Interactivity API for frontend JS, InnerBlocks for flexible content.

## Historical Reference

Homepage featured-article carousel. Auto-advanced every 6s with manual prev/next arrows. Displayed up to 5 featured articles with full-bleed images, category badge, title, excerpt, author and timestamp. Included "Nuusflitse" sidebar on desktop. Used Interactivity API for slide transitions. Container height `lg:h-[440px]`, sidebar width `w-[300px]`.