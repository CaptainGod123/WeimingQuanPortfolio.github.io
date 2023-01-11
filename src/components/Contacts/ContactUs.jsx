import { useState, useEffect } from 'react';
import React from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import myPic from "./background.jpg";
import linkedinpic from "./Linkedin-Logo.png";
import githubpic from "./github-logo.png";
import resumepic from "./resume-logo.png";
import discordpic from "./discord-logo.png";
import emailpic from "./email.png";
import './contact.css';

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

  let navigate = useNavigate(); 
  const toLinkedin = () =>{ 
    let path = 'https://www.linkedin.com/in/weiming-quan-6280b0243/'; 
    navigate(path);
  }

  const renderResume = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me to see me resume!!!
    </Tooltip>
  );
  const renderDiscord = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me to copy my Discord tag!!
    </Tooltip>
  );
  const renderEmail = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me to copy my email address!!!
    </Tooltip>
  );

  return (
    <header>
      <div>
          <div>
              <img width = {windowWidth} height = {windowHeight-101} src = {myPic} alt = "Freedom Blog" />
          </div>
          <div className ='text-on-image'>
              <ul>
                <li>
                  <Button size="lg" variant="top" onClick={toLinkedin}>
                    <img src={linkedinpic} alt="add item" width = {windowWidth / 10} /> 
                  </Button>
                </li>
                <li>
                  <Button size="lg" variant="top">
                    <img src={githubpic} alt="add item" width = {windowWidth / 10}/> 
                  </Button>
                </li>
                <li>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 100, hide: 400 }}
                    overlay={renderDiscord}
                  >
                    <Button size="lg" variant="top" onClick={() => {navigator.clipboard.writeText("C_GOD#7995")}}>
                      <img src={discordpic} alt="add item" width = {windowWidth / 10}/> 
                    </Button>
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 400 }}
                      overlay={renderEmail}
                  >
                    <Button size="lg" variant="top" onClick={() => {navigator.clipboard.writeText("qwm0728@gmail.com")}}>
                      <img src={emailpic} alt="add item" width = {windowWidth / 10}/> 
                    </Button>
                  </OverlayTrigger>

                </li>
              </ul>
              <div class = "button">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderResume}
                >
                  <Button size="lg" variant="top">
                    <img src={resumepic} alt="add item" width = {windowWidth / 7.5}/> 
                  </Button>
                </OverlayTrigger>
                  
              </div>
          </div>
      </div>

    </header>
        
  );
    
}
  
export default Contact;

// Have all the contact info/ socials here 
// might rename to something else --- socials contact me etc