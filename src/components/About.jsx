import React, { Component } from 'react';


class About extends Component {
    state = { 
        imageURL: 'https://picsum.photos/200'
     } 
    render() { 
        return (
            <div>
            <h1>About Page</h1>
            <img width = {10} height = {10} src = {this.state.imageURL} alt="" />
          </div>
        );
    }
}
  
export default About;



// This page will be a self introduction
// Include images of interests like coding gaming etc (make them into a slide show maybe)
