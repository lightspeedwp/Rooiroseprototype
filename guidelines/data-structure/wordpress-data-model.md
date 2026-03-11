# WordPress Data Model

**Last updated**: 2026-03-02
**Version**: 1.0

This document outlines the custom data structures required for the *Die Papier* WordPress migration.

## Custom Post Types (CPT)

### 1. Sponsors (`dp_sponsor`)
*   **Purpose:** Manage sponsorship partners and their associated metadata.
*   **Supports:** Title, Thumbnail (Logo).
*   **Taxonomies:** `dp_sponsor_tier`.
*   **Meta Fields:**
    *   `website_url` (URL)
    *   `active_until` (Date)
    *   `contact_email` (Email)

### 2. Competitions (`dp_competition`)
*   **Purpose:** Manage reader competitions.
*   **Supports:** Title, Editor (Description), Thumbnail.
*   **Meta Fields:**
    *   `closing_date` (DateTime)
    *   `entry_form_url` (URL)
    *   `terms_url` (URL, optional)
    *   `status` (Select: Open, Closed, Winner Announced)

### 3. Events (`dp_event`)
*   **Purpose:** Community events calendar.
*   **Supports:** Title, Editor, Thumbnail.
*   **Taxonomies:** `dp_event_category`.
*   **Meta Fields:**
    *   `event_date` (DateTime)
    *   `location_name` (Text)
    *   `location_address` (Text)
    *   `price` (Number)
    *   `is_free` (Boolean)
    *   `organiser_name` (Text)
    *   `booking_url` (URL)

### 4. Obituaries (`dp_obituary`)
*   **Purpose:** Death notices and memorials.
*   **Supports:** Title (Name), Editor (Life story), Thumbnail (Photo).
*   **Meta Fields:**
    *   `date_of_birth` (Date)
    *   `date_of_death` (Date)
    *   `funeral_service` (Text/HTML)
    *   `next_of_kin` (Text, optional)

### 5. Multimedia (`dp_multimedia`)
*   **Purpose:** Video and Gallery content.
*   **Supports:** Title, Editor (Description), Thumbnail.
*   **Taxonomies:** `dp_multimedia_category`.
*   **Meta Fields:**
    *   `media_type` (Select: Video, Gallery, Podcast)
    *   `media_url` (URL - YouTube/Vimeo/SoundCloud)
    *   `duration` (Text, e.g. "12:30")

### 6. E-Editions (`dp_edition`)
*   **Purpose:** Digital PDF editions of the newspaper.
*   **Supports:** Title (Issue Date/Number), Thumbnail (Cover).
*   **Taxonomies:** `dp_edition_type`.
*   **Meta Fields:**
    *   `pdf_url` (File URL)
    *   `publication_date` (Date)
    *   `is_free` (Boolean)

### 7. FAQs (`dp_faq`)
*   **Purpose:** Reusable Q&A pairs for specific pages.
*   **Supports:** Title (Question), Editor (Answer).
*   **Taxonomies:** `dp_faq_category` (e.g. "Contact", "Subscribe").

---

## Custom Taxonomies

### 1. Sponsor Tier (`dp_sponsor_tier`)
*   **Terms:** Gold, Silver, Bronze, Partner.
*   **Associated CPT:** `dp_sponsor`.

### 2. Event Category (`dp_event_category`)
*   **Terms:** Sport, Music, Community, Market, School.
*   **Associated CPT:** `dp_event`.

### 3. Multimedia Category (`dp_multimedia_category`)
*   **Terms:** News, Sport, Lifestyle, Podcast.
*   **Associated CPT:** `dp_multimedia`.

### 4. FAQ Category (`dp_faq_category`)
*   **Terms:** General, Subscription, Contact, Advertising.
*   **Associated CPT:** `dp_faq`.

### 5. Edition Type (`dp_edition_type`)
*   **Terms:** Daily, Weekly, Special Supplement.
*   **Associated CPT:** `dp_edition`.