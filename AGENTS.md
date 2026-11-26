# AccuGPS Prototypes

Self-contained HTML pages for the AccuGPS fleet-GPS-tracking website (Wix Studio, Syracuse NY), built and maintained by AccuDigital. "Done" means a page is live-embedded on accugps.com via Wix iframe with no dead links, no placeholder copy, and brand-compliant.

Last reviewed: 2026-10-25

## Context

- **Client / owner:** AccuGPS LLC (client of AccuDigital marketing services)
- **Audience:** Small and mid-size fleet owners/managers, Syracuse NY and nationwide
- **Goal:** Replace the old AccuGPS site page by page with pages that pass Google Merchant Center review and convert better
- **Status:** Paused ad-hoc homepage edits 2026-10-25 on owner's call: were patching homepage sections without a target architecture. Full sitemap + homepage wireframe proposal drafted in `docs/site-architecture.md`, awaiting owner confirmation. Owner also asked for a from-scratch creative concept (no constraint to keep existing sections) to compare against the incremental plan: `concepts/accugps_homepage_v2_concept.html`, built around real platform screenshots/video instead of mockups or copy-only sections. Neither direction is confirmed yet. See `docs/competitor-research.md` for the MA Track/Azuga/Linxup research the sitemap is built from.

## Systems and accounts

| System | What it's for | URL | Access | Owner |
|---|---|---|---|---|
| Wix Studio site "AccuGPS" | Live production site; iframes these HTML pages | https://www.accugps.com (siteId `f8e6175e-0b92-425d-b6dd-0d94d0c1fa09`) | Wix MCP connector (this session); owner has Editor access | AccuGPS |
| Wix Stores, Catalog V1 | Product catalog behind `/category/...` and `/product-page/...` URLs | — | Wix MCP connector | AccuGPS |
| GitHub repo | Source for these HTML files, served via GitHub Pages, iframed into Wix | github.com/vkulkarni-accudigital/accugps-website (`main`) | git push access | AccuDigital |
| Google Ads Playbook (Sheet) | Master reference for every Google Ads campaign: strategy rules, checklists, budget calculator, bid/event rules, change log. Update its register and Change Log with every campaign change | https://docs.google.com/spreadsheets/d/1AhF__s0ZGxlTqOoo1GEQRaEXKzsXusRqItAjuCO6fe4/edit | Google Sheets connector | AccuDigital |
| Warden | Automated weekly 6-site audit; finds dead links/placeholders, commits fixes co-authored by Claude | — | `project_agent_ecosystem.md` (memory) | AccuDigital |

No credentials are stored in this repo. Wix access goes through the Wix MCP connector, not a local API key.

## Project layout

```
accugps_*.html          one page per file, self-contained (inline CSS/JS). Stays at repo root:
                         live Wix pages iframe these by exact GitHub Pages URL.
accugps_industry_*.html 5 industry landing pages (construction, medical, transportation,
                         property, delivery). No shared footer yet, see Open questions.
index.html, _redirects  GitHub Pages entry point
images/ videos/ docs/   static assets, referenced as ./images/... etc. from the HTML files
reference/              brand extract, mental model notes (background, not live content)
docs/decisions.md       dated decision log
docs/competitor-research.md  MA Track / Azuga / Linxup architecture teardown
docs/site-architecture.md    proposed new sitemap + homepage wireframe, awaiting confirmation
docs/wix-product-page-research.md  what Wix natively supports for product page customization vs. what needs a custom build
docs/obd-product-page-editor-spec.md  original Tier 1 native-rebuild spec for OBD; superseded, see Verified facts
docs/velo-obd-page-script.js   working Velo cart bridge for accugps_obd_tracker.html, the actual shipped pattern
docs/velo-aio-page-script.js   same Velo cart bridge, for accugps_aio_camera.html
accugps_aio_camera.html        All-In-One Camera product page, same template/pattern as the OBD page
concepts/                    unconfirmed exploratory builds, not live, not wired to Wix nav
  accugps_homepage_v2_concept.html   from-scratch homepage concept, real screenshots/video driven
  accugps_obd_pdp_concept.html       MA Track-style product page for the OBD II Tracker, real product content/images
```

## How we build

- Same technical approach as the JMS Associates site: self-contained single-file HTML, GSAP + ScrollTrigger, no build tools.
- Visual direction: see `docs/design-principles.md` (adapted from Anthropic's frontend-design skill).
- Wix iframe compatible: internal nav/CTAs must use full `https://www.accugps.com/...` URLs via `window.top.location.href`, never relative paths or a bare `#`. Relative paths resolve against GitHub Pages, not the Wix domain, and 404 silently inside the iframe.
- Warden audits the live site weekly and may commit fixes directly to `main` between sessions. Always check `git log`/`git status` before assuming this conversation's last edit is still the current state.

## Conventions

- Never use em dashes. Commas for flow, periods for breaks, colons for lists.
- No buzzword copy: "passionate about," "world-class," "disruptive," "best-in-class," "game-changing," "our team of experts," "please feel free to contact us."
- Active voice, max 25 words per sentence, Grade 8-10 reading level.
- Mobile breakpoints: 900px and 768px minimum.
- Real specifics only: phone (888) 519-9128, address 5727 E. Seneca Turnpike, Jamesville, NY 13078, email info@accugps.com, platform login i.accugps.com/map-view.
- Brand voice, product facts, and color palette: the `anthropic-skills:accugps-brand` skill is the source of truth, not this file.

## Verified facts

- Site is Wix Studio, Velo enabled, Wix Stores Catalog V1 (via `GetSiteContext`, 2026-09-29)
- Fleet-camera "Learn More" dead link fixed by creating a live `/category/mdvr` collection with 3 existing products (verified live, 2026-09-29)
- Privacy Policy is live at `/privacy-policy` (verified live, 2026-09-29)
- `accugps_pricing.html` was deleted from the repo 2026-10-20; its footer link and the live `/gps-tracking-pricing` URL were both dead at removal time (git commit `fe1fb58`)
- Real AccuGPS platform screenshot sourced from Google Drive (`SS and Videos/Screenshot_2_Live_Map.jpg`), saved as `images/accugps-platform-live-map.jpg`, now used in the homepage Platform Preview section (2026-10-24)
- Kinney's Kar Kare is located in **Oneida, NY**, not Syracuse. Homepage testimonial card currently says Syracuse and needs correcting (found 2026-10-25, fix not yet applied, paused pending architecture sign-off)
- Kinney's Kar Kare's old domain `kinneyskarkare.com` now 301-redirects to an unrelated site (`fueldconf.com`); their current real website is unconfirmed (found 2026-10-25)
- Turning Stone Enterprises logo sourced from turningstone.com, saved as `images/turningstone-logo.webp` (2026-10-25)
- **OBD II product page is live**, built with Claude Code desktop (computer-use/browser session), 2026-11-11. Actual shipped pattern differs from the original Tier 1 spec in `docs/obd-product-page-editor-spec.md` (that doc is now historical): the page stays our custom `accugps_obd_tracker.html` embedded as a Wix HTML Component (not a native Product Page rebuild), with Add to Cart wired to the real Wix cart via a postMessage bridge to Velo page code. Working code: `docs/velo-obd-page-script.js`. OBD product ID `d473bb1f-ab95-0657-082f-f0226f7b3fe5`. Confirmed working via Dev Console 2026-11-11.
- OBD II Tracker price updated from $129 to $145 in `accugps_obd_tracker.html` (commit `dfd66be`, 2026-11-15).
- Annual renewal price in plan selector updated to $145/yr (commit `eb7ea56`, 2026-11-17).
- Two Wix Pricing Plans created 2026-11-17 for Year 2+ auto-renewal: Annual ($145/yr, 365-day free trial, slug `accugps-obd-ii-tracker-annual-software-renewal`) and Monthly ($12.99/mo, 365-day free trial, slug `accugps-obd-ii-tracker-monthly-software-renewal`). Plans & Pricing page is live at `/pricing-plans` (verified 2026-11-17). "Start Free Trial" checkout flow confirmed working. Plans show `buyable: false` via API but checkout works in practice — Wix Payments (bank ****9593) is connected. OBD page renewal links point to `/pricing-plans`.
- All-In-One Camera real data (via `ExecuteWixAPI`, 2026-11-12): product ID `04f6bd52-a9ca-1d5e-8144-5a39b4ff74ae`, SKU `CAM-01-001`, $220 hardware, $27/month per vehicle subscription billed separately (no bundled free first year, unlike the trackers), model MT95L, slug `accugps-all-in-one-camera`. Related camera-head products (HD Dual AI $100, Auxiliary $50, In-Cabin $50) live in the same `/category/mdvr` collection.

- **AIO campaigns LIVE 2026-11-23** (Search $18, PMax v2 $14, DG hook test $8; old AIO PMax paused). OBD Search moved to goal `Purchase_Checkout` the same day. Owner runs manual check-ins with Claude for ~2 weeks (day 1, 3, 4, 7 to 10, then Mondays); OAuth app moves to Production this week, then scheduled check-ins can be considered. The playbook artifact's Overview tab is the at-a-glance view: update its `ov` fields and `settings/overview` on every campaign change.
- **Add to cart tracking live 2026-11-23:** Google Ads conversion action `ads_add_to_cart` (secondary) fired by GTM `GTM-M2RPMW8J` version 18 on Wix's native `add_to_cart` dataLayer event (one push per click, carries `ecommerce.value`). Verified with a headless click: one hit, value 220 USD. GTM API access via `C:/Users/venka/gtm_tools/gtm_auth.py` (token `~/gtm-token.json`, 7-day expiry while the OAuth app is in Testing). GTM `add_to_cart` push added to AIO Velo bridge 2026-11-25 (see `docs/velo-aio-page-script.js`).
- **AIO Camera Pricing Plan created 2026-11-25** via Pricing Plans v3 API: plan ID `743ebe94-2ce8-422a-a8a5-25cde638540f`, slug `accugps-all-in-one-camera`. Single checkout flow: $220 camera hardware fee (charged at first payment) + $27/month recurring auto-renewing until cancelled. Plan visible at `/pricing-plans` (confirmed live 2026-11-25). Note: `/plan-checkout/{planId}` direct URL returns 404 on this Wix site — entry point is `/pricing-plans`. AIO camera "Buy Now" button uses postMessage `{action:'buyNow'}` to Velo, which calls `customPurchaseFlow.navigateToCheckout({planId: AIO_CAMERA_PLAN_ID})` from `wix-pricing-plans-frontend` — takes the buyer directly to Wix checkout for the AIO Camera plan, skipping the Plans & Pricing page. Fallback (direct link, no iframe): `/pricing-plans`. Velo script: `import { customPurchaseFlow } from 'wix-pricing-plans-frontend'`. Add to Cart still uses Wix Store cart (`wix-stores-frontend`). Confirmed working 2026-11-25: Buy Now skips /pricing-plans and lands directly on Wix checkout showing $220 hardware + $27/month. **PENDING:** verify GTM `ads_add_to_cart` fires on Add to Cart (wixWindow.trackEvent fires, but GTM trigger listens for `add_to_cart` lowercase — may need a second trigger for `AddToCart`). After GTM confirmed: switch Google Ads final URLs (Search `24528502262`, PMax `24534680809`) from old `/product-page/accugps-all-in-one-camera` to `/accugps-all-in-one-camera`.
- **AIO Google Ads relaunch built via Google Ads API, 2026-11-20, both PAUSED** (strategy: `docs/google-ads-aio-pmax-strategy.md`). PMax `24534680809` ($25/day) + Search `24528502262` ($15/day), both on custom goal `Purchase_Checkout` (ads_purchase + Checkout; renamed from AIO_Purchase_Week1 2026-11-23 and now also used by OBD Search, since Google allows one goal per action list). Shared negative list "AIO | Negatives", AccuGPS brand exclusion on PMax, audience "AIO Fleet Camera Buyers". No YouTube video in the asset group yet. 2026-11-22: copy now uses the Meta offer ($187 with code ZACH + $27/month), promotion asset on both, final URLs temporarily on the OLD page /product-page/accugps-all-in-one-camera until the new page's checkout is ready (switch back then). Interactive playbook with shared progress: https://claude.ai/artifact/VcK31XyEZT3AmnkoqWiNA6 (supersedes the Sheet for day-to-day use). Budget split agreed 2026-11-22: Search $18, PMax $14 (both applied), Demand Gen hook test $8, built PAUSED 2026-11-22 as `AGPS_AIO_DG-HOOKTEST_Nov26` (`24540893677`): H2/H3/H5/H6 Body 1 Shorts (YouTube IDs odJapNsUCww, E-nISJGxkq4, saT3_9mq-a4, uimg1v1EilA; H1 = Ja8qvf-Kw6E unused). PMax has H3 + H2 videos. See strategy doc section 9. Old AIO PMax `24031612553` still ENABLED: pause it on the day the new ones go live. Conversion actions the API can't change (still primary): YouTube follow-on views, YouTube channel subscriptions, Android installs.

## Open questions

- **VERIFY** Which homepage direction does the owner want: the incremental plan in `docs/site-architecture.md`, the from-scratch concept in `concepts/accugps_homepage_v2_concept.html`, or some blend? Raised 2026-10-25, owner hadn't reacted to the concept yet when this session ended.
- **VERIFY** Do the 5 industry landing pages need the standard footer added (Privacy Policy, other policies, contact), or are they intentionally footer-less drafts? Industry pages not yet addressed. (OBD tracker resolved, see below.)
- **VERIFY** Pricing Plans `buyable` API field still returns false — needs investigation. Checkout works in practice but `buyable: false` may cause issues with plan widgets or Wix integrations. Annual plan ID `bcb5da1b-712e-4f11-a0fe-3ce0259d8d98`, monthly `7eb688d0-41c5-40e3-9f9c-de4089744ea9`.
- **All-In-One Camera product page is live**, published 2026-11-17 at `/accugps-all-in-one-camera`. Page renders correctly ($220 hardware, $27/month subscription note, Add to Cart, "Activate your camera subscription" link). Add to Cart confirmed working via Dev Console 2026-11-17: postMessage `{"action":"addToCart","quantity":1}` fires from iframe, Velo bridge opens the Wix cart drawer with "AccuGPS All In One Camera" at $220. Camera Pricing Plan: "AccuGPS Camera — Monthly Software Subscription", $27/month, plan ID `ebc2a93e-cd0d-49c1-88aa-1b72fece02cd`, slug `accugps-camera-monthly-software-subscription`.
- **PENDING BUILD** Same treatment (custom HTML page + Velo cart bridge, honest empty-state reviews) planned for every other product page after All-In-One Camera. Not started yet.
- **WATCH** Wix Headless existing-site migration: blocked today because migrating a store to Wix's new product catalog isn't shipped yet (owner wants to drop the GitHub-Pages-iframe pattern eventually). Re-check catalog migration status periodically. See `docs/decisions.md` (2026-11-10).

## Don't

- Don't move or rename `accugps_*.html` files. Their GitHub Pages URLs are hardcoded into live Wix page embeds.
- Don't lead SEO/meta copy with a price figure like "$129". Owner finds it misleading (`feedback_no_price_led_copy`, memory).
- Don't delete or rewrite `accugps_wix_faq_blocks.html`, `schema_wix_custom_code.html`, or any industry page without first checking it isn't still embedded live.
- Don't treat anything in `concepts/` as live or wired for Wix: those files are exploratory only, not embedded anywhere, and haven't been checked for iframe/nav compatibility.

## Proposed (awaiting confirmation)

- 2026-10-22: Leave `accugps_industry_*.html` and `accugps_obd_tracker.html` without a footer until the owner confirms whether they go live as-is or get the standard footer (confirm with owner)

## Key decisions

Full reasoning in `docs/decisions.md`.

- 2026-11-11: Ship the OBD II product page as a custom HTML Component with a Velo postMessage cart bridge (not a native Product Page rebuild); this is now the template for every other product page
- 2026-11-10: Hold off on Wix Headless and Studio Two (existing-site catalog migration not shipped; Studio Two drops Velo); revisit when the catalog migration ships
- 2026-11-10: Build the OBD II product page natively in Wix (Multiple Product Page Versions + one small iframe embed for non-native pieces), not as a custom satellite page — **superseded 2026-11-11, see above**
- 2026-10-20: Delete `accugps_pricing.html` (owner decision, dead live URL)
- 2026-09-29: Create a live Wix "MDVR" product category instead of linking a nonexistent MDVR product page
- 2026-09-29: Reorganize the project folder (images/videos/docs/reference subfolders); HTML stays at root
