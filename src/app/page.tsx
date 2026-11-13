import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import Planner from "@/components/home/Planner";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import { Icon, Img } from "@/components/primitives";
import { enquiryLink, whatsappLink } from "@/lib/site";

const DESTINATIONS = [
  { image: "london", name: "London, UK", sub: "Flights & stays on request", alt: "Aerial view of London and Tower Bridge" },
  { image: "dubai", name: "Dubai, UAE", sub: "Flights & stays on request", alt: "The Dubai skyline at sunrise" },
  { image: "paris", name: "Paris, France", sub: "Flights & stays on request", alt: "Pont Alexandre III in Paris at dusk" },
  { image: "lagos", name: "Lagos, Nigeria", sub: "Local flights & hotels", alt: "Aerial view of Lagos and the lagoon" },
  { image: "beach", name: "A beach escape", sub: "Tell us the kind of coast you love", alt: "Waves on a quiet beach at sunset" },
  { image: "lake", name: "Mountains & lakes", sub: "Tell us the kind of view you want", alt: "A wooden boat on a clear mountain lake" },
];

const VALUES = [
  { num: "01", icon: "handshake", tag: "Integrity", title: "Straight answers, every time.", text: "Clear, honest advice so you can make travel decisions with confidence.", image: "handshake", alt: "Two professionals shaking hands across a desk" },
  { num: "02", icon: "lock", tag: "Confidentiality", title: "Your plans stay yours.", text: "Personal details and itineraries are handled with complete discretion.", image: "cabin", alt: "A quiet aircraft cabin aisle before departure" },
  { num: "03", icon: "support_agent", tag: "Customer Centricity", title: "Built around you.", text: "Every arrangement starts with what you actually need, not a script.", image: "desk", alt: "Colleagues reviewing travel plans together at a desk" },
  { num: "04", icon: "bolt", tag: "Speed", title: "Fast when it matters.", text: "Prompt, attentive responses when your plans can’t wait.", image: "airliner", alt: "An airliner climbing into a clear blue sky" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Planner />

      <section className="sec" aria-labelledby="dest-title">
        <div className="wrap">
          <div className="row-head">
            <div>
              <p className="eyebrow">Where to next</p>
              <h2 id="dest-title" className="serif h2">
                Plan your <em>perfect</em> trip
              </h2>
              <p className="muted" style={{ marginTop: 12 }}>
                Tap a place to start a WhatsApp conversation about it.
              </p>
            </div>
            <a className="btn btn-outline btn-sm" href={whatsappLink()} target="_blank" rel="noopener">
              Somewhere else?
              <Icon name="arrow_forward" className="mv" />
            </a>
          </div>
          <div className="dgrid">
            {DESTINATIONS.map((d) => (
              <a
                key={d.name}
                className="dcard"
                href={whatsappLink(undefined, `Hello Trensleek, I would like to plan a trip to ${d.name}. Please provide more information.`)}
                target="_blank"
                rel="noopener"
                aria-label={`Plan a trip to ${d.name} on WhatsApp (opens in a new tab)`}
              >
                <div className="zoom">
                  <Img name={d.image} alt={d.alt} sizes="96px" />
                </div>
                <div>
                  <strong>{d.name}</strong>
                  <span className="s">{d.sub}</span>
                </div>
                <Icon name="arrow_outward" className="go" />
              </a>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 18 }}>
            Photography for inspiration. Routes, fares and availability are confirmed with you on enquiry.
          </p>
        </div>
      </section>

      <section aria-label="Flights and stays" style={{ paddingBottom: "clamp(80px, 10vw, 148px)" }}>
        <div className="wrap feats">
          <Link className="feat" href="/services/international-flight-ticketing">
            <Img name="traveller-lounge" alt="A traveller resting at an airport gate as a plane takes off outside" sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="feat-in">
              <h3>Flights</h3>
              <p>Local and international flight tickets, arranged personally at fair prices.</p>
              <span className="btn btn-light btn-sm">
                Explore flights
                <Icon name="arrow_forward" className="mv" />
              </span>
            </div>
          </Link>
          <Link className="feat" href="/services/hotel-reservation">
            <Img name="resort-pool" alt="Thatched resort villas around a turquoise pool, framed by palms" sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="feat-in">
              <h3>Stays</h3>
              <p>Hotel reservations matched to your trip, your taste and your budget.</p>
              <span className="btn btn-light btn-sm">
                Explore stays
                <Icon name="arrow_forward" className="mv" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="sec" aria-labelledby="j-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow">How it works</p>
            <h2 id="j-title" className="serif h2">
              Your journey, <em>made simple.</em>
            </h2>
            <p className="muted" style={{ marginTop: 14 }}>
              Three steps, one dedicated team, and no booking forms to wrestle with.
            </p>
          </div>
          <ol className="jgrid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li className="jstep">
              <span className="ic">
                <Icon name="travel_explore" />
              </span>
              <span className="jnum">STEP 01</span>
              <h3>Choose your service</h3>
              <p>Flights, private jet hire, hotels or advice. Pick what you need, or tell us you&apos;re not sure yet.</p>
            </li>
            <li className="jstep hi">
              <div className="jimg">
                <Img name="wing-pink" alt="" sizes="(max-width: 1080px) 100vw, 40vw" />
              </div>
              <div className="jt">
                <span className="jnum">STEP 02</span>
                <h3>Make an enquiry</h3>
                <p>Message us on WhatsApp or send the enquiry form. A member of our team gets back to you personally.</p>
                <Link className="btn btn-light btn-sm" style={{ alignSelf: "flex-start" }} href={enquiryLink()}>
                  Make an Enquiry
                  <Icon name="arrow_forward" className="mv" />
                </Link>
              </div>
            </li>
            <li className="jstep">
              <span className="ic">
                <Icon name="flight_takeoff" />
              </span>
              <span className="jnum">STEP 03</span>
              <h3>Travel with assurance</h3>
              <p>Once you&apos;re happy with the options, we make the arrangements and keep you informed.</p>
            </li>
          </ol>
        </div>
      </section>

      <ServicesCarousel />

      <section className="sec" aria-labelledby="val-title">
        <div className="wrap">
          <div className="row-head" style={{ marginBottom: 48 }}>
            <div>
              <p className="eyebrow">Why Trensleek</p>
              <h2 id="val-title" className="serif h2">
                What you can <em>expect</em> from us
              </h2>
            </div>
            <p className="small muted" style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <span className="tbc">Coming soon</span>Client testimonials will appear here once supplied.
            </p>
          </div>
          <div className="vgrid">
            {VALUES.map((v) => (
              <article className="vc" key={v.tag}>
                <div className="vc-media">
                  <Img name={v.image} alt={v.alt} sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 25vw" />
                  <span className="vc-num">{v.num}</span>
                </div>
                <div className="vc-body">
                  <span className="vc-ic">
                    <Icon name={v.icon} />
                  </span>
                  <p className="vc-tag">{v.tag}</p>
                  <h3 className="vc-h">{v.title}</h3>
                  <p className="vc-p">{v.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="promo-title" style={{ paddingTop: 0 }}>
        <div className="wrap promo">
          <div className="promo-l">
            <div className="zoom">
              <Img name="vision-wing" alt="An aircraft wing above sunlit clouds at sunset, rays of light breaking through" sizes="(max-width: 1080px) 100vw, 42vw" />
            </div>
            <div className="promo-tag">
              <Icon name="verified_user" />
              <span className="small">
                <strong style={{ display: "block", fontSize: 15 }}>Client safety first</strong>A focus that runs through
                everything we arrange.
              </span>
            </div>
          </div>
          <div className="promo-r">
            <p className="eyebrow">Our vision</p>
            <h2 id="promo-title" className="big-up" style={{ marginBottom: 30 }}>
              Comfort &amp; assurance, <em>worldwide.</em>
            </h2>
            <p className="lead" style={{ maxWidth: 560 }}>
              To be the preferred travel company, delivering comfort and assurance globally at pocket-friendly prices. Our
              mission is personalised and sustainable travel for modern travellers.
            </p>
            <Link className="wide-btn" href={enquiryLink()}>
              <Img name="wing-pink" alt="" sizes="(max-width: 1080px) 100vw, 58vw" />
              <span>Plan your next trip with us</span>
              <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
