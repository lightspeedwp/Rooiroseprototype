# Page: Stuur 'n Shoutout (Submit Shoutout)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-submit-shoutout`  
**Folder**: `page/`  
**Source**: `patterns/page/page-submit-shoutout.php`

---

## Overview

Community shoutout submission page. Allows readers to recognize someone special in their community. Centered layout with Gravity Forms form (ID 28).

## Composition

- **Layout**: Full-width, constrained to 800px
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 28, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 800px, padding large)
  - `core/heading` (H1, centered) — "Stuur 'n Shoutout"
  - `core/paragraph` (centered) — Description about community recognition
  - `gravityforms/form` (formId 28, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Publication consent notice

## Gravity Forms

- **Form ID**: 28
- **Purpose**: Community shoutouts (teachers, volunteers, neighbours)

## Related Files

- `/guidelines/components/patterns/page/page-submit-hub.md` — Parent submission hub
