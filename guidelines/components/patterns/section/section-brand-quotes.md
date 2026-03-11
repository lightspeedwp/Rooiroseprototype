# Section: Brand Quotes (Slider)

**Last updated**: 2026-03-02

## Block Structure
- `core/group` (`alignfull`, `is-style-section-muted`, inner padding 80px)
  - `core/group` (`layout-constrained`)
    - `die-papier/slider` (autoplay: true, delay: 5000)
      - `die-papier/slide` (content quote)
        - `core/paragraph` (quote text, italic, large font size)
        - `core/paragraph` (attribution text, caption size)

## Implementation Notes
- **Style Class**: `is-style-section-muted` (light gray or brand background, white text).
- **Custom Block**: Requires the `die-papier-blocks` plugin for the slider functionality.
- **Language**: All quotes should be in Afrikaans.
- **Placement**: Used as a content break between large post grids on the homepage.
- **Deduplication**: This section is often placed after several content sections to provide social proof.