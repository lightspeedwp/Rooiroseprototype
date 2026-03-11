# Block Specification: Author Profile Box

**Last updated**: 2026-03-01
**Status:** Draft  
**React Component:** `src/app/pages/Author.tsx`  
**Block Slug:** `dp/author-profile`  
**Type:** Dynamic (User Meta)  
**Context:** Author Archive, Article Sidebar

## 1. Component Audit

### Props & State
*   **Data Source:** `decodedAuthor` (from URL) -> `authorBios` (Mock Data).
*   **Fields:**
    *   Avatar (Initials or Image)
    *   Name (H1)
    *   Role (e.g., "Senior Joernalis")
    *   Bio (Text with italics support)
    *   Stats (Article Count, Member Since)
    *   Social Links (Mail, Facebook, Twitter)

### WordPress Mapping
*   **Attributes:**
    *   `userId`: Number (User ID) - If 0, use current post author or archive author context.
    *   `showStats`: Boolean
*   **Supports:**
    *   `align`: ['wide', 'full']

---

## 2. Block Scaffold

### `block.json`
```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/author-profile",
  "title": "Author Profile Box",
  "category": "theme",
  "icon": "businessperson",
  "description": "Displays author bio, avatar, and social links.",
  "attributes": {
    "userId": {
      "type": "number",
      "default": 0
    },
    "showStats": {
      "type": "boolean",
      "default": true
    }
  },
  "textdomain": "die-papier-blocks",
  "editorScript": "file:./index.js",
  "render": "file:./render.php"
}
```

### `render.php`
```php
<?php
/**
 * Render callback for Author Profile
 */
$user_id = $attributes['userId'] ?? 0;
$show_stats = $attributes['showStats'] ?? true;

// Context Detection
if (!$user_id) {
    if (is_author()) {
        $user_id = get_queried_object_id();
    } elseif (is_single()) {
        $user_id = get_the_author_meta('ID');
    }
}

if (!$user_id) return;

$user_data = get_userdata($user_id);
$name = $user_data->display_name;
$role = get_user_meta($user_id, 'job_title', true) ?: 'Joernalis'; // Custom Field
$bio = get_the_author_meta('description', $user_id);
$avatar = get_avatar_url($user_id, ['size' => 256]);
$article_count = count_user_posts($user_id, 'post', true);
$joined = date('Y', strtotime($user_data->user_registered));

// Socials (ACF or User Meta)
$twitter = get_user_meta($user_id, 'twitter', true);
$facebook = get_user_meta($user_id, 'facebook', true);
$email = $user_data->user_email;

$wrapper_attrs = get_block_wrapper_attributes(['class' => 'bg-white dark:bg-[#162233] rounded-lg shadow-sm border border-gray-100 dark:border-[#1E3044] p-8 mb-8']);
?>

<div <?php echo $wrapper_attrs; ?>>
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <!-- Avatar -->
        <div class="flex-shrink-0">
            <?php if ($avatar) : ?>
                <img src="<?php echo esc_url($avatar); ?>" alt="<?php echo esc_attr($name); ?>" class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-[#1E3044] shadow-md" />
            <?php else : ?>
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#D70025] to-[#142135] flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                    <?php echo substr($name, 0, 1); ?>
                </div>
            <?php endif; ?>
        </div>
        
        <!-- Info -->
        <div class="flex-1">
            <h1 class="text-3xl md:text-4xl font-normal text-[#142135] dark:text-[#E8E8ED] font-['Roboto_Serif'] mb-2" style="font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 48;">
                <?php echo esc_html($name); ?>
            </h1>
            <p class="text-[#D70025] dark:text-[#E83050] font-medium mb-3">
                <?php echo esc_html($role); ?>
            </p>
            <div class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 prose">
                <?php echo wp_kses_post($bio); ?>
            </div>
            
            <?php if ($show_stats) : ?>
            <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div class="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#D70025]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span><strong><?php echo $article_count; ?></strong> artikels</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#D70025]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    <span>Lid sedert <?php echo $joined; ?></span>
                </div>
            </div>
            <?php endif; ?>
        </div>
        
        <!-- Socials -->
        <div class="flex gap-2">
            <?php if ($email) : ?>
                <a href="mailto:<?php echo esc_attr($email); ?>" class="p-2 text-gray-400 hover:text-[#D70025]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
            <?php endif; ?>
            <!-- Add Twitter/Facebook checks similarly -->
        </div>
    </div>
</div>
```

### `edit.js`
```javascript
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
    const { userId, showStats } = attributes;

    const users = useSelect((select) => {
        return select('core').getEntityRecords('root', 'user', { per_page: -1 }) || [];
    }, []);

    const userOptions = [
        { label: 'Auto Detect (Context)', value: 0 },
        ...users.map(u => ({ label: u.name, value: u.id }))
    ];

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody title="Profile Settings">
                    <SelectControl
                        label="Select User"
                        value={userId}
                        options={userOptions}
                        onChange={(val) => setAttributes({ userId: parseInt(val) })}
                    />
                    <ToggleControl
                        label="Show Stats"
                        checked={showStats}
                        onChange={(val) => setAttributes({ showStats: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="p-4 border border-dashed border-gray-400 text-center">
                User Profile Preview (ID: {userId || 'Auto'})
            </div>
        </div>
    );
}
```
