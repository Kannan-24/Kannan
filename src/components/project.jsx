import React from "react";
import { useTheme } from "../context/ThemeContext";

const CardComponent = ({ title, text, tags, githubLink, externalLink, colors, theme }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="project-card h-100" style={{ 
        backgroundColor: colors.cardBg,
        borderColor: colors.border,
        color: colors.text
      }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <i className="bi bi-folder folder-icon" style={{ color: colors.text }}></i>
          <div className="project-links">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link me-3"
                title="View Code"
                style={{ color: colors.text }}
              >
                <i className="bi bi-github"></i>
              </a>
            )}
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="Live Demo"
                style={{ color: colors.text }}
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="project-title mb-3" style={{ color: colors.text }}>{title}</h5>
          <p className="project-description flex-grow-1 mb-4" style={{ color: colors.textSecondary }}>{text}</p>
          <div className="technology-tags mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="tech-tag"
                style={{ 
                  backgroundColor: `${colors.accent}33`,
                  color: colors.accent,
                  borderColor: `${colors.accent}4d`
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const { theme, colors } = useTheme();
  const cardData = [
    {
      title: "Automated Transport Management System",
      text: "Developed a web-based solution to streamline campus transportation. Integrated live tracking, attendance monitoring, and automated reporting to reduce errors and improve operational efficiency.",
      tags: ["Laravel", "Tailwind CSS", "MySQL"],
      githubLink: "https://github.com/Kannan-24/atms",
      externalLink: "", // Add if hosted
    },
    {
      title: "Invoice Management System",
      text: "Built a comprehensive tool to create, manage, and track GST-compliant invoices. Automated payment reminders and financial reporting to enhance billing accuracy and efficiency.",
      tags: ["Laravel", "Tailwind CSS", "MySQL"],
      githubLink: "https://github.com/Kannan-24/ims",
      externalLink: "", // Add if hosted
    },
    {
      title: "Spotify Clone (Music Streaming UI)",
      text: "Designed and implemented a responsive Spotify-inspired UI using React.js. Built dynamic pages for playlists and music categories with reusable components and modern design practices.",
      tags: ["React", "HTML", "CSS"],
      githubLink: "https://github.com/Kannan-24/music-player",
      externalLink: "https://kannanmp.netlify.app",
    },
  ];

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold mb-3" style={{ color: colors.text }}>Projects</h2>
          <p className="section-subtitle" style={{ color: colors.textSecondary }}>
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              text={card.text}
              tags={card.tags}
              githubLink={card.githubLink}
              externalLink={card.externalLink}
              colors={colors}
              theme={theme}
            />
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/Kannan-24"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <i className="bi bi-github me-2"></i>
            See More Projects on GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background: transparent;
        }

        .project-card {
          background: ${colors.cardBg};
          border: 1px solid ${colors.border};
          border-radius: 15px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          color: ${colors.text};
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, ${colors.accent}1a, ${colors.accent}0d);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.accent};
          box-shadow: 0 20px 40px ${theme === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"};
        }

        .card-header {
          background: transparent;
          border: none;
          padding: 1.5rem 1.5rem 0.5rem;
          position: relative;
          z-index: 1;
        }

        .folder-icon {
          font-size: 1.5rem;
          color: ${colors.text};
          transition: all 0.3s ease;
        }

        .project-card:hover .folder-icon {
          color: ${colors.accent};
          transform: scale(1.1);
        }

        .project-links {
          display: flex;
          align-items: center;
        }

        .project-link {
          color: ${colors.text};
          font-size: 1.2rem;
          transition: all 0.3s ease;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-link:hover {
          color: ${colors.accent};
          background: ${colors.accent}1a;
          transform: scale(1.1);
        }

        .card-body {
          padding: 0.5rem 1.5rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .project-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.25rem;
          transition: color 0.3s ease;
          line-height: 1.3;
        }

        .project-card:hover .project-title {
          color: #17a2b8;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .technology-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(23, 162, 184, 0.2);
          color: #64ffda;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(23, 162, 184, 0.3);
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: rgba(23, 162, 184, 0.3);
          border-color: rgba(23, 162, 184, 0.5);
          transform: translateY(-2px);
        }

        .github-btn {
          background: ${colors.accent};
          color: ${theme === "dark" ? "#0a192f" : "#ffffff"};
          padding: 0.8rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 15px ${theme === "dark" ? "rgba(100, 255, 218, 0.3)" : "rgba(30, 58, 138, 0.3)"};
        }

        .github-btn:hover {
          background: transparent;
          border-color: ${colors.accent};
          color: ${colors.accent};
          transform: translateY(-2px);
          box-shadow: 0 8px 25px ${theme === "dark" ? "rgba(100, 255, 218, 0.4)" : "rgba(30, 58, 138, 0.4)"};
        }

        .section-title {
          font-size: 2.5rem;
          color: ${colors.text};
        }
        }

        .section-subtitle {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .project-card {
            margin-bottom: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-description {
            font-size: 0.9rem;
          }
          
          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
        }

        @media (max-width: 576px) {
          .card-header,
          .card-body {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .github-btn {
            padding: 0.7rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;