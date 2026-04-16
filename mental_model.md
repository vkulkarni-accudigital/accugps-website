# AccuGPS Website — Mental Model

> Last updated: 2026-04-01
> Purpose: Give any new agent full project context without reading the entire conversation history.

---

## Who Is the Client

**AccuGPS** — fleet management and GPS tracking company based in Syracuse, NY.
- Phone: (888) 519-9128
- Address: 5727 E. Seneca Turnpike, Jamesville, NY 13078
- Email: info@accugps.com
- Platform login: https://i.accugps.com/map-view
- Pricing: $129 all-in (hardware + activation + year 1), $12.99/month or $129/year renewal per vehicle
- Key differentiators: No contracts, local Syracuse support, 2-minute OBD install, 4G LTE, founded by former BlackBerry engineers (2012)

## Who Is the User

**AccuDigital** — marketing services agency building the Wix Studio website for AccuGPS.
- GitHub account: vkulkarni-accudigital
- The user manages both JMS Associates and AccuGPS as clients
- **Codex** (another agent/team) is simultaneously working on the Pricing page — coordinate to avoid overlap

---

## Project Setup

### File Architecture
- Self-contained single-file HTML pages — all CSS in `<style>`, all JS in `<script>`, no external files
- No build tools, no npm, no frameworks
- CDN dependencies only: GSAP 3.12.5 + ScrollTrigger, Google Fonts (Figtree)
- Each page is embedded in Wix Studio via an HTML iframe widget

### Hosting
- GitHub repo: `https://github.com/vkulkarni-accudigital/accugps-website`
- Live on GitHub Pages: `https://vkulkarni-accudigital.github.io/accugps-website/`
- Auto-deploys on every push to `main`
- DO NOT use Netlify — the account has exceeded credit limits on their Projects tier

### Local Path
`c:/Users/venka/.gemini/antigravity/scratch/accugps_prototypes/`

### Image Assets (all in the same folder as HTML files)
| File | Used on |
|------|---------|
| AccuGPSLogo.svg | All pages (nav) |
| OBD%20Main.png | Homepage + Trackers (OBD card) |
| LTE%201.png | Homepage + Trackers (LTE card) |
| Magnetic%20Asset%20tracker%201.png | Homepage + Trackers (Magnetic card) |
| All%20in%20One%20Hero.jpg | Homepage + Cameras (AIO section) |
| Dual%20HD%20Main.png | Cameras (add-on card) |
| Auxilary%20Camera%20Main.png | Cameras (add-on card) |
| In%20Cabin%20Camera%20Main.png | Cameras (add-on card) |
| OBD%20Hero.png | Reserved for OBD product page |
| LTE%20Hero.jpg | Reserved for LTE product page |
| Magnetic%20Tracker_Hero.png | Reserved for Magnetic product page |
| All%20in%20one%20side%20view.jpg | Reserved for Camera AIO product page |
| LTE%202.png | Available |
| OBD%202.png | Available |
| Magnetic%20Asset%20Tracker%202.png | Available |
| MDVR.png | Cameras page (MDVR spotlight) |
| camera-adas.png | Available (replaced in cameras) |
| camera-dsm.png | Available (replaced in cameras) |
| camera-multicam.png | Cameras page (MDVR spotlight) |
| camera-roadfacing.png | Available (replaced in cameras) |
| integrated-alerts.png | Platform page (bento grid) |
| integrated-driver.png | Platform page (bento grid) |
| integrated-eld.png | Platform page (bento grid) |
| integrated-ifta.png | Platform page (bento grid) |
| integrated-reporting.png | Platform page (bento grid) |

**IMPORTANT:** Image filenames with spaces must be URL-encoded in src attributes (spaces = %20). GitHub Pages is Linux/case-sensitive and will not resolve unencoded spaces.

---

## Brand Tokens

```css
--dark: #122023
--forest: #2E443C
--deep: #162C23
--accent: #E6FF83        /* lime yellow — primary CTA color */
--teal-light: #CFDDDF
--sage: #A9BB96
--green-light: #E8F8D7
--white: #FFFFFF
--off-white: #F0F0F0
--body-text: #3C3C3C
--muted: #666666
--font-display: 'Figtree', sans-serif   /* substitute for Wix Madefor Text */
--font-body: 'Figtree', sans-serif
```

---

## Hard Rules — Never Break

- NO em dashes anywhere — not in copy, headings, labels, or code comments
- No buzzwords: "passionate about," "world-class," "disruptive," "best-in-class"
- Active voice, max 25 words per sentence, Grade 8-10 reading level
- Specific over vague — use real prices, real phone number, real address
- DO NOT say "73+ devices" or quantify devices — say "All Major Devices Supported"
- DO NOT say "14 reports" — say "multiple reports" or "various reports" (report count not confirmed)
- DO NOT say "99+ alerts" — say "multiple" or "various alert options" (count not confirmed)
- Mobile responsive at 900px and 768px breakpoints

---

## Pages Built (4 of 13) — ALL LIVE on accugps.com

### 1. Homepage — `accugps_homepage.html`
**Sections:** Hero with orb animation, Trust bar (2012 / $129 / 4G LTE / phone), Products overview (5 cards: OBD II, Magnetic, 4G LTE, All-In-One Camera, MDVR), Platform teaser, Pricing math section, Industries (5 cards), Testimonials, CTA banner, Footer.

**Industries shown:** Construction, HVAC, Transportation and Logistics, Waste Management, Fleet Management

**Pricing math:** $129 year one vs $300-720 competitor, 5 vehicles 3 years = $1,935 AccuGPS vs $4,500-10,800 competitors. Renewal = $129/year.

**ROI Calculator section has been removed.**

---

### 2. GPS Trackers — `accugps_trackers.html`
**Sections:** Hero (breadcrumb: AccuGPS > GPS Trackers), 3 product cards (OBD II $129, Magnetic $129, 4G LTE $129), feature comparison table, how it works (3 steps), CTA banner, Footer.

**Renewal note:** $12.99/month or $129/year after year one.

---

### 3. Fleet Cameras — `accugps_cameras.html`
**Sections:** Hero, All-In-One AI Camera (white section), MDVR System overview (teal-light), MDVR Spotlight carousel (dark — 6 features, auto-advances every 3500ms, swaps camera images dynamically), Add-on cameras (3 cards), Comparison table, Decision guide (3 cards), CTA banner, Footer.

**MDVR Spotlight image mapping:**
- Features 0-1 (Channels/Storage): camera-multicam.png
- Feature 2 (Extreme Conditions): camera-roadfacing.png
- Features 3-4 (4G LTE/1080p): camera-adas.png
- Feature 5 (GPS Tracking): camera-dsm.png

---

### 4. Platform & Features — `accugps_platform.html`
**Sections:** Hero with 5 feature chips, Browser mockup (pure CSS — fake live map), Bento grid (5 integrated images in asymmetric 3-col layout), Reports section (3D CSS flip cards on hover), Alerts + Geofencing (dark), Trip Replay + Shared Access (green-light), Access Everywhere chip row (includes "All Major Devices Supported"), API callout with real endpoints + interactive tabs (ignition / dtc / odometer), CTA banner, Footer.

**API section:** Real OBD Open API endpoints. JWT auth (3-day tokens), per-device by serial number. Tabs use a plain JS IIFE (no GSAP).

**Pending:** Once portal access is granted: confirm real report count, export formats (PDF/CSV?), historical data window, scheduled delivery callout, real dashboard screenshot.

---

## Pages Still to Build (9 remaining)

| # | File | Status | Notes |
|---|------|--------|-------|
| 1 | accugps_obd.html | Not started | Hero image: OBD Hero.png |
| 2 | accugps_magnetic.html | Not started | Hero image: Magnetic Tracker_Hero.png |
| 3 | accugps_lte.html | Not started | Hero image: LTE Hero.jpg |
| 4 | accugps_camera-aio.html | Not started | Hero image: All in one side view.jpg |
| 5 | accugps_camera-mdvr.html | Not started | |
| 6 | accugps_industries.html | Not started | |
| 7 | accugps_pricing.html | Codex building | DO NOT duplicate — coordinate with Codex |
| 8 | accugps_contact.html | Not started | |
| 9 | accugps_about.html | Not started | |

---

## Analytics

- **GA4 Measurement ID:** G-734P54F0RR
- Added to all 4 live pages in `<head>` after Google Fonts links
- Tracking confirmed live as of 2026-04-01
- **Pending:** GTM audit for proper event setup (needed before Google + FB ads launch)
- Events to set up: clicks on Shop buttons, Call buttons, footer links, form submissions

---

## CTA / Navigation Status

### Navigation Approach
All CTAs use `window.top.location.href='url'` — this is critical because pages are iframed in Wix. Using `_self` navigates the iframe only (double nav bar bug). `window.top` breaks out to the full browser window.

Internal Wix page links use `navigateTo(slug)` which calls `window.parent.postMessage({ type: 'wix-navigate', slug }, '*')`. User has added the Velo listener to Wix pages.

### Footer Links — Current Status (all 4 pages)
| Link | Status | Destination |
|------|--------|-------------|
| OBD II Smart Tracker | WIRED | accugps.com/product-page/accugps-obd-ii-smart-tracker |
| Magnetic Asset Tracker | WIRED | accugps.com/product-page/accugps-magnetic-asset-tracker |
| 4G LTE GPS Tracker | WIRED | accugps.com/product-page/accugps-4g-lte-gps-tracker |
| Fleet Cameras | WIRED | accugps.com/category/all-products?Price=50-101 |
| About AccuGPS | WIRED | accugps.com/about-us |
| Blog | WIRED | accugps.com/accugps-blog |
| Contact Us | WIRED | accugps.com/customer-care |
| Pricing | NOT WIRED | NA — no destination yet (Codex building) |
| Drive Score | WIRED (temp) | accugps.com/integratedsolutionspage |
| Geofencing | WIRED (temp) | accugps.com/integratedsolutionspage |
| IFTA Reporting | WIRED (temp) | accugps.com/integratedsolutionspage |
| Trip Replay | WIRED (temp) | accugps.com/integratedsolutionspage |
| All Features | WIRED (temp) | accugps.com/integratedsolutionspage |
| Industries | NOT WIRED | TBD |

### Homepage Product Card "Learn More" Buttons
| Button | Status | Destination |
|--------|--------|-------------|
| OBD II Smart Tracker | WIRED | accugps.com/product-page/accugps-obd-ii-smart-tracker |
| Magnetic Asset Tracker | WIRED | accugps.com/product-page/accugps-magnetic-asset-tracker |
| 4G LTE GPS Tracker | WIRED | accugps.com/product-page/accugps-4g-lte-gps-tracker |
| All-In-One AI Camera | WIRED | accugps.com/product-page/accugps-all-in-one-camera |
| MDVR Multi-Camera Recorder | WIRED | accugps.com/product-page/accugps-mdvr-mobile-digital-video-recorder |
| View All Features | WIRED | i.accugps.com/map-view |
| Explore the Platform | WIRED | youtube.com/watch?v=H2aWkIwmOYE&feature=youtu.be |

---

## Wix Integration

### How pages are embedded
Each HTML file is hosted on GitHub Pages and embedded inside Wix Studio via an HTML iframe widget. The Wix page keeps its own URL slug (e.g. /gps-trackers). The HTML file IS the full page design — no Wix template is used.

### Planned URL slugs (not yet confirmed in Wix)
| Page | Wix slug |
|------|----------|
| Homepage | /home |
| GPS Trackers | /gps-trackers |
| Fleet Cameras | /fleet-dash-cameras |
| Platform | /fleet-management-software |
| Industries | /gps-tracking-for-business |
| Pricing | /gps-tracking-pricing |
| Contact | /contact |
| About | /about-accugps |

### Wix Velo Listener (user has added this to each Wix page's Page Code tab)
```js
import wixLocation from 'wix-location';
$w.onReady(function () {
  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'wix-navigate' && event.data.slug) {
      wixLocation.to(event.data.slug);
    }
  });
});
```

---

## Pending Items (carry into every session)

1. **GTM audit** — Set up proper event tracking before Google + FB ads launch. Events needed: Shop button clicks, Call button clicks, footer link clicks, form submissions.

2. **GA4 MCP** — Set up MCP server to query GA4 data conversationally. Deferred until after go-live traffic settles.

3. **Portal access** — User will share AccuGPS dashboard login. Once available:
   - Confirm real report count (replace "multiple reports" with actual number)
   - Check export formats (PDF/CSV/Excel?)
   - Note historical data lookback window
   - Confirm scheduled email delivery feature
   - Screenshot real dashboard for platform page browser mockup

4. **Platform page additions** (from competitive research):
   - Scheduled delivery visual callout ("On-Demand" + "Scheduled Email" pills)
   - Export format mention (one line in reports section)
   - Category context line (subtitle updates per filter tab)
   - Historical data window (if confirmed from portal)

5. **TBD footer nav links** — Pricing (when Codex finishes), Industries — need Wix slug or external URL confirmation. Drive Score / Geofencing / IFTA / Trip Replay / All Features currently temp-wired to integratedsolutionspage.

6. **Wix Velo test** — Navigation via footer links not yet fully tested end-to-end in Wix.

7. **Image upload reminder** — User uploads images manually to GitHub via web UI (not git push). Remind them before deploying new pages. All new image filenames with spaces must use %20 encoding in src attributes.

---

## Deployment Workflow

1. Edit HTML file locally in VS Code
2. Upload to GitHub via web UI (go to repo, drag file onto file list, commit)
3. GitHub Pages auto-deploys within ~1 minute
4. Check Actions tab on GitHub to confirm green checkmark
5. Test at: `https://vkulkarni-accudigital.github.io/accugps-website/[filename].html`

**For git push (when needed for multiple files or images):**
```bash
cd ".gemini/antigravity/scratch/accugps_prototypes"
git pull origin main --rebase
git add [specific files]
git commit -m "description"
git push origin main
```

---

## Reference Files

- Brand extract: `accugps_brand_extract.md` (colors, fonts, asset list)
- Project guidelines: `CLAUDE.md` (hard rules, copy rules, build order)
- JMS reference pages: `c:/Users/venka/.gemini/antigravity/scratch/wix_prototypes/` (design patterns to adapt)
- Knowledge base: `c:/Users/venka/.gemini/antigravity/scratch/CMS_aD/accugps/knowledge-base/`

---

## Key Patterns Used Across All Pages

### Nav (fixed, 64px, dark)
Logo left, nav links center (hidden on mobile), CTA button right ("Login to Platform" or "Shop Trackers")

### Hero structure
Eyebrow (12px uppercase, accent color) + H1 (clamp font size) + subheading + 2 CTA buttons + right-side feature chips or product image

### Orb animation (homepage hero only)
Two blurred gradient circles drifting with CSS keyframes, 14-18s cycle

### Section alternation
Dark (#122023) → White → Teal-light (#CFDDDF) → Off-white (#F0F0F0) → Green-light (#E8F8D7) → Dark

### GSAP ScrollTrigger pattern
```js
gsap.from('.element', {
  opacity: 0, y: 30, duration: 0.7,
  scrollTrigger: { trigger: '.section', start: 'top 75%' },
  stagger: 0.1
});
```

### Wix postMessage nav-hide
```js
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'hide-nav') {
    document.querySelector('.nav').style.display = 'none';
  }
});
```

### navigateTo() helper (in all 4 pages, handles internal Wix navigation)
```js
function navigateTo(slug) {
  window.parent.postMessage({ type: 'wix-navigate', slug: slug }, '*');
}
```

### CTA navigation pattern (CRITICAL — pages are iframed in Wix)
```js
// CORRECT — breaks out of iframe to full browser window
window.top.location.href = 'https://www.accugps.com/...'

// WRONG — navigates iframe only, causes double nav bar bug
window.open('url', '_self')
window.open('url', '_blank')
```
