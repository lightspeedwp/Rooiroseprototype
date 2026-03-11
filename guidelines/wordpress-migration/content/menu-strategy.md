# Menu & Widget Strategy

**Status:** Draft  
**Context:** Recreating the React navigation structure in WordPress Menus and Widgets.

## 1. Registered Menus

We will register the following locations in `functions.php`:

```php
register_nav_menus([
    'header_top' => 'Header Top Bar (Secondary)',
    'header_main' => 'Header Main (Primary)',
    'footer_col_1' => 'Footer Column 1 (Categories)',
    'footer_col_2' => 'Footer Column 2 (Content)',
    'footer_col_3' => 'Footer Column 3 (Services)',
    'footer_col_4' => 'Footer Column 4 (Company)',
    'footer_legal' => 'Footer Legal Links',
    'mobile_main' => 'Mobile Main Menu',
    'mobile_secondary' => 'Mobile Secondary Menu'
]);
```

## 2. Menu Structure Mapping

### 2.1 Header Main (`header_main`)
*   Tuis (`/`)
*   Nuus (`/nuus`)
*   Sport (`/sport`)
*   Dink (`/dink`)
*   Sake (`/sake`)
*   Leefstyl (`/leefstyl`)
*   Gebeure (`/gebeure`) - *Custom Link to Event Archive*
*   Multimedia (`/multimedia`)
*   Doodsberrigte (`/doodsberrigte`)
*   E-uitgawes (`/e-uitgawes`)

### 2.2 Header Top (`header_top`)
*   Oor ons (`/oor-ons`)
*   Ons span (`/oor-ons/redaksie`)
*   Beleid (`/beleid`)
*   Kontak (`/kontak`)
*   Adverteer (`/adverteer`)
*   Algemene vrae (`/vrae`)
*   Nuusbrief (`/nuusbrief-inteken`)

### 2.3 Footer Columns
*   **Col 1:** Matches Category Links.
*   **Col 2:** E-uitgawes, Gebeure, Multimedia, Doodsberrigte, Nuusbrief-argief, Stuur nuus in.
*   **Col 3:** Weer, Verkeer, Inteken, Nuusbrief, My rekening, Registreer.
*   **Col 4:** Oor ons, Ons span, Kontak ons, Adverteer, Algemene vrae, Inhoudsopgawe.

---

## 3. Widget Areas (Sidebars)

We will register dynamic sidebars for ad placements and utility widgets.

### 3.1 `sidebar-article` (Single Post)
*   **Ad:** Medium Rectangle (Top)
*   **Widget:** "Most Read" (Popular Posts)
*   **Ad:** Skyscraper (Sticky)

### 3.2 `sidebar-archive` (Category Pages)
*   **Ad:** Medium Rectangle
*   **Widget:** Newsletter Sign up (Custom Block)
*   **Widget:** Poll (Custom Block)

### 3.3 `footer-branding`
*   Logo
*   Description ("Die Papier is 'n weeklikse...")
*   Social Icons Block
*   Accreditation Logos (Press Council, IAB, etc.)

---

## 4. Migration Execution

1.  **Manual Creation:** Since menus rely on Page/Term IDs which change during import, it is safer to recreate these manually or use a specific WP-CLI script that looks up IDs by slug.
2.  **WP-CLI Snippet:**
    ```bash
    # Example: Create Top Menu
    wp menu create "Header Top"
    wp menu item add-custom "Header Top" "Oor ons" /oor-ons
    wp menu location assign "Header Top" header_top
    ```
