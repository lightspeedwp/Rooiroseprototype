# Navigation Patterns

**Last updated**: 2026-03-04

## Overview

Navigation patterns handle the site's menu system, including the mobile slide-in panel and mega menu promotional cards. These patterns are registered under the `die-papier-navigation` category.

## Patterns

| Pattern | Slug | Description |
|:--------|:-----|:------------|
| [Menu Mobile](menu-mobile.md) | `die-papier/menu-mobile` | Full slide-in mobile menu panel |
| [Menu Card — Latest Edition](menu-card-latest-edition.md) | `die-papier/menu-card-latest-edition` | Promotional card showing latest e-edition cover |
| [Menu Card — Subscribe CTA](menu-card-subscribe-cta.md) | `die-papier/menu-card-subscribe-cta` | Red subscription call-to-action card |

## Architecture

The mobile menu (`menu-mobile.php`) is the parent pattern that composes:
1. Close button (custom HTML with SVG icon)
2. `core/navigation` block (vertical orientation, hardcoded links)
3. Utility links section (Teken in, E-Uitgawes, My Rekening, Soek)
4. `menu-card-subscribe-cta` pattern (red CTA)
5. `menu-card-latest-edition` pattern (e-edition cover card)
6. `hidden-social-profiles` pattern (social media links)

## Related Files

- `/guidelines/components/parts/header.md` — Header template part (triggers mobile menu)
- `/guidelines/components/patterns/hidden/hidden-social-profiles.md` — Social links used in mobile menu
