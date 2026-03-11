# Spacing Patterns Reference — Die Papier Theme

**Last Updated**: 2026-03-04  
**Purpose**: Define canonical spacing patterns for padding, blockGap, and margin usage in WordPress theme.json

---

## Design System Spacing Scale

```
x-small:   0.5rem  (8px)   — Tight spacing
small:     0.75rem (12px)  — Compact spacing
medium:    1.5rem  (24px)  — Standard spacing
large:     2rem    (32px)  — Section separation
x-large:   3rem    (48px)  — Major sections
xx-large:  4rem    (64px)  — Hero sections
xxx-large: 6rem    (96px)  — Page sections
```

**Global Default**: `blockGap: 1.2rem` (19.2px) — Sweet spot for news content flow

---

## The Three Spacing Tools

### 1. Padding — Internal Space
**Purpose**: Space INSIDE a container, between border and content  
**Use**: Backgrounds, cards, buttons, boxes with visible boundaries

### 2. BlockGap — Space Between Children
**Purpose**: Space BETWEEN sibling blocks (acts like CSS gap)  
**Use**: Primary spacing tool, creates vertical/horizontal rhythm  
**Benefit**: No "dead air" at container edges (first/last child)

### 3. Margin — External Exceptions
**Purpose**: Space AROUND a block (surgical use only)  
**Use**: Only when blockGap is insufficient  
**Rule**: **MINIMIZE** — Reset to 0 where possible, use blockGap instead

---

## 10 Common Spacing Scenarios

### Scenario 1: Full-Width Section with Content
**Pattern**: Hero section, CTA section, featured content

```json
{
  "core/group": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|x-large",      // 48px internal top
        "right": "var:preset|spacing|large",      // 32px internal sides
        "bottom": "var:preset|spacing|x-large",   // 48px internal bottom
        "left": "var:preset|spacing|large"
      },
      "blockGap": "var:preset|spacing|medium"     // 24px between heading/paragraph/button
    }
  }
}
```

**Visual**:
```
┌─────────────────────────────────┐
│ ← 48px padding top              │
│                                  │
│     Heading                      │
│     ↕ 24px blockGap             │
│     Paragraph                    │
│     ↕ 24px blockGap             │
│     Button                       │
│                                  │
│ ← 48px padding bottom           │
└─────────────────────────────────┘
```

**Die Papier Usage**: Section headers, newsletter CTAs, pricing tables

---

### Scenario 2: Article Content Container
**Pattern**: Blog post, page content, single article

```json
{
  "core/group": {
    "spacing": {
      "padding": {
        "top": "0",
        "right": "0",
        "bottom": "0",
        "left": "0"
      },
      "blockGap": "var:preset|spacing|medium"     // 24px between paragraphs/images/headings
    }
  }
}
```

**Visual**:
```
┌─────────────────────────────────┐
│ Heading                          │ ← No padding (relies on blockGap)
│ ↕ 24px blockGap                 │
│ Paragraph paragraph paragraph... │
│ ↕ 24px blockGap                 │
│ Image                            │
│ ↕ 24px blockGap                 │
│ Paragraph paragraph paragraph... │
└─────────────────────────────────┘
```

**Die Papier Usage**: Article content, page content, post body

**Why no padding?** Content should align with site margins (already set globally)

---

### Scenario 3: Card Grid / Post Archive
**Pattern**: News cards, product grid, event cards

```json
{
  "core/columns": {
    "spacing": {
      "blockGap": "var:preset|spacing|large"      // 32px between columns (horizontal)
    }
  },
  "core/column": {
    "spacing": {
      "blockGap": "var:preset|spacing|medium"     // 24px between items in column (vertical)
    }
  }
}
```

**Visual**:
```
┌──────────┐ ← 32px → ┌──────────┐ ← 32px → ┌──────────┐
│ Image    │          │ Image    │          │ Image    │
│ ↕ 24px   │          │ ↕ 24px   │          │ ↕ 24px   │
│ Heading  │          │ Heading  │          │ Heading  │
│ ↕ 24px   │          │ ↕ 24px   │          │ ↕ 24px   │
│ Excerpt  │          │ Excerpt  │          │ Excerpt  │
└──────────┘          └──────────┘          └──────────┘
```

**Die Papier Usage**: Homepage sections, category archives, search results

---

### Scenario 4: Buttons Container
**Pattern**: CTA buttons, form actions, navigation

```json
{
  "core/buttons": {
    "spacing": {
      "blockGap": "var:preset|spacing|small"      // 12px between buttons (tight)
    }
  }
}
```

**Visual**:
```
[Primary Button] ← 12px → [Secondary Button]
```

**Die Papier Usage**: Newsletter forms, contact forms, product CTAs

**Why small?** Buttons should feel grouped, not scattered

---

### Scenario 5: Navigation Menu
**Pattern**: Header navigation, footer menu, mobile menu

```json
{
  "core/navigation": {
    "spacing": {
      "blockGap": "var:preset|spacing|medium"     // 24px between nav items
    }
  }
}
```

**Visual**:
```
Tuisblad ← 24px → Nuus ← 24px → Sport ← 24px → Kontak
```

**Die Papier Usage**: Main navigation, footer navigation, category menus

---

### Scenario 6: Sidebar with Widgets
**Pattern**: Sidebar, widget area, aside content

```json
{
  "core/group": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|medium",       // 24px internal padding
        "right": "var:preset|spacing|medium",
        "bottom": "var:preset|spacing|medium",
        "left": "var:preset|spacing|medium"
      },
      "blockGap": "var:preset|spacing|large"      // 32px between widgets
    }
  }
}
```

**Visual**:
```
┌────────────────────┐
│ ← 24px padding     │
│                    │
│ Widget 1           │
│ ↕ 32px blockGap   │
│ Widget 2           │
│ ↕ 32px blockGap   │
│ Widget 3           │
│                    │
│ ← 24px padding     │
└────────────────────┘
```

**Die Papier Usage**: Homepage sidebar, article sidebar, newsletter sidebar

---

### Scenario 7: Footer with Columns
**Pattern**: Multi-column footer, footer navigation

```json
{
  "core/group": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|x-large",      // 48px top padding
        "right": "var:preset|spacing|large",
        "bottom": "var:preset|spacing|x-large",   // 48px bottom padding
        "left": "var:preset|spacing|large"
      },
      "blockGap": "var:preset|spacing|medium"     // 24px between rows
    }
  },
  "core/columns": {
    "spacing": {
      "blockGap": "var:preset|spacing|large"      // 32px between columns
    }
  }
}
```

**Visual**:
```
┌─────────────────────────────────────────────────────────┐
│ ← 48px padding top                                      │
│                                                          │
│ ┌─────────┐ ← 32px → ┌─────────┐ ← 32px → ┌─────────┐ │
│ │ Column  │          │ Column  │          │ Column  │ │
│ └─────────┘          └─────────┘          └─────────┘ │
│                                                          │
│ ← 48px padding bottom                                   │
└─────────────────────────────────────────────────────────┘
```

**Die Papier Usage**: Site footer

---

### Scenario 8: WooCommerce Cart/Checkout
**Pattern**: E-commerce checkout, cart summary, order totals

```json
{
  "woocommerce/cart": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|medium",
        "right": "var:preset|spacing|medium",
        "bottom": "var:preset|spacing|medium",
        "left": "var:preset|spacing|medium"
      },
      "blockGap": "var:preset|spacing|large"      // 32px between cart sections
    }
  },
  "woocommerce/cart-line-items-block": {
    "spacing": {
      "blockGap": "var:preset|spacing|small"      // 12px between line items (tight list)
    }
  }
}
```

**Visual**:
```
┌────────────────────────────────┐
│ ← 24px padding                 │
│                                 │
│ Line Item 1                    │
│ ↕ 12px blockGap               │
│ Line Item 2                    │
│ ↕ 12px blockGap               │
│ Line Item 3                    │
│                                 │
│ ↕ 32px blockGap (next section)│
│                                 │
│ Order Total                    │
│                                 │
│ ← 24px padding                 │
└────────────────────────────────┘
```

**Die Papier Usage**: E-edition cart, subscription checkout

---

### Scenario 9: Quote/Pullquote Block
**Pattern**: Blockquote, testimonial, featured quote

```json
{
  "core/pullquote": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|medium",       // 24px internal padding
        "right": "var:preset|spacing|medium",
        "bottom": "var:preset|spacing|medium",
        "left": "var:preset|spacing|medium"
      }
    }
  }
}
```

**Visual**:
```
┌────────────────────────────────┐
│ ← 24px padding                 │
│                                 │
│ "Quote text with padding       │
│  to separate from border"      │
│                                 │
│ ← 24px padding                 │
└────────────────────────────────┘
  ↕ 1.2rem global blockGap (auto spacing from next block)
Next paragraph...
```

**Die Papier Usage**: Article quotes, testimonials

**Note**: BlockGap (global 1.2rem) handles spacing BEFORE and AFTER the quote automatically

---

### Scenario 10: Social Links / Icon Row
**Pattern**: Social media icons, share buttons, footer social

```json
{
  "core/social-links": {
    "spacing": {
      "blockGap": "var:preset|spacing|small"      // 12px between icons (tight grouping)
    }
  }
}
```

**Visual**:
```
[Facebook] ← 12px → [Twitter] ← 12px → [Instagram] ← 12px → [LinkedIn]
```

**Die Papier Usage**: Footer social, article sharing, header social

---

## When to Use Margin (Exceptions Only)

### ✅ ALLOWED Margin Usages

#### 1. Paragraph Bottom Margin
**Use Case**: Distinguish "body flow" from "structural flow"
```json
"core/paragraph": {
  "spacing": {
    "margin": {
      "top": "0",
      "bottom": "1rem"     // Body text needs bottom spacing
    }
  }
}
```

#### 2. Margin Resets (Zero All Sides)
**Use Case**: Prevent unwanted spacing, let blockGap control everything
```json
"core/image": {
  "spacing": {
    "margin": { "top": "0", "right": "0", "bottom": "0", "left": "0" }
  }
}
```

**Blocks that should have margin reset**:
- `core/image` — Let blockGap handle spacing
- `core/site-logo` — Tight control in header
- `core/spacer` — Block handles its own height
- `woocommerce/product-image` — Grid layout control

#### 3. Featured Image Bottom Margin
**Use Case**: Structural separator between hero image and article content
```json
"core/post-featured-image": {
  "spacing": {
    "margin": {
      "top": "0",
      "bottom": "var:preset|spacing|medium"     // Creates intentional break
    }
  }
}
```

---

### ❌ FORBIDDEN Margin Usages

#### ❌ Heading Margins
**Wrong**:
```json
"heading": {
  "spacing": {
    "margin": { "top": "1.5rem", "bottom": "1rem" }  // ❌ BlockGap should handle this
  }
}
```

**Why?** Global `blockGap: 1.2rem` already creates proper spacing between headings and paragraphs.

---

#### ❌ Separator Margins
**Wrong**:
```json
"core/separator": {
  "spacing": {
    "margin": { "top": "2rem", "bottom": "2rem" }  // ❌ BlockGap should handle this
  }
}
```

**Why?** BlockGap creates consistent spacing before/after separators.

---

#### ❌ Block-Specific Vertical Margins
**Wrong**:
```json
"woocommerce/product-rating": {
  "spacing": {
    "margin": { "top": "0.5rem", "bottom": "0.5rem" }  // ❌ Parent blockGap handles this
  }
}
```

**Why?** Parent container (`woocommerce/product-details`) has `blockGap: small` that handles spacing.

---

## Quick Decision Tree

```
Need spacing?
│
├─ INSIDE a container? → Use PADDING
│   └─ Example: Card background, button internal space, hero section
│
├─ BETWEEN sibling blocks? → Use BLOCKGAP
│   └─ Example: Paragraphs in article, buttons in row, columns in grid
│
└─ AROUND a block (exceptional case)? → Use MARGIN
    └─ Only if:
        • Paragraph bottom margin (body flow)
        • Reset to zero (image, logo, spacer)
        • Featured image bottom (structural separator)
```

---

## Die Papier Spacing Inventory

### Global Settings
```json
{
  "styles": {
    "spacing": {
      "blockGap": "1.2rem",                       // Default vertical rhythm
      "padding": {
        "left": "var:preset|spacing|large",       // 32px site-wide horizontal padding
        "right": "var:preset|spacing|large"
      }
    }
  }
}
```

### Container-Specific BlockGap (44 instances)
| Block | BlockGap | Purpose |
|:------|:---------|:--------|
| **Core Blocks** | | |
| `core/buttons` | `small` (12px) | Tight button grouping |
| `core/columns` | `large` (32px) | Generous column spacing |
| `core/column` | `medium` (24px) | Standard content flow |
| `core/gallery` | `small` (12px) | Tight image grid |
| `core/group` | `medium` (24px) | Standard content container |
| `core/navigation` | `medium` (24px) | Clear menu separation |
| `core/post-template` | `large` (32px) | Article card spacing |
| `core/query` | `large` (32px) | Archive section spacing |
| `core/query-pagination` | `small` (12px) | Tight page number grouping |
| `core/social-links` | `small` (12px) | Tight icon grouping |
| `core/tag-cloud` | `x-small` (8px) | Very tight tag spacing |
| **WooCommerce Blocks** | | |
| `woocommerce/cart` | `large` (32px) | Section separation |
| `woocommerce/cart-line-items-block` | `small` (12px) | Tight product list |
| `woocommerce/checkout` | `large` (32px) | Section separation |
| `woocommerce/product-collection` | `large` (32px) | Product grid spacing |
| `woocommerce/product-template` | `medium` (24px) | Product card spacing |
| `woocommerce/product-details` | `small` (12px) | Tight info grouping |
| `woocommerce/product-meta` | `x-small` (8px) | Very tight metadata |
| `woocommerce/product-gallery` | `small` (12px) | Image thumbnail spacing |
| **Third-Party Blocks** | | |
| `gravityforms/form` | `medium` (24px) | Standard form field spacing |
| `yoast-seo/faq-block` | `small` (12px) | Tight Q&A grouping |
| `outermost/social-sharing` | `small` (12px) | Tight share button grouping |

### Strategic Margins (6 instances)
| Block | Margin | Purpose |
|:------|:-------|:--------|
| `core/paragraph` | bottom: `1rem` | Body flow distinction |
| `core/post-featured-image` | bottom: `medium` | Structural separator |
| `core/image` | all: `0` | Margin reset |
| `core/site-logo` | all: `0` | Margin reset |
| `core/spacer` | all: `0` | Margin reset |
| `woocommerce/product-image` | all: `0` | Margin reset |

---

## Best Practices Summary

1. **Default to BlockGap** — Use as primary spacing tool (44 instances in theme)
2. **Padding for Containers** — Internal space for backgrounds/borders (covers, cards, sections)
3. **Margin as Exception** — Only 6 instances in entire theme (all justified)
4. **Avoid Top Margins** — BlockGap handles spacing before blocks automatically
5. **Reset Image Margins** — Let blockGap control image spacing for consistency
6. **Tight Grouping** — Use `x-small` or `small` for tightly related items (tags, icons, buttons)
7. **Generous Separation** — Use `large` or `x-large` for major sections (hero, footer, archive sections)

---

## WordPress Core References

- [Spacing Settings](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/#spacing-settings)
- [Theme.json v3 Spec](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/)
- [TwentyTwentyFive Theme](https://github.com/WordPress/twentytwentyfive/blob/trunk/theme.json)
- [Ollie Theme](https://github.com/OllieWP/ollie/blob/main/theme.json)
