import { CONTACT_EMAILS, createMailtoLink } from '../data/contactInfo';
import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { AlertTriangle, AlertCircle, Mail, FileText, MessageSquare, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';

const H2_STYLE = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };

export const ComplaintsProcedurePage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Klagteprosedure - rooi rose"
        description="Hoe om 'n klagte in te dien oor redaksionele inhoud, advertensies of dienste van rooi rose."
        keywords="klagte, terugvoer, prosedure, ombudsman, press code"
      />

      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: 'Klagteprosedure' }
        ]}
        noPadding
      />

      <ContentHero 
        title="Klagteprosedure"
        subtitle="Ons verbintenis tot akkurate en regverdige joernalistiek"
        image={HERO_IMAGES.complaints}
      />

      <div className="alignwide py-10">
        <div className="max-w-[900px] mb-12">
          
          <p className="text-gray-500 mb-8">Laas opgedateer: 1 Februarie 2026</p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-lg p-5 mb-8 flex gap-3">
            <AlertCircle size={20} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <em>rooi rose</em> is verbind tot die hoogste standaarde van joernalistiek en kliëntediens. Indien jy ontevrede is met enige aspek van ons diens, moedig ons jou aan om die onderstaande prosedure te volg.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>1. Tipes klagtes</h2>
              <p className="text-sm mb-3">
                Ons klagteprosedure dek die volgende areas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Redaksionele inhoud</strong> — Foutiewe feite, onbillike verslaggewing, privaatheidskendings of etiese oortredings in gepubliseerde artikels.</li>
                <li><strong>Advertensies</strong> — Misleidende, aanstootlike of onvanpaste advertensie-inhoud.</li>
                <li><strong>Dienste</strong> — Probleme met intekeninge, aflewering, e-uitgawes of kliëntediens.</li>
                <li><strong>Webwerf en digitale platforms</strong> — Tegniese probleme, toeganklikheid of aanlyn-ervaring.</li>
                <li><strong>Kommentare</strong> — Aanstootlike of haatspraak-kommentare op ons platforms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>2. Stap 1: Kontak ons direk</h2>
              <p className="text-sm mb-4">
                Die eerste stap is om jou klagte direk aan ons te rig. Ons streef daarna om alle klagtes binne <strong>120 werkure</strong> te beantwoord.
              </p>
              <div className="bg-gray-50 dark:bg-card rounded-lg p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">Redaksionele klagtes</p>
                    <a href="mailto:redaksie@diepapier.co.za" className="text-sm text-text-link-red hover:underline">redaksie@diepapier.co.za</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">Advertensie-klagtes</p>
                    <a href="mailto:adverteer@diepapier.co.za" className="text-sm text-text-link-red hover:underline">adverteer@diepapier.co.za</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">Algemene klagtes</p>
                    <a href="mailto:klagtes@diepapier.co.za" className="text-sm text-text-link-red hover:underline">klagtes@diepapier.co.za</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">E-pos</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">info@diepapier.co.za (kantoorure: Ma-Vr 08:00-16:30)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>3. Stap 2: Eskalasie na die Redakteur</h2>
              <p className="text-sm">
                Indien jy nie tevrede is met die aanvanklike reaksie nie, kan jy jou klagte eskaleer na die Redakteur. Stuur 'n volledige skriftelike klagte per e-pos aan <a href="mailto:lesers@diepapier.co.za" className="text-text-link-red hover:underline font-medium">lesers@diepapier.co.za</a>. Die Redakteur sal die klagte binne <strong>240 werkure</strong> ondersoek en skriftelik reageer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>4. Stap 3: Pers-ombudsman en Persraad</h2>
              <p className="text-sm mb-3">
                Indien die interne proses nie jou klagte bevredigend oplos nie, kan jy 'n klagte by die Suid-Afrikaanse Persraad of die Pers-ombudsman indien.
              </p>
              <div className="bg-gray-50 dark:bg-card rounded-lg p-5 space-y-4 text-sm">
                <div>
                  <p className="font-bold text-brand-navy dark:text-foreground mb-1">Suid-Afrikaanse Persraad (SA Press Council)</p>
                  <p className="text-gray-600 dark:text-gray-400">Webwerf: <a href="https://www.presscouncil.org.za" target="_blank" rel="noopener noreferrer" className="text-text-link-red hover:underline">www.presscouncil.org.za</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Tel: <a href="tel:0114843612" className="text-text-link-red hover:underline">011 484 3612</a></p>
                </div>
                <div>
                  <p className="font-bold text-brand-navy dark:text-foreground mb-1">Media-ombudsman</p>
                  <p className="text-gray-600 dark:text-gray-400">George Claassen: <a href={createMailtoLink(CONTACT_EMAILS.ombudsman)} className="text-text-link-red hover:underline">{CONTACT_EMAILS.ombudsman}</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Klagtes kan ook aanlyn ingedien word by die Persraad-webwerf. Die ombudsman ondersoek klagtes oor alle publikasies wat by die Persraad geregistreer is.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>5. Wat om in jou klagte in te sluit</h2>
              <p className="text-sm mb-3">
                Om jou klagte so vinnig moontlik te kan hanteer, sluit asseblief die volgende in:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Jou volle naam en kontakbesonderhede (e-pos en/of telefoonnommer).</li>
                <li>'n Duidelike beskrywing van die klagte en die spesifieke inhoud waaroor dit gaan.</li>
                <li>Die publiseringsdatum en titel van die betrokke artikel, advertensie of diens.</li>
                <li>'n Skakel (URL) na die betrokke inhoud indien van toepassing.</li>
                <li>Die uitkoms wat jy verwag (bv. regstelling, verskoning, verwydering).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>6. Ons verbintenis</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Alle klagtes word vertroulik hanteer.</li>
                <li>Ons erken ontvangs van jou klagte binne <strong>48 werkure</strong>.</li>
                <li>Ons streef daarna om klagtes binne <strong>120-240 werkure</strong> op te los, afhangende van die kompleksiteit.</li>
                <li>Indien 'n regstelling of korreksie nodig is, sal dit prominent gepubliseer word.</li>
                <li>Ons handhaaf die beginsels van die SA Persraad se Perskode te alle tye.</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-card rounded-lg p-6">
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>Verwante beleid</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/beleid/perskode"
                  className="inline-flex items-center gap-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-2.5 text-sm font-medium text-brand-navy dark:text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} />
                  Perskode
                </Link>
                <Link
                  to="/beleid/kommentaarbeleid"
                  className="inline-flex items-center gap-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-2.5 text-sm font-medium text-brand-navy dark:text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <MessageSquare size={16} />
                  Kommentaarbeleid
                </Link>
                <Link
                  to="/beleid/privaatheidsbeleid"
                  className="inline-flex items-center gap-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-2.5 text-sm font-medium text-brand-navy dark:text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Lock size={16} />
                  Privaatheidsbeleid
                </Link>
                <Link
                  to="/beleid/gebruikersreels"
                  className="inline-flex items-center gap-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-2.5 text-sm font-medium text-brand-navy dark:text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} />
                  Gebruikersreëls
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};