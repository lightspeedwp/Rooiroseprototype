# Page: Stuur Terugvoer (Submit Feedback)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-submit-feedback`  
**Folder**: `page/`  
**Source**: `patterns/page/page-submit-feedback.php`

---

## Overview

Feedback submission page. Centered layout with heading, description, Gravity Forms form (ID 10), and a footer note. Part of the submission hub pages (`page-submit-hub.md`).

## Composition

- **Layout**: Full-width, constrained to 800px
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 10, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 800px, padding large)
  - `core/heading` (H1, centered) — "Stuur Terugvoer"
  - `core/paragraph` (centered) — Description about feedback value
  - `gravityforms/form` (formId 10, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Thank you note

## Gravity Forms

- **Form ID**: 10
- **Purpose**: General feedback (praise, criticism, suggestions)

## Related Files

- `/guidelines/components/patterns/page/page-submit-hub.md` — Parent submission hub
- `/guidelines/components/patterns/page/page-submit.md` — Submit overview
