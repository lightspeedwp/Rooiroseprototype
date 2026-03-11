# Layout Guidelines

**Last updated**: 2026-02-27
**Version**: 1.0

This document details the layout system for *Die Papier*, ensuring consistent spacing, alignment, and responsiveness across the application.

## 1. Responsive Breakpoints

The breakpoint scale aligns with Tailwind CSS v4 defaults and maps to WordPress theme.json `settings.layout`.

| Token | Width | Tailwind Prefix | Typical Devices | Notes |
|:------|:------|:----------------|:----------------|:------|
| `xs` | 320px | *(none — mobile-first base)* | Small phones | Minimum supported width |
| `sm` | 640px | `sm:` | Large phones, landscape | Single-column layouts switch to 2-col grids |
| `md` | 768px | `md:` | Tablets, portrait | Sidebar appears, horizontal tab bars |
| `lg` | 1024px | `lg:` | Tablets landscape, small laptops | 3-column grids, sidebar + content layout |
| `xl` | 1280px | `xl:` | Desktops | Content container reaches comfortable reading width |
| `2xl` | 1440px | `2xl:` | Wide desktops | Max container width (`max-w-[1440px]`) |

### 1.1 Dev Tool Breakpoint Conventions

Dev tool pages under `/ontwikkelaar/*` follow these additional rules:

- **Container**: `max-w-[1400px] mx-auto px-6 sm:px-8`
- **Tab bars**: Horizontal scroll at `< md`, full row at `≥ md`
- **Data grids/tables**: Horizontal scroll wrapper at `< lg`
- **Card grids**: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3`
- **Hero stats**: `grid-cols-2` → `sm:grid-cols-4`
- **Touch targets**: Minimum `44px` height on interactive elements at `< md`

## 2. The Container System

We use a centered container approach to keep content readable on large screens.

### 2.1 The "Align Wide" Standard
Almost all page content resides within a responsive container defined by:

```css
.container-standard {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px; /* max-w-[1440px] */
  padding-left: clamp(1rem, 4vw, 2rem);
  padding-right: clamp(1rem, 4vw, 2rem);
}
```

**Why this clamp?**
*   **Mobile**: `1rem` (16px) padding prevents edge-to-edge text.
*   **Tablet**: Scales dynamically (`4vw`).
*   **Desktop**: Caps at `2rem` (32px) to prevent excessive whitespace inside the container.

### 2.2 Full Width (Bleed)
Background sections (like the Red/Navy CTA bands) break out of the container:

```css
.full-bleed {
  width: 100%;
  /* Inner content usually applies .container-standard */
}
```

## 3. Grid System

We utilize CSS Grid (via Tailwind) for layouts.

### 3.1 Article Grid (3-Column)
Standard layout for category archives.

*   **Mobile**: 1 column
*   **Tablet**: 2 columns
*   **Desktop**: 3 columns

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- Article Cards -->
</div>
```

### 3.2 Sidebar Layout
Used on Single Article, Event, and Competition pages.

*   **Desktop**: Main Content (Flex Grow) + Sidebar (Fixed Width `300px` or `350px`)
*   **Mobile**: Stacked (Sidebar moves to bottom or specific widgets move up)

```html
<div class="flex flex-col lg:flex-row gap-8">
  <main class="flex-1 min-w-0">
    <!-- Content -->
  </main>
  <aside class="w-full lg:w-[300px] shrink-0 space-y-6">
    <!-- Widgets -->
  </aside>
</div>
```

**Note**: `min-w-0` on the flex child is crucial to prevent text truncation issues in flex containers.

## 4. Z-Index Scale

To prevent layering conflicts (e.g., sticky headers covering modals), we adhere to this scale:

| Level | Tailwind Class | Usage |
| :--- | :--- | :--- |
| **Negative** | `-z-10` | Background patterns/decorations. |
| **Base** | `z-0` | Default content. |
| **Elevated** | `z-10` | Cards with hover effects, relative positioning context. |
| **Sticky** | `z-20` | Sticky sidebars or TOCs. |
| **Header** | `z-40` | Site Header (Main Nav). |
| **Overlay** | `z-50` | Modals, Mobile Menu, Tooltips, Toasts. |

## 5. Section Spacing

Consistent vertical rhythm is key.

*   **Hero Sections**: Top padding is often removed if it sits directly under the nav, or standard `pt-8`.
*   **Standard Sections**: `py-12 md:py-16`.
*   **Compact Sections**: `py-8`.

## 6. Aspect Ratios

Standardize image dimensions to prevent layout shifts.

*   **Landscape (Standard)**: `aspect-[16/10]` (preferred over 16/9 for better vertical fill on cards).
*   **Video**: `aspect-video` (16/9).
*   **Portrait**: `aspect-[3/4]` (E-Editions, Book covers).
*   **Square**: `aspect-square` (1/1) (Avatars, Podcast thumbnails).

Always use `object-cover` to fill the container without distortion.