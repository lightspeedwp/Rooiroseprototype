# rooi rose Design System — Quick Reference Card

**Version**: 1.0.0  
**Last Updated**: 2026-03-12  
**Purpose**: Fast reference for developers building new pages

---

## 🎨 **BRAND COLORS**

```css
/* Primary Colors */
--brand-red: #e01e12;           /* Primary CTA, accents, active states */
--brand-navy: #172134;          /* Headings, primary text */
--brand-navy-light: #1a3a5f;    /* Gradient end for navy backgrounds */

/* Grays */
--gray-50: #f5f5f5;             /* Page backgrounds */
--gray-100: #e5e5e5;            /* Card borders */
--gray-400: #9ca3af;            /* Metadata text */
--gray-600: #4b5563;            /* Body text (light mode) */
--gray-800: #1f2937;            /* Dark text */

/* Functional */
--white: #ffffff;               /* Card backgrounds */
--black: #000000;               /* Pure black (rarely used) */
```

### **Usage**

| Element | Color | Tailwind Class |
|:--------|:------|:---------------|
| Headings | Navy | `text-brand-navy dark:text-foreground` |
| Body Text | Gray 600 | `text-gray-600 dark:text-gray-400` |
| Links | Red | `text-brand-red hover:underline` |
| Buttons (Primary) | Red | `bg-brand-red text-white hover:bg-red-700` |
| Buttons (Secondary) | White | `bg-white border-2 border-brand-red text-brand-red` |
| Active Pills | Red | `bg-brand-red text-white` |
| Inactive Pills | White | `bg-white border border-gray-200 text-gray-600` |

---

## ✍️ **TYPOGRAPHY**

### **Fonts**

- **Headings**: Playfair Display SC (serif, small caps)
- **Body**: Karla (sans-serif, clean, modern)

### **Font Classes**

```jsx
// Headings (use either class)
className="has-brand-serif-font-family"  // WordPress-aligned
className="font-heading"                 // React alias (works too)

// Body (default, no class needed)
// Karla is applied to <body> globally
```

### **Heading Sizes**

```jsx
// H1 (Page titles)
className="text-5xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6"
style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}

// H2 (Section titles)
className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-4"
style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}

// H3 (Card titles, subsections)
className="text-xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-2"
style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}

// H4 (Small headings, labels)
className="text-lg font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-2"
style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}
```

### **Body Text Sizes**

```jsx
// Large intro text
className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"

// Normal body text (default)
className="text-base text-gray-600 dark:text-gray-400"

// Small metadata, labels
className="text-sm text-gray-500 dark:text-gray-400"

// Extra small (badges, timestamps)
className="text-xs text-gray-400 dark:text-gray-500"
```

---

## 📐 **SPACING SYSTEM**

### **Base Unit**: 8px (Tailwind's default)

| Tailwind | Pixels | Use Case |
|:---------|:-------|:---------|
| `gap-2` | 8px | Icon + text spacing |
| `gap-4` | 16px | Card content gaps |
| `gap-6` | 24px | Section content gaps |
| `gap-8` | 32px | Major section gaps |
| `p-4` | 16px | Card padding (small) |
| `p-6` | 24px | Card padding (medium) |
| `p-8` | 32px | Card padding (large) |
| `p-10` | 40px | Hero section padding |
| `mb-6` | 24px | Heading bottom margin |
| `mb-8` | 32px | Section bottom margin |
| `mb-10` | 40px | Major section bottom margin |
| `mb-12` | 48px | Large section bottom margin |

### **Common Patterns**

```jsx
// Page header
<div className="mb-10">
  <h1 className="...mb-6">Title</h1>
  <p className="text-lg ...">Intro text</p>
</div>

// Card spacing
<div className="bg-white p-6 rounded-xl shadow-sm">
  <h3 className="...mb-4">Card Title</h3>
  <p className="mb-6">Content</p>
  <button>CTA</button>
</div>

// Grid gaps
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

---

## 🎴 **COMPONENT PATTERNS**

### **1. Card (Standard)**

```jsx
<div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-3">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Card content goes here.
  </p>
  <button className="bg-brand-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
    Call to Action
  </button>
</div>
```

---

### **2. Button (Primary)**

```jsx
<button className="bg-brand-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
  Primary Button
</button>
```

---

### **3. Button (Secondary)**

```jsx
<button className="bg-white dark:bg-card border-2 border-brand-red text-brand-red px-6 py-3 rounded-lg font-bold hover:bg-brand-red hover:text-white transition-colors">
  Secondary Button
</button>
```

---

### **4. Button (Ghost)**

```jsx
<button className="bg-transparent border border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-bold hover:border-brand-red hover:text-brand-red transition-colors">
  Ghost Button
</button>
```

---

### **5. Pill (Category Filter)**

```jsx
{/* Active State */}
<button className="px-4 py-2 rounded-full text-sm font-medium bg-brand-red text-white shadow-sm">
  Active Pill
</button>

{/* Inactive State */}
<button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-600 dark:text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors">
  Inactive Pill
</button>
```

---

### **6. Numbered Circle (Steps)**

```jsx
<span className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 font-bold shadow-sm">
  1
</span>
```

---

### **7. Input Field**

```jsx
<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-border rounded-lg focus:outline-none focus:border-brand-red dark:focus:border-brand-red transition-colors bg-white dark:bg-card dark:text-foreground"
/>
```

---

### **8. Gradient Header (Impact)**

```jsx
<div className="bg-gradient-to-br from-brand-red to-red-600 dark:bg-brand-red p-10 text-center rounded-t-xl">
  <IconComponent size={64} className="mx-auto mb-4 text-white" />
  <h1 className="text-4xl font-normal text-white has-brand-serif-font-family mb-3">
    Heading Text
  </h1>
  <p className="text-white/90 text-lg">
    Subheading or description
  </p>
</div>
```

---

### **9. Gradient Header (Navy Background)**

```jsx
<div className="bg-gradient-to-br from-brand-navy to-brand-navy-light dark:bg-brand-navy p-10 text-center rounded-t-xl">
  <h1 className="text-4xl font-normal text-white has-brand-serif-font-family mb-3">
    Heading Text
  </h1>
  <p className="text-gray-200 text-lg">
    Subheading or description
  </p>
</div>
```

---

### **10. Article Card (Magazine Style)**

```jsx
<article className="group">
  <div className="aspect-[3/2] overflow-hidden rounded-lg mb-4 bg-gray-200 dark:bg-muted">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  </div>
  <span className="inline-block bg-brand-red text-white text-xs font-bold px-2 py-1 uppercase mb-2 rounded">
    {category}
  </span>
  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
    {title}
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
    {excerpt}
  </p>
  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
    <span>{author}</span>
    <span>•</span>
    <span>{date}</span>
  </div>
</article>
```

---

## 🌓 **DARK MODE**

### **Key Principles**

1. **Always provide dark mode variant**: Every color class should have `dark:` variant
2. **Use semantic tokens**: `dark:bg-card`, `dark:text-foreground`, `dark:border-border`
3. **Custom shadows**: Use `dark:shadow-[var(--shadow-dark-*)]` for proper depth

### **Common Dark Mode Patterns**

```jsx
// Background
bg-white dark:bg-card              // Card backgrounds
bg-gray-50 dark:bg-background      // Page backgrounds
bg-gray-100 dark:bg-muted          // Subtle backgrounds

// Text
text-brand-navy dark:text-foreground     // Headings
text-gray-600 dark:text-gray-400         // Body text
text-gray-500 dark:text-gray-400         // Metadata

// Borders
border-gray-100 dark:border-border       // Card borders
border-gray-200 dark:border-border       // Input borders
border-gray-300 dark:border-border       // Dividers

// Shadows
shadow-sm dark:shadow-[var(--shadow-dark-100)]     // Subtle
shadow-md dark:shadow-[var(--shadow-dark-200)]     // Medium
shadow-lg dark:shadow-[var(--shadow-dark-300)]     // Large
```

---

## 📱 **RESPONSIVE BREAKPOINTS**

### **Tailwind Breakpoints**

| Prefix | Min Width | Target Devices |
|:-------|:----------|:---------------|
| (default) | 0px | Mobile (portrait) |
| `sm:` | 640px | Mobile (landscape), small tablets |
| `md:` | 768px | Tablets (portrait), small laptops |
| `lg:` | 1024px | Tablets (landscape), laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

### **Common Responsive Patterns**

```jsx
// Typography (mobile → desktop)
text-3xl md:text-4xl lg:text-5xl      // H1
text-2xl md:text-3xl                  // H2
text-xl md:text-2xl                   // H3

// Grid columns (mobile → desktop)
grid-cols-1 md:grid-cols-2 lg:grid-cols-3    // 1 → 2 → 3 columns
grid-cols-1 md:grid-cols-3                   // 1 → 3 columns

// Flexbox (stack → row)
flex-col md:flex-row                  // Stack on mobile, row on tablet+

// Padding (mobile → desktop)
p-4 md:p-6 lg:p-8                    // 16px → 24px → 32px

// Text size (mobile → desktop)
text-base md:text-lg                  // 16px → 18px
```

---

## 🎯 **ICONS**

### **Library**: Lucide React

### **Common Sizes**

| Use Case | Size | Tailwind |
|:---------|:-----|:---------|
| UI icons (inline) | 16px | `size={16}` |
| Button icons | 20px | `size={20}` |
| Card icons | 24px | `size={24}` |
| Hero icons | 56-64px | `size={56}` or `size={64}` |

### **Usage Example**

```jsx
import { Heart, ArrowRight, Mail } from 'lucide-react';

// Inline with text
<span className="flex items-center gap-2">
  <Mail size={16} className="text-brand-red" />
  <span>Email us</span>
</span>

// Button icon
<button className="flex items-center gap-2">
  <span>Continue</span>
  <ArrowRight size={20} />
</button>

// Hero icon (confirmation pages)
<Heart size={64} className="mx-auto mb-4 text-white" />
```

---

## ♿ **ACCESSIBILITY**

### **Quick Checklist**

- ✅ **Alt text**: All images have descriptive alt text
- ✅ **Focus states**: Red outline visible (`focus:outline-none focus:ring-2 focus:ring-brand-red`)
- ✅ **ARIA labels**: Icon-only buttons have `aria-label`
- ✅ **Color contrast**: 4.5:1 for body text, 3:1 for UI elements
- ✅ **Heading order**: H1 → H2 → H3 (no skipping levels)
- ✅ **Keyboard navigation**: Tab through all interactive elements

### **Focus Ring Pattern**

```jsx
// Standard focus ring (red)
focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2

// Input fields
focus:outline-none focus:border-brand-red dark:focus:border-brand-red
```

---

## 🚀 **QUICK START TEMPLATE**

### **New Page Skeleton**

```jsx
import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';

export const NewPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO
        title="Page Title | rooi rose"
        description="Page description in Afrikaans."
        keywords="keywords, in, afrikaans"
      />

      <PageContainer breadcrumbs={[{ label: 'Page Name' }]}>
        {/* Page Header */}
        <div className="mb-10">
          <h1
            className="text-5xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6"
            style={{
              fontVariationSettings: "var(--fvs-h1)",
              lineHeight: 'var(--lh-h1)',
              letterSpacing: 'var(--ls-h1)'
            }}
          >
            Page Title
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Introductory paragraph in Afrikaans.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards or content */}
        </div>
      </PageContainer>
    </div>
  );
};
```

---

## 📚 **BRAND GUIDELINES**

### **rooi rose Voice**

- **Always lowercase**: "rooi rose" (never "Rooi Rose" or "ROOI ROSE")
- **Italics for emphasis**: Use `<em className="font-bold not-italic">rooi rose</em>`
- **Language**: Afrikaans first, always
- **Tone**: Warm, approachable, sophisticated but not stuffy

### **Category Names** (10 Lifestyle Categories)

1. **Kos** — Food & recipes
2. **Mode** — Fashion & style
3. **Skoonheid** — Beauty & skincare
4. **Gesondheid** — Health & wellness
5. **Bekendes** — Celebrities & entertainment
6. **Leefstyl** — Lifestyle general
7. **Jou lewe** — Personal stories & advice
8. **Ontspanning** — Entertainment & culture
9. **Wen** — Competitions & giveaways
10. **Rooiwarm wenners** — Competition winners

---

## 🎨 **VISUAL EXAMPLES**

### **Good Typography Example**

✅ **DO**:
```jsx
<h1 className="text-5xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6">
  Kos & Resepte
</h1>
```

❌ **DON'T**:
```jsx
{/* Missing font class, wrong size, no dark mode */}
<h1 className="text-4xl font-bold text-black mb-4">
  Kos & Resepte
</h1>
```

---

### **Good Button Example**

✅ **DO**:
```jsx
<button className="bg-brand-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
  Lees meer
</button>
```

❌ **DON'T**:
```jsx
{/* Missing hover state, no dark mode consideration */}
<button className="bg-red-500 text-white px-4 py-2 rounded">
  Lees meer
</button>
```

---

### **Good Dark Mode Example**

✅ **DO**:
```jsx
<div className="bg-white dark:bg-card border border-gray-100 dark:border-border p-6">
  <p className="text-gray-600 dark:text-gray-400">Content</p>
</div>
```

❌ **DON'T**:
```jsx
{/* Missing dark mode variants */}
<div className="bg-white border border-gray-100 p-6">
  <p className="text-gray-600">Content</p>
</div>
```

---

## 🔗 **RELATED DOCUMENTATION**

- **Full Design System Guide**: `/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md`
- **Brand Guidelines**: `/guidelines/rooi-rose/brand-guidelines.md`
- **Typography Guide**: `/guidelines/design-tokens/typography.md`
- **Color Palette**: `/guidelines/design-tokens/colors.md`
- **Component Examples**: Check existing pages in `/src/app/pages/`

---

**Quick Reference Card Version**: 1.0.0  
**Last Updated**: 2026-03-12  
**For**: rooi rose Magazine Development Team

---

## 💡 **TIPS & TRICKS**

1. **Copy from existing pages**: Find a similar page, copy the pattern, adapt the content
2. **Use the right heading size**: H1 for page titles, H2 for sections, H3 for cards
3. **Always test dark mode**: Toggle dark mode after every change
4. **Mobile-first**: Build for mobile first, then add `md:` and `lg:` variants
5. **Consistent spacing**: Stick to 8px multiples (gap-4, gap-6, gap-8)
6. **Red for action**: Use brand-red for CTAs, active states, important elements
7. **Navy for structure**: Use brand-navy for headings, creating visual hierarchy

---

**Happy building! Baie sterkte!** 🚀
