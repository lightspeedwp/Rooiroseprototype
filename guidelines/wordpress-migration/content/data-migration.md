# Data Migration Strategy (React to WordPress)

**Status:** Draft  
**Context:** Migrating static React data (arrays) to WordPress Database (WXR Import).

## 1. Overview

Since the current site uses mock data arrays (`src/app/data/*.ts`), we need to convert this structured data into a WordPress eXtended RSS (WXR) file or use a programmatic import script.

**Recommended Approach:** Custom WP-CLI Import Command.
Why? It allows handling media sideloading, taxonomy mapping, and meta fields more reliably than generating a massive XML file.

---

## 2. Data Mapping

### 2.1 Articles (`articles.ts` -> `post`)
*   **Title** -> `post_title`
*   **Excerpt** -> `post_excerpt`
*   **Content** -> `post_content` (Needs HTML formatting)
*   **Date** -> `post_date`
*   **Category** -> `category` (Taxonomy Term)
*   **Tags** -> `post_tag` (Taxonomy Term)
*   **Author** -> `post_author` (Map string "Johan Bekker" to WP User ID)
*   **Image** -> `_thumbnail_id` (Sideload from URL)
*   **Read Time** -> `_read_time` (Meta)
*   **Is Featured/Breaking** -> `_is_featured`, `_is_breaking` (Meta or Sticky)

### 2.2 Events (`events.ts` -> `dp_event`)
*   **Title** -> `post_title`
*   **Description** -> `post_content`
*   **Date** -> `event_date` (Meta: Ymd)
*   **Time** -> `event_time` (Meta)
*   **Location** -> `event_location` (Meta)
*   **Category** -> `dp_event_category` (Taxonomy)

### 2.3 Competitions (`competitions.ts` -> `dp_competition`)
*   **Title** -> `post_title`
*   **Description** -> `post_content`
*   **Prize** -> `prize_details` (Meta)
*   **Closing Date** -> `closing_date` (Meta)
*   **Status** -> Derived from date or manual status meta.

---

## 3. Import Script Logic (WP-CLI)

Create a command `wp dp import_react_data`:

1.  **Read JSON:** Convert React `data/*.ts` to JSON files.
2.  **Iterate Items:**
    *   Check if post exists (by Title/Slug).
    *   **Handle Author:** `get_user_by('slug', $slug)` -> Create if missing.
    *   **Handle Terms:** `term_exists` -> `wp_insert_term`.
    *   **Handle Image:**
        *   Download image from URL (if remote) or copy from local assets.
        *   `media_handle_sideload` -> Get Attachment ID.
    *   **Insert Post:** `wp_insert_post`.
    *   **Update Meta:** `update_post_meta`.

### 3.1 Taxonomy Mapping
React uses simple strings for categories. WP uses Terms.
*   "Nuus" -> Term ID: 4
*   "Sport" -> Term ID: 5

### 3.2 Media Handling
*   React images are local paths (e.g., `/images/hero.jpg`).
*   Script must look in `./public/images/hero.jpg`.
*   Upload to `/wp-content/uploads/2026/02/`.

---

## 4. Execution Plan

1.  **Prepare Data:**
    *   Run a script in the React repo to dump all data arrays to `dist/export.json`.
    *   `console.log(JSON.stringify({ articles: ARTICLES, events: EVENTS ... }))`
2.  **Upload Assets:** Zip `public/images` folder.
3.  **Run Import:**
    *   Upload `export.json` and `images.zip` to WP server.
    *   Run `wp dp import_react_data --file=export.json`.

---
