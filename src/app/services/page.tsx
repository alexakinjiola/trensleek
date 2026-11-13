import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, Img } from "@/components/primitives";
import { SERVICES } from "@/lib/services";
import { enquiryLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Local and international flight ticketing, private jet hire, escort services, hotel reservations and travel consultancy from Trensleek Travels and Tour.",
  alternates: { canonical: "/services/" },
};

/* Asymmetric editorial grid: each card gets its own slot and image height. */
const SLOTS = ["s-a", "s-b", "s-c", "s-d", "s-e", "s-f"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="services-hero"
        alt="An aircraft wing above sunlit clouds"
        kicker="Six services, one dedicated team"
        lines={["Everything", <>your trip <em>needs</em></>]}
        sub="Flights at fair prices, private jet hire, hotels and personal travel advice. Choose a service to see how we can help, or simply tell us what you're planning."
        actions={
          <>
            <a className="btn btn-light" href="#content">
              Explore Our Services
              <Icon name="arrow_forward" className="mv" />
            </a>
            <Link className="btn btn-ghost" href={enquiryLink()}>
              Make an Enquiry
            </Link>
          </>
        }
        crumbs={[{ label: "Services" }]}
        card={{ tag: "Not sure where to start?", title: "Talk it through with our team", href: whatsappLink(), external: true, image: "consult-hero" }}
      />

      <section className="sec" aria-label="All services">
        <div className="wrap">
          <div className="sgrid">
            {SERVICES.map((s, i) => (
              <div className={SLOTS[i]} key={s.slug}>
                <Link className="sc" href={`/services/${s.slug}`}>
                  <div className="sc-img zoom">
                    <Img name={s.cardImage} alt={s.cardAlt} sizes="(max-width: 760px) 100vw, 55vw" />
                    <span className="sc-num">{s.num}</span>
                  </div>
                  <h3 className="serif">{s.name}</h3>
                  <p>{s.description}</p>
                  <span className="tlink" style={{ alignSelf: "flex-start" }}>
                    View Details
                    <Icon name="arrow_outward" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-sm sand" aria-labelledby="help-title">
        <div className="wrap help-row">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow">Not sure which service?</p>
            <h2 id="help-title" className="serif h2">
              Tell us about your trip and we&apos;ll point you in the right direction.
            </h2>
          </div>
          <div className="btns">
            <a className="btn btn-wa" href={whatsappLink()} target="_blank" rel="noopener">
              <Icon name="chat" />
              Chat with Us on WhatsApp
            </a>
            <Link className="btn btn-outline" href={enquiryLink()}>
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
