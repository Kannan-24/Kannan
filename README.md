# Kannan M — Portfolio

Personal portfolio site, deployed at <https://kannan-24.netlify.app>.

Built with React 18 + Vite. No UI framework: styling is plain CSS with design tokens (dark and light themes).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # client build + pre-render into dist/
npm run preview  # serve the production build
```

## Editing content

| What | Where |
| --- | --- |
| Contact details, WhatsApp number, availability badge, form options, SEO title/description | **`src/config/site.js`** |
| Hero text, services, projects (case studies), process steps, experience, skills | **`src/data/portfolio.js`** |
| Client testimonials (section hides itself when empty) | **`src/data/testimonials.js`** |
| `<noscript>` summary and meta tags layout | `index.html` (values come from `site.js`) |

- Resume PDF: `public/Kannan_Resume.pdf` (path set in `profile.resume`)
- Images: `src/assets/*.webp`
- Testimonials marked `placeholder: true` only show in `npm run dev`, never on the live site.
- Section order (and the `01 //` numbers) follow the `sections` list in `portfolio.js`.

## Contact form (Netlify Forms)

The form in `src/components/ContactForm.jsx` is a Netlify Form (`data-netlify="true"` +
hidden `form-name`). Netlify registers it by scanning the deployed HTML, which is why the
page is pre-rendered. Submissions appear in the Netlify dashboard under **Forms**.
Turn on **Form detection** (Site configuration → Forms) and add an email notification
there. Locally (`npm run dev` / `preview`) submissions fail on purpose: only Netlify accepts them.

## Pre-rendering

`npm run build` runs three steps:

1. `vite build`: the normal client bundle in `dist/`
2. `vite build --ssr src/entry-server.jsx`: a temporary server bundle in `dist-ssr/`
3. `node scripts/prerender.js`: renders the app to HTML, writes it into `dist/index.html`,
   and deletes `dist-ssr/`

So search engines, link previews and visitors without JavaScript get the full page, and React
hydrates it in the browser. Components must render the same output on the server and on the
first client render: read browser-only things (`window`, `localStorage`, `navigator`) in
effects or event handlers, not during render. `npm run build:spa` skips pre-rendering.

`scripts/site-html-plugin.js` fills the `%SITE_…%` placeholders in `index.html` from
`site.js` and generates `robots.txt` and `sitemap.xml`.

## Structure

```
src/
  config/site.js          contact details, availability, SEO
  data/portfolio.js       content
  data/testimonials.js    testimonials
  styles/base.css         tokens, reset, shared primitives (window, buttons, chips)
  components/             one component + one CSS file per section
  components/ui/          Window, SectionHeading, Toaster, ScrollChrome
  hooks/                  reveal-on-scroll, active section, scramble
  context/                theme provider
  entry-server.jsx        build-time render entry (pre-rendering)
scripts/
  prerender.js            injects the rendered HTML into dist/index.html
  site-html-plugin.js     index.html placeholders, robots.txt, sitemap.xml
```

## Features

- ⌘K / Ctrl+K (or `/`) command palette for navigation and quick actions
- Dark / light theme, remembered per browser
- Respects `prefers-reduced-motion`
- Keyboard accessible: skip link, focus styles, ARIA tabs
- Works without JavaScript (pre-rendered HTML + `<noscript>` summary)

## Deploy

Netlify reads `netlify.toml` (build command, `dist` publish dir, SPA fallback, asset caching).
