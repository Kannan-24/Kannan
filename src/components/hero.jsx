import React from "react";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { colors } = useTheme();

  return (
    <section className="position-relative pt-5 pb-5 overflow-hidden" id="home" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
      {/* Background Radial Glow */}
      <div
        className="position-absolute"
        style={{
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container position-relative mt-5 pt-3" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Text & Hero Details */}
          <div className="col-lg-7">
            <div className="cyber-badge mb-3">
              SOFTWARE DEVELOPER | FULL-STACK DEVELOPMENT & PYTHON AUTOMATION
            </div>

            <h1 className="display-4 fw-extrabold mb-3 text-white tracking-tight lh-sm">
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kannan M
              </span>{" "}
              — Software Developer.
            </h1>

            <p className="lead mb-4" style={{ color: colors.textSecondary, fontSize: "1.05rem", maxWidth: "640px", lineHeight: "1.7" }}>
              I am a Software Developer with hands-on experience developing and enhancing enterprise applications using React, Python, Node.js, SQL, and API integrations. My experience includes claim extraction and verification, Python-based automation, dynamic application modules, UI development, document processing, database-related development, performance improvements, testing, and deployment support.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a href="#projects" className="btn-cyber-primary text-decoration-none">
                Explore Featured Projects <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href="/Kannan_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-outline text-decoration-none"
              >
                <i className="bi bi-file-earmark-arrow-down me-1"></i> Download Resume
              </a>

              <div className="d-flex align-items-center gap-2 ms-lg-2">
                <a
                  href="https://github.com/Kannan-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github fs-5"></i>
                </a>
                <a
                  href="https://linkedin.com/in/m-kannan-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="mailto:kannanmuruganandham1@gmail.com"
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Profile Code Box & Stat Summary */}
          <div className="col-lg-5">
            <div className="code-window mb-4">
              <div className="code-window-header">
                <div className="code-window-dots">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <div className="code-window-title">developer_profile.py</div>
                <div className="text-muted" style={{ fontSize: "0.7rem" }}>Python</div>
              </div>
              <div className="code-window-body">
                <p className="m-0">
                  <span className="code-keyword">developer</span> = &#123;
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"name"</span>:{" "}
                  <span className="code-string">"Kannan M"</span>,
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"role"</span>:{" "}
                  <span className="code-string">"Software Engineer"</span>,
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"company"</span>:{" "}
                  <span className="code-string">"NuWare Systems LLP"</span>,
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"location"</span>:{" "}
                  <span className="code-string">"Bangalore, India"</span>,
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"focus"</span>: [
                  <span className="code-string">"Full-Stack"</span>,{" "}
                  <span className="code-string">"Python Automation"</span>],
                </p>
                <p className="m-0 ps-3">
                  <span className="code-property">"stack"</span>: [
                  <span className="code-string">"React"</span>,{" "}
                  <span className="code-string">"Python"</span>,{" "}
                  <span className="code-string">"Node.js"</span>,{" "}
                  <span className="code-string">"SQL"</span>]
                </p>
                <p className="m-0">&#125;</p>
              </div>
            </div>

            {/* Verified Stat Summary Row */}
            <div className="row g-3">
              <div className="col-4">
                <div className="cyber-card p-3 text-center">
                  <div className="fw-bold fs-5" style={{ color: colors.accent }}>10+ Mos</div>
                  <div className="text-muted small" style={{ fontSize: "0.72rem" }}>NuWare Systems</div>
                </div>
              </div>
              <div className="col-4">
                <div className="cyber-card p-3 text-center">
                  <div className="fw-bold fs-5" style={{ color: colors.accent }}>Core Stack</div>
                  <div className="text-muted small" style={{ fontSize: "0.72rem" }}>React, Python, SQL</div>
                </div>
              </div>
              <div className="col-4">
                <div className="cyber-card p-3 text-center">
                  <div className="fw-bold fs-5" style={{ color: "#10b981" }}>3 Featured</div>
                  <div className="text-muted small" style={{ fontSize: "0.72rem" }}>Main Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
