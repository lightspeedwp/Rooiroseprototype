# WordPress File Viewer Architecture

**Last updated**: 2026-03-02
**Version**: 1.0

---

## Overview

The WP File Viewer system loads WordPress theme and plugin files directly from `/wordpress-export/` at build time using Vite's `import.meta.glob` with `?raw` query strings. Files are lazy-loaded on demand when users open them in dev tool browsers — no file content is bundled upfront.

This replaces the previous approach of embedding file content as inline strings in TypeScript data files or generating markup via functions like `generateTemplateHTML()`, `generatePhpHeader()`, and `generatePHPSnippet()`.

---

## Architecture

```
/wordpress-export/                     ← Source of truth (WP files on disk)
  themes/die-papier-theme/
    patterns/*.php                     → wpPatterns
    templates/*.html                   → wpTemplates
    parts/*.html                       → wpParts
    inc/*.php                          → wpThemeInc
    theme.json                         → wpThemeJson
    styles/sections/*.json             → wpSectionStyles
    styles/blocks/**/*.json            → wpBlockStyles
    styles/colors/*.json               → wpColorPresets
    styles/typography/*.json           → wpTypographyPresets
    styles/*.json                      → wpGlobalVariations
  plugins/die-papier-blocks/
    inc/*.php                          → wpPluginInc
    src/blocks/**/*                    → wpBlockSource
    die-papier-blocks.php              → wpPluginMain
    webpack.config.js                  → wpPluginWebpack

/src/app/data/wpFileLoader.ts          ← Central glob registry + helpers
/src/app/components/dev/WpCodeViewer.tsx  ← Shared viewer component
```

---

## Key Files

### `wpFileLoader.ts` — Glob Registry

Exports 15 glob maps as `Record<string, () => Promise<string>>`:

| Export | Glob Pattern | File Type | Count |
|---|---|---|---|
| `wpPatterns` | `patterns/*.php` | PHP | ~85 |
| `wpTemplates` | `templates/*.html` | HTML | ~27 |
| `wpParts` | `parts/*.html` | HTML | ~7 |
| `wpThemeInc` | `inc/*.php` (theme) | PHP | ~7 |
| `wpPluginInc` | `inc/*.php` (plugin) | PHP | ~16 |
| `wpThemeJson` | `theme.json` | JSON | 1 |
| `wpSectionStyles` | `styles/sections/*.json` | JSON | ~24 |
| `wpBlockStyles` | `styles/blocks/**/*.json` | JSON | ~40 |
| `wpColorPresets` | `styles/colors/*.json` | JSON | varies |
| `wpTypographyPresets` | `styles/typography/*.json` | JSON | varies |
| `wpGlobalVariations` | `styles/*.json` | JSON | varies |
| `wpBlockSource` | `src/blocks/**/*` | mixed | varies |
| `wpPluginMain` | `die-papier-blocks.php` | PHP | 1 |
| `wpPluginWebpack` | `webpack.config.js` | JS | 1 |

Also exports helper functions:

| Function | Purpose |
|---|---|
| `loadWpFile(glob, filename)` | Load by filename suffix match |
| `loadWpFileByPath(glob, fullPath)` | Load by exact glob key |
| `getWpFileNames(glob)` | Get all filenames from a glob map |
| `getWpFilePaths(glob)` | Get all full paths from a glob map |
| `detectLanguage(filename)` | Map file extension to CodeBlock language |
| `getDisplayPath(fullPath)` | Strip `/wordpress-export/` prefix for display |

Also exports the `WpFileGlob` type alias: `Record<string, () => Promise<string>>`.

### `WpCodeViewer.tsx` — Viewer Component

A React component that accepts a glob map and filename, loads the file content on mount, and renders it via `CodeBlock` with syntax highlighting.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `glob` | `WpFileGlob` | required | The glob map to load from |
| `filename` | `string` | required | Filename or full glob key to load |
| `isFullPath` | `boolean` | `false` | Whether filename is a full glob key path |
| `label` | `string` | — | Label displayed above the code block |
| `maxHeight` | `number` | `400` | Max height in pixels |
| `language` | `CodeLanguage` | auto-detect | Override language detection |
| `editable` | `boolean` | `false` | Whether the code block is editable |
| `showStripPhpHeader` | `boolean` | `false` | Show toggle to strip PHP pattern header |
| `className` | `string` | `''` | Additional CSS class |
| `fontSize` | `string` | — | Font size override |

**Features:**
- Lazy loading with spinner state
- Error state with retry button
- File path breadcrumb showing the WP directory path
- PHP header stripping toggle (for pattern files — strips `<?php /** ... */ ?>` to show block markup only)
- Content caching via `useRef<Map>` to avoid re-fetching
- Auto language detection from file extension
- Copy-to-clipboard via CodeBlock

**Variants:**
- `WpCodeViewer` — standard, loads from a glob map
- `WpCodeViewerInline` — pre-loaded content string (no async loading)

---

## Browser Integration Matrix

| Browser | Glob(s) Used | What It Replaced |
|---|---|---|
| **PatternBrowser** | `wpPatterns` | `generatePhpHeader()` + `generateFullPatternFile()` + inline `blockHtml` strings |
| **TemplateBrowser** | `wpTemplates` | `generateTemplateHTML()` |
| **TemplatePartBrowser** | `wpParts` | `generatePartHTML()` |
| **IncFolderBrowser** | `wpPluginInc`, `wpThemeInc` | `generatePHPSnippet()` (~120 lines) |
| **SectionStyles** | `wpSectionStyles` | `generateJSON()` (JSON tab only; CSS/WP/PHP tabs still use CodeBlock) |
| **BlockStyleBrowser** | `wpBlockStyles` | Inline `JSON.stringify(style.wpThemeJson, null, 2)` (JSON tab only; CSS tab still uses CodeBlock) |
| **ThemeJsonViewer** | `wpThemeJson` | `<CodeBlock code={fullJson} .../>` (Raw JSON tab only; interactive explorer tabs use JS object) |

---

## How Filename Resolution Works

`WpCodeViewer` matches filenames by suffix. Given a glob map with keys like:

```
/wordpress-export/themes/die-papier-theme/patterns/page-home.php
```

Passing `filename="page-home.php"` will match because `path.endsWith('/page-home.php')` is true.

For nested globs (like `wpBlockStyles` with `**/*.json`), this still works — the filename only needs to match the final path segment.

---

## How to Add a New File Type

1. Add a new `import.meta.glob` export in `wpFileLoader.ts`:
   ```ts
   export const wpNewFiles = import.meta.glob<string>(
     '/wordpress-export/path/to/files/*.ext',
     { query: '?raw', import: 'default' }
   );
   ```

2. Import in your browser page:
   ```ts
   import { WpCodeViewer } from '../../components/dev/WpCodeViewer';
   import { wpNewFiles } from '../../data/wpFileLoader';
   ```

3. Use in JSX:
   ```tsx
   <WpCodeViewer
     glob={wpNewFiles}
     filename="example.ext"
     label="Example File"
     maxHeight={500}
   />
   ```

4. Update this doc and `dev-tools-protection.md` with the new glob entry.

---

## Task List Reference

- **Prompt**: `/prompts/wp-file-viewer-integration.md`
- **Audit report**: `/reports/wp-file-viewer-audit.md`
- **Task list**: `/tasks/wp-file-viewer-task-list.md` (35 tasks, Phases 1–4)

---

## Design Principles

1. **Single source of truth**: Files load from `/wordpress-export/` on disk. No duplication in TypeScript data files.
2. **Lazy loading**: Files are fetched on demand via dynamic import. Zero impact on initial bundle size.
3. **Auto-sync**: Every Vite rebuild picks up file changes automatically. No manual re-export needed.
4. **Shared infrastructure**: All browsers use the same `WpCodeViewer` component and `wpFileLoader` globs. No per-browser loading logic.
5. **Graceful degradation**: Missing files show a clear error state with retry button, not a blank or crashed page.