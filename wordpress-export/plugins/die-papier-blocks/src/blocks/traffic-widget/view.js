/**
 * Traffic Widget — Frontend View (WordPress Interactivity API)
 *
 * Fetches live traffic incident data and provides expand/collapse interaction.
 *
 * @package DiePapierBlocks
 */

import { store, getContext } from '@wordpress/interactivity';

store( 'dp/traffic-widget', {
	state: {
		get hasIncidents() {
			return document.querySelectorAll( '.dp-traffic-widget__item' ).length > 0;
		},
		get isEmpty() {
			return ! this.hasIncidents;
		},
	},

	actions: {
		/**
		 * fetchIncidents — fetches traffic data from the API.
		 */
		async fetchIncidents() {
			const ctx = getContext();
			ctx.loading = true;

			try {
				const url = new URL( ctx.apiEndpoint, window.location.origin );
				url.searchParams.set( 'region', ctx.region );
				url.searchParams.set( 'max', String( ctx.maxItems ) );

				const response = await fetch( url.toString() );

				if ( ! response.ok ) {
					throw new Error( `HTTP ${ response.status }` );
				}

				const data = await response.json();
				const list = document.querySelector(
					'.dp-traffic-widget__list'
				);

				if ( ! list || ! Array.isArray( data.incidents ) ) return;

				// Clear existing server-rendered items.
				list.innerHTML = '';

				// Render fresh items.
				data.incidents.slice( 0, ctx.maxItems ).forEach( ( incident, i ) => {
					const item = document.createElement( 'div' );
					item.className = 'dp-traffic-widget__item';
					item.dataset.index = i;
					item.innerHTML = `
						<div class="dp-traffic-widget__item-header">
							<span class="dp-traffic-widget__item-severity dp-traffic-widget__item-severity--${ incident.severity || 'low' }">
								${ incident.severity || 'Laag' }
							</span>
							<span class="dp-traffic-widget__item-location">${ incident.location || '' }</span>
							<span class="dp-traffic-widget__item-time">${ incident.time || '' }</span>
						</div>
						<div class="dp-traffic-widget__item-detail" hidden>
							<p>${ incident.description || '' }</p>
						</div>
					`;
					item.addEventListener( 'click', () => {
						const detail = item.querySelector( '.dp-traffic-widget__item-detail' );
						if ( detail ) {
							detail.hidden = ! detail.hidden;
						}
					} );
					list.appendChild( item );
				} );
			} catch ( err ) {
				// eslint-disable-next-line no-console
				console.warn( '[dp/traffic-widget] Fetch failed:', err.message );
			} finally {
				ctx.loading = false;
			}
		},

		/**
		 * toggleExpand — expands/collapses an incident's details.
		 */
		toggleExpand( event ) {
			const item = event.target.closest( '.dp-traffic-widget__item' );
			if ( ! item ) return;

			const detail = item.querySelector( '.dp-traffic-widget__item-detail' );
			if ( detail ) {
				detail.hidden = ! detail.hidden;
			}
		},
	},
} );
