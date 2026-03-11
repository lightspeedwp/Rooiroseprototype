/**
 * Tab Bar — Frontend View (WordPress Interactivity API)
 *
 * Handles tab switching by updating context and toggling panel visibility.
 *
 * @package DiePapierBlocks
 */

import { store, getContext } from '@wordpress/interactivity';

store( 'dp/tab-bar', {
	actions: {
		/**
		 * switchTab — changes the active tab.
		 */
		switchTab( event ) {
			const ctx = getContext();
			const btn = event.target.closest( '[data-tab]' );
			if ( ! btn ) return;

			const tabValue = btn.dataset.tab;
			ctx.activeTab = tabValue;

			// Update aria-selected on all tab buttons.
			const tabBar = btn.closest( '.dp-tab-bar' );
			if ( ! tabBar ) return;

			const allTabs = tabBar.querySelectorAll( '.dp-tab-bar__tab' );
			allTabs.forEach( ( tab ) => {
				const isActive = tab.dataset.tab === tabValue;
				tab.setAttribute( 'aria-selected', isActive ? 'true' : 'false' );
				tab.classList.toggle( 'dp-tab-bar__tab--active', isActive );
			} );

			// Toggle panel visibility.
			const panels = tabBar.querySelectorAll( '.dp-tab-bar__panel' );
			panels.forEach( ( panel ) => {
				const panelTab = panel.dataset.tab;
				panel.hidden = panelTab !== tabValue;
			} );
		},
	},

	callbacks: {
		/**
		 * init — sets the default active tab on mount.
		 */
		init() {
			const ctx = getContext();
			const tabBar = document.querySelector(
				`[data-wp-context*="${ ctx.activeTab }"]`
			);
			if ( ! tabBar ) return;

			// Set initial state.
			const allTabs = tabBar.querySelectorAll( '.dp-tab-bar__tab' );
			allTabs.forEach( ( tab ) => {
				const isActive = tab.dataset.tab === ctx.activeTab;
				tab.classList.toggle( 'dp-tab-bar__tab--active', isActive );
			} );

			const panels = tabBar.querySelectorAll( '.dp-tab-bar__panel' );
			panels.forEach( ( panel ) => {
				panel.hidden = panel.dataset.tab !== ctx.activeTab;
			} );
		},
	},
} );
