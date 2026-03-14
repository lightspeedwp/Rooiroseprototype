# Hero Images Allocation — Complete

**Date**: 2026-03-12  
**Task**: Allocate Unsplash images for all pages with hero sections  
**Files Updated**: 1  
**Files Created**: 2

---

## ✅ What Was Completed

### 1. Updated Hero Images Data File

**File**: `/src/app/data/heroImages.ts`

**Changes**:
- ✅ **Removed Figma Asset Imports** — Deleted all 5 `figma:asset` imports
- ✅ **Converted to Unsplash Source** — All utility page heroes now use Unsplash URLs
- ✅ **Added 10 Category Heroes** — New hero images for all editorial categories
- ✅ **Added Helper Functions** — `getHeroImageByCategory()` and `getHeroImageByPage()`
- ✅ **Standardized Format** — All images use 1600×900 (16:9 aspect ratio)

**Total Hero Images**: 19 (9 utility pages + 10 category pages)

---

## 📊 Hero Image Inventory

### Utility Pages (9 Images)

| # | Page | Keywords | Sig Parameter |
|:--|:-----|:---------|:--------------|
| 1 | Newsletter | newsletter, email, magazine | `newsletter` |
| 2 | Subscription | subscription, magazine, reading | `subscription` |
| 3 | Complaints | megaphone, communication, feedback | `complaints` |
| 4 | E-Editions | digital, magazine, tablet, reading | `e-editions` |
| 5 | Legal | legal, document, privacy | `legal` |
| 6 | Advertise | advertising, marketing, business | `advertise` |
| 7 | Submit | writing, typewriter, journalism | `submit` |
| 8 | Contact | johannesburg, cityscape, aerial | `contact-map` |
| 9 | About | magazine, editorial, newsroom | `about` |

---

### Category Pages (10 Images)

| # | Category | Keywords | Sig Parameter |
|:--|:---------|:---------|:--------------|
| 1 | **Kos** | food, cooking, recipe, kitchen | `kos` |
| 2 | **Mode** | fashion, runway, style, clothing | `mode` |
| 3 | **Skoonheid** | beauty, skincare, makeup, cosmetics | `skoonheid` |
| 4 | **Gesondheid** | wellness, fitness, yoga, health | `gesondheid` |
| 5 | **Bekendes** | celebrity, interview, stage, performance | `bekendes` |
| 6 | **Leefstyl** | home, decor, interior, lifestyle | `leefstyl` |
| 7 | **Jou lewe** | family, relationship, reflection, journal | `jou-lewe` |
| 8 | **Ontspanning** | travel, beach, books, relaxation | `ontspanning` |
| 9 | **Rooiwarm wenners** | award, trophy, winner, product | `rooiwarm-wenners` |
| 10 | **Wen** | gift, prize, giveaway, present | `wen` |

---

## 🎨 Image Specifications

**All hero images use the following specifications**:

- **Dimensions**: 1600×900 pixels (16:9 aspect ratio)
- **Source**: Unsplash Source API
- **Format**: JPEG (auto-optimized by Unsplash)
- **URL Pattern**: `https://source.unsplash.com/1600x900/?[keywords]&sig=[unique-id]`
- **Unique IDs**: Each image has a unique `sig` parameter to ensure different images

---

## 🔧 Helper Functions Added

### `getHeroImageByCategory(categorySlug: string): string`

Maps category slugs to hero image URLs.

**Supported Slugs**:
```typescript
'kos', 'mode', 'skoonheid', 'gesondheid', 'bekendes',
'leefstyl', 'jou-lewe', 'ontspanning', 'rooiwarm-wenners', 'wen'
```

**Usage Example**:
```typescript
import { getHeroImageByCategory } from '../data/heroImages';

const heroImage = getHeroImageByCategory('kos');
// Returns: 'https://source.unsplash.com/1600x900/?food,cooking,recipe,kitchen&sig=kos'
```

---

### `getHeroImageByPage(pageType: string): string`

Maps utility page types to hero image URLs.

**Supported Page Types**:
```typescript
'newsletter', 'subscription', 'e-editions', 'advertise',
'contact', 'about', 'legal', 'privacy', 'terms', 'submit', 'complaints'
```

**Usage Example**:
```typescript
import { getHeroImageByPage } from '../data/heroImages';

const heroImage = getHeroImageByPage('contact');
// Returns: 'https://source.unsplash.com/1600x900/?johannesburg,cityscape,aerial&sig=contact-map'
```

---

## 📚 Documentation Created

### 1. Hero Images Reference Guide

**File**: `/docs/HERO-IMAGES-REFERENCE.md`

**Contents**:
- Complete image inventory (19 images)
- Helper function documentation
- Usage examples (Category page, Utility page, Direct usage)
- Image specifications and responsive behavior
- Update instructions for changing/adding hero images
- Unsplash Source limitations and production recommendations

---

### 2. This Completion Report

**File**: `/reports/hero-images-allocation-2026-03-12.md`

---

## 🔗 Integration with Content Refactor

These hero images are **ready for integration** with the magazine content refactor:

### Phase 3: Shared Hero Component System

When creating the `SharedHero` component, use:

```typescript
import { getHeroImageByCategory } from '../../data/heroImages';

// Category variant
<SharedHero
  variant="category"
  title={category.title}
  subtitle={category.description}
  image={getHeroImageByCategory(category.slug)}
  breadcrumbs={breadcrumbs}
/>
```

### Phase 4-5: Editorial Post Generation

Each of the 100 posts will use **unique post-specific hero images**:

```typescript
// In post data file (e.g., kos-post-001.ts)
export const kosPost001: Post = {
  // ... other fields
  heroImage: 'https://source.unsplash.com/1200x800/?food,summer&sig=kos-001',
  // Note: Posts use 1200×800 (3:2 aspect ratio), not 1600×900
};
```

**Key Difference**:
- **Category pages**: Use 1600×900 (16:9) images from `heroImages.ts`
- **Article pages**: Use 1200×800 (3:2) images (unique per post)

---

## ⚠️ Important Notes

### Unsplash Source Behavior

1. **Semi-Random Images**: Unsplash Source returns random images matching keywords
2. **Cache Duration**: Images are cached for 24-48 hours
3. **No Guarantees**: Images may change as Unsplash updates their database
4. **Rate Limits**: Free tier has rate limits (consider Unsplash API for production)

### Production Recommendations

For production deployment:

1. ✅ **Use Unsplash API** — Select specific images via API instead of Source
2. ✅ **Download Images** — Host images locally or on CDN for consistency
3. ✅ **Optimize** — Compress images and generate responsive sizes
4. ✅ **Attribution** — Add Unsplash attribution footer (required for free tier)

---

## 📊 Current vs. Future Image Usage

| Page Type | Current Implementation | After Content Refactor |
|:----------|:----------------------|:-----------------------|
| **Utility Pages** | 9 Unsplash images | 9 Unsplash images (same) |
| **Category Pages** | Uses article images in slider | 10 category hero images |
| **Article Pages** | Uses post-specific images | 100 unique post hero images |
| **Homepage** | Uses featured article images | Uses featured post images (slider) |
| **Total Unique Images** | **19** | **119+** |

---

## ✅ Success Metrics

- ✅ **19 hero images allocated** (9 utility + 10 category)
- ✅ **All images use Unsplash Source** (consistent quality)
- ✅ **Helper functions created** (easy to use in templates)
- ✅ **Documentation complete** (reference guide + this report)
- ✅ **Ready for content refactor** (Phase 3 integration)

---

## 🚀 Next Steps

### Immediate Actions (Optional)

1. **Visual QA** — Preview all 19 hero images in browser to verify keywords match category/page intent
2. **Keyword Refinement** — Adjust Unsplash keywords if images don't match editorial tone
3. **Test Helper Functions** — Use `getHeroImageByCategory()` in Category page template

### Content Refactor Integration (Phase 3)

When executing Phase 3 of the content refactor:

1. Import `getHeroImageByCategory()` in SharedHero component
2. Use category hero images for `category` and `subcategory` variants
3. Use post-specific hero images for `article`, `competition`, and `award` variants

**See**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md` for complete implementation plan.

---

**Completed By**: AI Assistant  
**Date**: 2026-03-12  
**Related Files**:
- `/src/app/data/heroImages.ts` (updated)
- `/docs/HERO-IMAGES-REFERENCE.md` (created)
- `/reports/hero-images-allocation-2026-03-12.md` (this report)
