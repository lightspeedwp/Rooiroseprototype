# Section Style: Gradient Navy

**Slug**: `section-gradient-navy`  
**Label (AF)**: Gradient Marine  
**Label (EN)**: Gradient Navy  
**Category**: gradient  
**Target Block**: `core/group`  
**JSON File**: `styles/sections/section-gradient-navy.json`  
**CSS File**: None (pure JSON)

---

## Design Tokens

| Property | Value |
|:---------|:------|
| Gradient | `linear-gradient(135deg, var(--wp--preset--color--secondary) 0%, var(--wp--preset--color--secondary-accent) 100%)` |
| Text | `var(--wp--preset--color--base)` (#ffffff) |
| Dark Gradient | `linear-gradient(135deg, #0A1018, #162233)` |

## Element Overrides (Dark Section)

- **Buttons**: White background, navy text, 85% opacity hover
- **Links**: currentColor text, 75% opacity hover
- **Headings**: White text (`--color--base`)

## React Equivalent

**Tailwind class**: `bg-gradient-to-br from-[var(--wp--preset--color--secondary)] to-[var(--wp--preset--color--secondary-accent)]`  
**Used in**: `Home.tsx`, `EEditions.tsx`

## WordPress Usage

### Templates
`page.html`

### Template Parts
None

### Patterns
`section-contact-form`

## Block Code

```html
<!-- wp:group {"align":"full","className":"is-style-section-gradient-navy","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-gradient-navy">
  <!-- Content -->
</div>
<!-- /wp:group -->
```
