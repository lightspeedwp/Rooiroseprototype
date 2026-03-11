# Sidebar: Tuisblad (Homepage Sidebar)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/sidebar-home`  
**Folder**: `sidebar/`  
**Source**: `patterns/sidebar/sidebar-home.php`  
**Inserter**: false  
**Referenced by**: `sidebar-home.html` template part, `page-home.php`

---

## Overview

Homepage sidebar containing promotional widgets, ads, and engagement elements. Uses `aside` semantic tag. Composes multiple patterns and Advanced Ads placements.

## Block Structure

- `core/group` (`tagName: aside`, `className: sidebar-home`)
  - `wp:pattern` — `die-papier/sidebar-eedition-promo` (latest e-edition cover)
  - `advads/gblock` — `dp-sidebar-home-top` (MREC ad)
  - `wp:pattern` — `die-papier/section-homepage-poll` (reader poll)
  - `advads/gblock` — `dp-sidebar-home-middle` (MREC ad)
  - `wp:pattern` — `die-papier/sidebar-competition-card` (active competition)
  - `core/group` — Delivery CTA (red card)
    - H4 — "Huisaflewering" (Home delivery)
    - Paragraph — "Kry Die Papier elke Vrydag... Vanaf R140/maand"
    - Button (full-width, white on red) — "Teken in vir aflewering" → `/inteken/aflewering`
  - `advads/gblock` — `dp-sidebar-home-bottom` (MREC ad)

## Ad Placements

| Slot ID | Position | Format |
|:--------|:---------|:-------|
| `dp-sidebar-home-top` | Below e-edition promo | MREC |
| `dp-sidebar-home-middle` | Below poll | MREC |
| `dp-sidebar-home-bottom` | Below delivery CTA | MREC |

## Design Tokens

- **Delivery CTA**: `primary` background (red), `base` text (white), 8px radius, `medium` padding
- **Button**: Full-width, white background, red text (inverted)

## Related Files

- `/guidelines/components/patterns/sidebar/sidebar-eedition-promo.md`
- `/guidelines/components/patterns/sidebar/sidebar-competition-card.md`
- `/guidelines/components/patterns/section/section-homepage-poll.md`
- `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`
