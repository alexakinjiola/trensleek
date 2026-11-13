import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Icon, Img, Tbc } from "@/components/primitives";
import { HowItWorks, ValuesGrid } from "@/components/sections";
import { SERVICES, serviceBySlug } from "@/lib/services";
import { SITE, enquiryLink, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: `${s.description} Enquire with Trensleek Travels and Tour on WhatsApp or online.`,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { images: [{ url: `/images/${s.heroImage}.webp` }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const i = SERVICES.findIndex((x) => x.slug === s.slug);
  const related = [1, 2, 3].map((k) => SERVICES[(i + k) % SERVICES.length]);
  const need = s.key === "EscortServices" ? "request" : s.short.toLowerCase();

  return (
    <>
      <PageHero
        variant="service"
        image={s.heroImage}
        alt={s.heroAlt}
        kicker={`Service ${s.num} of 06`}
        lines={[
          s.titleA,
          <em key="b">{s.titleB}</em>,
        ]}
        sub={
          <>
            {s.lead}
            {s.scopeToConfirm && <Tbc style={{ marginLeft: 6 }}>Scope to confirm</Tbc>}
          </>
        }
        actions={
          <>
            <a className="btn btn-wa" href={whatsappLink(s.name)} target="_blank" rel="noopener">
              <Icon name="chat" />
              Chat with Us on WhatsApp
            </a>
            <Link className="btn btn-ghost" href={enquiryLink(s.name)}>
              Make an Enquiry
              <Icon name="arrow_forward" className="mv" />
            </Link>
          </>
        }
        crumbs={[{ label: "Services", href: "/services" }, { label: s.name }]}
        quick={[
          { icon: "chat", label: "WhatsApp", value: `Ask about ${s.short}`, href: whatsappLink(s.name), external: true },
          { icon: "call", label: "Call us", value: SITE.phoneDisplay, href: SITE.phoneHref },
          { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
          { icon: "edit_note", label: "Enquiry form", value: "Send us the details", href: enquiryLink(s.name) },
        ]}
      />

      <div className="wrap goback-row">
        <Link className="goback" href="/services">
          <Icon name="arrow_back" />
          Go back
        </Link>
      </div>

      <section className="sec" aria-labelledby="ov-title">
        <div className="wrap ov">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 id="ov-title" className="serif h2">
              {s.overviewTitle}
            </h2>
          </div>
          <div className="stack" style={{ paddingTop: 8 }}>
            <p className="lead lead-ink">{s.overview1}</p>
            <p className="muted">{s.overview2}</p>
            {s.scopeToConfirm && (
              <p className="small muted" style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <Tbc>Scope to confirm</Tbc>Drafted as travel escort and personal assistance. Trensleek to confirm the exact
                scope.
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: "clamp(80px, 10vw, 148px)" }}>
        <div className={`band ${s.band.length === 2 ? "two" : "one"}`}>
          {s.band.map((b) => (
            <figure className="zoom" key={b.image} style={{ margin: 0, height: "100%" }}>
              <Img name={b.image} alt={b.alt} sizes={s.band.length === 2 ? "(max-width: 1080px) 100vw, 55vw" : "100vw"} />
            </figure>
          ))}
        </div>
      </div>

      <section className="sec sand" aria-labelledby="offer-title">
        <div className="wrap offer">
          <div className="offer-l">
            <p className="eyebrow">What we offer</p>
            <h2 id="offer-title" className="serif h2" style={{ marginBottom: 22 }}>
              How we help
            </h2>
            <p className="muted">
              What&apos;s included when you choose Trensleek for {s.key === "EscortServices" ? "escort services" : s.short.toLowerCase()}.
            </p>
          </div>
          <ul className="olist">
            {s.offers.map((o, k) => (
              <li key={o.title}>
                <span className="n">{`0${k + 1}`}</span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks need={need} />

      <section className="sec" aria-labelledby="why-title">
        <div className="wrap">
          <div className="wrow" style={{ marginBottom: 56 }}>
            <div>
              <p className="eyebrow">Why Trensleek</p>
            </div>
            <h2 id="why-title" className="serif h2">
              {s.whyTitle}
            </h2>
          </div>
          <ValuesGrid />
        </div>
      </section>

      <section className="sec" aria-labelledby="rel-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="row-head" style={{ marginBottom: 48 }}>
            <div>
              <p className="eyebrow">Related services</p>
              <h2 id="rel-title" className="serif h2">
                You might also need
              </h2>
            </div>
            <Link className="tlink" href="/services">
              All services
              <Icon name="arrow_outward" />
            </Link>
          </div>
          <div className="rel">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`}>
                <div className="ri zoom">
                  <Img name={r.cardImage} alt={r.cardAlt} sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <div>
                  <p className="rel-num">{r.num}</p>
                  <h3 className="serif">{r.name}</h3>
                </div>
                <span className="tlink" style={{ alignSelf: "flex-start" }}>
                  View Details
                  <Icon name="arrow_outward" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
