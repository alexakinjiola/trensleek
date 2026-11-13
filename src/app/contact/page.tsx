import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";
import { Icon, SocialLinks } from "@/components/primitives";
import { SITE, mapsLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Trensleek Travels and Tour: chat on WhatsApp (+234 907 3108 020), send an enquiry, or visit our offices in Ogun State and Abuja.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="contact-hero"
        alt="An airliner on final approach over a runway lit at dusk"
        kicker="Contact us"
        lines={["Let's plan", <em key="a">your next trip</em>]}
        large
        sub="Chat with us on WhatsApp for the quickest reply, or send the enquiry form and we'll come back to you."
        actions={
          <>
            <a className="btn btn-wa" href={whatsappLink()} target="_blank" rel="noopener">
              <Icon name="chat" />
              Chat with Us on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#enquire">
              Make an Enquiry
              <Icon name="arrow_forward" className="mv" />
            </a>
          </>
        }
        crumbs={[{ label: "Contact Us" }]}
        card={{ tag: "Visit us", title: "Offices in Ogun State and Abuja", href: "#offices", image: "lagos" }}
      />

      <section className="sec" id="enquire" aria-label="Ways to enquire">
        <div className="wrap copts">
          <div className="wa-card on-dark">
            <p className="opt-tag">Option A</p>
            <Icon name="chat" style={{ fontSize: 44 }} />
            <h2 className="serif h3" style={{ fontSize: 38 }}>
              Chat on WhatsApp
            </h2>
            <p style={{ color: "rgba(255,255,255,.9)" }}>
              Opens a conversation with our official number, {SITE.phoneDisplay}.
            </p>
            <a className="btn" href={whatsappLink()} target="_blank" rel="noopener">
              <Icon name="chat" />
              Chat with Us on WhatsApp
            </a>
            <p className="small" style={{ color: "rgba(255,255,255,.85)" }}>
              Opens WhatsApp in a new tab, or in the app on your phone.
            </p>
          </div>
          <div className="form-card">
            <p className="opt-tag" style={{ color: "var(--blue)", marginBottom: 14 }}>
              Option B
            </p>
            <h2 className="serif h2" style={{ marginBottom: 10 }}>
              Send an enquiry
            </h2>
            <p className="muted" style={{ marginBottom: 36 }}>
              Tell us what you need and we&apos;ll reply using your preferred contact method.
            </p>
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="sec-sm" aria-labelledby="det-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 id="det-title" className="eyebrow">
            Stay in touch
          </h2>
          <div className="follow-row">
            <div>
              <p style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-.02em" }}>Follow Trensleek</p>
              <p className="small muted" style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginTop: 6 }}>
                Connect with us on LinkedIn, Instagram, Facebook and WhatsApp.
              </p>
            </div>
            <SocialLinks variant="light" />
          </div>
        </div>
      </section>

      <section className="sec sand" id="offices" aria-labelledby="off-title">
        <div className="wrap">
          <p className="eyebrow">Visit us</p>
          <h2 id="off-title" className="serif h2" style={{ marginBottom: 48 }}>
            Our offices
          </h2>
          <div className="offices">
            {SITE.offices.map((o) => (
              <div className="office" key={o.city}>
                <Icon name="location_on" style={{ fontSize: 30, color: "var(--red)" }} />
                <h3 className="serif h3">{o.city}</h3>
                <address style={{ fontStyle: "normal" }} className="muted">
                  {o.lines[0]}
                  <br />
                  {o.lines[1]}
                </address>
                <a className="tlink" style={{ alignSelf: "flex-start" }} href={mapsLink(o.query)} target="_blank" rel="noopener">
                  Get directions
                  <Icon name="arrow_outward" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-sm" id="privacy" aria-labelledby="priv-title">
        <div className="wrap wrow">
          <div>
            <p className="eyebrow">Privacy</p>
            <h2 id="priv-title" className="serif h3">
              How we handle your enquiry
            </h2>
          </div>
          <div className="stack" style={{ gap: 16 }}>
            <p className="muted">
              We only ask for the details we need to respond to your enquiry, and we use them for that purpose alone. Your
              information is sent securely, never sold, and handled in line with the Nigeria Data Protection Act 2023.
            </p>
            <Link className="tlink" style={{ alignSelf: "flex-start" }} href="/privacy">
              Read our full privacy notice
              <Icon name="arrow_outward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
