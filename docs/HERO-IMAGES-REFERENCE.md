# Rooi Rose Hero Images Reference

**Created**: 2026-03-12  
**File**: `/src/app/data/heroImages.ts`  
**Purpose**: Centralized hero image URLs for all pages and categories

---

## 📋 Overview

All hero images in the rooi rose prototype use **Unsplash Source** for consistent, high-quality editorial photography. Images are served at **1600×900 pixels (16:9 aspect ratio)** optimized for hero sections.

**URL Format**: `https://source.unsplash.com/1600x900/?[keywords]&sig=[unique-id]`

---

## 🗂️ Image Inventory

### Utility Pages (9 Images)

| Page | Image Key | Keywords | Usage |
|:-----|:----------|:---------|:------|
| Newsletter Subscribe | `newsletter` | newsletter, email, magazine | Newsletter subscription hero |
| Subscription/Membership | `subscription` | subscription, magazine, reading | E-edition subscription pages |
| Complaints/Feedback | `complaints` | megaphone, communication, feedback | Feedback form pages |
| E-Editions | `eEditions` | digital, magazine, tablet, reading | Digital edition viewer |
| Legal Pages | `legal` | legal, document, privacy | Privacy policy, Terms & Conditions |
| Advertising | `advertise` | advertising, marketing, business | Advertise with us page |
| Submit Forms | `submit` | writing, typewriter, journalism | Story submission forms |
| Contact | `contactMap` | johannesburg, cityscape, aerial | Contact page hero |
| About | `about` | magazine, editorial, newsroom | About rooi rose page |

---

### Editorial Category Pages (10 Images)

| Category | Image Key | Keywords | Description |
|:---------|:----------|:---------|:------------|
| **Kos** | `kos` | food, cooking, recipe, kitchen | Food, recipes, culinary inspiration |
| **Mode** | `mode` | fashion, runway, style, clothing | Fashion trends, style guides |
| **Skoonheid** | `skoonheid` | beauty, skincare, makeup, cosmetics | Beauty products, skincare routines |
| **Gesondheid** | `gesondheid` | wellness, fitness, yoga, health | Health, fitness, wellness advice |
| **Bekendes** | `bekendes` | celebrity, interview, stage, performance | Celebrity interviews, profiles |
| **Leefstyl** | `leefstyl` | home, decor, interior, lifestyle | Home decor, DIY, lifestyle |
| **Jou lewe** | `jouLewe` | family, relationship, reflection, journal | Relationships, personal growth |
| **Ontspanning** | `ontspanning` | travel, beach, books, relaxation | Travel, books, entertainment |
| **Rooiwarm wenners** | `rooiwarmWenners` | award, trophy, winner, product | Award winners, product reviews |
| **Wen** | `wen` | gift, prize, giveaway, present | Competitions, prizes |

---

## 🔧 Helper Functions

### `getHeroImageByCategory(categorySlug: string): string`

Maps category slugs to hero image URLs.

**Example Usage**:
```typescript
import { getHeroImageByCategory } from '../data/heroImages';

const heroImage = getHeroImageByCategory('kos');
// Returns: 'https://source.unsplash.com/1600x900/?food,cooking,recipe,kitchen&sig=kos'
```

**Supported Slugs**:
- `kos`, `mode`, `skoonheid`, `gesondheid`, `bekendes`
- `leefstyl`, `jou-lewe`, `ontspanning`, `rooiwarm-wenners`, `wen`

**Fallback**: Returns `HERO_IMAGES.about` if slug not found.

---

### `getHeroImageByPage(pageType: string): string`

Maps utility page types to hero image URLs.

**Example Usage**:
```typescript
import { getHeroImageByPage } from '../data/heroImages';

const heroImage = getHeroImageByPage('contact');
// Returns: 'https://source.unsplash.com/1600x900/?johannesburg,cityscape,aerial&sig=contact-map'
```

**Supported Page Types**:
- `newsletter`, `subscription`, `e-editions`, `advertise`
- `contact`, `about`, `legal`, `privacy`, `terms`
- `submit`, `complaints`

**Fallback**: Returns `HERO_IMAGES.about` if page type not found.

---

## 📐 Image Specifications

### Dimensions
- **Width**: 1600px
- **Height**: 900px
- **Aspect Ratio**: 16:9
- **Format**: JPEG (optimized by Unsplash)

### Performance
- **Lazy Loading**: All hero images should use `loading="lazy"` attribute
- **Decoding**: Use `decoding="async"` for non-blocking rendering
- **Alt Text**: Decorative hero images should use `alt=""` (empty string)

### Responsive Behavior
- **Mobile**: Hero sections typically 60vh height, full-width image
- **Tablet**: 50vh height
- **Desktop**: 60-70vh height

---

## 🎨 Usage Examples

### Category Page Hero (with SharedHero Component)

```tsx
import { SharedHero } from '../components/hero/SharedHero';
import { getHeroImageByCategory } from '../data/heroImages';

export function CategoryPage({ categorySlug }: { categorySlug: string }) {
  return (
    <SharedHero
      variant="category"
      title="Kos"
      subtitle="Resepte en inspirasie vir elke dag."
      image={getHeroImageByCategory(categorySlug)}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Kos', href: '/kos' }
      ]}
    />
  );
}
```

---

### Utility Page Hero (with ContentHero Component)

```tsx
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';

export function ContactPage() {
  return (
    <ContentHero
      title="Kontak Ons"
      subtitle="Ons is hier om te help"
      heroImage={HERO_IMAGES.contactMap}
    />
  );
}
```

---

### Direct Image Usage

```tsx
import { HERO_IMAGES } from '../data/heroImages';

export function HeroSection() {
  return (
    <div className="hero relative h-[60vh] overflow-hidden">
      <img 
        src={HERO_IMAGES.kos}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 p-8">
        <h1>Welcome to Kos</h1>
      </div>
    </div>
  );
}
```

---

## 🔄 Updating Hero Images

### To Change an Existing Hero Image

1. Open `/src/app/data/heroImages.ts`
2. Update the keywords in the Unsplash URL
3. Change the `sig` parameter to force a cache refresh

**Example**:
```typescript
// Before
kos: 'https://source.unsplash.com/1600x900/?food,cooking,recipe,kitchen&sig=kos',

// After (different image)
kos: 'https://source.unsplash.com/1600x900/?food,gourmet,culinary,chef&sig=kos-v2',
```

---

### To Add a New Category Hero Image

1. Add new entry to `HERO_IMAGES` object
2. Add mapping to `getHeroImageByCategory()` function
3. Choose relevant keywords for the category

**Example**:
```typescript
// In HERO_IMAGES object
tuiniere: 'https://source.unsplash.com/1600x900/?garden,plants,flowers&sig=tuiniere',

// In getHeroImageByCategory function
const categoryMap: Record<string, string> = {
  // ... existing categories
  'tuiniere': HERO_IMAGES.tuiniere,
};
```

---

## ⚠️ Important Notes

### Unsplash Source Limitations

- **Random Images**: Unsplash Source returns semi-random images matching keywords
- **Cache Duration**: Images are cached by Unsplash (typically 24-48 hours)
- **No Guarantees**: Image may change over time as Unsplash updates their database
- **Rate Limits**: Free tier has rate limits (consider upgrading for production)

### Production Recommendations

For production deployment, consider:

1. **Download Specific Images**: Use Unsplash API to select specific images
2. **Host Locally**: Store images in project or CDN for consistency
3. **Optimize**: Compress images and generate responsive sizes
4. **Attribution**: Add Unsplash attribution footer (required for free tier)

---

## 📊 Image Usage Audit

| Category | Current Pages Using | Future Pages (Content Refactor) |
|:---------|:-------------------:|:--------------------------------:|
| Utility Pages | 9 | 9 |
| Category Pages | 0 (uses article images) | 10 (will use category heroes) |
| Article Pages | 0 (uses post hero images) | 100 (will use post-specific images) |
| **Total Unique Hero Images** | **19** | **119+** |

---

## 🚀 Next Steps (Content Refactor)

When executing the magazine content refactor:

1. **Category Templates**: Update to use `getHeroImageByCategory()` in SharedHero component
2. **100 Editorial Posts**: Generate unique Unsplash images per post (see orchestrator Phase 4-5)
3. **Mega Menu Featured**: Use first post's hero image for mega menu featured stories
4. **Homepage Slider**: Use featured post hero images (not category heroes)

**See**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md` for complete implementation plan.

---

**Last Updated**: 2026-03-12  
**Maintained By**: rooi rose Development Team
