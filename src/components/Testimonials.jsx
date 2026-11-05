import { FaQuoteLeft } from "react-icons/fa";
import { sectionNumber } from "../data/portfolio";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./ui/SectionHeading";
import "./Testimonials.css";

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

// Renders nothing when there are no testimonials (see src/data/testimonials.js).
const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section tst" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          index={sectionNumber("testimonials")}
          kicker="testimonials"
          title="What clients"
          accent="say."
        />

        <ul className="tst-grid">
          {testimonials.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              className={`tst-card ${t.placeholder ? "is-placeholder" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` }}
            >
              <figure>
                <div className="tst-top">
                  <FaQuoteLeft className="tst-mark" aria-hidden="true" />
                  {t.project && <span className="chip tst-project">{t.project}</span>}
                </div>
                <blockquote className="tst-quote">{t.quote}</blockquote>
                <figcaption className="tst-person">
                  {t.avatar ? (
                    <img
                      className="tst-avatar"
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      width="44"
                      height="44"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="tst-avatar" aria-hidden="true">{initials(t.name)}</span>
                  )}
                  <span className="tst-who">
                    <strong>{t.name}</strong>
                    {t.role && <span>{t.role}</span>}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
