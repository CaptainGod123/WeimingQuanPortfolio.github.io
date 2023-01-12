import { useState, useEffect } from 'react';
import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import bgPic from "./background.jpg";
import credablepic from "./fake news logo.png";
import fakenews from "./fakenews.jpg";
import stockpic from "./stocks.jpg";
import mepic from "./me.png";
import githubpic from "./github-logo.png";
import './projects.css';

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
          <Carousel.Item interval={2000}>
            <img
              className="image"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="First slide"
            />
            <div id ='header-on-image1'>      
              <p>Credable, the fake news detector!</p>
            </div>
            <div id ='p-on-image1'>
              <p>This is a google extension that helps users determine whether a news article is credible or not. </p>
              <p>Designed in Python. </p>
            </div>
            <div className ='pic-on-image1'>      
              <img width = {windowWidth / 3} src = {credablepic} alt = "me" />
            </div>
            <div className ='meme-on-image1'>      
              <img width = {windowWidth / 3} src = {fakenews} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.location.href='https://github.com/CaptainGod123/Hack_The_Valley_2022_Fake_News_Detector'}>
                <img src={githubpic} alt="add item" width = {windowWidth / 15} /> 
              </Button>
            </div>
            <Carousel.Caption>
              <div className = "text1">
                <h3>Credable</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
          <img
              className="image"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="Second slide"
            />
            <div id ='header-on-image1'>      
              <p>StockthePast, the stock simulator!</p>
            </div>
            <div id ='p-on-image1'>
              <p>This is a fintech application that helps users practice their investing skills in the stock market. </p>
              <p>Designed in Java. </p>
            </div>
            <div className ='title-on-image2'>      
              <p>StockthePast</p>
            </div>
            <div className ='meme-on-image1'>      
              <img width = {windowWidth / 3} src = {stockpic} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.location.href='https://github.com/CaptainGod123/StockThePast'}>
                <img src={githubpic} alt="add item" width = {windowWidth / 15} /> 
              </Button>
            </div>
            <Carousel.Caption>
              <div className = "text1">
                  <h3>StockthePast</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
                className="iamge"
                width = {windowWidth}
                height = {windowHeight-101}
                src={bgPic}
                alt="Third slide"
            />

            <div id ='p-on-image1'>
              <p>This is a personal website about me ;). </p>
              <p>Designed in JavaScript (React), CSS, and HTML. </p>
            </div>
            <div className ='title-on-image2'>      
              <p>this.website</p>
            </div>
            <div className ='meme-on-image3'>      
              <img width = {windowWidth / 5} src = {mepic} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.location.href='https://github.com/CaptainGod123/weiming-quan-portfolio'}>
                <img src={githubpic} alt="add item" width = {windowWidth / 15} /> 
              </Button>
            </div>
            <Carousel.Caption>
              <div className = "text1">
                <h3>Personal Porfolio</h3>
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
