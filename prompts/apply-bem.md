# Apply BEM — BEM Compliance Audit & Fix Orchestrator

**Version**: 1.0.0  
**Created**: 2026-03-16  
**Purpose**: Comprehensive BEM methodology audit, violation detection, and automated fix workflow  
**Trigger Word**: `apply bem`  
**Duration**: 45-90 minutes (varies by violations found)

---

## 🎯 **MISSION**

Execute a **complete BEM (Block Element Modifier) compliance audit** across all React components, identify violations against editorial design guidelines, apply fixes using CSS variables, and perform token gap analysis to recommend design system expansions.

**⚠️ IMPORTANT**: This is a **CODE QUALITY** task. All BEM classes must:
- Follow editorial design style (magazine aesthetic)
- Use 100% CSS variables (never hardcoded values)
- Support light/dark mode
- Meet WCAG 2.2 AA minimum (AAA preferred)
- Align with existing design tokens in `/src/styles/`

---

## 📋 **EXECUTION WORKFLOW**

Execute these phases **in sequence**:

### Phase 1: BEM Audit — Violation Detection (15-20 min)

#### Step 1.1: Scan All TSX Files
**Action**: Search all `.tsx` files for BEM violations

**Violation Types to Identify**:

1. **Missing BEM Blocks** (Severity: High)
   - Component uses generic divs without semantic BEM class
   - Example: `<div className="container">` instead of `<div className="article-hero">`

2. **Inline Styles Replacing CSS Variables** (Severity: Critical)
   - Hardcoded style objects instead of CSS variables
   - Example: `style={{ color: '#e01e12' }}` instead of `className="article-hero__title"`

3. **Tailwind Instead of BEM** (Severity: Medium)
   - Over-reliance on utility classes for component structure
   - Example: `className="flex items-center gap-4"` instead of `className="card-meta"`

4. **Inconsistent Naming** (Severity: Medium)
   - Mixed naming conventions (camelCase, kebab-case, PascalCase)
   - Example: `articleHero` vs `article-hero` vs `ArticleHero`

5. **Orphan BEM Classes** (Severity: Low)
   - BEM classes in TSX with no corresponding CSS definition
   - Example: `className="article-hero__subtitle"` but no `.article-hero__subtitle {}` in CSS

6. **Non-Editorial BEM** (Severity: Medium)
   - BEM classes that don't follow editorial/magazine design patterns
   - Example: Generic `.button` instead of editorial `.cta-button--primary`

**Output**: Create violation inventory grouped by severity

---

#### Step 1.2: Match Against Existing CSS Inventory
**Action**: Scan `/src/styles/` directory for existing BEM patterns

**Files to Scan**:
- `/src/styles/theme.css` — Base CSS variables
- `/src/styles/theme-tokens.css` — Design tokens
- `/src/styles/utilities.css` — Utility classes
- `/src/styles/article-content.css` — Editorial content styles
- `/src/styles/block-style-variations.css` — WordPress block styles
- `/src/styles/wp-utilities.css` — WordPress-aligned utilities

**Extract**:
- Available BEM blocks (e.g., `.article-hero`, `.card-meta`, `.pull-quote`)
- Available BEM elements (e.g., `.article-hero__title`, `.card-meta__author`)
- Available BEM modifiers (e.g., `.article-hero--featured`, `.card-meta--compact`)
- Available CSS variables (e.g., `--custom-primary`, `--wp--preset--spacing--medium`)

**Output**: CSS inventory matrix

---

### Phase 2: Editorial Compliance Check (10-15 min)

#### Step 2.1: Verify Editorial Design Alignment
**Action**: Read editorial design guidelines

**Guidelines to Review**:
- `/guidelines/design-tokens/editorial-components.md` — Editorial component patterns
- `/guidelines/design-tokens/typography.md` — Playfair Display SC + Karla system
- `/guidelines/design-tokens/colors.md` — Primary red (#e01e12), navy, greys
- `/guidelines/design-tokens/spacing-patterns.md` — Magazine spacing rhythm
- `/guidelines/rooi-rose/brand-guidelines.md` — rooi rose brand identity

**Editorial BEM Principles**:

1. **Block Names Must Reflect Magazine Content Types**
   - ✅ Good: `article-hero`, `pull-quote`, `author-bio`, `category-badge`
   - ❌ Bad: `header`, `content`, `box`, `item`

2. **Elements Must Be Semantic and Descriptive**
   - ✅ Good: `article-hero__kicker`, `pull-quote__citation`, `author-bio__photo`
   - ❌ Bad: `article-hero__top`, `pull-quote__text`, `author-bio__img`

3. **Modifiers Must Indicate Visual or Contextual Variations**
   - ✅ Good: `article-hero--featured`, `card-meta--compact`, `pull-quote--centered`
   - ❌ Bad: `article-hero--1`, `card-meta--type2`, `pull-quote--alt`

4. **All Values Must Use CSS Variables (Editorial Palette)**
   - ✅ Good: `color: var(--custom-primary)`, `padding: var(--wp--preset--spacing--medium)`
   - ❌ Bad: `color: #e01e12`, `padding: 32px`

**Output**: Editorial compliance checklist

---

#### Step 2.2: WCAG Compliance Verification
**Action**: Verify all BEM classes meet accessibility standards

**WCAG 2.2 Requirements**:

| Level | Requirement | Minimum | Preferred |
|:------|:------------|:--------|:----------|
| AA | Color Contrast (Normal Text) | 4.5:1 | 7:1 (AAA) |
| AA | Color Contrast (Large Text) | 3:1 | 4.5:1 (AAA) |
| AA | Touch Targets | 24x24px | 44x44px (AAA) |
| AA | Focus Indicators | 2px solid | 3px solid (AAA) |

**Automated Checks**:
1. Scan all BEM classes for color definitions
2. Calculate contrast ratios for light mode
3. Calculate contrast ratios for dark mode
4. Verify touch target sizes for interactive elements
5. Check focus indicator styles

**Output**: WCAG compliance matrix

---

### Phase 3: Apply BEM Fixes (20-40 min)

#### Step 3.1: Fix Inline Styles → CSS Variables
**Action**: Replace all inline styles with BEM classes using CSS variables

**Inline Style → CSS Variable Mapping Table**:

| Inline Style | CSS Variable | BEM Class Example |
|:-------------|:-------------|:------------------|
| `color: '#e01e12'` | `var(--custom-primary)` | `.article-hero__title { color: var(--custom-primary); }` |
| `color: '#172134'` | `var(--custom-secondary)` | `.category-badge { background: var(--custom-secondary); }` |
| `fontSize: '30px'` | `var(--wp--preset--font-size--x-large)` | `.pull-quote__text { font-size: var(--wp--preset--font-size--x-large); }` |
| `padding: '32px'` | `var(--wp--preset--spacing--medium)` | `.article-content { padding: var(--wp--preset--spacing--medium); }` |
| `padding: '48px'` | `var(--wp--preset--spacing--large)` | `.article-hero { padding: var(--wp--preset--spacing--large); }` |
| `fontFamily: 'Playfair Display SC'` | `var(--font-display)` | `.article-hero__title { font-family: var(--font-display); }` |
| `fontFamily: 'Karla'` | `var(--font-karla)` | `.article-meta { font-family: var(--font-karla); }` |
| `borderRadius: '8px'` | `var(--radius)` | `.card { border-radius: var(--radius); }` |
| `boxShadow: '0 4px...'` | `var(--shadow-md)` | `.card { box-shadow: var(--shadow-md); }` |

**Process**:
1. Identify inline style in TSX
2. Determine appropriate CSS variable from mapping table
3. Create BEM class in appropriate CSS file
4. Replace inline style with BEM className
5. Add light/dark mode support if needed

**Example Transformation**:

**Before (Violation)**:
```tsx
<div style={{ 
  color: '#e01e12', 
  fontSize: '30px', 
  fontFamily: 'Playfair Display SC',
  padding: '32px'
}}>
  Featured Article
</div>
```

**After (BEM Compliant)**:

CSS (`/src/styles/article-content.css`):
```css
.article-hero__title {
  color: var(--custom-primary);
  font-size: var(--wp--preset--font-size--x-large);
  font-family: var(--font-display);
  padding: var(--wp--preset--spacing--medium);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .article-hero__title {
    color: var(--custom-primary-dark);
  }
}
```

TSX:
```tsx
<div className="article-hero__title">
  Featured Article
</div>
```

---

#### Step 3.2: Fix Tailwind → BEM
**Action**: Replace utility-heavy Tailwind with semantic BEM classes

**When to Use Tailwind vs BEM**:

| Use Case | Solution | Example |
|:---------|:---------|:--------|
| **Component structure** | BEM | `.article-hero`, `.card-meta` |
| **Layout patterns** | BEM | `.article-grid`, `.sidebar-layout` |
| **Editorial styles** | BEM | `.pull-quote`, `.author-bio` |
| **One-off utilities** | Tailwind OK | `hidden`, `sr-only`, `truncate` |
| **Responsive utilities** | Tailwind OK | `md:flex`, `lg:grid-cols-3` |

**Process**:
1. Identify components with 5+ Tailwind classes
2. Extract common pattern into BEM block
3. Create BEM class in CSS with variables
4. Replace Tailwind cluster with single BEM class
5. Keep responsive/utility Tailwind classes

**Example Transformation**:

**Before (Tailwind-Heavy)**:
```tsx
<div className="flex items-center gap-4 px-8 py-6 border-l-4 border-primary bg-white dark:bg-gray-900">
  <img className="w-12 h-12 rounded-full object-cover" src={author.photo} />
  <div className="flex flex-col gap-1">
    <span className="text-lg font-semibold text-gray-900 dark:text-white">{author.name}</span>
    <span className="text-sm text-gray-600 dark:text-gray-400">{author.role}</span>
  </div>
</div>
```

**After (BEM with Minimal Tailwind)**:

CSS (`/src/styles/article-content.css`):
```css
.author-bio {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--small);
  padding: var(--wp--preset--spacing--medium) var(--wp--preset--spacing--large);
  border-left: 4px solid var(--custom-primary);
  background: var(--custom-base);
}

.author-bio__photo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.author-bio__details {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--x-small);
}

.author-bio__name {
  font-size: var(--wp--preset--font-size--medium);
  font-weight: 600;
  color: var(--custom-text-primary);
}

.author-bio__role {
  font-size: var(--wp--preset--font-size--small);
  color: var(--custom-text-secondary);
}
```

TSX:
```tsx
<div className="author-bio">
  <img className="author-bio__photo" src={author.photo} alt={author.name} />
  <div className="author-bio__details">
    <span className="author-bio__name">{author.name}</span>
    <span className="author-bio__role">{author.role}</span>
  </div>
</div>
```

---

#### Step 3.3: Fix Inconsistent Naming
**Action**: Standardize all BEM classes to kebab-case

**Naming Convention Rules**:

1. **Always use kebab-case** (lowercase with hyphens)
   - ✅ Good: `article-hero`, `pull-quote`, `author-bio`
   - ❌ Bad: `articleHero`, `pullQuote`, `AuthorBio`

2. **Block names: noun-based, content-semantic**
   - ✅ Good: `article-hero`, `category-badge`, `competition-card`
   - ❌ Bad: `hero`, `badge`, `card`

3. **Element names: descriptive, not positional**
   - ✅ Good: `article-hero__kicker`, `article-hero__title`, `article-hero__byline`
   - ❌ Bad: `article-hero__top`, `article-hero__heading`, `article-hero__bottom`

4. **Modifier names: visual or contextual state**
   - ✅ Good: `article-hero--featured`, `card-meta--compact`, `pull-quote--centered`
   - ❌ Bad: `article-hero--red`, `card-meta--small`, `pull-quote--center`

**Process**:
1. Scan all BEM classes for naming violations
2. Generate rename map (old name → new name)
3. Update CSS files with new names
4. Update TSX files with new classNames
5. Verify no broken references

---

#### Step 3.4: Create Missing BEM Definitions
**Action**: Add CSS for orphan BEM classes found in TSX

**Process**:
1. Identify BEM classes in TSX without CSS definitions
2. Determine appropriate CSS file for each class
3. Create BEM block/element/modifier with CSS variables
4. Add light/dark mode variants
5. Add responsive breakpoints if needed
6. Verify WCAG compliance

**CSS File Selection Logic**:

| BEM Class Pattern | CSS File | Reason |
|:------------------|:---------|:-------|
| `article-*` | `/src/styles/article-content.css` | Article-specific editorial styles |
| `pull-quote*`, `author-bio*` | `/src/styles/article-content.css` | Editorial content patterns |
| `card-*`, `category-*` | `/src/styles/utilities.css` | Reusable UI patterns |
| `hero-*`, `section-*` | `/src/styles/utilities.css` | Layout patterns |
| WordPress-aligned | `/src/styles/wp-utilities.css` | WordPress block compatibility |

---

### Phase 4: Token Gap Analysis (10-15 min)

#### Step 4.1: Identify Missing Design Tokens
**Action**: Compare BEM fixes against existing token inventory

**Token Categories to Check**:

1. **Color Tokens** (`/src/styles/theme-tokens.css`)
   - Primary brand colors
   - Neutral greys
   - System colors (success, error, warning)
   - Editorial accent colors

2. **Typography Tokens**
   - Font families (display, body, mono)
   - Font sizes (x-small → x-large)
   - Font weights (regular, medium, semibold, bold)
   - Line heights

3. **Spacing Tokens** (`--wp--preset--spacing--*`)
   - x-small (8px)
   - small (16px)
   - medium (32px)
   - large (48px)
   - x-large (64px)

4. **Shadow Tokens**
   - Elevation levels (sm, md, lg)
   - Focus indicators

5. **Radius Tokens**
   - Border radius variants

**Gap Analysis Output**:

```markdown
### Token Gaps Identified

**Missing Color Tokens**:
- [ ] `--custom-accent-blue` (used in competition badges)
- [ ] `--custom-category-health` (health category color)
- [ ] `--custom-category-beauty` (beauty category color)

**Missing Spacing Tokens**:
- [ ] `--wp--preset--spacing--xx-small` (4px - for tight gaps)

**Missing Shadow Tokens**:
- [ ] `--shadow-inner` (for inset effects)

**Recommendation**: 
- If 5+ tokens missing: Run `audit tokens` to perform comprehensive token audit
- If 10+ CSS issues found: Run `audit css` to analyze CSS architecture
```

---

#### Step 4.2: Generate Recommendations
**Action**: Create actionable recommendations based on findings

**Recommendation Logic**:

| Condition | Recommendation |
|:----------|:---------------|
| 5+ missing tokens | Run `audit tokens` — Design system needs expansion |
| 10+ CSS architecture issues | Run `audit css` — CSS needs refactoring |
| 20+ BEM violations fixed | Consider creating BEM component library documentation |
| Dark mode coverage <80% | Prioritize dark mode CSS variable expansion |
| WCAG violations found | Create accessibility remediation task list |

---

### Phase 5: Create Report & Task List (5-10 min)

#### Step 5.1: Generate BEM Audit Report
**Action**: Create comprehensive report at `/reports/bem-audit-YYYY-MM-DD.md`

**Report Template**:
```markdown
# BEM Compliance Audit Report — YYYY-MM-DD

**Executed**: YYYY-MM-DD  
**Duration**: XX minutes  
**Status**: ✅ Complete  

---

## Summary

- **TSX Files Scanned**: XXX
- **Violations Found**: XXX
- **Violations Fixed**: XXX
- **BEM Classes Created**: XXX
- **CSS Variables Added**: XXX
- **Editorial Compliance**: XX%
- **WCAG 2.2 Compliance**: AA/AAA
- **Token Gaps Identified**: XXX

---

## Violations by Type

### Critical (XX violations)
- Inline styles replacing CSS variables: XX instances
- Non-editorial BEM naming: XX instances

### High (XX violations)
- Missing BEM blocks: XX instances
- WCAG contrast violations: XX instances

### Medium (XX violations)
- Tailwind over-use: XX instances
- Inconsistent naming: XX instances

### Low (XX violations)
- Orphan BEM classes: XX instances
- Missing dark mode support: XX instances

---

## Fixes Applied

### Files Modified
1. `/src/styles/article-content.css` — Added XX BEM classes
2. `/src/styles/utilities.css` — Added XX utility classes
3. `/src/app/components/X.tsx` — Fixed XX violations
4. ...

### BEM Classes Created
- `.article-hero__kicker` — Article kicker text
- `.pull-quote--centered` — Centered pull quote variant
- `.author-bio__photo` — Author photo element
- ...

---

## Token Gap Analysis

### Missing Tokens
- `--custom-accent-blue` — Competition badges
- `--wp--preset--spacing--xx-small` — Tight gaps
- ...

### Recommendations
- [ ] Run `audit tokens` — 5+ missing tokens identified
- [ ] Run `audit css` — CSS architecture needs review
- [ ] Create BEM component library documentation
- [ ] Expand dark mode coverage to 100%

---

## WCAG Compliance

### Color Contrast (WCAG 2.2 AA/AAA)
- Primary red on white: 4.85:1 (AA ✅, AAA ❌)
- Navy on white: 15.2:1 (AAA ✅)
- Dark mode checks: All passed (AAA ✅)

### Touch Targets (WCAG 2.2 AAA)
- All interactive BEM elements: 44x44px minimum ✅

---

## Next Steps

1. Review BEM classes for editorial alignment
2. Run `audit tokens` if recommended
3. Run `audit css` if recommended
4. Update BEM methodology documentation
5. Train team on BEM naming conventions

---

**Completed by**: Figma Make AI  
**Review Status**: Ready for review  
**Next Audit**: YYYY-MM-DD (30 days)
```

---

#### Step 5.2: Create BEM Task List (Optional)
**Action**: If violations remain, create `/tasks/bem-task-list.md`

**Task List Criteria**:
- Only create if >10 violations were NOT auto-fixed
- Group by component/file
- Prioritize by severity
- Include time estimates

---

## 🛡️ **PROTECTED FILES**

**NEVER modify these files during BEM fixes**:

- `/src/main.tsx` — React entrypoint
- `/src/app/App.tsx` — Root component
- `/src/app/routes.tsx` — Route definitions
- `/vite.config.ts` — Build config
- `/package.json` — Dependencies
- `/src/styles/theme.css` — Core theme (only ADD, never DELETE)
- All files in `/src/app/components/figma/` — Figma-generated components

---

## 📊 **SUCCESS CRITERIA**

BEM audit is **100% complete** when:

- ✅ All TSX files scanned for violations
- ✅ Violations categorized by severity
- ✅ Fixes applied using CSS variables only
- ✅ Editorial design compliance verified
- ✅ WCAG 2.2 AA minimum achieved (AAA preferred)
- ✅ Light/dark mode support added
- ✅ Token gap analysis performed
- ✅ Report created at `/reports/bem-audit-YYYY-MM-DD.md`
- ✅ Recommendations provided (audit tokens/css if needed)

---

## 🎨 **EDITORIAL DESIGN PRINCIPLES**

### Magazine Aesthetic Requirements

1. **Typography Hierarchy**
   - Headlines: Playfair Display SC (serif, editorial)
   - Body: Karla (sans-serif, readable)
   - Kickers/Labels: All caps, letter-spacing

2. **Color Palette**
   - Primary: rooi rose red (#e01e12)
   - Secondary: Navy (#172134)
   - Accents: Category-specific colors

3. **Spacing Rhythm**
   - Generous whitespace
   - Consistent vertical rhythm (48px/64px sections)
   - Asymmetric layouts for visual interest

4. **Component Patterns**
   - Hero sections with large imagery
   - Pull quotes with serif typography
   - Author bylines with photos
   - Category badges with uppercase labels

---

## 🔧 **BEM METHODOLOGY REFERENCE**

### Block
The outermost container representing a standalone entity.

**Example**: `.article-hero`, `.pull-quote`, `.author-bio`

### Element
A part of a block that has no standalone meaning.

**Syntax**: `.block__element`  
**Example**: `.article-hero__title`, `.pull-quote__text`, `.author-bio__name`

### Modifier
A flag on a block or element that changes appearance or behavior.

**Syntax**: `.block--modifier` or `.block__element--modifier`  
**Example**: `.article-hero--featured`, `.pull-quote--centered`, `.author-bio__name--highlighted`

---

## 💡 **TIPS FOR EFFECTIVE BEM**

1. **Name blocks after content type, not layout**
   - ✅ `.article-hero` (what it is)
   - ❌ `.two-column-layout` (how it looks)

2. **Elements should describe semantic purpose**
   - ✅ `.article-hero__byline` (author attribution)
   - ❌ `.article-hero__bottom-text` (position)

3. **Modifiers should be binary states or variants**
   - ✅ `.card--featured` (state)
   - ❌ `.card--red` (implementation detail)

4. **Always use CSS variables, never hardcoded values**
   - ✅ `color: var(--custom-primary)`
   - ❌ `color: #e01e12`

5. **Support light and dark mode from the start**
   - Define both `var(--custom-primary)` and `var(--custom-primary-dark)`

---

## 📚 **RELATED GUIDELINES**

Before running `apply bem`, review:

- `/guidelines/design-tokens/editorial-components.md` — Editorial patterns
- `/guidelines/design-tokens/typography.md` — Font system
- `/guidelines/design-tokens/colors.md` — Color palette
- `/guidelines/rooi-rose/brand-guidelines.md` — Brand identity
- `/guidelines/development/css-architecture.md` — CSS organization

---

## 🔄 **WHEN TO RUN APPLY BEM**

Run this prompt:

1. **After major component additions** — Ensure new components follow BEM
2. **Monthly code quality check** — Regular BEM compliance verification
3. **Before major releases** — Clean up technical debt
4. **After design system updates** — Align components with new tokens
5. **When violations are suspected** — Audit and fix BEM issues

---

## 💬 **HOW TO TRIGGER THIS PROMPT**

Simply type:

```
apply bem
```

The AI will execute the full BEM compliance audit + fix workflow automatically.

---

**Version History**:
- **v1.0.0** (2026-03-16) — Initial creation with editorial design compliance

**Maintained by**: rooi rose Development Team  
**Last Reviewed**: 2026-03-16
