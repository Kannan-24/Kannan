import React from "react";
import { useTheme } from "../context/ThemeContext";
import { usePortfolioContent } from "../context/PortfolioContentContext";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaJs,
  FaLaravel,
  // FaDocker,
  FaGithub,
  FaLinux,
  // FaAws,
  FaCode,
  FaCogs,
  FaCloud,
  FaPalette,
  FaBug,
} from "react-icons/fa";

const iconBySkill = {
  java: FaJava,
  javascript: FaJs,
  php: FaPhp,
  python: FaPython,
  html5: FaHtml5,
  css3: FaCss3Alt,
  laravel: FaLaravel,
  react: FaReact,
  bootstrap: FaBootstrap,
  "tailwind css": FaPalette,
  mysql: FaDatabase,
  "github actions": FaGithub,
  linux: FaLinux,
  git: FaGitAlt,
  "vs code": FaCode,
  figma: FaFigma,
  netlify: FaCloud,
  "manual testing": FaBug,
  "ci/cd": FaCogs,
};

const Skills = () => {
  const { theme, colors } = useTheme();
  const { content } = usePortfolioContent();
  const skills = content.skills;
  
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold mb-3" style={{ color: colors.text }}>Professional Skill Set & Tools</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => {
            const resolvedKey = (skill.iconKey || skill.label).toLowerCase();
            const Icon = iconBySkill[resolvedKey] || FaCode;
            return (
            <div key={`${skill.label}-${index}`} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="skill-card text-center p-4 h-100">
                <div className="skill-icon mb-3">
                  <Icon size={50} />
                </div>
                <h6 className="skill-label mb-0" style={{ color: colors.text }}>
                  {skill.label}
                </h6>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .skill-card {
          background: ${theme === "dark" ? "linear-gradient(145deg, #1a1a1a, #2d2d2d)" : "linear-gradient(145deg, #ffffff, #f0f0f0)"};
          border: 1px solid ${colors.border};
          border-radius: 15px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 300% 300%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: gradientShift 3s ease infinite;
        }

        .skill-card:hover::before {
          opacity: 0.1;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: ${colors.accent};
        }

        .skill-icon {
          color: ${colors.text};
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .skill-card:hover .skill-icon {
          color: ${colors.accent};
          transform: scale(1.15);
          filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.3));
        }

        .skill-label {
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .skill-card:hover .skill-label {
          color: ${colors.accent} !important;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .skill-icon svg {
            width: 40px;
            height: 40px;
          }
          
          .skill-card {
            padding: 1.5rem 1rem !important;
          }
          
          .skill-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .skill-icon svg {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;