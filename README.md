# Kannan M — Portfolio

Personal portfolio site, deployed at <https://kannan-24.netlify.app>.

Built with React 18 + Vite. No UI framework: styling is plain CSS with design tokens (dark and light themes).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Editing content

All text, links, projects, skills, and experience are in **`src/data/portfolio.js`**. Components only handle presentation, so most updates are a one-file change.

- Resume PDF: `public/Kannan_Resume.pdf` (the path is set in `profile.resume`)
- Images: `src/assets/*.webp`

## Structure

```
src/
  data/portfolio.js       content
  styles/base.css         tokens, reset, shared primitives (window, buttons, chips)
  components/             one component + one CSS file per section
  components/ui/          Window, SectionHeading, Toaster, ScrollChrome
  hooks/                  reveal-on-scroll, active section, typewriter, scramble
  context/                theme provider
```

## Features

- ⌘K / Ctrl+K (or `/`) command palette for navigation and quick actions
- Dark / light theme, remembered per browser
- Respects `prefers-reduced-motion`
- Keyboard accessible: skip link, focus styles, ARIA tabs and accordions

## Deploy

Netlify reads `netlify.toml` (build command, `dist` publish dir, SPA fallback, asset caching).
