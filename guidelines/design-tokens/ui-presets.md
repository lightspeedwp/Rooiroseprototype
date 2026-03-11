# UI Presets

**Last updated**: 2026-03-02
**Version**: 1.0

This document defines standard UI patterns for *Die Papier* that should be consistently implemented across the React codebase and future WordPress theme.

## 1. Layout Presets

### 1.1 Content Containers

We use a centered container strategy with a maximum width of `1440px`.

| Preset Name | Tailwind Classes | Usage |
| :--- | :--- | :--- |
| **Standard Container** | `w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)]` | Default for all page content (articles, archives, forms). |
| **Wide Container** | `w-full mx-auto max-w-[1440px] px-4` | For "hero" sections or e-edition viewers requiring more horizontal space. |
| **Full Bleed** | `w-full` | Background sections (e.g., Newsletter CTA band). Inner content uses Standard Container. |
| **Narrow/Text** | `max-w-3xl mx-auto` | Long-form reading content (articles, policies) for readability. |

### 1.2 Spacing Scale (Vertical Rhythm)

Standard vertical spacing between major sections.

| Preset Name | Tailwind Class | Mobile Value | Desktop Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Section Gap** | `py-12 md:py-16` | `3rem` | `4rem` | Between major page sections (e.g., Hero and Content). |
| **Component Gap** | `gap-6 md:gap-8` | `1.5rem` | `2rem` | Grid gaps, flex gaps between cards. |
| **Element Gap** | `mb-4` / `space-y-4` | `1rem` | `1rem` | Paragraph spacing, list item spacing. |

## 2. Navigation Presets

### 2.1 Sticky Header

The header uses a multi-part sticky behavior.

*   **Behavior**: `sticky top-0 z-50`
*   **Transition**: `transition-transform duration-300`
*   **Scroll Logic**:
    *   **Scroll Down**: Header translates Y (`-100%`) to hide top bar, keeping logo/nav visible or compact.
    *   **Scroll Up**: Header reveals fully.

### 2.2 Mobile Navigation

*   **Trigger**: Hamburger menu (`lg:hidden`).
*   **Overlay**: Fullscreen `fixed inset-0 z-50 bg-[#142135]`.
*   **Animation**: Slide-in from left (`x: -100%` -> `x: 0%`) or Fade-in.
*   **Content**: Scrollable vertical list with accordion sub-menus.

## 3. Component Presets

### 3.1 Buttons

Standard button styles derived from `shadcn/ui` but customized for *Die Papier*.

| Variant | Base Classes | Colors (Bg / Text / Border) | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `h-10 px-4 py-2 rounded font-bold transition-colors` | `#D70025` / White / None | Main CTAs (Subscribe, Read More). |
| **Secondary** | `h-10 px-4 py-2 rounded font-bold transition-colors` | `#142135` / White / None | Alternative actions (Login, Contact). |
| **Outline** | `h-10 px-4 py-2 rounded font-bold border-2 transition-colors` | Transparent / `#142135` / `#142135` | Secondary actions. |
| **Ghost** | `hover:bg-accent hover:text-accent-foreground` | Transparent / Inherit / None | Icon buttons, tertiary links. |
| **Link** | `text-primary underline-offset-4 hover:underline` | Transparent / `#D70025` / None | Inline text links. |

### 3.2 Cards (Articles, Events)

Common card styling for consistency.

*   **Container**: `bg-white dark:bg-[#162233] border border-gray-100 dark:border-[#1E3044] rounded-lg overflow-hidden`
*   **Hover Effect**: `hover:shadow-lg transition-shadow duration-300 group`
*   **Image**: `aspect-[16/10] object-cover w-full group-hover:scale-105 transition-transform duration-500`
*   **Content Padding**: `p-5`

### 3.3 Shadows

| Preset | Tailwind Class | CSS Value | Usage |
| :--- | :--- | :--- | :--- |
| **Small** | `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Buttons, input fields. |
| **Medium** | `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Hover states, dropdown menus. |
| **Large** | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Modals, sticky headers. |
| **Dark Mode** | `dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)]` | Custom | Dark mode card shadows (lighter, more spread). |

### 3.4 Radii (Border Radius)

*   **Base**: `rounded-md` (`0.375rem`) - Inputs, Buttons.
*   **Large**: `rounded-lg` (`0.5rem`) - Cards, Modals.
*   **Full**: `rounded-full` (`9999px`) - Badges, Avatars, Pills.

## 4. Responsive Breakpoints

We use standard Tailwind breakpoints but treat them semantically:

| Breakpoint | Width | Usage |
| :--- | :--- | :--- |
| `sm` | `640px` | Mobile Landscape / Large Phones. |
| `md` | `768px` | Tablets (Portrait). Navigation often switches to "Desktop" here or at `lg`. |
| `lg` | `1024px` | Tablets (Landscape) / Small Laptops. **Primary breakpoint for Desktop Nav**. |
| `xl` | `1280px` | Desktops. |
| `2xl` | `1536px` | Large Screens. |

## 5. Dark Mode Strategy

*   **Background**: `bg-white` (Light) -> `dark:bg-[#0D1520]` (Dark Page Bg) or `dark:bg-[#162233]` (Dark Card Bg).
*   **Text**: `text-[#142135]` (Light Primary) -> `dark:text-[#E8E8ED]` (Dark Primary).
*   **Border**: `border-gray-200` -> `dark:border-[#1E3044]`.
*   **Accent**: `#D70025` remains the same but may need slight adjustment for contrast on dark backgrounds (`#E83050` recommended for dark mode text).