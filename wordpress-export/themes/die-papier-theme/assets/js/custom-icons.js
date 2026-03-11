/**
 * Custom Icon Library for Outermost Icon Block.
 *
 * Registers Die Papier's 67 custom Lucide-based icons
 * in the Icon Block picker under a "Die Papier" category.
 *
 * Data is passed from PHP via wp_localize_script() as
 * window.dpCustomIcons.
 *
 * @package DiePapierTheme
 * @since   Die Papier Theme 1.0
 */
( function () {
	'use strict';

	if ( typeof wp === 'undefined' || typeof wp.hooks === 'undefined' ) {
		return;
	}

	var data = window.dpCustomIcons;

	if ( ! data || ! data.icons || ! data.icons.length ) {
		return;
	}

	/**
	 * Adds Die Papier custom icons to the Icon Block library.
	 *
	 * @param {Array} icons Existing icon sets.
	 * @return {Array} Modified icon sets with Die Papier icons appended.
	 */
	wp.hooks.addFilter(
		'iconBlock.icons',
		'die-papier/custom-icons',
		function ( icons ) {
			var customIcons = {
				type: 'custom',
				label: data.label || 'Die Papier',
				icons: data.icons.map( function ( icon ) {
					return {
						name: icon.name,
						title: icon.title,
						icon: icon.svg,
						categories: [ data.category || 'die-papier' ],
					};
				} ),
			};

			return icons.concat( [ customIcons ] );
		}
	);
} )();