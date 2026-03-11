# Block: dp/weather-widget

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Purpose**: Local weather display widget. Shows current conditions and a multi-day forecast for selectable South African cities with city selector pills, hero card, and detail stats.

---

## React Implementation

- **Component path**: `/src/app/pages/Weather.tsx`
- **Key props**: `defaultCity`, `showForecast`, `showDetails`
- **Status**: `active`

### Props Table

| Prop | Type | Default | Required | Notes |
|---|---|---|---|---|
| `defaultCity` | `number` | `0` | No | Index of initially selected city |
| `showForecast` | `boolean` | `true` | No | Show multi-day forecast grid |
| `showDetails` | `boolean` | `true` | No | Show wind/humidity/visibility stats |

### Internal Logic

- `selectedCity` state (index) — moves to `view.js` Interactivity API
- City data rendering — server-side in `render.php`, client-side switching via `view.js`
- Weather icon mapping (condition string → Lucide icon) — moves to SVG inline or mapped images
- Data source: mock data from `/src/app/data/weather.ts`

---

## WordPress Implementation

- **Block name**: `dp/weather-widget`
- **Title**: Weervoorspelling
- **Registration file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/weather-widget/block.json`
- **Render file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/weather-widget/render.php`
- **Editor script**: `file:./index.js`
- **View script**: `file:./view.js` — Interactivity API

### Attributes (block.json)

```json
{
  "name": "dp/weather-widget",
  "title": "Weather Widget",
  "category": "widgets",
  "icon": "cloud",
  "supports": {
    "align": ["wide", "full"],
    "html": false,
    "interactivity": true,
    "spacing": { "margin": true, "padding": true }
  },
  "attributes": {
    "defaultCity": { "type": "string", "default": "Kaapstad" },
    "layout": { "type": "string", "default": "widget" }
  }
}
```

### Interactivity API

- **Store namespace**: `diePapierWeather`
- **State**: `cityIndex` (number, default `0`), `cities` (array, passed from PHP)
- **Actions**: `selectCity` (reads index from button `data-index` attribute)
- **Derived state**: `currentCity` (returns `cities[cityIndex]`)
- **Callbacks**: `isSelected` (compares loop item name with current city name)
- **Data source**: In WP — hardcoded in block attributes (editor-managed), or fetched server-side via transient-cached API call to weather provider (OpenWeatherMap / WeatherAPI)

### Layout Variants

| Layout | Description |
|---|---|
| `widget` | Compact sidebar display (city pills + current weather card) |
| `full` | Full page layout (city pills + hero card + forecast grid + all cities) |

### Pattern Usage

- `die-papier/page-weather` — `/wordpress-export/themes/die-papier-theme/patterns/page-weather.php`

### Used In Templates

- `page-weer.html` (weather page)
- Optionally embedded in `front-page.html` as a compact sidebar widget

---

## Design Tokens

### City Selector

| Element | Tailwind Classes |
|:--------|:------|
| Active pill | `bg-brand-red text-white shadow-sm rounded-full px-4 py-2 text-sm font-medium` |
| Inactive pill | `bg-white dark:bg-card text-muted-foreground border border-border rounded-full hover:border-brand-red hover:text-brand-red` |
| Icon | `MapPin` (12px) inline with city name |

### Current Weather Card

| Element | Tailwind Classes |
|:--------|:------|
| Card | `bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 md:p-10 text-white shadow-lg` |
| Temperature | `font-heading text-3xl md:text-5xl` with `fontVariationSettings: "var(--fvs-h2)"` |
| Weather icon | `w-16 h-16 text-amber-400` |
| Detail stats row | `grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10 text-xs` |
| Detail label | `block opacity-60 uppercase tracking-wider` |

### Weather Icon Mapping

| Icon key | Lucide Component |
|:---------|:------------|
| `sun` | `Sun` |
| `cloud-sun` | `CloudSun` |
| `cloud-rain` | `CloudRain` |
| `cloud` | `Cloud` |
| `cloudy` | `Cloudy` |

### Detail Stat Icons

`Thermometer`, `Wind`, `Droplets`, `Eye`, `Sunrise`, `Sunset`

---

## Afrikaans Content Strings

- City names: `Kaapstad`, `Pretoria`, `Johannesburg`, `Durban`, `Bloemfontein`, `Port Elizabeth`
- Condition examples: `Sonlig`, `Gedeeltelik Bewolk`, `Bewolk`, `Ligte Reen`
- Detail labels: `Wind`, `Humiditeit`, `Sigbaarheid`, `Sonsopkoms`, `Sonsondergang`
- Forecast section heading: `7-Dag Vooruitsig`
- All cities heading: `Alle Stede`

---

## Related Files

- `/wordpress-export/plugins/die-papier-blocks/src/blocks/weather-widget/`
- `/wordpress-export/themes/die-papier-theme/patterns/page-weather.php`
- `/src/app/pages/Weather.tsx`
- `/src/app/data/weather.ts`
