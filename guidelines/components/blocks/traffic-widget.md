# Block: dp/traffic-widget

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Purpose**: Traffic incident feed widget. Displays a filterable list of traffic incidents (accidents, roadworks, delays, closures) with expandable detail cards and severity coding.

---

## React Implementation

- **Component path**: `/src/app/pages/Traffic.tsx`
- **Key props**: `maxItems`, `showFilters`, `region`
- **Status**: `active`

### Props Table

| Prop | Type | Default | Required | Notes |
|---|---|---|---|---|
| `maxItems` | `number` | `20` | No | Maximum incidents to display |
| `showFilters` | `boolean` | `true` | No | Show type/severity filter tabs |
| `region` | `string` | `""` | No | Optional geographic region filter |

### Internal Logic

- `filter` state: `'alles'`, `'ongeluk'`, `'padwerk'`, `'vertraging'`, `'sluiting'` — moves to `view.js`
- Per-card `expanded` state — moves to `view.js` with `data-wp-context`
- Client-side filtering of incident array — moves to `view.js` derived state
- Data source: mock data from `/src/app/data/traffic.ts`

---

## WordPress Implementation

- **Block name**: `dp/traffic-widget`
- **Title**: Verkeersinligting
- **Registration file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/traffic-widget/block.json`
- **Render file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/traffic-widget/render.php`
- **Editor script**: `file:./index.js`
- **View script**: `file:./view.js` — Interactivity API

### Attributes (block.json)

```json
{
  "name": "dp/traffic-widget",
  "title": "Traffic Widget",
  "category": "widgets",
  "icon": "car",
  "supports": {
    "align": ["wide", "full"],
    "html": false,
    "interactivity": true,
    "spacing": { "margin": true, "padding": true }
  },
  "attributes": {
    "maxItems": { "type": "number", "default": 20 },
    "showFilters": { "type": "boolean", "default": true },
    "region": { "type": "string", "default": "" }
  }
}
```

### Interactivity API

- **Store namespace**: `diePapierTraffic`
- **State**: `filter` (string, default `'alles'`), `incidents` (array, passed from PHP)
- **Actions**: `setFilter` (reads `data-filter` attribute), `toggleCard` (toggles `context.isOpen`)
- **Derived state**: `filteredIncidents`, `highSeverityCount`, `hasHighSeverity`, `hasIncidents`
- **Data source**: In WP — custom REST API endpoint or external traffic data feed, passed via PHP initial context

### Pattern Usage

- `die-papier/page-traffic` — `/wordpress-export/themes/die-papier-theme/patterns/page-traffic.php`

### Used In Templates

- `page-verkeer.html` (traffic page)
- Optionally embedded in `front-page.html` as a summary widget

---

## Design Tokens

### Severity Colours

| Severity | Text | Background |
|:---------|:-----|:-----------|
| `hoog` | `text-red-700 dark:text-red-400` | `bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50` |
| `medium` | `text-amber-700 dark:text-amber-400` | `bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50` |
| `laag` | `text-green-700 dark:text-green-400` | `bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50` |

### Incident Type Icons

| Type | Icon | Label | Colour |
|:-----|:-----|:------|:-------|
| `ongeluk` | `CircleAlert` | Ongeluk | `text-red-600` |
| `padwerk` | `Construction` | Padwerk | `text-amber-600` |
| `vertraging` | `Timer` | Vertraging | `text-orange-600` |
| `sluiting` | `AlertTriangle` | Sluiting | `text-red-700` |

### Card Layout

| Element | Value |
|:--------|:------|
| Card | `border rounded-lg overflow-hidden` + severity bg |
| Expand/collapse icon | `ChevronDown` / `ChevronUp` (18px) |
| Clearance indicator | `CheckCircle2` (12px, `text-green-600`) |
| Summary banner (high severity) | `bg-red-50 border border-red-200 rounded-lg px-5 py-4 mb-6` |
| Filter pills | Same pattern as search-filters (rounded-full, brand-red active) |

---

## Afrikaans Content Strings

- Filter labels: `Alles`, `Ongelukke`, `Padwerk`, `Vertragings`, `Sluitings`
- Severity labels: `hoog`, `medium`, `laag`
- High severity banner: `[N] hoe-erns voorvalle tans aktief.`
- Empty state: `Geen voorvalle nie.`
- Clearance estimate prefix: `Verwag skoon teen`

---

## Related Files

- `/wordpress-export/plugins/die-papier-blocks/src/blocks/traffic-widget/`
- `/wordpress-export/themes/die-papier-theme/patterns/page-traffic.php`
- `/src/app/pages/Traffic.tsx`
- `/src/app/data/traffic.ts`
