<?php
/**
 * Title: Beleid & Bepalings
 * Slug: die-papier/page-policies
 * Categories: die-papier-pages
 * Keywords: policies, beleid, privacy, terms, POPIA
 * Description: Policies hub page with policy cards and quick summary
 *
 * Content sourced from Policies.tsx + policies.ts + pageFaqs.ts
 * CORRECTED: Using section styles (is-style-*) and yoast/faq-block
 */
?>
<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","className":"is-style-section-cover-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull is-style-section-cover-hero" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|x-small","fontWeight":"700"},"color":{"text":"var:preset|color|base","background":"var:preset|color|primary"}},"className":"is-style-default"} -->
            <p class="has-text-align-center has-text-color has-background has-base-color has-primary-background-color" style="font-size:var(--wp--preset--font-size--x-small);font-weight:700;letter-spacing:2px;text-transform:uppercase;display:inline-block;padding:0.25rem 0.75rem;border-radius:2px">Beleid</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em">Beleid &amp; Bepalings</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","textColor":"base","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Ons is toegewyd aan die beskerming van jou privaatheid en die verskaffing van 'n veilige, deursigtige diens.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|x-large"}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--medium)">
    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
    <div class="wp-block-columns alignwide">
        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Privaatheidsbeleid</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Hoe ons jou data versamel, gebruik, deel, en beskerm regoor al ons platforms.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/privaatheidsbeleid"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Koekiebeleid</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Persoonlike inligting en koekies — wat ons versamel en hoe jy dit kan bestuur.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/koekiebeleid"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">PAIA-handleiding</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Wet op Bevordering van Toegang tot Inligting (Wet 2 van 2000) en POPIA-nakoming.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/paia"><strong>Lees meer →</strong></a></p>
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
            <h3 class="wp-block-heading has-secondary-color has-text-color">Terme en Voorwaardes</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Gebruiksvoorwaardes vir <em>Die Papier</em> se webwerf, e-koerant en dienste.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/terme-en-voorwaardes"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Redaksionele Beleid</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Ons redaksionele riglyne, joernalistieke standaarde en onafhanklikheidsverbintenis.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/redaksionele-beleid"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Kommentaarbeleid</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Reëls vir respekvolle gesprek en kommentaarmoderasie op ons platforms.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/kommentaarbeleid"><strong>Lees meer →</strong></a></p>
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
            <h3 class="wp-block-heading has-secondary-color has-text-color">Terugbetalingsbeleid</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Voorwaardes vir terugbetalings op intekenings, e-uitgawes en ander aankope.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/terugbetalings"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Klagteprosedure</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Hoe om 'n klagte oor 'n artikel, advertensie of diens by <em>Die Papier</em> in te dien.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/klagteprosedure"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"className":"is-style-card-hover"} -->
        <div class="wp-block-column is-style-card-hover">
            <!-- wp:heading {"level":3,"textColor":"secondary"} -->
            <h3 class="wp-block-heading has-secondary-color has-text-color">Kompetisiereëls</h3>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"textColor":"main-accent"} -->
            <p class="has-main-accent-color has-text-color">Standaard reëls en regulasies vir alle <em>Die Papier</em> kompetisies en weggee-aksies.</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p><a href="/beleid/kompetisiereels"><strong>Lees meer →</strong></a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

    <!-- wp:group {"align":"wide","backgroundColor":"tertiary","style":{"border":{"radius":"16px"},"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|x-large","right":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
    <div class="wp-block-group alignwide has-tertiary-background-color has-background" style="border-radius:16px;padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large);padding-left:var(--wp--preset--spacing--x-large);padding-right:var(--wp--preset--spacing--x-large)">
        <!-- wp:heading {"level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-secondary-color has-text-color">Vinnige opsomming</h2>
        <!-- /wp:heading -->

        <!-- wp:list -->
        <ul class="wp-block-list">
            <!-- wp:list-item -->
            <li>&#10003; Ons verkoop <strong>nooit</strong> jou persoonlike inligting aan derde partye nie.</li>
            <!-- /wp:list-item -->
            <!-- wp:list-item -->
            <li>&#10003; Jou data word veilig gestoor met industrie-standaard enkripsie.</li>
            <!-- /wp:list-item -->
            <!-- wp:list-item -->
            <li>&#10003; Jy het volle beheer oor jou rekening en kan dit enige tyd kanselleer.</li>
            <!-- /wp:list-item -->
            <!-- wp:list-item -->
            <li>&#10003; Ons gebruik koekies om jou ervaring te verbeter, maar jy kan dit afskakel.</li>
            <!-- /wp:list-item -->
            <!-- wp:list-item -->
            <li>&#10003; Ons voldoen aan POPIA (Protection of Personal Information Act) regulasies.</li>
            <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->
    </div>
    <!-- /wp:group -->
</main>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-muted","align":"full","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large"},"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group alignfull is-style-section-muted" style="padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large)">
    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Gereelde vrae</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"main-accent"} -->
    <p class="has-text-align-center has-main-accent-color has-text-color">Vrae ons beleid, privaatheid en klagteprosedures.</p>
    <!-- /wp:paragraph -->

    <!-- wp:yoast/faq-block -->
    <div class="schema-faq wp-block-yoast-faq-block">
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe beskerm <em>Die Papier</em> my persoonlike inligting?</strong>
            <p class="schema-faq-answer">Ons voldoen aan die Beskerming van Persoonlike Inligting Wet (POPIA) en neem streng maatreëls om u data te beskerm. Lees ons volledige Privaatheidsbeleid vir meer besonderhede.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Wat is <em>Die Papier</em> se kommentaarbeleid?</strong>
            <p class="schema-faq-answer">Ons moedig respekvolle dialoog aan. Kommentare word gemodereer en moet voldoen aan ons Kommentaarbeleid. Haatspraak, beledigings en misleidende inligting word nie toegelaat nie.</p>
        </div>
        <div class="schema-faq-section">
            <strong class="schema-faq-question">Hoe dien ek 'n klagte oor 'n artikel in?</strong>
            <p class="schema-faq-answer">U kan 'n klagte rig aan die Persraad van Suid-Afrika by <a href="mailto:enquiries@ombudsman.org.za">enquiries@ombudsman.org.za</a>. U kan ook direk aan ons redaksie skryf by <a href="mailto:lesers@diepapier.co.za">lesers@diepapier.co.za</a>.</p>
        </div>
    </div>
    <!-- /wp:yoast/faq-block -->
</div>
<!-- /wp:group -->