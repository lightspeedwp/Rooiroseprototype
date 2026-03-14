# Current Tasks — rooi rose Shop & Advertising

**Created**: 2026-03-13  
**Last Updated**: 2026-03-14  
**Status**: ✅ ALL TASKS COMPLETE (11/11 = 100%)  
**Priority**: P1 — High Priority Feature Implementation

---

## 📊 **TASK OVERVIEW**

| Phase | Tasks | Complete | Remaining | Status |
|:------|:-----:|:--------:|:---------:|:------:|
| Phase 1: Shop System | 3 | 3 | 0 | 🟢 Complete |
| Phase 2: Advertising Pages | 6 | 6 | 0 | 🟢 Complete |
| Phase 3: Subscription Enhancement | 2 | 2 | 0 | 🟢 Complete |
| **TOTAL** | **11** | **11** | **0** | **✅ 100% Complete** |

---

## ✅ **PHASE 1: SHOP SYSTEM** (2/3 Complete)

### Background
The rooi rose shop sells swag products (clothing, mugs, tote bags), paid competition entries, and magazine subscriptions (both print delivery and e-editions). All product images must be square (1:1 aspect ratio) to maintain visual consistency.

### Task 1.1: Create Product Data ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/data/products.ts`

Created 18 swag products across 5 categories:
- Klere (5 products): T-hemde, Hoodies, Caps
- Drinkgoed (4 products): Koffiebekers, Waterflesse
- Tasse & Rugsakke (3 products): Tote bags, Rugsakke
- Skryfbehoeftes (3 products): Notaboeke, Penne
- Leefstyl (3 products): Phone cases, Stickers

**Data Structure**:
- Product ID, name (Afrikaans), description
- Price (Rand currency)
- Category, image (square 1:1)
- In-stock status
- Featured flag

### Task 1.2: Create Shop Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/pages/Shop.tsx`

**Features Implemented**:
- Category filtering (All, Klere, Drinkgoed, Tasse, Skryfbehoeftes, Leefstyl)
- Square product images (1:1 aspect ratio)
- "Add to Cart" functionality (CartContext integration)
- Editorial typography (Playfair Display SC headings)
- Responsive grid (1-2-3-4 columns)
- Product ratings display
- Stock status indicators

**Design Tokens Used**:
- Brand red: `#e01e12`
- Typography: Playfair Display SC (headings), Karla (body)
- Spacing: Medium/large tokens
- Dark mode support

### Task 1.3: Add Shop Routes ✅ COMPLETE
**Priority**: P0 (Critical)  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/routes.tsx`

**Routes Added**:
- `/winkel` (Afrikaans)
- `/shop` (English)

**Implementation**:
- Lazy-loaded Shop component
- Added to MainLayout children
- Integrated with CartContext

---

## 🟢 **PHASE 2: ADVERTISING PAGES REBRAND** (2/6 Complete)

### Background
The 6 advertising sub-pages currently reference "newspaper" positioning. They need to be updated to reflect rooi rose as a lifestyle magazine with affluent, engaged readers interested in fashion, beauty, wellness, food, and entertainment.

### Task 2.1: Update Classifieds Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/pages/advertise/ClassifiedsPage.tsx`

**Changes Completed**:
- [x] Updated hero section copy (magazine context: "tydskrif", "stilbewuste lesers", "hoëkwaliteit gehoor")
- [x] Updated CLASSIFIED_CATEGORIES to lifestyle categories (Mode & Styl, Skoonheid & Welstand, Kos & Wyn, Gesondheid & Fiksheid, Geleenthede, Leefstyl & Geskenke)
- [x] Updated benefits list (affluent readers, lifestyle focus)
- [x] Updated CLASSIFIEDS_FAQS to reflect magazine context and lifestyle categories
- [x] Verified Playfair Display SC headings (font-heading class with CSS variables)
- [x] Mobile responsiveness confirmed (responsive grid, dark mode supported)

**New Icons Added**:
- Shirt, Sparkle, UtensilsCrossed, Heart, PartyPopper, Gift (from lucide-react)

**Acceptance Criteria**:
- ✅ All copy references "tydskrif" (magazine) not "koerant" (newspaper)
- ✅ Categories reflect lifestyle focus (Mode, Skoonheid, Kos, Gesondheid, Geleenthede, Leefstyl)
- ✅ Maintains editorial typography (Playfair Display SC + Karla)
- ✅ Dark mode works correctly

### Task 2.2: Update Display Advertising Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/pages/advertise/DisplayAdvertisingPage.tsx`

**Changes Completed**:
- [x] Updated hero subtitle (premium lifestyle magazine positioning: "Suid-Afrika se voorste Afrikaanse leefstyl-tydskrif vir welgestelde vroue")
- [x] Updated intro copy (reader demographics: "verfynde vroue tussen 25–55 wat gepassioneererd is oor mode, skoonheid, kos, gesondheid en kwaliteit-leefstyl")
- [x] Updated DISPLAY_BENEFITS to reflect premium lifestyle audience (Premie-gehoor, Multi-platform, Handelsmerkbelyning)
- [x] Updated DISPLAY_ADS_FAQS: Changed "koerant" → "tydskrif", added lifestyle section references (Mode, Skoonheid, Kos, Leefstyl)
- [x] Verified design tokens (brand red, Playfair Display SC headings)
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**Acceptance Criteria**:
- ✅ Reflects premium lifestyle magazine positioning
- ✅ Reader demographics match rooi rose target audience (welgestelde vroue 25-55, leefstyl-gerig)
- ✅ All references changed from "koerant" to "tydskrif"
- ✅ Typography follows brand guidelines (Playfair Display SC + Karla)

### Task 2.3: Update Leaflets Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**File**: `/src/app/pages/advertise/LeafletsPage.tsx`

**Changes Completed**:
- [x] Updated hero subtitle (magazine inserts: "rooi rose tydskrif-insetsels" instead of "koerantinsetsels")
- [x] Updated intro copy (premium lifestyle positioning: "weeklikse premium tydskrif", "welgestelde huishoudings", "kwaliteit-leefstyl, mode, skoonheid en kulinêre verfyning")
- [x] Updated benefits (Premie-gehoor, Geteikende verspreiding, Hoë impak)
- [x] Updated LEAFLETS_FAQS (changed "koerant" to "tydskrif", emphasized affluent readers with purchasing power)
- [x] Verified typography (Playfair Display SC headings with CSS variables)
- [x] Mobile responsiveness confirmed (responsive grid, dark mode supported)

**Acceptance Criteria**:
- ✅ All references changed from newspaper to magazine context
- ✅ Distribution positioning reflects premium lifestyle magazine
- ✅ Benefits emphasize affluent, style-conscious households
- ✅ Maintains brand consistency (brand red, typography)

### Task 2.4: Update Sponsored Content Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**Files**: `/src/app/pages/advertise/SponsoredContentPage.tsx`, `/src/app/data/advertising.ts`, `/src/app/data/pageFaqs.ts`

**Changes Completed**:
- [x] Updated hero subtitle (premium lifestyle positioning: "rooi rose se welgestelde lesers")
- [x] Updated intro copy (lifestyle-oriented content: "Mode, Skoonheid, Kos en Leefstyl kategorieë", "premium tydskrif-konteks")
- [x] Updated SPONSORED_CONTENT_TYPES (lifestyle examples: "skoonheidsresensies, kookvlogs, modegidse", "Instagram & Facebook-bevordering", "tydskrif-artikel")
- [x] Updated SPONSORED_CONTENT_FAQS (magazine context: "tydskrif-lesers", "premium redaksioneel-gestileerde artikels", "tydskrif-artikel")
- [x] Verified design tokens (brand red, Playfair Display SC headings)
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**Acceptance Criteria**:
- ✅ Content examples reflect lifestyle topics (beauty reviews, food features, fashion guides)
- ✅ Editorial integration emphasizes magazine articles (not newspaper)
- ✅ Pricing/packages reference lifestyle content tiers
- ✅ Sample content uses rooi rose editorial style
- ✅ Maintains brand consistency (brand red, editorial typography)

### Task 2.5: Update Sponsorships Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-13)  
**Files**: `/src/app/pages/advertise/SponsorshipsPage.tsx`, `/src/app/data/advertising.ts`, `/src/app/data/pageFaqs.ts`

**Changes Completed**:
- [x] Updated hero subtitle (premium lifestyle positioning: "rooi rose se premium leefstyl-inhoud en bereik welgestelde, stilbewuste vroue")
- [x] Updated intro copy (lifestyle focus: "Mode, Skoonheid, Kos of Gesondheid-afdelings", "welgestelde, betrokke gehoor (25-55)")
- [x] Updated SPONSORSHIP_TYPES in advertising.ts (lifestyle categories: Mode & Styl, Skoonheid & Welstand, Kos & Wyn, Gesondheid & Fiksheid, Kunsliefde & Kultuur)
- [x] Updated event examples (Modeweek-dekking, Skoonheidstoekennings, Kos & Wyn-feeste, Welstandseminare, Bruidsskou-verslae)
- [x] Updated SPONSORSHIP_BENEFITS (premium leefstyl-inhoud, welgestelde stilbewuste gehoor, aspirasionele waarde)
- [x] Updated success stories (Edgars - Mode & Styl, Woolworths Beauty - Skoonheidsafdeling, Spier Wine Estate - Kos & Wyn-geleentheid)
- [x] Updated SPONSORSHIPS_FAQS (leefstyl-afdelings, leefstyl-geleenthede, tydskrif-bereik, welgestelde vroue 25-55)
- [x] Verified design tokens (brand red, Playfair Display SC headings)
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**Acceptance Criteria**:
- ✅ Sponsorship opportunities match lifestyle magazine context (Mode, Skoonheid, Kos, Gesondheid)
- ✅ Examples use rooi rose categories and events (modeweek, beauty awards, food festivals)
- ✅ Benefits reflect premium lifestyle audience (aspirational value, affluent readers)
- ✅ Case studies feel authentic to magazine (Edgars, Woolworths Beauty, Spier)
- ✅ Maintains brand consistency (brand red, editorial typography)

### Task 2.6: Update Supplements Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-14)  
**Files**: `/src/app/pages/advertise/SupplementsPage.tsx`, `/src/app/data/advertising.ts`, `/src/app/data/pageFaqs.ts`

**Changes Completed**:
- [x] Updated hero title and subtitle (premium magazine special editions: "Spesiale Uitgawes", "toegewyde premium tydskrif-uitgawe")
- [x] Updated intro copy (magazine context: "volwaardige, maatgemaakte premium publikasie wat prominent saam met ons hooftydskrif verskyn")
- [x] Updated SUPPLEMENT_TYPES in advertising.ts (lifestyle special editions: Bruidsjoernaal 48–64 bladsye, Skoonheidsjaarlikse 32–48 bladsye, Kos & Wyn Spesiale 24–40 bladsye, Pasgemaakte uitgawe)
- [x] Updated supplement descriptions (from newspaper sections to lifestyle magazine special editions)
- [x] Updated SUPPLEMENTS_FAQS (from "koerantbylaag" to "spesiale uitgawe", "tydskrif", lifestyle themes)
- [x] Updated FAQ section description ("spesiale tydskrif-uitgawes" instead of "koerantbylaes")
- [x] Verified design tokens (brand red, Playfair Display SC headings)
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**New Supplement Types**:
- Bruidsjoernaal (Bridal Journal) — 48-64 pages, annual guide for engagements and weddings
- Skoonheidsjaarlikse (Beauty Annual) — 32-48 pages, latest beauty trends and products
- Kos & Wyn Spesiale (Food & Wine Special) — 24-40 pages, seasonal culinary excellence
- Pasgemaakte uitgawe (Custom edition) — Flexible format for brand guides

**Acceptance Criteria**:
- ✅ Supplement themes align with rooi rose lifestyle categories (bridal, beauty, food & wine)
- ✅ Examples feel like premium magazine special editions (not newspaper supplements)
- ✅ Distribution matches magazine model (distributed with weekly magazine)
- ✅ Positioning reflects premium lifestyle magazine (affluent, style-conscious readers)
- ✅ Maintains brand consistency (brand red, editorial typography)

---

## 🟢 **PHASE 3: SUBSCRIPTION PAGE ENHANCEMENT** (0/2 Complete)

### Background
Current subscription pages (E-Edition and Print Delivery) need to clearly differentiate the two offerings and emphasize their unique benefits for the rooi rose magazine context.

### Task 3.1: Enhance E-Edition Subscription Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-14)  
**File**: `/src/app/pages/SubscribeEEdition.tsx`

**Changes Completed**:
- [x] Added comparison table (E-Edition vs Print) — 7-row feature comparison with highlighted E-Edition column
- [x] Added digital benefits section — 6-card grid emphasizing instant access, read anywhere, searchable archive, eco-friendly, download offline, any device
- [x] Added device showcase section — Smartphone, Tablet, Monitor icons with platform details (iOS/Android, iPad/Android, Web Browser)
- [x] Added regional variants information panel — Amber callout box explaining 4 regions (Boland, Overberg, Breede Rivier, Langeberg) with city examples
- [x] Updated FAQs to use E-Edition-specific FAQs (EEDITIONS_FAQS) when on e-edition route
- [x] Added new lucide-react icons: Download, Search, Smartphone, Tablet, Monitor, Leaf, Zap, Globe
- [x] Verified Playfair Display SC headings with CSS variables
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**New Sections Added**:
1. **Digital Benefits** (6 benefits grid):
   - Onmiddellike toegang (instant access)
   - Lees orals (read anywhere)
   - Deursigbare argief (searchable archive)
   - Eko-vriendelik (eco-friendly)
   - Laai af vir vanlyn (download offline)
   - Enige toestel (any device)

2. **Device Showcase** (Navy background section):
   - 3 device types with icons and platform details
   - Responsive layout for mobile/desktop

3. **Comparison Table**:
   - 7 feature rows comparing E-Edition vs. Print
   - Highlighted E-Edition column (blue background)
   - Features: Price, instant access, devices, archive, environment, physical copy, delivery

4. **Regional Variants Panel** (Amber callout):
   - 4 regional editions with city examples
   - Note about changing preferences

**Acceptance Criteria**:
- ✅ Clear differentiation from print subscription (comparison table)
- ✅ Benefits emphasize digital convenience (6-card benefits grid)
- ✅ Regional variants properly displayed (amber panel with 4 regions)
- ✅ Device showcase included (3 device types with icons)
- ✅ E-edition-specific FAQs integrated
- ✅ Maintains magazine branding (Playfair Display SC + Karla, brand red)
- ✅ Dark mode supported throughout
- ✅ Mobile responsive

### Task 3.2: Enhance Print Delivery Subscription Page ✅ COMPLETE
**Priority**: P1  
**Status**: ✅ Complete (2026-03-14)  
**File**: `/src/app/pages/SubscribeDelivery.tsx`

**Changes Completed**:
- [x] Added comparison table (Print vs E-Edition) — 7-row feature comparison with highlighted Print column (amber background)
- [x] Added tactile magazine benefits section — 6-card grid emphasizing coffee table value, no screen time, collectibility, delivery, tangible experience, share with family
- [x] Added delivery zones information panel — Blue callout box explaining 4 regions (Boland, Overberg, Breede Rivier, Langeberg) with delivery times (05:00-08:00 Fridays)
- [x] Updated benefits to emphasize physical magazine experience
- [x] Added new lucide-react icons: Coffee, BookOpen, Heart, Package (delivery benefits)
- [x] Verified Playfair Display SC headings with CSS variables
- [x] Mobile responsiveness confirmed (responsive grids, dark mode supported)

**New Sections Added**:
1. **Tactile Magazine Benefits** (6 benefits grid):
   - Koffietafelwaarde (coffee table appeal)
   - Geen skermtyd (no screen time)
   - Versamelkwaliteit (keepsake quality)
   - By jou deur (delivered to your door)
   - Tasbare ervaring (tangible experience)
   - Deel met gesin (share with family)

2. **Comparison Table**:
   - 7 feature rows comparing Print vs. E-Edition
   - Highlighted Print column (amber background)
   - Features: Price, physical copy, delivery, tangible reading, collectibility, devices, searchable archive

3. **Delivery Zones Panel** (Blue callout):
   - 4 regional editions with city examples
   - Delivery timing information (Fridays 05:00-08:00)
   - Contact details for delivery confirmation

**Acceptance Criteria**:
- ✅ Clear differentiation from e-edition (comparison table with Print highlighted)
- ✅ Benefits emphasize physical magazine experience (6 tactile benefits)
- ✅ Delivery zones clearly explained (blue panel with 4 regions + cities)
- ✅ Regional pricing transparent (4 subscription tiers displayed)
- ✅ Maintains editorial design (Playfair Display SC + Karla, brand red)
- ✅ Dark mode supported throughout
- ✅ Mobile responsive

---

## 📋 **TASK EXECUTION ORDER**

**Recommended Sequence** (by priority):

1. ✅ ~~Task 1.1: Product Data~~ (Complete)
2. ✅ ~~Task 1.2: Shop Page~~ (Complete)
3. ✅ ~~Task 1.3: Shop Routes~~ (Complete)
4. ✅ ~~Task 2.1: Classifieds Page~~ (Complete)
5. ✅ ~~Task 2.2: Display Advertising Page~~ (Complete)
6. ✅ ~~Task 2.3: Leaflets Page~~ (Complete)
7. ✅ ~~Task 2.4: Sponsored Content Page~~ (Complete)
8. ✅ ~~Task 2.5: Sponsorships Page~~ (Complete)
9. ✅ ~~Task 2.6: Supplements Page~~ (Complete)
10. ✅ ~~Task 3.1: E-Edition Subscription Enhancement~~ (Complete)
11. ✅ ~~Task 3.2: Print Delivery Subscription Enhancement~~ (Complete)

---

## 🎯 **SUCCESS CRITERIA**

All tasks complete when:
- ✅ Shop system fully functional with square images
- ✅ All 6 advertising pages reflect magazine context (not newspaper)
- ✅ E-Edition and Print subscriptions clearly differentiated
- ✅ All pages use Playfair Display SC + Karla typography
- ✅ Brand red (#e01e12) used consistently
- ✅ Dark mode works on all updated pages
- ✅ Mobile responsive on all pages
- ✅ No TypeScript errors

---

## 📝 **DOCUMENTATION UPDATES NEEDED**

After task completion:
- [ ] Update `/CHANGELOG.md` with new shop and advertising features
- [ ] Update `/Guidelines.md` with shop completion status
- [ ] Update `/tasks/CONTINUE-PROMPT.md` with next priorities
- [ ] Create `/reports/shop-advertising-completion-2026-03-13.md`

---

## 🔗 **RELATED FILES**

**Data Files**:
- `/src/app/data/products.ts` — Shop products (18 swag items)
- `/src/app/data/competitions.ts` — Paid competitions (3 with entry fees)

**Page Files**:
- `/src/app/pages/Shop.tsx` — Shop page (complete)
- `/src/app/pages/advertise/*.tsx` — 6 advertising pages (need updates)
- `/src/app/pages/SubscribeEEdition.tsx` — E-edition subscriptions
- `/src/app/pages/SubscribeDelivery.tsx` — Print subscriptions

**Guidelines**:
- `/guidelines/rooi-rose/brand-guidelines.md` — Brand positioning
- `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md` — Design tokens

---

## 💬 **QUICK RESUME PROMPTS**

**To continue this work**:
```
Continue with Task 2.1 (Classifieds Page rebrand) from /tasks/CURRENT-TASKS.md.
Update the page to reflect rooi rose as a lifestyle magazine with affluent readers.
```

**To skip to subscription pages**:
```
Skip to Phase 3 and start with Task 3.1 (E-Edition Subscription enhancement).
Add comparison table and emphasize digital benefits.
```

**To get status update**:
```
What's the current status of /tasks/CURRENT-TASKS.md?
How many tasks are complete and what's next?
```

---

**Last Updated**: 2026-03-14  
**Next Review**: After Task 2.6 completion (end of Phase 2)  
**Estimated Total Time**: 6-8 hours for all remaining tasks