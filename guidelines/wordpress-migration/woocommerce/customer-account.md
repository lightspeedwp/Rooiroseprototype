# WooCommerce Customer Account

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## My Account Pattern (`woo-my-account.php`)

**Slug**: `die-papier/woo-my-account`
**Category**: `die-papier-woocommerce`
**Used in**: `page-my-account.html`
**Template Types**: `page-my-account`
**Inserter**: `false`

Full My Account page layout (pattern-first, includes header/footer) with:
- Page header with breadcrumbs
- `woocommerce/store-notices` — session messages
- `wp:post-content` — renders WooCommerce My Account dashboard (tabs: Dashboard, Orders, Subscriptions, Account Details, Logout)
- Afrikaans heading: "My Rekening"

---

## Customer Account Block

### Block Attributes

```json
{
  "displayStyle": "link_only",
  "iconStyle": "line",
  "iconClass": "wc-block-customer-account__account-icon"
}
```

**Die Papier Settings**:
- `displayStyle`: `"link_only"` (text link, no icon in header)
- Note: This block is used in `page-my-account.html` template, NOT in header

---

## My Account Tabs (Afrikaans)

| Tab | Label |
|:----|:------|
| Dashboard | Dashboard |
| Orders | Bestellings |
| Subscriptions | Intekeninge |
| Account Details | Rekeningbesonderhede |
| Logout | Teken uit |

---

## Related Files

- `/patterns/woocommerce/woo-my-account.php`
- `/templates/page-my-account.html`

---

**End of Customer Account Guide**
