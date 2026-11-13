import { Icon } from "./primitives";

export const VALUES = [
  { icon: "handshake", title: "Integrity", short: "Clear, honest advice at every step.", long: "We give clear, honest advice, so you can make decisions with confidence." },
  { icon: "lock", title: "Confidentiality", short: "Your details and plans handled with discretion.", long: "Your plans and personal information are handled with discretion." },
  { icon: "support_agent", title: "Customer Centricity", short: "Arrangements shaped around what you need.", long: "We start with what you need and shape every arrangement around it." },
  { icon: "bolt", title: "Speed", short: "Prompt responses when time matters.", long: "We respond promptly, because travel plans often can't wait." },
] as const;

export function ValuesGrid({ long = false }: { long?: boolean }) {
  return (
    <div className="vals">
      {VALUES.map((v) => (
        <div className="val" key={v.title}>
          <Icon name={v.icon} />
          <h3>{v.title}</h3>
          <p>{long ? v.long : v.short}</p>
        </div>
      ))}
    </div>
  );
}

export function HowItWorks({ need }: { need: string }) {
  const steps = [
    { title: "Get in touch", text: `Message us on WhatsApp or send an enquiry through our contact page. Tell us what you need for your ${need}.` },
    { title: "Talk it through", text: "A member of our team contacts you to understand your plans, answer questions and confirm the details." },
    { title: "We make the arrangements", text: "Once you're happy with the options, we take care of the arrangements and keep you informed." },
  ];
  return (
    <section className="sec navy on-dark" aria-labelledby="how-title">
      <div className="wrap">
        <div className="g12" style={{ marginBottom: 56, alignItems: "end" }}>
          <div style={{ gridColumn: "1 / span 7" }} className="g-span">
            <p className="eyebrow">How it works</p>
            <h2 id="how-title" className="serif h2">
              Three simple steps, one person looking after you.
            </h2>
          </div>
        </div>
        <ol className="steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              <p className="step-n">{`0${i + 1}`}</p>
              <h3>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,.8)" }}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
