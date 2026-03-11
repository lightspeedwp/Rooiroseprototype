<?php
/**
 * Title: Inteken: E-uitgawe
 * Slug: die-papier/page-subscribe-eedition
 * Categories: die-papier-pages
 * Keywords: subscribe, e-edition, e-uitgawe, inteken, digital, pricing
 * Description: E-edition subscription page with pricing plans and FAQ
 *
 * Content sourced from SubscribeEEdition.tsx + subscriptions.ts
 * CORRECTED: Using section styles (is-style-*) and yoast/faq-block
 */
?>
<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","className":"is-style-section-cover-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull is-style-section-cover-hero" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"},"color":{"text":"var:preset|color|base","background":"var:preset|color|primary"}},"className":"is-style-default"} -->
            <p class="has-text-align-center has-text-color has-background has-base-color has-primary-background-color" style="font-size:var(--wp--preset--font-size--small);font-weight:700;letter-spacing:2px;text-transform:uppercase;display:inline-block;padding:0.25rem 0.75rem;border-radius:2px">Kies jou pakket</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em"><em>Die Papier</em> se e-koerant</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Kry toegang tot die e-koerant elke week. Bevat alle inhoud van die drukkoerant. <em>Die Papier</em> is Vrydag op die rak in uitgesoekte winkels.</p>
            <!-- /wp:paragraph -->

            <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"},"style":{"spacing":{"blockGap":"var:preset|spacing|small"}}} -->
            <div class="wp-block-group">
                <!-- wp:paragraph {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">&#10003; Volledige inhoud van drukkoerant</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">&#10003; Lees op enige toestel</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">&#10003; R35 per enkele e-uitgawe</p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|x-large"}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">

    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2} -->
        <h2 class="wp-block-heading has-text-align-center">Kies jou plan</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","className":"is-style-lead"} -->
        <p class="has-text-align-center is-style-lead">Buigsame intekeningsopsies vir elke leser</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
        <div class="wp-block-columns alignwide">
            <!-- wp:column {"className":"is-style-card"} -->
            <div class="wp-block-column is-style-card">
                <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-secondary-color has-text-color">1 Maand</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent"} -->
                <p class="has-main-accent-color has-text-color">Perfek vir nuwe lesers</p>
                <!-- /wp:paragraph -->
                <!-- wp:heading {"level":2,"textColor":"secondary","style":{"typography":{"fontSize":"clamp(2.5rem, 5vw, 3.5rem)","fontWeight":"900"}}} -->
                <h2 class="wp-block-heading has-secondary-color has-text-color" style="font-size:clamp(2.5rem, 5vw, 3.5rem);font-weight:900">R140</h2>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-main-accent-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">= R35 per uitgawe</p>
                <!-- /wp:paragraph -->
                <!-- wp:separator {"className":"is-style-wide"} -->
                <hr class="wp-block-separator is-style-wide"/>
                <!-- /wp:separator -->
                <!-- wp:list -->
                <ul class="wp-block-list">
                    <!-- wp:list-item -->
                    <li>4 e-uitgawes</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Toegang tot alle uitgawes vanaf intekeningdatum</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Kanselleer enige tyd</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>14-dae gratis proeftydperk</li>
                    <!-- /wp:list-item -->
                </ul>
                <!-- /wp:list -->
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"width":100,"className":"is-style-outline"} -->
                    <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button">Teken In</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"is-style-card","style":{"border":{"width":"2px","color":"var:preset|color|primary"}}} -->
            <div class="wp-block-column is-style-card" style="border-width:2px;border-color:var(--wp--preset--color--primary)">
                <!-- wp:paragraph {"align":"center","backgroundColor":"primary","textColor":"base","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"},"border":{"radius":"9999px"},"spacing":{"padding":{"top":"0.25rem","bottom":"0.25rem","left":"1rem","right":"1rem"}}}} -->
                <p class="has-text-align-center has-base-color has-primary-background-color has-text-color has-background" style="border-radius:9999px;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:1rem;font-size:var(--wp--preset--font-size--small);font-weight:700;letter-spacing:2px;text-transform:uppercase">&#11088; Gewildste</p>
                <!-- /wp:paragraph -->
                <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-secondary-color has-text-color">3 Maande</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent"} -->
                <p class="has-main-accent-color has-text-color">Ons gewildste keuse</p>
                <!-- /wp:paragraph -->
                <!-- wp:heading {"level":2,"textColor":"secondary","style":{"typography":{"fontSize":"clamp(2.5rem, 5vw, 3.5rem)","fontWeight":"900"}}} -->
                <h2 class="wp-block-heading has-secondary-color has-text-color" style="font-size:clamp(2.5rem, 5vw, 3.5rem);font-weight:900">R390</h2>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-main-accent-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">= R32.50 per uitgawe</p>
                <!-- /wp:paragraph -->
                <!-- wp:separator {"className":"is-style-wide"} -->
                <hr class="wp-block-separator is-style-wide"/>
                <!-- /wp:separator -->
                <!-- wp:list -->
                <ul class="wp-block-list">
                    <!-- wp:list-item -->
                    <li>12 e-uitgawes</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Toegang tot alle uitgawes vanaf intekeningdatum</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Spaar R30</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>14-dae gratis proeftydperk</li>
                    <!-- /wp:list-item -->
                </ul>
                <!-- /wp:list -->
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"width":100,"backgroundColor":"primary","className":"is-style-fill"} -->
                    <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill"><a class="wp-block-button__link has-primary-background-color has-background wp-element-button">Teken In</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"is-style-card"} -->
            <div class="wp-block-column is-style-card">
                <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-secondary-color has-text-color">12 Maande</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent"} -->
                <p class="has-main-accent-color has-text-color">Maksimum waarde</p>
                <!-- /wp:paragraph -->
                <!-- wp:heading {"level":2,"textColor":"secondary","style":{"typography":{"fontSize":"clamp(2.5rem, 5vw, 3.5rem)","fontWeight":"900"}}} -->
                <h2 class="wp-block-heading has-secondary-color has-text-color" style="font-size:clamp(2.5rem, 5vw, 3.5rem);font-weight:900">R1 400</h2>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent","style":{"typography":{"fontSize":"var:preset|font-size|base"}}} -->
                <p class="has-main-accent-color has-text-color" style="font-size:var(--wp--preset--font-size--base)">= ~R26.92 per uitgawe</p>
                <!-- /wp:paragraph -->
                <!-- wp:separator {"className":"is-style-wide"} -->
                <hr class="wp-block-separator is-style-wide"/>
                <!-- /wp:separator -->
                <!-- wp:list -->
                <ul class="wp-block-list">
                    <!-- wp:list-item -->
                    <li>52 e-uitgawes</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Toegang tot alle uitgawes vanaf intekeningdatum</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>Spaar R420</li>
                    <!-- /wp:list-item -->
                    <!-- wp:list-item -->
                    <li>14-dae gratis proeftydperk</li>
                    <!-- /wp:list-item -->
                </ul>
                <!-- /wp:list -->
                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"width":100,"className":"is-style-outline"} -->
                    <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button">Teken In</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"align":"wide","backgroundColor":"tertiary","style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
        <div class="wp-block-group alignwide has-tertiary-background-color has-background" style="border-radius:12px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
            <!-- wp:paragraph {"style":{"typography":{"fontWeight":"700"}},"textColor":"secondary"} -->
            <p class="has-secondary-color has-text-color" style="font-weight:700">&#10003; Alle planne sluit 'n 14-dae gratis proeftydperk in</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2} -->
        <h2 class="wp-block-heading has-text-align-center">Meer opsies</h2>
        <!-- /wp:heading -->

        <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
        <div class="wp-block-columns alignwide">
            <!-- wp:column {"className":"is-style-card-hover"} -->
            <div class="wp-block-column is-style-card-hover">
                <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-secondary-color has-text-color">Enkele e-uitgawe</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent"} -->
                <p class="has-main-accent-color has-text-color">Soek jy 'n spesifieke koerant? Koop 'n enkele e-uitgawe vir R35 — 'n eenmalige aankoop, geen intekening nodig nie.</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontWeight":"700","fontSize":"var:preset|font-size|x-large"}},"textColor":"secondary"} -->
                <p class="has-secondary-color has-text-color" style="font-size:var(--wp--preset--font-size--x-large);font-weight:700">R35 <span style="font-size:var(--wp--preset--font-size--base);font-weight:400;color:var(--wp--preset--color--main-accent)">per uitgawe</span></p>
                <!-- /wp:paragraph -->
                <!-- wp:buttons -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"className":"is-style-outline"} -->
                    <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/e-uitgawes">Bekyk e-uitgawes</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"is-style-card-hover"} -->
            <div class="wp-block-column is-style-card-hover">
                <!-- wp:heading {"level":3,"textColor":"secondary"} -->
                <h3 class="wp-block-heading has-secondary-color has-text-color">Papier Aflewering</h3>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"textColor":"main-accent"} -->
                <p class="has-main-accent-color has-text-color">Verkies jy die reuk van ink op papier? Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand en jy kry jou koerant elke Vrydag. Aflewering sluit nie digitale e-uitgawe-toegang in nie.</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontWeight":"700","fontSize":"var:preset|font-size|x-large"}},"textColor":"secondary"} -->
                <p class="has-secondary-color has-text-color" style="font-size:var(--wp--preset--font-size--x-large);font-weight:700">Vanaf R140<span style="font-size:var(--wp--preset--font-size--base);font-weight:400;color:var(--wp--preset--color--main-accent)">/maand</span></p>
                <!-- /wp:paragraph -->
                <!-- wp:buttons -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"className":"is-style-outline"} -->
                    <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/inteken/aflewering">Bekyk aflewerings opsies</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
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
    <p class="has-text-align-center has-main-accent-color has-text-color">Vrae oor ons intekenopsies, aflewering en betaalmetodes.</p>
    <!-- /wp:paragraph -->

    <!-- wp:yoast/faq-block -->
    <div class="schema-faq wp-block-yoast-faq-block">
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Watter intekeningsopsies is beskikbaar?</strong>
            <p class="schema-faq-answer">Ons bied twee hoofopsies: (1) Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand — kontak On the Dot direk by 087 353 1291 of diepapierintekening@onthedot.co.za. (2) 'n Elektroniese e-koerant kos R35 per uitgawe, of teken in vanaf R140 per maand vir toegang tot alle e-uitgawes vanaf u intekeningdatum. Aflewering en digitale intekening is afsonderlike produkte.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Kan ek my intekening enige tyd kanselleer?</strong>
            <p class="schema-faq-answer">Ja, u kan u intekening enige tyd kanselleer. Indien u binne die eerste 14 dae kanselleer, ontvang u 'n volle terugbetaling. Daarna word u intekening aan die einde van die huidige betaalperiode gestaak.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe werk tuisaflewering?</strong>
            <p class="schema-faq-answer">Tuisaflewering word hanteer deur On the Dot, ons afleweringsmaatskappy. Die koerant word elke Vrydag voor 10:00 by u voordeur afgelewer. Huisaflewering begin vanaf R140 per maand. Aflewering sluit nie digitale e-uitgawe-toegang in nie — dit is 'n afsonderlike produk. Vir navrae, e-pos diepapierintekening@onthedot.co.za.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Watter betaalmetodes word aanvaar?</strong>
            <p class="schema-faq-answer">Ons aanvaar kredietkaarte (Visa, Mastercard), debietorders, en EFT-betalings. Alle aanlyn betalings word deur 'n veilige betaalplatform verwerk.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Kan ek 'n geskenk-intekening koop?</strong>
            <p class="schema-faq-answer">Ja, ons bied geskenk-intekenings aan. Kontak ons by diepapierintekening@onthedot.co.za vir meer besonderhede.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoeveel kos 'n enkele e-koerant?</strong>
            <p class="schema-faq-answer">'n Enkele elektroniese e-koerant kos R35 per uitgawe. U kan dit koop by die E-uitgawes bladsy en onmiddellik aflaai as 'n PDF om op enige toestel te lees.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Wat is die verskil tussen die e-koerant-intekening en huisaflewering?</strong>
            <p class="schema-faq-answer">Die e-koerant-intekening (vanaf R140/maand) gee u digitale toegang tot elke uitgawe vanaf u intekeningdatum. Huisaflewering (ook vanaf R140/maand) lewer die gedrukte koerant elke Vrydag by u huis af. Dit is twee afsonderlike produkte — huisaflewering sluit nie digitale toegang in nie. Vir huisaflewering, kontak On the Dot direk.</p>
        </div>
    </div>
    <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->