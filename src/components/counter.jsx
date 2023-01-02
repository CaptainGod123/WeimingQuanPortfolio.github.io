import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

class Counter extends Component { 
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    //     imageURL: 'https://picsum.photos/200',
    //     imageURL1: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    //     imageURL2: '"C:\Users\mingm\Desktop\Personal Website\WeimingQuanPortfolio.github.io\test pic.jpg"'
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    render() { 
        let classes = this.badgeState();
        
        return (
            <div>
              {/* <img src = {this.state.imageURL1} alt="" /> */}
              <span style = {this.styles}>
                <Badge bg = {classes + " m-2"}> {this.counter()} </Badge>{' '} 
              </span>
              
              <button className = "btn btn-secondary btn-sm">Increment</button>

              {this.state.tags.length === 0 && "Please create more tags"}
              {this.renderTags()}
              
            </div>
        );    
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!!!</p>;

        return <ul>{this.state.tags.map(tag => <li key = {tag}> {tag}</li>) }</ul>
    }

    badgeState() {
        let classes = '';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    counter() {
        const {count} = this.state;
        const temp = "Zero";
        return count === 0 ? temp: count;
    };
}

export default Counter;