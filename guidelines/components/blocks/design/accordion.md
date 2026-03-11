# Accordion Block (Core WordPress)

**Last updated**: 2026-03-01
**Version**: 1.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Block type**: Core WordPress design block (NOT a WooCommerce or custom block)
**WordPress reference**: https://developer.wordpress.org/news/2025/10/styling-accordions-in-wordpress-6-9/

---

## Overview

The accordion is a **core WordPress block** available from WordPress 6.9+. It uses the native `<details>` / `<summary>` HTML elements and is part of the WordPress design block category.

Die Papier uses accordions primarily for FAQ sections. **No custom FAQ post type** is created -- all FAQs use the **Yoast SEO FAQ block** (`yoast-seo/faq-block`) which outputs schema-compatible markup.

---

## Usage in Die Papier

### FAQ Sections

All FAQ content uses the Yoast SEO FAQ block, NOT the core accordion block directly. The Yoast FAQ block provides:
- `FAQPage` Schema.org structured data (automatic)
- Question/Answer pairs with proper semantic markup
- Accordion-style expand/collapse interaction

See `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` for Yoast FAQ block integration details.

### Non-FAQ Accordions

For non-FAQ accordion content (e.g., collapsible policy sections, terms and conditions), use the core WordPress `details` block:

```html
<!-- wp:details -->
<details class="wp-block-details">
  <summary>Klik om uit te brei</summary>
  <!-- wp:paragraph -->
  <p>Verborge inhoud hier.</p>
  <!-- /wp:paragraph -->
</details>
<!-- /wp:details -->
```

---

## Styling

### Theme.json Configuration

```json
{
  "styles": {
    "blocks": {
      "core/details": {
        "border": {
          "bottom": {
            "color": "var(--wp--preset--color--contrast-3)",
            "style": "solid",
            "width": "1px"
          }
        },
        "spacing": {
          "padding": {
            "top": "var(--wp--preset--spacing--40)",
            "bottom": "var(--wp--preset--spacing--40)"
          }
        },
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--inter)"
        }
      }
    }
  }
}
```

### Summary Element Styling

The `<summary>` element should use:
- Font: Inter (body font)
- Weight: 600 (semi-bold)
- Cursor: pointer
- List-style: none (hide default disclosure triangle, use custom chevron)

---

## Accessibility

- The `<details>` / `<summary>` pattern is natively accessible.
- Keyboard: `Enter` or `Space` toggles open/close.
- Screen readers announce the expanded/collapsed state automatically.
- No additional ARIA attributes are needed.

---

## Current Usage Audit

**Known usage locations:**
- FAQ sections on: `/oor-ons`, `/kontak`, `/inteken/e-uitgawe`, `/inteken/aflewering`, `/adverteer`
- All FAQ sections use Yoast SEO FAQ block (not core details block)

**Needs audit:** Identify any other pages using accordion/details patterns beyond FAQ sections.

---

## Related Documentation

| Document | Relevance |
|:---------|:----------|
| `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` | Yoast FAQ block integration |
| `/guidelines/components/faq-sections.md` | Page-level FAQ patterns |

---

**End of Accordion Block Guideline**
