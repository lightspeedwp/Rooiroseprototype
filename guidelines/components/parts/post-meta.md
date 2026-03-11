# Post Meta

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Part
**React source**: None — WordPress-native construct (equivalent logic exists inline in `Article.tsx` meta display)
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/post-meta.html`

---

## 1. Purpose

Thin template part wrapper that renders the `die-papier/section-post-meta` pattern. Provides the standard article byline display (author, category, date, last-updated, sponsored badge) on single post templates. Exists as a template part so it can be referenced via `<!-- wp:template-part {"slug":"post-meta"} /-->` in templates.

## 2. Visual Structure

```
┌─ Post Meta Part
│  └─ Pattern: die-papier/section-post-meta
│     └─ (See section-post-meta pattern guideline for full structure)
```

The part itself is a single-line wrapper that delegates to the pattern:
```html
<!-- wp:pattern {"slug":"die-papier/section-post-meta"} /-->
```

## 3. Props / Attributes

| Attribute (WP) | Type | Default | Editable in Editor? |
|:----------------|:-----|:--------|:-------------------:|
| N/A | — | — | No — the part is a thin wrapper |

All attributes are managed by the inner `section-post-meta` pattern (see `section-post-meta.md`).

## 4. Data Sources

- **Mock data file**: N/A
- **WordPress source**: Delegates to `section-post-meta` pattern which uses `get_the_ID()`, `get_the_date()`, `get_the_author_meta()`, `get_the_category()`, and custom meta fields (`is_sponsored`, `sponsor_name`, `sponsor_slug`)
- **API endpoint**: N/A — PHP server-rendered

## 5. Design Tokens

All typography, spacing, and colour tokens are defined by the inner `section-post-meta` pattern. See `/guidelines/components/patterns/section-post-meta.md` for the full token table.

## 6. Section Style

Not applicable — template part wrapper.

## 7. BEM Class Map

| BEM Class | Element | Notes |
|:----------|:--------|:------|
| `.dp-post-meta` | Root wrapper (in pattern) | `core/group` flex vertical |
| `.dp-post-meta__byline` | Byline row | Flex row with author/category/date |
| `.dp-post-meta__author-link` | Author name link | Bold, brand-navy colour |
| `.dp-post-meta__category-link` | Category name link | Bold, brand-navy colour |
| `.dp-post-meta__sponsor-link` | Sponsor name link | Bold, brand-navy, inline SVG arrow |
| `.dp-post-meta__badge` | Status badge | Uppercase, small font |
| `.dp-post-meta__badge--sponsored` | Sponsored badge variant | contrast-2 background |
| `.dp-post-meta__modified` | Last-updated line | Muted colour, smaller font |

CSS defined in `style.css` lines 130–200.

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` (mobile) | Byline wraps naturally; all elements stack if needed |
| `768px – 1023px` (tablet) | Single-line byline |
| `≥ 1024px` (desktop) | Single-line byline |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Byline text | `#E8E8ED` | `dark:--foreground` |
| Muted text (date, modified) | Lighter grey | `dark:--contrast-2` |
| Author/category links | Lighter navy | `dark:--brand-navy` |
| Sponsored badge bg | Dark variant | `dark:--contrast-2` |

## 10. Accessibility

- **ARIA roles**: None required — semantic HTML (links, time elements)
- **Keyboard navigation**: Author and category links are focusable in tab order
- **Contrast notes**: Muted text (`contrast-2`) must meet 4.5:1 contrast against background

## 11. WordPress Mapping

### Construct Type
Template Part (`parts/post-meta.html`) — wraps `section-post-meta` pattern.

### Block Composition

```html
<!-- wp:pattern {"slug":"die-papier/section-post-meta"} /-->
```

### Existing WP Files
- Part: `/wordpress-export/themes/die-papier-theme/parts/post-meta.html`
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/section-post-meta.php`
- Pattern (compact): `/wordpress-export/themes/die-papier-theme/patterns/section-post-meta-compact.php`
- CSS: `/wordpress-export/themes/die-papier-theme/style.css` lines 130–200 (`.dp-post-meta` block)

## 12. Dependencies

- **Sub-components**: `section-post-meta` (pattern)
- **Consumed by**: `single.html`, `single-dp_competition.html`, `single-dp_event.html`, `single-dp_multimedia.html`, `single-dp_obituary.html`
- **Shared utilities**: None

## 13. Known Exemptions

None.