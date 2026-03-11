# Figma Memory Reduction Audit

**Purpose**: Audit Figma Make prototype for memory waste and propose remediation before CSS audits.

**Context**: Figma tabs have ~2GB WASM memory limit. Memory saturation causes crashes and "almost out of memory" warnings.

---

## Instructions

### 1) Understand the 2GB Limit

Each Figma tab (web or desktop) gets roughly 2GB of working memory. When approaching this limit, the app stops rendering reliably. This audit prioritizes actions that reduce memory consumption.

### 2) Monitor Memory Usage

**Enable Memory Meter**:
- Main Menu → View → Memory usage
- Toggle "Show memory in layers panel"

**Identify high-memory pages/components**:
- Start with pages using most memory
- Check component sets with many variants
- Identify large image assets

### 3) Optimize Assets and Layers

#### Compress Raster Images

**Problem**: Large images are biggest memory hogs

**Solutions**:
- Use plugins: Downsize, Heavyweights
- Compress high-resolution images
- Replace decorative images with CSS gradients/patterns
- Convert large photos to smaller thumbnails

#### Remove Hidden or Duplicate Layers

**Problem**: Hidden layers consume memory even when invisible

**Solutions**:
- Delete non-critical hidden layers
- Use "Clean Document" plugin
- Remove duplicate frames/components
- Archive old design iterations to separate file

#### Flatten Complex Vectors and SVGs

**Problem**: High vector node counts increase WASM heap usage

**Solutions**:
- Simplify imported SVGs
- Reduce vector nodes (Boolean operations, Outline stroke)
- Rasterize complex vectors when possible
- Use component instances instead of copying vectors

### 4) Optimize Component Hierarchy

#### Reduce Variant Count

**Problem**: Large component sets load all variants even if only one is used

**Solutions**:
- Replace variant sets with Boolean properties
- Split large component sets into smaller sets
- Use component properties instead of variants where possible

**Example**:
```
❌ Button component with 24 variants (size × color × state)
✅ Button component with Boolean properties (isLarge, isPrimary, isDisabled)
```

#### Avoid Deep Nesting

**Problem**: Over-nested components exponentially increase memory

**Solutions**:
- Keep component hierarchy flat (max 3 levels)
- Avoid slot components with many nested instances
- Use Auto Layout instead of nested frames where possible

### 5) Restructure the File

#### Split Large Files

**Problem**: Single file contains design system + all pages

**Solutions**:
- Separate design system into library file
- Move archived flows to separate file
- Create file per major feature/section
- Use external component libraries

**Process**:
1. Duplicate file (backup)
2. Move pages to new file
3. Relink components to library
4. Verify nothing broken

#### Use Multiple Pages

**Problem**: All content on single page loads at once

**Solutions**:
- Distribute content across pages
- Use pages like: "Ideation", "Production", "Design System", "Archive"
- Figma only loads active page into memory

### 6) Manage Figma Make Prompts

**Problem**: Heavy AI usage increases memory

**Solutions**:
- Clear prompt history periodically
- Restart AI session if errors occur
- Write concise, structured prompts
- Avoid repeated regeneration attempts

### 7) After Memory Optimization

**Document**:
- Which pages/layers were removed
- Which components were simplified
- Which assets were compressed
- Where archived content was moved

**Verify**:
- Links and library connections preserved
- No visual regressions
- Memory usage reduced below 70%

---

## Output Template

```markdown
# Figma Memory Reduction Audit — Die Papier — <DATE>

## Current Memory Usage

**Total File Size**: [MB]  
**Memory Usage**: [MB / 2048 MB] ([%])  
**Status**: [Green < 50% / Yellow 50-70% / Red > 70%]

**High-Memory Pages**:

| Page | Memory Usage | Primary Issue | Recommendation |
|:-----|-------------:|:--------------|:---------------|
| ... | ... MB | ... | ... |

## Asset Optimization

### Images

**Large Images Found** (>500KB):

| Image | Size | Dimensions | Usage | Recommendation |
|:------|-----:|:-----------|:------|:---------------|
| ... | ... KB | ... × ... | ... | Compress to ~100KB |

**Actions Taken**:
- [ ] Compressed [count] images using [plugin name]
- [ ] Replaced [count] decorative images with CSS
- [ ] Converted [count] photos to thumbnails

**Estimated Savings**: [MB]

### Vectors

**Complex Vectors** (>1000 nodes):

| Vector | Nodes | Usage | Recommendation |
|:-------|------:|:------|:---------------|
| ... | ... | ... | Flatten or rasterize |

**Actions Taken**:
- [ ] Flattened [count] complex SVGs
- [ ] Simplified [count] vectors using Boolean ops
- [ ] Rasterized [count] decorative elements

**Estimated Savings**: [MB]

### Hidden Layers

**Hidden Layer Count**: [count]

**Actions Taken**:
- [ ] Deleted [count] hidden layers
- [ ] Archived [count] old frames to separate file
- [ ] Cleaned document using [plugin name]

**Estimated Savings**: [MB]

## Component Optimization

### Variant Reduction

**Large Component Sets**:

| Component | Variants | Properties | Recommendation |
|:----------|----------|:-----------|:---------------|
| Button | 24 | size, color, state | Replace with Boolean properties |

**Actions Taken**:
- [ ] Converted [count] variant sets to properties
- [ ] Split [count] large component sets
- [ ] Reduced total variants by [%]

**Estimated Savings**: [MB]

### Nesting Depth

**Deep Component Hierarchy**:

| Component | Nesting Depth | Recommendation |
|:----------|:--------------|:---------------|
| ... | 5 levels | Flatten to 3 levels |

**Actions Taken**:
- [ ] Flattened [count] deep hierarchies
- [ ] Replaced nested instances with Auto Layout
- [ ] Reduced max nesting from [n] to [n] levels

**Estimated Savings**: [MB]

## File Restructuring

### File Split

**Current Structure**: Single file with [count] pages

**Proposed Structure**:
- `die-papier-design-system.fig` — Component library
- `die-papier-pages.fig` — Production pages
- `die-papier-archive.fig` — Old iterations

**Actions Taken**:
- [ ] Created separate design system library
- [ ] Moved [count] pages to new file
- [ ] Archived [count] old flows
- [ ] Relinked components to library

**Estimated Savings**: [MB] (from main file)

### Page Distribution

**Before**: All content on 1 page  
**After**: Content distributed across [count] pages

| Page | Purpose | Frame Count | Memory Usage |
|:-----|:--------|------------:|-------------:|
| Production | Live designs | ... | ... MB |
| Ideation | Sketches | ... | ... MB |
| Archive | Old versions | ... | ... MB |

**Estimated Savings**: [MB] (per active page)

## Figma Make Optimization

**Prompt History Size**: [count] prompts

**Actions Taken**:
- [ ] Cleared prompt history
- [ ] Restarted AI session
- [ ] Documented successful prompts in [file]
- [ ] Removed [count] failed generation attempts

**Estimated Savings**: [MB]

## Final Memory Status

**Before Optimization**: [MB / 2048 MB] ([%])  
**After Optimization**: [MB / 2048 MB] ([%])  
**Total Reduction**: [MB] ([%] decrease)

**Status**: [Green < 50% / Yellow 50-70% / Red > 70%]

## Recommendations

**Immediate** (if still > 70%):
- [ ] Further image compression
- [ ] Additional file splitting
- [ ] Remove more hidden layers

**Short-term** (preventative):
- [ ] Establish file size limits per page
- [ ] Regular cleanup schedule (weekly)
- [ ] Component variant guidelines

**Long-term** (process):
- [ ] Use component libraries for shared elements
- [ ] Archive old iterations monthly
- [ ] Monitor memory usage dashboard

## Evidence

**Memory Meter Screenshot**: [Before/After]  
**Largest Assets**: [List]  
**Component Hierarchy**: [Tree view]

---

**Next Step**: Proceed with CSS audits (orchestrator.md) only after memory is < 70%.
```

---

## Die Papier Context

**Expected Issues**:
- Large hero images in homepage sections
- Complex SVG icons/illustrations
- Deep component nesting in WordPress patterns
- Many variant combinations for responsive components

**Priority**:
- Compress hero images first (biggest impact)
- Flatten complex SVGs
- Reduce component variants where possible

---

## References

- [Figma Memory Limit - LinkedIn](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)
- [Figma Memory Limits Will Eat You Alive - LinkedIn](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc)

---

**Last updated**: 2026-03-05
