import { profile } from "../data/portfolio";
import { isMac } from "../lib/utils";
import "./Footer.css";

const Footer = () => (
  <footer className="foot">
    <div className="container foot-inner">
      <p>
        © {new Date().getFullYear()} {profile.name} · Designed &amp; built by Kannan
      </p>
      <p className="foot-hint">
        <span className="live-dot" aria-hidden="true" />
        Press <kbd>{isMac() ? "⌘" : "Ctrl"} K</kbd> to navigate
      </p>
    </div>
  </footer>
);

export default Footer;
