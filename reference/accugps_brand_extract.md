# AccuGPS Brand Extract
_Status: PARTIAL — color/font/logo values need visual confirmation from live site_

---

## Company Identity

| Field | Value |
|-------|-------|
| Company Name | AccuGPS |
| Founded | 2012 |
| Tagline | TBD — needs visual confirmation |
| Phone | (888) 519-9128 |
| Email | info@accugps.com |
| Address | 5727 E. Seneca Turnpike, Jamesville, NY 13078 |
| Platform URL | https://i.accugps.com/map-view |

---

## Visual Identity — NEEDS CONFIRMATION

| Item | Observed | Status |
|------|----------|--------|
| Primary brand color | UNKNOWN | ❌ Open dev tools on accugps.com and check `--color_11` or main CTA button hex |
| Accent / highlight color | UNKNOWN | ❌ Check button background color |
| Background (dark) | UNKNOWN | ❌ Check hero/header background |
| Background (light) | UNKNOWN | ❌ Check page body background |
| Text color | UNKNOWN | ❌ Check body text |
| Logo format | UNKNOWN | ❌ SVG/PNG? What colors? |
| Logo tagline | UNKNOWN | ❌ Confirm from live site |

### How to get hex colors (takes ~2 min):
1. Open https://www.accugps.com in Chrome
2. Right-click any colored button → Inspect
3. In DevTools → Computed tab → find `background-color`
4. Note the hex or rgb value

---

## Typography

| Role | Font | Status |
|------|------|--------|
| Body / UI | Wix Madefor Text (detected from source) | ✅ Confirmed |
| Headings | UNKNOWN | ❌ Check h1/h2 font-family in DevTools |
| Fallback | Arial, Helvetica, sans-serif | ✅ Confirmed |

**Note for build:** "Wix Madefor Text" is a Wix-native font — for the standalone HTML pages we should substitute with a Google Font equivalent (Inter or Plus Jakarta Sans, same as JMS, or a new choice if the frontend-design skill recommends otherwise).

---

## Navigation Structure (from search results)

Top-level nav:
- Home
- Products
  - GPS Trackers
  - Dash Cameras
  - Accessories
- About Us
- Customer Care (Contact/Support)

CTA button: TBD — check live site for label ("Get Started", "Shop Now", "Buy Now", etc.)

---

## Imagery Style — NEEDS CONFIRMATION

| Item | Status |
|------|--------|
| Photography or illustration? | ❌ Check live site |
| Product on white vs lifestyle shots? | ❌ Check live site |
| Fleet/truck imagery present? | ❌ Check live site |
| Color grading (warm/cool/neutral)? | ❌ Check live site |

---

## Social Presence

| Platform | URL |
|----------|-----|
| Facebook | https://www.facebook.com/goaccugps/ |
| LinkedIn | https://www.linkedin.com/company/accugps |
| Android App | Available on Google Play Store |

---

## Asset Status

| Asset | Status | Source |
|-------|--------|--------|
| AccuGPS logo | ❌ Needed | Request from client |
| OBD II tracker image | ✅ Reusable | `wix_prototypes/obd-device.png` (same device) |
| Magnetic asset tracker | ✅ Reusable | `wix_prototypes/magnetic-asset_tracker.png` |
| 4G LTE tracker image | ❌ Needed | Request from client or product photo |
| MDVR camera image | ❌ Needed | Request from client |
| AI All-in-One camera | ❌ Needed | Request from client |
| Platform dashboard screenshot | ❌ Needed | Screenshot from https://i.accugps.com/map-view |
| Industry imagery (construction, HVAC) | ❌ Needed | Stock or client-provided |

---

## Sitemap (Proposed — Awaiting Client Confirmation)

| # | Page | Priority |
|---|------|----------|
| 1 | Homepage | Build first |
| 2 | GPS Trackers (overview) | Build second |
| 3 | OBD II Tracker | Build third |
| 4 | Magnetic Asset Tracker | Build alongside #3 |
| 5 | Fleet Cameras | After trackers |
| 6 | Platform & Features | After cameras |
| 7 | Industries | After platform |
| 8 | Pricing | After industries |
| 9 | Contact | Build alongside homepage |
| 10 | About | Last / optional |

---

## Open Questions for Client

- [ ] What are your brand colors? (Or point us to brand guidelines)
- [ ] Do you have a logo SVG file to share?
- [ ] Are there product photos we should use (beyond the existing OBD/magnetic tracker images)?
- [ ] Do you have a dashboard screenshot you'd like featured on the Platform page?
- [ ] Any pages to prioritize or deprioritize from the sitemap above?
- [ ] Any reference sites (competitor or inspiration) you like the look of?
