"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ENQUIRY_ENDPOINT, SERVICE_OPTIONS, SITE, whatsappLink } from "@/lib/site";
import { Icon, OkCheck, Turbulence } from "./primitives";

type Field = "name" | "email" | "phone" | "service" | "message";
type Values = Record<Field, string> & { contact: string; company: string };
type Status = "idle" | "loading" | "success" | "error" | "unconfigured";

const EMPTY: Values = { name: "", email: "", phone: "", service: "", message: "", contact: "", company: "" };
const REQUIRED: Field[] = ["name", "email", "phone", "service", "message"];

function check(field: Field, raw: string): string {
  const v = raw.trim();
  switch (field) {
    case "name":
      return v.length < 2 ? "Please enter your full name." : "";
    case "email":
      if (!v) return "Please enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter an email address in the format name@example.com.";
    case "phone":
      if (!v) return "Please enter a phone number we can reach you on.";
      return v.replace(/\D/g, "").length < 7
        ? "That number looks too short. Please check it and include the country code if needed."
        : "";
    case "service":
      return v ? "" : "Choose the service you are enquiring about.";
    case "message":
      if (!v) return "Tell us a little about your trip or request.";
      return v.length < 10 ? "Please add a few more details (at least 10 characters)." : "";
  }
}

const CONTACT_METHODS = [
  { value: "Email", icon: "mail" },
  { value: "Phone call", icon: "call" },
  { value: "WhatsApp", icon: "chat" },
] as const;

export default function EnquiryForm() {
  const params = useSearchParams();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  // Preselect the service when arriving from a service page (?service=...).
  const preset = params?.get("service") ?? "";
  const [appliedPreset, setAppliedPreset] = useState("");
  if (preset && preset !== appliedPreset && (SERVICE_OPTIONS as readonly string[]).includes(preset)) {
    setAppliedPreset(preset);
    setValues((v) => ({ ...v, service: preset }));
  }

  useEffect(() => {
    if (showSummary) summaryRef.current?.focus();
  }, [showSummary]);

  const update = (field: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (field in touched && touched[field as Field] && errors[field as Field]) {
      setErrors((er) => ({ ...er, [field]: check(field as Field, value) }));
    }
    if (status === "success") setStatus("idle");
  };

  const blur = (field: Field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((er) => ({ ...er, [field]: check(field, values[field]) }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (values.company) return; // spam trap

    const next: Partial<Record<Field, string>> = {};
    REQUIRED.forEach((f) => {
      const m = check(f, values[f]);
      if (m) next[f] = m;
    });
    setTouched({ name: true, email: true, phone: true, service: true, message: true });
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("idle");
      setShowSummary(true);
      return;
    }
    setShowSummary(false);

    if (!ENQUIRY_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          service: values.service,
          message: values.message.trim(),
          preferredContact: values.contact || "No preference",
          page: typeof window !== "undefined" ? window.location.pathname : "",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues({ ...EMPTY, service: preset });
      setTouched({});
    } catch {
      setStatus("error"); // entries are kept so the visitor can retry
    }
  }

  const errorCount = Object.values(errors).filter(Boolean).length;
  const inv = (f: Field) => (errors[f] ? true : undefined);

  const err = (f: Field) =>
    errors[f] ? (
      <p className="ferr" id={`e-${f}`}>
        <Icon name="error" />
        {errors[f]}
      </p>
    ) : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby="form-note">
      {showSummary && errorCount > 0 && (
        <div className="fstat fs-err fld full" role="alert" tabIndex={-1} ref={summaryRef}>
          <Icon name="error" />
          <div>
            <strong>
              {errorCount === 1
                ? "There is 1 thing to fix before we can send your enquiry."
                : `There are ${errorCount} things to fix before we can send your enquiry.`}
            </strong>
            Each field marked below needs a quick fix. Everything you&apos;ve typed is still here.
          </div>
        </div>
      )}

      <div className="fld">
        <label htmlFor="f-name">
          Full name<span className="req" aria-hidden="true">*</span>
        </label>
        <input className="inp" id="f-name" type="text" autoComplete="name" required aria-required="true"
          value={values.name} onChange={update("name")} onBlur={blur("name")}
          aria-invalid={inv("name")} aria-describedby={errors.name ? "e-name" : undefined} />
        {err("name")}
      </div>

      <div className="fld">
        <label htmlFor="f-email">
          Email address<span className="req" aria-hidden="true">*</span>
        </label>
        <input className="inp" id="f-email" type="email" inputMode="email" autoComplete="email" required aria-required="true"
          value={values.email} onChange={update("email")} onBlur={blur("email")}
          aria-invalid={inv("email")} aria-describedby={errors.email ? "e-email" : undefined} />
        {err("email")}
      </div>

      <div className="fld">
        <label htmlFor="f-phone">
          Phone number<span className="req" aria-hidden="true">*</span>
        </label>
        <input className="inp" id="f-phone" type="tel" inputMode="tel" autoComplete="tel" required aria-required="true"
          value={values.phone} onChange={update("phone")} onBlur={blur("phone")}
          aria-invalid={inv("phone")} aria-describedby={`h-phone${errors.phone ? " e-phone" : ""}`} />
        <span className="fhint" id="h-phone">Include the country code if you&apos;re outside Nigeria.</span>
        {err("phone")}
      </div>

      <div className="fld">
        <label htmlFor="f-service">
          Service of interest<span className="req" aria-hidden="true">*</span>
        </label>
        <div className="sel">
          <select className="inp" id="f-service" required aria-required="true"
            value={values.service} onChange={update("service")} onBlur={blur("service")}
            aria-invalid={inv("service")} aria-describedby={errors.service ? "e-service" : undefined}>
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <Icon name="expand_more" />
        </div>
        {err("service")}
      </div>

      <div className="fld full">
        <label htmlFor="f-message">
          Message<span className="req" aria-hidden="true">*</span>
        </label>
        <textarea className="inp" id="f-message" required aria-required="true"
          value={values.message} onChange={update("message")} onBlur={blur("message")}
          aria-invalid={inv("message")} aria-describedby={`h-message${errors.message ? " e-message" : ""}`} />
        <span className="fhint" id="h-message">
          Where and when you&apos;d like to travel, how many people, and anything else we should know.
        </span>
        {err("message")}
      </div>

      <fieldset className="fld full radios">
        <legend>
          Preferred contact method <span className="opt">(optional)</span>
        </legend>
        {CONTACT_METHODS.map((m) => (
          <label className="rad" key={m.value}>
            <input type="radio" name="contact" value={m.value} checked={values.contact === m.value} onChange={update("contact")} />
            <Icon name={m.icon} className="rad-ic" />
            <span className="rad-t">{m.value}</span>
            <Icon name="check_circle" className="rad-ok" />
          </label>
        ))}
      </fieldset>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-company">Company website</label>
        <input id="f-company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={update("company")} />
      </div>

      <div aria-live="polite" className="fld full">
        {status === "success" && (
          <div className="fstat fs-ok fstat-anim" role="status">
            <OkCheck />
            <div>
              <strong>Thank you — your enquiry has been received.</strong>A member of the Trensleek team will contact you
              using the details you provided. This is an enquiry only; nothing has been booked or charged.{" "}
              <button type="button" className="tlink linkbtn" onClick={() => setStatus("idle")}>
                Send another enquiry
              </button>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="fstat fs-err fstat-anim" role="alert" style={{ background: "#fff" }}>
            <Turbulence />
            <div>
              <strong>A little turbulence. Your enquiry didn&apos;t go through.</strong>Your details are still in the form,
              so you can try again in a moment. If it keeps happening, message us on{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "inherit" }}>
                WhatsApp
              </a>{" "}
              or email{" "}
              <a href={`mailto:${SITE.email}`} style={{ color: "inherit" }}>
                {SITE.email}
              </a>
              .
            </div>
          </div>
        )}
        {status === "unconfigured" && (
          <div className="fstat fs-warn fstat-anim" role="alert" style={{ background: "#fff" }}>
            <Turbulence />
            <div>
              <strong>Online enquiries are being set up — your message has not been sent.</strong>Please reach us on{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "inherit" }}>
                WhatsApp
              </a>{" "}
              or at{" "}
              <a href={`mailto:${SITE.email}`} style={{ color: "inherit" }}>
                {SITE.email}
              </a>{" "}
              for now.
            </div>
          </div>
        )}
      </div>

      <div className="fsub">
        <p className="fhint" id="form-note" style={{ maxWidth: 360 }}>
          Fields marked <span className="req">*</span> are required. We only use your details to respond to this
          enquiry. <Link href="/contact#privacy">Privacy notice</Link>
        </p>
        <button type="submit" className="btn btn-red" disabled={status === "loading"} aria-busy={status === "loading"}>
          {status === "loading" ? (
            <>
              <span className="spin" aria-hidden="true" />
              Sending your enquiry…
            </>
          ) : (
            <>
              Send Enquiry
              <Icon name="arrow_forward" className="mv" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
