import { useState } from 'react';
import { Settings, Shield, CheckCircle2 } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { CodeBlock } from '../../components/dev/CodeBlock';

/**
 * SystemConfig — WordPress & WooCommerce System Configuration Reference
 * 
 * Displays comprehensive configuration settings for:
 * - WordPress core settings
 * - WooCommerce general, product, tax, subscription settings
 * - Payfast payment gateway
 * - Issuu integration
 * - Gravity Forms
 * - Yoast SEO
 * - Caching & performance
 * - Security & backups
 * 
 * Route: /ontwikkelaar/stelselkonfig
 */

export const SystemConfig: React.FC = () => {
  const { locale } = useDevLanguage();
  const [activeSection, setActiveSection] = useState<string>('wordpress');

  const sections = [
    { id: 'wordpress', icon: Settings, label: { af: 'WordPress Kern', en: 'WordPress Core' } },
    { id: 'woocommerce', icon: Settings, label: { af: 'WooCommerce', en: 'WooCommerce' } },
    { id: 'subscriptions', icon: Settings, label: { af: 'Intekeninge', en: 'Subscriptions' } },
    { id: 'memberships', icon: Settings, label: { af: 'Lidmaatskappe', en: 'Memberships' } },
    { id: 'payfast', icon: Settings, label: { af: 'Payfast', en: 'Payfast' } },
    { id: 'issuu', icon: Settings, label: { af: 'Issuu', en: 'Issuu' } },
    { id: 'forms', icon: Settings, label: { af: 'Gravity Forms', en: 'Gravity Forms' } },
    { id: 'seo', icon: Settings, label: { af: 'SEO (Yoast)', en: 'SEO (Yoast)' } },
    { id: 'performance', icon: Settings, label: { af: 'Prestasie', en: 'Performance' } },
    { id: 'deployment', icon: Settings, label: { af: 'Ontplooiing', en: 'Deployment' } },
  ];

  const isAf = locale === 'af';
  const heroMeta = HERO_META.systemConfig;
  const hero = resolveHeroMeta(heroMeta, locale);
  const t = (key: string) => getTranslation(key, locale);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Page Hero */}
      <DevToolHero
        icon={hero.icon}
        iconColor={hero.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('sc.sections'), value: sections.length },
        ]}
        badge={`${sections.length} ${t('sc.sectionsLower')}`}
      />

      {/* Sticky Section Nav */}
      <div className="sticky top-0 z-10 border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-brand-navy/95 backdrop-blur-sm -mx-6 sm:-mx-8 px-6 sm:px-8">
        <div className="flex gap-2 overflow-x-auto py-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-brand-red text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                {section.label[locale]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        {activeSection === 'wordpress' && <WordPressCoreSection locale={locale} />}
        {activeSection === 'woocommerce' && <WooCommerceSection locale={locale} />}
        {activeSection === 'subscriptions' && <SubscriptionsSection locale={locale} />}
        {activeSection === 'memberships' && <MembershipsSection locale={locale} />}
        {activeSection === 'payfast' && <PayfastSection locale={locale} />}
        {activeSection === 'issuu' && <IssuuSection locale={locale} />}
        {activeSection === 'forms' && <GravityFormsSection locale={locale} />}
        {activeSection === 'seo' && <YoastSEOSection locale={locale} />}
        {activeSection === 'performance' && <PerformanceSection locale={locale} />}
        {activeSection === 'deployment' && <DeploymentSection locale={locale} />}
      </div>

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.systemConfig} />
    </div>
  );
};

// ─── WordPress Core Settings Section ────────────────────────────────────────

const WordPressCoreSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'WordPress Kern Instellings' : 'WordPress Core Settings'}
      subtitle={locale === 'af' ? 'Algemene, lees, bespreking, media, en permalink-instellings' : 'General, reading, discussion, media, and permalink settings'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Algemene Instellings' : 'General Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Werf Titel' : 'Site Title'} value="rooi rose" />
      <ConfigItem label={locale === 'af' ? 'Slagspreuk' : 'Tagline'} value="Jou gemeenskapskoerant" />
      <ConfigItem label={locale === 'af' ? 'WordPress Adres' : 'WordPress Address'} value="https://rooirose.co.za" />
      <ConfigItem label={locale === 'af' ? 'Administrasie E-pos' : 'Admin Email'} value="admin@rooirose.co.za" />
      <ConfigItem label={locale === 'af' ? 'Taal' : 'Language'} value="Afrikaans (af)" />
      <ConfigItem label={locale === 'af' ? 'Tydsone' : 'Timezone'} value="Africa/Johannesburg (GMT+2)" />
      <ConfigItem label={locale === 'af' ? 'Datum Formaat' : 'Date Format'} value="d F Y" />
      <ConfigItem label={locale === 'af' ? 'Tyd Formaat' : 'Time Format'} value="H:i" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Lees Instellings' : 'Reading Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Tuisblad vertoon' : 'Homepage displays'} value="Static page (Front Page)" />
      <ConfigItem label={locale === 'af' ? 'Bladsye toon hoogstens' : 'Pages show at most'} value="12 posts" />
      <ConfigItem label={locale === 'af' ? 'Soekenjin-sigbaarheid' : 'Search engine visibility'} value={locale === 'af' ? '☐ Ontmoedig soekenjins (afgekeur in produksie)' : '☐ Discourage search engines (unchecked in production)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Bespreking Instellings' : 'Discussion Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Vereiste vir kommentaar' : 'Comment requirements'} value={locale === 'af' ? '☑ Gebruikers moet geregistreerd en aangemeld wees' : '☑ Users must be registered and logged in'} />
      <ConfigItem label={locale === 'af' ? 'Outomatiese sluiting' : 'Auto-close comments'} value={locale === 'af' ? 'Na 30 dae' : 'After 30 days'} />
      <ConfigItem label={locale === 'af' ? 'Handmatige goedkeuring' : 'Manual approval'} value={locale === 'af' ? '☑ Kommentaar moet goedgekeur word' : '☑ Comment must be manually approved'} />
      <ConfigItem label={locale === 'af' ? 'Kommentare per bladsy' : 'Comments per page'} value="50" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Media Instellings' : 'Media Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Duimnael grootte' : 'Thumbnail size'} value="300 × 300 (cropped)" />
      <ConfigItem label={locale === 'af' ? 'Medium grootte' : 'Medium size'} value="768 × 0" />
      <ConfigItem label={locale === 'af' ? 'Groot grootte' : 'Large size'} value="1280 × 0" />
      <ConfigItem label={locale === 'af' ? 'Organiseer oplaai' : 'Organize uploads'} value={locale === 'af' ? '☑ Maand- en jaar-gebaseerde vouers' : '☑ Month- and year-based folders'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Permalink Instellings' : 'Permalink Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Permalink struktuur' : 'Permalink structure'} value="/%postname%/" />
      <ConfigItem label={locale === 'af' ? 'Etiket basis' : 'Tag base'} value="etiket" />
    </ConfigCard>
  </div>
);

// ─── WooCommerce Settings Section ───────────────────────────────────────────

const WooCommerceSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title="WooCommerce"
      subtitle={locale === 'af' ? 'Algemene winkel-instellings, geldeenheid, en belasting' : 'General store settings, currency, and tax'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Winkel Adres' : 'Store Address'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Land / Provinsie' : 'Country / State'} value="South Africa / Western Cape" />
      <ConfigItem label={locale === 'af' ? 'Verkoopsligging' : 'Selling location'} value={locale === 'af' ? 'Verkoop aan alle lande' : 'Sell to all countries'} />
      <ConfigItem label={locale === 'af' ? 'Versending ligging' : 'Shipping location'} value={locale === 'af' ? 'Stuur aan alle lande (slegs digitale produkte)' : 'Ship to all countries (digital products only)'} />
      <ConfigItem label={locale === 'af' ? 'BTW bereken' : 'Calculate tax'} value={locale === 'af' ? '☑ Gebaseer op kliënt se fakturering-adres' : '☑ Based on customer billing address'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Geldeenheid Opsies' : 'Currency Options'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Geldeenheid' : 'Currency'} value="South African rand (ZAR)" />
      <ConfigItem label={locale === 'af' ? 'Geldeenheid posisie' : 'Currency position'} value="Left with space (R 150.00)" />
      <ConfigItem label={locale === 'af' ? 'Duisendtal skeier' : 'Thousand separator'} value="Space ( )" />
      <ConfigItem label={locale === 'af' ? 'Desimale skeier' : 'Decimal separator'} value="Period (.)" />
      <ConfigItem label={locale === 'af' ? 'Aantal desimale' : 'Number of decimals'} value="2" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'BTW Instellings' : 'Tax Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Land Kode' : 'Country Code'} value="ZA (South Africa)" />
      <ConfigItem label={locale === 'af' ? 'BTW Koers' : 'VAT Rate'} value="15.00%" />
      <ConfigItem label={locale === 'af' ? 'Pryse ingevoer met BTW' : 'Prices entered with tax'} value={locale === 'af' ? '☑ Ja, pryse sluit BTW in' : '☑ Yes, prices are inclusive of tax'} />
      <ConfigItem label={locale === 'af' ? 'Vertoon pryse' : 'Display prices'} value={locale === 'af' ? 'Met BTW ingesluit' : 'Including tax'} />
      <ConfigItem label={locale === 'af' ? 'Afrondingsmetode' : 'Rounding method'} value={locale === 'af' ? '☑ Rond BTW by subtotaal-vlak' : '☑ Round tax at subtotal level'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Produkte Instellings' : 'Product Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Winkelblad' : 'Shop page'} value={locale === 'af' ? 'Nie van toepassing (e-uitgawes argief)' : 'Not applicable (e-editions archive)'} />
      <ConfigItem label={locale === 'af' ? 'Voorraadbestuur' : 'Stock management'} value={locale === 'af' ? '☑ Geaktiveer (vir aktiewe intekeninge)' : '☑ Enabled (for active subscriptions)'} />
      <ConfigItem label={locale === 'af' ? 'Aflaaibare produkte toegang' : 'Download access'} value={locale === 'af' ? '☑ Aflaai vereis aanmelding' : '☑ Downloads require login'} />
    </ConfigCard>
  </div>
);

// ─── Subscriptions Settings Section ─────────────────────────────────────────

const SubscriptionsSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'WooCommerce Intekeninge' : 'WooCommerce Subscriptions'}
      subtitle={locale === 'af' ? 'Herhalende betaling-instellings, hernuwings, en kansellasies' : 'Recurring payment settings, renewals, and cancellations'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Algemene Intekeninge' : 'General Subscriptions'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Voeg-by-mandjie knoppie' : 'Add to Cart button'} value={locale === 'af' ? 'Teken nou in' : 'Subscribe Now'} />
      <ConfigItem label={locale === 'af' ? 'Plaas-bestelling knoppie' : 'Place Order button'} value={locale === 'af' ? 'Meld aan' : 'Sign Up Now'} />
      <ConfigItem label={locale === 'af' ? 'Gemengde betaal' : 'Mixed checkout'} value={locale === 'af' ? '☑ Laat toe (intekening + nie-intekening produkte)' : '☑ Enable (subscriptions + non-subscription products)'} />
      <ConfigItem label={locale === 'af' ? 'Veelvuldige intekeninge' : 'Multiple subscriptions'} value={locale === 'af' ? '☑ Laat toe in een transaksie' : '☑ Enable in one transaction'} />
      <ConfigItem label={locale === 'af' ? 'Laat oorskakeling toe' : 'Allow switching'} value={locale === 'af' ? '☑ Laat intekenaars toe om op te gradeer/af te gradeer' : '☑ Enable subscribers to upgrade/downgrade'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Hernuwings & Outomatiese Betalings' : 'Renewals & Automatic Payments'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Outomatiese betalings' : 'Automatic payments'} value={locale === 'af' ? '☑ Geaktiveer (outomatiese hernuwings)' : '☑ Enabled (automatic renewals)'} />
      <ConfigItem label={locale === 'af' ? 'Aanvaar handmatige hernuwings' : 'Accept manual renewals'} value={locale === 'af' ? '☑ Ja, aanvaar altyd handmatige betalings' : '☑ Yes, always accept manual payments'} />
      <ConfigItem label={locale === 'af' ? 'Herprobeer mislukte betalings' : 'Retry failed payments'} value={locale === 'af' ? '☑ Herprobeer 3 keer (1 dag, 3 dae, 5 dae)' : '☑ Retry 3 times (1 day, 3 days, 5 days)'} />
      <ConfigItem label={locale === 'af' ? 'E-pos kennisgewings' : 'Email notifications'} value={locale === 'af' ? '☑ Stuur e-pos wanneer betalings herprobeer word' : '☑ Send email when retrying payments'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Kansellasie Instellings' : 'Cancellation Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Gekanselleerde status' : 'Cancelled status'} value={locale === 'af' ? 'Kanselleer onmiddellik' : 'Cancel immediately'} />
      <ConfigItem label={locale === 'af' ? 'Skrap gekanselleerde intekeninge' : 'Trash cancelled subscriptions'} value={locale === 'af' ? '☐ Nee (hou vir verslagdoening)' : '☐ No (keep for reporting)'} />
      <ConfigItem label={locale === 'af' ? 'Skrap verstrykte intekeninge' : 'Trash expired subscriptions'} value={locale === 'af' ? '☐ Nee (hou vir verslagdoening)' : '☐ No (keep for reporting)'} />
    </ConfigCard>

    <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-brand-red">
        <CheckCircle2 className="h-5 w-5" />
        {locale === 'af' ? 'Sleutel Intekeninge Besluite' : 'Key Subscription Decisions'}
      </h3>
      <ul className="space-y-2 text-sm text-white/80">
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? '14-dag gratis proef' : '14-day free trial'}:</strong> {locale === 'af' ? 'Kaart vereis (tokenisasie vir toekomstige herhalings)' : 'Card required (tokenization for future renewals)'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? 'Argief toegang' : 'Archive access'}:</strong> {locale === 'af' ? 'Van aanmelddatum vorentoe (nie terugwerkend nie)' : 'From sign-up date forward (not retroactive)'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? 'Volledige Argief' : 'Full Archive'}:</strong> {locale === 'af' ? 'R500 enkele aankoop (toegang tot alle verlede en toekomstige e-uitgawes)' : 'R500 single purchase (access to all past and future e-editions)'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? 'Fisiese aflewering' : 'Physical delivery'}:</strong> {locale === 'af' ? 'Hanteer deur sustermaatskappy (geen digitale toegang ingesluit nie)' : 'Handled by sister company (no digital access included)'}</span>
        </li>
      </ul>
    </div>
  </div>
);

// ─── Memberships Settings Section ───────────────────────────────────────────

const MembershipsSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'WooCommerce Lidmaatskappe' : 'WooCommerce Memberships'}
      subtitle={locale === 'af' ? 'Toegangsbeheer, inhoudsbeperking, en lidmaatskapplanne' : 'Access control, content restriction, and membership plans'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Algemene Lidmaatskappe' : 'General Memberships'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Lede gebied bladsy' : 'Members area page'} value="My Account → Memberships tab" />
      <ConfigItem label={locale === 'af' ? 'Beperkingsmodus' : 'Restriction mode'} value={locale === 'af' ? 'Verberg beperkte inhoud' : 'Hide restricted content'} />
      <ConfigItem label={locale === 'af' ? 'Beperkingsboodskap (inhoud)' : 'Restriction message (content)'} value={locale === 'af' ? 'Slegs beskikbaar vir e-uitgawe-intekenaars' : 'Only available to e-edition subscribers'} />
      <ConfigItem label={locale === 'af' ? 'Verleen toegang by' : 'Grant access upon'} value={locale === 'af' ? 'Intekening aktivering (onmiddellik na betaling)' : 'Subscription activation (immediately after payment)'} />
      <ConfigItem label={locale === 'af' ? 'Herroep toegang by' : 'Revoke access upon'} value={locale === 'af' ? 'Intekening kansellasie of verstryking' : 'Subscription cancellation or expiration'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Lidmaatskapsplan: E-Uitgawe Intekenaar' : 'Membership Plan: E-Uitgawe Intekenaar'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Beperkte inhoudstipes' : 'Restricted content types'} value={`☑ Posts (dp_article), ☑ Pages (e-edition archives), ☑ CPT: dp_eedition`} />
      <ConfigItem label={locale === 'af' ? 'Druppel reëls' : 'Dripping rules'} value={locale === 'af' ? 'Verleen argief-toegang vanaf aanmelddatum vorentoe' : 'Grant archive access from sign-up date forward'} />
      <ConfigItem label={locale === 'af' ? 'Argief logika' : 'Archive logic'} value={locale === 'af' ? 'Nuwe intekenaars: toegang vanaf huidige datum. "Volledige Argief" kopers: onbeperkte toegang.' : 'New subscribers: access from current date. "Full Archive" purchasers: unrestricted access.'} />
    </ConfigCard>

    <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-brand-red">
        <Shield className="h-5 w-5" />
        {locale === 'af' ? 'Toegangsbeheer Logika' : 'Access Control Logic'}
      </h3>
      <div className="space-y-3 text-sm text-white/80">
        <p>
          <strong>{locale === 'af' ? 'Intekenaars' : 'Subscribers'} (R90/R80/R70 {locale === 'af' ? 'maandeliks' : 'monthly'}):</strong>
        </p>
        <ul className="ml-6 space-y-1">
          <li className="list-disc">{locale === 'af' ? 'Toegang tot e-uitgawes vanaf aanmelddatum vorentoe' : 'Access to e-editions from sign-up date forward'}</li>
          <li className="list-disc">{locale === 'af' ? 'Verlede e-uitgawes (voor aanmelddatum) bly beperk' : 'Past e-editions (before sign-up date) remain restricted'}</li>
        </ul>
        <p className="mt-3">
          <strong>{locale === 'af' ? 'Volledige Argief Kopers' : 'Full Archive Purchasers'} (R500 {locale === 'af' ? 'enkele aankoop' : 'single purchase'}):</strong>
        </p>
        <ul className="ml-6 space-y-1">
          <li className="list-disc">{locale === 'af' ? 'Onbeperkte toegang tot alle verlede en toekomstige e-uitgawes' : 'Unrestricted access to all past and future e-editions'}</li>
          <li className="list-disc">{locale === 'af' ? 'Geen vervaldatum (lewenslange toegang)' : 'No expiration date (lifetime access)'}</li>
        </ul>
      </div>
    </div>
  </div>
);

// ─── Payfast Configuration Section ──────────────────────────────────────────

const PayfastSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title="Payfast"
      subtitle={locale === 'af' ? 'Betalingspoort konfigurasie vir Suid-Afrikaanse intekenaars' : 'Payment gateway configuration for South African subscribers'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Verbinding Instellings' : 'Connection Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Handelaar ID' : 'Merchant ID'} value="(Provided by Payfast)" isSensitive />
      <ConfigItem label={locale === 'af' ? 'Handelaar Sleutel' : 'Merchant Key'} value="(Provided by Payfast)" isSensitive />
      <ConfigItem label={locale === 'af' ? 'Wagfrase' : 'Passphrase'} value="(Set in Payfast dashboard)" isSensitive />
      <ConfigItem label={locale === 'af' ? 'Sandbox modus' : 'Sandbox mode'} value={locale === 'af' ? '☑ Geaktiveer (toets), ☐ Gedeaktiveer (produksie)' : '☑ Enabled (testing), ☐ Disabled (production)'} />
      <ConfigItem label={locale === 'af' ? 'Logboek' : 'Logging'} value={locale === 'af' ? '☑ Geaktiveer (aanbeveel vir probleem-oplossing)' : '☑ Enabled (recommended for troubleshooting)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Betaling Instellings' : 'Payment Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Titel' : 'Title'} value="Payfast" />
      <ConfigItem label={locale === 'af' ? 'Beskrywing' : 'Description'} value={locale === 'af' ? 'Betaal veilig met Payfast — kredietkaart, debietkaart, of EFT.' : 'Pay securely with Payfast — credit card, debit card, or EFT.'} />
      <ConfigItem label={locale === 'af' ? 'Aktiveer vir intekeninge' : 'Enable for subscriptions'} value="☑" />
      <ConfigItem label={locale === 'af' ? 'Aktiveer tokenisasie' : 'Enable tokenization'} value={locale === 'af' ? '☑ (vereiste vir herhalende betalings)' : '☑ (required for recurring payments)'} />
      <ConfigItem label={locale === 'af' ? 'Betaling aksie' : 'Payment action'} value={locale === 'af' ? 'Magtig en vang' : 'Authorize and Capture'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Intekening Instellings' : 'Subscription Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Herhalende fakturering' : 'Recurring billing'} value={locale === 'af' ? '☑ Geaktiveer' : '☑ Enabled'} />
      <ConfigItem label={locale === 'af' ? 'Intekening tokenisasie' : 'Subscription tokenization'} value={locale === 'af' ? '☑ Gebruik Payfast tokenisasie' : '☑ Use Payfast tokenization'} />
      <ConfigItem label={locale === 'af' ? 'Kaart vereis vir proef' : 'Card required for trial'} value={locale === 'af' ? '☑ Ja (14-dag gratis proef vereis kaartbesonderhede)' : '☑ Yes (14-day free trial requires card details)'} />
      <ConfigItem label={locale === 'af' ? 'Mislukte betaling hantering' : 'Failed payment handling'} value={locale === 'af' ? 'Herprobeer via WooCommerce Subscriptions (3 pogings)' : 'Retry via WooCommerce Subscriptions (3 attempts)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Terugkeer URL\'s' : 'Return URLs'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Sukses URL' : 'Success URL'} value="https://rooirose.co.za/bestelling-bevestiging?status=success" />
      <ConfigItem label={locale === 'af' ? 'Kanselleer URL' : 'Cancel URL'} value="https://rooirose.co.za/betaal?status=cancelled" />
      <ConfigItem label={locale === 'af' ? 'Kennisgewing URL (ITN)' : 'Notify URL (ITN)'} value="https://rooirose.co.za/wc-api/WC_Gateway_Payfast" />
    </ConfigCard>

    <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-brand-red">
        <Shield className="h-5 w-5" />
        {locale === 'af' ? 'Sekuriteit & ITN' : 'Security & ITN'}
      </h3>
      <ul className="space-y-2 text-sm text-white/80">
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>ITN:</strong> {locale === 'af' ? 'Aktiveer ITN vir betaling-kennisgewings' : 'Enable ITN for payment notifications'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? 'Verifieer handtekeninge' : 'Verify signatures'}:</strong> {locale === 'af' ? '☑ Ja (sekuriteit vereiste)' : '☑ Yes (security requirement)'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">•</span>
          <span><strong>{locale === 'af' ? 'Toegelate IP\'s' : 'Allowed IPs'}:</strong> {locale === 'af' ? 'Witlys Payfast IP-reekse in firewall' : 'Whitelist Payfast IP ranges in firewall'}</span>
        </li>
      </ul>
    </div>
  </div>
);

// ─── Issuu Integration Section ──────────────────────────────────────────────

const IssuuSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'Issuu Integrasie' : 'Issuu Integration'}
      subtitle={locale === 'af' ? 'Handmatige insluit via pasgemaakte velde (geen inprop nie)' : 'Manual embed via custom fields (no plugin)'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Pasgemaakte Velde (SCF)' : 'Custom Fields (SCF)'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Veld Groep' : 'Field Group'} value="E-Edition Metadata" />
      <ConfigItem label={locale === 'af' ? 'Toegewys aan' : 'Assigned to'} value="dp_eedition CPT" />
      <ConfigItem label={locale === 'af' ? 'Veld Naam' : 'Field Name'} value="issuu_embed_code" />
      <ConfigItem label={locale === 'af' ? 'Veld Tipe' : 'Field Type'} value="Textarea" />
      <ConfigItem label={locale === 'af' ? 'Vereiste' : 'Required'} value="☑ Yes" />
    </ConfigCard>

    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
        {locale === 'af' ? 'Sjabloon Integrasie (PHP)' : 'Template Integration (PHP)'}
      </h3>
      <CodeBlock
        code={`<?php\n// Fetch Issuu embed code\n$issuu_embed = get_field('issuu_embed_code');\nif ($issuu_embed) {\n    echo '<div class="issuu-embed-container">';\n    echo $issuu_embed; // Output raw iframe embed\n    echo '</div>';\n} else {\n    echo '<p>Geen Issuu-embed beskikbaar nie.</p>';\n}\n?>`}
        language="php"
        label="single-eedition.php"
        editable
      />
    </div>

    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
        {locale === 'af' ? 'CSS Styling' : 'CSS Styling'}
      </h3>
      <CodeBlock
        code={`.issuu-embed-container {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  aspect-ratio: 16 / 9;\n  overflow: hidden;\n}\n\n.issuu-embed-container iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}`}
        language="css"
        label="issuu-embed.css"
        editable
      />
    </div>

    <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-brand-red">
        <CheckCircle2 className="h-5 w-5" />
        {locale === 'af' ? 'Werkvloei Stappe' : 'Workflow Steps'}
      </h3>
      <ol className="space-y-2 text-sm text-white/80">
        <li className="flex items-start gap-2">
          <span className="text-brand-red">1.</span>
          <span><strong>{locale === 'af' ? 'Publiseer PDF na Issuu' : 'Publish PDF to Issuu'}:</strong> {locale === 'af' ? 'Laai die weeklikse e-uitgawe PDF op na Issuu.com' : 'Upload the weekly e-edition PDF to Issuu.com'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">2.</span>
          <span><strong>{locale === 'af' ? 'Kry Insluit Kode' : 'Get Embed Code'}:</strong> {locale === 'af' ? 'Navigeer na Issuu dashboard → Publikasies → [Publikasie Naam] → Deel → Insluit. Kopieer die volle iframe HTML.' : 'Navigate to Issuu dashboard → Publications → [Publication Name] → Share → Embed. Copy the full iframe HTML.'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">3.</span>
          <span><strong>{locale === 'af' ? 'Skep WordPress Pos' : 'Create WordPress Post'}:</strong> {locale === 'af' ? 'In WordPress admin, skep \'n nuwe dp_eedition pos' : 'In WordPress admin, create a new dp_eedition post'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">4.</span>
          <span><strong>{locale === 'af' ? 'Plak Insluit Kode' : 'Paste Embed Code'}:</strong> {locale === 'af' ? 'In die "E-Edition Metadata" pasgemaakte veld-groep, plak die Issuu iframe-kode in die issuu_embed_code textarea' : 'In the "E-Edition Metadata" custom field group, paste the Issuu iframe code into the issuu_embed_code textarea'}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-red">5.</span>
          <span><strong>{locale === 'af' ? 'Publiseer' : 'Publish'}:</strong> {locale === 'af' ? 'Publiseer die pos. Die insluit sal op die enkele e-uitgawe bladsy render.' : 'Publish the post. The embed will render on the single e-edition page.'}</span>
        </li>
      </ol>
    </div>
  </div>
);

// ─── Gravity Forms Section ──────────────────────────────────────────────────

const GravityFormsSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title="Gravity Forms"
      subtitle={locale === 'af' ? '3 vorme: Nuusbrief, Kontak, Kompetisie' : '3 forms: Newsletter, Contact, Competition'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Vorm 1: Nuusbrief Intekening' : 'Form 1: Newsletter Subscription'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Vorm ID' : 'Form ID'} value="1" />
      <ConfigItem label={locale === 'af' ? 'Velde' : 'Fields'} value={locale === 'af' ? 'Naam, E-pos, Frekwensie (Dinsdag/Vrydag/Beide), Toestemming' : 'Name, Email, Frequency (Tuesday/Friday/Both), Consent'} />
      <ConfigItem label={locale === 'af' ? 'Bevestiging' : 'Confirmation'} value={locale === 'af' ? 'Omskakel na /dankie-nuusbrief' : 'Redirect to /dankie-nuusbrief'} />
      <ConfigItem label={locale === 'af' ? 'Integrasies' : 'Integrations'} value={locale === 'af' ? 'Mailchimp (of alternatiewe ESP) — karteer Naam → FNAME, E-pos → EMAIL, Frekwensie → FREQ' : 'Mailchimp (or alternative ESP) — map Name → FNAME, Email → EMAIL, Frequency → FREQ'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Vorm 2: Kontak Vorm' : 'Form 2: Contact Form'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Vorm ID' : 'Form ID'} value="2" />
      <ConfigItem label={locale === 'af' ? 'Velde' : 'Fields'} value={locale === 'af' ? 'Naam, E-pos, Telefoon, Onderwerp, Boodskap, Toestemming' : 'Name, Email, Phone, Subject, Message, Consent'} />
      <ConfigItem label={locale === 'af' ? 'Bevestiging' : 'Confirmation'} value={locale === 'af' ? 'Omskakel na /dankie-kontak' : 'Redirect to /dankie-kontak'} />
      <ConfigItem label={locale === 'af' ? 'Kennisgewings aan' : 'Notifications to'} value="kontak@rooirose.co.za" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Vorm 3: Kompetisie Inskrywing' : 'Form 3: Competition Entry'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Vorm ID' : 'Form ID'} value="3" />
      <ConfigItem label={locale === 'af' ? 'Velde' : 'Fields'} value={locale === 'af' ? 'Naam, E-pos, Telefoon, Antwoord, Terme Ooreenkoms' : 'Name, Email, Phone, Answer, Terms Agreement'} />
      <ConfigItem label={locale === 'af' ? 'Bevestiging' : 'Confirmation'} value={locale === 'af' ? 'Omskakel na /dankie-kompetisie' : 'Redirect to /dankie-kompetisie'} />
      <ConfigItem label={locale === 'af' ? 'Kennisgewings aan' : 'Notifications to'} value="kompetisies@rooirose.co.za" />
    </ConfigCard>
  </div>
);

// ─── Yoast SEO Section ──────────────────────────────────────────────────────

const YoastSEOSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'Yoast SEO Konfigurasie' : 'Yoast SEO Configuration'}
      subtitle={locale === 'af' ? 'SEO titel-sjablone, sosiale instellings, en skema' : 'SEO title templates, social settings, and schema'}
    />

    <ConfigCard
      title={locale === 'af' ? 'Algemene Instellings' : 'General Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'SEO Titel Skeier' : 'SEO Title Separator'} value="— (em dash)" />
      <ConfigItem label={locale === 'af' ? 'Tuisblad Titel' : 'Homepage Title'} value="rooi rose — Jou gemeenskapstydskrif" />
      <ConfigItem label={locale === 'af' ? 'Tuisblad Meta Beskrywing' : 'Homepage Meta Description'} value={locale === 'af' ? 'rooi rose is jou gemeenskapstydskrif vir Bellville, Brackenfell, Durbanville, en omgewing.' : 'rooi rose is your community magazine for Bellville, Brackenfell, Durbanville, and surroundings.'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Inhoud Tipes' : 'Content Types'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Pos (dp_article)' : 'Posts (dp_article)'} value="%%title%% — rooi rose" />
      <ConfigItem label={locale === 'af' ? 'Bladsye' : 'Pages'} value="%%title%% — rooi rose" />
      <ConfigItem label={locale === 'af' ? 'E-Uitgawes (dp_eedition)' : 'E-Editions (dp_eedition)'} value="%%title%% — E-Uitgawes" />
      <ConfigItem label={locale === 'af' ? 'Kompetisies (dp_competition)' : 'Competitions (dp_competition)'} value="%%title%% — Kompetisies" />
      <ConfigItem label={locale === 'af' ? 'Gebeure (dp_event)' : 'Events (dp_event)'} value="%%title%% — Gebeure" />
      <ConfigItem label={locale === 'af' ? 'Borgskappe (dp_sponsor)' : 'Sponsors (dp_sponsor)'} value={locale === 'af' ? 'Geen (noindex)' : 'None (noindex)'} />
      <ConfigItem label={locale === 'af' ? 'FAQs (dp_faq)' : 'FAQs (dp_faq)'} value={locale === 'af' ? 'Geen (noindex, ingebedde op bladsye)' : 'None (noindex, embedded on pages)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Taksonomieë' : 'Taxonomies'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Kategorieë (dp_category)' : 'Categories (dp_category)'} value="%%term_title%% — Kategorie" />
      <ConfigItem label={locale === 'af' ? 'Etikette (dp_tag)' : 'Tags (dp_tag)'} value="%%term_title%% — Etiket" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Sosiale Instellings' : 'Social Settings'}
      icon={Settings}
    >
      <ConfigItem label="Facebook" value={locale === 'af' ? 'App ID (indien van toepassing), Verstek beeld (logo)' : 'App ID (if applicable), Default image (logo)'} />
      <ConfigItem label="Twitter" value="@diepapier" />
      <ConfigItem label="Pinterest" value={locale === 'af' ? 'Gedeaktiveer (nie van toepassing nie)' : 'Disabled (not applicable)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Skema Instellings' : 'Schema Settings'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Organisasie' : 'Organization'} value="rooi rose" />
      <ConfigItem label={locale === 'af' ? 'Webwerf Tipe' : 'Website Type'} value="News Media Organization" />
      <ConfigItem label="Logo" value={locale === 'af' ? '(URL na logo-beeld)' : '(URL to logo image)'} />
    </ConfigCard>
  </div>
);

// ─── Performance & Caching Section ──────────────────────────────────────────

const PerformanceSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'Prestasie & Kas' : 'Performance & Caching'}
      subtitle={locale === 'af' ? 'WP Rocket konfigurasie en sekuriteit' : 'WP Rocket configuration and security'}
    />

    <ConfigCard
      title={locale === 'af' ? 'WP Rocket — Lêer Optimering' : 'WP Rocket — File Optimization'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Minimeer CSS' : 'Minify CSS'} value="☑" />
      <ConfigItem label={locale === 'af' ? 'Kombineer CSS' : 'Combine CSS'} value={locale === 'af' ? '☑ (toets vir konflikte)' : '☑ (test for conflicts)'} />
      <ConfigItem label={locale === 'af' ? 'Minimeer JavaScript' : 'Minify JavaScript'} value="☑" />
      <ConfigItem label={locale === 'af' ? 'Kombineer JavaScript' : 'Combine JavaScript'} value={locale === 'af' ? '☐ (gereeld konflikte, toets versigtig)' : '☐ (often conflicts, test carefully)'} />
      <ConfigItem label={locale === 'af' ? 'Uitstel JavaScript laai' : 'Defer JavaScript loading'} value="☑" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'WP Rocket — Media' : 'WP Rocket — Media'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Lazy Load vir beelde' : 'Lazy Load for images'} value="☑" />
      <ConfigItem label={locale === 'af' ? 'Lazy Load vir iframes' : 'Lazy Load for iframes'} value={locale === 'af' ? '☑ (vir Issuu insluitings)' : '☑ (for Issuu embeds)'} />
      <ConfigItem label={locale === 'af' ? 'Vervang YouTube iframe' : 'Replace YouTube iframe'} value={locale === 'af' ? '☑ Met voorskou-beeld' : '☑ With preview image'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'WP Rocket — Kas' : 'WP Rocket — Cache'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Aktiveer kas vir mobiele toestelle' : 'Enable caching for mobile devices'} value="☑" />
      <ConfigItem label={locale === 'af' ? 'Aktiveer kas vir aangemelde gebruikers' : 'Enable caching for logged-in users'} value={locale === 'af' ? '☑ (met uitsluitings vir /my-account/*, /betaal/*, /my-e-uitgawes/)' : '☑ (with exclusions for /my-account/*, /betaal/*, /my-e-uitgawes/)'} />
      <ConfigItem label={locale === 'af' ? 'Kas Leeftyd' : 'Cache Lifespan'} value={locale === 'af' ? '10 ure (verstek)' : '10 hours (default)'} />
      <ConfigItem label={locale === 'af' ? 'Moenie kas URL\'s nie' : 'Never cache URLs'} value="/my-account/, /betaal/, /my-e-uitgawes/, /wc-api/" />
      <ConfigItem label={locale === 'af' ? 'Moenie kas koekies nie' : 'Never cache cookies'} value="woocommerce_items_in_cart, woocommerce_cart_hash, wp_woocommerce_session_*" />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Sekuriteit (Wordfence)' : 'Security (Wordfence)'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Firewall Modus' : 'Firewall Mode'} value={locale === 'af' ? 'Uitgebreide Beskerming' : 'Extended Protection'} />
      <ConfigItem label={locale === 'af' ? 'Intydse IP Bloklys' : 'Real-time IP Blocklist'} value={locale === 'af' ? 'Geaktiveer' : 'Enabled'} />
      <ConfigItem label={locale === 'af' ? 'Koers Beperking' : 'Rate Limiting'} value={locale === 'af' ? 'Mens: 240 versoeke/min, Kruiper: 60 versoeke/min' : 'Human: 240 requests/min, Crawler: 60 requests/min'} />
      <ConfigItem label={locale === 'af' ? 'Twee-Faktor Outentisering' : 'Two-Factor Authentication'} value={locale === 'af' ? '☑ Geaktiveer vir Administrateurs' : '☑ Enabled for Administrators'} />
      <ConfigItem label={locale === 'af' ? 'Blokkeer aanmeld pogings' : 'Block login attempts'} value={locale === 'af' ? 'Na 3 mislukte pogings (sluit vir 15 minute)' : 'After 3 failed attempts (lock for 15 minutes)'} />
    </ConfigCard>

    <ConfigCard
      title={locale === 'af' ? 'Rugsteun (UpdraftPlus)' : 'Backups (UpdraftPlus)'}
      icon={Settings}
    >
      <ConfigItem label={locale === 'af' ? 'Databasis Rugsteun' : 'Database Backups'} value={locale === 'af' ? 'Daagliks om 02:00 (behou 30)' : 'Daily at 02:00 (retain 30)'} />
      <ConfigItem label={locale === 'af' ? 'Lêer Rugsteun' : 'File Backups'} value={locale === 'af' ? 'Weekliks om 03:00 (behou 4)' : 'Weekly at 03:00 (retain 4)'} />
      <ConfigItem label={locale === 'af' ? 'Eksterne Berging' : 'Remote Storage'} value="Google Drive, Dropbox, or S3" />
      <ConfigItem label={locale === 'af' ? 'Rugsteun Inhoud' : 'Backup Contents'} value={locale === 'af' ? 'Alles (databasis, inproppe, temas, oplaai, kernlêers)' : 'All (database, plugins, themes, uploads, core files)'} />
    </ConfigCard>
  </div>
);

// ─── Deployment Checklist Section ───────────────────────────────────────────

const DeploymentSection: React.FC<{ locale: 'af' | 'en' }> = ({ locale }) => (
  <div className="space-y-8">
    <SectionHeader
      title={locale === 'af' ? 'Ontplooiing Kontrolelys' : 'Deployment Checklist'}
      subtitle={locale === 'af' ? 'Finale stappe voor die lancering van die WordPress werf' : 'Final steps before launching the WordPress site'}
    />

    <div className="space-y-4">
      <ChecklistCard
        title={locale === 'af' ? 'WooCommerce Gereed' : 'WooCommerce Ready'}
        icon={Settings}
        items={[
          { label: locale === 'af' ? 'Alle WooCommerce Subscriptions produkte geskep (3 maandeliks + 1 enkele aankoop)' : 'All WooCommerce Subscriptions products created (3 monthly + 1 single purchase)', done: false },
          { label: locale === 'af' ? 'Toets Payfast sandbox modus end-to-end (gratis proef, herhalende betaling, kansellasie)' : 'Test Payfast sandbox mode end-to-end (free trial, recurring payment, cancellation)', done: false },
          { label: locale === 'af' ? 'Verifieer WooCommerce Memberships toegangshekke werk op beperkte e-uitgawe argiewe' : 'Verify WooCommerce Memberships access gates work on restricted e-edition archives', done: false },
        ]}
      />

      <ChecklistCard
        title={locale === 'af' ? 'Vorms & Kommunikasie' : 'Forms & Communication'}
        icon={Settings}
        items={[
          { label: locale === 'af' ? 'Toets alle 3 Gravity Forms (nuusbrief, kontak, kompetisie) stuur na korrekte eindpunte' : 'Test all 3 Gravity Forms (newsletter, contact, competition) submit to correct endpoints', done: false },
          { label: locale === 'af' ? 'Stel geoutomatiseerde rugsteun op (UpdraftPlus daagliks databasis, weekliks lêers)' : 'Set up automated backups (UpdraftPlus daily database, weekly files)', done: false },
          { label: locale === 'af' ? 'Konfigureer SMTP e-pos (WP Mail SMTP) en toets alle transaksionele e-posse' : 'Configure SMTP email (WP Mail SMTP) and test all transactional emails', done: false },
        ]}
      />

      <ChecklistCard
        title={locale === 'af' ? 'SEO & Inhoud' : 'SEO & Content'}
        icon={Settings}
        items={[
          { label: locale === 'af' ? 'Verifieer Yoast SEO meta-etikette render korrek op alle bladsy-tipes' : 'Verify Yoast SEO meta tags render correctly on all page types', done: false },
          { label: locale === 'af' ? 'Verifieer Issuu insluitings render korrek op enkele e-uitgawe bladsye' : 'Verify Issuu embeds render correctly on single e-edition pages', done: false },
          { label: locale === 'af' ? 'Deaktiveer WordPress soekenjin-sigbaarheid blok (Instellings → Lees)' : 'Disable WordPress search engine visibility block (Settings → Reading)', done: false },
          { label: locale === 'af' ? 'Verifieer alle dev gereedskap bladsye (/ontwikkelaar/*) is noindexed of wagwoord-beskerm' : 'Verify all dev tool pages (/ontwikkelaar/*) are noindexed or password-protected', done: false },
        ]}
      />

      <ChecklistCard
        title={locale === 'af' ? 'Finale Skou' : 'Final Checks'}
        icon={Settings}
        items={[
          { label: locale === 'af' ? 'Skakel Payfast van sandbox na produksie modus' : 'Switch Payfast from sandbox to production mode', done: false },
          { label: locale === 'af' ? 'Aktiveer SSL-sertifikaat en forseer HTTPS' : 'Activate SSL certificate and force HTTPS', done: false },
          { label: locale === 'af' ? 'Stel WP Rocket kas uitsluitings (my-rekening, betaal, my-e-uitgawes)' : 'Set WP Rocket cache exclusions (my-account, checkout, my-e-editions)', done: false },
          { label: locale === 'af' ? 'Toets mobiele responsiewe ontwerp op alle bladsye' : 'Test mobile responsive design on all pages', done: false },
        ]}
      />
    </div>
  </div>
);

// ─── Shared Components ──────────────────────────────────────────────────────

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
    <p className="mt-1 text-sm text-gray-600 dark:text-white/60">{subtitle}</p>
  </div>
);

const ConfigCard: React.FC<{
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}> = ({ title, icon: Icon, children }) => (
  <div className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-6">
    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
      <Icon className="h-5 w-5 text-brand-red" />
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const ConfigItem: React.FC<{ label: string; value: string; isSensitive?: boolean }> = ({
  label,
  value,
  isSensitive = false,
}) => (
  <div className="flex items-start justify-between gap-4 border-b border-gray-100 dark:border-white/5 pb-2 last:border-0 last:pb-0">
    <span className="text-sm text-gray-600 dark:text-white/70">{label}</span>
    <span className={`text-sm font-medium ${isSensitive ? 'text-brand-red/60' : 'text-gray-900 dark:text-white'}`}>
      {isSensitive ? '•••••••' : value}
    </span>
  </div>
);

const ChecklistCard: React.FC<{
  title: string;
  icon: React.ElementType;
  items: Array<{ label: string; done: boolean }>;
}> = ({ title, icon: Icon, items }) => (
  <div className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-6">
    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
      <Icon className="h-5 w-5 text-brand-red" />
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={item.done}
            disabled
            className="mt-1 h-4 w-4 rounded border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 text-brand-red disabled:opacity-50"
          />
          <span className={`text-sm ${item.done ? 'text-gray-400 dark:text-white/50 line-through' : 'text-gray-700 dark:text-white/80'}`}>
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  </div>
);