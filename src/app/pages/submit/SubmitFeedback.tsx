import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { SubmitFormLayout } from '../../components/layouts/SubmitFormLayout';
import { SUBMIT_FEEDBACK_FAQS } from '../../data/pageFaqs';
import { HERO_IMAGES } from '../../data/heroImages';

export const SubmitFeedbackPage = () => {
  return (
    <SubmitFormLayout
      seo={{
        title: 'Terugvoer - rooi rose',
        description: "Gee terugvoer aan rooi rose. Ons waardeer jou kommentaar en voorstelle.",
        keywords: 'terugvoer, kommentaar, voorstel, klagte, rooi rose',
      }}
      breadcrumbs={[
        { label: 'Stuur in', href: '/stuur-in' },
        { label: 'Terugvoer' },
      ]}
      hero={{
        title: 'Terugvoer',
        subtitle: "Ons waardeer jou terugvoer. Of dit 'n kompliment, voorstel of klagte is — ons wil graag van jou hoor.",
        image: HERO_IMAGES.submit,
      }}
      submitLabel="Stuur terugvoer"
      infoBox={
        <p>Jou terugvoer word vertroulik hanteer. Ons sal probeer om binne 48 werkure te reageer.</p>
      }
      faqItems={SUBMIT_FEEDBACK_FAQS}
      faqDescription="Vrae oor terugvoer by rooi rose."
    >
      <div className="space-y-2">
        <Label htmlFor="type">Tipe Terugvoer *</Label>
        <select
          id="type"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none bg-white dark:bg-background dark:text-foreground text-sm"
        >
          <option value="">Kies 'n opsie</option>
          <option>Kompliment</option>
          <option>Voorstel</option>
          <option>Klagte</option>
          <option>Regstelling</option>
          <option>Ander</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Onderwerp *</Label>
        <Input id="subject" required placeholder="Kort opsomming van jou terugvoer" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feedback">Jou Terugvoer *</Label>
        <textarea
          id="feedback"
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none resize-y text-sm dark:bg-background dark:text-foreground"
          placeholder="Deel jou terugvoer hier..."
        />
      </div>
    </SubmitFormLayout>
  );
};