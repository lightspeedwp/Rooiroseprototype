# Page Default (Standaard Bladsy)

**Last updated**: 2026-02-23
**Category**: Page
**React source**: None — WordPress-native fallback pattern
**WordPress target**: Pattern — `page-default.php`

---

## 1. Purpose

Generic fallback page pattern for standard WordPress pages that don't have a dedicated pattern assigned. Renders the page title (H1) and post content in a constrained 900px layout, followed by a newsletter CTA. Used by the `page.html` template as the default content composition.

## 2. Visual Structure

```
┌─ Page wrapper (align: full, constrained 900px)
│  ├─ Title section (padding top/bottom)
│  │  └─ Post Title (H1, dynamic)
│  ├─ Post Content (constrained 900px)
│  └─ Footer section (padding top/bottom)
│     └─ Newsletter CTA (pattern: section-newsletter-cta)
```

## 3. Props / Attributes

| Attribute (WP) | Type | Default | Editable in Editor? |
|:----------------|:-----|:--------|:-------------------:|
| Content width | string | `900px` | Yes (group layout) |
| Title level | int | `1` | No (post-title block) |

## 4. Data Sources

- **WordPress source**: `core/post-title` for H1; `core/post-content` for page body; `section-newsletter-cta` pattern for signup form
- **API endpoint**: N/A — server-rendered

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Line-Height | Weight | Extras |
|:--------|:------------|:-----------|:------------|:-------|:-------:|
| Page title (H1) | `--font-heading` | `--text-h1` | `--lh-h1` | 400 | `fvs: --fvs-h1` |
| Body content | `--font-inter` | `--text-p1` | `--lh-p1` | 400 | — |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Title section padding | `spacing|60` top, `spacing|40` bottom | `--space-60` / `--space-40` |
| Footer section padding | `spacing|40` top, `spacing|60` bottom | `--space-40` / `--space-60` |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Background | `#FFFFFF` | `#0F1923` | `--background` |
| Text | `#2c2c2c` | `#E8E8ED` | `--foreground` |

## 6. Section Style

Not applicable.

## 7. BEM Class Map

No custom BEM classes — uses core block classes only.

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` (mobile) | Full width with padding; content constrained to viewport |
| `≥ 768px` | Content constrained to 900px max-width |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Background | Dark background | `dark:--background` |
| Text | Light text | `dark:--foreground` |

## 10. Accessibility

Standard page semantics — no special requirements.

## 11. WordPress Mapping

### Construct Type
Full Page Pattern (fallback)

### Pattern File
- **Path**: `/wordpress-export/themes/die-papier-theme/patterns/page-default.php`
- **Slug**: `die-papier/page-default`
- **Categories**: `pages`
- **Sync type**: None

### Existing WP Files
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/page-default.php`

## 12. Dependencies

- **Sub-components**: `section-newsletter-cta` (pattern)
- **Consumed by**: `page.html` template (as default/fallback pattern)

## 13. Known Exemptions

None.
