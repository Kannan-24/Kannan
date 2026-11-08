// Vite plugin: fills the %SITE_…% placeholders in index.html from
// src/config/site.js, and emits robots.txt + sitemap.xml at build time,
// so contact details and the site URL are edited in one place only.
import { site, whatsappLink } from "../src/config/site.js";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

const contactLinks = () =>
  [
    ["Email", `mailto:${site.email}`, site.email],
    site.whatsapp && ["WhatsApp", whatsappLink(), site.phoneDisplay],
    site.linkedin && ["LinkedIn", site.linkedin, stripProtocol(site.linkedin)],
    site.github && ["GitHub", site.github, stripProtocol(site.github)],
  ]
    .filter(Boolean)
    .map(
      ([label, href, text]) =>
        `<li>${label}: <a href="${escapeHtml(href)}">${escapeHtml(text)}</a></li>`
    )
    .join("");

const jsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: `${site.url}/`,
    image: `${site.url}${site.ogImage}`,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    sameAs: [site.github, site.linkedin].filter(Boolean),
    knowsAbout: ["Python", "React", "Flask", "OCR", "AWS Textract", "Document automation"],
  };
  // Escape "<" so the JSON can never close the <script> tag early.
  const json = JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">\n${json}\n  </script>`;
};

const tokens = () => ({
  TITLE: escapeHtml(site.title),
  DESCRIPTION: escapeHtml(site.description),
  KEYWORDS: escapeHtml(site.keywords),
  NAME: escapeHtml(site.name),
  ROLE: escapeHtml(site.role),
  LOCATION: escapeHtml(site.location),
  URL: escapeHtml(site.url),
  OG_IMAGE: escapeHtml(site.ogImage),
  CONTACT_LINKS: contactLinks(),
  JSON_LD: jsonLd(),
});

export default function siteHtml() {
  let isSsrBuild = false;
  const values = tokens();

  return {
    name: "site-html",
    configResolved(config) {
      isSsrBuild = Boolean(config.build.ssr);
    },
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html.replace(/%SITE_([A-Z_]+)%/g, (match, key) => {
          if (!(key in values)) throw new Error(`index.html: unknown placeholder ${match}`);
          return values[key];
        }),
    },
    generateBundle() {
      if (isSsrBuild) return;
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
      });
    },
  };
}
