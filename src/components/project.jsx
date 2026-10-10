import React, { useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ProjectTerminalRow = ({
  project,
  index,
  colors,
  theme,
}) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <article
      className={`project-terminal-row ${open ? "is-open" : ""}`}
      style={{
        "--project-accent": colors.accent,
        "--project-border": colors.border,
        "--project-text": colors.text,
        "--project-muted": colors.textSecondary,
        "--project-card": colors.cardBg,
      }}
    >
      <button
        type="button"
        className="project-terminal-header"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="terminal-tree">
          {open ? "▼" : "▶"}
        </span>

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="project-folder">~/projects/</span>

        <strong className="project-name">{project.title}</strong>

        <span className="project-category">{project.category}</span>

        <span className="project-state">
          {open ? "[OPEN]" : "[VIEW]"}
        </span>
      </button>

      {open && (
        <div className="project-terminal-body">
          <div className="terminal-output-line">
            <span className="prompt">kannan@portfolio</span>:~$ cat{" "}
            <span className="command-file">
              {project.fileName}
            </span>
          </div>

          <div className="project-output">
            <div className="output-title">
              <span>&gt;</span> {project.title}
            </div>

            <p className="output-description">{project.text}</p>

            {project.highlights?.length > 0 && (
              <div className="output-section">
                <div className="output-label">
                  <span>##</span> KEY CONTRIBUTIONS
                </div>

                <div className="output-list">
                  {project.highlights.map((item, idx) => (
                    <div className="output-item" key={idx}>
                      <span className="branch">
                        {idx === project.highlights.length - 1 ? "└─" : "├─"}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.workflow && (
              <div className="workflow-terminal">
                <div className="output-label">
                  <span>##</span> PIPELINE
                </div>

                <div className="workflow-flow">
                  {project.workflow.split(" → ").map((step, idx, arr) => (
                    <React.Fragment key={`${step}-${idx}`}>
                      <span className="workflow-step">{step}</span>
                      {idx < arr.length - 1 && (
                        <span className="workflow-arrow">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <div className="project-tech-terminal">
              <span className="output-label">
                <span>##</span> TECH STACK
              </span>

              <div className="tech-command-line">
                <span className="prompt">kannan@portfolio</span>:~$ stack --used
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>

            {(project.githubLink || project.externalLink) && (
              <div className="project-links-terminal">
                <span className="output-label">
                  <span>##</span> LINKS
                </span>

                <div className="terminal-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>→</span> github
                    </a>
                  )}

                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>→</span> live-demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

const Project = () => {
  const { theme, colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projectCategories = [
    "All Projects",
    "Enterprise Solutions",
    "Full-Stack & Web Apps",
    "Academic & Awards",
  ];

  const cardData = [
    {
      title: "AG Claims Processing Platform — Extraction & Verification",
      category: "Enterprise Solutions",
      fileName: "ag_claims_processing.md",
      text:
        "Developed and enhanced an end-to-end claims processing workflow for Dental and Professional insurance claims, covering document extraction, database storage, verification, and file processing. Implemented automated document processing including file loading, PDF splitting, extraction, validation, version tracking, and SQL Server storage.",
      highlights: [
        "Integrated AWS Textract as primary OCR engine with Tesseract OCR fallback.",
        "Independently engineered AG Version Tool to prevent duplicate processing and maintain audit history.",
        "Implemented split-file origin mapping ensuring full traceability between source and claim documents.",
        "Enhanced verification workflow with claim assignment, queue management, field editing, and CSV export.",
      ],
      workflow:
        "Source Documents → File Loading → PDF Split → OCR Extraction → Validation → SQL Server → Verification → File Movement / Export",
      tags: [
        "Python",
        "Streamlit",
        "Flask",
        "AWS Textract",
        "SQL Server",
        "PDF Processing",
        "JavaScript",
      ],
      githubLink: "",
      externalLink: "",
    },
    {
      title: "RAT — Dynamic Quality Measures & Enterprise Application",
      category: "Enterprise Solutions",
      fileName: "rat_quality_measures.md",
      text:
        "Engineered a dynamic Quality Measures section supporting multiple healthcare measures and services using a configuration-driven approach, drastically reducing repeated hard-coded development. Optimized Coder Dashboard & Review queries and enhanced activity tracking.",
      highlights: [
        "Architected configuration-driven design for dynamic measures and services.",
        "Enhanced Coder Dashboard and Coder Review functionality with query performance optimizations.",
        "Added and enhanced critical fields in Member Chart based on clinical application requirements.",
        "Organized and improved audit-log functionality for end-to-end activity tracking and compliance.",
      ],
      tags: [
        "React",
        "Python",
        "SQL",
        "API Integration",
        "Audit Logging",
      ],
      githubLink: "",
      externalLink: "",
    },
    {
      title: "Claim Processing, Extraction & Verification — Dental & Professional",
      category: "Enterprise Solutions",
      fileName: "claim_extraction_verification.md",
      text:
        "Comprehensive claim extraction and verification pipeline handling source documents, split claim files, and traceability. Created an interactive verification UI displaying source documents alongside extracted data for review and correction.",
      highlights: [
        "Built interactive verification UI to view source documents alongside extracted claim data.",
        "Claim queue management, assignment, field-level editing, service-line updates, and status tracking.",
        "Automated file movement based on validation and verification outcomes.",
        "Comprehensive processing logs, left-out/unprocessed file recovery, and version tracking.",
      ],
      workflow:
        "Source Documents → File Processing → PDF Splitting → OCR Extraction → Validation → SQL Server → Claim Verification → File Movement / Export",
      tags: [
        "Python",
        "Flask",
        "Streamlit",
        "AWS Textract",
        "Tesseract OCR",
        "SQL Server",
        "PDF/TIFF",
      ],
      githubLink: "",
      externalLink: "",
    },

    
    {
      title: "CO-PO Attainment Tracking Tool",
      category: "Academic & Awards",
      fileName: "co_po_attainment.md",
      text:
        "Developed an institutional software application to automate the computation and tracking of Course Outcome–Program Outcome (CO–PO) attainment for engineering curricula. Recognized with an institutional award for this software during the 2024–2025 academic year.",
      highlights: [
        "Automates complex mathematical attainment mapping and analysis.",
        "Generates accreditation-ready reports reducing faculty manual preparation by over 80%.",
        "Official Certificate of Recognition awarded by Erode Sengunthar Engineering College.",
      ],
      tags: ["Laravel", "Database", "Analytics", "Automation", "Reporting"],
      githubLink: "",
      externalLink: "",
    },
    {
      title: "Automated Transport Management System (ATMS)",
      category: "Full-Stack & Web Apps",
      fileName: "atms.md",
      text:
        "Developed a web-based solution to streamline campus transportation. Integrated live tracking, attendance monitoring, and automated reporting to reduce errors and improve operational efficiency.",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "Live Tracking"],
      githubLink: "https://github.com/Kannan-24/atms",
      externalLink: "",
    },
    {
      title: "Invoice Management System (IMS)",
      category: "Full-Stack & Web Apps",
      fileName: "invoice_management.md",
      text:
        "Built a comprehensive tool to create, manage, and track GST-compliant invoices. Automated payment reminders and financial reporting to enhance billing accuracy and efficiency.",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "GST Invoicing"],
      githubLink: "https://github.com/Kannan-24/ims",
      externalLink: "",
    },
    {
      title: "Spotify Clone (Music Streaming UI)",
      category: "Full-Stack & Web Apps",
      fileName: "spotify_clone.md",
      text:
        "Designed and implemented a responsive Spotify-inspired UI using React.js. Built dynamic pages for playlists and music categories with reusable components and modern design practices.",
      tags: ["React", "HTML", "CSS", "UI/UX"],
      githubLink: "https://github.com/Kannan-24/music-player",
      externalLink: "https://kannanmp.netlify.app",
    },
  ];

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All Projects"
        ? cardData
        : cardData.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section
      className="projects-terminal-section"
      id="projects"
      style={{
        "--project-accent": colors.accent,
        "--project-border": colors.border,
        "--project-text": colors.text,
        "--project-muted": colors.textSecondary,
        "--project-card": colors.cardBg,
        "--project-terminal":
          theme === "dark" ? "#05090d" : colors.cardBg,
      }}
    >
      <div className="projects-terminal-bg" />

      <div className="container">
        {/* TERMINAL HEADER */}
        <div className="main-terminal">
          <div className="main-terminal-bar">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <span className="terminal-titlebar">
              kannan@portfolio: ~/projects
            </span>

            <span className="terminal-system">
              bash
            </span>
          </div>

          <div className="main-terminal-body">
            <div className="command-line">
              <span className="prompt">kannan@portfolio</span>:~$ ls{" "}
              <span className="command-green">projects/</span>
            </div>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Enterprise applications, document intelligence, healthcare
              platforms and full-stack systems built through real-world
              development.
            </p>

            <div className="terminal-stats">
              <span>
                projects=<b>{cardData.length}</b>
              </span>
              <span>
                status=<b>active</b>
              </span>
              <span>
                mode=<b>production</b>
              </span>
            </div>
          </div>
        </div>

        {/* FILTER COMMAND */}
        <div className="project-filter-terminal">
          <div className="filter-prompt">
            <span className="prompt">kannan@portfolio</span>:~$ filter --category
          </div>

          <div className="project-filter-buttons">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeFilter === category ? "active" : ""}
                onClick={() => setActiveFilter(category)}
              >
                {activeFilter === category ? ">" : "$"} {category}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT FILE LIST */}
        <div className="projects-terminal-window">
          <div className="terminal-window-bar">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <span>projects.log</span>

            <span className="window-count">
              {String(filteredProjects.length).padStart(2, "0")} entries
            </span>
          </div>

          <div className="projects-list">
            {filteredProjects.map((project, index) => (
              <ProjectTerminalRow
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                colors={colors}
                theme={theme}
              />
            ))}
          </div>

          <div className="terminal-footer">
            <span>
              <i className="live-dot" /> process complete
            </span>

            <span>
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""} loaded
            </span>

            <span className="footer-cursor">█</span>
          </div>
        </div>

        {/* GITHUB COMMAND */}
        <div className="github-terminal">
          <div>
            <span className="prompt">kannan@portfolio</span>:~$ git remote -v
          </div>

          <a
            href="https://github.com/Kannan-24"
            target="_blank"
            rel="noopener noreferrer"
          >
            origin → github.com/Kannan-24
          </a>

          <a
            className="github-command-button"
            href="https://github.com/Kannan-24"
            target="_blank"
            rel="noopener noreferrer"
          >
            $ git explore --all
          </a>
        </div>
      </div>

      <style>{`
        .projects-terminal-section {
          position: relative;
          min-height: 100vh;
          padding: 78px 0 70px;
          overflow: hidden;
          color: var(--project-text);
          font-family:
            "JetBrains Mono",
            "Fira Code",
            "Cascadia Code",
            "SFMono-Regular",
            Consolas,
            monospace;
        }

        .projects-terminal-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .09;
          background-image:
            linear-gradient(
              rgba(53,230,208,.11) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(53,230,208,.07) 1px,
              transparent 1px
            );
          background-size: 45px 45px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .main-terminal,
        .project-filter-terminal,
        .projects-terminal-window,
        .github-terminal {
          position: relative;
          z-index: 1;
          border: 1px solid var(--project-border);
          background: var(--project-terminal);
          border-radius: 10px;
          box-shadow:
            0 18px 55px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.02);
          backdrop-filter: blur(14px);
        }

        .main-terminal {
          overflow: hidden;
        }

        .main-terminal-bar,
        .terminal-window-bar {
          min-height: 43px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--project-muted);
          font-size: .7rem;
          border-bottom: 1px solid var(--project-border);
          background: rgba(53,230,208,.025);
        }

        .terminal-dots {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .dot {
          width: 10px;
          height: 10px;
          display: block;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #febc2e; }
        .dot.green { background: #28c840; }

        .terminal-titlebar {
          color: var(--project-muted);
        }

        .terminal-system {
          margin-left: auto;
          opacity: .55;
        }

        .main-terminal-body {
          padding: 38px 40px 32px;
        }

        .command-line,
        .filter-prompt,
        .tech-command-line {
          color: var(--project-muted);
          font-size: .72rem;
        }

        .prompt,
        .command-green {
          color: var(--project-accent);
        }

        .main-terminal-body h2 {
          margin: 22px 0 10px;
          color: var(--project-text);
          font-family: Inter, system-ui, sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 1;
          letter-spacing: -2px;
          font-weight: 800;
        }

        .main-terminal-body h2 span {
          color: var(--project-accent);
        }

        .main-terminal-body p {
          max-width: 760px;
          margin: 0;
          color: var(--project-muted);
          font-family: Inter, system-ui, sans-serif;
          font-size: .9rem;
          line-height: 1.75;
        }

        .terminal-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 25px;
          padding-top: 18px;
          border-top: 1px dashed var(--project-border);
          color: var(--project-muted);
          font-size: .65rem;
        }

        .terminal-stats b {
          margin-left: 5px;
          color: var(--project-accent);
          font-weight: 500;
        }

        .project-filter-terminal {
          margin: 16px 0;
          padding: 13px 15px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .filter-prompt {
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .project-filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .project-filter-buttons button {
          padding: 6px 9px;
          border: 1px solid transparent;
          border-radius: 5px;
          color: var(--project-muted);
          background: transparent;
          font-family: inherit;
          font-size: .62rem;
          cursor: pointer;
          transition: .2s ease;
        }

        .project-filter-buttons button:hover,
        .project-filter-buttons button.active {
          color: var(--project-accent);
          border-color: rgba(53,230,208,.35);
          background: rgba(53,230,208,.07);
        }

        .projects-terminal-window {
          overflow: hidden;
        }

        .window-count {
          margin-left: auto;
          color: var(--project-muted);
          opacity: .65;
          font-size: .6rem;
        }

        .projects-list {
          padding: 5px 0;
        }

        .project-terminal-row {
          border-bottom: 1px solid rgba(128,150,160,.11);
        }

        .project-terminal-row:last-child {
          border-bottom: 0;
        }

        .project-terminal-header {
          width: 100%;
          min-height: 64px;
          padding: 0 18px;
          display: grid;
          grid-template-columns: 22px 30px 100px minmax(0,1fr) auto auto;
          align-items: center;
          gap: 9px;
          border: 0;
          color: var(--project-text);
          background: transparent;
          text-align: left;
          font-family: inherit;
          cursor: pointer;
          transition: .2s ease;
        }

        .project-terminal-header:hover,
        .project-terminal-row.is-open .project-terminal-header {
          background: rgba(53,230,208,.035);
        }

        .terminal-tree {
          color: var(--project-accent);
          font-size: .58rem;
        }

        .project-number {
          color: var(--project-muted);
          font-size: .6rem;
          opacity: .55;
        }

        .project-folder {
          color: var(--project-accent);
          opacity: .65;
          font-size: .6rem;
        }

        .project-name {
          min-width: 0;
          overflow: hidden;
          color: var(--project-text);
          font-family: Inter, system-ui, sans-serif;
          font-size: .83rem;
          font-weight: 650;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .project-category {
          padding: 4px 7px;
          border: 1px solid var(--project-border);
          border-radius: 4px;
          color: var(--project-muted);
          font-size: .52rem;
          white-space: nowrap;
        }

        .project-state {
          color: var(--project-accent);
          font-size: .52rem;
          opacity: .8;
        }

        .project-terminal-body {
          padding: 0 28px 27px 79px;
        }

        .terminal-output-line {
          padding: 12px 0;
          color: var(--project-muted);
          border-top: 1px dashed var(--project-border);
          font-size: .68rem;
        }

        .command-file {
          color: var(--project-text);
        }

        .project-output {
          padding: 19px 21px;
          border-left: 2px solid rgba(53,230,208,.35);
          background: rgba(53,230,208,.018);
        }

        .output-title {
          margin-bottom: 13px;
          color: var(--project-text);
          font-family: Inter, system-ui, sans-serif;
          font-size: .95rem;
          font-weight: 700;
        }

        .output-title span {
          color: var(--project-accent);
        }

        .output-description {
          margin: 0 0 20px;
          max-width: 950px;
          color: var(--project-muted);
          font-family: Inter, system-ui, sans-serif;
          font-size: .76rem;
          line-height: 1.75;
        }

        .output-section,
        .workflow-terminal,
        .project-tech-terminal,
        .project-links-terminal {
          margin-top: 17px;
          padding-top: 16px;
          border-top: 1px dashed var(--project-border);
        }

        .output-label {
          display: block;
          margin-bottom: 11px;
          color: var(--project-muted);
          font-size: .63rem;
          letter-spacing: .4px;
        }

        .output-label span {
          color: var(--project-accent);
        }

        .output-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .output-item {
          display: grid;
          grid-template-columns: 26px minmax(0,1fr);
          gap: 6px;
          color: var(--project-muted);
          font-family: Inter, system-ui, sans-serif;
          font-size: .72rem;
          line-height: 1.6;
        }

        .output-item .branch {
          color: var(--project-accent);
          font-family: monospace;
        }

        .workflow-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          color: var(--project-muted);
          font-size: .61rem;
          line-height: 1.8;
        }

        .workflow-step {
          padding: 4px 7px;
          border: 1px solid var(--project-border);
          border-radius: 4px;
          background: rgba(53,230,208,.025);
        }

        .workflow-arrow {
          color: var(--project-accent);
        }

        .tech-command-line {
          margin-bottom: 10px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .project-tag {
          padding: 5px 8px;
          color: var(--project-accent);
          border: 1px solid rgba(53,230,208,.23);
          border-radius: 4px;
          background: rgba(53,230,208,.04);
          font-size: .58rem;
        }

        .terminal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 17px;
        }

        .terminal-links a {
          color: var(--project-accent);
          text-decoration: none;
          font-size: .66rem;
          transition: .2s ease;
        }

        .terminal-links a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .terminal-links a span {
          margin-right: 5px;
        }

        .terminal-footer {
          min-height: 43px;
          padding: 0 17px;
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--project-muted);
          border-top: 1px solid var(--project-border);
          font-size: .59rem;
        }

        .terminal-footer span:nth-child(2) {
          margin-left: auto;
        }

        .live-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-right: 7px;
          border-radius: 50%;
          background: var(--project-accent);
          box-shadow: 0 0 9px var(--project-accent);
          animation: terminalPulse 1.8s infinite;
        }

        .footer-cursor {
          color: var(--project-accent);
          animation: terminalBlink 1s steps(2) infinite;
        }

        .github-terminal {
          margin-top: 15px;
          padding: 15px 17px;
          display: flex;
          align-items: center;
          gap: 17px;
          color: var(--project-muted);
          font-size: .65rem;
        }

        .github-terminal > a:not(.github-command-button) {
          color: var(--project-accent);
          text-decoration: none;
        }

        .github-command-button {
          margin-left: auto;
          padding: 7px 11px;
          color: var(--project-accent);
          border: 1px solid rgba(53,230,208,.35);
          border-radius: 5px;
          text-decoration: none;
          transition: .2s ease;
        }

        .github-command-button:hover {
          background: rgba(53,230,208,.08);
        }

        @keyframes terminalBlink {
          50% { opacity: 0; }
        }

        @keyframes terminalPulse {
          50% {
            opacity: .35;
            transform: scale(.75);
          }
        }

        @media (max-width: 900px) {
          .project-terminal-header {
            grid-template-columns: 20px 27px 85px minmax(0,1fr) auto;
          }

          .project-state {
            display: none;
          }

          .project-terminal-body {
            padding-left: 55px;
          }
        }

        @media (max-width: 767px) {
          .projects-terminal-section {
            padding: 60px 0;
          }

          .main-terminal-body {
            padding: 28px 22px;
          }

          .main-terminal-body h2 {
            font-size: 2.35rem;
          }

          .project-filter-terminal {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .project-terminal-header {
            grid-template-columns: 18px 25px minmax(0,1fr) auto;
            padding: 0 12px;
            gap: 7px;
          }

          .project-folder,
          .project-category {
            display: none;
          }

          .project-terminal-body {
            padding: 0 15px 20px 35px;
          }

          .project-output {
            padding: 15px;
          }

          .output-description,
          .output-item {
            font-size: .7rem;
          }

          .terminal-footer {
            flex-wrap: wrap;
            padding: 10px 14px;
          }

          .terminal-footer span:nth-child(2) {
            margin-left: 0;
          }

          .github-terminal {
            align-items: flex-start;
            flex-direction: column;
          }

          .github-command-button {
            margin-left: 0;
          }
        }

        @media (max-width: 480px) {
          .main-terminal-body h2 {
            font-size: 2rem;
            letter-spacing: -1px;
          }

          .terminal-stats {
            gap: 11px;
          }

          .project-name {
            font-size: .72rem;
          }

          .workflow-flow {
            gap: 5px;
          }

          .workflow-step {
            font-size: .55rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
