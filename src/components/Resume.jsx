import { useEffect, useRef, useState } from "react";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { profile, sectionNumber } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Resume.css";

// The inline PDF preview downloads the whole PDF, so only mount it when the
// section is about to scroll into view (not on first page load).
const useNearViewport = (margin = "400px") => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setNear(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${margin} 0px` }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return [ref, near];
};

const OpenResume = ({ message }) => (
  <div className="res-pdf-fallback">
    <FaFilePdf aria-hidden="true" />
    <p>{message}</p>
    <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
      Open the resume
    </a>
  </div>
);

const Resume = () => {
  const [previewRef, showPreview] = useNearViewport();

  return (
    <section id="resume" className="section res" aria-labelledby="resume-title">
      <div className="container">
        <SectionHeading
          id="resume-title"
          index={sectionNumber("resume")}
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
            <div ref={previewRef} className="res-pdf-slot">
              {showPreview ? (
                <object
                  data={`${profile.resume}#view=FitH&toolbar=0`}
                  type="application/pdf"
                  aria-label="Resume preview"
                  className="res-pdf"
                >
                  <OpenResume message="Your browser can't preview PDFs inline." />
                </object>
              ) : (
                <OpenResume message={profile.resumeFileName} />
              )}
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
};

export default Resume;
