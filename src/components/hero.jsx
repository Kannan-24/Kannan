import React, { useState, useEffect } from "react";
import Illustration from "../assets/illustration.svg";

const roles = ["Frontend Developer", "Fullstack Developer", "IoT Developer"];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing && charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (charIndex === roles[roleIndex].length) {
      setTyping(false);
      setTimeout(() => {
        setTyping(true);
        setCharIndex(0);
        setCurrentText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [typing, charIndex, roleIndex]);

  return (
    <div className="container hero" id="home">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12">
          <div className="content">
            <h1 className="highlighted-text">Hello!</h1>
            <h1 className="display-4 fw-bold">
              I'm <span className="highlighted-text">Kannan M</span>
            </h1>
            <h1 className="lead mb-4">{currentText || "\u00A0"}</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 illustration">
          <img
            src={Illustration}
            alt="hero illustration"
            className="img-fluid hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
