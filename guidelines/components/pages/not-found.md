# 404 Not Found Page

**Last updated**: 2026-02-25
**Category**: Page
**React source**: `/src/app/pages/NotFound.tsx`
**WordPress target**: Template — `/wordpress-export/themes/die-papier-theme/templates/404.html`

---

## 1. Purpose

Custom 404 error page shown for non-existent routes. Features a branded "404" display, descriptive Afrikaans text, three action buttons (Home, Search, Contact), and a popular pages grid.

## 2. Visual Structure

```
┌─ Centered layout (min-h-screen, bg-gray-50)
│  ├─ H1 "404" (text-8xl, serif, text-primary)
│  ├─ H2 title: "Jammer! Bladsy nie gevind nie."
│  ├─ P description
│  ├─ Buttons: "Gaan na tuisblad" (primary) + "Soek" (outline) + "Kontak ons" (outline)
│  └─ Popular pages card (bg-white, shadow-md)
│     ├─ H3 "Gewilde bladsye"
│     └─ Grid (2→3 col): Nuus, Sport, E-uitgawes, Kompetisies, Kontak
```

## 3. Data Sources

- **Content**: `NOT_FOUND_CONTENT` from `/src/app/data/notFound.ts`
  - `code`: "404"
  - `title`: "Jammer! Bladsy nie gevind nie."
  - `description`: "Die bladsy bestaan nie, of is verskuif. Probeer een van die skakels hieronder."
  - `buttons`: home, search, contact
  - `popularPages`: title + 5 links (Nuus, Sport, E-uitgawes, Kompetisies, Kontak)

## 4. WordPress Mapping

Template — `404.html`. Uses `core/heading`, `core/paragraph`, `core/buttons`, and `core/navigation` for popular links.

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/404.html`
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/page-404.php`

## 5. Dependencies

- **Components**: SEO, Button (from ShadCN)
- **Data**: NOT_FOUND_CONTENT
- **Icons**: Home, Search, Phone (lucide-react)
- **Routing**: Link (react-router)

## 6. Known Exemptions

None.
