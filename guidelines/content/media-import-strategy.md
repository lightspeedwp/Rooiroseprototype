# Media Import Strategy

**Last updated**: 2026-02-23

---

## Overview

This document defines how featured images and media assets are handled during the WordPress content import process. The WXR generator (`/wordpress-export/scripts/generate-wxr.js`) creates `<item>` records of type `attachment` for each featured image, with `<wp:attachment_url>` pointing to the source URL. The WordPress Importer plugin then attempts to download (sideload) each URL into the WordPress media library.

---

## Image Source Types

### 1. Unsplash URLs (External)

**Pattern**: `https://images.unsplash.com/photo-XXXX`
**Used in**: `articles.md`, `competitions.md`, `multimedia.md`

**Behaviour**: The WordPress Importer will download these images during import. Unsplash URLs are publicly accessible and do not require authentication, so sideloading works automatically.

**Considerations**:
- Unsplash may rate-limit bulk downloads; run the import during off-peak hours or add delays between batches.
- Downloaded images will be stored in `/wp-content/uploads/YYYY/MM/` with WordPress's standard filename sanitisation.
- The `_wp_attachment_image_alt` postmeta is set from the collection's `Alt Text` field.
- The WXR `<wp:attachment_url>` strips URL query parameters (e.g., `?w=800`) to fetch the original full-size image. If bandwidth is a concern, append `?w=1200` to limit download size.

### 2. Local Media Paths (Placeholder)

**Pattern**: `media/events/boeremark.jpg`, `media/eeditions/cover-2026-02-07.jpg`
**Used in**: `events.md`, `eeditions.md`, `obituaries.md`, `sponsors.md`

**Behaviour**: These paths are relative references that do **not** exist as files in the repository. The WordPress Importer will fail to download them, and the attachment record will be created without a file.

**Resolution options**:
1. **Replace with Unsplash URLs**: Before running the WXR generator, update the collection markdown files to use real Unsplash URLs instead of placeholder paths.
2. **Manual upload**: After import, manually upload images to WordPress and associate them with the correct posts via the Media Library.
3. **Pre-populate uploads**: Place actual image files in a web-accessible location (e.g., `https://diepapier.co.za/media/events/boeremark.jpg`) before running the import, so the Importer can sideload them.

**Recommended approach**: Option 1 (replace with Unsplash URLs) for development and staging. For production, use actual brand photography.

### 3. External Brand URLs

**Pattern**: `https://novanews.co.za/wp-content/uploads/...`
**Used in**: `navigation.ts` (accreditation logos)

**Behaviour**: These are third-party URLs for organisation logos. They are not included in the WXR export (navigation is handled separately). If needed, download and upload them to the WordPress media library manually.

---

## Import Workflow

### Development / Staging

1. Run `node generate-wxr.js` to produce `die-papier-content.xml`.
2. In WordPress Admin, go to **Tools → Import → WordPress**.
3. Upload `die-papier-content.xml`.
4. Check "Download and import file attachments" when prompted.
5. The Importer will sideload Unsplash images and skip failed local paths.
6. After import, review the Media Library for missing thumbnails.

### Production

1. Replace all placeholder `media/` paths in collection files with production image URLs or actual hosted files.
2. Run the WXR generator.
3. Import into WordPress.
4. Verify all featured images render correctly on the front-end.

---

## Post-Import Verification

After running the WordPress import:

- [ ] All article posts have featured images
- [ ] All competition posts have featured images
- [ ] Event posts with Unsplash sources have images; those with `media/` paths may need manual upload
- [ ] E-edition cover images are present or flagged for manual upload
- [ ] Obituary photos are present or flagged for manual upload
- [ ] Sponsor logos are present or flagged for manual upload
- [ ] Image alt text is correctly set on all attachments

---

## Image Optimisation Notes

- WordPress will generate multiple thumbnail sizes upon upload (based on `theme.json` image size presets).
- Consider using a plugin like **Imagify** or **ShortPixel** for post-import optimisation.
- The theme's `theme.json` defines custom image sizes that match the design system's card and hero layouts.

---

*End of document.*
