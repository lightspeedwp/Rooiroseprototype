# Visual QA Checklist — React vs WordPress

**Category**: Quality Assurance  
**Last Updated**: 2026-03-12  
**Purpose**: Ensure WordPress implementation matches React prototype  
**Status**: Ready for Use

---

## Overview

This checklist ensures visual and functional parity between the React prototype and WordPress implementation. Use this during WordPress migration to verify every detail matches the design specifications.

**Testing Method**: Side-by-side comparison (React prototype in one browser tab, WordPress in another)

---

## Pre-Testing Setup

### Required Tools

- [ ] **Browsers**: Chrome, Firefox, Safari (latest versions)
- [ ] **Devices**: Desktop (1920px), Tablet (768px), Mobile (375px)
- [ ] **Screenshot Tool**: Nimbus, Awesome Screenshot, or Snagit
- [ ] **Color Picker**: ColorZilla (browser extension)
- [ ] **Font Inspector**: WhatFont (browser extension)
- [ ] **Accessibility**: axe DevTools (browser extension)

### URLs to Compare

- [ ] **React Prototype**: [Figma Make URL]
- [ ] **WordPress Staging**: [Staging URL]
- [ ] **WordPress Production**: [Production URL] (post-launch)

---

## Section 1: Global Elements

### 1.1 Header (All Pages)

**React URL**: Any page  
**WordPress URL**: Any page

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Logo** | | | ☐ | |
| Logo size | | | ☐ | Should be identical height |
| Logo spacing | | | ☐ | Same padding top/bottom |
| Logo link | Works | Works | ☐ | Links to homepage |
| **Primary Navigation** | | | ☐ | |
| Menu items (10) | Listed | Listed | ☐ | All 10 categories present |
| Font family | Karla | Karla | ☐ | Use WhatFont to verify |
| Font size | 16px | 16px | ☐ | Check with DevTools |
| Font weight | 400 | 400 | ☐ | Regular weight |
| Text color | #1a1a1a | #1a1a1a | ☐ | Use ColorZilla |
| Hover color | #e01e12 | #e01e12 | ☐ | Hover over menu items |
| Active state | Underline | Underline | ☐ | Current page indicator |
| **Mobile Menu** | | | ☐ | |
| Hamburger icon | 3 lines | 3 lines | ☐ | Same icon |
| Menu opens | Overlay | Overlay | ☐ | Full-screen overlay |
| Grid layout | 3x5 | 3x5 | ☐ | 13 items + close |
| Icons | lucide-react | lucide-react | ☐ | Same icons |
| **Dark Mode Toggle** | | | ☐ | |
| Toggle position | Top right | Top right | ☐ | Next to search |
| Toggle style | Sun/Moon | Sun/Moon | ☐ | Same icons |
| Transition | Smooth | Smooth | ☐ | ~300ms fade |

**Screenshot**: Capture header on desktop, tablet, mobile  
**Pass Criteria**: 100% visual match

---

### 1.2 Footer (All Pages)

**React URL**: Any page (scroll to bottom)  
**WordPress URL**: Any page (scroll to bottom)

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Newsletter Signup** | | | ☐ | |
| Heading | Present | Present | ☐ | "Bly op hoogte" |
| Form fields | Email | Email | ☐ | Single email input |
| Submit button | Red (#e01e12) | Red (#e01e12) | ☐ | Match color exactly |
| **Footer Navigation** | | | ☐ | |
| Columns | 4 | 4 | ☐ | About, Categories, Legal, Contact |
| Links | All work | All work | ☐ | Click each link |
| **Social Links** | | | ☐ | |
| Icons | 6 icons | 6 icons | ☐ | FB, IG, X, YT, LI, TT |
| Icon size | 24px | 24px | ☐ | Consistent size |
| Icon color | Grey | Grey | ☐ | #6b7280 |
| Hover color | Red | Red | ☐ | #e01e12 |
| **Copyright** | | | ☐ | |
| Text | "© 2026 rooi rose" | "© 2026 rooi rose" | ☐ | Current year |
| Font size | 14px | 14px | ☐ | Small text |

**Screenshot**: Capture footer on desktop  
**Pass Criteria**: 100% visual match

---

## Section 2: Homepage

**React URL**: `/` (homepage)  
**WordPress URL**: `/` (front-page.html)

### 2.1 Hero Slider

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Slider Container** | | | ☐ | |
| Aspect ratio | 3:2 | 3:2 | ☐ | Measure with DevTools |
| Height (desktop) | 500px | 500px | ☐ | Consistent height |
| **Slides** | | | ☐ | |
| Number of slides | 3-5 | 3-5 | ☐ | Same count |
| Image quality | High-res | High-res | ☐ | No pixelation |
| Overlay gradient | Dark bottom | Dark bottom | ☐ | `rgba(0,0,0,0.7)` |
| **Typography** | | | ☐ | |
| Headline font | Playfair Display SC | Playfair Display SC | ☐ | Use WhatFont |
| Headline size | 36px | 36px | ☐ | DevTools measurement |
| Headline color | White | White | ☐ | #ffffff |
| Excerpt font | Karla | Karla | ☐ | Use WhatFont |
| Excerpt size | 16px | 16px | ☐ | DevTools measurement |
| Excerpt color | White 90% | White 90% | ☐ | rgba(255,255,255,0.9) |
| **Controls** | | | ☐ | |
| Arrows | White | White | ☐ | Left/right arrows |
| Arrow size | 40px | 40px | ☐ | Consistent size |
| Dots | White circles | White circles | ☐ | Below slider |
| Dot size | 12px | 12px | ☐ | Measure diameter |
| **Auto-play** | | | ☐ | |
| Interval | 5 seconds | 5 seconds | ☐ | Time with stopwatch |
| Transition | Fade | Fade | ☐ | Smooth fade effect |
| Pause on hover | Yes | Yes | ☐ | Hover over slider |

**Screenshot**: Capture hero slider (all 3-5 slides)  
**Pass Criteria**: 100% visual match

---

### 2.2 News Flashes Section

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Container** | | | ☐ | |
| Background | Red (#e01e12) | Red (#e01e12) | ☐ | Match brand red |
| Padding | 16px | 16px | ☐ | Top/bottom padding |
| **Typography** | | | ☐ | |
| Label | "Nuusflitse" | "Nuusflitse" | ☐ | White text |
| Font | Karla | Karla | ☐ | Bold weight |
| **Scrolling Behavior** | | | ☐ | |
| Direction | Horizontal | Horizontal | ☐ | Scroll left/right |
| Speed | Smooth | Smooth | ☐ | Consistent speed |
| Touch swipe | Works | Works | ☐ | Test on mobile |

**Screenshot**: Capture news flashes section  
**Pass Criteria**: 100% visual match

---

### 2.3 Category Sections (10 Sections)

Test each of the 10 category sections individually:

**Categories to Test**:
1. Kos
2. Mode
3. Skoonheid
4. Gesondheid
5. Bekendes
6. Leefstyl
7. Jou lewe
8. Ontspanning
9. Wen (Competitions)
10. Rooiwarm wenners (Awards)

**Per Section Checklist**:

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Section Header** | | | ☐ | |
| Category title | Present | Present | ☐ | E.g., "Kos" |
| Font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| Font size | 30px | 30px | ☐ | x-large token |
| Font weight | 700 | 700 | ☐ | Bold |
| "View All" link | Present | Present | ☐ | Links to category page |
| **Article Grid** | | | ☐ | |
| Layout | 3 columns | 3 columns | ☐ | Desktop grid |
| Gap | 32px | 32px | ☐ | Space between cards |
| **Article Cards** | | | ☐ | |
| Image aspect | 3:2 | 3:2 | ☐ | Magazine standard |
| Image quality | High-res | High-res | ☐ | No blur |
| Lazy loading | Yes | Yes | ☐ | Below fold images |
| **Card Typography** | | | ☐ | |
| Headline font | Playfair Display SC | Playfair Display SC | ☐ | Serif |
| Headline size | 20px | 20px | ☐ | Medium token |
| Headline color | Black | Black | ☐ | High contrast |
| Excerpt font | Karla | Karla | ☐ | Sans-serif |
| Excerpt size | 14px | 14px | ☐ | Small token |
| Excerpt color | Grey | Grey | ☐ | #6b7280 |
| **Card Hover** | | | ☐ | |
| Hover effect | Lift + shadow | Lift + shadow | ☐ | Transform + shadow |
| Transition | 300ms | 300ms | ☐ | Smooth transition |

**Screenshot**: Capture all 10 category sections  
**Pass Criteria**: 100% visual match for each section

---

### 2.4 Responsive Behavior (Homepage)

**Test Breakpoints**: 1920px, 1440px, 1280px, 1024px, 768px, 375px

| Breakpoint | Element | React | WordPress | Status | Notes |
|:-----------|:--------|:------|:----------|:-------|:------|
| **1920px** (Desktop) | | | | | |
| | Hero slider | 500px height | 500px height | ☐ | Full width |
| | Category grid | 3 columns | 3 columns | ☐ | Side-by-side |
| **1280px** (Small Desktop) | | | | | |
| | Hero slider | 500px height | 500px height | ☐ | Full width |
| | Category grid | 3 columns | 3 columns | ☐ | Side-by-side |
| **1024px** (Tablet Landscape) | | | | | |
| | Hero slider | 400px height | 400px height | ☐ | Reduced height |
| | Category grid | 2 columns | 2 columns | ☐ | Two-up |
| **768px** (Tablet Portrait) | | | | | |
| | Hero slider | 400px height | 400px height | ☐ | Reduced height |
| | Category grid | 2 columns | 2 columns | ☐ | Two-up |
| **375px** (Mobile) | | | | | |
| | Hero slider | 300px height | 300px height | ☐ | Reduced height |
| | Category grid | 1 column | 1 column | ☐ | Stacked |
| | Touch swipe | Works | Works | ☐ | Test slider swipe |

**Screenshot**: Capture at all 6 breakpoints  
**Pass Criteria**: Responsive behavior matches perfectly

---

## Section 3: Category Pages

**React URL**: `/kos` (or any category)  
**WordPress URL**: `/category/kos/`

### 3.1 Category Hero

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Hero Container** | | | ☐ | |
| Background | Gradient | Gradient | ☐ | Subtle gradient |
| Padding | 64px | 64px | ☐ | x-large token |
| **Typography** | | | ☐ | |
| Category name | "Kos" | "Kos" | ☐ | H1 heading |
| Font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| Font size | 48px | 48px | ☐ | xxx-large token |
| Font weight | 700 | 700 | ☐ | Bold |
| Color | Black | Black | ☐ | High contrast |
| **Breadcrumbs** | | | ☐ | |
| Present | Yes | Yes | ☐ | Above category name |
| Format | Home / Kos | Home / Kos | ☐ | Slash separator |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 14px | 14px | ☐ | Small token |
| Color | Grey | Grey | ☐ | #6b7280 |

**Screenshot**: Capture category hero  
**Pass Criteria**: 100% visual match

---

### 3.2 Subcategory Filter (if applicable)

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Filter Bar** | | | ☐ | |
| Layout | Horizontal pills | Horizontal pills | ☐ | Inline buttons |
| Background | White | White | ☐ | Card background |
| Padding | 24px | 24px | ☐ | Comfortable spacing |
| **Filter Buttons** | | | ☐ | |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 14px | 14px | ☐ | Small token |
| Default state | Grey bg | Grey bg | ☐ | #f5f5f5 |
| Active state | Red bg | Red bg | ☐ | #e01e12 |
| Text color (default) | Black | Black | ☐ | #1a1a1a |
| Text color (active) | White | White | ☐ | #ffffff |
| **Behavior** | | | ☐ | |
| Click to filter | Works | Works | ☐ | Filters article grid |
| URL updates | Yes | Yes | ☐ | E.g., `/kos/resepte/` |

**Screenshot**: Capture filter bar (both states)  
**Pass Criteria**: 100% visual match

---

### 3.3 Article Grid (Masonry Layout)

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Grid Layout** | | | ☐ | |
| Columns (desktop) | 3 | 3 | ☐ | Three-column grid |
| Gap | 32px | 32px | ☐ | Consistent spacing |
| Masonry | Yes | Yes | ☐ | Variable heights |
| **Article Cards** | | | ☐ | |
| Image aspect | 3:2 | 3:2 | ☐ | Magazine standard |
| Headline font | Playfair Display SC | Playfair Display SC | ☐ | Serif |
| Headline size | 20px | 20px | ☐ | Medium token |
| Excerpt font | Karla | Karla | ☐ | Sans-serif |
| Excerpt size | 14px | 14px | ☐ | Small token |
| **Metadata** | | | ☐ | |
| Author | Present | Present | ☐ | "Deur [Name]" |
| Date | Present | Present | ☐ | "12 Maart 2026" |
| Reading time | Present | Present | ☐ | "5 minute leestyd" |
| Font size | 12px | 12px | ☐ | x-small token |
| Color | Grey | Grey | ☐ | #424242 (tagline grey) |
| **Hover Effects** | | | ☐ | |
| Image | Scale 105% | Scale 105% | ☐ | Slight zoom |
| Shadow | Lift | Lift | ☐ | Elevation increase |
| Transition | 300ms | 300ms | ☐ | Smooth ease |

**Screenshot**: Capture article grid (desktop + mobile)  
**Pass Criteria**: 100% visual match

---

### 3.4 Pagination

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Pagination Container** | | | ☐ | |
| Alignment | Center | Center | ☐ | Centered on page |
| Spacing | 64px top | 64px top | ☐ | x-large token |
| **Pagination Buttons** | | | ☐ | |
| Previous | "Vorige" | "Vorige" | ☐ | Afrikaans text |
| Next | "Volgende" | "Volgende" | ☐ | Afrikaans text |
| Numbers | 1, 2, 3... | 1, 2, 3... | ☐ | Page numbers |
| **Button Styles** | | | ☐ | |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 16px | 16px | ☐ | Base token |
| Default bg | White | White | ☐ | #ffffff |
| Active bg | Red | Red | ☐ | #e01e12 |
| Active text | White | White | ☐ | #ffffff |
| Border | Grey | Grey | ☐ | #e0e0e0 |
| **Behavior** | | | ☐ | |
| Clicking works | Yes | Yes | ☐ | Loads next page |
| URL updates | Yes | Yes | ☐ | E.g., `/kos/page/2/` |

**Screenshot**: Capture pagination  
**Pass Criteria**: 100% visual match

---

## Section 4: Single Post (Article)

**React URL**: `/article/[slug]`  
**WordPress URL**: `/[category]/[slug]/` (e.g., `/kos/melktert-resep/`)

### 4.1 Article Hero

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Featured Image** | | | ☐ | |
| Aspect ratio | 3:2 | 3:2 | ☐ | Magazine standard |
| Quality | High-res | High-res | ☐ | No pixelation |
| Loading | Eager | Eager | ☐ | Above fold priority |
| Fetchpriority | High | High | ☐ | LCP optimization |
| **Breadcrumbs** | | | ☐ | |
| Present | Yes | Yes | ☐ | Above headline |
| Format | Home / Kos / Article | Home / Kos / Article | ☐ | Full path |
| **Category Badge** | | | ☐ | |
| Present | Yes | Yes | ☐ | "Kos" badge |
| Background | Red | Red | ☐ | #e01e12 |
| Text color | White | White | ☐ | #ffffff |
| Font size | 12px | 12px | ☐ | x-small token |
| Text transform | Uppercase | Uppercase | ☐ | UPPERCASE |
| **Article Title** | | | ☐ | |
| Font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| Font size | 48px | 48px | ☐ | xxx-large token |
| Font weight | 700 | 700 | ☐ | Bold |
| Line height | 1.2 | 1.2 | ☐ | Tight leading |
| Color | Black | Black | ☐ | #1a1a1a |
| **Byline** | | | ☐ | |
| Format | "Deur [Author] \| [Date] \| [Time]" | Same | ☐ | Pipe separators |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 14px | 14px | ☐ | Small token |
| Color | Grey | Grey | ☐ | #424242 (tagline grey) |

**Screenshot**: Capture article hero  
**Pass Criteria**: 100% visual match

---

### 4.2 Article Content

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Content Well** | | | ☐ | |
| Max width | 680px | 680px | ☐ | Optimal line length |
| Alignment | Center | Center | ☐ | Centered on page |
| **Lead Paragraph** | | | ☐ | |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 20px | 20px | ☐ | Medium token (larger) |
| Line height | 1.6 | 1.6 | ☐ | Comfortable reading |
| Color | Black | Black | ☐ | #1a1a1a |
| **Body Paragraphs** | | | ☐ | |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 16px | 16px | ☐ | Base token |
| Line height | 1.7 | 1.7 | ☐ | Optimal readability |
| Color | Black | Black | ☐ | #1a1a1a |
| Paragraph spacing | 16px | 16px | ☐ | Small token |
| **Headings** | | | ☐ | |
| H2 font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| H2 size | 36px | 36px | ☐ | xx-large token |
| H3 font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| H3 size | 30px | 30px | ☐ | x-large token |
| H4 font | Karla | Karla | ☐ | Sans-serif |
| H4 size | 24px | 24px | ☐ | Large token |
| Heading color | Black | Black | ☐ | #1a1a1a |
| **Lists** | | | ☐ | |
| Bullet style | Disc | Disc | ☐ | Default bullets |
| Number style | Bold | Bold | ☐ | Bold numerals |
| List spacing | 8px | 8px | ☐ | x-small token |
| **Links** | | | ☐ | |
| Color | Red | Red | ☐ | #e01e12 |
| Underline | Yes | Yes | ☐ | Always underlined |
| Hover color | Darker red | Darker red | ☐ | #b51410 |

**Screenshot**: Capture article content (multiple sections)  
**Pass Criteria**: 100% visual match

---

### 4.3 Pull Quotes

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Container** | | | ☐ | |
| Border | 4px left | 4px left | ☐ | Left border only |
| Border color | Red | Red | ☐ | #e01e12 |
| Padding | 32px left | 32px left | ☐ | Medium token |
| Margin | 48px top/bottom | 48px top/bottom | ☐ | Large token |
| **Typography** | | | ☐ | |
| Font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| Font size | 30px | 30px | ☐ | x-large token |
| Font style | Italic | Italic | ☐ | Italicized |
| Line height | 1.4 | 1.4 | ☐ | Comfortable reading |
| Color | Red | Red | ☐ | #e01e12 |
| **Citation** | | | ☐ | |
| Format | "— [Author], [Role]" | Same | ☐ | Em dash prefix |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 14px | 14px | ☐ | Small token |
| Color | Grey | Grey | ☐ | #424242 |

**Screenshot**: Capture pull quote  
**Pass Criteria**: 100% visual match

---

### 4.4 In-Content Images

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Image** | | | ☐ | |
| Width | 100% | 100% | ☐ | Full content width |
| Max width | 680px | 680px | ☐ | Matches content well |
| Border radius | 8px | 8px | ☐ | Rounded corners |
| Loading | Lazy | Lazy | ☐ | Below fold |
| Alt text | Present | Present | ☐ | Descriptive alt |
| **Caption** | | | ☐ | |
| Font | Karla | Karla | ☐ | Sans-serif |
| Font size | 14px | 14px | ☐ | Small token |
| Color | Grey | Grey | ☐ | #424242 |
| Padding | 8px top | 8px top | ☐ | x-small token |
| Alignment | Center | Center | ☐ | Center aligned |

**Screenshot**: Capture in-content image + caption  
**Pass Criteria**: 100% visual match

---

### 4.5 Social Share Buttons

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Container** | | | ☐ | |
| Alignment | Center | Center | ☐ | Centered |
| Spacing | 48px top | 48px top | ☐ | Large token |
| **Buttons** | | | ☐ | |
| Networks | 5 icons | 5 icons | ☐ | FB, WA, X, Email, Copy |
| Icon size | 24px | 24px | ☐ | Consistent size |
| Button shape | Circle | Circle | ☐ | Circular buttons |
| Button size | 48px | 48px | ☐ | Diameter |
| Default bg | Grey | Grey | ☐ | #f5f5f5 |
| Hover bg | Network color | Network color | ☐ | FB blue, WA green, etc. |
| Icon color | Black | Black | ☐ | Default |
| Icon hover | White | White | ☐ | On hover |
| **Behavior** | | | ☐ | |
| Facebook share | Works | Works | ☐ | Opens share dialog |
| WhatsApp share | Works | Works | ☐ | Opens WhatsApp |
| X (Twitter) share | Works | Works | ☐ | Opens tweet composer |
| Email share | Works | Works | ☐ | Opens mailto: link |
| Copy link | Works | Works | ☐ | Copies URL to clipboard |

**Screenshot**: Capture social share buttons (both states)  
**Pass Criteria**: 100% visual match + functional

---

### 4.6 Related Articles

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Section Header** | | | ☐ | |
| Heading | "Verwante Artikels" | "Verwante Artikels" | ☐ | Afrikaans |
| Font | Playfair Display SC | Playfair Display SC | ☐ | Display serif |
| Font size | 30px | 30px | ☐ | x-large token |
| **Article Grid** | | | ☐ | |
| Layout | 3 columns | 3 columns | ☐ | Three-up |
| Gap | 32px | 32px | ☐ | Medium token |
| **Article Cards** | | | ☐ | |
| Image aspect | 3:2 | 3:2 | ☐ | Magazine standard |
| Headline font | Playfair Display SC | Playfair Display SC | ☐ | Serif |
| Headline size | 18px | 18px | ☐ | Slightly smaller |
| Excerpt | Optional | Optional | ☐ | May be omitted |
| **Logic** | | | ☐ | |
| Same category | Yes | Yes | ☐ | From same category |
| Exclude current | Yes | Yes | ☐ | Current post excluded |
| Count | 3 | 3 | ☐ | Exactly 3 articles |

**Screenshot**: Capture related articles section  
**Pass Criteria**: 100% visual match

---

## Section 5: Dark Mode

**Test All Pages**: Homepage, Category, Single Post

### 5.1 Color Inversions

| Element | Light Mode | Dark Mode | Status | Notes |
|:--------|:-----------|:----------|:-------|:------|
| **Backgrounds** | | | | |
| Page background | White (#ffffff) | Navy (#0f1923) | ☐ | Full inversion |
| Card background | Muted (#f5f5f5) | Navy Light (#162233) | ☐ | Subtle contrast |
| Header background | White | Navy | ☐ | Same as page |
| Footer background | White | Navy | ☐ | Same as page |
| **Text Colors** | | | | |
| Heading text | Black (#1a1a1a) | White (#f5f5f5) | ☐ | High contrast |
| Body text | Black (#1a1a1a) | White (#f5f5f5) | ☐ | High contrast |
| Metadata | Grey (#424242) | Light Grey (#b0b0b0) | ☐ | Readable grey |
| **Accent Colors** | | | | |
| Primary red | #e01e12 | #ff4d42 | ☐ | Brighter in dark |
| Links | #e01e12 | #ff4d42 | ☐ | Same as primary |
| Hover | #b51410 | #ff6961 | ☐ | Brighter in dark |
| **Borders** | | | | |
| Border color | #e0e0e0 | #1e3044 | ☐ | Subtle in dark |
| **Shadows** | | | | |
| Card shadow | rgba(0,0,0,0.1) | rgba(0,0,0,0.5) | ☐ | Stronger in dark |

**Screenshot**: Capture same pages in light + dark mode  
**Pass Criteria**: Perfect color inversion, readable text

---

### 5.2 Dark Mode Transitions

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Transition** | | | ☐ | |
| Duration | 300ms | 300ms | ☐ | Smooth transition |
| Easing | Ease | Ease | ☐ | Comfortable curve |
| All elements | Transition | Transition | ☐ | No jarring changes |
| **Toggle Persistence** | | | ☐ | |
| Saved preference | Yes | Yes | ☐ | LocalStorage |
| Persists reload | Yes | Yes | ☐ | Reload page, check |

**Test**: Toggle dark mode multiple times, verify smooth transitions  
**Pass Criteria**: Smooth, no flicker, preference persists

---

## Section 6: Responsive Design

**Test Breakpoints**: 1920px, 1440px, 1280px, 1024px, 768px, 375px

### 6.1 Layout Shifts

| Breakpoint | React Layout | WordPress Layout | Status | Notes |
|:-----------|:-------------|:-----------------|:-------|:------|
| **1920px** (Large Desktop) | | | | |
| Container width | 1280px | 1280px | ☐ | Max container |
| Grid columns | 3 | 3 | ☐ | Three-up |
| **1440px** (Desktop) | | | | |
| Container width | 1280px | 1280px | ☐ | Max container |
| Grid columns | 3 | 3 | ☐ | Three-up |
| **1280px** (Small Desktop) | | | | |
| Container width | 100% - padding | 100% - padding | ☐ | Responsive |
| Grid columns | 3 | 3 | ☐ | Three-up |
| **1024px** (Tablet Landscape) | | | | |
| Container width | 100% - padding | 100% - padding | ☐ | Responsive |
| Grid columns | 2 | 2 | ☐ | Two-up |
| **768px** (Tablet Portrait) | | | | |
| Container width | 100% - padding | 100% - padding | ☐ | Responsive |
| Grid columns | 2 | 2 | ☐ | Two-up |
| Mobile menu | Hamburger | Hamburger | ☐ | Icon appears |
| **375px** (Mobile) | | | | |
| Container width | 100% - padding | 100% - padding | ☐ | Responsive |
| Grid columns | 1 | 1 | ☐ | Stacked |
| Mobile menu | Hamburger | Hamburger | ☐ | Icon appears |

**Screenshot**: Capture at all 6 breakpoints  
**Pass Criteria**: Perfect responsive behavior

---

### 6.2 Touch Interactions (Mobile)

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Hero Slider** | | | ☐ | |
| Swipe left/right | Works | Works | ☐ | Test on device |
| Smooth transition | Yes | Yes | ☐ | No lag |
| **Mobile Menu** | | | ☐ | |
| Hamburger tap | Opens | Opens | ☐ | Full-screen overlay |
| Close button tap | Closes | Closes | ☐ | Overlay closes |
| **Links & Buttons** | | | ☐ | |
| Touch target | ≥44px | ≥44px | ☐ | WCAG minimum |
| Tap feedback | Visual | Visual | ☐ | Color/opacity change |

**Test on Devices**: iPhone, Android phone, iPad  
**Pass Criteria**: All touch interactions work smoothly

---

## Section 7: Performance

### 7.1 Page Load Speed

| Metric | React | WordPress | Pass? | Notes |
|:-------|:------|:----------|:------|:------|
| **PageSpeed Insights** | | | | |
| Mobile score | 90+ | 90+ | ☐ | Google PSI |
| Desktop score | 95+ | 95+ | ☐ | Google PSI |
| **Core Web Vitals** | | | | |
| LCP (Largest Contentful Paint) | <2.5s | <2.5s | ☐ | Hero image |
| FID (First Input Delay) | <100ms | <100ms | ☐ | Interactivity |
| CLS (Cumulative Layout Shift) | <0.1 | <0.1 | ☐ | No shifts |
| **GTmetrix** | | | | |
| Grade | A | A | ☐ | GTmetrix test |
| Performance score | 90+ | 90+ | ☐ | Percentage |
| Fully loaded time | <3s | <3s | ☐ | Total load time |

**Test URLs**: Homepage, Category page, Single post  
**Pass Criteria**: All metrics meet targets

---

### 7.2 Image Optimization

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Above Fold** | | | ☐ | |
| Hero image loading | Eager | Eager | ☐ | `loading="eager"` |
| Hero fetchpriority | High | High | ☐ | `fetchpriority="high"` |
| **Below Fold** | | | ☐ | |
| Lazy loading | Yes | Yes | ☐ | `loading="lazy"` |
| Decoding | Async | Async | ☐ | `decoding="async"` |
| **Image Formats** | | | ☐ | |
| WebP support | Yes | Yes | ☐ | Modern format |
| JPEG fallback | Yes | Yes | ☐ | Browsers without WebP |
| **Responsive Images** | | | ☐ | |
| srcset present | Yes | Yes | ☐ | Multiple sizes |
| sizes attribute | Yes | Yes | ☐ | Viewport hints |

**Test**: Check DevTools Network tab, verify lazy loading  
**Pass Criteria**: Optimized images, lazy loading works

---

## Section 8: Accessibility

### 8.1 WCAG AA Compliance

| Criterion | React | WordPress | Status | Notes |
|:----------|:------|:----------|:-------|:------|
| **Color Contrast** | | | | |
| Body text | 4.5:1+ | 4.5:1+ | ☐ | Black on white |
| Heading text | 4.5:1+ | 4.5:1+ | ☐ | Black on white |
| Links | 4.5:1+ | 4.5:1+ | ☐ | Red on white |
| Buttons | 4.5:1+ | 4.5:1+ | ☐ | White on red |
| **Alt Text** | | | | |
| All images | Present | Present | ☐ | Descriptive alt |
| Decorative images | `alt=""` | `alt=""` | ☐ | Empty alt |
| **Heading Hierarchy** | | | | |
| H1 once per page | Yes | Yes | ☐ | Only one H1 |
| No skipped levels | Yes | Yes | ☐ | H1→H2→H3 |
| **Keyboard Navigation** | | | | |
| Tab order | Logical | Logical | ☐ | Top to bottom |
| Focus indicators | Visible | Visible | ☐ | Red ring |
| Skip links | Present | Present | ☐ | "Skip to content" |
| **ARIA Labels** | | | | |
| Navigation | `aria-label` | `aria-label` | ☐ | "Main navigation" |
| Search | `aria-label` | `aria-label` | ☐ | "Search" |
| Buttons | Descriptive | Descriptive | ☐ | Not "Click here" |

**Test Tools**: axe DevTools, WAVE  
**Pass Criteria**: 0 critical errors

---

### 8.2 Screen Reader Testing

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Headings** | | | ☐ | |
| Announce correctly | Yes | Yes | ☐ | "Heading level 1" |
| Navigation via headings | Works | Works | ☐ | H key in NVDA |
| **Links** | | | ☐ | |
| Descriptive text | Yes | Yes | ☐ | Not "click here" |
| Announce URL | Yes | Yes | ☐ | Read full link |
| **Images** | | | ☐ | |
| Alt text read | Yes | Yes | ☐ | Descriptive alt |
| Decorative skipped | Yes | Yes | ☐ | Empty alt ignored |
| **Forms** | | | ☐ | |
| Labels associated | Yes | Yes | ☐ | `<label for="...">` |
| Error messages | Read | Read | ☐ | Announced |

**Test Tool**: NVDA (Windows) or VoiceOver (Mac)  
**Pass Criteria**: All content accessible via screen reader

---

## Section 9: Browser Compatibility

### 9.1 Cross-Browser Testing

**Test Browsers**: Chrome, Firefox, Safari, Edge (latest versions)

| Browser | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| **Chrome** (latest) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Fonts | Correct | Correct | ☐ | Playfair + Karla |
| Dark mode | Works | Works | ☐ | Toggle functional |
| **Firefox** (latest) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Fonts | Correct | Correct | ☐ | Playfair + Karla |
| Dark mode | Works | Works | ☐ | Toggle functional |
| **Safari** (latest) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Fonts | Correct | Correct | ☐ | Playfair + Karla |
| Dark mode | Works | Works | ☐ | Toggle functional |
| **Edge** (latest) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Fonts | Correct | Correct | ☐ | Playfair + Karla |
| Dark mode | Works | Works | ☐ | Toggle functional |
| **Mobile Safari** (iOS) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Touch | Works | Works | ☐ | Swipe, tap |
| **Chrome Mobile** (Android) | | | | |
| Layout | Perfect | Perfect | ☐ | No issues |
| Touch | Works | Works | ☐ | Swipe, tap |

**Screenshot**: Capture in all 6 browsers  
**Pass Criteria**: Consistent appearance across browsers

---

## Section 10: Functional Testing

### 10.1 Forms

**Test Newsletter Signup**:

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| Email validation | Works | Works | ☐ | Invalid email error |
| Required field | Works | Works | ☐ | Empty field error |
| Success message | Shows | Shows | ☐ | "Dankie!" message |
| Email sent | N/A | Yes | ☐ | Check inbox |
| Database entry | N/A | Yes | ☐ | Check WP admin |

**Test Contact Form**:

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| All fields validate | Works | Works | ☐ | Required fields |
| Submit button | Works | Works | ☐ | Form submits |
| Notification email | N/A | Received | ☐ | Check inbox |
| Success message | Shows | Shows | ☐ | "Dankie!" message |

**Pass Criteria**: All forms functional, emails sent

---

### 10.2 Search

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| Search icon | Present | Present | ☐ | Header |
| Search box opens | Yes | Yes | ☐ | Click icon |
| Typing works | Yes | Yes | ☐ | Input field |
| Results display | Yes | Yes | ☐ | Results page |
| Results accurate | Yes | Yes | ☐ | Matches search term |
| No results message | Shows | Shows | ☐ | When 0 results |

**Test Queries**: "melktert", "mode", "xyz123" (no results)  
**Pass Criteria**: Search fully functional

---

### 10.3 Comments

| Element | React | WordPress | Status | Notes |
|:--------|:------|:----------|:-------|:------|
| Comment form | N/A | Present | ☐ | Below article |
| Name field | N/A | Required | ☐ | Validation |
| Email field | N/A | Required | ☐ | Validation |
| Comment field | N/A | Required | ☐ | Validation |
| Submit button | N/A | Works | ☐ | Form submits |
| Moderation queue | N/A | Works | ☐ | Appears in WP admin |
| Approved comment | N/A | Displays | ☐ | Shows on page |

**Pass Criteria**: Comments functional, moderation works

---

## Final Sign-Off

**QA Tester**: ___________________________  
**Date**: ___________________________

**Sign-Off Criteria** (all must be ☑ to approve):

- [ ] **Visual Match**: 100% visual parity between React and WordPress
- [ ] **Typography**: Fonts, sizes, weights match exactly
- [ ] **Colors**: Brand colors accurate (#e01e12, #424242)
- [ ] **Responsive**: Perfect behavior at all 6 breakpoints
- [ ] **Dark Mode**: Smooth transitions, readable text
- [ ] **Performance**: PageSpeed 90+ mobile, 95+ desktop
- [ ] **Accessibility**: WCAG AA compliant (axe DevTools 0 errors)
- [ ] **Browser Compat**: Works in Chrome, Firefox, Safari, Edge
- [ ] **Functional**: Forms, search, comments all work
- [ ] **SEO**: Meta tags, schema markup, sitemap present

**Overall Status**: ☐ **APPROVED** | ☐ **NEEDS REVISION**

**Revision Notes** (if needed):
```
[List any issues found and required fixes]
```

---

**Last Updated**: 2026-03-12  
**Version**: 1.0  
**Maintained By**: QA Team

