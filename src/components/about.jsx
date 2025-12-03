import React, { useState } from "react";
import Image from "../assets/Kannan.png";
import { useTheme } from "../context/ThemeContext";
import {
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaPhp,
  FaJava,
  FaPython,
  FaTools,
} from "react-icons/fa";

const About = () => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div className="col-12">
            <p className="about mt-4">
              A passionate learner, constantly exploring innovative solutions in
              technology and web development. I believe in leveraging my skills
              to create impactful and efficient digital experiences.
            </p>
            <div className="about-details">
              <p>
                <strong>Name:</strong> Kannan M
              </p>
              <p>
                <strong>Date of Birth:</strong> September 24, 2004
              </p>
              <p>
                <strong>Email:</strong> kannanmuruganandham1@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91-63825-11495
              </p>
              <p>
                <strong>Address:</strong> Tamil Nadu, India
              </p>
            </div>
          </div>
        );
      case "qualifications":
        return (
          <div className="row">
            <div className="col-12 col-md-6">
              <ul className="timeline mt-4 list-unstyled">
                <li>
                  <h5>SRK Matric Higher Secondary School</h5>
                  <p>
                    HSC <br /> 2020 - 2021
                  </p>
                </li>
                <li>
                  <h5>Sengunthar Matric Hr Sec School</h5>
                  <p>
                    SSLC <br /> 2018 - 2019
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="timeline list-unstyled mt-4">
                <li>
                  <h5>Erode Sengunthar Engineering College</h5>
                  <p>
                    B.E. Computer Science and Engineering <br /> 2021 - 2025
                    (7.96 CGPA)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        );
       default:
        return null;
    }
  };

  return (
    <section className="about-container" id="about">
      <div className="container-about container ">
        <div className="image">
          <img src={Image} alt="Your image" className="img-fluid" />
        </div>
        <div className="about-content col-12 col-md-8">
          <h2 className="abt d-none d-md-block section-title" style={{ color: colors.text }}>About Me</h2>
          <div className="btns-group-container">
            <button
              type="button"
              className={`btns ${activeTab === "personal" ? "btns-highlight" : "btns-default"}`}
              onClick={() => setActiveTab("personal")}
              style={{ 
                color: activeTab === "personal" ? (colors.text === "#1a1a1a" ? "#fff" : "#000") : colors.text,
                backgroundColor: activeTab === "personal" ? colors.accent : "transparent"
              }}
            >
              Personal Info
            </button>
            <button
              type="button"
              className={`btns ${activeTab === "qualifications" ? "btns-highlight" : "btns-default"}`}
              onClick={() => setActiveTab("qualifications")}
              style={{ 
                color: activeTab === "qualifications" ? (colors.text === "#1a1a1a" ? "#fff" : "#000") : colors.text,
                backgroundColor: activeTab === "qualifications" ? colors.accent : "transparent"
              }}
            >
              Education
            </button>
          </div>
          <div className="about-content" style={{ color: colors.text }}>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
  