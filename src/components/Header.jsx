import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSearch, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/theme";
import useActiveSection from "../hooks/useActiveSection";
import { sections } from "../data/portfolio";
import { isMac } from "../lib/utils";
import "./Header.css";

const SECTION_IDS = sections.map((s) => s.id);
const NAV_LINKS = sections.filter((s) => s.id !== "home");

const Header = ({ onOpenPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const modKey = isMac() ? "⌘" : "Ctrl";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="nav-dock">
        <a href="#home" className="nav-logo" aria-label="Kannan M — back to top">
          <span className="nav-logo-mark" aria-hidden="true">K</span>
          <span className="nav-logo-text">
            kannan<span>_m</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? "is-active" : ""}`}
              aria-current={active === id ? "true" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-search" onClick={onOpenPalette} aria-label="Open command palette">
            <FaSearch aria-hidden="true" />
            <span className="nav-search-label">Jump to…</span>
            <kbd>{modKey} K</kbd>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-btn nav-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile" hidden={!menuOpen}>
        {NAV_LINKS.map(({ id, label }, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-mobile-link ${active === id ? "is-active" : ""}`}
            onClick={() => setMenuOpen(false)}
            style={{ "--i": i }}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
