# Trensleek Travels and Tour — website

Corporate website for **Trensleek Travels and Tour Ltd**, a Nigerian-owned travel company.
It presents the company and its six services and turns visitors into enquiries via
**WhatsApp** or an **online enquiry form**. It is not a booking platform: there is no login,
payment or reservation system.

Built with **Next.js (App Router) + React + TypeScript**, exported as a fully static site.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services/` | Services overview |
| `/services/local-flight-ticketing/` | Local Flight Ticketing |
| `/services/international-flight-ticketing/` | International Flight Ticketing |
| `/services/private-jet-hire/` | Private Jet Rental/Hire |
| `/services/escort-services/` | Escort Services |
| `/services/hotel-reservation/` | Hotel Reservation |
| `/services/travel-consultancy/` | Travel Consultancy |
| `/about/` | About Us |
| `/contact/` | Contact Us (enquiry form) |
| `/careers/` | Careers |
| `/privacy/` | Privacy notice (draft, NDPA 2023) |
| 404 | Custom "different flight" page |

Plus `/sitemap.xml` and `/robots.txt`.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static site written to ./out
```

## Configuration

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_ENQUIRY_ENDPOINT` | URL the enquiry form POSTs JSON to (e.g. a Formspree, Web3Forms or Getform endpoint, or your own API). **Until it is set, the form tells visitors it is not connected yet and nothing is sent; it never shows a fake success.** |

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_ENQUIRY_ENDPOINT=https://formspree.io/f/your-form-id
```

The form sends: `fullName`, `email`, `phone`, `service`, `message`, `preferredContact`, `page`, `submittedAt`.
A success message is shown only when the endpoint returns a 2xx response.

## Deployment

`npm run build` produces plain HTML/CSS/JS in `out/`. Host it anywhere that serves static files:

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `out`. Add `NEXT_PUBLIC_ENQUIRY_ENDPOINT` in the project's environment settings.
- **cPanel / any web host:** upload the contents of `out/` to the web root.

Make sure HTTPS is enabled on the final domain (`www.trensleektravels.com`).

## Project structure

```
src/
  app/                 Routes (one folder per page) + sitemap/robots
  components/          Header, Footer, PageHero, EnquiryForm, shared primitives
    home/              Home-only interactive parts (hero slideshow, planner, carousel)
  lib/
    site.ts            Contact details, WhatsApp/enquiry link helpers, social links, nav
    services.ts        Copy and imagery for the six services
  styles/              Design tokens and component styles
public/images/         Photography as WebP, 800px (-sm) and 1600px versions
```

## Design notes

- **Fonts:** Manrope + Cormorant Garamond via `next/font`. **Icons:** Google Material Symbols. Brand icons: Font Awesome Free (CC BY 4.0).
- **Colour:** blue leads, red accents. The hex values are proposals until Trensleek supplies official brand values (tokens at the top of `src/styles/base.css`).
- **Photography:** real Unsplash photos, served as responsive WebP with lazy loading.
- **Accessibility:** semantic landmarks, skip link, labelled form fields with inline errors, visible focus, 44px touch targets, keyboard-safe mobile menu, and motion that respects `prefers-reduced-motion`, including a pause control for the hero slideshow.

## Content awaiting Trensleek

These are marked on the site with "To confirm" / "Draft" tags:

- Approval of the drafted service copy, and the exact scope of **Escort Services**
- Management team portraits and biographies; Rokibat's surname; confirmation of Miss Lagbaja's name
- Official social media profile URLs (links currently open a platform search) in `src/lib/site.ts`
- Legal review of the drafted privacy notice (`src/app/privacy/page.tsx`), including retention periods and whether to name a Data Protection Officer
- Official logo / brand colour values (the logo in the site is a concept)
- Partner logos and confirmation of partnership status
- Enquiry delivery endpoint (see Configuration)
