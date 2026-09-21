import React from "react";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { colors } = useTheme();

  const responsibilities = [
    "React / UI development for web applications and enterprise tools",
    "Python-based workflow automation and file processing scripts",
    "Node.js development, API integration, and post-update troubleshooting",
    "SQL database operations, stored query work, and performance optimization",
    "Claim extraction and verification workflow enhancements",
    "Enterprise application module enhancements (Quality Measures, Member Charts, Audit Logs)",
    "Query and dashboard performance improvements",
    "Manual testing from the user's perspective to fix issues prior to QA handoff",
    "Coordinating with QA team and supporting application deployment activities",
  ];

  return (
    <section className="py-5 position-relative" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-briefcase-fill"></i> PROFESSIONAL EXPERIENCE
          </div>
          <h2 className="section-title-heading">
            Work Experience
          </h2>
        </div>

        {/* Experience Timeline Card */}
        <div className="cyber-card p-4 p-md-5 cyber-card-glow">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-4 pb-4 border-bottom" style={{ borderColor: "rgba(56, 189, 248, 0.15)" }}>
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="cyber-badge" style={{ fontSize: "0.75rem" }}>
                  CURRENT POSITION
                </span>
                <span className="text-muted font-monospace small">Bangalore, India</span>
              </div>
              <h3 className="fw-bold text-white fs-3 mb-1">
                Trainee Software Engineer / Software Engineer
              </h3>
              <h5 className="fw-semibold" style={{ color: colors.accent }}>
                NuWare Systems LLP
              </h5>
            </div>

            <div className="text-md-end">
              <div className="cyber-card px-3 py-2 text-white font-monospace small" style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                <i className="bi bi-calendar-event me-2" style={{ color: colors.accent }}></i>
                October 2023 – Present
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase fw-semibold mb-2 small text-muted font-monospace">Role Overview</h6>
            <p style={{ color: colors.textSecondary, lineHeight: "1.7", fontSize: "0.95rem" }}>
              Worked on enterprise applications involving frontend development, backend processing, SQL/database operations, API integration, Python automation, document processing, claim extraction, and verification.
            </p>
          </div>

          <div>
            <h6 className="text-uppercase fw-semibold mb-3 small text-muted font-monospace">Key Responsibilities & Contributions</h6>
            <div className="row g-3">
              {responsibilities.map((resp, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="d-flex align-items-start gap-2 p-2 rounded" style={{ background: "rgba(255,255,255,0.02)", fontSize: "0.88rem" }}>
                    <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                    <span style={{ color: colors.textMain }}>{resp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
