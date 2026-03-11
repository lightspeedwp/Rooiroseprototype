# Core Blocks Styling

**Last updated**: 2026-03-02
**Version**: 1.0
**Category**: Block Style Reference
**Template**: `/guidelines/_templates/block-guideline-template.md`

---

## 1. Overview

This document catalogs all block style variations (`is-style-*`) registered for core WordPress blocks in Die Papier. Block styles live in `/wordpress-export/themes/die-papier-theme/styles/blocks/` as individual JSON files registered via `theme.json v3` `blockTypes`.

**Total active styles**: 31 across 4 categories (core, typography, color, woocommerce).

---

## 2. Style Registration

All styles registered via `theme.json v3` block style variation files. PHP fallback registration in `/inc/block-styles.php` only for styles requiring inline CSS that JSON cannot express.

```
styles/blocks/
├── button/              — core/button styles
│   ├── button-default.json
│   ├── button-outline.json
│   └── button-ghost.json
├── group/               — core/group section styles
│   ├── card.json
│   ├── newsletter.json
│   └── section-*.json  (24 section style variants)
├── heading/             — core/heading styles
│   ├── section-title.json
│   └── display.json
├── image/               — core/image styles
│   ├── rounded.json
│   ├── circular.json
│   └── shadow.json
├── list/                — core/list styles
│   ├── no-bullets.json
│   ├── checkmarks.json  (PHP — requires inline CSS)
│   └── numbered-circle.json (PHP — requires inline CSS)
├── paragraph/           — core/paragraph styles
│   ├── lead.json
│   └── badge.json
├── quote/               — core/quote styles
│   └── border-left.json
└── separator/           — core/separator styles
    └── brand-line.json
```

---

## 3. Button Styles (`core/button`)

| Style | Slug | Description |
|-------|------|-------------|
| Solid (default) | `default` / `button-default` | Red bg (`--primary`), white text. Primary CTA. |
| Outline | `outline` / `button-outline` | Transparent bg, navy border + text. Secondary action. |
| Ghost | `ghost` / `button-ghost` | No bg, no border, navy text. Tertiary/inline action. |

**Usage rule**: Default → primary CTAs. Outline → secondary. Ghost → nav/link actions.

### Token mapping
| Property | Token |
|:---------|:------|
| Background (solid) | `var:preset\|color\|primary` |
| Text (solid) | `var:preset\|color\|base` |
| Border radius | `var:preset\|border-radius\|200` |
| Padding H | `var:preset\|spacing\|50` |
| Padding V | `var:preset\|spacing\|20` |
| Border (outline) | `var:preset\|color\|brand-navy`, width `var:custom\|border-width\|100` |

---

## 4. Group / Section Styles (`core/group`)

### Structural Styles

| Style | Slug | Description |
|-------|------|-------------|
| Card | `card` | White bg, border, shadow-200, rounded-400 radius. All card-type groupings. |
| Newsletter | `newsletter` | Brand-navy bg, white text. Newsletter CTA sections. |

### Section Style Variants (24 styles)

These section styles control background, text color, and link color for full-width section wrappers. Applied to outer `core/group` blocks that span full width.

| Range | Style names | Description |
|:------|:------------|:------------|
| Light | `section-white`, `section-light`, `section-paper` | Light backgrounds |
| Dark | `section-dark`, `section-navy`, `section-shade` | Dark navy backgrounds |
| Accent | `section-brand`, `section-red`, `section-feature` | Brand accent sections |
| Special | `section-newsletter`, `section-sponsor`, `section-author` | Content-type specific |

**Key rule**: Section styles use `padding` for vertical rhythm (NOT `blockGap` or spacers). Left/right padding is fluid: `clamp(1rem, 4vw, 2rem)`.

---

## 5. Heading Styles (`core/heading`)

| Style | Slug | Description |
|-------|------|-------------|
| Section Title | `section-title` | H2/H3 section headings. Navy color, Inter font, uppercase tracking. |
| Display | `display` | H1 hero headings. Roboto Serif, large fluid size (font-size 900). |

---

## 6. Image Styles (`core/image`)

| Style | Slug | Description |
|-------|------|-------------|
| Rounded | `rounded` | Border-radius 400 (`0.5rem`). Article thumbnails. |
| Circular | `circular` | Border-radius 9999. Avatars, team photos (requires 1:1 aspect ratio). |
| Shadow | `shadow` | Drop shadow-400. Feature images, standalone photos. |

---

## 7. List Styles (`core/list`)

| Style | Slug | Description | Registration |
|-------|------|-------------|--------------|
| No Bullets | `no-bullets` | Removes default list bullets. Navigation lists, tag clouds. | JSON |
| Checkmarks | `checkmarks` | Green check SVG bullets. Feature/benefit lists. | PHP (inline CSS) |
| Numbered Circle | `numbered-circle` | Circular numbered list items. Step-by-step instructions. | PHP (inline CSS) |
| Inline | `inline-list` | Horizontal flex list. Comma-separated tag/category displays. | PHP (inline CSS) |

---

## 8. Paragraph Styles (`core/paragraph`)

| Style | Slug | Description |
|-------|------|-------------|
| Lead | `lead` | Larger introductory text (font-size 500 = 18px). Article leads. |
| Badge | `badge` | Small pill/tag text (font-size 100 = 11px, uppercase, rounded bg). Categories, labels. |

---

## 9. Quote Style (`core/quote`)

| Style | Slug | Description |
|-------|------|-------------|
| Border Left | `border-left` | Left border accent (4px, brand-red). Pull quotes, editorial callouts. |

---

## 10. Separator Style (`core/separator`)

| Style | Slug | Description |
|-------|------|-------------|
| Brand Line | `brand-line` | 2px solid brand-red separator. Section dividers with brand accent. |

---

## 11. WooCommerce Block Styles

WooCommerce block styles live alongside core styles but target `woocommerce/*` block types.

| Style | Block | Slug | Description |
|-------|-------|------|-------------|
| Primary | `woocommerce/product-button` | `button-primary` | Red bg, white text. Add-to-cart button. |
| Price Accent | `woocommerce/product-price` | `price-accent` | Brand-red price color. Sale/promo pricing. |
| Image Rounded | `woocommerce/product-image` | `rounded` | Rounded product image corners. |

---

## 12. Accordion Block (Core WP 6.9+)

The `core/details` block (accordion) does not use `is-style-*` variations — it is styled globally via `theme.json styles.blocks.core/details` and CSS in `style.css`. See `/guidelines/components/blocks/design/accordion.md`.

---

## 13. WordPress Mapping

All styles exported as individual JSON files under:
```
/wordpress-export/themes/die-papier-theme/styles/blocks/{block-type}/{slug}.json
```

Format (v3):
```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "title": "Style Display Name",
  "slug": "style-slug",
  "blockTypes": ["core/button"],
  "styles": { ... }
}
```

---

## 14. Related Files

- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` — Token reference
- `/guidelines/design-tokens/colors.md` — Color tokens
- `/guidelines/design-tokens/ui-presets.md` — Shadow, radius, border tokens
- `/guidelines/design-tokens/spacing.md` — Spacing tokens
- `/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md` — Section style full spec
- `/guidelines/components/blocks/design/accordion.md` — Accordion (core/details) styling
- `/src/app/data/blockStylesData.ts` — React data source
- `/wordpress-export/themes/die-papier-theme/styles/blocks/` — WP export files
- `/wordpress-export/themes/die-papier-theme/inc/block-styles.php` — PHP registrations (PHP-only styles)
