import React from "react";

const CardComponent = ({ title, text, tags, githubLink, externalLink }) => {
  return (
    <div
      className="card custom-card text-white mb-3 bg-dark"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.querySelector(".card-title").style.color = "#17a2b8";
        e.currentTarget.querySelector(".bi-folder").style.color = "#17a2b8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1.0)";
        e.currentTarget.querySelector(".card-title").style.color = "white";
        e.currentTarget.querySelector(".bi-folder").style.color = "white";
      }}
    >
      <div
        className="card-header d-flex justify-content-between align-items-center border-0"
        id="projects"
      >
        <i className="bi bi-folder folder-icon"></i>
        <div>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-2 icon-hover"
            >
              <i className="bi bi-github link-icon"></i>
            </a>
          )}
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white icon-hover"
            >
              <i className="bi bi-box-arrow-up-right link-icon"></i>
            </a>
          )}
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <div className="technology-tags mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const cardData = [
    {
      title: "Arjun Vision Solutions",
      text: "Designed and developed the Arjun Vision Solutions website (www.arjunvision.com) to showcase the institute services in the field of Education Fields.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      githubLink: "", // Add GitHub URL if available
      externalLink: "http://www.arjunvision.com",
    },
    {
      title: "Invoice Management System",
      text: "Simplify your billing process with an all-in-one tool to create, manage, and track invoices. Automate payment reminders, generate reports, and ensure smooth financial management for your business.",
      tags: ["PHP", "Bootstrap", "JS", "MySQL"],
      githubLink: "https://github.com/Kannan-24/Invoice-Management-System", // Add GitHub URL if available
      externalLink: "", // Add external link if available
    },
    {
      title: "Higher Energizer",
      text: "A modern web platform to showcase product details, customer testimonials, and innovative solutions with an integrated admin panel for seamless content management.",
      tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
      githubLink: "https://github.com/Kannan-24/Higher-Energizer", // Add GitHub URL if available
      externalLink: "https://higherenergizer.com", // Add external link if available
    },

    {
      title: "Bulk Email Sender",
      text: "A tool to send bulk emails efficiently. Manage email lists, create templates, and track email delivery and open rates.",
      tags: ["PHP", "Bootstrap", "JavaScript"],
      githubLink: "", // Add GitHub URL if available
      externalLink: "", // Add external link if available
    },
  ];

  return (
    <div className="card-list-container">
      <h2 className="text-center text-white my-4">Projects</h2>
      <div className="d-flex flex-wrap justify-content-center">
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
    </div>
  );
};

export default Project;
