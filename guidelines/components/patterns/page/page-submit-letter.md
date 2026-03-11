# Page: Stuur 'n Lesersbrief (Submit Letter to Editor)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-submit-letter`  
**Folder**: `page/`  
**Source**: `patterns/page/page-submit-letter.php`

---

## Overview

Letter to editor submission page. Centered layout with heading, description, Gravity Forms form (ID 7), and editorial disclaimer. Part of the submission hub pages.

## Composition

- **Layout**: Full-width, constrained to 800px
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 7, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 800px, padding large)
  - `core/heading` (H1, centered) — "Stuur 'n Lesersbrief"
  - `core/paragraph` (centered) — Description about sharing opinions
  - `gravityforms/form` (formId 7, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Editorial editing disclaimer

## Gravity Forms

- **Form ID**: 7
- **Purpose**: Reader letters (may be published in print/online)

## Related Files

- `/guidelines/components/patterns/page/page-submit-hub.md` — Parent submission hub
