import React from "react";
import { FaTerminal, FaFilePdf, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Resume = () => {
  const { colors, theme } = useTheme();

  const resumePath = "/Kannan_resume.pdf";

  return (
    <section
      id="resume"
      className="resume-terminal-section"
      style={{
        "--resume-accent": colors.accent,
        "--resume-text": colors.text,
        "--resume-muted": colors.textSecondary,
        "--resume-border": colors.border,
        "--resume-terminal":
          theme === "dark" ? "#05090d" : colors.cardBg,
      }}
    >
      {/* Background */}
      <div className="resume-terminal-grid" />

      <div className="container">

        {/* =====================================================
            MAIN TERMINAL
        ===================================================== */}

        <div className="resume-terminal-window">

          {/* Terminal Header */}
          <div className="resume-terminal-bar">

            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <span>
              kannan@portfolio: ~/resume
            </span>

            <span className="terminal-right">
              bash
            </span>

          </div>


          {/* Terminal Content */}
          <div className="resume-terminal-content">

            {/* Resume Heading */}
            <div className="resume-heading">

              <div className="resume-icon">
                <FaFilePdf />
              </div>

              <div>

                <h2>
                  My <strong>Resume</strong>
                </h2>

                <p>
                  View or download my latest professional resume.
                </p>

              </div>

            </div>

            {/* Command Output */}
            <div className="resume-output">

              <div className="output-line">

                <span className="prompt">
                  kannan@portfolio
                </span>

                :~$ file Kannan_resume.pdf

              </div>


              <div className="output-result">

                <span className="output-symbol">
                  &gt;
                </span>

                PDF document · Professional Resume

              </div>


              <div className="output-line">

                <span className="prompt">
                  kannan@portfolio
                </span>

                :~$ status --resume

              </div>


              <div className="output-result">

                <span className="status-dot" />

                Resume available for download

              </div>

            </div>


            {/* Buttons */}
            <div className="resume-actions">

              <a
                href={resumePath}
                download="Kannan_resume.pdf"
                className="resume-action primary"
              >

                <FaDownload />

                <span>
                  Download Resume
                </span>

              </a>


              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-action secondary"
              >

                <FaExternalLinkAlt />

                <span>
                  Open Resume
                </span>

              </a>

            </div>


            {/* Quote */}
            <div className="resume-quote">

              <span className="quote-mark">
                "
              </span>

              <div>

                <p>
                  Success is the sum of small efforts,
                  repeated day in and day out.
                </p>

                <small>
                  — Robert Collier
                </small>

              </div>

            </div>

          </div>


          {/* Terminal Footer */}
          <div className="resume-bottom-terminal">
            <span className="prompt">
              kannan@portfolio
            </span>

            :~$

            <strong>
              {" "}resume --download
            </strong>

            <span className="cursor">
              █
            </span>
          </div>

        </div>
      </div>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        .resume-terminal-section {

          position: relative;

          min-height: 70vh;

          padding: 78px 0 70px;

          overflow: hidden;

          color: var(--resume-text);

          font-family:
            "JetBrains Mono",
            "Fira Code",
            "Cascadia Code",
            "SFMono-Regular",
            Consolas,
            monospace;

        }


        /* Background */

        .resume-terminal-grid {

          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: .08;

          background-image:

            linear-gradient(
              rgba(53,230,208,.12) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(53,230,208,.07) 1px,
              transparent 1px
            );

          background-size:
            44px 44px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 92%
            );

        }


        /* Terminal */

        .resume-terminal-window {

          position: relative;

          z-index: 1;

          overflow: hidden;

          border:
            1px solid
            var(--resume-border);

          border-radius: 10px;

          background:
            var(--resume-terminal);

          box-shadow:

            0 18px 55px
            rgba(0,0,0,.22),

            inset 0 1px 0
            rgba(255,255,255,.02);

          backdrop-filter:
            blur(14px);

        }


        /* Terminal Bar */

        .resume-terminal-bar {

          min-height: 43px;

          padding:
            0 15px;

          display: flex;

          align-items: center;

          gap: 12px;

          color:
            var(--resume-muted);

          font-size: .7rem;

          border-bottom:
            1px solid
            var(--resume-border);

          background:
            rgba(53,230,208,.025);

        }


        .terminal-dots {

          display: flex;

          gap: 7px;

        }


        .dot {

          width: 10px;

          height: 10px;

          border-radius: 50%;

        }


        .dot.red {
          background: #ff5f57;
        }


        .dot.yellow {
          background: #febc2e;
        }


        .dot.green {
          background: #28c840;
        }


        .terminal-right {

          margin-left: auto;

          opacity: .55;

        }


        /* Content */

        .resume-terminal-content {

          padding:
            38px 40px 30px;

        }


        .terminal-command {

          color:
            var(--resume-muted);

          font-size: .7rem;

        }


        .prompt {

          color:
            var(--resume-accent);

        }


        /* Heading */

        .resume-heading {

          display: flex;

          align-items: center;

          gap: 20px;

        }


        .resume-icon {

          width: 58px;

          height: 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          color:
            var(--resume-accent);

          border:
            1px solid
            rgba(53,230,208,.3);

          border-radius: 8px;

          background:
            rgba(53,230,208,.05);

          font-size: 1.45rem;

          box-shadow:
            0 0 25px
            rgba(53,230,208,.08);

        }


        .resume-heading h2 {

          margin: 0;

          font-family:
            Inter,
            system-ui,
            sans-serif;

          font-size:
            clamp(2.3rem, 5vw, 3.8rem);

          line-height: 1;

          letter-spacing: -2px;

          font-weight: 800;

        }


        .resume-heading h2 strong {

          color:
            var(--resume-accent);

        }


        .resume-heading p {

          margin:
            9px 0 0;

          color:
            var(--resume-muted);

          font-family:
            Inter,
            system-ui,
            sans-serif;

          font-size: .82rem;

        }


        /* File */

        .resume-file {

          margin-top: 30px;

          padding:
            16px 18px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          border:
            1px solid
            var(--resume-border);

          border-radius: 8px;

          background:
            rgba(53,230,208,.025);

        }


        .resume-file-left {

          display: flex;

          align-items: center;

          gap: 14px;

          min-width: 0;

        }


        .file-icon {

          flex-shrink: 0;

          color:
            var(--resume-accent);

          font-size: 1.35rem;

        }


        .resume-file strong {

          display: block;

          color:
            var(--resume-text);

          font-size: .75rem;

        }


        .resume-file small {

          display: block;

          margin-top: 5px;

          color:
            var(--resume-muted);

          font-size: .55rem;

        }


        .file-status {

          padding:
            5px 8px;

          border:
            1px solid
            rgba(53,230,208,.3);

          border-radius: 4px;

          color:
            var(--resume-accent);

          font-size: .5rem;

        }


        /* Output */

        .resume-output {

          margin-top: 18px;

          padding:
            17px 19px;

          border-left:
            2px solid
            rgba(53,230,208,.3);

          background:
            rgba(53,230,208,.018);

        }


        .output-line {

          color:
            var(--resume-muted);

          font-size: .64rem;

        }


        .output-line:nth-child(3) {

          margin-top: 14px;

        }


        .output-result {

          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 8px;

          color:
            var(--resume-text);

          font-family:
            Inter,
            system-ui,
            sans-serif;

          font-size: .72rem;

        }


        .output-symbol {

          color:
            var(--resume-accent);

          font-family:
            monospace;

        }


        .status-dot {

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background:
            var(--resume-accent);

          box-shadow:
            0 0 9px
            var(--resume-accent);

        }


        /* Buttons */

        .resume-actions {

          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 22px;

        }


        .resume-action {

          min-height: 43px;

          padding:
            0 16px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 6px;

          text-decoration: none;

          font-size: .65rem;

          transition:
            .2s ease;

        }


        .resume-action.primary {

          color:
            #05090d;

          background:
            var(--resume-accent);

          border:
            1px solid
            var(--resume-accent);

        }


        .resume-action.primary:hover {

          transform:
            translateY(-2px);

          box-shadow:
            0 8px 25px
            rgba(53,230,208,.18);

          color:
            #05090d;

        }


        .resume-action.secondary {

          color:
            var(--resume-accent);

          border:
            1px solid
            rgba(53,230,208,.3);

          background:
            rgba(53,230,208,.035);

        }


        .resume-action.secondary:hover {

          transform:
            translateY(-2px);

          background:
            rgba(53,230,208,.08);

        }


        /* Quote */

        .resume-quote {

          margin-top: 28px;

          padding:
            20px 22px;

          display: flex;

          align-items: flex-start;

          gap: 13px;

          border-top:
            1px dashed
            var(--resume-border);

          color:
            var(--resume-muted);

        }


        .quote-mark {

          color:
            var(--resume-accent);

          font-family:
            Georgia,
            serif;

          font-size: 2.6rem;

          line-height: .8;

        }


        .resume-quote p {

          margin: 0;

          font-family:
            Georgia,
            serif;

          font-size: .9rem;

          font-style: italic;

          line-height: 1.6;

        }


        .resume-quote small {

          display: block;

          margin-top: 7px;

          font-family:
            monospace;

          font-size: .6rem;

          color:
            var(--resume-accent);

        }


        /* Footer */

        .resume-terminal-footer {

          min-height: 43px;

          padding:
            0 17px;

          display: flex;

          align-items: center;

          gap: 20px;

          border-top:
            1px solid
            var(--resume-border);

          color:
            var(--resume-muted);

          font-size: .59rem;

        }


        .resume-terminal-footer span:nth-child(2) {

          margin-left: auto;

        }


        .live-dot {

          display: inline-block;

          width: 6px;

          height: 6px;

          margin-right: 7px;

          border-radius: 50%;

          background:
            var(--resume-accent);

          box-shadow:
            0 0 9px
            var(--resume-accent);

          animation:
            resumePulse 1.8s infinite;

        }


        .cursor {

          color:
            var(--resume-accent);

          animation:
            resumeBlink 1s steps(2) infinite;

        }


        /* Bottom */

        .resume-bottom-terminal {

          position: relative;

          z-index: 1;

          min-height: 49px;

          margin-top: 15px;

          padding:
            0 17px;

          display: flex;

          align-items: center;

          gap: 6px;

          border:
            1px solid
            var(--resume-border);

          border-radius: 8px;

          background:
            var(--resume-terminal);

          color:
            var(--resume-muted);

          font-size: .64rem;

        }


        .resume-bottom-terminal strong {

          color:
            var(--resume-text);

          font-weight: 500;

        }


        .resume-message {

          margin-left: auto;

          color:
            var(--resume-accent);

          opacity: .85;

        }


        /* Animations */

        @keyframes resumeBlink {

          50% {
            opacity: 0;
          }

        }


        @keyframes resumePulse {

          50% {

            opacity: .35;

            transform:
              scale(.75);

          }

        }


        /* Tablet */

        @media (max-width: 767px) {

          .resume-terminal-section {

            padding:
              60px 0;

          }


          .resume-terminal-content {

            padding:
              28px 22px;

          }


          .resume-heading {

            align-items:
              flex-start;

          }


          .resume-heading h2 {

            font-size:
              2.35rem;

          }


          .resume-file {

            align-items:
              flex-start;

          }


          .resume-actions {

            flex-direction:
              column;

          }


          .resume-action {

            width:
              100%;

          }


          .resume-terminal-footer {

            flex-wrap:
              wrap;

            padding:
              10px 14px;

          }


          .resume-terminal-footer
          span:nth-child(2) {

            margin-left:
              0;

          }


          .resume-bottom-terminal {

            min-height:
              auto;

            padding:
              12px 14px;

            flex-wrap:
              wrap;

          }


          .resume-message {

            width:
              100%;

            margin-left:
              0;

            margin-top:
              3px;

          }

        }


        /* Small Mobile */

        @media (max-width: 480px) {

          .resume-heading {

            gap:
              13px;

          }


          .resume-icon {

            width:
              46px;

            height:
              46px;

            font-size:
              1.1rem;

          }


          .resume-heading h2 {

            font-size:
              2rem;

            letter-spacing:
              -1px;

          }


          .resume-heading p {

            font-size:
              .72rem;

          }


          .resume-quote {

            padding:
              17px 0;

          }


          .resume-quote p {

            font-size:
              .8rem;

          }

        }

      `}</style>

    </section>
  );
};

export default Resume;