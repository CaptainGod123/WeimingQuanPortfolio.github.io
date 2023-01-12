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
          <p>I am a second year computer science student at the University of Toronto Mississauga. Specializing in computer science, and majoring in statistics and economics.</p>
          <p>I am also an analyst at the Capital Management club at UTM, fulfilling my interests in statistics and economics.</p>
          <p>I love to code, travel, play games, and learn new stuff during my free time. Attending Hackathons is also something else that I am very interested in.</p>
        </div>
        
        <div className ='pic-on-image'>      
          <img width = {windowWidth / 3} src = {myPic} alt = "me" />
        </div>
        
      </div>
    </header>

  );
}

export default Home;