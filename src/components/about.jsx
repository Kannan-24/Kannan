import React, { useState } from "react";
import Image from "../assets/Kannan.png";
import {
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div className="col-12">
            <p className=" about mt-4">
              A passionate learner, constantly exploring innovative solutions in
              technology and web development. I believe in leveraging my skills
              to create impactful and efficient digital experiences.
            </p>
            <div className="col-12  about-details col-md-6">
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
                    B.E. Computer Science and Engineering <br /> 2021 - Present
                    (7.96 CGPA)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="row" id="skills">
            <div className="col-6 col-md-3 text-center mt-4">
              <FaPhp size={50} className="text-light mb-2" />
              <p>PHP</p>
            </div>
            <div className="col-6 col-md-3 text-center mt-4">
              <FaHtml5 size={50} className="text-light mb-2" />
              <p>HTML5</p>
            </div>
            <div className="col-6 col-md-3 text-center mt-4">
              <FaCss3 size={50} className="text-light mb-2" />
              <p>CSS3</p>
            </div>
            <div className="col-6 col-md-3 text-center mb-4 mt-4">
              <FaBootstrap size={50} className="text-light mb-2" />
              <p>Bootstrap</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <FaFigma size={50} className="text-light mb-2" />
              <p>Figma</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <FaReact size={50} className="text-light mb-2" />
              <p>React</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <FaDatabase size={50} className="text-light mb-2" />
              <p>Database</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <FaGitAlt size={50} className="text-light mb-2" />
              <p>Git</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about-container container" id="about">
      <div className="row"></div>
      <div className="avatar col-12 col-md-4 text-center ">
        <img src={Image} alt="Your Avatar" className="img-fluid" />
      </div>
      <div className="about-content col-md-8">
        <h2 className="abt d-none d-md-block">About Me</h2>
        <div className="btns-group-container">
          <button
            type="button"
            className={`btns ${
              activeTab === "personal" ? "btns-highlight" : "btns-default"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Info
          </button>
          <button
            type="button"
            className={`btns ${
              activeTab === "qualifications" ? "btns-highlight" : "btns-default"
            }`}
            onClick={() => setActiveTab("qualifications")}
          >
            Education
          </button>
          <button
            type="button"
            className={`btns ${
              activeTab === "skills" ? "btns-highlight" : "btns-default"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>
        <div className="about-content">{renderContent()}</div>
      </div>
    </section>
  );
};

export default About;
