# Editorial Style Guide — rooi rose

**Category**: Content & Editorial  
**Last Updated**: 2026-03-12  
**Status**: ✅ Production Ready

---

## Overview

This guideline defines the editorial writing standards, typography hierarchy, and article structure for rooi rose magazine. It ensures consistent, high-quality content across all lifestyle categories and article types.

---

## 1. Typography Hierarchy

### Display Typography

rooi rose uses **Playfair Display SC** (small caps serif) for all display typography to create a sophisticated, editorial aesthetic.

#### H1 — Article Title

**Font**: Playfair Display SC  
**Size**: `var(--wp--preset--font-size--xxx-large)` (48px / 3rem)  
**Weight**: 700 (Bold)  
**Line Height**: 1.2  
**Color**: `var(--custom-contrast)` (black in light mode, white in dark mode)  
**Use Case**: Single post titles, page headlines

**Example**:
```html
<h1 class="wp-block-heading has-brand-serif-font-family">
  Die Kuns van Eenvoudige Kos
</h1>
```

**React**:
```tsx
<h1 className="has-brand-serif-font-family text-[3rem] font-bold leading-tight">
  Die Kuns van Eenvoudige Kos
</h1>
```

#### H2 — Major Section Heading

**Font**: Playfair Display SC  
**Size**: `var(--wp--preset--font-size--xx-large)` (36px / 2.25rem)  
**Weight**: 700 (Bold)  
**Line Height**: 1.3  
**Color**: `var(--custom-contrast)`  
**Margin**: `var(--wp--preset--spacing--large)` top, `var(--wp--preset--spacing--small)` bottom  
**Use Case**: Major article sections, category titles

**Example**:
```html
<h2 class="wp-block-heading has-brand-serif-font-family">
  Bestanddele wat Saak Maak
</h2>
```

#### H3 — Subsection Heading

**Font**: Playfair Display SC  
**Size**: `var(--wp--preset--font-size--x-large)` (30px / 1.875rem)  
**Weight**: 700 (Bold)  
**Line Height**: 1.4  
**Color**: `var(--custom-contrast)`  
**Use Case**: Article subsections, content blocks

**Example**:
```html
<h3 class="wp-block-heading has-brand-serif-font-family">
  Voorbereiding
</h3>
```

#### H4 — Minor Heading

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--large)` (24px / 1.5rem)  
**Weight**: 600 (Semibold)  
**Line Height**: 1.5  
**Color**: `var(--custom-contrast)`  
**Use Case**: Tips sections, callout boxes

**Example**:
```html
<h4 class="wp-block-heading has-brand-sans-font-family">
  Wenke vir Beginners
</h4>
```

#### H5 — Card/Component Heading

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--medium)` (20px / 1.25rem)  
**Weight**: 600 (Semibold)  
**Line Height**: 1.5  
**Color**: `var(--custom-contrast)`  
**Use Case**: Card headlines, sidebar headings

#### H6 — Label/Metadata

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--base)` (16px / 1rem)  
**Weight**: 600 (Semibold)  
**Line Height**: 1.5  
**Color**: `var(--custom-contrast)`  
**Use Case**: Labels, form headings

---

### Body Typography

rooi rose uses **Karla** (sans-serif) for all body text to ensure optimal readability.

#### Paragraph — Body Text

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--base)` (16px / 1rem)  
**Weight**: 400 (Regular)  
**Line Height**: 1.7  
**Color**: `var(--custom-contrast)`  
**Max Width**: 680px (optimal reading length: 65-75 characters per line)  
**Paragraph Spacing**: `var(--wp--preset--spacing--small)` (16px)

**Example**:
```html
<p class="has-brand-sans-font-family">
  Wanneer dit by kos kom, is eenvoud dikwels die beste benadering.
  Vars bestanddele, minimale verwerking, en tyd om die geure te ontwikkel
  — dit is die geheim van great kookkuns.
</p>
```

**Guidelines**:
- Keep paragraphs short (3-5 sentences maximum)
- Use topic sentences to guide readers
- Break up long paragraphs with subheadings or pull quotes

#### Lead Paragraph — Introduction

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--medium)` (20px / 1.25rem)  
**Weight**: 400 (Regular)  
**Line Height**: 1.6  
**Color**: `var(--custom-contrast)`  
**Use Case**: Article introductions (first paragraph)

**Example**:
```html
<p class="has-brand-sans-font-family has-medium-font-size">
  Dis Sondag-oggend. Die son skyn deur die kombuisvenster terwyl jy koffie maak
  en dink oor wat om vir middagete te kook.
</p>
```

#### Small Text — Captions, Metadata

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--small)` (14px / 0.875rem)  
**Weight**: 400 (Regular)  
**Line Height**: 1.5  
**Color**: `var(--custom-tagline-grey)` (#424242)  
**Use Case**: Image captions, bylines, dates, reading time

**Example**:
```html
<p class="has-brand-sans-font-family has-small-font-size has-tagline-grey-color">
  Foto: Sarah van der Merwe | 5 minute leestyd
</p>
```

---

### Editorial Typography

#### Pull Quote

**Font**: Playfair Display SC  
**Size**: `var(--wp--preset--font-size--x-large)` (30px / 1.875rem)  
**Weight**: 400 (Regular)  
**Style**: Italic  
**Line Height**: 1.4  
**Color**: `var(--custom-primary)` (#e01e12 red)  
**Border**: 4px solid `var(--custom-primary)` (left side)  
**Padding**: `var(--wp--preset--spacing--medium)` (left)  
**Margin**: `var(--wp--preset--spacing--large)` (top/bottom)  
**Use Case**: Highlight key quotes or statements within articles

**Example**:
```html
<!-- wp:quote {"className":"is-style-pull-quote"} -->
<blockquote class="wp-block-quote is-style-pull-quote">
  <p class="has-brand-serif-font-family has-primary-color">
    "Kos is liefde wat sigbaar gemaak word."
  </p>
  <cite class="has-brand-sans-font-family has-small-font-size">
    — Sarah van der Merwe, Kosskrywer
  </cite>
</blockquote>
<!-- /wp:quote -->
```

**React**:
```tsx
<PullQuoteSection 
  quote="Kos is liefde wat sigbaar gemaak word."
  author="Sarah van der Merwe"
  role="Kosskrywer"
/>
```

#### Byline — Author Information

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--small)` (14px)  
**Weight**: 400 (Regular) for text, 600 (Semibold) for author name  
**Line Height**: 1.5  
**Color**: `var(--custom-tagline-grey)`  
**Use Case**: Article author attribution

**Format**:
```
Deur [Author Name] | [Date] | [Reading Time]
```

**Example**:
```html
<p class="has-brand-sans-font-family has-small-font-size has-tagline-grey-color">
  Deur <strong>Marietjie Bothma</strong> | 12 Maart 2026 | 8 minute leestyd
</p>
```

---

### Lists & Navigation

#### Bulleted List

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--base)` (16px)  
**Line Height**: 1.7  
**List Style**: Disc (default) or custom icon  
**Spacing**: `var(--wp--preset--spacing--x-small)` (8px) between items

**Example**:
```html
<!-- wp:list -->
<ul class="wp-block-list has-brand-sans-font-family">
  <li>2 koppies koekmeel</li>
  <li>1 teelepel bakpoeier</li>
  <li>½ koppie suiker</li>
  <li>2 eiers</li>
</ul>
<!-- /wp:list -->
```

#### Numbered List — Instructions

**Font**: Karla  
**Size**: `var(--wp--preset--font-size--base)` (16px)  
**Line Height**: 1.7  
**Number Style**: Bold  
**Spacing**: `var(--wp--preset--spacing--small)` (16px) between items  
**Use Case**: Step-by-step instructions (recipes, how-tos)

**Example**:
```html
<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list has-brand-sans-font-family">
  <li><strong>Verhit</strong> die oond tot 180°C.</li>
  <li><strong>Meng</strong> al die droë bestanddele in 'n groot bak.</li>
  <li><strong>Klits</strong> die eiers en melk saam in 'n aparte bak.</li>
</ol>
<!-- /wp:list -->
```

---

## 2. Article Structure

### Standard Article Format

All rooi rose articles follow this structure:

```
1. Article Title (H1)
2. Featured Image (3:2 or 16:9 aspect ratio)
3. Byline (author, date, reading time)
4. Category Badge
5. Lead Paragraph (larger text, engaging hook)
6. Article Body
   - Subheadings (H2, H3)
   - Paragraphs
   - Pull Quotes (1-2 per article)
   - Images with Captions
   - Lists (bulleted or numbered)
7. Conclusion
8. Social Share Bar
9. Related Articles
10. Comments Section
```

### Recipe Article Format

Recipe articles have a specialized structure:

```
1. Recipe Title (H1)
2. Hero Image (finished dish)
3. Headnote (story or context, 2-3 sentences)
4. Recipe Meta
   - Prep Time
   - Cook Time
   - Total Time
   - Servings
   - Difficulty Level
5. Ingredients List (bulleted, metric measurements)
6. Instructions (numbered, step-by-step)
7. Chef's Notes (tips, variations)
8. Nutritional Information (optional)
9. Related Recipes
```

**Example**:
```markdown
# Ouma se Melktert met 'n Moderne Draai

[Hero Image: Melktert slice on vintage plate]

Hierdie resep is 'n kombinasie van my ouma se oorspronklike melktert en 'n paar moderne wenke wat dit net bietjie makliker maak sonder om die tradisionele smaak te verloor.

**Voorbereiding:** 20 minute  
**Baktyd:** 45 minute  
**Totaal:** 1 uur 5 minute  
**Porsies:** 8-10  
**Moeilikheidsgraad:** Medium

## Bestanddele

### Kors
- 250g koekmeel
- 125g koue botter
- 2 eetlepels suiker
- 1 eiergeel
- 2-3 eetlepels koue water

### Vulsel
- 500ml melk
- 3 eiergele
- 125ml suiker
- 30ml meel
- 15ml botter
- 5ml vanilla-ekstrak
- Kaneel vir strooi

## Instruksies

1. **Maak die kors:** Meng meel, suiker en koue botter totdat dit soos broodkrummels lyk.
2. **Voeg vog by:** Meng eiergeel en water, voeg by meelmengsel.
3. **Rus:** Laat die deeg 30 minute in die yskas rus.
...

## Sjef se Wenke

- Gebruik volroom melk vir die beste smaak
- Moenie die vulsel oorkook nie — dit verdik verder terwyl dit afkoel
- Vars gemaalde kaneel maak 'n groot verskil

## Voedingswaarde (per sny)

Kalorieë: 285 | Vet: 12g | Koolhidrate: 38g | Proteïen: 6g
```

### How-To Guide Format

```
1. Compelling Title (action-oriented)
2. Hero Image
3. Introduction (why this matters, 2-3 paragraphs)
4. Tools/Materials Needed (bulleted list)
5. Step-by-Step Instructions (numbered)
   - Each step with supporting image
   - Clear, action-oriented language
   - Tips highlighted in callout boxes
6. Troubleshooting Section (common problems)
7. Conclusion (encouragement, next steps)
```

### Interview/Profile Format

```
1. Profile Title (Name + Tagline)
2. Hero Portrait
3. Introduction (who they are, why interesting)
4. Background Section
5. Interview Q&A
   - 5-10 questions
   - Pull quotes from standout answers
6. Personal Photos (2-3 lifestyle images)
7. Quick Facts Sidebar
   - Age
   - Hometown
   - Favorite [relevant to topic]
8. Conclusion (key takeaway)
```

---

## 3. Writing Style Guidelines

### Voice & Tone

**Voice**: Warm, approachable, sophisticated  
**Tone**: Conversational yet authoritative  
**POV**: Second person ("jy") or first person plural ("ons") for engagement

**Examples**:

✅ **Good**:
> "Wanneer jy hierdie resep probeer, sal jy verstaan hoekom ouma dit so baie gemaak het."

❌ **Avoid**:
> "Die leser sal verstaan hoekom hierdie resep so gewild was."

### Language

**Primary Language**: Afrikaans  
**English Terms**: Use sparingly, only when Afrikaans equivalent is awkward  
**Acceptable English Terms**: fashion, lifestyle, smoothie, social media

**Afrikaans Standards**:
- Use standard Afrikaans spelling (not colloquial)
- Avoid excessive diminutives
- Write numbers 1-10 as words ("twee eiers"), 11+ as numerals ("15 minute")
- Measurements: Always metric (cups, teaspoons for recipes only)

### Sentence Structure

**Length**: Vary sentence length for rhythm  
**Short sentences**: Impact and clarity  
**Longer sentences**: Detail and nuance  
**Maximum**: 25-30 words per sentence

**Examples**:

✅ **Good** (varied rhythm):
> "Die son sak. Jy skink nog 'n glas wyn. Dis een van daai aande wat vir ewig kan aanhou."

❌ **Avoid** (monotonous):
> "Die son sak nou. Jy skink nog wyn. Dit voel lekker aan."

### Paragraph Structure

**Length**: 3-5 sentences ideal  
**Maximum**: 7-8 sentences  
**Topic Sentence**: Lead with main idea  
**Supporting Sentences**: Details, examples, quotes  
**Transition**: Connect to next paragraph

**Example**:
```
Die geheim van 'n goeie melktert lê in die temperatuur. Jy wil hê die melk moet warm genoeg wees om die eiers te kook, maar nie so warm dat dit hulle kook nie. Dit klink miskien ingewikkeld, maar met 'n bietjie oefening raak dit tweede natuur. Die sleutel is om die hitte laag te hou en geduldig te wees.

Eers wanneer die mengsel dik genoeg is om die rugkant van 'n lepel te bedek, is dit reg.
```

---

## 4. Grammar & Punctuation

### Capitalization

- **Sentence case for headings**: "Die beste resepte vir winter"
- **Proper nouns**: South Africa, Kaapstad, Karoo
- **Brands**: Capitalize as per brand style (e.g., "Instagram" not "instagram")
- **Seasons**: Lowercase (winter, lente, somer, herfs)
- **Months/Days**: Capitalize (Januarie, Maandag)

### Punctuation

**Oxford Comma**: Yes, always use
```
✅ kos, mode, en skoonheid
❌ kos, mode en skoonheid
```

**Quotation Marks**: Use double quotes for speech, single for quotes within quotes
```
Sy het gesê, "My ouma het altyd gesê, 'Maak dit met liefde.'"
```

**Em Dash**: Use for emphasis or parenthetical thoughts (— not --)
```
Die resep — my gunsteling van almal — kom van my ouma.
```

**Ellipsis**: Three dots for trailing off... (with space before)
```
"Ek dink... miskien is dit tyd vir iets nuuts."
```

### Numbers

**Words (1-10)**:
- twee eiers
- vyf minute
- sewe dae

**Numerals (11+)**:
- 15 minute
- 250g
- 180°C

**Exceptions**: Always use numerals for:
- Measurements: 2 koppies, 1 teelepel
- Temperatures: 180°C
- Percentages: 5%
- Dates: 12 Maart 2026
- Times: 14:30

---

## 5. Editorial Conventions

### Dates & Times

**Format**: DD Maand YYYY
```
12 Maart 2026
```

**Time**: 24-hour format
```
14:30 (not 2:30 PM)
```

**Seasons**: Always lowercase
```
winter 2026
lente-versameling
```

### Measurements

**Metric Standard**: Always use metric
```
✅ 250ml melk
✅ 2 koppies meel (recipe context only)
✅ 180°C

❌ 1 cup milk
❌ 350°F
```

**Recipe Measurements**:
- Cups and teaspoons acceptable for recipes
- Always include metric equivalent in parentheses for international ingredients
- Use abbreviations: ml, g, kg, l

### Names & Titles

**First Reference**: Full name
```
Sarah van der Merwe
```

**Subsequent References**: First name only (warm, approachable)
```
Sarah vertel...
```

**Titles**: Use when relevant
```
Dr. Maria Malan
Prof. Johan Fourie
```

### Links

**Internal Links**: 3-5 per article to related content  
**Anchor Text**: Descriptive (not "click here")  
**External Links**: Open in new tab, credited sources

**Examples**:
```
✅ Lees meer oor [seisoenale groente]
❌ Kliek [hier] vir meer inligting
```

---

## 6. SEO & Metadata

### Headlines

**Character Limit**: 50-60 characters (including spaces)  
**Include Keyword**: Primary keyword in first 5 words  
**Format**: Actionable, specific, benefit-driven

**Examples**:
```
✅ "10 Maklike Weekaandete onder R100"
✅ "Hoe om die Perfekte Melktert te Bak"
❌ "Weekaandete" (too vague)
❌ "Sommige wenke vir kos wat jy kan probeer" (too long, no benefit)
```

### Meta Descriptions

**Character Limit**: 150-160 characters  
**Include Keyword**: Primary and secondary keywords  
**Call-to-Action**: Encourage click-through  
**Format**: Active voice, second person

**Example**:
```
Ontdek 10 maklike weekaandete wat minder as R100 kos. Van pasta tot roerbak-geregte — vinnige resepte vir besige gesinne.
```

### Image Alt Text

**Format**: Descriptive, keyword-rich (when natural)  
**Length**: 10-15 words  
**Include Context**: What, where, why

**Examples**:
```
✅ "Sappige hoenderborsies met vars kruie op 'n swart bord"
✅ "Vrou wat groente sny in 'n moderne kombuis"
❌ "food" (too vague)
❌ "IMG_1234" (no description)
```

---

## 7. Accessibility Guidelines

### Heading Hierarchy

**Rule**: Never skip heading levels  
**Correct**: H1 → H2 → H3 → H2  
**Incorrect**: H1 → H3 (skipped H2)

**Screen Readers**: Proper hierarchy allows navigation by headings

### Alt Text

**Decorative Images**: Use empty alt (`alt=""`)  
**Meaningful Images**: Descriptive alt text (10-15 words)  
**Complex Images**: Provide longer description in caption or body text

### Link Text

**Descriptive**: Link text should make sense out of context  
**Avoid**: "click here", "read more", "this link"  
**Use**: "Lees meer oor seisoenale groente", "Ontdek 10 maklike resepte"

### Color Contrast

**Minimum**: WCAG AA standard (4.5:1 for body text)  
**Primary Red**: Use only for accents, not large text blocks  
**Dark Mode**: Ensure sufficient contrast in dark mode

---

## 8. Proofreading Checklist

Before publishing, verify:

### Content
- [ ] Headline is compelling and SEO-optimized (50-60 chars)
- [ ] Lead paragraph hooks the reader
- [ ] Article structure follows guideline format
- [ ] All claims are fact-checked and sourced
- [ ] Images have descriptive alt text
- [ ] Internal links to 3-5 related articles
- [ ] Social share buttons included

### Style
- [ ] Consistent voice and tone throughout
- [ ] Sentence variety (short and long)
- [ ] Paragraphs are 3-5 sentences
- [ ] No jargon or overly complex language
- [ ] Active voice used (not passive)

### Grammar
- [ ] Spelling checked (Afrikaans spell-checker)
- [ ] Punctuation correct (Oxford comma, em dashes)
- [ ] Capitalization consistent
- [ ] Numbers formatted correctly (words vs numerals)
- [ ] Measurements are metric

### SEO
- [ ] Primary keyword in headline
- [ ] Meta description written (150-160 chars)
- [ ] Image file names descriptive
- [ ] URL slug is clean and keyword-rich

### Accessibility
- [ ] Heading hierarchy correct (no skipped levels)
- [ ] Alt text for all images
- [ ] Descriptive link text
- [ ] Color contrast sufficient

---

## 9. Editorial Calendar

### Article Types by Day

**Monday**: How-To Guides (start the week with practical advice)  
**Tuesday**: Recipes (weeknight dinner inspiration)  
**Wednesday**: Beauty/Fashion (mid-week refresh)  
**Thursday**: Health/Wellness (Thursday motivation)  
**Friday**: Entertainment/Lifestyle (weekend prep)  
**Saturday**: Long-form Features (weekend reading)  
**Sunday**: Interviews/Profiles (inspirational content)

### Publishing Times

**Optimal Times** (South African timezone):
- **6:00-9:00 AM**: Commute reading (mobile-first)
- **12:00-1:00 PM**: Lunch break browsing
- **7:00-9:00 PM**: Evening leisure reading

---

## 10. Related Guidelines

- [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Voice, tone, photography
- [Content Strategy](/guidelines/rooi-rose/content-strategy.md) — Content pillars, metrics
- [Magazine Layouts](/guidelines/rooi-rose/magazine-layouts.md) — Layout patterns
- [Typography](/guidelines/design-tokens/typography.md) — Font system
- [Template System](/guidelines/rooi-rose/template-system.md) — Page templates

---

**Last Updated**: 2026-03-12  
**Maintained By**: rooi rose Editorial Team
