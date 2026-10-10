import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPaperPlane, FaFileAlt } from "react-icons/fa";
import WorkspaceImg from "../assets/developer-workspace.png";

const roles = [
  "SOFTWARE DEVELOPER",
  "PYTHON & FULL STACK DEVELOPER"
];

const HeroSection = () => {
  const { colors } = useTheme();
  const accentColor = colors?.accent || "#3eedb7";
  const textColor = colors?.text || "#ffffff";

  // Typewriter state
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  // 3D Parallax Tilt state
  const visualRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 12), y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (typing && charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 85);
      return () => clearTimeout(timeout);
    } else if (charIndex === roles[roleIndex].length) {
      setTyping(false);
      const pauseTimeout = setTimeout(() => {
        setTyping(true);
        setCharIndex(0);
        setCurrentText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [typing, charIndex, roleIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .hero-section {
          min-height: 100vh;
          width: 100%;
          // background: #070c12;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding: 10px 24px 60px 24px;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box;
        }

        .hero-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* --- LEFT SIDE: BIO --- */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .eyebrow-text {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin: 0 0 12px 0;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.85rem; }
        }

        .hero-role-wrapper {
          display: flex;
          align-items: center;
          font-family: 'Fira Code', monospace;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #64748b;
          min-height: 28px;
          margin-bottom: 24px;
        }

        .typing-cursor {
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc-card {
          position: relative;
          padding-left: 18px;
          border-left: 3px solid;
          margin-bottom: 36px;
          max-width: 520px;
        }

        .hero-description {
          font-size: 1.02rem;
          color: #94a3b8;
          line-height: 1.75;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-connect {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          color: #070c12;
          box-shadow: 0 0 25px rgba(62, 237, 183, 0.35);
          transition: all 0.25s ease;
          border: none;
        }

        .btn-connect:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(62, 237, 183, 0.55);
          filter: brightness(1.1);
        }

        .btn-resume {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          color: #f1f5f9;
          transition: all 0.25s ease;
        }

        .btn-resume:hover {
          border-color: #3eedb7;
          color: #3eedb7;
          background: rgba(62, 237, 183, 0.08);
          transform: translateY(-2px);
        }

        /* --- ANIMATED 3D WORKSPACE STYLES --- */
        .hero-visual-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        /* Pulsing ambient neon aura behind the monitors */
        .neon-aura {
          position: absolute;
          width: 75%;
          height: 70%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(62, 237, 183, 0.22) 0%,
            rgba(56, 189, 248, 0.16) 40%,
            transparent 75%
          );
          filter: blur(40px);
          animation: pulseAura 4s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes pulseAura {
          0% {
            opacity: 0.6;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        /* Floating + 3D Tilt container */
        .floating-art-container {
          width: 100%;
          max-width: 600px;
          display: flex;
          justify-content: center;
          animation: floatLevitate 5s ease-in-out infinite alternate;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
        }

        @keyframes floatLevitate {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.4deg);
          }
          100% {
            transform: translateY(4px) rotate(-0.4deg);
          }
        }

        .workspace-illustration {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85));
          display: block;
          user-select: none;
          pointer-events: none;
        }

        /* --- SCROLL INDICATOR --- */
        .scroll-down-container {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .mouse-icon {
          width: 20px;
          height: 32px;
          border: 2px solid #64748b;
          border-radius: 12px;
          position: relative;
        }

        .mouse-wheel {
          width: 3px;
          height: 6px;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: wheelRoll 1.6s infinite ease-in-out;
        }

        @keyframes wheelRoll {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }

        .scroll-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: #64748b;
          text-transform: uppercase;
        }
      `}</style>

      <section className="hero-section" id="home">
        <div className="hero-container">
          
          {/* Left Column: Bio */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" style={{ backgroundColor: accentColor, color: accentColor }} />
              <span className="eyebrow-text">HELLO, I'M</span>
            </div>

            <h1 className="hero-title" style={{ color: textColor }}>
              Kannan M
            </h1>

            <div className="hero-role-wrapper">
              <span>{currentText}</span>
              <span className="typing-cursor" style={{ color: accentColor }}>|</span>
            </div>

            <div className="hero-desc-card" style={{ borderLeftColor: accentColor }}>
              <p className="hero-description">
                I build scalable web applications, automate complex processes,
                and turn ideas into real-world solutions using modern technologies.
              </p>
            </div>

            <div className="hero-actions">
  <a
    href={`mailto:kannanmuruganandham1@gmail.com?subject=${encodeURIComponent(
      "Project Inquiry / Collaboration"
    )}&body=${encodeURIComponent(
      "Hi Kannan,\n\nI came across your portfolio and would like to connect regarding a project / opportunity.\n\nBest regards,\n"
    )}`}
    className="btn-connect"
    style={{ backgroundColor: accentColor }}
  >
    <FaPaperPlane style={{ fontSize: "0.9rem" }} />
    <span>Let's Connect</span>
  </a>

  {/* <a href="#resume" className="btn-resume">
    <FaFileAlt style={{ fontSize: "0.9rem" }} />
    <span>View Resume</span>
  </a> */}
</div>
              
          </div>

          {/* Right Column: Animated 3D Levitation & Mouse Tilt */}
          <div
            className="hero-visual-wrapper"
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Pulsing neon cyan/teal ambient light */}
            <div className="neon-aura" />

            <div
              className="floating-art-container"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <img
                src={WorkspaceImg}
                alt="Developer workspace"
                className="workspace-illustration"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;