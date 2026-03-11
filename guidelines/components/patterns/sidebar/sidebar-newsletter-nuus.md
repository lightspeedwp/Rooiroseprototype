# Sidebar: Nuusbrief Kantbalk — Nuus (Newsletter Sidebar for News)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/sidebar-newsletter-nuus`  
**Folder**: `sidebar/`  
**Source**: `patterns/sidebar/sidebar-newsletter-nuus.php`

---

## Overview

Category-specific newsletter signup widget for the Nuus (News) category archives. Uses a dedicated Gravity Forms form (ID 44) for subscriber segmentation by category interest. Card-styled with an MREC ad below.

## Block Structure

- `core/group` (`is-style-card`, padding medium, blockGap small)
  - `core/heading` (H3, centered, `textColor: secondary`) — "Nuus Nuusbrief"
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — "Ontvang die nuutste nuusstories..."
  - `gravityforms/form` (formId 44, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Privacy policy link
- `core/group` (margin-top medium)
  - `advads/gblock` — `dp-sidebar-newsletter-mrec` (centered MREC ad)

## Gravity Forms

- **Form ID**: 44 (Nuus-specific newsletter)
- **Purpose**: Category-based subscriber segmentation

## Ad Placement

- `dp-sidebar-newsletter-mrec` — MREC ad below newsletter form

## Related Files

- `/guidelines/components/patterns/section/section-newsletter-cta.md` — Full newsletter CTA section
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md` — Forms integration
