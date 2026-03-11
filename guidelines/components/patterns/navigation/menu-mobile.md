# Navigation: Mobile Menu

**Last updated**: 2026-03-04  
**Slug**: `die-papier/menu-mobile`  
**Folder**: `navigation/`  
**Source**: `patterns/navigation/menu-mobile.php`

---

## Overview

Full slide-in mobile navigation panel. Navy background with white text. Contains main site navigation links, utility links, subscription CTA card, latest e-edition card, and social media profiles. Triggered by hamburger button in the header.

## Composition

- **Background**: `secondary` (navy `#142135`)
- **Text**: `base` (white)
- **Layout**: Vertical flex, full-height panel
- **Custom JS Required**: Menu open/close behavior via `mobile-menu-overlay` and `mobile-menu-panel` classes

## Block Structure

- `core/group` (`mobile-menu-overlay`) — Backdrop overlay (hidden by default)
- `core/group` (`mobile-menu-panel`, `backgroundColor: secondary`, `textColor: base`, padding large/medium)
  - `core/group` (`mobile-menu-close`, flex right) — Close button
    - `core/html` — `<button>` with SVG X icon, `aria-label="Sluit spyskaart"`
  - `core/navigation` (vertical orientation, `overlayMenu: never`, blockGap `small`)
    - Navigation links: Tuisblad, Nuus, Sport, Skole, Leefstyl, Opinie, Meer
  - `core/separator` (`border-light`)
  - `core/group` (utility links, vertical flex)
    - Paragraphs: Teken in, E-Uitgawes, My Rekening, Soek (`fontSize: small`)
  - `core/group` (bottom cards section, padding-top `large`)
    - `wp:pattern` — `die-papier/menu-card-subscribe-cta`
    - `wp:pattern` — `die-papier/menu-card-latest-edition`
  - `core/separator` (`is-style-wide`, `border-light`)
  - `core/group` (social links, flex center)
    - `wp:pattern` — `die-papier/hidden-social-profiles`

## Accessibility

- Close button has `aria-label="Sluit spyskaart"` (Afrikaans: "Close menu")
- Overlay click should also close the menu
- Focus trap should be implemented in the companion JS

## React Equivalent

- `MobileMenu.tsx` / `NavigationDrawer.tsx`
- Menu state managed by header component

## Related Files

- `/guidelines/components/patterns/navigation/menu-card-subscribe-cta.md`
- `/guidelines/components/patterns/navigation/menu-card-latest-edition.md`
- `/guidelines/components/patterns/hidden/hidden-social-profiles.md`
- `/guidelines/components/parts/header.md`
