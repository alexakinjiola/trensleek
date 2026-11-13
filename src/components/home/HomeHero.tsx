"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { enquiryLink } from "@/lib/site";
import { Icon, Img } from "../primitives";

const SLIDES = [
  {
    image: "home-hero",
    alt: "An airliner at the gate at dusk, the apron lit by the last of the evening light",
    tag: "Flight ticketing",
    title: "Local & international flights",
    href: "/services/local-flight-ticketing",
    thumb: "airliner",
  },
  {
    image: "jet-hero",
    alt: "A private jet on the tarmac silhouetted against a golden sunset",
    tag: "Private aviation",
    title: "Private jet rental and hire",
    href: "/services/private-jet-hire",
    thumb: "jet-stairs",
  },
  {
    image: "hotel-hero",
    alt: "A resort terrace with a curved pool and sun loungers at golden hour",
    tag: "Stays",
    title: "Hotel reservations, arranged",
    href: "/services/hotel-reservation",
    thumb: "hotel-room",
  },
];

const INTERVAL = 7000;

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  // null = follow the visitor's motion preference until they choose.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reduced;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % SLIDES.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused]);

  const cur = SLIDES[active];

  return (
    <section className={`hero2${paused ? " paused" : ""}`} aria-labelledby="hero-title" aria-roledescription="carousel">
      <div className="hs-media">
        {SLIDES.map((s, i) => (
          <div key={s.image} className={`hs-slide${i === active ? " is-on" : ""}`} aria-hidden={i !== active}>
            <Img name={s.image} alt={s.alt} eager={i === 0} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="hs-scrim" aria-hidden="true" />
      <div className="hs-in">
        <p className="hs-kicker">Comfort and assurance, wherever you go</p>
        <h1 id="hero-title" className="hs-title">
          <span className="ln">
            <span>Travel,</span>
          </span>
          <span className="ln">
            <span>
              <em>beautifully</em> arranged
            </span>
          </span>
        </h1>
        <p className="hs-sub">
          Flight tickets at fair prices, private jet hire, hotel reservations and personal travel advice, from a
          Nigerian-owned team that looks after you from first enquiry to safe arrival.
        </p>
        <div className="btns hs-ctas">
          <Link className="btn btn-light" href="/services">
            Explore Our Services
            <Icon name="arrow_forward" className="mv" />
          </Link>
          <Link className="btn btn-ghost" href={enquiryLink()}>
            Make an Enquiry
          </Link>
        </div>
      </div>

      <div className="hs-nav" role="group" aria-label="Choose slide">
        {SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            className={`hs-dot${i === active ? " is-on" : ""}`}
            aria-label={`Show slide ${i + 1}: ${s.tag}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {`0${i + 1}`}
          </button>
        ))}
      </div>

      <button type="button" className="hs-motion" onClick={() => setUserPaused(!paused)}>
        <Icon name={paused ? "play_arrow" : "pause"} style={{ fontSize: 18 }} />
        {paused ? "Play motion" : "Pause motion"}
      </button>

      <Link className="hs-card" href={cur.href}>
        <Img name={cur.thumb} alt="" className="" sizes="84px" />
        <span>
          <small>{cur.tag}</small>
          <strong>{cur.title}</strong>
        </span>
        <Icon name="arrow_outward" />
      </Link>

      <div className="hs-bar" aria-hidden="true">
        <i key={`${active}-${paused}`} />
      </div>
    </section>
  );
}
