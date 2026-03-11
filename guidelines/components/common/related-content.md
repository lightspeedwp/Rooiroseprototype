# Related Content

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/RelatedContent.tsx`
**WordPress target**: Pattern using `core/query` blocks

---

## 1. Purpose

A tabbed "Meer inhoud" (More Content) section at the bottom of single article pages. Shows up to 3 tabs: "Verwante Artikels" (related articles), "Komende Gebeure" (upcoming events), and "E-uitgawes" (e-editions). Uses ShadCN Tabs with navy active state. Only renders tabs with available content.

## 2. Visual Structure

```
┌─ <section> (mt-10 pt-8, border-t-2 border-gray-100)
│  ├─ Header (flex, justify-between, mb-6)
│  │  ├─ H2 "Meer inhoud" (serif, --fvs-h2)
│  │  └─ TabsList (3 tabs, bg-gray-100, active: bg-brand-navy text-white)
│  │
│  ├─ [Articles tab]: 3-col grid of article cards (image + category + title + meta)
│  ├─ [Events tab]: 3-col grid of event cards (image + date badge + title + location)
│  └─ [E-editions tab]: 4-col grid of e-edition covers (3:4 aspect + title + date)
```

## 3. Props / Attributes

| Prop | Type | Default |
|:-----|:-----|:--------|
| `articles` | `RelatedArticle[]` | `[]` |
| `events` | `RelatedEvent[]` | `[]` |
| `eEditions` | `RelatedEEdition[]` | `[]` |
| `className` | `string` | `""` |

## 4. Data Sources

Passed by `Article.tsx` — related content computed from same category articles, upcoming events, and recent e-editions.

## 5. Design Tokens

| Element | Font | Extras |
|:--------|:-----|:-------|
| Section H2 | `--font-heading`, `--text-h2`, `--fvs-h2` | — |
| Card titles | `--font-heading`, `text-sm`, `--fvs-h3` | `line-clamp-2` |
| Tab triggers | `--font-inter`, `text-xs`, bold | `data-[state=active]:bg-brand-navy data-[state=active]:text-white` |

Standard dark mode: `bg-white` → `bg-card`, borders → `border-border`.

## 6–10. Standard section/card patterns.

## 11. WordPress Mapping

### Construct Type
Pattern composition using multiple `core/query` blocks — one per content type (posts, events CPT, e-editions CPT). Tabs can be implemented via `core/group` with JS toggle or native WP tabs block.

## 12. Dependencies

- **Sub-components**: `ArticleLink`, `ImageWithFallback`, ShadCN `Tabs`
- **Consumed by**: `Article.tsx`

## 13. Known Exemptions

None.
