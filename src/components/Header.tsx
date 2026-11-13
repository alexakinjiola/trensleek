"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, whatsappLink, enquiryLink } from "@/lib/site";
import { Icon, LogoInner, SocialLinks } from "./primitives";

function isActive(pathname: string, href: string) {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (href === "/") return clean === "/";
  return clean === href || clean.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Solid bar once past the hero; hide while scrolling down, reveal on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 80);
        if (Math.abs(y - lastY) > 6) {
          setHidden(y > lastY && y > 420);
          lastY = y;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const trigger = openBtn.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !dialog.current) return;
      // Keep keyboard focus inside the open menu.
      const nodes = dialog.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className={`hdr hdr-ov${scrolled ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}>
      <div className="wrap hdr-in">
        <Link href="/" className="logo" aria-label="Trensleek Travels and Tour, home">
          <LogoInner />
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(pathname, n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-cta">
          <a
            className="icon-btn"
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            aria-label="Chat with us on WhatsApp (opens in a new tab)"
          >
            <Icon name="chat" />
          </a>
          <Link className="btn btn-sm btn-light" href={enquiryLink()}>
            Make an Enquiry
          </Link>
          <button
            ref={openBtn}
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mnav" id="mnav" role="dialog" aria-modal="true" aria-label="Menu" ref={dialog}>
          <div className="mnav-top">
            <span className="logo">
              <LogoInner />
            </span>
            <button ref={closeBtn} type="button" className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
          </div>
          <nav className="mnav-links" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(pathname, n.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {n.label}
                <Icon name="arrow_forward" />
              </Link>
            ))}
          </nav>
          <div className="mnav-foot">
            <a className="btn btn-wa" href={whatsappLink()} target="_blank" rel="noopener">
              <Icon name="chat" />
              Chat with Us on WhatsApp
            </a>
            <Link className="btn btn-light" href={enquiryLink()} onClick={() => setOpen(false)}>
              Make an Enquiry
            </Link>
            <SocialLinks variant="dark" />
          </div>
        </div>
      )}
    </header>
  );
}
