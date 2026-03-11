<?php
/**
 * Title: Footer
 * Slug: die-papier/footer
 * Categories: die-papier-footers
 * Block Types: core/template-part/footer
 * Description: Full footer with newsletter signup, logo, social links, copyright, and legal navigation.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","className":"is-style-section-red","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-red">
    
    <!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
    <div class="wp-block-columns alignwide are-vertically-aligned-center">
        
        <!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">Kry ons gratis nuusbrief</h3>
            <!-- /wp:heading -->
        </div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
            <!-- wp:gravityforms/form {"formId":"2","title":false,"description":false,"ajax":true} /-->
        </div>
        <!-- /wp:column -->
        
    </div>
    <!-- /wp:columns -->
    
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"color":{"background":"var:preset|color|secondary","text":"var:preset|color|base"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-base-color has-secondary-background-color">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:site-logo {"width":120} /-->
		
		<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:separator {"color":"border-light","className":"is-style-wide"} /-->

	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
		<p class="has-text-align-center has-small-font-size">© 2026 Die Papier. Alle regte voorbehou.</p>
		<!-- /wp:paragraph -->
		
		<!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center"}} -->
			<!-- wp:navigation-link {"label":"Privaatheidsbeleid","url":"/beleid/privaatheidsbeleid"} /-->
			<!-- wp:navigation-link {"label":"Terme en Voorwaardes","url":"/beleid/terme-en-voorwaardes"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
