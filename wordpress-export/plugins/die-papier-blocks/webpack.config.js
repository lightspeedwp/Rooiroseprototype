/**
 * Webpack Configuration — Die Papier Blocks Plugin
 *
 * Uses the default @wordpress/scripts config which auto-discovers all 17
 * blocks from their block.json files in src/blocks/[block-name]/.
 *
 * @wordpress/scripts v28+ (WP 6.5+) automatically:
 *   - Discovers block.json files under src/blocks/
 *   - Creates editor entry points from "editorScript"
 *   - Creates view script entries from "viewScript" (classic IIFE)
 *   - Creates view module entries from "viewScriptModule" (ES module)
 *   - Copies block.json + render.php to build/
 *   - Compiles style.scss → style-index.css
 *
 * Block Inventory (9 active blocks):
 *   Static render (no view script, 2 blocks):
 *     competition-badge, sponsor-banner
 *
 *   Classic viewScript (1 block):
 *     competition-entry
 *
 *   Interactivity API viewScriptModule (6 blocks):
 *     filter-bar, search-filters, slider, tab-bar,
 *     traffic-widget, weather-widget
 *
 *   Deprecated (removed from src/blocks/):
 *     ad-mrec, article-hero, content-hero, eedition-access,
 *     hero-slider, newsletter-cta, pricing-table, quote-slider,
 *     sticky-footer
 *
 * Build output: build/[block-name]/
 *
 * @package DiePapierBlocks
 */

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	output: {
		...defaultConfig.output,
		path: path.resolve( __dirname, 'build' ),
	},
};