# ⛔ DEPRECATED — Block: dp/ad-mrec

**Last updated**: 2026-02-27
**Status**: DEPRECATED — block source deleted from plugin (2026-02-25)
**Replacement**: Advanced Ads plugin — `[advanced_ads placement="..."]` shortcode blocks
**See**: `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`

---

## Replacement Guide

All `dp/ad-mrec` references in templates/patterns have been replaced with Advanced Ads shortcode blocks:

```html
<!-- wp:shortcode -->
[advanced_ads placement="sidebar-top-mrec"]
<!-- /wp:shortcode -->
```

Named placements: `sidebar-top-mrec`, `sidebar-bottom-mrec`, `content-leaderboard`, `home-skole-mrec`, `home-sidebar-mrec`.

## Historical Reference

Medium Rectangle (300×250) GAM ad slot placeholder. Rendered "Advertensie" label above a grey placeholder div. Files: `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`, `view.js`. `view.js` initialised GAM slot via `googletag.defineSlot()`.