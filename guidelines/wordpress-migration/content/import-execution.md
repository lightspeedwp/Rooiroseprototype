# Import Execution & Cleanup Guide

**Status:** Draft  
**Context:** Instructions for running the final content import and cleaning up legacy artifacts.

## 1. Pre-Import Checklist
1.  [ ] **Backup Database:** Run `wp db export pre-import.sql`.
2.  [ ] **Disable Emails:** Install "Disable Emails" plugin to prevent spamming users during import.
3.  [ ] **Increase PHP Limits:** Ensure `memory_limit` is at least 512M and `max_execution_time` is 300s.
4.  [ ] **Install Importers:** `wp plugin install wordpress-importer --activate`.

---

## 2. Running the Import

### 2.1 Standard WXR Import
If using the standard XML file generated from the export step:

```bash
# Dry run not available for standard importer, but good to test on staging first
wp import content.xml --authors=create
```

### 2.2 Custom WP-CLI Import (Recommended)
If using the custom script `wp dp import_react_data`:

```bash
# Upload assets first
unzip images.zip -d wp-content/uploads/import-assets/

# Run import
wp dp import_react_data --file=export.json --verbose
```

---

## 3. Verification

Run these commands to verify data integrity:

```bash
# Check Post Counts
wp post list --post_type=post --format=count
wp post list --post_type=dp_event --format=count
wp post list --post_type=dp_competition --format=count

# Check Taxonomy Terms
wp term list category --format=count
wp term list dp_event_category --format=count

# Check Missing Images (Posts without thumbnails)
wp post list --post_type=post --meta_key=_thumbnail_id --meta_compare=NOT EXISTS
```

---

## 4. Content Cleanup

After import, content might contain legacy React attributes (`className`, `style={{...}}`) or broken shortcodes.

### 4.1 Remove Inline Styles
React uses `style={{ color: 'red' }}` which might have been exported as `style="color: 'red'"` or similar.

```bash
# Remove style attributes from all posts
wp search-replace ' style="[^"]*"' '' wp_posts --include-columns=post_content --regex
```

### 4.2 Fix Class Names
Convert `className="foobar"` to `class="foobar"`.

```bash
wp search-replace 'className=' 'class=' wp_posts --include-columns=post_content
```

### 4.3 Remove Empty Paragraphs
Often imports leave `<p>&nbsp;</p>` or `<p></p>`.

```bash
wp search-replace '<p>&nbsp;</p>' '' wp_posts --include-columns=post_content
wp search-replace '<p></p>' '' wp_posts --include-columns=post_content
```

### 4.4 Fix Internal Links
If you imported with a different domain, find and replace the old React dev URL.

```bash
wp search-replace 'http://localhost:3000' 'https://diepapier.co.za' wp_posts --include-columns=post_content
```

---

## 5. Post-Import Actions

1.  [ ] **Regenerate Thumbnails:** `wp media regenerate --yes`
2.  [ ] **Update Permalinks:** `wp rewrite flush`
3.  [ ] **Run Yoast SEO Index:** `wp yoast index`
4.  [ ] **Enable Emails:** Deactivate "Disable Emails" plugin.
