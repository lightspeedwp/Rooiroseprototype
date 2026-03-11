# Logo

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/Logo.tsx`
**WordPress target**: `core/site-logo` block — configured in WP Customizer

---

## 1. Purpose

Renders the "Die Papier" brand logotype as an inline SVG. Supports two variants: `default` (red with dark shadow, text-based SVG) and `white` (full letterform path SVG for use on dark/red backgrounds). The white variant is the official vectorised logotype; the default variant uses a text-based SVG with Roboto Serif.

## 2. Visual Structure

### `default` variant
SVG text element: "Die Papier" in Roboto Serif Black (900), red (#E82C27) with a dark (#2C2C2C) drop shadow offset 2px down-right. ViewBox `0 0 320 80`.

### `white` variant
Full vector paths (no text elements): white (#FFFFFF) letterforms. ViewBox `0 0 554 118`. This is the canonical brand asset.

## 3. Props / Attributes

| Prop | Type | Default | WP Attribute |
|:-----|:-----|:--------|:-------------|
| `className` | `string` | `"h-12 w-auto"` | Width setting in `core/site-logo` |
| `variant` | `'default' \| 'white'` | `'default'` | CSS filter `has-white-filter` class |

## 4. Data Sources

No external data — SVG paths are hardcoded.

## 5. Design Tokens

| Property | Value |
|:---------|:------|
| Red fill | `#E82C27` (`--custom-primary`) |
| White fill | `#FFFFFF` |
| Shadow fill | `#2C2C2C` (default variant only) |
| Font | Roboto Serif Black 900 (default variant) |

## 6–8. Not Applicable

No section style, BEM classes, or responsive changes — the SVG scales via `className`.

## 9. Dark Mode

No dark mode changes — the `white` variant is used on dark backgrounds (header masthead, footer, mobile menu). The `default` variant uses red regardless of theme.

## 10. Accessibility

- `role="img"` on the `<svg>` element
- `aria-label="Die Papier Logo"` for screen readers
- `preserveAspectRatio="xMinYMid meet"` ensures proper scaling

## 11. WordPress Mapping

### Construct Type
`core/site-logo` — uploaded as a media asset in the WordPress Customizer.

Two logo files needed:
1. **Standard logo**: Red version for light backgrounds → uploaded as the primary site logo
2. **White logo**: White version → uploaded and applied via `has-white-filter` CSS class or as an alternate logo in the header-transparent template part

### CSS for white filter
```css
.has-white-filter img {
    filter: brightness(0) invert(1);
}
```

## 12. Dependencies

- **Sub-components**: None
- **Consumed by**: `Header.tsx`, `Footer.tsx`, `MobileMenu.tsx`, `CheckoutLayout.tsx`

## 13. Known Exemptions

None.
