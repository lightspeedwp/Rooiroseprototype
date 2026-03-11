# Page: Stuur 'n Storie (Submit Story)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-submit-story`  
**Folder**: `page/`  
**Source**: `patterns/page/page-submit-story.php`

---

## Overview

Story/news tip submission page. Allows readers to pitch story ideas to the editorial team. Centered layout with Gravity Forms form (ID 8).

## Composition

- **Layout**: Full-width, constrained to 800px
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 8, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 800px, padding large)
  - `core/heading` (H1, centered) — "Stuur 'n Storie"
  - `core/paragraph` (centered) — Description about news tips and story ideas
  - `gravityforms/form` (formId 8, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Confidentiality note

## Gravity Forms

- **Form ID**: 8
- **Purpose**: Story ideas and news leads for editorial investigation

## Related Files

- `/guidelines/components/patterns/page/page-submit-hub.md` — Parent submission hub
- `/guidelines/components/patterns/page/page-submit-tip.md` — Similar (anonymous tips)
