# WooCommerce Testing Checklist

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Cart Testing

- [ ] Add single e-edition (R35) to cart -> Cart shows correct item
- [ ] Add 1-month subscription (R140) to cart -> Cart shows correct item
- [ ] Cart displays e-edition cover image (not generic product image)
- [ ] Cart displays e-edition metadata (edition date, issue number)
- [ ] Empty cart message displays when cart is empty
- [ ] "Gaan voort na betaal" button links to `/betaal`
- [ ] Mini cart icon updates with item count badge (red)
- [ ] Mini cart drawer shows cart items and total

---

## Checkout Testing

- [ ] Checkout uses distraction-free header/footer (no navigation, no ads)
- [ ] Checkout form displays all billing fields (Name, Email, Address)
- [ ] Guest checkout is DISABLED (forces account creation)
- [ ] Payfast payment method is available and selected by default
- [ ] "Plaas bestelling" button submits order
- [ ] Validation errors display in Afrikaans
- [ ] Trust signals display: "Veilige betaling deur Payfast"

---

## Order Confirmation Testing

- [ ] Success message displays: "Jou e-uitgawe is gereed!"
- [ ] Order confirmation status block shows order number and status
- [ ] Order confirmation summary block shows itemized order details
- [ ] "Lees jou e-uitgawe" button links to `/e-uitgawes`
- [ ] "Gaan na My Rekening" button links to `/my-rekening`
- [ ] Checkout header/footer remain (consistent experience)

---

## My Account Testing

- [ ] Dashboard tab shows account overview
- [ ] Orders tab shows order history
- [ ] Subscriptions tab shows active subscriptions (via WC Subscriptions)
- [ ] Account Details tab allows profile editing
- [ ] Logout tab logs user out
- [ ] All tab labels are in Afrikaans

---

## Accessibility Testing

- [ ] Cart: Full keyboard navigation (Tab, Enter, Esc)
- [ ] Checkout: Full keyboard navigation, validation errors announced
- [ ] Mini cart: Opens on Enter, closes on Esc
- [ ] My Account: Arrow keys switch tabs
- [ ] Screen reader announces all labels and errors

---

## Payment Testing (Payfast)

- [ ] Payfast redirect occurs on "Plaas bestelling"
- [ ] Payment options display: Credit card, EFT, Instant EFT
- [ ] Successful payment redirects to order confirmation page
- [ ] Failed payment shows error message (Afrikaans)
- [ ] Subscription renewal charges correctly (test with 1-day trial)

---

## Membership Access Testing

- [ ] After purchase, user gains access to e-editions
- [ ] "Lees nou" button appears on e-edition cards (was "Koop hierdie uitgawe" before)
- [ ] User can download e-edition PDF
- [ ] Access is granted from subscription start date onward (not historical archive)
- [ ] Trial expiry blocks access after 14 days (if not converted)
- [ ] Cancelled subscription retains access until end of billing period

---

**End of Testing Checklist**
