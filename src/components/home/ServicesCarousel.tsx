"use client";

import Link from "next/link";
import { useRef } from "react";
import { SERVICES } from "@/lib/services";
import { Icon, Img } from "../primitives";

export default function ServicesCarousel() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * Math.max(300, el.clientWidth * 0.8), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="sec sand" aria-labelledby="svc-title">
      <div className="wrap">
        <div className="row-head">
          <div>
            <p className="eyebrow">Our services</p>
            <h2 id="svc-title" className="serif h2">
              Six services, <em>one</em> dedicated team
            </h2>
          </div>
          <div className="arrows">
            <button type="button" className="arw" aria-label="Previous services" onClick={() => scroll(-1)}>
              <Icon name="arrow_back" />
            </button>
            <button type="button" className="arw dark" aria-label="Next services" onClick={() => scroll(1)}>
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
        <div className="track" ref={track} tabIndex={0} role="region" aria-label="Services, scroll horizontally">
          {SERVICES.map((s) => (
            <Link key={s.slug} className="srv" href={`/services/${s.slug}`}>
              <Img name={s.cardImageHome} alt={s.cardAlt} sizes="(max-width: 760px) 84vw, (max-width: 1080px) 46vw, 31vw" />
              <span className="n">{s.num}</span>
              <div className="srv-in">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <span className="more">
                  View Details
                  <Icon name="arrow_forward" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
