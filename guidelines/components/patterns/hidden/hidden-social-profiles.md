# Hidden: Social Profiles

**Last updated**: 2026-03-04  
**Slug**: `die-papier/hidden-social-profiles`  
**Folder**: `hidden/`  
**Source**: `patterns/hidden/hidden-social-profiles.php`  
**Inserter**: no  
**Referenced by**: `page-about.php`, `menu-mobile.php`, `footer.php`

---

## Overview

Die Papier's official social media profile links using the `core/social-links` block. White logo-only icons with `x-small` gap. Hidden pattern (not shown in inserter) used as a composable snippet in footers, about pages, and the mobile menu.

## Block Structure

- `core/social-links` (`is-style-logos-only`, iconColor `base`/white, blockGap `x-small`)
  - `core/social-link` — Facebook: `https://www.facebook.com/diepapier.za/about/`
  - `core/social-link` — Instagram: `https://instagram.com/die.papier`
  - `core/social-link` — X: `https://x.com/die_papier`
  - `core/social-link` — YouTube: `https://www.youtube.com/@diepapier`
  - `core/social-link` — LinkedIn: `https://linkedin.com/company/diepapier/`
  - `core/social-link` — TikTok: `https://www.tiktok.com/@diepapier`
  - `core/social-link` — Email: `mailto:lesers@diepapier.co.za`

## Canonical URLs

All URLs sourced from `/guidelines/wordpress-migration/canonical-social-urls.md`.

## Related Files

- `/guidelines/wordpress-migration/canonical-social-urls.md` — Single source of truth for social URLs
- `/guidelines/components/blocks/core/social-links.md` — Social Links block reference
