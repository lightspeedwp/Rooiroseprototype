# Image Audit & Validation

**Type**: Single Prompt  
**Created**: 2026-03-16  
**Version**: 1.0.0  
**Estimated Duration**: 20-30 minutes  
**Trigger Word**: `audit images`

---

## Purpose

Comprehensive audit of all images across the rooi rose project to identify:
- Broken image imports (missing files, incorrect paths)
- Invalid `figma:asset` references
- Missing fallback images
- Incorrect image component usage
- Unused image files
- Missing alt text
- Performance issues (oversized images, missing lazy loading)

---

## Prerequisites

**Required Before Running**:
- [ ] All related guidelines are up-to-date
- [ ] No pending uncommitted changes

**Guidelines to Review**:
- `/guidelines/development/file-organization.md`
- `/guidelines/development/prompt-report-task-workflow.md`
- Project Guidelines.md section on `<images_and_svgs>`

---

## Scope

**In Scope**:
- All `figma:asset` imports in `.tsx` files
- All SVG imports from `/src/imports/`
- All `<img>` tag usages
- All `ImageWithFallback` component usages
- All background images in CSS files
- Image data in `/src/app/data/` files
- Hero images, product images, article images

**Out of Scope**:
- Third-party CDN images (Unsplash, external URLs)
- Social media icons (Lucide React components)
- WordPress theme assets (not in scope for React app)

---

## Image Types & Patterns

### 1. Raster Images (PNG, JPG)
```tsx
// Correct pattern
import img from "figma:asset/abc123.png"

// Incorrect patterns (will break)
import img from "../imports/figma:asset/abc123.png"
import img from "./figma:asset/abc123.png"
```

### 2. SVG Files
```tsx
// Correct pattern
import svgPaths from "../imports/svg-wg56ef214f"
import svgPaths from "../../imports/svg-abc123"
```

### 3. Image Components
```tsx
// ImageWithFallback (for new images)
<ImageWithFallback src="..." alt="..." />

// Standard img tag (avoid for new images)
<img src="..." alt="..." />
```

### 4. Data Files
```tsx
// Hero images
export const HERO_IMAGES = {
  home: 'unsplash://...', // OK - external
  contact: 'figma:asset/...', // Needs validation
}

// Product images
{
  image: 'unsplash://magazine-subscription',
  thumbnail: 'unsplash://magazine-cover',
}
```

---

## Execution Instructions

### Phase 1: Inventory All Images (Est. 8 min)

**Objective**: Catalog all image references across the project

**Tasks**:

1. **Search for `figma:asset` imports**
   ```bash
   file_search pattern: 'figma:asset'
   ```
   - Count total usages
   - List all unique asset IDs
   - Note file locations

2. **Search for SVG imports**
   ```bash
   file_search pattern: 'from.*imports/svg'
   ```
   - Count total SVG imports
   - List all unique SVG file references

3. **Search for `ImageWithFallback` usages**
   ```bash
   file_search pattern: '<ImageWithFallback'
   ```
   - Count total usages
   - Check for missing `alt` props

4. **Search for `<img>` tag usages**
   ```bash
   file_search pattern: '<img'
   ```
   - Count total usages
   - Check for missing `alt` attributes

5. **Check data files for image references**
   - `/src/app/data/heroImages.ts`
   - `/src/app/data/products.ts`
   - `/src/app/data/articles.ts`
   - `/src/app/data/megaMenuConfig.ts`

**Output**:
- Total count by image type
- List of all image references
- Files with most image dependencies

---

### Phase 2: Validate Image Imports (Est. 10 min)

**Objective**: Verify all image imports are correct and files exist

**Tasks**:

1. **Validate `figma:asset` syntax**
   - Check for incorrect path prefixes (`../`, `./`)
   - Verify virtual module scheme usage
   - Flag any non-standard patterns

2. **Validate SVG imports**
   - Check relative paths are correct
   - Verify SVG files exist in `/src/imports/`
   - Flag broken import paths

3. **Check ImageWithFallback imports**
   - Verify component is imported from correct path
   - Check relative import paths are correct
   - Flag missing component imports

4. **Validate data file image references**
   - Check heroImages.ts exports match usages
   - Verify all referenced images are defined
   - Flag missing image definitions

**Output**:
- List of broken imports (if any)
- List of invalid syntax patterns
- List of missing file references

---

### Phase 3: Accessibility & Best Practices (Est. 5 min)

**Objective**: Ensure images follow accessibility and performance best practices

**Tasks**:

1. **Check for missing alt text**
   - Flag all `<img>` without `alt` attribute
   - Flag all `<ImageWithFallback>` without `alt` prop
   - Recommend descriptive alt text

2. **Verify ImageWithFallback usage**
   - Check if standard `<img>` should use `ImageWithFallback`
   - Verify fallback behavior is consistent

3. **Check for lazy loading**
   - Verify images use lazy loading where appropriate
   - Flag images that should be lazy loaded

4. **Background image audit**
   - Search CSS for `background-image` declarations
   - Verify image paths are correct
   - Check dark mode variants exist

**Output**:
- Accessibility violations (missing alt text)
- Best practice recommendations
- Performance optimization opportunities

---

### Phase 4: Generate Report & Task List (Est. 5 min)

**Objective**: Create comprehensive report and actionable task list

**Tasks**:

1. **Create audit report**
   - File: `/reports/image-audit-YYYY-MM-DD.md`
   - Include all findings from Phases 1-3
   - Calculate health score (0-100)
   - Categorize issues by severity

2. **Create task list**
   - File: `/tasks/images-task-list.md`
   - One task per broken image or violation
   - Priority: Critical → High → Medium → Low
   - Include repair instructions for each task

3. **Update master task list**
   - Add reference to images-task-list.md
   - Update task count
   - Mark audit as complete

**Output**:
- `/reports/image-audit-YYYY-MM-DD.md`
- `/tasks/images-task-list.md`
- Updated `/tasks/task-list.md`

---

## Health Score Calculation

```
Base Score: 100 points

Deductions:
- Broken import: -10 points each
- Invalid syntax: -5 points each
- Missing alt text: -3 points each
- Not using ImageWithFallback: -2 points each
- Missing lazy loading: -1 point each

Final Score: Base - Total Deductions

Rating:
- 90-100: Excellent ✅
- 75-89: Good ⚠️
- 60-74: Fair ⚠️
- Below 60: Needs Attention 🔴
```

---

## Report Template

```markdown
# Image Audit Report

**Date**: YYYY-MM-DD  
**Version**: 1.0.0  
**Project Health Score**: XX/100

## Executive Summary

- **Total Images**: XX
- **Broken Imports**: XX
- **Missing Alt Text**: XX
- **Accessibility Score**: XX%

## Findings by Category

### 1. Raster Images (figma:asset)
- Total: XX
- Broken: XX
- Invalid syntax: XX

### 2. SVG Imports
- Total: XX
- Broken: XX
- Missing files: XX

### 3. Image Components
- ImageWithFallback usages: XX
- Standard img tags: XX
- Missing alt text: XX

### 4. Data Files
- Hero images: XX defined
- Product images: XX defined
- Article images: XX defined

## Critical Issues

[List of broken images requiring immediate fix]

## Recommendations

[Best practice improvements]

## Next Steps

See `/tasks/images-task-list.md` for actionable tasks.
```

---

## Task List Template

```markdown
# Image Audit Task List

**Generated**: YYYY-MM-DD  
**Source**: Image Audit (audit images)  
**Total Tasks**: XX

## Status Key
- [ ] Not Started
- [⏳] In Progress
- [✅] Complete

---

## Critical Tasks (Broken Images)

### Task 1.1: Fix broken figma:asset import in Component.tsx
- **Priority**: Critical
- **File**: /src/app/components/ComponentName.tsx
- **Issue**: Invalid figma:asset path syntax
- **Fix**: Remove path prefix, use virtual module scheme
- **Effort**: 5 min

---

## High Priority (Accessibility)

### Task 2.1: Add alt text to images in Page.tsx
- **Priority**: High
- **File**: /src/app/pages/PageName.tsx
- **Issue**: Missing alt attributes
- **Fix**: Add descriptive alt text
- **Effort**: 10 min

---

## Medium Priority (Best Practices)

### Task 3.1: Replace img with ImageWithFallback
- **Priority**: Medium
- **File**: /src/app/components/ComponentName.tsx
- **Issue**: Not using ImageWithFallback component
- **Fix**: Replace img tag with ImageWithFallback
- **Effort**: 5 min

---

## Low Priority (Optimizations)

### Task 4.1: Add lazy loading to images
- **Priority**: Low
- **File**: Multiple files
- **Issue**: Missing lazy loading attribute
- **Fix**: Add loading="lazy"
- **Effort**: 15 min
```

---

## Success Criteria

- ✅ All image imports validated
- ✅ Zero broken image references
- ✅ 100% alt text coverage
- ✅ Consistent ImageWithFallback usage
- ✅ Report generated in `/reports/`
- ✅ Task list generated in `/tasks/`
- ✅ Master task list updated
- ✅ Health score ≥ 85/100

---

## Related Files

**Input**:
- All `.tsx` files in `/src/app/`
- All `.css` files in `/src/styles/`
- All data files in `/src/app/data/`
- SVG files in `/src/imports/`

**Output**:
- `/reports/image-audit-YYYY-MM-DD.md`
- `/tasks/images-task-list.md`
- Updated `/tasks/task-list.md`

**Guidelines**:
- `/guidelines/development/prompt-report-task-workflow.md`
- `/guidelines/development/file-organization.md`
- `Guidelines.md` (images_and_svgs section)

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-16  
**Maintainer**: AI Assistant
