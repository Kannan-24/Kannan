import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    // Change the navbar style on scroll
    setScrolled(window.scrollY > 100);

    // Update active link based on scroll position
    const sections = ["home", "about", "projects", "contact", "resume"];
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

    // Debugging: Log the current state
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

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="d-flex">
        <a
          href="https://github.com/Kannan-24"
          className="icon-hover me-3 "
          style={{ marginLeft: "30px" }}
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="mailto:kannanmuruganandham1@gmail.com"
          className="icon-hover me-3"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://linkedin.com/in/m-kannan-/"
          className="icon-hover me-3"
        >
          <i className="bi bi-linkedin"></i>
        </a>
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
        className={`collapse navbar-collapse justify-content-end ${
          menuOpen ? "show" : ""
        }`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {["home", "about", "projects", "contact", "resume"].map((section) => (
            <li className="nav-item" key={section}>
              <a
                className={`nav-link link-hover ${
                  activeLink === section ? "active" : ""
                }`}
                href={section === "home" ? "/home" : `#${section}`}
                onClick={() => setActiveLink(section)}
                style={{ color: "white" }}
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
