# Audit G: WordPress Alignment

**Purpose**: Ensure CSS aligns with WordPress global classes, theme.json concepts, and per-block styling patterns.

---

## Tasks

1. Identify existing global classes and check WordPress alignment
2. Propose bridge between design tokens and theme.json presets
3. Propose "section styles" approach (per-block CSS files)
4. Document recommended global/utility class set

---

## Output Template

```markdown
## Audit G: WordPress Alignment

### Current Global Classes

**WordPress-Aligned Classes Found**:
- `.alignwide`, `.alignfull` — [yes/no]
- `.has-*-color`, `.has-*-background-color` — [yes/no, count]
- `.has-*-font-size` — [yes/no, count]
- `.is-style-*` — [yes/no, count]
- `.wp-block-*` — [yes/no, list]

**Custom Global Classes** (not WordPress standard):
- [List classes, explain purpose, recommend keep/remove]

### Design Tokens ↔ theme.json Bridge

**Preset Mapping**:

| Token Category | CSS Variable | theme.json Preset | Status |
|:---------------|:-------------|:------------------|:-------|
| Colors | `--color-primary` | `settings.color.palette[0].slug: "primary"` | ✅ / ❌ |
| Font Sizes | `--font-size-large` | `settings.typography.fontSizes[3].slug: "large"` | ✅ / ❌ |
| Spacing | `--space-medium` | `settings.spacing.spacingSizes[3].slug: "medium"` | ✅ / ❌ |

**WordPress CSS Variable Format**:
- Colors: `--wp--preset--color--{slug}`
- Font sizes: `--wp--preset--font-size--{slug}`
- Spacing: `--wp--preset--spacing--{slug}`

**Recommendations**:
- [ ] Map all design tokens to theme.json presets
- [ ] Ensure CSS variable names match WordPress convention
- [ ] Create theme.json generation script (or manual sync process)

### Section Styles Approach

**Current State**: [Describe current section/block styling]

**Proposed Per-Block Files**:

```
/src/styles/blocks/
  core/
    heading.css — Heading block styles
    paragraph.css — Paragraph block styles
    image.css — Image block styles
  woocommerce/
    product-grid.css — Product grid block
    cart.css — Cart block
  custom/
    hero.css — Custom hero block
```

**File Structure**:
```css
/* blocks/core/heading.css */
.wp-block-heading {
  font-family: var(--wp--preset--font-family--heading);
}

.wp-block-heading.is-style-display {
  font-size: var(--wp--preset--font-size--xxx-large);
}
```

**Benefits**:
- Easy to add/remove blocks
- Scoped to block root class
- Mirrors WordPress block structure
- Minimal selectors

### Recommended Global Class Set

**Keep (WordPress Standard)**:
```css
/* Alignment */
.alignwide { max-width: var(--wp--style--global--wide-size); }
.alignfull { max-width: 100%; margin-left: calc(50% - 50vw); }

/* Colors */
.has-primary-color { color: var(--wp--preset--color--primary) !important; }
.has-primary-background-color { background-color: var(--wp--preset--color--primary) !important; }

/* Font Sizes */
.has-large-font-size { font-size: var(--wp--preset--font-size--large) !important; }

/* Spacing */
.has-medium-margin { margin: var(--wp--preset--spacing--medium) !important; }
```

**Add (WordPress-Aligned Utilities)**:
```css
/* Layout containers */
.wp-container { max-width: var(--wp--style--global--content-size); margin-inline: auto; }

/* Gap utilities (WordPress blockGap pattern) */
.has-gap { gap: var(--wp--style--block-gap); }
.has-x-small-gap { gap: var(--wp--preset--spacing--x-small); }

/* State classes */
.is-hidden { display: none !important; }
.is-visually-hidden { /* screen reader only */ }
```

**Remove (Non-WordPress)**:
- [List any custom utilities that conflict with WordPress or should be components]

### Implementation Plan

**Phase 1: Global Class Audit**
- [ ] Verify all `.has-*`, `.is-*`, `.align*` classes match WordPress
- [ ] Remove non-standard global classes
- [ ] Add missing WordPress utilities

**Phase 2: theme.json Integration**
- [ ] Create theme.json with all presets
- [ ] Map design tokens → theme.json
- [ ] Ensure CSS variables use `--wp--preset--*` format
- [ ] Sync process documented

**Phase 3: Per-Block CSS Files**
- [ ] Split block styles into individual files
- [ ] Create `/src/styles/blocks/` directory structure
- [ ] Scope all selectors to `.wp-block-{name}` root
- [ ] Update import manifest

**Phase 4: Validation**
- [ ] WordPress block editor testing
- [ ] Pattern/template rendering verification
- [ ] theme.json validation (schema check)

### Evidence

**Current WordPress Classes**:
```css
[Sample from wp-utilities.css]
```

**Proposed theme.json**:
```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#142135", "name": "Primary" }
      ]
    }
  }
}
```
```

---

## Die Papier Context

**WordPress Status**: 177 patterns, 44 templates, 14 parts created  
**Current WordPress Classes**: `/src/styles/wp-utilities.css` (179 lines)  
**Block Styles**: `/src/styles/block-style-variations.css` (65 lines)

**Expected Findings**:
- WordPress utilities exist but may need alignment
- theme.json bridge partially implemented
- Per-block CSS files not yet separated

---

**Next**: Proceed to Audit H (DRY & Pattern Opportunities)
