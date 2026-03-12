# Maintenance & Operations Manual — rooi rose

**Category**: Operations  
**Last Updated**: 2026-03-12  
**Purpose**: Post-launch maintenance and ongoing operations  
**Status**: Ready for Production

---

## Overview

This manual covers all ongoing maintenance tasks, monitoring procedures, and operational workflows for the rooi rose website after launch.

**Audience**: Technical team, content managers, system administrators  
**Update Frequency**: Review monthly, update quarterly

---

## Part 1: Daily Operations

### Morning Routine (9:00 AM - 9:30 AM)

**Responsible**: Technical Lead or On-Call Admin

#### Site Health Check

- [ ] **9:00 AM**: Access WordPress admin
  - URL: `https://rooirose.co.za/wp-admin/`
  - Navigate to **Dashboard** → **Site Health**
  - Verify status: "Good" or "Excellent"
  - Address any critical issues immediately

- [ ] **9:05 AM**: Check uptime status
  - Open UptimeRobot dashboard
  - Verify: 100% uptime last 24 hours
  - Review any downtime incidents
  - Document in incident log (if any)

- [ ] **9:10 AM**: Review error logs
  - SSH into server: `ssh user@server`
  - Check PHP errors: `tail -n 50 /var/log/php-fpm/error.log`
  - Check Nginx/Apache errors: `tail -n 50 /var/log/nginx/error.log`
  - Document any recurring errors

- [ ] **9:15 AM**: Google Analytics quick check
  - Open GA4 dashboard
  - Review yesterday's traffic:
    - Total users
    - Top 5 pages
    - Traffic sources
    - Bounce rate
  - Compare to previous day (±20% is normal)

- [ ] **9:20 AM**: Comment moderation
  - WordPress admin → **Comments**
  - Review pending comments
  - Approve legitimate comments
  - Mark spam (Akismet will learn)
  - Respond to questions (within 24h target)

- [ ] **9:25 AM**: Form submissions review
  - Gravity Forms → **Entries**
  - Review overnight submissions:
    - Newsletter signups (export to MailChimp)
    - Contact form messages (respond within 4h)
    - Competition entries (verify valid)
    - Story tips (forward to editorial)

**Daily Check Complete**: Log completion time in operations spreadsheet

---

### Content Publishing (10:00 AM - 12:00 PM)

**Responsible**: Content Editor

#### Daily Content Schedule

**Minimum**: 1 article per day (weekdays)  
**Optimal**: 2-3 articles per day

**Content Mix** (weekly):
- **3x Kos** (recipes, food articles)
- **2x Mode** (fashion, trends)
- **2x Skoonheid** (beauty, skincare)
- **2x Leefstyl** (home, garden, lifestyle)
- **2x Other categories** (Gesondheid, Bekendes, etc.)

#### Publishing Workflow

- [ ] **10:00 AM**: Review content queue
  - Check **Posts** → **Drafts**
  - Identify articles scheduled for today
  - Verify all articles complete (images, SEO, etc.)

- [ ] **10:30 AM**: Publish first article
  - Final proofread (use Content Creation Guide)
  - Verify featured image (3:2, min 1200x800px)
  - Check Yoast SEO (green/orange score)
  - Set publish time: 11:00 AM
  - Click **Publish**

- [ ] **11:00 AM**: Share on social media
  - Facebook: Post with image + link
  - Instagram: Story + feed post (link in bio)
  - X (Twitter): Tweet with image + link
  - Monitor engagement (first 30 minutes)

- [ ] **11:30 AM**: Publish second article (if available)
  - Repeat publishing workflow
  - Set publish time: 3:00 PM
  - Schedule social media posts for 3:30 PM

**Daily Publishing Complete**: Update content calendar

---

### Afternoon Monitoring (2:00 PM - 3:00 PM)

**Responsible**: Marketing Lead or Content Editor

#### Social Media Engagement

- [ ] **2:00 PM**: Check Facebook
  - Respond to comments (all posts)
  - Answer questions
  - Like positive comments
  - Hide spam/inappropriate comments

- [ ] **2:15 PM**: Check Instagram
  - Respond to comments + DMs
  - Engage with follower content (like/comment)
  - Check story views + interactions

- [ ] **2:30 PM**: Check X (Twitter)
  - Respond to mentions + replies
  - Retweet user-generated content
  - Monitor hashtag #rooirose

- [ ] **2:45 PM**: Update content calendar
  - Mark published articles as "Live"
  - Schedule next week's content
  - Identify content gaps

**Afternoon Check Complete**: Log social engagement metrics

---

### End-of-Day Review (5:00 PM - 5:30 PM)

**Responsible**: All team members

- [ ] **5:00 PM**: Daily metrics review
  - Today's traffic: [X] users
  - Published content: [X] articles
  - Social engagement: [X] interactions
  - Newsletter signups: [X]
  - E-edition sales: [X]

- [ ] **5:15 PM**: Backup verification
  - Check automated backup completed
  - Verify backup file exists (server + remote)
  - Test backup download (weekly)

- [ ] **5:25 PM**: Tomorrow's prep
  - Review scheduled content
  - Prepare social media drafts
  - Flag any issues for tomorrow

**End of Day**: Clock out, enable night monitoring

---

## Part 2: Weekly Operations

### Monday: Week Planning

**Time**: 9:00 AM - 11:00 AM  
**Responsible**: Content Lead + Editorial Team

- [ ] **9:00 AM**: Weekly content planning meeting
  - Review last week's performance
  - Plan this week's content (15-20 articles)
  - Assign articles to writers
  - Set deadlines (3 days before publish)

- [ ] **10:00 AM**: Editorial calendar update
  - Update Google Calendar with publish dates
  - Add special events (holidays, seasons)
  - Plan seasonal content (2 weeks ahead)

- [ ] **10:30 AM**: Social media calendar
  - Plan week's social posts (15-20 posts)
  - Create post drafts (Facebook, Instagram, X)
  - Schedule posts for optimal times

**Monday Complete**: Week planned, team aligned

---

### Tuesday: Performance Review

**Time**: 10:00 AM - 11:00 AM  
**Responsible**: Technical Lead + Marketing Lead

- [ ] **10:00 AM**: Google Analytics review
  - Last 7 days traffic trends
  - Top 10 articles (identify winners)
  - Traffic sources breakdown
  - User behavior (bounce rate, session duration)

- [ ] **10:20 AM**: PageSpeed check
  - Test homepage: https://pagespeed.web.dev
  - Test 3 category pages
  - Test 3 recent articles
  - Target: 90+ mobile, 95+ desktop
  - Document any degradation

- [ ] **10:40 AM**: Search Console review
  - Impressions + clicks (last 7 days)
  - Top search queries
  - Average position
  - Crawl errors (fix immediately)

**Tuesday Complete**: Performance metrics documented

---

### Wednesday: Content Audit

**Time**: 2:00 PM - 4:00 PM  
**Responsible**: Content Editor

- [ ] **2:00 PM**: Review last week's articles
  - Check for typos/errors (reader feedback)
  - Update outdated information
  - Fix broken links
  - Add missing alt text

- [ ] **2:30 PM**: Evergreen content refresh
  - Identify top 10 evergreen articles (>6 months old)
  - Update statistics, dates, images
  - Republish with new publish date
  - Share on social media ("Updated!")

- [ ] **3:00 PM**: Category balance check
  - Count articles per category (last 30 days)
  - Identify underrepresented categories
  - Plan content to balance categories

- [ ] **3:30 PM**: Image audit
  - Check for broken images (use Broken Link Checker plugin)
  - Optimize oversized images (>500KB)
  - Add missing captions

**Wednesday Complete**: Content quality maintained

---

### Thursday: Technical Maintenance

**Time**: 10:00 AM - 12:00 PM  
**Responsible**: Technical Lead

- [ ] **10:00 AM**: WordPress core check
  - Check for WordPress updates
  - Read changelog (breaking changes?)
  - Test on staging site first
  - Update production (if safe)

- [ ] **10:30 AM**: Plugin updates
  - Check for plugin updates (7 critical plugins)
  - Read changelogs
  - Test on staging site
  - Update production (one at a time)
  - **Critical Plugins**:
    - Yoast SEO
    - Wordfence Security
    - WooCommerce
    - Gravity Forms
    - Advanced Ads
    - WP-Optimize
    - UpdraftPlus

- [ ] **11:00 AM**: Database optimization
  - Run WP-Optimize:
    - Clean post revisions (keep 5)
    - Clean spam comments
    - Optimize database tables
  - Check database size (target: <1GB)

- [ ] **11:30 AM**: Security scan
  - Run Wordfence scan
  - Review scan results
  - Fix any vulnerabilities
  - Update firewall rules (if needed)

**Thursday Complete**: Site optimized and secure

---

### Friday: Newsletter & Reporting

**Time**: 9:00 AM - 12:00 PM  
**Responsible**: Marketing Lead + Content Editor

- [ ] **9:00 AM**: Curate week's best content
  - Select 5-7 top articles
  - Write newsletter intro (100 words)
  - Design email layout (MailChimp)
  - Add featured images

- [ ] **10:00 AM**: Newsletter preview
  - Send test email to team
  - Review on mobile + desktop
  - Check all links work
  - Proofread copy

- [ ] **10:30 AM**: Schedule newsletter
  - Schedule for Saturday 8:00 AM
  - Subject line: A/B test 2 versions
  - Target: Open rate >20%, CTR >3%

- [ ] **11:00 AM**: Weekly report
  - Compile metrics:
    - Total users (this week)
    - Total page views
    - Top 10 articles
    - Social media growth
    - Newsletter stats
    - E-edition sales
  - Create slide deck (5-7 slides)
  - Email to stakeholders

**Friday Complete**: Newsletter scheduled, week reported

---

## Part 3: Monthly Operations

### Month-End Tasks (Last Friday)

**Time**: Full day  
**Responsible**: All team members

#### Content Review (Content Editor)

- [ ] **Monthly content audit**
  - Total articles published: [X]
  - Category breakdown (goal: balanced)
  - Author performance (articles per writer)
  - Average word count
  - Average Yoast SEO score

- [ ] **SEO performance**
  - Organic traffic (month vs. last month)
  - Top 20 keywords (Search Console)
  - Position improvements
  - Click-through rate

- [ ] **Content gaps**
  - Identify missing topics (competitor research)
  - Plan next month's focus
  - Update editorial calendar (30 days ahead)

#### Technical Review (Technical Lead)

- [ ] **Server health**
  - Disk usage (<80%)
  - CPU usage average (<70%)
  - Memory usage average (<80%)
  - Bandwidth usage (check hosting limits)

- [ ] **Backup verification**
  - Download last 4 weekly backups
  - Test restore on staging (1 backup)
  - Verify database + files integrity
  - Store backups offsite (3 locations)

- [ ] **Security audit**
  - Review Wordfence blocked attacks
  - Review failed login attempts
  - Update admin passwords (quarterly)
  - Review user roles/permissions

- [ ] **Performance audit**
  - Average PageSpeed score (month)
  - Average load time (GTmetrix)
  - Identify slow pages (>5s)
  - Optimize bottlenecks

#### Marketing Review (Marketing Lead)

- [ ] **Social media analytics**
  - Follower growth (all platforms)
  - Engagement rate (likes, comments, shares)
  - Top performing posts
  - Best posting times

- [ ] **Email marketing**
  - Newsletter list growth
  - Average open rate (target: 20%+)
  - Average CTR (target: 3%+)
  - Unsubscribe rate (<0.5%)

- [ ] **Conversion analytics**
  - Newsletter signups (goal: 100+/month)
  - E-edition subscriptions (goal: 50+/month)
  - Contact form submissions
  - Competition entries

#### Financial Review (Business Lead)

- [ ] **Revenue metrics**
  - E-edition subscriptions (total active)
  - WooCommerce sales (revenue)
  - Ad revenue (if applicable)
  - Total monthly revenue

- [ ] **Expense metrics**
  - Hosting costs
  - Plugin licenses
  - Software subscriptions (MailChimp, etc.)
  - Content creation costs (freelancers)

- [ ] **ROI analysis**
  - Revenue vs. expenses
  - Cost per article
  - Revenue per user
  - Subscription conversion rate

**Month-End Complete**: Monthly report distributed to stakeholders

---

## Part 4: Quarterly Operations

### Quarterly Review (Last Monday of Quarter)

**Time**: Full day  
**Responsible**: Leadership team

#### Strategic Planning

- [ ] **Content strategy review**
  - What content performed best?
  - What categories need more focus?
  - Reader feedback themes
  - Competitor analysis

- [ ] **Technical roadmap**
  - New features to add?
  - Performance improvements needed?
  - Security enhancements?
  - Infrastructure upgrades?

- [ ] **Marketing strategy**
  - Social media strategy working?
  - Newsletter engagement trends
  - Paid advertising ROI (if applicable)
  - Partnership opportunities

#### Comprehensive Audits

- [ ] **Full site audit**
  - Broken link check (all pages)
  - Image optimization audit
  - Mobile responsiveness test
  - Accessibility audit (axe DevTools)

- [ ] **SEO audit**
  - Keyword rankings (track top 50)
  - Backlink profile (Ahrefs/Moz)
  - Technical SEO issues (Screaming Frog)
  - Sitemap + robots.txt verification

- [ ] **Security audit**
  - Penetration testing (external service)
  - SSL certificate renewal check
  - Firewall rules review
  - User account audit (remove inactive)

**Quarterly Complete**: Next quarter planned

---

## Part 5: Monitoring & Alerts

### Automated Monitoring Setup

#### Uptime Monitoring (UptimeRobot)

**Configuration**:
- Check interval: 5 minutes
- Monitor type: HTTPS
- Alert contacts: 2-3 team members (email + SMS)

**Alerts**:
- Site down (immediate SMS)
- Response time >3s (email)
- SSL certificate expiring <30 days (email)

#### Performance Monitoring (Google Analytics)

**Real-Time Alerts**:
- Traffic spike (>500% normal) — investigate
- Traffic drop (<20% normal) — investigate
- High bounce rate (>80%) on new content

#### Security Monitoring (Wordfence)

**Alerts**:
- Malware detected (immediate email)
- Brute force attack detected (email)
- File changes detected (daily summary)

#### Server Monitoring (If VPS/Dedicated)

**Metrics to Track**:
- CPU usage >80% (15 min) — alert
- Memory usage >90% — alert
- Disk space <10% free — alert
- Bandwidth >80% monthly limit — alert

**Tool Recommendations**:
- New Relic (application monitoring)
- Datadog (infrastructure monitoring)
- Prometheus + Grafana (self-hosted)

---

## Part 6: Backup Strategy

### Backup Schedule

#### Daily Backups (Automated)

**Time**: 2:00 AM (low traffic)  
**Tool**: UpdraftPlus Pro

**What to Backup**:
- Database (full)
- wp-content/uploads/ (incremental)
- wp-content/themes/ (weekly)
- wp-content/plugins/ (weekly)

**Retention**: 7 daily backups

**Storage**:
- Server: /backups/ (primary)
- Google Drive (remote)
- Dropbox (remote)

#### Weekly Backups (Automated)

**Time**: Sunday 3:00 AM  
**What to Backup**: Full site (database + all files)  
**Retention**: 4 weekly backups  
**Storage**: AWS S3 (offsite)

#### Monthly Backups (Manual)

**Time**: Last Sunday of month  
**What to Backup**: Full site + server configuration  
**Retention**: 12 monthly backups  
**Storage**: External hard drive (offline)

### Backup Testing

**Frequency**: Monthly (first Monday)

**Process**:
1. Download latest backup
2. Restore on staging site
3. Verify:
   - Database intact
   - Images load
   - Plugins functional
   - No errors
4. Document test results

**Target**: <30 minutes restore time

---

## Part 7: Incident Response

### Severity Levels

| Level | Description | Response Time | Escalation |
|:------|:------------|:--------------|:-----------|
| **P0 — Critical** | Site down, data breach | Immediate | CEO + CTO |
| **P1 — High** | Major feature broken, security issue | <1 hour | CTO |
| **P2 — Medium** | Minor feature broken, performance degraded | <4 hours | Tech Lead |
| **P3 — Low** | Cosmetic issue, minor bug | <24 hours | Developer |

### Incident Response Workflow

#### Step 1: Detect

**How Incidents Are Detected**:
- Automated monitoring alerts
- User reports (contact form, social media)
- Team member discovery

#### Step 2: Assess

**Questions to Answer**:
- What is broken?
- How many users affected?
- Is data at risk?
- What is business impact?

**Assign Severity**: P0, P1, P2, or P3

#### Step 3: Respond

**P0 — Critical** (Site Down):
1. **Immediate**: Check server status
2. **5 min**: Restart services (Nginx, PHP, MySQL)
3. **10 min**: If not fixed, restore from backup
4. **15 min**: Post status update (social media)
5. **30 min**: Root cause analysis
6. **1 hour**: Implement permanent fix

**P1 — High** (Major Feature Broken):
1. **15 min**: Reproduce issue
2. **30 min**: Identify root cause
3. **1 hour**: Deploy hotfix or workaround
4. **2 hours**: Test fix thoroughly
5. **Post**: Document in incident log

**P2 — Medium** (Minor Feature):
1. **1 hour**: Triage + assign to developer
2. **4 hours**: Fix + test on staging
3. **Next day**: Deploy to production
4. **Post**: Update users (if user-facing)

**P3 — Low** (Cosmetic):
1. **1 day**: Add to backlog
2. **Next sprint**: Fix + deploy
3. **Post**: Update changelog

#### Step 4: Document

**Incident Log Template**:
```
**Date**: YYYY-MM-DD
**Time Detected**: HH:MM
**Severity**: P0/P1/P2/P3
**Issue**: [Description]
**Impact**: [# users affected, features broken]
**Root Cause**: [Why did this happen?]
**Fix**: [What was done?]
**Prevention**: [How to prevent in future?]
**Downtime**: [X minutes]
**Resolved By**: [Name]
**Resolved At**: HH:MM
```

#### Step 5: Post-Mortem (P0/P1 only)

**Within 48 Hours**:
- Schedule post-mortem meeting (1 hour)
- Invite: Technical team + stakeholders
- Review incident timeline
- Identify root cause
- Plan prevention measures
- Document lessons learned

---

## Part 8: User Management

### User Roles

| Role | Permissions | Count |
|:-----|:------------|:------|
| **Administrator** | Full access | 2-3 (minimum necessary) |
| **Editor** | Publish/edit all posts, moderate comments | 3-5 |
| **Author** | Publish/edit own posts | 5-10 |
| **Contributor** | Write posts (not publish) | 10-20 |
| **Subscriber** | Profile + paid content access | Unlimited |

### User Lifecycle

#### Onboarding New User

1. Create account (WordPress admin → **Users** → **Add New**)
2. Assign appropriate role
3. Send welcome email with:
   - Login URL
   - Username (email)
   - Temporary password
   - Content Creation Guide link
4. Require password change on first login
5. Enable 2FA (if Administrator/Editor)

#### Offboarding User

1. Change role to "Subscriber" (don't delete immediately)
2. Reassign content to another author
3. After 30 days: Delete user
4. Remove from team communication channels

### Security Best Practices

- [ ] **Strong passwords**: Minimum 16 characters, mixed case, numbers, symbols
- [ ] **2FA required**: All Administrators + Editors (use Wordfence 2FA)
- [ ] **Password rotation**: Every 90 days (Administrators only)
- [ ] **Login monitoring**: Review failed login attempts weekly
- [ ] **Session timeout**: 60 minutes inactivity
- [ ] **IP restrictions**: Restrict admin access to office IP (optional)

---

## Part 9: Plugin Management

### Critical Plugins (Never Disable)

1. **Wordfence Security** — Firewall, malware scanner
2. **UpdraftPlus** — Backups
3. **Yoast SEO** — SEO optimization
4. **WooCommerce** — E-commerce (if used)
5. **Gravity Forms** — Forms
6. **WP-Optimize** — Database optimization
7. **Advanced Ads** — Ad management

### Plugin Update Protocol

**Before Updating**:
1. ✅ Check compatibility (WordPress version)
2. ✅ Read changelog (breaking changes?)
3. ✅ Create full backup
4. ✅ Test on staging site first
5. ✅ Schedule during low-traffic time

**Update Process**:
1. Update one plugin at a time
2. Test site after each update
3. If issue found: Rollback immediately
4. Document any issues in log

**After Updating**:
1. Clear all caches (plugin + server)
2. Test critical functionality
3. Check error logs
4. Monitor for 24 hours

### Plugin Audit (Quarterly)

- [ ] Review all installed plugins
- [ ] Remove unused plugins
- [ ] Check for abandoned plugins (last update >1 year)
- [ ] Find alternatives for abandoned plugins
- [ ] Document active plugins in spreadsheet

---

## Part 10: Content Workflows

### Article Workflow States

1. **Idea** — Topic brainstormed
2. **Assigned** — Writer assigned
3. **Draft** — Writer working on it
4. **Review** — Editor reviewing
5. **Revisions** — Writer making changes
6. **Approved** — Ready to publish
7. **Scheduled** — Publish date set
8. **Published** — Live on site
9. **Evergreen** — Refresh quarterly
10. **Archived** — No longer relevant (unpublish)

### Editorial Workflow

**Step 1: Pitch** (Writer)
- Submit article idea (Google Form or email)
- Include: Topic, angle, keywords, sources

**Step 2: Assignment** (Editor)
- Review pitch
- Approve or reject (with feedback)
- Assign deadline (3-7 days)

**Step 3: Draft** (Writer)
- Write article (800-1,500 words)
- Follow Content Creation Guide
- Include 3-5 images
- Submit for review (change status to "Pending Review")

**Step 4: Review** (Editor)
- Read article (content quality)
- Check SEO (Yoast green/orange)
- Verify images (3:2, alt text, captions)
- Provide feedback (if needed)

**Step 5: Revisions** (Writer)
- Implement editor feedback
- Resubmit for approval

**Step 6: Publish** (Editor)
- Set publish date/time
- Schedule social media posts
- Notify writer (article live)

**SLA**: Pitch to publish <10 days

---

## Part 11: Troubleshooting Guide

### Common Issues

#### Issue: Site Slow (>5s load time)

**Diagnose**:
1. Check PageSpeed Insights (identify bottleneck)
2. Check server load (`top` command via SSH)
3. Check database size (phpMyAdmin)

**Fix**:
1. Clear all caches (plugin + server + CDN)
2. Optimize database (WP-Optimize)
3. Optimize images (compress >500KB images)
4. Enable caching (if not already)
5. Consider CDN (Cloudflare)

#### Issue: White Screen of Death

**Diagnose**:
1. Check error logs: `/var/log/php-fpm/error.log`
2. Likely: Plugin conflict or PHP error

**Fix**:
1. Enable WordPress debug mode (`wp-config.php`)
2. Identify error from logs
3. Deactivate recently updated plugin
4. Restore from backup (if needed)

#### Issue: 404 Errors on Posts

**Diagnose**:
1. Permalinks broken

**Fix**:
1. WordPress admin → **Settings** → **Permalinks**
2. Click **Save Changes** (without changing anything)
3. Test posts (should work now)

#### Issue: Images Not Uploading

**Diagnose**:
1. File too large (>10MB)
2. Disk space full
3. Permissions issue

**Fix**:
1. Compress image (<500KB)
2. Check disk space: `df -h` (SSH)
3. Fix permissions: `chmod 755 wp-content/uploads/` (SSH)

#### Issue: Can't Log In (Forgot Password)

**Fix**:
1. Use "Lost your password?" link
2. If email not working: Reset via database (phpMyAdmin)
3. Or use WP-CLI: `wp user update USERNAME --user_pass=NEWPASSWORD`

---

## Part 12: Performance Baselines

### Target Metrics

| Metric | Target | Measurement |
|:-------|:-------|:------------|
| **PageSpeed (Mobile)** | 90+ | Google PageSpeed Insights |
| **PageSpeed (Desktop)** | 95+ | Google PageSpeed Insights |
| **LCP** | <2.5s | Core Web Vitals |
| **FID** | <100ms | Core Web Vitals |
| **CLS** | <0.1 | Core Web Vitals |
| **Server Response Time** | <200ms | GTmetrix |
| **Fully Loaded Time** | <3s | GTmetrix |
| **Total Page Size** | <2MB | GTmetrix |
| **Total Requests** | <50 | GTmetrix |

### Monthly Performance Report

**Test Pages**:
1. Homepage
2. Category page (Kos)
3. Recent article (this week)
4. Evergreen article (>6 months old)
5. WooCommerce product page

**Document**:
- All metrics above (average)
- Screenshot of PageSpeed results
- Identify any degradation (>10% worse)
- Plan optimization (if needed)

---

## Part 13: Compliance & Legal

### POPIA Compliance (South African Data Protection)

**Requirements**:
- ✅ Privacy Policy published
- ✅ User consent for data collection (forms)
- ✅ Data retention policy (delete after 2 years)
- ✅ User data export/deletion requests (within 30 days)
- ✅ Secure data storage (encrypted)

**Annual Review**: Update Privacy Policy (legal review)

### Cookie Consent (If Using Cookies)

**Requirements**:
- ✅ Cookie consent banner (GDPR/POPIA)
- ✅ Cookie policy page
- ✅ Opt-out option

**Tools**: Cookie Notice plugin or Complianz

### Copyright

**Content**:
- All articles: © rooi rose, All rights reserved
- Images: Licensed (Unsplash, stock photos, or owned)
- User-generated content: Terms require license grant

**DMCA**:
- Copyright policy published
- DMCA agent registered (if applicable)

---

## Part 14: Contact Information

### Internal Team

| Role | Name | Email | Phone |
|:-----|:-----|:------|:------|
| **Technical Lead** | [TBD] | [TBD] | [TBD] |
| **Content Editor** | [TBD] | [TBD] | [TBD] |
| **Marketing Lead** | [TBD] | [TBD] | [TBD] |
| **System Admin** | [TBD] | [TBD] | [TBD] |

### External Services

| Service | Contact | Support URL | Phone |
|:--------|:--------|:------------|:------|
| **Hosting Provider** | [TBD] | [TBD] | [TBD] |
| **Domain Registrar** | [TBD] | [TBD] | [TBD] |
| **Email Service (MailChimp)** | [TBD] | https://mailchimp.com/contact/ | [TBD] |
| **CDN (Cloudflare)** | [TBD] | https://support.cloudflare.com | [TBD] |

---

## Related Documentation

- [Launch Day Runbook](/guidelines/wordpress-migration/launch-day-runbook.md)
- [Visual QA Checklist](/guidelines/wordpress-migration/visual-qa-checklist.md)
- [Content Creation Guide](/guidelines/rooi-rose/content-creation-guide.md)
- [Quick Reference Card](/guidelines/rooi-rose/quick-reference-card.md)

---

**Last Updated**: 2026-03-12  
**Version**: 1.0  
**Review Date**: 2026-06-12 (Quarterly)

