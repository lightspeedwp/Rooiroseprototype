# Part Pattern: Post Meta Top

**Last updated**: 2026-03-04  
**Slug**: `die-papier/part-post-meta-top`  
**Folder**: `parts/`  
**Source**: `patterns/parts/part-post-meta-top.php`  
**Inserter**: false  
**Referenced by**: `single.html`, `single-dp_event.html`, `single-dp_obituary.html`, `single-dp_multimedia.html`, `single-dp_competition.html`

---

## Overview

Article metadata bar displayed above the post content. Shows author (linked), date (Afrikaans format), reading time, category terms, and compact social sharing (right-aligned). Bordered at the bottom.

## Block Structure

- `core/group` (flex, wrap, space-between, padding small, border-bottom `border-light` 1px)
  - `core/group` (flex, wrap, left-aligned, blockGap x-small) — Meta items
    - `core/post-author` (no avatar, no bio, linked, `fontSize: small`)
    - `core/group` (flex, no wrap, blockGap 4px)
      - `core/post-date` (format `j F Y`, `fontSize: small`, `textColor: main-accent`)
    - `dp/time-to-read` (`fontSize: small`, normal weight)
    - `core/post-terms` (category, `fontSize: small`, `textColor: primary`, hover `primary-alt`)
  - `wp:pattern` — `die-papier/hidden-social-sharing`

## Design Tokens

- **Border**: Bottom 1px `border-light`
- **Padding**: `small` top/bottom
- **Date format**: `j F Y` (Afrikaans: "4 Maart 2026")
- **Category links**: `primary` color, hover `primary-alt`

## Custom Block

- `dp/time-to-read` — Custom block from `die-papier-blocks` plugin, shows estimated reading time

## Related Files

- `/guidelines/components/patterns/parts/part-post-meta-bottom.md` — Bottom meta bar
- `/guidelines/components/patterns/hidden/hidden-social-sharing.md` — Compact sharing
- `/guidelines/components/parts/post-meta.md` — Template part guideline
