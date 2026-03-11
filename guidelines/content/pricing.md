# Pricing Guidelines

**Last updated**: 2026-03-01
**Version**: 1.0

Canonical pricing reference for *Die Papier*. All pages, FAQs, and copy referencing pricing **must** use these values.

## Single-Issue Pricing

| Product | Price | Purchase Type |
|---|---|---|
| Gedrukte koerant (in die winkel) | **R35** | Eenmalig (in-winkel) |
| Elektroniese e-koerant (per uitgawe) | **R35** | Eenmalig (ad hoc, geen intekening nodig) |

> **Key distinction**: A single e-uitgawe at R35 is a **once-off ad hoc purchase** — the reader buys a specific edition as needed. This is NOT a subscription. The `/e-uitgawes` page facilitates these individual purchases.

## Subscription Pricing

### Huisaflewering (Gedrukte Koerant)

Home delivery of the printed newspaper is handled entirely by On the Dot (sister company). Delivery subscriptions are **not** sold through the website — subscribers must contact On the Dot directly. Delivery does **not** include digital e-edition access; these are separate products.

| Period | Price | Payment Method |
|---|---|---|
| 1 Maand | R140 | Debietorder |
| 3 Maande | R455 | Debietorder of EFT |
| 6 Maande | R910 | Debietorder of EFT |
| 12 Maande | R1 820 | Debietorder of EFT |

> **Marketing copy**: Use "vanaf R140 per maand" when referencing delivery pricing in general terms.

### E-Koerant (Digitale Intekening)

Digital subscription gives access to each week's e-koerant edition **from your subscription start date onward** (not the full historical archive). This is the subscription offered on `/inteken/e-uitgawe`.

| Period | Price | Per Issue | Savings |
|---|---|---|---|
| 1 Maand (4 uitgawes) | R140 | R35 | — |
| 3 Maande (12 uitgawes) | R390 | R32.50 | Spaar R30 |
| 12 Maande (52 uitgawes) | R1 400 | ~R26.92 | Spaar R420 |

### Canonical Pricing Phrases (Afrikaans)

Use these exact phrases when describing pricing in body copy, FAQs, and page descriptions:

- **Huisaflewering**: "Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand."
- **E-koerant (enkel)**: "'n Elektroniese e-koerant kos R35 per uitgawe."
- **E-koerant (intekening)**: "Teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes."

> **Note:** "Alle e-uitgawes" in marketing copy means all editions published from the subscriber's sign-up date onward — not the full historical archive. See `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` for access rules.

These two sentences may be combined where both products are mentioned:

> "Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand. 'n Elektroniese e-koerant kos R35 per uitgawe."

### FAQ Pricing Answers

For the FAQ page "Oor die Papier" section, use this canonical answer for subscription cost:

> **Wat kos 'n intekening?**
> Huisaflewering kos vanaf R140 per maand. Die e-koerant kos R35 per uitgawe.

### Key E-Koerant Messaging

When describing the e-koerant product, use these three key points:

1. **Kry volledige toegang tot e-koerant.**
2. **Bevat alle inhoud van drukkoerant.**
3. **Drukkoerant Vrydae in die winkels.**

## Page Responsibilities

| Page | Purpose |
|---|---|
| `/e-uitgawes` | Browse & buy **individual** e-uitgawes at R35 each (once-off, ad hoc). |
| `/inteken/e-uitgawe` | **Subscribe** to the e-koerant for ongoing access (R140/R390/R1400). |
| `/inteken/aflewering` | **Subscribe** to home delivery of the printed koerant (R140/R455/R910/R1820). |

## Nomenclature: "e-uitgawe" Capitalisation

- **Start of a sentence or heading**: "E-uitgawe" / "E-uitgawes" (capital E)
- **Mid-sentence / body text**: "e-uitgawe" / "e-uitgawes" (lowercase e)
- **Page titles / breadcrumbs**: "E-uitgawes" (capital, as a proper noun/section name)
- **Product type**: "e-koerant" (always lowercase mid-sentence)

Examples:
- "Koop 'n enkele e-uitgawe vir R35."
- "E-uitgawes — die volledige koerant in digitale formaat."

## Delivery Areas

Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. **Not nationwide.** Do not use "landwyd" when describing delivery coverage.

> **Canonical copy**: "Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. Doen navraag by diepapierintekening@onthedot.co.za"

### How to subscribe (user-facing instructions)

- **Huisaflewering**: "Vir huisaflewering, bel die On the Dot afleweringspan by 087 353 1291 of stuur 'n e-pos na diepapierintekening@onthedot.co.za."
- **E-koerant**: "Vir e-koerant kry die skakel op die tuisblad."

## Contact Numbers (Allowed)

The following telephone numbers are approved for display:

| Department | Number | Context |
|---|---|---|
| Aflewering (On the Dot) | **087 353 1291** | Subscription/delivery queries |
| Advertensies | **+27 51 404 7600** | Advertising sales |
| Persraad | **011 484 3612** | Ethics/complaints (external org) |

> **NOTE**: These are the ONLY approved phone numbers. Do not invent or display any other telephone numbers. Email remains the primary contact method for editorial (lesers@diepapier.co.za) and general queries.

## Rules

1. **Consistency**: Every page or component that displays or references pricing must use the values above. Search for hardcoded prices before adding new copy.
2. **E-editions data** (`/src/app/data/eEditions.ts`): Individual e-edition `price` must be `"R 35.00"` and `priceValue` must be `35`.
3. **FAQs**: All FAQ answers referencing pricing must cite exact values from this document.
4. **"Vanaf" language**: When speaking generally about delivery cost, use "vanaf R140 per maand." Do not use "vanaf" for single e-koerant; instead say "R35 per uitgawe."
5. **About page FAQ** (`about-5`): Must cite both R35 (winkel / e-koerant) and R140/m (tuisaflewering).
6. **Telephone numbers**: Only display the approved phone numbers listed in the "Contact Numbers" table above. Email remains the primary contact method for editorial and general queries.
7. **Delivery area accuracy**: Always describe delivery as "groter metro-gebiede en sommige omliggende dorpe" — never as "landwyd" or nationwide. Direct users to call 087 353 1291 or email diepapierintekening@onthedot.co.za to confirm coverage.
8. **Single purchase vs subscription**: The `/e-uitgawes` page is for once-off R35 purchases. Do NOT display subscription pricing (e.g. "R80/pm") on this page. Direct users to `/inteken/e-uitgawe` for subscription options.
9. **E-koerant ≠ intekening by default**: When a user buys from `/e-uitgawes`, it is a single ad hoc purchase at R35. Only `/inteken/e-uitgawe` offers the subscription model.