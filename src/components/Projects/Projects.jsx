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
          <Carousel fade variant = "dark">
          <Carousel.Item interval={2000}>
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
              <ul>
                <li>
                  <p>This is a google extension that determine whether a news article is credible or not. </p>
                </li>
                <li>
                  <p>This google extension are mainly targeted to be used by students and researchers. </p>
                </li>
                <li>
                  <p>Credable has potential as it saves researchers and students countless time. </p>
                </li>
                <li>
                  <p>This project is written in the language Python. </p>
                </li>
                <li>
                  <p>Created by Weiming Quan, Kevin Ni, Omar Jaljoulli, and Zein Sleiman. </p>
                </li>
              </ul>
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
            <div className ='header-on-image1'>      
              <p>StockthePast, the stock simulator!</p>
            </div>
            <div className ='p-on-image1'>
              <ul>
                <li>
                  <p>This is a fintech application that helps users practice their investing skills in the stock market. </p>
                </li>
                <li>
                  <p>This application has a target group of people who are new to the stocks and investing. </p>
                </li>
                <li>
                  <p>StockthePast will help beginner investor to get more hands on.</p>
                </li>
                <li>
                  <p>This project is written in the language Java. </p>
                </li>
                <li>
                  <p>Created by Weiming Quan, Kevin Ni, Kai Wang, and David Hu. </p>
                </li>
              </ul>
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

            <div className ='p-on-image1'>
              <ul>
                <li>
                  <p>This is a personal website about me ;). </p>
                </li>
                <li>
                  <p>Feel me to check out the source code on the bottom right. </p>
                </li>
                <li>
                  <p>Feel free to contact me through the contact page.</p>
                </li>
                <li>
                  <p>This website is written in the languages JavaScript (React), CSS, and HTML. </p>
                </li>
                <li>
                  <p>Created by Weiming Quan. </p>
                </li>
              </ul>
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