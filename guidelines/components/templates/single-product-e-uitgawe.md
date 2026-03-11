# Template: single-product-e-uitgawe.html

**Last updated**: 2026-03-03
**Category**: Template — WooCommerce Custom Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-product-e-uitgawe.html`
**React equivalent**: `SingleEEdition.tsx`

---

## 1. Purpose

Custom WooCommerce single product template for individual **E-Uitgawe** (E-Edition) products. Displays edition cover, title, date, price, add-to-cart, Issuu embedded viewer, social sharing, and related editions.

**IMPORTANT**: This is a **custom template** — it requires:
1. Registration in `theme.json` `customTemplates` with `postTypes: ["product"]`
2. Manual assignment per product in the WordPress editor (Product → Template dropdown)

## 2. Structure

```
header (template part)
└─ main
   ├─ breadcrumbs (template part)
   └─ pattern: die-papier/woo-single-e-uitgawe
      ├─ Store Notices
      ├─ Product Layout (two columns)
      │  ├─ column (50%)
      │  │  └─ woocommerce/product-image (edition cover)
      │  └─ column (50%)
      │     ├─ woocommerce/product-title
      │     ├─ paragraph (edition date)
      │     ├─ woocommerce/product-price
      │     ├─ woocommerce/add-to-cart-with-options
      │     ├─ Trust badges / membership benefits
      │     └─ Social sharing (outermost/social-sharing)
      ├─ Issuu Viewer Section
      │  └─ custom HTML block (iframe embed placeholder)
      ├─ Related Editions
      │  └─ woocommerce/product-collection (same category, 4 items)
      └─ pattern: section-newsletter-cta
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`
- `simple-product-add-to-cart-with-options` (injected by WooCommerce via add-to-cart-with-options block)

## 4. WooCommerce Blocks Used

| Block | Slug | Purpose |
|-------|------|---------| 
| Product Image | `woocommerce/product-image` | E-edition cover scan |
| Product Title | `woocommerce/product-title` | Edition title/date |
| Product Price | `woocommerce/product-price` | Individual purchase price |
| Add to Cart with Options | `woocommerce/add-to-cart-with-options` | Purchase button |
| Store Notices | `woocommerce/store-notices` | Cart/purchase feedback |
| Product Collection | `woocommerce/product-collection` | Related editions |

## 5. Patterns Used

- `die-papier/woo-single-e-uitgawe` — full product layout
- `die-papier/section-newsletter-cta` — newsletter CTA

## 6. theme.json Registration

```json
{
  "name": "single-product-e-uitgawe",
  "title": "Enkele E-Uitgawe Produk",
  "postTypes": ["product"]
}
```

## 7. WP Hierarchy Position

**Custom Template** — does NOT auto-resolve via hierarchy. Must be manually assigned per product in the WordPress editor.

Fallback: `single-product.html` > `single.html` > `index.html`

## 8. React Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| Product cover image | `woocommerce/product-image` |
| Edition title/date | `woocommerce/product-title` + paragraph |
| Price + Buy button | `woocommerce/product-price` + `add-to-cart-with-options` |
| Issuu embed | `core/html` block (iframe) |
| `SocialShare` | `outermost/social-sharing` |
| `DemoStateSwitcher` | WooCommerce Memberships (server-side) |
| Related editions | `woocommerce/product-collection` |

## 9. Related Files

- `/guidelines/components/templates/single-product.md` — Generic single product template
- `/guidelines/components/templates/taxonomy-product-cat-e-uitgawes.md` — E-Uitgawes archive
- `/prompts/e-editions-orchestrator.md` — E-editions canonical reference
- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-single-e-uitgawe.php`
