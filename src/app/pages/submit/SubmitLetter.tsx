import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { SubmitFormLayout } from '../../components/layouts/SubmitFormLayout';
import { SUBMIT_LETTER_FAQS } from '../../data/pageFaqs';
import { HERO_IMAGES } from '../../data/heroImages';

export const SubmitLetterPage = () => {
  return (
    <SubmitFormLayout
      seo={{
        title: 'Lesersbrief - rooi rose',
        description: "Skryf 'n lesersbrief aan rooi rose se redakteur. Jou stem maak saak.",
        keywords: 'lesersbrief, brief aan redakteur, stuur in, die papier',
      }}
      breadcrumbs={[
        { label: 'Stuur in', href: '/stuur-in' },
        { label: 'Lesersbrief' },
      ]}
      hero={{
        title: 'Lesersbrief',
        subtitle: "Laat jou stem hoor! Skryf 'n brief aan die redakteur oor 'n saak wat vir jou belangrik is. Lesersbriewe word in rooi rose se 'Dink' afdeling gepubliseer.",
        image: HERO_IMAGES.submit,
      }}
      submitLabel="Stuur lesersbrief"
      infoBox={
        <div>
          <p className="font-bold mb-1">Riglyne vir Lesersbriewe:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Briewe moet jou volle naam, telefoonnommer en woonplek insluit.</li>
            <li>Anonieme briewe word nie oorweeg nie.</li>
            <li>Die redakteur behou die reg voor om briewe te verkort of te redigeer.</li>
            <li>Lasterlike of haatspraak-inhoud sal nie gepubliseer word nie.</li>
          </ul>
        </div>
      }
      faqItems={SUBMIT_LETTER_FAQS}
      faqDescription="Vrae oor lesersbriefs by rooi rose."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefoonnommer *</Label>
          <Input id="phone" required type="tel" placeholder="012 345 6789" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">Stad / Dorp *</Label>
          <Input id="city" required placeholder="bv. Bloemfontein" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Onderwerp van die brief *</Label>
        <Input id="subject" required placeholder="Waaroor gaan jou brief?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="letter">Jou Brief *</Label>
        <textarea
          id="letter"
          required
          rows={10}
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none resize-y text-sm dark:bg-background dark:text-foreground"
          placeholder="Skryf jou brief hier... Hou dit asseblief onder 500 woorde."
        />
        <p className="text-xs text-gray-400">Maksimum 500 woorde. Briewe kan geredigeer word vir lengte en duidelikheid.</p>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 text-custom-primary rounded border-gray-300 dark:border-border focus:ring-custom-primary"
        />
        <label htmlFor="consent" className="text-sm text-gray-700 dark:text-gray-300">
          Ek bevestig dat hierdie my eie menings is en ek gee toestemming vir publikasie in <em>rooi rose</em>. Ek verstaan dat <em>rooi rose</em> die reg het om die brief te redigeer. *
        </label>
      </div>
    </SubmitFormLayout>
  );
};