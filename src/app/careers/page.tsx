import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/primitives";
import { CAREERS_MAILTO, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Trensleek Travels and Tour. We are an equal-opportunity employer: send your CV to trensleekcareers@gmail.com.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        image="careers-hero"
        alt="A team collaborating around a table in a bright office, one colleague presenting at a whiteboard"
        kicker="Careers at Trensleek"
        lines={["Help people travel", <em key="a">with confidence</em>]}
        sub="We're always glad to hear from people who care about the details and enjoy looking after others."
        actions={
          <>
            <a className="btn btn-light" href={CAREERS_MAILTO}>
              <Icon name="mail" />
              Send Your CV
            </a>
            <a className="btn btn-ghost" href="#apply">
              How to apply
            </a>
          </>
        }
        crumbs={[{ label: "Careers" }]}
        card={{ tag: "Recruitment", title: "Email your CV to our team", href: CAREERS_MAILTO, image: "desk" }}
        quick={[
          { icon: "mail", label: "Send your CV", value: "Email our recruitment team", href: CAREERS_MAILTO },
          { icon: "description", label: "Attach", value: "Your up-to-date CV", href: "#apply" },
          { icon: "diversity_3", label: "We are", value: "An equal-opportunity employer", href: "#eeo" },
          { icon: "apartment", label: "About us", value: "Who we are", href: "/about" },
        ]}
      />

      <section className="sec" aria-labelledby="work-title">
        <div className="wrap ov">
          <div>
            <p className="eyebrow">Working with us</p>
            <h2 id="work-title" className="serif h2">
              Integrity, confidentiality, customer centricity and speed.
            </h2>
          </div>
          <div className="stack" style={{ paddingTop: 8 }}>
            <p className="lead lead-ink">Our values shape how we treat travellers, and how we work with each other.</p>
            <p className="muted">
              If you share them and want to grow in travel and tourism, we&apos;d like to hear from you, whether or not a
              specific role is advertised.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-sm navy on-dark" id="eeo" aria-labelledby="eeo-title">
        <div className="wrap wrow">
          <div>
            <p className="eyebrow">Equal opportunity</p>
          </div>
          <h2 id="eeo-title" className="serif h3" style={{ fontSize: "clamp(26px, 2.8vw, 42px)", lineHeight: 1.2 }}>
            Trensleek Travels and Tour Ltd is an equal-opportunity employer. We welcome applications from all suitably
            qualified people, regardless of gender, ethnicity, religion, disability, age or background.
          </h2>
        </div>
      </section>

      <section className="sec" id="apply" aria-labelledby="apply-title">
        <div className="wrap">
          <p className="eyebrow">How to apply</p>
          <h2 id="apply-title" className="serif h2" style={{ marginBottom: 48 }}>
            Applying is simple.
          </h2>
          <div className="apply">
            <div className="apply-l">
              <ol className="olist" style={{ borderTop: 0 }}>
                <li style={{ paddingTop: 0 }}>
                  <span className="n">01</span>
                  <div>
                    <h3>Prepare your CV</h3>
                    <p>Make sure it&apos;s up to date, with your contact details and relevant experience.</p>
                  </div>
                </li>
                <li>
                  <span className="n">02</span>
                  <div>
                    <h3>Email it to us</h3>
                    <p>
                      Send your CV as an attachment to <strong style={{ color: "var(--ink)" }}>{SITE.careersEmail}</strong>,
                      with the role you&apos;re interested in in the subject line.
                    </p>
                  </div>
                </li>
                <li style={{ borderBottom: 0 }}>
                  <span className="n">03</span>
                  <div>
                    <h3>We&apos;ll be in touch</h3>
                    <p>We review every application. Only suitably qualified candidates will be contacted.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="apply-r on-dark">
              <p className="opt-tag" style={{ color: "#FFB3BF" }}>
                Recruitment email
              </p>
              <a className="email-big" href={CAREERS_MAILTO}>
                {SITE.careersEmail}
              </a>
              <p style={{ color: "rgba(255,255,255,.82)" }}>
                The button below opens your email app with a subject line ready. Remember to attach your CV before sending.
              </p>
              <a className="btn btn-red" href={CAREERS_MAILTO} style={{ alignSelf: "flex-start" }}>
                <Icon name="attach_file" />
                Send Your CV
              </a>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 24 }}>
            Want to know more about us first? <Link href="/about">Read about Trensleek</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
