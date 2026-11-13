"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { BrandIcon, Icon } from "./primitives";

/** Cards that get a soft spotlight following the pointer. */
const SPOT = ".vc, .srv, .val, .office, .tm2, .dcard, .step, .qi, .jstep, .feat, .sc, .rel > a, .wa-card, .form-card";

/**
 * Site-wide micro-interactions:
 * - reading progress line at the top of the page
 * - floating WhatsApp + back-to-top buttons (with a progress ring)
 * - pointer-following spotlight on cards (pointer devices only)
 */
export default function Interactions() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        setShowTop(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(SPOT) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const C = 2 * Math.PI * 21; // progress ring circumference

  return (
    <>
      <div className="read-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <div className="fab-stack">
        <button
          type="button"
          className={`fab fab-top${showTop ? " is-on" : ""}`}
          onClick={toTop}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
          aria-hidden={!showTop}
        >
          <svg className="fab-ring" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="21" />
            <circle cx="24" cy="24" r="21" className="fab-ring-on" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }} />
          </svg>
          <Icon name="arrow_upward" />
        </button>
        <a
          className="fab fab-wa"
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
          aria-label="Chat with us on WhatsApp (opens in a new tab)"
        >
          <BrandIcon name="whatsapp" size={26} />
          <span className="fab-tip" aria-hidden="true">
            Chat with us
          </span>
        </a>
      </div>
    </>
  );
}
