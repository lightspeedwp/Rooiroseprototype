# Media Import Strategy

**Status:** Draft  
**Context:** Importing images from React (Local Assets & Unsplash URLs) to WordPress Media Library.

## 1. Source Types

### 1.1 Remote Images (Unsplash)
Most mock data uses Unsplash URLs.
*   **Example:** `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy...`
*   **Strategy:**
    1.  Download the image to a temporary folder (`/tmp/import/`).
    2.  Use `media_handle_sideload()` to import into WP Media Library.
    3.  Get the returned Attachment ID.
    4.  Set as Featured Image (`_thumbnail_id`).

### 1.2 Local Assets
Some images might be stored in `/public/images/`.
*   **Strategy:**
    1.  Zip the `/public/images/` folder from the React project.
    2.  Upload/Extract to the WordPress server (e.g., `/wp-content/uploads/import-assets/`).
    3.  Script checks if `imageUrl` starts with `/`.
    4.  If yes, prepend local path: `/var/www/html/wp-content/uploads/import-assets/` + `imageUrl`.
    5.  `media_handle_sideload()`.

---

## 2. Deduplication Logic

To avoid re-downloading the same Unsplash image multiple times (since mock data might reuse images):

1.  **Generate Hash:** Create an MD5 hash of the source URL.
2.  **Check Meta:** Query for existing attachment with meta key `_import_source_hash` = `$hash`.
3.  **Reuse:** If found, use existing Attachment ID.
4.  **New:** If not found, download, import, and save source URL hash in post meta.

---

## 3. WP-CLI Command Snippet

```php
function dp_import_image($url, $post_id = 0) {
    if (empty($url)) return 0;

    // 1. Check Deduplication
    $hash = md5($url);
    $existing = new WP_Query([
        'post_type' => 'attachment',
        'post_status' => 'inherit',
        'meta_key' => '_import_source_hash',
        'meta_value' => $hash,
        'posts_per_page' => 1
    ]);

    if ($existing->have_posts()) {
        return $existing->posts[0]->ID;
    }

    // 2. Prepare File
    require_once(ABSPATH . 'wp-admin/includes/media.php');
    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/image.php');

    // Handle Local vs Remote
    if (strpos($url, 'http') === 0) {
        $tmp = download_url($url);
        if (is_wp_error($tmp)) return 0;
        
        $file_array = [
            'name' => basename($url) . '.jpg', // Force JPG for Unsplash
            'tmp_name' => $tmp
        ];
    } else {
        // Local Asset logic
        $local_path = WP_CONTENT_DIR . '/uploads/import-assets' . $url;
        if (!file_exists($local_path)) return 0;
        
        // Copy to tmp to mimic upload
        $tmp = tempnam(sys_get_temp_dir(), 'img');
        copy($local_path, $tmp);
        
        $file_array = [
            'name' => basename($url),
            'tmp_name' => $tmp
        ];
    }

    // 3. Sideload
    $id = media_handle_sideload($file_array, $post_id);

    // 4. Cleanup & Meta
    if (is_wp_error($id)) {
        @unlink($file_array['tmp_name']);
        return 0;
    }

    update_post_meta($id, '_import_source_hash', $hash);
    return $id;
}
```
