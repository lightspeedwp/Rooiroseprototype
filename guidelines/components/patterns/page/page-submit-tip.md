# Page: Stuur 'n Nuuswenk (Submit News Tip)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-submit-tip`  
**Folder**: `page/`  
**Source**: `patterns/page/page-submit-tip.php`

---

## Overview

Confidential news tip submission page. Allows readers to send anonymous tips to the editorial team. Identity protection offered if requested. Centered layout with Gravity Forms form (ID 9).

## Composition

- **Layout**: Full-width, constrained to 800px
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 9, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 800px, padding large)
  - `core/heading` (H1, centered) — "Stuur 'n Nuuswenk"
  - `core/paragraph` (centered) — Description about confidential tips
  - `gravityforms/form` (formId 9, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — Confidentiality assurance

## Gravity Forms

- **Form ID**: 9
- **Purpose**: Confidential news tips (identity protection available)

## Related Files

- `/guidelines/components/patterns/page/page-submit-hub.md` — Parent submission hub
- `/guidelines/components/patterns/page/page-submit-story.md` — Similar (story pitches)
