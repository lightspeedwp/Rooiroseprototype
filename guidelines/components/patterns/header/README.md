# Header Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Header)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/header/`
**Total**: 3 patterns

---

## Overview

Header patterns define the site's top-level navigation and branding areas. They are designed to be used inside the `header` template part.

---

## Pattern Inventory

| Pattern | Slug | Purpose |
|:---|:---|:---|
| header | `die-papier/header` | Default site header with nav and search |
| header-masthead | `die-papier/header-masthead` | Desktop logo and secondary nav |
| header-transparent | `die-papier/header-transparent` | Overlay version for hero pages |

---

## Implementation Standards

### Block Composition
Headers typically use a `core/group` with `tagName: "header"` and a nested `core/columns` block for layout.

### Responsiveness
Header patterns must include the `die-papier/menu-mobile` pattern reference for small screen navigation.
