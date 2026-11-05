import { useMemo, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { profile, projectCategories, projects, sectionNumber } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import "./Projects.css";

const CASE_ROWS = [
  ["problem", "Problem"],
  ["solution", "Solution"],
  ["result", "Result"],
];

const ProjectCard = ({ project }) => {
  const { title, fileName, category, workProject, workflow, tags, liveLink, githubLink } = project;

  return (
    <article className="prj-card window">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="window-title">{fileName}</span>
        <span className="window-meta">{category}</span>
      </div>

      <div className="prj-card-body">
        <h3 className="prj-title">{title}</h3>
        {workProject && (
          <p className="prj-note">
            <FaLock aria-hidden="true" /> Work project: details generalized, no client data or code shown
          </p>
        )}

        <dl className="prj-case">
          {CASE_ROWS.map(([key, label]) => (
            <div className={`prj-case-row is-${key}`} key={key}>
              <dt>{label}</dt>
              <dd>{project[key]}</dd>
            </div>
          ))}
        </dl>

        {workflow && (
          <ol className="prj-pipeline" style={{ "--steps": workflow.length }} aria-label="Pipeline">
            {workflow.map((step, i) => (
              <li key={step} style={{ "--i": i }}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        )}

        <ul className="prj-tags" aria-label="Tech stack">
          {tags.map((tag) => (
            <li className="chip chip-accent" key={tag}>{tag}</li>
          ))}
        </ul>

        {(liveLink || githubLink) && (
          <div className="prj-links">
            {liveLink && (
              <a className="btn btn-primary" href={liveLink} target="_blank" rel="noopener noreferrer">
                Live demo <FaExternalLinkAlt aria-hidden="true" />
                <span className="sr-only">: {title} (opens in a new tab)</span>
              </a>
            )}
            {githubLink && (
              <a className="btn btn-ghost" href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
                <span className="sr-only">: {title} source code (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectCategories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length])
      ),
    []
  );

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section prj" aria-labelledby="projects-title">
      <div className="section-grid-bg" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="projects-title"
          index={sectionNumber("projects")}
          kicker="projects"
          title="Selected"
          accent="work."
          lead="Real problems, what I built, and the result. Work projects are described in general terms, with no client data or internal code."
        />

        <div className="prj-filters" role="group" aria-label="Filter projects by category" data-reveal>
          <span className="prompt prj-filter-prompt">
            <b>$</b> ls projects/ --filter
          </span>
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={`prj-filter ${filter === c ? "is-active" : ""}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
              <span>{counts[c]}</span>
            </button>
          ))}
        </div>

        <div className="prj-grid" data-reveal style={{ "--reveal-delay": "80ms" }}>
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <a className="prj-github window" href={profile.github} target="_blank" rel="noopener noreferrer" data-reveal>
          <span className="prompt">
            <b>$</b> git remote -v
          </span>
          <span className="prj-github-origin">
            <FaGithub aria-hidden="true" /> origin → github.com/{profile.githubHandle}
          </span>
          <span className="prj-github-cta">
            Explore all repositories <FaArrowRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
