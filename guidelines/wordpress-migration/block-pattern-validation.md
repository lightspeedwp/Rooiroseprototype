# WordPress Block Pattern Validation Guidelines

**Last Updated**: 2026-03-04  
**Source**: LightSpeed WP WordPress Block Pattern Validator Skill  
**Purpose**: Ensure all block patterns match WordPress core rendering rules to prevent validation errors

---

## Overview

WordPress block patterns must ensure HTML output matches block comment attributes. Mismatches cause validation errors in the block editor, preventing content from saving correctly or displaying warnings to users.

This document defines validation rules for "Die Papier" block patterns based on WordPress core rendering behavior.

---

## Critical Validation Rules

### 1. Redundant Font Family Attributes

**Problem**: WordPress strips `fontFamily` attributes that match theme defaults, causing validation errors.

**Die Papier Theme Defaults** (from `/wordpress-export/themes/die-papier-theme/theme.json`):
- **Headings**: `roboto-serif` (Roboto Serif)
- **Body/UI**: `inter` (Inter)

**Rule**: Remove `fontFamily` from block attributes if it matches the theme default for that element type.

**Examples**:

```html
<!-- ❌ WRONG - fontFamily matches heading default -->
<!-- wp:heading {"style":{"typography":{"fontFamily":"var:preset|font-family|roboto-serif"}}} -->
<h3 class="wp-block-heading">Text</h3>

<!-- ✅ CORRECT - fontFamily removed -->
<!-- wp:heading {} -->
<h3 class="wp-block-heading">Text</h3>

<!-- ❌ WRONG - fontFamily matches body/UI default -->
<!-- wp:button {...,"typography":{"fontFamily":"var:preset|font-family|inter","fontWeight":"600"}...} -->

<!-- ✅ CORRECT - fontFamily removed, fontWeight kept -->
<!-- wp:button {...,"typography":{"fontWeight":"600"}...} -->
```

**When to Keep fontFamily**:
- When using `roboto-serif` on buttons/paragraphs (non-default)
- When using `inter` on headings (non-default)
- Any font family other than `roboto-serif` or `inter`

---

### 2. Default Font Size Optimization

**Problem**: WordPress handles `fontSize="base"` differently for button wrapper vs link element.

**Rule**: When `fontSize="base"` (theme default):
- Button wrapper `<div>`: NO font size classes
- Button link `<a>`: YES font size classes (always)

**Examples**:

```html
<!-- Block attributes have fontSize="base" -->
<!-- wp:button {...,"fontSize":"base"} -->

<!-- ❌ WRONG - wrapper should not have classes when base -->
<div class="wp-block-button has-base-font-size has-custom-font-size">
  <a class="wp-block-button__link has-base-font-size has-custom-font-size ...">Text</a>
</div>

<!-- ✅ CORRECT - wrapper has NO classes, link has both -->
<div class="wp-block-button">
  <a class="wp-block-button__link has-base-font-size has-custom-font-size ...">Text</a>
</div>

<!-- For custom sizes like fontSize="sm", both get classes -->
<!-- wp:button {...,"fontSize":"sm"} -->
<div class="wp-block-button has-custom-font-size has-sm-font-size">
  <a class="wp-block-button__link has-sm-font-size has-custom-font-size ...">Text</a>
</div>
```

---

### 3. Malformed Font Size Classes

**Problem**: Typos in font size class names cause validation errors.

**Rule**: Font size classes must match pattern `has-{fontSize}-font-size` (no extra characters).

**Die Papier Font Size Slugs**:
- `x-small`, `small`, `base`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
- Heading sizes: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

**Examples**:

```html
<!-- ❌ WRONG - extra dash -->
<!-- wp:heading {"fontSize":"h3"} -->
<h3 class="wp-block-heading has-h-3-font-size">Text</h3>

<!-- ✅ CORRECT -->
<!-- wp:heading {"fontSize":"h3"} -->
<h3 class="wp-block-heading has-h3-font-size">Text</h3>

<!-- ❌ WRONG - wrong slug format -->
<!-- wp:paragraph {"fontSize":"x-large"} -->
<p class="has-xlarge-font-size">Text</p>

<!-- ✅ CORRECT -->
<!-- wp:paragraph {"fontSize":"x-large"} -->
<p class="has-x-large-font-size">Text</p>
```

---

### 4. Invalid HTML Comments

**Problem**: Block templates should only contain WordPress block comments, not descriptive HTML comments.

**Rule**: Remove ALL descriptive HTML comments. WordPress block structure is self-documenting.

**Valid Comments**:
- `<!-- wp:blockname {...} -->` (opening block)
- `<!-- /wp:blockname -->` (closing block)  
- `<!-- wp:namespace/blockname {...} -->` (third-party: WooCommerce, Yoast, etc.)

**Invalid Comments** (will cause parsing issues):
- `<!-- Social Media Icons -->` ❌
- `<!-- Top Navigation Links -->` ❌
- `<!-- Newsletter Section -->` ❌
- `<!-- Column 1: About Us -->` ❌

**Examples**:

```html
<!-- ❌ WRONG - descriptive comment -->
<!-- Social Media Icons -->
<!-- wp:social-links {...} -->
<ul class="wp-block-social-links">...</ul>
<!-- /wp:social-links -->

<!-- ✅ CORRECT - use meaningful class names instead -->
<!-- wp:social-links {...} -->
<ul class="wp-block-social-links is-style-logos-only header-social">...</ul>
<!-- /wp:social-links -->
```

---

### 5. Navigation Block Syntax

**Problem**: Mixing self-closing syntax with children causes WordPress parsing errors.

**Rule**: 
- Self-closing blocks (`/-->`) must have NO children and NO closing tag
- Blocks with children must NOT be self-closing (`-->`) and MUST have closing tag

**Examples**:

```html
<!-- ❌ WRONG - self-closing WITH children -->
<!-- wp:navigation {"overlayMenu":"never"} /-->
  <!-- wp:navigation-link {"label":"Home","url":"/"} /-->
  <!-- wp:navigation-link {"label":"About","url":"/about"} /-->
<!-- /wp:navigation -->

<!-- ✅ CORRECT Option 1: Self-closing (no children) -->
<!-- wp:navigation {"ref":123,"overlayMenu":"never"} /-->

<!-- ✅ CORRECT Option 2: With children (not self-closing) -->
<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex"}} -->
  <!-- wp:navigation-link {"label":"Home","url":"/"} /-->
  <!-- wp:navigation-link {"label":"About","url":"/about"} /-->
<!-- /wp:navigation -->
```

**Best Practice**: Use `ref` attribute to reference menus created in WordPress admin:
```html
<!-- wp:navigation {"ref":123,"overlayMenu":"never"} /-->
```

---

### 6. Cover Block Structure

**Problem**: Incorrect child element order or missing attributes cause rendering issues.

**Rule**: Cover blocks must follow exact WordPress structure:

1. `<img class="wp-block-cover__image-background">` (first child)
2. `<span class="wp-block-cover__background">` (second child)
3. `<div class="wp-block-cover__inner-container">` (third child)

**Image Requirements**:
- Must include `data-object-fit="cover"` attribute
- Use `alt=""` for decorative images (WordPress default)
- Class must be `wp-block-cover__image-background`

**Examples**:

```html
<!-- ❌ WRONG - incorrect order, missing attributes -->
<!-- wp:cover -->
<div class="wp-block-cover">
    <span class="wp-block-cover__background"></span>
    <img class="wp-block-cover__image-background" src="image.jpg" alt="Description" />
    <div class="wp-block-cover__inner-container">...</div>
</div>

<!-- ✅ CORRECT - WordPress structure (inline, no whitespace) -->
<!-- wp:cover -->
<div class="wp-block-cover"><img class="wp-block-cover__image-background" alt="" src="image.jpg" data-object-fit="cover"/><span class="wp-block-cover__background"></span><div class="wp-block-cover__inner-container">...</div></div>
```

---

### 7. Button Block Handling

**Problem**: Button blocks use a two-layer structure. Attributes apply to inner `<a>` tag, not wrapper `<div>`.

**Rule**: Validate attributes against the inner `<a class="wp-block-button__link">` tag.

**Example**:

```html
<!-- wp:button {"backgroundColor":"primary","textColor":"base"} -->
<div class="wp-block-button">  <!-- Wrapper: minimal classes -->
    <a class="wp-block-button__link has-primary-background-color has-base-color has-text-color has-background">
      Button Text  <!-- ✅ Validate this tag -->
    </a>
</div>
```

---

## Standard Validation Rules

### Color Attributes

#### Background Color
- **Attribute**: `"backgroundColor":"color-slug"`
- **Required Classes**: `has-{color-slug}-background-color has-background`

**Die Papier Color Slugs**: `primary` (navy), `primary-alt`, `secondary` (red), `secondary-accent`, `base`, `tertiary`, `border-light`, `main`, `main-accent`, `accent`

**Example**:
```html
<!-- wp:group {"backgroundColor":"primary"} -->
<div class="wp-block-group has-primary-background-color has-background">
```

#### Text Color
- **Attribute**: `"textColor":"color-slug"`
- **Required Classes**: `has-{color-slug}-color has-text-color`

**Example**:
```html
<!-- wp:paragraph {"textColor":"base"} -->
<p class="has-base-color has-text-color">Text</p>
```

#### Custom Colors
- **Attribute**: `"style":{"color":{"background":"#hexcode"}}`
- **Inline Style**: `background-color:#hexcode`

---

### Spacing Attributes

#### Padding
- **Attribute**: `"style":{"spacing":{"padding":{"top":"var:preset|spacing|60"}}}`
- **Inline Style**: `padding-top:var(--wp--preset--spacing--60)`
- **Rule**: Convert pipe notation (`|`) to CSS custom property (`--`)

**Die Papier Spacing Slugs**: `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

**Example**:
```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--medium)">
```

#### Margin
- **Attribute**: `"style":{"spacing":{"margin":{"bottom":"2rem"}}}`
- **Inline Style**: `margin-bottom:2rem`

---

### Layout Attributes

#### Alignment
- **Attribute**: `"align":"full"`
- **Required Class**: `alignfull`
- **Values**: `wide` → `alignwide`, `left` → `alignleft`, `right` → `alignright`, `center` → `aligncenter`

#### Text Alignment
- **Attribute**: `"textAlign":"center"`
- **Required Class**: `has-text-align-center`

---

### Border Attributes

#### Border Radius
- **Attribute**: `"style":{"border":{"radius":"8px"}}`
- **Inline Style**: `border-radius:8px`

**Die Papier Border Radius Slugs**: `100`, `200`, `300`, `400`, `500`, `600`, `9999`

**Example**:
```html
<!-- wp:group {"style":{"border":{"radius":"var:preset|border-radius|200"}}} -->
<div class="wp-block-group" style="border-radius:var(--wp--preset--border-radius--200)">
```

---

### Background Image Attributes

**Two Valid Patterns**:

#### Pattern 1: Simple Backgrounds (Attributes + Inline Styles)
- **Use Case**: Simple background images without advanced effects
- **Validation**: Background must appear in BOTH attributes AND inline styles

```html
<!-- wp:group {"style":{"background":{"backgroundImage":{"url":"/path/to/image.png","source":"file"},"backgroundSize":"cover"}}} -->
<div class="wp-block-group has-background" style="background-image:url('/path/to/image.png');background-size:cover">
```

#### Pattern 2: Advanced Backgrounds (Attributes Only + SCSS)
- **Use Case**: Backgrounds with advanced effects (blend modes, opacity, positioning)
- **Validation**: Background ONLY in attributes, NO inline styles
- **⚠️ NOTE**: Validator may flag missing inline styles - this is expected for Pattern 2

```html
<!-- wp:group {"style":{"background":{"backgroundImage":{"url":"/path/to/image.png","source":"file"},"backgroundSize":"cover"}},"className":"header-main"} -->
<div class="wp-block-group header-main has-background">
  <div></div> <!-- Empty div for SCSS targeting -->
  <!-- Content -->
</div>
```

**CONSTRAINT**: Blocks with background images CANNOT have background colors or gradients:
- ❌ **ERROR**: `"gradient":"brand-red"` + background image
- ❌ **ERROR**: `"backgroundColor":"primary"` + background image
- ✅ **VALID**: Only background image attribute present

---

### Drop Shadow Attributes

#### When to Use Block Attributes
- Standalone blocks NOT part of a section/pattern
- Editable shadows (changeable in WordPress editor)

**Example**:
```html
<!-- wp:group {"style":{"shadow":"0 4px 6px -1px rgba(0,0,0,0.1)"}} -->
<div class="wp-block-group" style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1)">
```

#### When to Use SCSS
- Section/pattern blocks (e.g., `pattern-hero-section`)
- Complex shadows or shadows with hover states
- Design system shadows

**Note**: Validator may flag missing inline shadows for section/pattern blocks - ignore if SCSS handles it.

---

### Sticky Position Attributes

- **Attribute**: `"style":{"position":{"type":"sticky","top":"0px"}}`
- **Inline Style**: `style="position:sticky;top:0px"`
- **Rule**: Position must match between attributes and inline styles

**Example**:
```html
<!-- wp:group {"style":{"position":{"type":"sticky","top":"0px"}}} -->
<div class="wp-block-group" style="position:sticky;top:0px">
```

---

## Preset Notation Conversion

WordPress uses pipe notation (`|`) in block attributes but CSS custom property syntax (`--`) in inline styles.

**Conversion Rules**:
- `var:preset|spacing|60` → `var(--wp--preset--spacing--60)`
- `var:preset|color|primary` → `var(--wp--preset--color--primary)`
- `var:preset|font-family|inter` → `var(--wp--preset--font-family--inter)`
- `var:custom|border-radius|200` → `var(--wp--custom--border-radius--200)`

---

## Class Ordering Convention

WordPress outputs classes in this order:

```
{base-block-class} {alignment} {custom-classes} {text-color} {text-color-flag} {background-color} {background-flag} {font-size}
```

**Example**:
```
wp-block-group alignfull my-custom-class has-base-color has-text-color has-primary-background-color has-background has-large-font-size
```

---

## Validation Workflow

### Phase 1: Automated Validation
1. Parse block comments and extract JSON attributes
2. Validate HTML output against WordPress rendering rules
3. Check for missing/incorrect classes and inline styles
4. Generate error report with line numbers

### Phase 2: Manual Review
1. Review errors flagged by validator
2. Identify false positives (e.g., SCSS-handled shadows)
3. Verify fixes don't break advanced functionality

### Phase 3: Testing
1. Import fixed patterns into WordPress
2. Test in block editor (check for validation errors)
3. Test on frontend (verify rendering)

---

## Die Papier Specific Constraints

### Theme Defaults (from theme.json)
- **Default Font Family (Body/UI)**: `inter`
- **Default Font Family (Headings)**: `roboto-serif`
- **Default Font Size**: `base` (18px)
- **Default Line Height**: 1.6
- **Default Spacing Scale**: `x-small` through `xxx-large` (7 steps)

### Custom Block Styles
- Section styles: `white`, `navy`, `red`, `muted`, `gradient-navy`, `gradient-red`, `dim`, `shade`, `contrast`
- These may override default validation rules - review patterns using section styles carefully

### Advanced Ads Integration
- Ad slots are NOT validated by this tool
- Ad slots use `<!-- wp:advads/gblock -->` syntax (third-party block)
- Placement slugs use `dp-` prefix (e.g., `dp-sidebar-home-top`)

---

## Known Limitations

1. **SCSS-Handled Properties**: Validator may flag missing inline styles for properties handled by SCSS (shadows, backgrounds). These are expected false positives.

2. **Custom Block Types**: Only validates core WordPress blocks. Custom blocks may have different rendering rules.

3. **Complex Nested Structures**: For deeply nested blocks, manual review may be needed.

4. **Third-Party Blocks**: WooCommerce, Yoast, Advanced Ads blocks follow their own validation rules.

---

## Validation Error Severity

### High Priority (Breaks Functionality)
- Missing color classes (`has-background`, `has-text-color`)
- Missing inline styles for spacing/borders
- Incorrect preset notation in inline styles
- Malformed font size classes
- Invalid block comment syntax
- Conflicting background attributes (image + color/gradient)

### Medium Priority (Affects Theme Behavior)
- Redundant fontFamily attributes
- Missing text color flag classes
- Incorrect default font size handling

### Low Priority (Cosmetic)
- Class ordering issues
- Descriptive HTML comments (template pollution)

---

## Related Guidelines

- [Design System Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md) - Canonical design token reference
- [Typography Implementation Guide](/guidelines/design-tokens/typography-implementation-guide.md) - Font family usage rules
- [Spacing](/guidelines/design-tokens/spacing.md) - Spacing scale and blockGap rules
- [Colors](/guidelines/design-tokens/colors.md) - Brand palette and color slugs
- [Section Styles Architecture](/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md) - Section style variations
- [Pattern Strategy](/guidelines/wordpress-migration/pattern-strategy.md) - Pattern organization and naming

---

## References

- [WordPress Block Editor Handbook - Block Supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)
- [WordPress Core - get_block_wrapper_attributes()](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/)
- [WordPress Core - Block Parser](https://developer.wordpress.org/reference/classes/wp-block-parser/)
- [LightSpeed WP Block Pattern Validator Skill](https://github.com/lightspeedwp/.github/tree/feature/basic-agent-skills/.github/skills/wordpress-block-pattern-validator)
