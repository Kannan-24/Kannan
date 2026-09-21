import React from "react";
import { useTheme } from "../context/ThemeContext";

const AdditionalProjects = () => {
  const { colors } = useTheme();

  const additionalProjects = [
    {
      title: "PST – GMap to AWS Map Migration",
      role: "Developer (Mainly Handled by Me)",
      description: "Migrated mapping service from Google Maps to AWS Maps. Updated the frontend UI to support the new AWS Map version, fixed UI issues following a Node.js upgrade, and wrote SQL scripts to extract latitude/longitude coordinates for new providers to ensure search visibility.",
      tech: ["AWS Map", "Node.js", "React", "SQL", "API Integration"],
    },
    {
      title: "QAR Facelift",
      role: "Frontend / UI Developer",
      description: "Overhauled frontend UI, optimized API call timing to reduce unnecessary requests, and enhanced single and multi-provider search behaviors. Improved document preview capabilities for TIFF, Excel, and UI popups while adding loaded-item status indicators.",
      tech: ["React", "API Integration", "TIFF", "Excel", "Document Preview"],
    },
    {
      title: "AG Mediverse",
      role: "Frontend Developer",
      description: "Developed Admin Details data tables based on API responses within the Claim Details tab. Enhanced Document tab features including PDF preview, TIFF image rendering, and TIFF-related client logging.",
      tech: ["React", "API Integration", "PDF", "TIFF"],
    },
    {
      title: "AG Verification Workflow",
      role: "Developer (Implemented Assigned Features)",
      description: "Implemented verification workflow components based on team/JP requirements. Handled Claim ID checking, Received Date verification, Incident checking, AG loading, file movement, and consolidating source files/extracted values for manual verifiers.",
      tech: ["React", "File Processing", "Workflow Verification"],
    },
    {
      title: "Claim Extraction – Dental & Professional",
      role: "Developer (Collaborative Team Project)",
      description: "Worked as part of an engineering team (with Razz, Venkatesh, Shraddha) on claim extraction workflows. Contributed to improving extraction accuracy, handling missed/left-out files, file movement, page splitting, coordinate metadata generation, and downstream Boomi data preparation.",
      tech: ["Python", "SQL", "Boomi Processing", "File Processing"],
    },
  ];

  return (
    <section className="py-5 position-relative" id="additional">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-folder-symlink"></i> ADDITIONAL PROJECT EXPERIENCE
          </div>
          <h2 className="section-title-heading">
            Other Engineering Work
          </h2>
          <p className="small mt-2" style={{ color: colors.textSecondary, maxWidth: "640px" }}>
            Supporting enterprise features, frontend UI enhancements, map migrations, and extraction team contributions.
          </p>
        </div>

        {/* Project List Grid */}
        <div className="row g-4">
          {additionalProjects.map((proj, idx) => (
            <div className="col-lg-6" key={idx}>
              <div className="cyber-card p-4 h-100 cyber-card-glow d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="fw-bold text-white fs-5 m-0">{proj.title}</h4>
                    <span className="badge bg-dark border text-muted font-monospace" style={{ borderColor: "rgba(56, 189, 248, 0.2)", fontSize: "0.68rem" }}>
                      ADDITIONAL EXPERIENCE
                    </span>
                  </div>
                  <div className="small font-monospace mb-3" style={{ color: colors.accent }}>
                    {proj.role}
                  </div>
                  <p className="small mb-4" style={{ color: colors.textSecondary, lineHeight: "1.65" }}>
                    {proj.description}
                  </p>
                </div>

                <div className="d-flex flex-wrap gap-2 pt-3 border-top" style={{ borderColor: "rgba(56, 189, 248, 0.12)" }}>
                  {proj.tech.map((t, tIdx) => (
                    <span className="tech-tag" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProjects;
