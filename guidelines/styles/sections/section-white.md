# Section Style: White Section

**Slug**: `section-white`  
**Label (AF)**: Wit afdeling  
**Label (EN)**: White Section  
**Category**: background  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-white.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#ffffff` | `var(--wp--preset--color--base)` |
| Text | `#142135` | `var(--wp--preset--color--main)` |
| Dark Mode BG | `#0F1923` | — |
| Dark Mode Text | `#E8E8ED` | — |

## Element Overrides

- **Buttons**: Primary red background (`--color--primary`), white text, primary-alt hover
- **Links**: Red accent text (`--color--accent`), navy hover (`--color--primary`)
- **Headings**: Navy text (`--color--main`)

## React Equivalent

**Tailwind class**: `bg-white`  
**Used in**: `Home.tsx`, `About.tsx`, `Contact.tsx`, `Advertise.tsx`

## WordPress Usage

### Templates
`front-page.html`, `page.html`, `single.html`, `404.html`, `archive.html`, `category.html`, `tag.html`, `search.html`

### Template Parts
`header.html`, `footer.html`

### Patterns
`page-home`, `page-about`, `page-subscribe`, `page-contact`, `hidden-404`, `hidden-no-search-results`, `homepage-top-stories`, `homepage-nuus`, `homepage-sport`, `homepage-skole`, `homepage-leefstyl`, `homepage-dink`, `homepage-sake`, `homepage-multimedia`, `homepage-events`, `woo-subscription-pricing-table`, `icon-service-grid`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-white">
  <!-- Content -->
</div>
<!-- /wp:group -->
```
