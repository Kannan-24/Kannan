import { FaArrowRight } from "react-icons/fa";
import { sectionNumber, services } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import "./Services.css";

const Services = () => (
  <section id="services" className="section svc" aria-labelledby="services-title">
    <div className="container">
      <SectionHeading
        id="services-title"
        index={sectionNumber("services")}
        kicker="services"
        title="How I can"
        accent="help."
        lead="Pick what fits, or tell me the problem and I’ll suggest the simplest thing that solves it."
      />

      <ul className="svc-grid">
        {services.map(({ key, icon: Icon, tone, title, description, deliverables, stack }, i) => (
          <li
            key={key}
            className={`svc-card tone-${tone}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` }}
          >
            <span className="svc-icon">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="svc-title">{title}</h3>
            <p className="svc-desc">{description}</p>

            <p className="svc-label">## example deliverables</p>
            <ul className="svc-list">
              {deliverables.map((item, j) => (
                <li key={item}>
                  <span aria-hidden="true">{j === deliverables.length - 1 ? "└─" : "├─"}</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="svc-stack prompt">
              <b>$</b> stack: <span>{stack}</span>
            </p>
          </li>
        ))}
      </ul>

      <a className="svc-cta window" href="#contact" data-reveal>
        <span className="prompt">
          <b>?</b> not sure which one you need
        </span>
        <span className="svc-cta-text">
          Tell me about your project <FaArrowRight aria-hidden="true" />
        </span>
      </a>
    </div>
  </section>
);

export default Services;
