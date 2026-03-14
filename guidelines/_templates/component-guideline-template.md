# [Component Name] Component Guidelines

**Category**: [UI / Content / Layout / Interactive / Dev]  
**Status**: [Active / Deprecated / Experimental]  
**Last Updated**: YYYY-MM-DD  
**Related Components**: [List related components]

---

## Overview

[Brief 1-2 sentence description of what this component does and when to use it]

**Use Cases**:
- [Primary use case]
- [Secondary use case]
- [Additional use case]

---

## Component Structure

### **React Implementation**
**File**: `/src/app/components/[category]/[ComponentName].tsx`

```tsx
// Example component structure
interface [ComponentName]Props {
  // Props interface
}

export const [ComponentName] = ({ prop1, prop2 }: [ComponentName]Props) => {
  // Implementation
};
```

### **WordPress Pattern** (if applicable)
**File**: `/wordpress-export/themes/die-papier-theme/patterns/[category]/[pattern-name].php`

---

## Props / Parameters

| Prop | Type | Required | Default | Description |
|:-----|:-----|:---------|:--------|:------------|
| `propName` | `string` | Yes | - | [Description] |
| `className` | `string` | No | `''` | Additional CSS classes |
| `children` | `ReactNode` | No | - | Child elements |

---

## Design Tokens

### **Colors**
- Background: `--color-[token-name]`
- Text: `--color-[token-name]`
- Border: `--color-[token-name]`

### **Typography**
- Font Family: `--font-[token-name]`
- Font Size: `--text-[size]`
- Line Height: `--lh-[size]`

### **Spacing**
- Padding: `--spacing-[size]`
- Margin: `--spacing-[size]`
- Gap: `--spacing-[size]`

### **Other Tokens**
- Border Radius: `--radius-[size]`
- Shadow: `--shadow-[level]`

---

## Variants

### **Variant 1 Name**
**Use Case**: [When to use this variant]

```tsx
<ComponentName variant="variant1" />
```

**Styling**: [Description of visual differences]

### **Variant 2 Name**
[Same structure as above]

---

## Usage Examples

### **Basic Example**
```tsx
import { ComponentName } from '@/components/[category]/ComponentName';

<ComponentName
  prop1="value"
  prop2={true}
>
  Content
</ComponentName>
```

### **Advanced Example**
```tsx
// Example with all options
```

### **WordPress Pattern Example** (if applicable)
```html
<!-- wp:pattern {"slug":"dp/[pattern-name]"} /-->
```

---

## States

### **Default State**
[Description]

### **Hover State**
[Description]

### **Active/Focus State**
[Description]

### **Disabled State**
[Description]

### **Loading State** (if applicable)
[Description]

### **Error State** (if applicable)
[Description]

---

## Accessibility

### **ARIA Attributes**
- `role`: [role if needed]
- `aria-label`: [when to use]
- `aria-describedby`: [when to use]

### **Keyboard Navigation**
- `Tab`: [behavior]
- `Enter`: [behavior]
- `Space`: [behavior]
- `Escape`: [behavior]

### **Screen Reader Support**
- [Description of screen reader experience]

### **Focus Management**
- [How focus is managed]

---

## Responsive Behavior

### **Mobile (< 768px)**
- [Mobile-specific behavior]

### **Tablet (768px - 1024px)**
- [Tablet-specific behavior]

### **Desktop (> 1024px)**
- [Desktop-specific behavior]

---

## Dark Mode

**Dark Mode Support**: [Yes / No / Partial]

**Dark Mode Tokens**:
- Background: `--color-[dark-token]`
- Text: `--color-[dark-token]`

**Implementation**:
```css
.dark & {
  /* Dark mode styles */
}
```

---

## Dependencies

**Required Packages**:
- [Package name and version]

**Internal Dependencies**:
- [Other components this depends on]

**WordPress Dependencies** (if applicable):
- [WordPress blocks or features required]

---

## Performance Considerations

- [Performance notes, e.g., lazy loading, memoization]
- [Bundle size impact]
- [Rendering optimization]

---

## Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ [Browser with limitations]

---

## Testing

### **Unit Tests**
**File**: `/src/app/components/[category]/__tests__/[ComponentName].test.tsx`

**Test Coverage**:
- [ ] Renders correctly
- [ ] Props work as expected
- [ ] Variants render correctly
- [ ] Accessibility attributes present
- [ ] Event handlers work

### **Visual Regression Tests**
- [ ] Default state
- [ ] All variants
- [ ] Dark mode
- [ ] Responsive breakpoints

### **Accessibility Tests**
- [ ] WAVE validation
- [ ] axe DevTools validation
- [ ] Keyboard navigation
- [ ] Screen reader testing

---

## Common Patterns

### **Pattern 1: [Name]**
[Description of common usage pattern]

```tsx
// Code example
```

### **Pattern 2: [Name]**
[Description]

---

## Migration Notes

### **From Legacy Component**
[If replacing an older component, migration notes]

### **Breaking Changes**
- v2.0.0: [Description of breaking change]

---

## Related Guidelines

- [Link to related component guideline]
- [Link to design token guideline]
- [Link to pattern guideline]

---

## Examples in Codebase

**React Examples**:
- `/src/app/pages/[PageName].tsx` — [Description]
- `/src/app/components/[Category]/[Component].tsx` — [Description]

**WordPress Examples**:
- Template: `[template-name].html`
- Pattern: `[pattern-name].php`

---

## Changelog

### **v1.1.0** (YYYY-MM-DD)
- [Change description]

### **v1.0.0** (YYYY-MM-DD)
- Initial component creation

---

**Created**: YYYY-MM-DD  
**Maintained By**: [Team/Person]  
**Status**: [Active / Needs Review / Deprecated]
