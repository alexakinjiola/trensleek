/**
 * Site-wide facts and helpers. Contact details come from the PRD.
 * Anything marked TODO still needs confirmation from Trensleek.
 */

export const SITE = {
  name: "Trensleek Travels and Tour",
  legalName: "Trensleek Travels and Tour Ltd",
  url: "https://www.trensleektravels.com",
  description:
    "Trensleek Travels and Tour Ltd is a Nigerian-owned travel company providing travel management services, affordable tickets and personalised travel assistance.",
  phoneDisplay: "+234 907 3108 020",
  phoneHref: "tel:+2349073108020",
  whatsappNumber: "2349073108020",
  email: "info@trensleektravels.com",
  careersEmail: "trensleekcareers@gmail.com",
  offices: [
    {
      city: "Ogun State",
      lines: ["1 Praisehill Estate, Arepo,", "Ogun State, Nigeria"],
      query: "1 Praisehill Estate, Arepo, Ogun State, Nigeria",
    },
    {
      city: "Abuja",
      lines: ["590 David Jemibewon Crescent,", "Apo Legislative Quarters, Abuja, Nigeria"],
      query: "590 David Jemibewon Crescent, Apo Legislative Quarters, Abuja, Nigeria",
    },
  ],
} as const;

/**
 * Where the enquiry form posts. Set NEXT_PUBLIC_ENQUIRY_ENDPOINT at build time
 * (e.g. a Formspree, Web3Forms or Getform URL, or your own API).
 * When empty the form tells visitors it is not connected yet — it never fakes success.
 */
export const ENQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "";

// TODO(Trensleek): replace with official profile URLs once supplied.
const Q = encodeURIComponent("Trensleek Travels");
export const SOCIAL = [
  { icon: "linkedin-in", label: "LinkedIn", href: `https://www.linkedin.com/search/results/all/?keywords=${Q}` },
  { icon: "instagram", label: "Instagram", href: `https://www.instagram.com/explore/search/keyword/?q=${Q}` },
  { icon: "facebook-f", label: "Facebook", href: `https://www.facebook.com/search/top?q=${Q}` },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
] as const;

/** WhatsApp click-to-chat link with a URL-encoded, service-aware message. */
export function whatsappLink(service?: string, custom?: string): string {
  const text =
    custom ??
    (service
      ? `Hello Trensleek, I would like to make an enquiry about your ${service} service. Please provide more information.`
      : "Hello Trensleek, I would like to make an enquiry. Please provide more information.");
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Contact page link that preselects a service in the enquiry form. */
export function enquiryLink(service?: string): string {
  return service ? `/contact/?service=${encodeURIComponent(service)}#enquire` : "/contact/#enquire";
}

export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const CAREERS_MAILTO =
  `mailto:${SITE.careersEmail}?subject=${encodeURIComponent("Job application: [Role] – [Your name]")}` +
  `&body=${encodeURIComponent("Hello Trensleek team,\n\nPlease find my CV attached.\n\nRole of interest:\nPhone number:\n\nKind regards,")}`;

export const SERVICE_OPTIONS = [
  "Local Flight Ticketing",
  "International Flight Ticketing",
  "Private Jet Rental/Hire",
  "Escort Services",
  "Hotel Reservation",
  "Travel Consultancy",
  "General Enquiry",
] as const;
