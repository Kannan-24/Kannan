import { useState } from "react";
import { FaChevronDown, FaFolder, FaFolderOpen, FaRegFileCode } from "react-icons/fa";
import { skillCategories } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import "./Skills.css";

const TOTAL = skillCategories.reduce((n, c) => n + c.skills.length, 0);

const Skills = () => {
  const [activeKey, setActiveKey] = useState(skillCategories[0].key);
  const active = skillCategories.find((c) => c.key === activeKey);
  const fileName = `${active.key}.json`;

  const onTabKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const i = skillCategories.findIndex((c) => c.key === activeKey);
    const next = skillCategories[(i + keys[e.key] + skillCategories.length) % skillCategories.length];
    setActiveKey(next.key);
    document.getElementById(`sk-tab-${next.key}`)?.focus();
  };

  // Build JSON lines so every line gets a real line number.
  const lines = [
    { kind: "brace", text: "{" },
    { kind: "prop", key: "category", value: `"${active.label}"`, comma: true },
    { kind: "prop", key: "count", value: String(active.skills.length), num: true, comma: true },
    { kind: "open", key: "technologies" },
    ...active.skills.map((s, i) => ({ kind: "item", skill: s, comma: i < active.skills.length - 1 })),
    { kind: "close", comma: true },
    { kind: "prop", key: "status", value: '"production-ready"' },
    { kind: "brace", text: "}" },
  ];

  return (
    <section id="skills" className="section sk" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="03"
          kicker="skills"
          title="My technical"
          accent="stack."
          lead="Tools and technologies I use to design, build, automate, and ship."
        />

        <div className="sk-ide window" data-reveal>
          <div className="window-bar sk-titlebar">
            <span className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sk-title">kannan-portfolio — {fileName}</span>
            <span className="sk-online">
              <span className="live-dot" aria-hidden="true" /> online
            </span>
          </div>

          <div className="sk-layout">
            <aside className="sk-explorer" aria-label="Skill categories">
              <p className="sk-explorer-head">Explorer</p>
              <p className="sk-root">
                <FaChevronDown aria-hidden="true" /> technical-stack
              </p>
              <div className="sk-folders" role="tablist" aria-orientation="vertical" onKeyDown={onTabKeyDown}>
                {skillCategories.map((c) => {
                  const selected = c.key === activeKey;
                  const Icon = selected ? FaFolderOpen : FaFolder;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      role="tab"
                      id={`sk-tab-${c.key}`}
                      aria-selected={selected}
                      tabIndex={selected ? 0 : -1}
                      aria-controls="sk-panel"
                      className={`sk-folder ${selected ? "is-active" : ""}`}
                      onClick={() => setActiveKey(c.key)}
                    >
                      <Icon className="sk-folder-icon" aria-hidden="true" />
                      <span className="sk-folder-name">{c.key}</span>
                      <span className="sk-folder-count">{c.skills.length}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="sk-editor" id="sk-panel" role="tabpanel" aria-labelledby={`sk-tab-${activeKey}`}>
              <div className="sk-tabs">
                <span className="sk-tab">
                  <FaRegFileCode aria-hidden="true" />
                  {fileName}
                </span>
              </div>
              <p className="sk-breadcrumb">
                technical-stack <span>›</span> {active.key} <span>›</span> <b>{active.label}</b>
              </p>

              <pre className="sk-code" key={activeKey} aria-label={`${active.label}: ${active.skills.map((s) => s.label).join(", ")}`}>
                {lines.map((line, i) => (
                  <span className="sk-line" key={i} style={{ "--d": `${i * 22}ms` }}>
                    <span className="sk-ln" aria-hidden="true">{i + 1}</span>
                    <span className="sk-src" aria-hidden="true">
                      {line.kind === "brace" && <span className="tk-brace">{line.text}</span>}
                      {line.kind === "prop" && (
                        <>
                          {"  "}
                          <span className="tk-key">&quot;{line.key}&quot;</span>
                          <span className="tk-punc">: </span>
                          <span className={line.num ? "tk-num" : "tk-str"}>{line.value}</span>
                          {line.comma && <span className="tk-punc">,</span>}
                        </>
                      )}
                      {line.kind === "open" && (
                        <>
                          {"  "}
                          <span className="tk-key">&quot;{line.key}&quot;</span>
                          <span className="tk-punc">: </span>
                          <span className="tk-brace">[</span>
                        </>
                      )}
                      {line.kind === "item" && (
                        <>
                          {"    "}
                          <span className="tk-str">&quot;{line.skill.label}&quot;</span>
                          {line.comma && <span className="tk-punc">,</span>}
                        </>
                      )}
                      {line.kind === "close" && (
                        <>
                          {"  "}
                          <span className="tk-brace">]</span>
                          {line.comma && <span className="tk-punc">,</span>}
                        </>
                      )}
                    </span>
                  </span>
                ))}
              </pre>

              <div className="sk-preview">
                <div className="sk-preview-head">
                  <div>
                    <span className="sk-preview-label">Active stack</span>
                    <h3>{active.label}</h3>
                  </div>
                  <span className="sk-preview-count">{active.skills.length}</span>
                </div>
                <ul className="sk-cards" key={activeKey}>
                  {active.skills.map(({ label, icon: Icon }, i) => (
                    <li className="sk-card" key={label} style={{ "--d": `${i * 40}ms` }}>
                      <Icon className="sk-card-icon" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sk-statusbar">
            <span>⎇ main</span>
            <span>{TOTAL} skills</span>
            <span>{skillCategories.length} categories</span>
            <span className="sk-statusbar-right">UTF-8 · JSON · ✓ ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
