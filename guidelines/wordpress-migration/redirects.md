# WordPress Redirect Configuration

**Last updated**: 2026-02-23
**Version**: 1.0

> **Deploy-ready config files** are available at `/wordpress-export/config/`:
> - `redirects.conf` — Nginx include file
> - `.htaccess-redirects` — Apache mod_rewrite rules
> - `redirection-import.json` — WordPress Redirection plugin JSON import

All legacy English URLs from the React app must redirect (301) to their Afrikaans WordPress equivalents. This can be implemented via:

1. **WordPress Plugin**: Redirection or Safe Redirect Manager
2. **Nginx rewrite rules** (preferred for performance)
3. **`.htaccess`** (Apache)

## Nginx Configuration

```nginx
# ─── Main Pages ──────────────────────────────────────────────────────
rewrite ^/about/?$                    /oor-ons permanent;
rewrite ^/about/team/?$               /oor-ons/redaksie permanent;
rewrite ^/contact/?$                  /kontak permanent;
rewrite ^/weather/?$                  /weer permanent;
rewrite ^/traffic/?$                  /verkeer permanent;
rewrite ^/search/?$                   /soek permanent;
rewrite ^/sitemap/?$                  /inhoudsopgawe permanent;
rewrite ^/faq/?$                      /vrae permanent;

# ─── Advertising ─────────────────────────────────────────────────────
rewrite ^/advertise/?$                        /adverteer permanent;
rewrite ^/advertise/classifieds/?$            /adverteer/geklassifiseerd permanent;
rewrite ^/advertise/display-advertising/?$    /adverteer/vertoonadvertensies permanent;
rewrite ^/advertise/leaflets/?$               /adverteer/pamflette permanent;
rewrite ^/advertise/sponsored-content/?$      /adverteer/geborgde-inhoud permanent;
rewrite ^/advertise/sponsorships/?$           /adverteer/borgskappe permanent;
rewrite ^/advertise/supplements/?$            /adverteer/bylaes permanent;

# ─── E-Commerce & Auth ──────────────────────────────────────────────
rewrite ^/my-account/?$               /my-rekening permanent;
rewrite ^/register/?$                 /registreer permanent;
rewrite ^/cart/?$                     /mandjie permanent;
rewrite ^/basket/?$                   /mandjie permanent;
rewrite ^/checkout/?$                 /betaal permanent;
rewrite ^/subscribe/?$                /inteken permanent;
rewrite ^/subscribe/e-edition/?$      /inteken/e-uitgawe permanent;
rewrite ^/subscribe/delivery/?$       /inteken/aflewering permanent;
rewrite ^/subscriptions/?$            /inteken permanent;

# ─── Content Sections ───────────────────────────────────────────────
rewrite ^/news/?$                     /nuus permanent;
rewrite ^/opinion/?$                  /dink permanent;
rewrite ^/business/?$                 /sake permanent;
rewrite ^/lifestyle/?$                /leefstyl permanent;
rewrite ^/events/?$                   /gebeure permanent;
rewrite ^/events/(.+)$                /gebeure/$1 permanent;
rewrite ^/obituaries/?$               /doodsberrigte permanent;
rewrite ^/obituaries/(.+)$            /doodsberrigte/$1 permanent;
rewrite ^/competitions/?$             /kompetisies permanent;
rewrite ^/competitions/(.+)$          /kompetisies/$1 permanent;
rewrite ^/e-editions/?$               /e-uitgawes permanent;
rewrite ^/e-editions/(.+)$            /e-uitgawes/$1 permanent;
rewrite ^/sponsors/?$                 /geborg permanent;
rewrite ^/sponsors/(.+)$              /geborg/$1 permanent;
rewrite ^/borge/?$                    /geborg permanent;
rewrite ^/borge/(.+)$                 /geborg/$1 permanent;

# ─── Multimedia ──────────────────────────────────────────────────────
rewrite ^/multimedia-archive/?$       /multimedia permanent;
rewrite ^/multimedia-archive/(.+)$    /multimedia/$1 permanent;

# ─── Newsletter ──────────────────────────────────────────────────────
rewrite ^/newsletter/?$               /nuusbrief-inteken permanent;
rewrite ^/newsletter-archive/?$       /nuusbrief-argief permanent;
rewrite ^/newsletter/manage/?$        /nuusbrief/bestuur permanent;
rewrite ^/newsletter/unsubscribe/?$   /nuusbrief/teken-af permanent;

# ─── Policies ────────────────────────────────────────────────────────
rewrite ^/beleide/?$                          /beleid permanent;
rewrite ^/beleide/(.*)$                       /beleid/$1 permanent;
rewrite ^/policies/?$                         /beleid permanent;
rewrite ^/policies/privacy/?$                 /beleid/privaatheidsbeleid permanent;
rewrite ^/policies/privacy-policy/?$          /beleid/privaatheidsbeleid permanent;
rewrite ^/policies/terms/?$                   /beleid/terme-en-voorwaardes permanent;
rewrite ^/policies/terms-conditions/?$        /beleid/terme-en-voorwaardes permanent;
rewrite ^/policies/cookies/?$                 /beleid/koekiebeleid permanent;
rewrite ^/policies/cookie-policy/?$           /beleid/koekiebeleid permanent;
rewrite ^/policies/paia/?$                    /beleid/paia permanent;
rewrite ^/policies/user-rules/?$              /beleid/gebruikersreels permanent;
rewrite ^/policies/advertising-guidelines/?$  /beleid/advertensie-riglyne permanent;
rewrite ^/policies/press-code/?$              /beleid/perskode permanent;
rewrite ^/policies/ai-policy/?$               /beleid/ki-beleid permanent;
rewrite ^/policies/comment-policy/?$          /beleid/kommentaarbeleid permanent;
rewrite ^/policies/returns/?$                 /beleid/terugsendingsbeleid permanent;
rewrite ^/policies/returns-policy/?$          /beleid/terugsendingsbeleid permanent;
rewrite ^/policies/complaints/?$              /beleid/klagteprosedure permanent;

# ─── Thank You Pages ────────────────────────────────────────────────
rewrite ^/thank-you/contact/?$        /dankie-vir-kontak permanent;
rewrite ^/thank-you/newsletter/?$     /dankie-vir-nuusbrief-inskrywing permanent;
rewrite ^/thank-you/registration/?$   /dankie-vir-registrasie permanent;
rewrite ^/thank-you/submission/?$     /dankie-vir-jou-indiening permanent;
rewrite ^/thank-you/competition/?$    /dankie-vir-kompetisie-inskrywing permanent;
rewrite ^/thank-you/advertising/?$    /dankie-advertensie-navraag permanent;

# ─── Author / Tag ───────────────────────────────────────────────────
rewrite ^/author/(.+)$                /skrywer/$1 permanent;
rewrite ^/tag/(.+)$                   /onderwerp/$1 permanent;

# ─── Submit ──────────────────────────────────────────────────────────
rewrite ^/submit/?$                   /stuur-in permanent;
rewrite ^/submit/event/?$             /gebeure/dien-in permanent;
```

## WordPress Redirection Plugin (JSON Import)

If using the Redirection plugin, export the above as JSON entries. Each entry should:
-   **Match Type**: URL
-   **Action**: 301 Redirect
-   **Group**: Legacy English Routes

## PHP Redirect (functions.php fallback)

```php
function dp_legacy_redirects() {
    $redirects = array(
        '/about'     => '/oor-ons',
        '/contact'   => '/kontak',
        '/weather'   => '/weer',
        '/traffic'   => '/verkeer',
        // ... add all from list above
    );
    
    $request = $_SERVER['REQUEST_URI'];
    $clean   = strtok( $request, '?' );
    $clean   = rtrim( $clean, '/' );
    
    if ( isset( $redirects[ $clean ] ) ) {
        wp_redirect( home_url( $redirects[ $clean ] ), 301 );
        exit;
    }
}
add_action( 'template_redirect', 'dp_legacy_redirects' );
```

## Notes

-   All redirects are **301 (Permanent)** to preserve SEO authority.
-   Test all redirects after deployment using `curl -I` or a redirect checker tool.
-   Monitor 404 logs for the first 2 weeks after launch to catch any missed redirects.
-   Google Search Console should be configured to monitor for crawl errors from old URLs.