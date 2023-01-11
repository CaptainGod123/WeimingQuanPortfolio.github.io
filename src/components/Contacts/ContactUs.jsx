import { useState, useEffect } from 'react';
import React from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import myPic from "./background.jpg";
import linkedinpic from "./Linkedin-Logo.png"
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

    let navigate = useNavigate(); 
    const toLinkedin = () =>{ 
      let path = 'https://www.linkedin.com/in/weiming-quan-6280b0243/'; 
      navigate(path);
    }

    return (
        <header>
            <div className = "head-text">
                <div className = "head-image">
                    <img width = {windowWidth} height = {windowHeight-101} src = {myPic} alt = "Freedom Blog" />
                </div>
                <div className ='text-on-image'>
                    <ul>
                      <li>
                        <Button size="lg" variant="top" onClick={toLinkedin}>
                          <img src={linkedinpic} alt="add item" width="250" /> 
                        </Button>
                      </li>
                      <li>
                        <Button size="lg" variant="top">
                          <img src={linkedinpic} alt="add item" width="250" /> 
                        </Button>
                      </li>
                      <li>
                        <Button size="lg" variant="top">
                          <img src={linkedinpic} alt="add item" width="250" /> 
                        </Button>
                      </li>
                    </ul>

                    {/* <div className = "list">
                      <ul>
                        <li>

                        </li>

                        <li>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        </li>

                        <li>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        </li>
                      </ul>
                      
                    </div> */}
                </div>



            </div>
        </header>
    );
    
}
  
export default Contact;

// Have all the contact info/ socials here 
// might rename to something else --- socials contact me etc