# Inc/ Folder — Include Files Architecture

**Last updated**: 2026-03-04  
**Source**: `/wordpress-export/themes/die-papier-theme/inc/`  
**GitHub**: https://github.com/lightspeedwp/die-papier-tema/tree/develop/inc  
**Dev tool**: `/ontwikkelaar/inc-map`

---

## Overview

The `inc/` folder contains PHP include files loaded by `functions.php`. These files handle theme setup, preset loading, pattern registration, custom icons, and block bindings.

**Canonical structure** (5 files, per GitHub develop branch):

| # | File | Purpose | Loaded By |
|:--|:-----|:--------|:----------|
| 1 | `setup.php` | Theme setup hooks (after_setup_theme) | `functions.php` |
| 2 | `presets.php` | JSON preset file loader | `functions.php` |
| 3 | `patterns.php` | Pattern category & block pattern registration | `functions.php` |
| 4 | `custom-icons.php` | Custom icon library for Outermost Icon Block | `functions.php` |
| 5 | `block-bindings.php` | Block Bindings API registrations | `functions.php` (conditional) |

---

## Individual Guides

- [setup.md](./setup.md) — Theme setup guide
- [presets.md](./presets.md) — Preset loader guide
- [patterns.md](./patterns.md) — Pattern registration guide
- [custom-icons.md](./custom-icons.md) — Custom icon library guide
- [block-bindings.md](./block-bindings.md) — Block Bindings API guide

---

## Loading Order (functions.php)

```php
namespace DiePapierTema;

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/presets.php';
require_once get_template_directory() . '/inc/patterns.php';
require_once get_template_directory() . '/inc/custom-icons.php';
```

**Note**: `block-bindings.php` is loaded conditionally or via a separate hook, not directly in the main require chain.

---

## Related Documentation

- [Theme Structure](/guidelines/wordpress-migration/theme-structure.md)
- [File Organization](/guidelines/development/file-organization.md)
- [Icon Block](/guidelines/wordpress-migration/third-party-plugins/icon-block.md)
- [Pattern Strategy](/guidelines/wordpress-migration/pattern-strategy.md)
