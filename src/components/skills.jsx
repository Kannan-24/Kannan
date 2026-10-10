import React, { useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext";

import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaJs,
  FaLaravel,
  FaGithub,
  FaLinux,
  FaCode,
  FaCogs,
  FaCloud,
  FaPalette,
  FaBug,
  FaFilePdf,
  FaRobot,
  FaVial,
  FaCheckDouble,
  FaEye,
  FaBrain,
  FaChevronDown,
  FaChevronRight,
  FaCircle,
} from "react-icons/fa";

import {
  SiStreamlit,
  SiFlask,
  SiFastapi,
  SiDocker,
  SiAmazonwebservices,
  SiOpenai,
  SiNodedotjs,
} from "react-icons/si";

const skillsData = [
  {
    icon: <FaPython />,
    label: "Python",
    category: "Languages & Backend",
  },
  {
    icon: <SiFlask />,
    label: "Flask",
    category: "Languages & Backend",
  },
  {
    icon: <SiFastapi />,
    label: "FastAPI",
    category: "Languages & Backend",
  },
  {
    icon: <SiStreamlit />,
    label: "Streamlit",
    category: "Languages & Backend",
  },
  {
    icon: <SiNodedotjs />,
    label: "Node.js",
    category: "Languages & Backend",
  },
  {
    icon: <FaJs />,
    label: "JavaScript",
    category: "Languages & Backend",
  },
  {
    icon: <FaJava />,
    label: "Java",
    category: "Languages & Backend",
  },
  {
    icon: <FaLaravel />,
    label: "Laravel",
    category: "Languages & Backend",
  },
  {
    icon: <FaPhp />,
    label: "PHP",
    category: "Languages & Backend",
  },

  {
    icon: <FaReact />,
    label: "React.js",
    category: "Frontend & UI",
  },
  {
    icon: <FaHtml5 />,
    label: "HTML5",
    category: "Frontend & UI",
  },
  {
    icon: <FaCss3Alt />,
    label: "CSS3",
    category: "Frontend & UI",
  },
  {
    icon: <FaPalette />,
    label: "Tailwind CSS",
    category: "Frontend & UI",
  },
  {
    icon: <FaBootstrap />,
    label: "Bootstrap",
    category: "Frontend & UI",
  },
  {
    icon: <FaFigma />,
    label: "Figma",
    category: "Frontend & UI",
  },

  {
    icon: <FaDatabase />,
    label: "SQL Server",
    category: "Databases & OCR",
  },
  {
    icon: <FaDatabase />,
    label: "MySQL",
    category: "Databases & OCR",
  },
  {
    icon: <SiAmazonwebservices />,
    label: "AWS Textract",
    category: "Databases & OCR",
  },
  {
    icon: <FaEye />,
    label: "Tesseract OCR",
    category: "Databases & OCR",
  },
  {
    icon: <FaFilePdf />,
    label: "PDF & Doc Processing",
    category: "Databases & OCR",
  },

  {
    icon: <SiDocker />,
    label: "Docker",
    category: "Cloud & DevOps",
  },
  {
    icon: <SiAmazonwebservices />,
    label: "AWS",
    category: "Cloud & DevOps",
  },
  {
    icon: <FaGitAlt />,
    label: "Git",
    category: "Cloud & DevOps",
  },
  {
    icon: <FaGithub />,
    label: "GitHub Actions",
    category: "Cloud & DevOps",
  },
  {
    icon: <FaCogs />,
    label: "CI / CD",
    category: "Cloud & DevOps",
  },
  {
    icon: <FaLinux />,
    label: "Linux",
    category: "Cloud & DevOps",
  },
  {
    icon: <FaCloud />,
    label: "Netlify",
    category: "Cloud & DevOps",
  },

  {
    icon: <FaRobot />,
    label: "Google Antigravity",
    category: "AI & Tools",
  },
  {
    icon: <FaBrain />,
    label: "AI Code Generation",
    category: "AI & Tools",
  },
  {
    icon: <SiOpenai />,
    label: "Claude & ChatGPT",
    category: "AI & Tools",
  },
  {
    icon: <FaCode />,
    label: "VS Code",
    category: "AI & Tools",
  },

  {
    icon: <FaBug />,
    label: "Manual Testing",
    category: "Testing & QA",
  },
  {
    icon: <FaVial />,
    label: "Functional Testing",
    category: "Testing & QA",
  },
  {
    icon: <FaCheckDouble />,
    label: "QA Coordination",
    category: "Testing & QA",
  },
];

const categoryConfig = [
  {
    key: "Languages & Backend",
    folder: "languages",
    shortName: "Languages",
  },
  {
    key: "Frontend & UI",
    folder: "frontend",
    shortName: "Frontend",
  },
  {
    key: "Databases & OCR",
    folder: "database",
    shortName: "Database & OCR",
  },
  {
    key: "Cloud & DevOps",
    folder: "devops",
    shortName: "Cloud & DevOps",
  },
  {
    key: "AI & Tools",
    folder: "ai-tools",
    shortName: "AI & Tools",
  },
  {
    key: "Testing & QA",
    folder: "testing",
    shortName: "Testing & QA",
  },
];

const Skills = () => {
  const { theme, colors } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState(
    "Languages & Backend"
  );

  const [expandedFolders, setExpandedFolders] = useState({
    "Languages & Backend": true,
    "Frontend & UI": true,
    "Databases & OCR": false,
    "Cloud & DevOps": false,
    "AI & Tools": false,
    "Testing & QA": false,
  });

  const filteredSkills = useMemo(() => {
    return skillsData.filter(
      (skill) => skill.category === selectedCategory
    );
  }, [selectedCategory]);

  const allCategorySkills = useMemo(() => {
    return categoryConfig.reduce((acc, category) => {
      acc[category.key] = skillsData.filter(
        (skill) => skill.category === category.key
      );
      return acc;
    }, {});
  }, []);

  const toggleFolder = (category) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryConfig = categoryConfig.find(
    (item) => item.key === selectedCategory
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-wrapper">

          {/* ================= TOP BAR ================= */}
          <div className="ide-topbar">
            <div className="window-controls">
              <span className="window-dot close"></span>
              <span className="window-dot minimize"></span>
              <span className="window-dot maximize"></span>
            </div>

            <div className="ide-title">
              <span className="title-icon">◆</span>
              <span>Kannan Portfolio — Skills</span>
            </div>

            <div className="ide-status">
              <span className="live-dot"></span>
              ONLINE
            </div>
          </div>

          {/* ================= IDE CONTENT ================= */}
          <div className="ide-layout">

            {/* ================= SIDEBAR ================= */}
            <aside className="skills-sidebar">

              <div className="sidebar-heading">
                <span>EXPLORER</span>
              </div>

              <div className="workspace-title">
                <span>PORTFOLIO</span>
              </div>

              <div className="root-folder">
                <FaChevronDown size={9} />
                <span>technical-stack</span>
              </div>

              <div className="folder-list">

                {categoryConfig.map((category) => {
                  const isExpanded =
                    expandedFolders[category.key];

                  const isSelected =
                    selectedCategory === category.key;

                  return (
                    <div key={category.key}>

                      <button
                        className={`folder-row ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() => {
                          toggleFolder(category.key);
                          handleCategorySelect(category.key);
                        }}
                      >
                        <span className="folder-arrow">
                          {isExpanded ? (
                            <FaChevronDown size={8} />
                          ) : (
                            <FaChevronRight size={8} />
                          )}
                        </span>

                        <span className="folder-icon">
                          📁
                        </span>

                        <span>{category.folder}</span>
                      </button>

                      {isExpanded && (
                        <div className="nested-skills">

                          {allCategorySkills[
                            category.key
                          ].map((skill) => (
                            <button
                              key={skill.label}
                              className={`nested-skill ${
                                selectedCategory === category.key &&
                                filteredSkills.some(
                                  (item) =>
                                    item.label === skill.label
                                )
                                  ? "active-skill"
                                  : ""
                              }`}
                              onClick={() =>
                                handleCategorySelect(
                                  category.key
                                )
                              }
                            >
                              <span className="nested-indent">
                                └─
                              </span>

                              <span>
                                {skill.label}
                              </span>
                            </button>
                          ))}

                        </div>
                      )}
                    </div>
                  );
                })}

              </div>

              <div className="sidebar-footer">
                <div className="footer-line">
                  <span className="footer-dot"></span>
                  <span>workspace ready</span>
                </div>

                <div className="footer-line">
                  <span className="footer-dot"></span>
                  <span>skills loaded</span>
                </div>
              </div>

            </aside>

            {/* ================= MAIN EDITOR ================= */}
            <main className="skills-editor">

              {/* File tabs */}
              <div className="editor-tabs">

                <div className="editor-tab active">
                  <FaCode size={12} />

                  <span>
                    technical-stack.json
                  </span>

                  <span className="tab-close">
                    ×
                  </span>
                </div>

                <div className="editor-tab-empty"></div>

              </div>

              {/* Breadcrumb */}
              <div className="editor-breadcrumb">
                <span>technical-stack</span>
                <span>›</span>
                <span>
                  {selectedCategoryConfig?.folder}
                </span>
                <span>›</span>
                <span>
                  {selectedCategoryConfig?.shortName}
                </span>
              </div>

              {/* Code header */}
              <div className="code-header">

                <div className="code-language">
                  JSON
                </div>

                <div className="code-info">
                  {filteredSkills.length} technologies
                </div>

              </div>

              {/* Code Editor */}
              <div className="code-editor">
                <div className="code-content">

                  <div className="code-line">
                    <span className="bracket">
                      {"{"}
                    </span>
                  </div>

                  <div className="code-line indent-1">
                    <span className="property">
                      "category"
                    </span>

                    <span className="colon">
                      :
                    </span>

                    <span className="string">
                      "{selectedCategory}"
                    </span>

                    <span className="comma">
                      ,
                    </span>
                  </div>

                  <div className="code-line indent-1">
                    <span className="property">
                      "technologies"
                    </span>

                    <span className="colon">
                      :
                    </span>

                    <span className="bracket">
                      [
                    </span>
                  </div>

                  {filteredSkills.map((skill, index) => (
                    <div
                      className="skill-code-line"
                      key={skill.label}
                    >

                      <span className="line-number">
                        {String(index + 5).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="code-indent">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>

                      <span className="skill-icon-code">
                        {React.cloneElement(
                          skill.icon,
                          {
                            size: 16,
                          }
                        )}
                      </span>

                      <span className="string">
                        "{skill.label}"
                      </span>

                      {index !==
                        filteredSkills.length - 1 && (
                        <span className="comma">
                          ,
                        </span>
                      )}

                    </div>
                  ))}

                  <div className="code-line indent-1">
                    <span className="bracket">
                      ]
                    </span>

                    <span className="comma">
                      ,
                    </span>
                  </div>

                  <div className="code-line indent-1">
                    <span className="property">
                      "status"
                    </span>

                    <span className="colon">
                      :
                    </span>

                    <span className="boolean">
                      "production-ready"
                    </span>
                  </div>

                  <div className="code-line">
                    <span className="bracket">
                      {"}"}
                    </span>
                  </div>

                </div>
              </div>

              {/* ================= SKILL DETAILS ================= */}
              <div className="skill-preview">

                <div className="preview-header">

                  <div>
                    <span className="preview-label">
                      ACTIVE STACK
                    </span>

                    <h3>
                      {selectedCategory}
                    </h3>
                  </div>

                  <div className="preview-count">
                    {filteredSkills.length}
                  </div>

                </div>

                <div className="skill-grid">

                  {filteredSkills.map((skill) => (
                    <div
                      className="preview-card"
                      key={skill.label}
                    >

                      <div className="preview-icon">
                        {React.cloneElement(skill.icon, {
                          size: 26,
                        })}
                      </div>

                      <div className="preview-name">
                        {skill.label}
                      </div>

                      <div className="preview-status">
                        <FaCircle size={5} />
                        Available
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </main>
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="ide-statusbar">

            <div className="status-left">

              <span>⌁ main</span>

              <span>│</span>

              <span>
                {skillsData.length} skills
              </span>

              <span>│</span>

              <span>
                6 categories
              </span>

            </div>

            <div className="status-right">

              <span>UTF-8</span>

              <span>JSON</span>

              <span>✓ READY</span>

            </div>

          </div>

        </div>
      </div>

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-wrapper {
          max-width: ;
          margin: 0 auto;

          border: 1px solid ${colors.border};

          border-radius: 12px;
          overflow: hidden;

          background: ${
            theme === "dark"
              ? "#0d1117"
              : "#111827"
          };

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.28),
            0 0 40px ${colors.accent}08;

          font-family:
            "JetBrains Mono",
            "Fira Code",
            "Cascadia Code",
            "Consolas",
            monospace;
        }

        /* =====================================================
           TOP BAR
        ===================================================== */

        .ide-topbar {
          height: 48px;

          display: flex;
          align-items: center;

          background: ${
            theme === "dark"
              ? "#161b22"
              : "#18202b"
          };

          border-bottom: 1px solid #262d36;

          padding: 0 15px;
        }

        .window-controls {
          width: 90px;

          display: flex;
          gap: 7px;
        }

        .window-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .window-dot.close {
          background: #ff5f57;
        }

        .window-dot.minimize {
          background: #febc2e;
        }

        .window-dot.maximize {
          background: #28c840;
        }

        .ide-title {
          flex: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          color: #9ca3af;

          font-size: 11px;
        }

        .title-icon {
          color: ${colors.accent};
          font-size: 8px;
        }

        .ide-status {
          width: 90px;

          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 6px;

          color: #64748b;

          font-size: 8px;
          letter-spacing: 1px;
        }

        .live-dot {
          width: 6px;
          height: 6px;

          background: #4ade80;

          border-radius: 50%;

          box-shadow:
            0 0 8px rgba(74, 222, 128, 0.6);
        }

        /* =====================================================
           LAYOUT
        ===================================================== */

        .ide-layout {
          display: grid;
          grid-template-columns: 245px 1fr;

          min-height: 650px;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .skills-sidebar {
          background: #0b0f14;

          border-right: 1px solid #242b35;

          display: flex;
          flex-direction: column;

          min-width: 0;
        }

        .sidebar-heading {
          padding: 16px 17px 12px;

          color: #6b7280;

          font-size: 9px;
          letter-spacing: 1.3px;
          font-weight: 700;
        }

        .workspace-title {
          padding: 0 17px 12px;

          color: #d1d5db;

          font-size: 10px;
          font-weight: 700;
        }

        .root-folder {
          display: flex;
          align-items: center;
          gap: 7px;

          padding: 7px 17px;

          color: #e5e7eb;

          font-size: 10px;

          border-top: 1px solid #171d25;
          border-bottom: 1px solid #171d25;
        }

        .root-folder svg {
          color: #94a3b8;
        }

        .folder-list {
          padding: 6px 0;
        }

        .folder-row {
          width: 100%;

          display: flex;
          align-items: center;

          gap: 7px;

          padding: 7px 14px;

          border: none;

          background: transparent;

          color: #9ca3af;

          font-family: inherit;
          font-size: 10px;

          text-align: left;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .folder-row:hover {
          background: #161c24;
          color: #e5e7eb;
        }

        .folder-row.selected {
          background: ${colors.accent}10;
          color: ${colors.accent};
        }

        .folder-arrow {
          width: 10px;

          display: flex;
          justify-content: center;
        }

        .folder-icon {
          font-size: 12px;
        }

        .nested-skills {
          padding: 2px 0 5px 28px;
        }

        .nested-skill {
          width: 100%;

          display: flex;
          align-items: center;
          gap: 6px;

          border: none;
          background: transparent;

          color: #596576;

          font-family: inherit;
          font-size: 9px;

          text-align: left;

          padding: 5px 8px;

          cursor: pointer;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .nested-skill:hover {
          color: #cbd5e1;
          background: #121820;
        }

        .nested-indent {
          color: #394454;
        }

        .active-skill {
          color: ${colors.accent};
        }

        .sidebar-footer {
          margin-top: auto;

          padding: 16px;

          border-top: 1px solid #1d242d;
        }

        .footer-line {
          display: flex;
          align-items: center;

          gap: 7px;

          color: #596576;

          font-size: 8px;

          margin-top: 5px;
        }

        .footer-line:first-child {
          margin-top: 0;
        }

        .footer-dot {
          width: 5px;
          height: 5px;

          background: #4ade80;
          border-radius: 50%;
        }

        /* =====================================================
           EDITOR
        ===================================================== */

        .skills-editor {
          min-width: 0;

          background: #0d1117;

          display: flex;
          flex-direction: column;
        }

        .editor-tabs {
          height: 39px;

          display: flex;

          background: #11161d;

          border-bottom: 1px solid #252c35;
        }

        .editor-tab {
          display: flex;
          align-items: center;
          gap: 8px;

          min-width: 205px;

          padding: 0 14px;

          background: #0d1117;

          color: #b6c0ce;

          border-right: 1px solid #252c35;

          font-size: 9px;
        }

        .editor-tab svg {
          color: ${colors.accent};
        }

        .tab-close {
          margin-left: auto;
          color: #677386;
          font-size: 13px;
        }

        .editor-tab-empty {
          flex: 1;
        }

        .editor-breadcrumb {
          display: flex;
          align-items: center;

          gap: 8px;

          padding: 9px 16px;

          background: #0d1117;

          color: #596576;

          font-size: 8px;

          border-bottom: 1px solid #1c232c;
        }

        .editor-breadcrumb span:last-child {
          color: #aab5c3;
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 10px 17px;

          border-bottom: 1px solid #1c232c;
        }

        .code-language {
          color: ${colors.accent};

          font-size: 8px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .code-info {
          color: #596576;
          font-size: 8px;
        }

        /* =====================================================
           CODE EDITOR
        ===================================================== */

        .code-editor {
          padding: 16px 0 20px;

          background:
            linear-gradient(
              90deg,
              #0b0f14 0,
              #0b0f14 52px,
              #0d1117 52px
            );

          min-height: 290px;

          overflow-x: auto;
        }

        .code-content {
          min-width: 500px;
        }

        .code-line {
          display: flex;
          align-items: center;

          min-height: 25px;

          padding-left: 65px;

          color: #cbd5e1;

          font-size: 10px;
        }

        .code-line > .line-number {
          display: none;
        }

        .code-line.indent-1 {
          padding-left: 85px;
        }

        .skill-code-line {
          display: flex;
          align-items: center;

          min-height: 25px;

          color: #cbd5e1;

          font-size: 10px;

          position: relative;
        }

        .skill-code-line > .line-number {
          position: absolute;
          left: 22px;

          color: #394454;

          font-size: 8px;
        }

        .code-indent {
          margin-left: 85px;
        }

        .skill-icon-code {
          width: 23px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #7dd3fc;

          margin-right: 8px;
        }

        .property {
          color: #7dd3fc;
        }

        .string {
          color: #a7f3d0;
        }

        .boolean {
          color: #fbbf24;
        }

        .colon,
        .comma {
          color: #64748b;
          margin-left: 3px;
        }

        .bracket {
          color: #f9a8d4;
        }

        /* =====================================================
           SKILL PREVIEW
        ===================================================== */

        .skill-preview {
          border-top: 1px solid #252c35;

          padding: 20px 18px 24px;
        }

        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 15px;
        }

        .preview-label {
          display: block;

          color: #596576;

          font-size: 8px;
          letter-spacing: 1.3px;

          margin-bottom: 4px;
        }

        .preview-header h3 {
          margin: 0;

          color: #e5e7eb;

          font-size: 13px;
          font-weight: 600;
        }

        .preview-count {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid ${colors.border};

          color: ${colors.accent};

          font-size: 11px;

          border-radius: 6px;
        }

        .skill-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 9px;
        }

        .preview-card {
          border: 1px solid #232b35;

          background: #10161e;

          padding: 13px;

          border-radius: 6px;

          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .preview-card:hover {
          transform: translateY(-3px);

          border-color: ${colors.accent};

          background: ${colors.accent}08;
        }

        .preview-icon {
          display: flex;
          align-items: center;

          color: #8b98a9;

          margin-bottom: 9px;

          transition: color 0.2s ease;
        }

        .preview-card:hover .preview-icon {
          color: ${colors.accent};
        }

        .preview-name {
          color: #d7dde5;

          font-size: 10px;
          font-weight: 600;

          margin-bottom: 7px;
        }

        .preview-status {
          display: flex;
          align-items: center;
          gap: 5px;

          color: #596576;

          font-size: 7px;
        }

        .preview-status svg {
          color: #4ade80;
        }

        /* =====================================================
           STATUS BAR
        ===================================================== */

        .ide-statusbar {
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 12px;

          background: ${colors.accent};

          color: ${
            theme === "dark"
              ? "#07110f"
              : "#ffffff"
          };

          font-size: 8px;

          font-weight: 600;
        }

        .status-left,
        .status-right {
          display: flex;
          align-items: center;

          gap: 11px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

          .ide-layout {
            grid-template-columns: 200px 1fr;
          }

          .skill-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        @media (max-width: 700px) {

          .skills-section {
            padding: 55px 0;
          }

          .ide-layout {
            display: block;
          }

          .skills-sidebar {
            border-right: none;

            border-bottom: 1px solid #242b35;
          }

          .sidebar-footer {
            display: none;
          }

          .folder-list {
            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .nested-skills {
            display: none;
          }

          .folder-row {
            padding: 8px 14px;
          }

          .skill-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .ide-status {
            width: auto;
            font-size: 7px;
          }

          .ide-title {
            font-size: 9px;
          }

        }

        @media (max-width: 480px) {

          .skills-wrapper {
            border-radius: 8px;
          }

          .ide-topbar {
            height: 42px;
            padding: 0 10px;
          }

          .window-controls {
            width: 55px;
            gap: 5px;
          }

          .window-dot {
            width: 8px;
            height: 8px;
          }

          .ide-title {
            justify-content: flex-start;
            font-size: 8px;
          }

          .ide-status {
            display: none;
          }

          .folder-list {
            grid-template-columns:
              1fr 1fr;
          }

          .folder-row {
            font-size: 8px;
          }

          .editor-tab {
            min-width: 170px;
            font-size: 8px;
          }

          .editor-breadcrumb {
            font-size: 7px;
          }

          .code-editor {
            min-height: 270px;
          }

          .code-line,
          .skill-code-line {
            font-size: 8px;
          }

          .code-content {
            min-width: 420px;
          }

          .skill-grid {
            grid-template-columns:
              1fr 1fr;
          }

          .preview-card {
            padding: 10px;
          }

          .preview-name {
            font-size: 8px;
          }

          .status-left {
            gap: 5px;
          }

          .status-right {
            gap: 5px;
          }

          .ide-statusbar {
            font-size: 6px;
            padding: 0 8px;
          }

        }

      `}</style>
    </section>
  );
};

export default Skills;