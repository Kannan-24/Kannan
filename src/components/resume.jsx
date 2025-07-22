import React from "react";

const Resume = () => {
  const resumePath = "/Kannan_resume.pdf"; // Updated path for Netlify

  return (
    <div
      id="resume"
      className="container my-5"
      style={{
        padding: "40px",
        maxWidth: "800px",
      }}
    >
      <h2
        className="text-center text-white mb-4"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "700",
          fontSize: "32px",
          color: "#f0f0f0",
        }}
      >
        My Resume
      </h2>

      <div className="text-center mb-4">
        <a href={resumePath} download="/Kannan_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <i className="bi bi-envelop me-2"></i>
          Download My Resume
        </a>

        <p
          className="text-center text-white mb-4"
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: "#8bc34a",
            marginTop: "25px",
          }}
        >
          "Success is the sum of small efforts, repeated day in and day out." –
          Robert Collier
        </p>
      </div>
    </div>
  );
};

export default Resume;
