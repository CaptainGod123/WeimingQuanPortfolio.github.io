import { useState, useEffect } from 'react';
import React from "react"

import bgPic from "./background.jpg";
import myPic from './me1.jpg'; 
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
          <img width = {windowWidth} height = {windowHeight-101} src = {bgPic} alt = "bg" />
        </div>

        <div id ='header-on-image'>      
          <p>Hi, my name is Weiming Quan,</p>
          <p>Welcome to my Website!</p>
        </div>

        <div id ='p-on-image'>
          <p>I am a computer science student at the University of Toronto Mississauga. My areas of expertise include computer science, statistics, and economics. I am also an analyst at the Capital Management club at UTM, where I am able to combine my passion for statistics and economics. In my free time, I love to code, travel, play games, and am always eager to learn new things. I am also an avid hackathon participant. On my website, you can learn more about my projects and experiences. Please don't hesitate to reach out to me if you have any questions or just want to connect.</p>
        </div>
        
        <div className ='pic-on-image'>      
          <img width = {windowWidth / 3} src = {myPic} alt = "me" />
        </div>
        
      </div>
    </header>

  );
}

export default Home;