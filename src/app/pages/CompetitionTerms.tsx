import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { FileText, AlertCircle } from 'lucide-react';

const H1_STYLE = { fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' } as React.CSSProperties;
const H2_STYLE = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' } as React.CSSProperties;

export const CompetitionTermsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Kompetisie terme en voorwaardes - rooi rose"
        description="Lees rooi rose se kompetisie terme en voorwaardes."
        keywords="kompetisie, terme, voorwaardes, reëls, die papier"
      />

      <PageContainer
        breadcrumbs={[
          { label: 'Kompetisies', href: '/kompetisies' },
          { label: 'Terme en voorwaardes' },
        ]}
      >
        <div className="max-w-[900px] pt-4 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-custom-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={H1_STYLE}>
              Kompetisie terme en voorwaardes
            </h1>
          </div>

          <p className="text-gray-500 mb-8">Laas opgedateer: 1 Februarie 2026</p>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/40 rounded-lg p-5 mb-8 flex gap-3">
            <AlertCircle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-amber-800 dark:text-amber-300 text-sm">
              Hierdie terme en voorwaardes is van toepassing op alle kompetisies wat deur <em>rooi rose</em> aangebied word, tensy anders vermeld in 'n spesifieke kompetisie se reëls.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>1. Algemene Reëls</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Alle kompetisies word aangebied deur Novus Media (Edms) Bpk, h/a <em>rooi rose</em> (hierna "die Organiseerder").</li>
                <li>Deur aan 'n kompetisie deel te neem, aanvaar die deelnemer hierdie terme en voorwaardes.</li>
                <li>Kompetisies is oop vir alle Suid-Afrikaanse inwoners, tensy anders vermeld.</li>
                <li>Deelnemers moet ten minste 18 jaar oud wees, tensy anders vermeld.</li>
                <li>Werknemers, direkteure en agente van die Organiseerder en enige borge, asook hul onmiddellike familielede, mag nie deelneem nie.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>2. Inskrywings</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Slegs een inskrywing per persoon per kompetisie word toegelaat, tensy anders vermeld.</li>
                <li>Inskrywings moet voor die sluitingsdatum en -tyd ontvang word om oorweeg te word.</li>
                <li>Onvolledige of onleesbare inskrywings sal gediskwalifiseer word.</li>
                <li>Die Organiseerder aanvaar geen verantwoordelikheid vir inskrywings wat verlore gaan, beskadig word of laat ontvang word nie.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>3. Pryse</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Pryse is nie oordraagbaar nie en kan nie vir kontant ingeruil word nie, tensy anders vermeld.</li>
                <li>Die Organiseerder behou die reg voor om enige prys met een van gelyke of groter waarde te vervang.</li>
                <li>Onopgeëiste pryse sal verval na 30 dae nadat die wenner in kennis gestel is.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>4. Wenners</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Wenners sal ewekansig gekies word uit alle geldige inskrywings, tensy anders vermeld.</li>
                <li>Die beslissing van die beoordelaars is finaal en geen korrespondensie sal gevoer word nie.</li>
                <li>Wenners sal per e-pos en/of telefoon in kennis gestel word.</li>
                <li>Die Organiseerder behou die reg voor om die wenner se naam en foto vir publisiteitsdoeleindes te gebruik.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>5. Privaatheid</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Persoonlike inligting wat tydens inskrywing versamel word, sal in ooreenstemming met die Organiseerder se Privaatheidsbeleid hanteer word.</li>
                <li>Deelnemers se inligting mag met die borg gedeel word vir die doel van pryslewering.</li>
                <li>Deelnemers kan kies om op <em>rooi rose</em> se nuusbrief in te teken tydens inskrywing.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>6. Beperking van Aanspreeklikheid</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Die Organiseerder, sy agente en borge is nie aanspreeklik vir enige verlies, skade of besering wat voortspruit uit deelname aan die kompetisie of die gebruik van enige prys nie.</li>
                <li>Die Organiseerder behou die reg voor om die kompetisie te wysig, op te skort of te kanselleer indien omstandighede buite sy beheer dit vereis.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={H2_STYLE}>7. Regsbevoegdheid</h2>
              <p className="text-sm">
                Hierdie terme en voorwaardes word beheer deur die wette van die Republiek van Suid-Afrika. Enige geskille sal in die toepaslike Suid-Afrikaanse hof besleg word.
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};