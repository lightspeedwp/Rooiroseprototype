# Advanced Ads Integration Guide

**Last updated**: 2026-03-03
**Version**: 4.1
**Version at launch**: 1.52.1
**Template**: `/guidelines/_templates/plugin-guideline-template.md`
**Source**: `/src/imports/advanced-ads-strategy.md` (ad strategy answers)
**Audit Report**: `/reports/audit-advanced-ads-comprehensive-2026-03-03.md`
**Task List**: `/tasks/advanced-ads-coverage-tasks.md`

---

## 1. Standard Ad Inventory

Die Papier uses the following ad formats across the site. All formats are served via Google Ad Manager (GAM) through the Advanced Ads plugin.

| Format | Dimensions | Usage | Device | Theme Block Required |
|:-------|:-----------|:------|:-------|:--------------------:|
| Leaderboard | 728×90 | Header below nav, mid-content between sections, below archive query loops | Desktop | ✅ `advads/gblock` |
| Billboard | 970×250 | Header only (served via same `dp-header-leaderboard` placement as Leaderboard — GAM size mapping rotates between 728×90 and 970×250 based on viewport). No separate theme block needed. | Desktop | ✅ Same block as Leaderboard |
| MREC | 300×250 | Sidebar top, in-content, in-feed archives | All | ✅ `advads/gblock` |
| Half-Page | 300×600 | Sidebar bottom (desktop only) | Desktop | ✅ `advads/gblock` |
| Mobile Banner | 320×50 | Sticky footer bar | Mobile only | ❌ Advanced Ads Pro auto-inject |
| Popup | 300×250 | Interstitial overlay | Desktop | ❌ Advanced Ads Pro auto-inject |
| Wallpaper/Takeover | Variable | Background rails left (`DP-LH`) + right (`DP-RH`) | Desktop >1280px | ❌ Advanced Ads Pro background ad |

**Key principle**: Only Leaderboard/Billboard, MREC, and Half-Page formats require `advads/gblock` blocks in theme patterns/templates. Mobile sticky footer, popup, in-article content injection, and wallpaper/takeover are all managed by Advanced Ads Pro placement types and inject automatically based on display conditions — no theme code needed.

---

## 2. Page-Level Ad Placement Strategy

### 2.1 Revenue-Priority Pages (MUST have ads)

| Page Type | Header Leaderboard | In-Feed / In-Content | Below Query Loop | Sidebar | Sticky Footer (mobile) |
|:----------|:------------------:|:--------------------:|:----------------:|:-------:|:---------------------:|
| Homepage | ✅ (header part) | ✅ 3 mid-content leaderboards | — | ✅ 3 MRECs | ✅ (auto-inject) |
| Single Article | ✅ (header part) | ✅ After para 3 + every 3 paras (auto-inject) | — | ✅ MREC + Half-Page | ✅ (auto-inject) |
| Category Archives (5×) | ✅ (header part) | ✅ `dp-archive-in-feed` after 4th card | ✅ `dp-archive-footer-leaderboard` | ✅ (sidebar part) | ✅ (auto-inject) |
| Tag Archives | ✅ (header part) | ✅ `dp-archive-in-feed` after 4th card | ✅ `dp-archive-footer-leaderboard` | ✅ (sidebar part) | ✅ (auto-inject) |
| E-Editions Archive | ✅ (header part) | ✅ `dp-archive-in-feed` after 4th card | ✅ `dp-eedition-archive-leaderboard` | ✅ `dp-sidebar-eedition-promo-mrec` | ✅ (auto-inject) |
| CPT Archives (Events, Multimedia, Obituaries) | ✅ (header part) | ✅ `dp-archive-in-feed` after 3rd card | ✅ `dp-archive-footer-leaderboard` | ✅ (sidebar part) | ✅ (auto-inject) |
| Search Results | ✅ (header part) | ✅ `dp-archive-in-feed` | ✅ `dp-archive-footer-leaderboard` | ✅ `dp-sidebar-mrec` | ✅ (auto-inject) |
| Single Event | ✅ (header part) | ✅ In-content MREC | — | ✅ `dp-sidebar-event-mrec` | ✅ (auto-inject) |
| Single Multimedia | ✅ (header part) | ✅ Below gallery | — | ✅ (sidebar part) | ✅ (auto-inject) |
| Competitions | ✅ (header part) | — | — | ✅ (sidebar part) | ✅ (auto-inject) |

### 2.2 Single Post/Article Ad Strategy

For single blog posts/articles, ads appear at:

1. **Above content before title**: Header leaderboard (shared via `header.php` template part)
2. **In-content**: After paragraph 3, then every 3 paragraphs — handled by Advanced Ads Pro content injection (`dp-post-content-1`, `dp-post-content-2`), NOT theme blocks
3. **End of article**: `dp-post-footer-mrec` in `section-related-articles.php` pattern (before comments/related posts)
4. **Sidebar**: Top position = 300×600 Half-Page (`dp-sidebar-hpage`), Bottom position = 300×250 MREC (`dp-sidebar-mrec`)

### 2.3 Archive Pages (Categories, Tags, Search)

All archive pages get:

1. **Header leaderboard**: Shared via `header.php` template part (present on all pages)
2. **Below query loop**: `dp-archive-footer-leaderboard` after pagination
3. **Sidebar ads**: Shared via `sidebar.html` template part (MREC + Half-Page)
4. **In-feed ad**: `dp-archive-in-feed` after 3rd or 4th card (split query loop)

---

## 3. Template Exclusions (No Ads)

The following templates/pages must NEVER show ads:

| Template | Reason |
|:---------|:-------|
| `page-checkout.html` | Distraction-free checkout funnel |
| `page-cart.html` | Commerce funnel — no distractions |
| `page-my-account.html` | User account dashboard |
| `404.html` | Error page — no revenue value |
| `coming-soon.html` / `page-coming-soon.html` | Pre-launch page |
| My E-Uitgawes (`/my-e-uitgawes`) | Subscriber e-edition dashboard — ad-free experience |
| Login/Registration pages | Authentication flow |
| Search results (no results state) | Empty search — no value to advertisers |

**Implementation**: These exclusions are enforced at TWO levels:
1. **Theme level**: No `advads/gblock` blocks in these templates/patterns
2. **Plugin level**: Advanced Ads display conditions exclude these URLs/templates

---

## 4. Member/Subscriber Ad Suppression

### 4.1 General Rule

**Do NOT hide ads for members.** Ads remain visible for all users on all pages EXCEPT:
- The **My E-Uitgawes** page (subscriber e-edition dashboard) — ad-free

### 4.2 Always Visible (Even for Members)

- Sponsored content / native ads
- Sidebar sponsor logos (these are content from the Sponsor CPT, not Advanced Ads blocks)
- All standard display ads on article, category, archive pages

### 4.3 Implementation

The only ad suppression needed is on the My E-Uitgawes page:

1. **Display Condition**: Exclude individual page `/my-e-uitgawes`
2. **OR Template Condition**: Exclude the My E-Uitgawes template
3. Apply this condition to ALL placements (header leaderboard, sidebar, sticky footer, popup, wallpaper)

---

## 5. Takeover/Wallpaper Strategy

### 5.1 Desktop Wallpaper Rails

**Active placements**: `DP-LH` (left rail) + `DP-RH` (right rail)
**Device**: Desktop only (viewport >1280px)
**Pages**: Homepage, category archives (NOT single posts — too intrusive)

The wallpaper appears as clickable background images in the gutters outside the content container. Users click the background to visit the advertiser's page.

### 5.2 Configuration

- **GAM Ad Units**: `GAM: DP-L` (309964) + `GAM: DP-R` (309965)
- **Frequency**: Max 1 time per day per user (avoid ad fatigue)
- **Content Margin**: 200px between content and background on left/right
- **Z-index**: -1 (background layer)
- See Section 6.3 for full Advanced Ads Pro configuration steps

---

## 6. Sticky Placement Configuration (Advanced Ads Pro)

**Requirement**: Advanced Ads Pro license (paid add-on)

Advanced Ads Pro enables **sticky placements** that remain visible as users scroll. Die Papier uses 3 sticky placements:

### 6.1 Sidebar Sticky MREC

**Placement**: `dp-sidebar-sticky`  
**Format**: 300×250 (MREC)  
**Behavior**: Sticks to top of viewport when user scrolls past sidebar  
**Device**: Desktop only (>768px)

**Configuration Steps**:

1. Go to **Advanced Ads → Placements** → Click **New Placement**
2. **Name**: `dp-sidebar-sticky`
3. **Choose a placement type**: Select **Sticky Ad (Pro)**
4. **Choose an ad or group**: Select your sidebar MREC ad/group
5. **Position Settings**:
   - **Position**: Top
   - **Margin Top**: 20px (spacing from top of viewport)
   - **Margin Bottom**: 0px
   - **Close Button**: ❌ No (not needed for sidebar ads)
6. **Display Conditions**:
   - **Device**: Desktop only (min-width: 769px)
   - **Post Type**: Posts, Pages (exclude WooCommerce pages if needed)
   - **User Role**: NOT subscriber (if hiding ads for members)
7. **Advanced Settings**:
   - **Parent Container**: `.sidebar` or `.wp-block-group.sidebar` (target sidebar element)
   - **Scrolling Behavior**: Stick when parent top reaches viewport top
   - **Stop Sticky**: When parent bottom is reached
8. Click **Save Placement**

**CSS Override** (if needed):
```css
/* Ensure sticky ad doesn't overlap header */
.advads-sticky-top {
    top: 80px !important; /* Header height + spacing */
    z-index: 100;
}

/* Prevent sticky ad from covering sidebar content */
.sidebar .advads-sticky {
    position: sticky;
    position: -webkit-sticky;
}
```

**Testing**:
- Load article page with sidebar
- Scroll down → Sidebar MREC should stick to top of viewport
- Continue scrolling to article end → Sticky should stop at sidebar bottom (not float beyond sidebar)

---

### 6.2 Mobile Sticky Footer Bar

**Placement**: `dp-sticky-mobile`  
**Format**: 320×50 (Mobile Banner)  
**Behavior**: Sticky footer bar, appears after 3 seconds, dismissible  
**Device**: Mobile only (<768px)

**Configuration Steps**:

1. Go to **Advanced Ads → Placements** → Click **New Placement**
2. **Name**: `dp-sticky-mobile`
3. **Choose a placement type**: Select **Sticky Ad (Pro)**
4. **Choose an ad or group**: Select your mobile banner ad/group
5. **Position Settings**:
   - **Position**: Bottom
   - **Margin Top**: 0px
   - **Margin Bottom**: 0px
   - **Close Button**: ✅ Yes (allow users to dismiss)
   - **Close Button Position**: Top Right
   - **Close Button Text**: `×` (Unicode × symbol)
6. **Display Conditions**:
   - **Device**: Mobile only (max-width: 768px)
   - **Post Type**: All (or exclude specific post types)
   - **User Role**: NOT subscriber
7. **Advanced Settings**:
   - **Delay Before Display**: 3000ms (3 seconds)
   - **Auto-hide after**: Never (stays until user closes)
   - **Animation**: Slide up (smooth entry animation)
   - **Background Overlay**: ❌ No (footer bar only, no full-page overlay)
8. Click **Save Placement**

**CSS Override** (if needed):
```css
/* Ensure sticky footer doesn't overlap page content */
body.has-sticky-footer {
    padding-bottom: 60px; /* 50px ad height + 10px spacing */
}

.advads-sticky-bottom {
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    background: #FFFFFF;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

/* Close button styling */
.advads-close {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.5);
    color: #FFFFFF;
    border-radius: 50%;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
}

.advads-close:hover {
    background: rgba(0, 0, 0, 0.7);
}
```

**Testing**:
- Load any page on mobile device or browser at <768px width
- Wait 3 seconds → Sticky footer bar should slide up from bottom
- Click × close button → Footer bar should disappear
- Reload page → Footer bar should reappear after 3 seconds (unless user closed it — then it should stay closed per session)

---

### 6.3 Takeover/Background Ad

**Placement**: `dp-takeover`  
**Format**: Full viewport background + click area  
**Behavior**: Background image/click, desktop only  
**Device**: Desktop only (>1280px)

**Configuration Steps**:

1. Go to **Advanced Ads → Placements** → Click **New Placement**
2. **Name**: `dp-takeover`
3. **Choose a placement type**: Select **Background Ad (Pro)**
4. **Choose an ad or group**: Select your takeover/skin ad creative
5. **Position Settings**:
   - **Background Position**: Center
   - **Background Repeat**: No-repeat
   - **Background Size**: Auto (or Cover for full background)
   - **Click Action**: Open advertiser URL in new tab
   - **Content Margin**: 200px (space between content and background on left/right)
6. **Display Conditions**:
   - **Device**: Desktop only (min-width: 1281px)
   - **Post Type**: Homepage, Category Archives (NOT single posts — too intrusive)
   - **User Role**: NOT subscriber
   - **Frequency**: Max 1 time per user per day (avoid ad fatigue)
7. **Advanced Settings**:
   - **Z-index**: -1 (background layer, behind content)
   - **Content Container**: `.site-content` or `main` (content area to margin)
   - **Background Color**: `#FFFFFF` or match ad creative
8. Click **Save Placement**

**CSS Override** (if needed):
```css
/* Ensure content is centered with margins for takeover */
body.has-takeover .site-content {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* Takeover background */
.advads-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-attachment: fixed;
}

/* Click area (if using clickable background) */
.advads-background-click {
    cursor: pointer;
}
```

**Testing**:
- Load homepage on desktop at >1280px width
- Background ad should appear behind content
- Content should be centered with margins on left/right
- Click background → Opens advertiser URL in new tab
- Verify frequency capping: Close browser, reopen → Takeover should NOT appear (already shown today)

---

### 6.4 Sticky Placement Best Practices

**Delay Before Display**:
- Sidebar sticky: No delay (appears immediately on scroll)
- Mobile footer: 3-5 seconds (avoid intrusive immediate display)
- Takeover: No delay (background loads with page)

**Close Button**:
- Sidebar sticky: ❌ No (not intrusive, no close needed)
- Mobile footer: ✅ Yes (allows users to dismiss)
- Takeover: ❌ No (background layer, not intrusive)

**Frequency Capping** (Advanced Ads Pro → Ad → Display Conditions → Visitor):
- Sidebar sticky: No cap (useful utility, always visible)
- Mobile footer: Max 3 times per session (avoid annoyance)
- Takeover: Max 1 time per day per user (high-impact, low-frequency)

**Accessibility**:
- All sticky ads must have `role="complementary"` and `aria-label="Advertisement"`
- Close buttons must have `aria-label="Close advertisement"`
- Sticky ads must not cover essential content (navigation, CTAs, form fields)
- Users must be able to close sticky ads without requiring mouse precision (<44px tap target for close button)

**Performance**:
- Enable **Lazy Loading** in Advanced Ads Pro → Settings → Performance
- Enable **Cache Busting** if ads are not rotating correctly with page cache
- Use **Async Loading** for ad scripts (enabled by default in Advanced Ads Pro)

---

## 7. Display Condition Examples

Advanced Ads provides granular display conditions. Here are Die Papier-specific examples:

### 7.1 Hide Ads for Subscribers

**Use Case**: Hide all ads for users with active E-Edition membership

**Method 1: PHP Filter** (see Section 5 for code)

**Method 2: Built-in Display Condition**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Visitor Conditions → PHP Function**
3. Function name: `dp_is_active_subscriber`
4. Condition: Function returns `false` (show ad only if user is NOT subscriber)

**Method 3: User Role** (if WC Memberships creates custom role):
1. Edit ad → **Display Conditions** tab
2. Add condition: **User → User Role**
3. Select: NOT `subscriber`, NOT `customer`, NOT `member`

---

### 7.2 Category-Specific Ads

**Use Case**: Show Sport sponsor ads only on Sport category pages

**Configuration**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Post → Categories**
3. Select: `sport` category
4. Save ad

**Alternative**: Use ad groups with weighted rotation
- Create ad group "Sport Ads"
- Add multiple sport sponsor ads to group (weighted random)
- Assign group to placement with category condition

---

### 7.3 Device-Specific Ads

**Use Case**: Show 300×600 half-page ad only on desktop

**Configuration**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Visitor Conditions → Device**
3. Select: **Desktop**
4. OR use **Browser Width**: Min-width `1024px`

**Use Case**: Show 320×50 mobile banner only on mobile

**Configuration**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Visitor Conditions → Device**
3. Select: **Mobile**
4. OR use **Browser Width**: Max-width `768px`

---

### 7.4 Page Template Specific

**Use Case**: Show different ads on homepage vs article pages

**Homepage Ad**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Page → Is Homepage**
3. Select: ✅ Yes

**Article Page Ad**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Post Type**
3. Select: `post` (articles)
4. Add condition: **Page Template** (if using custom single-post template)
5. Select: `single.php` or `single.html`

---

### 7.5 Exclude WooCommerce Pages

**Use Case**: Hide ads on cart, checkout, my-account pages (distraction-free)

**Configuration**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Post → Individual Post/Page**
3. Select: Exclude `/winkelmandjie` (cart), `/betaal` (checkout), `/my-rekening` (my-account)

**Alternative**: Use post type condition
1. Add condition: **Post Type**
2. Select: Exclude `product`, `shop_order`, `shop_coupon`

---

### 7.6 Time-Based Display

**Use Case**: Show ads only during business hours (8am-6pm)

**Configuration** (requires custom PHP function):
```php
// Add to functions.php
function dp_is_business_hours() {
    $hour = (int) current_time( 'H' ); // Get current hour in site timezone
    return ( $hour >= 8 && $hour < 18 ); // 8am - 6pm
}
```

Then:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Visitor Conditions → PHP Function**
3. Function name: `dp_is_business_hours`
4. Condition: Function returns `true`

---

### 7.7 Logged-In vs Anonymous Users

**Use Case**: Show different ads for logged-in users (e.g., subscription upsell)

**Configuration**:
1. Edit ad → **Display Conditions** tab
2. Add condition: **Visitor Conditions → User State**
3. Select: **Logged In** or **Not Logged In**

---

## 8. Migration Notes

### 8.1 Blocks to Remove from Plugin

- Remove any blocks that are no longer used or have been replaced by new placements.
- Ensure that all ad placements are correctly configured in the new environment.

---

## 9. CSS Considerations

Advanced Ads wraps each ad in a `<div>` with class `advads-{prefix}{id}` by default. For section style compatibility:

- The wrapper div inherits section style colours automatically
- For dark-background sections, ensure ad container has no conflicting background
- The `advads-` prefix can be customised in Advanced Ads → Settings → General
- Use the wrapper class to add spacing/margins if needed

No special section style block overrides are needed for Advanced Ads — the ad content itself (images, scripts) is opaque to the section style system.

---

## 10. Canonical GAM Ad Slot Inventory (Source of Truth)

These are the **production Google Ad Manager (GAM) ad units** configured in the Advanced Ads plugin. All Advanced Ads placements must reference one of these ad slots.

### 10.1 GAM Ad Units

| GAM Ad Name | Ad ID | Format | Description |
|:------------|:------|:-------|:------------|
| `GAM: DP_Header` | `309952` | 728×90 (Leaderboard) | Header banner below navigation. Primary desktop ad unit. |
| `GAM: DP_Sidebar_1` | `309954` | 300×250 (MREC) | Sidebar top position. Used for article/archive/category sidebars. |
| `GAM: DP_Sidebar_2` | `309955` | 300×250 (MREC) | Sidebar bottom position. Secondary sidebar ad unit. |
| `GAM: DP_Sticky_Footer` | `309956` | 320×50 (Mobile Banner) | Sticky footer bar (mobile) + in-content injection. Multi-placement ad. |
| `GAM: DP_Popup` | `309953` | Variable (Interstitial) | Pop-up/overlay ad. Frequency-capped, shown once per session. |
| `GAM: DP-L` | `309964` | Variable (Wallpaper) | Left wallpaper/skin background. Desktop only (>1280px). |
| `GAM: DP-R` | `309965` | Variable (Wallpaper) | Right wallpaper/skin background. Desktop only (>1280px). |

### 10.2 Advanced Ads Placements

Each GAM ad unit is assigned to one or more **Advanced Ads placements** that control where and how the ad appears:

| GAM Ad Unit | Advanced Ads Placement(s) | Placement Type |
|:------------|:--------------------------|:---------------|
| `GAM: DP_Header` (309952) | `Header` | Manual (header pattern) |
| `GAM: DP_Sidebar_1` (309954) | `Posts Category Ad`, `Side bar top` | Manual (sidebar patterns) |
| `GAM: DP_Sidebar_2` (309955) | `Sidebar Bottom` | Manual (sidebar patterns) |
| `GAM: DP_Sticky_Footer` (309956) | `Footer` (sticky mobile), `Post In Content` (auto-inject) | Sticky (Pro) + Content injection |
| `GAM: DP_Popup` (309953) | `Pop-up Ad` | Pop-up (Pro) |
| `GAM: DP-L` (309964) | `Left Wallpaper` | Background (Pro) |
| `GAM: DP-R` (309965) | `Right Wallpaper` | Background (Pro) |

---

## 11. Theme Placement → GAM Ad Mapping

Maps the `itemID` values used in `advads/gblock` blocks in the WordPress theme to the canonical GAM ad units.

### 11.1 Current Theme Placements (12 active)

| Theme `itemID` | File | GAM Ad Unit | Notes |
|:---------------|:-----|:------------|:------|
| `dp-header-leaderboard` | `patterns/header/header.php` | `GAM: DP_Header` (309952) | ✅ Primary header leaderboard |
| `home-sidebar-top` | `parts/sidebar-home.html` | `GAM: DP_Sidebar_1` (309954) | ⚠️ Missing `dp-` prefix |
| `home-sidebar-middle` | `parts/sidebar-home.html` | `GAM: DP_Sidebar_1` (309954) | ⚠️ Missing `dp-` prefix; rotates with top |
| `home-sidebar-bottom` | `parts/sidebar-home.html` | `GAM: DP_Sidebar_2` (309955) | ⚠️ Missing `dp-` prefix |
| `dp-mid-leaderboard-1` | `patterns/page/page-home.php` | `GAM: DP_Header` (309952) | ✅ Homepage mid-content leaderboard |
| `dp-mid-leaderboard-2` | `patterns/page/page-home.php` | `GAM: DP_Header` (309952) | ✅ Homepage mid-content leaderboard |
| `dp-mid-leaderboard-3` | `patterns/page/page-home.php` | `GAM: DP_Header` (309952) | ✅ Homepage mid-content leaderboard |
| `dp-sidebar-mrec` | `patterns/hidden/hidden-sidebar.php` | `GAM: DP_Sidebar_1` (309954) | ✅ Default sidebar MREC |
| `dp-sidebar-hpage` | `patterns/hidden/hidden-sidebar.php` | `GAM: DP_Sidebar_1` (309954) | ✅ Desktop-only half-page |
| `sidebar-event-mrec` | `patterns/hidden/hidden-sidebar-event.php` | `GAM: DP_Sidebar_1` (309954) | ⚠️ Missing `dp-` prefix |
| `multimedia-sidebar-mrec` | `patterns/sidebar/sidebar-multimedia.php` | `GAM: DP_Sidebar_1` (309954) | ⚠️ Missing `dp-` prefix |
| `dp-eedition-archive-leaderboard` | `patterns/archive/archive-eeditions.php` | `GAM: DP_Header` (309952) | ✅ E-Editions archive leaderboard |

### 11.2 Naming Convention Issues

**Current state**: Mixed naming — 8 placements use `dp-` prefix, 4 do not.

| Current Name | Proposed Standardized Name |
|:-------------|:---------------------------|
| `home-sidebar-top` | `dp-home-sidebar-top` |
| `home-sidebar-middle` | `dp-home-sidebar-middle` |
| `home-sidebar-bottom` | `dp-home-sidebar-bottom` |
| `sidebar-event-mrec` | `dp-sidebar-event-mrec` |
| `multimedia-sidebar-mrec` | `dp-sidebar-multimedia-mrec` |

**Standard**: All placement IDs MUST use the `dp-` prefix for namespacing. Format: `dp-{location}-{format}` or `dp-{location}-{position}`.

### 11.3 Placements Not Yet in Theme (from plugin config)

These placements exist in Advanced Ads but are NOT referenced in any theme file:

| Placement | GAM Ad Unit | Type | Implementation Needed |
|:----------|:------------|:-----|:----------------------|
| `Footer` (sticky) | `GAM: DP_Sticky_Footer` (309956) | Sticky (Pro) | Auto-inject — no theme block needed |
| `Post In Content` | `GAM: DP_Sticky_Footer` (309956) | Content injection | Auto-inject — no theme block needed |
| `Pop-up Ad` | `GAM: DP_Popup` (309953) | Pop-up (Pro) | Plugin-managed — no theme block needed |
| `Left Wallpaper` | `GAM: DP-L` (309964) | Background (Pro) | Plugin-managed — no theme block needed |
| `Right Wallpaper` | `GAM: DP-R` (309965) | Background (Pro) | Plugin-managed — no theme block needed |

> **Note**: These 5 placements are all managed by Advanced Ads Pro placement types (sticky, content injection, pop-up, background). They do not require `advads/gblock` blocks in theme files — they inject automatically based on display conditions configured in the plugin.

---

## 12. Implementation Plan

### Phase 1: Naming Standardization (P1)

Rename 4 non-prefixed placement IDs to use `dp-` prefix. This requires updating **both** the theme file AND the Advanced Ads placement configuration in WordPress admin.

**Theme files to update:**
1. `parts/sidebar-home.html` — 3 placements (`home-sidebar-top` → `dp-home-sidebar-top`, etc.)
2. `patterns/hidden/hidden-sidebar-event.php` — 1 placement (`sidebar-event-mrec` → `dp-sidebar-event-mrec`)
3. `patterns/sidebar/sidebar-multimedia.php` — 1 placement (`multimedia-sidebar-mrec` → `dp-sidebar-multimedia-mrec`)

**WordPress admin:**
- Rename each corresponding placement in **Advanced Ads → Placements** to match the new `dp-` prefixed slug.

### Phase 2: Plugin Configuration (P1)

Configure the 5 plugin-managed placements in Advanced Ads Pro (no theme file changes needed):

1. **Sticky Footer** (`GAM: DP_Sticky_Footer`):
   - Position: Bottom
   - Device: Mobile only (<768px)
   - Delay: 3 seconds
   - Dismissible: Yes
   - See Section 6.2 for full configuration

2. **Post In Content** (`GAM: DP_Sticky_Footer`):
   - Type: Content injection
   - Position: After paragraph 3 (first injection)
   - Post types: `post` only
   - Device: All devices

3. **Pop-up Ad** (`GAM: DP_Popup`):
   - Type: Pop-up (Pro)
   - Frequency: Max 1 per session
   - Delay: 5 seconds after page load
   - Device: Desktop only (>1024px)
   - Exclude: WooCommerce pages, 404, search

4. **Wallpaper Left/Right** (`GAM: DP-L` + `GAM: DP-R`):
   - Type: Background Ad (Pro)
   - Device: Desktop only (>1280px)
   - Pages: Homepage, category archives
   - Frequency: Max 1 per day per user
   - See Section 6.3 for full configuration

### Phase 3: Missing Ad Slot Coverage (P2)

After running the 3-phase audit (see `/prompts/advanced-ads-audit-orchestrator.md`), implement any missing ad slots identified in:
- Single post templates (currently no ads — rely on auto-inject for in-content)
- Archive templates (may need in-feed ads)
- Additional sidebar patterns

### Phase 4: Subscriber Ad Suppression (P2)

Configure display conditions to hide ads for active E-Edition subscribers:
- See Section 7.1 for implementation options (PHP filter, display condition, or user role)
- Apply to all placements except wallpaper/takeover (which may have sponsor contracts)

---

## 13. Configuration Checklist (WordPress Admin)

Use this checklist when setting up Advanced Ads in the WordPress admin after theme deployment:

### 13.1 Create Ad Units

For each GAM ad in Section 10.1:
- [ ] **Advanced Ads → Ads → Add New**
- [ ] Name: Use the GAM name (e.g., `GAM: DP_Header`)
- [ ] Type: Google Ad Manager
- [ ] Ad Unit Path: `/309952/DP_Header` (use actual GAM network ID + ad unit path)
- [ ] Size: Match format from Section 10.1

### 13.2 Create Placements

For each placement in Section 11.1:
- [ ] **Advanced Ads → Placements → New Placement**
- [ ] Type: Manual (for `advads/gblock` items) or Sticky/Background/Content (for auto-inject)
- [ ] Name: Use the standardized `dp-` prefixed name
- [ ] Assign the correct ad unit from step 13.1

### 13.3 Display Conditions (All Placements)

- [ ] **User Role**: NOT `subscriber` / NOT `member` (if ad-free tier exists)
- [ ] **WooCommerce Exclusion**: Exclude cart (`/winkelmandjie`), checkout (`/betaal`), my-account (`/my-rekening`)
- [ ] **404 Exclusion**: No ads on 404 page
- [ ] **Device Targeting**: Desktop-only for wallpaper/takeover; mobile-only for sticky footer

### 13.4 Advanced Ads Pro Features

- [ ] **Sticky Ads**: Configure sidebar sticky + mobile footer (Section 6)
- [ ] **Background Ads**: Configure wallpaper left/right (Section 6.3)
- [ ] **Pop-up Ads**: Configure pop-up with frequency cap (Section 12, Phase 2.3)
- [ ] **Content Injection**: Configure in-article ads after paragraph 3

---

## 14. Cross-References

- [Ad Components (Block Inventory)](/guidelines/components/blocks/ad-components.md) — Named placement reference
- [Block Mapping (Section 5.6)](/guidelines/wordpress-migration/block-mapping.md) — `advads/gblock` block attributes
- [Audit Orchestrator](/prompts/advanced-ads-audit-orchestrator.md) — 3-phase template/pattern/part coverage audit
- [WooCommerce Integration](/guidelines/wordpress-migration/third-party-plugins/woocommerce.md) — Ad exclusion on commerce pages

---

## 15. Post-Audit Implementation (2026-03-03)

Following the 3-phase audit, the following architectural and naming changes have been implemented in the Die Papier theme to ensure 100% coverage and naming consistency.

### 15.1 Standardized Placement IDs

All manual `advads/gblock` items now use the `dp-` prefix. The following legacy IDs have been migrated:

| Previous ID | New Standardized ID | Location |
|:------------|:--------------------|:---------|
| `home-sidebar-top` | `dp-sidebar-home-top` | `/patterns/sidebar/sidebar-home.php` |
| `home-sidebar-middle` | `dp-sidebar-home-middle` | `/patterns/sidebar/sidebar-home.php` |
| `home-sidebar-bottom` | `dp-sidebar-home-bottom` | `/patterns/sidebar/sidebar-home.php` |
| `sidebar-event-mrec` | `dp-sidebar-event-mrec` | `/patterns/hidden/hidden-sidebar-event.php` |
| `multimedia-sidebar-mrec` | `dp-sidebar-multimedia-mrec` | `/patterns/sidebar/sidebar-multimedia.php` |

### 15.2 In-Feed Archive Ads

To optimize revenue on high-traffic archive pages, in-feed ad slots have been added after the first row of content (typically after 3 or 4 cards). For CPT archives (competitions, events, obituaries, multimedia, e-editions), this is implemented by splitting the query loop into two AQL blocks (Query 1: first row, no pagination; Query 2: remaining items with offset and pagination). For category and tag archives that use `inherit: true`, in-feed ads should be configured via Advanced Ads Pro's **Content Injection** placement type (inject after Nth item matching a CSS selector) — the theme does not split these queries.

**New Placement ID**: `dp-archive-in-feed`

**Split Query Implementation** (CPT archives):
- `archive-competitions.php` (after 3rd card)
- `archive-events.php` (after 3rd card)
- `archive-obituaries.php` (after 3rd card)
- `archive-multimedia.php` (after 3rd card)
- `archive-eeditions.php` (after 4th card)

**Content Injection Implementation** (category/tag archives — via Advanced Ads Pro plugin, no theme blocks):
- `archive-category-nuus.php`
- `archive-category-sake.php`
- `archive-category-leefstyl.php`
- `archive-category-dink.php`
- `archive-category-sport.php`
- `archive-category.php` (generic fallback)
- `archive-tag.php`

### 15.3 Specialized Sidebar Ads

New MREC slots have been added to category-specific sidebars:

| Placement ID | Pattern | Position |
|:-------------|:--------|:---------|
| `dp-sidebar-obituary-mrec` | `sidebar-obituary.php` | After recent obituaries |
| `dp-sidebar-newsletter-mrec` | `sidebar-newsletter-nuus.php` | Below newsletter form |
| `dp-sidebar-eedition-promo-mrec` | `sidebar-eedition-promo.php` | Below cover promo |
| `dp-sidebar-mrec` (extended) | `hidden-search-filters.php` | Below search filters |

### 15.4 Post-Footer Engagement Ads

An ad slot has been added after the "Related Articles" section on single post pages to capture bottom-of-page engagement.

**Placement ID**: `dp-post-footer-mrec`
**Pattern**: `section-related-articles.php`

### 15.5 In-Article Auto-Injection (Pro Feature)

While not hardcoded in the theme, Die Papier implements in-article ads via the Advanced Ads Pro "Content Injection" feature.

**Recommendation**: 
1. Configure a placement `dp-post-content-1` to inject after paragraph 3.
2. Configure a placement `dp-post-content-2` to inject after paragraph 7 (for long-form articles).
3. These placements do NOT require theme code as they are injected dynamically by the plugin.

### 15.6 Footer Leaderboard Ads

All archive pages now include a `dp-archive-footer-leaderboard` ad block after the query/pagination section, providing a high-visibility ad slot at the bottom of content listings.

**Placement ID**: `dp-archive-footer-leaderboard`

**Implementation Locations**:
- `archive-category-nuus.php` ✅
- `archive-category-sake.php` ✅
- `archive-category-leefstyl.php` ✅
- `archive-category-dink.php` ✅
- `archive-category-sport.php` ✅
- `archive-category.php` (generic) ✅
- `archive-tag.php` ✅
- `archive-events.php` ✅
- `archive-obituaries.php` ✅
- `archive-multimedia.php` ✅
- `archive-search.php` ✅
- `archive-competitions.php` ✅
- `archive-sponsors.php` ✅