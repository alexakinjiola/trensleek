"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryLink, whatsappLink } from "@/lib/site";
import { Icon } from "../primitives";

const TABS = [
  { label: "Flights", service: "Flight Ticketing" },
  { label: "Private Jet", service: "Private Jet Rental/Hire" },
  { label: "Hotels", service: "Hotel Reservation" },
  { label: "Travel Advice", service: "Travel Consultancy" },
];

/** An enquiry shortcut, not a booking engine: it composes a WhatsApp message. */
export default function Planner() {
  const [tab, setTab] = useState(0);
  const [plan, setPlan] = useState({ to: "", from: "", when: "", pax: "" });
  const isHotel = tab === 2;

  const set = (k: keyof typeof plan) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setPlan((p) => ({ ...p, [k]: e.target.value }));

  const parts = [`Hello Trensleek, I would like to make an enquiry about ${TABS[tab].service}.`];
  if (plan.to.trim()) parts.push(`Destination: ${plan.to.trim()}.`);
  if (plan.from.trim()) parts.push(`${isHotel ? "Preferred area" : "Travelling from"}: ${plan.from.trim()}.`);
  if (plan.when.trim()) parts.push(`Dates: ${plan.when.trim()}.`);
  if (plan.pax.trim()) parts.push(`Travellers: ${plan.pax.trim()}.`);
  parts.push("Please provide more information.");

  return (
    <div className="wrap">
      <section className="planner" aria-labelledby="plan-title">
        <h2 id="plan-title" className="sr-only">
          Start planning your trip
        </h2>
        <div className="p-tabs" role="group" aria-label="What do you need?">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              className={`p-tab${i === tab ? " is-on" : ""}`}
              aria-pressed={i === tab}
              onClick={() => setTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="p-grid">
          <div className="pf">
            <label htmlFor="p-to">Where to?</label>
            <input id="p-to" type="text" placeholder="City or country" value={plan.to} onChange={set("to")} autoComplete="off" />
          </div>
          <div className="pf">
            <label htmlFor="p-from">{isHotel ? "Preferred area" : "Travelling from"}</label>
            <input
              id="p-from"
              type="text"
              placeholder={isHotel ? "e.g. near the venue" : "e.g. Abuja"}
              value={plan.from}
              onChange={set("from")}
              autoComplete="off"
            />
          </div>
          <div className="pf">
            <label htmlFor="p-when">When</label>
            <input id="p-when" type="text" placeholder="e.g. 12–19 Dec" value={plan.when} onChange={set("when")} autoComplete="off" />
          </div>
          <div className="pf">
            <label htmlFor="p-pax">Travellers</label>
            <input id="p-pax" type="text" placeholder="e.g. 2 adults" value={plan.pax} onChange={set("pax")} autoComplete="off" />
          </div>
        </div>
        <div className="p-foot">
          <p className="small muted" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Icon name="support_agent" style={{ color: "var(--blue)", fontSize: 20 }} />
            Not a booking engine. A real person replies with options.
          </p>
          <div className="btns">
            <Link className="btn btn-outline btn-sm" href={enquiryLink()}>
              Use the full form
            </Link>
            <a className="btn btn-wa" href={whatsappLink(undefined, parts.join(" "))} target="_blank" rel="noopener">
              <Icon name="chat" />
              Continue on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
