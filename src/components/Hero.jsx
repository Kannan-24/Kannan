import { useRef } from "react";
import { FaArrowDown, FaArrowRight, FaPaperPlane } from "react-icons/fa";
import { marquee, mailtoLink, profile } from "../data/portfolio";
import useScramble from "../hooks/useScramble";
import useTypewriter from "../hooks/useTypewriter";
import { prefersReducedMotion } from "../lib/utils";
import WorkspaceImg from "../assets/developer-workspace.webp";
import "./Hero.css";

const Hero = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const frame = useRef(0);
  const name = useScramble(profile.name);
  const role = useTypewriter(profile.roles);

  // Spotlight + tilt are written straight to CSS variables — no re-renders.
  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse" || prefersReducedMotion()) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      const visual = visualRef.current;
      if (!section || !visual) return;
      const s = section.getBoundingClientRect();
      section.style.setProperty("--mx", `${clientX - s.left}px`);
      section.style.setProperty("--my", `${clientY - s.top}px`);
      const v = visual.getBoundingClientRect();
      const x = (clientX - v.left) / v.width - 0.5;
      const y = (clientY - v.top) / v.height - 0.5;
      visual.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
      visual.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    });
  };

  const onPointerLeave = () => {
    visualRef.current?.style.setProperty("--rx", "0deg");
    visualRef.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <section
      id="home"
      className="hero"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-labelledby="hero-title"
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-dots" />
        <div className="hero-spotlight" />
        <div className="hero-aurora hero-aurora-a" />
        <div className="hero-aurora hero-aurora-b" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.showAvailability && (
            <a href="#contact" className="hero-status">
              <span className="live-dot" aria-hidden="true" />
              <span>{profile.availability}</span>
              <FaArrowRight aria-hidden="true" />
            </a>
          )}

          <p className="hero-whoami prompt">
            <b>kannan@portfolio</b>:~$ whoami
          </p>

          <h1 className="hero-title" id="hero-title" aria-label={profile.name}>
            <span aria-hidden="true">{name || " "}</span>
          </h1>

          <p className="hero-role" aria-label={profile.roles.join(", ")}>
            <span className="hero-role-arrow" aria-hidden="true">&gt;</span>
            <span aria-hidden="true">{role}</span>
            <span className="caret" aria-hidden="true">▍</span>
          </p>

          <p className="hero-desc">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a href={mailtoLink} className="btn btn-primary">
              <FaPaperPlane aria-hidden="true" />
              Let&apos;s connect
            </a>
            <a href="#projects" className="btn btn-ghost">
              View my work
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>@ {profile.company}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Python · React · OCR</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-visual-tilt">
            <img
              src={WorkspaceImg}
              alt="Illustration of a developer coding at a desk with multiple monitors"
              className="hero-image"
              width="1100"
              height="917"
            />
            <span className="hero-badge hero-badge-a">
              <span className="live-dot" aria-hidden="true" /> build passing
            </span>
            <span className="hero-badge hero-badge-b">
              <b>&lt;/&gt;</b> claims.py
            </span>
            <span className="hero-badge hero-badge-c">
              AWS Textract <b>+</b> OCR
            </span>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
        <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
