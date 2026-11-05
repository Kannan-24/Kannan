import { processSteps, sectionNumber } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import "./Process.css";

const Process = () => (
  <section id="process" className="section proc" aria-labelledby="process-title">
    <div className="container">
      <SectionHeading
        id="process-title"
        index={sectionNumber("process")}
        kicker="process"
        title="How I"
        accent="work."
        lead="A simple, transparent process, so you always know what’s happening and what comes next."
      />

      <ol className="proc-steps">
        {processSteps.map((step, i) => (
          <li
            key={step.title}
            className="proc-step"
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` }}
          >
            <span className="proc-node" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="proc-body">
              <h3 className="proc-title">{step.title}</h3>
              <p className="proc-text">{step.text}</p>
              <p className="proc-output prompt">
                <b>→</b> {step.output}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
