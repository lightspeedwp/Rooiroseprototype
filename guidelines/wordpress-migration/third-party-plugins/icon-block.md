# Icon Block Integration Guide

**Last updated**: 2026-03-02
**Version**: 3.0
**Version at launch**: 1.4.2
**Template**: `/guidelines/_templates/plugin-guideline-template.md`
**Related**: `/guidelines/design-tokens/iconography.md` (React icon reference)

Complete reference for Outermost Icon Block integration in the Die Papier WordPress FSE theme. Covers the React → WordPress migration strategy, custom icon library implementation, pattern usage, and accessibility best practices.

---

## Table of Contents

1. [Overview](#overview)
2. [React → WordPress Migration Rules](#react--wordpress-migration-rules)
3. [Icon Block](#icon-block)
4. [Icon Size Strategy](#icon-size-strategy)
5. [Icon Libraries](#icon-libraries)
6. [Pattern Opportunities](#pattern-opportunities)
7. [Decorative vs. Semantic Icons](#decorative-vs-semantic-icons)
8. [Theme.json Integration](#themejson-integration)
9. [Theme Styling](#theme-styling)
10. [Accessibility](#accessibility)
11. [Testing Checklist](#testing-checklist)
12. [Related Files](#related-files)

---

## Overview

The **Outermost Icon Block** (`outermost/icon`) provides a native WordPress block for inserting icons into content. Die Papier uses icons across **8 pattern types** to enhance visual communication and user experience.

The React prototype uses `lucide-react` components (e.g., `<Mail />`, `<ArrowRight />`). WordPress FSE themes do not support importing React icon libraries directly in `render.php` or static HTML templates. The Icon Block bridges this gap by rendering SVGs natively in the block editor.

### Key Features

- **Block-native**: Full Gutenberg integration (no custom HTML, no icon fonts)
- **Multiple icon libraries**: WordPress Dashicons, Font Awesome, custom SVG uploads
- **Size presets**: 7 size options (xs to 3xl) aligned with Die Papier design system
- **Color customization**: Supports all theme colors (navy, red, contrast, etc.)
- **Accessibility**: Proper ARIA labeling for decorative and semantic icons
- **Performance**: SVG-based (no web font downloads, no FOUT/FOIT)

### Usage in Die Papier

Die Papier uses icons for:

1. **Feature lists** (checkmarks, bullets) — Benefits, features, pricing tables
2. **Service/category grids** (category icons) — E-Editions, Multimedia, Events
3. **CTA sections** (arrows, stars) — Subscribe buttons, download links
4. **Navigation** (chevrons, menu icons) — Mobile menu, breadcrumbs, dropdowns
5. **Social proof** (shields, badges) — Trust signals, certifications
6. **Info callouts** (info icon, warning icon) — Notes, alerts, tips
7. **Timeline/steps** (numbered circles) — How-to guides, processes
8. **Contact info** (phone, email, location icons) — Contact page, footer

---

## React → WordPress Migration Rules

The React prototype uses `lucide-react` imports. WordPress FSE does not support this — all icons must be rendered as inline SVGs or via the Icon Block. Apply the correct rule based on context.

### Rule 1: Static Template Parts (HTML/PHP)

For icons inside hardcoded template parts (e.g., `header.html`, `footer.html`):

- **Do NOT** use `<img src="icon.svg">` — breaks theme portability and dark mode
- **Do** inline the SVG source directly
- **Workflow:**
  1. Find the icon at [lucide.dev](https://lucide.dev)
  2. Copy the SVG source
  3. Paste directly into the HTML/PHP file
  4. Add appropriate classes for sizing and color (e.g., `style="width:20px;height:20px;stroke:currentColor"`)
- **Example**: `header.html` chevron-down for the nav dropdown, close icon in mobile menu

### Rule 2: Dynamic Blocks (`render.php`)

For icons inside custom dynamic blocks (e.g., `article-hero`, `newsletter-cta`):

- **Option A (Preferred):** Inline SVG in `render.php` output — zero JavaScript, maximum performance
- **Option B:** Use Icon Block as an InnerBlock — only if the icon must be editor-configurable by the content team
- **Do NOT** use `<img>` tags — breaks dark mode and `currentColor` inheritance

### Rule 3: Content Patterns (Editor-Managed)

For icons inside page content patterns (e.g., feature grids, CTA sections):

- Use the **Icon Block** (`outermost/icon`)
- Select the icon from the Die Papier custom library in the editor
- Set colour using the Icon Block's Text Color control — inherits `currentColor` automatically
- All 8 icon pattern types use this approach — see [Pattern Opportunities](#pattern-opportunities)

### Lucide Quick-Reference Table

Common React prototype icons and their WordPress custom library equivalents:

| React Component | Lucide Name | In Die Papier Library | Usage |
| :--- | :--- | :--- | :--- |
| `<Clock />` | `clock` | ✅ `clock` | Article meta (read time / date) |
| `<Mail />` | `mail` | ✅ `mail` | Newsletter CTA |
| `<ArrowRight />` | `arrow-right` | ✅ `arrow-right` | Buttons / links |
| `<Check />` | `check` | ✅ `check` | Lists |
| `<Search />` | `search` | ✅ `search` | Header search toggle |
| `<Menu />` | `menu` | ✅ `menu` | Mobile menu toggle |
| `<X />` | `x` | ✅ `x` | Close modals |
| `<ChevronDown />` | `chevron-down` | ✅ `chevron-down` | Dropdowns |
| `<Calendar />` | `calendar` | ✅ `calendar` | Event dates |
| `<MapPin />` | `map-pin` | ✅ `map-pin` | Location / contact |
| `<Phone />` | `phone` | ✅ `phone` | Contact info |
| `<Download />` | `download` | ✅ `download` | E-edition download |
| `<Share2 />` | `share2` | ✅ `share2` | Social sharing |
| `<User />` | `user` | ✅ `user` | Author / account |
| `<ExternalLink />` | `external-link` | ✅ `external-link` | Outbound links |

> **Custom brand icons** (e.g., `NewspaperIcon.tsx`): Export to `.svg` → add to `/assets/icons/` → include in `icons.json` manifest → registered automatically via `custom-icons.php`.

---

## Icon Block

### Block Name

**Namespace**: `outermost`
**Slug**: `outermost/icon`
**Category**: `design`
**Plugin**: Outermost Icon Block (free)

### Block Attributes

```json
{
  "iconName": "check-circle",
  "iconLibrary": "wordpress",
  "iconSize": "md",
  "iconColor": "#D70025",
  "iconRotation": 0,
  "iconFlip": "none",
  "width": 20,
  "height": 20,
  "hasLink": false,
  "linkUrl": "",
  "linkTarget": "_self",
  "ariaLabel": "",
  "className": ""
}
```

### Attribute Descriptions

| Attribute | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `iconName` | `string` | `""` | (varies by library) | Icon identifier (e.g., `"check-circle"`, `"star"`) |
| `iconLibrary` | `string` | `"wordpress"` | `"wordpress"`, `"fontawesome"`, `"custom"` | Icon library source |
| `iconSize` | `string` | `"md"` | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`, `"3xl"` | Icon size preset |
| `iconColor` | `string` | `"#000000"` | Any hex color or theme color var | Icon color (fill) |
| `iconRotation` | `number` | `0` | `0`, `90`, `180`, `270` | Icon rotation (degrees) |
| `iconFlip` | `string` | `"none"` | `"none"`, `"horizontal"`, `"vertical"`, `"both"` | Icon flip transformation |
| `width` | `number` | `20` | Any number (px) | Icon width (overrides iconSize) |
| `height` | `number` | `20` | Any number (px) | Icon height (overrides iconSize) |
| `hasLink` | `boolean` | `false` | `true`, `false` | Wrap icon in link |
| `linkUrl` | `string` | `""` | Any URL | Link destination (if hasLink: true) |
| `linkTarget` | `string` | `"_self"` | `"_self"`, `"_blank"` | Link target |
| `ariaLabel` | `string` | `""` | Any text | ARIA label for screen readers |
| `className` | `string` | `""` | Any CSS class | Custom CSS class |

### Die Papier Default Settings

Most Die Papier icons use these settings:

```html
<!-- Decorative icon (default) -->
<!-- wp:outermost/icon {
    "iconName":"check-circle",
    "iconLibrary":"custom",
    "iconSize":"md",
    "iconColor":"var(--wp--preset--color--primary)",
    "ariaLabel":""
} /-->

<!-- Semantic icon (with ARIA label) -->
<!-- wp:outermost/icon {
    "iconName":"download",
    "iconLibrary":"custom",
    "iconSize":"lg",
    "iconColor":"var(--wp--preset--color--contrast)",
    "ariaLabel":"Laai e-uitgawe af"
} /-->
```

---

## Icon Size Strategy

### Die Papier Icon Scale

Die Papier's design system defines **7 icon size presets** aligned with typography scale:

| Preset | Pixel Size | Use Cases | Examples |
|--------|------------|-----------|----------|
| `xs` | 12px | Inline icons, badges | Small bullets in dense lists |
| `sm` | 16px | Body text icons, UI elements | Checkmarks in feature lists, arrow icons in links |
| `md` | 20px | **DEFAULT** — Feature icons, list bullets | Feature section icons, category badges |
| `lg` | 24px | Section icons, navigation icons | Mobile menu icons, social sharing icons |
| `xl` | 32px | Hero icons, CTA icons | Large feature icons, benefit icons |
| `2xl` | 40px | Service/category icons | Category grid icons (6 columns) |
| `3xl` | 48px | Statement icons, brand icons | Hero section statement icons, large service icons |

---

## Icon Libraries

### 1. WordPress Dashicons (Secondary)

**Library**: `wordpress`
**Icon count**: 320+ icons
**Use in Die Papier**: **Secondary** — fallback for UI elements where a custom library icon isn't available.

---

### 2. Die Papier Custom Icon Library (Primary)

**Library**: `custom` (registered via `iconBlock.icons` filter)
**Icon count**: 67 icons (Lucide-based + custom social)
**License**: ISC (Lucide) + custom SVGs for social icons
**Use in Die Papier**: **Primary** — all content and pattern icons for visual consistency with Lucide's stroke aesthetic.

**All 67 icons** (all icons live in `/assets/icons/` directory):

`search`, `x`, `menu`, `chevron-right`, `chevron-left`, `chevron-down`, `chevron-up`, `arrow-right`, `arrow-left`, `arrow-up`, `home`, `user`, `users`, `shopping-cart`, `copy`, `check`, `check-circle`, `alert-triangle`, `settings`, `download`, `upload`, `external-link`, `filter`, `share2`, `printer`, `sun`, `moon`, `monitor`, `languages`, `calendar`, `clock`, `map-pin`, `mail`, `phone`, `tag`, `file-text`, `shield`, `lock`, `credit-card`, `info`, `help-circle`, `trophy`, `gift`, `heart`, `star`, `award`, `eye`, `trending-up`, `play`, `camera`, `headphones`, `megaphone`, `flower2`, `truck`, `cookie`, `globe`, `book-open`, `message-square`, `message-circle`, `newspaper`, `facebook`, `x-social`, `instagram`, `linkedin`, `tiktok`, `youtube`, `whatsapp`

**SVG source types**:

- **Lucide-derived** (64 icons): exported from [lucide.dev](https://lucide.dev) — `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, `viewBox="0 0 24 24"`
- **Custom SVGs** (3 icons): `x-social`, `tiktok`, `whatsapp` — not available in Lucide; custom-drawn or adapted. Flagged as `"sourceType": "custom-svg"` in the manifest.

**Implementation Files**:

| File | Purpose |
|------|---------|
| `/assets/icons/icons.json` | Manifest — all 67 icons with name, bilingual title, inline SVG, category, and sourceType |
| `/assets/icons/*.svg` | Individual SVG files (reference / backup) |
| `/assets/js/custom-icons.js` | Editor-only script — registers icons via `wp.hooks.addFilter('iconBlock.icons', ...)` |
| `/inc/custom-icons.php` | PHP registration — reads `icons.json`, enqueues editor script via `enqueue_block_editor_assets` |
| `/assets/css/icon-block.css` | Frontend styling — section style overrides, responsive scaling, accessibility |

**Registration Flow**:

1. `functions.php` → loads `/inc/custom-icons.php`
2. `custom-icons.php` → reads `/assets/icons/icons.json`, enqueues `/assets/js/custom-icons.js` on `enqueue_block_editor_assets` hook, passes icon data via `wp_localize_script()`
3. `custom-icons.js` → registers icons under "Die Papier" category via `wp.hooks.addFilter('iconBlock.icons', ...)`
4. Editor shows "Die Papier" tab in Icon Block picker with all 67 custom icons

---

## Pattern Opportunities

Die Papier has **8 pattern opportunities** for Icon Block integration, all implemented in `patterns/icon/`:

### 1. Feature List with Checkmarks

**Pattern**: `die-papier/icon-feature-list`
**Icon**: `check-circle` (md — 20px)
**Status**: ✅ Implemented

### 2. Service/Category Grid

**Pattern**: `die-papier/icon-service-grid`
**Icons**: Custom category icons (Newspaper, Sport, E-Edition, etc.) (2xl — 40px)
**Status**: ✅ Implemented

### 3. Benefits Section with Large Icons

**Pattern**: `die-papier/icon-benefits-section`
**Icons**: `phone`, `download`, `shield` etc. (xl — 32px)
**Status**: ✅ Implemented

### 4. CTA Buttons with Icons

**Pattern**: `die-papier/icon-cta-buttons`
**Icons**: `arrow-right`, `download`, `mail` (sm — 16px)
**Status**: ✅ Implemented

### 5. Social Proof Icons (Trust Signals)

**Pattern**: `die-papier/icon-trust-signals`
**Icons**: `shield`, `award`, `star` (xl — 32px)
**Status**: ✅ Implemented

### 6. Info/Warning Callouts

**Pattern**: `die-papier/icon-callouts`
**Icons**: `info`, `alert-triangle`, `check-circle` (md — 20px)
**Status**: ✅ Implemented

### 7. Timeline/Step Icons

**Pattern**: `die-papier/icon-timeline`
**Icons**: `newspaper`, `credit-card`, `check-circle` (lg — 24px)
**Status**: ✅ Implemented

### 8. Contact Info Icons

**Pattern**: `die-papier/icon-contact-info`
**Icons**: `phone`, `mail`, `map-pin` (md — 20px)
**Status**: ✅ Implemented

---

## Decorative vs. Semantic Icons

### Decorative Icons

**Definition**: Icons that serve a **purely visual purpose** and do not convey essential information. Removing the icon would not change the meaning of the content.

**Accessibility**: Leave `ariaLabel` empty — the block renders `aria-hidden="true"` automatically.

**Example**: Checkmark icons beside pricing feature text — the text itself conveys the information.

### Semantic Icons

**Definition**: Icons that convey **essential information** on their own, without adjacent text. Removing the icon would lose information.

**Accessibility**: Set `ariaLabel` to a descriptive Afrikaans string; the block adds `role="img"` automatically.

**Example**: A download icon with no adjacent text label — requires `ariaLabel="Laai e-uitgawe af"`.

---

## Theme.json Integration

### Custom Icon Size Presets

Add custom icon size presets to `theme.json` under `settings.blocks.outermost/icon.custom.iconSizes`:

```json
{
  "version": 3,
  "settings": {
    "blocks": {
      "outermost/icon": {
        "custom": {
          "iconSizes": [
            { "name": "Extra Small", "slug": "xs", "size": 12 },
            { "name": "Small",       "slug": "sm", "size": 16 },
            { "name": "Medium",      "slug": "md", "size": 20 },
            { "name": "Large",       "slug": "lg", "size": 24 },
            { "name": "Extra Large", "slug": "xl", "size": 32 },
            { "name": "2XL",         "slug": "2xl", "size": 40 },
            { "name": "3XL",         "slug": "3xl", "size": 48 }
          ]
        }
      }
    }
  }
}
```

> **Theme.json pointer**: See `theme.json` → `settings.blocks["outermost/icon"].custom.iconSizes` for the live implementation.

---

## Theme Styling

Custom styles for Icon Block are defined in `/assets/css/icon-block.css` and enqueued on the frontend via `inc/enqueue.php`.

### Color Inheritance

All custom SVGs use `stroke="currentColor"` and `fill="none"`. Icon colour is set via the Icon Block's Text Color picker, which applies a CSS `color` property on the wrapper element. This ensures:

- **Section styles**: Icons inside `is-style-section-navy` or `is-style-section-red` sections automatically inherit the section's foreground colour
- **Dark mode**: Icons invert correctly alongside surrounding text without additional CSS overrides

### Responsive Scaling

`icon-block.css` includes responsive size overrides for small screens. Icons at `xl` (32px) and above scale down at mobile breakpoints to prevent layout overflow in narrow columns.

### Editor vs. Frontend Parity

The custom icon library is registered as an **editor-only** asset via `enqueue_block_editor_assets`. On the frontend, icons are rendered as inline SVG in the saved block HTML — no JavaScript required.

---

## Accessibility

### General Rules

1. All **decorative** icons: leave `ariaLabel` empty — the block renders `aria-hidden="true"` automatically
2. All **semantic** icons (standalone, no adjacent text): set `ariaLabel` to a descriptive Afrikaans string
3. **Linked icons** (`hasLink: true`): always set `ariaLabel` — the link has no visible text alternative
4. Never use colour alone to convey meaning — always pair icons with adjacent text in content contexts

### Afrikaans ARIA Label Examples

| Icon | `ariaLabel` value |
|------|-------------------|
| Download | `"Laai af"` |
| Share | `"Deel hierdie artikel"` |
| Close | `"Maak toe"` |
| Search | `"Soek"` |
| Open menu | `"Oopmaak kieslys"` |
| Facebook | `"Volg ons op Facebook"` |
| WhatsApp | `"Deel op WhatsApp"` |
| Instagram | `"Volg ons op Instagram"` |
| E-edition download | `"Laai e-uitgawe af"` |

---

## Testing Checklist

After implementing icons in a new pattern or updating the icon library, verify:

- [ ] Die Papier custom library appears in editor under "Die Papier" tab in Icon Block picker
- [ ] All 67 icons render correctly in the editor
- [ ] Icons render on the frontend (not just editor preview)
- [ ] `currentColor` inheritance works — icon changes colour inside coloured sections
- [ ] Dark mode: icons invert correctly alongside surrounding text
- [ ] Decorative icons: `aria-hidden="true"` present in rendered HTML
- [ ] Semantic icons: `aria-label` set and reads correctly via screen reader
- [ ] Linked icons: link wraps icon, `aria-label` present on the `<a>` element
- [ ] All 8 icon patterns render at correct sizes on mobile and desktop
- [ ] No broken SVG renders (check browser console for SVG parse errors)
- [ ] `icons.json` manifest icon count matches `/assets/icons/*.svg` file count

---

## Related Files

| File | Description |
|------|-------------|
| `/guidelines/design-tokens/iconography.md` | React icon usage reference (Lucide sizes, colours, implementation) |
| `/wordpress-export/themes/die-papier-theme/assets/icons/icons.json` | Live icon manifest (all 67 icons) |
| `/wordpress-export/themes/die-papier-theme/assets/icons/*.svg` | Individual SVG source files |
| `/wordpress-export/themes/die-papier-theme/inc/custom-icons.php` | PHP registration file |
| `/wordpress-export/themes/die-papier-theme/assets/js/custom-icons.js` | Editor registration script |
| `/wordpress-export/themes/die-papier-theme/assets/css/icon-block.css` | Frontend icon styles |
| `/wordpress-export/themes/die-papier-theme/patterns/icon/` | All 8 icon pattern PHP files |
| `/src/app/pages/dev/IconBrowser.tsx` | Icon Browser dev tool |
| `/src/app/data/iconBrowserData.ts` | Icon Browser data source |
