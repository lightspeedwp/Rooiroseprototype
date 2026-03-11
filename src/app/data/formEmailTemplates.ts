/**
 * formEmailTemplates.ts — Afrikaans email notification/confirmation templates
 * for every user-facing submission form on Die Papier.
 *
 * Each template maps to a FormPattern from formPatternsData.ts.
 * These are Gravity Forms notification emails (not WooCommerce).
 *
 * Created: 2026-02-27
 * Last updated: 2026-02-27 — Added 4 more reply templates (feedback, shoutout, newsletter, profile) = 13 total replies
 */

export interface FormEmailTemplate {
  id: string;
  formId: string;            // matches FormPattern.id
  titleAf: string;
  titleEn: string;
  subjectAf: string;
  subjectEn: string;
  descAf: string;
  descEn: string;
  wpHandler: string;         // GF notification ID or WP hook
  category: 'contact' | 'submission' | 'account' | 'newsletter' | 'competition';
  icon: string;              // emoji for sidebar
}

export const FORM_EMAIL_TEMPLATES: FormEmailTemplate[] = [
  {
    id: 'contact-confirmation',
    formId: 'contact',
    titleAf: 'Kontak — Ontvangserkenning',
    titleEn: 'Contact — Receipt Acknowledgement',
    subjectAf: 'Dankie vir jou boodskap — Die Papier',
    subjectEn: 'Thanks for your message — Die Papier',
    descAf: 'Outomatiese ontvangserkenning nadat die kontakvorm gestuur is.',
    descEn: 'Automatic receipt acknowledgement after contact form submission.',
    wpHandler: 'GF-1 → User Notification',
    category: 'contact',
    icon: '📧',
  },
  {
    id: 'advertise-confirmation',
    formId: 'advertise-enquiry',
    titleAf: 'Advertensie-navraag — Ontvangserkenning',
    titleEn: 'Advertising Enquiry — Receipt Acknowledgement',
    subjectAf: 'Ons het jou navraag ontvang — Die Papier Adverteer',
    subjectEn: 'We received your enquiry — Die Papier Advertise',
    descAf: 'Bevestiging van adverteerder-navraag met volgende stappe.',
    descEn: 'Confirmation of advertiser enquiry with next steps.',
    wpHandler: 'GF-2 → User Notification',
    category: 'contact',
    icon: '📢',
  },
  {
    id: 'story-confirmation',
    formId: 'submit-story',
    titleAf: 'Storie-indiening — Bevestiging',
    titleEn: 'Story Submission — Confirmation',
    subjectAf: 'Jou storie is ontvang — Die Papier',
    subjectEn: 'Your story has been received — Die Papier',
    descAf: 'Bevestig dat storie en foto-aanhangsels ontvang is, met redaksionele tydsraamwerk.',
    descEn: 'Confirms story and photo attachments received, with editorial timeline.',
    wpHandler: 'GF-3 → User Notification',
    category: 'submission',
    icon: '📰',
  },
  {
    id: 'letter-confirmation',
    formId: 'submit-letter',
    titleAf: 'Lesersbrief — Bevestiging',
    titleEn: 'Letter to Editor — Confirmation',
    subjectAf: 'Dankie vir jou lesersbrief — Die Papier',
    subjectEn: 'Thanks for your letter — Die Papier',
    descAf: 'Bevestiging dat lesersbrief ontvang is met redaksionele riglyne.',
    descEn: 'Confirmation that reader letter received with editorial guidelines.',
    wpHandler: 'GF-4 → User Notification',
    category: 'submission',
    icon: '✉️',
  },
  {
    id: 'feedback-confirmation',
    formId: 'submit-feedback',
    titleAf: 'Terugvoer — Bevestiging',
    titleEn: 'Feedback — Confirmation',
    subjectAf: 'Jou terugvoer is ontvang — Die Papier',
    subjectEn: 'Your feedback has been received — Die Papier',
    descAf: 'Bevestig terugvoerontvangst met uiteensetting van response-tyd.',
    descEn: 'Confirms feedback received with response time expectations.',
    wpHandler: 'GF-5 → User Notification',
    category: 'submission',
    icon: '💬',
  },
  {
    id: 'shoutout-confirmation',
    formId: 'submit-shoutout',
    titleAf: 'Shoutout — Bevestiging',
    titleEn: 'Shoutout — Confirmation',
    subjectAf: 'Jou shoutout is ontvang — Die Papier',
    subjectEn: 'Your shoutout has been received — Die Papier',
    descAf: 'Bevestig shoutout-indiening met publisering-tydsraamwerk.',
    descEn: 'Confirms shoutout submission with publication timeline.',
    wpHandler: 'GF-6 → User Notification',
    category: 'submission',
    icon: '📣',
  },
  {
    id: 'event-confirmation',
    formId: 'submit-event',
    titleAf: 'Gebeurtenis-indiening — Bevestiging',
    titleEn: 'Event Submission — Confirmation',
    subjectAf: 'Jou gebeurtenis is ontvang — Die Papier',
    subjectEn: 'Your event has been received — Die Papier',
    descAf: 'Bevestig gebeurtenis-besonderhede, moderasie-tyd, en publiseringsbeleid.',
    descEn: 'Confirms event details, moderation time, and publishing policy.',
    wpHandler: 'GF-7 → User Notification',
    category: 'submission',
    icon: '📅',
  },
  {
    id: 'register-welcome',
    formId: 'register',
    titleAf: 'Registrasie — Welkom',
    titleEn: 'Registration — Welcome',
    subjectAf: 'Welkom by Die Papier — Jou rekening is geskep',
    subjectEn: 'Welcome to Die Papier — Your account is created',
    descAf: 'Welkom-e-pos na suksesvolle registrasie met rekening-besonderhede.',
    descEn: 'Welcome email after successful registration with account details.',
    wpHandler: 'wp_new_user_notification (custom)',
    category: 'account',
    icon: '👤',
  },
  {
    id: 'newsletter-confirmation',
    formId: 'newsletter-subscribe',
    titleAf: 'Nuusbrief — Intekeningbevestiging',
    titleEn: 'Newsletter — Subscription Confirmation',
    subjectAf: 'Welkom by die Die Papier-nuusbrief!',
    subjectEn: 'Welcome to the Die Papier newsletter!',
    descAf: 'Nuusbriefintekeningbevestiging met voorkeure en aftekeningskakel.',
    descEn: 'Newsletter subscription confirmation with preferences and unsubscribe link.',
    wpHandler: 'MailPoet → Confirmation Email',
    category: 'newsletter',
    icon: '📬',
  },
  {
    id: 'competition-confirmation',
    formId: 'competition-entry',
    titleAf: 'Kompetisie-inskrywing — Bevestiging',
    titleEn: 'Competition Entry — Confirmation',
    subjectAf: 'Jou inskrywing is ontvang — Die Papier Kompetisie',
    subjectEn: 'Your entry has been received — Die Papier Competition',
    descAf: 'Bevestig kompetisie-inskrywing met reëls, sluitingsdatum, en wenner-aankondigingskedule.',
    descEn: 'Confirms competition entry with rules, closing date, and winner announcement schedule.',
    wpHandler: 'GF-8 → User Notification',
    category: 'competition',
    icon: '🏆',
  },
];

export const FORM_EMAIL_SUMMARY = {
  total: FORM_EMAIL_TEMPLATES.length,
  contact: FORM_EMAIL_TEMPLATES.filter(t => t.category === 'contact').length,
  submission: FORM_EMAIL_TEMPLATES.filter(t => t.category === 'submission').length,
  account: FORM_EMAIL_TEMPLATES.filter(t => t.category === 'account').length,
  newsletter: FORM_EMAIL_TEMPLATES.filter(t => t.category === 'newsletter').length,
  competition: FORM_EMAIL_TEMPLATES.filter(t => t.category === 'competition').length,
};

// ─── Reply / Follow-up Email Templates ──────────────────────────────────────
// These are staff-initiated emails sent AFTER a submission has been reviewed.
// Triggered manually or via WP admin status change.

export interface FormReplyTemplate {
  id: string;
  formId: string;            // matches FormPattern.id
  titleAf: string;
  titleEn: string;
  subjectAf: string;
  subjectEn: string;
  descAf: string;
  descEn: string;
  wpHandler: string;
  category: 'contact' | 'submission' | 'account' | 'newsletter' | 'competition';
  icon: string;
  replyType: 'positive' | 'negative' | 'info' | 'action-required';
}

export const FORM_REPLY_TEMPLATES: FormReplyTemplate[] = [
  // ─ Contact replies ─
  {
    id: 'contact-reply',
    formId: 'contact',
    titleAf: 'Kontak — Persoonlike Antwoord',
    titleEn: 'Contact — Personal Reply',
    subjectAf: 'Re: Jou navraag by Die Papier — Verwysing #{ref}',
    subjectEn: 'Re: Your enquiry at Die Papier — Reference #{ref}',
    descAf: 'Persoonlike antwoord van Die Papier-span op \'n kontakvorm-navraag.',
    descEn: 'Personal reply from Die Papier team to a contact form enquiry.',
    wpHandler: 'GF-1 → Admin Reply (manual)',
    category: 'contact',
    icon: '💌',
    replyType: 'info',
  },
  {
    id: 'advertise-reply',
    formId: 'advertise-enquiry',
    titleAf: 'Advertensie — Tariewe & Voorstel',
    titleEn: 'Advertising — Rates & Proposal',
    subjectAf: 'Die Papier Advertensie-tariewe — Persoonlike voorstel vir {maatskappy}',
    subjectEn: 'Die Papier Advertising Rates — Custom proposal for {company}',
    descAf: 'Bemarkingspan se opvolgantwoord met tariewe, mediapak en voorstel.',
    descEn: 'Marketing team follow-up with rates, media pack and proposal.',
    wpHandler: 'GF-2 → Admin Reply (manual)',
    category: 'contact',
    icon: '💼',
    replyType: 'info',
  },
  // ─ Submission replies ─
  {
    id: 'story-accepted',
    formId: 'submit-story',
    titleAf: 'Storie — Aanvaar vir Publikasie',
    titleEn: 'Story — Accepted for Publication',
    subjectAf: 'Goeie nuus! Jou storie is aanvaar — Die Papier',
    subjectEn: 'Good news! Your story has been accepted — Die Papier',
    descAf: 'Kennisgewing dat storie-indiening aanvaar is vir publikasie, met beoogde publiseringsdatum.',
    descEn: 'Notification that story submission accepted for publication, with planned publish date.',
    wpHandler: 'GF-3 → Status Update (custom)',
    category: 'submission',
    icon: '✅',
    replyType: 'positive',
  },
  {
    id: 'story-declined',
    formId: 'submit-story',
    titleAf: 'Storie — Nie Aanvaar Nie',
    titleEn: 'Story — Not Accepted',
    subjectAf: 'Opdatering oor jou storie-indiening — Die Papier',
    subjectEn: 'Update on your story submission — Die Papier',
    descAf: 'Hoflike kennisgewing dat storie nie aanvaar is nie, met aanmoediging om weer in te dien.',
    descEn: 'Courteous notification that story not accepted, with encouragement to resubmit.',
    wpHandler: 'GF-3 → Status Update (custom)',
    category: 'submission',
    icon: '📝',
    replyType: 'negative',
  },
  {
    id: 'letter-published',
    formId: 'submit-letter',
    titleAf: 'Lesersbrief — Gepubliseer',
    titleEn: 'Letter — Published',
    subjectAf: 'Jou lesersbrief is gepubliseer! — Die Papier',
    subjectEn: 'Your letter has been published! — Die Papier',
    descAf: 'Kennisgewing dat lesersbrief in die volgende uitgawe gepubliseer sal word.',
    descEn: 'Notification that reader letter will be published in the next edition.',
    wpHandler: 'GF-4 → Status Update (custom)',
    category: 'submission',
    icon: '📰',
    replyType: 'positive',
  },
  {
    id: 'event-approved',
    formId: 'submit-event',
    titleAf: 'Gebeurtenis — Goedgekeur & Gepubliseer',
    titleEn: 'Event — Approved & Published',
    subjectAf: 'Jou gebeurtenis is goedgekeur — Die Papier Kalender',
    subjectEn: 'Your event has been approved — Die Papier Calendar',
    descAf: 'Bevestiging dat gebeurtenis goedgekeur en op die kalender geplaas is, met skakel.',
    descEn: 'Confirmation that event approved and placed on calendar, with link.',
    wpHandler: 'GF-7 → Status Update (custom)',
    category: 'submission',
    icon: '📅',
    replyType: 'positive',
  },
  {
    id: 'event-declined',
    formId: 'submit-event',
    titleAf: 'Gebeurtenis — Nie Goedgekeur Nie',
    titleEn: 'Event — Not Approved',
    subjectAf: 'Opdatering oor jou gebeurtenis-indiening — Die Papier',
    subjectEn: 'Update on your event submission — Die Papier',
    descAf: 'Hoflike kennisgewing dat gebeurtenis nie geplaas kon word nie, met rede en alternatiewe.',
    descEn: 'Courteous notification that event could not be listed, with reason and alternatives.',
    wpHandler: 'GF-7 → Status Update (custom)',
    category: 'submission',
    icon: '❌',
    replyType: 'negative',
  },
  // ─ Competition reply ─
  {
    id: 'competition-winner',
    formId: 'competition-entry',
    titleAf: 'Kompetisie — Wenner-kennisgewing',
    titleEn: 'Competition — Winner Notification',
    subjectAf: 'Geluk! Jy het gewen — Die Papier Kompetisie',
    subjectEn: 'Congratulations! You won — Die Papier Competition',
    descAf: 'Wenner-kennisgewing met prysbeskrywing, afhaalprosedure en terme.',
    descEn: 'Winner notification with prize description, collection procedure and terms.',
    wpHandler: 'GF-8 → Winner Email (manual)',
    category: 'competition',
    icon: '🎉',
    replyType: 'positive',
  },
  // ─ Account reply ─
  {
    id: 'password-reset',
    formId: 'login',
    titleAf: 'Wagwoord — Herstel-skakel',
    titleEn: 'Password — Reset Link',
    subjectAf: 'Herstel jou wagwoord — Die Papier',
    subjectEn: 'Reset your password — Die Papier',
    descAf: 'Wagwoordherstelskakel na versoek via "Wagwoord vergeet?" funksie.',
    descEn: 'Password reset link after request via "Forgot password?" feature.',
    wpHandler: 'retrieve_password_message (WP core)',
    category: 'account',
    icon: '🔑',
    replyType: 'action-required',
  },
  // ─ Feedback reply ─
  {
    id: 'feedback-acknowledged',
    formId: 'submit-feedback',
    titleAf: 'Terugvoer — Erken & Opgetree',
    titleEn: 'Feedback — Acknowledged & Actioned',
    subjectAf: 'Opdatering oor jou terugvoer — Die Papier',
    subjectEn: 'Update on your feedback — Die Papier',
    descAf: 'Personeelantwoord wat bevestig dat terugvoer intern gedeel is en watter stappe geneem is.',
    descEn: 'Staff reply confirming feedback was shared internally and what steps were taken.',
    wpHandler: 'GF-5 → Admin Reply (manual)',
    category: 'submission',
    icon: '💬',
    replyType: 'positive',
  },
  // ─ Shoutout reply ─
  {
    id: 'shoutout-published',
    formId: 'submit-shoutout',
    titleAf: 'Shoutout — Gepubliseer',
    titleEn: 'Shoutout — Published',
    subjectAf: 'Jou shoutout is gepubliseer! — Die Papier',
    subjectEn: 'Your shoutout has been published! — Die Papier',
    descAf: 'Kennisgewing dat shoutout in die uitgawe geplaas is, met skakel na aanlyn-weergawe.',
    descEn: 'Notification that shoutout was placed in the edition, with link to online version.',
    wpHandler: 'GF-6 → Status Update (custom)',
    category: 'submission',
    icon: '📣',
    replyType: 'positive',
  },
  // ─ Newsletter reply ─
  {
    id: 'newsletter-unsubscribe',
    formId: 'newsletter-subscribe',
    titleAf: 'Nuusbrief — Aftekening Bevestig',
    titleEn: 'Newsletter — Unsubscribe Confirmed',
    subjectAf: 'Jy is suksesvol afgeteken — Die Papier Nuusbrief',
    subjectEn: 'You have been successfully unsubscribed — Die Papier Newsletter',
    descAf: 'Bevestiging dat nuusbriefintekening gekanselleer is, met herinteken-opsie.',
    descEn: 'Confirmation that newsletter subscription cancelled, with re-subscribe option.',
    wpHandler: 'MailPoet → Unsubscribe Confirmation',
    category: 'newsletter',
    icon: '📭',
    replyType: 'info',
  },
  // ─ Profile update reply ─
  {
    id: 'profile-updated',
    formId: 'profile-update',
    titleAf: 'Profiel — Veranderinge Gestoor',
    titleEn: 'Profile — Changes Saved',
    subjectAf: 'Jou profielveranderinge is gestoor — Die Papier',
    subjectEn: 'Your profile changes have been saved — Die Papier',
    descAf: 'Bevestiging dat profielbesonderhede suksesvol opgedateer is.',
    descEn: 'Confirmation that profile details were successfully updated.',
    wpHandler: 'profile_update (WP hook)',
    category: 'account',
    icon: '👤',
    replyType: 'info',
  },
];

export const FORM_REPLY_SUMMARY = {
  total: FORM_REPLY_TEMPLATES.length,
  positive: FORM_REPLY_TEMPLATES.filter(t => t.replyType === 'positive').length,
  negative: FORM_REPLY_TEMPLATES.filter(t => t.replyType === 'negative').length,
  info: FORM_REPLY_TEMPLATES.filter(t => t.replyType === 'info').length,
  actionRequired: FORM_REPLY_TEMPLATES.filter(t => t.replyType === 'action-required').length,
};