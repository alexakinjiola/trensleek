import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, Turbulence } from "@/components/primitives";
import { whatsappLink } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageHero
      image="wing-pink"
      alt="An aircraft wing above pink clouds at dusk"
      kicker="Error 404"
      lines={["This page took a", <em key="a">different flight</em>]}
      sub="The page you're looking for has moved or no longer exists. Let's get you back on course."
      art={
        <div className="nf-tb">
          <Turbulence tone="dark" />
        </div>
      }
      actions={
        <>
          <Link className="btn btn-light" href="/">
            Back to Home
            <Icon name="arrow_forward" className="mv" />
          </Link>
          <Link className="btn btn-ghost" href="/services">
            Explore Our Services
          </Link>
        </>
      }
      card={{ tag: "Need help?", title: "Chat with us on WhatsApp", href: whatsappLink(), external: true, image: "traveller-lounge" }}
      quick={[
        { icon: "home", label: "Go to", value: "Home", href: "/" },
        { icon: "travel_explore", label: "Browse", value: "Our services", href: "/services" },
        { icon: "chat", label: "WhatsApp", value: "Chat with us now", href: whatsappLink(), external: true },
        { icon: "mail", label: "Contact", value: "Get in touch", href: "/contact" },
      ]}
    />
  );
}
