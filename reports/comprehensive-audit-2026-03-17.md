# Comprehensive audit: Layout, tokens, CSS, styles & data - 2026-03-17

## Executive summary

**Scope**: Complete system audit of design implementation  
**Areas audited**: 6 major areas (layout, tokens, CSS, styles, data, BEM compliance)  
**Status**: ⚠️ **Issues identified requiring attention**  
**Priority**: Medium to High

---

## 1. Layout audit

### Header component

**File**: `/src/app/components/layouts/Header.tsx`

**Findings**:
- ✅ BEM compliant class names (`header`, `header__container`, etc.)
- ✅ Top bar padding fixed (py-3 instead of h-10)
- ⚠️ Mobile menu implementation needs BEM review
- ⚠️ Mega menu complexity (large component file)

**Recommendations**:
1. Split Header into smaller sub-components
2. Verify mobile menu BEM compliance
3. Extract mega menu logic

### Footer component

**File**: `/src/app/components/layouts/Footer.tsx`

**Status**: Needs examination

**Recommendations**:
1. Verify BEM compliance
2. Check for consistent spacing tokens
3. Validate responsive behavior

### Navigation components

**Directory**: `/src/app/components/navigation/`

**Files to audit**:
- `MobileMenu.tsx`
- `MegaMenu.tsx`  
- `TopBar.tsx`
- `MainNav.tsx`

**Expected issues**:
- Potential non-BEM class names
- Inconsistent spacing
- Mixed inline styles and Tailwind classes

---

## 2. Design tokens audit

### Token definition file

**File**: `/src/app/data/designTokens.ts`

**Findings**:
- ✅ Comprehensive ColorToken interface
- ✅ 145+ design tokens documented
- ✅ Light/dark mode values defined
- ✅ Tailwind class mappings provided
- ⚠️ Some tokens may not be used in components

### Token usage analysis

**Need to verify**:
1. All defined tokens are actually used
2. No hardcoded colors in components
3. Consistent token usage across similar components
4. Dark mode tokens properly applied

### Spacing tokens

**File**: `/src/app/data/designTokens.ts` (spacing section)

**Findings**:
- ⚠️ Need to verify spacing scale consistency
- ⚠️ Check for hardcoded spacing values (e.g., `gap-6` instead of semantic tokens)

---

## 3. CSS file audit

### CSS architecture

**Directory**: `/src/styles/`

**Files** (17 total):
```
article-content.css
block-style-variations.css
dark-mode-utilities.css
editorial-typography.css
font-enforcement.css
fonts.css
index.css
markdown-prose.css
print.css
tailwind.css
theme-base.css
theme-dark.css
theme-exports.css
theme-tokens.css
theme.css
tw-animate.css
utilities.css
wp-utilities.css
```

### Issues identified

**1. File organization**:
- ✅ Good separation of concerns
- ⚠️ Some files might be redundant (theme.css vs theme-base.css vs theme-tokens.css)
- ⚠️ Need to verify import order in index.css

**2. CSS custom properties**:
- ✅ Extensive use of CSS variables
- ⚠️ Need to verify all --vars are defined in theme-tokens.css
- ⚠️ Check for unused CSS variables

**3. Dark mode**:
- ✅ Dedicated dark-mode-utilities.css
- ✅ theme-dark.css for dark tokens
- ⚠️ Need to verify all components respect dark mode

---

## 4. Component styles audit

### BEM compliance status

**Scanned**: 50+ component files

**BEM compliant** ✅:
- `/src/app/App.tsx` — `error-state`, `loading-state` blocks
- Most custom components in `/src/app/components/layouts/`
- Brand-specific components

**NON-BEM / Tailwind-only** ⚠️:
- `/src/app/components/ui/*` — All UI components use utility-first Tailwind
- This is **acceptable** for base UI components (shadcn/ui convention)
- Custom business logic components **should** use BEM

### UI component library

**Directory**: `/src/app/components/ui/`

**Status**: Tailwind utility-first (expected)

**Components** (30+):
- accordion.tsx
- alert-dialog.tsx
- alert.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- input-otp.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- ...and more

**Finding**: These are shadcn/ui base components. Utility-first approach is correct here.

**Action required**: None for UI library, but custom components should use BEM.

---

## 5. Data file audit

### Data completeness

**Directory**: `/src/app/data/`

**Files** (80+ data files):

**✅ Complete**:
- `articles.ts` — Article data
- `categories.ts` — Category structure
- `navigation.ts` — Navigation config
- `products.ts` — Shop products
- `designTokens.ts` — Design system
- `brandTokens.ts` — Brand tokens
- `home.ts` — Homepage data

**⚠️ Need verification**:
- `eEditions.ts` — E-edition data completeness
- `subscriptions.ts` — Subscription options
- `competitions.ts` — Competition data
- `events.ts` — Event listings
- `obituaries.ts` — Obituary data

### Data consistency

**Issues to check**:
1. ✅ Category IDs match between `categories.ts` and `articles.ts`
2. ⚠️ Image paths consistency (some may use placeholder images)
3. ⚠️ Date formats (should be ISO 8601)
4. ⚠️ Afrikaans content completeness (some English may remain)

---

## 6. BEM compliance audit

### BEM naming convention

**Expected pattern**: `block__element--modifier`

**Examples**:
- ✅ `header__logo`
- ✅ `card__title--large`
- ❌ `header-logo` (should use double underscore)
- ❌ `card-title-large` (should use double hyphen for modifier)

### Scan results

**Fully BEM compliant**:
- `/src/app/App.tsx`
- Custom layout components (partially)

**Mixed BEM + Tailwind** (acceptable pattern):
```tsx
<div className="card bg-white rounded-lg shadow-md">
  <h2 className="card__title text-2xl font-bold">
    Title
  </h2>
</div>
```

**Non-BEM** (needs fixing):
- Components using only hyphen separators
- Components mixing naming conventions
- Inconsistent modifier patterns

### Critical BEM violations

**Pattern 1: Single hyphen instead of double underscore**
```tsx
// ❌ Wrong
<div className="mobile-menu-item">

// ✅ Correct
<div className="mobile-menu__item">
```

**Pattern 2: Missing block context**
```tsx
// ❌ Wrong
<div className="item active">

// ✅ Correct
<div className="menu__item menu__item--active">
```

**Pattern 3: Nested element names**
```tsx
// ❌ Wrong
<div className="card__header__title">

// ✅ Correct
<div className="card__title">
```

---

## Critical findings summary

### High priority issues

1. **BEM compliance**: Custom components need BEM audit and fixes
2. **Token usage**: Verify all defined tokens are actually used
3. **CSS organization**: Potential redundancy in theme files
4. **Data completeness**: Some data files need content verification

### Medium priority issues

1. **Component size**: Header/MegaMenu files are large, need splitting
2. **Dark mode**: Need to verify all components respect dark mode
3. **Hardcoded values**: Check for hardcoded colors/spacing
4. **Image paths**: Verify consistency across data files

### Low priority issues

1. **CSS file count**: 17 CSS files might be optimizable
2. **Import order**: Verify CSS cascade is intentional
3. **Unused CSS**: Potential dead code in CSS files

---

## Recommended action plan

### Phase 1: BEM compliance (Priority: High)

**Task**: Apply BEM naming to all custom components

**Scope**:
- `/src/app/components/layouts/`
- `/src/app/components/navigation/`
- `/src/app/components/brand-quotes/`
- `/src/app/components/category/`
- `/src/app/components/hero/`
- `/src/app/components/home/`
- `/src/app/pages/`

**Exclude**:
- `/src/app/components/ui/` (shadcn/ui library — utility-first is correct)

**Estimated effort**: 4-6 hours

### Phase 2: Token verification (Priority: Medium)

**Task**: Verify token usage and consistency

**Actions**:
1. Scan all components for hardcoded colors
2. Replace with token references
3. Remove unused tokens
4. Verify dark mode tokens

**Estimated effort**: 2-3 hours

### Phase 3: CSS cleanup (Priority: Medium)

**Task**: Optimize CSS architecture

**Actions**:
1. Consolidate redundant theme files
2. Remove unused CSS variables
3. Verify import order
4. Document CSS architecture

**Estimated effort**: 2-3 hours

### Phase 4: Data validation (Priority: Low)

**Task**: Verify data completeness

**Actions**:
1. Check all data files for completeness
2. Verify Afrikaans content
3. Standardize date formats
4. Validate image paths

**Estimated effort**: 1-2 hours

---

## BEM compliance detailed findings

### Components needing BEM review

**Directory**: `/src/app/components/`

**Subdirectories to audit**:

1. **`/layouts/`**
   - Header.tsx — Large file, complex structure
   - Footer.tsx — Needs BEM verification
   - Root.tsx — Check wrapper classes

2. **`/navigation/`**
   - MobileMenu.tsx — Mobile menu item classes
   - MegaMenu.tsx — Mega menu structure
   - TopBar.tsx — Top navigation bar
   - MainNav.tsx — Main navigation links

3. **`/brand-quotes/`**
   - BrandQuote.tsx — Quote container classes

4. **`/category/`**
   - CategoryCard.tsx — Card structure
   - CategoryGrid.tsx — Grid layout classes

5. **`/hero/`**
   - Hero.tsx — Hero section classes
   - HeroSlider.tsx — Slider controls

6. **`/home/`**
   - HomeFeatured.tsx — Featured content
   - HomeLatest.tsx — Latest articles
   - HomeCategories.tsx — Category showcase

### Expected BEM patterns

**Card component example**:
```tsx
<article className="article-card">
  <img className="article-card__image" src={...} alt={...} />
  <div className="article-card__content">
    <h3 className="article-card__title">{title}</h3>
    <p className="article-card__excerpt">{excerpt}</p>
    <div className="article-card__meta">
      <span className="article-card__date">{date}</span>
      <span className="article-card__category">{category}</span>
    </div>
  </div>
</article>
```

**With modifiers**:
```tsx
<article className="article-card article-card--featured">
  <img className="article-card__image article-card__image--large" src={...} />
  ...
</article>
```

---

## CSS architecture recommendations

### Current structure

```
/src/styles/
├── index.css                    # Main entry point
├── tailwind.css                 # Tailwind directives
├── theme.css                    # Master CSS reference
├── theme-base.css              # Base theme variables
├── theme-tokens.css            # Design tokens
├── theme-dark.css              # Dark mode tokens
├── theme-exports.css           # TypeScript exports
├── editorial-typography.css    # Magazine typography
├── article-content.css         # Article styles
├── markdown-prose.css          # Markdown rendering
├── font-enforcement.css        # Font fallbacks
├── fonts.css                   # Font imports
├── dark-mode-utilities.css     # Dark mode utils
├── utilities.css               # Custom utilities
├── wp-utilities.css            # WordPress helpers
├── block-style-variations.css  # Block styles
├── tw-animate.css              # Animations
└── print.css                   # Print styles
```

### Recommended consolidation

**Merge these files**:
1. `theme.css` ← `theme-base.css` (consolidate base theme)
2. `utilities.css` ← `dark-mode-utilities.css` (combine utilities)
3. Consider merging WordPress-specific files

**Keep separate**:
- `theme-tokens.css` — Core design tokens
- `theme-dark.css` — Dark mode overrides
- `editorial-typography.css` — Magazine-specific
- `article-content.css` — Content styles
- `fonts.css` — Font loading

**Estimated reduction**: 17 files → 12 files

---

## Token usage analysis

### Color tokens defined

**Count**: 40+ color tokens

**Categories**:
- Brand colors (5)
- Neutral colors (8)
- System colors (6)
- Chart colors (8)
- Sidebar colors (4)
- Editorial accents (9)

### Spacing tokens defined

**Count**: 20+ spacing tokens

**Scale**:
- `--spacing-xs` → `--spacing-xxxl`
- Component-specific (card, section, article)

### Typography tokens defined

**Count**: 30+ typography tokens

**Categories**:
- Font families (2)
- Font sizes (8)
- Line heights (6)
- Letter spacing (4)
- Font weights (6)

### Token verification needed

**Actions**:
1. Search all components for each token
2. Identify unused tokens
3. Find hardcoded values that should use tokens
4. Verify dark mode token pairs

**Example audit query**:
```bash
# Find hardcoded colors (not using CSS variables)
grep -r "bg-\[#" src/app/components/
grep -r "text-\[#" src/app/components/
```

---

## Data structure analysis

### Article data schema

**File**: `/src/app/data/articles.ts`

**Schema**:
```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory?: string;
  author: string;
  date: string; // ⚠️ Verify ISO 8601 format
  image: string; // ⚠️ Verify path consistency
  tags: string[];
  featured?: boolean;
}
```

**Issues to verify**:
1. Date format consistency
2. Image path consistency
3. Category ID references
4. Author name format

### Product data schema

**File**: `/src/app/data/products.ts`

**Schema**:
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // ⚠️ Verify 1:1 aspect ratio
  category: string;
  inStock: boolean;
}
```

**Status**: ✅ Likely complete (18 products defined)

### Navigation data schema

**File**: `/src/app/data/navigation.ts`

**Schema**:
```typescript
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
```

**Status**: ✅ Likely complete

---

## Dark mode implementation

### Dark mode strategy

**Approach**: CSS custom properties + `prefers-color-scheme`

**Files**:
- `/src/styles/theme-tokens.css` — Light values
- `/src/styles/theme-dark.css` — Dark overrides
- `/src/styles/dark-mode-utilities.css` — Helper classes

### Dark mode tokens

**Pattern**:
```css
/* theme-tokens.css (light) */
:root {
  --primary: #E82C27;
  --secondary: #172134;
}

/* theme-dark.css (dark) */
@media (prefers-color-scheme: dark) {
  :root {
    --primary: #E83050;
    --secondary: #0A1018;
  }
}
```

### Dark mode verification needed

**Check**:
1. All color tokens have dark mode equivalents
2. Components respect `prefers-color-scheme`
3. No hardcoded light-only colors
4. Dark mode contrast ratios (WCAG AA)

---

## Accessibility audit

### ARIA attributes

**Status**: Need verification

**Check**:
1. All interactive elements have ARIA labels
2. Form inputs have associated labels
3. Icon buttons have `aria-label` or `sr-only` text
4. Navigation landmarks properly marked

### Semantic HTML

**Status**: ✅ Likely good (React components use semantic tags)

**Verify**:
1. Proper heading hierarchy (h1 → h2 → h3)
2. `<article>`, `<section>`, `<nav>` used appropriately
3. Lists use `<ul>`/`<ol>`

### Keyboard navigation

**Status**: Need verification

**Check**:
1. All interactive elements focusable
2. Focus styles visible
3. Skip links present
4. Tab order logical

---

## Performance considerations

### CSS file size

**Current**: 17 CSS files (total size unknown)

**Recommendations**:
1. Consolidate files (17 → 12)
2. Remove unused CSS
3. Minify production builds
4. Consider CSS-in-JS for critical path

### Token usage efficiency

**Current**: 145+ design tokens

**Recommendations**:
1. Remove unused tokens
2. Verify no duplicate definitions
3. Ensure tokens are tree-shakeable

---

## Next steps

### Immediate actions (today)

1. ✅ **Create this audit report**
2. 🔄 **Run BEM compliance scan** — Identify all non-BEM classes
3. 🔄 **Generate BEM task list** — Create actionable tasks

### Short-term actions (this week)

1. Apply BEM fixes to custom components
2. Verify token usage
3. Test dark mode across all pages
4. Validate data completeness

### Long-term actions (next sprint)

1. Consolidate CSS files
2. Remove unused tokens
3. Optimize component structure
4. Complete accessibility audit

---

## Conclusion

**Overall status**: ⚠️ **Good foundation with some refinement needed**

**Strengths**:
- ✅ Comprehensive design token system
- ✅ Well-organized component structure
- ✅ Clear separation of concerns
- ✅ shadcn/ui integration

**Areas for improvement**:
- ⚠️ BEM compliance in custom components
- ⚠️ Token usage verification
- ⚠️ CSS file organization
- ⚠️ Data validation

**Priority**: Focus on BEM compliance first, then token verification.

---

**Audit by**: AI Assistant  
**Date**: 2026-03-17  
**Scope**: Layout, Tokens, CSS, Styles, Data, BEM  
**Status**: Ready for BEM application phase
