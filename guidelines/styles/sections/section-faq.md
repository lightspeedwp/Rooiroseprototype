# Section Style: FAQ Section

**Slug**: `section-faq`  
**Label (AF)**: Vrae-afdeling  
**Label (EN)**: FAQ Section  
**Category**: component  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-faq.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Block Gap | small | `var(--wp--preset--spacing--small)` |

## Key Properties

Border-bottom items, focused reading width. Used for FAQ/accordion sections with Yoast SEO FAQ blocks.

## React Equivalent

**Tailwind class**: Uses `Accordion` component  
**Used in**: `EEditions.tsx`, `Advertise.tsx`, `FAQ.tsx`

## WordPress Usage

### Templates
`page.html`, `single.html`

### Patterns
`page-faq`, `page-e-editions`, `page-newsletter`, `page-subscribe-delivery`, `section-faq`

## Block Code

```html
<!-- wp:group {"className":"is-style-section-faq","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-section-faq">
  <!-- wp:yoast/faq-block {...} -->
  <!-- FAQ items -->
  <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->
```

## Related

- [Yoast SEO FAQ Block](/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md)
