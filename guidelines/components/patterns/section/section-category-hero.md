# Category Hero (Featured Article) Pattern

**Last updated**: 2026-03-03
**Folder**: patterns/section/
**Slug**: die-papier/section-category-hero
**File**: `/wordpress-export/themes/die-papier-theme/patterns/section/section-category-hero.php`

## Description

Featured article hero for category archives. Displays a single sticky/featured post as a full-width cover block with gradient overlay, category badge, title, excerpt, and author/date meta. Used in all 5 dedicated category templates (Nuus, Sake, Leefstyl, Dink, Sport).

**Limitation**: Core blocks do not support auto-advancing carousels. The React prototype uses a `HeroSlider` with multiple slides; the WordPress implementation shows a single featured (sticky) post only. This is a documented design trade-off.

## React Equivalent

- **Component**: `HeroSlider.tsx` (via `HeroSlideCard.tsx`)
- **Behaviour**: Auto-advancing carousel with prev/next arrows and dot indicators
- **Image**: 16:9 aspect ratio, `rounded-lg`, 340px mobile / 440px desktop height
- **Overlay**: `from-black/85 via-black/30 to-transparent`
- **Content**: Category badge, title (Roboto Serif), excerpt, author + date meta

## Block Composition

```
core/query (sticky: "only", perPage: 1, inherit: false)
└── core/post-template
    └── core/cover (useFeaturedImage, dimRatio: 70, customGradient, minHeight: 440px)
        ├── core/post-terms (category badge, bg: primary, text: base, x-small, uppercase)
        ├── core/post-title (level 2, isLink, text: base, xx-large)
        ├── core/post-excerpt (text: base, small, excerptLength: 25)
        └── core/group (flex, blockGap: small)
            ├── core/post-author-name (text: base, x-small)
            ├── core/paragraph ("·", text: base, x-small)
            └── core/post-date (text: base, x-small)
└── core/query-no-results
    └── core/paragraph ("Geen voorgestelde artikels nie.")
```

## Design Details

- **Cover gradient**: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`
- **Border radius**: `8px` (aligned with preset `--wp--custom--border-radius--400`)
- **Content position**: `bottom left`
- **Spacing**: Padding `large` top/bottom, `medium` left/right
- **Category badge**: `x-small` font, uppercase, `0.05em` letter-spacing, `primary` bg, `base` text

## Ad Slots

None within this pattern. Ad slots are managed at the template level.

## Related Files

- `/guidelines/components/templates/category-nuus.md` — Primary consumer template
- `/guidelines/components/patterns/archives.md` — Archive pattern inventory
- `/guidelines/components/blocks/hero-slider.md` — React component guideline
- `/src/app/components/common/HeroSlideCard.tsx` — React implementation

## Related Blocks

- core/query
- core/post-template
- core/cover
- core/post-terms
- core/post-title
- core/post-excerpt
- core/post-author-name
- core/post-date
