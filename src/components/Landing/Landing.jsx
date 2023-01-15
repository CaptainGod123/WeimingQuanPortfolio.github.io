import { useState, useEffect } from 'react';
import React from "react"

import bgPic from "./background.jpg";
import myPic from './me1.jpg'; 
import './landing.css'

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
          <img width = {windowWidth} height = {windowHeight-101} src = {bgPic} alt = "bg" />
        </div>

        <div id ='header-on-image'>      
          <p>Hi, my name is Weiming Quan,</p>
          <p>Welcome to my Website!</p>
        </div>

        <div id ='p-on-image'>
          <p>As a second-year student at the University of Toronto Mississauga, I am honing my expertise in the field of computer science, while also delving into the intricacies of statistics and economics through my major studies. I am also an analyst at the Capital Management club at UTM, where I am able to fully indulge my passion for statistics and economics. In my leisure time, I am an avid enthusiast of coding, travel, and gaming, always seeking new experiences. Attending hackathons is also a particular interest of mine, as it allows me to challenge myself and push the boundaries of my knowledge and abilities. On my website, you can learn more about my projects and experiences. Please don't hesitate to reach out to me if you have any questions or just want to connect.</p>
        </div>
        
        <div className ='pic-on-image'>      
          <img width = {windowWidth / 3} src = {myPic} alt = "me" />
        </div>
        
      </div>
    </header>

  );
}

export default Home;