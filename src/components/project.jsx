import React from "react";

function Card() {
  return (
    <div className="project">
      <h2>My Recent Works</h2>
      <div className="project-container ">
        <div className="card">
          <div className="card-image" />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image" />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image" />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
