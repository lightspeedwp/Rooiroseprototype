# Component Building Guidelines

**Last updated**: 2026-03-04
**Version**: 1.0

---

## Directory Structure

All React components live under `/src/app/components/`:

| Directory | Purpose | Examples |
|:----------|:--------|:--------|
| `ads/` | Ad placement components | AdUnit, StickyFooterAd |
| `brand-quotes/` | Brand quote display | BrandQuote |
| `category/` | Category archive components | CategoryHero, CategoryGrid |
| `common/` | Shared utility components | ErrorBoundary, SEO, Breadcrumbs |
| `dev/` | Developer tool sub-components | DevNav, CodeViewer |
| `figma/` | Figma-generated components | ImageWithFallback (PROTECTED) |
| `home/` | Homepage sections | HeroSlider, TopStories, LatestNews |
| `icons/` | Custom icon components | Logo, BrandIcon |
| `layouts/` | Layout wrappers | RootLayout, MainLayout, DevLayout, CheckoutLayout |
| `marketing/` | Marketing/CTA components | SubscribeBanner, NewsletterSignup |
| `newsletter/` | Newsletter template parts | NewsletterHeader, ArticleCard |
| `parts/` | Template parts (WP mapping) | Header, Footer, Sidebar |
| `patterns/` | Block pattern components | HeroPattern, CTAPattern |
| `templates/` | Full page templates | TuesdayNewsletterTemplate |
| `ui/` | shadcn/ui primitives | Button, Dialog, Tabs, etc. |

## Naming Conventions

- **Files**: `kebab-case.tsx` (e.g., `hero-slider.tsx`)
- **Components**: `PascalCase` (e.g., `HeroSlider`)
- **Exports**: Named exports preferred (e.g., `export const HeroSlider = ...`)
- **Pages**: Named export matching component name (e.g., `export const Home = ...`)

## Component Patterns

### Standard Component

```tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div className="...">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### Page Component (Lazy-Loaded)

```tsx
// In /src/app/pages/MyPage.tsx
import React from 'react';

export const MyPage = () => {
  return (
    <div className="...">
      {/* Page content */}
    </div>
  );
};

// In routes.tsx
const MyPage = lazy(() => import('./pages/MyPage').then(m => ({ default: m.MyPage })));
```

### Layout Component

```tsx
// In /src/app/components/layouts/MyLayout.tsx
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

export const MyLayout = () => (
  <div className="...">
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </div>
);
```

## Protected Files

Never modify or delete:
- `/src/app/components/figma/ImageWithFallback.tsx` — Figma Make system file
- All files listed in `/guidelines/development/dev-tools-protection.md`

## Data Access

- Import data from `/src/app/data/` (never inline large datasets)
- Import shared types from `/src/app/types.ts`
- Component-specific types can be defined inline in the component file

## Styling Rules

- Use Tailwind CSS v4 utility classes
- Use CSS custom properties from `/src/styles/theme.css` for design tokens
- Do not use Tailwind font-size, font-weight, or line-height classes — use `style={{ }}` with CSS variables instead
- See `/guidelines/development/css-architecture.md` for the full CSS import chain

## Image Rules

- Use `ImageWithFallback` component for new images (not raw `<img>`)
- Use `figma:asset` scheme for Figma-imported raster images
- Use relative paths for SVGs from `/src/imports/`
- Always use `unsplash_tool` for stock photos — never hardcode URLs
- Add `loading="lazy"` and `decoding="async"` to below-the-fold images
- Add `fetchpriority="high"` to hero/above-the-fold images

## Router Rules

- Use `react-router` (NOT `react-router-dom`)
- Use `Link` and `Navigate` from `react-router`
- All new routes must be added to `/src/app/routes.tsx`
- All new public routes should have SEO config in `/src/app/data/routeSeoConfig.ts`
- Follow the bilingual URL pattern: Afrikaans primary + English alias
