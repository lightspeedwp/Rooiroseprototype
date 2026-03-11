# WooCommerce Block: Customer Account

**Last updated**: 2026-03-03
**Block Name**: `woocommerce/customer-account`
**Category**: `woocommerce`
**Display Name**: Customer Account

---

## Overview

A block that allows customers to log in and out of their accounts. Used in the header for account access and on the My Account page.

---

## Block Specification

- **Name:** `woocommerce/customer-account`
- **Supports:** align, color (background, text), interactivity (clientNavigation), spacing (margin, padding), typography (fontSize)
- **Attributes:** `displayStyle`, `iconClass`, `iconStyle`

---

## Block Styles

### Default (`wc-customer-account-default`)
**File**: `styles/blocks/woocommerce/customer-account/default.json`

Brand-aligned account icon/link styling.

---

## Pattern Usage

### `die-papier/woo-my-account`
**File**: `patterns/woocommerce/woo-my-account.php`
**Template**: `page-my-account.html`

The My Account pattern contains store notices and the WooCommerce account dashboard with subscription management.

---

## React Component Mapping

| React Component | WP Block |
|----------------|----------|
| User avatar/icon in `Header` | `woocommerce/customer-account` |
| Account page content | WooCommerce native dashboard |

---

## Afrikaans Labels

| English | Afrikaans |
|---------|-----------|
| My Account | My Rekening |
| Log In | Meld aan |
| Log Out | Meld af |
| Dashboard | Oorsig |
| Orders | Bestellings |
| Subscriptions | Intekeninge |
| Downloads | Aflaai |
| Account Details | Rekeningbesonderhede |
