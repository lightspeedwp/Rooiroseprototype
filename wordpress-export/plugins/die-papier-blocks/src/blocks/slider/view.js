/**
 * Slider Block — Interactivity API view script.
 *
 * Handles slide navigation, autoplay, swipe gestures, and keyboard controls.
 *
 * @package DiePapierBlocks
 * @since   1.0.0
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const { state, actions, callbacks } = store( 'dp/slider', {
	state: {
		get trackTransform() {
			const ctx = getContext();
			const offset = ctx.currentSlide * ( 100 / ctx.slidesToShow );
			return `translateX(-${ offset }%)`;
		},
		get trackTransition() {
			return 'transform 0.4s ease-in-out';
		},
		get canGoPrev() {
			const ctx = getContext();
			return ctx.loop || ctx.currentSlide > 0;
		},
		get canGoNext() {
			const ctx = getContext();
			return ctx.loop || ctx.currentSlide < ctx.slideCount - ctx.slidesToShow;
		},
		get isDotActive() {
			const ctx = getContext();
			const { ref } = getElement();
			const index = parseInt( ref?.dataset?.slideIndex ?? '0', 10 );
			return index === ctx.currentSlide;
		},
		get pauseButtonText() {
			const ctx = getContext();
			return ctx.isPlaying ? '\u23F8' : '\u25B6';
		},
	},

	actions: {
		nextSlide() {
			const ctx = getContext();
			const maxSlide = ctx.slideCount - ctx.slidesToShow;
			if ( ctx.currentSlide < maxSlide ) {
				ctx.currentSlide++;
			} else if ( ctx.loop ) {
				ctx.currentSlide = 0;
			}
		},
		prevSlide() {
			const ctx = getContext();
			if ( ctx.currentSlide > 0 ) {
				ctx.currentSlide--;
			} else if ( ctx.loop ) {
				ctx.currentSlide = ctx.slideCount - ctx.slidesToShow;
			}
		},
		goToSlide() {
			const ctx = getContext();
			const { ref } = getElement();
			const index = parseInt( ref?.dataset?.slideIndex ?? '0', 10 );
			ctx.currentSlide = index;
		},
		toggleAutoplay() {
			const ctx = getContext();
			ctx.isPlaying = ! ctx.isPlaying;
			if ( ctx.isPlaying ) {
				actions.startAutoplay();
			} else {
				actions.stopAutoplay();
			}
		},
		startAutoplay() {
			const ctx = getContext();
			actions.stopAutoplay();
			ctx._autoplayTimer = setInterval( () => {
				actions.nextSlide();
			}, ctx.interval );
		},
		stopAutoplay() {
			const ctx = getContext();
			if ( ctx._autoplayTimer ) {
				clearInterval( ctx._autoplayTimer );
				ctx._autoplayTimer = null;
			}
		},
		handleKeydown( event ) {
			if ( event.key === 'ArrowLeft' ) {
				event.preventDefault();
				actions.prevSlide();
			} else if ( event.key === 'ArrowRight' ) {
				event.preventDefault();
				actions.nextSlide();
			}
		},
	},

	callbacks: {
		init() {
			const ctx = getContext();
			const { ref } = getElement();

			// Autoplay.
			if ( ctx.autoplay && ctx.isPlaying ) {
				actions.startAutoplay();
			}

			// Swipe gesture support.
			let touchStartX = 0;
			let touchStartY = 0;

			ref.addEventListener( 'touchstart', ( e ) => {
				touchStartX = e.touches[ 0 ].clientX;
				touchStartY = e.touches[ 0 ].clientY;
			}, { passive: true } );

			ref.addEventListener( 'touchend', ( e ) => {
				const deltaX = e.changedTouches[ 0 ].clientX - touchStartX;
				const deltaY = e.changedTouches[ 0 ].clientY - touchStartY;

				// Only register horizontal swipes (> 50px, less vertical drift).
				if ( Math.abs( deltaX ) > 50 && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					if ( deltaX < 0 ) {
						actions.nextSlide();
					} else {
						actions.prevSlide();
					}
				}
			}, { passive: true } );

			// Pause autoplay on hover / focus.
			ref.addEventListener( 'mouseenter', () => {
				if ( ctx.autoplay && ctx.isPlaying ) {
					actions.stopAutoplay();
				}
			} );
			ref.addEventListener( 'mouseleave', () => {
				if ( ctx.autoplay && ctx.isPlaying ) {
					actions.startAutoplay();
				}
			} );
		},
	},
} );
