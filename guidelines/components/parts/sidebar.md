# Sidebar

**Last updated**: 2026-02-27
**Version**: 1.0
**Category**: Part
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/sidebar.html`
**Pattern**: `die-papier/hidden-sidebar` in `/patterns/hidden-sidebar.php`

---

## 1. Purpose

Default sidebar template part used on article single pages, category archives, and general archive templates. Aggregates promotional widgets, ad slots, trending content, and sponsor branding into a vertical stack alongside the main content column.

## 2. Visual Structure

```
┌─ Sidebar wrapper (.dp-sidebar, blockGap: spacing|50)
│  ├─ E-Edition Promo (pattern: sidebar-eedition-promo)
│  ├─ Newsletter CTA (pattern: section-newsletter-cta → gravityforms/form)
│  ├─ Ad Slot MREC (Advanced Ads: [advanced_ads placement="sidebar-top-mrec"])
│  ├─ Competition Card (pattern: sidebar-competition-card)
│  ├─ Trending Articles (.dp-sidebar-section)
│  │  ├─ Heading H3 "Gewild"
│  │  └─ AQL Query Loop (5 posts, orderBy: comment_count, cached, no pagination)
│  │     └─ Post row (flex: thumbnail 80×60 + title link)
│  ├─ Sponsor Banner (block: dp/sponsor-banner)
│  └─ Ad Slot MREC (Advanced Ads: [advanced_ads placement="sidebar-bottom-mrec"])
```

## 3. Block Composition (Current)

```html
<!-- wp:group {"className":"dp-sidebar","style":{"spacing":{"blockGap":"var:preset|spacing|50"}}} -->
<div class="wp-block-group dp-sidebar">
    <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->
    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->
    <!-- wp:shortcode -->[advanced_ads placement="sidebar-top-mrec"]<!-- /wp:shortcode -->
    <!-- wp:pattern {"slug":"die-papier/sidebar-competition-card"} /-->
    <!-- wp:group {"className":"dp-sidebar-section"} -->
    <div class="wp-block-group dp-sidebar-section">
        <!-- wp:heading {"level":3,"fontSize":"medium"} --><h3>Gewild</h3><!-- /wp:heading -->
        <!-- wp:query {"query":{"perPage":5,"orderBy":"comment_count","order":"desc","namespace":"advanced-query-loop","disable_pagination":true,"enable_caching":true},"namespace":"advanced-query-loop"} -->
        <div class="wp-block-query">
            <!-- wp:post-template -->
                <!-- Thumbnail 80×60 + Title link row -->
            <!-- /wp:post-template -->
        </div>
        <!-- /wp:query -->
    </div>
    <!-- /wp:group -->
    <!-- wp:dp/sponsor-banner /-->
    <!-- wp:shortcode -->[advanced_ads placement="sidebar-bottom-mrec"]<!-- /wp:shortcode -->
</div>
<!-- /wp:group -->
```

## 4. Deprecated Block Replacements

| Old Block | Replacement | Status |
|:----------|:-----------|:-------|
| `dp/newsletter-cta` | `gravityforms/form` via pattern `section-newsletter-cta` | ✅ Done |
| `dp/ad-mrec` | `[advanced_ads placement="..."]` shortcode | ✅ Done |
| Trending `core/query` | AQL namespace + caching + no pagination | ✅ Done |

## 5. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 1024px` | Sidebar hidden — main content goes full width |
| `≥ 1024px` | Sidebar visible in 30% right column |

## 6. Cross-References

- [Pattern: hidden-sidebar](../patterns/cards-and-utilities.md) — Full composition
- [AQL Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) — Trending articles caching
- [Advanced Ads](/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md) — Ad placements