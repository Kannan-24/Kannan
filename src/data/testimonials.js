// ============================================================================
//  CLIENT TESTIMONIALS
//
//  • The Testimonials section and its navbar link are hidden automatically
//    when there are no testimonials to show.
//  • Entries marked `placeholder: true` appear ONLY while running `npm run dev`
//    so you can preview the layout. They are never included in the live site.
//  • To add a real one: copy an entry, fill it in, and delete `placeholder`.
//    Only publish quotes you have the client's permission to use.
//
//  Fields: quote (required), name (required), role, project, avatar (optional
//  image URL, e.g. "/clients/ravi.webp" placed in /public/clients/).
// ============================================================================

const entries = [
  {
    placeholder: true,
    quote:
      "Placeholder: a short quote from a real client about the problem you solved and how it helped their business.",
    name: "Client Name",
    role: "Owner, Business Name",
    project: "Business website",
  },
  {
    placeholder: true,
    quote:
      "Placeholder: mention a concrete result if you can, such as hours saved each week or faster invoicing.",
    name: "Client Name",
    role: "Operations Manager, Company",
    project: "Invoice automation",
  },
  {
    placeholder: true,
    quote:
      "Placeholder: what was it like working with you? Communication, deadlines, support after launch.",
    name: "Client Name",
    role: "Founder, Startup",
    project: "Web application",
  },
];

export const testimonials = entries.filter((t) => import.meta.env.DEV || !t.placeholder);
