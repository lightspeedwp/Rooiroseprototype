# Sybalk: Kompetisie Kaart

**Last updated**: 2026-03-01
**Slug**: `die-papier/sidebar-competition-card`
**Folder**: `sidebar/`
**Source**: `patterns/sidebar/sidebar-competition-card.php`

---

## Overview
A high-impact sidebar widget that fetches the latest active competition and displays it with a "Skryf Nou In" call-to-action.

## Composition
- **Background**: `is-style-card-red` (brand-red, white text)
- **Layout**: 1-column, fixed width for sidebar usage (33% column)
- **Content**: Featured image of the latest active competition prize.

## Block Structure
- `core/group` (`is-style-card-red`, inner padding 40px)
  - `core/heading` (H4, white text, "Skryf in en wen!")
  - `core/post-featured-image` (aspectRatio 1:1, rounded corners)
  - `core/paragraph` (white text, prize description)
  - `core/buttons` (flex row — centered CTA)
    - `core/button` ("Skryf Nou In", `is-style-fill-white`)

## Implementation Notes
- **PHP Logic**: This pattern includes a `WP_Query` inside the `sidebar-competition-card.php` file to always fetch the *single* latest `dp_competition` post with a status of `active` and a closing date in the future.
- **Style Class**: `is-style-card-red` (brand-red, white text).
- **Responsive**: Full width within the sidebar column; use `1:1` aspect ratio for the competition image.
- **Placement**: Commonly used in the sidebar of article archives and the homepage.
