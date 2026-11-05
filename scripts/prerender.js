// Pre-renders the React app into dist/index.html after `vite build`, so the
// HTML that search engines, link previews and no-JS visitors receive contains
// the real page content. In the browser, React then "hydrates" that HTML.
//
// Runs as the last step of `npm run build` (see package.json).
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");
const PLACEHOLDER = '<div id="root"></div>';

const template = readFileSync(htmlPath, "utf8");
if (!template.includes(PLACEHOLDER)) {
  throw new Error(`prerender: ${PLACEHOLDER} not found in dist/index.html`);
}

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const appHtml = render();

// Netlify registers forms by scanning the deployed HTML, so a missing form
// would silently break the contact form. Fail the build instead.
if (!appHtml.includes('name="contact"') || !appHtml.includes('data-netlify="true"')) {
  throw new Error("prerender: the Netlify contact form is missing from the rendered HTML");
}

// Replacer function, so "$" characters in the page are inserted literally.
writeFileSync(htmlPath, template.replace(PLACEHOLDER, () => `<div id="root">${appHtml}</div>`));
rmSync(ssrDir, { recursive: true, force: true });

console.log(`✓ pre-rendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} kB of page HTML)`);
