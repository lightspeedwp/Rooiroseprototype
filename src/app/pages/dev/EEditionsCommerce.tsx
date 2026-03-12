// @version 2026-02-26 — DTE-139
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import {
  ShoppingCart, Package, Shield, CreditCard, Settings, ListChecks,
  ChevronDown, ChevronUp, Copy, Check, ExternalLink, Users, Mail,
  Lock, Unlock, Star, AlertTriangle, ArrowRight, Eye,
} from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { useTabRoute, type TabSlugMap } from '../../hooks/useTabRoute';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import { CodeBlock } from '../../components/dev/CodeBlock';
import {
  SUBSCRIPTION_PLANS, SINGLE_ISSUE_PRODUCT, MEMBERSHIP_PLAN, ACCESS_RULES,
  PAYFAST_CONFIG, PLUGIN_DEPENDENCIES, EMAIL_NOTIFICATIONS, USER_STATES,
  SUBSCRIPTION_SETUP_STEPS, COMMERCE_BLOCKS, COMMERCE_SUMMARY,
  type SubscriptionPlan,
} from '../../data/eEditionsCommerceData';

// ─── Tab definitions ────────────────────────────────────────────────────────

interface Tab {
  id: string;
  labelAf: string;
  labelEn: string;
  icon: React.FC<{ size?: number; className?: string }>;
}

const EEC_TAB_SLUGS: TabSlugMap = {
  overview: 'oorsig',
  subscriptions: 'intekenings',
  individual: 'individueel',
  access: 'toegang',
  payfast: 'payfast',
  setup: 'opstelling',
};

const TABS: Tab[] = [
  { id: 'overview', labelAf: 'Oorsig', labelEn: 'Overview', icon: Eye },
  { id: 'subscriptions', labelAf: 'Intekeningpakkette', labelEn: 'Subscription Packages', icon: Package },
  { id: 'individual', labelAf: 'Individuele Produkte', labelEn: 'Individual Products', icon: ShoppingCart },
  { id: 'access', labelAf: 'Toegangsbeheer', labelEn: 'Access Control', icon: Shield },
  { id: 'payfast', labelAf: 'Payfast Integrasie', labelEn: 'Payment Integration', icon: CreditCard },
  { id: 'setup', labelAf: 'Opstelling Gids', labelEn: 'Setup Guide', icon: ListChecks },
];

// ─── Related tools ──────────────────────────────────────────────────────────



// ─── Helpers ────────────────────────────────────────────────────────────────

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied!');
  }).catch(() => {
    toast.error('Copy failed');
  });
}

function AccessColorDot({ color }: { color: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
    gray: 'bg-gray-400',
  };
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${colorMap[color] || 'bg-gray-400'}`} />;
}

// ─── Tab: Overview ──────────────────────────────────────────────────────────

function OverviewTab({ isAf }: { isAf: boolean }) {
  return (
    <div className="space-y-8">
      {/* Commerce Flow Diagram */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'E-Uitgawes Handelvloei' : 'E-Editions Commerce Flow'}
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center py-4">
          {[
            { labelAf: 'Besoeker', labelEn: 'Visitor', icon: Users, color: 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50' },
            { labelAf: 'Registreer / Aanmeld', labelEn: 'Register / Login', icon: Lock, color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' },
            { labelAf: 'Kies Plan of Koop', labelEn: 'Choose Plan or Buy', icon: ShoppingCart, color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' },
            { labelAf: 'Betaal via Payfast', labelEn: 'Pay via Payfast', icon: CreditCard, color: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' },
            { labelAf: 'Lees E-Uitgawe', labelEn: 'Read E-Edition', icon: Unlock, color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
          ].flatMap((step, i) => {
            const StepIcon = step.icon;
            const elements: React.ReactNode[] = [];
            if (i > 0) {
              elements.push(
                <ArrowRight key={`arrow-${step.labelEn}`} size={16} className="text-gray-300 dark:text-white/20 hidden sm:block shrink-0" />
              );
            }
            elements.push(
              <div key={step.labelEn} className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl ${step.color} min-w-[120px]`}>
                <StepIcon size={20} />
                <span className="text-[11px] text-center">{isAf ? step.labelAf : step.labelEn}</span>
              </div>
            );
            return elements;
          })}
        </div>
      </div>

      {/* Product Hierarchy */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Produkhierargie' : 'Product Hierarchy'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Subscription Plans */}
          <div className="rounded-lg border-2 border-emerald-200 dark:border-emerald-500/30 p-4 bg-emerald-50/50 dark:bg-emerald-500/5">
            <div className="flex items-center gap-2 mb-3">
              <Package size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 text-sm">
                {isAf ? 'Intekeningplanne' : 'Subscription Plans'}
              </span>
            </div>
            {SUBSCRIPTION_PLANS.map(p => (
              <div key={p.id} className="flex items-center justify-between py-1.5 text-xs border-b border-emerald-100 dark:border-emerald-500/10 last:border-0">
                <span className="text-gray-700 dark:text-white/70">{p.billingPeriodAf === 'per maand' ? '1 Maand' : p.billingPeriodAf === 'per kwartaal' ? '3 Maande' : '12 Maande'}</span>
                <span className="text-emerald-700 dark:text-emerald-300">{p.priceFormatted}</span>
              </div>
            ))}
          </div>

          {/* Individual Issues */}
          <div className="rounded-lg border-2 border-blue-200 dark:border-blue-500/30 p-4 bg-blue-50/50 dark:bg-blue-500/5">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 text-sm">
                {isAf ? 'Individuele Uitgawes' : 'Individual Issues'}
              </span>
            </div>
            <div className="text-xs text-gray-700 dark:text-white/70 space-y-1">
              <div className="flex justify-between"><span>{isAf ? 'Prys per uitgawe' : 'Price per issue'}</span><span className="text-blue-700 dark:text-blue-300">R35</span></div>
              <div className="flex justify-between"><span>{isAf ? 'Toegang' : 'Access'}</span><span className="text-blue-700 dark:text-blue-300">{isAf ? 'Permanent' : 'Permanent'}</span></div>
              <div className="flex justify-between"><span>SKU</span><span className="text-blue-700 dark:text-blue-300 font-mono">DP-EE-*</span></div>
            </div>
          </div>

          {/* Commerce Blocks */}
          <div className="rounded-lg border-2 border-purple-200 dark:border-purple-500/30 p-4 bg-purple-50/50 dark:bg-purple-500/5">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 text-sm">
                {isAf ? 'Handelblokke' : 'Commerce Blocks'}
              </span>
            </div>
            {COMMERCE_BLOCKS.map(b => (
              <div key={b.name} className="flex items-center justify-between py-1.5 text-xs border-b border-purple-100 dark:border-purple-500/10 last:border-0">
                <span className="text-gray-700 dark:text-white/70 font-mono text-[10px]">{b.name}</span>
                <span className="text-purple-700 dark:text-purple-300">{b.states} {isAf ? 'toestande' : 'states'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plugin Dependencies */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Inpropvereistes' : 'Plugin Dependencies'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PLUGIN_DEPENDENCIES.map(plugin => (
            <div key={plugin.name} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <Package size={16} className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-900 dark:text-white">{plugin.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white/50">{plugin.version}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${plugin.license === 'Free' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300'}`}>
                    {plugin.license}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">{isAf ? plugin.purposeAf : plugin.purposeEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User States Summary */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Gebruikertoestande (6)' : 'User States (6)'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {USER_STATES.map(state => (
            <div key={state.id} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-1.5">
                <AccessColorDot color={state.color} />
                <span className="text-sm text-gray-900 dark:text-white">{isAf ? state.labelAf : state.labelEn}</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-white/40 leading-relaxed">{isAf ? state.descriptionAf : state.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-references */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5 p-5">
        <h4 className="text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
          <ExternalLink size={14} />
          {isAf ? 'Verwante Dokumente' : 'Related Documents'}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            { doc: '/guidelines/content/pricing.md', label: isAf ? 'Kanonieke pryse' : 'Canonical pricing' },
            { doc: '/guidelines/content/e-editions-user-journeys.md', label: isAf ? 'Gebruikersreis-spesifikasies' : 'User journey specs' },
            { doc: '/guidelines/wordpress-migration/third-party-plugins/woocommerce.md', label: isAf ? 'WooCommerce Integrasie' : 'WooCommerce Integration' },
            { doc: '/wordpress-export/config/woocommerce-e-editions-setup.md', label: isAf ? 'WooCommerce opsettingsgids' : 'WooCommerce setup guide' },
            { doc: '/prompts/e-editions-orchestrator.md', label: isAf ? 'E-uitgawes Orkesleier' : 'E-Editions Orchestrator' },
          ].map(ref => (
            <div key={ref.doc} className="flex items-start gap-1.5">
              <ArrowRight size={10} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <code className="text-[10px] text-amber-700 dark:text-amber-300 font-mono">{ref.doc}</code>
                <span className="text-gray-600 dark:text-white/40 ml-1.5">{ref.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Subscriptions ─────────────────────────────────────────────────────

function SubscriptionsTab({ isAf }: { isAf: boolean }) {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SUBSCRIPTION_PLANS.map(plan => (
          <PricingCard key={plan.id} plan={plan} isAf={isAf} expanded={expandedPlan === plan.id} onToggle={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)} />
        ))}
      </div>

      {/* Common Settings */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Gedeelde Instellings (Alle Planne)' : 'Shared Settings (All Plans)'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { labelAf: 'Produk-tipe', labelEn: 'Product Type', value: 'Simple Subscription' },
            { labelAf: 'Virtueel', labelEn: 'Virtual', value: 'Yes' },
            { labelAf: 'Aflaaibaar', labelEn: 'Downloadable', value: 'No' },
            { labelAf: 'Aanmeldingsfooi', labelEn: 'Sign-up Fee', value: 'R0' },
            { labelAf: 'Intekeninglengte', labelEn: 'Subscription Length', value: 'Never expire' },
            { labelAf: 'Belastingstatus', labelEn: 'Tax Status', value: 'Taxable (standard)' },
            { labelAf: 'Lidmaatskapplan', labelEn: 'Membership Plan', value: 'E-Uitgawe Intekenaar' },
            { labelAf: 'Streekgebonde', labelEn: 'Region-locked', value: 'Yes (pa_streek attribute)' },
          ].map(setting => (
            <div key={setting.value} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{isAf ? setting.labelAf : setting.labelEn}</div>
              <div className="text-sm text-gray-900 dark:text-white">{setting.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dependency Check PHP */}
      <div>
        <h3 className="text-gray-900 dark:text-white mb-3">
          {isAf ? 'Afhanklikheidskontrole (PHP)' : 'Dependency Check (PHP)'}
        </h3>
        <CodeBlock
          code={`function dp_check_commerce_dependencies() {
    $missing = [];
    if ( ! class_exists( 'WooCommerce' ) ) $missing[] = 'WooCommerce';
    if ( ! class_exists( 'WC_Subscriptions' ) ) $missing[] = 'WooCommerce Subscriptions';
    if ( ! function_exists( 'wc_memberships' ) ) $missing[] = 'WooCommerce Memberships';

    if ( ! empty( $missing ) ) {
        add_action( 'admin_notices', function() use ( $missing ) {
            echo '<div class="notice notice-error"><p>';
            echo '<strong>rooi rose Blocks:</strong> Missing: ' . implode( ', ', $missing );
            echo '. Commerce features are disabled.</p></div>';
        });
        return false;
    }
    return true;
}`}
          language="php"
          label="die-papier-blocks.php"
          showLineNumbers
        />
      </div>
    </div>
  );
}

function PricingCard({ plan, isAf, expanded, onToggle }: { plan: SubscriptionPlan; isAf: boolean; expanded: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-xl border-2 p-5 transition-all ${plan.highlighted ? 'border-brand-red bg-red-50/30 dark:bg-red-500/5' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]'}`}>
      {plan.badge && (
        <div className="text-[10px] uppercase tracking-wider text-brand-red mb-2 flex items-center gap-1">
          <Star size={10} className="fill-brand-red" />
          {plan.badge}
        </div>
      )}
      <div className="mb-3">
        <span className="text-3xl text-gray-900 dark:text-white">{plan.priceFormatted}</span>
        <span className="text-sm text-gray-500 dark:text-white/40 ml-1">{isAf ? plan.billingPeriodAf : plan.billingPeriodEn}</span>
      </div>
      {plan.savings && (
        <div className="text-xs text-emerald-600 dark:text-emerald-400 mb-3">
          {isAf ? plan.savingsAf : plan.savingsEn}
        </div>
      )}
      <div className="text-sm text-gray-900 dark:text-white mb-2">{isAf ? plan.nameAf : plan.nameEn}</div>
      <div className="text-xs text-gray-500 dark:text-white/40 font-mono mb-3">SKU: {plan.sku}</div>

      <ul className="space-y-1.5 mb-4">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-white/60">
            <Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />
            <span>{isAf ? f.af : f.en}</span>
          </li>
        ))}
      </ul>

      {plan.perIssuePrice && (
        <div className="text-[10px] text-gray-400 dark:text-white/30 mb-3">
          {isAf ? 'Per uitgawe' : 'Per issue'}: {plan.perIssuePrice}
        </div>
      )}

      <button
        onClick={onToggle}
        className="w-full flex items-center justify-center gap-1.5 text-xs py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
      >
        {isAf ? 'WooCommerce Besonderhede' : 'WooCommerce Details'}
        {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10 space-y-2 text-xs">
          {[
            { label: 'Product Type', value: plan.wcProductType },
            { label: 'Virtual', value: plan.virtual ? 'Yes' : 'No' },
            { label: 'Sign-up Fee', value: `R${plan.signUpFee}` },
            { label: 'Tax', value: plan.taxStatus },
            { label: 'Membership', value: plan.membershipPlan },
          ].map(d => (
            <div key={d.label} className="flex justify-between">
              <span className="text-gray-400 dark:text-white/30">{d.label}</span>
              <span className="text-gray-700 dark:text-white/70">{d.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Tab: Individual Products ───────────────────────────────────────────────

function IndividualTab({ isAf }: { isAf: boolean }) {
  return (
    <div className="space-y-8">
      {/* Product Config Card */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <ShoppingCart size={18} className="text-blue-500" />
          {isAf ? 'Enkele Uitgawe Produk' : 'Single Issue Product'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {[
            { labelAf: 'Prys', labelEn: 'Price', value: SINGLE_ISSUE_PRODUCT.priceFormatted },
            { labelAf: 'SKU Patroon', labelEn: 'SKU Pattern', value: SINGLE_ISSUE_PRODUCT.skuPattern, mono: true },
            { labelAf: 'SKU Voorbeeld', labelEn: 'SKU Example', value: SINGLE_ISSUE_PRODUCT.skuExample, mono: true },
            { labelAf: 'Produk-tipe', labelEn: 'Product Type', value: SINGLE_ISSUE_PRODUCT.wcProductType },
            { labelAf: 'Katalogus Sigbaarheid', labelEn: 'Catalog Visibility', value: SINGLE_ISSUE_PRODUCT.catalogVisibility },
            { labelAf: 'Toegangsduur', labelEn: 'Access Duration', value: SINGLE_ISSUE_PRODUCT.accessDuration },
          ].map(field => (
            <div key={field.value} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{isAf ? field.labelAf : field.labelEn}</div>
              <div className={`text-sm text-gray-900 dark:text-white ${field.mono ? 'font-mono' : ''}`}>{field.value}</div>
            </div>
          ))}
        </div>

        {/* Meta Fields */}
        <h4 className="text-gray-900 dark:text-white mb-3">{isAf ? 'Meta Velde' : 'Meta Fields'}</h4>
        <div className="space-y-2">
          {SINGLE_ISSUE_PRODUCT.metaFields.map(field => (
            <div key={field.key} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <code className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded shrink-0">{field.key}</code>
              <span className="text-xs text-gray-600 dark:text-white/50">{isAf ? field.descriptionAf : field.descriptionEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editor Workflow */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Redakteur Werkvloei (Handmatig)' : 'Editor Workflow (Manual)'}
        </h3>
        <div className="space-y-3">
          {[
            { stepAf: 'Skep WooCommerce produk', stepEn: 'Create WooCommerce product', detailAf: 'WooCommerce \u2192 Products \u2192 Add New. Stel naam, SKU, prys (R35), virtueel, versteek in katalogus.', detailEn: 'WooCommerce \u2192 Products \u2192 Add New. Set name, SKU, price (R35), virtual, hidden catalog visibility.' },
            { stepAf: 'Laai PDF op na Issuu', stepEn: 'Upload PDF to Issuu', detailAf: 'Laai die uitgawe-PDF op na Issuu.com. Inbed-sigbaarheid: versteek (nie publiek blaaibaar nie). PDF-aflaai: geaktiveer.', detailEn: 'Upload edition PDF to Issuu.com. Embed visibility: hidden (not publicly browsable). PDF download: enabled.' },
            { stepAf: 'Inbed Issuu in produkinhoud', stepEn: 'Embed Issuu in product content', detailAf: 'Kopieer Issuu inbed-kode, plak in produkinhoud (hoof-redakteur). WC Memberships beheer sigbaarheid.', detailEn: 'Copy Issuu embed code, paste in product content (main editor). WC Memberships controls visibility.' },
            { stepAf: 'Stel lidmaatskapdata op', stepEn: 'Configure membership data', detailAf: 'In Memberships metakassie: koppel produk aan dp_eedition pos via _dp_eedition_post_id.', detailEn: 'In Memberships meta box: link product to dp_eedition post via _dp_eedition_post_id.' },
            { stepAf: 'Publiseer', stepEn: 'Publish', detailAf: 'Publiseer die produk. Die e-uitgawe bladsy sal die Issuu inbed wys aan gemagtigde gebruikers.', detailEn: 'Publish the product. The e-edition page will show Issuu embed to authorised users.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs shrink-0">{i + 1}</div>
              <div className="min-w-0">
                <div className="text-sm text-gray-900 dark:text-white">{isAf ? step.stepAf : step.stepEn}</div>
                <div className="text-xs text-gray-500 dark:text-white/40 mt-0.5">{isAf ? step.detailAf : step.detailEn}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20">
          <div className="flex items-start gap-2 text-xs text-amber-700 dark:text-amber-300">
            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
            <span>{isAf ? 'Outomatiese produkskepping word nie vir lansering geimplementeer nie. Redakteurs skep produkte handmatig.' : 'Auto-creation is not implemented for launch. Editors create products manually.'}</span>
          </div>
        </div>
      </div>

      {/* Name Pattern */}
      <div>
        <h3 className="text-gray-900 dark:text-white mb-3">{isAf ? 'Naampatroon Voorbeeld' : 'Name Pattern Example'}</h3>
        <CodeBlock
          code={`// Product naming
Name:  "E-Uitgawe: 21 Feb 2026"
SKU:   "DP-EE-2026-02-21"
Price: R35
Type:  Simple Product (Virtual)

// Linked dp_eedition post
Product meta: _dp_eedition_post_id → {post_id}
Post meta:    _linked_product_id  → {product_id}`}
          language="javascript"
          label="product-naming.txt"
          showLineNumbers
        />
      </div>
    </div>
  );
}

// ─── Tab: Access Control ────────────────────────────────────────────────────

function AccessTab({ isAf }: { isAf: boolean }) {
  return (
    <div className="space-y-8">
      {/* Access Priority Rules */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Toegangskontrole Prioriteit' : 'Access Check Priority'}
        </h3>
        <div className="space-y-3">
          {ACCESS_RULES.map(rule => {
            const colorMap: Record<string, string> = {
              emerald: 'border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-500/5',
              blue: 'border-blue-200 dark:border-blue-500/30 bg-blue-50/50 dark:bg-blue-500/5',
              amber: 'border-amber-200 dark:border-amber-500/30 bg-amber-50/50 dark:bg-amber-500/5',
              red: 'border-red-200 dark:border-red-500/30 bg-red-50/50 dark:bg-red-500/5',
            };
            return (
              <div key={rule.priority} className={`flex items-center gap-4 p-4 rounded-lg border-2 ${colorMap[rule.color]}`}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-white/10 text-sm text-gray-900 dark:text-white shrink-0">{rule.priority}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-900 dark:text-white">{isAf ? rule.conditionAf : rule.conditionEn}</div>
                  <div className="text-xs text-gray-500 dark:text-white/40 mt-0.5">\u2192 {isAf ? rule.resultAf : rule.resultEn}</div>
                </div>
                <AccessColorDot color={rule.color} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Membership Plan Config */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Shield size={18} className="text-indigo-500" />
          {isAf ? 'Lidmaatskapplan Konfigurasie' : 'Membership Plan Configuration'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { label: isAf ? 'Plannaam' : 'Plan Name', value: MEMBERSHIP_PLAN.name },
            { label: 'Slug', value: MEMBERSHIP_PLAN.slug, mono: true },
            { label: isAf ? 'Lengte' : 'Length', value: MEMBERSHIP_PLAN.length },
            { label: isAf ? 'Rolle' : 'Roles', value: MEMBERSHIP_PLAN.roles },
            { label: isAf ? 'Proeftydperk' : 'Free Trial', value: `${MEMBERSHIP_PLAN.freeTrialDays} days (max ${MEMBERSHIP_PLAN.freeTrialMaxEditions} editions)` },
          ].map(f => (
            <div key={f.label} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{f.label}</div>
              <div className={`text-sm text-gray-900 dark:text-white ${f.mono ? 'font-mono' : ''}`}>{f.value}</div>
            </div>
          ))}
        </div>

        <h4 className="text-sm text-gray-900 dark:text-white mb-2">{isAf ? 'Gee Toegang Met' : 'Grant Access On'}</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {MEMBERSHIP_PLAN.grantAccessOn.map(sku => (
            <button key={sku} onClick={() => copyToClipboard(sku)} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-mono hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors">
              {sku} <Copy size={10} />
            </button>
          ))}
        </div>

        <h4 className="text-sm text-gray-900 dark:text-white mb-2">{isAf ? 'Inhoudbeperking' : 'Content Restriction'}</h4>
        {MEMBERSHIP_PLAN.contentRestriction.map(cr => (
          <div key={cr.postType} className="p-3 rounded-lg bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20">
            <code className="text-[11px] font-mono text-red-700 dark:text-red-300">{cr.postType}</code>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">{isAf ? cr.descriptionAf : cr.descriptionEn}</p>
          </div>
        ))}
      </div>

      {/* User States Detail */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Argief Bladsy Gedrag per Toestand' : 'Archive Page Behaviour per State'}
        </h3>
        <div className="space-y-3">
          {USER_STATES.map(state => (
            <div key={state.id} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-1.5">
                <AccessColorDot color={state.color} />
                <span className="text-sm text-gray-900 dark:text-white">{isAf ? state.labelAf : state.labelEn}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-white/40">{isAf ? state.archiveBehaviourAf : state.archiveBehaviourEn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Access Check PHP Code */}
      <div>
        <h3 className="text-gray-900 dark:text-white mb-3">
          {isAf ? 'Toegangskontrole Logika (PHP)' : 'Access Check Logic (PHP)'}
        </h3>
        <CodeBlock
          code={`function dp_get_eedition_access_status( $eedition_id = null ) {
    if ( ! $eedition_id ) $eedition_id = get_the_ID();
    $user_id = get_current_user_id();

    if ( ! $user_id ) return 'restricted';             // Not logged in
    if ( current_user_can( 'edit_posts' ) ) return 'admin'; // Admin bypass

    // Check 1: Active subscription membership
    if ( function_exists( 'wc_memberships_is_user_active_member' ) ) {
        if ( wc_memberships_is_user_active_member( $user_id, 'e-uitgawe-intekenaar' ) ) {
            return 'subscription';
        }
    }

    // Check 2: Individual purchase
    $purchased = get_user_meta( $user_id, '_dp_purchased_eeditions', true );
    if ( is_array( $purchased ) && in_array( $eedition_id, $purchased ) ) {
        return 'purchased';
    }

    return 'restricted';
}`}
          language="php"
          label="inc/commerce-integration.php"
          showLineNumbers
        />
      </div>

      {/* Commerce Blocks */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Handelblokke' : 'Commerce Blocks'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMMERCE_BLOCKS.map(block => (
            <div key={block.name} className="p-4 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <code className="text-[11px] font-mono text-purple-600 dark:text-purple-400">{block.name}</code>
              <div className="text-sm text-gray-900 dark:text-white mt-1">{isAf ? block.titleAf : block.titleEn}</div>
              <p className="text-xs text-gray-500 dark:text-white/40 mt-1">{isAf ? block.descriptionAf : block.descriptionEn}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {block.stateLabels.map(s => (
                  <span key={s} className="text-[9px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-300">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Payfast ───────────────────────────────────────────────────────────

function PayfastTab({ isAf }: { isAf: boolean }) {
  return (
    <div className="space-y-8">
      {/* Gateway Config */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <CreditCard size={18} className="text-indigo-500" />
          {isAf ? 'Payfast Gateway Konfigurasie' : 'Payfast Gateway Configuration'}
        </h3>
        <div className="space-y-2">
          {PAYFAST_CONFIG.map(field => (
            <div key={field.fieldEn} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2 sm:w-48 shrink-0">
                <span className="text-sm text-gray-900 dark:text-white">{isAf ? field.fieldAf : field.fieldEn}</span>
                {field.required && <span className="text-[9px] px-1 py-0.5 rounded bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300">{isAf ? 'Vereis' : 'Required'}</span>}
              </div>
              <code className="text-xs font-mono text-gray-500 dark:text-white/50 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded sm:w-48 shrink-0">{field.valueExample}</code>
              <span className="text-xs text-gray-500 dark:text-white/40 flex-1">{isAf ? field.descriptionAf : field.descriptionEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Flow */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Intekeningbetaling Vloei' : 'Subscription Payment Flow'}
        </h3>
        <div className="space-y-3">
          {[
            { stepAf: 'Gebruiker kies plan op /inteken/e-uitgawe', stepEn: 'User selects plan on /inteken/e-uitgawe', icon: '1' },
            { stepAf: 'Voeg intekeningproduk by mandjie', stepEn: 'Add subscription product to cart', icon: '2' },
            { stepAf: 'Betaalpunt wys herhalende faktuuropsomming', stepEn: 'Checkout shows recurring billing summary', icon: '3' },
            { stepAf: 'Payfast tokeniseer kaart (vir proeftydperk-na-betaald omsetting)', stepEn: 'Payfast tokenises card (for trial-to-paid conversion)', icon: '4' },
            { stepAf: 'Bestelling voltooi \u2192 lidmaatskap geaktiveer', stepEn: 'Order complete \u2192 membership activated', icon: '5' },
            { stepAf: 'ITN-terugvoer bevestig betaling, hernuwings, kansellasies', stepEn: 'ITN callback confirms payments, renewals, cancellations', icon: '6' },
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs shrink-0">{step.icon}</div>
              <div className="text-sm text-gray-700 dark:text-white/70 pt-1">{isAf ? step.stepAf : step.stepEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Webhook Events */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          {isAf ? 'Webhook / Outomatisering Gebeure' : 'Webhook / Automation Events'}
        </h3>
        <div className="space-y-2">
          {[
            { hook: 'woocommerce_subscription_status_active', actionAf: 'Verseker lidmaatskap is aktief', actionEn: 'Ensure membership is active' },
            { hook: 'woocommerce_subscription_status_on-hold', actionAf: 'Pauzeer lidmaatskap (genade-periode)', actionEn: 'Pause membership (grace period)' },
            { hook: 'woocommerce_subscription_status_cancelled', actionAf: 'Herroep lidmaatskaptoegang', actionEn: 'Revoke membership access' },
            { hook: 'woocommerce_subscription_status_expired', actionAf: 'Herroep lidmaatskaptoegang', actionEn: 'Revoke membership access' },
            { hook: 'woocommerce_subscription_status_pending-cancel', actionAf: 'Wys "verstryk binnekort" kennisgewing', actionEn: 'Show "expiring soon" notice' },
          ].map(evt => (
            <div key={evt.hook} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <button onClick={() => copyToClipboard(evt.hook)} className="flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 shrink-0">
                {evt.hook} <Copy size={10} />
              </button>
              <span className="text-xs text-gray-500 dark:text-white/40">{isAf ? evt.actionAf : evt.actionEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Email Notifications */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
        <h3 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Mail size={18} className="text-rose-500" />
          {isAf ? 'E-pos Kennisgewings' : 'Email Notifications'}
        </h3>
        <div className="space-y-2">
          {EMAIL_NOTIFICATIONS.map(email => (
            <div key={email.id} className="p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-xs text-gray-400 dark:text-white/30 sm:w-40 shrink-0">{isAf ? email.triggerAf : email.triggerEn}</span>
                <span className="text-sm text-gray-900 dark:text-white flex-1">{isAf ? email.subjectAf : email.subjectEn}</span>
                <code className="text-[10px] font-mono text-gray-400 dark:text-white/25">{email.templatePath.split('/').pop()}</code>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-500 dark:text-white/40">
          {isAf ? 'Sjabloon-oorskrywings in:' : 'Template overrides in:'} <code className="text-[10px] font-mono text-gray-600 dark:text-white/50">themes/die-papier-theme/woocommerce/emails/</code>
        </div>
      </div>

      {/* Afrikaans Checkout Strings */}
      <div>
        <h3 className="text-gray-900 dark:text-white mb-3">
          {isAf ? 'Afrikaanse Betaalpunt Strings' : 'Afrikaans Checkout Strings'}
        </h3>
        <CodeBlock
          code={`function dp_subscription_checkout_strings( $translated, $text, $domain ) {
    if ( $domain !== 'woocommerce-subscriptions' ) return $translated;

    $replacements = [
        'Sign up now'         => 'Teken nou in',
        'Your subscription'   => 'Jou intekening',
        'Recurring total'     => 'Herhalende totaal',
        'First renewal'       => 'Eerste hernuwing',
        'Subscription Length'  => 'Intekeningperiode',
        'Sign Up Fee'         => 'Registrasiefooi',
        'Free Trial'          => 'Gratis proeftydperk',
    ];

    return $replacements[ $text ] ?? $translated;
}
add_filter( 'gettext', 'dp_subscription_checkout_strings', 20, 3 );`}
          language="php"
          label="functions.php — Checkout translations"
          showLineNumbers
        />
      </div>
    </div>
  );
}

// ─── Tab: Setup Guide ──────────────────────────────────────────────────────

function SetupTab({ isAf }: { isAf: boolean }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {SUBSCRIPTION_SETUP_STEPS.map(step => (
          <div key={step.stepNumber} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5">
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 text-brand-red shrink-0 text-lg">{step.stepNumber}</div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 dark:text-white mb-1">{isAf ? step.titleAf : step.titleEn}</h4>
                <p className="text-sm text-gray-600 dark:text-white/50">{isAf ? step.descriptionAf : step.descriptionEn}</p>
                {step.fields && step.fields.length > 0 && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.fields.map(f => (
                      <div key={f.label} className="flex items-center justify-between p-2 rounded bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 text-xs">
                        <span className="text-gray-500 dark:text-white/40">{f.label}</span>
                        <span className="text-gray-900 dark:text-white font-mono">{f.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testing Checklist */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5 p-6">
        <h3 className="text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
          <AlertTriangle size={16} />
          {isAf ? 'Toetskontrolelys' : 'Testing Checklist'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { af: 'Intekening-aankoop (alle 3 planne)', en: 'Subscription purchase (all 3 plans)' },
            { af: '14-dae gratis proeftydperk aktivering', en: '14-day free trial activation' },
            { af: 'Proeftydperk maks 2 uitgawes limiet', en: 'Trial max 2 editions limit' },
            { af: 'Enkelkoop R35 vloei', en: 'Single purchase R35 flow' },
            { af: 'Toegangsbeheer (beperk/ontsluit)', en: 'Access control (restrict/unlock)' },
            { af: 'Intekeningshernuwing (outomaties)', en: 'Subscription renewal (automatic)' },
            { af: 'Kansellasie en toegangsherroeping', en: 'Cancellation and access revocation' },
            { af: 'Payfast sandput-toetse', en: 'Payfast sandbox tests' },
            { af: 'E-pos kennisgewings (alle 6)', en: 'Email notifications (all 6)' },
            { af: 'Gasgebruiker-beperking (geen koop sonder aanmelding)', en: 'Guest restriction (no purchase without login)' },
          ].map(item => (
            <div key={item.en} className="flex items-start gap-2 text-xs text-amber-700 dark:text-amber-300">
              <span className="text-amber-400 mt-0.5">[ ]</span>
              <span>{isAf ? item.af : item.en}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export const EEditionsCommerce = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);

  const { activeTab, setActiveTab } = useTabRoute('/ontwikkelaar/e-editions-handel', EEC_TAB_SLUGS, 'overview');

  const heroStats: HeroStat[] = useMemo(() => [
    { label: isAf ? 'Intekeningplanne' : 'Subscription Plans', value: COMMERCE_SUMMARY.subscriptionPlans },
    { label: isAf ? 'Gebruikertoestande' : 'User States', value: COMMERCE_SUMMARY.userStates },
    { label: isAf ? 'Handelblokke' : 'Commerce Blocks', value: COMMERCE_SUMMARY.commerceBlocks },
    { label: isAf ? 'E-pos Kennisgewings' : 'Email Notifications', value: COMMERCE_SUMMARY.emailNotifications },
  ], [isAf]);

  return (
    <div className="space-y-8">
      <DevToolHero
        icon={HERO_META.eEditionsCommerce.icon}
        iconColor={HERO_META.eEditionsCommerce.iconColor}
        title={resolveHeroMeta(HERO_META.eEditionsCommerce, locale).title}
        description={resolveHeroMeta(HERO_META.eEditionsCommerce, locale).description}
        stats={heroStats}
      />

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-gray-100 dark:bg-white/[0.04]">
        {TABS.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-all ${
                isActive
                  ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60 hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{isAf ? tab.labelAf : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab isAf={isAf} />}
      {activeTab === 'subscriptions' && <SubscriptionsTab isAf={isAf} />}
      {activeTab === 'individual' && <IndividualTab isAf={isAf} />}
      {activeTab === 'access' && <AccessTab isAf={isAf} />}
      {activeTab === 'payfast' && <PayfastTab isAf={isAf} />}
      {activeTab === 'setup' && <SetupTab isAf={isAf} />}

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.eEditionsCommerce} />
    </div>
  );
};

export default EEditionsCommerce;