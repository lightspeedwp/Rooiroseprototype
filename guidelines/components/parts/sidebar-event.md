# Sidebar Event

**Last updated**: 2026-02-27
**Version**: 1.0
**Category**: Part
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/sidebar-event.html`
**Pattern**: `die-papier/hidden-sidebar-event` in `/patterns/hidden-sidebar-event.php`

---

## 1. Purpose

Event-specific sidebar variant used on `single-dp_event.html` and `taxonomy-dp_event_category.html` templates. Replaces the default sidebar with event-relevant widgets.

## 2. Visual Structure

```
┌─ Sidebar wrapper (.dp-sidebar.dp-sidebar-event)
│  ├─ Location widget (is-style-card)
│  │  ├─ Heading H3 "Ligging"
│  │  └─ Paragraph (map placeholder)
│  ├─ Submit Event CTA (is-style-card, bg: base-2)
│  │  ├─ Heading H3 "Dien jou gebeurtenis in"
│  │  ├─ Paragraph
│  │  └─ Button (outline) → /gebeure/dien-in
│  ├─ Upcoming Events (.dp-sidebar-section)
│  │  ├─ Heading H3 "Komende Gebeure"
│  │  └─ Query Loop (3 dp_event posts, AQL meta ordering by event_date ASC)
│  │     └─ Event card (is-style-card)
│  │        ├─ Post title link
│  │        └─ card-event-meta pattern
│  ├─ Newsletter CTA (pattern: section-newsletter-cta → gravityforms/form)
│  └─ Ad Slot MREC (Advanced Ads: [advanced_ads placement="sidebar-event-mrec"])
```

## 3. Deprecated Block Replacements

| Old Block | Replacement | Status |
|:----------|:-----------|:-------|
| `dp/newsletter-cta` | `gravityforms/form` via pattern `section-newsletter-cta` | ✅ Done |
| `dp/ad-mrec` | `[advanced_ads placement="sidebar-event-mrec"]` shortcode | ✅ Done |

## 4. Cross-References

- [Pattern: hidden-sidebar-event](../patterns/cards-and-utilities.md) — Full composition
- [Template: single-dp_event](../templates/single-dp-event.md) — Uses this sidebar
- [AQL Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) — Event ordering