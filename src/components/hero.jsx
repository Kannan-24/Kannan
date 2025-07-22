import React, { useState, useEffect } from "react";
import Illustration from "../assets/illustration.svg";

const roles = ["Full Stack Developer", "Manual Tester", "DevOps Explorer"];

const HeroSection = () => {
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
          <div className="col-lg-7 text-white">
            <h1 className="fw-bold mb-2">
              Hi, I'm <span className="text-accent">Kannan M</span>
            </h1>
            <h3 className="role-text mb-3">{currentText || "\u00A0"}</h3>
            <p className="lead opacity-75 mb-4">
              I'm a fresher passionate about full stack development. Currently exploring DevOps tools and cloud platforms, while applying manual testing skills in real-time projects.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#contact" className="btn btn-accent">
                Hire Me
              </a>
              <a
                href="/Kannan_Resume.pdf"
                className="btn btn-outline-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
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
          color: #fff;
        }

        .text-accent {
          color: #64ffda;
        }

        .btn-accent {
          background-color: #64ffda;
          color: #0f0f0f;
          font-weight: 600;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-accent:hover {
          background-color: #52e0c4;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(100, 255, 218, 0.3);
        }

        .btn-outline-accent {
          border: 2px solid #64ffda;
          color: #64ffda;
          background: transparent;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-outline-accent:hover {
          background-color: #64ffda;
          color: #0f0f0f;
          transform: translateY(-2px);
        }

        .role-text {
          font-family: monospace;
          font-size: 1.2rem;
          color: #64ffda;
          white-space: nowrap;
          overflow: hidden;
        }

        @media (max-width: 768px) {
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
