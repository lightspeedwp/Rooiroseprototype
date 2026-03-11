# Section Style: Navy Light Section

**Slug**: `section-navy-light`  
**Label (AF)**: Marine-lig afdeling  
**Label (EN)**: Navy Light Section  
**Category**: background  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-navy-light.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#1C3450` | `var(--wp--preset--color--secondary-accent)` |
| Text | `#ffffff` | `var(--wp--preset--color--base)` |
| Dark Mode BG | `#253D54` | — |
| Dark Mode Text | `#E8E8ED` | — |

## Element Overrides (Dark Section)

- **Buttons**: White background, navy-accent text, 85% opacity hover
- **Links**: currentColor text, 75% opacity hover
- **Headings**: White text (`--color--base`)

## React Equivalent

**Tailwind class**: `bg-secondary-accent text-white`  
**Used in**: `Home.tsx`, `EEditions.tsx`

## WordPress Usage

### Templates
`page.html`

### Template Parts
None

### Patterns
`section-pricing-table`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-navy-light","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-navy-light">
  <!-- Content -->
</div>
<!-- /wp:group -->
```
