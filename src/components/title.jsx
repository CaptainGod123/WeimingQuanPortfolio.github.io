import React, { Component } from 'react';

import myPic from './image/fake news logo.png'; 


class Title extends Component {
    state = { 

     } 
    render() { 
        return (
            <div>
                {<img src = {myPic} alt="" />}
            </div>
        );
    }
}
 
export default Title;