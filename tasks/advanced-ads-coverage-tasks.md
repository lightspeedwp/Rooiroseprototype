# Advanced Ads Coverage Tasks

**Generated**: 2026-03-03
**Last updated**: 2026-03-04
**Source Report**: `/reports/audit-advanced-ads-comprehensive-2026-03-03.md`
**Guideline**: `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: ✅ **[ARCHIVED]** — 20/20 tasks complete (100%)

---

## P0 — Revenue-Critical Missing Ads (7 tasks)

### Category Archive Patterns (5 patterns)

Each pattern needs: (a) `dp-archive-in-feed` after 4th article (split query loop), (b) `dp-archive-footer-leaderboard` after query loop/pagination.

**Note**: Category/tag archives use `inherit: true` queries that cannot be split with AQL offsets. In-feed ads for these archives should use Advanced Ads Pro's **Content Injection** placement type instead of split query blocks. Footer leaderboards were added successfully.

- [x] **P0-1**: `archive-category-nuus.php` — ~~Add `dp-archive-in-feed`~~ (Content Injection — no theme block) + `dp-archive-footer-leaderboard` ✅ (added)
- [x] **P0-2**: `archive-category-sake.php` — ~~Add `dp-archive-in-feed`~~ (Content Injection) + `dp-archive-footer-leaderboard` ✅ + fixed double-escaped quotes
- [x] **P0-3**: `archive-category-leefstyl.php` — ~~Add `dp-archive-in-feed`~~ (Content Injection) + `dp-archive-footer-leaderboard` ✅
- [x] **P0-4**: `archive-category-dink.php` — ~~Add `dp-archive-in-feed`~~ (Content Injection) + `dp-archive-footer-leaderboard` ✅ + fixed double-escaped quotes
- [x] **P0-5**: `archive-category-sport.php` — ~~Add `dp-archive-in-feed`~~ (Content Injection) + `dp-archive-footer-leaderboard` ✅

### Generic & Tag Archives (2 patterns)

- [x] **P0-6**: `archive-category.php` (generic fallback) — Already had `dp-archive-footer-leaderboard` ✅. In-feed via Content Injection.
- [x] **P0-7**: `archive-tag.php` — Already had `dp-archive-footer-leaderboard` ✅. In-feed via Content Injection.

### Implementation Template

Each archive pattern should include ad blocks in this structure:
```html
<!-- After first 4 cards (split query loop — CPT archives only): -->
<!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

<!-- After query pagination: -->
<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->
```

---

## P1 — Secondary Page Missing Ads (5 tasks)

### Archive Footer Leaderboards

- [x] **P1-1**: `archive-events.php` — Added `dp-archive-footer-leaderboard` ✅
- [x] **P1-2**: `archive-obituaries.php` — Added `dp-archive-footer-leaderboard` ✅
- [x] **P1-3**: `archive-multimedia.php` — Added `dp-archive-footer-leaderboard` ✅
- [x] **P1-4**: `archive-search.php` — Added `dp-archive-footer-leaderboard` ✅ (hidden-search-filters already has sidebar MREC)

### Sidebar Ad Verification

- [x] **P1-5**: Verified `archive-competitions.php` — Full-width layout (no sidebar at template level). Template `archive-dp_competition.html` has no columns/sidebar. Added `dp-archive-footer-leaderboard` ✅ and fixed escaped quotes in heading and newsletter CTA pattern reference.

---

## P2 — Consistency & React Alignment (5 tasks)

- [x] **P2-1**: `archive-sponsors.php` — Added `dp-archive-footer-leaderboard` ✅
- [x] **P2-2**: Updated `injectArticleAds.tsx` — Changed injection from paragraphs 2 & 6 to every 3rd paragraph (3, 6, 9, …) matching user's strategy ✅
- [x] **P2-3**: Documented Billboard (970×250) format — Updated guideline Section 1 table with note that `dp-header-leaderboard` serves both 728×90 and 970×250 via GAM size mapping ✅
- [x] **P2-4**: Verified all 4 single CPT templates (`single-dp_event.html`, `single-dp_multimedia.html`, `single-dp_competition.html`, `single-dp_obituary.html`) reference sidebar template parts containing ad blocks (`dp-sidebar-mrec` + `dp-sidebar-hpage` or `dp-sidebar-event-mrec`) ✅
- [x] **P2-5**: Updated guideline Section 15.2 with 7 new category/tag archive patterns (Content Injection note) + added new Section 15.6 documenting all 13 footer leaderboard locations ✅

---

## P3 — React Prototype Consistency (3 tasks)

- [x] **P3-1**: Added `<StickyMobileFooter>` to 8 React pages: `Events.tsx`, `SingleEvent.tsx`, `EEditions.tsx`, `Obituaries.tsx`, `Multimedia.tsx`, `SingleMultimedia.tsx`, `Competitions.tsx`, `CompetitionSingle.tsx` ✅
- [x] **P3-2**: Added `<LeaderboardAd>` to `Competitions.tsx` and `CompetitionSingle.tsx` header area ✅
- [x] **P3-3**: Documented in guideline Section 15.2 that sponsor logos are content (Sponsor CPT), not ad blocks — no Advanced Ads action needed. Sponsor archive has footer leaderboard only. ✅

---

## Summary

| Priority | Count | Done | Description |
|:---------|:-----:|:----:|:------------|
| P0 | 7 | 7 | Revenue-critical missing ads (category + tag archives) |
| P1 | 5 | 5 | Secondary page missing footer leaderboards |
| P2 | 5 | 5 | Consistency, documentation, React alignment |
| P3 | 3 | 3 | React prototype visual consistency |
| **Total** | **20** | **20** | **100% COMPLETE** |