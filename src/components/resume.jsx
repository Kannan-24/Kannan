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
        <a href={resumePath} download="/Kannan_resume.pdf">
          <button
            className="btn btn-lg"
            style={{
              border: "2px solid #00e5ff",
              color: "#fff",
              padding: "15px 30px",
              fontSize: "20px",
              borderRadius: "8px",
              backgroundColor: "#212121",
              boxShadow: "0 6px 15px rgba(0, 229, 255, 0.2)",
              transition: "all 0.3s ease-in-out",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 10px 25px rgba(0, 229, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 6px 15px rgba(0, 229, 255, 0.2)";
            }}
          >
            Download My Resume
          </button>
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
