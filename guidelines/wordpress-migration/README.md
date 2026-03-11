# WordPress Migration

Architecture and implementation documentation for migrating Die Papier from React/Vite to WordPress FSE (Full Site Editing) with a block theme targeting `theme.json` v3 and WordPress 6.9.

## Files

- [Theme Structure](./theme-structure.md) - File organisation, priorities, and code migration guide
- [Block Plugin Strategy](./block-plugin-strategy.md) - Mapping React components to custom Gutenberg blocks
- [Theme.json Strategy](./theme-json-strategy.md) - Mapping Tailwind config to WordPress FSE theme.json (v3)
- [Presets & Tokens](./presets-and-tokens.md) - Standardising presets and tokens: slugs, CSS variables, and scales
- [Full Page Patterns](./full-page-patterns.md) - 159 patterns inventory and architecture
- [Block Mapping](./block-mapping.md) - React component to WordPress block mapping
- [Block Styles](./block-styles.md) - CSS block style variations and global style variations
- [Plugin Structure](./third-party-plugins/plugin-structure.md) - CPTs, blocks, taxonomies, and SCF fields
- [Templates & Parts](./templates-and-parts.md) - Complete template hierarchy and template parts reference
- [Redirects](./redirects.md) - Legacy English to Afrikaans URL redirect map (Nginx/htaccess)