import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, Img } from "@/components/primitives";
import TeamBio from "@/components/TeamBio";
import { ValuesGrid } from "@/components/sections";
import { enquiryLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trensleek Travels and Tour Ltd is a Nigerian-owned travel company: our vision, mission, values and management team.",
  alternates: { canonical: "/about/" },
};

// All six profiles supplied by Trensleek.
// TODO(Trensleek): Boluwatife's course of study.
type Member = { name: string; role: string; image?: string; bio: string[] };

const TEAM: Member[] = [
  {
    name: "Ayoola Tolulope",
    role: "Managing Director / CEO",
    image: "team-ayoola",
    bio: [
      "Ayoola is a seasoned Nigerian entrepreneur with over 10 years' experience in the travel and tourism industry. She is an Associate Member of Women in Business and holds a bachelor's degree in Economics from Olabisi Onabanjo University.",
      "At Trensleek Travels and Tour Ltd, Ayoola provides strategic leadership for the overall performance of the business.",
    ],
  },
  {
    name: "Adedoye Bukola",
    role: "Executive Director",
    image: "team-bukola",
    bio: [
      "Bukola is an Executive Director in charge of Customer Management at Trensleek Travels. She previously worked as a Customer Service Officer at Ecobank Nigeria PLC.",
      "An accomplished fashion designer and entrepreneur, she is the founder of Edens Fashion World and has over 18 years' experience in the fashion industry, where she combines creativity, innovation and business leadership to deliver excellence. She holds a B.Sc. in Accounting from Obafemi Awolowo University, Ile-Ife.",
    ],
  },
  {
    name: "Esther Ogunwumiju",
    role: "Non-Executive Director",
    image: "team-esther",
    bio: [
      "Esther is a Non-Executive Director in charge of corporate governance at Trensleek Travels.",
      "She is a professionally trained and certified nurse with over six years' cognate experience, as well as a business leader and career coach. Esther is a graduate of Ladoke Akintola University of Technology, Nigeria.",
    ],
  },
  {
    name: "Faith Emmanuel",
    role: "Client Service Manager",
    image: "team-faith",
    bio: [
      "Faith is a young client service professional who ensures every client receives royal treatment through the quality of our service delivery.",
      "Faith is a graduate of Home Economics from the prestigious University of Lagos. In addition to client management, Faith is a skilful social media professional.",
    ],
  },
  {
    name: "Boluwatife Adeniyi",
    role: "Business Development Officer",
    image: "team-boluwatife",
    bio: [
      "Boluwatife is a Business Development Officer responsible for lead conversion at Trensleek Travels.",
      "Boluwatife is a graduate of Adekunle Ajasin University, Akungba-Akoko, Ondo State.",
    ],
  },
  {
    name: "Rokibat Mustapha",
    role: "Business Analyst",
    image: "team-rokibat",
    bio: [
      "Rokibat is an Economics graduate and Business Analyst with an interest in business strategy, data analytics and organisational development.",
      "She brings an analytical, research-driven approach to understanding business operations, identifying opportunities for improvement and supporting informed decision-making. With a growing background in data analysis and financial evaluation, she is passionate about using data and strategic insight to improve business performance and drive sustainable growth.",
    ],
  },
];

const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
              From offices in Abuja, Lagos and Ogun State, we help individuals and organisations with local and international
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
          <h2 id="vm-title" className="eyebrow" style={{ marginBottom: 48 }}>
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
          </div>
          <div className="team2">
            {TEAM.map((t, k) => (
              <article className="tm2" key={t.name}>
                <div className="tm2-ph">
                  {t.image ? (
                    <Img name={t.image} alt={`${t.name}, ${t.role} at Trensleek Travels and Tour`} sizes="(max-width: 760px) 100vw, 33vw" />
                  ) : (
                    <div className="tm2-mono" aria-hidden="true">
                      <span>{initials(t.name)}</span>
                    </div>
                  )}
                  <span className="tm2-n">{`0${k + 1}`}</span>
                </div>
                <div className="tm2-info">
                  <h3 className="tm2-name">{t.name}</h3>
                  <p className="tm2-role">{t.role}</p>
                  <TeamBio paragraphs={t.bio} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
