# Page: Registreer (Register)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/page-register`  
**Folder**: `page/`  
**Source**: `patterns/page/page-register.php`

---

## Overview

User registration page with a centered form layout. Contains a heading, description paragraph, a Gravity Forms registration form (form ID 11) inside a card-styled group, and a login link for existing users.

## Composition

- **Layout**: Full-width, constrained to 640px content width
- **Padding**: `large` top/bottom
- **Form**: Gravity Forms (form ID 11, no title, no description, AJAX enabled)

## Block Structure

- `core/group` (alignfull, constrained 640px, padding large)
  - `core/heading` (H1, centered) — "Registreer"
  - `core/paragraph` (centered) — Description text about free account benefits
  - `core/group` (`is-style-card`, padding large all sides)
    - `gravityforms/form` (formId 11, title false, description false, ajax true)
  - `core/paragraph` (centered, `fontSize: small`, `textColor: main-accent`) — "Het jy reeds 'n rekening? [Meld aan](/my-rekening)"

## Afrikaans Content

- Heading: "Registreer"
- Description: "Skep 'n gratis rekening om toegang te kry tot eksklusiewe inhoud, nuusbriewe en meer. Bestaande intekenare kan aanmeld om hul profiel te bestuur."
- Login link: "Het jy reeds 'n rekening? Meld aan"

## Gravity Forms Integration

- **Form ID**: 11 (Registration form)
- **AJAX**: Enabled for seamless submission
- **Title/Description**: Hidden (provided by pattern heading/paragraph instead)

## React Equivalent

- `Register.tsx` page component

## Related Files

- `/guidelines/components/patterns/page/page-auth.md` — Authentication page pattern
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md` — Gravity Forms integration
