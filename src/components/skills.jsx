import React from "react";
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

const skills = [
  { icon: <FaJava size={50} />, label: "Java" },
  { icon: <FaJs size={50} />, label: "JavaScript" },
  { icon: <FaPhp size={50} />, label: "PHP" },
  { icon: <FaPython size={50} />, label: "Python" },
  { icon: <FaHtml5 size={50} />, label: "HTML5" },
  { icon: <FaCss3Alt size={50} />, label: "CSS3" },
  { icon: <FaLaravel size={50} />, label: "Laravel" },
  { icon: <FaReact size={50} />, label: "React" },
  { icon: <FaBootstrap size={50} />, label: "Bootstrap" },
  { icon: <FaPalette size={50} />, label: "Tailwind CSS" },
  { icon: <FaDatabase size={50} />, label: "MySQL" },
  // { icon: <FaDocker size={50} />, label: "Docker" },
  { icon: <FaGithub size={50} />, label: "GitHub Actions" },
  { icon: <FaLinux size={50} />, label: "Linux" },
  // { icon: <FaAws size={50} />, label: "AWS" },
  // { icon: <FaCogs size={50} />, label: "CI/CD" },
  { icon: <FaGitAlt size={50} />, label: "Git" },
  { icon: <FaCode size={50} />, label: "VS Code" },
  { icon: <FaFigma size={50} />, label: "Figma" },
  { icon: <FaCloud size={50} />, label: "Netlify" },
  { icon: <FaBug size={50} />, label: "Manual Testing" },
];

const Skills = () => {
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-white fw-bold mb-3">Professional Skill Set & Tools</h2>x
        </div>

        <div className="row g-4 justify-content-center">
          {skills.map((skill) => (
            <div key={skill.label} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="skill-card text-center p-4 h-100">
                <div className="skill-icon mb-3">
                  {skill.icon}
                </div>
                <h6 className="skill-label text-white mb-0">
                  {skill.label}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-card {
          background: linear-gradient(145deg, #1a1a1a, #2d2d2d );
          border: 1px solid #333;
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
          border-color: #555;
        }

        .skill-icon {
          color: #ffffff;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .skill-card:hover .skill-icon {
          color: #64ffda;
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
          color: #64ffda !important;
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