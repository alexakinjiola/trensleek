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
| `/privacy/` | Privacy notice (NDPA 2023) |
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

## Enquiry form (Formspree)

The form posts to Trensleek's Formspree form, `https://formspree.io/f/xljbonzw` (set in `src/lib/site.ts`).
Formspree emails every submission to the address configured on that form: **trensleektravels@gmail.com**.

Each email arrives with:

- **Subject:** `New website enquiry: <service> from <name>`
- **Reply-To:** the visitor's email address, so pressing Reply answers the customer directly
- **Fields:** Full name, email, Phone number, Service of interest, Message, Preferred contact method, Sent from page

A success message is shown only when Formspree confirms receipt. If sending fails, the visitor keeps
everything they typed and is offered WhatsApp and email instead. A hidden honeypot field stops simple spam bots.

To use a different endpoint (e.g. for testing), set `NEXT_PUBLIC_ENQUIRY_ENDPOINT`, for example in `.env.local`:

```bash
NEXT_PUBLIC_ENQUIRY_ENDPOINT=https://formspree.io/f/your-form-id
```

### Keeping enquiries out of spam

In Formspree (Form → Settings): set the target email to `trensleektravels@gmail.com` and verify it;
optionally add `trensleektravels.com` (and the Vercel domain) under allowed domains.

In Gmail (trensleektravels@gmail.com):

1. Add Formspree's sending address (shown on the first notification, e.g. `noreply@formspree.io`) to Contacts.
2. Search `from:formspree.io`, choose **Create filter**, tick **Never send it to Spam**, **Always mark it as important**
   and **Apply the label** "Website enquiries".
3. If an enquiry ever lands in Spam, open it and click **Not spam**.

## Deployment

`npm run build` produces plain HTML/CSS/JS in `out/`. Host it anywhere that serves static files:

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `out`.
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

- Approval of the drafted service copy (Escort Services is now written as vehicle escorts and convoys)
- Boluwatife Adeniyi's course of study
- Official social media profile URLs (links currently open a platform search) in `src/lib/site.ts`
- Official logo / brand colour values (the logo in the site is a concept)
- Partner logos and confirmation of partnership status
