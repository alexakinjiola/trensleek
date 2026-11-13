import type { CSSProperties, ReactNode } from "react";
import { BRAND_ICONS } from "@/lib/brandIcons";
import { SOCIAL, whatsappLink } from "@/lib/site";

/* ---------- Responsive image: every photo ships as 800w + 1600w WebP ---------- */
type ImgProps = {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  style?: CSSProperties;
};

export function Img({ name, alt, className = "cover", sizes = "100vw", eager = false, style }: ImgProps) {
  return (
    <img
      className={className}
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-sm.webp 800w, /images/${name}.webp 1600w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      style={style}
    />
  );
}

/* ---------- Google Material Symbols ---------- */
export function Icon({ name, className = "", style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <span className={`ms ${className}`.trim()} aria-hidden="true" style={style}>
      {name}
    </span>
  );
}

/* ---------- Brand icons (Font Awesome Free, CC BY 4.0) ---------- */
export function BrandIcon({ name, size = 18 }: { name: keyof typeof BRAND_ICONS | string; size?: number }) {
  const icon = BRAND_ICONS[name];
  if (!icon) return null;
  return (
    <svg viewBox={icon.vb} width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      {icon.d.map((d) => (
        <path key={d.slice(0, 16)} d={d} />
      ))}
    </svg>
  );
}

export function SocialLinks({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <ul className={`socs socs-${variant}`} aria-label="Trensleek on social media">
      {SOCIAL.map((s) => (
        <li key={s.label}>
          <a className="soc" href={s.href} target="_blank" rel="noopener" aria-label={`${s.label} (opens in a new tab)`}>
            <BrandIcon name={s.icon} />
          </a>
        </li>
      ))}
      <li>
        <a className="soc" href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp (opens in a new tab)">
          <BrandIcon name="whatsapp" />
        </a>
      </li>
    </ul>
  );
}

/* ---------- Logo: a T drawn as a wing on its climb-out ---------- */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg className="mk" viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false">
      <rect className="mk-bg" width="48" height="48" rx="14" />
      <path className="mk-trail" d="M7 31.5c6.5-2.2 11.6-2.4 15.4-.6" fill="none" strokeWidth="1.6" strokeLinecap="round" />
      <path className="mk-fg mk-bar" d="M12.6 19.6 32.6 14" fill="none" strokeWidth="4.6" strokeLinecap="round" />
      <path className="mk-fg" d="M23.4 17.4 21.9 35.6" fill="none" strokeWidth="4.6" strokeLinecap="round" />
      <path className="mk-dot" d="M37.7 8.3 41 11.6 37.7 14.9 34.4 11.6z" />
    </svg>
  );
}

export function LogoInner() {
  return (
    <>
      <LogoMark />
      <span className="logo-tx">
        <span className="logo-w">trensleek</span>
        <span className="logo-s">Travels &amp; Tour</span>
      </span>
    </>
  );
}

/* ---------- Small labelled marker for content awaiting approval ---------- */
export function Tbc({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span className="tbc" style={style}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="eyebrow" style={style}>
      {children}
    </p>
  );
}

/* ---------- Turbulence: paper plane looping through a storm (error / 404) ---------- */
const PLANE_PATH =
  "M8 118 C 52 116, 78 92, 104 78 C 128 64, 136 40, 158 44 C 186 50, 176 98, 150 92 C 124 86, 150 46, 196 52 C 228 56, 244 40, 272 28";

export function Turbulence({ tone = "light" }: { tone?: "light" | "dark" }) {
  const cloud = tone === "dark" ? "#1B3F78" : "#DCE6F5";
  const ground = tone === "dark" ? "#2A4C80" : "#C8D4E8";
  return (
    <div className="tb" aria-hidden="true">
      <svg viewBox="0 0 280 150" width="280" height="150" focusable="false">
        <g className="tb-cl1">
          <path d="M28 50a14 14 0 0 1 26-6 11 11 0 0 1 17 9H24a8 8 0 0 1 4-3z" fill={cloud} />
        </g>
        <g className="tb-cl2">
          <path d="M206 108a12 12 0 0 1 22-5 9 9 0 0 1 14 8h-40a7 7 0 0 1 4-3z" fill={cloud} />
        </g>
        <path className="tb-trail" d={PLANE_PATH} fill="none" stroke="#8FA7CF" strokeWidth="1.6" strokeLinecap="round" />
        <g className="tb-storm">
          <path d="M128 66a20 20 0 0 1 38-8 16 16 0 0 1 24 13h-66a11 11 0 0 1 4-5z" fill={tone === "dark" ? "#2A5BA8" : "#0E3F8C"} opacity=".9" />
          <path className="tb-bolt" d="M154 72l-8 14h7l-5 12 13-17h-7l5-9z" fill="#C8102E" />
        </g>
        <path d="M248 132h24" stroke={ground} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="tb-plane">
        <svg viewBox="0 0 30 30">
          <path d="M2 5 28 15 2 25 8 15z" fill="#fff" stroke="#0E3F8C" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 15h20" stroke="#0E3F8C" strokeWidth="1.3" />
          <path d="M8 15l4 8 3-6" fill="#C9D7EE" stroke="#0E3F8C" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export function OkCheck() {
  return (
    <svg className="ok-anim" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="21" fill="none" stroke="#0E3F8C" strokeWidth="2.5" />
      <path d="M15 25l6 6 12-13" fill="none" stroke="#0E3F8C" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
