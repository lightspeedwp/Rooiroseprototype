# Section: Kompetisie Inskrywing (Competition Entry)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/section-competition-entry`  
**Folder**: `section/`  
**Source**: `patterns/section/section-competition-entry.php`

---

## Overview

Competition entry form section with a red background (`is-style-section-red`), white text, and a Gravity Forms entry form (ID 24) inside a card. Links to competition terms and conditions.

## Composition

- **Layout**: Full-width, constrained to 640px
- **Section Style**: `is-style-section-red` (brand red background, white text)
- **Padding**: `x-large` top/bottom, `medium` blockGap
- **Form**: Gravity Forms (form ID 24, AJAX)

## Block Structure

- `core/group` (alignfull, `is-style-section-red`, constrained 640px, padding x-large)
  - `core/heading` (H2, centered, `textColor: base`) — "Wen Met Die Papier"
  - `core/paragraph` (centered, `textColor: base`) — Entry description
  - `core/group` (`is-style-card`, padding large)
    - `gravityforms/form` (formId 24, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: base`) — Terms link: `/kompetisie-voorwaardes`

## Gravity Forms

- **Form ID**: 24 (Competition entry form)
- **Note**: Form ID should be updated per competition in production

## Related Files

- `/guidelines/components/patterns/section/section-competition-meta.md` — Competition metadata section
- `/guidelines/components/patterns/page/page-competition-terms.md` — Terms page
