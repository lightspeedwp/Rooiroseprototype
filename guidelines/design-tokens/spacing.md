# Spacing — rooi rose Magazine

**Last updated**: 2026-03-11  
**Version**: 4.0 (rooi rose Redesign)

> **Status**: Updated for rooi rose magazine. New editorial spacing scale with generous white space for sophisticated layout and comfortable reading.

Spacing documentation for rooi rose — covering both the React prototype (Tailwind) and the WordPress FSE theme (theme.json `spacingSizes` presets). The magazine spacing system provides more generous vertical rhythm compared to the newspaper layout.

> **BlockGap-First Policy (WordPress):** All spacing between blocks is achieved through `blockGap` (primary tool) and `padding` (internal space). Margins are used surgically only for exceptional cases (paragraph bottom margin, margin resets). `wp:spacer` blocks are never used.

---

## 1. Magazine Spacing Philosophy

rooi rose uses **generous white space** as a core design principle:

- **Vertical Rhythm**: Double the standard padding on cards and sections
- **Section Breaks**: Minimum 40px between major content sections
- **Editorial Breathing Room**: Large spacing (64-128px) around hero sections and feature content
- **Modular Scale**: 8 spacing tokens from micro (4px) to editorial (128px)

**Design Goal**: Create the sophisticated, uncluttered feel of premium print magazines with ample breathing room between content.

---

## 2. Spacing Scale

rooi rose uses **8 named spacing presets** (vs. 7 in Die Papier) with larger maximum values for editorial layouts.

| Slug | Name | Value | Pixel Range | Usage |
|:-----|:-----|:------|:------------|:------|
| `xx-small` | 2X-Small | 0.25rem | 4px | Micro spacing (badges, tight inline elements) |
| `x-small` | X-Small | 0.5rem | 8px | Tight spacing (list gaps, form field spacing) |
| `small` | Small | 1rem | 16px | Default gap (paragraph spacing, card internal) |
| `medium` | Medium | 1.5rem | 24px | Section internal spacing (card padding, column gaps) |
| `large` | Large | 2.5rem | 40px | Between sections (article sections, content breaks) |
| `x-large` | X-Large | 4rem | 64px | Major sections (category grids, homepage sections) |
| `xx-large` | 2X-Large | 6rem | 96px | Hero spacing (hero section padding, editorial features) |
| `xxx-large` | 3X-Large | 8rem | 128px | Editorial breaks (scrollytelling sections, major dividers) |

### Editorial Spacing Strategy

| Context | Spacing Token | Pixel Value | Rationale |
|:--------|:-------------|:------------|:----------|
| **Paragraph margin** | `small` | 16px | Comfortable reading rhythm |
| **Card internal padding** | `medium` | 24px | Generous but not excessive |
| **Between article cards** | `large` | 40px | Clear visual separation |
| **Homepage sections** | `x-large` | 64px | Strong hierarchy |
| **Hero section padding** | `xx-large` | 96px | Dramatic editorial impact |
| **Scrollytelling breaks** | `xxx-large` | 128px | Magazine-style pacing |

---

## 3. Theme.json Mapping

```json
{
  "settings": {
    "spacing": {
      "spacingSizes": [
        {
          "name": "2X-Small",
          "slug": "xx-small",
          "size": "0.25rem"
        },
        {
          "name": "X-Small",
          "slug": "x-small",
          "size": "0.5rem"
        },
        {
          "name": "Small",
          "slug": "small",
          "size": "1rem"
        },
        {
          "name": "Medium",
          "slug": "medium",
          "size": "1.5rem"
        },
        {
          "name": "Large",
          "slug": "large",
          "size": "2.5rem"
        },
        {
          "name": "X-Large",
          "slug": "x-large",
          "size": "4rem"
        },
        {
          "name": "2X-Large",
          "slug": "xx-large",
          "size": "6rem"
        },
        {
          "name": "3X-Large",
          "slug": "xxx-large",
          "size": "8rem"
        }
      ]
    }
  }
}
```

**WordPress Preset Variables**:
```css
--wp--preset--spacing--xx-small: 0.25rem;
--wp--preset--spacing--x-small: 0.5rem;
--wp--preset--spacing--small: 1rem;
--wp--preset--spacing--medium: 1.5rem;
--wp--preset--spacing--large: 2.5rem;
--wp--preset--spacing--x-large: 4rem;
--wp--preset--spacing--xx-large: 6rem;
--wp--preset--spacing--xxx-large: 8rem;
```

---

## 4. CSS Implementation

### Token Definitions (`/src/styles/theme-tokens.css`)

```css
:root {
  /* === ROOI ROSE MAGAZINE SPACING TOKENS === */
  
  /* Spacing Scale (8-step for editorial flexibility) */
  --space-xx-small: 0.25rem; /* 4px - Micro spacing */
  --space-x-small: 0.5rem; /* 8px - Tight spacing */
  --space-small: 1rem; /* 16px - Default gap */
  --space-medium: 1.5rem; /* 24px - Section internal */
  --space-large: 2.5rem; /* 40px - Between sections */
  --space-x-large: 4rem; /* 64px - Major sections */
  --space-xx-large: 6rem; /* 96px - Hero spacing */
  --space-xxx-large: 8rem; /* 128px - Editorial breaks */
  
  /* WordPress Preset Mapping */
  --wp--preset--spacing--xx-small: var(--space-xx-small);
  --wp--preset--spacing--x-small: var(--space-x-small);
  --wp--preset--spacing--small: var(--space-small);
  --wp--preset--spacing--medium: var(--space-medium);
  --wp--preset--spacing--large: var(--space-large);
  --wp--preset--spacing--x-large: var(--space-x-large);
  --wp--preset--spacing--xx-large: var(--space-xx-large);
  --wp--preset--spacing--xxx-large: var(--space-xxx-large);
}
```

---

## 5. BlockGap-First Policy (WordPress)

**Rule**: Use `blockGap` for spacing between blocks. Use `padding` for internal space. Margins are used only for exceptional cases.

### How Spacing is Achieved

| Goal | Mechanism | Example |
|:-----|:----------|:--------|
| **Vertical space between blocks** | `blockGap` on parent Group/Column | Group with `large` blockGap (40px) |
| **Horizontal space between columns** | `blockGap` on Columns block | Columns with `medium` blockGap (24px) |
| **Internal space (cards, sections)** | `padding` on container | Card with `medium` padding (24px) |
| **Paragraph spacing** | `margin-bottom` on `<p>` | `--space-small` (16px) in article-content.css |
| **Negative space** | No mechanism (use Section styles with padding) | Hero section with `xx-large` padding (96px) |

### WordPress Utility Classes

```css
/* BlockGap Classes */
.has-xx-small-gap { gap: var(--wp--preset--spacing--xx-small) !important; }
.has-x-small-gap { gap: var(--wp--preset--spacing--x-small) !important; }
.has-small-gap { gap: var(--wp--preset--spacing--small) !important; }
.has-medium-gap { gap: var(--wp--preset--spacing--medium) !important; }
.has-large-gap { gap: var(--wp--preset--spacing--large) !important; }
.has-x-large-gap { gap: var(--wp--preset--spacing--x-large) !important; }
.has-xx-large-gap { gap: var(--wp--preset--spacing--xx-large) !important; }
.has-xxx-large-gap { gap: var(--wp--preset--spacing--xxx-large) !important; }

/* Padding Classes */
.has-xx-small-padding { padding: var(--wp--preset--spacing--xx-small) !important; }
.has-x-small-padding { padding: var(--wp--preset--spacing--x-small) !important; }
.has-small-padding { padding: var(--wp--preset--spacing--small) !important; }
.has-medium-padding { padding: var(--wp--preset--spacing--medium) !important; }
.has-large-padding { padding: var(--wp--preset--spacing--large) !important; }
.has-x-large-padding { padding: var(--wp--preset--spacing--x-large) !important; }
.has-xx-large-padding { padding: var(--wp--preset--spacing--xx-large) !important; }
.has-xxx-large-padding { padding: var(--wp--preset--spacing--xxx-large) !important; }
```

---

## 6. Common Spacing Patterns

### 6.1 Homepage Section Spacing

```html
<!-- Example: Category Grid Section -->
<div class="wp-block-group has-base-background-color has-x-large-padding">
  <div class="wp-block-group__inner-container has-large-gap">
    <!-- Section Header -->
    <div class="section-header">
      <h2>Lifestyle</h2>
    </div>
    
    <!-- Article Grid (3 columns) -->
    <div class="wp-block-columns has-medium-gap">
      <div class="wp-block-column"><!-- Article Card --></div>
      <div class="wp-block-column"><!-- Article Card --></div>
      <div class="wp-block-column"><!-- Article Card --></div>
    </div>
  </div>
</div>
```

**Spacing Breakdown**:
- Section padding: `x-large` (64px) — Generous outer spacing
- Internal blockGap: `large` (40px) — Between header and grid
- Column gap: `medium` (24px) — Between article cards

---

### 6.2 Article Card Internal Spacing

```css
.c-article-card {
  background-color: var(--base);
  overflow: hidden;
}

.c-article-card__content {
  padding: var(--space-medium); /* 24px - Generous internal padding */
}

.c-article-card__category {
  margin-bottom: var(--space-x-small); /* 8px - Tight spacing above title */
}

.c-article-card__title {
  margin-bottom: var(--space-small); /* 16px - Standard spacing */
}

.c-article-card__excerpt {
  margin-bottom: var(--space-small); /* 16px */
}

.c-article-card__meta {
  margin-top: auto; /* Push to bottom if flex */
}
```

**Spacing Strategy**: 24px padding creates generous breathing room, while internal spacing (8-16px) maintains visual hierarchy.

---

### 6.3 Hero Section Spacing

```css
.c-hero {
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.c-hero__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-xx-large) var(--space-medium); /* 96px vertical, 24px horizontal */
  max-width: 680px;
}

.c-hero__headline {
  margin-bottom: var(--space-small); /* 16px */
}

.c-hero__deck {
  /* No margin-bottom (last child) */
}
```

**Spacing Strategy**: Dramatic 96px bottom padding creates magazine-style hero layout with headline overlay.

---

### 6.4 Article Body Spacing

```css
.article-content p {
  margin-bottom: var(--space-small); /* 16px - Comfortable paragraph spacing */
}

.article-content h2 {
  margin-top: var(--space-x-large); /* 64px - Major section break */
  margin-bottom: var(--space-medium); /* 24px */
}

.article-content h3 {
  margin-top: var(--space-large); /* 40px - Subsection break */
  margin-bottom: var(--space-small); /* 16px */
}

.article-content figure {
  margin: var(--space-large) 0; /* 40px vertical isolation */
}

.article-content .c-pull-quote {
  margin: var(--space-large) 0; /* 40px vertical isolation */
}
```

**Spacing Strategy**: Generous spacing around headings (64px/40px) creates clear editorial hierarchy and reading rhythm.

---

## 7. Responsive Spacing

### Mobile Adjustments

On mobile (< 768px), reduce large spacing tokens to prevent excessive white space:

```css
@media (max-width: 767px) {
  :root {
    --space-x-large: 3rem; /* 48px (reduced from 64px) */
    --space-xx-large: 4rem; /* 64px (reduced from 96px) */
    --space-xxx-large: 5rem; /* 80px (reduced from 128px) */
  }
}
```

**Rationale**: Mobile screens need tighter spacing to fit content without excessive scrolling, but still maintain magazine aesthetic.

---

## 8. No-Margin Policy

**Rule**: Avoid margins except for surgical exceptions.

### Allowed Margin Uses

1. **Paragraph bottom margin**: `margin-bottom: var(--space-small)` in `.article-content p`
2. **Heading top/bottom margin**: Editorial spacing in article body
3. **Figure/Image margin**: Vertical isolation in article flow
4. **Margin resets**: `margin: 0` to override browser defaults

### Forbidden Margin Uses

❌ **Do NOT use**:
- `margin` on blocks in WordPress patterns (use `blockGap` instead)
- `margin` on cards/components (use `padding` and `gap`)
- `margin-left`/`margin-right` for horizontal spacing (use `gap` or flexbox/grid)
- Arbitrary margin values (always use spacing tokens)

---

## 9. Migration from Die Papier

### Spacing Scale Changes

| Die Papier Slug | Die Papier Value | rooi rose Slug | rooi rose Value | Change |
|:----------------|:----------------|:---------------|:----------------|:-------|
| _N/A_ | _N/A_ | `xx-small` | 4px | NEW (micro spacing) |
| `x-small` | clamp(4px→8px) | `x-small` | 8px | Static (simplified) |
| `small` | clamp(8px→12px) | `small` | 16px | Increased (2x) |
| `medium` | clamp(12px→16px) | `medium` | 24px | Increased (1.5x) |
| `large` | clamp(16px→32px) | `large` | 40px | Increased (1.25x) |
| `x-large` | clamp(24px→48px) | `x-large` | 64px | Increased (1.33x) |
| `xx-large` | clamp(32px→80px) | `xx-large` | 96px | Increased (1.2x) |
| `xxx-large` | clamp(48px→112px) | `xxx-large` | 128px | Increased (1.14x) |

**Key Changes**:
1. **Static values** instead of fluid `clamp()` for predictability
2. **Larger overall scale** for magazine aesthetic (vs. tighter newspaper layout)
3. **New `xx-small` token** for micro spacing (badges, inline elements)
4. **Doubled `small` token** (8px → 16px) for more generous default spacing

---

## 10. Tailwind CSS Integration

rooi rose spacing tokens are exported to Tailwind via `/src/styles/theme-exports.css`:

```css
@theme inline {
  --spacing-xx-small: 0.25rem;
  --spacing-x-small: 0.5rem;
  --spacing-small: 1rem;
  --spacing-medium: 1.5rem;
  --spacing-large: 2.5rem;
  --spacing-x-large: 4rem;
  --spacing-xx-large: 6rem;
  --spacing-xxx-large: 8rem;
}
```

**Tailwind Utility Classes**:
```html
<!-- Padding -->
<div class="p-[--spacing-medium]">24px padding</div>
<div class="px-[--spacing-medium] py-[--spacing-x-large]">24px horizontal, 64px vertical</div>

<!-- Gap -->
<div class="flex gap-[--spacing-medium]">24px gap</div>

<!-- Margin (use sparingly) -->
<div class="mb-[--spacing-small]">16px margin-bottom</div>
```

---

## 11. Accessibility Guidelines

### WCAG 2.1 Compliance

- **Target Size**: Minimum 44x44px tap targets (use `medium` or larger padding on buttons)
- **Visual Separation**: Minimum 8px (`x-small`) between interactive elements
- **Reading Rhythm**: 16px (`small`) paragraph spacing for comfortable reading

### Focus Indicators

```css
:focus-visible {
  outline: 3px solid var(--custom-primary-accessible);
  outline-offset: var(--space-xx-small); /* 4px offset for visibility */
}
```

---

## 12. Related Guidelines

- [Layout](/guidelines/design-tokens/layout.md) — Magazine grid system and container widths
- [Typography](/guidelines/design-tokens/typography.md) — Line-heights and reading rhythm
- [Editorial Components](/guidelines/design-tokens/editorial-components.md) — Component spacing patterns
- [rooi rose Editorial Style Guide](/guidelines/rooi-rose/editorial-style-guide.md) — Article structure and spacing hierarchy
- [Colors](/guidelines/design-tokens/colors.md) — rooi rose color palette

---

## 13. Visual Spacing Examples

### Small Spacing (16px)
```
┌─────────────────┐
│  Paragraph 1    │
│                 │ ← 16px
│  Paragraph 2    │
└─────────────────┘
```

### Medium Spacing (24px)
```
┌─────────────────┐
│  Card Content   │
│   (24px pad)    │
│                 │
└─────────────────┘
```

### Large Spacing (40px)
```
┌─────────────────┐
│  Section 1      │
└─────────────────┘
        ↕ 40px
┌─────────────────┐
│  Section 2      │
└─────────────────┘
```

### XX-Large Spacing (96px)
```
┌─────────────────┐
│                 │
│   Hero Image    │
│                 │
│   96px padding  │
│   ↓             │
│  Headline       │
└─────────────────┘
```

---

**Last Updated**: 2026-03-11  
**Version**: 4.0 (rooi rose Redesign)
