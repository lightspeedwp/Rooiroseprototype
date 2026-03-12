# Editorial Components — rooi rose

**Category**: Design Tokens  
**Last Updated**: 2026-03-12  
**Status**: ✅ Production Ready

---

## Overview

This guideline documents the editorial components used throughout the rooi rose magazine to create engaging, visually rich content experiences. These components include pull quotes, hero sections, image galleries, and scrollytelling patterns.

---

## 1. Pull Quotes

Pull quotes highlight key statements within articles, creating visual breaks and emphasizing important messages.

### Design Tokens

**Typography**:
- Font: Playfair Display SC (serif)
- Size: `var(--wp--preset--font-size--x-large)` (30px / 1.875rem)
- Weight: 400 (Regular)
- Style: Italic
- Line Height: 1.4

**Colors**:
- Text: `var(--custom-primary)` (#e01e12 red)
- Border: `var(--custom-primary)` (4px solid, left side)
- Background: Transparent

**Spacing**:
- Padding: `var(--wp--preset--spacing--medium)` (32px) left
- Margin: `var(--wp--preset--spacing--large)` (48px) top/bottom
- Max Width: 680px (same as content well)

### WordPress Block

**Block**: `core/quote`  
**Variation**: `pull-quote`  
**File**: `/styles/blocks/core/quote/pull-quote.json`

**Block Code**:
```html
<!-- wp:quote {"className":"is-style-pull-quote"} -->
<blockquote class="wp-block-quote is-style-pull-quote">
  <p class="has-brand-serif-font-family has-primary-color">
    "Kos is liefde wat sigbaar gemaak word."
  </p>
  <cite class="has-brand-sans-font-family has-small-font-size">
    — Sarah van der Merwe, Kosskrywer
  </cite>
</blockquote>
<!-- /wp:quote -->
```

### React Component

**Component**: `PullQuoteSection`  
**File**: `/src/app/components/home/PullQuoteSection.tsx`

**Props**:
```tsx
interface PullQuoteSectionProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
}
```

**Usage**:
```tsx
<PullQuoteSection 
  quote="Kos is liefde wat sigbaar gemaak word."
  author="Sarah van der Merwe"
  role="Kosskrywer"
/>
```

**Implementation**:
```tsx
export function PullQuoteSection({ quote, author, role }: PullQuoteSectionProps) {
  return (
    <blockquote className="my-12 border-l-4 border-[var(--custom-primary)] pl-8 max-w-[680px]">
      <p className="has-brand-serif-font-family text-[1.875rem] italic leading-relaxed text-[var(--custom-primary)]">
        "{quote}"
      </p>
      {author && (
        <cite className="has-brand-sans-font-family text-sm not-italic text-[var(--custom-tagline-grey)] block mt-4">
          — {author}{role && `, ${role}`}
        </cite>
      )}
    </blockquote>
  );
}
```

### Variations

#### 1. Centered Pull Quote

**Use Case**: Section dividers, stand-alone quotes

**Design Tokens**:
- Text Align: Center
- Border: None
- Max Width: 800px
- Margin: `var(--wp--preset--spacing--x-large)` (64px) top/bottom

**Example**:
```html
<!-- wp:quote {"className":"is-style-pull-quote","align":"center"} -->
<blockquote class="wp-block-quote is-style-pull-quote has-text-align-center">
  <p class="has-brand-serif-font-family has-primary-color">
    "Die beste resepte kom van die hart, nie die boek nie."
  </p>
</blockquote>
<!-- /wp:quote -->
```

#### 2. Sidebar Pull Quote

**Use Case**: Magazine-style layouts with sidebar content

**Design Tokens**:
- Float: Right (desktop)
- Width: 300px (desktop), 100% (mobile)
- Margin: `var(--wp--preset--spacing--medium)` (left, on desktop)
- Font Size: `var(--wp--preset--font-size--large)` (24px, slightly smaller)

---

## 2. Hero Sections

Hero sections create impactful entry points for articles and pages.

### Hero Slider (Homepage)

**Component**: `HeroSlider`  
**File**: `/src/app/components/home/HeroSlider.tsx`  
**Library**: `react-slick`

#### Design Tokens

**Layout**:
- Aspect Ratio: 3:2 (1200px × 800px)
- Height: 500px (desktop), 400px (tablet), 300px (mobile)
- Image: Cover fit with dark gradient overlay

**Typography**:
- Headline: Playfair Display SC, `var(--wp--preset--font-size--xx-large)` (36px)
- Excerpt: Karla, `var(--wp--preset--font-size--base)` (16px)
- Color: White (on dark overlay)

**Overlay**:
- Background: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))`
- Padding: `var(--wp--preset--spacing--large)` (48px)

**Controls**:
- Arrows: White icons, 40px size
- Dots: White circles, 12px diameter
- Auto-play: 5 seconds per slide
- Transition: Fade (500ms)

#### React Implementation

```tsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  pauseOnHover: true,
};

export function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <div className="hero-slider relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[500px]">
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h2 className="has-brand-serif-font-family text-[2.25rem] text-white mb-4">
                {slide.title}
              </h2>
              <p className="has-brand-sans-font-family text-base text-white/90 max-w-2xl">
                {slide.excerpt}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
```

### Article Hero

**Component**: `ArticleHero`  
**File**: `/src/app/components/common/ArticleHero.tsx`

#### Design Tokens

**Layout**:
- Image Aspect Ratio: 3:2 or 16:9
- Max Width: Full width (constrained to container)
- Spacing: `var(--wp--preset--spacing--x-large)` below image

**Typography**:
- Headline: Playfair Display SC, `var(--wp--preset--font-size--xxx-large)` (48px)
- Byline: Karla, `var(--wp--preset--font-size--small)` (14px)
- Category Badge: Karla, `var(--wp--preset--font-size--x-small)` (12px), uppercase

**Colors**:
- Headline: `var(--custom-contrast)`
- Byline: `var(--custom-tagline-grey)` (#424242)
- Category Badge: White text on `var(--custom-primary)` background

#### WordPress Block Pattern

```html
<!-- wp:group {"className":"article-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group article-hero">
  
  <!-- Featured Image -->
  <!-- wp:post-featured-image {"aspectRatio":"3/2","sizeSlug":"large"} /-->
  
  <!-- Breadcrumbs -->
  <!-- wp:yoast-seo/breadcrumbs /-->
  
  <!-- Category Badge -->
  <!-- wp:post-terms {"term":"category","className":"category-badge"} /-->
  
  <!-- Article Title -->
  <!-- wp:post-title {"level":1,"className":"has-brand-serif-font-family"} /-->
  
  <!-- Byline -->
  <!-- wp:group {"className":"byline","layout":{"type":"flex"}} -->
  <div class="wp-block-group byline">
    <!-- wp:post-author {"showAvatar":true} /-->
    <!-- wp:post-date /-->
    <!-- wp:paragraph {"className":"reading-time"} -->
    <p class="reading-time">8 minute leestyd</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

#### React Implementation

```tsx
interface ArticleHeroProps {
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
}

export function ArticleHero({ 
  image, 
  title, 
  category, 
  author, 
  date, 
  readingTime 
}: ArticleHeroProps) {
  return (
    <div className="article-hero mb-16">
      <img 
        src={image}
        alt={title}
        className="w-full aspect-[3/2] object-cover rounded-lg mb-8"
        loading="eager"
        fetchpriority="high"
      />
      
      <span className="inline-block bg-[var(--custom-primary)] text-white text-xs uppercase font-semibold px-3 py-1 rounded mb-4">
        {category}
      </span>
      
      <h1 className="has-brand-serif-font-family text-[3rem] font-bold leading-tight mb-6">
        {title}
      </h1>
      
      <div className="flex items-center gap-4 text-sm text-[var(--custom-tagline-grey)]">
        <span>Deur <strong>{author}</strong></span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readingTime} minute leestyd</span>
      </div>
    </div>
  );
}
```

---

## 3. Image Galleries

Image galleries showcase multiple related images in a cohesive layout.

### Gallery Grid

**Block**: `core/gallery`  
**Variation**: `default` (grid layout)

#### Design Tokens

**Layout**:
- Columns: 3 (desktop), 2 (tablet), 1 (mobile)
- Gap: `var(--wp--preset--spacing--small)` (16px)
- Image Aspect Ratio: Consistent within gallery (3:2 recommended)

**Captions**:
- Font: Karla, `var(--wp--preset--font-size--small)` (14px)
- Color: `var(--custom-tagline-grey)`
- Padding: `var(--wp--preset--spacing--x-small)` (8px) top

#### WordPress Block

```html
<!-- wp:gallery {"columns":3,"linkTo":"none","sizeSlug":"large"} -->
<figure class="wp-block-gallery has-nested-images columns-3">
  
  <!-- wp:image {"sizeSlug":"large","aspectRatio":"3/2"} -->
  <figure class="wp-block-image size-large">
    <img src="image1.jpg" alt="Description" />
    <figcaption class="wp-element-caption">Caption text</figcaption>
  </figure>
  <!-- /wp:image -->
  
  <!-- Repeat for each image -->
  
</figure>
<!-- /wp:gallery -->
```

### Masonry Gallery

**Use Case**: Variable height images, Pinterest-style layout

**Implementation**: Use CSS columns or JavaScript masonry library

**Design Tokens**:
- Columns: 3 (desktop), 2 (tablet), 1 (mobile)
- Gap: `var(--wp--preset--spacing--small)` (16px)
- Break Inside: Avoid (prevent image splitting)

```css
.masonry-gallery {
  column-count: 3;
  column-gap: var(--wp--preset--spacing--small);
}

.masonry-gallery img {
  width: 100%;
  height: auto;
  margin-bottom: var(--wp--preset--spacing--small);
  break-inside: avoid;
}

@media (max-width: 768px) {
  .masonry-gallery {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .masonry-gallery {
    column-count: 1;
  }
}
```

---

## 4. Scrollytelling Patterns

Scrollytelling creates narrative experiences that reveal content as users scroll.

### Fade-In on Scroll

**Use Case**: Progressive content reveal for immersive storytelling

#### Design Tokens

**Animation**:
- Transition: Opacity 0 → 1 (800ms ease-out)
- Transform: translateY(30px) → translateY(0)
- Trigger: When element enters viewport (80% visible)

**Implementation**: Intersection Observer API

```tsx
import { useEffect, useRef, useState } from 'react';

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
```

**Usage**:
```tsx
<FadeInSection>
  <h2>Hierdie afdeling verskyn terwyl jy afrol</h2>
  <p>Content vloei natuurlik in soos jy lees.</p>
</FadeInSection>
```

### Sticky Sidebar

**Use Case**: Keep related content visible during scroll (recipes, TOC)

#### Design Tokens

**Position**:
- Desktop: `position: sticky; top: 80px;` (below header)
- Mobile: `position: static` (no sticky behavior)
- Max Height: `calc(100vh - 100px)` (viewport minus header/padding)
- Overflow: Auto (scrollable if content exceeds viewport)

**Layout**:
- Width: 300px (desktop sidebar)
- Padding: `var(--wp--preset--spacing--medium)` (32px)
- Background: `var(--custom-muted)` (light grey)
- Border Radius: `var(--wp--preset--border-radius--medium)` (8px)

```tsx
export function StickySidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="sticky top-20 max-h-[calc(100vh-100px)] overflow-auto p-8 bg-[var(--custom-muted)] rounded-lg hidden lg:block">
      {children}
    </aside>
  );
}
```

**WordPress Block**:
```html
<!-- wp:group {"className":"sticky-sidebar","style":{"position":{"type":"sticky","top":"80px"}}} -->
<div class="wp-block-group sticky-sidebar">
  <!-- Sidebar content -->
</div>
<!-- /wp:group -->
```

### Parallax Background

**Use Case**: Hero sections with depth, immersive features

#### Design Tokens

**Effect**:
- Scroll Speed: 0.5x (background moves slower than foreground)
- Background: Fixed attachment (desktop only)
- Mobile: Static background (no parallax due to performance)

**Implementation**:
```tsx
import { useEffect, useState } from 'react';

export function ParallaxSection({ 
  backgroundImage, 
  children 
}: { 
  backgroundImage: string; 
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
```

**Note**: Use sparingly for performance. Consider using `will-change: transform` for smoother animations.

---

## 5. Content Blocks

### Callout Box

**Use Case**: Tips, warnings, important notes

#### Design Tokens

**Colors**:
- Info: Blue background (#E3F2FD), dark blue border (#1976D2)
- Success: Green background (#E8F5E9), dark green border (#388E3C)
- Warning: Yellow background (#FFF9C4), dark yellow border (#F57C00)
- Error: Red background (#FFEBEE), dark red border (#D32F2F)

**Typography**:
- Font: Karla
- Size: `var(--wp--preset--font-size--base)` (16px)
- Icon: 24px (lucide-react)

**Spacing**:
- Padding: `var(--wp--preset--spacing--medium)` (32px)
- Border: 4px solid (left side)
- Border Radius: `var(--wp--preset--border-radius--small)` (4px)

**WordPress Block**:
```html
<!-- wp:group {"className":"callout-box callout-info"} -->
<div class="wp-block-group callout-box callout-info">
  <p><strong>💡 Wenk:</strong> Gebruik vars kruie vir die beste smaak.</p>
</div>
<!-- /wp:group -->
```

**React Component**:
```tsx
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

type CalloutType = 'info' | 'success' | 'warning' | 'error';

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

const styles = {
  info: 'bg-blue-50 border-blue-600',
  success: 'bg-green-50 border-green-600',
  warning: 'bg-yellow-50 border-yellow-600',
  error: 'bg-red-50 border-red-600',
};

export function CalloutBox({ 
  type = 'info', 
  title, 
  children 
}: { 
  type?: CalloutType; 
  title?: string; 
  children: React.ReactNode;
}) {
  const Icon = icons[type];
  
  return (
    <div className={`p-8 border-l-4 rounded ${styles[type]} my-6`}>
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
        <div>
          {title && <strong className="block mb-2">{title}</strong>}
          {children}
        </div>
      </div>
    </div>
  );
}
```

**Usage**:
```tsx
<CalloutBox type="info" title="Wenk">
  Gebruik vars kruie vir die beste smaak.
</CalloutBox>

<CalloutBox type="warning" title="Let op">
  Moenie die oond te warm maak nie.
</CalloutBox>
```

### Stats/Numbers Block

**Use Case**: Highlight key statistics, nutrition facts

#### Design Tokens

**Typography**:
- Number: Playfair Display SC, `var(--wp--preset--font-size--xxx-large)` (48px), bold
- Label: Karla, `var(--wp--preset--font-size--small)` (14px), uppercase

**Colors**:
- Number: `var(--custom-primary)` (#e01e12 red)
- Label: `var(--custom-tagline-grey)` (#424242)

**Layout**:
- Display: Flex row (desktop), Flex column (mobile)
- Gap: `var(--wp--preset--spacing--large)` (48px)
- Alignment: Center

```tsx
interface Stat {
  number: string;
  label: string;
}

export function StatsBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-12 my-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="has-brand-serif-font-family text-[3rem] font-bold text-[var(--custom-primary)]">
            {stat.number}
          </div>
          <div className="has-brand-sans-font-family text-sm uppercase text-[var(--custom-tagline-grey)] mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
```

**Usage**:
```tsx
<StatsBlock 
  stats={[
    { number: '285', label: 'Kalorieë' },
    { number: '12g', label: 'Vet' },
    { number: '38g', label: 'Koolhidrate' },
    { number: '6g', label: 'Proteïen' },
  ]}
/>
```

---

## 6. Interactive Elements

### Accordion/FAQ

**Block**: `yoast/faq-block` (with schema.org markup)

#### Design Tokens

**Typography**:
- Question: Karla, `var(--wp--preset--font-size--medium)` (20px), semibold
- Answer: Karla, `var(--wp--preset--font-size--base)` (16px)

**Colors**:
- Question: `var(--custom-contrast)`
- Answer: `var(--custom-contrast)`
- Icon: `var(--custom-primary)` (chevron)

**Spacing**:
- Padding: `var(--wp--preset--spacing--medium)` (32px)
- Gap: `var(--wp--preset--spacing--small)` (16px) between items

**WordPress Block**:
```html
<!-- wp:yoast/faq-block {"questions":[...]} /-->
```

**React Component** (using shadcn/ui Accordion):
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="has-brand-sans-font-family text-lg font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="has-brand-sans-font-family text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Tabs

**Use Case**: Organize related content (e.g., recipe variations)

**React Component** (using shadcn/ui Tabs):
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RecipeVariations() {
  return (
    <Tabs defaultValue="traditional" className="w-full">
      <TabsList>
        <TabsTrigger value="traditional">Tradisioneel</TabsTrigger>
        <TabsTrigger value="vegan">Veganisties</TabsTrigger>
        <TabsTrigger value="glutenfree">Glutenvry</TabsTrigger>
      </TabsList>
      
      <TabsContent value="traditional">
        <p>Traditional recipe content...</p>
      </TabsContent>
      
      <TabsContent value="vegan">
        <p>Vegan variation content...</p>
      </TabsContent>
      
      <TabsContent value="glutenfree">
        <p>Gluten-free variation content...</p>
      </TabsContent>
    </Tabs>
  );
}
```

---

## 7. Performance Considerations

### Lazy Loading

**Images**:
- Above fold: `loading="eager"`, `fetchpriority="high"`
- Below fold: `loading="lazy"`, `decoding="async"`

**Components**:
- Hero slider: Eager load first slide, lazy load rest
- Galleries: Lazy load all images below fold
- Parallax sections: Load background on scroll trigger

### Animation Performance

**Use Cases for `will-change`**:
- Parallax backgrounds: `will-change: transform`
- Fade-in sections: `will-change: opacity, transform`
- Sticky sidebars: Not needed (position sticky is performant)

**Reduce Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  .fade-in-section {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 8. Related Guidelines

- [Editorial Style Guide](/guidelines/rooi-rose/editorial-style-guide.md) — Writing standards
- [Magazine Layouts](/guidelines/rooi-rose/magazine-layouts.md) — Layout patterns
- [Typography](/guidelines/design-tokens/typography.md) — Font system
- [Spacing](/guidelines/design-tokens/spacing.md) — Spacing scale
- [Interactions](/guidelines/design-tokens/interactions.md) — Animation standards

---

**Last Updated**: 2026-03-12  
**Maintained By**: rooi rose Design System Team
