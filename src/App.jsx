import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Herosection from "./components/hero";
import About from "./components/about";
import SkillsList from "./components/skills";
import Experience from "./components/experience";
import Project from "./components/project";
import AdditionalProjects from "./components/additionalProjects";
import Contributions from "./components/contributions";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { useTheme } from "./context/ThemeContext";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", backgroundColor: colors.background }}
        >
          <div
            className="spinner-border"
            role="status"
            style={{ color: colors.accent, width: "50px", height: "50px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <ScrollProgressBar />
          <Header />
          <main>
            <Herosection />
            <About />
            <SkillsList />
            <Experience />
            <Project />
            <AdditionalProjects />
            <Contributions />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      {/* Floating Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            color: "#080c14",
            backgroundColor: colors.accent,
            border: "none",
            width: "44px",
            height: "44px",
            fontSize: "18px",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(56, 189, 248, 0.35)",
            cursor: "pointer",
            zIndex: 1000,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up-short fs-3"></i>
        </button>
      )}
    </div>
  );
}

export default App;
