# Footer Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Footer)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/footer/`
**Total**: 2 patterns

---

## Overview

Footer patterns define the site's legal, navigation, and secondary branding information at the bottom of every page. They are designed to be used inside the `footer` template part.

---

## Pattern Inventory

| Pattern | Slug | Purpose |
|:---|:---|:---|
| footer | `die-papier/footer` | Default 4-column site footer |
| footer-simple | `die-papier/footer-simple` | Minimal variant for checkout and legal pages |

---

## Implementation Standards

### Block Composition
Footers typically use a `core/group` with `tagName: "footer"` and an `is-style-section-navy` background style.

### Social Integration
The main footer pattern includes the `outermost/social-sharing` block for site profile links.
