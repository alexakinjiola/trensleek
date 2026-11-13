import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "services", "contact", "careers", ...SERVICES.map((s) => `services/${s.slug}`)];
  return pages.map((p) => ({
    url: `${SITE.url}/${p ? `${p}/` : ""}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("services/") ? 0.8 : 0.7,
  }));
}
