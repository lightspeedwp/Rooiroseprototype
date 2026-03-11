# Inc File: block-bindings.php

**File**: `inc/block-bindings.php`  
**GitHub**: https://github.com/lightspeedwp/die-papier-tema/blob/develop/inc/block-bindings.php  
**Purpose**: Register Block Bindings API sources for dynamic content in block patterns

---

## Responsibilities

- Register custom block binding sources via `register_block_bindings_source()`
- Enable dynamic content insertion into blocks without custom PHP templates
- Bridge between WordPress data (post meta, options, etc.) and block attributes

## WordPress Block Bindings API

The Block Bindings API (WordPress 6.5+) allows blocks to get their attribute values from external sources. This file registers Die Papier-specific binding sources.

## Usage in Patterns

```html
<!-- wp:paragraph {"metadata":{"bindings":{"content":{"source":"die-papier/custom-source","args":{"key":"some_value"}}}}} -->
<p></p>
<!-- /wp:paragraph -->
```

## Related

- [WordPress Block Bindings API](https://developer.wordpress.org/reference/functions/register_block_bindings_source/)
- [Theme Structure](/guidelines/wordpress-migration/theme-structure.md)
