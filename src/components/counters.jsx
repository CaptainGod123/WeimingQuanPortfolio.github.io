import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, count: -10},
            { id: 2, count: -5},
            { id: 3, count: 0},
            { id: 4, count: 5}
        ]
    } 

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters: counters})
    }

    render() { 
        return (
            <div>
                {this.state.counters.map(countersIndex => 
                <Counter 
                    key = {countersIndex.id} 
                    onClick = {this.handleDelete} 
                    counter = {countersIndex}
                    // count = {countersIndex.count}
                    // id = {countersIndex.id}
                />)}
                
            </div>
        );
    }
}
 
export default Counters;