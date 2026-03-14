# Shared Hero System — Component Guidelines

**Version**: 1.0  
**Created**: 2026-03-12  
**Component**: `SharedHero.tsx`  
**Purpose**: Universal hero component with 6 variants for all page templates

---

## 📋 Overview

The **SharedHero** component is a universal hero pattern used across **all** rooi rose page templates (Home, Category, Subcategory, Article, Competition, Award). It replaces fragmented hero implementations with a single, consistent component that adapts based on the `variant` prop.

### Design Goals

1. **Consistency** — Every page uses the same hero component (no one-off implementations)
2. **Variant-Based Rendering** — Single component adapts layout/metadata based on `variant` prop
3. **Rooi Rose Branding** — Uses Playfair Display SC for titles, #e01e12 for accents
4. **Responsive** — Mobile-first design with tablet/desktop enhancements
5. **Accessibility** — Proper heading hierarchy, alt text, breadcrumb navigation

---

## 🎨 Variant Types (6 Total)

| Variant | Use Case | Layout | Metadata Displayed |
|:--------|:---------|:-------|:-------------------|
| **home** | Homepage hero slider | Full-width image + title overlay | None (image-focused) |
| **category** | Category landing page | Hero image + title + description | Subcategory quick links |
| **subcategory** | Subcategory page | Hero image + title + breadcrumbs | Breadcrumbs: Home > Category > Subcategory |
| **article** | Single article page | Hero image + title + metadata | Author, date, category, tags |
| **competition** | Competition entry page | Hero image + title + prize callout | Prize description, CTA button |
| **award** | Award winner page | Hero image + title + winner badge | Award category, "Rooiwarm Wenner" badge |

---

## 🧩 Component API

### Props Interface

**File**: `/src/app/data/models/HeroProps.ts`

```typescript
export interface HeroProps {
  /** Hero variant (determines layout) */
  variant: HeroVariant;
  
  /** Hero title (headline) */
  title: string;
  
  /** Optional subtitle or description */
  subtitle?: string;
  
  /** Hero image URL */
  image: string;
  
  /** Optional category name (for article/competition/award variants) */
  category?: string;
  
  /** Optional breadcrumbs array (for article/subcategory variants) */
  breadcrumbs?: Breadcrumb[];
  
  /** Optional post metadata (for article variant) */
  meta?: PostMeta;
  
  /** Optional prize description (for competition variant) */
  prize?: string;
  
  /** Optional award category (for award variant) */
  awardCategory?: string;
}

export type HeroVariant = 
  | "home" 
  | "category" 
  | "subcategory" 
  | "article" 
  | "competition" 
  | "award";

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface PostMeta {
  author: string;
  date: string;
  readTime?: number;
  tags?: string[];
}
```

---

## 🎨 Variant Design Specifications

### 1. Home Variant

**Use Case**: Homepage hero slider (5 featured posts)  
**Layout**: Full-width image with title overlay (no metadata)

#### Visual Specifications

- **Hero Image**: Full viewport width, 60vh height (mobile), 70vh (desktop)
- **Title**: Playfair Display SC, 36px (mobile), 48px (desktop), white text with shadow
- **Overlay**: Dark gradient from bottom (rgba(0,0,0,0.6) → transparent)
- **No Breadcrumbs**: No metadata or navigation elements (image-focused)

#### Code Example

```tsx
<SharedHero
  variant="home"
  title="Die beste somerresepte vir die hele gesin"
  image="https://source.unsplash.com/1200x800/?food,summer&sig=featured-001"
/>
```

---

### 2. Category Variant

**Use Case**: Category landing pages (Kos, Mode, Skoonheid, etc.)  
**Layout**: Hero image + category title + description + subcategory quick links

#### Visual Specifications

- **Hero Image**: Full-width, 40vh height (mobile), 50vh (desktop)
- **Title**: Playfair Display SC, 32px (mobile), 42px (desktop), #142135 (navy)
- **Description**: Karla, 16px, #424242 (grey), max-width 600px
- **Subcategory Links**: Below hero, horizontal scroll (mobile), wrap (desktop)
- **Breadcrumbs**: Home > Category

#### Code Example

```tsx
<SharedHero
  variant="category"
  title="Kos"
  subtitle="Resepte en inspirasie vir elke dag."
  image="https://source.unsplash.com/1200x800/?food,magazine&sig=kos"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Kos", href: "/kos" }
  ]}
/>

{/* Subcategory quick links rendered separately */}
<CategoryHeroLinks subcategories={kosSubcategories} categorySlug="kos" />
```

---

### 3. Subcategory Variant

**Use Case**: Subcategory landing pages (e.g., Kos > Maklik & vinnig)  
**Layout**: Same as category variant but with subcategory context

#### Visual Specifications

- **Hero Image**: Same as category variant
- **Title**: Subcategory name (e.g., "Maklik & vinnig")
- **Breadcrumbs**: Home > Category > Subcategory
- **No Description**: Subcategory pages use filtered post grid (no extra description needed)

#### Code Example

```tsx
<SharedHero
  variant="subcategory"
  title="Maklik & vinnig"
  image="https://source.unsplash.com/1200x800/?food,cooking&sig=maklik-vinnig"
  category="Kos"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Kos", href: "/kos" },
    { label: "Maklik & vinnig", href: "/kos/maklik-vinnig" }
  ]}
/>
```

---

### 4. Article Variant

**Use Case**: Single article pages  
**Layout**: Hero image + article title + metadata (author, date, category, tags)

#### Visual Specifications

- **Hero Image**: Full-width, 50vh height (mobile), 60vh (desktop)
- **Title**: Playfair Display SC, 28px (mobile), 36px (desktop), #142135
- **Metadata Bar**: Karla, 14px, #424242, flex row (author, date, category)
- **Breadcrumbs**: Home > Category > Article Title
- **Tags**: Below metadata, #e01e12 background chips (optional display)

#### Code Example

```tsx
<SharedHero
  variant="article"
  title="Die beste somerresepte vir die hele gesin"
  subtitle="Maklike en vinnige etes vir warm dae"
  image="https://source.unsplash.com/1200x800/?food,summer&sig=kos-001"
  category="Kos"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Kos", href: "/kos" },
    { label: "Die beste somerresepte", href: "/kos/001-die-beste-somerresepte" }
  ]}
  meta={{
    author: "rooi rose Redaksie",
    date: "12 Maart 2026",
    readTime: 5,
    tags: ["somer", "resepte", "maklik"]
  }}
/>
```

---

### 5. Competition Variant

**Use Case**: Competition entry pages (Wen category)  
**Layout**: Hero image + competition title + prize callout + CTA button

#### Visual Specifications

- **Hero Image**: Same as article variant
- **Title**: Same as article variant
- **Prize Callout**: Large text, #e01e12, "Wen: {prize description}"
- **CTA Button**: "Neem deel", #e01e12 background, white text, 48px height
- **Breadcrumbs**: Home > Wen > Competition Title

#### Code Example

```tsx
<SharedHero
  variant="competition"
  title="Wen 'n luukse spa-pakket ter waarde van R5,000"
  image="https://source.unsplash.com/1200x800/?spa,gift&sig=wen-001"
  category="Wen"
  prize="Luukse spa-pakket ter waarde van R5,000"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Wen", href: "/wen" },
    { label: "Spa-pakket", href: "/wen/001-spa-pakket" }
  ]}
/>
```

---

### 6. Award Variant

**Use Case**: Award winner pages (Rooiwarm wenners category)  
**Layout**: Hero image + award title + winner badge

#### Visual Specifications

- **Hero Image**: Same as article variant
- **Title**: Product name (e.g., "Nivea Hydrating Day Cream")
- **Winner Badge**: "🏆 Rooiwarm Wenner", #e01e12 background, white text, 16px
- **Award Category**: "Skoonheid" or "Welstand", Karla, 14px, #424242
- **Breadcrumbs**: Home > Rooiwarm wenners > Product Name

#### Code Example

```tsx
<SharedHero
  variant="award"
  title="Nivea Hydrating Day Cream"
  image="https://source.unsplash.com/1200x800/?skincare,product&sig=rooiwarm-001"
  category="Rooiwarm wenners"
  awardCategory="Skoonheid"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
    { label: "Nivea Hydrating Day Cream", href: "/rooiwarm-wenners/001-nivea-cream" }
  ]}
/>
```

---

## 🎨 Brand Design Tokens

### Typography

- **Hero Titles**: `has-brand-serif-font-family` (Playfair Display SC)
- **Metadata/Descriptions**: `has-brand-sans-font-family` (Karla)
- **Title Sizes**: 
  - Mobile: 28-36px
  - Desktop: 36-48px

### Colors

- **Primary Red**: `#e01e12` (CTA buttons, accent chips, winner badges)
- **Navy**: `#142135` (hero titles on light backgrounds)
- **Grey**: `#424242` (metadata text, descriptions)
- **White**: `#FFFFFF` (text on dark overlays)

### Spacing

- **Hero Padding**: `var(--wp--preset--spacing--large)` (mobile), `var(--wp--preset--spacing--x-large)` (desktop)
- **Metadata Gap**: `var(--wp--preset--spacing--small)` (between author, date, category)
- **Breadcrumb Gap**: `var(--wp--preset--spacing--x-small)`

---

## 🧩 Component Implementation

### File Structure

```
/src/app/components/hero/
  SharedHero.tsx          — Universal hero component (6 variants)
  CategoryHeroLinks.tsx   — Subcategory quick-link strip (used with category variant)
```

### SharedHero.tsx Skeleton

```tsx
import React from 'react';
import { HeroProps } from '../../data/models/HeroProps';
import { Link } from 'react-router';

export function SharedHero(props: HeroProps) {
  const { variant, title, subtitle, image, category, breadcrumbs, meta, prize, awardCategory } = props;
  
  // Variant-specific rendering
  switch (variant) {
    case 'home':
      return <HomeHero title={title} image={image} />;
    case 'category':
      return <CategoryHero title={title} subtitle={subtitle} image={image} breadcrumbs={breadcrumbs} />;
    case 'subcategory':
      return <SubcategoryHero title={title} image={image} category={category} breadcrumbs={breadcrumbs} />;
    case 'article':
      return <ArticleHero title={title} subtitle={subtitle} image={image} category={category} breadcrumbs={breadcrumbs} meta={meta} />;
    case 'competition':
      return <CompetitionHero title={title} image={image} category={category} prize={prize} breadcrumbs={breadcrumbs} />;
    case 'award':
      return <AwardHero title={title} image={image} category={category} awardCategory={awardCategory} breadcrumbs={breadcrumbs} />;
    default:
      return null;
  }
}

// Internal variant components (not exported)
function HomeHero({ title, image }: { title: string; image: string }) {
  return (
    <div className="hero-home relative h-[60vh] md:h-[70vh]">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative z-10 flex items-end h-full p-6 md:p-12">
        <h1 className="has-brand-serif-font-family text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}

// ... implement other variant components (CategoryHero, SubcategoryHero, ArticleHero, CompetitionHero, AwardHero)
```

### CategoryHeroLinks.tsx Skeleton

```tsx
import React from 'react';
import { Link } from 'react-router';
import { Subcategory } from '../../data/models/Subcategory';

interface CategoryHeroLinksProps {
  subcategories: Subcategory[];
  categorySlug: string;
}

export function CategoryHeroLinks({ subcategories, categorySlug }: CategoryHeroLinksProps) {
  return (
    <nav className="subcategory-links py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto md:flex-wrap">
          {subcategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/${categorySlug}/${sub.slug}`}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

---

## 🚀 Usage in Templates

### Home Page

```tsx
import { SharedHero } from '../components/hero/SharedHero';
import { getFeaturedPosts } from '../data/posts';

export function Home() {
  const featuredPosts = getFeaturedPosts(5);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  return (
    <div>
      {/* Hero slider with featured posts */}
      <SharedHero
        variant="home"
        title={featuredPosts[currentSlide].title}
        image={featuredPosts[currentSlide].heroImage}
      />
      
      {/* Rest of homepage content */}
    </div>
  );
}
```

### Category Page

```tsx
import { SharedHero } from '../components/hero/SharedHero';
import { CategoryHeroLinks } from '../components/hero/CategoryHeroLinks';
import { categories } from '../data/categories';
import { subcategories } from '../data/subcategories';
import { getPostsByCategory } from '../data/posts';

export function CategoryPage({ categoryId }: { categoryId: string }) {
  const category = categories.find((c) => c.id === categoryId);
  const categorySubcategories = subcategories.filter((s) => s.parent === categoryId);
  const posts = getPostsByCategory(categoryId);
  
  return (
    <div>
      <SharedHero
        variant="category"
        title={category.title}
        subtitle={category.description}
        image={category.heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: category.title, href: `/${category.slug}` }
        ]}
      />
      
      <CategoryHeroLinks
        subcategories={categorySubcategories}
        categorySlug={category.slug}
      />
      
      {/* Featured story + post grid */}
    </div>
  );
}
```

### Article Page

```tsx
import { SharedHero } from '../components/hero/SharedHero';
import { Post } from '../data/models/Post';

export function ArticlePage({ post }: { post: Post }) {
  return (
    <div>
      <SharedHero
        variant="article"
        title={post.title}
        subtitle={post.excerpt}
        image={post.heroImage}
        category={post.category}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: post.category, href: `/${post.category}` },
          { label: post.title, href: `/${post.category}/${post.slug}` }
        ]}
        meta={{
          author: post.author,
          date: post.date,
          tags: post.tags
        }}
      />
      
      {/* Article content */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
```

---

## ♿ Accessibility Considerations

### Heading Hierarchy

- **Hero Title**: Always use `<h1>` for page title (only one per page)
- **Category/Subcategory Pages**: Hero title is `<h1>`, featured story title is `<h2>`
- **Article Pages**: Hero title is `<h1>`, content headings start at `<h2>`

### Alt Text

- **Decorative Hero Images**: Use `alt=""` (empty string) — image is decorative, title provides context
- **Award Product Images**: Use `alt="[Product Name] — Rooiwarm Wenner"`

### Breadcrumb Navigation

- Use `<nav aria-label="Breadcrumb">` wrapper
- Use `<ol>` list for breadcrumb items
- Add `aria-current="page"` to last breadcrumb item

### Color Contrast

- **White text on dark overlays**: Ensure gradient opacity ≥ 60% for WCAG AA compliance
- **#e01e12 text on white**: 4.5:1 contrast ratio (WCAG AA compliant)
- **#424242 grey on white**: 9.7:1 contrast ratio (WCAG AAA compliant)

---

## 📊 Responsive Breakpoints

| Breakpoint | Width | Hero Height | Title Size |
|:-----------|:------|:------------|:-----------|
| Mobile | < 768px | 60vh | 28-36px |
| Tablet | 768-1024px | 50vh | 32-42px |
| Desktop | > 1024px | 60-70vh | 36-48px |

---

## 🧪 Testing Checklist

- [ ] All 6 variants render correctly with sample data
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Breadcrumbs navigate correctly (React Router links)
- [ ] Metadata displays correctly (author, date, tags)
- [ ] Prize callout displays on competition variant
- [ ] Winner badge displays on award variant
- [ ] CategoryHeroLinks scroll horizontally on mobile
- [ ] Images load with correct Unsplash URLs
- [ ] Playfair Display SC loads for hero titles
- [ ] Karla loads for metadata/descriptions

---

## 📚 Related Documentation

- [Rooi Rose Content Model](/guidelines/data-structure/rooi-rose-content-model.md) — HeroProps interface and data types
- [Mega Menu System](/guidelines/components/navigation/mega-menu-system.md) — Navigation integration
- [Template System](/guidelines/rooi-rose/template-system.md) — Page template architecture

---

**Last Updated**: 2026-03-12  
**Orchestrator**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`
