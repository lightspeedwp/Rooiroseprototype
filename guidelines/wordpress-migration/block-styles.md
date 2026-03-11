# Block Styles Strategy (JSON)

**Last updated**: 2026-03-03  
**Version**: 2.1

We are adopting a JSON-first approach for registering block styles to maintain a clean, declarative codebase. This structure separates style definitions from PHP logic and CSS implementation details.

---

## WordPress 6.6+ Standalone JSON Block Styles

As of WordPress 6.6, block styles can be registered as **standalone JSON files** without PHP registration. This is the canonical approach used by modern block themes like TwentyTwentyFive.

### Available Metadata Properties

The standalone JSON block style format supports **five primary metadata fields**:

#### 1. `version` (Required)
- **Value**: `3` (latest/maximum version as of WordPress 6.8)
- **Purpose**: Required to use standalone JSON block style feature
- **Example**: `"version": 3`

#### 2. `$schema` (Recommended)
- **Value**: `https://schemas.wp.org/wp/6.8/theme.json`
- **Purpose**: Points to latest official WordPress schema for design tools (background images, border controls, etc.)
- **Example**: `"$schema": "https://schemas.wp.org/wp/6.8/theme.json"`

#### 3. `title` (Required)
- **Value**: Translatable string for the UI (e.g., "Pill Shape")
- **Purpose**: Display name in block style picker sidebar
- **Format**: Short, readable name (no hard character limit, but keep concise)
- **Example**: `"title": "Outline"`

#### 4. `slug` (Required — if not using filename convention)
- **Value**: Unique kebab-case string (e.g., "pill-shape")
- **Purpose**: Generates CSS class `.is-style-{slug}`
- **Note**: If omitted, WordPress uses the filename (minus `.json`) as the slug
- **Example**: `"slug": "outline"` → `.is-style-outline`

#### 5. `blockTypes` (Optional)
- **Value**: Array of block names
- **Purpose**: Apply same style to multiple blocks simultaneously
- **Example**: `"blockTypes": ["core/button", "core/image", "core/group"]`
- **Note**: If omitted, WordPress infers the block type from directory structure (see below)

### ⚠️ IMPORTANT: No Description Field

Unlike `block.json` files used for creating new blocks, **standalone JSON block styles do NOT support a `description` field**. Only the `title` is used to identify the variation to the user.

---

## The `styles` Object (Core Content)

While metadata is limited, the **`styles` object** is where the power lies. It can include any standard theme.json style property:

### Supported Style Properties

```json
{
  "border": {
    "radius": "var:preset|border-radius|medium",
    "color": "var:preset|color|primary",
    "style": "solid",
    "width": "2px"
  },
  "color": {
    "text": "var:preset|color|base",
    "background": "var:preset|color|primary"
  },
  "spacing": {
    "padding": {
      "top": "var:preset|spacing|small",
      "right": "var:preset|spacing|medium",
      "bottom": "var:preset|spacing|small",
      "left": "var:preset|spacing|medium"
    },
    "blockGap": "var:preset|spacing|small"
  },
  "typography": {
    "fontSize": "var:preset|font-size|base",
    "fontWeight": "600",
    "lineHeight": "1.5",
    "letterSpacing": "0.02em",
    "fontFamily": "var:preset|font-family|brand-sans"
  },
  "shadow": "var:preset|shadow|medium"
}
```

### Use Presets First

**All style properties should reference presets from** `/styles/presets/`:
- **Colors**: `/styles/presets/colors.json`
- **Typography**: `/styles/presets/typography.json`
- **Spacing**: `/styles/presets/spacing.json`
- **Borders**: `/styles/presets/borders.json`
- **Shadows**: `/styles/presets/shadows.json`

**Why**: Using presets ensures consistency, easier maintenance, and leverages WordPress's design token system.

---

## Directory Structure

All block styles are located in `/styles/blocks/`. Each block has its own directory containing JSON files for its specific styles.

### Core Blocks

```
/styles/blocks/
  /button/
    default.json       # Base style overrides
    outline.json       # "Outline" style variation
  /buttons/
    default.json       # Buttons container blockGap
    filter-pill.json   # Category tag filter chips (pill-shaped, core/buttons)
  /columns/
    default.json       # Column blockGap
  /group/
    card.json
    card-hover.json
  /image/
    rounded.json
    circular.json
    shadow.json
    caption-overlay.json
  /heading/
    section-title.json
    display.json
    card-compact.json
    subtitle.json
  /list/
    default.json
    no-bullets.json
  /navigation/
    default.json
  /paragraph/
    lead.json
    badge.json
  /post-date/
    default.json
  /post-terms/
    default.json
  /post-title/
    default.json
  /pullquote/
    default.json
  /quote/
    default.json
    plain.json
    border-left.json
    large-serif.json
    pull-quote.json
  /search/
    default.json
  /separator/
    default.json
    wide.json
    brand-line.json
    dots.json
  /site-title/
    default.json
  /table/
    borderless.json
```

### Third-Party Blocks (Namespace Directories)

```
/styles/blocks/
  /woocommerce/        # WooCommerce blocks namespace
    /breadcrumbs/
      default.json
    /product-title/
      default.json
    /product-price/
      default.json
      accent.json
    /product-image/
      default.json
      rounded.json
    /product-button/
      default.json
      primary.json
    /product-sale-badge/
      default.json
    /product-rating/
      default.json
    /product-summary/
      default.json
    /product-results-count/
      default.json
    /product-reviews/
      default.json
    /product-review-author-name/
      default.json
    /product-review-date/
      default.json
    /product-review-content/
      default.json
    /accordion-item/
      default.json
    /accordion-header/
      default.json
    /customer-account/
      default.json
    /mini-cart/
      default.json
    /order-confirmation-status/
      default.json
    /product-filter-attribute/
      default.json
    /product-filter-price/
      default.json
    /product-filter-rating/
      default.json
    /product-filter-status/
      default.json
    /product-gallery-large-image-next-previous/
      default.json
    /add-to-cart-with-options-variation-selector-attribute-name/
      default.json
    /category-title/
      default.json
    /category-description/
      default.json
    /cart/
      default.json
    /checkout/
      default.json
  /outermost/          # Outermost plugin blocks
    /icon/
      default.json
    /social-sharing/
      default.json
  /yoast/              # Yoast SEO blocks
    /faq-block/
      default.json
  /yoast-seo/
    /breadcrumbs/
      default.json
  /gravityforms/       # Gravity Forms blocks
    /form/
      default.json
```

---

## JSON File Format

### Complete Example (Button Outline Style)

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Outline",
  "styles": {
    "border": {
      "color": "currentColor",
      "width": "2px"
    },
    "color": {
      "background": "transparent",
      "text": "var:preset|color|primary"
    },
    "css": ".wp-block-button__link:not(.has-background):hover { background-color: var(--wp--preset--color--primary); color: var(--wp--preset--color--base); }",
    "spacing": {
      "padding": {
        "bottom": "calc(0.75rem - 2px)",
        "left": "calc(1.5rem - 2px)",
        "right": "calc(1.5rem - 2px)",
        "top": "calc(0.75rem - 2px)"
      }
    }
  }
}
```

### Minimal Example (Default Spacing)

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Default",
  "styles": {
    "spacing": {
      "blockGap": "var:preset|spacing|medium"
    }
  }
}
```

### Multi-Block Example (Apply to Multiple Blocks)

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Rounded Corners",
  "blockTypes": ["core/image", "core/video", "core/cover"],
  "styles": {
    "border": {
      "radius": "var:preset|border-radius|medium"
    }
  }
}
```

---

## Auto-Discovery Rules (WordPress 6.6+)

WordPress automatically discovers and registers JSON block styles based on directory structure:

### 1. File Naming Convention
- **Filename** → **Slug**: `outline.json` generates `.is-style-outline` class
- **Title** comes from JSON `title` property
- No PHP registration required

### 2. Directory Structure Determines Block Type
```
/styles/blocks/button/outline.json
               ^^^^^^
               Block name (inferred as "core/button")
```

For non-core blocks, use namespace directories:
```
/styles/blocks/woocommerce/product-button/primary.json
               ^^^^^^^^^^^  ^^^^^^^^^^^^^^
               Namespace    Block name
               → Inferred as "woocommerce/product-button"
```

### 3. No `blockTypes` Needed (Usually)
If you follow the directory convention, WordPress infers the block type automatically. Only use `blockTypes` when:
- Applying same style to **multiple different blocks**
- Overriding directory-inferred block type

### 4. Fallback for WordPress < 6.6
For compatibility with older WordPress versions, use PHP registration in `/inc/block-styles.php`:

```php
register_block_style('core/button', [
    'name'  => 'outline',
    'label' => __('Outline', 'die-papier'),
]);
```

---

## Advanced Styling: The `css` Property

For styling that the `styles` object can't express (e.g., `font-variation-settings`, pseudo-elements, complex selectors), use the **`css` property**:

### Example: Variable Fonts

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Display",
  "styles": {
    "typography": {
      "fontFamily": "var:preset|font-family|brand-serif",
      "fontSize": "var:preset|font-size|xx-large",
      "fontWeight": "400"
    }
  },
  "css": "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px;"
}
```

### Example: Hover States

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Card",
  "styles": {
    "border": {
      "radius": "var:preset|border-radius|medium",
      "color": "var:preset|color|border-light",
      "width": "1px"
    }
  },
  "css": "&:hover { box-shadow: var(--wp--preset--shadow--medium); transform: translateY(-2px); transition: all 0.2s ease; }"
}
```

### Example: Pseudo-Elements

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Brand Line",
  "styles": {
    "border": {
      "style": "none"
    }
  },
  "css": "&::before { content: ''; display: block; height: 4px; background: linear-gradient(90deg, var(--wp--preset--color--primary) 0%, var(--wp--preset--color--secondary) 100%); }"
}
```

**Key Rule**: The `css` property outputs as raw CSS inside a selector targeting the block + variation class. Use it sparingly — prefer `styles` for all standard properties.

---

## Heading Block Style Variations (Typography Alignment)

The following heading block style variations implement the WordPress-aligned typography system.

### 1. Section Title (`section-title.json`)

**Use case**: Section headers, category labels, eyebrow text above main headings.

**Visual treatment**: Full H6 specification (Inter, uppercase, wide tracking).

**JSON Schema**:
```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Section Title",
  "styles": {
    "typography": {
      "fontFamily": "var:preset|font-family|brand-sans",
      "fontSize": "var:preset|font-size|base",
      "fontWeight": "600",
      "textTransform": "uppercase",
      "letterSpacing": "0.05em"
    }
  }
}
```

**Where it's used**:
- Homepage section headers ("NUUS", "SPORT", "LEEFSTYL", "KOMPETISIES")
- Category archive eyebrows
- Newsletter CTA section labels

### 2. Display (`display.json`)

**Use case**: Hero headings, large display text, page titles where maximum visual impact is needed.

**Visual treatment**: Full H1 specification (Roboto Serif, large fluid size, negative GRAD for elegant appearance).

**JSON Schema**:
```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Display",
  "styles": {
    "typography": {
      "fontFamily": "var:preset|font-family|brand-serif",
      "fontSize": "var:preset|font-size|xx-large",
      "fontWeight": "400"
    }
  },
  "css": "font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48; letter-spacing: -0.24px;"
}
```

**Where it's used**:
- Newsletter CTA hero heading ("Wees op hoogte!")
- Page hero sections
- Landing page headlines

### 3. Card Compact (`card-compact.json`)

**Use case**: News card headings, event cards, competition cards where space is limited and multi-line headings are expected.

**Visual treatment**: 16px Roboto Serif with tight line-height (24px = 1.5x ratio), matched optical size (`opsz 16`), neutral GRAD (no stroke thinning).

**JSON Schema**:
```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Card Compact",
  "styles": {
    "typography": {
      "fontFamily": "var:preset|font-family|brand-serif",
      "fontSize": "var:preset|font-size|base",
      "lineHeight": "1.5",
      "fontWeight": "400"
    }
  },
  "css": "font-variation-settings: 'GRAD' 0, 'wdth' 64, 'opsz' 16;"
}
```

**Where it's used**:
- Homepage news card list variant
- Sidebar competition cards
- Event listings (compact display)
- Archive page cards with multi-line titles

**Why it exists**:
- Standard H3 (24px) is too large for dense card grids
- Standard H4 (20px) is still too large and has wrong line-height for multi-line wrapping
- Using `text-sm` (14px Inter) loses serif character and breaks semantic HTML
- This pattern provides readable serif headings at small size with proper optical sizing

### 4. Subtitle (`subtitle.json`)

**Use case**: Subheadings, deck copy below main headings, introductory text.

**JSON Schema**:
```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Subtitle",
  "styles": {
    "typography": {
      "fontFamily": "var:preset|font-family|brand-sans",
      "fontSize": "var:preset|font-size|large",
      "fontWeight": "400",
      "lineHeight": "1.4"
    },
    "color": {
      "text": "var:preset|color|main-accent"
    }
  }
}
```

---

## Buttons Block Style Variations

### 5. Filter Pill (`filter-pill.json`)

**Use case**: Category tag filter chips in category archive hero sections. Renders the `core/buttons` container with pill-shaped child buttons for filtering by subcategory/tag.

**Target block**: `core/buttons` (uses `blockTypes` array, not directory inference)

**Visual treatment**: Tight `x-small` gap between pills, each child `core/button` rendered as a pill (`border-radius: 9999px`) with 1px `border-light` border, white background, `main` text colour, `small` font size, and compact horizontal padding.

**CSS class**: `.is-style-filter-pill`

**JSON Schema**:
```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/theme.json",
  "version": 3,
  "title": "Filter Pill",
  "slug": "filter-pill",
  "blockTypes": ["core/buttons"],
  "styles": {
    "spacing": {
      "blockGap": "var:preset|spacing|x-small"
    },
    "blocks": {
      "core/button": {
        "border": {
          "radius": "9999px",
          "width": "1px",
          "color": "var:preset|color|border-light",
          "style": "solid"
        },
        "color": {
          "background": "var:preset|color|base",
          "text": "var:preset|color|main"
        },
        "typography": {
          "fontSize": "var:preset|font-size|small"
        },
        "spacing": {
          "padding": {
            "top": "0.375rem",
            "bottom": "0.375rem",
            "left": "1rem",
            "right": "1rem"
          }
        }
      }
    }
  }
}
```

**Where it's used**:
- `section-category-hero.php` — Tag filter row below the hero heading in all 5 dedicated category templates
- Any archive page requiring inline tag/subcategory filtering

**File location**: `/styles/blocks/buttons/filter-pill.json`

---

## Implementation Notes

### File Locations

**WordPress theme**:
- JSON files: `/wordpress-export/themes/die-papier-theme/styles/blocks/`
- Auto-discovered by WordPress 6.6+ (no PHP registration needed)
- Fallback PHP registration: `/inc/block-styles.php` (for WP <6.6 compatibility)

### Usage in Block Editor

When editing a block in WordPress, styles appear in the "Styles" panel:
- Default (no class applied — uses element default from theme.json)
- [Any registered style variations...]

Selecting a style applies the corresponding `.is-style-*` class to the block's wrapper element.

### Migration from React

When converting React components to WordPress patterns:
1. Identify elements with inline styles or non-standard Tailwind classes
2. Map to the appropriate block style variation based on visual treatment
3. Replace `<button style={{...}}>` with block markup:
   ```html
   <!-- wp:button {"className":"is-style-outline"} -->
   <div class="wp-block-button is-style-outline">
     <a class="wp-block-button__link">Click Me</a>
   </div>
   <!-- /wp:button -->
   ```
4. Remove all inline styles — let the block style class handle it

---

## Block Style Count

| Block | Styles | Files |
|:---|:---|:---|
| `core/button` | 2 | `default.json`, `outline.json` |
| `core/buttons` | 2 | `default.json`, `filter-pill.json` |
| `core/columns` | 1 | `default.json` |
| `core/heading` | 4 | `section-title.json`, `display.json`, `card-compact.json`, `subtitle.json` |
| `core/image` | 4 | `rounded.json`, `circular.json`, `shadow.json`, `caption-overlay.json` |
| `core/list` | 2 | `default.json`, `no-bullets.json` |
| `core/navigation` | 1 | `default.json` |
| `core/paragraph` | 2 | `lead.json`, `badge.json` |
| `core/post-date` | 1 | `default.json` |
| `core/post-terms` | 1 | `default.json` |
| `core/post-title` | 1 | `default.json` |
| `core/pullquote` | 1 | `default.json` |
| `core/quote` | 5 | `default.json`, `plain.json`, `border-left.json`, `large-serif.json`, `pull-quote.json` |
| `core/search` | 1 | `default.json` |
| `core/separator` | 4 | `default.json`, `wide.json`, `brand-line.json`, `dots.json` |
| `core/site-title` | 1 | `default.json` |
| `core/table` | 1 | `borderless.json` |
| **WooCommerce** | 30 | (See directory structure above) |
| **Outermost** | 2 | `icon/default.json`, `social-sharing/default.json` |
| **Yoast SEO** | 2 | `faq-block/default.json`, `breadcrumbs/default.json` |
| **Gravity Forms** | 1 | `form/default.json` |
| **Total** | **68** | |

**Note**: The 9 section style variations are in `/styles/sections/` (not `/styles/blocks/`) and are global style variations, not block-specific styles. See `/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md` for full documentation.

---

## Resources

### Official WordPress Documentation
- [WordPress 6.6+ Block Style JSON Files](https://developer.wordpress.org/themes/features/block-style-variations/)
- [Theme.json Schema v3](https://schemas.wp.org/wp/6.8/theme.json)

### Detailed Tutorials
- **[Custom Block Styles (WordPress.com Blog)](https://wordpress.com/blog/2025/05/07/custom-block-styles/)** — Detailed instructions on creating standalone JSON block styles
- **[Custom Block Styles (Full Site Editing)](https://fullsiteediting.com/lessons/custom-block-styles/)** — Complete guide to registering block styles in WordPress

### Reference Themes
- **TwentyTwentyFive** — Canonical example of WordPress 6.6+ block style architecture
- **Ollie Theme** — Modern block theme with extensive use of JSON block styles