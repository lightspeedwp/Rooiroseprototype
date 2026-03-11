# Block: dp/search-filters

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Purpose**: Search page filter bar combining a search text input with category filter pills. Desktop renders a horizontal pill row; mobile renders a dropdown panel.

---

## React Implementation

- **Component path**: Inline in `/src/app/pages/SearchResults.tsx`
- **Key props**: `taxonomy`, `showCounts`, `placeholder`, `allLabel`
- **Status**: `active`

### Props Table

| Prop | Type | Default | Required | Notes |
|---|---|---|---|---|
| `taxonomy` | `string` | `"category"` | No | Taxonomy source for filter pills |
| `showCounts` | `boolean` | `true` | No | Show result counts per category |
| `placeholder` | `string` | `"Soek artikels..."` | No | Search input placeholder text |
| `allLabel` | `string` | `"Alles"` | No | Label for the "all categories" pill |

### Internal Logic

- `searchQuery`: String input (debounced 300ms) — moves to `view.js` Interactivity API
- `selectedCategory`: Active filter (default: "Alles") — moves to `view.js`
- `results`: Derived array based on query + category — moves to REST API fetch
- `mobileFilterOpen`: Boolean UI state — moves to `view.js`
- URL sync: Updates `?q=` and `?kategorie=` query params — moves to `view.js` `history.pushState`

---

## WordPress Implementation

- **Block name**: `dp/search-filters`
- **Title**: Soekfilters
- **Registration file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/search-filters/block.json`
- **Render file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/search-filters/render.php`
- **Editor script**: `file:./index.js`
- **View script**: `file:./view.js` — Interactivity API

### Attributes (block.json)

```json
{
  "name": "dp/search-filters",
  "title": "Search Interface",
  "category": "widgets",
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "interactivity": true
  },
  "attributes": {
    "taxonomy": { "type": "string", "default": "category" },
    "showCounts": { "type": "boolean", "default": true },
    "placeholder": { "type": "string", "default": "Soek artikels..." },
    "allLabel": { "type": "string", "default": "Alles" }
  }
}
```

### Interactivity API

- **Store namespace**: `diePapierSearch`
- **State**: `query`, `category`, `resultsHTML`, `isLoading`, `isOpen`
- **Actions**: `setQuery` (debounced), `setCategory`, `clearSearch`, `toggleFilters`, `search`
- **Derived state**: `categoryName`, `hasResults`
- **Data source**: WP REST API (`/wp-json/wp/v2/posts`) or custom endpoint `/wp-json/die-papier/v1/search-render`

### Pattern Usage

- `die-papier/archive-search` — `/wordpress-export/themes/die-papier-theme/patterns/archive-search.php`

### Used In Templates

- `search.html` (search results page)

---

## Design Tokens

| Element | Tailwind Classes |
|:--------|:------|
| Search input | `px-6 py-4 border-2 border-gray-300 dark:border-border rounded-lg bg-white dark:bg-card` |
| Search input focus | `focus:border-primary` |
| Submit button | `bg-primary text-white px-4 py-2 rounded-md hover:bg-brand-red-hover` |
| Active pill (desktop) | `bg-primary text-white rounded-full px-4 py-1.5 text-sm font-bold` |
| Inactive pill (desktop) | `bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 rounded-full` |
| Mobile trigger | `bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-3` |
| Mobile dropdown | `bg-white dark:bg-card border rounded-lg shadow-lg` |
| Active item (mobile) | `bg-primary/5 dark:bg-primary/10 text-primary font-bold` |

---

## Tailwind → theme.json Mapping

| Tailwind Class | theme.json Equivalent |
|---|---|
| `bg-primary` | `color.background: var:preset\|color\|primary` |
| `border-gray-300` | `border.color: var:preset\|color\|base-3` |
| `rounded-lg` | `border.radius: 0.5rem` |
| `rounded-full` | `border.radius: 9999px` |
| `shadow-lg` | `shadow: var:preset\|shadow\|large` |

---

## Afrikaans Content Strings

- Page heading: `Soek`
- Input placeholder: `Soek vir nuus, sport...`
- All-categories pill: `Alles`
- Empty state: `Geen resultate gevind nie.`
- Filter label (mobile): `Filter:`

---

## Related Files

- `/wordpress-export/plugins/die-papier-blocks/src/blocks/search-filters/`
- `/wordpress-export/themes/die-papier-theme/patterns/archive-search.php`
- `/wordpress-export/themes/die-papier-theme/templates/search.html`
- `/src/app/pages/SearchResults.tsx`
- `/src/app/data/articles.ts`
