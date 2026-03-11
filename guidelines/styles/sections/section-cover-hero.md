# Section Style: Cover Hero

**Slug**: `section-cover-hero`  
**Label (AF)**: Bedek-held  
**Label (EN)**: Cover Hero  
**Category**: component  
**Target Block**: `core/cover`  
**JSON File**: `styles/sections/section-cover-hero.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Padding Top | xxx-large | `var(--wp--preset--spacing--xxx-large)` |
| Padding Bottom | xxx-large | `var(--wp--preset--spacing--xxx-large)` |

## Key Properties

Cover block variation with overlay. Used for pages with background images (newsletter subscribe, delivery, team, advertise, policies).

## React Equivalent

**Tailwind class**: `min-h-[400px] flex items-center`  
**Used in**: `NewsletterSubscribe.tsx`, `About.tsx`

## WordPress Usage

### Templates
`page.html`

### Patterns
`page-newsletter`, `page-subscribe-delivery`, `page-subscribe-eedition`, `page-policies`, `page-team`, `page-advertise`

## Block Code

```html
<!-- wp:cover {"url":"...","dimRatio":60,"className":"is-style-section-cover-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-cover is-style-section-cover-hero">
  <span class="wp-block-cover__background has-background-dim-60"></span>
  <div class="wp-block-cover__inner-container">
    <!-- Hero content with overlay -->
  </div>
</div>
<!-- /wp:cover -->
```

## Notes

Unlike other section styles that target `core/group`, this style targets `core/cover` — the only section style that does so.
