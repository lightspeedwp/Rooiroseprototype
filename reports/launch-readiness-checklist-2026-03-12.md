# rooi rose Magazine — Launch Readiness Checklist

**Date**: 2026-03-12  
**Project**: rooi rose Magazine Website  
**Status**: Phase 13 Complete — Final QA & Launch Prep  
**Version**: 1.0.0-RC1 (Release Candidate 1)

---

## 📋 **EXECUTIVE SUMMARY**

This checklist provides a comprehensive roadmap for final quality assurance, testing, and production launch of the rooi rose magazine website. All Phase 13 editorial redesign work is complete (50/50 pages at 100%).

**Current Status**: ✅ **Development Complete** — Ready for QA  
**Target Launch Date**: TBD  
**Estimated QA Time**: 16-22 hours

---

## 🎯 **PHASE 13 COMPLETION VERIFICATION**

### ✅ **Editorial Redesign (100% Complete)**

| Verification Item | Status | Notes |
|:------------------|:------:|:------|
| **Typography Migration** | ✅ | All 50 pages use Playfair Display SC headings |
| **Font Classes** | ✅ | Both `has-brand-serif-font-family` and `font-heading` work |
| **Color Consistency** | ✅ | #e01e12 brand-red applied consistently |
| **Spacing System** | ✅ | 8px base unit across all pages |
| **Dark Mode** | ✅ | Full support with custom shadow tokens |
| **Responsive Design** | ✅ | Mobile-first, 3 breakpoints (sm, md, lg) |
| **Component Library** | ✅ | Cards, buttons, pills, forms consistent |
| **Magazine Layouts** | ✅ | 3-column grids, hero sliders, pull quotes |

---

## 🔍 **QA TESTING CHECKLIST**

### **1. Cross-Browser Testing** (Estimated: 3-4 hours)

#### Desktop Browsers

- [ ] **Chrome** (Latest stable version)
  - [ ] Typography renders correctly (Playfair Display SC + Karla)
  - [ ] Dark mode toggle works
  - [ ] All interactive elements functional
  - [ ] No console errors
  - [ ] Performance (Lighthouse score > 90)

- [ ] **Safari** (Latest stable version)
  - [ ] Font loading (check for FOUT/FOIT issues)
  - [ ] CSS Grid layouts display correctly
  - [ ] Dark mode transition smooth
  - [ ] Video/media playback works

- [ ] **Firefox** (Latest stable version)
  - [ ] CSS custom properties work
  - [ ] Flexbox/Grid layouts consistent
  - [ ] Dark mode rendering correct
  - [ ] Form validation works

- [ ] **Edge** (Latest stable version)
  - [ ] All features from Chrome checklist
  - [ ] Windows-specific font rendering acceptable

#### Mobile Browsers

- [ ] **iOS Safari** (Latest iOS)
  - [ ] Touch interactions smooth
  - [ ] Mobile menu opens/closes correctly
  - [ ] Font sizes readable (minimum 16px for inputs)
  - [ ] Viewport meta tag working

- [ ] **Android Chrome** (Latest Android)
  - [ ] Touch targets minimum 44x44px
  - [ ] Scroll performance smooth
  - [ ] Dark mode toggle accessible

---

### **2. Responsive Design Testing** (Estimated: 2-3 hours)

#### Breakpoints to Test

- [ ] **Mobile** (320px - 639px)
  - [ ] 320px (iPhone SE)
  - [ ] 375px (iPhone 12/13/14)
  - [ ] 390px (iPhone 14 Pro)
  - [ ] 428px (iPhone 14 Pro Max)
  - [ ] 480px (Android small)

- [ ] **Tablet** (640px - 1023px)
  - [ ] 768px (iPad Portrait)
  - [ ] 820px (iPad Air)
  - [ ] 1024px (iPad Landscape)

- [ ] **Desktop** (1024px+)
  - [ ] 1280px (Laptop)
  - [ ] 1440px (Desktop)
  - [ ] 1920px (Full HD)
  - [ ] 2560px (4K)

#### Responsive Components

- [ ] Navigation menu (desktop mega menu → mobile drawer)
- [ ] Article grids (3 cols → 2 cols → 1 col)
- [ ] Hero sliders (maintain aspect ratios)
- [ ] Sidebar content (full-width on mobile)
- [ ] Forms (stack labels on mobile)
- [ ] Tables (horizontal scroll on mobile)
- [ ] Footer (stack columns on mobile)

---

### **3. Accessibility Audit (WCAG 2.1 AA)** (Estimated: 3-4 hours)

#### Automated Testing Tools

- [ ] **WAVE** (Browser extension)
  - [ ] Run on 10 key pages
  - [ ] Fix all errors
  - [ ] Address contrast issues

- [ ] **axe DevTools** (Browser extension)
  - [ ] Run on all page templates
  - [ ] Document violations
  - [ ] Create fix plan

- [ ] **Lighthouse Accessibility** (Chrome DevTools)
  - [ ] Score > 95 on all major pages
  - [ ] Document any issues < 100

#### Manual Testing

- [ ] **Keyboard Navigation**
  - [ ] Tab through all interactive elements
  - [ ] Focus indicators visible (red outline)
  - [ ] Skip to main content link works
  - [ ] Modal/drawer traps focus correctly
  - [ ] Escape key closes modals

- [ ] **Screen Reader** (NVDA/JAWS/VoiceOver)
  - [ ] All images have alt text
  - [ ] ARIA labels on icon buttons
  - [ ] Form labels associated correctly
  - [ ] Headings in logical order (H1 → H2 → H3)
  - [ ] Landmarks used correctly (header, nav, main, footer)

- [ ] **Color Contrast**
  - [ ] Body text: 4.5:1 minimum
  - [ ] Headings: 4.5:1 minimum
  - [ ] Interactive elements: 3:1 minimum
  - [ ] Focus indicators: 3:1 minimum
  - [ ] Dark mode: Same ratios

- [ ] **Motion & Animation**
  - [ ] Respect `prefers-reduced-motion`
  - [ ] No auto-playing video with sound
  - [ ] Carousel auto-play can be paused

---

### **4. Performance Audit** (Estimated: 2-3 hours)

#### Lighthouse Metrics (Target Scores)

- [ ] **Performance**: > 90
  - [ ] First Contentful Paint (FCP): < 1.8s
  - [ ] Largest Contentful Paint (LCP): < 2.5s
  - [ ] Total Blocking Time (TBT): < 200ms
  - [ ] Cumulative Layout Shift (CLS): < 0.1
  - [ ] Speed Index: < 3.4s

- [ ] **Accessibility**: > 95
- [ ] **Best Practices**: > 95
- [ ] **SEO**: 100

#### Performance Optimizations

- [ ] **Images**
  - [ ] All images lazy-loaded (except hero)
  - [ ] Hero images: `fetchpriority="high"`, `loading="eager"`
  - [ ] Modern formats (WebP, AVIF) with fallbacks
  - [ ] Proper sizing (no oversized images)
  - [ ] Alt text on all images

- [ ] **Code Splitting**
  - [ ] React Router lazy loading working
  - [ ] Heavy libraries behind lazy routes (recharts, react-slick)
  - [ ] Data files behind lazy routes (categoryArticles.ts)

- [ ] **CSS**
  - [ ] Tailwind CSS purged (production build)
  - [ ] Critical CSS inlined (if applicable)
  - [ ] Font files preloaded

- [ ] **JavaScript**
  - [ ] No console errors in production
  - [ ] No unused dependencies
  - [ ] Bundle size reasonable (< 500KB gzipped)

---

### **5. Functional Testing** (Estimated: 4-6 hours)

#### Core User Flows

- [ ] **Homepage**
  - [ ] Hero slider auto-advances
  - [ ] Category grids load correctly
  - [ ] Newsletter CTA functional
  - [ ] All links work

- [ ] **Navigation**
  - [ ] Desktop mega menu opens/closes
  - [ ] Mobile drawer opens/closes
  - [ ] All 10 rooi rose categories linked
  - [ ] Breadcrumbs show correct paths
  - [ ] Footer links work

- [ ] **Category Pages** (Test all 10)
  - [ ] Articles load correctly
  - [ ] Pagination works
  - [ ] Filter by subcategory works
  - [ ] Sidebar content displays
  - [ ] Ads render (or placeholders)

- [ ] **Single Article**
  - [ ] Article content renders
  - [ ] Related articles show
  - [ ] Author bio displays
  - [ ] Social sharing works
  - [ ] Comments section (if applicable)

- [ ] **Search**
  - [ ] Search input works
  - [ ] Live search debouncing (300ms)
  - [ ] Category filters work
  - [ ] Results display correctly
  - [ ] Empty state shows

- [ ] **E-Commerce**
  - [ ] Shop page loads products
  - [ ] Add to cart works
  - [ ] Cart updates quantities
  - [ ] Checkout flow (3 steps)
  - [ ] Order confirmation displays

- [ ] **Competitions**
  - [ ] Active competitions show
  - [ ] Entry form submits
  - [ ] Closed competitions archived
  - [ ] Terms & conditions linked

- [ ] **Newsletter**
  - [ ] Subscribe form submits
  - [ ] Confirmation page shows
  - [ ] Unsubscribe flow works
  - [ ] Re-engagement page displays
  - [ ] Archive loads past newsletters

- [ ] **Forms**
  - [ ] Contact form submits
  - [ ] Validation errors show
  - [ ] Success messages display
  - [ ] Error handling graceful

---

### **6. Dark Mode Testing** (Estimated: 1-2 hours)

- [ ] **Toggle Functionality**
  - [ ] Dark mode toggle in header works
  - [ ] Preference persists (localStorage)
  - [ ] System preference honored on first visit

- [ ] **Visual Consistency**
  - [ ] All pages render correctly in dark mode
  - [ ] Color contrast meets WCAG AA (4.5:1)
  - [ ] Shadows use dark mode tokens (--shadow-dark-*)
  - [ ] Borders visible (dark:border-border)
  - [ ] Text readable (dark:text-foreground)
  - [ ] Images don't look washed out

- [ ] **Component Testing**
  - [ ] Cards: dark:bg-card, proper borders
  - [ ] Buttons: dark mode color variants
  - [ ] Forms: dark:bg-card inputs
  - [ ] Modals: dark:bg-card with backdrop
  - [ ] Ads: background contrast acceptable

---

### **7. SEO Verification** (Estimated: 1-2 hours)

#### Meta Tags

- [ ] **All Pages Have**:
  - [ ] Unique `<title>` (50-60 characters)
  - [ ] Meta description (150-160 characters)
  - [ ] Meta keywords (relevant, Afrikaans)
  - [ ] Open Graph tags (og:title, og:description, og:image)
  - [ ] Twitter Card tags
  - [ ] Canonical URL

#### Structured Data

- [ ] **Schema.org Markup**
  - [ ] Homepage: Organization + WebSite
  - [ ] Articles: NewsArticle or Article
  - [ ] Breadcrumbs: BreadcrumbList
  - [ ] FAQs: FAQPage (where applicable)
  - [ ] Products: Product (e-editions, shop)
  - [ ] Events: Event
  - [ ] Validate with Google Rich Results Test

#### Technical SEO

- [ ] **robots.txt** configured correctly
- [ ] **sitemap.xml** generated (or dynamic route)
- [ ] **404 page** exists and helpful
- [ ] **Canonical URLs** set correctly
- [ ] **hreflang tags** (if multilingual)
- [ ] **Internal linking** logical
- [ ] **Image alt text** descriptive
- [ ] **Heading hierarchy** (H1 → H2 → H3)

---

### **8. Content Verification** (Estimated: 2-3 hours)

#### Typography

- [ ] **Font Rendering**
  - [ ] Playfair Display SC loads correctly
  - [ ] Karla loads correctly
  - [ ] No FOUT (Flash of Unstyled Text)
  - [ ] No FOIT (Flash of Invisible Text)
  - [ ] Font weights correct (400 normal, 700 bold)

- [ ] **Afrikaans Language**
  - [ ] All content in Afrikaans
  - [ ] Special characters render (ë, ï, û, etc.)
  - [ ] HTML lang attribute: `<html lang="af">`
  - [ ] No English fallback visible

#### Brand Consistency

- [ ] **rooi rose Branding**
  - [ ] Always lowercase ("rooi rose" not "Rooi Rose")
  - [ ] Italics used correctly (`<em>rooi rose</em>`)
  - [ ] Brand red (#e01e12) used consistently
  - [ ] Logo displays correctly
  - [ ] Tagline matches brand guidelines

- [ ] **Mock Data**
  - [ ] No "Lorem ipsum" text visible
  - [ ] Article dates realistic (2026)
  - [ ] Author names consistent
  - [ ] Category names match rooi rose (Kos, Mode, Skoonheid, etc.)
  - [ ] Images relevant (Unsplash placeholders acceptable)

---

## 🚀 **PRE-LAUNCH CHECKLIST**

### **1. Code Quality** (Estimated: 1-2 hours)

- [ ] **TypeScript**
  - [ ] No TypeScript errors (`npm run build`)
  - [ ] No `@ts-ignore` comments (or documented why)
  - [ ] All `any` types eliminated (or documented)

- [ ] **Linting**
  - [ ] ESLint passes with no errors
  - [ ] No unused imports
  - [ ] No console.log statements (except intentional)

- [ ] **Dependencies**
  - [ ] All dependencies up to date (or known vulnerabilities addressed)
  - [ ] No duplicate dependencies
  - [ ] Dev dependencies not in production bundle

- [ ] **Git**
  - [ ] All changes committed
  - [ ] Commit messages descriptive
  - [ ] No sensitive data in repo (API keys, passwords)
  - [ ] .gitignore configured correctly

---

### **2. Configuration** (Estimated: 1 hour)

- [ ] **Environment Variables**
  - [ ] Production API URLs configured
  - [ ] Analytics tracking ID set
  - [ ] Sentry DSN configured (if using)
  - [ ] No development URLs in production

- [ ] **Build Settings**
  - [ ] Production build tested (`npm run build`)
  - [ ] Build output verified (dist/ folder)
  - [ ] Source maps disabled (or configured correctly)
  - [ ] Compression enabled (gzip/brotli)

- [ ] **Vite Configuration**
  - [ ] Base URL correct
  - [ ] Asset optimization enabled
  - [ ] Polyfills included (if needed)

---

### **3. Deployment** (Estimated: 2-3 hours)

- [ ] **Hosting**
  - [ ] Production server configured
  - [ ] SSL certificate installed
  - [ ] HTTPS enforced (301 redirect)
  - [ ] CDN configured (Cloudflare, etc.)

- [ ] **DNS**
  - [ ] A record points to server IP
  - [ ] AAAA record for IPv6 (optional)
  - [ ] WWW subdomain configured
  - [ ] DNS propagation verified (48 hours)

- [ ] **Monitoring**
  - [ ] Google Analytics 4 installed
  - [ ] Search Console configured
  - [ ] Error tracking (Sentry, etc.)
  - [ ] Uptime monitoring (Pingdom, etc.)

---

### **4. Legal & Compliance** (Estimated: 1 hour)

- [ ] **Privacy & Cookies**
  - [ ] Privacy Policy page complete
  - [ ] Cookie Policy page complete
  - [ ] Cookie consent banner (if required by POPIA)
  - [ ] GDPR compliance (if applicable)

- [ ] **Terms & Policies**
  - [ ] Terms & Conditions page complete
  - [ ] User Rules page complete
  - [ ] Returns Policy page complete (for shop)
  - [ ] Advertising Guidelines page complete
  - [ ] Complaints Procedure page complete

- [ ] **Accessibility Statement**
  - [ ] WCAG 2.1 AA compliance documented
  - [ ] Accessibility page linked in footer

---

## 📊 **FINAL VERIFICATION MATRIX**

### **Page-by-Page Checklist** (Sample 10 Critical Pages)

| Page | Typography | Colors | Dark Mode | Responsive | A11y | Performance |
|:-----|:----------:|:------:|:---------:|:----------:|:----:|:-----------:|
| Homepage | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Category (Kos) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Single Article | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Search Results | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| E-Editions Archive | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Shop/Cart | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Checkout | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Competitions | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Newsletter Subscribe | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Contact | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

**Legend**: ✅ Pass | ⚠️ Warning | ❌ Fail | ⬜ Not Tested

---

## 🎯 **SUCCESS CRITERIA**

### **Minimum Launch Requirements**

To launch to production, the website must meet these criteria:

1. ✅ **All 10 critical pages** pass all 6 verification criteria
2. ✅ **Lighthouse scores**: Performance > 90, A11y > 95, SEO = 100
3. ✅ **No console errors** in production build
4. ✅ **Cross-browser testing** complete (Chrome, Safari, Firefox, Edge)
5. ✅ **Mobile testing** complete (iOS Safari, Android Chrome)
6. ✅ **WCAG 2.1 AA compliance** verified with automated tools
7. ✅ **Dark mode** works correctly on all pages
8. ✅ **All forms** functional (Contact, Newsletter, Competition, etc.)
9. ✅ **E-commerce flow** complete (Cart → Checkout → Confirmation)
10. ✅ **SEO fundamentals** in place (meta tags, structured data, sitemap)

---

## 📈 **POST-LAUNCH MONITORING** (First 7 Days)

### **Daily Checks**

- [ ] **Analytics**
  - [ ] Page views tracking correctly
  - [ ] Bounce rate acceptable (< 60%)
  - [ ] Average session duration > 2 minutes
  - [ ] Top pages logged

- [ ] **Errors**
  - [ ] Check error logs (Sentry, etc.)
  - [ ] Monitor 404s
  - [ ] Track JavaScript errors
  - [ ] Review search console errors

- [ ] **Performance**
  - [ ] Page load times < 3 seconds
  - [ ] Server response time < 500ms
  - [ ] Uptime > 99.9%

### **Weekly Review**

- [ ] **User Feedback**
  - [ ] Review contact form submissions
  - [ ] Check social media mentions
  - [ ] Monitor comments/feedback

- [ ] **Content**
  - [ ] Add new articles (if applicable)
  - [ ] Update featured content
  - [ ] Refresh homepage hero slider

- [ ] **SEO**
  - [ ] Google Search Console review
  - [ ] Index coverage check
  - [ ] Fix crawl errors

---

## 📝 **NOTES & COMMENTS**

### **Known Issues** (To be addressed pre-launch)

1. **List blocks**: ~25 `wp:list` blocks use legacy format (no validation errors shown to users, WordPress auto-recovers)
2. **Font loading**: Monitor for FOUT on slow connections (consider font-display: swap)
3. **Large data files**: categoryArticles.ts (79KB) behind lazy routes — acceptable for now

### **Deferred Enhancements** (Post-launch)

1. **Performance**: Consider implementing Service Worker for offline support
2. **PWA**: Add manifest.json for "Add to Home Screen" functionality
3. **Internationalization**: English translation (if needed in future)
4. **Advanced Analytics**: Heat maps, session recordings (Hotjar, etc.)
5. **A/B Testing**: Test different hero images, CTAs, layouts

---

## 🎉 **LAUNCH DAY CHECKLIST**

### **T-Minus 24 Hours**

- [ ] Final production build tested
- [ ] All team members notified
- [ ] Backup of current site (if replacing existing)
- [ ] Rollback plan documented
- [ ] DNS TTL lowered (for faster propagation)

### **Launch Hour**

- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test live site (smoke test)
- [ ] Enable monitoring/analytics
- [ ] Announce launch (social media, newsletter)

### **T-Plus 2 Hours**

- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Review user feedback
- [ ] Verify all pages loading
- [ ] Confirm SSL certificate working

---

## 📚 **RESOURCES & TOOLS**

### **Testing Tools**

- **Browser Testing**: BrowserStack, LambdaTest
- **Accessibility**: WAVE, axe DevTools, Pa11y
- **Performance**: Lighthouse, WebPageTest, GTmetrix
- **SEO**: Google Search Console, Screaming Frog
- **Monitoring**: Google Analytics 4, Sentry, Pingdom

### **Documentation**

- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Lighthouse Scoring**: https://web.dev/performance-scoring/
- **Core Web Vitals**: https://web.dev/vitals/
- **Schema.org**: https://schema.org/

---

**Checklist Version**: 1.0.0  
**Last Updated**: 2026-03-12  
**Next Review**: Post-Launch (7 days)

---

## 🚀 **LET'S LAUNCH!**

This checklist ensures a smooth, professional launch of the rooi rose magazine website. Follow each section methodically, and you'll have a production-ready site that delights users and performs beautifully!

**Good luck! Sterkte!** 🎉
