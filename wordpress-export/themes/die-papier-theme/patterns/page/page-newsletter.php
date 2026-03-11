<?php
/**
 * Title: Nuusbrief Intekening
 * Slug: die-papier/page-newsletter
 * Categories: die-papier-pages
 * Keywords: newsletter, nuusbrief, inteken, subscription
 * Description: Newsletter subscription page with options and form
 * 
 * Content updated from content-for-review.md lines 8-64 on 2026-02-27
 * CORRECTED: Using section styles (is-style-*) and yoast/faq-block
 */
?>
<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","className":"is-style-section-cover-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull is-style-section-cover-hero" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em">Kry ons gratis nuusbrief</h1>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Ontvang die jongste nuus elke Dinsdag en Vrydag regstreeks in jou e-posbus.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|large"}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-large)">

    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2} -->
        <h2 class="wp-block-heading has-text-align-center">Kies jou nuusbrief</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","className":"is-style-lead"} -->
        <p class="has-text-align-center is-style-lead">Bly ingelig met ons gereelde nuusbriewe</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|small","left":"var:preset|spacing|small"}}}} -->
        <div class="wp-block-columns alignwide">
            <!-- wp:column -->
            <div class="wp-block-column">
                <!-- wp:group {"style":{"border":{"width":"2px","color":"var:preset|color|border-light","radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","right":"var:preset|spacing|small","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group" style="border-color:var(--wp--preset--color--border-light);border-width:2px;border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)">
                    <!-- wp:heading {"level":3,"fontSize":"medium"} -->
                    <h3 class="wp-block-heading has-medium-font-size">Dinsdag-nuusbrief</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontWeight":"600"},"color":{"text":"var:preset|color|primary"}},"fontSize":"small"} -->
                    <p class="has-text-color has-primary-color has-small-font-size" style="font-weight:600;text-transform:uppercase">Elke Dinsdag</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph {"fontSize":"small"} -->
                    <p class="has-small-font-size">'n Blik vooruit op die week se nuus, samestelling van die beste stories en eksklusiewe inhoud.</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column -->
            <div class="wp-block-column">
                <!-- wp:group {"style":{"border":{"width":"2px","color":"var:preset|color|border-light","radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","right":"var:preset|spacing|small","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group" style="border-color:var(--wp--preset--color--border-light);border-width:2px;border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)">
                    <!-- wp:heading {"level":3,"fontSize":"medium"} -->
                    <h3 class="wp-block-heading has-medium-font-size">Vrydag-nuusbrief</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontWeight":"600"},"color":{"text":"var:preset|color|primary"}},"fontSize":"small"} -->
                    <p class="has-text-color has-primary-color has-small-font-size" style="font-weight:600;text-transform:uppercase">Elke Vrydag</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph {"fontSize":"small"} -->
                    <p class="has-small-font-size">Die week se hoogtepunte, die jongste e-uitgawe, en naweek-leesstof.</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column -->
            <div class="wp-block-column">
                <!-- wp:group {"style":{"border":{"width":"2px","color":"var:preset|color|border-light","radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","right":"var:preset|spacing|small","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group" style="border-color:var(--wp--preset--color--border-light);border-width:2px;border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)">
                    <!-- wp:heading {"level":3,"fontSize":"medium"} -->
                    <h3 class="wp-block-heading has-medium-font-size">Brekende nuus</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontWeight":"600"},"color":{"text":"var:preset|color|primary"}},"fontSize":"small"} -->
                    <p class="has-text-color has-primary-color has-small-font-size" style="font-weight:600;text-transform:uppercase">Ad hoc</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph {"fontSize":"small"} -->
                    <p class="has-small-font-size">Onmiddellike kennisgewings van groot nuusstories soos dit gebeur.</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"align":"full","className":"is-style-section-muted","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
    <div class="wp-block-group alignfull is-style-section-muted" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"600px"},"style":{"spacing":{"blockGap":"var:preset|spacing|small"}}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":2} -->
            <h2 class="wp-block-heading has-text-align-center">Teken in</h2>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Vul jou besonderhede in en kies watter nuusbriewe jy wil ontvang.</p>
            <!-- /wp:paragraph -->

            <!-- wp:gravityforms/form {"formId":"29","title":false,"description":false,"ajax":true} /-->

            <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"color":{"text":"var:preset|color|base-4"}}} -->
            <p class="has-text-align-center has-small-font-size has-text-color has-base-4-color">Ons sal nooit jou e-pos met 'n derde partye deel nie.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"align":"full","className":"is-style-section-faq","style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group alignfull is-style-section-faq">
        <!-- wp:heading {"textAlign":"center","level":2} -->
        <h2 class="wp-block-heading has-text-align-center">Gereelde vrae</h2>
        <!-- /wp:heading -->

        <!-- wp:yoast/faq-block {"questions":[{"id":"faq-1","question":["Hoe dikwels ontvang ek die nuusbrief?"],"answer":["Dit hang af van watter nuusbriewe jy gekies het. Die Dinsdag-nuusbrief kom elke Dinsdag, die Vrydag-nuusbrief elke Vrydag, en brekende nuus word slegs gestuur wanneer daar 'n groot nuusstorie is."],"jsonQuestion":"Hoe dikwels ontvang ek die nuusbrief?","jsonAnswer":"Dit hang af van watter nuusbriewe jy gekies het. Die Dinsdag-nuusbrief kom elke Dinsdag, die Vrydag-nuusbrief elke Vrydag, en brekende nuus word slegs gestuur wanneer daar 'n groot nuusstorie is."},{"id":"faq-2","question":["Kan ek enige tyd uitskryf?"],"answer":["Ja, elke nuusbrief het 'n \"Uitskryf\" skakel onderaan. Jy kan ook jou voorkeures bestuur deur na jou rekening te gaan."],"jsonQuestion":"Kan ek enige tyd uitskryf?","jsonAnswer":"Ja, elke nuusbrief het 'n \"Uitskryf\" skakel onderaan. Jy kan ook jou voorkeures bestuur deur na jou rekening te gaan."},{"id":"faq-3","question":["Is my e-posadres veilig?"],"answer":["Absoluut. Ons sal nooit jou e-posadres met derde partye deel nie. Ons gebruik dit slegs om jou die nuusbriewe te stuur waarvoor jy ingeteken het."],"jsonQuestion":"Is my e-posadres veilig?","jsonAnswer":"Absoluut. Ons sal nooit jou e-posadres met derde partye deel nie. Ons gebruik dit slegs om jou die nuusbriewe te stuur waarvoor jy ingeteken het."},{"id":"faq-4","question":["Kan ek my voorkeures verander?"],"answer":["Ja, jy kan enige tyd jou nuusbrief-voorkeures opdateer deur op die \"Bestuur voorkeures\" skakel in enige nuusbrief te kliek."],"jsonQuestion":"Kan ek my voorkeures verander?","jsonAnswer":"Ja, jy kan enige tyd jou nuusbrief-voorkeures opdateer deur op die \"Bestuur voorkeures\" skakel in enige nuusbrief te kliek."}]} /-->
    </div>
    <!-- /wp:group -->
</main>
<!-- /wp:group -->