# Visual Consistency Improvements — Action Plan

**Date**: 2026-03-12  
**Based On**: Visual Consistency Audit Report  
**Total Tasks**: 3  
**Estimated Time**: 3.5 hours (all optional)  
**Priority**: Low — Enhancements, not critical issues

---

## 📋 **TASK LIST**

---

### **Task 1: Email Links Consistency** ⚠️

**Priority**: Low  
**Estimated Time**: 30 minutes  
**Status**: ⏳ Not Started

#### **Problem**

Some pages use old email addresses (`advertensies@diepapier.co.za`) instead of official rooi rose domain.

#### **Pages Affected**

- `/src/app/pages/Cart.tsx` (line 47)
- `/src/app/pages/Contact.tsx` (multiple references)
- Possibly other pages (needs full search)

#### **Solution**

1. **Create email constants file**:
   ```tsx
   // /src/data/contact.ts
   export const CONTACT_EMAILS = {
     general: 'kontak@rooirose.co.za',
     advertising: 'advertensies@rooirose.co.za',
     editorial: 'redaksie@rooirose.co.za',
     subscriptions: 'intekening@rooirose.co.za',
     support: 'ondersteuning@rooirose.co.za',
   };
   
   export const CONTACT_PHONES = {
     main: '+27 (0)21 123 4567',
     advertising: '+27 (0)21 123 4568',
     subscriptions: '+27 (0)21 123 4569',
   };
   
   export const CONTACT_SOCIAL = {
     facebook: 'https://www.facebook.com/rooirosemagazine',
     instagram: 'https://www.instagram.com/rooirosemagazine',
     twitter: 'https://twitter.com/rooirosemag',
   };
   ```

2. **Update Cart.tsx**:
   ```tsx
   // Line 47 (old):
   answer: "...kontak asseblief ons kliëntediens by <a href='mailto:advertensies@diepapier.co.za'..."
   
   // Line 47 (new):
   import { CONTACT_EMAILS } from '../data/contact';
   answer: `...kontak asseblief ons kliëntediens by <a href='mailto:${CONTACT_EMAILS.advertising}'...`
   ```

3. **Update Contact.tsx**: Import and use `CONTACT_EMAILS` throughout

4. **Search all files** for email references:
   ```bash
   grep -r "@diepapier.co.za" src/
   grep -r "mailto:" src/
   ```

5. **Update all occurrences** to use constants

#### **Verification**

- [ ] `CONTACT_EMAILS` constants file created
- [ ] Cart.tsx updated
- [ ] Contact.tsx updated
- [ ] All email links use constants
- [ ] No hardcoded emails remain

---

### **Task 2: Focus Ring Visibility Enhancement** ⚠️

**Priority**: Low (Nice to have)  
**Estimated Time**: 1 hour  
**Status**: ⏳ Not Started

#### **Problem**

Focus rings work correctly and are WCAG compliant, but could be more prominent for keyboard navigation users.

#### **Current Pattern**

```jsx
focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
```

#### **Enhanced Pattern**

```jsx
focus:outline-none 
focus-visible:ring-2 
focus-visible:ring-brand-red 
focus-visible:ring-offset-2
dark:focus-visible:ring-offset-background
```

**Benefits**:
- `focus-visible` only shows focus ring for keyboard navigation (not mouse clicks)
- Better user experience (no focus ring flash on click)
- Still WCAG AAA compliant

#### **Elements to Update**

1. **Buttons**: All primary, secondary, ghost buttons
2. **Links**: All interactive links (nav, article cards)
3. **Inputs**: All form inputs
4. **Pills**: Category filter pills
5. **Cards**: Clickable cards (competitions, products)

#### **Files to Update** (~20 files)

- `/src/app/components/ui/button.tsx`
- `/src/app/components/ui/input.tsx`
- `/src/app/components/common/ArticleLink.tsx`
- `/src/app/components/category/SubsectionFilter.tsx`
- All interactive components

#### **Implementation**

1. **Create focus utility class** in Tailwind config (optional):
   ```css
   /* /src/styles/utilities.css */
   .focus-brand {
     @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background;
   }
   ```

2. **OR update inline** on each element:
   ```jsx
   // Old
   <button className="... focus:outline-none focus:ring-2 focus:ring-brand-red">
   
   // New
   <button className="... focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background">
   ```

3. **Test keyboard navigation**:
   - Tab through all interactive elements
   - Verify focus ring appears on keyboard focus
   - Verify focus ring does NOT appear on mouse click
   - Verify dark mode focus ring offset works

#### **Verification**

- [ ] All buttons have enhanced focus rings
- [ ] All links have enhanced focus rings
- [ ] All inputs have enhanced focus rings
- [ ] All pills have enhanced focus rings
- [ ] Keyboard navigation tested (Tab key)
- [ ] Mouse interaction tested (no flash)
- [ ] Dark mode tested

---

### **Task 3: Loading States Consistency** ⚠️

**Priority**: Low (Enhancement)  
**Estimated Time**: 2-3 hours  
**Status**: ⏳ Not Started

#### **Problem**

Some pages have loading skeletons (Category, Homepage), others don't (Search, Tag Archive, Author Archive). Inconsistent loading UX.

#### **Pages WITHOUT Skeletons**

1. `/src/app/pages/SearchResults.tsx`
2. `/src/app/pages/TagArchive.tsx`
3. `/src/app/pages/AuthorArchive.tsx`
4. `/src/app/pages/TopicSingle.tsx`
5. `/src/app/pages/Multimedia.tsx`
6. `/src/app/pages/Events.tsx`

#### **Existing Skeletons** (Reference)

- `/src/app/components/common/Skeletons.tsx`
  - `CategoryGridSkeleton` — 3-column grid
  - `HeroArticleSkeleton` — Large featured article
  - `ArticleCardSkeleton` (needed) — Single card skeleton

#### **Solution**

1. **Create missing skeleton components**:

```tsx
// /src/app/components/common/Skeletons.tsx (add to existing file)

/** Article Card Skeleton — used in grids */
export const ArticleCardSkeleton = () => (
  <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-6 animate-pulse">
    <div className="aspect-[3/2] bg-gray-200 dark:bg-muted rounded-lg mb-4" />
    <div className="h-3 bg-gray-200 dark:bg-muted rounded w-20 mb-3" />
    <div className="h-6 bg-gray-200 dark:bg-muted rounded mb-2" />
    <div className="h-6 bg-gray-200 dark:bg-muted rounded w-3/4 mb-3" />
    <div className="h-4 bg-gray-200 dark:bg-muted rounded mb-2" />
    <div className="h-4 bg-gray-200 dark:bg-muted rounded w-5/6" />
  </div>
);

/** Search Results Skeleton — 1 column list */
export const SearchResultsSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-6 flex gap-6 animate-pulse">
        <div className="w-48 h-32 bg-gray-200 dark:bg-muted rounded-lg shrink-0" />
        <div className="flex-1">
          <div className="h-3 bg-gray-200 dark:bg-muted rounded w-24 mb-3" />
          <div className="h-6 bg-gray-200 dark:bg-muted rounded mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-muted rounded mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-muted rounded w-5/6 mb-3" />
          <div className="h-3 bg-gray-200 dark:bg-muted rounded w-32" />
        </div>
      </div>
    ))}
  </div>
);

/** Event Card Skeleton */
export const EventCardSkeleton = () => (
  <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-6 animate-pulse">
    <div className="flex gap-4 mb-4">
      <div className="w-16 h-16 bg-gray-200 dark:bg-muted rounded-lg shrink-0" />
      <div className="flex-1">
        <div className="h-6 bg-gray-200 dark:bg-muted rounded mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-muted rounded w-2/3" />
      </div>
    </div>
    <div className="h-4 bg-gray-200 dark:bg-muted rounded mb-2" />
    <div className="h-4 bg-gray-200 dark:bg-muted rounded w-5/6 mb-3" />
    <div className="h-3 bg-gray-200 dark:bg-muted rounded w-32" />
  </div>
);

/** Media Card Skeleton */
export const MediaCardSkeleton = () => (
  <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-200 dark:bg-muted" />
    <div className="p-6">
      <div className="h-6 bg-gray-200 dark:bg-muted rounded mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-muted rounded w-3/4 mb-3" />
      <div className="h-3 bg-gray-200 dark:bg-muted rounded w-32" />
    </div>
  </div>
);
```

2. **Add loading states to pages**:

**SearchResults.tsx**:
```tsx
import { SearchResultsSkeleton } from '../components/common/Skeletons';

// Inside component
const [isLoading, setIsLoading] = useState(false);

// In render
{isLoading ? (
  <SearchResultsSkeleton />
) : (
  // ... actual results
)}
```

**TagArchive.tsx**, **AuthorArchive.tsx**, **TopicSingle.tsx**:
```tsx
import { CategoryGridSkeleton } from '../components/common/Skeletons';

{isLoading ? (
  <CategoryGridSkeleton />
) : (
  // ... actual grid
)}
```

**Events.tsx**:
```tsx
import { EventCardSkeleton } from '../components/common/Skeletons';

{isLoading ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map(i => <EventCardSkeleton key={i} />)}
  </div>
) : (
  // ... actual events
)}
```

**Multimedia.tsx**:
```tsx
import { MediaCardSkeleton } from '../components/common/Skeletons';

{isLoading ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map(i => <MediaCardSkeleton key={i} />)}
  </div>
) : (
  // ... actual media
)}
```

#### **Testing**

1. **Simulate slow network** (Chrome DevTools → Network → Slow 3G)
2. **Verify skeletons appear** during loading
3. **Verify smooth transition** to actual content
4. **Test dark mode** (skeletons should use dark:bg-muted)

#### **Verification**

- [ ] ArticleCardSkeleton created
- [ ] SearchResultsSkeleton created
- [ ] EventCardSkeleton created
- [ ] MediaCardSkeleton created
- [ ] SearchResults.tsx has loading skeleton
- [ ] TagArchive.tsx has loading skeleton
- [ ] AuthorArchive.tsx has loading skeleton
- [ ] TopicSingle.tsx has loading skeleton
- [ ] Events.tsx has loading skeleton
- [ ] Multimedia.tsx has loading skeleton
- [ ] All skeletons tested with slow network
- [ ] Dark mode verified

---

## 📊 **TASK SUMMARY**

| Task | Priority | Time | Status | Impact |
|:-----|:---------|:-----|:------:|:-------|
| 1. Email Links Consistency | Low | 30 mins | ⏳ | Professional branding |
| 2. Focus Ring Enhancement | Low | 1 hour | ⏳ | Better accessibility UX |
| 3. Loading States | Low | 2-3 hours | ⏳ | Perceived performance |

**Total Estimated Time**: 3.5-4.5 hours  
**All Tasks Optional**: System already production-ready

---

## 🎯 **EXECUTION PLAN**

### **Option A: Do All 3 Tasks** (Recommended)

**Timeline**: 1 session (3.5-4.5 hours)

1. **Task 1: Email Links** (30 mins) — Quick win
2. **Task 2: Focus Rings** (1 hour) — Moderate effort
3. **Task 3: Loading States** (2-3 hours) — Larger effort

**Result**: 100% visual consistency + enhanced UX

---

### **Option B: Do Task 1 Only** (Minimal)

**Timeline**: 30 minutes

1. **Task 1: Email Links** — Professional branding

**Result**: Official rooi rose emails throughout, skip enhancements

---

### **Option C: Skip All Tasks** (Launch Now)

**Timeline**: 0 hours

**Result**: Launch with current 98% compliance, address post-launch if needed

---

## 💡 **RECOMMENDATION**

**Choose Option A** — Complete all 3 tasks for 100% polish.

**Rationale**:
- Total time investment: 3.5-4.5 hours
- Significant UX improvements
- Better first impression for users
- Easier to fix now than post-launch
- Demonstrates attention to detail

**Alternative**: Choose Option B if time-constrained (30 mins for email consistency)

---

## ✅ **COMPLETION CRITERIA**

All 3 tasks are considered complete when:

1. ✅ All email addresses use rooi rose domain
2. ✅ All interactive elements have `focus-visible` rings
3. ✅ All dynamic pages have loading skeletons
4. ✅ Manual testing passed (keyboard nav, slow network, dark mode)
5. ✅ Visual regression test passed (before/after comparison)

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-03-12  
**Next Review**: After completion (or skip if launching immediately)

---

## 🎉 **REMEMBER**

These are **enhancements, not critical fixes**. The rooi rose website is already **production-ready** at 98% compliance. These improvements will bring it to **100% perfection**!

**You decide**: Polish now, or launch and iterate? 🚀
