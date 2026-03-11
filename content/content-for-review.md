DP-content.md




------------------

# **Nuusbrief Inteken**

## **Instructions**

The Content File file is here \= /content/pages/newsletter.md

The template component file is here \= Unknown 

The “Nuusbrief Inteken” page strings have had minor updates below:

# **Hero Section**

\[Block: dp/content-hero\]

- Title: "Kry ons gratis nuusbrief"  
- Subtitle: "Ontvang die jongste nuus elke Dinsdag en Vrydag regstreeks in jou e-posbus."

# **Newsletter Options**

\[Block: core/columns {align: wide}\]

## **Dinsdag Nuusbrief**

- Title: "Dinsdag-nuusbrief"  
- Description: " ’n Blik vooruit op die week se nuus, samestelling van die beste stories en eksklusiewe inhoud."  
- Frequency: "Elke Dinsdag"  
- \[Checkbox: Subscribe\]

## **Vrydag Nuusbrief**

- Title: "Vrydag-nuusbrief"  
- Description: "Die week se hoogtepunte, die jongste e-uitgawe, en naweek-leesstof."  
- Frequency: "Elke Vrydag"  
- \[Checkbox: Subscribe\]

## **Brekende nuus**

- Title: "Brekende nuus"  
- Description: "Onmiddellike kennisgewings van groot nuusstories soos dit gebeur."  
- Frequency: "Ad hoc"  
- \[Checkbox: Subscribe\]

# **Subscription Form**

\[Block: core/form / Gravity Form / MailPoet\]

- Email input  
- Name input (optional)  
- Newsletter selection checkboxes  
- Submit button: "Teken in"  
- Privacy note: "Ons sal nooit jou e-pos met ’n derde partye deel nie."

# **FAQ Section**

\[Block: dp/faq-accordion {category: "newsletter"}\]  


------------------

# **Huisaflewering Intekening**

[https://diepapier-alt.figma.site/inteken/aflewering](https://diepapier-alt.figma.site/inteken/aflewering)

## **Instructions**

The Content File file is here \= /content/pages/subscribe-delivery.md

The template component file is here \= Unknown 

The “Huisaflewering Intekening” page strings have had minor updates below:

## **Hero Section**

\<\<\<Prototype has the following that is not on the document below.

Aflewerings Areas  
Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. Vir huisaflewering, bel die On the Dot afleweringspan by 087 353 1291 of stuur 'n e-pos na diepapierintekening@onthedot.co.za.

Please change to  
Afleweringsgebiede  
Ons lewer af in die groter metrogebiede en sommige omliggende dorpe. Vir huisaflewering, bel die On the Dot-afleweringspan by 087 353 1291 of stuur ’n e-pos aan diepapierintekening@onthedot.co.za.

\[Block: dp/content-hero\]

- Title: "Huisaflewering"  
- Subtitle: "Kry *Die Papier* elke Vrydag by jou voordeur afgelewer."

## **Delivery Plans**

\[Block: core/columns {align: wide}\]

### **1 maand \- R140**

- 4 koerante afgelewer  
- Gratis e-uitgawetoegang  
- Kanselleer enige tyd \[Button: Kies plan\]

### **3 maande \- R455**

- 12 koerante afgelewer  
- Gratis e-uitgawetoegang  
- Bespaar op aflewering \[Button: Kies plan\]

### **6 maande \- R910**

- 24 koerante afgelewer  
- Gratis e-uitgawetoegang  
- Vaste prys \[Button: Kies plan\]

### **12 maande \- R1 820**

- 52 koerante afgelewer  
- Gratis e-uitgawetoegang  
- Bespaar R300 per jaar  
- **Beste waarde** \[Button: Kies plan\]

## **Delivery Info**

\[Block: core/group {style: "section-shade"}\]

- Title: "Afleweringsinligting"  
- Delivered by On the Dot, every Friday before 10:00  
- Available in metro areas across South Africa  
- Check delivery coverage: Enter your postal code

## **FAQ Section**

\[Block: dp/faq-accordion {category: "delivery"}\]  

------------------



------------------

Soek
https://diepapier-alt.figma.site/soek
https://diepapier-alt.figma.site/soek?q=nuus 

Instructions

The Content File file is here = /content/pages/search.md


The template component file is here = Unknown 

The search results page strings have had minor updates below:


<<<Prototype has category that the document below doesn’t have. If possible – change the categories on the prototype to



Alles
Nuus
Sport
Sake
Leefstyl
Dink
Skole
Kompetisies


And delete
Skole rugby>>>>





Hero Section

[Block: core/search {align: wide}]

Placeholder: "Soek vir artikels, gebeure, multimedia..."
Title: "Soekresultate vir '[Query]'"
Filter Sidebar
[Block: dp/filter-sidebar]

Sort: Jongste | Oudste | Relevansie
Filter by: Category
Filter by: Date Range
Filter by: Content Type (Articles, Events, Obituaries, Multimedia)
Results Grid
[Block: core/query {inherit: true}]

Layout: List
Template: Standard post template (title, excerpt, date, category)
Per Page: 10
Pagination: Numbered
No Results State
[Block: core/group {style: "card"}]

Title: "Geen resultate gevind"
Description: "Geen resultate gevind vir '[Query]' nie. Probeer ’n ander soekterm."
Suggestions: Gewilde bladsye, jongste artikels
Newsletter CTA
[Block: dp/newsletter-cta {variant: "sidebar"}]



------------------


title: "Rekening Aktivering" slug: "aktiveer" type: "page" template: "page" pattern: "die-papier/page-auth" status: "publish"

DONE – VERNON
Account Activation 
https://diepapier-alt.figma.site/rekening-aktivering

Instructions

The Content File file is here = /content/pages/account-activation.md


The template component file is here = Unknown 

The account activation page strings have had minor updates below:



Success State
Icon: CheckCircle (green)
Title: "Rekening geaktiveer!"
Description: "Jy kan nou aanmeld."
Button: "Meld aan" -> /my-rekening
Error State (expired/invalid token)
Icon: XCircle (red)
Title: "Aktivering onsuksesvol"
Description: "Hierdie aktiveringskakel is ongeldig, of het verval. Versoek ’n nuwe e-pos vir aktivering."
Button: "Stuur ’n nuwe e-pos" -> /aktiveer/herstuur
Already Activated State
Icon: Info (blue)
Title: "Reeds geaktiveer."
Description: "Hierdie rekening is reeds geaktiveer. Jy kan nou aanmeld."
Button: "Meld aan" -> /my-rekening




------------------

---

## **title: "Ons Span" slug: "ons-span" template: "page-team" status: "ready"**  **DONE – VERNON**

# **Team Page Content**

[https://diepapier-alt.figma.site/oor-ons/redaksie](https://diepapier-alt.figma.site/oor-ons/redaksie) 

## **Instructions**

The Content File file is here \= /content/pages/team.md

The template component file is here \= Unknown 

The team page strings have had minor updates below:

## **Hero Section**

**🛠 WP Implementation:**

- **Block:** `dp/hero-team`  
- **Fields:** Title, Subtitle, Image  
* **Title:** "Ontmoet ons span"  
* **Subtitle:** "Die mense agter die stories wat vir ons lesers saak maak."  
* **Image:** `https://images.unsplash.com/photo-1522071820081-009f0129c71c` (Group of people)

## **Editorial Section**

**🛠 WP Implementation:**

- **Block:** `dp/team-grid`  
- **Category:** Editorial (Redaksioneel)  
* **Title:** "Redaksioneel"  
* **Description:** "Ons joernaliste is verbind tot onafhanklike, feitelike en gebalanseerde verslaggewing. Ons streef daarna om die stem van ons lesers te wees."

### **Members**

1. **Barnard Beukman**  
     
   * *Role:* Redakteur  
   * *Bio:* "Ervare joernalis, ook voorheen as uitgewer en redakteur."  
   * *Email:* `lesers@diepapier.co.za`  
   * *Image:* `figma:asset/barnard`

   

2. **Lucia Poolman**  
     
   * *Role:* Nuusredakteur  
   * *Bio:* "Voorheen tydskrifredakteur en akademikus."  
   * *Email:* `nuus@diepapier.co.za`  
   * *Image:* `figma:asset/lucia`

   

3. **Vernon Janse van Rensburg**  
     
   * *Role:* Inhoudsredakteur  
   * *Bio:* "Ervare in produksiebestuur."  
   * *Email:* `inhoud@diepapier.co.za`  
   * *Image:* `figma:asset/vernon`

   

4. **Gerrie Lotriet**  
     
   * *Role:* Uitlegkunstenaar  
   * *Bio:* "Jare ervaring van drukuitleg en elektroniese grafika."  
   * *Email:* `uitleg@diepapier.co.za`  
   * *Image:* `figma:asset/gerrie`

   

5. **Ilse Salzwedel**  
     
   * *Role:* Hoofsub  
   * *Bio:* "Jare lange ervaring in tydskrifte, boeke, burgerlike aktivisme en radio."  
   * *Email:* `sub@diepapier.co.za`  
   * *Image:* `figma:asset/ilse`

## **Reporters Section**

**🛠 WP Implementation:**

- **Block:** `dp/team-grid`  
- **Category:** Reporters (Verslaggewers)  
* **Title:** "Verslaggewers"  
* **Description:** "Die span wat hard werk om elke dag vir jou die varsste nuus te bring."

### **Members**

1. **Jana Marx**  
     
   * *Role:* Politieke redakteur  
   * *Bio:* "Bekroon op vele terreine van ondersoekende joernalistiek."  
   * *Email:* `politiek@diepapier.co.za`  
   * *Image:* `figma:asset/jana`

   

2. **Stehan Schoeman**  
     
   * *Role:* Sportredakteur  
   * *Bio:* "Veelsydige joernalis met wye kennis van en passie vir sport."  
   * *Email:* `sport@diepapier.co.za`  
   * *Image:* `figma:asset/stehan`

   

3. **Bohemia Jumatt**  
     
   * *Role:* Senior verslaggewer  
   * *Bio:* "Ondersoekende joernalis en bekroon deur die Afrikaanse Taalraad."  
   * *Email:* `bohemia@diepapier.co.za`  
   * *Image:* `figma:asset/bohemia`

   

4. **Rasaad Adams**  
     
   * *Role:* Senior verslaggewer  
   * *Bio:* "Veelsydige joernalis wat reeds blootstelling aan nasionale, elektroniese en plaaslike media het."  
   * *Email:* `rasaad@diepapier.co.za`  
   * *Image:* `figma:asset/rasaad`

   

5. **Kaylie Joubert**  
     
   * *Role:* Verslaggewer  
   * *Bio:* "Verwerf haar graad in kommunikasie (cum laude) terwyl sy by ’n kunsgalery werk."  
   * *Email:* `kaylie@diepapier.co.za`  
   * *Image:* `figma:asset/kaylie`

   

6. **Shanell Binedell**  
     
   * *Role:* Verslaggewer  
   * *Bio:* "Redakteur van die NWU-studentekoerant, *Die Wapad*, terwyl sy joernalistiek gestudeer het."  
   * *Email:* `shanell@diepapier.co.za`  
   * *Image:* `figma:asset/shanell`

## **Call to Action**

**🛠 WP Implementation:**

- **Block:** `dp/cta-banner`  
* **Title:** "Ondersteun plaaslike joernalistiek"  
* **Description:** "Word deel van ons leserskap en help ons om gehaltenuus te lewer. Teken in vir volle toegang."  
* **Button Text:** "Teken in"  
* **Button Link:** `/inteken`


------------------

---

## **title: "Advertensie-navraag Ontvang" slug: "dankie/advertensie" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"**  **DONE – VERNON**

# **Thank You: Advertising**

[https://diepapier-alt.figma.site/dankie-advertensie-navraag](https://diepapier-alt.figma.site/dankie-advertensie-navraag)

## **Instructions**

The Content File file is here \= /content/pages/thank-you-registration.md

The template component file is here \= Unknown 

The “Thank You: Registration” page strings have had minor updates below:

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: Megaphone (green)  
- Title: "Dankie vir jou navraag\!"  
- Description: "Ons advertensiespan sal binne 24 uur met jou in verbinding tree met ’n pasgemaakte voorstel."  
- Button: "Gaan terug na adverteeropsies" \-\> /adverteer


------------------


title: "Dankie vir jou boodskap" slug: "dankie/kontak" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"

DONE – VERNON


Thank You: Contact

https://diepapier-alt.figma.site/dankie-vir-kontak

Instructions

The Content File file is here = /content/pages/thank-you-contact.md


The template component file is here = Unknown 

The “Thank You: Contact” page strings have had minor updates below:




[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}]

Icon: CheckCircle (green)
Title: "Dankie vir jou boodskap!"
Description: "Ons het jou boodskap ontvang en sal so gou moontlik reageer. Verwag ’n antwoord binne een tot twee werkdae."
Button: "Gaan terug na tuisblad" -> /



------------------

---

## **title: "Nuusbrief Intekening Bevestig" slug: "dankie/nuusbrief" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"**  **DONE – VERNON**

# **Thank You: Newsletter**

[https://diepapier-alt.figma.site/dankie-vir-nuusbrief-inskrywing](https://diepapier-alt.figma.site/dankie-vir-nuusbrief-inskrywing)

## **Instructions**

The Content File file is here \= /content/pages/thank-you-newsletter.md

The template component file is here \= Unknown 

The “Thank You: Newsletter” page strings have had minor updates below:

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: Mail (green)  
- Title: "Jy is ingeteken\!"  
- Description: "Dankie dat jy ingeteken het op *Die Papier* se nuusbrief. Ons het ’n e-pos na jou e-posadres gestuur ter bevestiging. Klik op die skakel daarin om jou intekening te bevestig."  
- Button: "Gaan na tuisblad" \-\> /


------------------

---

## **title: "Registrasie Suksesvol" slug: "dankie/registrasie" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"**  **DONE – VERNON**

# **Thank You: Registration**

[https://diepapier-alt.figma.site/dankie-vir-registrasie](https://diepapier-alt.figma.site/dankie-vir-registrasie)

## **Instructions**

The Content File file is here \= /content/pages/thank-you-registration.md

The template component file is here \= Unknown 

The “Thank You: Registration” page strings have had minor updates below:

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: UserCheck (green)  
- Title: "Welkom by *Die Papier*\!"  
- Description: "Jou rekening is suksesvol geskep. Ons het ’n bevestigings-e-pos gestuur – klik op die skakel om jou rekening te aktiveer."  
- Button: "Gaan na my rekening" \-\> /my-rekening


------------------

---

## **title: "E-koerant Intekening" slug: "inteken/e-uitgawe" type: "page" template: "page" pattern: "die-papier/page-subscribe-eedition" status: "publish" parent: "inteken"**  **DONE – VERNON**

# **E-koerant Intekening**

[https://diepapier-alt.figma.site/inteken/e-uitgawe](https://diepapier-alt.figma.site/inteken/e-uitgawe)

## **Instructions**

The Content File file is here \= /content/pages/subscribe-eedition.md

The template component file is here \= Unknown 

The subscribe e-edition page strings have had minor updates below:

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "E-koeran-intekening"  
- Subtitle: "Lees *Die Papier* digitaal op enige toestel."

## **E-Edition Plans**

\[Block: core/columns {align: wide}\]

### **1 maand – R140**

- 4 e-uitgawes  
- Volledige argieftoegang \[Button: Kies plan\]

### **3 maande – R390**

- 12 e-uitgawes  
- Volledige argieftoegang  
- Bespaar R30 \[Button: Kies plan\]

### **12 maande – R1 400**

- 52 e-uitgawes  
- Volledige argieftoegang  
- Bespaar R420  
- **Beste waarde** \[Button: Kies plan\]

## **Benefits**

\[Block: core/list {style: "checkmarks"}\]

- Lees op enige toestel: rekenaar, tablet of selfoon  
- Volledige argieftoegang vir intekenare  
- Beskikbaar elke Vrydag

## **FAQ Section**

\[Block: yoast faq/faq-accordion {category: "e-editions"}\]  


------------------

---

## **title: "Registreer" slug: "registreer" type: "page" template: "page" pattern: "die-papier/page-auth" status: "publish"**  **DONE – VERNON**

# **Registreer**

[https://diepapier-alt.figma.site/registreer](https://diepapier-alt.figma.site/registreer) 

## **Instructions**

The Content File file is here \= /content/pages/register.md

The template component file is here \= Unknown 

The Register page strings have had minor updates below:

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "Registreer"  
- Subtitle: "Skep ’n rekening om toegang te kry tot eksklusiewe inhoud en dienste."

## **Registration Form**

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "480px"}\]

- Title: "Skep jou rekening"

### **Form Fields**

- Voornaam (required)  
- Van (required)  
- E-posadres (required)  
- Wagwoord (required, min 8 characters)  
- Bevestig wagwoord (required)  
- Bepalings erme en voorwaardes checkbox (required)  
- Nuusbrief opt-in checkbox (optional)

### **Actions**

- Button: "Registreer"  
- Link: "Het jy reeds ’n rekening? Meld aan" \-\> /my-rekening

## **Benefits**

\[Block: core/list {style: "checkmarks"}\]

- Stoor jou gunsteling-artikels  
- Neem deel aan kompetisies  
- Lewer kommentaar op stories  
- Bestuur jou intekeninge  
- Ontvang gepersonaliseerde inhoud



------------------


---

## **title: "Bestelling Bevestig" slug: "dankie/bestelling" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"**  **DONE – Vernon**

# **Order Confirmation**

[https://diepapier-alt.figma.site/bestelling-bevestiging](https://diepapier-alt.figma.site/bestelling-bevestiging) 

## **Instructions**

The Content File file is here \= /content/pages/order-confirmation.md

The template component file is here \= Unknown 

The Order Confirmation page strings have had minor updates below:

\<\<\<weird thing on prototype here, but probably you’ve seen. Its about your caps and merchandise and address?\>\>\>

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: ShoppingBag (green)  
- Title: "Dankie vir jou bestelling\!"  
- Description: "Jou bestelling \#\[Order Number\] is suksesvol geplaas. ’n Bevestigings-e-pos is gestuur na \[email\]."

## **Order Details**

- Bestelling \#: \[Order Number\]  
- Datum: \[Date\]  
- Items: \[List\]  
- Totaal: R\[Amount\]

## **Next Steps**

- E-uitgawe: "Jou e-uitgawe is nou beskikbaar in jou rekening."  
- Aflewering: "Jou eerste aflewering sal op die volgende Vrydag volg."

## **Actions**

- Button: "Sien my bestellings" \-\> /my-rekening  
- Button (outline): "Gaan na tuisblad" \-\> /


------------------

---

## **title: "Beleid & Bepalings" slug: "beleid" template: "page-policies" status: "ready"**  **DONE – VERNON**

# **Policies Page Content**

[https://diepapier-alt.figma.site/beleid](https://diepapier-alt.figma.site/beleid) 

## **Instructions**

The Content File file is here \= /content/pages/policies.md

The template component file is here \= Unknown 

The Policies page strings have had minor updates below:

## **Hero Section**

**🛠 WP Implementation:**

- **Block:** `dp/hero-simple`  
- **Fields:** Title, Subtitle, Image  
* **Title:** "Beleid & Bepalings"  
* **Subtitle:** "Ons is toegewyd aan die beskerming van jou privaatheid en die verskaffing van 'n veilige, deursigtige diens."  
* **Image:** `figma:asset/legal` (Legal scales or gavel)

## **Summary Section**

**🛠 WP Implementation:**

- **Block:** `dp/policy-summary`  
- **Component:** List with Checkmarks  
* **Title:** "Vinnige opsomming"  
* **Items:**  
  1. "Ons verkoop nooit jou persoonlike inligting aan derde partye nie."  
  2. "Jou data word veilig gestoor met bedryfstandaard enkripsie."  
  3. "Jy het volle beheer oor jou rekening en kan dit enige tyd kanselleer."  
  4. "Ons gebruik koekies om jou ervaring te verbeter, maar jy kan dit afskakel."  
  5. "Ons voldoen aan regulasies van die Wet op die Beskerming van Persoonlike Inligting (POPIA)."

## **Policies Grid**

**🛠 WP Implementation:**

- **Block:** `dp/policies-grid`  
- **Pattern:** `die-papier/policy-cards`  
    
1. **Privaatheidsbeleid**  
     
   * *Description:* "Lees hoe ons jou persoonlike inligting versamel, gebruik en beskerm."  
   * *Link:* `/beleid/privaatheidsbeleid`  
   * *Icon:* `Lock`

   

2. **Koekiebeleid**  
     
   * *Description:* "Inligting oor hoe ons koekies gebruik en jou keuses volgens POPIA."  
   * *Link:* `/beleid/koekiebeleid`  
   * *Icon:* `Cookie`

   

3. **PAIA-handleiding**  
     
   * *Description:* "Ons handleiding in ooreenstemming met die Wet op die Bevordering van Toegang tot Inligting."  
   * *Link:* `/beleid/paia`  
   * *Icon:* `FileText`

   

4. **Terme en voorwaardes**  
     
   * *Description:* "Verstaan die bepalings en voorwaardes van die gebruik van ons dienste."  
   * *Link:* `/beleid/terme-en-voorwaardes`  
   * *Icon:* `FileText`

   

5. **Algemene gebruikersreëls**  
     
   * *Description:* "Riglyne vir ’n inklusiewe, respekvolle en boeiende ruimte vir alle gebruikers."  
   * *Link:* `/beleid/gebruikersreels`  
   * *Icon:* `Users`

   

6. **Advertensie-riglyne**  
     
   * *Description:* "Riglyne vir promosie-inhoud, advertensies en borgskap."  
   * *Link:* `/beleid/advertensie-riglyne`  
   * *Icon:* `Megaphone`

   

7. **Perskode**  
     
   * *Description:* "Ons verbintenis tot joernalistieke integriteit en etiese standaarde."  
   * *Link:* `/beleid/perskode`  
   * *Icon:* `Newspaper`

   

8. **KI (AI)-beleid**  
     
   * *Description:* "Ons benadering tot die verantwoordelike gebruik van Kunsmatige Intelligensie."  
   * *Link:* `/beleid/ki-beleid`  
   * *Icon:* `Cpu`

   

9. **Kommentaarbeleid**  
     
   * *Description:* "Reëls vir konstruktiewe en respekvolle besprekings op ons platforms."  
   * *Link:* `/beleid/kommentaarbeleid`  
   * *Icon:* `MessageCircle`

   

10. **Terugsendingsbeleid**  
      
    * *Description:* "Ons terugsendingsbeleid vir digitale en gedrukte produkte."  
    * *Link:* `/beleid/terugsendingsbeleid`  
    * *Icon:* `RotateCcw`

    

11. **Kompetisie voorwaardes**  
      
    * *Description:* "Bepalings en voorwaardes wat van toepassing is op alle kompetisies wat deur *Die Papier* aangebied word."  
    * *Link:* `/kompetisie-terme-en-voorwaardes`  
    * *Icon:* `Trophy`

    

12. **Klagteprosedure**  
      
    * *Description:* "Hoe om ’n klagte in te dien oor redaksionele inhoud, advertensies of dienste."  
    * *Link:* `/beleid/klagteprosedure`  
    * *Icon:* `AlertTriangle`


------------------

---

## **title: "Bestuur Nuusbriewe" slug: "nuusbrief/bestuur" type: "page" template: "page" pattern: "die-papier/page-newsletter-manage" status: "publish" requires\_auth: true**  **DONE – VERNON**

# **Bestuur Nuusbriewe**

[https://diepapier-alt.figma.site/bestuur-my-nuusbriewe](https://diepapier-alt.figma.site/bestuur-my-nuusbriewe) 

## **Instructions**

The Content File file is here \= /content/pages/newsletter-manage.md

The template component file is here \= Unknown 

The Newsletter manage page strings have had minor updates below:

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "Bestuur jou nuusbriewe"  
- Subtitle: "Kies watter nuusbriewe jy wil ontvang."

  \<\<\<\<The text here and the text on the prototype are different. You can use the following as the existing has mistakes\>\>\>\>  
  Bestuur my nuusbriewe  
- Kies watter nuusbriewe jy van *Die Papier* wil ontvang. Jy is tans op 0 nuusbriewe ingeteken.

## **Current Subscriptions**

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px"}\]

### **Newsletter Toggles**

- \[Toggle\] Dinsdag-nuusbrief — "Weeklikse oorsig, elke Dinsdag"  
- \[Toggle\] Vrydag-nuusbrief — "Hoogtepunte en naweek-leesstof"  
- \[Toggle\] Brekende nuus — "Onmiddellike kennisgewings"  
- \[Toggle\] Kompetisies & promosies — "Maandelikse spesiale aanbiedinge"

### **Email Settings**

- Current email: \[Display\]  
- Button (link): "Verander e-posadres"

### **Actions**

- Button: "Stoor voorkeure"  
- Link: "Teken af van alle nuusbriewe" \-\> /nuusbrief/teken-af

## **Note**

"Veranderings kan tot 24 uur neem om in werking te tree."  

------------------

---

## **title: "Betaal" slug: "betaal" type: "page" template: "page" pattern: "die-papier/page-checkout" status: "publish" requires\_auth: true**  **DONE – Vernon**

# **Checkout Page**

[https://diepapier-alt.figma.site/betaal](https://diepapier-alt.figma.site/betaal) 

## **Instructions**

The Content File file is here \= /content/pages/checkout.md

The template component file is here \= Unknown 

The Checkout page strings have had minor updates below:

## **Order Summary**

\[Block: core/group {style: "card"}\]

- Item list (from cart)  
- Subtotaal, BTW, Totaal

## **Billing Details Form**

- Voornaam (required)  
- Van (required)  
- E-posadres (required)  
- Telefoonnommer (required)

## **Delivery Address (if physical product)**

- Adreslyn 1 (required)  
- Adreslyn 2  
- Stad (required)  
- Provinsie (required, select)  
- Poskode (required)

## **Payment Method**

- Kredietkaart (PayFast/Peach Payments integration)  
- Elektroniese oorplasing  
- Debietorder (for recurring subscriptions)

## **Actions**

- Button: "Betaal nou"  
- Note: "Deur te betaal, stem jy in tot ons bepalings en voorwaardes."



------------------



---

## **title: "Leefstyl" slug: "leefstyl" type: "category" template: "archive" pattern: "die-papier/archive-default" status: "publish" taxonomy: "category"**  **DONE – Vernon**

# **Category: Leefstyl**

[https://diepapier-alt.figma.site/leefstyl](https://diepapier-alt.figma.site/leefstyl) 

## **Instructions**

The Content File file is here \= /content/pages/category-leefstyl.md

The template component file is here \= Unknown 

The need Leefstyl tagline should be updated and the tags

\<\<\<I don’t see subcategories op prototype page. If there will be subcategories, please use below:\>\>\>

## **Description**

Kos, reis, mode, gesondheid, verhoudings en alles wat die lewe lekker maak.

## **Subcategories**

- Kos en resepte (/leefstyl/kos)  
- Reis (/leefstyl/reis)  
- Mode (/leefstyl/mode)  
- Gesondheid (/leefstyl/gesondheid)  
- Vermaak (/leefstyl/vermaak)  
- Boeke (/leefstyl/boeke)

## **Query Config**

- Post Type: post  
- Taxonomy: category \= leefstyl  
- Order: date DESC  
- Per Page: 12  
- Layout: Grid 3-column

## **Sidebar Widgets**

- Competition Promo  
- Newsletter CTA  
- Ad Slot (MREC)


------------------


---

## **title: "My rekening" slug: "my-rekening" type: "page" template: "page" pattern: "die-papier/page-my-account" status: "publish" requires\_auth: true**  **DONE \- VERNON**

# **My rekening**

[https://diepapier-alt.figma.site/my-rekening](https://diepapier-alt.figma.site/my-rekening) 

## **Instructions**

The Content File file is here \= /content/pages/my-account.md

The template component file is here \= Unknown 

The need My Account page content to be updated with the changes below:

## **Logged-Out State**

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "480px"}\]

- Title: "Meld aan"  
- Form Fields: E-posadres, Wagwoord  
- Button: "Meld aan"  
- Links: "Wagwoord vergeet?" | "Registreer" \-\> /registreer

## **Logged-In State**

\[Block: core/group {layout: "constrained"}\]

### **Account Header**

- Welcome: "Welkom, \[Voornaam\]"  
- Member since: "Lid sedert \[Date\]"

### **Dashboard Tabs**

#### **My intekeninge**

- Active subscriptions list  
- Subscription type, status, expiry date  
- Button: "Bestuur intekening"  
- Button: "Teken in" \-\> /inteken (if no active subscription)

#### **My e-uitgawes**

- List of purchased e-editions  
- Button: "Sien alle e-uitgawes" \-\> /my-e-uitgawes

#### **My profiel**

- Edit: Voornaam, van, e-posadres  
- Change password  
- Newsletter preferences  
- Button: "Stoor veranderinge"

#### **Bestellings**

- Order history table  
- Order number, date, amount, status  
- Link: "Sien bestelling"

### **Actions**

- Button: "Meld af"




------------------

---

## **title: "Adverteer" slug: "adverteer" template: "page-advertise" status: "ready"**

# **Advertising Page Content**

[https://diepapier-alt.figma.site/adverteer](https://diepapier-alt.figma.site/adverteer)

## **Instructions**

The Content File file is here \= /content/pages/advertise.md

The template component file is here \= Unknown 

The need Advertise content should be updated with the changes below:

DONE \_\_ VERNON

\<\<\< NOTE: This is on the prototype, but not in document below.  
Wil jy jou handelsmerk uitbrei? By *Die Papier* bied ons dinamiese advertensie-oplossings wat jou met gehoor regoor Suid-Afrika verbind.

You can change entire paragraph to:  
Wil jy jou handelsmerk uitbrei? By *Die Papier* bied ons dinamiese advertensie-oplossings wat jou met ’n gehoor regoor Suid-Afrika verbind.

## **Ad Options Overview**

**🛠 WP Implementation:**

- **Block:** `dp/ad-options-grid`  
- **Pattern:** `die-papier/ad-options`  
    
1. **Geklassifiseerde advertensies**  
     
   * **Description:** "Ons geklassifiseerde afdeling bied ’n bekostigbare manier om lesers nasionaal te bereik."  
   * **Link:** `/adverteer/geklassifiseerd`  
   * **Icon:** `List`

   

2. **Vertoonadvertensies**  
     
   * **Description:** "Maak ’n indruk met vertoonadvertensieplasings op ons webwerf en in die drukkoerant."  
   * **Link:** `/adverteer/vertoonadvertensies`  
   * **Icon:** `Layout`

   

3. **Pamflette**  
     
   * **Description:** "Kry jou boodskap direk in die hande van lesers met koerant-insetsels en pamflette."  
   * **Link:** `/adverteer/pamflette`  
   * **Icon:** `Map`

   

4. **Geborgde inhoud**  
     
   * **Description:** "Gebruik ons betroubare platforms om jou boodskap met boeiende, geborgde artikels te bevorder."  
   * **Link:** `/adverteer/geborgde-inhoud`  
   * **Icon:** `FileText`

   

5. **Borgskappe**  
     
   * **Description:** "Borg ’n spesifieke afdeling, of geleentheid en verbind jou handelsmerk met betekenisvolle inhoud."  
   * **Link:** `/adverteer/borgskappe`  
   * **Icon:** `Star`

   

6. **Bylaes**  
     
   * **Description:** "Vertoon jou handelsmerk met ’n toegewyde advertensiebylae wat ontwerp is vir betekenisvolle dekking."  
   * **Link:** `/adverteer/bylaes`  
   * **Icon:** `BookOpen`

   

7. **Direkte advertensies**  
     
   * **Description:** "Bereik ’n invloedryke, hoë-inkomste Afrikaanse mark oor Suid-Afrika heen met geteikende advertensies."  
   * **Link:** null  
   * **Icon:** `Megaphone`

   

8. **Sosiale media**  
     
   * **Description:** "Gebruik ons sosialemedia-kanale om jou inhoud aan ’n wyer, geteikende gehoor te bevorder."  
   * **Link:** null  
   * **Icon:** `Share2`

   

9. **Betaalde nuusbriewe**  
     
   * **Description:** "Verskyn in ons nuusbriewe en bereik duisende lesers."  
   * **Link:** null  
   * **Icon:** `Mail`

   

10. **Programmatiese advertensies**  
      
    * **Description:** "Benut programmatiese advertering vir hoogs geteikende en outomatiese advertensieplasings."  
    * **Link:** null  
    * **Icon:** `Cpu`

    

11. **Sindikasie**  
      
    * **Description:** "Versterk jou boodskap deur jou inhoud oor veelvuldige *Die Papier*\-platforms te sindikeer."  
    * **Link:** null  
    * **Icon:** `Repeat`

## **Benefits**

**🛠 WP Implementation:**

- **Block:** `core/columns` (3 cols)  
- **Pattern:** `dp/benefits-list`  
1. **Uitgebreide bereik**: "Kry sigbaarheid oor veelvuldige streke en bereik ’n gehoor met uiteenlopende demografieë en belange."  
2. **Handelsmerk-konsekwentheid**: "Bied ’n eenvormige, herkenbare handelsmerkbeeld oor die land heen aan, wat vertroue en lojaliteit versterk."  
3. **Groter trefkrag**: "Verhoog algehele veldtogdoeltreffendheid deur hoër frekwensie van bladlese en invloed op koopbesluite."

## **Classifieds Section**

**🛠 WP Implementation:**

- **Block:** `dp/classifieds-pricing-table`

### **Categories**

1. **Vakatures** (Briefcase)  
2. **Eiendom** (Home)  
3. **Motors** (Car)  
4. **Dienste** (Wrench)  
5. **Kennisgewings** (Bell)  
6. **Allerlei** (Package)

### **Pricing**

1. **Standaard** (R150/plasing)  
   * Tot 30 woorde  
   * 1 week se plasing (druk)  
   * Aanlyn vir 7 dae  
   * Basiese teksformaat  
2. **Uitgebrei** (R350/plasing) **(Highlighted)**  
   * Tot 60 woorde  
   * 2 weke se plasing (druk)  
   * Aanlyn vir 14 dae  
   * 1 foto ingesluit  
   * Opskrif in vetdruk  
3. **Premium** (R650/plasing)  
   * Tot 100 woorde  
   * 4 weke se plasing (druk)  
   * Aanlyn vir 30 dae  
   * Tot 3 foto’s  
   * Gekleurde raam & opskrif  
   * Prioriteitsplasing

## **Display Advertising**

**🛠 WP Implementation:**

- **Block:** `dp/display-specs-table`

### **Print Options**

1. **Volle bladsy**: 265 mm x 380 mm ("Maksimum impak met ’n advertensie wat die hele bladsy beslaan.")  
2. **Halfblad (horisontaal)**: 265 mm x 185 mm ("Breë formaat ideaal vir visuele veldtogte.")  
3. **Halfblad (vertikaal)**: 130 mm x 380 mm ("Sterk vertikale teenwoordigheid langs redaksionele inhoud.")  
4. **Kwartblad**: 130 mm x 185 mm ("Kompakte, maar kragtige advertensieplasing.")  
5. **Strook**: 265 mm x 60 mm ("Ooglopende horisontale plasing, bo of onder inhoud.")  
6. **Kolom**: 60 mm x 185 mm ("Bekostigbare opsie met goeie sigbaarheid.")

### **Digital Options**

1. **Banier (Leaderboard)**: 728 x 90 px ("Plasing boaan bladsy met hoë sigbaarheid.")  
2. **Groot reghoek**: 336 x 280 px ("Plasing binne-in inhoud, met uitstekende klikkoerse.")  
3. **Sykante**: 160 x 600 px ("Langadvertensie met aanhoudende sigbaarheid aan die kant van die blad.")  
4. **Mobiele banier**: 320 x 50 px ("Geoptimaliseer vir mobiele toestelle.")  
5. **Interstitieel**: 320 x 480 px ("Volskerm- mobiele advertensie met hoë impak.")  
6. **Natuurlike advertensie**: Reaktief ("Pas naatloos by die webwerf se ontwerp aan.")

### **Benefits**

1. **Geteikende bereik** (Target)  
2. **Multi-platform** (Layers)  
3. **Meetbare resultate** (BarChart3)

## **Leaflets Section**

**🛠 WP Implementation:**

- **Block:** `dp/leaflet-distribution-map` (Image \+ List)

### **Distribution Areas**

1. **Kaapse Skiereiland** (35 000+): Kaapstad-metro, suidelike voorstede, Helderberg, noordelike voorstede  
2. **Boland & Weskus** (18 000+): Paarl, Stellenbosch, Franschhoek, Worcester, Saldanha  
3. **Tuinroete** (12 000+): George, Mosselbaai, Knysna, Oudtshoorn, Plettenbergbaai  
4. **Vrystaat & Noord-Kaap** (15 000+): Bloemfontein, Welkom, Kimberley, Kroonstad  
5. **Gauteng** (20 000+): Pretoria, Centurion, Randburg, Sandton, Vanderbijlpark  
6. **Nasionaal** (100 000+): Alle streke gekombineer vir volledige nasionale dekking

### **Specs**

1. **Papiergrootte**: A4, A5, DL of pasgemaak  
2. **Papiergewig**: 80 gsm – 170 gsm  
3. **Drukwerk**: Volkleur, dubbelsy  
4. **Aflewering**: By ons drukkery, of deur koerier

## **Sponsored Content**

**🛠 WP Implementation:**

- **Block:** `dp/sponsored-content-process`

### **Content Types**

1. **Geborgde artikel**: 800 – 1 500 woorde, SEO-geoptimaliseer.  
2. **Advertensie-artikel**: 500 – 1 000 woorde, duidelik gemerk as “Geborgde inhoud”.  
3. **Digitale inhoudsveldtog**: Multi-platform-verspreiding, 3 – 6 inhoudstukke.  
4. **Multimedia**: 30 – 120 sekondes, YouTube & sosiale media.

### **Process Steps**

1. **Kennis**: Doelwitte & teikengehoor  
2. **Konsep**: Inhoudskonsep & struktuur  
3. **Skep**: Produksie  
4. **Goedkeuring**: Kliënt hersien advertensie  
5. **Publiseer**: Verspreiding  
6. **Verslag**: Prestasieverslag

## **Sponsorships**

**🛠 WP Implementation:**

- **Block:** `dp/sponsorship-options`

### **Types**

1. **Afdelingsborgskap**: Logo op afdelingsopskrif, "Aangebied deur".  
2. **Gebeurtenisborgskap**: Logo op alle verwante inhoud.  
3. **Nuusbriefborgskap**: Logo boaan nuusbrief.  
4. **Pasgemaakte borgskap**: Unieke pakket.

## **Supplements**

**🛠 WP Implementation:**

- **Block:** `dp/supplements-overview`

### **Types**

1. **Handelsmerkbylae**: 4 – 16 bladsye  
2. **Tematiese bylae**: 8 – 24 bladsye  
3. **Gebeure-bylae**: 8 – 16 bladsye  
4. **Pasgemaakte bylae**: Buigsaam

### **Services**

1. **Ontwerp & uitleg**  
2. **Redaksionele inhoud**  
3. **Drukwerk**  
4. **Verspreiding**

### **Timeline**

1. **Week 1 – 2**: Beplanning & konseptualisering  
2. **Week 2 – 3**: Inhoudskepping & ontwerp  
3. **Week 3 – 4**: Hersiening & goedkeuring  
4. **Week 4 – 5**: Druk & verspreiding



------------------



---

## **title: "E-uitgawes" slug: "e-uitgawes" type: "page" template: "page" pattern: "die-papier/page-e-editions" status: "publish"**  **DONE – VERNON**

# **E-uitgawes**

[https://diepapier-alt.figma.site/e-uitgawes](https://diepapier-alt.figma.site/e-uitgawes) 

## **Instructions**

The Content File file is here \= /content/pages/e-editions.md

The template component file is here \= Unknown 

Adjust the content based on the changes below. 

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "E-uitgawes"  
- Subtitle: "Die volledige koerant in digitale formaat."

## **Key Points**

\[Block: core/list {style: "checkmarks"}\]

- Kry volledige toegang tot e-koerant.  
- Bevat alle inhoud van drukkoerant.  
- Drukkoerant Vrydae in die winkels.

## **Latest E-Edition**

### **Jongste uitgawe**

\[Block: core/query {postType: "dp\_eedition", perPage: 1, orderBy: "meta\_value", metaKey: "publication\_date", order: "desc"}\]

- Layout: Featured (large cover image \+ details)  
- Price: R35  
- Button: "Koop uitgawe"

## **E-Edition Archive Grid**

### **Vorige uitgawes**

\[Block: core/query {postType: "dp\_eedition", orderBy: "meta\_value", metaKey: "publication\_date", order: "desc", offset: 1}\]

- Layout: Grid 4-column  
- Template: dp/eedition-card (cover thumbnail, date, price)  
- Per Page: 12  
- Pagination: Load More

## **Subscription CTA**

\[Block: core/group {style: "section-shade"}\]

- Title: "Bespaar met ’n intekening"  
- Description: "Teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes."  
- Button: "Sien intekeningsopsies" \-\> /inteken/e-uitgawe

## **FAQ Section**

\[Block: dp/faq-accordion {category: "e-editions"}\]  




------------------


---

## **title: "Algemene vrae" slug: "vrae" type: "page" template: "page" pattern: "die-papier/page-faq" status: "publish"**

# **Done – Vernon**

# **Algemene vrae**

[https://diepapier-alt.figma.site/vrae](https://diepapier-alt.figma.site/vrae) 

## **Instructions**

The Content File file is here \= /content/pages/faq.md

The template component file is here \= Unknown 

The need FAQ

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "Algemene vrae"  
- Subtitle: "Antwoorde op algemene vrae oor *Die Papier*."

## **FAQ Categories**

\[Block: dp/faq-accordion {category: "all"}\]

### **Oor *Die Papier***

1. **Wat is *Die Papier*?** *Die Papier* is ’n nasionale, weeklikse Afrikaanse koerant wat elke Vrydag verskyn, in gedrukte en digitale formaat.  
     
2. **Wie publiseer *Die Papier*?** *Die Papier* is ’n publikasie van Novus Media, ’n afdeling van Novus Holdings.  
     
3. **Wanneer verskyn *Die Papier*?** Elke Vrydag. Die gedrukte koerant is Vrydae in die winkels. Die e-uitgawe is Vrydae digitaal beskikbaar.  
     
4. **Wat kos ’n intekening?** Huisaflewering kos vanaf R140 per maand. Die e-koerant kos R35 per uitgawe.  
     
5. **Hoe kontak ek *Die Papier*?** Stuur ’n e-pos aan [lesers@diepapier.co.za](mailto:lesers@diepapier.co.za), of besoek ons kontakbladsy by /kontak.

### **Intekeninge**

1. **Watter intekeningsopsies is beskikbaar?** (1) Huisaflewering (vanaf R140/maand), en (2) e-koerant (vanaf R35/uitgawe of R140/maand).  
     
2. **Kan ek my intekening enige tyd kanselleer?** Ja. Stuur navrae aan [diepapierintekening@onthedot.co.za](mailto:diepapierintekening@onthedot.co.za).

3. **Hoe werk tuisaflewering?** Deur On the Dot-verspreiders, elke Vrydag voor 10:00.  
     
4. **Watter betaalmetodes word aanvaar?** Kredietkaarte, debietorders, elektroniese bankoorplasings.  
     
5. **Kan ek ’n geskenk-intekening koop?** Ja, kontak [diepapierintekening@onthedot.co.za](mailto:diepapierintekening@onthedot.co.za).

### **E-uitgawes**

1. **Wat is ’n e-uitgawe?** ’n Digitale replika van die gedrukte koerant wat jy op enige toestel kan lees.  
     
2. **Hoeveel kos ’n enkele e-uitgawe?** R35 per uitgawe.  
     
3. **Op watter toestelle kan ek dit lees?** Enige toestel met ’n webblaaier – rekenaar, tablet, of selfoon.  
     
4. **Kan ek e-uitgawes aflaai om te lees as ek nie aanlyn is nie?** Tans is dit net aanlyn beskikbaar.

### **Advertensies**

1. **Hoe adverteer ek in *Die Papier*?** Besoek /adverteer of kontak [advertensies@diepapier.co.za](mailto:advertensies@diepapier.co.za).  
     
2. **Wat kos advertensies?** Tariewe wissel na gelang van plasing, grootte en hoe lank jy wil adverteer. Kontak ons vir ’n kwotasie.  
     
3. **Bied julle digitale advertensies aan?** Ja, ons bied banier-, inhouds- en nuusbrief-advertensies aan.

### **Tegniese vrae**

1. **Hoe skakel ek donker modus aan?** Klik op die maan-ikoon, in die boonste banier, langs die mashoof.  
     
2. **Hoe soek ek vir artikels?** Gebruik die soek-ikoon in die boonste banier, langs die mashoof, of gaan na /soek.  
     
3. **Is die webwerf mobielvriendelik?** Ja, ons webwerf is ten volle aanpasbaar.






------------------


---

## **title: "Sake" slug: "sake" type: "category" template: "archive" pattern: "die-papier/archive-default" status: "publish" taxonomy: "category"**  **DONE – VERNON**

# **Category: Sake**

[https://diepapier-alt.figma.site/sake](https://diepapier-alt.figma.site/sake)

## **Instructions**

The Content File file is here \= /content/pages/category-sake.md

The template component file is here \= Unknown 

The need Sake tagline should be updated and the tags

\<\<NOTE: The description here and the one on the prototype aren’t the same? You can change it to the above one: Sakenuus en finansiële ontledings.\>\>

\<\<Subcategories below different to prototype, please use the prototype’s subcategories.\>\>\>

## **Description**

Sakenuus en finansiële ontledings.

Subcategories

- Ekonomie (/sake/ekonomie)  
- Markte (/sake/markte)  
- Eiendom (/sake/eiendom)  
- Tegnologie (/sake/tegnologie)  
- Landbou (/sake/landbou)

## **Query Config**

- Post Type: post  
- Taxonomy: category \= sake  
- Order: date DESC  
- Per Page: 12  
- Layout: Grid 3-column

## **Sidebar Widgets**

- Market Widget (JSE summary)  
- Newsletter CTA  
- Ad Slot (MREC)




------------------


---

## **title: "Sport" slug: "sport" type: "category" template: "archive" pattern: "die-papier/archive-default" status: "publish" taxonomy: "category"**  **DONE – VERNON**

# **Category: Sport**

[https://diepapier-alt.figma.site/sport](https://diepapier-alt.figma.site/sport) 

## **Instructions**

The Content File file is here \= /content/pages/category-sport.md

The template component file is here \= Unknown 

The need Sport tagline should be updated and the tags

\<\<Subcategories below differ from prototype. Please use below.\>\>\>

## **Description**

Volledige dekking van rugby, krieket, atletiek en meer. 

Subcategories

- Rugby (/sport/rugby)  
- Krieket (/sport/krieket)  
- Atletiek (/sport/atletiek)  
- Tennis (/sport/tennis)  
- Gholf (/sport/gholf)

## **Query Config**

- Post Type: post  
- Taxonomy: category \= sport  
- Order: date DESC  
- Per Page: 12  
- Layout: Grid 3-column

## **Sidebar Widgets**

- Live Scores widget (if available)  
- Newsletter CTA  
- Trending in Sport  
- Ad Slot (MREC)



------------------


---

## **title: "Nuus" slug: "nuus" type: "category" template: "archive" pattern: "die-papier/archive-default" status: "publish" taxonomy: "category"**  **DONE – VERNON**

# **Category: Nuus**

[https://diepapier-alt.figma.site/nuus](https://diepapier-alt.figma.site/nuus) 

## **Instructions**

The Content File file is here \= /content/pages/category-nuus.md

The template component file is here \= Unknown 

The need Nuus tagline should be updated and the tags

## **Description**

Die jongste nuus uit Suid-Afrika en die wêreld. Politiek, misdaad, onderwys, gesondheid en meer.

## **Tags associated with Nuus** 

- Politiek (/nuus/politiek)  
- Misdaad (/nuus/misdaad)  
- Onderwys (/nuus/onderwys)  
- Gesondheid (/nuus/gesondheid)  
- Plaaslik (/nuus/plaaslik)  
- Internasionaal (/nuus/internasionaal)

## **Query Config**

- Post Type: post  
- Taxonomy: category \= nuus  
- Order: date DESC  
- Per Page: 12  
- Layout: Grid 3-column

## **Sidebar Widgets**

- Newsletter CTA  
- Trending in Nuus  
- Ad Slot (MREC)




------------------


---

## **title: "Dink" slug: "dink" type: "category" template: "archive" pattern: "die-papier/archive-default" status: "publish" taxonomy: "category"**  **DONE–VERNON**

# **Category: Dink**

[https://diepapier-alt.figma.site/dink](https://diepapier-alt.figma.site/dink) 

## **Instructions**

The Content File file is here \= /content/pages/category-dink.md

The template component file is here \= Unknown 

The need Dink tagline should be updated and the tags

\<\<\<Subcategories below and on prototype differ. If possible, please use as per your list below here\>\>\>

# **Description**

Meningsvormende artikels, rubriek, ontledings en kommentaar.

Subcategories

- Hoofartikels (/dink/hoofartikels)  
- Rubrieke (/dink/rubrieke)  
- Briewe (/dink/briewe)  
- Ontledings (/dink/analise)  
- Kommentaar (/dink/kommentaar)

## **Query Config**

- Post Type: post  
- Taxonomy: category \= dink  
- Order: date DESC  
- Per Page: 12  
- Layout: Grid 3-column

## **Sidebar Widgets**

- Poll widget  
- Newsletter CTA  
- Featured Columnist  
- Ad Slot (MREC)



------------------

---

## **title: "Nuusbrief-argief" slug: "nuusbrief-argief" type: "page" template: "page" pattern: "die-papier/page-newsletter-archive" status: "publish"**  **DONE – VERNON**

# **Nuusbrief-argief**

[https://diepapier-alt.figma.site/nuusbrief-argief](https://diepapier-alt.figma.site/nuusbrief-argief) 

## **Instructions**

The Content File file is here \= /content/pages/newsletter-archive.md

The template component file is here \= Unknown 

The need Nuusbrief-argief should be updated with changes below:

\<\<\<Description on prototype not in document below. Can you please replace this sentence   
Blaai deur vorige uitgawes van ons nuusbriewe. Ons stuur twee keer per week — Dinsdae ('n Leefstyl & Nuus-fokus) en Vrydae (die volledige e-uitgawe).

With:  
Blaai deur vorige uitgawes van ons nuusbriewe. Ons stuur twee keer per week: Dinsdae en Vrydae.

\<\<\<This sentence in prototype is not in document below.  
Nog nie ingeteken nie?  
Ontvang Die Papier se nuusbrief gratis in jou inkassie elke Dinsdag en Vrydag.

Please replace with:  
Nog nie ingeteken nie?  
Ontvang Die Papier se nuusbrief gratis in jou e-pos se inmandjie elke Dinsdag en Vrydag.

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "Nuusbrief-argief"  
- Subtitle: "Blaai deur ons vorige nuusbriewe."

## **Filter**

\[Block: dp/filter-sidebar\]

- Filter by: Newsletter type (Dinsdag, Vrydag)  
- Filter by: Date range

## **Newsletter Archive Grid**

\[Block: core/query {postType: "dp\_newsletter", orderBy: "date", order: "desc"}\]

- Layout: List  
- Fields: Title, Date, Type, Preview link  
- Per Page: 20  
- Pagination: Numbered

## **Subscribe CTA**

\[Block: dp/newsletter-cta {variant: "full"}\]

- Title: "Nog nie ingeteken nie?"  
- Description: "Ontvang ons nuusbrief gratis in jou e-pos-inmandjie."  
- Button: "Teken in" \-\> /nuusbrief-inteken



------------------

---

## **title: "Nuusbrief Bevestiging" slug: "nuusbrief/bevestig" type: "page" template: "page" pattern: "die-papier/page-thank-you" status: "publish"**  **DONE – VERNON**

# **Newsletter Email Confirmation**

[https://diepapier-alt.figma.site/nuusbrief-inteken-bevestiging](https://diepapier-alt.figma.site/nuusbrief-inteken-bevestiging) 

## **Instructions**

The Content File file is here \= /content/pages/newsletter-confirmation.md

The template component file is here \= Unknown 

Some of the text below was changed, compare the current cart strings to the strings below:

## **Success State (valid token)**

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: MailCheck (green)  
- Title: "E-posadres bevestig\!"  
- Description: "Jou e-posadres is suksesvol bevestig. Jy sal voortaan ons nuusbrief ontvang."  
- Button: "Gaan na tuisblad" \-\> /

## **Error State (expired/invalid token)**

\[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}\]

- Icon: XCircle (red)  
- Title: "Bevestiging onsuksesvol"  
- Description: "Hierdie bevestigingskakel is ongeldig, of het verval."  
- Button: "Teken weer in" \-\> /nuusbrief-inteken



------------------

---

## **title: "Mandjie" slug: "mandjie" type: "page" template: "page" pattern: "die-papier/page-cart" status: "publish" requires\_auth: true** **DONE – VERNON**

# **Cart Page**

[https://diepapier-alt.figma.site/mandjie](https://diepapier-alt.figma.site/mandjie) 

## **Instructions**

The Content File file is here \= /content/pages/cart.md

The template component file is here \= Unknown 

Some of the text below was changed, compare the current cart strings to the strings below:

## **Cart Items Table**

\[Block: core/group {layout: "constrained"}\]

- Column: Item (thumbnail \+ title)  
- Column: Prys  
- Column: Hoeveelheid  
- Column: Subtotaal  
- Action: Verwyder

## **Cart Summary**

\[Block: core/group {style: "card"}\]

- Subtotaal: R\[X\]  
- BTW (15%): R\[X\]  
- Totaal: R\[X\]  
- Button: "Gaan voort na betaling" \-\> /betaal

## **Empty State**

- Title: "Jou mandjie is leeg."  
- Description: "Blaai deur ons e-uitgawes of intekeningsopsies."  
- Button: "Sien e-uitgawes" \-\> /e-uitgawes  
- Button: "Sien intekeningsopsies" \-\> /inteken



------------------


---

## **title: "Kontak Ons" slug: "kontak" template: "page-contact" status: "ready"**  **DONE – VERNON**

# **Contact Page Content**

[https://diepapier-alt.figma.site/kontak](https://diepapier-alt.figma.site/kontak) 

## **Instructions**

The Content File file is here \= /content/pages/contact-us.md

The template component file is here \= Unknown 

The Contact page content needs to be updated to align with the text below. 

## **Hero Section**

**🛠 WP Implementation:**

- **Block:** `dp/hero-simple`  
- **Fields:** Title, Subtitle  
* **Title:** "Kontak ons"  
* **Subtitle:** "Het jy ’n vraag, nuuswenk of terugvoering? Ons span is hier om te help. Kontak ons gerus per e-pos, telefoon, of deur die vorm hieronder in te vul."

## **Content Sections**

**🛠 WP Implementation:**

- **Block:** `dp/contact-info-grid`  
* **Help Title:** "Hoe kan ons help?"  
* **Form Title:** "Stuur aan ons ’n boodskap"  
* **Form Description:** "Vul die vorm hieronder in en ons sal so spoedig moontlik terugvoering gee. Skakel ons gerus vir dringende vrae."  
* **Social Proof Title:** "Volg ons op sosiale media."  
* **Social Proof Text:** "Bly op die hoogte van die jongste nuus, sport en sake deur ons sosialemedia-kanale te volg."

## **Departments**

**🛠 WP Implementation:**

- **Block:** `core/columns` (3 columns) with `dp/contact-card` pattern

### **1\. Redaksie**

* **Icon:** `Newspaper`  
* **Description:** "Nuuswenke, regstellings of redaksionele navrae."  
* **Email:** `nuus@diepapier.co.za` (mailto)

### **2\. Advertensies**

* **Icon:** `CreditCard`  
* **Description:** "Adverteer in druk, aanlyn of digitale platforms."  
* **Email:** `nico.flietoor@diepapier.co.za` (mailto)

### **3\. Lesersnavrae**

* **Icon:** `Mail`  
* **Description:** "Intekeninge, aflewerings of algemene vrae."  
* **Email:** `lesers@diepapier.co.za` (mailto)  
* **Phone:** `011 713 9000` (tel)

## **Office Details**

**🛠 WP Implementation:**

- **Block:** `dp/office-details`  
* **Address:** "The Zone @ Rosebank, Oxfordstraat 187, Rosebank, Johannesburg, 2196"  
* **Phone:** `011 713 9000`  
* **Email:** `lesers@diepapier.co.za`

## **Office Hours**

**🛠 WP Implementation:**

- **Block:** `dp/office-hours-table`  
* **Maandag – Vrydag:** 08:00 – 17:00  
* **Saterdae:** 09:00 – 13:00  
* **Sondae & vakansiedae:** Gesluit (Highlight)

## **Contact Form Labels**

**🛠 WP Implementation:**

- **Plugin:** Gravity Forms or Contact Form 7  
- **Fields:** Name, Email, Subject, Message  
* **Name:** "Naam" (Placeholder: "Jou naam")  
* **Email:** "E-posadres" (Placeholder: "[jou@e-pos.co.za](mailto:jou@e-pos.co.za)")  
* **Subject:** "Onderwerp" (Placeholder: "Waaroor gaan dit?")  
* **Message:** "Boodskap" (Placeholder: "Skryf jou boodskap hier . . .")  
* **Submit Button:** "Stuur boodskap"  
* **Submitting Button:** "Besig om te stuur . . ."  
* **Success Title:** "Boodskap suksesvol gestuur\!"  
* **Success Desc:** "Ons sal binnekort terugvoering gee."

## **Validation Messages**

* **Name:** "Naam moet minstens 2 karakters wees."  
* **Email:** "Voer asseblief ’n geldige e-posadres in."  
* **Subject:** "Onderwerp moet minstens 5 karakters wees."  
* **Message:** "Boodskap moet minstens 10 karakters wees."



------------------

---

## **title: "My E-uitgawes" slug: "my-e-uitgawes" type: "page" template: "page" pattern: "die-papier/page-my-eeditions" status: "publish" requires\_auth: true**  **DONE – VERNON**

# **My E-Editions**

[https://diepapier-alt.figma.site/my-e-uitgawes](https://diepapier-alt.figma.site/my-e-uitgawes) 

## **Instructions**

The Content File file is here \= /content/pages/my-eeditions.md

The template component file is here \= Unknown 

Some of the text below was changed, compare the current cart strings to the strings below:

## **Hero Section**

\[Block: dp/content-hero\]

- Title: "My e-uitgawes"  
- Subtitle: "Lees jou e-uitgawes."

## **Active Subscription Banner (if subscriber)**

\[Block: core/group {style: "section-shade"}\]

- "Jou intekening is aktief tot \[Expiry Date\]. Alle e-uitgawes is beskikbaar."

## **E-Editions Grid**

\[Block: core/query {postType: "dp\_eedition", orderBy: "meta\_value", metaKey: "publication\_date", order: "desc"}\]

- Layout: Grid 4-column  
- Card: Cover image \+ Date \+ Edition number  
- Status badge: "Nuut" (for latest), "Gelees" (read tracking)  
- Button per card: "Lees" \-\> /e-uitgawes/\[slug\]  
- Per Page: 12  
- Pagination: Numbered

## **No Subscription CTA (if not subscriber)**

\[Block: core/group {style: "card", textAlign: "center"}\]

- Title: "Teken in vir onbeperkte toegang"  
- Description: "Kry toegang tot alle e-uitgawes met ’n intekening."  
- Button: "Sien intekeningsopsies" \-\> /inteken/e-uitgawe


-------------------