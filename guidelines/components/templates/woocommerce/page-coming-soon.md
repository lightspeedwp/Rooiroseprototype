# Template: coming-soon.html

**Last updated**: 2026-03-03
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/coming-soon.html`
**React equivalent**: N/A (WooCommerce native feature)

---

## 1. Purpose

WooCommerce Coming Soon mode template. Displayed when the store owner enables "Coming Soon" mode via WooCommerce settings. This template is a **standalone page** — it intentionally does NOT include header or footer template parts, as WooCommerce requires a self-contained page for pre-launch states.

**CRITICAL**: The filename must remain `coming-soon.html`. Do NOT rename to `page-coming-soon.html`. WooCommerce's Coming Soon mode specifically resolves this filename from the theme's templates directory.

## 2. Structure

```
pattern: die-papier/woo-coming-soon
├─ group (full, centered, min-height: 100vh)
│  ├─ site-logo (centered, 200px)
│  ├─ heading (h1): "Binnekort beskikbaar"
│  ├─ paragraph: Description text
│  └─ (optional) Gravity Forms newsletter signup
└─ (no header, no footer)
```

## 3. Template Parts Used

**None** — this is the exception. WooCommerce Coming Soon pages must be self-contained without header/footer template parts.

## 4. Pattern Used

- `die-papier/woo-coming-soon` — Full page content (logo, heading, description, optional newsletter)

## 5. WP Hierarchy Position

**Special**: `coming-soon.html` is resolved by WooCommerce's internal template loader, not the standard WordPress template hierarchy. It only displays when Coming Soon mode is active in WooCommerce settings.

## 6. Ad Slots

**None** — template exclusion list. No ads on Coming Soon page.

## 7. Related Files

- `/wordpress-export/themes/die-papier-theme/patterns/woocommerce/woo-coming-soon.php`
- `/guidelines/wordpress-migration/woocommerce/README.md`
