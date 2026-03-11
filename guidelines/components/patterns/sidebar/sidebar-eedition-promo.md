# Sybalk: E-Uitgawe Promosie

**Last updated**: 2026-03-01
**Slug**: `die-papier/sidebar-eedition-promo`
**Folder**: `sidebar/`
**Source**: `patterns/sidebar/sidebar-eedition-promo.php`

---

## Overview
A dynamic sidebar widget that fetches the latest published e-edition issue and displays it with a "Lees Nou" call-to-action.

## Composition
- **Background**: `is-style-card-navy` (brand-navy, white text)
- **Layout**: 1-column, fixed width for sidebar usage (33% column)
- **Content**: Featured image of the latest e-edition cover.

## Block Structure
- `core/group` (`is-style-card-navy`, inner padding 40px)
  - `core/heading` (H4, white text, "Die nuutste uitgawe is nou beskikbaar")
  - `core/post-featured-image` (aspectRatio 3/4, rounded corners)
  - `core/paragraph` (white text, publication date)
  - `core/buttons` (flex row — centered CTA)
    - `core/button` ("Lees Nou", `is-style-outline-white`)

## Implementation Notes
- **PHP Logic**: This pattern includes a `WP_Query` inside the `sidebar-eedition-promo.php` file to always fetch the *single* latest `dp_eedition` post.
- **Style Class**: `is-style-card-navy` (brand-navy, white text).
- **Access Control**: The "Lees Nou" button should link to the single e-edition page where the access gate (members-only) is handled.
- **Placement**: Should be placed at the top of the sidebar on the homepage and article archive pages.
