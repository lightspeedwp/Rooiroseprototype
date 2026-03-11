# Layout Components

**Last updated**: 2026-03-02
**Version**: 1.0

These components define the structural shell of the application.

## `Header`
*   **Path**: `/src/app/components/parts/Header.tsx`
*   **Description**: The main site navigation bar. Contains Logo, Desktop Menu, Search Toggle, Cart Trigger, User Account Link, and "Teken in" CTA.
*   **Navigation Data**: All link arrays are centralized in `/src/app/data/navigation.ts`:
    *   `HEADER_TOP_BAR_LINKS` — Black top bar links (Oor ons, Ons span, Beleid, Kontak, Adverteer, Algemene vrae, Nuusbrief).
    *   `HEADER_CATEGORY_BAR_LINKS` — Desktop category nav bar (Tuis, Nuus, Sport, Dink, Sake, Leefstyl, Gebeure, Multimedia, Doodsberrigte, E-uitgawes).
    *   `SOCIAL_LINKS` — Social media icons.
*   **WordPress Conversion**:
    *   **Type**: Template Part (`header.html`)
    *   **Blocks**: `core/site-logo`, `core/navigation` (for menu), `core/search`, `woocommerce/mini-cart`.
    *   **Notes**: The mobile menu is a complex interaction that may need a specific "Mobile Navigation" block plugin or a custom block in WordPress.

## `Footer`
*   **Path**: `/src/app/components/parts/Footer.tsx`
*   **Description**: Site footer containing newsletter CTA band, 4-column link grid, contact strip, accreditations row, and legal bottom bar.
*   **Navigation Data**: Driven by `FOOTER_LINK_COLUMNS` and `FOOTER_LEGAL_LINKS` from `/src/app/data/navigation.ts`.
*   **WordPress Conversion**:
    *   **Type**: Template Part (`footer.html`)
    *   **Blocks**: `core/columns` (4 cols), `core/paragraph`, `core/list`, `core/social-links`.

## `MobileMenu`
*   **Path**: `/src/app/components/parts/MobileMenu.tsx`
*   **Description**: A `Sheet` component that slides in from the left. Contains the full navigation tree and "Subscribe" button for mobile users.
*   **Navigation Data**: Uses its own `CATEGORIES` and `SECONDARY_NAV` arrays (local to the component).
*   **WordPress Conversion**:
    *   **Type**: Part of `header.html` (often handled by `core/navigation` overlay mode).

## `PageContainer`
*   **Path**: `/src/app/components/common/PageContainer.tsx`
*   **Description**: Standard align-wide page wrapper. DRYs up the repeated container + breadcrumb + spacing pattern used by all content pages.
*   **Props**:
    *   `breadcrumbs?: BreadcrumbItem[]` — Optional breadcrumb items (Tuisblad is added automatically).
    *   `children: React.ReactNode` — Page content inside the container.
    *   `className?: string` — Extra classes on the container div.
    *   `noPadding?: boolean` — Skip the default `pt-8` top padding after breadcrumbs.
*   **Standard Pattern**: `w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)]` + `<Breadcrumbs>` + `pt-8` content.
*   **Usage**:
    ```tsx
    <div className="min-h-screen bg-gray-50">
      <PageContainer breadcrumbs={[{ label: 'Oor ons' }]}>
        <h1>Page Title</h1>
        ...content...
      </PageContainer>
      <PageFAQSection items={ABOUT_FAQS} />
    </div>
    ```
*   **Notes**: The outer wrapper (min-h-screen, background) stays in the page file so full-width siblings like `<PageFAQSection>` can sit alongside. For pages with full-width heroes between breadcrumbs and content, use the self-closing `<PageContainer breadcrumbs={[...]} noPadding />` pattern so breadcrumbs render inside the align-wide container but the hero sits outside.
*   **Migration Status**: All pages now use `<PageContainer>` except `SingleEEdition.tsx` (sticky header requires Breadcrumbs inside a custom container).

## `Container`
*   **Path**: `/src/app/components/common/Container.tsx`
*   **Description**: A wrapper div that centers content and applies `max-w-[1440px]` and horizontal padding.
*   **Standard Pattern**: `w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)]` — fluid padding from 16px (mobile) to 32px (desktop).
*   **NEVER** use `container mx-auto px-4` or fixed `px-4` — always use the fluid `clamp()` pattern.
*   **Note**: Prefer `PageContainer` for page-level usage (includes breadcrumbs + spacing). Use `Container` for repeated inner sections.
*   **WordPress Conversion**:
    *   **Type**: `core/group` block with "Layout: Constrained" settings in `theme.json`.

## `Breadcrumbs`
*   **Path**: `/src/app/components/parts/Breadcrumbs.tsx`
*   **Description**: Navigation path (Tuisblad > Category > Article). Auto-included by `PageContainer`. Only import directly for special layouts (e.g., sticky headers in `SingleEEdition.tsx`).
*   **WordPress Conversion**:
    *   **Type**: Block.
    *   **Strategy**: Use Yoast SEO breadcrumbs block or a custom theme block.

## `AdContainer` / `AdSlot`
*   **Path**: `/src/app/components/ads/AdContainer.tsx`
*   **Description**: Placeholders for Google Ad Manager / AdSense.
*   **WordPress Conversion**:
    *   **Type**: Custom Block or Shortcode.
    *   **Strategy**: Use "Advanced Ads" plugin or similar to inject ad codes into these slots defined in templates.