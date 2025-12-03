import React from "react";
import { useTheme } from "../context/ThemeContext";

const Resume = () => {
  const { colors } = useTheme();
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
        className="text-center mb-4 section-title"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "700",
          fontSize: "32px",
          color: colors.text,
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
          className="text-center mb-4"
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: colors.accent,
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
