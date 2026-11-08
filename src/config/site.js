// ============================================================================
//  YOUR CONTACT DETAILS & SITE SETTINGS — edit everything here.
//
//  Used by the React app AND by index.html (title, meta tags, <noscript>
//  fallback, structured data, robots.txt, sitemap.xml), so a change here
//  updates the whole site on the next build.
//
//  Keep this file plain data: no React, no imports.
// ============================================================================

export const site = {
  // --- Identity -------------------------------------------------------------
  name: "Kannan M",
  role: "Software Developer",
  location: "Bangalore, India",
  url: "https://kannan-24.netlify.app", // no trailing slash

  // --- Availability -----------------------------------------------------------
  // Set showAvailability to true to show the availability badge everywhere.
  showAvailability: false,
  availability: "Open to opportunities",
  responseTime: "within 24 hours",

  // --- Contact channels -------------------------------------------------------
  email: "kannanmuruganandham1@gmail.com",
  phone: "+916382511495", // used for tel: links
  phoneDisplay: "+91 63825 11495",
  // WhatsApp number: digits only, including country code (no +, spaces or dashes).
  // Leave empty ("") to hide every WhatsApp link.
  whatsapp: "916382511495",
  whatsappMessage: "Hi Kannan, I found your portfolio and would like to connect.",
  linkedin: "https://linkedin.com/in/m-kannan-",
  linkedinHandle: "in/m-kannan-",
  github: "https://github.com/Kannan-24",
  githubHandle: "Kannan-24",

  // --- Contact form ------------------------------------------------------------
  // Where the form is sent: the contact API on invoice-vm (see contact-api/README.md).
  // It emails each message to you, with Reply-To set to the sender.
  contactEndpoint: "https://skmnco.in/portfolio-api/contact",

  // --- SEO (search results & link previews) -----------------------------------
  title: "Kannan M | Software & Full Stack Developer",
  description:
    "Portfolio of Kannan M, a Python & Full Stack Developer building scalable web applications, document automation pipelines, and clean user interfaces.",
  keywords:
    "Kannan M, Software Developer, Full Stack Developer, Python Developer, React, Flask, AWS Textract, OCR, Portfolio",
  ogImage: "/og-image.jpg",
};

export const whatsappLink = () =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
    : "";

export const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project inquiry"
)}&body=${encodeURIComponent(
  "Hi Kannan,\n\nI came across your portfolio and would like to talk about a project.\n\nBest regards,\n"
)}`;
