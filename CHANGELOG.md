# Changelog

All notable changes to the Die Papier project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Block Browser component with category-based visual previews (`BlockPreview.tsx`)
- Manual cleanup documentation at `/tasks/MANUAL-CLEANUP-REQUIRED.md` (7 empty block directories requiring Git deletion)
- Comprehensive data verification report at `/reports/data-verification-cross-check-2026-03-04.md`

### Changed

- All 10 inc/ PHP files now use `DiePapierTema\\includes` namespace with `__NAMESPACE__` hook references
- Presets.php description updated to reflect auto-discovery architecture
- Inc Folder Browser data updated (removed 4 obsolete entries: enqueue.php, block-styles.php, parts.php, section-styles.php)
- Template Browser data synchronized to 49 templates (updated documentation from incorrect 33 count)
- Pattern Browser data synchronized to 177 patterns (updated comment from outdated 130 count)
- Updated Guidelines.md with file organization rules, Supabase policy, and changelog references

### Removed

- 9 orphaned `default.json` files from block style directories (content migrated to `styles/presets/blocks/`)

## [0.9.0] - 2026-03-04

### Added

- Performance Optimization Audit — 7/7 audits complete, 4 violations fixed
- Block Pattern Validation — 235 files validated, 0 violations, 100% production ready

### Fixed

- Added `loading="lazy"` and `decoding="async"` to images in Cart.tsx and Checkout.tsx

## [0.8.0] - 2026-03-03

### Added

- Advanced Ads coverage — 20/20 tasks: footer leaderboards on 13 archives, StickyMobileFooter on 8 React pages
- New templates: 5 dedicated category templates, 3 WooCommerce templates, 6 new patterns
- Launch checklist expansion with 25+ technical production items
- Third-party block CSS/JS enqueue (Gravity Forms, Yoast SEO, Social Sharing)
- Advanced Ads implementation — 12 active placements with `dp-` prefix

### Fixed

- Legacy `[the_ad]` shortcode in `archive-tag.php` replaced with `advads/gblock`
- Escaped quote bugs (`\"`) in 3 archive pattern files
- Yoast SEO namespace errors (7 instances across 3 files)

## [0.7.0] - 2026-03-02

### Added

- Dev Tools filtering enhancement — comprehensive filtering across all 5 browser tools
- Block Style Browser dynamic disk-based loading (23 to 71 styles)
- Template Parts categorization — `post-meta` and `woocommerce` areas

### Fixed

- Critical CSS syntax error in `comments.ts` (2 instances)
- Block Style Browser Map keying bug in `wpFileLoader.ts`

### Changed

- Spacing slug migration — 34 legacy numeric slugs to semantic Ollie slugs across 11 files
- Section styles cleanup — reduced from 24 to 9 styles (62.5% reduction)
- Mass slug migration to OllieWP canonical slugs (colors, font sizes, spacing)

## [0.6.0] - 2026-03-01

### Added

- 60+ lazy-loaded routes with route-based code splitting
- Build optimization: vendor chunk splitting, Gzip/Brotli compression, bundle visualizer
- Fatal error handler in main.tsx for blank screen prevention
- WordPress Block Theme export structure (patterns, templates, parts, theme.json)

### Changed

- Migrated from direct route rendering to React Router v7 Data Mode (RouterProvider)
- Motion library removed — all animations converted to CSS

---

**Note**: Versions prior to 0.6.0 were not tracked with formal versioning. The project was in active prototype development from January 2026.