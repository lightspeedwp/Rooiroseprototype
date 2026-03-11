import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { RootLayout } from './components/layouts/RootLayout';
import { MainLayout } from './components/layouts/MainLayout';

// ──────────────────────────────────────────────
// PERFORMANCE OPTIMIZATION: Lazy Loading Strategy
// Tier 1: Critical routes (static) - Home, Article, Category, Search, NotFound
// Tier 2-4: All other routes (lazy loaded)
// Dev Tools: ALL lazy loaded (400-500KB saved)
// ──────────────────────────────────────────────

// ═══════════════════════════════════════════════
// TIER 1: Critical Routes (Keep Static - ~5 routes)
// ═══════════════════════════════════════════════

// Core - Always loaded (critical user paths)
import { Home } from './pages/Home';
import { ArticlePage } from './pages/Article';
import { CategoryPage } from './pages/Category';
import { SearchResultsPage } from './pages/SearchResults';
import { NotFoundPage } from './pages/NotFound';

// ═══════════════════════════════════════════════
// TIER 2-4: Lazy Loaded Routes (60+ routes)
// ═══════════════════════════════════════════════

// E-Editions
const EEditionsPage = lazy(() => import('./pages/EEditions').then(m => ({ default: m.EEditionsPage })));
const SingleEEditionPage = lazy(() => import('./pages/SingleEEdition').then(m => ({ default: m.SingleEEditionPage })));
const MyEEditionsPage = lazy(() => import('./pages/MyEEditions').then(m => ({ default: m.MyEEditionsPage })));

// Policies
const PoliciesPage = lazy(() => import('./pages/Policies').then(m => ({ default: m.PoliciesPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicyPage })));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicyPage })));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditions').then(m => ({ default: m.TermsAndConditionsPage })));
const UserRulesPage = lazy(() => import('./pages/UserRulesPage').then(m => ({ default: m.UserRulesPage })));
const AdvertisingGuidelinesPage = lazy(() => import('./pages/AdvertisingGuidelinesPage').then(m => ({ default: m.AdvertisingGuidelinesPage })));
const PressCodePage = lazy(() => import('./pages/PressCodePage').then(m => ({ default: m.PressCodePage })));
const AIPolicyPage = lazy(() => import('./pages/AIPolicyPage').then(m => ({ default: m.AIPolicyPage })));
const CommentPolicyPage = lazy(() => import('./pages/CommentPolicyPage').then(m => ({ default: m.CommentPolicyPage })));
const PAIAPage = lazy(() => import('./pages/PAIAPage').then(m => ({ default: m.PAIAPage })));
const ReturnsPolicyPage = lazy(() => import('./pages/ReturnsPolicy').then(m => ({ default: m.ReturnsPolicyPage })));
const ComplaintsProcedurePage = lazy(() => import('./pages/ComplaintsProcedurePage').then(m => ({ default: m.ComplaintsProcedurePage })));

// Informational
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Advertise = lazy(() => import('./pages/Advertise').then(m => ({ default: m.Advertise })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const MyAccount = lazy(() => import('./pages/MyAccount').then(m => ({ default: m.MyAccount })));
const TeamPage = lazy(() => import('./pages/Team').then(m => ({ default: m.TeamPage })));
const ContactPage = lazy(() => import('./pages/Contact').then(m => ({ default: m.ContactPage })));
const SitemapPage = lazy(() => import('./pages/Sitemap').then(m => ({ default: m.SitemapPage })));
const WeatherPage = lazy(() => import('./pages/Weather').then(m => ({ default: m.WeatherPage })));
const TrafficPage = lazy(() => import('./pages/Traffic').then(m => ({ default: m.TrafficPage })));

// Subscribe / Commerce
const SubscribeEEdition = lazy(() => import('./pages/SubscribeEEdition').then(m => ({ default: m.SubscribeEEdition })));
const SingleSubscriptionProduct = lazy(() => import('./pages/SingleSubscriptionProduct').then(m => ({ default: m.SingleSubscriptionProduct })));
const SubscribeDelivery = lazy(() => import('./pages/SubscribeDelivery').then(m => ({ default: m.SubscribeDelivery })));
const CartPage = lazy(() => import('./pages/Cart').then(m => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/Checkout').then(m => ({ default: m.CheckoutPage })));
const OrderConfirmationPage = lazy(() => import('./pages/OrderConfirmation').then(m => ({ default: m.OrderConfirmationPage })));
const CheckoutLayout = lazy(() => import('./components/layouts/CheckoutLayout').then(m => ({ default: m.CheckoutLayout })));

// Events
const EventsPage = lazy(() => import('./pages/Events').then(m => ({ default: m.EventsPage })));
const SingleEventPage = lazy(() => import('./pages/SingleEvent').then(m => ({ default: m.SingleEventPage })));
const SubmitEventPage = lazy(() => import('./pages/SubmitEvent').then(m => ({ default: m.SubmitEventPage })));

// Newsletter
const TuesdayNewsletter = lazy(() => import('./components/templates/TuesdayNewsletterTemplate'));
const FridayNewsletter = lazy(() => import('./components/templates/FridayNewsletterTemplate'));
const NewsletterSubscribe = lazy(() => import('./pages/NewsletterSubscribe').then(m => ({ default: m.NewsletterSubscribe })));
const NewsletterArchivePage = lazy(() => import('./pages/NewsletterArchive').then(m => ({ default: m.NewsletterArchivePage })));
const NewsletterConfirmationPage = lazy(() => import('./pages/NewsletterConfirmation').then(m => ({ default: m.NewsletterConfirmationPage })));
const NewsletterReEngagementPage = lazy(() => import('./pages/NewsletterReEngagement').then(m => ({ default: m.NewsletterReEngagementPage })));
const NewsletterUnsubscribeConfirmPage = lazy(() => import('./pages/NewsletterUnsubscribeConfirm').then(m => ({ default: m.NewsletterUnsubscribeConfirmPage })));
const NewsletterUnsubscribeSuccessPage = lazy(() => import('./pages/NewsletterUnsubscribeSuccess').then(m => ({ default: m.NewsletterUnsubscribeSuccessPage })));
const ManageNewslettersPage = lazy(() => import('./pages/ManageNewsletters').then(m => ({ default: m.ManageNewslettersPage })));

// Authors & Tags
const AuthorPage = lazy(() => import('./pages/Author').then(m => ({ default: m.AuthorPage })));
const TagArchivePage = lazy(() => import('./pages/TagArchive').then(m => ({ default: m.TagArchivePage })));

// Account
const RegisterPage = lazy(() => import('./pages/Register').then(m => ({ default: m.RegisterPage })));
const AccountActivationPage = lazy(() => import('./pages/AccountActivation').then(m => ({ default: m.AccountActivationPage })));

// Thank You pages
const ThankYouAdvertisingPage = lazy(() => import('./pages/ThankYouAdvertising').then(m => ({ default: m.ThankYouAdvertisingPage })));
const ThankYouContactPage = lazy(() => import('./pages/ThankYouContact').then(m => ({ default: m.ThankYouContactPage })));
const ThankYouNewsletterPage = lazy(() => import('./pages/ThankYouNewsletter').then(m => ({ default: m.ThankYouNewsletterPage })));
const ThankYouRegistrationPage = lazy(() => import('./pages/ThankYouRegistration').then(m => ({ default: m.ThankYouRegistrationPage })));
const ThankYouSubmissionPage = lazy(() => import('./pages/ThankYouSubmission').then(m => ({ default: m.ThankYouSubmissionPage })));
const ThankYouCompetitionPage = lazy(() => import('./pages/ThankYouCompetition').then(m => ({ default: m.ThankYouCompetitionPage })));

// Advertise sub-pages
const ClassifiedsPage = lazy(() => import('./pages/advertise/ClassifiedsPage').then(m => ({ default: m.ClassifiedsPage })));
const DisplayAdvertisingPage = lazy(() => import('./pages/advertise/DisplayAdvertisingPage').then(m => ({ default: m.DisplayAdvertisingPage })));
const LeafletsPage = lazy(() => import('./pages/advertise/LeafletsPage').then(m => ({ default: m.LeafletsPage })));
const SponsoredContentPage = lazy(() => import('./pages/advertise/SponsoredContentPage').then(m => ({ default: m.SponsoredContentPage })));
const SponsorshipsPage = lazy(() => import('./pages/advertise/SponsorshipsPage').then(m => ({ default: m.SponsorshipsPage })));
const SupplementsPage = lazy(() => import('./pages/advertise/SupplementsPage').then(m => ({ default: m.SupplementsPage })));

// Submit sub-pages
const SubmitHubPage = lazy(() => import('./pages/SubmitHub').then(m => ({ default: m.SubmitHubPage })));
const SubmitStoryPage = lazy(() => import('./pages/submit/SubmitStory').then(m => ({ default: m.SubmitStoryPage })));
const SubmitLetterPage = lazy(() => import('./pages/submit/SubmitLetter').then(m => ({ default: m.SubmitLetterPage })));
const SubmitFeedbackPage = lazy(() => import('./pages/submit/SubmitFeedback').then(m => ({ default: m.SubmitFeedbackPage })));
const SubmitShoutoutPage = lazy(() => import('./pages/submit/SubmitShoutout').then(m => ({ default: m.SubmitShoutoutPage })));

// Competitions
const CompetitionsPage = lazy(() => import('./pages/Competitions').then(m => ({ default: m.CompetitionsPage })));
const CompetitionSinglePage = lazy(() => import('./pages/CompetitionSingle').then(m => ({ default: m.CompetitionSinglePage })));
const CompetitionTermsPage = lazy(() => import('./pages/CompetitionTerms').then(m => ({ default: m.CompetitionTermsPage })));

// Sponsored content
const SponsorArchivePage = lazy(() => import('./pages/SponsorArchive').then(m => ({ default: m.SponsorArchivePage })));
const SponsorsPage = lazy(() => import('./pages/Sponsors').then(m => ({ default: m.SponsorsPage })));

// New content pages
const ObituariesPage = lazy(() => import('./pages/Obituaries').then(m => ({ default: m.ObituariesPage })));
const MultimediaPage = lazy(() => import('./pages/Multimedia').then(m => ({ default: m.MultimediaPage })));
const SingleObituaryPage = lazy(() => import('./pages/SingleObituary').then(m => ({ default: m.SingleObituaryPage })));
const SingleMultimediaPage = lazy(() => import('./pages/SingleMultimedia').then(m => ({ default: m.SingleMultimediaPage })));

// Offline
const OfflinePage = lazy(() => import('./pages/Offline').then(m => ({ default: m.OfflinePage })));

// ═══════════════════════════════════════════════
// DEV TOOLS: ALL Lazy Loaded (PERF-006 - 400-500KB saved!)
// ═══════════════════════════════════════════════

const DevHub = lazy(() => import('./pages/dev/DevHub').then(m => ({ default: m.DevHub })));
const ComponentBrowser = lazy(() => import('./pages/dev/ComponentBrowser').then(m => ({ default: m.ComponentBrowser })));
const RouteMap = lazy(() => import('./pages/dev/RouteMap').then(m => ({ default: m.RouteMap })));
const DataBrowser = lazy(() => import('./pages/dev/DataBrowser').then(m => ({ default: m.DataBrowser })));
const WordPressMigration = lazy(() => import('./pages/dev/WordPressMigration').then(m => ({ default: m.WordPressMigration })));
const DesignSystem = lazy(() => import('./pages/dev/DesignSystem').then(m => ({ default: m.DesignSystem })));
const SectionStyles = lazy(() => import('./pages/dev/SectionStyles').then(m => ({ default: m.SectionStyles })));
const GuidelinesBrowser = lazy(() => import('./pages/dev/GuidelinesBrowser').then(m => ({ default: m.GuidelinesBrowser })));
const ContentBrowser = lazy(() => import('./pages/dev/ContentBrowser').then(m => ({ default: m.ContentBrowser })));
const EmailPreviews = lazy(() => import('./pages/dev/EmailPreviews').then(m => ({ default: m.EmailPreviews })));
const SystemConfig = lazy(() => import('./pages/dev/SystemConfig').then(m => ({ default: m.SystemConfig })));
const LaunchChecklist = lazy(() => import('./pages/dev/LaunchChecklist').then(m => ({ default: m.LaunchChecklist })));
const ImageAssetBrowser = lazy(() => import('./pages/dev/ImageAssetBrowser').then(m => ({ default: m.ImageAssetBrowser })));
const PatternBrowser = lazy(() => import('./pages/dev/PatternBrowser').then(m => ({ default: m.PatternBrowser })));
const BlockStyleBrowser = lazy(() => import('./pages/dev/BlockStyleBrowser').then(m => ({ default: m.BlockStyleBrowser })));
const BlockBrowser = lazy(() => import('./pages/dev/BlockBrowser').then(m => ({ default: m.BlockBrowser })));
const TemplateBrowser = lazy(() => import('./pages/dev/TemplateBrowser').then(m => ({ default: m.TemplateBrowser })));
const TemplatePartBrowser = lazy(() => import('./pages/dev/TemplatePartBrowser').then(m => ({ default: m.TemplatePartBrowser })));
const IncFolderBrowser = lazy(() => import('./pages/dev/IncFolderBrowser').then(m => ({ default: m.IncFolderBrowser })));
const IconBrowser = lazy(() => import('./pages/dev/IconBrowser').then(m => ({ default: m.IconBrowser })));
const ThemeJsonViewer = lazy(() => import('./pages/dev/ThemeJsonViewer').then(m => ({ default: m.ThemeJsonViewer })));
const PresetsBrowser = lazy(() => import('./pages/dev/PresetsBrowser').then(m => ({ default: m.PresetsBrowser })));
const OllieThemeReference = lazy(() => import('./pages/dev/OllieThemeReference').then(m => ({ default: m.OllieThemeReference })));
const PrototypeLanding = lazy(() => import('./pages/dev/PrototypeLanding').then(m => ({ default: m.PrototypeLanding })));
const ReferenceLanding = lazy(() => import('./pages/dev/ReferenceLanding').then(m => ({ default: m.ReferenceLanding })));
const OperationsLanding = lazy(() => import('./pages/dev/OperationsLanding').then(m => ({ default: m.OperationsLanding })));
const EEditionsCommerce = lazy(() => import('./pages/dev/EEditionsCommerce').then(m => ({ default: m.EEditionsCommerce })));
const FormBuilderPreview = lazy(() => import('./pages/dev/FormBuilderPreview').then(m => ({ default: m.FormBuilderPreview })));
const DevLayout = lazy(() => import('./components/layouts/DevLayout').then(m => ({ default: m.DevLayout })));

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

/**
 * Small redirect component for dynamic params.
 */
const BorgeRedirect = () => {
  const parts = window.location.pathname.split('/');
  const slug = parts[parts.length - 1] || '';
  return <Navigate to={`/geborg/${slug}`} replace />;
};

// ──────────────────────────────────────────────
// Router Configuration (Data Mode)
// ──────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        // Bare routes (no Header/Footer)
        children: [
          { path: "templates/newsletter/tuesday", Component: TuesdayNewsletter },
          { path: "templates/newsletter/friday", Component: FridayNewsletter },
        ]
      },
      {
        // Dev Tools
        Component: DevLayout,
        children: [
          { path: "ontwikkelaar", Component: DevHub },
          { path: "ontwikkelaar/lansering", Component: LaunchChecklist },
          { path: "ontwikkelaar/komponente", Component: ComponentBrowser },
          { path: "ontwikkelaar/roetes", Component: RouteMap },
          { path: "ontwikkelaar/data", Component: DataBrowser },
          { path: "ontwikkelaar/wordpress/*", Component: WordPressMigration },
          { path: "ontwikkelaar/ontwerpstelsel/*", Component: DesignSystem },
          { path: "ontwikkelaar/tokens", element: <Navigate to="/ontwikkelaar/ontwerpstelsel" replace /> },
          { path: "ontwikkelaar/stylgids", element: <Navigate to="/ontwikkelaar/ontwerpstelsel" replace /> },
          { path: "ontwikkelaar/token-kartering", element: <Navigate to="/ontwikkelaar/ontwerpstelsel" replace /> },
          { path: "ontwikkelaar/afdeling-style", Component: SectionStyles },
          { path: "ontwikkelaar/afdeling-style/:usage", Component: SectionStyles },
          { path: "ontwikkelaar/riglyne", Component: GuidelinesBrowser },
          { path: "ontwikkelaar/inhoud", Component: ContentBrowser },
          { path: "ontwikkelaar/e-pos-voorskou", Component: EmailPreviews },
          { path: "ontwikkelaar/stelselkonfig", Component: SystemConfig },
          { path: "ontwikkelaar/beelde", Component: ImageAssetBrowser },
          { path: "ontwikkelaar/patrone", Component: PatternBrowser },
          { path: "ontwikkelaar/patrone/:subfolder", Component: PatternBrowser },
          { path: "ontwikkelaar/blok-styl", Component: BlockStyleBrowser },
          { path: "ontwikkelaar/blok-styl/:category", Component: BlockStyleBrowser },
          { path: "ontwikkelaar/blokke", Component: BlockBrowser },
          { path: "ontwikkelaar/blokke/:domain", Component: BlockBrowser },
          { path: "ontwikkelaar/sjablone", Component: TemplateBrowser },
          { path: "ontwikkelaar/sjablone/:category", Component: TemplateBrowser },
          { path: "ontwikkelaar/sjablone-onderdeel", Component: TemplatePartBrowser },
          { path: "ontwikkelaar/sjablone-onderdeel/:area", Component: TemplatePartBrowser },
          { path: "ontwikkelaar/inc-map", Component: IncFolderBrowser },
          { path: "ontwikkelaar/ikone", Component: IconBrowser },
          { path: "ontwikkelaar/ikone/:type", Component: IconBrowser },
          { path: "ontwikkelaar/temaJson/*", Component: ThemeJsonViewer },
          { path: "ontwikkelaar/voorinstellings/*", Component: PresetsBrowser },
          { path: "ontwikkelaar/ollie/*", Component: OllieThemeReference },
          { path: "ontwikkelaar/prototipe", Component: PrototypeLanding },
          { path: "ontwikkelaar/verwysings", Component: ReferenceLanding },
          { path: "ontwikkelaar/bedrywighede", Component: OperationsLanding },
          { path: "ontwikkelaar/e-editions-handel/*", Component: EEditionsCommerce },
          { path: "ontwikkelaar/form-builder-preview", Component: FormBuilderPreview },
        ]
      },
      {
        // Checkout layout
        Component: CheckoutLayout,
        children: [
          { path: "betaal", Component: CheckoutPage },
          { path: "bestelling-bevestiging", Component: OrderConfirmationPage },
          { path: "checkout", Component: CheckoutPage },
          { path: "order-confirmation", Component: OrderConfirmationPage },
        ]
      },
      {
        // Main layout (Header + Footer)
        Component: MainLayout,
        children: [
          { index: true, Component: Home },
          
          // Categories
          { path: "nuus", element: <CategoryPage categoryName="Nuus" /> },
          { path: "sport", element: <CategoryPage categoryName="Sport" /> },
          { path: "skole", element: <CategoryPage categoryName="Skole" /> },
          { path: "sake", element: <CategoryPage categoryName="Sake" /> },
          { path: "leefstyl", element: <CategoryPage categoryName="Leefstyl" /> },
          { path: "dink", element: <CategoryPage categoryName="Dink" /> },
          { path: "skolerugby", element: <CategoryPage categoryName="Skole rugby" /> },
          { path: "onderwerp/:tagSlug", Component: TagArchivePage },
          
          // Legacy Categories
          { path: "news", element: <CategoryPage categoryName="Nuus" /> },
          { path: "schools", element: <CategoryPage categoryName="Skole" /> },
          { path: "business", element: <CategoryPage categoryName="Sake" /> },
          { path: "lifestyle", element: <CategoryPage categoryName="Leefstyl" /> },
          { path: "opinion", element: <CategoryPage categoryName="Dink" /> },
          { path: "schools-rugby", element: <CategoryPage categoryName="Skole rugby" /> },
          { path: "tag/:tagSlug", Component: TagArchivePage },
          
          // Competitions
          { path: "kompetisies", Component: CompetitionsPage },
          { path: "kompetisies/:slug", Component: CompetitionSinglePage },
          { path: "kompetisie-terme-en-voorwaardes", Component: CompetitionTermsPage },
          { path: "competition-terms-and-conditions", Component: CompetitionTermsPage },
          { path: "competitions", Component: CompetitionsPage },
          { path: "competitions/:slug", Component: CompetitionSinglePage },
          
          // Sponsored Content
          { path: "geborg", Component: SponsorsPage },
          { path: "geborg/:slug", Component: SponsorArchivePage },
          { path: "borg/:slug", Component: SponsorArchivePage },
          { path: "sponsor/:slug", Component: SponsorArchivePage },
          
          // Articles
          { path: "artikel/:slug", Component: ArticlePage },
          { path: "artikel/demo", Component: ArticlePage },
          { path: "article/:slug", Component: ArticlePage },
          
          // Submit
          { path: "stuur-in", Component: SubmitHubPage },
          { path: "stuur-in/storie", Component: SubmitStoryPage },
          { path: "stuur-in/lesersbrief", Component: SubmitLetterPage },
          { path: "stuur-in/terugvoer", Component: SubmitFeedbackPage },
          { path: "stuur-in/shoutout", Component: SubmitShoutoutPage },
          { path: "submit", Component: SubmitHubPage },
          { path: "submit/story", Component: SubmitStoryPage },
          { path: "submit/letter-to-the-editor", Component: SubmitLetterPage },
          { path: "submit/feedback", Component: SubmitFeedbackPage },
          { path: "submit/shoutout", Component: SubmitShoutoutPage },
          
          // E-Editions
          { path: "e-uitgawes", Component: EEditionsPage },
          { path: "my-e-uitgawes", Component: MyEEditionsPage },
          { path: "e-uitgawe/:slug", Component: SingleEEditionPage },
          { path: "e-uitgawes/:slug", Component: SingleEEditionPage },
          { path: "e-editions", Component: EEditionsPage },
          { path: "my-e-editions", Component: MyEEditionsPage },
          { path: "latest-e-editions", Component: EEditionsPage },
          { path: "e-edition/:id", Component: SingleEEditionPage },
          
          // Account
          { path: "my-rekening", Component: MyAccount },
          { path: "my-account", Component: MyAccount },
          
          // Informational
          { path: "oor-ons", Component: About },
          { path: "oor-ons/redaksie", Component: TeamPage },
          { path: "kontak", Component: ContactPage },
          { path: "adverteer", Component: Advertise },
          { path: "adverteer/geklassifiseerd", Component: ClassifiedsPage },
          { path: "adverteer/vertoonadvertensies", Component: DisplayAdvertisingPage },
          { path: "adverteer/pamflette", Component: LeafletsPage },
          { path: "adverteer/geborgde-inhoud", Component: SponsoredContentPage },
          { path: "adverteer/borgskappe", Component: SponsorshipsPage },
          { path: "adverteer/bylaes", Component: SupplementsPage },
          { path: "about", Component: About },
          { path: "about/team", Component: TeamPage },
          { path: "contact", Component: ContactPage },
          { path: "advertise", Component: Advertise },
          
          // Advertise sub-pages
          { path: "adverteer/classifieds", Component: ClassifiedsPage },
          { path: "adverteer/display-advertising", Component: DisplayAdvertisingPage },
          { path: "adverteer/leaflets", Component: LeafletsPage },
          { path: "adverteer/sponsored-content", Component: SponsoredContentPage },
          { path: "adverteer/sponsorships", Component: SponsorshipsPage },
          { path: "adverteer/supplements", Component: SupplementsPage },
          { path: "advertise/classifieds", Component: ClassifiedsPage },
          { path: "advertise/display-advertising", Component: DisplayAdvertisingPage },
          { path: "advertise/leaflets", Component: LeafletsPage },
          { path: "advertise/sponsored-content", Component: SponsoredContentPage },
          { path: "advertise/sponsorships", Component: SponsorshipsPage },
          { path: "advertise/supplements", Component: SupplementsPage },
          
          // Sitemap, Weather, Traffic
          { path: "sitemap", Component: SitemapPage },
          { path: "inhoudsopgawe", Component: SitemapPage },
          { path: "weer", Component: WeatherPage },
          { path: "verkeer", Component: TrafficPage },
          { path: "weather", Component: WeatherPage },
          { path: "traffic", Component: TrafficPage },
          
          // New Content Pages
          { path: "doodsberrigte", Component: ObituariesPage },
          { path: "multimedia", Component: MultimediaPage },
          { path: "nuusbrief-argief", Component: NewsletterArchivePage },
          { path: "doodsberrigte/:slug", Component: SingleObituaryPage },
          { path: "multimedia/:slug", Component: SingleMultimediaPage },
          { path: "obituaries", Component: ObituariesPage },
          { path: "multimedia-archive", Component: MultimediaPage },
          { path: "newsletter-archive", Component: NewsletterArchivePage },
          { path: "obituaries/:slug", Component: SingleObituaryPage },
          { path: "multimedia-archive/:slug", Component: SingleMultimediaPage },
          
          // Policies
          { path: "beleid", Component: PoliciesPage },
          { path: "beleid/privaatheidsbeleid", Component: PrivacyPolicyPage },
          { path: "beleid/koekiebeleid", Component: CookiePolicyPage },
          { path: "beleid/terme-en-voorwaardes", Component: TermsAndConditionsPage },
          { path: "beleid/paia", Component: PAIAPage },
          { path: "beleid/gebruikersreels", Component: UserRulesPage },
          { path: "beleid/advertensie-riglyne", Component: AdvertisingGuidelinesPage },
          { path: "beleid/perskode", Component: PressCodePage },
          { path: "beleid/ki-beleid", Component: AIPolicyPage },
          { path: "beleid/kommentaarbeleid", Component: CommentPolicyPage },
          { path: "beleid/terugsendingsbeleid", Component: ReturnsPolicyPage },
          { path: "beleid/klagteprosedure", Component: ComplaintsProcedurePage },
          { path: "policies", Component: PoliciesPage },
          { path: "policies/privacy-policy", Component: PrivacyPolicyPage },
          { path: "policies/cookie-policy", Component: CookiePolicyPage },
          { path: "policies/koekiebeleid", Component: CookiePolicyPage },
          { path: "policies/terms-and-conditions", Component: TermsAndConditionsPage },
          { path: "policies/paia", Component: PAIAPage },
          { path: "policies/user-rules", Component: UserRulesPage },
          { path: "policies/advertising-guidelines", Component: AdvertisingGuidelinesPage },
          { path: "policies/press-code", Component: PressCodePage },
          { path: "policies/ai-policy", Component: AIPolicyPage },
          { path: "policies/comment-policy", Component: CommentPolicyPage },
          { path: "policies/returns-policy", Component: ReturnsPolicyPage },
          { path: "policies/complaints-procedure", Component: ComplaintsProcedurePage },
          
          // Subscribe / Cart
          { path: "inteken", Component: SubscribeEEdition },
          { path: "inteken/e-uitgawe", Component: SubscribeEEdition },
          { path: "inteken/e-uitgawe/:planId", Component: SingleSubscriptionProduct },
          { path: "inteken/aflewering", Component: SubscribeDelivery },
          { path: "mandjie", Component: CartPage },
          { path: "subscribe", Component: SubscribeEEdition },
          { path: "subscribe/e-edition", Component: SubscribeEEdition },
          { path: "subscribe/e-edition/:planId", Component: SingleSubscriptionProduct },
          { path: "subscribe/delivery", Component: SubscribeDelivery },
          { path: "cart", Component: CartPage },
          { path: "basket", Component: CartPage },
          
          // FAQ / Events / Search
          { path: "vrae", Component: FAQPage },
          { path: "faqs", Component: FAQPage },
          { path: "faq", Component: FAQPage },
          { path: "gebeure", Component: EventsPage },
          { path: "gebeure/dien-in", Component: SubmitEventPage },
          { path: "stuur-gebeurtenis-in", Component: SubmitEventPage },
          { path: "gebeure/:id", Component: SingleEventPage },
          { path: "events", Component: EventsPage },
          { path: "events/submit", Component: SubmitEventPage },
          { path: "events/:id", Component: SingleEventPage },
          { path: "soek", Component: SearchResultsPage },
          { path: "search", Component: SearchResultsPage },
          
          // Authors
          { path: "skrywer/:authorName", Component: AuthorPage },
          { path: "author/:authorName", Component: AuthorPage },
          
          // Newsletter
          { path: "nuusbrief-inteken", Component: NewsletterSubscribe },
          { path: "newsletter-subscribe", Component: NewsletterSubscribe },
          
          // Account & Newsletter Management
          { path: "rekening-aktivering", Component: AccountActivationPage },
          { path: "nuusbrief-inteken-bevestiging", Component: NewsletterConfirmationPage },
          { path: "nuusbrief-herbetrokkenheid", Component: NewsletterReEngagementPage },
          { path: "nuusbrief-uitskryf-bevestiging", Component: NewsletterUnsubscribeConfirmPage },
          { path: "nuusbrief-uitskryf-sukses", Component: NewsletterUnsubscribeSuccessPage },
          { path: "bestuur-my-nuusbriewe", Component: ManageNewslettersPage },
          { path: "account-activation", Component: AccountActivationPage },
          { path: "mailpoet-newsletter-subscribe-confirmation", Component: NewsletterConfirmationPage },
          { path: "mailpoet-re-engagement-page", Component: NewsletterReEngagementPage },
          { path: "mailpoet-unsubscribe-confirmation-page", Component: NewsletterUnsubscribeConfirmPage },
          { path: "mailpoet-unsubscribe-success-page", Component: NewsletterUnsubscribeSuccessPage },
          { path: "manage-my-newsletters", Component: ManageNewslettersPage },
          
          // Registration
          { path: "registreer", Component: RegisterPage },
          { path: "register", Component: RegisterPage },
          
          // Thank You Pages
          { path: "dankie-advertensie-navraag", Component: ThankYouAdvertisingPage },
          { path: "dankie-vir-kontak", Component: ThankYouContactPage },
          { path: "dankie-vir-nuusbrief-inskrywing", Component: ThankYouNewsletterPage },
          { path: "dankie-vir-registrasie", Component: ThankYouRegistrationPage },
          { path: "dankie-vir-jou-indiening", Component: ThankYouSubmissionPage },
          { path: "dankie-vir-kompetisie-inskrywing", Component: ThankYouCompetitionPage },
          { path: "thank-you-advertising-enquiry", Component: ThankYouAdvertisingPage },
          { path: "thank-you-for-contacting-us", Component: ThankYouContactPage },
          { path: "thank-you-for-subscribing-to-our-newsletter", Component: ThankYouNewsletterPage },
          { path: "thank-you-for-your-registration", Component: ThankYouRegistrationPage },
          { path: "thank-you-for-your-submission", Component: ThankYouSubmissionPage },
          { path: "thank-you-for-entering-our-competition", Component: ThankYouCompetitionPage },
          
          // Offline
          { path: "vanlyn", Component: OfflinePage },
          { path: "offline", Component: OfflinePage },
          
          // Redirects
          { path: "beleide", element: <Navigate to="/beleid" replace /> },
          { path: "beleide/privaatheidsbeleid", element: <Navigate to="/beleid/privaatheidsbeleid" replace /> },
          { path: "beleide/koekiebeleid", element: <Navigate to="/beleid/koekiebeleid" replace /> },
          { path: "beleide/terme-en-voorwaardes", element: <Navigate to="/beleid/terme-en-voorwaardes" replace /> },
          { path: "beleide/paia", element: <Navigate to="/beleid/paia" replace /> },
          { path: "beleide/gebruikersreels", element: <Navigate to="/beleid/gebruikersreels" replace /> },
          { path: "beleide/advertensie-riglyne", element: <Navigate to="/beleid/advertensie-riglyne" replace /> },
          { path: "beleide/perskode", element: <Navigate to="/beleid/perskode" replace /> },
          { path: "beleide/ki-beleid", element: <Navigate to="/beleid/ki-beleid" replace /> },
          { path: "beleide/kommentaarbeleid", element: <Navigate to="/beleid/kommentaarbeleid" replace /> },
          { path: "beleide/terugsendingsbeleid", element: <Navigate to="/beleid/terugsendingsbeleid" replace /> },
          { path: "beleide/klagteprosedure", element: <Navigate to="/beleid/klagteprosedure" replace /> },
          { path: "borge", element: <Navigate to="/geborg" replace /> },
          { path: "borge/:slug", Component: BorgeRedirect },
          { path: "foundations", element: <Navigate to="/ontwikkelaar/ontwerpstelsel" replace /> },
          
          // 404 (catch-all)
          { path: "*", Component: NotFoundPage },
        ]
      }
    ]
  }
]);