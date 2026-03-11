<?php
/**
 * Title: Ons Span
 * Slug: die-papier/page-team
 * Categories: die-papier-pages
 * Keywords: team, staff, span, redaksie, editorial, reporters
 * Description: Team page with editorial and reporters sections
 *
 * Content sourced from Team.tsx + team.ts + pageFaqs.ts
 * CORRECTED: Using section styles (is-style-*) and yoast/faq-block
 * NOTE: Team member images and bios use SCF fields via section-team-grid pattern
 */
?>
<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","className":"is-style-section-cover-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull is-style-section-cover-hero" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <img class="wp-block-cover__image-background" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Die Papier se span" />
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"},"color":{"text":"var:preset|color|base","background":"var:preset|color|primary"}},"className":"is-style-default"} -->
            <p class="has-text-align-center has-text-color has-background has-base-color has-primary-background-color" style="font-size:var(--wp--preset--font-size--small);font-weight:700;letter-spacing:2px;text-transform:uppercase;display:inline-block;padding:0.25rem 0.75rem;border-radius:2px">Ons Span</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em">Ontmoet ons span</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Die mense agter die stories wat vir ons lesers saak maak.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|large"}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--medium)">


    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":2,"textColor":"secondary"} -->
            <h2 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Redaksioneel</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
            <p class="has-text-align-center has-main-accent-color has-text-color">Ons joernaliste is verbind tot onafhanklike, feitelike en gebalanseerde verslaggewing. Ons streef daarna om die stem van ons lesers te wees.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:pattern {"slug":"die-papier/section-team-grid"} /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:separator {"align":"wide","className":"is-style-wide"} -->
    <hr class="wp-block-separator alignwide is-style-wide"/>
    <!-- /wp:separator -->


    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":2,"textColor":"secondary"} -->
            <h2 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Verslaggewers</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
            <p class="has-text-align-center has-main-accent-color has-text-color">Die span wat hard werk om elke dag vir jou die varsste nuus te bring.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:pattern {"slug":"die-papier/section-team-grid"} /-->
    </div>
    <!-- /wp:group -->

</main>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-navy","align":"full","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-group alignfull is-style-section-navy" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:heading {"textAlign":"center","level":2,"textColor":"base"} -->
    <h2 class="wp-block-heading has-text-align-center has-base-color has-text-color">Ondersteun plaaslike joernalistiek</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"base"} -->
    <p class="has-text-align-center has-base-color has-text-color">Word deel van ons leserskap en help ons om aan te hou om kwaliteit nuus te lewer. Teken in vir volle toegang.</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"primary","className":"is-style-fill"} -->
        <div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="/inteken">Teken in</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-muted","align":"full","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group alignfull is-style-section-muted" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Gereelde vrae</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
    <p class="has-text-align-center has-main-accent-color has-text-color">Vrae oor ons span, vryskutwerk en redaksionele onafhanklikheid.</p>
    <!-- /wp:paragraph -->

    <!-- wp:yoast/faq-block -->
    <div class="schema-faq wp-block-yoast-faq-block">
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe kontak ek 'n spesifieke joernalis?</strong>
            <p class="schema-faq-answer">U kan 'n joernalis direk bereik deur 'n e-pos na die redaksie te stuur by <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> met die joernalis se naam in die onderwerplyn.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Aanvaar <em>Die Papier</em> vryskutwerk?</strong>
            <p class="schema-faq-answer">Ja, ons is altyd op die uitkyk vir talentvolle vryskutjoernaliste en bydraers. Stuur jou CV en voorbeelde van vorige werk na <a href="mailto:redaksie@diepapier.co.za">redaksie@diepapier.co.za</a>.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe word die redaksionele onafhanklikheid verseker?</strong>
            <p class="schema-faq-answer"><em>Die Papier</em> se redaksie work onafhanklik van die besigheids- en advertensie-afdelings. Alle redaksionele besluite word geneem op grond van nuuswaardigheid en joernalistieke meriete.</p>
        </div>
    </div>
    <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->