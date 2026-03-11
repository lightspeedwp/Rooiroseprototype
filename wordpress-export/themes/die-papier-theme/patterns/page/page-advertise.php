<?php
/**
 * Title: Adverteer
 * Slug: die-papier/page-advertise
 * Categories: die-papier-pages
 * Keywords: advertise, advertising, adverteer, tariewe, rates, media
 * Description: Advertising page with ad options, benefits, leaflet feature, and contact form
 *
 * Content sourced from Advertise.tsx + advertising.ts + pageFaqs.ts
 * CORRECTED: Using section styles (is-style-*) and yoast/faq-block
 * NOTE: Contact form uses Gravity Forms (gf id=X) in production
 */
?>
<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","className":"is-style-section-cover-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull is-style-section-cover-hero" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"},"color":{"text":"var:preset|color|base","background":"var:preset|color|primary"}},"className":"is-style-default"} -->
            <p class="has-text-align-center has-text-color has-background has-base-color has-primary-background-color" style="font-size:var(--wp--preset--font-size--small);font-weight:700;letter-spacing:2px;text-transform:uppercase;display:inline-block;padding:0.25rem 0.75rem;border-radius:2px">Adverteer</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em">Versterk jou handelsmerk met <em>Die Papier</em></h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Wil jy jou handelsmerk uitbrei? By <em>Die Papier</em> bied ons dinamiese advertensie-oplossings wat jou met gehoor regoor Suid-Afrika verbind.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|x-large"}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--medium)">


    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|large"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">

        <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":2,"textColor":"secondary"} -->
            <h2 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Advertensie-opsies</h2>
            <!-- /wp:heading -->

            <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
            <div class="wp-block-columns alignwide">
                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Geklassifiseerde advertensies</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Ons geklassifiseerde afdeling bied 'n bekostigbare manier om lesers nasionaal te bereik.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/geklassifiseerd"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->

                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Vertoonadvertensies</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Maak 'n impak met ons vertoonadvertensieplasings op beide ons webwerf en in die gedrukte uitgawe.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/vertoonadvertensies"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->

                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Pamflette</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Kry jou boodskap direk in die hande van lesers met koerant-insetsels en pamflette.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/pamflette"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->

            <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
            <div class="wp-block-columns alignwide">
                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Geborgde inhoud</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Gebruik ons betroubare platforms om jou boodskap met boeiende geborgde artikels te bevorder.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/geborgde-inhoud"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->

                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Borgskappe</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Borg 'n spesifieke afdeling of geleentheid en belyn jou handelsmerk met betekenisvolle inhoud.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/borgskappe"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->

                <!-- wp:column {"className":"is-style-card-hover"} -->
                <div class="wp-block-column is-style-card-hover">
                    <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                    <h3 class="wp-block-heading has-secondary-color has-text-color">Bylaes</h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"main-accent"} -->
                    <p class="has-main-accent-color has-text-color">Vertoon jou handelsmerk met 'n toegewyde advertensiebylaag, ontwerp vir diepgaande dekking.</p>
                    <!-- /wp:paragraph -->
                    <!-- wp:paragraph -->
                    <p><a href="/adverteer/bylaes"><strong>Lees meer →</strong></a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->

        </div>
        <!-- /wp:group -->

        <!-- wp:group {"align":"wide","backgroundColor":"secondary","style":{"border":{"radius":"16px"},"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
        <div class="wp-block-group alignwide has-secondary-background-color has-background" style="border-radius:16px;padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large);padding-left:var(--wp--preset--spacing--large);padding-right:var(--wp--preset--spacing--large)">
            <!-- wp:columns {"verticalAlignment":"center"} -->
            <div class="wp-block-columns are-vertically-aligned-center">
                <!-- wp:column {"verticalAlignment":"center"} -->
                <div class="wp-block-column is-vertically-aligned-center">
                        <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"},"color":{"text":"var:preset|color|base","background":"var:preset|color|primary"}},"className":"is-style-default"} -->
                        <p class="has-text-color has-background has-base-color has-primary-background-color" style="font-size:var(--wp--preset--font-size--small);font-weight:700;letter-spacing:2px;text-transform:uppercase;display:inline-block;padding:0.25rem 0.75rem;border-radius:2px">Ho&#235; Impak</p>
                        <!-- /wp:paragraph -->

                        <!-- wp:heading {"level":2,"textColor":"base"} -->
                        <h2 class="wp-block-heading has-base-color has-text-color">Maksimeer jou impak met pamflet-advertering</h2>
                        <!-- /wp:heading -->

                        <!-- wp:paragraph {"textColor":"tertiary"} -->
                        <p class="has-tertiary-color has-text-color">Kry jou boodskap direk in die hande van betrokke lesers met pasgemaakte koerant-insetsels en pamflette. Of dit nou 'n promosie-flyer, katalogus of spesiale aanbod is, ons pamflet-advertering verseker ho&#235; sigbaarheid en geteikende bereik.</p>
                        <!-- /wp:paragraph -->

                        <!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap"}} -->
                        <div class="wp-block-buttons">
                            <!-- wp:button {"backgroundColor":"base","textColor":"secondary","className":"is-style-fill"} -->
                            <div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-secondary-color has-base-background-color has-text-color has-background wp-element-button" href="/adverteer/pamflette">Lees meer oor pamflette</a></div>
                            <!-- /wp:button -->

                            <!-- wp:button {"className":"is-style-outline","style":{"color":{"text":"var:preset|color|base"},"border":{"color":"rgba(255,255,255,0.3)"}}} -->
                            <div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color wp-element-button" style="color:var(--wp--preset--color--base);border-color:rgba(255,255,255,0.3)">Vra meer inligting</a></div>
                            <!-- /wp:button -->
                        </div>
                        <!-- /wp:buttons -->
                    </div>
                    <!-- /wp:column -->
                </div>
                <!-- /wp:columns -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->


    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Waarom <em>Die Papier</em>?</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
        <p class="has-text-align-center has-main-accent-color has-text-color">Om jou advertering uit te brei is 'n kragtige manier om te verseker dat jou handelsmerkboodskap oor diverse markte aanklank vind.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
        <div class="wp-block-columns alignwide">
            <!-- wp:column {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
            <div class="wp-block-column is-style-card" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">
                <!-- wp:heading {"textAlign":"center","level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Uitgebreide bereik</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
                <p class="has-text-align-center has-main-accent-color has-text-color">Kry sigbaarheid oor veelvuldige streke en bereik 'n gehoor met uiteenlopende demografieë en belange.</p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
            <div class="wp-block-column is-style-card" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">
                <!-- wp:heading {"textAlign":"center","level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Handelsmerk-konsekwentheid</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
                <p class="has-text-align-center has-main-accent-color has-text-color">Bied 'n eenvormige, herkenbare handelsmerkbeeld regoor die land aan, wat vertroue en lojaliteit versterk.</p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
            <div class="wp-block-column is-style-card" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">
                <!-- wp:heading {"textAlign":"center","level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Groter impak</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
                <p class="has-text-align-center has-main-accent-color has-text-color">Verhoog algehele veldtog-effektiwiteit deur hoër frekwensie van indrukke en invloed op koopbesluite.</p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->


    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Begin 'n gesprek</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
        <p class="has-text-align-center has-main-accent-color has-text-color">Vul die vorm hieronder in en een van ons advertensie-spesialiste sal binnekort met jou in verbinding tree.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"}}}} -->
        <div class="wp-block-columns alignwide">
            <!-- wp:column {"width":"66.66%"} -->
            <div class="wp-block-column" style="flex-basis:66.66%">
                <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--large);padding-right:var(--wp--preset--spacing--large)">
                    <!-- wp:gravityforms/form {"formId":"4","title":false,"description":false,"ajax":true} /-->

                    <!-- wp:paragraph {"textColor":"main-accent","style":{"typography":{"fontSize":"var:preset|font-size|small"}}} -->
                    <p class="has-main-accent-color has-text-color" style="font-size:var(--wp--preset--font-size--small)">Gravity Forms-kontakvorm word hier vertoon in produksie. Sluit velde in: Naam, Van, E-pos, Telefoon, Maatskappynaam, Tipe advertering (dropdown), Streek (dropdown), Besonderhede (textarea), Terme en Voorwaardes (checkbox), Privaatheidsbeleid (checkbox).</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"width":"33.33%"} -->
            <div class="wp-block-column" style="flex-basis:33.33%">
                <!-- wp:group {"backgroundColor":"secondary-accent","style":{"border":{"radius":"16px"},"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group has-secondary-accent-background-color has-background" style="border-radius:16px;padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
                    <!-- wp:heading {"level":3,"textColor":"base","style":{"border":{"bottom":{"color":"rgba(255,255,255,0.2)","width":"1px"}},"spacing":{"padding":{"bottom":"var:preset|spacing|small"}}}} -->
                    <h3 class="wp-block-heading has-base-color has-text-color" style="border-bottom-color:rgba(255,255,255,0.2);border-bottom-width:1px;padding-bottom:var(--wp--preset--spacing--small)">Kontak ons direk</h3>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"textColor":"tertiary"} -->
                    <p class="has-tertiary-color has-text-color">Ons span advertensie-spesialiste is gereed om saam met jou te werk. Kontak die relevante afdeling hieronder.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:heading {"level":4,"textColor":"base"} -->
                    <h4 class="wp-block-heading has-base-color has-text-color">Nasionaal</h4>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph {"textColor":"tertiary"} -->
                    <p class="has-tertiary-color has-text-color"><a href="mailto:advertensies@diepapier.co.za" style="color:var(--wp--preset--color--tertiary)">advertensies@diepapier.co.za</a></p>
                    <!-- /wp:paragraph -->

                    <!-- wp:separator {"style":{"color":{"background":"rgba(255,255,255,0.2)"}},"className":"is-style-wide"} -->
                    <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background is-style-wide" style="background-color:rgba(255,255,255,0.2);color:rgba(255,255,255,0.2)"/>
                    <!-- /wp:separator -->

                    <!-- wp:group {"backgroundColor":"primary","style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
                    <div class="wp-block-group has-primary-background-color has-background" style="border-radius:12px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
                        <!-- wp:heading {"textAlign":"center","level":4,"textColor":"base"} -->
                        <h4 class="wp-block-heading has-text-align-center has-base-color has-text-color">Het jy hulp nodig?</h4>
                        <!-- /wp:heading -->

                        <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                        <p class="has-text-align-center has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">Onseker watter pakket reg is vir jou? Stuur vir ons 'n algemene navraag.</p>
                        <!-- /wp:paragraph -->

                        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
                        <div class="wp-block-buttons">
                            <!-- wp:button {"backgroundColor":"base","textColor":"primary","width":100,"className":"is-style-fill"} -->
                            <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill"><a class="wp-block-button__link has-primary-color has-base-background-color has-text-color has-background wp-element-button" href="mailto:advertensies@diepapier.co.za">E-pos ons</a></div>
                            <!-- /wp:button -->
                        </div>
                        <!-- /wp:buttons -->
                    </div>
                    <!-- /wp:group -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->
</main>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-muted","align":"full","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group alignfull is-style-section-muted" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Gereelde vrae</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
    <p class="has-text-align-center has-main-accent-color has-text-color">Vrae oor advertensie-opsies, tariewe en sluitingsdatums.</p>
    <!-- /wp:paragraph -->

    <!-- wp:yoast/faq-block -->
    <div class="schema-faq wp-block-yoast-faq-block">
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Watter advertensie-opsies bied <em>Die Papier</em> aan?</strong>
            <p class="schema-faq-answer">Ons bied 'n wye reeks advertensie-opsies aan, insluitend vertoonadvertensies (druk en aanlyn), geklassifiseerde advertensies, geborgde inhoud, pamflette, bylaes en borgskappe. Elke opsie kan aangepas word om by jou begroting en doelgehoor te pas.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe groot is <em>Die Papier</em> se leserstal?</strong>
            <p class="schema-faq-answer">Novus Media se publikasies het 'n gesamentlike weeklikse bereik van byna 4 miljoen lesers in beide druk- en aanlynformate. <em>Die Papier</em> bied 'n nasionale platform wat spesifiek Afrikaanse lesers teiken.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe kontak ek die advertensiespan?</strong>
            <p class="schema-faq-answer">Stuur 'n e-pos na <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a> of <a href="mailto:coleen.cilliers@diepapier.co.za">coleen.cilliers@diepapier.co.za</a>. U kan ook die advertensienavorsingsvorm op ons webwerf invul en ons sal u kontak.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Wat is die sluitingsdatums vir advertensies?</strong>
            <p class="schema-faq-answer">Advertensiemateriaal moet gewoonlik teen Woensdagoggend ingedien word vir die Vrydag-uitgawe. Kontak ons advertensiespan vir spesifieke sluitingsdatums en vereistes.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Bied julle digitale advertensie-opsies aan?</strong>
            <p class="schema-faq-answer">Ja, ons bied verskeie digitale advertensie-opsies aan, insluitend banieradvertensies op ons webwerf, nuusbrief-borgskappe, en sosiale media-veldtogte. Kontak ons vir 'n pasgemaakte digitale advertensiestrategie.</p>
        </div>
    </div>
    <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->