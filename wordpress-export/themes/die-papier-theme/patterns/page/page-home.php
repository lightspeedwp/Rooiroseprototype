<?php
/**
 * Title: Tuisblad
 * Slug: die-papier/page-home
 * Categories: die-papier-pages
 * Keywords: home, tuisblad, homepage, front page
 * Description: Homepage with hero slider, category sections, sidebar, multimedia, obituaries, events, and newsletter CTA
 *
 * Content sourced from Home.tsx + home.ts + categoryArticles.ts
 * CORRECTED: Using section styles (is-style-*), AQL query loops, and Advanced Ads
 * NOTE: This is the front-page template pattern. Sidebar widgets, polls, competition cards,
 * e-edition promos, and ads use dedicated patterns/blocks.
 * AQL = Advanced Query Loop plugin for all post queries.
 */
?>
<!-- wp:group {"tagName":"main","layout":{"type":"default"},"className":"page-home"} -->
<main class="wp-block-group page-home">

    <!-- ═══ Breaking News Bar ═══ -->
    <!-- wp:pattern {"slug":"die-papier/homepage-nuusflitse"} /-->

    <!-- ═══ Hero Slider (Sticky/Featured Posts) ═══ -->
    <!-- wp:group {"align":"full","className":"is-style-section-white","style":{"spacing":{"padding":{"top":"0","bottom":"0"}}}} -->
    <div class="wp-block-group alignfull is-style-section-white" style="padding-top:0;padding-bottom:0">
        <!-- wp:query {"queryId":1,"query":{"perPage":5,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"only","inherit":false},"align":"full","className":"is-style-hero-slider","enhancedPagination":false} -->
        <div class="wp-block-query alignfull is-style-hero-slider">
            <!-- wp:post-template {"layout":{"type":"default"}} -->
                <!-- wp:pattern {"slug":"die-papier/card-post-featured-hero"} /-->
            <!-- /wp:post-template -->
        </div>
        <!-- /wp:query -->
    </div>
    <!-- /wp:group -->

    <!-- ═══ Main Content + Sidebar Layout ═══ -->
    <!-- wp:group {"align":"wide","layout":{"type":"default"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">
        <!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"}}}} -->
        <div class="wp-block-columns">
            <!-- wp:column {"width":"66.66%"} -->
            <div class="wp-block-column" style="flex-basis:66.66%">

                <!-- ═══ Feature Grid (Latest 6 Posts) ═══ -->
                <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|large"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group">

                <!-- wp:pattern {"slug":"die-papier/homepage-top-stories"} /-->

                <!-- ═══ Nuus Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-nuus"} /-->

                <!-- ═══ Sport Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-sport"} /-->

                <!-- wp:advads/gblock {"itemID":"dp-mid-leaderboard-1"} /-->

                <!-- ═══ Sake Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-sake"} /-->

                <!-- wp:skole Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-skole"} /-->

                <!-- ═══ Leefstyl Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-leefstyl"} /-->

                <!-- ═══ Dink Section ═══ -->
                <!-- wp:pattern {"slug":"die-papier/homepage-dink"} /-->

                <!-- wp:advads/gblock {"itemID":"dp-mid-leaderboard-2"} /-->

                </div>
                <!-- /wp:group -->

            </div>
            <!-- /wp:column -->

            <!-- ═══ Sidebar ═══ -->
            <!-- wp:column {"width":"33.33%"} -->
            <div class="wp-block-column" style="flex-basis:33.33%">
                <!-- wp:template-part {"slug":"sidebar-home","tagName":"aside"} /-->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->

    <!-- ═══ Brand Quote Slider ═══ -->
    <!-- wp:pattern {"slug":"die-papier/section-brand-quotes"} /-->

    <!-- ═══ Multimedia Section ═══ -->
    <!-- wp:pattern {"slug":"die-papier/homepage-multimedia"} /-->

    <!-- wp:advads/gblock {"itemID":"dp-mid-leaderboard-3"} /-->

    <!-- ═══ Obituaries Section ═══ -->
    <!-- wp:pattern {"slug":"die-papier/homepage-obituaries"} /-->

    <!-- ═══ Events Section ═══ -->
    <!-- wp:pattern {"slug":"die-papier/homepage-events"} /-->

    <!-- ═══ Newsletter CTA ═══ -->
    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta-full"} /-->

</main>
<!-- /wp:group -->