import React from "react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { colors } = useTheme();

  return (
    <section className="py-5 position-relative" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-person-badge"></i> ABOUT ME
          </div>
          <h2 className="section-title-heading">
            Developer Overview & Focus
          </h2>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Main Profile Overview Text */}
          <div className="col-lg-7">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold text-white fs-4 mb-3">
                  Software Developer | Full-Stack Development & Python Automation
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: "1.75", fontSize: "0.95rem" }} className="mb-3">
                  Software Developer with hands-on experience across frontend development, backend processing, Python automation, SQL/database work, API integration, document processing, and enterprise application enhancements.
                </p>
                <p style={{ color: colors.textSecondary, lineHeight: "1.75", fontSize: "0.95rem" }} className="mb-3">
                  I enjoy understanding business requirements from the user's perspective and building practical solutions that reduce manual effort, improve validation, and make workflows easier to use.
                </p>
                <p style={{ color: colors.textSecondary, lineHeight: "1.75", fontSize: "0.95rem" }} className="mb-0">
                  My recent work includes full-stack claim verification, Python-based AG automation, dynamic enterprise application modules, application migration, search optimization, and document processing.
                </p>
              </div>

              <div className="mt-4 pt-3 border-top" style={{ borderColor: "rgba(56, 189, 248, 0.15)" }}>
                <div className="d-flex flex-wrap gap-2">
                  <span className="tech-tag">Full-Stack Development</span>
                  <span className="tech-tag">Python Automation</span>
                  <span className="tech-tag">Enterprise Applications</span>
                  <span className="tech-tag">Data Extraction</span>
                  <span className="tech-tag">Claim Verification</span>
                  <span className="tech-tag">API Integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="col-lg-5">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold text-white fs-5 mb-4">
                  Quick Details
                </h4>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-building fs-5 mt-1" style={{ color: colors.accent }}></i>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>CURRENT COMPANY</div>
                      <span className="text-white fw-semibold">NuWare Systems LLP</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-briefcase fs-5 mt-1" style={{ color: colors.accent }}></i>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>ROLE</div>
                      <span className="text-white fw-semibold">Software Engineer</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-geo-alt fs-5 mt-1" style={{ color: colors.accent }}></i>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>LOCATION</div>
                      <span className="text-white fw-semibold">Bangalore, India</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-mortarboard fs-5 mt-1" style={{ color: colors.accent }}></i>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>EDUCATION</div>
                      <span className="text-white fw-semibold">B.E. Computer Science & Engineering</span>
                      <div className="text-muted small">2021 – 2025 | 7.96 CGPA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-3" style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(56, 189, 248, 0.1)" }}>
                <div className="text-muted small" style={{ fontSize: "0.75rem" }}>PRIMARY CONTACT EMAIL</div>
                <a href="mailto:kannanmuruganandham1@gmail.com" className="text-cyan fw-bold text-decoration-none small" style={{ color: colors.accent }}>
                  kannanmuruganandham1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;