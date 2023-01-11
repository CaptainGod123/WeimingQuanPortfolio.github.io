import { useState, useEffect } from 'react';
import React from "react"

import myPic from "./background.jpg";
import './contact.css'

function Contact() {
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
                    <img width = {windowWidth} height = {windowHeight-101} src = {myPic} alt = "Freedom Blog" />
                </div>
                <div className ='text-on-image'>
                    <h3>Hi, welcome to my website!</h3>
                    <h3>My name is Weiming Quan</h3>
                    <h3>Current window height is: {windowHeight}</h3>
                    <h3>Current window width is: {windowWidth}</h3>
                    <h3>Use overlays --- maybe</h3>
                    <p> TEST </p>
                </div>
            </div>
        </header>
    );
    
}
  
export default Contact;

// Have all the contact info/ socials here 
// might rename to something else --- socials contact me etc