import React from "react";
import Image from "../assets/Kannan.png"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="content">
              <h1 className="highlighted-text">Hello!</h1>
              <h1 className="display-4 fw-bold">
                I'm <span className="highlighted-text">Kannan M</span>
              </h1>

              <p className="lead mb-4">Web Developer</p>

              <button className="btn btn-lg" onClick={() => alert("Hire Me!")}>
                Hire Me
              </button>
              <button
                className="btn btn-lg ms-4"
                onClick={() => alert("My Works!")}
              >
                My Works
              </button>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="img">
          <img src={Image} alt="hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
