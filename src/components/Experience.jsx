import { FaBriefcase, FaCodeBranch, FaMapMarkerAlt } from "react-icons/fa";
import { experiences, profile } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Experience.css";

// Stable pseudo commit hash so each entry looks like a git log line.
const shortHash = (text) => {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

const statusLines = [
  ["whoami", profile.name],
  ["role", profile.role],
  ["location", profile.location],
  ["focus", "Build · Learn · Improve"],
  ["goal", "Solve real problems"],
];

const Experience = () => (
  <section id="experience" className="section exp" aria-labelledby="experience-title">
    <div className="section-grid-bg" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        id="experience-title"
        index="02"
        kicker="experience"
        title="Where I've"
        accent="shipped code."
        lead="Building real-world solutions through code, automation, and continuous learning."
      />

      <div className="exp-layout">
        <aside className="exp-side" data-reveal>
          <Window title="~/status" meta="zsh" bodyClassName="exp-status">
            {statusLines.map(([cmd, value]) => (
              <div className="exp-status-line" key={cmd}>
                <span className="prompt">
                  <b>&gt;</b> {cmd}
                </span>
                <strong>{value}</strong>
              </div>
            ))}
            <div className="exp-equation" aria-label="Ideas plus code plus impact equals progress">
              <span>Ideas</span>
              <b>+</b>
              <span>Code</span>
              <b>+</b>
              <span>Impact</span>
              <b>=</b>
              <em>Progress</em>
            </div>
          </Window>
        </aside>

        <div className="exp-main" data-reveal style={{ "--reveal-delay": "100ms" }}>
          <Window title="~/experience" meta="git log --graph" bodyClassName="exp-log">
            {experiences.map((job) => (
              <article className={`exp-entry ${job.current ? "is-current" : ""}`} key={job.company}>
                <div className="exp-commit">
                  <span className="exp-node" aria-hidden="true" />
                  <code className="exp-hash">{shortHash(job.company + job.role)}</code>
                  {job.current && (
                    <span className="exp-head">
                      <FaCodeBranch aria-hidden="true" /> HEAD → main
                    </span>
                  )}
                  <span className="exp-period">{job.period}</span>
                </div>

                <div className="exp-card">
                  <header className="exp-card-head">
                    <div>
                      <p className="exp-company">{job.company}</p>
                      <h3 className="exp-role">{job.role}</h3>
                    </div>
                    <ul className="exp-meta">
                      <li><FaBriefcase aria-hidden="true" /> {job.type}</li>
                      <li><FaMapMarkerAlt aria-hidden="true" /> {job.location}</li>
                    </ul>
                  </header>

                  <p className="exp-path">{job.path}</p>
                  <p className="exp-summary">{job.summary}</p>

                  <ul className="exp-contribs">
                    {job.contributions.map((c, i) => (
                      <li key={c.title}>
                        <span className="exp-branch" aria-hidden="true">
                          {i === job.contributions.length - 1 ? "└─" : "├─"}
                        </span>
                        <p>
                          <strong>{c.title}</strong>
                          {c.text}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech">
                    <span className="prompt">
                      <b>$</b> cat tech-stack.json
                    </span>
                    <div className="exp-tech-list">
                      {job.tech.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Window>

          <div className="exp-cmd window">
            <span className="prompt">
              <b>kannan@portfolio</b>:~$
            </span>
            <span className="exp-cmd-text">echo &quot;Still learning... still building...&quot;</span>
            <span className="caret" aria-hidden="true">▍</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
