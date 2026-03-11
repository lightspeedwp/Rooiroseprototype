# Hidden Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Hidden)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/hidden/`
**Total**: 9 patterns

---

## Overview

Hidden patterns are structural building blocks that have `Inserter: false` in their PHP header. They are not visible in the WordPress block inserter because they are designed to be composed into other patterns or template parts.

---

## Pattern Inventory

### Infrastructure (5)

| Pattern | Slug | Purpose | Used In |
|:---|:---|:---|:---|
| hidden-404 | `die-papier/hidden-404` | 404 Page Content | 404.html |
| hidden-no-results | `die-papier/hidden-no-results` | Query empty state | All archives |
| hidden-no-search-results | `die-papier/hidden-no-search-results` | Search empty state | search.html |
| hidden-breadcrumbs | `die-papier/hidden-breadcrumbs` | Breadcrumb wrapper | breadcrumbs.html |
| hidden-comments | `die-papier/hidden-comments` | Comments section | single.html |

### Sidebar Content (4)

| Pattern | Slug | Purpose | Used In |
|:---|:---|:---|:---|
| hidden-sidebar | `die-papier/hidden-sidebar` | Default sidebar widgets | sidebar.html |
| hidden-sidebar-event | `die-papier/hidden-sidebar-event` | Event sidebar widgets | sidebar-event.html |
| hidden-article-hero | `die-papier/hidden-article-hero` | Single post title/image | single.html |
| hidden-search-filters | `die-papier/hidden-search-filters` | Taxonomy filter bar | All archives |

---

## Implementation Standards

### PHP Header
All patterns in this folder must include the following header:

```php
/**
 * Inserter: false
 */
```

### Purpose
These patterns encapsulate complex block markup that would otherwise clutter templates or full-page patterns. They ensure that common structural elements (like "No Results Found" messages) are defined once and kept consistent across the theme.
