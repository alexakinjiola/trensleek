import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { NAV, SITE, whatsappLink, enquiryLink } from "@/lib/site";
import { BrandIcon, Icon, LogoInner, SocialLinks, Turbulence } from "./primitives";

export default function Footer() {
  return (
    <>
      <div className="ftr-space" aria-hidden="true" />
      <footer className="ftr2">
        <div className="wrap">
          <div className="ftr2-cta cta2">
            <div style={{ position: "relative", zIndex: 1 }}>
              <p className="eyebrow" style={{ color: "#fff" }}>
                Start planning
              </p>
              <h2 className="serif h2" style={{ maxWidth: "16ch", marginBottom: 26 }}>
                Wherever you&apos;re headed next, <em>let&apos;s plan it together.</em>
              </h2>
              <div className="btns">
                <a className="btn btn-wa" href={whatsappLink()} target="_blank" rel="noopener">
                  <BrandIcon name="whatsapp" size={18} />
                  Chat with Us on WhatsApp
                </a>
                <Link className="btn btn-light" href={enquiryLink()}>
                  Make an Enquiry
                  <Icon name="arrow_forward" className="mv" />
                </Link>
              </div>
            </div>
            <div className="ftr-anim" style={{ position: "relative", zIndex: 1, opacity: 0.95 }}>
              <Turbulence tone="dark" />
            </div>
          </div>

          <div className="ftr2-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Link href="/" className="logo" aria-label="Trensleek Travels and Tour, home">
                <LogoInner />
              </Link>
              <p className="muted">
                A Nigerian-owned travel company providing travel management services, affordable tickets and personalised
                travel assistance.
              </p>
              <div className="ftr-soc">
                <p>Follow us</p>
                <SocialLinks variant="light" />
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <ul>
                <li className="ftr-c">
                  <Icon name="call" />
                  <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                </li>
                <li className="ftr-c">
                  <span className="ftr-ic" aria-hidden="true">
                    <BrandIcon name="whatsapp" size={17} />
                  </span>
                  <a href={whatsappLink()} target="_blank" rel="noopener">
                    WhatsApp us
                  </a>
                </li>
                <li className="ftr-c">
                  <Icon name="mail" />
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                {SITE.offices.map((o) => (
                  <li className="ftr-c" key={o.city}>
                    <Icon name="location_on" />
                    <span>{o.query.replace(", Nigeria", "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ftr2-bot">
            <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
            <span style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <Link href="/privacy">Privacy notice</Link>
              <a href={SITE.url}>www.trensleektravels.com</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
