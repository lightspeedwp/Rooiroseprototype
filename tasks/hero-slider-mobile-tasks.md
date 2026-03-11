# Hero Slider Mobile Readability — Task List

**Generated**: 2026-03-03  
**Last updated**: 2026-03-04  
**Reports**: 
- `/reports/hero-slider-mobile-audit-inventory.md` (9 findings)
- `/reports/hero-slider-mobile-audit-breakpoints.md` (5 findings)
**Total findings**: 14 (3 P0, 5 P1, 5 P2, 1 P3)  
**Total tasks**: 12 across 3 phases
**Status**: ✅ **[ARCHIVED]** — 12/12 tasks complete (100%)

---

## Status Legend

`[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked

---

## Phase 1: Shared Component (Foundation)

> Create the shared `HeroSlideCard` component with responsive text placement.  
> This is the foundation — all subsequent tasks depend on it.

### 1.1 Create `HeroSlideCard` component
`[x]` **P0** — Create `/src/app/components/common/HeroSlideCard.tsx`

**Responsive behaviour**:
- **Mobile (< md)**: Image block (`aspect-[16/9]`, no gradient overlay, no text) → Text block below (white/dark bg, padded, badge + title + excerpt + meta)
- **Desktop (≥ md)**: Image with gradient overlay, text positioned absolute bottom (current layout)

**Props**:
```tsx
interface HeroSlideCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime?: string;
  showHoverScale?: boolean;
}
```

**Implementation details**:
- Wrap in `ArticleLink` (full card clickable)
- Image: `aspect-[16/9]` at all sizes (desktop aspect controlled by parent container)
- Gradient overlay: `hidden md:block` (hide on mobile)
- Desktop text: `hidden md:block absolute bottom-0` (current overlay)
- Mobile text: `md:hidden` block below image with `bg-white dark:bg-card` background
- Title: `text-2xl md:text-[36px]` (responsive step-down from current fixed 36px) — resolves findings 1.2
- Title: unified `fontVariationSettings`, `textShadow` (desktop only via CSS), `font-heading`
- Excerpt: `text-sm md:text-base`
- Meta: `text-xs`, includes author + date + optional readTime
- Category badge: `bg-brand-red` (unified — resolves finding 1.5)
- Mobile text colours: `text-brand-navy dark:text-foreground` for title, `text-gray-600 dark:text-gray-400` for excerpt/meta
- Desktop text colours: `text-white` for title, `text-gray-300` for excerpt, `text-gray-400` for meta (current)

**Resolves**: 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 2.1, 2.2, 2.3, 2.5

### 1.2 Title typography unification
`[x]` **P1** — Within `HeroSlideCard`, use consistent typography

- Desktop: `fontVariationSettings: "'GRAD' 0, 'wdth' 64, 'opsz' 48"`, `textShadow` (desktop overlay only)
- Mobile: standard `font-heading` without text shadow (not needed on solid bg)
- Standardize on `letterSpacing: 'var(--ls-h1)'` for desktop, natural spacing for mobile

**Resolves**: 1.7

---

## Phase 2: Consumer Integration

> Wire the shared component into all 3 consumers.  
> Each task is independent — can be done in parallel.

### 2.1 Integrate into Homepage HeroSlider
`[x]` **P0** — Update `/src/app/components/home/HeroSlider.tsx`

- Replace inline slide markup (lines 48–84) with `<HeroSlideCard>`
- Adapter: map `slide.imageUrl` → `image`, omit `readTime`
- Keep: slider logic, arrows, dots, `NuusflitseSidebar`, auto-advance, pause-on-hover
- Parent container: remove mobile height constraint, keep `lg:h-[440px]`
- Image within `HeroSlideCard`: on desktop, needs `md:aspect-auto md:h-full` to fill parent container
- Arrows/dots: remain as siblings, positioned absolute on image wrapper

**Resolves**: 1.1, 1.4

### 2.2 Integrate into Category HeroSlider
`[x]` **P0** — Update `/src/app/pages/Category.tsx`

- Replace `HeroSlide` component (lines 18–56) with import of `HeroSlideCard`
- Remove local `HeroSlide` component entirely
- Update `HeroSlider` component to use `<HeroSlideCard>` instead of `<HeroSlide>`
- Container: change `h-[340px] md:h-[440px]` → `md:h-[440px]` (auto height on mobile for text-below)
- Single-hero fallback: same container adjustment
- Props pass through directly (already `ArticleCardProps` shape)

**Resolves**: 1.1, 1.3, 2.1

### 2.3 Integrate into Tag Archive HeroArticle
`[x]` **P1** — Update `/src/app/pages/TagArchive.tsx`

- Replace `HeroArticle` component (lines 14–49) with import of `HeroSlideCard`
- Remove local `HeroArticle` component entirely
- Pass `showHoverScale={true}` to preserve existing behaviour
- No slider controls (single hero) — simpler integration
- Container: remove `md:aspect-[21/9]` override (standardize on component's aspect ratio)

**Resolves**: 1.1, 1.3, 1.8, 1.9

---

## Phase 3: Polish & Verification

### 3.1 Dark mode verification
`[x]` **P2** — Verify mobile text-below block in dark mode

- `bg-white dark:bg-card` background
- Title: `text-brand-navy dark:text-foreground`
- Excerpt: `text-gray-600 dark:text-gray-400`
- Meta: `text-gray-500 dark:text-gray-400`
- Badge: `bg-brand-red text-white` (same in both modes)

### 3.2 Nav controls z-index and position
`[x]` **P2** — Verify arrows and dots remain visible on image at mobile sizes

- Arrows: `absolute bottom-3 left-3/right-3 z-10` — should work since they're siblings of the image container
- Dots: `absolute bottom-3 left-1/2 z-10` — same
- Confirm no overlap with text-below block

### 3.3 Responsive title sizing
`[x]` **P2** — Verify title doesn't overflow on 375px viewport

- Mobile: `text-2xl` (~24px) — fits ~15 chars per line at 375px
- Desktop: `text-[36px]` — same as current
- Test with longest mock article titles

### 3.4 Homepage sidebar interaction
`[x]` **P2** — Verify Nuusflitse sidebar still works correctly

- Sidebar is `hidden lg:flex` — independent of hero text placement
- On mobile/tablet: sidebar hidden, hero shows text below
- On desktop: sidebar visible, hero shows text overlay
- No conflict expected

### 3.5 Hover scale consistency
`[x]` **P3** — Consider adding `group-hover:scale-105` to all heroes

- Currently only TagArchive has this
- Could add as default behaviour in `HeroSlideCard` (with opt-out prop)
- Or keep only for TagArchive via `showHoverScale` prop
- Low priority — cosmetic only

---

## Execution Order

```
Phase 1: [1.1] → [1.2]        (sequential — 1.2 is part of 1.1)
Phase 2: [2.1] + [2.2] + [2.3] (parallel — all depend on Phase 1 only)
Phase 3: [3.1] + [3.2] + [3.3] + [3.4] + [3.5] (parallel — verification)
```

## Files Created/Modified

| Action | File |
|:-------|:-----|
| **Create** | `/src/app/components/common/HeroSlideCard.tsx` |
| **Modify** | `/src/app/components/home/HeroSlider.tsx` |
| **Modify** | `/src/app/pages/Category.tsx` |
| **Modify** | `/src/app/pages/TagArchive.tsx` |