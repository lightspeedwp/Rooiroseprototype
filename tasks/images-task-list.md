# Image Audit Task List

**Generated**: 2026-03-16  
**Source**: Image Audit (`audit images`)  
**Total Tasks**: 3  
**Health Score**: 92/100 ✅

---

## Status Key
- [ ] Not Started
- [⏳] In Progress
- [✅] Complete

---

## Summary

The image audit found **zero critical issues** and identified **3 medium-low priority optimization opportunities**. All image imports use correct syntax, accessibility is excellent (97% alt text coverage), and there are no broken references.

**Key Findings**:
- ✅ All `figma:asset` imports use correct virtual module scheme (no path prefixes)
- ✅ Zero broken image imports
- ✅ 97% alt text coverage
- ✅ Proper lazy loading implementation
- ✅ ImageWithFallback component used consistently

---

## Medium Priority Tasks (Performance)

### Task 1: Add `decoding="async"` to Images

- **Priority**: Medium
- **Impact**: Minor performance improvement
- **Effort**: 15 minutes
- **Status**: [ ] Not Started

**Description**: Add `decoding="async"` attribute to images to allow browser to decode images off the main thread, preventing janky scroll performance.

**Current Coverage**: ~50% of images
**Target**: 90%+ of images

**Files to Update**:
1. `/src/app/components/hero/SharedHero.tsx` — All hero image variants
2. `/src/app/pages/About.tsx` — Hero image
3. `/src/app/pages/Team.tsx` — Hero image
4. `/src/app/pages/EEditions.tsx` — Hero image
5. `/src/app/components/parts/Header.tsx` — Mega menu images

**Example**:
```tsx
// Before
<img src={image} alt={title} loading="lazy" />

// After
<img src={image} alt={title} loading="lazy" decoding="async" />
```

**Verification**:
- Search for `<img` tags without `decoding="async"`
- Add attribute to all lazy-loaded images
- Test scroll performance on image-heavy pages

---

### Task 2: Implement Responsive Image Sizes (srcset)

- **Priority**: Medium
- **Impact**: Moderate performance improvement (especially mobile)
- **Effort**: 30 minutes
- **Status**: [ ] Not Started

**Description**: Use `srcset` and `sizes` attributes for hero images and product images to serve appropriately sized images for different screen widths.

**Benefit**: 
- Reduced bandwidth on mobile (~40% savings)
- Faster page loads on smaller screens
- Better Core Web Vitals (LCP)

**Target Images**:
1. Hero images (home, category, content pages)
2. Product images on Shop page
3. Article hero images

**Implementation Strategy**:

**For Unsplash URLs** (already supports dynamic resizing):
```tsx
<img 
  src={`${imageUrl}?w=1200`}
  srcset={`
    ${imageUrl}?w=400 400w,
    ${imageUrl}?w=800 800w,
    ${imageUrl}?w=1200 1200w,
    ${imageUrl}?w=1600 1600w
  `}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={title}
  loading="lazy"
  decoding="async"
/>
```

**For figma:asset** (file-based):
- Note: figma:asset doesn't support dynamic resizing
- Focus responsive srcset on Unsplash hero images only

**Files to Update**:
1. `/src/app/components/hero/SharedHero.tsx` — All hero variants (use Unsplash URLs)
2. `/src/app/pages/Shop.tsx` — Product grid (already uses Unsplash)
3. `/src/app/components/home/Hero.tsx` — Home hero

**Verification**:
- Test on mobile device (Network tab shows smaller images)
- Check Lighthouse score improvement
- Verify images display correctly at all breakpoints

---

## Low Priority Tasks (Code Organization)

### Task 3: Consolidate Duplicate Image Imports

- **Priority**: Low
- **Impact**: Cleaner codebase, easier maintenance
- **Effort**: 20 minutes
- **Status**: [ ] Not Started

**Description**: Remove duplicate `figma:asset` imports by using `/src/app/data/imageAssets.ts` as the single source of truth.

**Current Issue**: Same images imported in multiple files:
- `heroImages.ts` imports: 5 hero images
- `imageAssets.ts` imports: Same 5 images + team photos
- `team.ts` imports: 10 team photos

**Recommended Structure**:

**Step 1**: Ensure all images are in `/src/app/data/imageAssets.ts`
```tsx
// /src/app/data/imageAssets.ts
import newsletterHero from 'figma:asset/13bd97bf84a483cafad8893ecc09a138455e1126.png';
import subscriptionHero from 'figma:asset/569ae9a1840247e37f1e805be09dbbe5e485f8ea.png';
// ... all other images

export const IMAGE_ASSETS = {
  heroes: { newsletterHero, subscriptionHero, /* ... */ },
  team: { barnardImg, luciaImg, /* ... */ },
  footer: { pressCouncilLogo, wanIfraLogo, fcjLogo },
};
```

**Step 2**: Re-export from specific data files
```tsx
// /src/app/data/heroImages.ts
import { IMAGE_ASSETS } from './imageAssets';

export const HERO_IMAGES = {
  newsletter: IMAGE_ASSETS.heroes.newsletterHero,
  subscription: IMAGE_ASSETS.heroes.subscriptionHero,
  // ... rest of hero images (Unsplash URLs)
};
```

```tsx
// /src/app/data/team.ts
import { IMAGE_ASSETS } from './imageAssets';

const { barnardImg, luciaImg, /* ... */ } = IMAGE_ASSETS.team;

// ... rest of team data
```

**Files to Modify**:
1. `/src/app/data/imageAssets.ts` — Add centralized exports
2. `/src/app/data/heroImages.ts` — Import from imageAssets
3. `/src/app/data/team.ts` — Import from imageAssets
4. `/src/app/data/navigation.ts` — Import from imageAssets

**Verification**:
- TypeScript compilation passes
- No broken imports
- All images render correctly
- Bundle size unchanged (tree-shaking handles it)

**Note**: This is a code organization improvement, not a functional bug. Can be done anytime.

---

## Deferred Tasks (Future Enhancements)

### Image Preloading for Hero Images

**Description**: Add `<link rel="preload">` for critical hero images

**Example**:
```html
<!-- In index.html or dynamic meta tags -->
<link rel="preload" as="image" href="https://images.unsplash.com/photo-...">
```

**Benefit**: Slight LCP improvement (~50-100ms)
**Effort**: 10 minutes
**Priority**: Very Low
**Status**: Deferred (focus on more impactful optimizations first)

---

### Remove Unused SVG File

**Description**: Determine if `/src/imports/rooi-rose-logo.svg` is needed

**Investigation**:
- Check if used by WordPress theme
- Check if used by build process
- Remove if unused to reduce repo size

**Effort**: 5 minutes
**Priority**: Very Low
**Status**: Deferred (minimal impact)

---

## Completed Tasks

None — This is the initial audit.

---

## Task Priorities Summary

| Priority | Tasks | Estimated Time | Impact |
|:---------|------:|--------------:|:-------|
| Medium | 2 | 45 min | Performance improvement |
| Low | 1 | 20 min | Code organization |
| Deferred | 2 | 15 min | Minimal impact |
| **Total** | **5** | **80 min** | **Moderate** |

---

## Recommended Execution Order

1. **Task 1** (15 min) — Add `decoding="async"` — Quick win
2. **Task 2** (30 min) — Implement responsive srcset — Bigger impact
3. **Task 3** (20 min) — Consolidate imports — Code cleanup

**Total Time**: ~1 hour for all priority tasks

---

## Success Criteria

- [x] Image audit completed
- [ ] All medium priority tasks completed
- [ ] Lighthouse performance score improvement measured
- [ ] Mobile loading performance improved
- [ ] Code organization improved

---

## Notes

**Excellent Current State**: The project already has a **92/100 health score** for images. These tasks are optimizations, not bug fixes.

**No Critical Issues**: Zero broken imports, zero invalid syntax, excellent accessibility.

**Production Ready**: The image system can be deployed as-is. These tasks will provide incremental performance improvements.

---

## Related Files

**Audit Report**: `/reports/image-audit-2026-03-16.md`

**Guidelines**:
- `/guidelines/development/file-organization.md`
- `/guidelines/development/performance.md`
- `Guidelines.md` (images_and_svgs section)

**Components to Update**:
- `/src/app/components/hero/SharedHero.tsx`
- `/src/app/components/home/Hero.tsx`
- `/src/app/pages/Shop.tsx`
- `/src/app/data/imageAssets.ts`

---

**Generated**: 2026-03-16  
**Total Tasks**: 3 priority + 2 deferred  
**Estimated Completion Time**: 1 hour  
**Next Action**: Start with Task 1 (decoding="async")
