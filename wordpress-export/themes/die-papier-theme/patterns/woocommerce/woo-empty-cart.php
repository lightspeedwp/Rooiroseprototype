<?php
/**
 * Title: Leë Mandjie
 * Slug: die-papier/woo-empty-cart
 * Categories: die-papier-woocommerce
 * Description: Empty cart state with helpful message and CTA to browse e-edition subscriptions.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
<div class="wp-block-group alignfull">

    <!-- wp:heading {"textAlign":"center","level":3,"fontSize":"x-large"} -->
    <h3 class="wp-block-heading has-text-align-center has-x-large-font-size">Jou mandjie is leeg</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
    <p class="has-text-align-center has-medium-font-size">Jy het nog nie enige items in jou mandjie nie. Teken in vir 'n e-uitgawe-intekening om te begin.</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
    <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"primary"} -->
        <div class="wp-block-button"><a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="/inteken/e-uitgawe">Teken in vir e-uitgawes</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline"} -->
        <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/e-uitgawes">Blaai e-uitgawes</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->

    <!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"backgroundColor":"border-light"} -->
    <hr class="wp-block-separator has-text-color has-border-light-color has-alpha-channel-opacity has-border-light-background-color has-background" style="margin-top:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--medium)"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"textAlign":"center","level":3,"fontSize":"x-large"} -->
    <h3 class="wp-block-heading has-text-align-center has-x-large-font-size">Hoekom teken in?</h3>
    <!-- /wp:heading -->

    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|small","left":"var:preset|spacing|small"},"margin":{"top":"var:preset|spacing|small"}}}} -->
    <div class="wp-block-columns alignwide" style="margin-top:var(--wp--preset--spacing--small)">
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"medium"} -->
            <h4 class="wp-block-heading has-text-align-center has-medium-font-size">📱 Lees oral</h4>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph {"align":"center","fontSize":"base"} -->
            <p class="has-text-align-center has-base-font-size">Toegang tot alle e-uitgawes op jou foon, tablet of rekenaar</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"medium"} -->
            <h4 class="wp-block-heading has-text-align-center has-medium-font-size">💰 Spaar geld</h4>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph {"align":"center","fontSize":"base"} -->
            <p class="has-text-align-center has-base-font-size">Spaar tot R420 per jaar met 'n jaarlange intekening</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"medium"} -->
            <h4 class="wp-block-heading has-text-align-center has-medium-font-size">🔒 Veilig betaal</h4>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph {"align":"center","fontSize":"base"} -->
            <p class="has-text-align-center has-base-font-size">Veilige betaling deur Payfast met 14-dag geld-terug-waarborg</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->
        
    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">

    <!-- wp:heading {"textAlign":"center","level":3,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}}} -->
    <h3 class="wp-block-heading has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--small)">Kies jou plan</h3>
    <!-- /wp:heading -->

    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|small","left":"var:preset|spacing|small"}}}} -->
    <div class="wp-block-columns alignwide">
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group is-style-card">
                
                <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"large"} -->
                <h4 class="wp-block-heading has-text-align-center has-large-font-size">Maandeliks</h4>
                <!-- /wp:heading -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"xxx-large"} -->
                <p class="has-text-align-center has-xxx-large-font-size"><strong>R140</strong></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">per maand</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|small"}}}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"width":100} -->
                    <div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link wp-element-button" href="/winkelmandjie/?add-to-cart=1">Kies plan</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
                
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:group {"className":"is-style-card-navy","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group is-style-card-navy">
                
                <!-- wp:paragraph {"align":"center","style":{"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"},"margin":{"bottom":"var:preset|spacing|x-small"}},"border":{"radius":"4px"}},"backgroundColor":"primary","textColor":"base","fontSize":"x-small"} -->
                <p class="has-text-align-center has-base-color has-primary-background-color has-text-color has-background has-x-small-font-size" style="border-radius:4px;margin-bottom:var(--wp--preset--spacing--x-small);padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px"><strong>GEWILDSTE</strong></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"large"} -->
                <h4 class="wp-block-heading has-text-align-center has-large-font-size">Kwartaalliks</h4>
                <!-- /wp:heading -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"xxx-large"} -->
                <p class="has-text-align-center has-xxx-large-font-size"><strong>R390</strong></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">vir 3 maande</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|small"}}}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"backgroundColor":"primary","width":100} -->
                    <div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="/winkelmandjie/?add-to-cart=2">Kies plan</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
                
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group is-style-card">
                
                <!-- wp:heading {"textAlign":"center","level":4,"fontSize":"large"} -->
                <h4 class="wp-block-heading has-text-align-center has-large-font-size">Jaarliks</h4>
                <!-- /wp:heading -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"xxx-large"} -->
                <p class="has-text-align-center has-xxx-large-font-size"><strong>R1 400</strong></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">per jaar</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|small"}}}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"className":"is-style-outline","width":100} -->
                    <div class="wp-block-button is-style-outline has-custom-width wp-block-button__width-100"><a class="wp-block-button__link wp-element-button" href="/winkelmandjie/?add-to-cart=3">Kies plan</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
                
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->
        
    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->