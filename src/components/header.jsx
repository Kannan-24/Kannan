import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css"; // Import custom CSS for active link styling

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="d-flex">
        <a href="https://github.com/Kannan-24" className="icon-hover me-3">
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

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "home" ? "active" : ""
              }`}
              href="/home"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "about" ? "active" : ""
              }`}
              href="#about"
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "projects" ? "active" : ""
              }`}
              href="#projects"
              onClick={() => handleLinkClick("projects")}
            >
              Project
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "skills" ? "active" : ""
              }`}
              href="#skills"
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link link-hover ${
                activeLink === "resume" ? "active" : ""
              }`}
              href="#resume"
              onClick={() => handleLinkClick("resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
