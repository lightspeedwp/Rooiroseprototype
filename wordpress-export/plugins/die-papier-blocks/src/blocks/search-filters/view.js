/**
 * Search Filters — Frontend View (WordPress Interactivity API)
 *
 * Auto-submits the form when a filter <select> changes.
 *
 * @package DiePapierBlocks
 */

import { store } from '@wordpress/interactivity';

store( 'dp/search-filters', {
	actions: {
		/**
		 * submitForm — submits the parent form on select change.
		 */
		submitForm( event ) {
			const form = event.target.closest( 'form' );
			if ( form ) {
				form.submit();
			}
		},
	},
} );
