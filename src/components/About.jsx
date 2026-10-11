import { useEffect, useState } from "react";
import {
  FaBriefcase, FaCalendarAlt, FaCopy, FaDownload, FaEnvelope, FaGithub,
  FaGraduationCap, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaQuoteLeft,
} from "react-icons/fa";
import { profile, stats } from "../data/portfolio";
import { copyText, prefersReducedMotion } from "../lib/utils";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import ProfileImg from "../assets/kannan.webp";
import "./About.css";

const LOOP = ["code()", "learn()", "build()", "repeat()"];

const info = [
  { icon: FaMapMarkerAlt, label: "Location", value: profile.location },
  { icon: FaEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: FaPhoneAlt, label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  ...(profile.showAvailability
    ? [{ icon: FaBriefcase, label: "Availability", value: profile.availability }]
    : []),
  { icon: FaGraduationCap, label: "Education", value: profile.education },
  { icon: FaCalendarAlt, label: "Born", value: profile.dob },
];

const WorkflowLoop = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => setStep((s) => (s + 1) % LOOP.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <Window title="workflow.sh" meta="running" className="abt-loop" bodyClassName="abt-loop-body">
      <ol className="abt-loop-list">
        {LOOP.map((fn, i) => (
          <li key={fn} className={i === step ? "is-active" : i < step ? "is-done" : ""}>
            <span className="abt-loop-mark" aria-hidden="true">
              {i === LOOP.length - 1 ? "↺" : "▸"}
            </span>
            {fn}
          </li>
        ))}
      </ol>
    </Window>
  );
};

const About = () => (
  <section id="about" className="section abt" aria-labelledby="about-title">
    <div className="container">
      <SectionHeading
        id="about-title"
        index="01"
        kicker="about"
        title="Get to know"
        accent="me."
        lead={profile.aboutDescription}
      />

      <div className="abt-grid">
        <aside className="abt-card" data-reveal>
          <div className="abt-avatar">
            <div className="abt-avatar-ring" aria-hidden="true" />
            <img src={ProfileImg} alt={`Portrait of ${profile.name}`} width="420" height="420" loading="lazy" />
            {profile.showAvailability && (
              <span className="abt-avatar-status" title={profile.availability} />
            )}
          </div>

          <h3 className="abt-name">{profile.name}</h3>
          <p className="abt-role">{profile.role}</p>
          <p className="abt-tagline">{profile.tagline}</p>

          <div className="abt-socials">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub aria-hidden="true" />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Send email">
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>

          <a href={profile.resume} download={profile.resumeFileName} className="btn btn-ghost abt-resume">
            <FaDownload aria-hidden="true" />
            Download resume
          </a>
        </aside>

        <div className="abt-main">
          <div className="abt-info" data-reveal style={{ "--reveal-delay": "80ms" }}>
            {info.map(({ icon: Icon, label, value, href, copy }) => (
              <div className="abt-info-item" key={label}>
                <span className="abt-info-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div className="abt-info-text">
                  <span className="abt-info-label">{label}</span>
                  {href ? (
                    <a className="abt-info-value is-link" href={href}>{value}</a>
                  ) : (
                    <span className="abt-info-value">{value}</span>
                  )}
                </div>
                {copy && (
                  <button
                    type="button"
                    className="abt-copy"
                    onClick={() => copyText(value, "Email copied")}
                    aria-label={`Copy ${label.toLowerCase()}`}
                  >
                    <FaCopy aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="abt-row" data-reveal style={{ "--reveal-delay": "140ms" }}>
            <ul className="abt-stats">
              {stats.map((s) => (
                <li key={s.label} className={`abt-stat tone-${s.tone}`}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
            <WorkflowLoop />
          </div>

          <figure className="abt-quote" data-reveal style={{ "--reveal-delay": "200ms" }}>
            <FaQuoteLeft aria-hidden="true" />
            <blockquote>{profile.quote}</blockquote>
            <figcaption>— {profile.name}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default About;
