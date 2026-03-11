# Afdeling: Prystabel

**Last updated**: 2026-03-02
**Slug**: `die-papier/section-pricing-table`
**Folder**: `section/`
**Source**: `patterns/section/section-pricing-table.php`

---

## Overview
A high-contrast subscription pricing grid with comparison of tiers. Primarily used on the `/teken-in/` subpages.

## Composition
- **Layout**: 3-column grid (Flex row on mobile)
- **Tiers**: Maandeliks, Kwartaalliks, Jaarliks
- **Price**: Large font size `heading-1`

## Block Structure
- `core/group` (`is-style-section-white`, inner padding 80px)
  - `core/columns` (3 columns, blockGap 40px)
    - `core/column` (Tier 1 - Maandeliks)
      - `core/group` (`is-style-card`, text-center align)
        - `core/heading` (H3, "Maandeliks")
        - `core/paragraph` (price text, R140)
        - `core/list` (benefits)
        - `core/buttons` (CTA "Teken Nou In")
    - `core/column` (Tier 2 - Kwartaalliks, Featured)
      - `core/group` (`is-style-card-navy`, text-center align)
        - `core/heading` (H3, "Kwartaalliks")
        - `core/paragraph` (price text, R380)
        - `core/list` (benefits)
        - `core/buttons` (CTA "Teken Nou In")
    - `core/column` (Tier 3 - Jaarliks)
      - `core/group` (`is-style-card`, text-center align)
        - `core/heading` (H3, "Jaarliks")
        - `core/paragraph` (price text, R1400)
        - `core/list` (benefits)
        - `core/buttons` (CTA "Teken Nou In")

## Implementation Notes
- **Featured Tier**: The middle tier (`Kwartaalliks`) is usually highlighted using the `is-style-card-navy` style class to drive conversion.
- **Button Mapping**: Buttons should link to the corresponding WooCommerce product or checkout URL.
- **Responsive**: Stacks to 1 column on mobile.