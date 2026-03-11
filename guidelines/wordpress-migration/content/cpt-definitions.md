# Custom Post Type Definitions

**Status:** Draft  
**Context:** Detailed field specifications for all Custom Post Types (CPTs) to be registered in the WordPress Theme/Plugin.

## 1. Event (`dp_event`)
*   **Description:** Calendar events for "Gebeure" section.
*   **Supports:** `title`, `editor`, `excerpt`, `thumbnail`, `custom-fields`.
*   **Taxonomies:** `dp_event_category`.
*   **Meta Fields (ACF):**
    *   `event_date` (Date Picker, Ymd) - *Key for sorting*
    *   `event_time` (Time Picker or Text)
    *   `event_location` (Text / Google Maps)
    *   `event_ticket_url` (URL)

## 2. Competition (`dp_competition`)
*   **Description:** Reader competitions and giveaways.
*   **Supports:** `title`, `editor`, `thumbnail`.
*   **Taxonomies:** `dp_competition_category`.
*   **Meta Fields (ACF):**
    *   `prize` (Text) - "R5000 Kontant"
    *   `prize_value` (Text) - "R 5,000"
    *   `open_date` (Date Picker)
    *   `closing_date` (Date Picker)
    *   `winner_announcement_date` (Date Picker)
    *   `sponsor_name` (Text) - *Legacy/Simple*
    *   `sponsor_id` (Post Object -> `dp_sponsor`) - *Advanced Relationship*
    *   `entry_form_id` (Number) - Gravity Forms ID
    *   `status` (Select: Active, Closed, Winner Announced) - *Or derive from dates*

## 3. Sponsor (`dp_sponsor`)
*   **Description:** Profiles for advertisers and partners.
*   **Supports:** `title`, `excerpt` (Description), `thumbnail` (Logo).
*   **Meta Fields (ACF):**
    *   `website_url` (URL)
    *   `contact_email` (Email)
    *   `primary_color` (Color Picker) - For branding banners

## 4. E-Edition (`dp_eedition`)
*   **Description:** Digital PDF replicas of the printed newspaper.
*   **Supports:** `title`, `editor` (Description), `thumbnail` (Cover Image).
*   **Meta Fields (ACF):**
    *   `publication_date` (Date Picker)
    *   `pdf_file` (File Upload)
    *   `edition_number` (Number)
    *   `page_count` (Number)
    *   `linked_product_id` (Number) - WooCommerce Product ID for single purchase

## 5. Obituary (`dp_obituary`)
*   **Description:** Death notices and tributes.
*   **Supports:** `title` (Name), `editor` (Biography), `excerpt`, `thumbnail`.
*   **Taxonomies:** `dp_obituary_category` (Optional: Town/Church).
*   **Meta Fields (ACF):**
    *   `date_of_birth` (Date Picker)
    *   `date_of_death` (Date Picker)
    *   `location` (Text)
    *   `survived_by` (Textarea)
    *   `funeral_details` (Textarea)

---

## 6. Standard Post Extensions
*   **Post Type:** `post`
*   **Additional Meta:**
    *   `_read_time` (Number) - Calculated
    *   `_is_featured` (Boolean/Checkbox)
    *   `_is_breaking` (Boolean/Checkbox)
    *   `_sponsor_id` (Post Object -> `dp_sponsor`) - For Sponsored Articles
