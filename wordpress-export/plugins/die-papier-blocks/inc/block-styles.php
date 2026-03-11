<?php
/**
 * Register Block Style Variations (FULLY DEPRECATED)
 *
 * All block styles are now registered by the THEME via JSON files in:
 *   /styles/blocks/{block-type}/{style-name}.json  (v3 theme.json format)
 *   /styles/sections/{section-name}.json            (v3 section styles)
 *
 * The theme's functions.php scans these directories and auto-registers
 * all block style variations. See dp_register_block_styles_from_json()
 * and dp_register_section_styles_from_json().
 *
 * This file is retained as a no-op for backward compatibility.
 * It can be safely deleted once all environments are updated.
 *
 * @package DiePapierBlocks
 * @deprecated 1.1.0 Use theme JSON files instead.
 * @see /wordpress-export/themes/die-papier-theme/styles/blocks/
 * @see /wordpress-export/themes/die-papier-theme/functions.php dp_register_block_styles_from_json()
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// No-op: all block styles are now registered via theme JSON files.
// See styles/blocks/ directory for the full inventory.
