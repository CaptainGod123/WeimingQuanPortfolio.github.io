import React, { Component } from 'react';

import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


// import Home component
import Home from "./Home/home.jsx";
// import About component
import About from "./About/About.jsx";
// import ContactUs component
import ContactUs from "./Contacts/ContactUs.jsx";
// import Project component
import Projects from "./Projects/Projects.jsx";
//import my picture
import homePic from './image/homepic.png'; 

class Title extends Component {
  state = {  } 

//navbar height is 111

  render() { 
    return (     
      <Router>
        <div>
          {/* <Navbar className = "color-nav" variant="dark"> */}
          <Navbar bg = "dark" variant="dark">
            <Container>
              <Navbar.Brand href="#">{<img src = {homePic} width="75" alt="" />}</Navbar.Brand>
                <Nav className="justify-content-end">
                  <Nav.Link as={Link} to="/project" >My Projects</Nav.Link>
                  {/* <Nav.Link as={Link} to="/about" >Experiences</Nav.Link> */}
                  <Nav.Link as={Link} to="/contactUS" >Contact me</Nav.Link>
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
      </Router>
    );
  }
}
 
export default Title;