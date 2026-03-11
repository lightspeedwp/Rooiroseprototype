# ⛔ DEPRECATED — Block: dp/pricing-table

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Status**: DEPRECATED — block source deleted from plugin (2026-02-25)
**Replacement**: Core blocks pattern `section-pricing-table.php` using `core/columns`, `core/group`, `core/heading`, `core/list`, `core/buttons`
**See**: Pattern file `/wordpress-export/themes/die-papier-theme/patterns/section-pricing-table.php`

---

## Replacement Guide

Pricing tables are now built with core WordPress blocks in a pattern. This provides full editor flexibility and avoids custom block maintenance. Pricing values follow `/guidelines/content/pricing.md`.

## Historical Reference

Subscription pricing display block. Rendered pricing tiers (Digital R140/pm, Delivery R180/pm, Combo R220/pm) as cards with feature lists. Used in subscribe pages (`page-subscribe.php`, `page-subscribe-delivery.php`, `page-subscribe-eedition.php`).