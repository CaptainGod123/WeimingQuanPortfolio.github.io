import { useState, useEffect } from 'react';
import React from "react"
import Carousel from 'react-bootstrap/Carousel';

import bgPic from "./background.jpg";
import './projects.css'

function Projects() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });

    //accordations https://react-bootstrap.github.io/components/accordion/

    //for going through the different projects... either cards or carousel (crossfade)
    //https://react-bootstrap.github.io/components/cards/
    //https://react-bootstrap.github.io/components/carousel/

    //Or use Overlay
    //Where we have the list of projects at the bottom, and by clicking them show the overlay card
    //https://react-bootstrap.github.io/components/overlays/

    return (
      <div>
          <Carousel fade>
          <Carousel.Item interval={100}>
            <img
              className="d-block w-100"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className = "text1">
                <h3>First slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={100}>
          <img
              className="d-block w-100"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="First slide"
            />
    
            <Carousel.Caption>
              <div className = "text1">
                  <h3>Second slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={100}>
            <img
                className="d-block w-100"
                width = {windowWidth}
                height = {windowHeight-101}
                src={bgPic}
                alt="First slide"
              />
            <Carousel.Caption>
              <div className = "text1">
                <h3>Third slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    );
    
}
  
export default Projects;


// This page will include button and links to all the projects that I have document
// Link to github projects
