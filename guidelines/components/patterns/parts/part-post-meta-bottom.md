# Part Pattern: Post Meta Bottom

**Last updated**: 2026-03-04  
**Slug**: `die-papier/part-post-meta-bottom`  
**Folder**: `parts/`  
**Source**: `patterns/parts/part-post-meta-bottom.php`  
**Inserter**: false  
**Referenced by**: `single.html`, `single-dp_event.html`, `single-dp_obituary.html`, `single-dp_multimedia.html`, `single-dp_competition.html`

---

## Overview

Article metadata bar displayed below the post content. Shows post tags ("Sleutelwoorde") and an expanded social sharing section with large icons and Afrikaans labels. Bordered top and bottom.

## Block Structure

- `core/group` (`dp-post-meta-bottom`, border top+bottom `border-light` 1px, padding medium)
  - `core/group` (flex, wrap, margin-bottom small) — Tags section
    - Paragraph — "Sleutelwoorde:" (bold 700, `fontSize: small`)
    - `core/post-terms` (post_tag, comma separator, `fontSize: small`, `textColor: primary`, hover `primary-alt`)
  - `core/group` — Sharing section
    - `core/heading` (H3, `fontSize: medium`, margin-bottom small) — "Deel hierdie artikel"
    - `outermost/social-sharing` — Expanded with labels
      - Networks: facebook, whatsapp, x, email, copy
      - `iconSize`: large
      - `iconStyle`: filled
      - `showLabels`: true
      - Labels (Afrikaans): "Deel op Facebook", "Stuur op WhatsApp", "Deel op X", "Stuur per e-pos", "Kopieer skakel"
      - Layout: flex, wrap, left-aligned

## Differences from `part-post-meta-top`

| Feature | Top | Bottom |
|:--------|:----|:-------|
| Sharing size | Default (compact) | Large (expanded) |
| Labels | Hidden | Shown (Afrikaans) |
| Content | Author, date, read time, category | Tags, sharing |
| Border | Bottom only | Top and bottom |

## Related Files

- `/guidelines/components/patterns/parts/part-post-meta-top.md` — Top meta bar
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md` — Social sharing plugin
