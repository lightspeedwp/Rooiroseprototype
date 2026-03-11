# Template Part: Sidebar — Homepage

**Last updated**: 2026-03-04  
**File**: `parts/sidebar-home.html`  
**Area**: sidebar

---

## Overview

Homepage-specific sidebar template part. Single-line file that references the `sidebar-home` pattern. Used by the front-page template to render the right-hand sidebar column with e-edition promo, polls, competition cards, delivery CTA, and ad slots.

## Template Part Structure

```html
<!-- wp:pattern {"slug":"die-papier/sidebar-home"} /-->
```

## Used By

- `front-page.html` (via `page-home.php` pattern's column layout)

## Related Files

- `/guidelines/components/patterns/sidebar/sidebar-home.md` — Pattern with full block structure
- `/guidelines/components/parts/sidebar.md` — Default sidebar part
