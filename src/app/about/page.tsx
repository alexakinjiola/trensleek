import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, Img, Tbc } from "@/components/primitives";
import { ValuesGrid } from "@/components/sections";
import { enquiryLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trensleek Travels and Tour Ltd is a Nigerian-owned travel company: our vision, mission, values and management team.",
  alternates: { canonical: "/about/" },
};

// TODO(Trensleek): replace placeholder portraits and biographies; confirm Rokibat's surname and Miss Lagbaja's name.
const TEAM = [
  { name: "Ayoola Tolulope", role: "Managing Director / CEO", image: "team1" },
  { name: "Adedoye Bukola", role: "Executive Director", image: "team2" },
  { name: "Miss Tamedun", role: "Chief Operating Officer", image: "team5" },
  { name: "Mr Victor Akinwale", role: "Finance Manager", image: "team6" },
  { name: "Miss Lagbaja", role: "Client Service Manager", image: "team4" },
  { name: "Rokibat", role: "Business Analyst", image: "team3", note: "Surname to confirm" },
];

const plainName = (n: string) => n.replace(/^(Miss|Mr|Mrs|Ms|Dr) /, "");

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="lagos"
        alt="Aerial view of Lagos, with the lagoon and the Victoria Island skyline"
        kicker="Nigerian-owned. Built on trust."
        lines={["Comfort &", <em key="a">assurance</em>]}
        large
        sub="Travel management, affordable tickets and personalised assistance, delivered by people who take your safety and comfort seriously."
        actions={
          <>
            <Link className="btn btn-light" href="/services">
              Explore Our Services
              <Icon name="arrow_forward" className="mv" />
            </Link>
            <Link className="btn btn-ghost" href={enquiryLink()}>
              Make an Enquiry
            </Link>
          </>
        }
        crumbs={[{ label: "About Us" }]}
        card={{ tag: "Our values", title: "Integrity, confidentiality, care and speed", href: "#values", image: "handshake" }}
      />

      <section className="sec" aria-labelledby="story-title">
        <div className="wrap ov">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="story-title" className="serif h2">
              Comfort and assurance, at prices that make sense.
            </h2>
          </div>
          <div className="stack" style={{ paddingTop: 8 }}>
            <p className="lead lead-ink">
              Trensleek Travels and Tour Ltd is a Nigerian-owned travel company providing travel management services,
              affordable tickets and a focus on client safety.
            </p>
            <p className="muted">
              From offices in Ogun State and Abuja, we help individuals and organisations with local and international
              flights, private jet hire, hotel reservations and travel advice. Every enquiry is handled personally.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: "clamp(80px, 10vw, 148px)" }}>
        <div className="band two">
          <figure className="zoom" style={{ margin: 0, height: "100%" }}>
            <Img name="desk" alt="Colleagues reviewing documents and a laptop at a shared desk" sizes="(max-width: 1080px) 100vw, 55vw" />
          </figure>
          <figure className="zoom" style={{ margin: 0, height: "100%" }}>
            <Img name="lagos" alt="Aerial view of Lagos, with the lagoon and Victoria Island skyline" sizes="(max-width: 1080px) 100vw, 40vw" />
          </figure>
        </div>
      </div>

      <section className="sec navy on-dark" aria-labelledby="vm-title">
        <div className="wrap">
          <h2 id="vm-title" className="eyebrow">
            Vision &amp; mission
          </h2>
          <div className="vm-grid">
            <div>
              <p className="vm-label">Our vision</p>
              <p className="serif vm-text">
                To be the preferred travel company, delivering comfort and assurance globally at pocket-friendly prices.
              </p>
            </div>
            <div>
              <p className="vm-label">Our mission</p>
              <p className="serif vm-text">To provide personalised and sustainable travel experiences for modern travellers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="values" aria-labelledby="val-title">
        <div className="wrap">
          <div className="wrow" style={{ marginBottom: 56 }}>
            <div>
              <p className="eyebrow">Core values</p>
            </div>
            <h2 id="val-title" className="serif h2">
              What you can expect from us, every time.
            </h2>
          </div>
          <ValuesGrid long />
        </div>
      </section>

      <section className="sec sand" aria-labelledby="team-title">
        <div className="wrap">
          <div className="row-head" style={{ marginBottom: 48 }}>
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 id="team-title" className="serif h2">
                Management team
              </h2>
            </div>
            <Tbc>Placeholder photos · final portraits to follow</Tbc>
          </div>
          <div className="team2">
            {TEAM.map((t, k) => (
              <article className="tm2" key={t.name}>
                <div className="tm2-ph">
                  <Img name={t.image} alt={`Placeholder portrait for ${t.name}, ${t.role}`} sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="tm2-n">{`0${k + 1}`}</span>
                </div>
                <div className="tm2-info">
                  <h3 className="tm2-name">
                    {t.name}
                    {t.note && <Tbc style={{ fontSize: 10, padding: "3px 8px" }}>{t.note}</Tbc>}
                  </h3>
                  <p className="tm2-role">{t.role}</p>
                  <div className="tm2-bio">
                    <Tbc>Biography to follow</Tbc>
                    <p>
                      A short profile of {plainName(t.name)}: professional background, experience and their focus at
                      Trensleek Travels and Tour.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
