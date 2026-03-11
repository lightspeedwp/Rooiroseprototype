# Block: dp/sponsor-banner

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Purpose**: Sponsor disclosure banner for sponsored/branded content articles. Displays an info icon, optional sponsor logo, disclosure text, and an optional external link.

---

## React Implementation

- **Component path**: Inline in `/src/app/pages/Article.tsx` (lines 271–296)
- **Key props**: `sponsorName`, `sponsorLogo`, `sponsorLink`, `disclosureText`
- **Status**: `active`

### Props Table

| Prop | Type | Default | Required | Notes |
|---|---|---|---|---|
| `sponsorName` | `string` | `""` | Yes | Sponsor company name |
| `sponsorLogo` | `string` | `""` | No | URL to sponsor logo image |
| `sponsorLink` | `string` | `""` | No | External URL to sponsor website |
| `disclosureText` | `string` | `"Hierdie is geborgde inhoud, geskep in samewerking met"` | No | Customisable disclosure prefix |

### Internal Logic

- Data source: sponsor meta fields on post (`_dp_sponsor_name`, `_dp_sponsor_logo`, `_dp_sponsor_link`)
- Conditional rendering: only shows when post has sponsor meta
- No client-side state — server-rendered only

---

## WordPress Implementation

- **Block name**: `dp/sponsor-banner`
- **Title**: Borgbaner
- **Registration file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/sponsor-banner/block.json`
- **Render file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/sponsor-banner/render.php`
- **Editor script**: `file:./index.js`
- **View script**: none — server-rendered only

### Attributes (block.json)

```json
{
  "name": "dp/sponsor-banner",
  "title": "Sponsor Banner",
  "category": "marketing",
  "icon": "megaphone",
  "attributes": {
    "sponsorId": { "type": "number", "default": 0 },
    "displayType": { "type": "string", "default": "card" },
    "showLabel": { "type": "boolean", "default": true }
  },
  "supports": {
    "html": false,
    "anchor": true,
    "align": ["wide", "full"],
    "spacing": { "margin": true }
  }
}
```

### Context

- Uses `postId`, `postType` (reads sponsor meta from post)
- Sponsor data from CPT `dp_sponsor`: title, logo (featured image), description (excerpt), website URL (post meta `website_url`)
- Fallback: if no specific sponsor selected, show placeholder in editor

### Display Types

| Type | Description |
|---|---|
| `card` | Logo + title + description (default) |
| `banner` | Wide layout |
| `logo-only` | Sponsor logo only |

### Editor Controls

- `SelectControl` — sponsor picker from `dp_sponsor` CPT (`useSelect` with `getEntityRecords`)
- `SelectControl` — display type (card / banner / logo-only)
- `ToggleControl` — show "Aangebied deur" label

### Pattern Usage

- Conditionally rendered in `single-post.html` when post has sponsor meta

### Used In Templates

- `single-post.html` (conditionally rendered)

---

## Design Tokens

| Element | Tailwind Classes |
|:--------|:------|
| Container | `bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-lg p-4 mb-5` |
| Layout | `flex items-start gap-3` (disclosure) / `flex items-center gap-4` (card) |
| Info icon | `text-gray-400 dark:text-gray-500 shrink-0 mt-0.5` (16px) |
| Logo box | `w-8 h-8 rounded bg-white dark:bg-card border border-gray-200 dark:border-border p-1` (disclosure) |
| Logo box (card) | `w-16 h-16 bg-white dark:bg-background rounded-lg border border-gray-200 dark:border-border p-2` |
| Disclosure text | `text-xs text-gray-500 dark:text-gray-400` |
| Sponsor name | `text-brand-navy dark:text-foreground font-bold` |
| External link | `text-brand-red hover:underline inline-flex items-center gap-0.5` |
| Label heading | `text-sm font-bold text-brand-navy dark:text-foreground mb-3 flex items-center gap-2` |

---

## Afrikaans Content Strings

- Label heading: `Aangebied deur`
- Disclosure text: `Hierdie is geborgde inhoud, geskep in samewerking met`
- Editor placeholder: `Kies 'n borg uit die sybalk.`

---

## Related Files

- `/wordpress-export/plugins/die-papier-blocks/src/blocks/sponsor-banner/`
- `/src/app/pages/Article.tsx`
- `/src/app/pages/CompetitionSingle.tsx`
- `/guidelines/data-structure/wordpress-data-model.md` (dp_sponsor CPT)
