# Inc File: presets.php

**File**: `inc/presets.php`  
**GitHub**: https://github.com/lightspeedwp/die-papier-tema/blob/develop/inc/presets.php  
**Purpose**: Load JSON preset files from `/styles/presets/` and merge into theme.json settings

---

## Responsibilities

- Scan `/styles/presets/` directory for JSON files
- Parse and merge preset definitions (colors, typography, spacing, shadows, borders, radii, aspect ratios)
- Register presets with WordPress via theme.json filter hooks

## Preset Files

| File | Contents |
|:-----|:---------|
| `colors.json` | Color palette (10 colors) |
| `typography.json` | Font families + font sizes (8 sizes) |
| `spacing.json` | Spacing scale (7 sizes) |
| `shadows.json` | Shadow presets (6 elevations) |
| `borders.json` | Border width presets |
| `radii.json` | Border radius presets |
| `aspect-ratios.json` | Aspect ratio utility classes |
| `layout.json` | Content/wide size, block gap |
| `spacing-utilities.json` | Additional spacing utilities |
| `flex-grid.json` | Flex/grid layout utilities |
| `truncation.json` | Text truncation utilities |

## Related

- [Design System Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md)
- [WordPress Presets Reference](/guidelines/wordpress-migration/presets-and-tokens.md)
