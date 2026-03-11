# Block: dp/content-hero

**Last updated**: 2026-02-27
**Status**: DEPRECATED — block source deleted from plugin (2026-02-27)
**Replacement**: `section-content-hero.php` pattern using `core/cover` block
**See**: `/wordpress-export/themes/die-papier-theme/patterns/section-content-hero.php`
**Category**: Block (Deprecated)
**Block name**: `dp/content-hero`
**Title**: Inhoud Held
**Source**: ~~`/wordpress-export/plugins/die-papier-blocks/src/blocks/content-hero/`~~ (deleted)
**React equivalent**: `ContentHero.tsx`

---

> **DEPRECATED**: This custom block has been replaced by the `section-content-hero.php` theme pattern, which uses the native `core/cover` block. The cover block provides all the same functionality: background image, overlay opacity, min-height, overlay colour presets, and inner heading + paragraph. Pages that previously used `<!-- wp:dp/content-hero {...} /-->` now use inline `core/cover` markup.

## Replacement Guide

The `core/cover` block replaces all `dp/content-hero` functionality:
- `overlayColor` → cover overlay colour preset (`brand-navy`, `primary`, `contrast`, `base-2`)
- `dimRatio` → cover dim ratio (0-100)
- `minHeight` → cover min-height (px)
- `mediaUrl` → cover background image URL
- Title → inner `core/heading` (level 1, center aligned)
- Subtitle → inner `core/paragraph` (center aligned)

Variant colour mapping:
| dp/content-hero variant | core/cover overlayColor |
|:---|:---|
| `dark` | `contrast` |
| `light` | `base-2` |
| `navy` | `brand-navy` |
| `red` | `primary` |

Affected patterns: `page-home.php`, `page-team.php`, `page-submit-hub.php` — all updated to use inline `core/cover`.

## 1. Purpose

Versatile hero banner for static pages. Supports title, subtitle, background image with overlay, and colour variants.

## 2. Attributes

| Attribute | Type | Default | Editable |
|:----------|:-----|:--------|:---------|
| `title` | `string` | `""` | Yes |
| `subtitle` | `string` | `""` | Yes |
| `mediaId` | `number` | `0` | Yes (MediaUpload) |
| `mediaUrl` | `string` | `""` | Yes |
| `overlayOpacity` | `number` | `60` | Yes (RangeControl) |
| `variant` | `string` | `"dark"` | Yes — enum: dark, light, navy, red |
| `minHeight` | `number` | `400` | Yes (px) |

## 3. Supports

- Align: `full`, `wide`
- HTML: `false`
- Anchor: `true`

## 4. Files

- `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`
- No `view.js` — server-rendered only

## 5. Used In Templates/Patterns

Used in almost every static page pattern.