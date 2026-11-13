import Link from "next/link";
import type { ReactNode } from "react";
import { SITE, whatsappLink } from "@/lib/site";
import { Icon, Img } from "./primitives";

export type Crumb = { label: string; href?: string };

export type QuickItem = { icon: string; label: string; value: string; href: string; external?: boolean };

export const DEFAULT_QUICK: QuickItem[] = [
  { icon: "chat", label: "WhatsApp", value: "Chat with us now", href: whatsappLink(), external: true },
  { icon: "call", label: "Call us", value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "location_on", label: "Offices", value: "Ogun State & Abuja", href: "/contact#offices" },
];

type HeroCard = { tag: string; title: string; href: string; image: string; external?: boolean };

type Props = {
  image: string;
  alt: string;
  kicker: string;
  /** Title lines; wrap the accent word in <em>. */
  lines: ReactNode[];
  sub: ReactNode;
  actions: ReactNode;
  crumbs?: Crumb[];
  card?: HeroCard;
  quick?: QuickItem[];
  /** "page" = centred inner hero, "service" = compact left-aligned service hero */
  variant?: "page" | "service";
  large?: boolean;
  art?: ReactNode;
};

function Anchor({ href, external, className, children }: { href: string; external?: boolean; className: string; children: ReactNode }) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal && !external) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}

export function QuickBar({ items = DEFAULT_QUICK }: { items?: QuickItem[] }) {
  return (
    <div className="wrap">
      <section className="planner" aria-label="Quick contact">
        <div className="qgrid">
          {items.map((q) => (
            <Anchor key={q.label} href={q.href} external={q.external} className={`qi${q.icon === "chat" ? " wa" : ""}`}>
              <span className="ic">
                <Icon name={q.icon} />
              </span>
              <span>
                <small>{q.label}</small>
                <strong>{q.value}</strong>
              </span>
            </Anchor>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function PageHero({
  image,
  alt,
  kicker,
  lines,
  sub,
  actions,
  crumbs,
  card,
  quick,
  variant = "page",
  large = false,
  art,
}: Props) {
  const isService = variant === "service";
  return (
    <>
      <section className={`hero2 inner${isService ? " svc" : ""}`} aria-labelledby="h1">
        <div className="hs-media">
          <Img name={image} alt={alt} className="cover kb" eager sizes="100vw" />
        </div>
        <div className="hs-scrim" aria-hidden="true" />
        <div className="hs-in">
          {crumbs && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} style={{ display: "contents" }}>
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link href={c.href}>{c.label}</Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {art}
          <p className="hs-kicker">{kicker}</p>
          <h1 id="h1" className={`hs-title${large ? "" : " sm"}`}>
            {lines.map((l, i) => (
              <span className="ln" key={i}>
                <span>{l}</span>
              </span>
            ))}
          </h1>
          <p className="hs-sub">{sub}</p>
          <div className="btns hs-ctas">{actions}</div>
        </div>
        {card && (
          <Anchor href={card.href} external={card.external} className="hs-card">
            <Img name={card.image} alt="" className="" sizes="84px" />
            <span>
              <small>{card.tag}</small>
              <strong>{card.title}</strong>
            </span>
            <Icon name="arrow_outward" />
          </Anchor>
        )}
      </section>
      <QuickBar items={quick} />
      <div id="content" />
    </>
  );
}
