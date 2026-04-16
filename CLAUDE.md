# AccuGPS Prototypes — Project Guidelines

## Project Context

Building Wix Studio-compatible HTML pages for AccuGPS (fleet management & GPS tracking, Syracuse NY).
Same technical approach as JMS Associates: **self-contained single-file HTML** — all CSS and JS inline, no build tools, no external dependencies except CDN-loaded GSAP and Google Fonts.

Reference files (JMS design system to adapt):
- `c:/Users/venka/.gemini/antigravity/scratch/wix_prototypes/jms_homepage.html`
- `c:/Users/venka/.gemini/antigravity/scratch/wix_prototypes/jms_services.html`
- (and 5 other JMS pages in that directory)

Brand knowledge base:
- `c:/Users/venka/.gemini/antigravity/scratch/CMS_aD/accugps/knowledge-base/`

Brand extract (colors, fonts, assets):
- `c:/Users/venka/.gemini/antigravity/scratch/accugps_prototypes/accugps_brand_extract.md`

---

## Hard Rules — Never Break

- **NEVER use em dashes (—) anywhere. Not in copy, not in headings, not in labels, not in comments.** Replace with: commas for flow, periods for breaks, colons for lists. No exceptions.
- **No contracts with buzzwords:** "passionate about," "world-class," "disruptive," "best-in-class," "game-changing," "our team of experts," "please feel free to contact us"
- **Self-contained HTML only** — all CSS in `<style>`, all JS in `<script>`. No external `.css` or `.js` files.
- **Wix iframe compatible** — include postMessage nav-hide logic for Wix Studio embedding.
- **Mobile responsive** — breakpoints at 900px and 768px minimum.
- **Active voice, short sentences** — max 25 words per sentence, Grade 8-10 reading level.
- **Specific over vague** — use real prices ($129, $12.99/month), real phone number ((888) 519-9128), real address (5727 E. Seneca Turnpike, Jamesville, NY 13078).

---

## Frontend Design Principles

*Based on Anthropic's official frontend-design skill (github.com/anthropics/claude-code/plugins/frontend-design)*

### Before writing any code, establish the aesthetic direction:
- What is the tone? (AccuGPS: direct, practical, trustworthy — not flashy, not corporate)
- What makes this page **unforgettable** vs. generic?
- Commit fully to the chosen direction — half-measures produce mediocre results.

### Typography
- Use **distinctive, characterful fonts** — not Inter, Roboto, Arial, or Space Grotesk
- Pair a strong display font with a refined body font
- Use `clamp()` for fluid responsive sizing
- Typography should carry visual weight even before images load

### Color & Theme
- Build cohesive palette: dominant brand color + sharp accent + neutral backgrounds
- Define everything via **CSS custom properties** (`--primary`, `--accent`, `--dark`, `--light`)
- Avoid purple-on-white gradients and other clichéd AI aesthetics
- Ensure sufficient contrast (WCAG AA minimum)

### Motion & Animation
- Use GSAP + ScrollTrigger for scroll-driven reveals
- Stagger entrance animations — elements should not all appear at once
- Hover states should **surprise slightly** — not just opacity change
- Hero section: animated gradient orbs or atmospheric background (drift cycle 14-18s)
- Keep animation purposeful — it should reinforce the content hierarchy

### Layout & Space
- Asymmetry and overlap are allowed — break the predictable equal-column grid where it adds character
- Use generous whitespace in premium sections
- Diagonal flow or grid-breaking accents add visual interest
- Sections should have distinct visual identity (dark/light alternation + accent use)

### Texture & Depth
- Prefer gradient backgrounds over flat solid colors in hero sections
- Subtle noise textures, custom shadows, or border details add production quality
- Card components: subtle shadows + border radius + hover lift effect

### What to AVOID
- Cookie-cutter layouts that look like every other SaaS landing page
- Generic stock-photo style without specific fleet/GPS context
- Placeholder lorem ipsum — always write real AccuGPS copy
- Over-engineering animations that hurt performance
- Inconsistent spacing — define a spacing scale and stick to it

---

## Reusable JMS Patterns (adapt, don't copy verbatim)

```
GSAP animations:    gsap.from() with ScrollTrigger, staggered reveals
Nav component:      fixed 64px header, dark bg, center brand, right CTA button
Hero structure:     eyebrow (12px uppercase) + headline (clamp) + subhead + CTA pair
Orb animation:      two blurred gradient circles with drift keyframes
Form component:     white card, input grid, validation, success overlay
Wix hide nav:       window.addEventListener('message') postMessage listener
Scroll behavior:    scroll-behavior: smooth on html element
```

---

## AccuGPS Copy Rules

- Phone: **(888) 519-9128**
- Address: **5727 E. Seneca Turnpike, Jamesville, NY 13078**
- Email: **info@accugps.com**
- Platform: **https://i.accugps.com/map-view**
- Pricing: **$129 (hardware + activation + year 1), $12.99/month or $129/year renewal**
- Emphasize: all-in pricing, local Syracuse support, no contracts, 2-minute OBD install, 4G LTE

## Build Order (Homepage first)

1. Homepage
2. GPS Trackers (overview)
3. OBD II Tracker
4. Magnetic Asset Tracker
5. Fleet Cameras
6. Platform & Features
7. Industries
8. Pricing
9. Contact
10. About (optional)
