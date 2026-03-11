# ⛔ DEPRECATED — Block: dp/eedition-access

**Last updated**: 2026-02-27
**Status**: DEPRECATED — block source deleted from plugin (2026-02-25)
**Replacement**: WooCommerce Memberships content restriction (`core/group` with membership class gating)
**See**: `/guidelines/wordpress-migration/woocommerce/membership-rules.md`

---

## Replacement Guide

Access gating is now handled by WooCommerce Memberships plugin natively. Content restriction uses a `core/group` block with the `dp-eedition-access-gate` class. The Issuu embed is stored in the linked WooCommerce product's content body.

```html
<!-- wp:group {"className":"dp-eedition-access-gate"} -->
<div class="wp-block-group dp-eedition-access-gate">
    <!-- Access message + subscribe CTA -->
</div>
<!-- /wp:group -->
```

WC Memberships controls visibility via `wc_memberships_is_post_content_restricted()`.

## Historical Reference

E-edition content access gate block. Rendered different UI depending on user access status (not purchased / subscription / individual purchase). Used `render.php` to check `dp_get_eedition_access_status()` and conditionally rendered price + add-to-cart, green confirmation banner, or "Lees nou" button. `view.js` handled add-to-cart via WooCommerce Store API and scroll-to-reader. Three companion blocks: `dp/subscription-cta`, `dp/eedition-locked-preview`, `dp/eedition-ownership-badge`.