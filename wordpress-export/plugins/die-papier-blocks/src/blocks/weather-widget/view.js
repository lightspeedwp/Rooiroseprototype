/**
 * Weather Widget — Frontend View (WordPress Interactivity API)
 *
 * Fetches live weather data from the configured API endpoint
 * and updates the widget reactively.
 *
 * @package DiePapierBlocks
 */

import { store, getContext } from '@wordpress/interactivity';

store( 'dp/weather-widget', {
	state: {
		temperature: '--',
		condition: 'Laai...',
		humidity: '--',
		wind: '--',
		weatherIcon: '',
	},

	actions: {
		/**
		 * fetchWeather — fetches weather data for the current location.
		 */
		async fetchWeather() {
			const ctx = getContext();
			ctx.loading = true;

			try {
				const url = new URL( ctx.apiEndpoint, window.location.origin );
				url.searchParams.set( 'location', ctx.location );

				const response = await fetch( url.toString() );

				if ( ! response.ok ) {
					throw new Error( `HTTP ${ response.status }` );
				}

				const data = await response.json();

				// Update reactive state.
				const s = store( 'dp/weather-widget' ).state;
				s.temperature = `${ data.temp ?? '--' }°C`;
				s.condition = data.condition ?? 'Onbekend';
				s.humidity = `${ data.humidity ?? '--' }%`;
				s.wind = `${ data.wind ?? '--' } km/h`;
			} catch ( err ) {
				// eslint-disable-next-line no-console
				console.warn( '[dp/weather-widget] Fetch failed:', err.message );
			} finally {
				ctx.loading = false;
			}
		},

		/**
		 * changeLocation — handles city selector change.
		 */
		async changeLocation( event ) {
			const ctx = getContext();
			ctx.location = event.target.value;

			// Re-fetch weather for the new location.
			await store( 'dp/weather-widget' ).actions.fetchWeather();
		},
	},
} );
