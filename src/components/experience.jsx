import React from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
  FaCircle,
  FaChevronRight,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { colors, theme } = useTheme();

  const technologies = [
    "Python",
    "React.js",
    "Streamlit",
    "Flask",
    "AWS Textract",
    "SQL Server",
    "Tesseract OCR",
    "Node.js",
    "Docker",
    "Git",
  ];

  const contributions = [
    {
      title: "End-to-End Claims Processing",
      text: "Developed and enhanced automated extraction and verification pipelines for Dental and Professional insurance claims covering file loading, PDF splitting, validation, and SQL Server storage.",
    },
    {
      title: "AG Version Tool",
      text: "Independently developed the AG Version Tool to manage extraction versions, prevent duplicate processing, and maintain complete audit history.",
    },
    {
      title: "Claim Verification Tool",
      text: "Built full-stack verification functionality allowing operators to inspect source documents alongside extracted data, manage claim queues, edit field values, and update service-lines.",
    },
    {
      title: "Document OCR & Automation",
      text: "Integrated AWS Textract with Tesseract OCR as fallback, engineered split-file origin mapping for traceability, and automated file movement and CSV exports.",
    },
    {
      title: "RAT Enterprise Application",
      text: "Built configuration-driven Dynamic Quality Measures section, optimized Coder Dashboard queries, organized audit logging, and supported deployment activities.",
    },
  ];

  const terminalBg = theme === "dark" ? "#050b0f" : "#f5faf9";
  const panelBg = theme === "dark" ? "rgba(7, 18, 24, 0.88)" : colors.cardBg;
  const terminalText = theme === "dark" ? "#b7c8cf" : colors.textSecondary;
  const green = "#35e6d0";

  return (
    <section
      id="experience"
      className="terminal-experience"
      style={{
        "--exp-text": colors.text,
        "--exp-muted": terminalText,
        "--exp-accent": green,
        "--exp-border": theme === "dark"
          ? "rgba(53,230,208,0.24)"
          : colors.border,
        "--exp-panel": panelBg,
        "--exp-bg": terminalBg,
      }}
    >
      <div className="terminal-grid-bg" />

      <div className="container terminal-container">
        <div className="terminal-layout">

          {/* LEFT TERMINAL / INTRO */}
          <aside className="terminal-sidebar">

            <div className="terminal-window intro-window">
              <div className="terminal-bar">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span>~/experience</span>
              </div>

              <div className="terminal-body intro-body">
                <div className="terminal-prompt">
                  <span>kannan@portfolio</span>:~$
                </div>

                <div className="terminal-command">
                  <span className="command-symbol">&gt;</span> cat experience.txt
                </div>

                <div className="terminal-title">
                 Professional
                  <strong>Experience</strong>
                </div>

                <p>
                  Building real-world solutions through code, automation and
                  continuous learning.
                </p>

                <div className="ascii-card">
                  <div className="ascii-art">
{`       .--------.
      /  .--.    \\
     |  |  _ |    |
     |  | (_) |   |
      \\  '--'   /
       '------'
         /||\\
      __/ || \\__
     /___/  \\___\\`}
                  </div>

                  <div className="ascii-message">
                    <span>Ideas</span>
                    <b>+</b>
                    <span>Code</span>
                    <b>+</b>
                    <span>Impact</span>
                    <b>=</b>
                    <strong>Progress</strong>
                  </div>
                </div>

                <div className="folder-tree">
                  <div className="tree-row active">
                    <FaChevronRight />
                    <span>📁</span> experience/
                  </div>
                  <div className="tree-row">
                    <FaChevronRight />
                    <span>📁</span> skills/
                  </div>
                  <div className="tree-row">
                    <FaChevronRight />
                    <span>📁</span> projects/
                  </div>
                  {/* <div className="tree-row">
                    <span className="tree-space">│</span> 📄 resume.pdf
                  </div>
                  <div className="tree-row">
                    <span className="tree-space">│</span> 📄 about.txt
                  </div> */}
                </div>

                <div className="tree-footer">
                  <span>5 items</span>
                  <span>drwxr-xr-x</span>
                </div>
              </div>
            </div>

            <div className="terminal-window status-window">
              <div className="terminal-bar">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span>~/status</span>
              </div>

              <div className="terminal-body">
                <div className="status-line">
                  <span className="status-command">&gt; whoami</span>
                  <strong>Kannan M</strong>
                </div>

                <div className="status-line">
                  <span className="status-command">&gt; role</span>
                  <strong>Software Developer</strong>
                </div>

                <div className="status-line">
                  <span className="status-command">&gt; location</span>
                  <strong>Bangalore, India</strong>
                </div>

                <div className="status-line">
                  <span className="status-command">&gt; focus</span>
                  <strong>Build · Learn · Improve</strong>
                </div>

                <div className="status-line">
                  <span className="status-command">&gt; goal</span>
                  <strong>Solve real problems</strong>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN EXPERIENCE TERMINAL */}
          <main className="terminal-main">

            <div className="terminal-window experience-window">
              <div className="terminal-bar">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <span>~/experience</span>

                <span className="terminal-command-right">
                  git log --oneline
                </span>
              </div>

              <div className="timeline">

                {/* CURRENT ROLE */}
                <article className="timeline-item current">
                  <div className="timeline-marker">
                    <span />
                  </div>

                  <div className="experience-entry">
                    <div className="entry-header">
                      <div>
                        <div className="entry-company">
                          <FaBuilding />
                          NuWare Systems LLP
                        </div>

                        <h3>Software Developer Trainee</h3>

                        <div className="entry-meta">
                          <span>
                            <FaBriefcase />
                            Full-Time
                          </span>
                          <span>
                            <FaMapMarkerAlt />
                            Bangalore, India
                          </span>
                        </div>
                      </div>

                      <span className="entry-status active">
                        <FaCircle />
                        Oct 2025 - Present
                      </span>
                    </div>

                    <div className="entry-path">
                      /work/enterprise-solutions
                    </div>

                    <p className="entry-summary">
                      Core developer driving full-stack automation, document
                      intelligence, and platform enhancements across production
                      insurance claims processing and healthcare quality
                      analytics applications.
                    </p>

                    <div className="contribution-list">
                      {contributions.map((item) => (
                        <div className="contribution" key={item.title}>
                          <span className="branch">├─</span>
                          <p>
                            <strong>{item.title}:</strong> {item.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="tech-line">
                      <strong>Tech:</strong>{" "}
                      {technologies.map((tech) => (
                        <span key={tech}>[{tech}]</span>
                      ))}
                    </div>
                  </div>


                  
                </article>

              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="terminal-window technologies-window">
              <div className="terminal-bar compact-bar">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span>~/technologies</span>
              </div>

              <div className="technologies-body">
                <div className="tech-heading">
                  <span>cat</span> tech-stack.json
                </div>

                <div className="tech-grid">
                  {technologies.map((tech) => (
                    <span className="terminal-tech" key={tech}>
                      <span>[</span>{tech}<span>]</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM COMMAND */}
            <div className="terminal-command-box">
              <span className="prompt-user">kannan@portfolio</span>:~$
              <span className="command-text">
                echo "Still learning... still building..."
              </span>
              <span className="cursor">█</span>
              <span className="work-progress">
                [Always a Work in Progress]
              </span>
            </div>

          </main>
        </div>
      </div>

      <style>{`
        .terminal-experience {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 82px 0 70px;
          // background: var(--exp-bg);
          color: var(--exp-text);
          font-family: "JetBrains Mono", "Fira Code", "Cascadia Code",
            "SFMono-Regular", Consolas, monospace;
        }

        .terminal-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(53,230,208,.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53,230,208,.13) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .terminal-container {
          position: relative;
          z-index: 2;
        }

        .terminal-layout {
          display: grid;
          grid-template-columns: 31% minmax(0, 69%);
          gap: 24px;
          align-items: start;
        }

        .terminal-sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 0;
        }

        .terminal-window,
        .terminal-command-box {
          overflow: hidden;
          border: 1px solid var(--exp-border);
          border-radius: 10px;
          background: var(--exp-panel);
          box-shadow:
            0 18px 55px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.025);
          backdrop-filter: blur(14px);
        }

        .terminal-bar {
          min-height: 44px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--exp-muted);
          font-size: .78rem;
          border-bottom: 1px solid var(--exp-border);
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

        .terminal-body {
          padding: 22px;
        }

        .intro-body {
          min-height: 615px;
        }

        .terminal-prompt {
          color: var(--exp-muted);
          margin-bottom: 18px;
        }

        .terminal-prompt span,
        .prompt-user,
        .status-command,
        .command-symbol {
          color: var(--exp-accent);
        }

        .terminal-command {
          color: var(--exp-muted);
          margin-bottom: 8px;
          font-size: .82rem;
        }

        .terminal-title {
          margin-bottom: 18px;
          color: var(--exp-text);
          font-family: Inter, system-ui, sans-serif;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .terminal-title span {
          display: block;
          color: var(--exp-accent);
          font-family: inherit;
          font-size: 1rem;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }

        .terminal-title strong {
          display: block;
          color: var(--exp-accent);
        }

        .intro-body > p {
          max-width: 360px;
          color: var(--exp-muted);
          font-size: .84rem;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .ascii-card {
          display: grid;
          grid-template-columns: 1fr 90px;
          gap: 8px;
          align-items: center;
          padding: 16px 10px 14px;
          margin-bottom: 18px;
          border-top: 1px dashed var(--exp-border);
          border-bottom: 1px dashed var(--exp-border);
        }

        .ascii-art {
          color: var(--exp-accent);
          font-size: .55rem;
          line-height: 1.15;
          white-space: pre;
        }

        .ascii-message {
          color: var(--exp-muted);
          font-size: .68rem;
          line-height: 1.55;
        }

        .ascii-message span,
        .ascii-message b,
        .ascii-message strong {
          display: block;
        }

        .ascii-message b {
          color: var(--exp-accent);
        }

        .ascii-message strong {
          color: var(--exp-accent);
        }

        .folder-tree {
          color: var(--exp-muted);
          font-size: .74rem;
          line-height: 2.15;
        }

        .tree-row {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 1px 7px;
          border-radius: 5px;
        }

        .tree-row svg {
          width: 8px;
          color: var(--exp-muted);
        }

        .tree-row.active {
          color: var(--exp-text);
          background: rgba(53,230,208,.08);
        }

        .tree-row.active svg {
          color: var(--exp-accent);
        }

        .tree-space {
          width: 8px;
          color: var(--exp-border);
        }

        .tree-footer {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid var(--exp-border);
          display: flex;
          justify-content: space-between;
          color: var(--exp-muted);
          font-size: .62rem;
        }

        .status-window .terminal-body {
          padding: 20px 22px;
        }

        .status-line {
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: .72rem;
        }

        .status-line strong {
          color: var(--exp-text);
          font-weight: 500;
        }

        .status-command {
          font-weight: 600;
        }

        .experience-window {
          min-width: 0;
        }

        .terminal-command-right {
          margin-left: auto;
          color: var(--exp-accent);
          opacity: .9;
        }

        .timeline {
          position: relative;
          padding: 38px 34px 30px 135px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 50px;
          bottom: 50px;
          left: 78px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            var(--exp-accent),
            rgba(53,230,208,.15)
          );
        }

        .timeline-item {
          position: relative;
          padding-bottom: 42px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -66px;
          top: 2px;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--exp-accent);
          border-radius: 50%;
          background: var(--exp-bg);
          box-shadow: 0 0 15px rgba(53,230,208,.22);
        }

        .timeline-marker span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--exp-accent);
        }

        .completed .timeline-marker {
          border-color: #7892a1;
          box-shadow: none;
        }

        .completed .timeline-marker span {
          background: #7892a1;
        }

        .timeline-date {
          position: absolute;
          left: -135px;
          top: -1px;
          width: 94px;
          color: var(--exp-accent);
          font-size: .69rem;
          line-height: 1.55;
        }

        .completed .timeline-date {
          color: var(--exp-muted);
        }

        .experience-entry {
          padding: 25px 27px;
          border: 1px solid rgba(53,230,208,.24);
          border-radius: 12px;
          background: rgba(53,230,208,.018);
          transition: .3s ease;
        }

        .experience-entry:hover {
          border-color: rgba(53,230,208,.55);
          box-shadow: 0 14px 40px rgba(0,0,0,.22);
          transform: translateY(-2px);
        }

        .trainee-entry {
          border-color: var(--exp-border);
          background: rgba(255,255,255,.008);
        }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .entry-company {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--exp-accent);
          font-family: Inter, system-ui, sans-serif;
          font-size: 1.08rem;
          font-weight: 750;
        }

        .entry-company svg {
          font-size: .95rem;
        }

        .entry-header h3 {
          margin: 6px 0 0;
          color: var(--exp-text);
          font-family: Inter, system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 600;
        }

        .entry-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 13px;
          color: var(--exp-muted);
          font-size: .7rem;
        }

        .entry-meta span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .entry-meta svg {
          color: var(--exp-accent);
        }

        .entry-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border: 1px solid var(--exp-border);
          border-radius: 20px;
          color: var(--exp-muted);
          font-size: .65rem;
          white-space: nowrap;
        }

        .entry-status.active {
          color: var(--exp-accent);
          border-color: rgba(53,230,208,.4);
          background: rgba(53,230,208,.06);
        }

        .entry-status.active svg {
          font-size: .45rem;
        }

        .entry-path {
          margin-top: 18px;
          color: var(--exp-accent);
          opacity: .65;
          font-size: .68rem;
        }

        .entry-summary {
          margin: 13px 0 19px;
          color: var(--exp-muted);
          font-size: .77rem;
          line-height: 1.75;
        }

        .contribution-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contribution {
          display: grid;
          grid-template-columns: 30px minmax(0, 1fr);
          gap: 5px;
          color: var(--exp-muted);
          font-size: .73rem;
          line-height: 1.65;
        }

        .contribution .branch {
          color: var(--exp-accent);
          opacity: .9;
        }

        .contribution p {
          margin: 0;
        }

        .contribution strong {
          color: var(--exp-text);
          font-weight: 600;
        }

        .tech-line {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 21px;
          padding-top: 16px;
          border-top: 1px dashed var(--exp-border);
          color: var(--exp-accent);
          font-size: .68rem;
          line-height: 1.5;
        }

        .tech-line strong {
          color: var(--exp-text);
        }

        .tech-line span {
          color: var(--exp-accent);
        }

        .technologies-window {
          margin-top: 18px;
        }

        .compact-bar {
          min-height: 39px;
        }

        .technologies-body {
          padding: 18px 22px 20px;
        }

        .tech-heading {
          margin-bottom: 14px;
          color: var(--exp-muted);
          font-size: .72rem;
        }

        .tech-heading span {
          color: var(--exp-accent);
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .terminal-tech {
          padding: 7px 10px;
          border: 1px solid var(--exp-border);
          border-radius: 5px;
          color: var(--exp-accent);
          background: rgba(53,230,208,.035);
          font-size: .68rem;
          transition: .2s ease;
        }

        .terminal-tech span {
          opacity: .5;
        }

        .terminal-tech:hover {
          border-color: var(--exp-accent);
          background: rgba(53,230,208,.09);
          transform: translateY(-2px);
        }

        .terminal-command-box {
          margin-top: 18px;
          min-height: 52px;
          padding: 0 17px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--exp-muted);
          font-size: .7rem;
        }

        .command-text {
          color: var(--exp-text);
        }

        .cursor {
          color: var(--exp-accent);
          animation: terminalBlink 1s steps(2, start) infinite;
        }

        .work-progress {
          margin-left: auto;
          color: var(--exp-muted);
          opacity: .8;
        }

        @keyframes terminalBlink {
          50% { opacity: 0; }
        }

        @media (max-width: 1100px) {
          .terminal-layout {
            grid-template-columns: 1fr;
          }

          .terminal-sidebar {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
          }

          .intro-body {
            min-height: 0;
          }
        }

        @media (max-width: 767px) {
          .terminal-experience {
            padding: 60px 0;
          }

          .terminal-sidebar {
            grid-template-columns: 1fr;
          }

          .terminal-command-right {
            display: none;
          }

          .timeline {
            padding: 30px 16px 25px 58px;
          }

          .timeline::before {
            left: 28px;
          }

          .timeline-marker {
            left: -38px;
          }

          .timeline-date {
            position: static;
            width: auto;
            margin-bottom: 8px;
          }

          .entry-header {
            flex-direction: column;
          }

          .entry-status {
            align-self: flex-start;
          }

          .experience-entry {
            padding: 20px 17px;
          }

          .entry-company {
            font-size: .96rem;
          }

          .contribution {
            grid-template-columns: 22px minmax(0,1fr);
            font-size: .69rem;
          }

          .terminal-command-box {
            flex-wrap: wrap;
            padding: 12px 15px;
          }

          .work-progress {
            width: 100%;
            margin-left: 0;
          }
        }

        @media (max-width: 480px) {
          .terminal-body {
            padding: 17px;
          }

          .terminal-title {
            font-size: 1.8rem;
          }

          .ascii-card {
            grid-template-columns: 1fr;
          }

          .ascii-message {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
          }

          .ascii-message span,
          .ascii-message b,
          .ascii-message strong {
            display: inline;
          }

          .timeline {
            padding-left: 43px;
          }

          .timeline::before {
            left: 19px;
          }

          .timeline-marker {
            left: -29px;
            width: 15px;
            height: 15px;
          }

          .timeline-marker span {
            width: 5px;
            height: 5px;
          }

          .entry-meta {
            flex-direction: column;
            gap: 8px;
          }

          .tech-grid {
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
