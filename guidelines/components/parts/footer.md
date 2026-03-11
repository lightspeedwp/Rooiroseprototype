# Footer

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Part
**React source**: `/src/app/components/parts/Footer.tsx`
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/footer.html`

---

## 1. Purpose

The site-wide footer providing a newsletter CTA band, four-column navigation, social media links, physical contact details, accreditation logos, legal links, and copyright information. It appears on every page and is branded in the navy dark palette. The footer drives newsletter signups and reinforces brand credibility through press accreditations.

## 2. Visual Structure

```
┌─ <footer> (.font-inter)
│
│  ┌─ Band 1: Newsletter CTA (bg-brand-red, fluid px)
│  │  └─ Inner (.alignwide)
│  │     ├─ Left: Mail icon (circle bg-white/15) + Title (H3 serif) + Description
│  │     └─ Right: Email input + "Nuusbrief" submit button (bg-brand-navy)
│  │
│  ┌─ Band 2: Main Footer Body (bg-brand-navy, fluid px)
│  │  └─ Inner (.alignwide)
│  │     │
│  │     ├─ Top section (pt-14 pb-10, grid 12-col)
│  │     │  ├─ Brand column (col-span-4): Logo + Description + Social icons (5 × circle)
│  │     │  └─ Links columns (col-span-8): 4-col grid of link lists
│  │     │     ├─ Kategorieë (8 links)
│  │     │     ├─ Inhoud (6 links)
│  │     │     ├─ Dienste (6 links)
│  │     │     └─ Die Papier (6 links)
│  │     │
│  │     ├─ Contact Strip (border-t, py-6): Label + Address + Email
│  │     │
│  │     ├─ Accreditations (border-t, py-6): Label + 4 logos (inverted white)
│  │     │
│  │     └─ Bottom Bar (border-t, py-6): Copyright + Legal links × 4
```

## 3. Props / Attributes

The Footer is self-contained with no external props.

| Internal State | Type | Purpose | WP Equivalent |
|:---------------|:-----|:--------|:-------------|
| `navigate` | function | Redirects to newsletter page on form submit | Form action URL |

## 4. Data Sources

- **Navigation links**: `/src/app/data/navigation.ts`
  - `SOCIAL_LINKS` — 5 social platforms (Facebook, Instagram, X, LinkedIn, TikTok)
  - `FOOTER_LINK_COLUMNS` — 4 columns with 6-8 links each (Kategorieë, Inhoud, Dienste, Die Papier)
  - `FOOTER_LEGAL_LINKS` — 4 legal links (Inhoudsopgawe, Beleid, Privaatheidsbeleid, Terme en voorwaardes)
  - `FOOTER_NAVIGATION` — Copyright string
  - `FOOTER_CONTENT` — Newsletter strings, brand description, contact info, accreditation items
- **Assets**: 3 accreditation logos via `figma:asset/` imports (Press Council, WAN-IFRA, FCJ) + 1 external URL (IAB SA)
- **Utility**: `renderWithBrandItalics()` from `/src/app/utils/brandItalics.tsx` — renders "Die Papier" in italics within text strings
- **WordPress source**: `wp_navigation` blocks for link columns, `core/social-links`, static content blocks

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Line-Height | Weight | Extras |
|:--------|:------------|:-----------|:------------|:-------|:-------|
| Newsletter title | `--font-heading` | `--text-h3` | `--lh-h3` | 400 | `fvs: --fvs-h3`, `ls: --ls-h3` |
| Newsletter description | `--font-inter` | `text-sm` (14px) | default | 400 | `text-white/75` |
| Newsletter input | `--font-inter` | `text-sm` | default | 400 | — |
| Newsletter button | `--font-inter` | `text-sm` | default | 700 | — |
| Brand description | `--font-inter` | `text-sm` | `leading-relaxed` | 400 | `text-gray-400` |
| Column heading | `--font-heading` | `text-xs` (12px) | `--lh-h3` | 400 | `uppercase tracking-[0.15em]`, `text-brand-red`, `fvs: --fvs-h3` |
| Column links | `--font-inter` | `text-sm` | default | 400 | `text-gray-400 hover:text-white` |
| Contact label | `--font-inter` | `text-xs` | default | 700 | `uppercase tracking-[0.15em]`, `text-gray-500` |
| Contact details | `--font-inter` | `text-xs` | default | 400 | `text-gray-400` |
| Accreditations label | `--font-inter` | `text-xs` | default | 700 | `uppercase tracking-[0.15em]`, `text-gray-500` |
| Copyright | `--font-inter` | `text-xs` | default | 400 | `text-gray-500` |
| Legal links | `--font-inter` | `text-xs` | default | 400 | `text-gray-500 hover:text-white` |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Newsletter band py | `py-8 md:py-6` | `--space-80` / `--space-60` |
| Main body pt | `pt-14` (56px) | ~`--space-100` × 1.4 |
| Main body pb | `pb-10` (40px) | `--space-100` |
| Column grid gap | `gap-10 lg:gap-8` | `--space-100` / `--space-80` |
| Link column gap | `gap-8 lg:gap-6` | `--space-80` / `--space-60` |
| Link list item spacing | `space-y-2.5` (10px) | ~`--space-10` × 2.5 |
| Section separators | `py-6` (24px) | `--space-60` |
| Fluid horizontal padding | `clamp(1rem, 4vw, 2rem)` | Same as header |
| Social icon size | `w-9 h-9` (36px) | — |
| Social icon gap | `gap-3` (12px) | `--space-30` |
| Newsletter form gap | `gap-0` (input + button flush) | — |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Newsletter band bg | `--custom-primary` (`bg-brand-red`) | `--primary` | `dark:bg-primary` |
| Newsletter button bg | `--brand-navy` | `--brand-navy` | Same in both modes |
| Newsletter button hover | `--brand-navy-light` | `#1A3A5F` | `dark:hover:bg-[#1A3A5F]` — **dark:hover exemption** |
| Main body bg | `--brand-navy` (#172134) | Same | No change |
| Main body text | `#FFFFFF` | Same | — |
| Brand description | `text-gray-400` | Same (on navy bg) | — |
| Column heading | `--custom-primary` (`text-brand-red`) | Same | — |
| Column links | `text-gray-400` | Same | `hover:text-white` |
| Social icon bg | `bg-white/8` | Same | `hover:bg-brand-red` |
| Social icon color | `text-gray-400` | Same | `hover:text-white` |
| Section borders | `border-white/8` | Same | — |
| Contact label/details | `text-gray-500` / `text-gray-400` | Same | — |
| Accreditation logos | `brightness-0 invert` (white) | Same | CSS filter |

### Shadows / Borders

| Element | Value | Token |
|:--------|:------|:------|
| Section separators | `border-t border-white/8` | Custom opacity border |
| Newsletter input border | `border border-white/25 border-r-0` | — |
| Newsletter input radius | `rounded-l-lg` | Left corners only |
| Newsletter button radius | `rounded-r-lg` | Right corners only |

## 6. Section Style

Not directly applicable — the footer is a template part. However, the newsletter CTA band uses styling that maps to `is-style-section-red` and the main body maps to `is-style-section-navy`.

## 7. BEM Class Map

No custom BEM classes exist in `style.css` for the footer. WordPress should use:

| Suggested BEM Class | Element | WordPress Block |
|:---------------------|:--------|:---------------|
| `.dp-footer` | Root `<footer>` | Template part wrapper |
| `.dp-footer__newsletter` | Newsletter CTA band | `core/group` with red bg |
| `.dp-footer__newsletter-title` | Newsletter title | `core/heading` (H3) |
| `.dp-footer__newsletter-form` | Email + button | `core/search` or Gravity Forms shortcode |
| `.dp-footer__body` | Main navy section | `core/group` with navy bg |
| `.dp-footer__brand` | Brand column (logo + desc) | `core/group` |
| `.dp-footer__columns` | Link grid wrapper | `core/columns` (4-col) |
| `.dp-footer__column-title` | Column heading | `core/heading` (H6 style) |
| `.dp-footer__contact` | Contact strip | `core/group` |
| `.dp-footer__accreditations` | Accreditations row | `core/group` with images |
| `.dp-footer__bottom` | Copyright + legal | `core/group` |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` (mobile) | Newsletter CTA stacks vertically (column). Link columns: 2-col grid. Contact details stack. Accreditations wrap. Copyright + legal links stack centered. |
| `768px – 1023px` (tablet) | Newsletter CTA side-by-side. Link columns: 4-col grid (via `sm:grid-cols-4`). Contact details horizontal. |
| `≥ 1024px` (desktop) | Full 12-col grid: brand (4-col) + links (8-col, 4 sub-columns). All sections horizontal. |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Newsletter band bg | `bg-brand-red` → `bg-primary` | `dark:bg-primary` (same red) |
| Newsletter button hover | `hover:bg-brand-navy-light` → `hover:bg-[#1A3A5F]` | **Exemption**: dark:hover navy override |
| Main body | No change — navy background is same in both modes | — |

**Note**: Because the footer already uses a dark (navy) background, most text colors remain unchanged between light and dark mode. The footer is inherently "dark" regardless of the global theme.

## 10. Accessibility

- **ARIA roles**: `<footer>` landmark element
- **Keyboard navigation**: All links are standard `<a>` / `<Link>` elements, naturally focusable
- **Social links**: Each has a `title` attribute for screen readers
- **Email link**: Uses `mailto:` protocol for direct action
- **Contrast**: White/gray text on #172134 navy — all combinations exceed WCAG AA

## 11. WordPress Mapping

### Construct Type
Template Part (`footer.html`) — with an optional `footer-simple.html` variant.

### Block Composition

```html
<!-- Band 1: Newsletter CTA -->
<!-- wp:group {"className":"dp-footer__newsletter","backgroundColor":"primary","textColor":"base","layout":{"type":"constrained"}} -->
    <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
        <!-- wp:group --> <!-- Icon + text -->
            <!-- wp:heading {"level":3} -->
            <!-- wp:paragraph -->
        <!-- /wp:group -->
        <!-- Newsletter form: Gravity Forms shortcode or core/search styled as email capture -->
    <!-- /wp:group -->
<!-- /wp:group -->

<!-- Band 2: Main Body -->
<!-- wp:group {"className":"dp-footer__body","backgroundColor":"brand-navy","textColor":"base","layout":{"type":"constrained"}} -->
    <!-- wp:group {"align":"wide"} -->
        <!-- wp:columns --> <!-- Brand + 4 link columns -->
            <!-- wp:column {"width":"33%"} --> <!-- Brand -->
                <!-- wp:site-logo -->
                <!-- wp:paragraph --> <!-- Description -->
                <!-- wp:social-links -->
            <!-- /wp:column -->
            <!-- wp:column {"width":"67%"} --> <!-- Links -->
                <!-- wp:columns -->
                    <!-- 4 × wp:column with wp:heading + wp:list -->
                <!-- /wp:columns -->
            <!-- /wp:column -->
        <!-- /wp:columns -->

        <!-- wp:separator {"className":"is-style-wide"} /-->

        <!-- Contact strip -->
        <!-- wp:group {"layout":{"type":"flex"}} -->
            <!-- Address + Email -->
        <!-- /wp:group -->

        <!-- wp:separator -->
        <!-- Accreditations -->
        <!-- wp:group {"layout":{"type":"flex"}} -->
            <!-- 4 × wp:image (accreditation logos) -->
        <!-- /wp:group -->

        <!-- wp:separator -->
        <!-- Bottom bar -->
        <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
            <!-- wp:paragraph --> <!-- Copyright -->
            <!-- wp:navigation --> <!-- Legal links -->
        <!-- /wp:group -->
    <!-- /wp:group -->
<!-- /wp:group -->
```

### Existing WP Files
- Part: `/wordpress-export/themes/die-papier-theme/parts/footer.html` — **ISSUES**:
  - Uses undefined `accent-dark` palette slug (should be `brand-navy`) — see WP-005
  - Only has social links + copyright. Missing: newsletter CTA band, 4-column link grid, contact strip, accreditations, legal links
  - Footer nav links use English URLs (`/privacy-policy`, `/terms-and-conditions`) — see WP-010
- Part variant: `/wordpress-export/themes/die-papier-theme/parts/footer-simple.html` — minimal variant, same `accent-dark` issue

## 12. Dependencies

- **Sub-components**: `Logo` (common), `SocialIcon` (local helper, not a separate file)
- **Consumed by**: `MainLayout.tsx`, `CheckoutLayout.tsx` (via routes)
- **Shared utilities**: `renderWithBrandItalics()` from `/src/app/utils/brandItalics.tsx`, `useNavigate()` (React Router)
- **Assets**: 3 accreditation logos via `figma:asset/` imports + 1 external IAB logo URL

## 13. Known Exemptions

- **Structural chrome `max-w-[1440px]`** — Intentional layout constraint via `.alignwide` wrapper.
- **`dark:hover` `#1A3A5F` navy overrides** — Newsletter submit button uses `dark:hover:bg-[#1A3A5F]`. This is an intentional dark mode hover state.
- **Hardcoded accreditation colors** — Logo inversions (`brightness-0 invert`) are intentional for brand display.