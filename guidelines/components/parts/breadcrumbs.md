# Breadcrumbs

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Part
**React source**: `/src/app/components/parts/Breadcrumbs.tsx`
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/breadcrumbs.html`

---

## 1. Purpose

A horizontal breadcrumb trail showing the user's position in the site hierarchy. It appears below the header on most content pages (articles, archives, single CPTs, policy pages) and above the main content area. It always begins with a "Tuisblad" (Home) link and ends with the current page title as non-linked text.

## 2. Visual Structure

```
┌─ Wrapper div (w-full, border-b border-gray-200 dark:border-border)
│  └─ Inner (.max-w-[1440px] .mx-auto)
│     └─ <nav aria-label="Breadcrumb"> (py-2, text-left)
│        └─ <ol> (flex, items-center, flex-wrap, gap-2, text-sm)
│           ├─ Home icon (14px) + "Tuisblad" (Link to /)
│           ├─ ChevronRight (14px, text-gray-400) + Link "Category"
│           ├─ ChevronRight + Link "Subcategory" (if applicable)
│           └─ ChevronRight + <span> "Current Page" (font-medium, text-brand-navy)
```

## 3. Props / Attributes

| Prop (React) | Type | Default | WP Attribute | Editable in Editor? |
|:-------------|:-----|:--------|:-------------|:-------------------:|
| `items` | `BreadcrumbItem[]` | — (required) | N/A (auto-generated) | No |
| `className` | `string` | `""` | CSS class | No |

### `BreadcrumbItem` Interface

```typescript
export interface BreadcrumbItem {
  label: string;
  href?: string;  // Optional — last item has no href (current page)
}
```

### White Text Variant

The component detects `text-white` in `className` and adjusts colors accordingly (for use on dark hero backgrounds). This is a prop-driven variant, not a separate component.

## 4. Data Sources

- **Data interface**: `BreadcrumbItem` defined in the same file (`Breadcrumbs.tsx`)
- **No centralized data file** — items are passed by each page component (e.g., `Article.tsx`, `Category.tsx`)
- **WordPress source**: Yoast SEO breadcrumbs (`yoast-seo/breadcrumbs` block) or native WordPress breadcrumb logic. The WP template part uses `<!-- wp:yoast-seo/breadcrumbs /-->`.

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Line-Height | Weight | Extras |
|:--------|:------------|:-----------|:------------|:-------|:-------|
| All breadcrumb text | `--font-inter` | `text-sm` (14px, `--text-p3`) | default | 400 | — |
| Current page (last item) | `--font-inter` | `text-sm` | default | 500 (`font-medium`) | — |
| Home label | `--font-inter` | `text-sm` | default | 400 | — |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Vertical padding | `py-2` (8px) | `--space-20` |
| Item gap | `gap-2` (8px) | `--space-20` |
| Max container width | `max-w-[1440px]` | Structural chrome exemption |
| Inner padding | `p-[0px]` | Reset (container handles padding) |

### Colors

| Element | Light Mode (default) | Light Mode (white variant) | Dark Mode | Token |
|:--------|:---------------------|:---------------------------|:----------|:------|
| Wrapper border | `border-gray-200` | Same | `border-border` (`#1E3044`) | `dark:border-border` |
| Home/intermediate links | `text-gray-600` | `text-gray-200` | `text-gray-400` | `dark:text-gray-400` |
| Link hover | `text-brand-red` | `text-white` | `text-brand-red` | `hover:text-brand-red` |
| Separator chevrons | `text-gray-400` | Same | `text-gray-500` | `dark:text-gray-500` |
| Current page text | `text-brand-navy` | `text-white` | `text-foreground` | `dark:text-foreground` |

### Shadows / Borders

| Element | Value | Token |
|:--------|:------|:------|
| Bottom border | `border-b border-gray-200` | `--wp--custom--border-width--100` + `--base-3` |

## 6. Section Style

Not applicable — breadcrumbs are a structural navigation element, not a section pattern.

## 7. BEM Class Map

No custom BEM classes exist in `style.css` for the breadcrumbs component. The WordPress template part uses `dp-breadcrumbs` as a className:

| BEM Class | Element | WordPress Block |
|:----------|:--------|:---------------|
| `.dp-breadcrumbs` | Wrapper group | `core/group` with className |
| (internal) | Breadcrumb items | Handled by Yoast SEO plugin output |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| All sizes | Breadcrumbs display horizontally with `flex-wrap`. On narrow screens, items wrap to the next line naturally. No items are hidden at any breakpoint. |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Wrapper border | `border-gray-200` → `border-border` (#1E3044) | `dark:border-border` |
| Link color | `text-gray-600` → `text-gray-400` | `dark:text-gray-400` |
| Separator | `text-gray-400` → `text-gray-500` | `dark:text-gray-500` |
| Current page | `text-brand-navy` → `text-foreground` (#E8E8ED) | `dark:text-foreground` |

## 10. Accessibility

- **ARIA roles**: `<nav aria-label="Breadcrumb">` landmark with descriptive label
- **Home link**: Has `aria-label="Tuisblad"` for the Home icon
- **Separators**: `ChevronRight` icons have `aria-hidden="true"` — correctly excluded from screen reader navigation
- **Current page**: Rendered as `<span>` (not a link) — screen readers correctly identify it as the current location
- **Structured data**: Consider adding JSON-LD `BreadcrumbList` schema (handled in WordPress via Yoast SEO automatically)

## 11. WordPress Mapping

### Construct Type
Template Part (`breadcrumbs.html`)

### Block Composition

```html
<!-- wp:group {"className":"dp-breadcrumbs","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}}} -->
<div class="wp-block-group dp-breadcrumbs">
    <!-- wp:yoast-seo/breadcrumbs /-->
</div>
<!-- /wp:group -->
```

### Existing WP Files
- Part: `/wordpress-export/themes/die-papier-theme/parts/breadcrumbs.html` — **Complete and functional**. Uses `yoast-seo/breadcrumbs` block with appropriate spacing.
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/section-breadcrumbs.php` — pattern wrapper for use inside page patterns.

### WordPress CSS

Yoast SEO generates its own breadcrumb HTML markup. Custom styling should be applied via:

```css
.dp-breadcrumbs {
    border-bottom: 1px solid var(--wp--preset--color--base-3);
}

.dp-breadcrumbs .yoast-breadcrumbs {
    font-family: var(--wp--preset--font-family--brand-sans);
    font-size: var(--wp--preset--font-size--300);
    color: var(--wp--preset--color--contrast-2);
}

.dp-breadcrumbs .yoast-breadcrumbs a {
    color: var(--wp--preset--color--contrast-2);
    text-decoration: none;
    transition: color 0.15s;
}

.dp-breadcrumbs .yoast-breadcrumbs a:hover {
    color: var(--wp--preset--color--primary);
}

.dp-breadcrumbs .yoast-breadcrumbs .breadcrumb_last {
    font-weight: 500;
    color: var(--wp--preset--color--brand-navy);
}
```

### Fallback Without Yoast

If Yoast SEO is not installed, the breadcrumbs template part should fall back to a manual `core/paragraph` or a simple PHP function in `functions.php` that generates breadcrumbs from the WordPress hierarchy.

## 12. Dependencies

- **Sub-components**: None
- **Consumed by**: Used in most page components — `Article.tsx`, `Category.tsx`, `Author.tsx`, `Events.tsx`, `Competitions.tsx`, `Obituaries.tsx`, `Multimedia.tsx`, `EEditions.tsx`, `FAQPage.tsx`, all policy pages, submit pages, etc.
- **Shared utilities**: `Link` from React Router
- **WordPress plugin**: Yoast SEO (required for `yoast-seo/breadcrumbs` block)

## 13. Known Exemptions

- **Structural chrome `max-w-[1440px]`** — Container width constraint is intentional.