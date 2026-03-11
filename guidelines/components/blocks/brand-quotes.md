# Brand Quotes

**Last updated**: 2026-03-03
**Category**: Pattern (Marketing)
**React source**: `/src/app/components/brand-quotes/` (4 files)
**WordPress target**: Pattern `section-brand-quotes.php` using `dp/slider` + `core/quote`

---

## 1. Purpose

Brand campaign testimonial carousel showing launch campaign quote cards with motivational Afrikaans quotes. Used on the homepage and advertise page.

## 2. WordPress Implementation

The brand quotes are implemented as a **pattern** (not a custom block):

- **Pattern**: `die-papier/section-brand-quotes` (`section-brand-quotes.php`)
- **Uses**: `dp/slider` block with `core/quote` InnerBlocks
- **Background**: `is-style-section-navy` (navy background, white text)
- **Quotes**: 3 placeholder quotes (editable by editors)

The `dp/slider` block provides: auto-advance, manual prev/next arrows, dot indicators, Interactivity API.

## 3. Deprecated Block

The `dp/quote-slider` custom block has been **deleted**. See [quote-slider.md](quote-slider.md) for historical reference.

## 4. React Components (Historical)

| Component | File | Purpose |
|:----------|:-----|:--------|
| `QuoteSlider` | `QuoteSlider.tsx` | Embla Carousel slider wrapper (auto-advance 6s) |
| `BrandQuote` | `BrandQuote.tsx` | Individual quote card (gradient bg, logo, quote text) |
| `BrandLogo` | `BrandLogo.tsx` | Simplified brand mark for quote cards |

## 5. Cross-References

- [Section Patterns](/guidelines/components/patterns/sections.md) — section-brand-quotes entry
- [Deprecated: dp/quote-slider](quote-slider.md) — Old custom block