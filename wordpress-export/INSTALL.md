# WordPress Theme & Block Plugin Installation Guide

**Last updated**: 2026-02-23

This guide details how to install the Die Papier FSE theme and block plugin on your WordPress site.

## Prerequisites

- **WordPress 6.9+** (FSE, Interactivity API, theme.json v3)
- **PHP 8.2+**
- **Node.js 18+** and **npm** (for building the block plugin)
- **WooCommerce** (optional, for e-commerce/subscription features)

---

## Directory Structure

```
wordpress-export/
├── themes/die-papier-theme/    ← FSE block theme
│   ├── theme.json              ← V3 design tokens (V2 palette)
│   ├── style.css               ← Theme header + backward-compat :root aliases
│   ├── functions.php           ← Theme functions (fonts, editor styles)
│   ├── styles/                 ← Global style variations (dark.json, section-*.json)
│   ├── templates/              ← 27 block templates
│   ├── parts/                  ← 9 template parts
│   ├── patterns/               ← 70 block patterns (die-papier/* prefix)
│   ├── fonts/                  ← Self-hosted Roboto Serif & Inter webfonts
│   └── assets/                 ← Theme static assets
│
└── plugins/die-papier-blocks/  ← Custom blocks & CPTs plugin
    ├── die-papier-blocks.php   ← Main plugin file (17 blocks, 7 CPTs, 5 taxonomies)
    ├── package.json            ← npm dependencies
    ├── webpack.config.js       ← Build config (@wordpress/scripts)
    ├── src/blocks/             ← 17 block source directories
    │   └── [block-name]/       ← block.json, edit.js, index.js, render.php, style.scss, view.js
    ├── inc/                    ← 16 PHP includes (CPTs, taxonomies, REST, commerce)
    └── acf-json/               ← ACF/SCF field group exports
```

---

## 1. Theme Installation

### Steps:

1.  **Copy Theme Directory**:
    ```bash
    cp -r wordpress-export/themes/die-papier-theme/ /path/to/wp-content/themes/die-papier-theme/
    ```

2.  **Activate Theme**:
    Go to **Appearance > Themes** in WP Admin and activate "Die Papier".

3.  **Verify**:
    - Navigate to **Appearance > Editor** to confirm FSE templates load.
    - Check that all 27 templates and 9 template parts are available.
    - Verify global style variations (dark mode, section colours) in the Styles panel.

---

## 2. Block Plugin Installation

### Steps:

1.  **Copy Plugin Directory**:
    ```bash
    cp -r wordpress-export/plugins/die-papier-blocks/ /path/to/wp-content/plugins/die-papier-blocks/
    ```

2.  **Install Dependencies & Build**:
    ```bash
    cd /path/to/wp-content/plugins/die-papier-blocks/
    npm install
    npm run build
    ```
    This compiles all 17 blocks into `build/[block-name]/` directories.

3.  **Verify Build Output**:
    Confirm each block directory exists under `build/`:
    ```bash
    ls build/
    ```
    Expected: `ad-mrec/`, `article-hero/`, `competition-badge/`, `competition-entry/`,
    `content-hero/`, `eedition-access/`, `filter-bar/`, `hero-slider/`,
    `newsletter-cta/`, `pricing-table/`, `quote-slider/`, `search-filters/`,
    `sponsor-banner/`, `sticky-footer/`, `tab-bar/`, `traffic-widget/`, `weather-widget/`

4.  **Activate Plugin**:
    Go to **Plugins** in WP Admin and activate "Die Papier Blocks".

5.  **Verify Activation**:
    - The plugin registers 7 Custom Post Types (events, obituaries, sponsors, competitions, multimedia, e-editions, FAQs).
    - 5 custom taxonomies are registered (event category, multimedia category, sponsor tier, FAQ category, edition type).
    - Default FAQ category terms (Algemeen, Inteken, Adverteer, Aflewering) and edition type terms (Weekliks, Daagliks, Spesiale Bylae) are seeded.
    - All 17 blocks appear under the "Die Papier" category in the block inserter.

---

## 3. Block Inventory

| # | Block | Script Type | Description |
|---|-------|-------------|-------------|
| 1 | `dp/competition-badge` | Static (no view script) | Competition status badge |
| 2 | `dp/competition-entry` | Classic viewScript | Competition entry form |
| 3 | `dp/filter-bar` | Interactivity API | Archive filter bar |
| 4 | `dp/search-filters` | Interactivity API | Search result filters |
| 5 | `dp/slider` | Interactivity API | Generic carousel (InnerBlocks) |
| 6 | `dp/sponsor-banner` | Static (no view script) | Sponsor logo banner |
| 7 | `dp/tab-bar` | Interactivity API | Tab bar navigation |
| 8 | `dp/traffic-widget` | Interactivity API | Traffic incidents widget |
| 9 | `dp/weather-widget` | Interactivity API | Weather widget with city selector |

**Deprecated blocks** (deleted from plugin source, replaced by patterns/plugins):

| Block | Replacement |
|-------|-------------|
| `dp/ad-mrec` | Advanced Ads plugin |
| `dp/article-hero` | `hidden-article-hero.php` pattern (core/post-title + core/post-featured-image) |
| `dp/content-hero` | `section-content-hero.php` pattern (core/cover block) |
| `dp/eedition-access` | WooCommerce Memberships |
| `dp/hero-slider` | core/cover pattern + dp/slider |
| `dp/newsletter-cta` | Gravity Forms patterns |
| `dp/pricing-table` | Core blocks pattern |
| `dp/quote-slider` | section-brand-quotes pattern + dp/slider |
| `dp/sticky-footer` | Advanced Ads Pro sticky placement |

---

## 4. Data Migration

### WXR Content Import (Recommended)

1.  **Generate the WXR file**:
    ```bash
    cd wordpress-export/
    npm run export:content
    ```
    This runs `scripts/generate-wxr.js` and outputs `die-papier-content.xml`.

2.  **What the WXR includes**:
    - ~75 taxonomy terms across 7 taxonomies (category, post_tag, dp_sponsor_tier, dp_event_category, dp_multimedia_category, dp_edition_type, dp_faq_category)
    - 14 author records
    - All static pages with pattern assignments
    - 12 policy pages under "Beleid" parent hierarchy
    - ~80 FAQ posts with category assignments
    - All CPT posts with full meta field mapping (events, obituaries, sponsors, competitions, multimedia, e-editions)
    - 8 navigation menus (primary, top-bar, 5 footer columns, mobile) as `nav_menu_item` posts

3.  **Import into WordPress**:
    Go to **Tools > Import > WordPress** and upload `die-papier-content.xml`.

4.  **Post-import verification**:
    - Check taxonomy terms are created under each taxonomy
    - Verify CPT posts have correct meta field values
    - Confirm page parent hierarchy (Beleid → child policies)
    - Review navigation menus under **Appearance > Menus**

### Manual Content (Supplementary)

-   **Media**: See `guidelines/content/media-import-strategy.md` for image sideloading workflow.
-   **Commerce**: Run `wp eval-file seed-commerce.php` for WooCommerce products (optional).

---

## 5. Development Mode

For ongoing block development with hot reload:

```bash
cd /path/to/wp-content/plugins/die-papier-blocks/
npm run start
```

This watches `src/blocks/` for changes and rebuilds automatically.

---

## Design System Notes

- **V2 Palette**: All colour values use CSS custom properties from `theme.json` (brand red: `#E82C27`, brand navy: `#172134`).
- **Typography**: Headings use `font-heading` (Roboto Serif) with `font-normal` weight. Body uses Inter.
- **Shadows**: Use numeric slugs (100-600) not semantic names.
- **Border Radius**: Uses `--wp--custom--border-radius--*` tokens (not `--wp--preset--border-radius--*`).
- **Patterns**: All 70 patterns use `die-papier/` as their slug prefix.
- **Blocks**: All 17 blocks use `dp/` as their namespace prefix in `block.json`.