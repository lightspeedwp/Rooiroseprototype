# Block: dp/tab-bar

**Last updated**: 2026-02-23
**Category**: Block
**Block name**: `dp/tab-bar`
**Title**: Oortjie-balk
**Source**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/tab-bar/`
**React equivalent**: Radix `Tabs` (`/src/app/components/ui/tabs.tsx`) — used in Competitions, Events, Multimedia, Traffic pages

---

## 1. Purpose

Tabbed content navigation block. Renders a horizontal tab bar with selectable triggers and corresponding content panels. Used for switching between content views (e.g. "Aktief" / "Vorige" competitions, media types, traffic filters).

## 2. Attributes

| Attribute | Type | Default | Notes |
|:----------|:-----|:--------|:------|
| `defaultTab` | `string` | `""` | Initially active tab value |
| `variant` | `string` | `"pills"` | `"pills"` (rounded bg) or `"underline"` (border-bottom) |

## 3. InnerBlocks

This block uses InnerBlocks with two allowed child blocks:
- `dp/tab-trigger` — Individual tab button (attributes: `value`, `label`)
- `dp/tab-content` — Tab content panel (attributes: `value`; allows any InnerBlocks)

## 4. Design Tokens

### Pills variant (Competitions)
| Element | Value |
|:--------|:------|
| Tab list | `bg-gray-200/70 dark:bg-muted h-11 rounded-lg` |
| Active trigger | `bg-white dark:bg-card text-brand-navy dark:text-foreground shadow-sm` |
| Inactive trigger | `text-gray-600 dark:text-gray-400` |

### Underline variant (Multimedia)
| Element | Value |
|:--------|:------|
| Tab list | `border-b border-gray-200 dark:border-border` |
| Active trigger | `border-b-2 border-brand-red text-brand-red` |
| Inactive trigger | `text-gray-500 hover:text-gray-700 dark:text-gray-400` |

### Filter pills variant (Events, Traffic)
| Element | Value |
|:--------|:------|
| Active pill | `bg-brand-red text-white shadow-sm rounded-full` |
| Inactive pill | `bg-white dark:bg-card text-muted-foreground border border-border rounded-full` |

## 5. Supports

- Align: `wide`
- HTML: `false`
- Spacing: margin only

## 6. Files

- `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`, `view.js`

## 7. Interactivity

`view.js` — Interactivity API for tab switching (show/hide content panels based on active trigger). No page reload needed.

## 8. Dependencies

- **React**: `@radix-ui/react-tabs`
- **WordPress**: `@wordpress/interactivity`

## 9. Used In Templates

- `page-kompetisies.html`, `page-multimedia.html`, `page-gebeure.html`
- Any template requiring tabbed content navigation
