# Changelog

All notable changes to the rooi rose project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- **Iframe MessageChannel Errors** (v11.31) — Immediate inline suppression (2026-03-16)
  - Execute error suppression as FIRST CODE in document (minified inline script)
  - Set window.onerror synchronously before MessageChannel destruction
  - Override console.error/warn before Figma scripts can log
  - Freeze MessageChannel as non-configurable `undefined`
  - Capture phase error listeners (run before Figma's handlers)
  - Suppress promise rejections and dynamic import failures
  - Zero error output in Figma Make iframe environment
  - Full React functionality preserved in production
  - Documentation: `/docs/FIGMA-IFRAME-FIX.md`

### Added
- **Design Token Alignment Audit Report** (2026-03-16) — Comprehensive 10-page analysis
  - Verified CSS-to-Data token alignment (90% system health)
  - Documented 162+ CSS custom properties vs 145+ data tokens
  - Identified intentional exclusions (ShadCN, chart colors, dark shadows)
  - Created optional enhancement recommendations (P4/Small/H-Compact typography)
  - Report: `/reports/token-alignment-audit-2026-03-16.md`
- **Spacing Token Coverage Audit** (2026-03-16) — Quick verification
  - Confirmed 100% alignment of WordPress Ollie spacing scale (7 tokens)
  - Verified native spacing utilities intentionally excluded from data layer
  - Validated clamp() values and Tailwind mappings
- **Shadow Token System Audit** (2026-03-16) — Quick verification
  - Confirmed 100% alignment of primary shadow scale (6 tokens)
  - Verified dark mode shadows intentionally excluded from data layer
  - Validated light/dark opacity values (0.05-0.25 light, 0.5-0.8 dark)

### Changed
- **Footer Logo Size** — Tripled logo size across all breakpoints (2026-03-16)
  - Mobile: 36px → 108px (h-9 → h-[108px])
  - Desktop: 40px → 120px (h-10 → h-[120px])
- **Header Logo Size** — Doubled logo size across all breakpoints (2026-03-16)
  - Mobile: 40px → 80px (h-10 → h-20)
  - Small screens: 48px → 96px (h-12 → h-24)
  - Large screens: 80px → 160px (h-[80px] → h-[160px])