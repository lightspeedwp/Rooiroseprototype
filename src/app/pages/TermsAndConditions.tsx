import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { FileText, AlertCircle } from 'lucide-react';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';

const TC_H3: React.CSSProperties = {
  fontVariationSettings: 'var(--fvs-h3)',
  lineHeight: 'var(--lh-h3)',
  letterSpacing: 'var(--ls-h3)',
  fontSize: 'var(--text-h3)',
};

export const TermsAndConditionsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: 'Terme en voorwaardes' }
        ]}
        noPadding
      >
        <ContentHero 
          title="Terme en voorwaardes"
          subtitle="Lees asseblief hierdie terme sorgvuldig deur voordat jy ons dienste gebruik."
          image={HERO_IMAGES.legal}
        />

        <div className="max-w-[900px] pt-8 mb-12 px-4 md:px-0 mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <strong>Laas opgedateer: 19 Desember 2025</strong>
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:text-gray-300 px-4 md:px-0 mx-auto w-full md:max-w-[900px]">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Welkom by <em>rooi rose</em>. Hierdie Terme en voorwaardes ("Terme", "Ooreenkoms") reguleer jou 
              gebruik van ons webwerf by <strong>www.diepapier.co.za</strong> (die "Diens") wat deur 
              <em>rooi rose</em> (Edms) Bpk ("ons", "ons" of "onse") bedryf word.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Deur toegang tot of gebruik van die Diens, stem jy in om gebonde te wees aan hierdie Terme. 
              As jy nie saamstem met enige deel van die terme nie, mag jy nie toegang tot die Diens hê nie.
            </p>
          </section>

          {/* Acceptance */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              1. Aanvaarding van terme
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Deur die webwerf te besoek, 'n rekening te skep, of in te teken op enige van ons dienste, 
              erken jy dat jy hierdie Terme gelees en verstaan het en instem om daaraan gebonde te wees. 
              Hierdie Terme is van toepassing op alle gebruikers van die webwerf, insluitend sonder beperking 
              gebruikers wat blaai, intekenare, bydraers en/of bydraers van inhoud.
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              2. Gebruikersrekeninge
            </h2>
            
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>2.1 Rekening skepping</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Om toegang te kry tot sekere kenmerke van die Diens, moet jy 'n rekening skep. Jy stem in om:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Akkurate, huidige en volledige inligting tydens die registrasieproses te verskaf</li>
              <li>Jou rekening inligting op datum te hou en te wysig wanneer nodig</li>
              <li>Jou wagwoord vertroulik te hou en veilig te bewaar</li>
              <li>Onmiddellik vir ons te laat weet van enige ongemagtigde gebruik van jou rekening</li>
              <li>Verantwoordelik te wees vir alle aktiwiteite wat onder jou rekening plaasvind</li>
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>2.2 Rekening beëindiging</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ons behou die reg voor om enige rekening te beëindig of op te skort, sonder voorafgaande kennisgewing 
              of aanspreeklikheid, om enige rede, insluitend sonder beperking as jy die Terme oortree.
            </p>
          </section>

          {/* Subscriptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              3. Intekenings en betalings
            </h2>
            
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>3.1 Intekening pakkette</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ons bied verskeie intekening pakkette aan, insluitend:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Maandelikse digitale toegang</li>
              <li>Jaarlikse digitale toegang (teen afgepryse tarief)</li>
              <li>Gedrukte koerant aflewering</li>
              <li>Kombinasie pakkette (druk + digitaal)</li>
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>3.2 Betaling</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Betalings word vooraf gehef vir intekenings. Jy stem in om:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Geldige betaling besonderhede te verskaf</li>
              <li>Ons te magtig om jou gekose betaling metode te hef</li>
              <li>Alle toepaslike belasting te betaal</li>
              <li>Verantwoordelik te wees vir enige fooie wat deur jou finansiële instelling gehef word</li>
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>3.3 Outomatiese hernuwing</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Intekenings word outomaties hernu aan die einde van elke termyn, tensy jy dit kanselleer voor 
              die hernuwing datum. Ons sal jou per e-pos in kennis stel voor die hernuwing datum.
            </p>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>3.4 Kansellasies en terugbetalings</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Maandelikse intekenings:</strong> Kan enige tyd gekanselleer word. Geen terugbetalings vir die huidige betaalde maand nie.</li>
              <li><strong>Jaarlikse intekenings:</strong> Kan gekanselleer word, maar geen terugbetalings na 30 dae nie.</li>
              <li><strong>Terugbetaling aansoeke:</strong> Moet binne 30 dae van aanvanklike aankoop gedoen word via <a href="mailto:intekenings@diepapier.co.za" className="text-text-link-red font-bold hover:underline">intekenings@diepapier.co.za</a></li>
            </ul>
          </section>

          {/* Content Usage */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              4. Inhoud en intellektuele eiendom
            </h2>
            
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>4.1 Ons inhoud</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Alle inhoud op hierdie webwerf, insluitend maar nie beperk tot teks, grafika, logo's, ikone, 
              beelde, oudioklippe, video klippe en sagteware, is die eiendom van <em>rooi rose</em> of sy 
              inhoudverskaffers en word beskerm deur Suid-Afrikaanse en internasionale outeursreg wette.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jy mag nie sonder ons voorafgaande skriftelike toestemming:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Ons inhoud reproduseer, versprei, vertoon of gebruik vir kommersiële doeleindes</li>
              <li>Inhoud wysig of afgeleide werke skep</li>
              <li>Outeurskap inligting verwyder</li>
              <li>Webwerf inhoud "scrape" of outomaties versamel</li>
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={TC_H3}>4.2 Gebruiker inhoud</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Deur inhoud (kommentaar, foto's, ens.) op ons platform te plaas, verleen jy ons 'n nie-eksklusiewe, 
              oordraagbare, sub-lisensieerbare, royalty-vrye, wêreldwye lisensie om daardie inhoud te gebruik, 
              te reproduseer, te wysig en te vertoon in verband met die Diens.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Jy waarborg dat jy die eienaar is of die nodige lisensies, regte, toestemmings en permissies het 
              om die inhoud te gebruik en te deel.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              5. Aanvaarbare gebruik
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jy stem in om die Diens NIE te gebruik om:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Enige wetlike reëls of regulasies te oortree</li>
              <li>Lasterlike, beledigende, haatdraende of rassistiese inhoud te plaas</li>
              <li>Spam, virus, malware of enige ander skadelike kode te versprei</li>
              <li>Inbreuk te maak op die regte van ander (privaatheid, outeursreg, handelsmerk, ens.)</li>
              <li>Vals of misleidende inligting te versprei</li>
              <li>Ander gebruikers te teister, intimideer of bedreig</li>
              <li>Die webwerf se sekuriteit te probeer oortree of te kompromitteer</li>
              <li>Data te "scrape" of outomaties te versamel</li>
              <li>Bots, spiders of ander outomatiese gereedskap te gebruik sonder ons toestemming</li>
            </ul>
          </section>

          {/* User Comments */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              6. Gebruiker kommentaar en moderasie
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ons moedig gesonde meningsverskil en debat aan, maar behou die reg voor om enige kommentaar 
              te modereer, redigeer of verwyder wat:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Nie aan ons gebruiksriglyne voldoen nie</li>
              <li>Aanstootlik, lasterlik of beledigend is</li>
              <li>Vals of misleidende inligting bevat</li>
              <li>Kommersiële of spam inhoud bevat</li>
              <li>Nie relevant is tot die artikel of onderwerp nie</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Gebruikers wat herhaaldelik ons riglyne oortree, kan permanent verban word van die platform.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              7. Vrywarings
            </h2>
            
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600 mb-4">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    <strong>Die Diens word verskaf "as is" en "soos beskikbaar" sonder enige waarborge van enige aard.</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ons waarborg nie dat die Diens ononderbroke, veilig of foutevry sal wees nie. Ons maak geen 
                    waarborge rakende die akkuraatheid of betroubaarheid van die inhoud nie.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Terwyl ons streef na akkurate en op datum joernalistiek, kan foute voorkom. Ons is nie 
              verantwoordelik vir enige foute of weglatings in die inhoud nie.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              8. Beperking van aanspreeklikheid
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In geen geval sal <em>rooi rose</em>, sy direkteure, werknemers of agente aanspreeklik wees vir enige 
              indirekte, toevallige, spesiale, gevolglike of strafbare skadevergoeding, insluitend sonder 
              beperking, verlies van winste, data, gebruik, goodwill of ander ontasbare verliese, wat voortspruit uit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-4">
              <li>Jou toegang tot of gebruik van (of onvermoë om toegang te kry tot of te gebruik) die Diens</li>
              <li>Enige gedrag of inhoud van derde partye op die Diens</li>
              <li>Enige inhoud verkry van die Diens</li>
              <li>Ongemagtigde toegang, gebruik of wysiging van jou transmissies of inhoud</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              9. Vrywaring
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Jy stem in om <em>rooi rose</em> en sy geaffilieerdes, direkteure, beamptes, werknemers en agente te verdedig, 
              vry te stel en skadeloos te hou teen enige en alle eise, skades, verpligtinge, verliese, aanspreeklikhede, 
              koste of skuld, en uitgawes (insluitend maar nie beperk tot regsfooie nie), wat voortspruit uit of verband 
              hou met:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-4">
              <li>Jou gebruik van en toegang tot die Diens</li>
              <li>Jou oortreding van hierdie Terme</li>
              <li>Jou oortreding van enige regte van 'n derde party, insluitend outeursreg, eiendom of privaatheid regte</li>
              <li>Enige bewering dat jou Inhoud skade veroorsaak het aan 'n derde party</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              10. Beëindiging
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ons kan jou toegang tot die Diens onmiddellik beëindig of opskort, sonder voorafgaande kennisgewing 
              of aanspreeklikheid, om enige rede, insluitend sonder beperking as jy die Terme oortree.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              By beëindiging sal jou reg om die Diens te gebruik onmiddellik ophou. As jy jou rekening wil beëindig, 
              kan jy eenvoudig ophou om die Diens te gebruik of jou rekening verwyder in die rekening instellings.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              11. Toepaslike reg
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hierdie Terme sal gereguleer word en geïnterpreteer word in ooreenstemming met die wette van 
              die Republiek van Suid-Afrika, sonder inagneming van sy konflik van regsbeginsels.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Enige geskil wat voortspruit uit of verband hou met hierdie Terme sal onderhewig wees aan die 
              eksklusiewe jurisdiksie van die howe in die Wes-Kaap, Suid-Afrika.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              12. Veranderinge aan terme
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ons behou die reg voor om hierdie Terme enige tyd te wysig of te vervang na ons eie diskresie. 
              As 'n hersiening wesenlik is, sal ons probeer om ten minste 30 dae kennisgewing te gee voor 
              enige nuwe terme in werking tree.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Deur die Diens te gebruik na die wysigings in werking getree het, stem jy in om gebonde te wees 
              aan die hersiene terme.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              13. Kontak ons
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              As jy enige vrae oor hierdie Terme het, kontak ons asseblief:
            </p>
            <div className="bg-gray-50 dark:bg-card p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong><em>rooi rose</em> (Edms) Bpk</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">E-pos: <a href="mailto:info@diepapier.co.za" className="text-text-link-red font-bold hover:underline">info@diepapier.co.za</a></p>
              <p className="text-gray-700 dark:text-gray-300">Adres: Loft Office East (LOE4), 2nd Floor, The Zone Rosebank, 187 Oxford Road, Rosebank, 2196</p>
            </div>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};