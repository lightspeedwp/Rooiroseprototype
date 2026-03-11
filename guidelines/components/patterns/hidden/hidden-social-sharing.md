# Hidden: Social Sharing (Compact)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/hidden-social-sharing`  
**Folder**: `hidden/`  
**Source**: `patterns/hidden/hidden-social-sharing.php`  
**Inserter**: no  
**Referenced by**: `single-dp_event.html`, `single-dp_obituary.html`, `single-dp_multimedia.html`, `single-dp_competition.html`, `single-dp_sponsor.html`, `part-post-meta-top.php`

---

## Overview

Compact social sharing buttons for articles and CPT singles. Uses the Outermost Social Sharing plugin. Shows 5 sharing options (Facebook, WhatsApp, X, Email, Copy Link) in a right-aligned horizontal row without labels.

## Block Structure

- `outermost/social-sharing` — Single self-closing block
  - `shareText`: "Deel:" (Afrikaans: "Share:")
  - `networks`: facebook, whatsapp, x, email, copy
  - `iconSize`: default
  - `iconStyle`: filled
  - `showLabels`: false
  - `layout`: flex, no wrap, justify right

## Network Priority

WhatsApp prioritized for South African audience (high WhatsApp usage).

## Related Files

- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md` — Full plugin docs
- `/guidelines/components/patterns/parts/part-post-meta-top.md` — Uses this pattern
- `/guidelines/components/patterns/parts/part-post-meta-bottom.md` — Expanded sharing variant with labels
