# Afdeling: Nuusbrief Oproep (Vol)

**Last updated**: 2026-03-01
**Slug**: `die-papier/section-newsletter-cta-full`
**Folder**: `section/`
**Source**: `patterns/section/section-newsletter-cta-full.php`

---

## Overview
A full-width, high-impact newsletter subscription banner. Primarily used at the bottom of the homepage and archives.

## Composition
- **Background**: `is-style-section-navy` (brand-navy, white text)
- **Layout**: Constrained width, centered content
- **Form**: Integrated `gravityforms/form` block (ID 1 by default)

## Block Structure
- `core/group` (`alignfull`, `is-style-section-navy`, inner padding 80px)
  - `core/group` (`layout-constrained`)
    - `core/heading` (H2, white text, "Bly op die hoogte")
    - `core/paragraph` (white text, subscription benefit text)
    - `core/columns` (2 columns)
      - `core/column` (content description)
      - `core/column` (Gravity Forms block)

## Implementation Notes
- **Style Class**: `is-style-section-navy` (brand-navy, white text).
- **Form ID**: Uses the Gravity Forms plugin; the form ID should be configured in the block editor per site.
- **Deduplication**: This section is often placed after large content grids to catch engaged readers.
