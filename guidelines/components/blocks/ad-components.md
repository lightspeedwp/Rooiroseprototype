# Ad Components

**Last updated**: 2026-03-03
**Category**: Ads (WordPress)
**WordPress target**: Advanced Ads plugin — all ad placements

---

## 1. Purpose

Ad slot system for Google Ad Manager (GAM) integration. In the WordPress theme, all ad placements are managed by the **Advanced Ads** plugin (replaces the deprecated `dp/ad-mrec` and `dp/sticky-footer` custom blocks).

## 2. WordPress Implementation

All ad slots use Advanced Ads shortcode blocks:

```html
<!-- wp:shortcode -->
[advanced_ads placement="placement-name"]
<!-- /wp:shortcode -->
```

## 3. Named Placements

| Placement | Size | Location | GAM Ad Unit |
|:----------|:-----|:---------|:------------|
| `dp-header-leaderboard` | 728×90 | Header, below navigation | `GAM: DP_Header` (309952) |
| `dp-home-sidebar-top` | 300×250 | Homepage sidebar, top position | `GAM: DP_Sidebar_1` (309954) |
| `dp-home-sidebar-middle` | 300×250 | Homepage sidebar, middle position | `GAM: DP_Sidebar_1` (309954) |
| `dp-home-sidebar-bottom` | 300×250 | Homepage sidebar, bottom position | `GAM: DP_Sidebar_2` (309955) |
| `dp-mid-leaderboard-1` | 728×90 | Homepage, between content sections | `GAM: DP_Header` (309952) |
| `dp-mid-leaderboard-2` | 728×90 | Homepage, between content sections | `GAM: DP_Header` (309952) |
| `dp-mid-leaderboard-3` | 728×90 | Homepage, between content sections | `GAM: DP_Header` (309952) |
| `dp-sidebar-mrec` | 300×250 | Default sidebar, top position | `GAM: DP_Sidebar_1` (309954) |
| `dp-sidebar-hpage` | 300×600 | Default sidebar, desktop only | `GAM: DP_Sidebar_1` (309954) |
| `dp-sidebar-event-mrec` | 300×250 | Event sidebar | `GAM: DP_Sidebar_1` (309954) |
| `dp-sidebar-multimedia-mrec` | 300×250 | Multimedia sidebar | `GAM: DP_Sidebar_1` (309954) |
| `dp-eedition-archive-leaderboard` | 728×90 | E-Editions archive | `GAM: DP_Header` (309952) |

### 3.1 Plugin-Managed Placements (No theme block needed)

These placements are configured entirely in the Advanced Ads plugin and auto-inject into pages:

| Placement | GAM Ad Unit | Type |
|:----------|:------------|:-----|
| Sticky Footer (mobile) | `GAM: DP_Sticky_Footer` (309956) | Sticky (Pro) — mobile <768px |
| Post In Content | `GAM: DP_Sticky_Footer` (309956) | Content injection — after paragraph 3 |
| Pop-up Ad | `GAM: DP_Popup` (309953) | Pop-up (Pro) — 1×/session |
| Left Wallpaper | `GAM: DP-L` (309964) | Background (Pro) — desktop >1280px |
| Right Wallpaper | `GAM: DP-R` (309965) | Background (Pro) — desktop >1280px |

## 4. React Prototype Components (Historical)

The React codebase contains 11 ad placeholder components in `/src/app/components/ads/` that render grey boxes. These are prototype-only and do not map to WordPress blocks.

## 5. Cross-References

- [Advanced Ads Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md) — Full placement spec
- [Deprecated: dp/ad-mrec](ad-mrec.md) — Old custom block (deleted)
- [Deprecated: dp/sticky-footer](sticky-footer.md) — Old custom block (deleted)