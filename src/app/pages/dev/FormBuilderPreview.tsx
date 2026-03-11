/**
 * FormBuilderPreview — Form Pattern Gallery dev tool page.
 *
 * Route: /ontwikkelaar/vorms
 * Catalogues every form in the codebase with fields, WP handler mapping,
 * validation rules, and file locations.
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import {
  Search, FileCode, ExternalLink, ChevronDown, ChevronUp,
  CheckCircle2, Upload, FormInput, Type, Mail, Phone, Calendar,
  Lock, Hash, Image, List, ToggleLeft, Eye, EyeOff, Send,
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import {
  FORM_PATTERNS,
  FORM_CATEGORIES,
  FORM_SUMMARY,
  type FormPattern,
  type FormCategory,
  type FieldType,
} from '../../data/formPatternsData';
import { FORM_EMAIL_TEMPLATES, FORM_REPLY_TEMPLATES } from '../../data/formEmailTemplates';

// ─── Field type icon mapping ────────────────────────────────────────────────

function FieldTypeIcon({ type }: { type: FieldType }) {
  const size = 12;
  const cls = 'text-gray-400 dark:text-white/30';
  switch (type) {
    case 'text': return <Type size={size} className={cls} />;
    case 'email': return <Mail size={size} className={cls} />;
    case 'password': return <Lock size={size} className={cls} />;
    case 'tel': return <Phone size={size} className={cls} />;
    case 'textarea': return <FormInput size={size} className={cls} />;
    case 'select': return <List size={size} className={cls} />;
    case 'checkbox': return <ToggleLeft size={size} className={cls} />;
    case 'radio': return <ToggleLeft size={size} className={cls} />;
    case 'file': return <Upload size={size} className={cls} />;
    case 'date': return <Calendar size={size} className={cls} />;
    case 'number': return <Hash size={size} className={cls} />;
    case 'search': return <Search size={size} className={cls} />;
    default: return <Type size={size} className={cls} />;
  }
}

// ─── WP Handler badge ───────────────────────────────────────────────────────

function WpHandlerBadge({ handler }: { handler: string }) {
  const colors: Record<string, string> = {
    'gravity-forms': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
    'woocommerce': 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300',
    'wp-login': 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/60',
    'wp-register': 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/60',
    'mailpoet': 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300',
    'wp-search': 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300',
    'custom-rest': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
  };
  const labels: Record<string, string> = {
    'gravity-forms': 'Gravity Forms',
    'woocommerce': 'WooCommerce',
    'wp-login': 'WP Login',
    'wp-register': 'WP Register',
    'mailpoet': 'MailPoet',
    'wp-search': 'WP Search',
    'custom-rest': 'REST API',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] ${colors[handler] || 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50'}`}>
      {labels[handler] || handler}
    </span>
  );
}

// ─── Form card ──────────────────────────────────────────────────────────────

function FormCard({ form, isAf, isExpanded, onToggle, t }: {
  form: FormPattern;
  isAf: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  t: (key: string) => string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-left min-h-[44px]"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-lg">
            {FORM_CATEGORIES.find(c => c.id === form.category)?.icon || '📋'}
          </span>
          <div className="min-w-0">
            <div className="text-sm text-gray-900 dark:text-white truncate">
              {isAf ? form.nameAf : form.nameEn}
            </div>
            <div className="text-xs text-gray-400 dark:text-white/30 flex items-center gap-2 mt-0.5">
              <span>{form.fields.length} {t('fb.fieldsLower')}</span>
              {form.hasFileUpload && (
                <span className="flex items-center gap-0.5">
                  <Upload size={10} />
                  {t('fb.file')}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <WpHandlerBadge handler={form.wpHandler} />
          {isExpanded ? <ChevronUp size={14} className="text-gray-400 dark:text-white/30" /> : <ChevronDown size={14} className="text-gray-400 dark:text-white/30" />}
        </div>
      </button>

      {/* Expanded detail */}
      {isExpanded && (
        <div className="border-t border-gray-100 dark:border-white/[0.04] px-5 py-4 space-y-4">
          {/* Description */}
          <p className="text-xs text-gray-500 dark:text-white/40">
            {isAf ? form.descAf : form.descEn}
          </p>

          {/* Fields table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/[0.06]">
                  <th className="text-left py-1.5 pr-3 text-gray-400 dark:text-white/30">{t('fb.field')}</th>
                  <th className="text-left py-1.5 pr-3 text-gray-400 dark:text-white/30">{t('fb.type')}</th>
                  <th className="text-left py-1.5 pr-3 text-gray-400 dark:text-white/30">{t('fb.required')}</th>
                  <th className="text-left py-1.5 text-gray-400 dark:text-white/30">{t('fb.validation')}</th>
                </tr>
              </thead>
              <tbody>
                {form.fields.map((field) => (
                  <tr key={field.name} className="border-b border-gray-50 dark:border-white/[0.02]">
                    <td className="py-1.5 pr-3 text-gray-700 dark:text-white/70 flex items-center gap-1.5">
                      <FieldTypeIcon type={field.type} />
                      {isAf ? field.labelAf : field.labelEn}
                    </td>
                    <td className="py-1.5 pr-3">
                      <code className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">
                        {field.type}
                      </code>
                    </td>
                    <td className="py-1.5 pr-3">
                      {field.required ? (
                        <CheckCircle2 size={12} className="text-green-500" />
                      ) : (
                        <span className="text-gray-300 dark:text-white/15">—</span>
                      )}
                    </td>
                    <td className="py-1.5 text-gray-400 dark:text-white/30">
                      {field.validation || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 text-[10px] text-gray-400 dark:text-white/30 pt-1">
            <Link
              to={`/${form.routeAf}`}
              className="flex items-center gap-1 hover:text-brand-red transition-colors"
            >
              <ExternalLink size={10} />
              {form.routeAf}
            </Link>
            <span className="flex items-center gap-1">
              <FileCode size={10} />
              {form.componentFile.split('/').pop()}
            </span>
            {form.wpFormId && (
              <span className="flex items-center gap-1 text-blue-500 dark:text-blue-400">
                {form.wpFormId}
              </span>
            )}
            {form.usesReactHookForm && (
              <span className="px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300">
                react-hook-form
              </span>
            )}
            {form.category !== 'search' && (
              <Link
                to="/ontwikkelaar/e-pos-voorskou"
                className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-colors"
              >
                <Send size={9} />
                {t('fb.emailTemplates')}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function FormBuilderPreview() {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<FormCategory | 'all'>('all');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const filteredForms = useMemo(() => {
    let forms = FORM_PATTERNS;

    if (categoryFilter !== 'all') {
      forms = forms.filter(f => f.category === categoryFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      forms = forms.filter(f =>
        f.nameAf.toLowerCase().includes(q) ||
        f.nameEn.toLowerCase().includes(q) ||
        f.wpHandler.toLowerCase().includes(q) ||
        f.componentFile.toLowerCase().includes(q) ||
        f.fields.some(field =>
          field.labelAf.toLowerCase().includes(q) ||
          field.labelEn.toLowerCase().includes(q) ||
          field.type.includes(q)
        )
      );
    }

    return forms;
  }, [search, categoryFilter]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedIds(new Set(filteredForms.map(f => f.id)));
  const collapseAll = () => setExpandedIds(new Set());

  // Hero stats
  const heroStats: HeroStat[] = [
    { label: t('fb.forms'), value: String(FORM_SUMMARY.totalForms) },
    { label: t('fb.fields'), value: String(FORM_SUMMARY.totalFields) },
    { label: 'Gravity Forms', value: String(FORM_SUMMARY.gravityForms) },
    { label: t('fb.emailTemplates'), value: String(FORM_EMAIL_TEMPLATES.length + FORM_REPLY_TEMPLATES.length) },
  ];

  const heroMeta = HERO_META.formBuilderPreview;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div className="contents">
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={hero.title}
        description={hero.description}
        stats={heroStats}
      />

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('fb.searchPlaceholder')}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <Eye size={12} className="inline mr-1" />
            {t('fb.expandAll')}
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <EyeOff size={12} className="inline mr-1" />
            {t('fb.collapseAll')}
          </button>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
            categoryFilter === 'all'
              ? 'bg-brand-red text-white'
              : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
          }`}
        >
          {t('fb.all')} ({FORM_PATTERNS.length})
        </button>
        {FORM_SUMMARY.byCategory.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoryFilter(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              categoryFilter === cat.id
                ? 'bg-brand-red text-white'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            {cat.icon} {isAf ? cat.labelAf : cat.labelEn} ({cat.count})
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-xs text-gray-400 dark:text-white/30 mb-4">
        {filteredForms.length} / {FORM_PATTERNS.length} {t('fb.formsLower')}
      </div>

      {/* Form cards */}
      <div className="space-y-3">
        {filteredForms.map(form => (
          <FormCard
            key={form.id}
            form={form}
            isAf={isAf}
            isExpanded={expandedIds.has(form.id)}
            onToggle={() => toggleExpand(form.id)}
            t={t}
          />
        ))}
      </div>

      {filteredForms.length === 0 && (
        <div className="text-center py-16 text-gray-400 dark:text-white/30 text-sm">
          {t('fb.noForms')}
        </div>
      )}

      {/* WP Handler summary */}
      <div className="mt-10 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5">
        <h3 className="text-sm text-gray-900 dark:text-white mb-3">
          {t('fb.wpHandlerSummary')}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { handler: 'gravity-forms', label: 'Gravity Forms' },
            { handler: 'mailpoet', label: 'MailPoet' },
            { handler: 'woocommerce', label: 'WooCommerce' },
            { handler: 'wp-login', label: 'WP Native' },
          ].map(({ handler, label }) => {
            const count = FORM_PATTERNS.filter(f => f.wpHandler === handler || (handler === 'wp-login' && ['wp-login', 'wp-register', 'wp-search', 'custom-rest'].includes(f.wpHandler))).length;
            return (
              <div key={handler} className="text-center p-3 rounded-lg bg-gray-50 dark:bg-white/[0.03]">
                <div className="text-lg text-gray-900 dark:text-white">{count}</div>
                <div className="text-[10px] text-gray-400 dark:text-white/30 mt-0.5">{label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Related tools */}
      <DevRelatedTools
        tools={RELATED_TOOLS_MAP.formBuilderPreview || [
          { titleAf: 'Komponent Blaaier', titleEn: 'Component Browser', path: '/ontwikkelaar/komponente', icon: '🧩' },
          { titleAf: 'Roetekaart', titleEn: 'Route Map', path: '/ontwikkelaar/roetes', icon: '🗺️' },
          { titleAf: 'WordPress Migrasie', titleEn: 'WordPress Migration', path: '/ontwikkelaar/wordpress', icon: '🔄' },
        ]}
      />
    </div>
  );
}

export { FormBuilderPreview as default };