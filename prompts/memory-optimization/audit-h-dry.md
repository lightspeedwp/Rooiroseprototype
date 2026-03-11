# Audit H: DRY & Pattern Opportunities

**Purpose**: Identify repeated UI patterns and recommend reusable components to reduce duplication.

---

## Output Template

```markdown
## Audit H: DRY & Pattern Opportunities

### Repeated UI Patterns

| Pattern | Occurrences | Files | Description | Recommendation |
|:--------|------------:|:------|:------------|:---------------|
| Article Card | 12 | [list] | Card with image, title, excerpt, meta | Create `ArticleCard` component |
| Button Group | 8 | [list] | Flex container with gap | Create `.c-button-group` class |
| Hero Section | 5 | [list] | Full-width background + centered content | Create `HeroSection` component |

### Repeated Class Groupings

**Example**: Flex container with gap appears 47 times
```html
<div class="flex gap-4 items-center justify-between">
```

**Recommendation**: Create utility class
```css
.u-flex-between { display: flex; gap: 1rem; align-items: center; justify-content: space-between; }
```

### Reusable Component Candidates

**Synced Pattern (Shared Instance)**:
- Navigation menu
- Footer
- Header

**Unsynced Pattern (Template)**:
- Article card (content varies)
- Product card (content varies)
- Call-to-action sections (content varies)

### CSS DRY Opportunities

**Repeated Style Blocks**:

| Styles | Occurrences | Files | Recommendation |
|:-------|------------:|:------|:---------------|
| Card border + shadow + padding | 15 | [list] | Create `.c-card` component |
| Flex column with gap | 32 | [list] | Create `.u-stack` utility |

### Expected Impact

**Estimated Reduction**:
- CSS: ~500 lines (components) + ~200 lines (utilities) = 700 lines saved
- React: ~1,000 lines (consolidated components)
- Maintainability: Single source for common patterns

### Implementation Plan

1. Create shared component library
2. Migrate existing patterns to use components
3. Create utility classes for layout patterns
4. Document pattern library
```

---

**Next**: Proceed to Audit I (Unused Selectors & Orphaned Files)
