import { useState, useEffect } from 'react';
import React from "react"

import bgPic from "./background.jpg";
import myPic from './me.png'; 
import './home.css'

function Home() {
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


  return (
    <header>
      <div className = "head-text">
        <div className = "head-image">
          <img width = {windowWidth} height = {windowHeight-101} src = {bgPic} alt = "Freedom Blog" />
        </div>
          
          <div className ='text-on-image'>
            <div className = 'pic'>
              <img width = {windowWidth / 8} src = {myPic} alt = "Freedom Blog" />
            </div>

            <div className = 'text' >
              <p>Hi, my name is Weiming Quan and welcome to my Website!</p>
              <p>I am a second year computer science student at the University of Toronto Mississauga. Specializing in computer science, and majoring in statistics and economics.</p>
              <p>Download Resume</p>
            </div>

          </div>
      </div>
    </header>

  );
}

export default Home;