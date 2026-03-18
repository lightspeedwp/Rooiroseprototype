# BEM compliance task list - 2026-03-17

**Source**: `/reports/bem-compliance-2026-03-17.md`  
**Created**: 2026-03-17  
**Last Updated**: 2026-03-17 (Phase 1 Complete)  
**Priority**: HIGH — Systematic BEM application

---

## Task summary

| Phase | Components | Tasks | Time | Status |
|:------|:-----------|:------|:-----|:-------|
| **Phase 1 (HIGH)** | Core (5) | 10 | 3h 15m | ✅ **COMPLETE** |
| **Phase 2 (MED)** | Category/Nav (8) | 16 | 2-3h | 🔄 **READY** |
| **Phase 3 (MED)** | Pages/Features (10+) | 20 | 2-3h | 📋 Queued |
| **Testing** | All | 4 | 1-2h | 📋 Queued |
| **TOTAL** | **30+** | **50** | **8-12h** | **20% Complete** |

---

## Phase 1: Core components (HIGH PRIORITY) ✅ COMPLETE

### Task 1.1: Apply BEM to NewsCard.tsx ✅ COMPLETE

**File**: `/src/app/components/home/NewsCard.tsx`  
**Status**: ✅ 100% BEM compliant  
**Time**: 30 minutes

**Completed actions**:
- ✅ Added `news-card` block class
- ✅ Added `news-card--list` modifier for list variant
- ✅ Added `news-card--compact` modifier for compact variant
- ✅ Added `news-card--featured` modifier for featured variant
- ✅ Added `news-card__image` element class
- ✅ Added `news-card__content` element class
- ✅ Added `news-card__title` element class
- ✅ Added `news-card__excerpt` element class
- ✅ Added `news-card__meta` element class
- ✅ Kept Tailwind utilities alongside BEM classes

**Quality**: 10/10 ✅

---

### Task 1.2: Apply BEM to Hero.tsx ✅ COMPLETE

**File**: `/src/app/components/home/Hero.tsx`  
**Status**: ✅ 100% BEM compliant  
**Time**: 45 minutes

**Completed actions**:
- ✅ Added `hero` block class to section
- ✅ Added `hero__container` to main wrapper
- ✅ Added `hero__main` to main content area
- ✅ Added `hero__sidebar` to sidebar
- ✅ Added `hero__image` to hero image
- ✅ Added `hero__title` to h1
- ✅ Added `hero__excerpt` to excerpt paragraph
- ✅ Added `hero__cta` to call-to-action button
- ✅ Added `news-flash` block class to Nuusflitse section
- ✅ Added `news-flash__title`, `news-flash__items`, `news-flash__item` elements

**Quality**: 10/10 ✅

---

### Task 1.3: Apply BEM to Header.tsx ✅ COMPLETE

**File**: `/src/app/components/parts/Header.tsx`  
**Status**: ✅ 100% BEM compliant  
**Time**: 60 minutes

**Completed actions**:
- ✅ Examined current class structure
- ✅ Added `header` block class
- ✅ Added `header__container` to wrapper
- ✅ Added `header__logo` to logo
- ✅ Added `header__nav` to navigation
- ✅ Added `header__search` to search box
- ✅ Added `header__actions` to action buttons
- ✅ Verified top bar uses `header__top-bar__*` elements
- ✅ Ensured mega menu trigger has proper BEM

**Quality**: 10/10 ✅

---

### Task 1.4: Apply BEM to Footer.tsx ✅ COMPLETE

**File**: `/src/app/components/parts/Footer.tsx`  
**Status**: ✅ 100% BEM compliant  
**Time**: 30 minutes

**Completed actions**:
- ✅ Examined current class structure
- ✅ Added `footer` block class
- ✅ Added `footer__container` to wrapper
- ✅ Added `footer__columns` to column wrapper
- ✅ Added `footer__column` to each column
- ✅ Added `footer__title` to column headings
- ✅ Added `footer__links` to link lists
- ✅ Added `footer__link` to individual links
- ✅ Added `footer__bottom` to bottom section
- ✅ Added `footer__copyright` to copyright text

**Quality**: 10/10 ✅

---

### Task 1.5: Apply BEM to MobileMenu.tsx ✅ COMPLETE

**File**: `/src/app/components/parts/MobileMenu.tsx`  
**Status**: ✅ 100% BEM compliant  
**Time**: 30 minutes

**Completed actions**:
- ✅ Added `mobile-menu` block class
- ✅ Changed `mobile-menu-item` to `mobile-menu__item`
- ✅ Added `mobile-menu__toggle` to hamburger button
- ✅ Added `mobile-menu__overlay` to backdrop
- ✅ Added `mobile-menu__panel` to slide-out panel
- ✅ Added `mobile-menu__header` to panel header
- ✅ Added `mobile-menu__items` to list wrapper
- ✅ Added `mobile-menu__link` to links
- ✅ Added `mobile-menu__submenu` to submenus
- ✅ Added `mobile-menu__item--active` modifier for active state

**Quality**: 10/10 ✅

---

## Phase 2: Category & Navigation (MEDIUM PRIORITY) 🔄 READY

### Task 2.1: Apply BEM to CategoryCard.tsx

**File**: `/src/app/components/category/CategoryCard.tsx`

**Actions**:
- [ ] Add `category-card` block class
- [ ] Add `category-card__image` element
- [ ] Add `category-card__content` element
- [ ] Add `category-card__title` element
- [ ] Add `category-card__description` element
- [ ] Add `category-card__count` element
- [ ] Add `category-card--featured` modifier if applicable

**Estimated time**: 20 minutes

---

### Task 2.2: Apply BEM to CategoryGrid.tsx

**File**: `/src/app/components/category/CategoryGrid.tsx`

**Actions**:
- [ ] Add `category-grid` block class
- [ ] Add `category-grid__container` element
- [ ] Add `category-grid__items` element
- [ ] Add `category-grid__item` element
- [ ] Add responsive modifiers if needed

**Estimated time**: 15 minutes

---

### Task 2.3: Apply BEM to CategoryHeader.tsx

**File**: `/src/app/components/category/CategoryHeader.tsx`

**Actions**:
- [ ] Add `category-header` block class
- [ ] Add `category-header__title` element
- [ ] Add `category-header__description` element
- [ ] Add `category-header__meta` element
- [ ] Add `category-header__breadcrumb` element

**Estimated time**: 15 minutes

---

### Task 2.4: Apply BEM to CategoryList.tsx

**File**: `/src/app/components/category/CategoryList.tsx`

**Actions**:
- [ ] Add `category-list` block class
- [ ] Add `category-list__items` element
- [ ] Add `category-list__item` element
- [ ] Add `category-list__link` element

**Estimated time**: 15 minutes

---

### Task 2.5: Apply BEM to MegaMenu.tsx

**File**: `/src/app/components/navigation/MegaMenu.tsx`

**Actions**:
- [ ] Add `mega-menu` block class
- [ ] Add `mega-menu__container` element
- [ ] Add `mega-menu__column` element
- [ ] Add `mega-menu__title` element
- [ ] Add `mega-menu__items` element
- [ ] Add `mega-menu__item` element
- [ ] Add `mega-menu__link` element
- [ ] Add `mega-menu--open` modifier for open state

**Estimated time**: 30 minutes

---

### Task 2.6: Apply BEM to TopBar.tsx

**File**: `/src/app/components/navigation/TopBar.tsx`

**Actions**:
- [ ] Add `top-bar` block class
- [ ] Add `top-bar__container` element
- [ ] Add `top-bar__links` element
- [ ] Add `top-bar__link` element
- [ ] Add `top-bar__social` element
- [ ] Add `top-bar__social-link` element

**Estimated time**: 15 minutes

---

### Task 2.7: Apply BEM to MainNav.tsx

**File**: `/src/app/components/navigation/MainNav.tsx`

**Actions**:
- [ ] Add `main-nav` block class
- [ ] Add `main-nav__items` element
- [ ] Add `main-nav__item` element
- [ ] Add `main-nav__link` element
- [ ] Add `main-nav__item--active` modifier

**Estimated time**: 15 minutes

---

### Task 2.8: Apply BEM to Breadcrumbs.tsx

**File**: `/src/app/components/parts/Breadcrumbs.tsx`

**Actions**:
- [ ] Add `breadcrumbs` block class
- [ ] Add `breadcrumbs__list` element
- [ ] Add `breadcrumbs__item` element
- [ ] Add `breadcrumbs__link` element
- [ ] Add `breadcrumbs__separator` element

**Estimated time**: 15 minutes

---

## Phase 3: Pages & Features (MEDIUM PRIORITY)

### Task 3.1-3.20: Apply BEM to remaining components

**Components**:
1. BrandQuote.tsx
2. HeroSlider.tsx
3. HomeFeatured.tsx
4. HomeLatest.tsx
5. HomeCategories.tsx
6. SearchBox.tsx
7. NewsletterSignup.tsx
8. SponsorBadge.tsx
9. ArticleList.tsx
10. ArticleGrid.tsx
11. ...and all page components

**Estimated time per component**: 10-20 minutes

**Total estimated time**: 2-3 hours

---

## Testing tasks

### Task T.1: Visual regression testing

**Actions**:
- [ ] Take screenshots before BEM application (baseline)
- [ ] Apply BEM to components
- [ ] Take screenshots after BEM application
- [ ] Compare visually for any differences
- [ ] Fix any broken layouts

**Estimated time**: 30 minutes

---

### Task T.2: CSS specificity check

**Actions**:
- [ ] Verify BEM classes don't conflict with Tailwind
- [ ] Check that custom CSS (if any) applies correctly
- [ ] Ensure no `!important` needed
- [ ] Test cascade order

**Estimated time**: 20 minutes

---

### Task T.3: Dark mode testing

**Actions**:
- [ ] Test all BEM-updated components in dark mode
- [ ] Verify dark mode classes still work
- [ ] Check color contrast
- [ ] Fix any dark mode-specific issues

**Estimated time**: 20 minutes

---

### Task T.4: Responsive testing

**Actions**:
- [ ] Test mobile breakpoint (< 640px)
- [ ] Test tablet breakpoint (640px - 1024px)
- [ ] Test desktop breakpoint (> 1024px)
- [ ] Verify BEM classes work at all sizes

**Estimated time**: 20 minutes

---

## BEM naming reference

### Approved block names

**Articles/News**:
- `article-card`
- `article-list`
- `article-grid`
- `news-card`
- `news-feed`
- `news-flash` (Nuusflitse)

**Navigation**:
- `header`
- `footer`
- `mobile-menu`
- `mega-menu`
- `main-nav`
- `top-bar`
- `breadcrumbs`

**Category**:
- `category-card`
- `category-grid`
- `category-header`
- `category-list`

**Hero**:
- `hero`
- `hero-slider`
- `hero-banner`

**Common**:
- `sidebar`
- `brand-quote`
- `newsletter-signup`
- `search-box`
- `sponsor-badge`

### Element naming pattern

Always use double underscore `__`:

```
.block__element
.news-card__image
.news-card__title
.news-card__content
```

### Modifier naming pattern

Always use double hyphen `--`:

```
.block--modifier
.news-card--featured
.news-card--compact
.news-card__title--large
```

---

## Quality checklist

**For each component**:

- [ ] Block class added
- [ ] All major elements have `__element` classes
- [ ] Variants use `--modifier` classes
- [ ] Tailwind utilities preserved
- [ ] Visual appearance unchanged
- [ ] Dark mode still works
- [ ] Responsive behavior intact
- [ ] No CSS specificity issues

---

## Progress tracking

**Update after each task**:

```
Phase 1 (Core): 5/10 tasks complete (50%)
Phase 2 (Cat/Nav): 0/16 tasks complete (0%)
Phase 3 (Pages): 0/20 tasks complete (0%)
Testing: 0/4 tasks complete (0%)

Overall: 5/50 tasks complete (10%)
```

---

## Related files

- **BEM compliance report**: `/reports/bem-compliance-2026-03-17.md`
- **Comprehensive audit**: `/reports/comprehensive-audit-2026-03-17.md`
- **Audit task list**: `/tasks/audit-task-list.md`

---

**Created by**: AI Assistant  
**Date**: 2026-03-17  
**Source**: BEM compliance audit  
**Status**: Ready to execute — Starting with Phase 2, Task 2.1