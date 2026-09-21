import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { colors } = useTheme();

  return (
    <footer
      className="py-4 border-top mt-5"
      style={{
        backgroundColor: colors.background,
        borderColor: "rgba(56, 189, 248, 0.15)",
        color: colors.textSecondary,
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold text-white">Kannan M</span>
          <span className="text-muted">•</span>
          <span className="small">Software Developer | Full-Stack & Python Automation</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <a
            href="https://github.com/Kannan-24"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: 34, height: 34 }}
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/m-kannan-/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: 34, height: 34 }}
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:kannanmuruganandham1@gmail.com"
            className="social-icon-btn"
            style={{ width: 34, height: 34 }}
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        <div className="small text-muted">
          © {new Date().getFullYear()} Kannan M. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
