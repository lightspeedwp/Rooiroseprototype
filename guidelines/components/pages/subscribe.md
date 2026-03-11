# Subscribe (Inteken)

**Last updated**: 2026-02-23
**Category**: Page
**React source**: None — WordPress-native pattern (child pages `SubscribeDelivery.tsx` and `SubscribeEEdition.tsx` exist in React)
**WordPress target**: Pattern — `page-subscribe.php`

---

## 1. Purpose

Main subscription landing page that presents the pricing overview and plan comparison. Acts as the entry point for subscription flows, linking through to the delivery and e-edition sub-pages. No direct React source component exists — this page was created natively for WordPress to consolidate the two subscription paths.

## 2. Visual Structure

```
┌─ Page wrapper (align: full, constrained 1280px)
│  ├─ Hero section (.dp-page-hero, bg: brand-navy)
│  │  ├─ Heading H1 "Inteken op Die Papier" (centered, white)
│  │  └─ Lead paragraph (centered, white)
│  ├─ Pricing Table section (align: wide)
│  │  └─ dp/pricing-table block
│  ├─ Features section (bg: base-2)
│  │  ├─ Heading H2 "Wat is ingesluit?" (centered)
│  │  └─ Two-column checklist (is-style-checkmarks)
│  │     ├─ Column 1: 3 features
│  │     └─ Column 2: 3 features
│  └─ FAQ section (pattern: section-faq)
```

## 3. Props / Attributes

| Attribute (WP) | Type | Default | Editable in Editor? |
|:----------------|:-----|:--------|:-------------------:|
| Hero title | string | "Inteken op Die Papier" | Yes (heading block) |
| Hero lead text | string | "Kies die plan..." | Yes (paragraph block) |
| Feature items | list | 6 items (2 columns) | Yes (list blocks) |
| FAQ category | string | Inherits from section-faq | Yes (pattern) |

## 4. Data Sources

- **Mock data file**: N/A
- **WordPress source**: Static content (heading, paragraphs, feature lists); `dp/pricing-table` block renders plans dynamically; `section-faq` pattern queries `dp_faq` CPT
- **API endpoint**: N/A

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Line-Height | Weight | Extras |
|:--------|:------------|:-----------|:------------|:-------|:-------:|
| Hero H1 | `--font-heading` | `--text-h1` | `--lh-h1` | 400 | `fvs: --fvs-h1` |
| Hero lead | `--font-inter` | `--text-p1` | `--lh-p1` | 400 | — |
| Features H2 | `--font-heading` | `--text-h2` | `--lh-h2` | 400 | `fvs: --fvs-h2` |
| Feature list items | `--font-inter` | `--text-p2` | `--lh-p2` | 400 | — |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Hero padding | `spacing|70` top/bottom, `spacing|50` left/right | `--space-70` / `--space-50` |
| Pricing section padding | `spacing|60` top/bottom | `--space-60` |
| Features section padding | `spacing|60` top/bottom, `spacing|50` left/right | `--space-60` / `--space-50` |
| Columns gap (above) | `spacing|50` margin-top | `--space-50` |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Hero bg | `#142135` | Same | `--wp--preset--color--brand-navy` |
| Hero text | `#FFFFFF` | Same | `--wp--preset--color--base` |
| Features bg | `#F5F5F7` | `dark:--base-2` | `--wp--preset--color--base-2` |

## 6. Section Style

Not applicable — full-page pattern.

## 7. BEM Class Map

| BEM Class | Element | Notes |
|:----------|:--------|:------|
| `.dp-page-hero` | Hero section | Brand-navy background, white text |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` (mobile) | Hero constrained, features stack to single column, pricing table scrolls horizontally |
| `768px – 1023px` (tablet) | Two-column features, pricing table fits |
| `≥ 1024px` (desktop) | Full layout with pricing table and two-column features |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Hero bg | No change (brand-navy) | — |
| Features bg | Dark card background | `dark:--base-2` |
| Body text | Light text | `dark:--foreground` |

## 10. Accessibility

- **ARIA roles**: Standard page landmarks
- **Keyboard navigation**: Pricing table and CTA buttons focusable
- **Contrast notes**: White text on brand-navy meets WCAG AAA (16.26:1)

## 11. WordPress Mapping

### Construct Type
Full Page Pattern

### Pattern File
- **Path**: `/wordpress-export/themes/die-papier-theme/patterns/page-subscribe.php`
- **Slug**: `die-papier/page-subscribe`
- **Categories**: `pages`
- **Sync type**: None (static content + dynamic blocks)

### Block Composition

```html
<!-- wp:group {"align":"full","layout":{"type":"constrained","contentSize":"1280px"}} -->
    <!-- Hero: brand-navy bg, H1 + lead -->
    <!-- Pricing Table: dp/pricing-table block -->
    <!-- Features: base-2 bg, H2 + 2-col checkmark lists -->
    <!-- FAQ: section-faq pattern -->
<!-- /wp:group -->
```

### Existing WP Files
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/page-subscribe.php`

## 12. Dependencies

- **Sub-components**: `dp/pricing-table` (block), `section-faq` (pattern)
- **Consumed by**: `page.html` template (via page assignment)
- **Related pages**: `subscribe-delivery.md`, `subscribe-eedition.md`
- **Shared utilities**: None

## 13. Known Exemptions

None.
