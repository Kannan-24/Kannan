import { profile } from "../data/portfolio";
import { isMac } from "../lib/utils";
import "./Footer.css";

const Footer = () => (
  <footer className="foot">
    <div className="container foot-inner">
      <p>
        {/* Pre-rendered at build time; the browser corrects the year and key if they differ. */}
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {profile.name} · Designed
        &amp; built by Kannan
      </p>
      <p className="foot-hint">
        <span className="live-dot" aria-hidden="true" />
        Press <kbd suppressHydrationWarning>{`${isMac() ? "⌘" : "Ctrl"} K`}</kbd> to navigate
      </p>
    </div>
  </footer>
);

export default Footer;
