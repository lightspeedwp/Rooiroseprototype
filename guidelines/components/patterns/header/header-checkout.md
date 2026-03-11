# Header: Checkout (Minimal)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/header-checkout`  
**Folder**: `header/`  
**Source**: `patterns/header/header-checkout.php`  
**Referenced by**: `checkout-header.html` template part

---

## Overview

Minimal checkout header for distraction-free checkout experience. Shows only the site logo (left) and a security badge with Payfast logo (right). No navigation links.

## Block Structure

- `core/group` (alignfull, `backgroundColor: base`, padding small)
  - `core/group` (alignwide, flex, space-between, no wrap)
    - `core/site-logo` (180px width, linked)
    - `core/group` (flex, no wrap, right-aligned, blockGap x-small)
      - `outermost/icon` (lock, 16px, `textColor: main-accent`)
      - Paragraph — "Veilige betaling" (`fontSize: small`, `textColor: main-accent`)
      - Image — Payfast logo (80px)

## Design Tokens

- **Background**: `base` (white)
- **Logo**: 180px width
- **Lock icon**: 16px, `main-accent` color
- **Payfast logo**: 80px width

## Related Files

- `/guidelines/components/parts/checkout-header.md` — Template part guideline
- `/guidelines/components/patterns/footer/footer-checkout.md` — Matching checkout footer
- `/guidelines/wordpress-migration/third-party-plugins/icon-block.md` — Icon block usage
