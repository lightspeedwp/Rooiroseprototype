# Footer: Checkout (Minimal)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/footer-checkout`  
**Folder**: `footer/`  
**Source**: `patterns/footer/footer-checkout.php`  
**Referenced by**: `checkout-footer.html` template part

---

## Overview

Minimal checkout footer for distraction-free checkout experience. Shows payment method icons (Visa, Mastercard, Payfast), copyright text, and essential legal links only.

## Block Structure

- `core/group` (alignfull, `backgroundColor: tertiary`, padding large)
  - `core/group` (alignwide)
    - `core/group` (flex, center, wrap) — Payment icons
      - Paragraph — "Aanvaar:" (Accepts:)
      - Image — Visa icon (40px)
      - Image — Mastercard icon (40px)
      - Image — Payfast logo (60px)
    - `core/group` (flex, center, wrap) — Legal
      - Paragraph — "© 2026 Die Papier. Alle regte voorbehou."
      - Paragraph — Privacy policy + Terms links

## Design Tokens

- **Background**: `tertiary` (light gray)
- **Text**: `main-accent` for labels, default for links
- **Icon sizes**: 40px (card logos), 60px (Payfast)

## Related Files

- `/guidelines/components/parts/checkout-footer.md` — Template part (to be created)
- `/guidelines/components/patterns/header/header-checkout.md` — Matching checkout header
