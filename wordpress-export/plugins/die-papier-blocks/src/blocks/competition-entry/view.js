/**
 * Competition Entry — Frontend Script
 *
 * Progressive enhancement: intercepts the standard form submit
 * to post via AJAX (Fetch API), shows inline validation and
 * success/error feedback without a full page reload.
 *
 * @package DiePapierBlocks
 */

( function () {
	'use strict';

	/**
	 * Initialise all competition entry forms on the page.
	 */
	function init() {
		const forms = document.querySelectorAll( '.dp-competition-entry__form' );
		forms.forEach( bindForm );
	}

	/**
	 * Bind AJAX submit + client-side validation to a single form.
	 *
	 * @param {HTMLFormElement} form
	 */
	function bindForm( form ) {
		const submitBtn = form.querySelector( '.dp-competition-entry__submit' );
		if ( ! submitBtn ) {
			return;
		}

		// Store original button text for reset.
		const originalText = submitBtn.textContent;

		form.addEventListener( 'submit', function ( e ) {
			e.preventDefault();

			// ── Client-side validation ──────────────────────────────
			if ( ! form.checkValidity() ) {
				form.reportValidity();
				return;
			}

			// Prevent double-submit.
			if ( submitBtn.disabled ) {
				return;
			}

			submitBtn.disabled = true;
			submitBtn.textContent = 'Stuur…';
			submitBtn.classList.add( 'dp-competition-entry__submit--loading' );

			// Remove any previous feedback.
			removeFeedback( form );

			// ── AJAX post ──────────────────────────────────────────
			const data = new FormData( form );

			fetch( form.action, {
				method: 'POST',
				body: data,
				credentials: 'same-origin',
			} )
				.then( function ( response ) {
					if ( response.redirected || response.ok ) {
						showFeedback( form, 'success',
							'Dankie! Jou inskrywing is ontvang.'
						);
						form.reset();
					} else {
						throw new Error( response.statusText || 'Onbekende fout' );
					}
				} )
				.catch( function ( err ) {
					showFeedback( form, 'error',
						'Jammer, iets het fout gegaan. Probeer asseblief weer. (' + err.message + ')'
					);
				} )
				.finally( function () {
					submitBtn.disabled = false;
					submitBtn.textContent = originalText;
					submitBtn.classList.remove( 'dp-competition-entry__submit--loading' );
				} );
		} );
	}

	/**
	 * Insert a feedback message after the form.
	 *
	 * @param {HTMLFormElement}  form
	 * @param {'success'|'error'} type
	 * @param {string}           message
	 */
	function showFeedback( form, type, message ) {
		removeFeedback( form );

		const el = document.createElement( 'div' );
		el.className = 'dp-competition-entry__feedback dp-competition-entry__feedback--' + type;
		el.setAttribute( 'role', 'alert' );
		el.textContent = message;

		form.parentNode.insertBefore( el, form.nextSibling );

		// Auto-dismiss after 8 s.
		setTimeout( function () {
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
		}, 8000 );
	}

	/**
	 * Remove any existing feedback messages.
	 *
	 * @param {HTMLFormElement} form
	 */
	function removeFeedback( form ) {
		const existing = form.parentNode.querySelector( '.dp-competition-entry__feedback' );
		if ( existing ) {
			existing.parentNode.removeChild( existing );
		}
	}

	// Initialise when DOM is ready.
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
