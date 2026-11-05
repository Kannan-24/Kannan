import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import siteHtml from "./scripts/site-html-plugin.js";

export default defineConfig({
  plugins: [react(), siteHtml()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
