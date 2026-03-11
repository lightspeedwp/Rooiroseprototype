# Section Style: Muted Section

**Slug**: `section-muted`  
**Label (AF)**: Gedempte afdeling  
**Label (EN)**: Muted Section  
**Category**: background  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-muted.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#F5F5F0` | `var(--wp--preset--color--tertiary)` |
| Text | `#142135` | `var(--wp--preset--color--main)` |
| Dark Mode BG | `#162233` | — |
| Dark Mode Text | `#E8E8ED` | — |

## Element Overrides

- **Buttons**: Primary red background, white text, primary-alt hover
- **Links**: Red accent text, navy hover
- **Headings**: Navy text (`--color--main`)

## React Equivalent

**Tailwind class**: `bg-tertiary`  
**Used in**: `Home.tsx`, `PoliciesHub.tsx`, `FAQ.tsx`

## WordPress Usage

### Templates
`archive.html`, `category.html`, `tag.html`, `page.html`, `single.html`, `404.html`

### Template Parts
`sidebar.html`, `sidebar-home.html`, `sidebar-event.html`

### Patterns
`archive-category-dink`, `archive-category-leefstyl`, `archive-category-nuus`, `archive-category-sake`, `archive-category-sport`, `page-about`, `page-subscribe`, `page-my-eeditions`, `page-faq`, `page-newsletter-archive`, `page-e-editions`, `page-newsletter`, `page-subscribe-delivery`, `page-subscribe-eedition`, `page-policies`, `page-team`, `page-advertise`, `hidden-404`, `hidden-no-search-results`, `section-newsletter-cta`, `section-newsletter-cta-full`, `section-newsletter-form`, `homepage-obituaries`, `sidebar-obituary`, `woo-empty-cart`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
  <!-- Content -->
</div>
<!-- /wp:group -->
```
