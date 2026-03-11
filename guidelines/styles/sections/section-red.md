# Section Style: Red Section

**Slug**: `section-red`  
**Label (AF)**: Rooi afdeling  
**Label (EN)**: Red Section  
**Category**: background  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-red.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value | CSS Variable |
|:---------|:------|:-------------|
| Background | `#D70025` | `var(--wp--preset--color--primary)` |
| Text | `#ffffff` | `var(--wp--preset--color--base)` |
| Dark Mode BG | `#E83050` | — |
| Dark Mode Text | `#ffffff` | — |

## Element Overrides (Dark Section)

- **Buttons**: White background, red text, 85% opacity hover
- **Links**: currentColor text, 75% opacity hover
- **Headings**: White text (`--color--base`)

## React Equivalent

**Tailwind class**: `bg-[var(--wp--preset--color--primary)] text-white`  
**Used in**: `Home.tsx`, `EEditions.tsx`

## WordPress Usage

### Templates
`front-page.html`, `index.html`

### Template Parts
`footer.html`

### Patterns
`footer`, `cta`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-red","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-red">
  <!-- Content (white text on red) -->
</div>
<!-- /wp:group -->
```
