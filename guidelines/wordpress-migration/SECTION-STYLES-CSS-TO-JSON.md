# Section Style Variations: Architecture Guide

**Last updated**: 2026-03-02
**Version**: 2.1

> **Purpose**: Definitive reference for section style variations in the Die Papier WordPress block theme — pure theme.json v3 format, no CSS files.
> **Supersedes**: The previous CSS+JSON pair approach (v1.0, 2026-02-19).
> **Note**: Inventory reduced from 24 → 9 styles (Session 4, 2026-03-02) — removed unused and duplicate styles.

---

## 1. Overview

Section styles define the visual treatment for full-width page sections. In WordPress FSE, these are **block style variations** — individual `.json` files in `/styles/sections/` that WordPress automatically discovers and merges into the global theme.json at runtime.

### Architecture

```
React (current):
  <div className="bg-[#142135] text-white py-12 md:py-16">
    <div className="w-full mx-auto max-w-[1280px] px-[clamp(1rem,4vw,2rem)]">
      ...
    </div>
  </div>

WordPress (target):
  <!-- wp:group {"align":"full","className":"is-style-section-navy",
       "layout":{"type":"constrained"}} -->
  <div class="wp-block-group alignfull is-style-section-navy">
    ...
  </div>
  <!-- /wp:group -->
```

**Key difference from v1.0**: Section styles are now **pure theme.json v3 section style variation files** — no companion `.css` files needed. All styling is expressed declaratively in JSON, including block-level overrides, element styles, and hover states.

---

## 2. File Structure

Each section style is a single `.json` file:

```
wordpress-export/themes/die-papier-theme/
└── styles/
    └── sections/
        ├── section-white.json
        ├── section-muted.json
        ├── section-navy.json
        ├── section-navy-light.json
        ├── section-gradient-navy.json
        ├── section-red.json
        ├── section-faq.json
        ├── section-hero-default.json
        └── section-cover-hero.json
```

**Total: 9 section style variation files (JSON only — no CSS)**

**Deleted styles** (Session 4, 2026-03-02):
- `section-alt.json` (replaced by `section-muted.json`)
- `section-shade.json` (replaced by `section-muted.json`)
- `section-default.json` (replaced by `section-white.json`)
- `section-brand-navy.json` (replaced by `section-navy.json`)
- `section-card.json` (0 pattern references, unused)
- `section-gradient-red.json` (0 pattern references, unused)
- `section-cta.json` (0 pattern references, unused)
- `section-hero.json` (replaced by `section-hero-default.json`)
- `section-hero-tall.json` (replaced by `section-cover-hero.json`)
- `section-newsletter.json` (0 pattern references, unused)
- `section-pricing.json` (0 pattern references, unused)
- `section-related.json` (0 pattern references, unused)
- `section-sponsor.json` (0 pattern references, unused)
- `section-team.json` (0 pattern references, unused)
- `section-feature.json` (0 pattern references, unused)
- `section-header.json` (0 pattern references, unused)
- `section-footer.json` (0 pattern references, unused)
- `section-comments.json` (0 pattern references, unused)
- `section-archive.json` (0 pattern references, unused)
- `section-search-results.json` (0 pattern references, unused)
- `section-breadcrumb.json` (0 pattern references, unused)

---

## 3. JSON Schema (theme.json v3)

Each `.json` file is a valid theme.json v3 section style variation:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "title": "Marine-afdeling",
  "slug": "section-navy",
  "blockTypes": ["core/group", "core/columns", "core/column"],
  "styles": {
    "color": {
      "background": "var:preset|color|brand-navy",
      "text": "var:preset|color|base"
    },
    "elements": {
      "button": { ... },
      "link": { ... },
      "heading": { ... }
    },
    "blocks": {
      "core/heading": { ... },
      "core/paragraph": { ... },
      "core/separator": { ... },
      "core/button": { ... },
      "core/navigation": { ... },
      "core/search": { ... },
      "core/image": { ... },
      "core/details": { ... },
      ...
    }
  }
}
```

| Field | Type | Description |
|:---|:---|:---|
| `$schema` | `string` | Always `https://schemas.wp.org/trunk/theme.json` |
| `version` | `number` | Always `3` |
| `title` | `string` | Human-readable name shown in the block toolbar (Afrikaans) |
| `slug` | `string` | Unique identifier — maps to `is-style-{slug}` class |
| `blockTypes` | `string[]` | Which blocks this style variation applies to |
| `styles` | `object` | Full theme.json v3 styles object with elements and blocks |

---

## 4. Block Coverage Tiers

Every section style must include block-specific styles based on its usage context. Coverage is organized into tiers:

### Tier 1 — Required for ALL section styles

| Block | What to set |
|:---|:---|
| `elements.button` | Background, text, hover states |
| `elements.link` | Text colour, hover state |
| `elements.heading` | Text colour |
| `core/heading` | Text colour (explicit) |
| `core/paragraph` | Text colour |
| `core/separator` | Color + border |
| `core/button` | Background, text, hover |

### Tier 2 — Required for dark-background sections

All of Tier 1, plus:

| Block | What to set |
|:---|:---|
| `core/navigation` | Link colours with hover |
| `core/search` | Input border, text, button colours |
| `core/image` | Caption text colour |
| `core/gallery` | Caption text colour |
| `core/quote` | Text + border |
| `core/pullquote` | Text + border |
| `core/details` | Text + border |
| `core/list` | Text colour |

### Tier 3 — Required for sections containing post content

All of Tier 1–2, plus:

| Block | What to set |
|:---|:---|
| `core/post-title` | Text + link + hover |
| `core/post-date` | Muted text + link |
| `core/post-author-name` | Text + link |
| `core/post-terms` | Text + link + hover |
| `core/post-excerpt` | Muted text |
| `core/post-featured-image` | Caption text |
| `core/query-pagination` | Text + link + hover |
| `core/query-no-results` | Muted text |

### Tier 4 — Required for sections containing comments

All of Tier 1–3, plus:

| Block | What to set |
|:---|:---|
| `core/comments-title` | Text colour |
| `core/comment-author-name` | Text + link |
| `core/comment-date` | Muted text + link |
| `core/comment-content` | Text colour |
| `core/comment-edit-link` | Text + link |
| `core/comment-reply-link` | Text + link |

### Tier 5 — Third-Party Blocks (Conditional)

> **Added 2026-03-01** — Third-party block integration support.

Only include third-party block styles when the plugin is active AND the block is used in section contexts. Not all third-party blocks require section style overrides.

| Plugin | Block Namespace | What to set | Which sections | theme.json Only? |
|:---|:---|:---|:---|:---:|
| **WooCommerce** | `woocommerce/breadcrumbs` | Font size, color (90% opacity white on dark) | Navy, red, hero | ✅ Yes |
| **WooCommerce** | `woocommerce/product-title` | Font family (serif), color (white on dark) | Navy, red, pricing | ✅ Yes |
| **WooCommerce** | `woocommerce/product-price` | Font size, color (white on dark) | Navy, red, pricing | ✅ Yes |
| **WooCommerce** | `woocommerce/customer-account` | Icon color (white on dark) | Header (navy), footer (navy) | ✅ Yes |
| **WooCommerce** | `woocommerce/mini-cart` | Icon color (white on dark), badge color (red) | Header (navy) | ✅ Yes |
| **Yoast SEO** | `yoast-seo/breadcrumbs` | Font size 300, color 70% opacity white on dark | Navy, red, hero, breadcrumb | ✅ Yes |
| **Yoast SEO** | `yoast-seo/faq-block` | Font size 400, color white on dark, border 25% opacity | FAQ, navy, red | ⚠️ Partial* |
| **Gravity Forms** | `gravityforms/form` | Font size, input border color, placeholder color, button color | Newsletter, CTA, navy, red | ❌ No** |
| **Outermost** | `outermost/social-sharing` | Icon color (white on dark), text color (90% opacity) | Navy, red, footer | ✅ Yes |
| **Outermost** | `outermost/icon` | Icon color (white on dark) | Navy, red, feature, CTA | ✅ Yes |
| **Advanced Ads** | `advads/gblock` | N/A (ad content is opaque) | All sections | ⛔ N/A |

**Legend**:
- ✅ **Yes** — Block fully stylable via section style variation JSON (no custom CSS)
- ⚠️ **Partial** — Base styles in section JSON, additional CSS required for advanced features
- ❌ **No** — Requires extensive custom CSS (section style JSON insufficient)
- ⛔ **N/A** — Block doesn't need section style overrides

**Notes**:
- *Yoast FAQ blocks require custom CSS for accordion animation, ARIA states, and section style overrides (see Section 11.2)
- **Gravity Forms requires extensive custom CSS for input fields, labels, validation, and section style overrides (see Section 11.3)

---

### Yoast SEO Blocks — Added where relevant

| Block | Where used |
|:---|:---|
| `yoast-seo/breadcrumbs` | Header, hero, navy, breadcrumb sections |
| `yoast/faq-block` | FAQ section, navy, red sections |

---

## 5. Dark Section Design Patterns

For sections with dark backgrounds (navy, red, hero), follow these conventions:

| Element | Light-on-dark treatment |
|:---|:---|
| Headings | `var:preset|color|base` (explicit white) |
| Body text | 90% opacity white: `color-mix(in srgb, var(--wp--preset--color--base) 90%, transparent)` |
| Muted text (dates, captions) | 70% opacity: `color-mix(in srgb, currentColor 70%, transparent)` |
| Links | `currentColor` with 75% opacity hover |
| Buttons | Inverted: white bg, dark text (section colour) |
| Separators | 25% opacity: `color-mix(in srgb, currentColor 25%, transparent)` |
| Borders (details, quotes) | 25–40% opacity currentColor |
| Search inputs | 40% opacity white border |

---

## 6. Section Style Inventory (9 styles)

### 6.1 Background Sections (5)

| # | Slug | Title (Afrikaans) | Background | Text | Status |
|:--|:---|:---|:---|:---|:---:|
| 1 | `section-white` | Wit afdeling | `base` | `contrast` | ✅ |
| 2 | `section-muted` | Gedempte afdeling | `base-2` | `contrast` | ✅ |
| 3 | `section-navy` | Navy | `brand-navy` | `base` | ✅ |
| 4 | `section-navy-light` | Navy Light | `brand-navy-light` | `base` | ✅ |
| 5 | `section-red` | Red | `primary` | `base` | ✅ |

### 6.2 Gradient Sections (1)

| # | Slug | Title (Afrikaans) | Gradient | Status |
|:--|:---|:---|:---|:---:|
| 6 | `section-gradient-navy` | Gradiënt Marine | Navy → Navy-light (135deg) | ✅ |

### 6.3 Component Sections (3)

| # | Slug | Title (Afrikaans) | Key Properties | Status |
|:--|:---|:---|:---|:---:|
| 7 | `section-faq` | Vrae-afdeling | Muted bg, Yoast FAQ block | ✅ |
| 8 | `section-hero-default` | Held-afdeling | minHeight 400px, overlay | ✅ |
| 9 | `section-cover-hero` | Omslag-held | minHeight 500px, cover image | ✅ |

### 6.4 Deleted Styles (15 removed)

The following section styles were deleted during Session 4 (2026-03-02) cleanup due to zero pattern references or redundancy:

**Aliases (replaced by canonical names)**:
- `section-alt` → replaced by `section-muted`
- `section-shade` → replaced by `section-muted`
- `section-default` → replaced by `section-white`
- `section-brand-navy` → replaced by `section-navy`

**Unused component sections** (0 pattern references):
- `section-card` — Border, radius, shadow
- `section-newsletter` — Navy gradient, radius, shadow
- `section-cta` — Red bg, generous padding
- `section-pricing` — Muted bg, card grid context
- `section-team` — Light bg, avatar grid
- `section-sponsor` — Subtle muted bg, logo grid
- `section-related` — Light bg, post content
- `section-feature` — Muted bg, icon grid

**Unused gradient sections**:
- `section-gradient-red` — Primary → Primary-hover (90deg)

**Unused theme-context sections** (0 pattern references):
- `section-header` — Header/template-part context
- `section-footer` — Footer/template-part context
- `section-comments` — Comments area
- `section-archive` — Query loop/archive context
- `section-search-results` — Search results context
- `section-breadcrumb` — Breadcrumb strip

**Hero variants (replaced by -default and -cover variants)**:
- `section-hero` → replaced by `section-hero-default`
- `section-hero-tall` → replaced by `section-cover-hero`

---

## 7. Naming Conventions

### File Names

- JSON files: `section-{name}.json`
- Use lowercase kebab-case
- Prefix all section styles with `section-`

### CSS Classes (auto-generated)

- WordPress generates: `is-style-section-{name}`
- Full selector: `.wp-block-group.is-style-section-{name}`

### Labels (Afrikaans)

**Active section styles** (9 total):

| English | Afrikaans Label |
|:---|:---|
| White Section | Wit afdeling |
| Muted Section | Gedempte afdeling |
| Navy Section | Navy |
| Navy Light Section | Navy Light |
| Red Section | Red |
| Gradient Navy | Gradiënt Marine |
| FAQ Section | Vrae-afdeling |
| Hero Section (Default) | Held-afdeling |
| Cover Hero Section | Omslag-held |

**Deleted section style labels** (for reference):

| English | Afrikaans Label | Status |
|:---|:---|:---:|
| Newsletter Section | Nuusbrief-afdeling | ❌ Deleted |
| CTA Section | Aksie-afdeling | ❌ Deleted |
| Pricing Section | Pryse-afdeling | ❌ Deleted |
| Team Section | Span-afdeling | ❌ Deleted |
| Sponsor Section | Borg-afdeling | ❌ Deleted |
| Feature Section | Kenmerk-afdeling | ❌ Deleted |
| Related Section | Verwante afdeling | ❌ Deleted |
| Card Section | Kaart-afdeling | ❌ Deleted |
| Gradient Red | Gradiënt Rooi | ❌ Deleted |
| Header Section | Kopstuk-afdeling | ❌ Deleted |
| Footer Section | Voetskrif-afdeling | ❌ Deleted |
| Comments Section | Kommentaar-afdeling | ❌ Deleted |
| Archive Section | Argief-afdeling | ❌ Deleted |
| Search Results | Soekresultate-afdeling | ❌ Deleted |
| Breadcrumb Section | Broodkrummel-afdeling | ❌ Deleted |

---

## 8. Container Block Compatibility

Section styles are applied to `core/group` blocks. For the inner content to be constrained to the standard width, the group must use a **constrained layout**:

```html
<!-- wp:group {"align":"full","className":"is-style-section-navy",
     "layout":{"type":"constrained"}} -->
```

This ensures inner blocks respect `settings.layout.contentSize` and `settings.layout.wideSize`.

### Full-width alignment

The section group itself should always be `align: full` so it spans the viewport width. Inner blocks then use the constrained layout to stay within bounds.

---

## 9. Using in Patterns

```php
<!-- wp:group {"align":"full","className":"is-style-section-newsletter",
     "layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-newsletter">
  <!-- wp:heading {"level":2} -->
  <h2>Kry ons gratis nuusbrief</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph -->
  <p>Ontvang die dag se topstories regstreeks in jou inkassie.</p>
  <!-- /wp:paragraph -->

  <!-- Newsletter form block here -->
</div>
<!-- /wp:group -->
```

All block styles (headings, paragraphs, buttons, links, separators, etc.) are automatically applied by the section style variation — no additional classes or inline styles needed.

---

## 10. Migration Checklist

- [x] Create `/styles/sections/` directory in WordPress theme
- [x] Generate all 24 JSON section style variation files (theme.json v3)
- [x] All dark sections include Tier 2+ block coverage
- [x] All Yoast SEO blocks integrated (breadcrumbs, FAQ)
- [x] Theme-context sections created (header, footer, comments, archive, search-results, breadcrumb)
- [ ] Verify in WordPress Block Editor — styles appear in toolbar
- [ ] Test constrained layout with each style
- [ ] Check mobile responsive spacing
- [ ] Cross-reference with Global Style Variations (dark.json)
- [ ] Remove orphaned `.css` files from `/styles/sections/` if any exist

---

## 11. Third-Party Block CSS Overrides

> **Added 2026-03-01** — CSS overrides for third-party blocks that require section style adaptation beyond theme.json capabilities.

While most third-party blocks can be styled via theme.json (Tier 5), some require custom CSS to handle dark section backgrounds, nested selectors, or state-specific styling. This section documents the CSS overrides needed for each plugin.

---

### 11.1 WooCommerce Blocks — CSS Not Required ✅

**Good news**: All WooCommerce blocks used in Die Papier are **fully stylable via theme.json section style variations**. No custom CSS file needed.

**Blocks**:
- `woocommerce/breadcrumbs` — Font size + color set in section JSON
- `woocommerce/product-title` — Font family + color set in section JSON
- `woocommerce/product-price` — Font size + color set in section JSON
- `woocommerce/customer-account` — Icon color set in section JSON
- `woocommerce/mini-cart` — Icon color + badge color set in section JSON

**Why no CSS?** WooCommerce blocks have clean, semantic class structure with minimal nesting. theme.json `styles.blocks.woocommerce/*` entries apply directly to the block wrapper, and all child elements inherit properly.

**Example** (section-navy.json):
```json
{
  "styles": {
    "blocks": {
      "woocommerce/breadcrumbs": {
        "typography": {
          "fontSize": "var:preset|font-size|300"
        },
        "color": {
          "text": "color-mix(in srgb, var(--wp--preset--color--base) 70%, transparent)"
        }
      }
    }
  }
}
```

---

### 11.2 Yoast SEO FAQ Block — Minimal CSS Required ⚠️

**Challenge**: Yoast FAQ blocks use accordion UI with expand/collapse animation + ARIA states. theme.json can style the base block, but cannot target `:not([open])`, `summary::marker`, or animation properties.

**CSS Required**: ~50 lines across 8 selectors (see `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` §9.2)

**File Location**: `/assets/css/yoast-seo.css`

**What theme.json handles**:
- Base font size
- Base text color (white on dark sections)
- Block spacing

**What custom CSS handles**:
- Accordion expand/collapse animation (`details[open]` state)
- Question marker icon (`summary::marker`)
- Question/answer padding + borders
- ARIA expanded state styling (`[aria-expanded="true"]`)
- Focus indicators for keyboard navigation
- Section style overrides (navy, red, image backgrounds)

**Example CSS** (Navy section override):
```css
/* Navy section: White text, transparent borders */
.is-style-section-navy .yoast-faq-block .schema-faq-question {
  color: var(--wp--preset--color--base); /* White */
  border-bottom: 1px solid color-mix(in srgb, currentColor 25%, transparent);
}

.is-style-section-navy .yoast-faq-block .schema-faq-answer {
  color: color-mix(in srgb, var(--wp--preset--color--base) 90%, transparent);
}

/* Accordion animation (applies to all sections) */
.yoast-faq-block details summary {
  cursor: pointer;
  transition: color 0.2s ease;
}

.yoast-faq-block details[open] summary {
  margin-bottom: var(--wp--preset--spacing--30);
}

.yoast-faq-block details summary::marker {
  content: '▶ ';
  color: var(--wp--preset--color--primary);
}

.yoast-faq-block details[open] summary::marker {
  content: '▼ ';
}
```

**Sections requiring FAQ CSS overrides**:
- `section-navy.json` ✅
- `section-red.json` ✅
- `section-faq.json` (light background, minimal overrides)
- Any custom dark section

---

### 11.3 Gravity Forms Block — Extensive CSS Required ❌

**Challenge**: Gravity Forms generates heavily nested HTML with class-based selectors (`.gform_wrapper > .gform_body > .gform_fields > .gfield`). theme.json only targets the root `.wp-block-gravityforms-form` wrapper — it cannot reach `.gfield_label`, `.ginput_container input`, or `.gfield_error`.

**CSS Required**: ~400 lines across 11 sections (see `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md` §9)

**File Location**: `/assets/css/gravity-forms.css`

**What theme.json handles**:
- Base font size for the wrapper block
- Base text color for the wrapper block

**What custom CSS handles** (cannot be done in theme.json):
- Input field styling (border, padding, focus states, placeholder text)
- Label styling (font size, weight, required asterisk color)
- Button styling (hover, active, disabled states)
- Validation error styling (red border, error message color)
- Checkbox/radio custom styling
- Multi-column layout (media queries)
- AJAX loading states
- **Section style overrides** for all 11 section styles

**Example CSS** (Navy section override):
```css
/* Navy section: White text, transparent input borders, white placeholders */
.is-style-section-navy .gform_wrapper .gfield_label {
  color: var(--wp--preset--color--base); /* White */
}

.is-style-section-navy .gform_wrapper input[type="text"],
.is-style-section-navy .gform_wrapper input[type="email"],
.is-style-section-navy .gform_wrapper textarea {
  background-color: transparent;
  border: 1px solid color-mix(in srgb, var(--wp--preset--color--base) 40%, transparent);
  color: var(--wp--preset--color--base);
}

.is-style-section-navy .gform_wrapper input::placeholder,
.is-style-section-navy .gform_wrapper textarea::placeholder {
  color: color-mix(in srgb, var(--wp--preset--color--base) 60%, transparent);
  opacity: 1; /* Firefox fix */
}

.is-style-section-navy .gform_wrapper input:focus,
.is-style-section-navy .gform_wrapper textarea:focus {
  border-color: var(--wp--preset--color--primary); /* Red focus ring */
  outline: none;
}

/* Required field asterisk */
.is-style-section-navy .gform_wrapper .gfield_required {
  color: var(--wp--preset--color--primary); /* Red */
}

/* Validation error messages */
.is-style-section-navy .gform_wrapper .gfield_error .gfield_label,
.is-style-section-navy .gform_wrapper .validation_message {
  color: var(--wp--preset--color--primary); /* Red */
}
```

**Sections requiring Gravity Forms CSS overrides** (all section styles):
- `section-navy.json` ✅
- `section-red.json` ✅
- `section-newsletter.json` (navy gradient) ✅
- `section-cta.json` (red background) ✅
- `section-muted.json`
- `section-white.json`
- `section-hero.json`
- `section-footer.json`
- And any other section where a Gravity Form might be placed

**Why so much CSS?** Gravity Forms was built before WordPress FSE existed. Its HTML structure predates the concept of theme.json block styles. The only way to style deeply nested form elements is via traditional CSS selectors.

---

### 11.4 Social Sharing Block — Minimal CSS Required ⚠️

**Challenge**: Social Sharing block network icons need brand colors (Facebook blue, X black, WhatsApp green) which are not in Die Papier's color palette. theme.json can set icon size + text color, but not network-specific brand colors.

**CSS Required**: ~30 lines across 6 network color rules (see `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md` §6)

**File Location**: `/assets/css/social-sharing.css`

**What theme.json handles**:
- Base icon color (white on dark sections)
- Base text color
- Icon size presets
- Block spacing

**What custom CSS handles**:
- Network brand colors (Facebook: `#1877F2`, WhatsApp: `#25D366`, X: `#000000`, etc.)
- Icon hover states (lightened brand colors)
- Section style overrides (ensure icons remain visible on dark backgrounds)

**Example CSS** (Network brand colors):
```css
/* Network brand colors (all sections) */
.outermost-social-sharing .social-icon-facebook {
  color: #1877F2; /* Facebook blue */
}

.outermost-social-sharing .social-icon-whatsapp {
  color: #25D366; /* WhatsApp green */
}

.outermost-social-sharing .social-icon-x {
  color: #000000; /* X (Twitter) black */
}

.outermost-social-sharing .social-icon-email {
  color: var(--wp--preset--color--contrast-2); /* Die Papier muted text */
}

.outermost-social-sharing .social-icon-copy-link {
  color: var(--wp--preset--color--primary); /* Die Papier red */
}

/* Navy section: Override dark icons (X black) to white */
.is-style-section-navy .outermost-social-sharing .social-icon-x {
  color: var(--wp--preset--color--base); /* White */
}

/* Red section: Override dark icons (X black) to white */
.is-style-section-red .outermost-social-sharing .social-icon-x {
  color: var(--wp--preset--color--base); /* White */
}
```

**Sections requiring Social Sharing CSS overrides**:
- `section-navy.json` (X icon needs white override)
- `section-red.json` (X icon needs white override)
- `section-footer.json` (navy background, X icon needs white override)
- Light sections (no override needed, brand colors work as-is)

---

### 11.5 Icon Block — Minimal CSS Required ⚠️

**Challenge**: Icon block decorative vs. semantic accessibility requires `aria-hidden` attribute, which cannot be set in theme.json. Also, icon size presets may need mobile responsive adjustments.

**CSS Required**: ~20 lines across 2 selectors (see `/guidelines/wordpress-migration/third-party-plugins/icon-block.md` §8)

**File Location**: `/assets/css/icon-block.css`

**What theme.json handles**:
- Icon color (white on dark sections)
- Icon size presets (xs, sm, md, lg, xl, 2xl, 3xl)

**What custom CSS handles**:
- Accessibility: `[aria-hidden="true"]` pointer-events fix
- Mobile responsive icon scaling (reduce size on small screens)
- Section style overrides (ensure icons remain visible on dark backgrounds)

**Example CSS**:
```css
/* Decorative icons: Remove from keyboard navigation */
.outermost-icon-block[aria-hidden="true"] {
  pointer-events: none;
}

/* Mobile responsive: Reduce icon sizes on small screens */
@media (max-width: 768px) {
  .outermost-icon-block.size-3xl {
    width: 32px;
    height: 32px;
  }
  
  .outermost-icon-block.size-2xl {
    width: 24px;
    height: 24px;
  }
}

/* Navy section: White icons */
.is-style-section-navy .outermost-icon-block {
  color: var(--wp--preset--color--base);
}

/* Red section: White icons */
.is-style-section-red .outermost-icon-block {
  color: var(--wp--preset--color--base);
}
```

**Sections requiring Icon Block CSS overrides**:
- `section-navy.json` ✅
- `section-red.json` ✅
- `section-feature.json` (muted background, icons should be red)
- `section-cta.json` (red background, icons should be white)

---

### 11.6 Advanced Ads Block — No CSS Required ⛔

**Reason**: Advanced Ads block (`advads/gblock`) renders opaque ad content (images, scripts) that cannot be styled by the theme. Ad wrapper divs inherit section styles automatically via normal CSS cascade.

**No action needed**: Ads work in all section styles without custom CSS.

---

### 11.7 CSS File Organization

**Recommended file structure**:

```
wordpress-export/themes/die-papier-theme/
└── assets/
    └── css/
        ├── gravity-forms.css       (400+ lines, 11 sections)
        ├── yoast-seo.css           (50+ lines, 8 selectors)
        ├── social-sharing.css      (30+ lines, 6 network colors)
        ├── icon-block.css          (20+ lines, 2 selectors)
        └── ...
```

**Enqueue in `/inc/enqueue.php`**:

```php
function dp_enqueue_third_party_block_styles() {
    // Gravity Forms
    if ( class_exists( 'GFForms' ) ) {
        wp_enqueue_style( 'dp-gravity-forms', get_template_directory_uri() . '/assets/css/gravity-forms.css', array(), wp_get_theme()->get( 'Version' ) );
        add_editor_style( 'assets/css/gravity-forms.css' ); // Editor
    }
    
    // Yoast SEO
    if ( defined( 'WPSEO_VERSION' ) ) {
        wp_enqueue_style( 'dp-yoast-seo', get_template_directory_uri() . '/assets/css/yoast-seo.css', array(), wp_get_theme()->get( 'Version' ) );
        add_editor_style( 'assets/css/yoast-seo.css' );
    }
    
    // Social Sharing (Outermost)
    if ( function_exists( 'outermost_social_sharing_block_init' ) ) {
        wp_enqueue_style( 'dp-social-sharing', get_template_directory_uri() . '/assets/css/social-sharing.css', array(), wp_get_theme()->get( 'Version' ) );
        add_editor_style( 'assets/css/social-sharing.css' );
    }
    
    // Icon Block (Outermost)
    if ( function_exists( 'outermost_icon_block_init' ) ) {
        wp_enqueue_style( 'dp-icon-block', get_template_directory_uri() . '/assets/css/icon-block.css', array(), wp_get_theme()->get( 'Version' ) );
        add_editor_style( 'assets/css/icon-block.css' );
    }
}
add_action( 'wp_enqueue_scripts', 'dp_enqueue_third_party_block_styles' );
add_action( 'admin_init', 'dp_enqueue_third_party_block_styles' );
```

**Why conditional enqueuing?** CSS files only load when the respective plugin is active, reducing page weight when plugins aren't used.

---

### 11.8 Testing Section Style Compatibility

**Testing checklist for each third-party block**:

1. **Insert block in light section** (`section-white`, `section-muted`)
   - Verify text readability
   - Verify button/link contrast
   - Verify borders/separators are visible

2. **Insert block in navy section** (`section-navy`, `section-navy-light`)
   - Verify white text override works
   - Verify input fields have transparent backgrounds + white borders (Gravity Forms)
   - Verify icons are white (Social Sharing, Icon Block)
   - Verify FAQ accordion questions/answers are white (Yoast)

3. **Insert block in red section** (`section-red`, `section-cta`)
   - Same as navy section tests
   - Verify buttons invert correctly (white bg, red text)

4. **Insert block in gradient section** (`section-gradient-navy`, `section-gradient-red`)
   - Verify text remains readable across gradient transition
   - Verify no "flashing" or contrast issues mid-gradient

5. **Insert block in image section** (`section-hero`, `section-hero-tall`)
   - Verify text shadow exists (Gravity Forms labels)
   - Verify semi-transparent overlay darkens image enough for readability
   - Verify icons remain visible (Social Sharing, Icon Block)

6. **Mobile responsive test**
   - Verify form fields stack properly on mobile (Gravity Forms multi-column → single column)
   - Verify icons scale down on small screens (Icon Block 3xl → 2xl)
   - Verify FAQ accordion touch targets are large enough (min 44px)

---

## 12. Cross-References

**Integration Guidelines**:
- `/guidelines/wordpress-migration/woocommerce/README.md`
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`
- `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md`
- `/guidelines/wordpress-migration/third-party-plugins/social-sharing.md`
- `/guidelines/wordpress-migration/third-party-plugins/icon-block.md`
- `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`

**Theme.json Strategy**:
- `/guidelines/wordpress-migration/theme-json-strategy.md` (Section 12: Third-Party Block Integration)

**Audit Reports**:
- `/reports/audits/woocommerce-blocks-audit.md`
- `/reports/audits/gravity-forms-block-audit.md`
- `/reports/audits/yoast-seo-blocks-audit.md`
- `/reports/audits/social-sharing-block-audit.md`
- `/reports/audits/icon-block-audit.md`

---

**End of Document**