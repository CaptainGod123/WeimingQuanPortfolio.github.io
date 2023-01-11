import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// importing components from react-router-dom package
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Routes, Route, HashRouter } from "react-router-dom";


// import Home component
import Home from "./components/Home/home.js";
// import About component
import About from "./components/About/About.jsx";
// import ContactUs component
import ContactUs from "./components/Contacts/ContactUs.jsx";
// import Project component
import Projects from "./components/Projects/Projects.jsx";
//import my picture
import myPic from './components/image/me.png'; 

class Title {
  state = {  } 

  styles = {
    // fontSize: 20,
    // fontWeight: "bold",
    // textAlign: "center",
    // alignSelf: 'flex-end'
  };

//navbar height is 111

  render() { 
    return (     
      <HashRouter>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">{<img src = {myPic} width="75" alt="" />}</Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link href="/about" style = {this.styles}>About</Nav.Link>
                <Nav.Link href="/contactUS" style = {this.styles}>Contact me</Nav.Link>
                <Nav.Link href="/project" style = {this.styles}>My Projects</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Route components in a Routes component */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contactUS" element={<ContactUs />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
 
export default Title;