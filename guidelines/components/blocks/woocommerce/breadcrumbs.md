# WooCommerce Block: Store Breadcrumbs

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/breadcrumbs`
**Category**: `woocommerce`
**Display Name**: Store Breadcrumbs

---

## Overview

Enable customers to keep track of their location within the store and navigate back to parent pages. **Die Papier replaces WooCommerce breadcrumbs with Yoast SEO breadcrumbs** for better Schema.org markup and customization.

---

## Block Specification

- **Name:** `woocommerce/breadcrumbs`
- **Supports:** align (full, wide), color (link, text, background), interactivity (clientNavigation), typography (fontSize, lineHeight), html
- **Attributes:** `align`, `contentJustification`, `fontSize`

---

## Block Styles

### Default (`wc-breadcrumbs-default`)
**File**: `styles/blocks/woocommerce/breadcrumbs/default.json`

Styled for consistency, but the Yoast breadcrumbs block is preferred.

---

## Die Papier Decision

| Feature | WooCommerce Breadcrumbs | Yoast SEO Breadcrumbs |
|---------|------------------------|----------------------|
| Schema.org markup | No | Yes (BreadcrumbList) |
| Customization | Limited | Full control |
| Non-commerce pages | No | Yes |
| **Used by Die Papier** | **No** | **Yes** |

See `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` for the Yoast breadcrumbs implementation.
