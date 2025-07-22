import React from "react";

const CardComponent = ({ title, text, tags, githubLink, externalLink }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="project-card h-100">
        <div className="card-header d-flex justify-content-between align-items-center">
          <i className="bi bi-folder folder-icon"></i>
          <div className="project-links">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link me-3"
                title="View Code"
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
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="project-title mb-3">{title}</h5>
          <p className="project-description flex-grow-1 mb-4">{text}</p>
          <div className="technology-tags mt-auto">
            {tags.map((tag, index) => (
              <span key={index} className="tech-tag">
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
          <h2 className="section-title text-white fw-bold mb-3">Projects</h2>
          <p className="section-subtitle text-light opacity-75">
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          color: white;
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
          background: linear-gradient(135deg, rgba(23, 162, 184, 0.1), rgba(100, 255, 218, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(23, 162, 184, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .project-card:hover .folder-icon {
          color: #17a2b8;
          transform: scale(1.1);
        }

        .project-links {
          display: flex;
          align-items: center;
        }

        .project-link {
          color: #ffffff;
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
          color: #17a2b8;
          background: rgba(23, 162, 184, 0.1);
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
          background: linear-gradient(45deg, #17a2b8, #20c997);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
        }

        .github-btn:hover {
          background: transparent;
          border-color: #17a2b8;
          color: #17a2b8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(23, 162, 184, 0.4);
        }

        .section-title {
          font-size: 2.5rem;
          background: linear-gradient(45deg, #64ffda, #17a2b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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