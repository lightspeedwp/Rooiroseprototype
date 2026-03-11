<?php
/**
 * Title: Soekfilters (Verskuil)
 * Slug: die-papier/hidden-search-filters
 * Categories: die-papier-hidden
 * Keywords: search, filters, soek, filtreer
 * Inserter: no
 * Description: Search filters sidebar (requires custom JavaScript for filter interactions)
 * Content from content-for-review.md lines 185-197 on 2026-02-28
 */
?>

<!-- wp:group {"className":"search-filters","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"blockGap":"var:preset|spacing|x-small"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group search-filters has-base-background-color has-background" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small)">

    <!-- wp:heading {"level":3} -->
    <h3 class="wp-block-heading">Filtreer resultate</h3>
    <!-- /wp:heading -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"level":4,"fontSize":"small"} -->
    <h4 class="wp-block-heading has-small-font-size">Rangskik</h4>
    <!-- /wp:heading -->

    <!-- wp:list {"className":"is-style-no-bullets search-sort-list"} -->
    <ul class="is-style-no-bullets search-sort-list">
        <!-- wp:list-item -->
        <li><label><input type="radio" name="sort" value="date-desc" checked> Jongste</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="radio" name="sort" value="date-asc"> Oudste</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="radio" name="sort" value="relevance"> Relevansie</label></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"level":4,"fontSize":"small"} -->
    <h4 class="wp-block-heading has-small-font-size">Kategorie</h4>
    <!-- /wp:heading -->

    <!-- wp:list {"className":"is-style-no-bullets search-category-list"} -->
    <ul class="is-style-no-bullets search-category-list">
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="all" checked> Alles</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="nuus"> Nuus</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="sport"> Sport</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="sake"> Sake</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="leefstyl"> Leefstyl</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="dink"> Dink</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="skole"> Skole</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="category" value="kompetisies"> Kompetisies</label></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"level":4,"fontSize":"small"} -->
    <h4 class="wp-block-heading has-small-font-size">Datum</h4>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p><label for="date-from">Van:</label><br>
    <input type="date" id="date-from" name="date-from" class="search-date-input"></p>
    <!-- /wp:paragraph -->

    <!-- wp:paragraph -->
    <p><label for="date-to">Tot:</label><br>
    <input type="date" id="date-to" name="date-to" class="search-date-input"></p>
    <!-- /wp:paragraph -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"level":4,"fontSize":"small"} -->
    <h4 class="wp-block-heading has-small-font-size">Inhoudstipe</h4>
    <!-- /wp:heading -->

    <!-- wp:list {"className":"is-style-no-bullets search-type-list"} -->
    <ul class="is-style-no-bullets search-type-list">
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="content-type" value="articles" checked> Artikels</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="content-type" value="events"> Gebeure</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="content-type" value="obituaries"> Rubrieke</label></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><label><input type="checkbox" name="content-type" value="multimedia"> Multimedia</label></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:buttons -->
    <div class="wp-block-buttons">
        <!-- wp:button {"width":100} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link wp-element-button" id="apply-filters">Pas filters toe</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->

    <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
    <p class="has-text-align-center has-small-font-size"><a href="#" id="clear-filters">Verwyder alle filters</a></p>
    <!-- /wp:paragraph -->

    <!-- wp:separator {"className":"is-style-wide"} -->
    <hr class="wp-block-separator has-alpha-channel-opacity is-style-wide"/>
    <!-- /wp:separator -->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-mrec","align":"center"} /-->

</div>
<!-- /wp:group -->