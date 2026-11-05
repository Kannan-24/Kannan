// Server entry used only at build time by scripts/prerender.js to turn the
// app into static HTML. Not shipped to the browser.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

export const render = () =>
  renderToString(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
