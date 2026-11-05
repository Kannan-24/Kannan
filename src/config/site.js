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
  role: "Python & Full Stack Developer",
  location: "Bangalore, India",
  url: "https://kannan-24.netlify.app", // no trailing slash

  // --- Freelance availability -------------------------------------------------
  // Set showAvailability to false to hide the "Available" badge everywhere.
  showAvailability: true,
  availability: "Available for freelance projects",
  responseTime: "within 24 hours",

  // --- Contact channels -------------------------------------------------------
  email: "kannanmuruganandham1@gmail.com",
  phone: "+916382511495", // used for tel: links
  phoneDisplay: "+91 63825 11495",
  // WhatsApp number: digits only, including country code (no +, spaces or dashes).
  // Leave empty ("") to hide every WhatsApp link.
  whatsapp: "916382511495",
  whatsappMessage: "Hi Kannan, I found your portfolio and would like to discuss a project.",
  linkedin: "https://linkedin.com/in/m-kannan-",
  linkedinHandle: "in/m-kannan-",
  github: "https://github.com/Kannan-24",
  githubHandle: "Kannan-24",

  // --- Contact form options ---------------------------------------------------
  projectTypes: ["Website", "Web App", "Data & Automation", "Other"],
  budgetRanges: [
    "Under ₹20,000",
    "₹20,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "Above ₹1,00,000",
    "Not sure yet",
  ],

  // --- SEO (search results & link previews) -----------------------------------
  title: "Kannan M | Freelance Python & Full Stack Developer",
  description:
    "Freelance Python & Full Stack Developer in Bangalore. I build business websites, React + Flask web apps, and OCR automation that turns PDF invoices into Excel.",
  keywords:
    "Kannan M, freelance developer, freelance web developer, Python developer, Full Stack Developer, React, Flask, OCR, AWS Textract, PDF to Excel, invoice automation, web scraping, Bangalore",
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
