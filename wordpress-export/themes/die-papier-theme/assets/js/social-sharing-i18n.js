/**
 * Outermost Social Sharing Block - Afrikaans Translations
 * Die Papier WordPress Theme
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */
(function() {
    'use strict';
    
    // Translation dictionary for network labels
    const translations = {
        facebook: 'Deel op Facebook',
        whatsapp: 'Stuur op WhatsApp',
        twitter: 'Deel op X',
        x: 'Deel op X',
        email: 'Stuur per e-pos',
        copy: 'Kopieer skakel',
        linkedin: 'Deel op LinkedIn'
    };
    
    /**
     * Replaces English labels with Afrikaans translations.
     */
    function translateLabels() {
        const labels = document.querySelectorAll('.outermost-social-sharing__label');
        
        labels.forEach(function(label) {
            const network = label.getAttribute('data-network');
            if (translations[network] && label.textContent !== translations[network]) {
                label.textContent = translations[network];
            }
        });
    }

    /**
     * Special handling for the "Copy Link" button success state.
     */
    function handleCopyLink() {
        document.addEventListener('click', function(e) {
            const copyButton = e.target.closest('.outermost-social-sharing__button--copy');
            if (!copyButton) return;
            
            // The Outermost block may already handle the copy, 
            // we just want to ensure the label changes to Afrikaans
            setTimeout(function() {
                const label = copyButton.querySelector('.outermost-social-sharing__label');
                if (label && (label.textContent.toLowerCase().includes('copied') || label.textContent.includes('✓'))) {
                    label.textContent = 'Skakel gekopieer';
                    copyButton.classList.add('is-copied');
                }
            }, 100);
        });
    }
    
    // Initialize translations when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            translateLabels();
            handleCopyLink();
        });
    } else {
        translateLabels();
        handleCopyLink();
    }

    // Support for AJAX loaded content (if any)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                translateLabels();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
