# Gravity Forms Integration Guide

**Last updated**: 2026-03-02
**Version**: 2.0
**Version at launch**: 2.9.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

Complete reference for Gravity Forms block integration in the Die Papier WordPress FSE theme. This guide documents all forms, block attributes, Afrikaans translations, CSS styling, and pattern integration.

---

## Table of Contents

1. [Overview](#overview)
2. [Gravity Forms Block](#gravity-forms-block)
3. [Forms Inventory](#forms-inventory)
4. [Form 1: Newsletter Signup](#form-1-newsletter-signup)
5. [Form 2: Generic Contact](#form-2-generic-contact)
6. [Form 3: Dev Tools Contact](#form-3-dev-tools-contact)
7. [Pattern Integration](#pattern-integration)
8. [Afrikaans Translations](#afrikaans-translations)
9. [Theme Styling](#theme-styling)
10. [Configuration Settings](#configuration-settings)
11. [Validation & Error Handling](#validation--error-handling)
12. [Accessibility](#accessibility)
13. [Testing Checklist](#testing-checklist)
14. [Migration Strategy](#migration-strategy)

---

## Overview

Gravity Forms provides a powerful form builder for WordPress with support for Gutenberg blocks. Die Papier uses **3 forms** across the site:

1. **Newsletter Signup** (Form ID: 1) — Footer newsletter band, newsletter CTA patterns
2. **Generic Contact** (Form ID: 2) — Contact page
3. **Dev Tools Contact** (Form ID: 3) — Developer tools pages (8 pages)

All forms use **AJAX submission** (no page reload) and include **Afrikaans translations** for validation messages and labels.

### Key Features

- **Block-based**: `gravityforms/form` block for Gutenberg
- **AJAX submission**: No page reload, inline error display
- **Afrikaans UI**: All strings translated to Afrikaans
- **Theme styling**: Custom CSS for Die Papier brand colors
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Spam protection**: Google reCAPTCHA v3 (optional, recommended for production)

---

## Gravity Forms Block

### Block Name

**Namespace**: `gravityforms`  
**Slug**: `gravityforms/form`  
**Category**: `embed`

### Block Attributes

```json
{
  "formId": "1",
  "title": false,
  "description": false,
  "ajax": true,
  "tabindex": "1",
  "fieldValues": "",
  "theme": "orbital"
}
```

### Attribute Descriptions

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `formId` | `string` | `""` | Form ID to display (required) |
| `title` | `boolean` | `true` | Show form title |
| `description` | `boolean` | `true` | Show form description |
| `ajax` | `boolean` | `false` | Enable AJAX submission (no page reload) |
| `tabindex` | `string` | `"1"` | Starting tab index for form fields |
| `fieldValues` | `string` | `""` | Pre-populate field values (JSON string) |
| `theme` | `string` | `"gravity"` | Form theme (options: `gravity`, `orbital`, `reset`) |

### Die Papier Default Settings

All Die Papier forms use these settings:

```html
<!-- wp:gravityforms/form {"formId":"1","title":false,"description":false,"ajax":true} /-->
```

**Why?**
- `title: false` — Pattern headings provide context, form title is redundant
- `description: false` — Pattern copy provides description
- `ajax: true` — Better UX (no page reload, inline errors)

---

## Forms Inventory

| Form ID | Form Name | Purpose | Fields | Used In |
|---------|-----------|---------|--------|---------|
| 1 | Newsletter Signup | Newsletter subscription | Email, Submit | Footer, Newsletter CTA patterns |
| 2 | Generic Contact | Contact page | Name, Email, Message, Submit | Contact page |
| 3 | Dev Tools Contact | Developer tools support | Name, Email, Tool Name (hidden), Message, Submit | 8 dev tools pages |

---

## Form 1: Newsletter Signup

**Form ID**: `1`  
**Purpose**: Newsletter subscription (footer band, newsletter CTA sections)  
**Fields**: 1 (Email) + Submit button  
**AJAX**: Enabled

### Field Structure

```php
// Form 1: Newsletter Signup
$form = [
    'title' => 'Nuusbrief Intekening',
    'description' => '',
    'fields' => [
        [
            'id' => 1,
            'type' => 'email',
            'label' => 'E-posadres',
            'placeholder' => 'jou@epos.co.za',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief \'n geldige e-posadres in.',
            'cssClass' => 'newsletter-email-field',
        ],
    ],
    'button' => [
        'type' => 'text',
        'text' => 'Teken in',
        'cssClass' => 'newsletter-submit-button',
    ],
    'confirmations' => [
        [
            'id' => 'conf_1',
            'name' => 'Default Confirmation',
            'isDefault' => true,
            'type' => 'message',
            'message' => 'Dankie! Jy sal binnekort van ons hoor.',
        ],
    ],
    'notifications' => [
        [
            'id' => 'notif_1',
            'name' => 'Admin Notification',
            'to' => '{admin_email}',
            'subject' => 'Nuwe nuusbrief intekening',
            'message' => 'Nuwe intekening: {Email:1}',
        ],
    ],
];
```

### Block Markup (Used in Patterns)

```html
<!-- wp:gravityforms/form {"formId":"1","title":false,"description":false,"ajax":true} /-->
```

### Usage Locations

1. **Footer Template Part** (`parts/footer.html`)
   - Newsletter band above main footer
   - Section style: `is-style-section-red`
   - Heading: "Bly ingelig met ons nuusbrief"
   - Layout: Centered, max-width 600px

2. **Newsletter CTA Pattern** (`patterns/section/section-newsletter-cta.php`)
   - Standalone newsletter signup section
   - Section style: `is-style-section-muted` or `is-style-section-red`
   - Heading: "Teken in vir ons gratis nuusbrief"
   - Layout: Centered, max-width 700px

### CSS Styling

```css
/* Newsletter form - footer variant */
.is-style-section-red .gform_wrapper form {
    max-width: 600px;
    margin: 0 auto;
}

.is-style-section-red .gform_wrapper .gform_fields {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.is-style-section-red .gform_wrapper .gfield {
    flex: 1;
    margin: 0 !important;
}

.is-style-section-red .gform_wrapper input[type="email"] {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    border-radius: 4px;
    font-size: 16px;
}

.is-style-section-red .gform_wrapper input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.is-style-section-red .gform_wrapper .gform_footer {
    margin: 0 !important;
}

.is-style-section-red .gform_wrapper input[type="submit"] {
    background-color: #142135; /* Navy */
    color: #FFFFFF;
    border: none;
    padding: 12px 32px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.is-style-section-red .gform_wrapper input[type="submit"]:hover {
    background-color: #0f1825; /* Darker navy */
}

/* Mobile responsive */
@media (max-width: 768px) {
    .is-style-section-red .gform_wrapper .gform_fields {
        flex-direction: column;
        gap: 12px;
    }
    
    .is-style-section-red .gform_wrapper input[type="submit"] {
        width: 100%;
    }
}
```

---

## Form 2: Generic Contact

**Form ID**: `2`  
**Purpose**: Contact page form  
**Fields**: 3 (Name, Email, Message) + Submit button  
**AJAX**: Enabled

### Field Structure

```php
// Form 2: Generic Contact
$form = [
    'title' => 'Kontak Ons',
    'description' => '',
    'fields' => [
        [
            'id' => 1,
            'type' => 'text',
            'label' => 'Naam',
            'placeholder' => 'Jou naam',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief jou naam in.',
            'cssClass' => 'contact-name-field',
        ],
        [
            'id' => 2,
            'type' => 'email',
            'label' => 'E-posadres',
            'placeholder' => 'jou@epos.co.za',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief \'n geldige e-posadres in.',
            'cssClass' => 'contact-email-field',
        ],
        [
            'id' => 3,
            'type' => 'textarea',
            'label' => 'Boodskap',
            'placeholder' => 'Skryf jou boodskap hier...',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief \'n boodskap in.',
            'cssClass' => 'contact-message-field',
            'rows' => 8,
        ],
    ],
    'button' => [
        'type' => 'text',
        'text' => 'Stuur',
        'cssClass' => 'contact-submit-button',
    ],
    'confirmations' => [
        [
            'id' => 'conf_2',
            'name' => 'Default Confirmation',
            'isDefault' => true,
            'type' => 'message',
            'message' => 'Dankie vir jou boodskap! Ons sal binnekort reageer.',
        ],
    ],
    'notifications' => [
        [
            'id' => 'notif_2',
            'name' => 'Admin Notification',
            'to' => 'lesers@diepapier.co.za',
            'subject' => 'Nuwe kontak boodskap',
            'message' => "Naam: {Naam:1}\nE-pos: {E-posadres:2}\n\nBoodskap:\n{Boodskap:3}",
        ],
    ],
];
```

### Block Markup

```html
<!-- wp:gravityforms/form {"formId":"2","title":false,"description":false,"ajax":true} /-->
```

### Usage Locations

1. **Contact Page Pattern** (`patterns/section/section-contact-form.php`)
   - Standalone contact form section
   - Section style: `is-style-section-white`
   - Heading: "Stuur vir ons 'n boodskap"
   - Layout: Max-width 800px, centered

### CSS Styling

```css
/* Generic contact form */
.gform_wrapper form {
    max-width: 800px;
    margin: 0 auto;
}

.gform_wrapper .gform_fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.gform_wrapper .gfield {
    margin: 0 !important;
}

.gform_wrapper label.gfield_label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--wp--preset--color--contrast);
    font-size: 16px;
}

.gform_wrapper input[type="text"],
.gform_wrapper input[type="email"],
.gform_wrapper textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--wp--preset--color--base-3);
    background: var(--wp--preset--color--base);
    color: var(--wp--preset--color--contrast);
    border-radius: 4px;
    font-size: 16px;
    font-family: var(--wp--preset--font-family--inter);
    transition: border-color 0.2s ease;
}

.gform_wrapper input[type="text"]:focus,
.gform_wrapper input[type="email"]:focus,
.gform_wrapper textarea:focus {
    outline: none;
    border-color: var(--wp--preset--color--primary);
}

.gform_wrapper textarea {
    resize: vertical;
    min-height: 150px;
}

.gform_wrapper .gform_footer {
    margin-top: 8px !important;
}

.gform_wrapper input[type="submit"] {
    background-color: var(--wp--preset--color--primary);
    color: #FFFFFF;
    border: none;
    padding: 14px 40px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.gform_wrapper input[type="submit"]:hover {
    background-color: #b8001f; /* Darker red */
}

/* Validation errors */
.gform_wrapper .gfield_error {
    background-color: rgba(215, 0, 37, 0.05);
    border-left: 3px solid var(--wp--preset--color--primary);
    padding: 12px;
    margin-bottom: 16px !important;
}

.gform_wrapper .gfield_error .validation_message {
    color: var(--wp--preset--color--primary);
    font-size: 14px;
    margin-top: 8px;
}

.gform_wrapper .gfield_error input,
.gform_wrapper .gfield_error textarea {
    border-color: var(--wp--preset--color--primary);
}
```

---

## Form 3: Dev Tools Contact

**Form ID**: `3`  
**Purpose**: Developer tools support form (8 tool-specific forms)  
**Fields**: 4 (Name, Email, Tool Name [hidden], Message) + Submit button  
**AJAX**: Enabled

### Field Structure

```php
// Form 3: Dev Tools Contact
$form = [
    'title' => 'Kontak Ons',
    'description' => '',
    'fields' => [
        [
            'id' => 1,
            'type' => 'text',
            'label' => 'Naam',
            'placeholder' => 'Jou naam',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief jou naam in.',
            'cssClass' => 'devtools-name-field',
        ],
        [
            'id' => 2,
            'type' => 'email',
            'label' => 'E-posadres',
            'placeholder' => 'jou@epos.co.za',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief \'n geldige e-posadres in.',
            'cssClass' => 'devtools-email-field',
        ],
        [
            'id' => 3,
            'type' => 'hidden',
            'label' => 'Instrument Naam',
            'defaultValue' => '', // Populated via URL parameter
            'allowsPrepopulate' => true,
            'inputName' => 'tool_name',
        ],
        [
            'id' => 4,
            'type' => 'textarea',
            'label' => 'Boodskap',
            'placeholder' => 'Beskryf jou vraag of opmerking...',
            'isRequired' => true,
            'errorMessage' => 'Voer asseblief \'n boodskap in.',
            'cssClass' => 'devtools-message-field',
            'rows' => 8,
        ],
    ],
    'button' => [
        'type' => 'text',
        'text' => 'Stuur',
        'cssClass' => 'devtools-submit-button',
    ],
    'confirmations' => [
        [
            'id' => 'conf_3',
            'name' => 'Default Confirmation',
            'isDefault' => true,
            'type' => 'message',
            'message' => 'Dankie vir jou boodskap! Ons sal binnekort reageer.',
        ],
    ],
    'notifications' => [
        [
            'id' => 'notif_3',
            'name' => 'Admin Notification',
            'to' => 'ontwikkelaar@diepapier.co.za',
            'subject' => 'Dev Tools Kontak: {Instrument Naam:3}',
            'message' => "Instrument: {Instrument Naam:3}\nNaam: {Naam:1}\nE-pos: {E-posadres:2}\n\nBoodskap:\n{Boodskap:4}",
        ],
    ],
];
```

### Block Markup (with Pre-population)

```html
<!-- wp:gravityforms/form {"formId":"3","title":false,"description":false,"ajax":true,"fieldValues":"{\"tool_name\":\"Koerante Vergelyk\"}"} /-->
```

**Pre-population Strategy**:
- Each dev tool page passes the tool name via `fieldValues` attribute
- Hidden field `tool_name` is populated with the current tool's name
- Admin notification email includes tool name in subject line for easy filtering

### Usage Locations

1. **Dev Tools Pages** (8 pages in `/ontwikkelaar/` directory)
   - `/ontwikkelaar/koerante-vergelyk` → Tool Name: "Koerante Vergelyk"
   - `/ontwikkelaar/woord-vind` → Tool Name: "Woord Vind"
   - `/ontwikkelaar/syfer-verwerk` → Tool Name: "Syfer Verwerk"
   - `/ontwikkelaar/datum-bereken` → Tool Name: "Datum Bereken"
   - `/ontwikkelaar/kleur-kies` → Tool Name: "Kleur Kies"
   - `/ontwikkelaar/beeld-formaat` → Tool Name: "Beeld Formaat"
   - `/ontwikkelaar/qr-kode` → Tool Name: "QR Kode"
   - `/ontwikkelaar/lys-maak` → Tool Name: "Lys Maak"

**Note**: Dev tools pages are **not yet created** in WordPress export. This form will be added when dev tools pages are migrated from React to WordPress.

---

## Pattern Integration

### 1. Footer Newsletter Band

**File**: `/wordpress-export/themes/die-papier-theme/parts/footer.html`  
**Pattern**: Uses footer pattern (`die-papier/footer`) which includes newsletter band  
**Form ID**: 1 (Newsletter Signup)

**Block Markup in Footer Pattern**:
```html
<!-- Newsletter Band (above main footer) -->
<!-- wp:group {"align":"full","className":"is-style-section-red","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-red">
    
    <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
    <div class="wp-block-group alignwide">
        
        <!-- wp:heading {"textAlign":"center","level":3,"textColor":"base"} -->
        <h3 class="has-text-align-center has-base-color has-text-color">Bly ingelig met ons nuusbrief</h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center","textColor":"base","fontSize":"300"} -->
        <p class="has-text-align-center has-base-color has-text-color has-300-font-size">Ontvang die nuutste nuus, artikels en e-uitgawes regstreeks in jou inkassie.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:gravityforms/form {"formId":"1","title":false,"description":false,"ajax":true} /-->
        
    </div>
    <!-- /wp:group -->
    
</div>
<!-- /wp:group -->
```

**Status**: ✅ Complete (added 2026-03-01)

---

### 2. Newsletter CTA Section

**File**: `/wordpress-export/themes/die-papier-theme/patterns/section/section-newsletter-cta.php`  
**Slug**: `die-papier/section-newsletter-cta`  
**Form ID**: 1 (Newsletter Signup)

**Block Markup**:
```html
<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
    
    <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
    <div class="wp-block-group alignwide">
        
        <!-- wp:heading {"textAlign":"center","level":2,"fontSize":"700"} -->
        <h2 class="has-text-align-center has-700-font-size">Teken in vir ons gratis nuusbrief</h2>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center","fontSize":"400"} -->
        <p class="has-text-align-center has-400-font-size">Bly op hoogte van die nuutste nuus, artikels en e-uitgawes. Geen gemors, net die belangrike stories.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:gravityforms/form {"formId":"1","title":false,"description":false,"ajax":true} /-->
        
    </div>
    <!-- /wp:group -->
    
</div>
<!-- /wp:group -->
```

**Usage**: Can be inserted into any page (About, Subscribe, etc.) as a newsletter signup CTA.

**Status**: ✅ Complete (pattern already uses Gravity Forms block)

---

### 3. Contact Form Section

**File**: `/wordpress-export/themes/die-papier-theme/patterns/section/section-contact-form.php`  
**Slug**: `die-papier/section-contact-form`  
**Form ID**: 2 (Generic Contact)

**Block Markup**:
```html
<!-- wp:group {"align":"full","className":"is-style-section-white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-white">
    
    <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group alignwide">
        
        <!-- wp:heading {"textAlign":"center","level":2,"fontSize":"700"} -->
        <h2 class="has-text-align-center has-700-font-size">Stuur vir ons 'n boodskap</h2>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center","fontSize":"400"} -->
        <p class="has-text-align-center has-400-font-size">Het jy 'n vraag, kommentaar of terugvoer? Ons hoor graag van jou.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:gravityforms/form {"formId":"2","title":false,"description":false,"ajax":true} /-->
        
    </div>
    <!-- /wp:group -->
    
</div>
<!-- /wp:group -->
```

**Usage**: Contact page (`/kontak`)

**Status**: ✅ Complete (updated from Form ID 1 to Form ID 2 on 2026-03-01)

---

## Afrikaans Translations

All Gravity Forms UI strings must be translated to Afrikaans. Translations are stored in `/wp-content/languages/plugins/gravityforms-af_ZA.po`.

### Critical Strings

| English | Afrikaans | Context |
|---------|-----------|---------|
| Submit | Stuur | Submit button (generic) |
| Subscribe | Teken in | Submit button (newsletter) |
| Send | Stuur | Submit button (contact) |
| Name | Naam | Form label |
| Email | E-posadres | Form label |
| Message | Boodskap | Form label |
| This field is required. | Hierdie veld is verplig. | Validation error |
| Please enter a valid email address. | Voer asseblief 'n geldige e-posadres in. | Validation error |
| Thank you for your submission. | Dankie vir jou inskrywing. | Confirmation |
| There was a problem with your submission. Please review the fields below. | Daar was 'n probleem met jou inskrywing. Gaan asseblief die velde hieronder na. | Submission error |
| Loading... | Laai... | AJAX loading |
| Submitting... | Stuur in... | AJAX submitting |

### Translation File Structure

```po
# Gravity Forms Afrikaans (South Africa) Translation
msgid "Submit"
msgstr "Stuur"

msgid "Subscribe"
msgstr "Teken in"

msgid "Name"
msgstr "Naam"

msgid "Email"
msgstr "E-posadres"

msgid "Message"
msgstr "Boodskap"

msgid "This field is required."
msgstr "Hierdie veld is verplig."

msgid "Please enter a valid email address."
msgstr "Voer asseblief 'n geldige e-posadres in."

msgid "Thank you for your submission."
msgstr "Dankie vir jou inskrywing."

msgid "There was a problem with your submission. Please review the fields below."
msgstr "Daar was 'n probleem met jou inskrywing. Gaan asseblief die velde hieronder na."

msgid "Loading..."
msgstr "Laai..."

msgid "Submitting..."
msgstr "Stuur in..."

# ... (200+ strings total)
```

### Custom Field-Level Translations

For custom error messages on specific fields, use Gravity Forms field settings:

```php
'errorMessage' => 'Voer asseblief jou naam in.', // Name field
'errorMessage' => 'Voer asseblief \'n geldige e-posadres in.', // Email field
'errorMessage' => 'Voer asseblief \'n boodskap in.', // Message field
```

---

## Theme Styling

All Gravity Forms custom CSS is in `/wordpress-export/themes/die-papier-theme/assets/css/gravity-forms.css`.

### CSS File Structure

```css
/**
 * Gravity Forms Theme Styling
 * Die Papier WordPress Theme
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

/* === 1. Form Container === */
.gform_wrapper {
    font-family: var(--wp--preset--font-family--inter);
}

/* === 2. Field Layout === */
.gform_wrapper .gform_fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.gform_wrapper .gfield {
    margin: 0 !important;
}

/* === 3. Labels === */
.gform_wrapper label.gfield_label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--wp--preset--color--contrast);
    font-size: 16px;
    line-height: 1.5;
}

.gform_wrapper .gfield_required {
    color: var(--wp--preset--color--primary);
}

/* === 4. Input Fields === */
.gform_wrapper input[type="text"],
.gform_wrapper input[type="email"],
.gform_wrapper input[type="tel"],
.gform_wrapper input[type="url"],
.gform_wrapper input[type="number"],
.gform_wrapper textarea,
.gform_wrapper select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--wp--preset--color--base-3);
    background: var(--wp--preset--color--base);
    color: var(--wp--preset--color--contrast);
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.gform_wrapper input[type="text"]:focus,
.gform_wrapper input[type="email"]:focus,
.gform_wrapper input[type="tel"]:focus,
.gform_wrapper input[type="url"]:focus,
.gform_wrapper input[type="number"]:focus,
.gform_wrapper textarea:focus,
.gform_wrapper select:focus {
    outline: none;
    border-color: var(--wp--preset--color--primary);
    box-shadow: 0 0 0 3px rgba(215, 0, 37, 0.1);
}

.gform_wrapper textarea {
    resize: vertical;
    min-height: 150px;
    line-height: 1.6;
}

/* === 5. Submit Button === */
.gform_wrapper .gform_footer {
    margin-top: 8px !important;
    padding: 0 !important;
}

.gform_wrapper input[type="submit"] {
    background-color: var(--wp--preset--color--primary);
    color: #FFFFFF;
    border: none;
    padding: 14px 40px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

.gform_wrapper input[type="submit"]:hover {
    background-color: #b8001f; /* Darker red */
}

.gform_wrapper input[type="submit"]:active {
    transform: scale(0.98);
}

.gform_wrapper input[type="submit"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* === 6. Validation Errors === */
.gform_wrapper .gfield_error {
    background-color: rgba(215, 0, 37, 0.05);
    border-left: 3px solid var(--wp--preset--color--primary);
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 16px !important;
}

.gform_wrapper .gfield_error .gfield_label {
    color: var(--wp--preset--color--primary);
}

.gform_wrapper .validation_message {
    color: var(--wp--preset--color--primary);
    font-size: 14px;
    margin-top: 8px;
    display: block;
}

.gform_wrapper .gfield_error input,
.gform_wrapper .gfield_error textarea,
.gform_wrapper .gfield_error select {
    border-color: var(--wp--preset--color--primary);
}

/* === 7. Confirmation Message === */
.gform_confirmation_wrapper {
    background-color: rgba(76, 175, 80, 0.1); /* Green tint */
    border-left: 3px solid #4CAF50;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 24px;
}

.gform_confirmation_message {
    color: var(--wp--preset--color--contrast);
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

/* === 8. AJAX Loading === */
.gform_ajax_spinner {
    margin-left: 12px;
    vertical-align: middle;
}

/* === 9. Newsletter Form (Footer Variant) === */
.is-style-section-red .gform_wrapper form {
    max-width: 600px;
    margin: 0 auto;
}

.is-style-section-red .gform_wrapper .gform_fields {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
}

.is-style-section-red .gform_wrapper .gfield {
    flex: 1;
    margin: 0 !important;
}

.is-style-section-red .gform_wrapper .gfield_label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.is-style-section-red .gform_wrapper input[type="email"] {
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
}

.is-style-section-red .gform_wrapper input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.is-style-section-red .gform_wrapper input[type="email"]:focus {
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.is-style-section-red .gform_wrapper .gform_footer {
    margin: 0 !important;
}

.is-style-section-red .gform_wrapper input[type="submit"] {
    background-color: #142135; /* Navy */
    color: #FFFFFF;
    padding: 12px 32px;
}

.is-style-section-red .gform_wrapper input[type="submit"]:hover {
    background-color: #0f1825; /* Darker navy */
}

/* === 10. Mobile Responsive === */
@media (max-width: 768px) {
    .is-style-section-red .gform_wrapper .gform_fields {
        flex-direction: column;
        gap: 12px;
    }
    
    .is-style-section-red .gform_wrapper input[type="submit"] {
        width: 100%;
    }
    
    .gform_wrapper input[type="submit"] {
        width: 100%;
    }
}

/* === 11. Dark Section Overrides === */
.is-style-section-navy .gform_wrapper label.gfield_label,
.is-style-section-image .gform_wrapper label.gfield_label {
    color: #FFFFFF;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.is-style-section-navy .gform_wrapper input[type="text"],
.is-style-section-navy .gform_wrapper input[type="email"],
.is-style-section-navy .gform_wrapper textarea {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: #FFFFFF;
}

.is-style-section-navy .gform_wrapper input::placeholder,
.is-style-section-navy .gform_wrapper textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}
```

### Enqueuing CSS

Add to `/inc/enqueue.php`:

```php
function diepapier_enqueue_scripts() {
    // ... existing enqueues ...
    
    // Gravity Forms styling
    wp_enqueue_style(
        'diepapier-gravity-forms',
        get_template_directory_uri() . '/assets/css/gravity-forms.css',
        array(),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'diepapier_enqueue_scripts' );
```

---

## Configuration Settings

### Form Settings (Gravity Forms Admin)

For each form, configure these settings in **Forms → [Form Name] → Settings**:

#### Form Settings Tab

- **Form Title**: [Form Name]
- **Form Description**: (Leave blank, patterns provide context)
- **Form Button Text**: See form-specific sections above
- **Enable AJAX**: ✅ Yes (checked)
- **Enable Honeypot**: ✅ Yes (spam prevention)
- **Form Layout**: Default (stacked fields)
- **Label Placement**: Top (above input)
- **Sub-Label Placement**: Below Input

#### Confirmations Tab

- **Confirmation Type**: Text
- **Confirmation Message**: See form-specific confirmation messages above
- **Disable Auto-Formatting**: ❌ No (allow paragraphs)
- **Query String**: (Leave blank)

#### Notifications Tab

- **Send To**: See form-specific notification emails above
- **From Name**: Die Papier
- **From Email**: noreply@diepapier.co.za
- **Reply To**: {Email field merge tag}
- **BCC**: (Optional, for record-keeping)
- **Subject**: See form-specific subjects above
- **Message**: See form-specific messages above

### Global Settings (Gravity Forms → Settings)

#### General Settings

- **No-Conflict Mode**: ❌ No (unless theme conflicts exist)
- **Enable Background Updates**: ✅ Yes
- **Currency**: ZAR (South African Rand)
- **ReCAPTCHA**: ✅ Enable (v3, invisible)
  - Site Key: [Your reCAPTCHA v3 site key]
  - Secret Key: [Your reCAPTCHA v3 secret key]
  - Threshold: 0.5 (default)

#### Form Styles

- **Output CSS**: ❌ No (theme provides custom styles)
- **Output HTML5**: ✅ Yes

#### Logging

- **Enable Logging**: ✅ Yes (for debugging)
- **Log Level**: Errors + Warnings (production), All Messages (development)

---

## Validation & Error Handling

### Built-in Validation Rules

Gravity Forms provides built-in validation for:

- **Required fields**: "Hierdie veld is verplig."
- **Email format**: "Voer asseblief 'n geldige e-posadres in."
- **Number format**: "Voer asseblief 'n geldige nommer in."
- **URL format**: "Voer asseblief 'n geldige URL in."
- **Phone format**: "Voer asseblief 'n geldige foonnommer in."

### Custom Validation

For custom validation rules, use the `gform_validation` filter:

```php
// Example: Custom validation for newsletter signup
add_filter( 'gform_validation_1', 'custom_newsletter_validation' );
function custom_newsletter_validation( $validation_result ) {
    $form = $validation_result['form'];
    
    foreach ( $form['fields'] as &$field ) {
        // Field 1 = Email
        if ( $field->id == 1 ) {
            $email = rgpost( 'input_1' );
            
            // Check if email already exists in database
            if ( email_exists( $email ) ) {
                $field->failed_validation = true;
                $field->validation_message = 'Hierdie e-posadres is reeds geregistreer.';
                $validation_result['is_valid'] = false;
            }
        }
    }
    
    $validation_result['form'] = $form;
    return $validation_result;
}
```

### AJAX Error Display

Errors are displayed inline, next to the field, with:
- Red border on input field
- Red validation message below field
- Red left border on field container
- Light red background on field container

### Submission Errors

If the form fails to submit (server error, network error), a global error message is displayed:

```
"Daar was 'n probleem met jou inskrywing. Probeer asseblief weer."
```

---

## Accessibility

### ARIA Labels

Gravity Forms automatically adds ARIA attributes:

```html
<form id="gform_1" aria-label="Nuusbrief Intekening" role="form">
    <label for="input_1_1" id="label_1_1" class="gfield_label">
        E-posadres<span class="gfield_required" aria-label="vereiste">*</span>
    </label>
    <input
        type="email"
        id="input_1_1"
        name="input_1"
        aria-required="true"
        aria-invalid="false"
        aria-describedby="validation_message_1_1"
    />
    <div id="validation_message_1_1" class="validation_message" role="alert">
        Voer asseblief 'n geldige e-posadres in.
    </div>
</form>
```

### Keyboard Navigation

- **Tab**: Navigate between form fields
- **Enter**: Submit form (when focused on submit button)
- **Space**: Check/uncheck checkboxes, select radio buttons
- **Arrow keys**: Navigate select dropdowns

### Screen Reader Support

- Field labels are announced when focused
- Required fields are announced as "vereiste"
- Validation errors are announced immediately (via `role="alert"`)
- Submit button is announced as "Stuur knoppie" (button)
- Confirmation messages are announced on page load

### Focus Management

- Visible focus indicator (blue outline) on all interactive elements
- Focus moves to first field with error after invalid submission
- Focus returns to submit button after AJAX submission

---

## Testing Checklist

### Form Functionality

- [ ] Form displays correctly in all section styles (white, red, navy, shade, image)
- [ ] Required field validation works (empty field shows error)
- [ ] Email field validation works (invalid email shows error)
- [ ] AJAX submission works (no page reload, inline confirmation message)
- [ ] Confirmation message displays after successful submission
- [ ] Admin notification email is sent to correct address
- [ ] Form resets after successful submission (fields cleared)

### Newsletter Signup (Form 1)

- [ ] Form displays in footer newsletter band (red section)
- [ ] Form displays in newsletter CTA pattern (shade section)
- [ ] Email field accepts valid email addresses
- [ ] Submit button text is "Teken in"
- [ ] Confirmation message: "Dankie! Jy sal binnekort van ons hoor."
- [ ] Admin receives notification at `{admin_email}`

### Generic Contact (Form 2)

- [ ] Form displays on Contact page pattern
- [ ] All 3 fields (Name, Email, Message) are required
- [ ] Textarea expands/contracts correctly (resize: vertical)
- [ ] Submit button text is "Stuur"
- [ ] Confirmation message: "Dankie vir jou boodskap! Ons sal binnekort reageer."
- [ ] Admin receives notification at `lesers@diepapier.co.za`

### Dev Tools Contact (Form 3)

- [ ] Form displays on dev tools pages (when migrated)
- [ ] Hidden "Tool Name" field is pre-populated correctly
- [ ] Submit button text is "Stuur"
- [ ] Admin receives notification at `ontwikkelaar@diepapier.co.za`
- [ ] Email subject includes tool name: "Dev Tools Kontak: [Tool Name]"

### Afrikaans Translations

- [ ] All field labels are in Afrikaans
- [ ] All validation error messages are in Afrikaans
- [ ] All confirmation messages are in Afrikaans
- [ ] Submit button text is in Afrikaans ("Stuur", "Teken in")
- [ ] Loading spinner text: "Laai..." (if visible)

### Accessibility

- [ ] All fields have visible labels (or visually hidden labels for newsletter footer form)
- [ ] Required fields are marked with red asterisk (*) and `aria-required="true"`
- [ ] Validation errors have `role="alert"` for screen reader announcement
- [ ] Focus indicator is visible on all fields and submit button
- [ ] Form can be completed using keyboard only (Tab, Enter)
- [ ] Screen reader announces field labels, errors, and confirmation messages

### Performance

- [ ] Form loads quickly (no noticeable delay)
- [ ] AJAX submission is fast (<2 seconds)
- [ ] reCAPTCHA v3 does not block legitimate users (test with various IPs)
- [ ] No JavaScript errors in browser console

### Spam Protection

- [ ] Honeypot field is hidden (CSS: `display: none`)
- [ ] reCAPTCHA v3 is enabled and functioning (check Gravity Forms > Entries for reCAPTCHA score)
- [ ] Test submission with reCAPTCHA score <0.5 (should be flagged as spam)

---

## Migration Strategy

> **Source**: Merged from `gravity-forms-strategy.md` — documents the React → WordPress Gravity Forms migration approach.

**Status:** Active (Refactored 2026-03-01)  
**Context:** Migrating React-based forms (`react-hook-form` + `zod`) to WordPress Gravity Forms using the native **Gravity Forms Block**.

### Migration Philosophy

We have refactored all patterns and pages to use the native **Gravity Forms Block** instead of legacy shortcodes or custom HTML. This ensures full compatibility with the Gutenberg editor and better maintenance.

#### Why?
*   **Security:** Gravity Forms handles sanitization, validation, and spam protection (Zero Spam).
*   **Integration:** Native integration with MailPoet (via connector plugin) and Database (entries).
*   **Maintainability:** Clients can edit form fields without touching code.
*   **Editor Experience:** Native block support allows for visual configuration of form settings (AJAX, title, description) directly in the editor.

### Extended Form Mapping (React → WordPress)

In addition to the 3 primary forms documented above, the following React forms are mapped for future migration:

#### Competition Entry Form
*   **React Source:** `CompetitionSingle.tsx`
*   **Target GF ID:** `3` (Generic) or Unique ID per competition.
*   **Fields:**
    1.  **Name & Surname**
    2.  **Email**
    3.  **Cell Number**
    4.  **Answer/Entry** (Text or File Upload)
    5.  **Hidden Field:** `competition_slug` (Populated dynamically via Block Attributes)

#### Advertise Form
*   **React Source:** `AdvertiseForm.tsx`
*   **Target GF ID:** `4`
*   **Fields:**
    1.  **Company Name**
    2.  **Contact Person**
    3.  **Email & Phone**
    4.  **Interested In:** (Checkboxes: Web, Print, Social)
    5.  **Budget Range:** (Dropdown)
    6.  **Message**

#### Submit Event Form
*   **React Source:** `SubmitEventForm.tsx`
*   **Target GF ID:** `5` (Post Creation)
*   **Fields:**
    1.  **Event Title** (Post Title)
    2.  **Event Description** (Post Body)
    3.  **Date & Time** (Custom Fields)
    4.  **Venue** (Custom Field)
    5.  **Image Upload** (Featured Image)
    6.  **Organizer Contact**

#### Submit Hub Listing Form
*   **React Source:** `SubmitHubForm.tsx`
*   **Target GF ID:** `6` (Post Creation)
*   **Fields:**
    1.  **Business Name** (Post Title)
    2.  **Description** (Post Body)
    3.  **Category** (Taxonomy)
    4.  **Address/Map** (Custom Fields)
    5.  **Contact Details**
    6.  **Logo Upload**

#### Newsletter Form (Inline/Footer)
*   **React Source:** `NewsletterForm.tsx`
*   **Target GF ID:** `7` (Minimal)
*   **Fields:**
    1.  **Email** (Required, Placeholder: "Jou e-posadres")
    2.  **Submit Button** (Icon only or "Teken In")
*   **Styling:** Use `is-style-inline` block style.

### Styling Strategy (Theme.json)

Gravity Forms 2.5+ uses BEM methodology. We will apply our Design System tokens to GF classes in `style.css` (or `theme.css`).

| Component | GF Class | Tailwind / Token Mapping |
| :--- | :--- | :--- |
| **Input** | `.gform_wrapper input[type=text]` | `@apply border-input bg-secondary rounded-md px-3 py-2 text-sm focus:ring-brand-red;` |
| **Label** | `.gfield_label` | `@apply text-sm font-medium text-foreground mb-2;` |
| **Button** | `.gform_button` | `@apply bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-red-hover transition-colors;` |
| **Error** | `.validation_message` | `@apply text-brand-red text-xs mt-1;` |

#### Custom Block Styles
We can register block styles for the Gravity Forms block in `block-styles.php`:
*   `is-style-card`: Adds white background, padding, and shadow.
*   `is-style-minimal`: Removes labels (placeholders only).

### MailPoet Integration

1.  Install "Connector for Gravity Forms and MailPoet".
2.  Go to **Forms > Settings > MailPoet**.
3.  Create a Feed:
    *   **Map Fields:** Email -> Email, Name -> First Name, Surname -> Last Name.
    *   **List:** Select "General Newsletter" (or dynamic selection).
    *   **Double Opt-in:** Enabled (GDPR compliance).

### Implementation Steps

1.  **Backend:** Create the forms in WP Admin.
2.  **Export:** Export the Forms as JSON (`forms.json`).
3.  **Include:** Place `forms.json` in `/wordpress-export/plugins/die-papier-blocks/assets/`.
4.  **Import Script:** (Optional) Create a WP-CLI command to import forms automatically on setup.
5.  **Patterns:** Update `section-newsletter-cta.php` to use `<!-- wp:gravityforms/form {"formId":1} /-->` instead of HTML markup.

---

## Related Files

**Patterns**:
- `/patterns/section/section-newsletter-cta.php`
- `/patterns/section/section-contact-form.php`
- `/patterns/footer/footer.php` (includes newsletter band)

**Template Parts**:
- `/parts/footer.html` (references footer pattern)

**Assets**:
- `/assets/css/gravity-forms.css` (custom form styling)

**PHP Integration**:
- `/inc/enqueue.php` (enqueues CSS)
- `/functions.php` (loads translation, custom validation filters)

**Audit Reports**:
- `/reports/audits/gravity-forms-block-audit.md`

**Related Guidelines**:
- `/guidelines/wordpress-migration/woocommerce/woocommerce-blocks.md` (checkout form vs. Gravity Forms)
- `/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md` (form styling in section styles)

---

**End of Gravity Forms Integration Guide**