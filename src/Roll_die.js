import React, { Component } from 'react'
import Dice from './dice'
import './roll_dice.css'
import './die.css'

class Roll_die extends Component {
    static defaultProps = {
        side: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one", rolling: false };
        this.roll = this.roll.bind(this)
    }
    roll() {
        //pick 2 num
        const newDie1 = this.props.side
        [Math.floor(Math.random() * this.props.side.length)
        ];

        const newDie2 = this.props.side
        [Math.floor(Math.random() * this.props.side.length)
        ];
        //set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2 , rolling: true });

        //set rolling to false after 1 sec
        setTimeout(() =>{
            this.setState({rolling: false})
        },1000)
    }
    render() {
        return (
            <div className="roll_dice">
                <Dice face={this.state.die1}  rolling= {this.state.rolling}/>
                <Dice face={this.state.die2}  rolling= {this.state.rolling}/>
                <button onClick={this.roll} disabled={this.state.rolling}>
                {this.state.rolling ? 'Rolling....' : 'Roll Dice' }</button>
            </div>
        )
    }
}

export default Roll_die;