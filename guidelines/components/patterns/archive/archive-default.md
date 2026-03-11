# Argief: Standaard Lys

**Last updated**: 2026-03-01
**Slug**: `die-papier/archive-default`
**Folder**: `archive/`
**Source**: `patterns/archive/archive-default.php`

---

## Overview
The default archive layout used for categories, tags, and general article listings. It uses a 70/30 column split with a main content area and a sidebar.

## Composition
- **Layout**: `wp:columns` (70% main, 30% sidebar)
- **Main Content**: `core/query` with `inherit: true`
- **Card**: `die-papier/card-post-list` (Horizontal)
- **Sidebar**: `template-part: sidebar.html`

## Block Structure
- `core/group` (`alignwide`, inner padding 50px)
  - `core/query-title` (Archive title)
  - `core/term-description` (Category/Tag description)
  - `core/columns` (70/30 split)
    - `core/column` (Main)
      - `core/query` (Inherit: true)
        - `core/post-template`
          - `core/pattern` (`die-papier/card-post-list`)
        - `core/query-pagination` (Previous/Next/Numbers)
        - `core/query-no-results` (`die-papier/hidden-no-results`)
    - `core/column` (Sidebar)
      - `core/template-part` (slug: sidebar)

## Implementation Notes
- **Deduplication**: Not used on standard archives (paginated).
- **Inheritance**: Uses `inherit: true` on the query block to ensure WordPress handles the category/tag filtering automatically from the URL.
- **Pagination**: Uses Afrikaans labels for the previous/next buttons.
- **Sidebar**: The sidebar is a global template part.
