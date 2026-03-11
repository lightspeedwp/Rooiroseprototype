# Audit F: BEM Adoption Audit

**Purpose**: Assess current naming patterns and propose BEM (Block-Element-Modifier) migration strategy.

---

## Tasks

### 1) Identify Current Naming Patterns

- Any BEM-like patterns? (`.block__element`, `.block--modifier`)
- Utility prefixes? (`u-`, `is-`, `has-`)
- Semantic class names vs presentational?
- WordPress-specific patterns? (`.wp-block-*`, `.has-*-color`)

### 2) Identify Problem Areas

- **Deep descendant selectors**: `.a .b .c .d`
- **ID selectors**: `#header`
- **Tag selectors in components**: `div.card`
- **Overly broad selectors**: `div`, `span`
- **Naming collisions**: Multiple `.card` meanings
- **Ambiguous class intent**: `.big`, `.red`

### 3) Propose BEM Naming System

**Block Naming**:
- Component root: `.c-{blockname}`
- Layout: `.l-{layoutname}`
- Utility: `.u-{utilityname}`
- State: `.is-{state}`, `.has-{property}`

**Element Naming**:
- `.c-{block}__-{element}`
- Example: `.c-card__header`, `.c-card__title`

**Modifier Naming**:
- `.c-{block}--{modifier}`
- `.c-{block}__-{element}--{modifier}`
- Example: `.c-card--featured`, `.c-card__title--large`

### 4) Create Mapping Plan

For worst offenders, map current selector → proposed BEM selector.

---

## Output Template

```markdown
## Audit F: BEM Adoption Audit

### Current Naming Patterns

**BEM-like**: [yes/no, examples]  
**Utility Prefixes**: [list found prefixes]  
**WordPress Patterns**: [list: `.wp-block-*`, `.has-*`, `.is-style-*`]  
**Semantic vs Presentational**: [ratio, examples]

### Problem Areas

#### Deep Descendant Selectors

| Selector | File | Line | Depth | Fix |
|:---------|:-----|-----:|------:|:----|
| ... | ... | ... | 4+ | ... |

#### ID Selectors

| Selector | File | Line | Issue | Fix |
|:---------|:-----|-----:|:------|:----|
| ... | ... | ... | ... | ... |

#### Tag Selectors in Components

| Selector | File | Line | Issue | Fix |
|:---------|:-----|-----:|:------|:----|
| `div.card` | ... | ... | Couples styling to tag | `.c-card` |

#### Naming Collisions

| Class | Definitions | Files | Conflict | Fix |
|:------|------------:|:------|:---------|:----|
| `.card` | 3 | ... | Multiple meanings | `.c-article-card`, `.c-product-card` |

#### Ambiguous Class Intent

| Class | File | Purpose | Fix |
|:------|:-----|:--------|:----|
| `.big` | ... | ? | `.u-text-large` or `--modifier` |

### Proposed BEM Naming Conventions

**Prefixes**:
- `c-` — Component blocks
- `l-` — Layout utilities (grid, flex, container)
- `u-` — Single-purpose utilities
- `is-` — State classes (is-active, is-hidden)
- `has-` — Property classes (has-icon, has-error)

**Block Naming Rules**:
1. Lowercase, hyphen-separated
2. Describes what it IS, not what it LOOKS LIKE
3. Examples: `.c-article-card`, `.c-navigation`, `.c-button`

**Element Naming Rules**:
1. Double underscore separator: `__`
2. Describes element's role within block
3. Examples: `.c-card__header`, `.c-card__title`, `.c-button__icon`

**Modifier Naming Rules**:
1. Double hyphen separator: `--`
2. Describes variant or state
3. Examples: `.c-card--featured`, `.c-button--primary`, `.c-button--disabled`

### Mapping Plan (Top 20 Offenders)

| Current Selector | Issues | Proposed BEM | Priority |
|:-----------------|:-------|:-------------|:---------|
| `.article .header .title` | Deep nesting | `.c-article__title` | P1 |
| `#main-nav` | ID selector | `.c-main-nav` | P1 |
| `div.card` | Tag coupling | `.c-card` | P2 |
| `.red-button` | Presentational | `.c-button--danger` | P2 |
| `.big` | Ambiguous | `.u-text-large` | P3 |

### Migration Phases

**Phase 1: Dual-Classing (No Breaking Changes)**
- Add new BEM classes alongside existing classes
- Components use both: `<div class="card c-card">`
- CSS defines both selectors temporarily
- Estimated effort: 2-3 days
- Risk: Temporary code bloat

**Phase 2: Markup Migration**
- Update all React components to use BEM classes only
- Update all WordPress patterns/templates
- Remove old classes from HTML/JSX
- Estimated effort: 3-5 days
- Risk: Missing references cause styling loss

**Phase 3: CSS Cleanup**
- Remove old selectors from CSS
- Confirm no references remain via search
- Delete orphaned CSS files
- Estimated effort: 1-2 days
- Risk: Dynamic class usage not caught

**Phase 4: Validation**
- Visual regression testing (all pages)
- Accessibility testing (focus states, contrast)
- Dark mode testing
- Estimated effort: 1 day

### Exceptions (WordPress Core Classes)

**Keep as-is (WordPress alignment)**:
- `.wp-block-*` — WordPress core block classes
- `.has-*-color`, `.has-*-background-color` — WordPress preset classes
- `.has-*-font-size`, `.has-*-spacing` — WordPress preset classes
- `.is-style-*` — WordPress block style variations
- `.alignwide`, `.alignfull` — WordPress alignment classes

**Rationale**: These classes are WordPress conventions and should not be renamed.

### BEM Examples (Die Papier Components)

**Article Card**:
```html
<!-- Before -->
<div class="article-card featured">
  <div class="header">
    <h3 class="title">...</h3>
  </div>
</div>

<!-- After (BEM) -->
<div class="c-article-card c-article-card--featured">
  <div class="c-article-card__header">
    <h3 class="c-article-card__title">...</h3>
  </div>
</div>
```

**Button Component**:
```html
<!-- Before -->
<button class="btn red-btn large-btn">

<!-- After (BEM) -->
<button class="c-button c-button--danger c-button--large">
```

**Navigation**:
```html
<!-- Before -->
<nav id="main-nav">
  <ul class="nav-list">
    <li class="nav-item active">

<!-- After (BEM) -->
<nav class="c-main-nav">
  <ul class="c-main-nav__list">
    <li class="c-main-nav__item c-main-nav__item--active">
```

### Implementation Recommendations

**Priority 1 (Start here)**:
- [ ] Components with deep nesting (4+ levels)
- [ ] ID selectors used for styling
- [ ] Tag + class selectors
- [ ] Naming collisions (multiple definitions)

**Priority 2 (Next)**:
- [ ] Presentational class names
- [ ] Ambiguous utility classes
- [ ] Components with no semantic naming

**Priority 3 (Nice-to-have)**:
- [ ] Single-level descendant selectors
- [ ] Well-named but non-BEM components

### Evidence

**Deep Nesting Example**:
```css
[Code sample showing problematic deep selector]
```

**ID Selector Example**:
```css
[Code sample showing ID used for styling]
```

**Proposed BEM Refactor**:
```css
[Side-by-side before/after]
```
```

---

## Die Papier Context

**Current State**: React components use Tailwind utility classes extensively  
**WordPress Migration**: Pending (blocks use in WordPress patterns/templates)

**Expected Findings**:
- React components use Tailwind utilities (not BEM)
- WordPress patterns may have some BEM-like patterns
- Deep nesting exists in some component styles

---

## Validation Checklist

- [ ] Current naming patterns documented
- [ ] Problem areas identified with examples
- [ ] BEM naming conventions proposed
- [ ] Mapping plan for top offenders
- [ ] Migration phases with effort estimates
- [ ] WordPress exception list documented
- [ ] BEM examples provided for common components

---

**Next**: Proceed to Audit G (WordPress Alignment)
