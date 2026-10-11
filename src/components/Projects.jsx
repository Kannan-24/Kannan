import { useMemo, useState } from "react";
import { FaArrowRight, FaChevronDown, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { profile, projectCategories, projects } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Projects.css";

const ProjectRow = ({ project, index, open, onToggle }) => {
  const bodyId = `prj-body-${index}`;
  const last = (project.highlights?.length ?? 0) - 1;

  return (
    <article className={`prj-row ${open ? "is-open" : ""}`}>
      <h3 className="prj-row-heading">
        <button
          type="button"
          className="prj-row-head"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={bodyId}
        >
          <span className="prj-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="prj-titles">
            <span className="prj-title">{project.title}</span>
            <span className="prj-subtitle">{project.subtitle}</span>
          </span>
          <span className="prj-cat">{project.category}</span>
          <FaChevronDown className="prj-chevron" aria-hidden="true" />
        </button>
      </h3>

      <div className="prj-collapse" id={bodyId} {...(!open && { inert: "" })}>
        <div className="prj-collapse-inner">
          <div className="prj-body">
            <p className="prompt prj-cat-line">
              <b>kannan@portfolio</b>:~$ cat <span>{project.fileName}</span>
            </p>

            <p className="prj-desc">{project.text}</p>

            {project.highlights?.length > 0 && (
              <div className="prj-block">
                <p className="prj-label">## key contributions</p>
                <ul className="prj-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={item}>
                      <span aria-hidden="true">{i === last ? "└─" : "├─"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.workflow && (
              <div className="prj-block">
                <p className="prj-label">## pipeline</p>
                <ol className="prj-pipeline" style={{ "--steps": project.workflow.length }}>
                  {project.workflow.map((step, i) => (
                    <li key={step} style={{ "--i": i }}>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="prj-block prj-foot">
              <div className="prj-tags">
                {project.tags.map((tag) => (
                  <span className="chip chip-accent" key={tag}>{tag}</span>
                ))}
              </div>
              {(project.githubLink || project.externalLink) && (
                <div className="prj-links">
                  {project.githubLink && (
                    <a className="btn btn-ghost" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub aria-hidden="true" /> Source
                    </a>
                  )}
                  {project.externalLink && (
                    <a className="btn btn-primary" href={project.externalLink} target="_blank" rel="noopener noreferrer">
                      Live demo <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [openTitle, setOpenTitle] = useState(projects[0].title);

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
          index="04"
          kicker="projects"
          title="Selected"
          accent="work."
          lead="Enterprise applications, document intelligence, healthcare platforms, and full-stack systems built through real-world development."
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

        <div data-reveal style={{ "--reveal-delay": "80ms" }}>
          <Window
            title="~/projects/projects.log"
            meta={`${String(visible.length).padStart(2, "0")} entries`}
            className="prj-window"
          >
            <div className="prj-list">
              {visible.map((project, i) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={i}
                  open={openTitle === project.title}
                  onToggle={() => setOpenTitle((t) => (t === project.title ? null : project.title))}
                />
              ))}
            </div>
            <div className="prj-log-foot">
              <span>
                <span className="live-dot" aria-hidden="true" /> process complete
              </span>
              <span>
                {visible.length} project{visible.length !== 1 ? "s" : ""} loaded
              </span>
            </div>
          </Window>
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
