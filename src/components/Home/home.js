import { useState, useEffect } from 'react';
import React from "react"

import myPic from "./homebg.png";
import './home.css'

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
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
          <img width = {windowWidth} src = {myPic} alt = "Freedom Blog" />
        </div>
          <div className ='text-on-image'>
             <h3> Hi, welcome to my website! My name is Weiming Quan </h3>
             <p> TEST </p>
          </div>
      </div>
    </header>

  );
}

export default Home;