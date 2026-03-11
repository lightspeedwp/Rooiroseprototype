# Section Style: Hero Section (Default)

**Slug**: `section-hero-default`  
**Label (AF)**: Held-afdeling (Verstek)  
**Label (EN)**: Hero Section (Default)  
**Category**: component  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-hero-default.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#ffffff` | `var(--wp--preset--color--base)` |
| Text | `#142135` | `var(--wp--preset--color--main)` |
| Padding Top | xxx-large | `var(--wp--preset--spacing--xxx-large)` |
| Padding Bottom | xxx-large | `var(--wp--preset--spacing--xxx-large)` |

## Key Properties

Min-height 300px, base background, main text. Used for category archive hero banners and search page headers.

## React Equivalent

**Tailwind class**: `relative min-h-[300px]`  
**Used in**: `Category.tsx`, `SearchResults.tsx`

## WordPress Usage

### Templates
`archive.html`, `category.html`, `tag.html`, `search.html`, `page.html`

### Patterns
`archive-category-dink`, `archive-category-leefstyl`, `archive-category-nuus`, `archive-category-sake`, `archive-category-sport`, `archive-search`, `page-my-eeditions`, `page-newsletter-manage`, `page-faq`, `page-newsletter-archive`, `page-search`, `page-e-editions`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
  <!-- Hero content -->
</div>
<!-- /wp:group -->
```
