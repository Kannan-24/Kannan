import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { theme, toggleTheme, colors } = useTheme();

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);

    const sections = ["home", "about", "experience", "skills", "projects", "contact", "resume"];
    let foundSection = false;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveLink(section);
          foundSection = true;
        }
      }
    });

    if (!foundSection) {
      console.log("No section is currently active.");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const iconStyle = (icon) => ({
    color: hoveredIcon === icon ? colors.accent : (theme === "dark" ? "#fff" : "#1a1a1a"),
    backgroundColor: hoveredIcon === icon ? (theme === "dark" ? "#333" : "#e2e8f0") : "transparent",
    transition: "background-color 0.2s, color 0.2s",
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${scrolled ? "scrolled" : ""}`}
      style={{ backgroundColor: scrolled ? colors.navBg : "transparent", transition: "background-color 0.3s ease" }}
    >
      <div className="d-flex align-items-center">
        <a
          href="https://github.com/Kannan-24"
          className="icon-hover me-3"
          style={iconStyle("github")}
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="mailto:kannanmuruganandham1@gmail.com"
          className="icon-hover me-3"
          style={iconStyle("email")}
          onMouseEnter={() => handleMouseEnter("email")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://linkedin.com/in/m-kannan-/"
          className="icon-hover me-3"
          style={iconStyle("linkedin")}
          onMouseEnter={() => handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-linkedin"></i>
        </a>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="icon-hover"
          style={{
            ...iconStyle("theme"),
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleMouseEnter("theme")}
          onMouseLeave={handleMouseLeave}
          aria-label="Toggle theme"
        >
          <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
        </button>
      </div>

      <button
        className={`navbar-toggler custom-toggler ${menuOpen ? "open" : ""}`}
        type="button"
        onClick={handleMenuToggle}
        aria-controls="navbarNav"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div
        className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show" : ""}`}
        id="navbarNav"
        style={{ backgroundColor: menuOpen ? colors.navBg : "transparent" }}
      >
        <ul className="navbar-nav">
          {["home", "about", "experience", "skills", "projects", "contact", "resume"].map((section) => (
            <li className="nav-item" key={section}>
              <a
                className={`nav-link link-hover ${activeLink === section ? "active" : ""}`}
                href={`#${section}`}
                onClick={() => setActiveLink(section)}
                style={{ color: theme === "dark" ? "white" : "#1a1a1a" }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
