import React, { useState } from 'react';
import {
  Mail, CheckCircle2, AlertTriangle, XCircle,
  Clock, ShoppingBag, Bell, CreditCard, Crown
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { FORM_EMAIL_TEMPLATES, FORM_EMAIL_SUMMARY, FORM_REPLY_TEMPLATES, FORM_REPLY_SUMMARY } from '../../data/formEmailTemplates';

/* ───────────────────────────────────────────────────────────
 * Email Template Previews — rooi rose
 * Tab 1: WooCommerce commerce emails (7)
 * Tab 2: Form submission confirmations (10)
 * Tab 3: Staff reply / follow-up emails (13)
 * ─────────────────────────────────────────────────────────── */

const BRAND = {
  navy: '#142135',
  red: '#D70025',
  white: '#FFFFFF',
  gray: '#6B7280',
  lightGray: '#F3F4F6',
  border: '#E5E7EB',
};

interface EmailTemplate {
  id: string;
  title: string;
  subject: string;
  icon: React.ReactNode;
  iconColor: string;
  wcHook: string;
  description: string;
}

const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: 'new-subscription',
    title: 'Nuwe Intekening Bevestiging',
    subject: 'Welkom by rooi rose — Jou digitale intekening is aktief!',
    icon: <CheckCircle2 size={20} />,
    iconColor: 'text-green-600',
    wcHook: 'woocommerce_subscription_status_active',
    description: 'Sent when a new subscription is activated (including after trial).',
  },
  {
    id: 'renewal-confirmation',
    title: 'Hernuwing Bevestiging',
    subject: 'Jou rooi rose-intekening is suksesvol hernieu',
    icon: <CreditCard size={20} />,
    iconColor: 'text-blue-600',
    wcHook: 'woocommerce_subscription_renewal_payment_complete',
    description: 'Sent after successful recurring payment via Payfast.',
  },
  {
    id: 'subscription-cancelled',
    title: 'Intekening Gekanselleer',
    subject: 'Jou rooi rose-intekening is gekanselleer',
    icon: <XCircle size={20} />,
    iconColor: 'text-red-600',
    wcHook: 'woocommerce_subscription_status_cancelled',
    description: 'Sent when user cancels. Access retained until end of paid period.',
  },
  {
    id: 'payment-failed',
    title: 'Betaling Onsuksesvol',
    subject: 'Aksie nodig: Jou rooi rose-betaling het gefaal',
    icon: <AlertTriangle size={20} />,
    iconColor: 'text-amber-600',
    wcHook: 'woocommerce_subscription_renewal_payment_failed',
    description: 'Sent on payment failure. 3-day grace period, 2 retry attempts.',
  },
  {
    id: 'subscription-expired',
    title: 'Intekening Verstryk',
    subject: 'Jou rooi rose-intekening het verstryk — hernieu om weer toegang te kry',
    icon: <Clock size={20} />,
    iconColor: 'text-gray-600',
    wcHook: 'woocommerce_subscription_status_expired',
    description: 'Sent when subscription expires after grace period.',
  },
  {
    id: 'single-purchase',
    title: 'Enkel Uitgawe Aankoop Bevestiging',
    subject: 'Jou rooi rose e-uitgawe is gereed om te lees!',
    icon: <ShoppingBag size={20} />,
    iconColor: 'text-indigo-600',
    wcHook: 'woocommerce_order_status_completed',
    description: 'Sent when a single e-edition purchase (R35) is completed.',
  },
  {
    id: 'new-edition',
    title: 'Nuwe E-Uitgawe Beskikbaar',
    subject: 'Nuwe uitgawe beskikbaar: rooi rose — 28 Februarie 2026',
    icon: <Bell size={20} />,
    iconColor: 'text-purple-600',
    wcHook: 'dp_new_eedition_published (custom hook)',
    description: 'Sent to active subscribers when a new edition is published.',
  },
];

/* ─── Email wrapper component ─── */
const EmailWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: BRAND.white }}>
    {/* Header */}
    <div style={{ backgroundColor: BRAND.navy, padding: '24px 32px', textAlign: 'center' }}>
      <h1 style={{ color: BRAND.white, margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: 1 }}>
        ROOI ROSE
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', margin: '4px 0 0', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>
        E-Tydskrif · Digitale Uitgawes
      </p>
    </div>
    {/* Body */}
    <div style={{ padding: '32px', color: '#1F2937', lineHeight: 1.6 }}>
      {children}
    </div>
    {/* Footer */}
    <div style={{ backgroundColor: BRAND.lightGray, padding: '24px 32px', borderTop: `1px solid ${BRAND.border}`, textAlign: 'center' }}>
      <p style={{ margin: '0 0 8px', fontSize: 12, color: BRAND.gray }}>
        © 2026 rooi rose. Alle regte voorbehou.
      </p>
      <p style={{ margin: 0, fontSize: 11, color: BRAND.gray }}>
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>My Rekening</a>
        {' · '}
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Bestuur Intekening</a>
        {' · '}
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Kontak Ons</a>
      </p>
      <p style={{ margin: '12px 0 0', fontSize: 10, color: '#9CA3AF' }}>
        Hierdie e-pos is gestuur deur WooCommerce namens rooi rose.
        <br />
        Jy ontvang hierdie e-pos omdat jy 'n rekening by ons het.
      </p>
    </div>
  </div>
);

const EmailButton: React.FC<{ text: string; color?: string }> = ({ text, color = BRAND.red }) => (
  <div style={{ textAlign: 'center', margin: '24px 0' }}>
    <a href="#" style={{
      display: 'inline-block', backgroundColor: color, color: BRAND.white,
      padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
      fontWeight: 700, fontSize: 14, letterSpacing: 0.5,
    }}>
      {text}
    </a>
  </div>
);

const InfoBox: React.FC<{ children: React.ReactNode; bgColor?: string; borderColor?: string }> = ({
  children, bgColor = '#F0FDF4', borderColor = '#BBF7D0'
}) => (
  <div style={{ backgroundColor: bgColor, border: `1px solid ${borderColor}`, borderRadius: 8, padding: '16px 20px', margin: '20px 0' }}>
    {children}
  </div>
);

/* ─── Individual email templates ─── */

const NewSubscriptionEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Welkom by rooi rose! 🎉</h2>
    <p>Goeie nuus — jou digitale intekening is nou aktief. Jy het nou toegang tot alle e-uitgawes vanaf vandag.</p>
    <InfoBox>
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Plan:</td><td style={{ fontWeight: 600 }}>Digitale Intekening — 3 Maande</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bedrag:</td><td style={{ fontWeight: 600 }}>R390.00 per kwartaal</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Volgende betaling:</td><td style={{ fontWeight: 600 }}>24 Mei 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Betaalmetode:</td><td style={{ fontWeight: 600 }}>Payfast (Kredietkaart eindigend op ****4521)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p>Jy kan nou al jou e-uitgawes lees in jou persoonlike biblioteek:</p>
    <EmailButton text="Gaan na My Biblioteek" />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Vrae? Kontak ons by <a href="mailto:admin@diepapier.co.za" style={{ color: BRAND.navy }}>admin@diepapier.co.za</a>
    </p>
  </EmailWrapper>
);

const RenewalConfirmationEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Intekening Suksesvol Hernieu ✓</h2>
    <p>Jou rooi rose-intekening is suksesvol hernieu. Jy sal voortgaan om toegang te hê tot alle nuwe e-uitgawes.</p>
    <InfoBox>
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bestelling #:</td><td style={{ fontWeight: 600 }}>DP-20260224-0042</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Plan:</td><td style={{ fontWeight: 600 }}>Digitale Intekening — 1 Maand</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bedrag betaal:</td><td style={{ fontWeight: 600 }}>R140.00</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Volgende hernuwing:</td><td style={{ fontWeight: 600 }}>24 Maart 2026</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Lees Nuutste Uitgawe" />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Wil jy jou plan verander? <a href="#" style={{ color: BRAND.navy }}>Bestuur jou intekening</a>.
    </p>
  </EmailWrapper>
);

const SubscriptionCancelledEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Intekening Gekanselleer</h2>
    <p>Ons het jou versoek om te kanselleer ontvang. Jou intekening is nou in 'n <strong>hangende kansellasie</strong>-status.</p>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: 0, fontSize: 14 }}>
        <strong>Belangrik:</strong> Jy behou toegang tot jou e-uitgawes tot die einde van jou betaalde tydperk op <strong>24 Maart 2026</strong>. Daarna sal jou toegang verstryk.
      </p>
    </InfoBox>
    <p>As jy van plan verander het, kan jy jou intekening enige tyd hernieu voor die verstrykinsdatum:</p>
    <EmailButton text="Hernieu My Intekening" color={BRAND.navy} />
    <p style={{ fontSize: 13, color: BRAND.gray }}>Ons sal jou mis! As daar enigiets is wat ons anders kon gedoen het, laat weet ons asseblief.</p>
  </EmailWrapper>
);

const PaymentFailedEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: '#B91C1C', margin: '0 0 16px', fontSize: 22 }}>⚠️ Betaling Onsuksesvol</h2>
    <p>Ons kon nie jou hernuwingsbetaling van <strong>R140.00</strong> verwerk nie. Jou kaart eindigend op ****4521 is afgewys.</p>
    <InfoBox bgColor="#FEF2F2" borderColor="#FECACA">
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>Wat gebeur volgende:</p>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13 }}>
        <li>Jy het 'n <strong>3-dae grasietydperk</strong> om jou betaalmetode op te dateer</li>
        <li>Ons sal <strong>2 herpogings</strong> maak om die betaling te verwerk</li>
        <li>As betaling na 3 dae steeds faal, sal jou intekening opgeskort word</li>
      </ul>
    </InfoBox>
    <p>Dateer asseblief jou betaalmetode op om jou toegang te behou:</p>
    <EmailButton text="Dateer Betaalmetode Op" color="#B91C1C" />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      As jy glo dit is 'n fout, kontak asseblief jou bank of <a href="mailto:admin@diepapier.co.za" style={{ color: BRAND.navy }}>kontak ons</a>.
    </p>
  </EmailWrapper>
);

const SubscriptionExpiredEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Jou Intekening het Verstryk</h2>
    <p>Ongelukkig het jou rooi rose digitale intekening verstryk en jou toegang tot e-uitgawes is herroep.</p>
    <InfoBox bgColor="#F3F4F6" borderColor="#D1D5DB">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Vorige plan:</td><td style={{ fontWeight: 600 }}>Digitale Intekening — 3 Maande</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verstryk op:</td><td style={{ fontWeight: 600 }}>24 Februarie 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Individuele aankope:</td><td style={{ fontWeight: 600 }}>Bly toeganklik (2 uitgawes)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p>Jy kan enige tyd weer inteken om toegang te kry tot alle nuwe uitgawes:</p>
    <EmailButton text="Teken Weer In — Vanaf R140/pm" />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Let wel: Individueel gekoopte e-uitgawes bly permanent in jou biblioteek beskikbaar.
    </p>
  </EmailWrapper>
);

const SinglePurchaseEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Jou E-Uitgawe is Gereed! 📰</h2>
    <p>Dankie vir jou aankoop. Jou e-uitgawe is nou beskikbaar om te lees in jou biblioteek.</p>
    <InfoBox>
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bestelling #:</td><td style={{ fontWeight: 600 }}>DP-20260224-0043</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Uitgawe:</td><td style={{ fontWeight: 600 }}>rooi rose — 21 Februarie 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bedrag:</td><td style={{ fontWeight: 600 }}>R35.00</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Toegang:</td><td style={{ fontWeight: 600 }}>Permanent (hierdie uitgawe)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Lees Nou" />
    <div style={{ backgroundColor: BRAND.lightGray, borderRadius: 8, padding: '16px 20px', margin: '20px 0', textAlign: 'center' }}>
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: BRAND.navy }}>
        Wil jy elke week lees? Spaar met 'n intekening!
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: BRAND.gray }}>
        Vanaf R140/maand — onbeperkte toegang tot alle nuwe uitgawes + 14-dae gratis proeftydperk
      </p>
      <a href="#" style={{ color: BRAND.red, fontWeight: 700, fontSize: 13, textDecoration: 'underline' }}>
        Bekyk Intekeningplanne →
      </a>
    </div>
  </EmailWrapper>
);

const NewEditionEmail = () => (
  <EmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 22 }}>Nuwe Uitgawe Beskikbaar! 🗞️</h2>
    <p>Die nuutste uitgawe van rooi rose is nou beskikbaar om te lees in jou biblioteek.</p>
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <div style={{
        display: 'inline-block', width: 180, height: 240, backgroundColor: BRAND.lightGray,
        borderRadius: 8, border: `1px solid ${BRAND.border}`,
        backgroundImage: 'linear-gradient(135deg, #E5E7EB 25%, #D1D5DB 25%, #D1D5DB 50%, #E5E7EB 50%, #E5E7EB 75%, #D1D5DB 75%)',
        backgroundSize: '20px 20px',
      }}>
        <div style={{
          backgroundColor: BRAND.navy, color: BRAND.white, padding: '8px', borderRadius: '8px 8px 0 0',
          fontSize: 11, fontWeight: 700, letterSpacing: 1
        }}>
          ROOI ROSE
        </div>
        <div style={{ padding: '40px 16px', color: BRAND.gray, fontSize: 12 }}>
          28 Feb 2026
          <br />
          Uitgawe #217
        </div>
      </div>
    </div>
    <InfoBox>
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Uitgawe:</td><td style={{ fontWeight: 600 }}>rooi rose — 28 Februarie 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Bladsye:</td><td style={{ fontWeight: 600 }}>48</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Jou plan:</td><td style={{ fontWeight: 600 }}>Digitale Intekening — 3 Maande (Aktief)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Lees Nuutste Uitgawe" />
    <p style={{ fontSize: 13, color: BRAND.gray, textAlign: 'center' }}>
      Jy ontvang hierdie kennisgewing omdat jy 'n aktiewe intekenaar is.
      <br />
      <a href="#" style={{ color: BRAND.navy }}>Bestuur kennisgewings</a>
    </p>
  </EmailWrapper>
);

const TEMPLATE_COMPONENTS: Record<string, React.FC> = {
  'new-subscription': NewSubscriptionEmail,
  'renewal-confirmation': RenewalConfirmationEmail,
  'subscription-cancelled': SubscriptionCancelledEmail,
  'payment-failed': PaymentFailedEmail,
  'subscription-expired': SubscriptionExpiredEmail,
  'single-purchase': SinglePurchaseEmail,
  'new-edition': NewEditionEmail,
};

/* ═══════════════════════════════════════════════════════════════
 * FORM SUBMISSION EMAIL CONFIRMATIONS (10 templates)
 * Gravity Forms / MailPoet / WP user notification emails
 * ═══════════════════════════════════════════════════════════════ */

/** Shared wrapper for form confirmation emails — lighter than WC wrapper */
const FormEmailWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: BRAND.white }}>
    <div style={{ backgroundColor: BRAND.navy, padding: '20px 32px', textAlign: 'center' }}>
      <h1 style={{ color: BRAND.white, margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>
        ROOI ROSE
      </h1>
    </div>
    <div style={{ padding: '32px', color: '#1F2937', lineHeight: 1.7 }}>
      {children}
    </div>
    <div style={{ backgroundColor: BRAND.lightGray, padding: '20px 32px', borderTop: `1px solid ${BRAND.border}`, textAlign: 'center' }}>
      <p style={{ margin: '0 0 6px', fontSize: 12, color: BRAND.gray }}>
        © 2026 rooi rose. Alle regte voorbehou.
      </p>
      <p style={{ margin: 0, fontSize: 11, color: BRAND.gray }}>
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Tuisblad</a>
        {' · '}
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Kontak Ons</a>
        {' · '}
        <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Privaatheidsbeleid</a>
      </p>
      <p style={{ margin: '10px 0 0', fontSize: 10, color: '#9CA3AF' }}>
        Hierdie is 'n outomatiese kennisgewing. Moet asseblief nie op hierdie e-pos antwoord nie.
      </p>
    </div>
  </div>
);

const ContactConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Dankie vir jou boodskap 📧</h2>
    <p>Beste <strong>Jan van der Merwe</strong>,</p>
    <p>Ons het jou boodskap ontvang en sal so spoedig moontlik reageer. Ons streef daarna om binne <strong>2 werksdae</strong> te antwoord.</p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Onderwerp:</td><td style={{ fontWeight: 600 }}>Navraag oor advertensietariewe</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-KON-20260227-001</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Datum ontvang:</td><td style={{ fontWeight: 600 }}>27 Februarie 2026, 14:35</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      As jou navraag dringend is, skakel ons gerus by <strong>021 000 0000</strong> gedurende kantoorure (Ma–Vr, 08:00–17:00).
    </p>
  </FormEmailWrapper>
);

const AdvertiseConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Advertensie-navraag Ontvang 📢</h2>
    <p>Beste <strong>Maria Smit</strong>,</p>
    <p>Baie dankie vir jou belangstelling om by rooi rose te adverteer. Ons bemarkingspan sal jou navraag beoordeel en binne <strong>3 werksdae</strong> met jou in aanraking kom.</p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Maatskappy:</td><td style={{ fontWeight: 600 }}>Kaap Boekwinkel</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Advertensie-tipe:</td><td style={{ fontWeight: 600 }}>Druk + Digitaal Kombinasie</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Begroting:</td><td style={{ fontWeight: 600 }}>R5 000 – R10 000</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-ADV-20260227-002</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Bekyk Ons Tariewe" color={BRAND.navy} />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Vir dringende navrae, kontak ons bemarkingspan direk by <a href="mailto:adverteer@diepapier.co.za" style={{ color: BRAND.navy }}>adverteer@diepapier.co.za</a>.
    </p>
  </FormEmailWrapper>
);

const StoryConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Storie-indiening Ontvang 📰</h2>
    <p>Beste <strong>Pieter Joubert</strong>,</p>
    <p>Baie dankie dat jy 'n storie by rooi rose ingedien het. Ons redaksionele span sal dit binne <strong>5 werksdae</strong> beoordeel.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Opskrif:</td><td style={{ fontWeight: 600 }}>Nuwe speelpark vir Kaapstad-kinders</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Aanhangsels:</td><td style={{ fontWeight: 600 }}>2 foto's ontvang ✓</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-STO-20260227-003</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Let wel:</strong> Alle indiening word onderhewig aan redaksionele goedkeuring. Ons behou die reg voor om inhoud te redigeer vir lengte, duidelikheid en styl. Ons sal jou in kennis stel as jou storie aanvaar word vir publikasie.
      </p>
    </InfoBox>
  </FormEmailWrapper>
);

const LetterConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Lesersbrief Ontvang ✉️</h2>
    <p>Beste <strong>Anna de Villiers</strong> (Stellenbosch),</p>
    <p>Dankie dat jy die tyd geneem het om 'n brief aan rooi rose te skryf. Ons waardeer elke leser se bydrae tot die gesprek.</p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-LBR-20260227-004</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Datum ontvang:</td><td style={{ fontWeight: 600 }}>27 Februarie 2026</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: '#374151' }}>
      <strong>Redaksionele riglyne:</strong> Briewe mag geredigeer word vir lengte (maks. 300 woorde) en duidelikheid. Briewe met beledigende inhoud, naamloos of sonder kontakbesonderhede, sal nie oorweeg word nie. Plasings is onderhewig aan redaksionele diskresie.
    </p>
  </FormEmailWrapper>
);

const FeedbackConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Terugvoer Ontvang 💬</h2>
    <p>Beste <strong>Christo Nel</strong>,</p>
    <p>Baie dankie vir jou terugvoer. Dit is baie waardevol vir ons om rooi rose voortdurend te verbeter.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Tipe:</td><td style={{ fontWeight: 600 }}>Voorstel</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-TVR-20260227-005</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Ons sal relevante terugvoer intern deel met die betrokke departement. As 'n respons nodig is, sal ons binne <strong>5 werksdae</strong> reageer.
    </p>
  </FormEmailWrapper>
);

const ShoutoutConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Shoutout Ontvang 📣</h2>
    <p>Beste <strong>Lizette Botha</strong>,</p>
    <p>Jou shoutout is suksesvol ontvang! Ons sal dit beoordeel en dit kan in die volgende uitgawe van rooi rose verskyn.</p>
    <InfoBox bgColor="#F5F3FF" borderColor="#DDD6FE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Aanhangsels:</td><td style={{ fontWeight: 600 }}>1 foto ontvang ✓</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-SHO-20260227-006</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Gepubliseer binne:</td><td style={{ fontWeight: 600 }}>± 1–2 weke (onderhewig aan ruimte)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Shoutouts word onderhewig aan redaksionele goedkeuring en ruimte-beskikbaarheid. Ons sal jou nie noodwendig in kennis stel wanneer dit gepubliseer word nie — kyk uit na die volgende uitgawe!
    </p>
  </FormEmailWrapper>
);

const EventConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Gebeurtenis Ontvang 📅</h2>
    <p>Beste <strong>Danie Steyn</strong>,</p>
    <p>Dankie dat jy jou gebeurtenis by rooi rose ingedien het. Ons sal die besonderhede verifieer en dit na goedkeuring op ons gebeurteniskalender plaas.</p>
    <InfoBox bgColor="#FFF7ED" borderColor="#FDBA74">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Gebeurtenis:</td><td style={{ fontWeight: 600 }}>Boland Wynfees 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Datum:</td><td style={{ fontWeight: 600 }}>15 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Plek:</td><td style={{ fontWeight: 600 }}>Paarl Gimnasium-saal</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Beeld:</td><td style={{ fontWeight: 600 }}>1 beeld ontvang ✓</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-GEB-20260227-007</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Gebeurtenisse word gewoonlik binne <strong>3 werksdae</strong> verwerk. Gratis plasings is onderhewig aan redaksionele goedkeuring. Vir geborgde of uitgebreide plasings, kontak ons bemarkingspan.
    </p>
  </FormEmailWrapper>
);

const RegisterWelcomeEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Welkom by rooi rose! 👤</h2>
    <p>Beste <strong>Elize Marais</strong>,</p>
    <p>Jou rekening is suksesvol geskep. Jy kan nou aanmeld om toegang te kry tot eksklusiewe funksies.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>E-pos:</td><td style={{ fontWeight: 600 }}>elize@voorbeeld.co.za</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Rekening geskep:</td><td style={{ fontWeight: 600 }}>27 Februarie 2026</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p>Met jou rekening kan jy:</p>
    <ul style={{ fontSize: 14, color: '#374151', paddingLeft: 20 }}>
      <li>Digitale uitgawes lees (met intekening of enkel aankope)</li>
      <li>Aan kompetisies deelneem</li>
      <li>Op artikels kommentaar lewer</li>
      <li>Nuusbriefvoorkeure bestuur</li>
    </ul>
    <EmailButton text="Meld Aan By My Rekening" />
    <div style={{ backgroundColor: BRAND.lightGray, borderRadius: 8, padding: '16px 20px', margin: '20px 0', textAlign: 'center' }}>
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: BRAND.navy }}>
        Begin lees met 'n digitale intekening
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: BRAND.gray }}>
        Vanaf R140/maand — onbeperkte toegang + 14-dae gratis proeftydperk
      </p>
      <a href="#" style={{ color: BRAND.red, fontWeight: 700, fontSize: 13, textDecoration: 'underline' }}>
        Bekyk Intekeningplanne →
      </a>
    </div>
  </FormEmailWrapper>
);

const NewsletterConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Nuusbriefintekening Bevestig 📬</h2>
    <p>Beste <strong>Kobus Venter</strong>,</p>
    <p>Welkom by die rooi rose-nuusbrief! Jy sal voortaan ons weeklikse nuusbrief ontvang met die belangrikste nuus, artikels en aanbiedinge.</p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>E-pos:</td><td style={{ fontWeight: 600 }}>kobus@voorbeeld.co.za</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Belangstellings:</td><td style={{ fontWeight: 600 }}>Nuus, Sport, Leefstyl</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Frekwensie:</td><td style={{ fontWeight: 600 }}>Weekliks (Maandae)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Jy kan enige tyd jou voorkeure wysig of afteken deur die skakels onderaan elke nuusbrief te gebruik.
    </p>
    <div style={{ textAlign: 'center', margin: '16px 0' }}>
      <a href="#" style={{ color: BRAND.navy, fontSize: 12, textDecoration: 'underline' }}>Bestuur Voorkeure</a>
      {' · '}
      <a href="#" style={{ color: BRAND.gray, fontSize: 12, textDecoration: 'underline' }}>Teken Af</a>
    </div>
  </FormEmailWrapper>
);

const CompetitionConfirmationEmail = () => (
  <FormEmailWrapper>
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Kompetisie-inskrywing Ontvang 🏆</h2>
    <p>Beste <strong>Hennie du Plessis</strong>,</p>
    <p>Jou inskrywing vir die kompetisie is suksesvol ontvang. Sterkte!</p>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '35%' }}>Kompetisie:</td><td style={{ fontWeight: 600 }}>Wen 'n Naweek by Franschhoek Boutique Hotel</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Jou antwoord:</td><td style={{ fontWeight: 600 }}>Franschhoek</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Sluitingsdatum:</td><td style={{ fontWeight: 600 }}>14 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-KMP-20260227-008</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#F3F4F6" borderColor="#D1D5DB">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Kompetisiereëls:</strong> Slegs een inskrywing per persoon. Werknemers en familie van rooi rose mag nie deelneem nie. Wenners word binne 7 dae na die sluitingsdatum telefonies en per e-pos in kennis gestel. Die pryse is nie oordraagbaar of vir kontant inwisselbaar nie.
      </p>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray, textAlign: 'center' }}>
      Wenners sal op <strong>21 Maart 2026</strong> aangekondig word op ons webwerf en sosiale media.
    </p>
  </FormEmailWrapper>
);

const FORM_TEMPLATE_COMPONENTS: Record<string, React.FC> = {
  'contact-confirmation': ContactConfirmationEmail,
  'advertise-confirmation': AdvertiseConfirmationEmail,
  'story-confirmation': StoryConfirmationEmail,
  'letter-confirmation': LetterConfirmationEmail,
  'feedback-confirmation': FeedbackConfirmationEmail,
  'shoutout-confirmation': ShoutoutConfirmationEmail,
  'event-confirmation': EventConfirmationEmail,
  'register-welcome': RegisterWelcomeEmail,
  'newsletter-confirmation': NewsletterConfirmationEmail,
  'competition-confirmation': CompetitionConfirmationEmail,
};

/* ═══════════════════════════════════════════════════════════════
 * STAFF REPLY / FOLLOW-UP EMAIL TEMPLATES (13 templates)
 * Sent after staff review — acceptance, rejection, follow-up
 * ═══════════════════════════════════════════════════════════════ */

/** Reply wrapper — has a subtle "reply" indicator bar */
const ReplyEmailWrapper: React.FC<{ children: React.ReactNode; replyType: 'positive' | 'negative' | 'info' | 'action-required' }> = ({ children, replyType }) => {
  const accentColors: Record<string, string> = {
    positive: '#16A34A',
    negative: '#DC2626',
    info: '#2563EB',
    'action-required': '#D97706',
  };
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: BRAND.white }}>
      <div style={{ height: 4, backgroundColor: accentColors[replyType] }} />
      <div style={{ backgroundColor: BRAND.navy, padding: '20px 32px', textAlign: 'center' }}>
        <h1 style={{ color: BRAND.white, margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>
          DIE PAPIER
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', margin: '4px 0 0', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
          Personeel-antwoord
        </p>
      </div>
      <div style={{ padding: '32px', color: '#1F2937', lineHeight: 1.7 }}>
        {children}
      </div>
      <div style={{ backgroundColor: BRAND.lightGray, padding: '20px 32px', borderTop: `1px solid ${BRAND.border}`, textAlign: 'center' }}>
        <p style={{ margin: '0 0 6px', fontSize: 12, color: BRAND.gray }}>
          © 2026 rooi rose. Alle regte voorbehou.
        </p>
        <p style={{ margin: 0, fontSize: 11, color: BRAND.gray }}>
          <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Tuisblad</a>
          {' · '}
          <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Kontak Ons</a>
          {' · '}
          <a href="#" style={{ color: BRAND.navy, textDecoration: 'underline' }}>Privaatheidsbeleid</a>
        </p>
        <p style={{ margin: '10px 0 0', fontSize: 10, color: '#9CA3AF' }}>
          Hierdie e-pos is namens rooi rose gestuur as antwoord op jou indiening.
        </p>
      </div>
    </div>
  );
};

const ContactReplyEmail = () => (
  <ReplyEmailWrapper replyType="info">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Re: Jou navraag — Verwysing #DP-KON-20260227-001</h2>
    <p>Beste <strong>Jan van der Merwe</strong>,</p>
    <p>Baie dankie vir jou navraag oor advertensietariewe. Ons is bly om jou te help.</p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
        Ons advertensietariewe wissel afhangende van die tipe en grootte van die plasing. Ek het ons volledige mediapak as aanhangsel aangeheg wat alle opsies en pryse uiteensit. Vir 'n kwart-bladsy drukadvertensie begin tariewe by R2 500 per uitgawe, met afslag vir meervoudige besprekings.
      </p>
    </InfoBox>
    <p>As jy enige verdere vrage het, staan dit jou vry om direk op hierdie e-pos te antwoord.</p>
    <p style={{ margin: '24px 0 4px', fontSize: 14 }}>
      Vriendelike groete,<br />
      <strong>Anri Coetzee</strong><br />
      <span style={{ fontSize: 13, color: BRAND.gray }}>Kliëntediens · rooi rose</span><br />
      <span style={{ fontSize: 12, color: BRAND.gray }}>admin@diepapier.co.za · 021 000 0000</span>
    </p>
  </ReplyEmailWrapper>
);

const AdvertiseReplyEmail = () => (
  <ReplyEmailWrapper replyType="info">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Advertensie-voorstel vir Kaap Boekwinkel 📊</h2>
    <p>Beste <strong>Maria Smit</strong>,</p>
    <p>Baie dankie vir jou belangstelling om by rooi rose te adverteer. Gebaseer op jou navraag het ons die volgende voorstel saamgestel:</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray, width: '40%' }}>Pakket:</td><td style={{ fontWeight: 600 }}>Druk + Digitaal Kombinasie</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Druk (kwart-bladsy):</td><td style={{ fontWeight: 600 }}>R2 500 × 4 uitgawes = R10 000</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Digitaal (banner):</td><td style={{ fontWeight: 600 }}>R1 200/maand × 1 maand = R1 200</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray, borderTop: `1px solid ${BRAND.border}` }}><strong>Totaal:</strong></td><td style={{ fontWeight: 700, borderTop: `1px solid ${BRAND.border}`, padding: '6px 0' }}>R11 200 (BTW ingesluit)</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Kombinasie-afslag:</td><td style={{ fontWeight: 600, color: '#16A34A' }}>−10% = R10 080</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Laai Volledige Mediapak Af" color={BRAND.navy} />
    <p>Die aangehegte mediapak bevat volledige spesifikasies, teikengehoor-statistieke en produksie-sperdatums.</p>
    <p style={{ margin: '24px 0 4px', fontSize: 14 }}>
      Vriendelike groete,<br />
      <strong>Suzette Maritz</strong><br />
      <span style={{ fontSize: 13, color: BRAND.gray }}>Bemarkingsbestuurder · rooi rose</span><br />
      <span style={{ fontSize: 12, color: BRAND.gray }}>adverteer@diepapier.co.za · 021 000 0001</span>
    </p>
  </ReplyEmailWrapper>
);

const StoryAcceptedEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Jou Storie is Aanvaar vir Publikasie! ✅</h2>
    <p>Beste <strong>Pieter Joubert</strong>,</p>
    <p>Ons is bly om jou mee te deel dat jou storie-indiening goedgekeur is vir publikasie in rooi rose.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Opskrif:</td><td style={{ fontWeight: 600 }}>Nuwe speelpark vir Kaapstad-kinders</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-STO-20260227-003</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Beoogde uitgawe:</td><td style={{ fontWeight: 600 }}>rooi rose — 7 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Afdeling:</td><td style={{ fontWeight: 600 }}>Gemeenskapsnuus</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Let wel:</strong> Die storie mag geredigeer word vir lengte, duidelikheid en styl in ooreenstemming met ons redaksionele beleid. Die finale weergawe mag verskil van die oorspronklike indiening. Jou naam sal as bydraer erken word tensy jy anders versoek.
      </p>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      As jy enige vrae het, kontak ons redaksie by <a href="mailto:redaksie@diepapier.co.za" style={{ color: BRAND.navy }}>redaksie@diepapier.co.za</a>.
    </p>
  </ReplyEmailWrapper>
);

const StoryDeclinedEmail = () => (
  <ReplyEmailWrapper replyType="negative">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Opdatering oor Jou Storie-indiening</h2>
    <p>Beste <strong>Pieter Joubert</strong>,</p>
    <p>Dankie dat jy die tyd geneem het om 'n storie by rooi rose in te dien. Ongelukkig kan ons jou indiening op hierdie stadium nie vir publikasie oorweeg nie.</p>
    <InfoBox bgColor="#F3F4F6" borderColor="#D1D5DB">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Opskrif:</td><td style={{ fontWeight: 600 }}>Nuwe speelpark vir Kaapstad-kinders</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-STO-20260227-003</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Rede:</td><td style={{ fontWeight: 600 }}>Soortgelyke artikel reeds geskeduleer</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p>Ons moedig jou aan om weer in die toekoms stories in te dien. Elke indiening word individueel beoordeel en ons waardeer jou bydrae tot gemeenskapjoernalistiek.</p>
    <EmailButton text="Dien Nog 'n Storie In" color={BRAND.navy} />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Vir terugvoer oor jou indiening, kontak <a href="mailto:redaksie@diepapier.co.za" style={{ color: BRAND.navy }}>redaksie@diepapier.co.za</a>.
    </p>
  </ReplyEmailWrapper>
);

const LetterPublishedEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Jou Lesersbrief is Gepubliseer! 📰</h2>
    <p>Beste <strong>Anna de Villiers</strong> (Stellenbosch),</p>
    <p>Ons is bly om jou in kennis te stel dat jou lesersbrief aanvaar is en in die volgende uitgawe van rooi rose sal verskyn.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-LBR-20260227-004</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Uitgawe:</td><td style={{ fontWeight: 600 }}>rooi rose — 7 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Afdeling:</td><td style={{ fontWeight: 600 }}>Lesersbriewe (Bladsy 12)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: '#374151' }}>
      Die brief mag geredigeer gewees het vir lengte en duidelikheid in ooreenstemming met ons redaksionele beleid. Dankie dat jy deel is van die gesprek!
    </p>
    <EmailButton text="Lees Jou Brief Aanlyn" />
  </ReplyEmailWrapper>
);

const EventApprovedEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Gebeurtenis Goedgekeur & Geplaas! 📅</h2>
    <p>Beste <strong>Danie Steyn</strong>,</p>
    <p>Jou gebeurtenis is goedgekeur en is nou op ons aanlyn-kalender geplaas.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Gebeurtenis:</td><td style={{ fontWeight: 600 }}>Boland Wynfees 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Datum:</td><td style={{ fontWeight: 600 }}>15 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Plek:</td><td style={{ fontWeight: 600 }}>Paarl Gimnasium-saal</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-GEB-20260227-007</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Kalender-skakel:</td><td><a href="#" style={{ color: BRAND.red, fontWeight: 600, fontSize: 14 }}>Bekyk op diepapier.co.za →</a></td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Die gebeurtenis sal ook in die gedrukte uitgawe van <strong>7 Maart 2026</strong> se gebeure-kalender verskyn (onderhewig aan ruimte).
    </p>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Wil jy jou gebeurtenis uitlig?</strong> Kontak ons bemarkingspan by <a href="mailto:adverteer@diepapier.co.za" style={{ color: BRAND.navy }}>adverteer@diepapier.co.za</a> vir geborgde plasing-opsies met groter sigbaarheid.
      </p>
    </InfoBox>
  </ReplyEmailWrapper>
);

const EventDeclinedEmail = () => (
  <ReplyEmailWrapper replyType="negative">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Opdatering oor Jou Gebeurtenis-indiening</h2>
    <p>Beste <strong>Danie Steyn</strong>,</p>
    <p>Dankie dat jy jou gebeurtenis by rooi rose ingedien het. Ongelukkig kan ons hierdie gebeurtenis nie op ons kalender plaas nie.</p>
    <InfoBox bgColor="#FEF2F2" borderColor="#FECACA">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Gebeurtenis:</td><td style={{ fontWeight: 600 }}>Boland Wynfees 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-GEB-20260227-007</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Rede:</td><td style={{ fontWeight: 600 }}>Gebeurtenis val buite ons dekking-area</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <p>Alternatiewe opsies:</p>
    <ul style={{ fontSize: 14, color: '#374151', paddingLeft: 20, lineHeight: 1.8 }}>
      <li><strong>Betaalde plasing:</strong> Kontak ons bemarkingspan vir 'n geborgde kalenderplasing</li>
      <li><strong>Gemeenskapsportaal:</strong> Plaas jou gebeurtenis op ons gemeenskapsaanplakbord (gratis)</li>
    </ul>
    <EmailButton text="Kontak Bemarking" color={BRAND.navy} />
  </ReplyEmailWrapper>
);

const CompetitionWinnerEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Geluk — Jy Het Gewen! 🎉🏆</h2>
    <p>Beste <strong>Hennie du Plessis</strong>,</p>
    <p>Ons is opgewonde om jou mee te deel dat jy as wenner van ons kompetisie gekies is!</p>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray, width: '40%' }}>Kompetisie:</td><td style={{ fontWeight: 600 }}>Wen 'n Naweek by Franschhoek Boutique Hotel</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Prys:</td><td style={{ fontWeight: 700, color: '#16A34A' }}>2 nagte verblyf vir 2 persone + ontbyt</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Waarde:</td><td style={{ fontWeight: 600 }}>R4 500</td></tr>
          <tr><td style={{ padding: '6px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-KMP-20260227-008</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>Wat jy moet doen:</p>
      <ol style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Antwoord op hierdie e-pos <strong>binne 7 dae</strong> om jou prys te aanvaar</li>
        <li>Verskaf jou volle naam en kontaknommer vir verifikasie</li>
        <li>Ons sal jou binne 3 werksdae kontak om die bespreking te reël</li>
      </ol>
    </InfoBox>
    <InfoBox bgColor="#F3F4F6" borderColor="#D1D5DB">
      <p style={{ margin: 0, fontSize: 12, color: BRAND.gray }}>
        <strong>Terme:</strong> Prys moet binne 6 maande na aankondiging benut word. Onderhewig aan beskikbaarheid. Nie oordraagbaar of vir kontant inwisselbaar nie. Wenner moet 18 jaar of ouer wees. Deur die prys te aanvaar, gee jy toestemming dat jou naam en foto op ons webwerf en sosiale media gepubliseer mag word.
      </p>
    </InfoBox>
    <EmailButton text="Aanvaar My Prys" />
    <p style={{ fontSize: 13, color: BRAND.gray, textAlign: 'center' }}>
      Moet asseblief antwoord binne <strong>7 dae</strong>, andersins sal 'n nuwe wenner getrek word.
    </p>
  </ReplyEmailWrapper>
);

const PasswordResetEmail = () => (
  <ReplyEmailWrapper replyType="action-required">
    <h2 style={{ color: '#D97706', margin: '0 0 16px', fontSize: 20 }}>Wagwoordherstel Versoek 🔑</h2>
    <p>Beste <strong>Elize Marais</strong>,</p>
    <p>Ons het 'n versoek ontvang om jou wagwoord vir jou rooi rose-rekening te herstel.</p>
    <EmailButton text="Herstel My Wagwoord" color="#D97706" />
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>Belangrik:</p>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Hierdie skakel verval oor <strong>24 uur</strong></li>
        <li>As jy nie hierdie versoek gemaak het nie, kan jy hierdie e-pos veilig ignoreer</li>
        <li>Jou wagwoord sal nie verander nie tensy jy op die skakel hierbo klik</li>
      </ul>
    </InfoBox>
    <InfoBox bgColor="#FEF2F2" borderColor="#FECACA">
      <p style={{ margin: 0, fontSize: 12 }}>
        <strong>Sekuriteitswenk:</strong> Moet nooit jou wagwoord met enigiemand deel nie. rooi rose sal jou nooit per e-pos of telefoon vir jou wagwoord vra nie. As jy vermoed dat iemand anders toegang tot jou rekening gekry het, kontak ons onmiddellik.
      </p>
    </InfoBox>
    <p style={{ fontSize: 12, color: BRAND.gray, textAlign: 'center' }}>
      Vir hulp, kontak <a href="mailto:admin@diepapier.co.za" style={{ color: BRAND.navy }}>admin@diepapier.co.za</a>
    </p>
  </ReplyEmailWrapper>
);

const FeedbackAcknowledgedEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Opdatering oor Jou Terugvoer 💬</h2>
    <p>Beste <strong>Christo Nel</strong>,</p>
    <p>Baie dankie vir jou terugvoer wat jy op <strong>27 Februarie 2026</strong> ingedien het. Ons wil jou laat weet dat ons dit ernstig opgeneem het en reeds stappe geneem het.</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Tipe terugvoer:</td><td style={{ fontWeight: 600 }}>Voorstel</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-TVR-20260227-005</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Status:</td><td style={{ fontWeight: 600, color: '#16A34A' }}>Ontvang & intern gedeel</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#EFF6FF" borderColor="#BFDBFE">
      <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>Wat ons gedoen het:</p>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8 }}>
        Jou voorstel om meer plaaslike sport-dekking in te sluit is met ons redaksionele span gedeel. Ons beplan reeds om vanaf volgende maand 'n toegewyde plaaslike sport-afdeling in te sluit. Dankie dat jy ons gehelp het om rooi rose beter te maak!
      </p>
    </InfoBox>
    <p style={{ margin: '24px 0 4px', fontSize: 14 }}>
      Vriendelike groete,<br />
      <strong>Anri Coetzee</strong><br />
      <span style={{ fontSize: 13, color: BRAND.gray }}>Kliëntediens · rooi rose</span><br />
      <span style={{ fontSize: 12, color: BRAND.gray }}>admin@diepapier.co.za · 021 000 0000</span>
    </p>
  </ReplyEmailWrapper>
);

const ShoutoutPublishedEmail = () => (
  <ReplyEmailWrapper replyType="positive">
    <h2 style={{ color: '#16A34A', margin: '0 0 16px', fontSize: 20 }}>Jou Shoutout is Gepubliseer! 📣</h2>
    <p>Beste <strong>Lizette Botha</strong>,</p>
    <p>Ons is bly om jou in kennis te stel dat jou shoutout in die nuutste uitgawe van rooi rose verskyn het!</p>
    <InfoBox bgColor="#F5F3FF" borderColor="#DDD6FE">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Verwysing #:</td><td style={{ fontWeight: 600 }}>DP-SHO-20260227-006</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Uitgawe:</td><td style={{ fontWeight: 600 }}>rooi rose — 7 Maart 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Afdeling:</td><td style={{ fontWeight: 600 }}>Shoutouts (Bladsy 22)</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <EmailButton text="Bekyk Jou Shoutout Aanlyn" />
    <p style={{ fontSize: 13, color: BRAND.gray }}>
      Dankie dat jy rooi rose gebruik om jou boodskap te deel! Wil jy nog 'n shoutout stuur? <a href="#" style={{ color: BRAND.navy }}>Dien nog een in →</a>
    </p>
  </ReplyEmailWrapper>
);

const NewsletterUnsubscribeEmail = () => (
  <ReplyEmailWrapper replyType="info">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Nuusbrief-aftekening Bevestig 📭</h2>
    <p>Beste <strong>Kobus Venter</strong>,</p>
    <p>Jy is suksesvol van die rooi rose-nuusbrief afgeteken. Jy sal nie meer weeklikse nuusbriewe van ons ontvang nie.</p>
    <InfoBox bgColor="#F3F4F6" borderColor="#D1D5DB">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>E-pos:</td><td style={{ fontWeight: 600 }}>kobus@voorbeeld.co.za</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Afgeteken op:</td><td style={{ fontWeight: 600 }}>27 Februarie 2026</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Vorige voorkeure:</td><td style={{ fontWeight: 600 }}>Nuus, Sport, Leefstyl</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Let wel:</strong> Hierdie aftekening beïnvloed slegs die weeklikse nuusbrief. Transaksionele e-posse (bestellingsbevestigings, wagwoordherstel, ens.) sal steeds gestuur word soos nodig.
      </p>
    </InfoBox>
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <p style={{ fontSize: 14, color: BRAND.gray, marginBottom: 12 }}>Het jy van plan verander?</p>
      <a href="#" style={{
        display: 'inline-block', backgroundColor: BRAND.navy, color: BRAND.white,
        padding: '12px 28px', borderRadius: 8, textDecoration: 'none',
        fontWeight: 700, fontSize: 13,
      }}>
        Teken Weer In
      </a>
    </div>
    <p style={{ fontSize: 12, color: BRAND.gray, textAlign: 'center' }}>
      Ons sal jou mis! As jy in die toekoms weer wil inteken, besoek <a href="#" style={{ color: BRAND.navy }}>diepapier.co.za/nuusbrief-inteken</a>.
    </p>
  </ReplyEmailWrapper>
);

const ProfileUpdatedEmail = () => (
  <ReplyEmailWrapper replyType="info">
    <h2 style={{ color: BRAND.navy, margin: '0 0 16px', fontSize: 20 }}>Profielveranderinge Gestoor 👤</h2>
    <p>Beste <strong>Elize Marais</strong>,</p>
    <p>Jou profielbesonderhede is suksesvol opgedateer. Hier is 'n opsomming van die veranderinge:</p>
    <InfoBox bgColor="#F0FDF4" borderColor="#BBF7D0">
      <table style={{ width: '100%', fontSize: 14 }}>
        <tbody>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray, width: '40%' }}>Vertoonnaam:</td><td style={{ fontWeight: 600 }}>Elize Marais</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>E-pos:</td><td style={{ fontWeight: 600 }}>elize@voorbeeld.co.za</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Telefoon:</td><td style={{ fontWeight: 600 }}>083 000 0000 (opgedateer)</td></tr>
          <tr><td style={{ padding: '4px 0', color: BRAND.gray }}>Opgedateer op:</td><td style={{ fontWeight: 600 }}>27 Februarie 2026, 10:15</td></tr>
        </tbody>
      </table>
    </InfoBox>
    <InfoBox bgColor="#FEF3C7" borderColor="#FDE68A">
      <p style={{ margin: 0, fontSize: 13 }}>
        <strong>Nie jy nie?</strong> As jy nie hierdie veranderinge aangebring het nie, kontak ons onmiddellik by <a href="mailto:admin@diepapier.co.za" style={{ color: BRAND.navy }}>admin@diepapier.co.za</a> of herstel jou wagwoord vir veiligheid.
      </p>
    </InfoBox>
    <EmailButton text="Gaan na My Rekening" color={BRAND.navy} />
  </ReplyEmailWrapper>
);

const REPLY_TEMPLATE_COMPONENTS: Record<string, React.FC> = {
  'contact-reply': ContactReplyEmail,
  'advertise-reply': AdvertiseReplyEmail,
  'story-accepted': StoryAcceptedEmail,
  'story-declined': StoryDeclinedEmail,
  'letter-published': LetterPublishedEmail,
  'event-approved': EventApprovedEmail,
  'event-declined': EventDeclinedEmail,
  'competition-winner': CompetitionWinnerEmail,
  'password-reset': PasswordResetEmail,
  'feedback-acknowledged': FeedbackAcknowledgedEmail,
  'shoutout-published': ShoutoutPublishedEmail,
  'newsletter-unsubscribe': NewsletterUnsubscribeEmail,
  'profile-updated': ProfileUpdatedEmail,
};

/* ─── Main page component ─── */
type EmailTab = 'woocommerce' | 'form-submissions' | 'reply-emails';

export const EmailPreviews = () => {
  const [activeTab, setActiveTab] = useState<EmailTab>('woocommerce');
  const [activeWcTemplate, setActiveWcTemplate] = useState('new-subscription');
  const [activeFormTemplate, setActiveFormTemplate] = useState('contact-confirmation');
  const [activeReplyTemplate, setActiveReplyTemplate] = useState('contact-reply');
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);
  const heroMeta = HERO_META.emailPreviews;

  const totalTemplates = EMAIL_TEMPLATES.length + FORM_EMAIL_TEMPLATES.length + FORM_REPLY_TEMPLATES.length;

  // Current template info based on active tab
  const isWcTab = activeTab === 'woocommerce';
  const isFormTab = activeTab === 'form-submissions';
  const isReplyTab = activeTab === 'reply-emails';
  const ActiveComponent = isWcTab
    ? TEMPLATE_COMPONENTS[activeWcTemplate]
    : isFormTab
      ? FORM_TEMPLATE_COMPONENTS[activeFormTemplate]
      : REPLY_TEMPLATE_COMPONENTS[activeReplyTemplate];
  const activeWcInfo = EMAIL_TEMPLATES.find(t => t.id === activeWcTemplate)!;
  const activeFormInfo = FORM_EMAIL_TEMPLATES.find(t => t.id === activeFormTemplate)!;
  const activeReplyInfo = FORM_REPLY_TEMPLATES.find(t => t.id === activeReplyTemplate)!;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DevToolHero
          icon={heroMeta.icon}
          iconColor={heroMeta.iconColor}
          title={resolveHeroMeta(heroMeta, locale).title}
          description={resolveHeroMeta(heroMeta, locale).description}
          stats={[
            { label: t('ep.woocommerce'), value: EMAIL_TEMPLATES.length },
            { label: t('ep.confirmations'), value: FORM_EMAIL_TEMPLATES.length },
            { label: t('ep.replies'), value: FORM_REPLY_TEMPLATES.length },
            { label: t('ep.total'), value: totalTemplates },
          ]}
          badge={`${totalTemplates} ${t('ep.templates')}`}
        />

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('woocommerce')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              isWcTab
                ? 'bg-brand-red text-white shadow-md'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            🛒 WooCommerce ({EMAIL_TEMPLATES.length})
          </button>
          <button
            onClick={() => setActiveTab('form-submissions')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              isFormTab
                ? 'bg-brand-red text-white shadow-md'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            📝 {t('ep.confirmations')} ({FORM_EMAIL_TEMPLATES.length})
          </button>
          <button
            onClick={() => setActiveTab('reply-emails')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              isReplyTab
                ? 'bg-brand-red text-white shadow-md'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            💌 {t('ep.replies')} ({FORM_REPLY_TEMPLATES.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          {/* Sidebar — template selector */}
          <div className="space-y-2">
            {isWcTab ? (
              EMAIL_TEMPLATES.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setActiveWcTemplate(template.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    activeWcTemplate === template.id
                      ? 'bg-gray-200 dark:bg-white/10 border-brand-red shadow-md'
                      : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={template.iconColor}>{template.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold mb-0.5 ${
                        activeWcTemplate === template.id
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-white/70'
                      }`}>
                        {template.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-white/40 truncate">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            ) : isFormTab ? (
              FORM_EMAIL_TEMPLATES.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setActiveFormTemplate(template.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    activeFormTemplate === template.id
                      ? 'bg-gray-200 dark:bg-white/10 border-brand-red shadow-md'
                      : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg leading-none">{template.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold mb-0.5 ${
                        activeFormTemplate === template.id
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-white/70'
                      }`}>
                        {isAf ? template.titleAf : template.titleEn}
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-white/40 truncate">
                        {isAf ? template.descAf : template.descEn}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              FORM_REPLY_TEMPLATES.map((template) => {
                const typeColors: Record<string, string> = {
                  positive: 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300',
                  negative: 'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-300',
                  info: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
                  'action-required': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
                };
                const typeLabels: Record<string, string> = {
                  positive: t('ep.replyPositive'),
                  negative: t('ep.replyNegative'),
                  info: t('ep.replyInfo'),
                  'action-required': t('ep.replyAction'),
                };
                return (
                  <button
                    key={template.id}
                    onClick={() => setActiveReplyTemplate(template.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      activeReplyTemplate === template.id
                        ? 'bg-gray-200 dark:bg-white/10 border-brand-red shadow-md'
                        : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg leading-none">{template.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-bold mb-0.5 ${
                          activeReplyTemplate === template.id
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-white/70'
                        }`}>
                          {isAf ? template.titleAf : template.titleEn}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`inline-flex px-1.5 py-0.5 rounded text-[9px] font-bold ${typeColors[template.replyType]}`}>
                            {typeLabels[template.replyType]}
                          </span>
                          <p className="text-[10px] text-gray-500 dark:text-white/40 truncate">
                            {template.wpHandler}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Main — email preview */}
          <div>
            {/* Meta bar */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-wider">
                    {t('ep.subject')}:
                  </span>
                  <p className="font-medium text-gray-900 dark:text-white mt-0.5">
                    {isWcTab
                      ? activeWcInfo.subject
                      : isFormTab
                        ? (isAf ? activeFormInfo.subjectAf : activeFormInfo.subjectEn)
                        : (isAf ? activeReplyInfo.subjectAf : activeReplyInfo.subjectEn)}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-wider">
                    {isWcTab ? 'WC Hook' : t('ep.wpHandler')}:
                  </span>
                  <p className="font-mono text-xs text-gray-600 dark:text-white/70 mt-0.5 break-all">
                    {isWcTab
                      ? activeWcInfo.wcHook
                      : isFormTab
                        ? activeFormInfo.wpHandler
                        : activeReplyInfo.wpHandler}
                  </p>
                </div>
              </div>
            </div>

            {/* Email render */}
            <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-6 sm:p-8">
              <div className="shadow-xl rounded-lg overflow-hidden">
                {ActiveComponent && <ActiveComponent />}
              </div>
            </div>

            {/* Implementation notes */}
            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <h4 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                <Crown size={14} />
                {t('ep.implementationNotes')}
              </h4>
              {isWcTab ? (
                <ul className="text-xs text-amber-200/80 space-y-1 list-disc pl-4">
                  <li>Sjablone word in WooCommerce → Settings → Emails opgestel</li>
                  <li>Oorheers sjablone in <code className="bg-amber-500/20 px-1 rounded">die-papier-theme/woocommerce/emails/</code></li>
                  <li>Alle pryse moet ooreenstem met <code className="bg-amber-500/20 px-1 rounded">/guidelines/content/pricing.md</code></li>
                  <li>Betaalpoort: Payfast (nie Stripe nie)</li>
                  <li>Geen MailPoet — slegs WooCommerce e-posse</li>
                </ul>
              ) : isFormTab ? (
                <ul className="text-xs text-amber-200/80 space-y-1 list-disc pl-4">
                  <li>Gravity Forms kennisgewings word in GF → Settings → Notifications opgestel</li>
                  <li>Gebruik merge tags soos <code className="bg-amber-500/20 px-1 rounded">{'{naam}'}</code> en <code className="bg-amber-500/20 px-1 rounded">{'{e-pos}'}</code> vir personalisering</li>
                  <li>Registrasie-e-pos oorheers <code className="bg-amber-500/20 px-1 rounded">wp_new_user_notification</code> in <code className="bg-amber-500/20 px-1 rounded">inc/user-emails.php</code></li>
                  <li>Nuusbrief-bevestiging word deur MailPoet hanteer — pas sjabloon aan in MailPoet → Settings → Basics</li>
                  <li>Verwysing-nommers word outomaties gegenereer deur Gravity Forms entry ID</li>
                  <li>Alle e-posse moet in Afrikaans wees — geen tweetalige sjablone nie</li>
                </ul>
              ) : (
                <ul className="text-xs text-amber-200/80 space-y-1 list-disc pl-4">
                  <li>Antwoord-e-posse word <strong>handmatig</strong> of via WP-admin statusverandering gestuur</li>
                  <li>Gebruik GF-inskrywingsstatus (<code className="bg-amber-500/20 px-1 rounded">approved</code> / <code className="bg-amber-500/20 px-1 rounded">declined</code>) om sjabloonkeuse te outomatiseer</li>
                  <li>Elke antwoord verwys na die oorspronklike verwysing-nommer (bv. <code className="bg-amber-500/20 px-1 rounded">DP-STO-20260227-003</code>)</li>
                  <li>Storie/brief aanvaarding stuur outomaties 'n e-pos wanneer CPT-status na <code className="bg-amber-500/20 px-1 rounded">publish</code> verander</li>
                  <li>Kompetisiewenner-e-pos word handmatig gestuur — vereis antwoord binne 7 dae</li>
                  <li>Wagwoordherstel oorheers <code className="bg-amber-500/20 px-1 rounded">retrieve_password_message</code> filter in <code className="bg-amber-500/20 px-1 rounded">inc/user-emails.php</code></li>
                  <li>Advertensie-tariewe-voorstel gebruik merge tags + PDF-aanhangsel via GF-kennisgewing</li>
                  <li>Alle antwoorde moet in Afrikaans wees — personeel-naam en kontakbesonderhede word outomaties ingevul</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <DevRelatedTools tools={RELATED_TOOLS_MAP.emailPreviews} />
      </div>
    </div>
  );
};

export default EmailPreviews;