# Block: dp/filter-bar

**Last updated**: 2026-02-23
**Category**: Block
**Block name**: `dp/filter-bar`
**Title**: Onderwerpfilter
**Source**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/filter-bar/`
**React equivalent**: `SubsectionFilter.tsx` (`/src/app/components/category/SubsectionFilter.tsx`)

---

## 1. Purpose

Horizontal pill/chip row for filtering category pages by subsection tags. Each pill links to the corresponding tag archive page (`/onderwerp/{slug}`). Category-specific subsection lists are hardcoded in React; in WordPress these map to taxonomy terms.

## 2. Attributes

| Attribute | Type | Default | Notes |
|:----------|:-----|:--------|:------|
| `taxonomy` | `string` | `"post_tag"` | Taxonomy to pull terms from |
| `category` | `string` | `""` | Parent category slug (filters visible terms) |
| `showAll` | `boolean` | `true` | Whether to show the "Alles" (all) pill |

## 3. Design Tokens

| Element | Value |
|:--------|:------|
| Active pill | `bg-brand-red text-white` |
| Inactive pill | `bg-white dark:bg-card text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-input` |
| Hover (inactive) | `hover:bg-gray-100 dark:hover:bg-muted` |
| Pill shape | `rounded-full px-4 py-2 text-sm font-medium` |
| Container | `flex flex-wrap gap-2 mb-6` |

## 4. Supports

- HTML: `false`
- Align: `wide`, `full`
- Spacing: margin only

## 5. Files

- `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`, `view.js`

## 6. Interactivity

`view.js` — optional JS for active state toggle without full page reload (Interactivity API). Server renders initial state from current URL.

## 7. Used In Templates

- `archive.html` (category archive)
- Category-specific templates (`archive-nuus.html`, etc.)
