/**
 * Mobile Menu Toggle
 * 
 * Handles opening/closing of the mobile menu panel with:
 * - Hamburger icon toggle
 * - Overlay click to close
 * - Close button click
 * - ESC key to close
 * - Body scroll prevention when menu is open
 * - Focus trap management
 * 
 * @package DiePapierTheme
 * @since 1.0.0
 */

(function() {
	'use strict';
	
	// Wait for DOM to be ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initMobileMenu);
	} else {
		initMobileMenu();
	}
	
	function initMobileMenu() {
		const hamburgerBtn = document.querySelector('.mobile-menu-toggle');
		const closeBtn = document.querySelector('.mobile-menu-close-btn');
		const overlay = document.querySelector('.mobile-menu-overlay');
		const panel = document.querySelector('.mobile-menu-panel');
		
		if (!hamburgerBtn || !closeBtn || !overlay || !panel) {
			return; // Elements not found, exit gracefully
		}
		
		// State management
		let isOpen = false;
		let focusedElementBeforeOpen = null;
		
		// Focusable elements for focus trap
		const focusableSelectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
		
		/**
		 * Open mobile menu
		 */
		function openMenu() {
			if (isOpen) return;
			
			isOpen = true;
			focusedElementBeforeOpen = document.activeElement;
			
			// Show overlay and panel
			overlay.style.display = 'block';
			panel.classList.add('is-active');
			
			// Update hamburger button ARIA
			hamburgerBtn.setAttribute('aria-expanded', 'true');
			
			// Prevent body scroll
			document.body.style.overflow = 'hidden';
			
			// Focus first focusable element in panel
			const firstFocusable = panel.querySelector(focusableSelectors);
			if (firstFocusable) {
				setTimeout(() => firstFocusable.focus(), 100); // Small delay for animation
			}
			
			// Add event listeners
			overlay.addEventListener('click', closeMenu);
			closeBtn.addEventListener('click', closeMenu);
			document.addEventListener('keydown', handleEscKey);
			panel.addEventListener('keydown', trapFocus);
		}
		
		/**
		 * Close mobile menu
		 */
		function closeMenu() {
			if (!isOpen) return;
			
			isOpen = false;
			
			// Hide overlay and panel
			overlay.style.display = 'none';
			panel.classList.remove('is-active');
			
			// Update hamburger button ARIA
			hamburgerBtn.setAttribute('aria-expanded', 'false');
			
			// Re-enable body scroll
			document.body.style.overflow = '';
			
			// Return focus to hamburger button
			if (focusedElementBeforeOpen) {
				focusedElementBeforeOpen.focus();
			}
			
			// Remove event listeners
			overlay.removeEventListener('click', closeMenu);
			closeBtn.removeEventListener('click', closeMenu);
			document.removeEventListener('keydown', handleEscKey);
			panel.removeEventListener('keydown', trapFocus);
		}
		
		/**
		 * Handle ESC key press
		 */
		function handleEscKey(e) {
			if (e.key === 'Escape' || e.keyCode === 27) {
				closeMenu();
			}
		}
		
		/**
		 * Trap focus within mobile menu panel
		 */
		function trapFocus(e) {
			if (e.key !== 'Tab' && e.keyCode !== 9) {
				return;
			}
			
			const focusableElements = Array.from(panel.querySelectorAll(focusableSelectors));
			const firstFocusable = focusableElements[0];
			const lastFocusable = focusableElements[focusableElements.length - 1];
			
			if (e.shiftKey) {
				// Shift + Tab (backwards)
				if (document.activeElement === firstFocusable) {
					lastFocusable.focus();
					e.preventDefault();
				}
			} else {
				// Tab (forwards)
				if (document.activeElement === lastFocusable) {
					firstFocusable.focus();
					e.preventDefault();
				}
			}
		}
		
		/**
		 * Toggle menu (for hamburger button)
		 */
		function toggleMenu() {
			if (isOpen) {
				closeMenu();
			} else {
				openMenu();
			}
		}
		
		// Attach toggle to hamburger button
		hamburgerBtn.addEventListener('click', toggleMenu);
		
		// Initialize hamburger button ARIA attributes
		hamburgerBtn.setAttribute('aria-expanded', 'false');
		hamburgerBtn.setAttribute('aria-controls', 'mobile-menu-panel');
		hamburgerBtn.setAttribute('aria-label', 'Open spyskaart');
		
		// Add ID to panel for ARIA reference
		panel.id = 'mobile-menu-panel';
	}
	
})();
