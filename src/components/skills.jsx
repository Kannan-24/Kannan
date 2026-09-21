import React from "react";
import { useTheme } from "../context/ThemeContext";

const SkillsList = () => {
  const { colors } = useTheme();

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "bi-layout-sidebar-inset",
      description: "Building responsive, modern user interfaces and interactive components.",
      skills: ["React", "JavaScript", "HTML", "CSS", "UI Development"],
    },
    {
      category: "Backend & APIs",
      icon: "bi-server",
      description: "Developing backend logic, handling REST APIs, and integrating system services.",
      skills: ["Python", "Node.js", "Backend Development", "REST / API Integration"],
    },
    {
      category: "Database & Data Work",
      icon: "bi-database",
      description: "Writing efficient database queries, schema interaction, and performance tuning.",
      skills: ["SQL", "Database Integration", "Query Optimization"],
    },
    {
      category: "Automation & Document Processing",
      icon: "bi-gear-wide-connected",
      description: "Automating repetitive file workflows and parsing structured document formats.",
      skills: ["Python Automation", "File Processing", "Workflow Automation", "Data Extraction", "PDF", "TIFF", "Excel"],
    },
    {
      category: "Domain & Tooling Experience",
      icon: "bi-check2-square",
      description: "Working with domain-specific tools, map integrations, and deployment support.",
      skills: ["AWS Map", "Claim Processing", "Claim Verification", "Manual Testing", "Deployment Support", "Git"],
    },
  ];

  return (
    <section className="py-5 position-relative" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-tools"></i> TECHNICAL SKILLS
          </div>
          <h2 className="section-title-heading">
            Technical Stack & Core Skills
          </h2>
          <p className="small mt-2" style={{ color: colors.textSecondary, maxWidth: "640px" }}>
            Technologies and technical capabilities applied in enterprise application development, automation, and full-stack projects.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="row g-4">
          {skillCategories.map((cat, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="cyber-card p-4 h-100 cyber-card-glow d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="social-icon-btn border-0" style={{ background: "rgba(56, 189, 248, 0.12)", color: colors.accent }}>
                      <i className={`bi ${cat.icon} fs-5`}></i>
                    </div>
                    <h4 className="fw-bold text-white fs-5 m-0">{cat.category}</h4>
                  </div>
                  <p className="small mb-4" style={{ color: colors.textSecondary, fontSize: "0.85rem", lineHeight: "1.6" }}>
                    {cat.description}
                  </p>
                </div>

                <div className="d-flex flex-wrap gap-2 pt-2 border-top" style={{ borderColor: "rgba(56, 189, 248, 0.12)" }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span className="tech-tag" key={sIdx}>
                      {skill}
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

export default SkillsList;