import React from "react";
import Header from "./components/header";
import Herosection from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Footer from "./components/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Header />
      <Herosection />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
