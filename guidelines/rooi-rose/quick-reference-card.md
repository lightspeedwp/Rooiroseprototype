# Quick Reference Card — rooi rose

**Category**: Operations  
**Last Updated**: 2026-03-12  
**Purpose**: Fast reference for common tasks  
**Format**: Print-friendly, 2-page cheat sheet

---

## WordPress Admin Quick Links

| Task | URL | Shortcut |
|:-----|:----|:---------|
| **Dashboard** | `/wp-admin/` | — |
| **Add New Post** | `/wp-admin/post-new.php` | — |
| **All Posts** | `/wp-admin/edit.php` | — |
| **Categories** | `/wp-admin/edit-tags.php?taxonomy=category` | — |
| **Media Library** | `/wp-admin/upload.php` | — |
| **Appearance → Editor** | `/wp-admin/site-editor.php` | — |
| **Settings** | `/wp-admin/options-general.php` | — |

---

## Publishing Checklist (Standard Article)

**Before Publishing**:
- [ ] Headline 50-60 characters
- [ ] Featured image (3:2, min 1200x800px)
- [ ] Category assigned (1-2 max)
- [ ] Tags added (3-5)
- [ ] Excerpt written (150-160 chars)
- [ ] Alt text on all images
- [ ] Internal links (3-5)
- [ ] Yoast SEO green/orange
- [ ] Preview on mobile + desktop

**Keyboard Shortcuts**:
- `Ctrl/Cmd + B` — Bold
- `Ctrl/Cmd + I` — Italic
- `Ctrl/Cmd + K` — Insert link
- `Ctrl/Cmd + S` — Save draft
- `/` — Quick insert block

---

## Content Types

### 1. Standard Article

**Structure**:
1. H1 Headline (auto)
2. Featured image (3:2)
3. Lead paragraph (20px, medium)
4. Body paragraphs (16px)
5. H2 sections
6. Pull quotes (1-2)
7. Images with captions
8. Social share buttons

**Category**: Choose from 10 main categories  
**Reading Time**: 5-10 minutes ideal  
**Word Count**: 800-1,500 words

---

### 2. Recipe

**Structure**:
1. Recipe title
2. Headnote (2-3 sentences)
3. Recipe meta (prep, cook, servings)
4. Ingredients (bulleted)
5. Instructions (numbered)
6. Chef's notes
7. Nutritional info (optional)

**ACF Fields**:
- Prep Time: `20 minute`
- Cook Time: `45 minute`
- Servings: `8-10`
- Difficulty: Maklik/Medium/Moeilik

---

### 3. Competition

**Structure**:
1. Competition title
2. Prize description
3. Entry instructions
4. Gravity Form
5. Rules & T&Cs (FAQ block)
6. Closing date + countdown

**ACF Fields**:
- Prize: Text description
- Closing Date: Date picker
- Status: Active/Closed/Winner Announced
- Form ID: Gravity Forms ID

---

## Typography Scale

| Element | Font | Size | Weight | Use Case |
|:--------|:-----|:-----|:-------|:---------|
| **H1** | Playfair Display SC | 48px | 700 | Article title |
| **H2** | Playfair Display SC | 36px | 700 | Major section |
| **H3** | Playfair Display SC | 30px | 700 | Subsection |
| **H4** | Karla | 24px | 600 | Minor heading |
| **H5** | Karla | 20px | 600 | Card heading |
| **Lead** | Karla | 20px | 400 | First paragraph |
| **Body** | Karla | 16px | 400 | Body text |
| **Small** | Karla | 14px | 400 | Captions, meta |
| **Pull Quote** | Playfair Display SC | 30px | 400 italic | Highlighted quote |

---

## Color Palette

| Color | Hex | RGB | Use |
|:------|:----|:----|:----|
| **rooi rose Red** | `#e01e12` | 224, 30, 18 | Primary, links, CTAs |
| **Tagline Grey** | `#424242` | 66, 66, 66 | Metadata, captions |
| **Navy** | `#142135` | 20, 33, 53 | Dark mode background |
| **White** | `#ffffff` | 255, 255, 255 | Page background |
| **Black** | `#1a1a1a` | 26, 26, 26 | Body text |
| **Muted Grey** | `#f5f5f5` | 245, 245, 245 | Card backgrounds |
| **Border** | `#e0e0e0` | 224, 224, 224 | Borders, dividers |

---

## Image Specifications

### Featured Images

- **Aspect Ratio**: 3:2 (1200x800px minimum)
- **Format**: JPEG or WebP
- **File Size**: <500KB (optimized)
- **Alt Text**: Required (10-15 words)

### In-Content Images

- **Max Width**: 680px (content well width)
- **Border Radius**: 8px (rounded corners)
- **Loading**: Lazy (below fold)
- **Caption**: Optional (Karla, 14px, grey)

### Image Optimization Tools

- **TinyPNG**: https://tinypng.com (compress)
- **Squoosh**: https://squoosh.app (compress + format)
- **Canva**: Design + resize
- **Photoshop**: Advanced editing

---

## SEO Best Practices

### Headline (Title Tag)

- **Length**: 50-60 characters
- **Keyword**: In first 5 words
- **Format**: Actionable + specific

**Good Examples**:
```
✅ 10 Maklike Weekaandete onder R100
✅ Hoe om die Perfekte Melktert te Bak
✅ 5 Lente-neigings om Nou te Dra
```

**Avoid**:
```
❌ Weekaandete (too vague)
❌ Sommige wenke vir kos (too long)
❌ Klik hier vir resepte (clickbait)
```

---

### Meta Description

- **Length**: 150-160 characters
- **Keyword**: Include primary keyword
- **CTA**: Encourage click

**Example**:
```
Ontdek 10 maklike weekaandete wat minder as R100 kos. 
Van pasta tot roerbak-geregte — vinnige resepte vir 
besige gesinne.
```

---

### Alt Text

- **Format**: Descriptive sentence (10-15 words)
- **Keyword**: Include naturally (don't force)

**Examples**:
```
✅ Sappige hoenderborsies met vars kruie op 'n swart bord
✅ Vrou wat groente sny in 'n moderne kombuis
✅ Melktert sny met kaneel op 'n vintage bord

❌ food (too vague)
❌ IMG_1234 (not descriptive)
❌ chicken (missing context)
```

---

## Categories & Tags

### 10 Main Categories

1. **Kos** — Food, recipes, baking
2. **Mode** — Fashion, trends, shopping
3. **Skoonheid** — Beauty, skincare, makeup
4. **Gesondheid** — Health, fitness, wellness
5. **Bekendes** — Celebrities, entertainment
6. **Leefstyl** — Lifestyle, home, garden
7. **Jou lewe** — Relationships, parenting, finance
8. **Ontspanning** — Entertainment, books, movies
9. **Wen** — Competitions
10. **Rooiwarm wenners** — Award winners

### Tagging Guidelines

- **Count**: 3-5 tags per article
- **Format**: Lowercase, no spaces (use hyphens)
- **Examples**: `melktert`, `resepte`, `bak`, `suidafrikaans`
- **Avoid**: Over-tagging (>10 tags), duplicate tags

---

## Common Blocks

### Text Blocks

- **Paragraph**: Default body text
- **Heading**: H2, H3, H4 (choose level)
- **List**: Bulleted or numbered
- **Quote**: Pull quote style variation

### Media Blocks

- **Image**: Single image + caption
- **Gallery**: Multiple images (grid)
- **Cover**: Hero image with overlay text

### Design Blocks

- **Spacer**: Add vertical space
- **Separator**: Horizontal line divider
- **Columns**: Multi-column layout

### Embed Blocks

- **YouTube**: Embed video
- **Instagram**: Embed post
- **Twitter**: Embed tweet

---

## Afrikaans Style Guide

### Capitalization

- **Sentence case**: Headings (e.g., "Die beste resepte vir winter")
- **Proper nouns**: Kaapstad, Karoo, Suid-Afrika
- **Seasons**: Lowercase (winter, lente, somer, herfs)
- **Months/Days**: Uppercase (Januarie, Maandag)

### Punctuation

- **Oxford comma**: Yes (kos, mode, en skoonheid)
- **Quotation marks**: Double quotes (" ")
- **Em dash**: — (for emphasis)
- **Ellipsis**: ... (three dots)

### Numbers

- **Words (1-10)**: twee eiers, vyf minute, sewe dae
- **Numerals (11+)**: 15 minute, 250g, 180°C
- **Measurements**: Always numerals (2 koppies, 1 teelepel)

### Dates & Times

- **Date format**: DD Maand YYYY (12 Maart 2026)
- **Time format**: 24-hour (14:30, not 2:30 PM)

---

## Social Media

### Profile URLs

- **Facebook**: https://www.facebook.com/rooirosetydskrif
- **Instagram**: https://www.instagram.com/rooirosetydskrif
- **X (Twitter)**: https://x.com/rooirosetydskrif
- **YouTube**: https://www.youtube.com/@rooirosetydskrif
- **LinkedIn**: https://www.linkedin.com/company/rooi-rose
- **TikTok**: https://www.tiktok.com/@rooirosetydskrif
- **Email**: redaksie@rooirose.co.za

### Hashtags

**Primary**: `#rooirose` `#rooirosetydskrif`  
**Category**: `#kos` `#mode` `#skoonheid` `#gesondheid` `#leefstyl`  
**Content**: `#resepte` `#afrikaans` `#suidafrikaans` `#tydskrif`

### Posting Guidelines

- **Frequency**: 3-5 posts per day (across all platforms)
- **Best Times**: 6-9 AM, 12-1 PM, 7-9 PM (SA time)
- **Image Size**: 1200x630px (Facebook/X), 1080x1080px (Instagram)
- **Tone**: Warm, approachable, conversational

---

## Forms

### Gravity Forms IDs

1. **Newsletter Signup** — ID: 1
2. **Contact Form** — ID: 2
3. **Story Submission** — ID: 3
4. **Competition Entry** — ID: 4
5. **Tip Submission** — ID: 5

### Inserting Forms

1. Click **+** → Search "Gravity Forms"
2. Select form from dropdown
3. Verify form displays correctly
4. Test submission

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|:------|:---------|
| **Can't upload image** | Check file size (<10MB), format (JPEG/PNG/WebP) |
| **SEO score red** | Add keyword to first paragraph, reduce sentence length |
| **Preview not working** | Clear browser cache, try incognito mode |
| **Block won't insert** | Refresh page, check for plugin conflicts |
| **Dark mode broken** | Check CSS variables in theme.json |

### Who to Contact

| Issue Type | Contact | Email |
|:-----------|:--------|:------|
| **Content questions** | Editor-in-Chief | redaksie@rooirose.co.za |
| **Technical issues** | Tech Support | hulp@rooirose.co.za |
| **Account/login** | Admin | admin@rooirose.co.za |

---

## Performance Checklist

### Before Publishing

- [ ] Compress all images (<500KB each)
- [ ] Add alt text to all images
- [ ] Use lazy loading (below fold)
- [ ] Add internal links (3-5)
- [ ] Check Yoast SEO score (green/orange)
- [ ] Preview on mobile

### After Publishing

- [ ] Share on social media (within 30 min)
- [ ] Add to newsletter (if applicable)
- [ ] Monitor comments (respond within 24 hours)
- [ ] Check analytics (traffic, engagement)

---

## Emergency Contacts

### During Business Hours (9 AM - 5 PM)

- **Email**: redaksie@rooirose.co.za
- **Phone**: [TBD]

### After Hours (Urgent Only)

- **On-Call Tech**: [TBD]
- **On-Call Editor**: [TBD]

---

## Useful WordPress Shortcuts

| Action | Shortcut |
|:-------|:---------|
| **Save draft** | `Ctrl/Cmd + S` |
| **Bold text** | `Ctrl/Cmd + B` |
| **Italic text** | `Ctrl/Cmd + I` |
| **Insert link** | `Ctrl/Cmd + K` |
| **Insert block** | `/` (slash) |
| **Duplicate block** | `Ctrl/Cmd + Shift + D` |
| **Delete block** | `Shift + Alt + Z` |
| **Undo** | `Ctrl/Cmd + Z` |
| **Redo** | `Ctrl/Cmd + Shift + Z` |

---

## Block Editor Slash Commands

Type `/` in the editor to quick-insert blocks:

- `/heading` — Insert heading
- `/image` — Insert image
- `/list` — Insert list
- `/quote` — Insert quote
- `/separator` — Insert separator
- `/spacer` — Insert spacer
- `/columns` — Insert columns
- `/gallery` — Insert gallery

---

## Print This Card

**Format**: 2-page reference  
**Paper**: A4 or Letter  
**Orientation**: Portrait  
**Color**: Optional (works in B&W)

**Tip**: Laminate for durability, keep near desk

---

**Last Updated**: 2026-03-12  
**Version**: 1.0  
**Maintained By**: rooi rose Editorial Team

