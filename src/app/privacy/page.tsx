import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import { Icon, Tbc } from "@/components/primitives";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Trensleek Travels and Tour Ltd collects, uses, shares and protects personal data, and the rights you have under the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "/privacy/" },
};

// DRAFT: prepared for Trensleek's review. Have it checked by a qualified data protection
// adviser before publication. Items wrapped in <Tbc> need a decision from Trensleek.
const LAST_UPDATED = "13 November 2026";

type Section = { id: string; title: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {SITE.legalName} (&ldquo;Trensleek&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a Nigerian-owned travel company
          providing travel management services, flight ticketing, private jet hire, escort services, hotel reservations and
          travel consultancy.
        </p>
        <p>
          We are the data controller for the personal data described in this notice. This notice explains how we handle
          personal data when you visit www.trensleektravels.com, contact us, make an enquiry, use our services or apply to
          work with us. We process personal data in line with the <strong>Nigeria Data Protection Act 2023</strong>{" "}
          (&ldquo;NDPA&rdquo;) and guidance issued by the Nigeria Data Protection Commission (&ldquo;NDPC&rdquo;).
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "The information we collect",
    body: (
      <>
        <p>We collect only the information we need to respond to you and to arrange your travel.</p>
        <dl className="legal-dl">
          <dt>When you make an enquiry</dt>
          <dd>
            Your full name, email address, phone number, the service you are interested in, the details in your message, and
            your preferred contact method.
          </dd>
          <dt>When you contact us on WhatsApp, by phone or by email</dt>
          <dd>Your name, phone number or email address, and the content of your messages and calls.</dd>
          <dt>When we arrange travel for you</dt>
          <dd>
            The details needed to book your trip, such as passenger names as they appear on travel documents, dates of birth,
            nationality, passport or ID details, travel dates and destinations, and any special requests. Where a request
            involves health or accessibility needs, we collect that information only with your consent and only to arrange
            the assistance you have asked for.
          </dd>
          <dt>When you apply for a job</dt>
          <dd>Your CV and anything else you choose to include in your application email.</dd>
          <dt>When you browse our website</dt>
          <dd>
            Basic technical information our hosting provider records automatically, such as your IP address, browser type and
            the pages requested. We do not use advertising or analytics cookies on this website.
          </dd>
        </dl>
        <p>
          We do not take payments or create customer accounts on this website. Please do not send card details or other
          payment information through the enquiry form, WhatsApp or email.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <ul className="legal-list">
        <li>To respond to your enquiry and give you options, quotations and advice.</li>
        <li>To book and manage the flights, private charters, hotels and other services you ask us to arrange.</li>
        <li>To contact you about your booking, including changes, reminders and important travel information.</li>
        <li>To provide escort and assistance services you have requested.</li>
        <li>To assess job applications and contact suitably qualified candidates.</li>
        <li>To keep our website secure and working properly.</li>
        <li>To meet our legal, regulatory, tax and accounting obligations.</li>
      </ul>
    ),
  },
  {
    id: "lawful-basis",
    title: "Our lawful basis",
    body: (
      <>
        <p>Under the NDPA we rely on the following lawful bases:</p>
        <ul className="legal-list">
          <li>
            <strong>Contract:</strong> to take steps at your request before entering into an agreement with you, and to
            provide the travel services you have asked for.
          </li>
          <li>
            <strong>Consent:</strong> where you choose to share information with us, including any health or accessibility
            information. You can withdraw consent at any time.
          </li>
          <li>
            <strong>Legal obligation:</strong> where the law requires us to keep or share information.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to run and secure our business and website, in ways you would reasonably
            expect and that do not override your rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We never sell your personal data. We share it only where needed, with:</p>
        <ul className="legal-list">
          <li>
            <strong>Travel suppliers</strong> who deliver what you have booked, such as airlines, private aviation operators,
            hotels and ground transport providers.
          </li>
          <li>
            <strong>Booking and distribution systems</strong> that airlines and travel agencies use to issue tickets and
            reservations.
          </li>
          <li>
            <strong>Service providers</strong> who help us run our business, such as our website host, enquiry form
            provider, email and messaging services (including WhatsApp). They may use your data only on our instructions.
          </li>
          <li>
            <strong>Authorities</strong> such as immigration, border or law enforcement agencies, where the law requires it.
          </li>
          <li>
            <strong>Professional advisers</strong> such as our lawyers, auditors and insurers, where necessary.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        International travel often means sharing your details with airlines, hotels and partners outside Nigeria, and some
        of our service providers store data abroad. When we transfer personal data outside Nigeria, we do so only where the
        NDPA permits it: for example, where it is necessary to provide the service you have requested, where the destination
        offers an adequate level of protection, or where appropriate safeguards are in place.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>We keep personal data only for as long as we need it for the purposes above. As a guide:</p>
        <ul className="legal-list">
          <li>
            Enquiries that do not lead to a booking: <Tbc>12 months</Tbc> after our last contact.
          </li>
          <li>
            Booking and transaction records: <Tbc>6 years</Tbc>, to meet tax and accounting requirements.
          </li>
          <li>
            Job applications: <Tbc>12 months</Tbc> after the recruitment decision, unless you ask us to delete it sooner.
          </li>
        </ul>
        <p>When we no longer need information, we delete it or anonymise it securely.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        We use appropriate technical and organisational measures to protect personal data against loss, misuse and
        unauthorised access. These include encrypted (HTTPS) connections on our website, access limited to staff who need it,
        and confidentiality commitments from our team and service providers. Confidentiality is one of our core values. No
        method of transmission over the internet is completely secure, so please avoid sending sensitive documents unless we
        ask for them.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the NDPA you have the right to:</p>
        <ul className="legal-list">
          <li>be informed about how we use your personal data;</li>
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate or incomplete data corrected;</li>
          <li>ask us to delete your data, where there is no good reason for us to keep it;</li>
          <li>restrict or object to how we use your data;</li>
          <li>receive your data in a commonly used format, or have it sent to another organisation;</li>
          <li>withdraw your consent at any time, where we rely on consent;</li>
          <li>not be subject to decisions based solely on automated processing (we do not make such decisions).</li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details below. We will respond within the time required by
          law. If you are not satisfied with how we have handled your data, you have the right to complain to the{" "}
          <strong>Nigeria Data Protection Commission</strong> (ndpc.gov.ng).
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and third-party content",
    body: (
      <>
        <p>
          This website does not use advertising, tracking or analytics cookies. It loads its icon set from Google Fonts,
          which means your browser connects to Google&rsquo;s servers and shares your IP address with Google when you view
          a page.
        </p>
        <p>
          Links to WhatsApp, social media platforms and Google Maps take you to services run by those companies. Their own
          privacy policies apply once you leave our site. If we add analytics or other cookies in future, we will update this
          notice and ask for your consent where required.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our website is not intended for children, and we do not knowingly collect personal data from children through it.
        When we arrange travel for a child, we collect their details from a parent or guardian, with that person&rsquo;s
        consent.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: (
      <p>
        We may update this notice from time to time. The latest version will always be on this page, with the date it was
        last updated.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>For any question about this notice or your personal data, please contact us:</p>
        <ul className="legal-contact">
          <li>
            <Icon name="mail" />
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Privacy request")}`}>{SITE.email}</a>
          </li>
          <li>
            <Icon name="call" />
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          </li>
          <li>
            <Icon name="chat" />
            <a href={whatsappLink(undefined, "Hello Trensleek, I have a question about my personal data.")} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </li>
          {SITE.offices.map((o) => (
            <li key={o.city}>
              <Icon name="location_on" />
              <span>{o.query}</span>
            </li>
          ))}
        </ul>
        <p className="small muted">
          <Tbc>To confirm</Tbc> Trensleek to confirm whether a named Data Protection Officer should be listed here.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        image="window-sunset"
        alt="The view from an aircraft window at sunset"
        kicker="Privacy notice"
        lines={["Your data,", <em key="a">handled with care</em>]}
        sub="How we collect, use and protect your personal information, and the rights you have under the Nigeria Data Protection Act 2023."
        actions={
          <a className="btn btn-light" href="#notice">
            Read the notice
            <Icon name="arrow_downward" className="mv" />
          </a>
        }
        crumbs={[{ label: "Privacy notice" }]}
      />

      <section className="sec legal" id="notice" aria-label="Privacy notice">
        <div className="wrap legal-grid">
          <aside className="legal-aside">
            <p className="eyebrow">On this page</p>
            <nav aria-label="Privacy notice sections">
              <ol className="legal-toc">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="legal-n">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="legal-body">
            <div className="legal-meta">
              <p>
                <strong>Last updated:</strong> {LAST_UPDATED}
              </p>
              <Tbc>Draft for Trensleek&rsquo;s legal review</Tbc>
            </div>
            {SECTIONS.map((s, i) => (
              <article className="legal-sec" id={s.id} key={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`} className="legal-h">
                  <span className="legal-n">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="legal-text">{s.body}</div>
              </article>
            ))}
            <p className="small muted" style={{ marginTop: 40 }}>
              Questions about an enquiry instead? <Link href="/contact">Contact our team</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
