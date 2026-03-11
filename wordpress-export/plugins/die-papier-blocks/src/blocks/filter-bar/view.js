/**
 * Filter Bar — Frontend View (WordPress Interactivity API)
 *
 * Handles client-side filtering by updating URL query params
 * and reloading the page with the new filter state.
 *
 * @package DiePapierBlocks
 */

import { store, getContext } from '@wordpress/interactivity';

store( 'dp/filter-bar', {
	actions: {
		/**
		 * updateSearch — syncs the search input value to context.
		 */
		updateSearch( event ) {
			const ctx = getContext();
			ctx.search = event.target.value;
		},

		/**
		 * handleSearchKey — submits search on Enter key.
		 */
		handleSearchKey( event ) {
			if ( event.key === 'Enter' ) {
				event.preventDefault();
				const ctx = getContext();
				const url = new URL( window.location.href );
				if ( ctx.search ) {
					url.searchParams.set( 's', ctx.search );
				} else {
					url.searchParams.delete( 's' );
				}
				url.searchParams.delete( 'paged' );
				window.location.href = url.toString();
			}
		},

		/**
		 * applyFilter — navigates to a filtered URL.
		 */
		applyFilter( event ) {
			const btn      = event.target.closest( '[data-term-slug]' );
			const taxonomy = btn?.dataset?.taxonomy;
			const slug     = btn?.dataset?.termSlug;

			if ( ! taxonomy || ! slug ) return;

			const url = new URL( window.location.href );

			if ( taxonomy === 'category' ) {
				url.searchParams.set( 'category_name', slug );
			} else {
				url.searchParams.set( taxonomy, slug );
			}

			url.searchParams.delete( 'paged' );
			window.location.href = url.toString();
		},

		/**
		 * clearFilter — removes a taxonomy filter and reloads.
		 */
		clearFilter( event ) {
			const btn      = event.target.closest( '[data-taxonomy]' );
			const taxonomy = btn?.dataset?.taxonomy;

			if ( ! taxonomy ) return;

			const url = new URL( window.location.href );

			if ( taxonomy === 'category' ) {
				url.searchParams.delete( 'category_name' );
				url.searchParams.delete( 'cat' );
			} else {
				url.searchParams.delete( taxonomy );
			}

			url.searchParams.delete( 'paged' );
			window.location.href = url.toString();
		},
	},
} );
