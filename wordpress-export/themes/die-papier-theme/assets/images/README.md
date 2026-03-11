# Theme Images

Place the following brand assets here for production:

## Required Files

### Logos
- `logo.svg` — Full colour logo (horizontal)
- `logo-white.svg` — White variant for dark backgrounds
- `logo-icon.svg` — Icon-only mark (square, for favicon/app icon)

### Favicon
- `favicon.ico` — 32x32 ICO
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` — 180x180

### Social / Open Graph
- `og-default.jpg` — 1200x630 default Open Graph image
- `og-logo.png` — Square logo for social cards

## Usage

Reference in templates and `functions.php`:

```php
get_theme_file_uri('assets/images/logo.svg')
```
