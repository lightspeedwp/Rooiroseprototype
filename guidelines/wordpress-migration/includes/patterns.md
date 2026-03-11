# Inc File: patterns.php

**File**: `inc/patterns.php`  
**GitHub**: https://github.com/lightspeedwp/die-papier-tema/blob/develop/inc/patterns.php  
**Purpose**: Register pattern categories and configure block pattern loading

---

## Responsibilities

- Register custom pattern categories (`die-papier-homepage`, `die-papier-pages`, `die-papier-sections`, `die-papier-hidden`, etc.)
- Configure pattern directory scanning
- Set pattern category sort order

## Pattern Categories

| Category Slug | Label | Description |
|:-------------|:------|:------------|
| `die-papier-homepage` | Tuisblad | Homepage section patterns |
| `die-papier-pages` | Bladsye | Full-page patterns |
| `die-papier-sections` | Afdelings | Reusable section patterns |
| `die-papier-hidden` | Versteek | Reference-only patterns (inserter: no) |
| `die-papier-woocommerce` | WooCommerce | E-commerce patterns |

## Related

- [Pattern Strategy](/guidelines/wordpress-migration/pattern-strategy.md)
- [Full Page Patterns](/guidelines/wordpress-migration/full-page-patterns.md)
