# Navigation: Menu Card — Subscribe CTA

**Last updated**: 2026-03-04  
**Slug**: `die-papier/menu-card-subscribe-cta`  
**Folder**: `navigation/`  
**Source**: `patterns/navigation/menu-card-subscribe-cta.php`  
**Referenced by**: `menu-mobile.php`

---

## Overview

Red subscription call-to-action card displayed in the mobile menu. Promotes e-edition subscriptions with pricing and a full-width button. High-contrast red background with white text, inverted button (white background, red text).

## Composition

- **Background**: `primary` (red `#D70025`)
- **Text**: `base` (white)
- **Border**: 8px radius
- **Padding**: `small` all sides

## Block Structure

- `core/group` (`backgroundColor: primary`, `textColor: base`, 8px radius, padding `small`)
  - `core/heading` (H4, `fontSize: large`) — "Teken in vir e-uitgawes"
  - `core/paragraph` (`fontSize: base`) — "Vanaf R140/maand"
  - `core/buttons`
    - `core/button` (`backgroundColor: base`, `textColor: primary`, width 100%) — "Teken in" → `/inteken/e-uitgawe`

## Design Tokens

- **Button**: Full-width (100%), white background, red text — inverted from card colors
- **Heading**: `large` font size
- **Price**: `base` font size

## React Equivalent

- Subscribe CTA component in mobile navigation drawer

## Related Files

- `/guidelines/components/patterns/navigation/menu-mobile.md` — Parent menu
- `/guidelines/components/patterns/section/section-subscription-cta.md` — Similar full-section CTA
- `/guidelines/components/patterns/page/page-subscribe-eedition.md` — Target page
