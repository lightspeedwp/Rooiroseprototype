Excellent — this is now a proper system design exercise.

You’ve confirmed:

* ✅ Rooiwarm wenners = standalone
* ✅ Shop = visible in main nav
* ✅ Podcasts = under Ontspanning

Below is a **complete Figma Make Content + Data Architecture Brief**, aligned to:

* Current prototype structure (React + token-driven system)
* Existing shared components (hero patterns, category entry links)
* New mega menu architecture
* Dynamic data model for scalability
* 10 posts per category
* Unique Unsplash images
* Reusable structured data files

---

# 1️⃣ STRATEGIC DECISION: Edit vs Replace Existing News Content

After reviewing the prototype architecture pattern (token-driven, shared hero sections, category landing entry points):

### 🔥 Recommendation:

**Create new structured content data files and delete the news-focused mock data.**

Why:

* News tone ≠ Rooi Rose editorial voice
* Category names don’t match
* Templates will break semantic consistency
* It’s cleaner to migrate fully to a magazine structure

So we will:

```
/src/data/
  categories.ts
  posts.ts
  subcategories.ts
  navigation.ts
```

Then remove:

```
/src/data/news.ts
```

---

# 2️⃣ INFORMATION ARCHITECTURE (FINAL)

## MAIN NAVIGATION (Mega Menu Enabled)

Kos
Mode
Skoonheid
Gesondheid
Bekendes
Leefstyl
Jou lewe
Ontspanning
Rooiwarm wenners
Wen
Shop
Kontak

---

# 3️⃣ MEGA MENU STRUCTURE (Figma Instruction)

Each top-level item opens a structured mega menu.

### Layout Pattern:

**Column 1 – Featured Story**

* Large image
* Title
* Short excerpt

**Column 2 – Subcategories**

* List of subcategories

**Column 3 – Trending**

* 3 recent posts (auto populated)

**Column 4 – Shop CTA (optional block)**

---

### Example: KOS Mega Menu

Featured: Latest seasonal recipe
Subcategories:
Maklik & vinnig
Aandetes vir die week
Somerkos
Winterkos
Laekoolhidraat
Vegetaries
Gebak
Nagereg
Drankies
Jy kan
Nuut & Nou
Recipes in English

Trending:
Auto pull 3 most recent

---

# 4️⃣ SHARED HERO COMPONENT SYSTEM

We create ONE universal Hero component with variations.

## SharedHero.tsx

Props:

```ts
type HeroProps = {
  variant: "home" | "category" | "subcategory" | "article" | "competition" | "award"
  title: string
  subtitle?: string
  image: string
  category?: string
  breadcrumbs?: Breadcrumb[]
  meta?: PostMeta
}
```

### Variants:

| Variant     | Use Case             |
| ----------- | -------------------- |
| home        | Homepage hero slider |
| category    | Category landing     |
| subcategory | Subcategory page     |
| article     | Article detail       |
| competition | Giveaway page        |
| award       | Rooiwarm wenners     |

---

# 5️⃣ CATEGORY PAGE STRUCTURE

We retain the old prototype pattern of:

* Hero
* Subcategory quick links
* Featured article
* Post grid

### Category Template Layout:

1. SharedHero (category variant)
2. Subcategory navigation strip
3. Featured story block
4. 3-column article grid
5. Newsletter CTA

Subcategory pages use same hero pattern but filter posts.

---

# 6️⃣ STRUCTURED DATA MODEL (CRITICAL)

This is the core of portability and template reuse.

---

## categories.ts

```ts
export type Category = {
  id: string
  title: string
  slug: string
  description: string
  heroImage: string
  subcategories: string[]
}

export const categories: Category[] = [
  {
    id: "kos",
    title: "Kos",
    slug: "kos",
    description: "Resepte en inspirasie vir elke dag.",
    heroImage: "unsplash-url",
    subcategories: ["maklik-vinnig", "aandetes", "somerkos", ...]
  }
]
```

---

## subcategories.ts

```ts
export type Subcategory = {
  id: string
  title: string
  slug: string
  parent: string
  description: string
}
```

---

## posts.ts (Universal Article Model)

```ts
export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  subcategory?: string
  tags: string[]
  author: string
  date: string
  heroImage: string
  gallery?: string[]
  featured?: boolean
  type: "article" | "recipe" | "competition" | "award"
}
```

This allows:

* One template
* Conditional rendering
* Reusable hero
* Dynamic filtering
* Future CMS portability

---

# 7️⃣ CONTENT GENERATION PLAN

You requested:

> 10 posts per category
> Unique Unsplash images

We have 10 top-level editorial categories (excluding Shop & Kontak).

That equals:

10 categories × 10 posts = 100 articles

Plus:

* 5 competitions
* 10 award entries

Total planned mock content:
~115–120 data objects

---

# 8️⃣ UNSPLASH IMAGE STRATEGY

We will use:

```
https://source.unsplash.com/random/1200x800/?[keyword]
```

Each category gets theme-based keywords.

### Image Keywords per Category

Kos:
food, recipe, cooking, dessert, kitchen, salad

Mode:
fashion, runway, outfit, style, clothing, editorial

Skoonheid:
beauty, skincare, makeup, hair, cosmetics

Gesondheid:
wellness, fitness, yoga, healthy food, doctor

Bekendes:
celebrity, interview, red carpet, stage

Leefstyl:
home decor, diy, garden, interior, craft

Jou lewe:
relationship, family, reflection, journal

Ontspanning:
travel, beach, podcast, books, cinema

Rooiwarm wenners:
award, trophy, product flatlay

Wen:
gift box, giveaway, prize

Each post gets unique query.

---

# 9️⃣ POST CONTENT BRIEF PER CATEGORY

Below is Figma-ready direction.

---

## 🥘 KOS (10 Articles)

Types:

* 3 quick meals
* 2 seasonal features
* 2 desserts
* 1 low-carb
* 1 vegetarian
* 1 drinks

Tone:
Warm, practical, inviting.

---

## 👗 MODE (10 Articles)

* 3 trend reports
* 2 how-to style guides
* 2 red carpet breakdowns
* 1 capsule wardrobe
* 2 seasonal fashion edits

Tone:
Confident, editorial, aspirational.

---

## 💄 SKOONHEID (10 Articles)

* 3 skincare routines
* 2 hair features
* 2 makeup tutorials
* 1 nail trend
* 2 product roundups

Tone:
Expert, polished, informative.

---

## 🧠 GESONDHEID (10 Articles)

* 3 fitness
* 3 nutrition
* 2 symptom explainers
* 2 mental health pieces

Tone:
Authoritative but warm.

---

## 🌟 BEKENDES (10 Articles)

* 3 celebrity interviews
* 3 TV coverage
* 2 behind-the-scenes
* 2 cultural commentary

Tone:
Exclusive, conversational.

---

## 🏡 LEEFSTYL (10 Articles)

* 3 decor features
* 2 DIY
* 2 garden
* 2 small space hacks
* 1 craft tutorial

---

## ❤️ JOU LEWE (10 Articles)

* 3 relationships
* 2 parenting
* 2 finance
* 2 inspiration
* 1 opinion

---

## ✈️ ONTSPANNING (10 Articles)

* 3 travel
* 2 book reviews
* 2 podcast episodes
* 2 film lists
* 1 event feature

---

## 🏆 ROOIWARM WENNERS (10 Articles)

* 5 beauty winners
* 3 wellness winners
* 2 editor’s picks

---

## 🎁 WEN (10 Competitions)

Each:

* Hero
* Prize
* Entry instructions
* Terms snippet

---

# 10️⃣ TEMPLATE DYNAMIC BEHAVIOUR

Shared article template should conditionally render:

If type === "recipe"
→ show ingredients block

If type === "competition"
→ show entry form

If type === "award"
→ show winner badge

---

# 11️⃣ FIGMA MAKE CONTENT INSTRUCTION BLOCK

You can paste this directly:

---

### FIGMA MAKE CONTENT GENERATION BRIEF

Create structured content data files for 10 categories with 10 posts each (100 total posts).

Each post must:

* Include title
* Excerpt
* Full editorial body (500–800 words)
* Category
* Optional subcategory
* Author
* Publish date
* Unique Unsplash hero image
* Tags
* Content type (article, recipe, competition, award)

All templates must use a Shared Hero component with variant-based rendering.

Category pages must:

* Use shared hero
* Include subcategory link strip
* Include featured story
* Display dynamic post grid

Mega menus must:

* Show featured article
* Show subcategory links
* Show 3 trending posts

Navigation must include:
Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, Shop, Kontak.

---

# 12️⃣ FINAL STRUCTURE SUMMARY

You now have:

* Clean content architecture
* Mega menu plan
* Data model
* 100-post content plan
* Dynamic template structure
* Shared hero system
* Image sourcing strategy
* Replace-news strategy

---

Next step options:

1. I generate the full structured data file format for one category as a template.
2. I generate all 100 structured mock posts.
3. I generate navigation.ts + megaMenuConfig.ts.
4. I design the route architecture for React.

Which would you like me to produce next?
