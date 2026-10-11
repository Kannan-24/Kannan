import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { profile } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Resume.css";

const Resume = () => (
  <section id="resume" className="section res" aria-labelledby="resume-title">
    <div className="container">
      <SectionHeading
        id="resume-title"
        index="05"
        kicker="resume"
        title="The short"
        accent="version."
        lead="Everything above, condensed into one document. View it here or take a copy with you."
      />

      <div className="res-grid">
        <Window title="~/resume" meta="bash" className="res-term-window" bodyClassName="res-term" data-reveal>
          <div className="res-file">
            <span className="res-file-icon">
              <FaFilePdf aria-hidden="true" />
            </span>
            <div>
              <p className="res-file-name">{profile.resumeFileName}</p>
              <p className="res-file-meta">PDF document · 2 pages</p>
            </div>
          </div>

          <div className="res-output">
            <p className="prompt">
              <b>kannan@portfolio</b>:~$ file {profile.resumeFileName}
            </p>
            <p className="res-result">
              <span aria-hidden="true">&gt;</span> PDF document · Professional resume
            </p>
            <p className="prompt">
              <b>kannan@portfolio</b>:~$ status --resume
            </p>
            <p className="res-result">
              <span className="live-dot" aria-hidden="true" /> Up to date and ready to download
            </p>
          </div>

          <div className="res-actions">
            <a href={profile.resume} download={profile.resumeFileName} className="btn btn-primary">
              <FaDownload aria-hidden="true" /> Download resume
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FaExternalLinkAlt aria-hidden="true" /> Open in new tab
            </a>
          </div>

          <figure className="res-quote">
            <blockquote>“Success is the sum of small efforts, repeated day in and day out.”</blockquote>
            <figcaption>— Robert Collier</figcaption>
          </figure>
        </Window>

        <Window
          title={profile.resumeFileName}
          meta="preview"
          className="res-preview"
          bodyClassName="res-preview-body"
          data-reveal
          style={{ "--reveal-delay": "100ms" }}
        >
          <object
            data={`${profile.resume}#view=FitH&toolbar=0`}
            type="application/pdf"
            aria-label="Resume preview"
            className="res-pdf"
          >
            <div className="res-pdf-fallback">
              <FaFilePdf aria-hidden="true" />
              <p>Your browser can&apos;t preview PDFs inline.</p>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Open the resume
              </a>
            </div>
          </object>
        </Window>
      </div>
    </div>
  </section>
);

export default Resume;
