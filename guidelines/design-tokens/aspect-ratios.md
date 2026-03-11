# Aspect Ratios

**Last updated**: 2026-03-03
**Version**: 1.0

Aspect ratio utility classes for Die Papier. The WordPress theme registers **6 custom CSS classes** via `styles.css` in theme.json, providing consistent proportions for images, video embeds, and publication covers across both the React prototype and WordPress.

> **Cross-reference**: See Section 11 of `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` for the canonical token table.

---

## Aspect Ratio Scale

| CSS Class | Ratio | Tailwind Equivalent | CSS Variable | Usage |
|:---|:---:|:---:|:---|:---|
| `.aspect-square` | 1 / 1 | `aspect-square` | -- | Avatars, podcast thumbnails, social icons |
| `.aspect-video` | 16 / 9 | `aspect-video` | -- | Video embeds, YouTube/Vimeo iframes |
| `.aspect-4-3` | 4 / 3 | `aspect-[4/3]` | -- | Gallery images, legacy photo formats |
| `.aspect-3-2` | 3 / 2 | `aspect-[3/2]` | -- | Standard landscape photos |
| `.aspect-3-4` | 3 / 4 | `aspect-[3/4]` | -- | E-editions, book covers, portrait images |
| `.aspect-newspaper` | 210 / 297 | `aspect-[210/297]` | -- | Newspaper front pages (A4 proportion) |

### Additional React-Only Token

| Token | Tailwind Class | Usage |
|:---|:---|:---|
| `aspect-landscape` | `aspect-[16/10]` | Article cards, featured images (wider than 16:9) |

> **Note**: `aspect-landscape` (16/10) is used extensively in the React prototype for article card thumbnails but is not registered as a WordPress utility class. In WordPress, use the `aspect-3-2` class (3:2) as the closest equivalent, or add `aspect-[16/10]` inline.

---

## Theme.json Source

Aspect ratios are registered as global CSS utility classes via `styles.css`:

```json
{
  "styles": {
    "css": ".aspect-square { aspect-ratio: 1 / 1; } .aspect-video { aspect-ratio: 16 / 9; } .aspect-4-3 { aspect-ratio: 4 / 3; } .aspect-3-2 { aspect-ratio: 3 / 2; } .aspect-3-4 { aspect-ratio: 3 / 4; } .aspect-newspaper { aspect-ratio: 210 / 297; }"
  }
}
```

**Preset file**: `/wordpress-export/themes/die-papier-theme/styles/presets/aspect-ratios.json`

---

## WordPress Usage

```html
<!-- Apply via additionalCSS class on Image or Cover blocks -->
<!-- wp:image {"className":"aspect-3-2"} -->
<figure class="wp-block-image aspect-3-2">
  <img src="photo.jpg" alt="" />
</figure>
<!-- /wp:image -->

<!-- Cover block with video aspect -->
<!-- wp:cover {"className":"aspect-video"} -->

<!-- E-edition cover image -->
<!-- wp:image {"className":"aspect-3-4"} -->
```

> **Note**: These are CSS utility classes, not WordPress preset slugs. They are applied via the `className` attribute on blocks, not via `var:preset|...` syntax.

---

## React / Tailwind Usage

| Context | Tailwind Class | Ratio |
|:------|:--------------|:------|
| Article card image | `aspect-[16/10]` | 16:10 |
| Video embed | `aspect-video` | 16:9 |
| E-edition cover | `aspect-[3/4]` | 3:4 |
| Newspaper page | `aspect-[210/297]` | A4 |
| Avatar / thumbnail | `aspect-square` | 1:1 |
| Photo gallery | `aspect-[4/3]` | 4:3 |

### Typical Card Pattern

```tsx
<div className="relative overflow-hidden rounded-lg">
  <img
    src={article.image}
    alt={article.title}
    className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>
```

---

## Usage Guidelines

- **Article cards**: Always use `aspect-[16/10]` (React) or `aspect-3-2` (WordPress) for consistent card thumbnail proportions.
- **Video embeds**: Always wrap in `aspect-video` to prevent layout shift (CLS).
- **E-edition covers**: Use `aspect-3-4` for portrait book/magazine covers.
- **Newspaper front pages**: Use `aspect-newspaper` (A4 ratio) for front page thumbnails in the e-edition browser.
- **Avatars & icons**: Use `aspect-square` with `rounded-full` for circular profile images.
- **object-fit**: Always pair aspect ratios with `object-cover` on `<img>` elements to prevent distortion.
- **Anti-pattern**: Never set `height` and `width` independently to achieve a ratio -- always use `aspect-ratio` utilities.

---

## Related Files

- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` -- Master token reference (Section 11)
- `/guidelines/design-tokens/ui-presets.md` -- Card styling with aspect ratios (Section 3.2)
- `/wordpress-export/themes/die-papier-theme/styles/presets/aspect-ratios.json` -- WP aspect ratio classes
