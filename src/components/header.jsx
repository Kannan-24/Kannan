import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, colors } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Featured Projects" },
    { id: "additional", label: "Additional Work" },
    { id: "contributions", label: "Contributions" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-cyber">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <a href="#home" className="d-flex align-items-center text-decoration-none gap-2">
          <div
            className="fw-bold fs-4 tracking-tight"
            style={{ color: colors.text, fontFamily: "var(--font-sans)" }}
          >
            Kannan <span style={{ color: colors.accent }}>M</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="d-none d-xl-flex align-items-center gap-3">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveLink(id)}
              className="text-decoration-none px-2 py-1 transition-all"
              style={{
                color: activeLink === id ? colors.accent : colors.textSecondary,
                fontWeight: activeLink === id ? "600" : "500",
                fontSize: "0.86rem",
                borderBottom: activeLink === id ? `2px solid ${colors.accent}` : "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={toggleTheme}
            className="social-icon-btn border-0"
            aria-label="Toggle Theme"
            title="Toggle theme"
          >
            <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
          </button>

          <a href="#contact" className="btn-cyber-primary text-decoration-none d-none d-sm-inline-flex py-2 px-3 small">
            <i className="bi bi-envelope-fill me-1"></i> Contact Me
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="btn d-xl-none p-2 border-0 text-light"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-2`} style={{ color: colors.text }}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div
          className="d-xl-none w-100 p-4 border-top mt-2"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.border,
          }}
        >
          <div className="d-flex flex-column gap-2">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActiveLink(id);
                  setMenuOpen(false);
                }}
                className="text-decoration-none py-2 px-3 rounded"
                style={{
                  color: activeLink === id ? colors.accent : colors.text,
                  backgroundColor: activeLink === id ? "rgba(56, 189, 248, 0.1)" : "transparent",
                  fontWeight: "600",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-cyber-primary text-center mt-2 text-decoration-none"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
