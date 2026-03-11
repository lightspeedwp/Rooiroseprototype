# Iconography

**Last updated**: 2026-03-01
**Version**: 2.0

*Die Papier* uses the **Lucide React** icon library for consistent, clean, and accessible vector icons.

> **Dev Tool Reference**: The **Icon Browser** at `/ontwikkelaar/ikone` provides a complete, searchable registry of all 50+ icons used across the site — classified as interface, content, or social icons — with live preview, SVG export, WordPress Dashicon equivalents, and per-component usage tracking.

## 1. Library: Lucide React

We use `lucide-react` for all SVG icons.
*   **Style**: Outlined, 2px stroke width (default).
*   **Rounded**: Line joins are rounded for a friendlier look.

## 2. Usage Guidelines

### 2.1 Standard Sizes

| Size | Usage | Example |
| :--- | :--- | :--- |
| `14px` | Metadata, buttons (sm), tags. | `size={14}` |
| `16px` | Buttons (default), list items. | `size={16}` |
| `20px` | Section headers, large buttons. | `size={20}` |
| `24px` | Features, large headers. | `size={24}` |
| `32px+` | Hero illustrations, empty states. | `size={32}` |

### 2.2 Colors

Icons should generally inherit the text color (`currentColor`).
*   **Primary**: `#142135` (Navy)
*   **Accent**: `#D70025` (Red) - Used for active states, important actions, or branding.
*   **Muted**: `#9CA3AF` (Gray-400) - Used for metadata icons (calendar, user, clock).

### 2.3 Implementation

```tsx
import { Calendar, ChevronRight } from 'lucide-react';

// Standard metadata icon
<div className="flex items-center gap-2 text-gray-500">
  <Calendar size={14} />
  <span>12 Maart 2026</span>
</div>

// Button icon (right aligned)
<button className="flex items-center gap-2">
  Lees meer
  <ChevronRight size={16} />
</button>
```

## 3. Common Icons

| Concept | Icon Name |
| :--- | :--- |
| **Search** | `Search` |
| **Menu** | `Menu` |
| **Close** | `X` |
| **User/Profile** | `User` |
| **Calendar/Date** | `Calendar` |
| **Time/Duration** | `Clock` |
| **Arrow (Right)** | `ChevronRight` or `ArrowRight` |
| **External Link** | `ExternalLink` |
| **Share** | `Share2` |
| **Video** | `Play` |
| **Photo** | `Camera` |
| **Audio** | `Headphones` |

## 4. Custom Icons

For specific brand assets (like the Logo), use the `<Logo />` component or `figma:asset` imports. Do not use Lucide for the brand logo.

## 5. WordPress Export

The WordPress FSE theme uses the **Outermost Icon Block** (`outermost/icon`) for all icon rendering. A custom icon library of 67 Lucide-based SVGs is registered via the `iconBlock.icons` JavaScript filter, providing a consistent outline aesthetic across all content and social icons.

### Custom SVG Library (67 Icons)

**Interface Icons (24)**:
`search`, `x`, `menu`, `chevron-right`, `chevron-left`, `chevron-down`, `chevron-up`, `arrow-right`, `arrow-left`, `arrow-up`, `home`, `user`, `shopping-cart`, `copy`, `check`, `check-circle`, `alert-triangle`, `settings`, `download`, `upload`, `external-link`, `filter`, `share2`, `printer`

**Content Icons (28)**:
`calendar`, `clock`, `map-pin`, `mail`, `phone`, `tag`, `file-text`, `shield`, `lock`, `credit-card`, `info`, `play`, `camera`, `eye`, `globe`, `trophy`, `gift`, `heart`, `star`, `award`, `trending-up`, `headphones`, `megaphone`, `flower2`, `truck`, `cookie`, `book-open`, `newspaper`

**UI Theme Icons (4)**:
`sun`, `moon`, `monitor`, `languages`

**Feedback & Communication (4)**:
`help-circle`, `users`, `message-square`, `message-circle`

**Social Icons (7)**:
`facebook`, `x-social`, `instagram`, `linkedin`, `tiktok`, `youtube`, `whatsapp`

### Theme File Structure

```
/assets/icons/
  icons.json              ← Manifest (all 67 icons with inline SVG)
  search.svg ... etc      ← Individual SVG files (reference/backup)
/assets/js/
  custom-icons.js         ← Editor-only script (registers icons via iconBlock.icons filter)
/inc/
  custom-icons.php        ← PHP registration (reads icons.json, enqueues editor script)
/assets/css/
  icon-block.css          ← Frontend styling (section style overrides, responsive, a11y)
```

### Registration Flow

1. `functions.php` → loads `/inc/custom-icons.php`
2. `custom-icons.php` → reads `/assets/icons/icons.json`, enqueues `/assets/js/custom-icons.js` on `enqueue_block_editor_assets` hook, passes icon data via `wp_localize_script()`
3. `custom-icons.js` → registers icons under "Die Papier" category via `wp.hooks.addFilter('iconBlock.icons', ...)`
4. Editor shows "Die Papier" tab in Icon Block picker with all 67 custom icons

### Icon Rendering

All custom SVGs use Lucide's stroke-based rendering:
- `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`
- `currentColor` ensures theme color overrides work via the Icon Block's color picker
- All use `viewBox="0 0 24 24"` (standard Lucide canvas)