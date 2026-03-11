# Coming Soon Pattern

**Last updated**: 2026-03-03
**Folder**: patterns/woocommerce/
**Slug**: die-papier/woo-coming-soon
**File**: `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-coming-soon.php`

## Description

Branded Coming Soon page for WooCommerce Coming Soon mode. Self-contained full-viewport layout with navy background, centred logo, heading, description, and newsletter signup form. No header or footer template parts (WooCommerce requirement).

## Block Composition

```
core/group (full, bg: secondary, min-height: 100vh, flex vertical center)
└── core/group (constrained 600px, padding: x-large top/bottom, medium left/right)
    ├── core/site-logo (width: 200, align: center)
    ├── core/heading (h1, center, text: base, xxx-large) — "Binnekort beskikbaar"
    ├── core/paragraph (center, text: base, medium) — Description text
    ├── core/separator (bg: border-light, is-style-wide)
    ├── core/paragraph (center, text: base, small) — Newsletter signup prompt
    └── gravityforms/form (newsletter, no title/description, ajax)
```

## Design Details

- **Background**: `secondary` (Brand Navy #172134)
- **Text**: `base` (white) throughout
- **Layout**: Flex vertical, centred both axes, full viewport height
- **Content width**: Constrained to 600px
- **Separator**: `border-light` colour with `is-style-wide`

## WooCommerce Constraints

- **Template**: `coming-soon.html` (must NOT be renamed — WooCommerce looks for this exact filename)
- **No header/footer**: WooCommerce Coming Soon mode renders the template without the site's header or footer
- **Form**: Uses Gravity Forms newsletter form for pre-launch email collection

## Related Files

- `/guidelines/components/templates/woocommerce/page-coming-soon.md` — Template guideline
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md` — Form integration

## Related Blocks

- core/group
- core/site-logo
- core/heading
- core/paragraph
- core/separator
- gravityforms/form
