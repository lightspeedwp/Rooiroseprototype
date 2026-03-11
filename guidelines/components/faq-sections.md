# FAQ Sections

**Last updated**: 2026-02-27
**Version**: 1.0

## Overview

All major static pages include a FAQ (Algemene vrae) accordion section at the bottom of the page. This provides users with quick answers to common questions related to the page's content.

## Component

**`PageFAQSection`** — `/src/app/components/patterns/PageFAQSection.tsx`

### Props

| Prop | Type | Default | Description |
|:---|:---|:---|:---|
| `title` | `string` | `'Algemene vrae'` | Section heading |
| `description` | `string` | — | Short description below the heading |
| `items` | `PageFAQItem[]` | — | Array of FAQ items (question + answer) |
| `variant` | `'light' \| 'muted'` | `'muted'` | Background style |
| `className` | `string` | — | Additional CSS classes |

### Usage

```tsx
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { ABOUT_FAQS } from '../data/pageFaqs';

// Place as a sibling OUTSIDE the main content container
<PageFAQSection
  items={ABOUT_FAQS}
  description="Antwoorde op algemene vrae oor Die Papier."
  variant="muted"
/>
```

## FAQ Data

All FAQ data lives in `/src/app/data/pageFaqs.ts`, organized by page:

| Export | Page | Route |
|:---|:---|:---|
| `ABOUT_FAQS` | Oor ons | `/oor-ons` |
| `CONTACT_FAQS` | Kontak | `/kontak` |
| `ADVERTISE_FAQS` | Adverteer | `/adverteer` |
| `EVENTS_FAQS` | Gebeure | `/gebeure` |
| `EEDITIONS_FAQS` | E-Uitgawes | `/e-uitgawes` |
| `WEATHER_FAQS` | Weer | `/weer` |
| `TEAM_FAQS` | Ons span | `/oor-ons/redaksie` |
| `SUBSCRIBE_FAQS` | Inteken (E-uitgawe) | `/inteken/e-uitgawe` |
| `SUBSCRIBE_DELIVERY_FAQS` | Inteken (Aflewering) | `/inteken/aflewering` |
| `NEWSLETTER_FAQS` | Nuusbrief | `/nuusbrief-inteken` |
| `POLICIES_FAQS` | Beleid | `/beleid` |
| `TRAFFIC_FAQS` | Verkeer | `/verkeer` |
| `OBITUARIES_FAQS` | Doodsberrigte | `/doodsberrigte` |
| `MULTIMEDIA_FAQS` | Multimedia | `/multimedia` |
| `NEWSLETTER_ARCHIVE_FAQS` | Nuusbrief-argief | `/nuusbrief-argief` |
| `FOUNDATIONS_FAQS` | Design Foundations | `/foundations` |
| `COMPETITIONS_FAQS` | Kompetisies | `/kompetisies` |
| `SUBMIT_FAQS` | Stuur in | `/stuur-in` |

### Data Shape

```ts
interface PageFAQItem {
  id: string;      // Unique identifier, e.g. 'about-1'
  question: string; // The question in Afrikaans
  answer: string;   // The answer in Afrikaans
}
```

## Design Rules

1. **Language**: All FAQ content must be in Afrikaans.
2. **Placement**: FAQ section is always the last content section before any CTA footer.
3. **Container**: The component manages its own `max-w-[1440px]` align-wide container internally.
4. **Accordion**: Uses ShadCN `Accordion` with `type="single" collapsible`.
5. **Styling**: Hover state uses `#D70025` red for the active/hovered trigger.
6. **Content width**: Accordion is capped at `max-w-3xl` for readability.
7. **Brand name**: All occurrences of "Die Papier" in FAQ answers must use `<em>` italics.

## Per-Competition FAQs

In addition to page-level FAQs, each competition has its own FAQ data stored in `competitions.ts` as a `faqs` array on the `Competition` interface. These are rendered using a standard ShadCN `Accordion` inside `CompetitionSingle.tsx` — **not** using `<PageFAQSection>`.

## FAQ Page (`/vrae`)

The dedicated Algemene vrae page at `/vrae` uses its own layout (sectioned accordion with sticky sidebar TOC and tab navigation) distinct from the `<PageFAQSection>` component. Its data is hardcoded in `FAQPage.tsx`. See [Content Structure](/guidelines/site-structure/content-structure.md) for details.

## Pages with FAQ Sections

- About (`/oor-ons`)
- Contact (`/kontak`)
- Advertise (`/adverteer`)
- Events (`/gebeure`)
- E-Editions (`/e-uitgawes`)
- Weather (`/weer`)
- Traffic (`/verkeer`)
- Team (`/oor-ons/redaksie`)
- Subscribe E-Edition (`/inteken/e-uitgawe`)
- Subscribe Delivery (`/inteken/aflewering`)
- Newsletter Subscribe (`/nuusbrief-inteken`)
- Policies (`/beleid`)
- Obituaries (`/doodsberrigte`)
- Multimedia (`/multimedia`)
- Newsletter Archive (`/nuusbrief-argief`)
- Foundations (`/foundations`)
- Competitions (`/kompetisies`)
- Submit Hub (`/stuur-in`)

---

## WordPress Migration

### Block Mapping

| React Component | WordPress Block | Section Style |
|:---|:---|:---|
| `PageFAQSection` | `yoast/faq-block` | `section-faq` |
| Per-competition FAQs | `yoast/faq-block` | Inline (no section wrapper) |
| FAQ Page (`/vrae`) | `yoast/faq-block` + `core/group` | Multiple grouped sections |

### Why Yoast FAQ Block?

All FAQ patterns in the WordPress theme use `yoast/faq-block` instead of `core/details` for FAQ content. Benefits:

1. **Schema.org structured data**: Yoast FAQ block automatically generates `FAQPage` JSON-LD schema markup, which enables rich FAQ snippets in Google search results.
2. **SEO visibility**: FAQ rich results can significantly increase click-through rates from search.
3. **Native accordion behavior**: Built-in expand/collapse without custom JavaScript.
4. **Editor experience**: Familiar question/answer editing interface in the block editor.

### Section Style Integration

The `section-faq` section style variation includes explicit `yoast/faq-block` styling:

- Question headings: Serif font family (`var:preset|font-family|serif`)
- Answer text: Standard contrast colour
- Border treatment: Bottom border between items (`base-3` colour)
- Spacing: Generous padding between FAQ items (`spacing-40`)
- Links within answers: Red link colour with hover

For dark-background FAQ sections (rare but supported), `section-navy` and `section-red` also include `yoast/faq-block` block styles with inverted colours.

### Migration Steps

1. Each `PageFAQItem` in `pageFaqs.ts` maps to one question/answer pair in the Yoast FAQ block.
2. Wrap the FAQ block in a `core/group` with `is-style-section-faq`.
3. Add a `core/heading` above the FAQ block for the section title ("Algemene vrae").
4. The `variant` prop (`light` | `muted`) maps to the section style's background colour.
5. All FAQ content must remain in Afrikaans per the existing design rules.