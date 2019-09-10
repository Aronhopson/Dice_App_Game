import React, { Component } from 'react';
import Ball from './Ball';
import './Loettrey.css'

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxBall: 6,
        maxNum: 40
    };
    constructor(props) {
        super(props);
        //making of slots in maxBall
        this.state = { nums: Array.from({ length: this.props.maxBall }) };
        this.handleClick = this.handleClick.bind(this)
    }
    generate(){
        this.setState(curState =>({
            nums: curState.nums.map( n=> Math.floor(Math.random() * this.props.maxNum) +1)
        }));
    }
    handleClick() {
        this.generate();
    }

render(){
    return (
        <section className="Lottery">
            <h1>{this.props.title}</h1>
            <div>{this.state.nums.map(n => <Ball num={n}/> )}</div>
            <button onClick={this.handleClick}>Generate</button>
        </section>
    )
    }
}

export default Lottery;