# Spacing

**Last updated**: 2026-03-04  
**Version**: 3.0

Spacing documentation for Die Papier — covering both the React prototype (Tailwind) and the WordPress FSE theme (theme.json `spacingSizes` presets). All implementations are now synchronized under the new slug system.

> **BlockGap-First Policy (WordPress):** All spacing between blocks is achieved through `blockGap` (primary tool) and `padding` (internal space). Margins are used surgically only for exceptional cases (paragraph bottom margin, margin resets). `wp:spacer` blocks are never used.

> **📖 Comprehensive Guide:** See `/guidelines/design-tokens/spacing-patterns.md` for 10 common spacing scenarios with visual examples.

---

## Spacing Scale

Die Papier uses **7 named spacing presets** shared across both environments. Values are fluid `clamp()` expressions that scale linearly between the min and max.

| Preset slug | Name | Min value | Max value | Label |
|:---:|:---|:---:|:---:|:---|
| `x-small` | Extra Small | 4px | 8px | 2X-Small (Old 20) |
| `small` | Small | 8px | 12px | X-Small (Old 30) |
| `medium` | Medium | 12px | 16px | Small (Old 40) |
| `large` | Large | 16px | 32px | **Standard Horizontal (Old 50)** |
| `x-large` | Extra Large | 24px | 48px | Large (Old 60) |
| `xx-large` | 2XL | 32px | 80px | X-Large (Old 70) |
| `xxx-large` | 3XL | 48px | 112px | 2X-Large (Old 80) |

### Theme.json mapping

```json
"spacingSizes": [
  { "name": "Extra Small", "slug": "x-small", "size": "clamp(0.25rem, 1vw, 0.5rem)" },
  { "name": "Small",       "slug": "small",   "size": "clamp(0.5rem, 2vw, 0.75rem)" },
  { "name": "Medium",      "slug": "medium",  "size": "clamp(0.75rem, 2.5vw, 1rem)" },
  { "name": "Large",       "slug": "large",   "size": "clamp(1rem, 4vw, 2rem)" },
  { "name": "Extra Large", "slug": "x-large", "size": "clamp(1.5rem, 5vw, 3rem)" },
  { "name": "2XL",         "slug": "xx-large","size": "clamp(2rem, 7vw, 5rem)" },
  { "name": "3XL",         "slug": "xxx-large","size": "clamp(3rem, 10vw, 7rem)" }
]
```

---

## BlockGap-First Policy (WordPress)

**Rule**: Use `blockGap` for spacing between blocks. Use `padding` for internal space. Margins are used only for exceptional cases.

### How Spacing is Achieved

| Goal | Mechanism | Example |
|:---|:---|:---|
| Vertical gap between blocks | `blockGap` on parent group | `"style":{"spacing":{"blockGap":"var:preset\|spacing\|large"}}` |
| Section padding | `padding.top` + `padding.bottom` | `"padding":{"top":"var:preset\|spacing\|x-large","bottom":"var:preset\|spacing\|x-large"}` |
| Horizontal page padding | `padding.left` + `padding.right` | `"padding":{"left":"var:preset\|spacing\|large","right":"var:preset\|spacing\|large"}` |

### Standard Token Usage

| Context | Token | Value |
|:---|:---:|:---|
| Tight list/icon gap | `spacing\|x-small` | 4–8px fluid |
| Inline element gap | `spacing\|small` | 8–12px fluid |
| Card inner gap | `spacing\|medium` | 12–16px fluid |
| **Standard page padding** | `spacing\|large` | 16–32px fluid |
| Section vertical padding | `spacing\|x-large` | 24–48px fluid |
| Hero / Feature padding | `spacing\|xx-large` | 32–80px fluid |
| Page top/bottom padding | `spacing\|xxx-large` | 48–112px fluid |

---

## Section Spacing Patterns

### Page-Level Structure (WordPress)

Standard page pattern spacing hierarchy:

```
Page wrapper (no blockGap, no padding)
└── Section group (is-style-section-*)
    ├── padding.top: spacing|x-large–spacing|xxx-large
    ├── padding.bottom: spacing|x-large–spacing|xxx-large
    ├── padding.left: spacing|large  ← always
    ├── padding.right: spacing|large ← always
    └── blockGap: spacing|large (between children)
        ├── Heading
        ├── Paragraph
        └── Inner group (blockGap: spacing|medium)
            ├── list item
            └── list item
```

### Standard Section Padding

| Section type | `padding.top/bottom` | `blockGap` |
|:---|:---:|:---:|
| Hero sections | `spacing\|xxx-large` | `spacing\|large` |
| Feature / CTA sections | `spacing\|xx-large` | `spacing\|large` |
| Content / Archive sections | `spacing\|x-large` | `spacing\|large` |
| Card / Tight sections | `spacing\|large` | `spacing\|medium` |
| Footer | `spacing\|x-large` | `spacing\|medium` |

---

## Card Spacing

### Card Padding Standard

All card components use `spacing|large` for internal padding:

- **React**: `p-[clamp(1rem,4vw,2rem)]` or `p-6` (24px fixed)
- **WordPress**: `padding: { top/bottom/left/right: "var:preset|spacing|large" }`

### Card Internal Gap

- Header elements (icon + heading): `blockGap: spacing|small` (8–12px)
- Body elements (heading + paragraph + button): `blockGap: spacing|medium` (12–16px)
- Sibling cards in a grid: `blockGap: spacing|large` (16–32px) on the parent

---

## Migration Reference

| Legacy Slug | New Slug | Value Range |
|:---|:---|:---|
| `20` | `x-small` | 4–8px |
| `30` | `small` | 8–12px |
| `40` | `medium` | 12–16px |
| `50` | `large` | 16–32px |
| `60` | `x-large` | 24–48px |
| `70` | `xx-large` | 32–80px |
| `80` | `xxx-large` | 48–112px |