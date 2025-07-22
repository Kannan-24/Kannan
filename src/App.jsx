import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Herosection from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Resume from "./components/resume";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SkillsList from "./components/skills";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true); // State to handle loading

  // Toggle visibility of the Scroll to Top button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Listen for scroll events and toggle the button's visibility
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Simulating loading state, which will be turned off after 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time as needed

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      {loading ? (
        // Loading Spinner
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#64ffda", width: "80px", height: "80px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <ScrollProgressBar />
          <Header />
          <Herosection />
          <About />
          <SkillsList />
          <Project />
          <Contact />
          <Resume />
          <Footer />
        </>
      )}

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            color: "#fff",
            backgroundColor: "#64ffda", // Button color matching the theme
            border: "none",
            width: "50px",
            height: "50px",
            fontSize: "18px",
            borderRadius: "50%",
            boxShadow: "0 6px 15px rgba(100, 255, 218, 0.5)", // Glowing effect with #64ffda
            cursor: "pointer",
            zIndex: 1000, // Ensure the button is on top of other content
            transition: "all 0.3s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          {/* Scroll to Top Icon (angle-up) */}
          <i className="bi bi-arrow-up" style={{ fontSize: "30px" }}></i>
        </button>
      )}
    </div>
  );
}

export default App;
