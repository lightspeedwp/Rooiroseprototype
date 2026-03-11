# Comprehensive Theme Audit Orchestrator — Die Papier WordPress Theme

**Created**: 2026-03-02
**Last Updated**: 2026-03-03
**Audits**: 16 sequential audits (expanded from 13)
**Output**: 16 audit reports + synthesized task list(s)
**Supersedes**: legacy-slug-cleanup-orchestrator.md, theme-json-slug-migration-audit.md, wp-block-refactor-audit.md

---

## Related Orchestrators & Guideline Dependencies

This is the **master orchestrator** for the Die Papier WordPress theme. The following sub-orchestrators cover specialized audit domains. Each has been (or should be) executed independently, but their findings feed back into this master orchestrator's scope. After all sub-orchestrators complete, this master orchestrator provides the unified validation layer.

### Sub-Orchestrator Index

| # | Orchestrator | Audits | Status | Guideline Dependencies |
|---|-------------|--------|--------|----------------------|
| 1 | [`advanced-ads-audit-orchestrator.md`](/prompts/advanced-ads-audit-orchestrator.md) | 3 | ✅ Complete | **Reads**: `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`, `/src/imports/advanced-ads-strategy.md` · **Creates/Updates**: Ad placement inventory in `advanced-ads.md` (Sections 1-15) |
| 2 | [`guidelines-cleanup-orchestrator.md`](/prompts/guidelines-cleanup-orchestrator.md) | 10 | ✅ Complete | **Reads**: All `/guidelines/` directories · **Creates/Updates**: Guideline file templates, dev tools data fixes, block spec cleanup. **Report**: `/reports/audits/guidelines-cleanup/audit-consolidated-2026-03-03.md` · **Tasks**: `/tasks/guidelines-cleanup-task-list.md` (19 tasks) |
| 3 | [`new-templates-patterns-orchestrator.md`](/prompts/new-templates-patterns-orchestrator.md) | 7 | ✅ Complete | **Reads**: `/guidelines/wordpress-migration/templates-and-parts.md`, `/guidelines/wordpress-migration/pattern-strategy.md`, template exemplars · **Creates/Updates**: 5 category template guidelines, 4 WooCommerce template guidelines, 2 template part guidelines, `templates-and-parts.md`, `archives.md` |
| 4 | [`performance-optimization-orchestrator.md`](/prompts/performance-optimization-orchestrator.md) | 7 | ⏸️ Created, not executed | **Reads**: None (React-only scope) · **Creates/Updates**: None currently — **needs** `/guidelines/development/performance.md` |
| 5 | [`hero-slider-mobile-readability-orchestrator.md`](/prompts/hero-slider-mobile-readability-orchestrator.md) | 2 | ✅ Complete | **Reads**: `/guidelines/components/blocks/hero-slider.md` · **Creates/Updates**: None (React-only scope) |

### Guideline Files Referenced Across All Orchestrators

**Design Tokens** (read by Audits 1-6 of this orchestrator):
- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` — Master token reference
- `/guidelines/design-tokens/colors.md` — Color palette
- `/guidelines/design-tokens/typography.md` — Font sizes, families
- `/guidelines/design-tokens/spacing.md` — Spacing presets
- `/guidelines/design-tokens/ui-presets.md` — Shadows, radii, borders
- `/guidelines/design-tokens/layout.md` — Aspect ratios, layout
- `/guidelines/design-tokens/iconography.md` — Icon sizing
- 

**WordPress Migration** (read by Audits 7-16):
- `/guidelines/wordpress-migration/templates-and-parts.md` — Template hierarchy
- `/guidelines/wordpress-migration/pattern-strategy.md` — Pattern classification
- `/guidelines/wordpress-migration/block-styles.md` — Block style architecture
- `/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md` — Section styles

**Third-Party Plugins** (read by Audits 9-12):
- `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`
- `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md`
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md`
- `/guidelines/wordpress-migration/third-party-plugins/icon-block.md`
- `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md`
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md`

**Component Guidelines** (read by template/pattern audits):
- `/guidelines/components/patterns/archives.md` — Archive pattern inventory
- `/guidelines/components/patterns/sections.md` — Section pattern inventory
- `/guidelines/components/patterns/homepage.md` — Homepage pattern inventory
- `/guidelines/components/patterns/cards-and-utilities.md` — Card patterns
- `/guidelines/components/blocks/wordpress-blocks.md` — Block inventory

---

## Objective

Execute a comprehensive audit of the Die Papier WordPress theme to ensure:

1. ✅ **theme.json slug system** is 100% consistent (OllieWP-aligned slugs)
2. ✅ **Block styles** are correctly defined as JSON files with proper preset references
3. ✅ **Section styles** are applied consistently across all templates, with button/outline variants for dark sections
4. ✅ **Third-party plugin blocks** are correctly implemented per plugin-specific guidelines
5. ✅ **Pattern accuracy** — HTML output matches block comment attributes, preset values used instead of hardcoded
6. ✅ **Preset compliance** — borders, shadows, radii, aspect-ratios, and spacing all use defined presets
7. ✅ **Template system** — all parts/templates reference valid patterns and correct section styles
8. ✅ **Dev tools** are synchronized with WordPress export files

---

## Context

### Current State (2026-03-03)

- ✅ **theme.json** mass slug migration complete (colors, spacing, font-sizes → OllieWP slugs)
- ✅ **Section styles** reduced to 9 production-ready JSON files
- ✅ **Block styles** extracted to `/styles/blocks/**/*.json` (71 files)
- ✅ **Third-party block CSS/JS** enqueued (Gravity Forms, Yoast SEO, Social Sharing)
- ✅ **Advanced Ads** 12 placements with `dp-` prefix, archive in-feed slots implemented
- ⚠️ **Missing block styles**: `is-style-card` and `is-style-card-hover` for `core/group` and `core/column` — used in 50+ instances but no JSON file exists
- ⚠️ **Invalid color slugs**: `base-2`, `base-3`, `contrast`, `neutral-50` used in 23+ instances but not in color palette
- ⚠️ **Legacy numeric font-size slugs**: `100`, `200`, `300`, `400` still present in 6 instances
- ⚠️ **Zero shadow preset usage** despite 6 shadow presets being defined
- ⚠️ **Hardcoded hex colors** in 9 pattern files
- ⚠️ **Section styles lack outline button variants** for dark backgrounds

### Target State

- 🎯 All slugs aligned to OllieWP system (zero numeric slugs)
- 🎯 All block styles defined in `/styles/blocks/{block-namespace}/{style-slug}.json` with correct preset references
- 🎯 All section styles define button variants (fill + outline) for their context
- 🎯 All templates apply correct section styles to their wrapper groups
- 🎯 All patterns use preset values (colors, spacing, shadows, radii, borders, font-sizes)
- 🎯 All third-party blocks correctly implemented per plugin guidelines
- 🎯 Zero hardcoded hex colors, zero invalid slug references
- 🎯 Dev tools reading directly from WordPress export (single source of truth)

---

## Canonical Slug System (OllieWP Standard)

### Color Slugs (10 — canonical palette from `colors.json`)
```
primary            → #E82C27 (Brand Red)
primary-alt        → #C41F20 (Brand Red Darker)
secondary          → #172134 (Brand Navy)
secondary-accent   → #1A3A5F (Navy Light)
base               → #FFFFFF (White)
tertiary           → #F0F0F0 (Brand Light Grey)
border-light       → #DDDDDD (Border Base)
main               → #2c2c2c (Foreground)
main-accent        → #636375 (Muted Foreground)
accent             → #C41F20 (Text Link Red)
```

**INVALID** slugs that must be replaced:
- `base-2` → `tertiary`
- `base-3` → `border-light`
- `contrast` → `secondary`
- `neutral-50` → `tertiary`
- `navy` → `secondary`
- `red` → `primary`

### Spacing Slugs (7)
```
x-small    → clamp(0.25rem, 1vw, 0.5rem)
small      → clamp(0.5rem, 2vw, 0.75rem)
medium     → clamp(0.75rem, 2.5vw, 1rem)
large      → clamp(1rem, 4vw, 2rem)
x-large    → clamp(1.5rem, 5vw, 3rem)
xx-large   → clamp(2rem, 7vw, 5rem)
xxx-large  → clamp(3rem, 9vw, 8rem)
```

### Font Size Slugs (8)
```
x-small    → 0.75rem
small      → 0.875rem
base       → 1rem
medium     → 1.125rem
large      → 1.25rem
x-large    → 1.5rem
xx-large   → 2rem
xxx-large  → 3rem
```

**INVALID** numeric slugs and their mappings:
- `100` → `x-small`
- `200` → `small`
- `300` → `base`
- `400` → `medium`

### Shadow Presets (6 — from `shadows.json`)
```
100 → Subtle:  0 1px 2px 0 rgb(0 0 0 / 0.05)
200 → Small:   0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px 0 rgb(0 0 0 / 0.06)
300 → Medium:  0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)
400 → Large:   0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)
500 → XL:      0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)
600 → 2XL:     0 25px 50px -12px rgb(0 0 0 / 0.25)
```

Usage in block JSON: `"shadow": "var:preset|shadow|200"`

### Border Width Presets (4 — from `borders.json`)
```
0   → 0
100 → 1px
200 → 2px
300 → 4px
```

Usage: `var(--wp--custom--border-width--100)` or raw `1px` aligned with preset scale.

### Border Radius Presets (7 — from `radii.json`)
```
100  → 0.125rem (2px)
200  → 0.25rem  (4px)
300  → 0.375rem (6px)
400  → 0.5rem   (8px)
500  → 0.75rem  (12px)
600  → 1rem     (16px)
9999 → 9999px   (pill)
```

**Note**: WordPress block JSON `border.radius` does NOT support `var:custom|*` syntax. Use raw values aligned with the preset scale, or the CSS custom property string `var(--wp--custom--border-radius--400)`.

### Aspect Ratio Classes (6 — from `aspect-ratios.json`)
```
.aspect-square    → 1 / 1
.aspect-video     → 16 / 9
.aspect-4-3       → 4 / 3
.aspect-3-2       → 3 / 2
.aspect-3-4       → 3 / 4
.aspect-newspaper → 210 / 297
```

Usage in `wp:image`: `"aspectRatio": "1"` for square, `"aspectRatio": "16/9"` for video, etc.

---

## Section Styles Architecture

### Active Section Styles (9 — from `/styles/sections/*.json`)

| Slug | Title | Background | Text | Button BG | Button Text | Use Case |
|------|-------|-----------|------|-----------|-------------|----------|
| `section-white` | Wit afdeling | `base` | `main` | `primary` | `base` | Default content sections |
| `section-muted` | Gedempte afdeling | `tertiary` | `main` | `primary` | `base` | Alternating sections, FAQ |
| `section-navy` | Navy | `secondary` | `base` | `base` | `secondary` | Dark feature sections |
| `section-navy-light` | Navy Light | `secondary-accent` | `base` | `base` | `secondary` | Subtle dark sections |
| `section-red` | Red | `primary` | `base` | `base` | `primary` | CTA, highlight sections |
| `section-gradient-navy` | Gradient Navy | `secondary` gradient | `base` | `base` | `secondary` | Newsletter CTAs |
| `section-faq` | FAQ Section | `tertiary` | `main` | `primary` | `base` | FAQ accordions (details/yoast) |
| `section-cover-hero` | Cover Hero | overlay | `base` | `primary` | `base` | Cover blocks with image |
| `section-hero-default` | Hero Default | overlay | `base` | `primary` | `base` | Non-cover hero sections |

### Section Style Application Rules

1. **Template Structure**: Every template should wrap its main content areas in `core/group` blocks with appropriate section styles.
2. **Alternating Sections**: Use `section-white` and `section-muted` for visual rhythm.
3. **Dark Sections**: `section-navy`, `section-red`, `section-gradient-navy` — these sections **must** define inverted button colors (white button, dark text).
4. **Hero Sections**: Use `section-cover-hero` for `core/cover` blocks, `section-hero-default` for `core/group` hero sections.
5. **Block Coverage**: Each section style defines styles for 15+ blocks including `core/heading`, `core/paragraph`, `core/button`, `core/separator`, `core/search`, `core/details`, `core/list`, `core/navigation`, `core/image`, `core/quote`, `core/pullquote`, `yoast/faq-block`, `yoast-seo/breadcrumbs`, `core/social-links`.
6. **Outline Button Gap**: Dark section styles currently lack outline button variant definitions. These need to be added to ensure `is-style-outline` buttons are visible on dark backgrounds.

### Section Style to Template Mapping

| Template | Expected Section Styles |
|----------|------------------------|
| `front-page.html` | `section-white` (default), `section-muted` (alternating), `section-navy` (newsletter CTA), `section-gradient-navy` (newsletter) |
| `single.html` | `section-white` (article content), `section-muted` (related articles/comments) |
| `archive.html` | `section-hero-default` (header), `section-muted` (subcategories), `section-white` (post grid) |
| `category.html` | Same as archive |
| `page.html` | Pattern-dependent (page patterns define their own section styles) |
| `search.html` | `section-hero-default` (search header), `section-white` (results) |
| `404.html` | `section-white` |
| WooCommerce templates | `section-white` (default), page headers use `base-2` → should be `tertiary` |

---

## Block Styles Architecture

### How Block Styles Work in WordPress 6.6+

Block styles are defined as JSON files in `/styles/blocks/{block-name}/{style-slug}.json`. WordPress auto-discovers these files and registers them. The JSON structure follows `theme.json` schema v3:

```json
{
    "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
    "version": 3,
    "title": "Human Readable Name",
    "slug": "block-name-style-slug",
    "blockTypes": ["core/block-name"],
    "styles": {
        "color": { ... },
        "border": { ... },
        "spacing": { ... },
        "typography": { ... },
        "shadow": "var:preset|shadow|200",
        "css": "& .some-element { custom-property: value; }"
    }
}
```

**Key References**:
- [WordPress Global Settings & Styles](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/)
- [Custom Block Style Variations using JSON](https://kau-boys.com/4130/web-development/implementing-a-custom-block-style-variation-using-only-json-files)
- [Custom Block Styles (FSE)](https://fullsiteediting.com/lessons/custom-block-styles/)
- [Block Variations Implementation](https://rtcamp.com/handbook/developing-for-block-editor-and-site-editor/implementing-block-variations/)

### Block Style Directory Structure
```
/styles/blocks/
├── button/
│   ├── default.json        ← Default button styles
│   └── outline.json        ← Outline button variation
├── columns/
│   └── default.json
├── group/                  ← MISSING — needs card.json, card-hover.json
│   ├── card.json           ← TO CREATE
│   └── card-hover.json     ← TO CREATE
├── column/                 ← MISSING — needs card.json
│   └── card.json           ← TO CREATE
├── heading/
│   └── card-compact.json
├── image/
│   ├── default.json
│   ├── rounded.json
│   ├── circular.json
│   ├── caption-overlay.json
│   └── shadow.json
├── list/
│   └── (inline registered in block-styles.php)
├── navigation/
│   └── default.json
├── outermost/
│   ├── icon/
│   └── social-sharing/
├── paragraph/
│   └── default.json
├── post-template/
│   └── product-card.json
├── separator/
│   └── wide.json
├── table/
│   └── default.json
├── woocommerce/
│   └── (30 files)
├── yoast/
│   └── faq-block/
└── yoast-seo/
    └── breadcrumbs/
```

### Block Style JSON Rules

1. **Slug format**: `{block-name}-{style-name}` (e.g., `group-card`, `button-outline`)
2. **All color values**: MUST use `var:preset|color|{slug}` — never hardcoded hex
3. **All spacing values**: MUST use `var:preset|spacing|{slug}` — never hardcoded rem/px
4. **Shadow values**: MUST use `var:preset|shadow|{slug}` — never inline shadow strings
5. **Font sizes**: MUST use `var:preset|font-size|{slug}` — never hardcoded rem/px
6. **Border radius**: Use `var(--wp--custom--border-radius--{slug})` or the equivalent raw value from the preset scale
7. **Border width**: Use `var(--wp--custom--border-width--{slug})` or the equivalent raw value from the preset scale
8. **CSS property**: For styles requiring pseudo-selectors (`:hover`, `:focus`), transitions, or transforms — use the `"css"` property with inline CSS targeting `&`
9. **blockTypes**: MUST specify which blocks the style applies to
10. **No duplicate slugs**: Each slug must be unique across all block style files

### Block Styles Registered via PHP (exceptions)

Some block styles require inline CSS that JSON cannot express. These are registered in `/inc/block-styles.php`:
- `core/list` → `inline-list` (flex layout)
- `core/list` → `list-checkmarks` (custom markers)
- `core/list` → `list-numbered-circle` (counter-based)

---

## Third-Party Plugin Block Guidelines

### 1. Yoast SEO

**Blocks**: `yoast/faq-block`, `yoast-seo/breadcrumbs`

**Correct block names**:
- ✅ `yoast/faq-block` — the FAQ block (Schema.org JSON-LD)
- ✅ `yoast-seo/breadcrumbs` — the breadcrumbs block
- ❌ `yoast-seo/faq-block` — WRONG (old incorrect name)
- ❌ `yoast-seo/faq` — WRONG

**Section style integration**:
- FAQ blocks inherit styling from section styles. All 9 section styles define `yoast/faq-block` block overrides.
- Dark section styles (navy, red, gradient-navy) define white text and `color-mix` borders for FAQ items.
- Light section styles (white, muted, faq) define main text and `border-light` borders.
- The dedicated `section-faq` style adds extra padding and styled `core/details` blocks for accordion layout.

**Breadcrumbs placement**: Used in the `breadcrumbs` template part. Dark section styles define `yoast-seo/breadcrumbs` with reduced opacity text and small font-size.

**Block style files**:
- `/styles/blocks/yoast/faq-block/` — FAQ block default styles
- `/styles/blocks/yoast-seo/breadcrumbs/` — Breadcrumbs default styles

**CSS file**: `/assets/css/yoast-seo.css` — Custom styling for FAQ accordions and schema markers.

### 2. Gravity Forms

**Block**: `gravityforms/form`

**Usage pattern**:
```html
<!-- wp:gravityforms/form {"formId":"1","title":false,"description":false,"ajax":true} /-->
```

**Form IDs** (production):
| ID | Form | Pattern |
|----|------|---------|
| 1 | Nuusbrief (Newsletter) | section-newsletter-cta.php, section-newsletter-form.php |
| 2 | Kontak Ons (Contact) | section-contact-form.php |
| 3+ | Submission forms | Various section patterns |

**Deprecated blocks to replace**:
- `dp/newsletter-cta` → `gravityforms/form` with newsletter form ID
- Custom submission form blocks → `gravityforms/form`

**Block style file**: `/styles/blocks/gravityforms/` — Input, button, validation styling.
**CSS file**: `/assets/css/gravity-forms.css` — Brand-aligned input/button/validation styles.

**Section style support**: Gravity Forms blocks within dark sections (navy, red) need specific CSS overrides via `/assets/css/gravity-forms.css` to ensure input backgrounds, borders, and placeholder text are visible.

### 3. Advanced Ads

**Block**: `advads/gblock`

**Naming convention**: All 12 active placements use mandatory `dp-` prefix.

**Active placements**:
| Placement | Slot | Location |
|-----------|------|----------|
| `dp-header-leaderboard` | Leaderboard (728x90) | Header template part |
| `dp-sidebar-home-top` | MREC (300x250) | Home sidebar |
| `dp-sidebar-home-bottom` | MREC | Home sidebar |
| `dp-sidebar-article-top` | MREC | Article sidebar |
| `dp-sidebar-article-bottom` | MREC | Article sidebar |
| `dp-post-footer-mrec` | MREC | Related articles section |
| `dp-archive-in-feed` | MREC/Leaderboard | After row 1 in archive grids |
| `dp-sidebar-obituary` | MREC | Obituary sidebar |
| `dp-sidebar-newsletter` | MREC | Newsletter sidebar |
| `dp-sidebar-search` | MREC | Search sidebar |
| `dp-sidebar-eedition` | MREC | E-Edition sidebar |
| `dp-sticky-footer` | Sticky footer banner | All pages |

**Deprecated blocks to replace**:
- `dp/ad-unit` → `advads/gblock`
- `dp/sticky-footer` → `advads/gblock` with sticky placement

**Archive in-feed ads**: Implemented using split AQL queries in 5 archive patterns (competitions, events, obituaries, multimedia, e-editions). The ad slot appears after the first row of cards.

**Membership integration**: `/inc/advanced-ads-memberships.php` handles ad suppression for premium subscribers.

### 4. Advanced Query Loop (AQL)

**Block**: `core/query` with `namespace: "advanced-query-loop"`

**Usage**:
```html
<!-- wp:query {"queryId":1,"query":{"perPage":4,"postType":"post","taxQuery":{"category":[123]},"offset":0},"namespace":"advanced-query-loop","displayLayout":{"type":"flex","columns":4}} -->
```

**Key attributes**:
- `namespace: "advanced-query-loop"` — activates AQL features
- `disable_pagination: true` — for homepage sections
- `enable_caching: true` — for performance
- `taxQuery` — category/tag filtering

**Post deduplication**: `/inc/aql-deduplication.php` tracks displayed posts across sections to prevent duplicates on the homepage.

**Homepage sections**: All 10+ homepage section patterns use AQL for category-specific queries with deduplication tracking.

### 5. Social Sharing (Outermost)

**Block**: `outermost/social-sharing`

**Network priority** (South African audience):
1. Facebook
2. WhatsApp (critical for SA market)
3. X (Twitter)
4. Email
5. Copy Link

**Block style file**: `/styles/blocks/outermost/social-sharing/`
**CSS file**: `/assets/css/social-sharing.css`
**JS file**: `/assets/js/social-sharing-i18n.js` — Afrikaans translations ("Deel op Facebook", "Stuur op WhatsApp", etc.)

**Section style integration**: All section styles should handle `outermost/social-sharing` colors. Currently handled via CSS file overrides for dark backgrounds.

### 6. Icon Block (Outermost)

**Block**: `outermost/icon`

**Custom icon library**: `/assets/icons/icons.json` manifest + `/inc/custom-icons.php` registration.

**Size mapping**:
| Size | Value |
|------|-------|
| xs | 12px |
| sm | 16px |
| md | 20px |
| lg | 24px |
| xl | 32px |
| 2xl | 40px |
| 3xl | 48px |

**Block style file**: `/styles/blocks/outermost/icon/`

**⚠️ Known issue**: Several icon patterns use hardcoded hex colors for icon `color` attribute instead of preset references. See Audit 14.

### 7. WooCommerce

**Blocks**: 30+ WooCommerce blocks styled in `/styles/blocks/woocommerce/`

**Key blocks**:
- `woocommerce/mini-cart` — Mini cart in header
- `woocommerce/cart` — Cart page
- `woocommerce/checkout` — Checkout page
- `woocommerce/product-button` — Add to cart button
- `woocommerce/product-image` — Product image
- `woocommerce/product-price` — Product price
- `woocommerce/breadcrumbs` — WC breadcrumbs
- `woocommerce/customer-account` — Account icon

**Template structure rule**: WooCommerce patterns must NOT contain `wp:template-part` for header/footer. Headers and footers are only in WooCommerce templates.

**Subscriptions & Memberships**: WooCommerce Subscriptions for e-editions, Memberships for content access gates. See `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md`.

### 8. Core Social Links

**Block**: `core/social-links`

Used in footer template parts for profile links. Styled in section styles (dark sections set `color.text` to `base`).

**Hidden pattern**: `hidden/hidden-social-profiles.php` contains the canonical social profile URLs.

---

## Pattern Accuracy Validation Rules

### Rule 1: HTML Output Must Match Block Comment Attributes

Every block comment's JSON attributes must be reflected in the corresponding HTML output:

```html
<!-- wp:group {"backgroundColor":"secondary","textColor":"base","className":"is-style-section-navy"} -->
<div class="wp-block-group has-secondary-background-color has-base-color has-text-color has-background is-style-section-navy">
```

**Required HTML classes for color attributes**:
- `backgroundColor:"secondary"` → `has-secondary-background-color has-background`
- `textColor:"base"` → `has-base-color has-text-color`
- `className:"is-style-*"` → matches exactly in class attribute

### Rule 2: Style Attributes Must Match

When `style` is specified in block JSON, the HTML `style` attribute must contain the matching CSS properties:
```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--large)">
```

### Rule 3: Preset References Only

All values that have preset equivalents MUST use preset references:
- ✅ `"backgroundColor":"primary"` (slug reference)
- ✅ `"color":{"text":"var:preset|color|main"}` (preset variable)
- ❌ `"color":{"text":"#2c2c2c"}` (hardcoded — violates preset system)
- ❌ `"fontSize":"0.875rem"` (hardcoded — should be `var:preset|font-size|small`)

### Rule 4: No Orphaned Slugs

Every slug referenced in a pattern must exist in the corresponding preset file:
- Color slugs → `colors.json` palette
- Font-size slugs → `typography.json` fontSizes
- Spacing slugs → `spacing.json` spacingSizes
- Shadow slugs → `shadows.json` presets

---

## Audit Sequence

### Phase 1: Slug System Validation

#### Audit 1: Color Slug Validation

**Scope**: All patterns, parts, templates
**Report**: `/reports/audits/01-color-slug-validation.md`

**Criteria**:
1. Extract all `backgroundColor`, `textColor`, `color` slug references
2. Extract all `var:preset|color|{slug}` references
3. Cross-reference against canonical 10-slug palette
4. Flag invalid slugs: `base-2`, `base-3`, `contrast`, `neutral-50`, `navy`, `red`
5. Flag hardcoded hex colors (regex: `"color":"#[0-9A-Fa-f]{3,6}"`, `"text":"#[0-9A-Fa-f]{3,6}"`)
6. Flag `iconColorValue` hardcoded values (acceptable for WC mini-cart, social-links)

#### Audit 2: Font-Size Slug Validation

**Scope**: All patterns, parts, templates
**Report**: `/reports/audits/02-fontsize-slug-validation.md`

**Criteria**:
1. Extract all `fontSize` attribute values
2. Flag numeric slugs: `100`, `200`, `300`, `400`, `500`, etc.
3. Flag hardcoded font-size values in `style.typography.fontSize` (e.g., `"0.875rem"`, `"1.5rem"`)
4. Provide mapping to correct preset slug

#### Audit 3: Spacing Slug Validation

**Scope**: All patterns, parts, templates
**Report**: `/reports/audits/03-spacing-slug-validation.md`

**Criteria**:
1. Search for `var:preset|spacing|[0-9]+` (legacy numeric slugs)
2. Flag hardcoded spacing values in `style` attributes
3. Count remaining instances per file

---

### Phase 2: Preset Compliance

#### Audit 4: Border & Radius Compliance

**Scope**: All patterns, block style JSON files, section style JSON files
**Report**: `/reports/audits/04-border-radius-compliance.md`

**Criteria**:
1. Inventory all `border.radius` values in patterns
2. Verify values align with radii preset scale (100=2px, 200=4px, 300=6px, 400=8px, 500=12px, 600=16px, 9999=pill)
3. Flag non-standard values (e.g., `99px` should be `9999px`)
4. Inventory all `border.width` values — verify alignment with border preset scale (0, 100=1px, 200=2px, 300=4px)
5. Flag hardcoded `border.color` hex values (should use `var:preset|color|*`)

#### Audit 5: Shadow Preset Usage

**Scope**: All patterns, block style JSON files, section style JSON files
**Report**: `/reports/audits/05-shadow-preset-usage.md`

**Criteria**:
1. Search for `"shadow"` attribute usage (expect: should be present on card-style blocks)
2. Search for inline `box-shadow` in CSS (should use preset variables)
3. Identify patterns that SHOULD have shadows but don't (cards, elevated elements, pricing tables, CTAs)
4. Provide specific recommendations: which preset slug to use for each element type

#### Audit 6: Aspect Ratio Compliance

**Scope**: All patterns with images
**Report**: `/reports/audits/06-aspect-ratio-compliance.md`

**Criteria**:
1. Inventory all `wp:image` and `wp:post-featured-image` blocks
2. Check for `aspectRatio` attribute presence
3. Flag images with `width` + `height` but no `aspectRatio` (should use aspect-ratio instead)
4. Special focus: team member images (must be square — `aspectRatio:"1"`), obituary avatars (must be square), e-edition covers (should use `aspect-newspaper` class)

---

### Phase 3: Block Style Validation

#### Audit 7: Block Style JSON Integrity

**Scope**: All JSON files in `/styles/blocks/**/*.json`
**Report**: `/reports/audits/07-block-style-json-integrity.md`

**Criteria**:
1. Validate JSON schema compliance (version 3, $schema)
2. Verify all values use preset references (no hardcoded hex, rem, px)
3. Verify `blockTypes` array is correct for each file
4. Verify `slug` follows naming convention `{block-name}-{style-name}`
5. Cross-reference: every `is-style-*` class used in patterns must have a corresponding block style JSON file or PHP registration
6. Flag missing block styles (currently known: `card`, `card-hover` for `core/group` and `core/column`)

#### Audit 8: Section Style Completeness

**Scope**: All 9 section style JSON files in `/styles/sections/*.json`
**Report**: `/reports/audits/08-section-style-completeness.md`

**Criteria**:
1. Verify all 9 section styles use preset values (zero hardcoded values)
2. Verify button element styles are defined for all sections
3. Check for outline button variant support in dark sections
4. Verify third-party block coverage (`yoast/faq-block`, `yoast-seo/breadcrumbs`, `core/social-links`, `outermost/social-sharing`)
5. Verify `blockTypes` array is consistent across all section styles
6. Cross-reference: which templates/patterns use which section styles

---

### Phase 4: Third-Party Plugin Block Validation

#### Audit 9: Yoast SEO Block Usage

**Scope**: All patterns, parts, templates
**Report**: `/reports/audits/09-yoast-seo-blocks.md`

**Criteria**:
1. Search for `yoast/faq-block` (correct name)
2. Search for `yoast-seo/faq` or `yoast-seo/faq-block` (INCORRECT names)
3. Search for `yoast-seo/breadcrumbs` (correct name)
4. Verify FAQ blocks are wrapped in section styles with FAQ styling
5. Verify breadcrumbs in all templates that need them

#### Audit 10: Gravity Forms Block Usage

**Scope**: All patterns
**Report**: `/reports/audits/10-gravity-forms-blocks.md`

**Criteria**:
1. Search for `gravityforms/form` block usage
2. Verify form IDs match production setup
3. Flag deprecated `dp/newsletter-cta` blocks
4. Verify forms in dark sections have proper CSS override support

#### Audit 11: Advanced Ads Block Usage

**Scope**: All patterns, parts, templates
**Report**: `/reports/audits/11-advanced-ads-blocks.md`

**Criteria**:
1. Verify all ad placements use `advads/gblock` (not `dp/ad-unit` or `dp/sticky-footer`)
2. Verify all placement IDs use `dp-` prefix
3. Cross-reference against 12 active placement inventory
4. Verify archive in-feed ads in all 5 archive patterns

#### Audit 12: Icon & Social Blocks

**Scope**: All patterns with `outermost/icon` or `outermost/social-sharing`
**Report**: `/reports/audits/12-icon-social-blocks.md`

**Criteria**:
1. Verify icon color attributes use preset references (not hardcoded hex)
2. Verify social sharing network order matches SA priority
3. Verify icon sizes use standard mapping (xs-3xl)

---

### Phase 5: Template System Validation

#### Audit 13: Template Parts Registration & Usage

**Scope**: `/parts/`, `theme.json`, all templates
**Report**: `/reports/audits/13-template-parts-validation.md`

**Criteria**:
1. Inventory all template part files
2. Cross-reference with theme.json `templateParts`
3. Verify area assignments (header, footer, sidebar, post-meta, woocommerce)
4. Check all template references to parts exist
5. Verify coming-soon.html has NO header/footer parts

#### Audit 14: Pattern & Template Reference Validation

**Scope**: All templates and patterns
**Report**: `/reports/audits/14-pattern-template-references.md`

**Criteria**:
1. Verify all `<!-- wp:pattern {"slug":"die-papier/..."} /-->` references point to existing patterns
2. Verify WooCommerce patterns do NOT contain header/footer template parts
3. Verify all patterns have correct PHP header metadata (Title, Slug, Categories)
4. Flag any patterns referencing deleted/renamed patterns

---

### Phase 6: Pattern Accuracy

#### Audit 15: Block Comment ↔ HTML Sync Validation

**Scope**: All patterns (PHP files)
**Report**: `/reports/audits/15-block-html-sync.md`

**Criteria**:
Use the pattern validator (`/src/imports/validate-patterns.js`) logic to:
1. Verify block comment JSON attributes match HTML output classes
2. Verify `style` attribute CSS properties match block comment `style` object
3. Flag mismatches between:
   - `backgroundColor` slug ↔ `has-{slug}-background-color` class
   - `textColor` slug ↔ `has-{slug}-color has-text-color` classes
   - `className` ↔ HTML class attribute
   - `align` ↔ `align{value}` class
   - `fontSize` ↔ `has-{slug}-font-size` class
   - `style.spacing.*` ↔ inline `style` attribute

---

### Phase 7: Dev Tools Synchronization

#### Audit 16: Dev Tools Data Source Validation

**Scope**: All data files in `/src/app/data/`
**Report**: `/reports/audits/16-dev-tools-data-sources.md`

**Criteria**:
1. Verify dev tool data files read from WordPress export sources
2. Flag stale/duplicate data
3. Classification: WIRE (reads from WP) / HYBRID (mixed) / KEEP (React-only)

---

## Post-Audit Synthesis

After **ALL 16 audits** are complete:

### Step 1: Cross-Reference Findings
1. Identify files flagged in multiple audits
2. Pattern detection (systemic issues vs one-off errors)
3. Severity classification:
   - **P0 Critical**: Missing block styles, invalid color slugs, broken references
   - **P1 High**: Hardcoded hex colors, legacy numeric slugs, missing aspect-ratios
   - **P2 Medium**: Missing shadows, missing outline button variants, border consistency
   - **P3 Low**: Icon utility colors, documentation gaps

### Step 2: Create Unified Task Lists

1. **Task List 1: Block Style Creation** (`/tasks/block-style-creation.md`)
   - Create missing `card`, `card-hover` styles for group/column
   - Add shadow presets to card styles

2. **Task List 2: Color Slug Remediation** (`/tasks/color-slug-remediation.md`)
   - Replace all invalid color slugs
   - Replace hardcoded hex colors

3. **Task List 3: Preset Compliance** (`/tasks/preset-compliance.md`)
   - Fix font-size slugs
   - Add aspect-ratios
   - Align border-radius values
   - Add shadow presets

4. **Task List 4: Section Style Enhancement** (`/tasks/section-style-enhancement.md`)
   - Add outline button variants to dark sections
   - Verify third-party block coverage

5. **Task List 5: Third-Party Plugin Fixes** (`/tasks/third-party-plugin-fixes.md`)
   - Fix icon color references
   - Fix any remaining deprecated blocks

6. **Task List 6: Template System Fixes** (`/tasks/template-system-fixes.md`)
   - Fix broken references
   - Register missing parts

### Step 3: Present All Links & Pause

**⏸️ WAIT for user approval before executing any tasks.**

---

## Execution Rules

1. ✅ Complete Phase 1 (Audits 1-3: Slug System) → write reports
2. ✅ Complete Phase 2 (Audits 4-6: Preset Compliance) → write reports
3. ✅ Complete Phase 3 (Audits 7-8: Block/Section Styles) → write reports
4. ✅ Complete Phase 4 (Audits 9-12: Third-Party Plugins) → write reports
5. ✅ Complete Phase 5 (Audits 13-14: Template System) → write reports
6. ✅ Complete Phase 6 (Audit 15: Pattern Accuracy) → write report
7. ✅ Complete Phase 7 (Audit 16: Dev Tools) → write report
8. ✅ Synthesize all findings
9. ✅ Create 6 task lists with prioritized execution order
10. ✅ Present all links to user
11. ⏸️ **WAIT for approval**
12. ✅ Execute tasks in order

---

## Success Criteria

### Slug System
- ✅ Zero instances of invalid color slugs (`base-2`, `base-3`, `contrast`, `neutral-50`)
- ✅ Zero instances of numeric font-size slugs (`100`, `200`, `300`, `400`)
- ✅ Zero instances of numeric spacing slugs
- ✅ 100% consistency across patterns, parts, templates

### Preset Compliance
- ✅ Zero hardcoded hex colors in pattern block attributes (except documented WC fallback values)
- ✅ Zero hardcoded font-sizes (all use preset references)
- ✅ Border-radius values aligned with radii preset scale
- ✅ Shadow presets used on card, CTA, and elevated elements
- ✅ Aspect-ratio attributes on all constrained images

### Block Styles
- ✅ All `is-style-*` classes have corresponding JSON files or PHP registrations
- ✅ All block style JSON files use preset references (zero hardcoded values)
- ✅ `is-style-card` and `is-style-card-hover` block styles created for `core/group` and `core/column`

### Section Styles
- ✅ All 9 section styles define complete block coverage (15+ blocks)
- ✅ Dark sections define outline button variant
- ✅ All third-party blocks styled in section styles (`yoast/faq-block`, `yoast-seo/breadcrumbs`, `core/social-links`)
- ✅ Templates apply correct section styles to wrapper groups

### Third-Party Plugins
- ✅ Zero deprecated custom blocks (`dp/newsletter-cta`, `dp/ad-unit`, `dp/sticky-footer`)
- ✅ All Yoast blocks use correct registration names
- ✅ All forms use `gravityforms/form`
- ✅ All ads use `advads/gblock` with `dp-` prefix
- ✅ Icon blocks use preset color references
- ✅ Social sharing follows SA network priority

### Pattern Accuracy
- ✅ Block comment JSON attributes match HTML output
- ✅ Zero orphaned slug references
- ✅ All pattern references (`wp:pattern`) point to existing patterns

### Dev Tools
- ✅ All browser tools read from WordPress export (single source of truth)
- ✅ All 8 dev tool pages functional and up-to-date

---

## Notes

- **User-edited files**: header-transparent.php, header-masthead.php, mini-cart.html, coming-soon.html, grouped-product-add-to-cart-with-options.html, external-product-add-to-cart-with-options.html — audit but DO NOT modify without explicit approval
- **Do NOT touch**: React components in `/src/app/` (except data files), Vite config, package.json
- **Preserve content**: When migrating from custom blocks to plugin blocks, preserve all content/settings
- **WooCommerce mini-cart exception**: The `woocommerce/mini-cart` block requires both slug and hex `color` value in its attributes — the hardcoded colors alongside slug references are acceptable
- **Icon utility colors exception**: `icon-callouts.php` and `icon-trust-signals.php` use semantic colors (info blue, warning orange, success green) not in the brand palette — decision needed: add to palette or accept

---

## Output Directory Structure

```
/reports/audits/
  01-color-slug-validation.md
  02-fontsize-slug-validation.md
  03-spacing-slug-validation.md
  04-border-radius-compliance.md
  05-shadow-preset-usage.md
  06-aspect-ratio-compliance.md
  07-block-style-json-integrity.md
  08-section-style-completeness.md
  09-yoast-seo-blocks.md
  10-gravity-forms-blocks.md
  11-advanced-ads-blocks.md
  12-icon-social-blocks.md
  13-template-parts-validation.md
  14-pattern-template-references.md
  15-block-html-sync.md
  16-dev-tools-data-sources.md
  pattern-preset-compliance-audit.md  (DONE — 2026-03-03)

/tasks/
  block-style-creation.md
  color-slug-remediation.md
  preset-compliance.md
  section-style-enhancement.md
  third-party-plugin-fixes.md
  template-system-fixes.md
  pattern-preset-compliance-tasks.md  (DONE — 2026-03-03)
```

---

**End of Orchestrator Prompt**