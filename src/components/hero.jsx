import React, { useState, useEffect } from "react";
import Illustration from "../assets/illustration.svg";
import { useTheme } from "../context/ThemeContext";

const roles = ["Trainee Software Engineer", "Laravel Developer", "React Developer"];

const HeroSection = () => {
  const { theme, colors } = useTheme();
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing && charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (charIndex === roles[roleIndex].length) {
      setTyping(false);
      setTimeout(() => {
        setTyping(true);
        setCharIndex(0);
        setCurrentText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [typing, charIndex, roleIndex]);

  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text */}
          <div className="col-lg-7" style={{ color: colors.text }}>
            <h1 className="fw-bold mb-2">
              Hi, I'm{" "}
              <span className="text-accent" style={{ color: colors.accent }}>
                Kannan M
              </span>
            </h1>
            <h3 className="role-text mb-3" style={{ color: colors.text }}>
              {currentText || "\u00A0"}
            </h3>
            <p className="lead mb-4" style={{ color: colors.textSecondary }}>
              I'm a Trainee Software Engineer focusing on React development with
              API integrations, supported by experience in Laravel, AWS, Git,
              and DevOps tools. I apply my skills to real-world projects while
              continuously learning and improving.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#contact" className="btn btn-accent">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <img
              src={Illustration}
              alt="Hero illustration"
              className="img-fluid hero-image"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          height: 100vh;
          color: ${colors.text};
        }

        .text-accent {
          color: ${colors.accent};
        }

        .btn-accent {
          background-color: ${colors.accent};
          color: ${theme === "dark" ? "#0f0f0f" : "#fff"};
          font-weight: 600;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-accent:hover {
          background-color: ${theme === "dark" ? "#52e0c4" : "#2563eb"};
          transform: translateY(-2px);
          box-shadow: 0 8px 16px
            ${theme === "dark"
              ? "rgba(100, 255, 218, 0.3)"
              : "rgba(30, 58, 138, 0.3)"};
        }

        .btn-outline-accent {
          border: 2px solid ${colors.accent};
          color: ${colors.accent};
          background: transparent;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-outline-accent:hover {
          background-color: ${colors.accent};
          color: ${theme === "dark" ? "#0f0f0f" : "#fff"};
          transform: translateY(-2px);
        }

        .role-text {
          font-family: monospace;
          font-size: 1.2rem;
          color: ${colors.accent};
          white-space: nowrap;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 150px;
            margin-bottom: 100px;
          }

          .hero-image {
            max-height: 300px;
          }

          .btn {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
