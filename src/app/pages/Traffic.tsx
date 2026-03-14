import React, { useState, useMemo } from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { TRAFFIC_FAQS } from '../data/pageFaqs';
import { INCIDENTS } from '../data/traffic';
import type { Severity, IncidentType, TrafficIncident } from '../data/traffic';
import {
  AlertTriangle,
  Construction,
  Car,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Info,
  ExternalLink,
  CircleAlert,
  CheckCircle2,
  Timer,
} from 'lucide-react';

const severityConfig: Record<Severity, { color: string; bg: string; label: string }> = {
  hoog: { color: 'text-red-700 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50', label: 'Hoog' },
  medium: { color: 'text-amber-700 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50', label: 'Medium' },
  laag: { color: 'text-green-700 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50', label: 'Laag' },
};

const typeConfig: Record<IncidentType, { icon: React.ReactNode; label: string; color: string }> = {
  ongeluk: { icon: <CircleAlert size={16} />, label: 'Ongeluk', color: 'text-red-600' },
  padwerk: { icon: <Construction size={16} />, label: 'Padwerk', color: 'text-amber-600' },
  vertraging: { icon: <Timer size={16} />, label: 'Vertraging', color: 'text-orange-600' },
  sluiting: { icon: <AlertTriangle size={16} />, label: 'Sluiting', color: 'text-red-700' },
};

const IncidentCard = ({ incident }: { incident: TrafficIncident }) => {
  const [expanded, setExpanded] = useState(false);
  const severity = severityConfig[incident.severity];
  const type = typeConfig[incident.type];

  return (
    <div className={`border rounded-lg overflow-hidden ${severity.bg} transition-colors`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-start gap-4"
      >
        <div className={`mt-0.5 shrink-0 ${type.color}`}>{type.icon}</div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${type.color}`}>
              {type.label}
            </span>
            <span className="text-xs text-gray-400">|</span>
            <span className={`text-xs font-bold ${severity.color}`}>{severity.label}</span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={10} /> {incident.time}
            </span>
          </div>
          <h3 className="font-normal text-brand-navy dark:text-foreground text-sm md:text-base font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{incident.title}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={10} className="shrink-0" /> {incident.road} &mdash; {incident.location}
          </p>
        </div>
        <div className="shrink-0 text-gray-400 mt-1">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-4 pt-0 ml-9">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{incident.description}</p>
          {incident.estimatedClear && (
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-green-600" />
              Geskatte opruimtyd: <strong>{incident.estimatedClear}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export const TrafficPage = () => {
  const [filter, setFilter] = useState<IncidentType | 'alles'>('alles');

  const filtered = useMemo(() =>
    filter === 'alles'
      ? INCIDENTS
      : INCIDENTS.filter((i) => i.type === filter),
    [filter]
  );

  const highCount = useMemo(() =>
    INCIDENTS.filter((i) => i.severity === 'hoog').length,
    []
  );

  const tabCounts = useMemo(() => ({
    alles: INCIDENTS.length,
    ongeluk: INCIDENTS.filter((i) => i.type === 'ongeluk').length,
    padwerk: INCIDENTS.filter((i) => i.type === 'padwerk').length,
    vertraging: INCIDENTS.filter((i) => i.type === 'vertraging').length,
    sluiting: INCIDENTS.filter((i) => i.type === 'sluiting').length,
  }), []);

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO
        title="Verkeer | rooi rose"
        description="Lewendige verkeersinligting, padongelukke, padwerk en vertragings regoor Suid-Afrika."
        keywords="verkeer, padtoestande, ongelukke, padwerk, suid-afrika"
      />

      <PageContainer breadcrumbs={[{ label: 'Verkeer' }]}>
        <div className="mb-10">
          <h1 className="text-5xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Verkeer
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Die jongste verkeersinligting en padtoestande — opgedateer Vrydag 13 Februarie 2026.
          </p>
        </div>

        {/* Summary Banner */}
        {highCount > 0 && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-lg px-5 py-4 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-600 shrink-0" size={20} />
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>{highCount} hoë-erns voorval{highCount > 1 ? 'le' : ''}</strong> tans
              aktief. Beplan alternatiewe roetes indien moontlik.
            </p>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {([
            { key: 'alles' as const, label: 'Alles' },
            { key: 'ongeluk' as const, label: 'Ongelukke' },
            { key: 'padwerk' as const, label: 'Padwerk' },
            { key: 'vertraging' as const, label: 'Vertragings' },
            { key: 'sluiting' as const, label: 'Sluitings' },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white dark:bg-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-border hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
              }`}
            >
              {tab.label}
              {tabCounts[tab.key] > 0 && (
                <span
                  className={`ml-1.5 text-xs ${
                    filter === tab.key ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  ({tabCounts[tab.key]})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Incident List */}
        <div className="space-y-3 mb-12">
          {filtered.length > 0 ? (
            filtered.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))
          ) : (
            <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-dashed border-gray-300 dark:border-input">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-normal text-gray-900 dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Geen voorvalle nie
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Daar is tans geen aktiewe voorvalle in hierdie kategorie nie.
              </p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-8">
          Verkeersinligting is slegs vir demonstrasiedoeleindes. Vir akkurate, lewendige
          verkeersinligting, gebruik{' '}
          <a
            href="https://www.waze.com/"
            target="_blank"
            rel="noreferrer"
            className="text-text-link-red hover:underline"
          >
            Waze
          </a>
          .
        </p>
      </PageContainer>

      {/* FAQ Section */}
      <PageFAQSection
        items={TRAFFIC_FAQS}
        description="Vrae oor ons verkeersverslaggewing en hoe om voorvalle te rapporteer."
      />
    </div>
  );
};