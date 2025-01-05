import React from "react";
import Header from "./components/header";
import Herosection from "./components/hero";
import AboutMe from "./components/about";
import Card from "./components/project";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "./assets/Kannan.png";

function App() {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Header />
      <Herosection />
      <section className="about-container" id="about">
        <div className="avatar">
          <img src={Image} alt="Your Avatar" />
        </div>
        <div className="about-content">
          <h2 className="abt">About Me</h2>
          <p className="bio">
            A passionate learner, constantly exploring innovative solutions in
            technology and web development. I believe in leveraging my skills to
            create impactful and efficient digital experiences
          </p>
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
          <a href="/about" className="btn mt-2">
            Know More
          </a>
        </div>
      </section>
      <Card />
    </div>
  );
}

export default App;
