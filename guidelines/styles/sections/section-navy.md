# Section Style: Navy Section

**Slug**: `section-navy`  
**Label (AF)**: Marine-afdeling  
**Label (EN)**: Navy Section  
**Category**: background  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-navy.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#142135` | `var(--wp--preset--color--secondary)` |
| Text | `#ffffff` | `var(--wp--preset--color--base)` |
| Dark Mode BG | `#0A1018` | — |
| Dark Mode Text | `#E8E8ED` | — |

## Element Overrides (Dark Section)

- **Buttons**: White background, navy text, 85% opacity hover
- **Links**: currentColor text, 75% opacity hover
- **Headings**: White text (`--color--base`)

## React Equivalent

**Tailwind class**: `bg-[var(--wp--preset--color--secondary)] text-white`  
**Used in**: `Home.tsx`, `EEditions.tsx`, `Footer.tsx`

## WordPress Usage

### Templates
`front-page.html`, `page.html`

### Template Parts
`footer.html`

### Patterns
`page-about`, `page-subscribe`, `page-team`, `section-brand-quotes`, `section-subscription-cta`, `homepage-nuusflitse`, `icon-benefits-section`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-navy","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-navy">
  <!-- Content (white text on navy) -->
</div>
<!-- /wp:group -->
```
