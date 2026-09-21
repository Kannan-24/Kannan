import React from "react";
import { useTheme } from "../context/ThemeContext";

const Contributions = () => {
  const { colors } = useTheme();

  const achievements = [
    "Independently developed the full-stack Claim Verification Tool.",
    "Independently developed the AG Version Tool for extraction version tracking.",
    "Developed the dynamic, configuration-driven Quality Measure section in RAT.",
    "Developed and enhanced Python-based AG file processing and trimming automation.",
    "Improved Dental & Professional claim extraction accuracy and left-out-file handling.",
  ];

  const workflowSteps = [
    { title: "Requirements & Guidance", desc: "Receive requirements and initial direction from JP and the engineering team." },
    { title: "User Perspective Analysis", desc: "Understand how end users will interact with the feature to ensure intuitive workflow design." },
    { title: "Implementation", desc: "Build clean full-stack components, Python automation logic, or SQL queries." },
    { title: "User-Centric Manual Testing", desc: "Thoroughly test functionality from the user's perspective to catch and resolve errors before QA." },
    { title: "QA Coordination & Deployment", desc: "Collaborate with QA engineers and support deployment activities into production environments." },
  ];

  return (
    <section className="py-5 position-relative" id="contributions">
      <div className="container">
        {/* Section 1: Individual Contributions */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-award-fill"></i> INDIVIDUAL CONTRIBUTIONS
          </div>
          <h2 className="section-title-heading">
            Key Accomplishments
          </h2>
        </div>

        <div className="cyber-card p-4 p-md-5 mb-5 cyber-card-glow">
          <div className="row g-4">
            {achievements.map((ach, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="p-3 rounded-3 h-100 border d-flex align-items-start gap-3" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(56, 189, 248, 0.15)" }}>
                  <div className="social-icon-btn border-0 flex-shrink-0" style={{ background: "rgba(56, 189, 248, 0.12)", color: colors.accent }}>
                    <span className="fw-bold">{idx + 1}</span>
                  </div>
                  <span className="small text-white" style={{ lineHeight: "1.6" }}>{ach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: General Working Style */}
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow">
              <div className="section-title-tag">
                <i className="bi bi-diagram-3-fill"></i> DEVELOPMENT APPROACH
              </div>
              <h3 className="fw-bold text-white fs-4 mb-3">
                Working Style & Engineering Process
              </h3>
              <p className="small mb-4" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                "I am able to understand requirements and independently implement assigned functionality with guidance/support from JP and the team when required."
              </p>

              <div className="d-flex flex-column gap-3">
                {workflowSteps.map((step, idx) => (
                  <div className="d-flex align-items-start gap-3 p-2 rounded" key={idx} style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="badge bg-secondary font-monospace mt-1" style={{ fontSize: "0.68rem" }}>STEP {idx + 1}</div>
                    <div>
                      <div className="fw-semibold text-white small">{step.title}</div>
                      <div className="text-muted small" style={{ fontSize: "0.8rem" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Career Goals & Learning */}
          <div className="col-lg-5">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow d-flex flex-column justify-content-between">
              <div>
                <div className="section-title-tag">
                  <i className="bi bi-graph-up-arrow"></i> CONTINUOUS GROWTH
                </div>
                <h3 className="fw-bold text-white fs-4 mb-3">
                  Career Goals & Ongoing Learning
                </h3>

                <p className="small mb-4" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                  Focused on continually expanding technical capabilities across full-stack engineering, workflow automation, and database performance.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="p-3 rounded border" style={{ background: "rgba(13, 21, 39, 0.6)", borderColor: "rgba(56, 189, 248, 0.15)" }}>
                    <div className="fw-semibold text-white small mb-1">
                      <i className="bi bi-code-square me-2" style={{ color: colors.accent }}></i> Full-Stack Engineering
                    </div>
                    <div className="text-muted small" style={{ fontSize: "0.8rem" }}>
                      Refining React and Python architectures for maintainable enterprise applications.
                    </div>
                  </div>

                  <div className="p-3 rounded border" style={{ background: "rgba(13, 21, 39, 0.6)", borderColor: "rgba(56, 189, 248, 0.15)" }}>
                    <div className="fw-semibold text-white small mb-1">
                      <i className="bi bi-database-gear me-2" style={{ color: colors.accent }}></i> Performance & Database Optimization
                    </div>
                    <div className="text-muted small" style={{ fontSize: "0.8rem" }}>
                      Optimizing SQL query logic, stored query execution, and data extraction pipelines.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-3 text-center" style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                <span className="text-white small font-monospace">Software Developer | Full-Stack & Python Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
