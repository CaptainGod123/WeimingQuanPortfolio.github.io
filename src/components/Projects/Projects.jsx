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

    return (
      <div>
          <Carousel fade variant = "dark" interval = {null}>
          <Carousel.Item>
            <img
              className="image"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="First slide"
            />
            <div className ='header-on-image1'>      
              <p>Credable, the fake news detector!</p>
            </div>
            <div className ='p-on-image1'>
              <p>This is a google extension that determines the credibility of the input news article . </p>
              <p>The targeted users are students and researchers. </p>
              <p>Credable has potential to improve the searching effectiveness and efficiency by saving users' tremendous time. </p>
              <p>This project is written in the language Python and developed by Weiming Quan, Kevin Ni, Omar Jaljoulli, and Zein Sleiman. </p>  
            </div>
            <div className ='pic-on-image1'>      
              <img width = {windowWidth / 3} src = {credablepic} alt = "me" />
            </div>
            <div className ='meme-on-image1'>      
              <img width = {windowWidth / 3} src = {fakenews} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.open('https://github.com/CaptainGod123/Hack_The_Valley_2022_Fake_News_Detector', '_blank')}>
                <img src={githubpic} alt="add item" width = {windowWidth / 20} /> 
              </Button>
            </div>
            <div className = 'text1'>
              <p>Check out the github page &#8594;</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <img
              className="image"
              width = {windowWidth}
              height = {windowHeight-101}
              src={bgPic}
              alt="Second slide"
            />
            <div className ='header-on-image1'>      
              <p>StockthePast, the stock simulator!</p>
            </div>
            <div className ='p-on-image1'>
              <p>This is a fintech application that helps users practice their investing skills in the stock market. It is designed for a target group who are new to stock investing.</p>
              <p>StockthePast will help beginners get more hands on investing experiences through the simulation without the use of real money.</p> 
              <p>This project is written in the language Java and developed by Weiming Quan, Kevin Ni, Kai Wang, and David Hu. </p>  
              </div>
            <div className ='title-on-image2'>      
              <p>StockthePast</p>
            </div>
            <div className ='meme-on-image1'>      
              <img width = {windowWidth / 3} src = {stockpic} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.open('https://github.com/CaptainGod123/StockThePast', '_blank')}>
                <img src={githubpic} alt="add item" width = {windowWidth / 20} /> 
              </Button>
            </div>
            <div className = 'text1'>
              <p>Check out the github page &#8594;</p>
            </div>

          </Carousel.Item>

          <Carousel.Item>
            <img
                className="iamge"
                width = {windowWidth}
                height = {windowHeight-101}
                src={bgPic}
                alt="Third slide"
            />

            <div className ='p-on-image1'>
              <p>This personal website is written in the languages JavaScript (React), CSS, and HTML.</p>
              <p>Developed by Weiming Quan</p>
              <p>Feel free to check out the souce code or contact me.</p>
            </div>
            <div className ='title-on-image2'>      
              <p>this.website</p>
            </div>
            <div className ='meme-on-image3'>      
              <img width = {windowWidth / 5} src = {mepic} alt = "me" />
            </div>
            <div className ='button-on-image1'> 
              <Button size="lg" variant="top" onClick={event =>  window.open('https://github.com/CaptainGod123/weiming-quan-portfolio', '_blank')}>
                <img src={githubpic} alt="add item" width = {windowWidth / 20} /> 
              </Button>
            </div>
            <div className = 'text1'>
              <p>Check out the github page &#8594;</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
    
}
  
export default Projects;