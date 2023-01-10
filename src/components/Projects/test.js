import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

ReactDOM.render(
  <Carousel autoplay autoplaySpeed={2000}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById("container")
);
