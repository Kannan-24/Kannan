import React from "react";
import { useTheme } from "../context/ThemeContext";

const Project = () => {
  const { colors } = useTheme();

  return (
    <section className="py-5 position-relative" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-star-fill"></i> FEATURED ENGINEERING WORK
          </div>
          <h2 className="section-title-heading">
            Featured Projects
          </h2>
          <p className="small mt-2" style={{ color: colors.textSecondary, maxWidth: "680px" }}>
            Selected work across full-stack development, automation, enterprise applications, and claim-processing systems.
          </p>
        </div>

        {/* 3 Main Featured Projects */}
        <div className="d-flex flex-column gap-5">
          {/* Project 01: Claim Verification Tool */}
          <div className="cyber-card cyber-card-glow p-4 p-md-5">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="cyber-badge">PROJECT 01</span>
                <span className="tech-tag" style={{ fontSize: "0.75rem" }}>Dental & Professional Claims</span>
              </div>
              <span className="text-muted font-monospace small">Full-Stack Development</span>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h3 className="fw-bold text-white fs-3 mb-1">Claim Verification Tool</h3>
                <div className="small text-muted mb-2 font-monospace">Dental & Professional Claims</div>
                <h6 className="fw-semibold mb-3" style={{ color: colors.accent }}>
                  Full-Stack Developer — Independently Developed
                </h6>
                <p className="small mb-3" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                  A full-stack application developed to simplify manual verification of extracted Dental and Professional claim data. The application integrates extracted values with source documents, providing confidence scores, coordinate information, field-level change tracking, and service-line validation alerts.
                </p>

                <h6 className="text-uppercase fw-semibold mb-2 small text-muted font-monospace">Key Features</h6>
                <ul className="list-unstyled mb-3 small" style={{ color: colors.textMain }}>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                    <span>Full-stack verification interface integrating source document + extracted values</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                    <span>Confidence score display & coordinate information showing extraction source area</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                    <span>Field change tracking (captures column name, previous value, and new value)</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                    <span>Service-line validation, Claim ID, and Received Date validation alerts</span>
                  </li>
                </ul>

                <div className="p-3 rounded-3 mb-3" style={{ background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.15)" }}>
                  <div className="text-uppercase font-monospace small fw-bold" style={{ color: colors.accent, fontSize: "0.72rem" }}>Impact</div>
                  <div className="small text-white" style={{ fontSize: "0.85rem" }}>
                    "Reduced manual verification effort and made claim validation more structured and user-friendly."
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {["React", "Python", "SQL", "API Integration", "PDF/TIFF"].map((tag, idx) => (
                    <span className="tech-tag" key={idx}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Generic Fictional UI Demo Visual */}
              <div className="col-lg-6">
                <div
                  className="p-3 rounded-3 border"
                  style={{
                    background: "#090e17",
                    borderColor: "rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <div className="d-flex align-items-center gap-2">
                      <span className="code-dot red"></span>
                      <span className="code-dot yellow"></span>
                      <span className="code-dot green"></span>
                      <span className="text-white font-monospace small">ClaimVerificationUI</span>
                    </div>
                    <span className="badge bg-secondary font-monospace" style={{ fontSize: "0.65rem" }}>DEMO INTERFACE</span>
                  </div>

                  <div className="p-2 mb-2 rounded bg-dark border" style={{ borderColor: "rgba(255,255,255,0.06)", fontSize: "0.72rem" }}>
                    <div className="text-muted font-monospace mb-1">
                      <i className="bi bi-file-earmark-pdf me-1"></i> SOURCE DOCUMENT: sample_claim.pdf
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2 rounded" style={{ background: "rgba(56, 189, 248, 0.08)" }}>
                      <span className="text-white font-monospace">CLAIM ID: CLM-XXXXXX</span>
                      <span className="badge bg-success font-monospace" style={{ fontSize: "0.65rem" }}>CONFIDENCE SCORE: 94%</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-dark border" style={{ borderColor: "rgba(255,255,255,0.06)", fontSize: "0.72rem" }}>
                    <div className="text-muted font-monospace mb-1">FIELD CHANGE TRACKING</div>
                    <div className="d-flex align-items-center justify-content-between p-2 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <span className="text-white">Field: Received Date</span>
                      <span className="text-muted">Prev: YYYY-MM-DD</span>
                      <i className="bi bi-arrow-right text-info"></i>
                      <span className="text-cyan fw-bold" style={{ color: colors.accent }}>Updated: YYYY-MM-DD</span>
                    </div>
                    <div className="mt-2 p-2 rounded" style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.25)" }}>
                      <span className="text-warning font-monospace fw-bold"><i className="bi bi-exclamation-triangle me-1"></i> SERVICE LINE VALIDATION ALERT</span>
                    </div>
                  </div>

                  <div className="text-center text-muted font-monospace mt-2" style={{ fontSize: "0.68rem" }}>
                    * Demo interface using fictional data
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 02 & 03 Row */}
          <div className="row g-4">
            {/* Project 02: RAT */}
            <div className="col-lg-6">
              <div className="cyber-card h-100 cyber-card-glow p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="cyber-badge">PROJECT 02</span>
                    <span className="tech-tag" style={{ fontSize: "0.72rem" }}>Enterprise Application</span>
                  </div>

                  <h3 className="fw-bold text-white fs-4 mb-1">RAT</h3>
                  <div className="small text-muted mb-2 font-monospace">Dynamic Quality Measures & Enterprise Application</div>
                  <h6 className="fw-semibold mb-3" style={{ color: colors.accent }}>
                    Developer — Independent Module Development & Support
                  </h6>
                  <p className="small mb-3" style={{ color: colors.textSecondary, lineHeight: "1.6" }}>
                    Enterprise application where I worked on dynamic Quality Measures, Coder Dashboard and Coder Review functionality, Member Chart enhancements, audit-log organization, and query/performance improvements.
                  </p>

                  <h6 className="text-uppercase fw-semibold mb-2 small text-muted font-monospace">Highlights & Work Done</h6>
                  <ul className="list-unstyled mb-3 small" style={{ color: colors.textMain }}>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Dynamic, configuration-driven Quality Measure section for multiple measures/services</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Coder Dashboard & Coder Review stored-query performance optimizations</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Member Chart field enhancements & organized audit logs for improved tracking</span>
                    </li>
                  </ul>

                  <div className="p-3 rounded-3 mb-3" style={{ background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.15)" }}>
                    <div className="text-uppercase font-monospace small fw-bold" style={{ color: colors.accent, fontSize: "0.72rem" }}>Impact</div>
                    <div className="small text-white" style={{ fontSize: "0.85rem" }}>
                      "Reduced repeated hard-coded changes for configurable functionality and improved application maintainability and performance."
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-wrap gap-2">
                    {["React", "Python", "SQL", "API Integration", "Database"].map((tag, idx) => (
                      <span className="tech-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 03: AG Extraction Automation & Version Tool */}
            <div className="col-lg-6">
              <div className="cyber-card h-100 cyber-card-glow p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="cyber-badge">PROJECT 03</span>
                    <span className="tech-tag" style={{ fontSize: "0.72rem" }}>Python Automation</span>
                  </div>

                  <h3 className="fw-bold text-white fs-4 mb-1">AG Extraction Automation & Version Tool</h3>
                  <div className="small text-muted mb-2 font-monospace">Python Automation & Data Processing</div>
                  <h6 className="fw-semibold mb-3" style={{ color: colors.accent }}>
                    Developer — AG Version Tool Independently Developed
                  </h6>
                  <p className="small mb-3" style={{ color: colors.textSecondary, lineHeight: "1.6" }}>
                    Python-based processing workflow developed to automate file loading, file movement, 5-page trimming/splitting, extraction pipeline integration, database version management, and processing logging.
                  </p>

                  <h6 className="text-uppercase fw-semibold mb-2 small text-muted font-monospace">Highlights & Work Done</h6>
                  <ul className="list-unstyled mb-3 small" style={{ color: colors.textMain }}>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Automated file loading, source-to-processing movement, and 5-page splitting/trimming</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Independently developed AG Version Tool for extraction version tracking and database storage</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: colors.accent }}></i>
                      <span>Processing log tracking, left-out file handling, and CMD script execution</span>
                    </li>
                  </ul>

                  <div className="p-3 rounded-3 mb-3" style={{ background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.15)" }}>
                    <div className="text-uppercase font-monospace small fw-bold" style={{ color: colors.accent, fontSize: "0.72rem" }}>Impact</div>
                    <div className="small text-white" style={{ fontSize: "0.85rem" }}>
                      "Reduced repetitive manual processing and processing time while improving workflow structure and traceability."
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-2 rounded bg-dark border font-monospace mb-3" style={{ borderColor: "rgba(255,255,255,0.06)", fontSize: "0.7rem" }}>
                    <div className="text-muted text-center py-1">
                      Source Files → File Loading → File Movement → 5-Page Split → Extraction → Version Tracking → Database
                    </div>
                    <div className="text-center text-muted" style={{ fontSize: "0.65rem" }}>
                      * Automated workflow architecture
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {["Python", "SQL", "Database", "CMD", "Automation", "File Processing"].map((tag, idx) => (
                      <span className="tech-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;