# {Plugin Name} Integration

**Last updated**: YYYY-MM-DD
**Plugin**: {Plugin Name} ({plugin-slug})
**Version**: {version}
**WordPress.org**: https://wordpress.org/plugins/{plugin-slug}/

---

## 1. Plugin Overview

{One paragraph describing the plugin's purpose and how it integrates with the Die Papier theme.}

## 2. Block Name(s)

| Block | Slug | Purpose |
|-------|------|---------|
| {Block Name} | `{namespace/block-name}` | {What it does} |

## 3. Usage Pattern

```html
<!-- wp:{namespace/block-name} {attributes} /-->
```

{Any important configuration notes.}

## 4. Configuration

- {Plugin settings, API keys, form IDs, etc.}
- {WordPress admin configuration steps}

## 5. Section Style Integration

- {How the plugin's blocks behave in light vs dark sections}
- {Any CSS overrides needed}

## 6. CSS / JS Assets

| File | Purpose |
|------|---------|
| `/assets/css/{plugin}.css` | {description} |
| `/assets/js/{plugin}.js` | {description} |

{Enqueued in `/inc/enqueue.php`.}

## 7. Related Files

- `/guidelines/wordpress-migration/third-party-plugins/{plugin}.md`
- `/wordpress-export/themes/die-papier-theme/inc/enqueue.php`
- `/wordpress-export/themes/die-papier-theme/styles/blocks/{namespace}/`
