import React, { Component } from 'react';
import { choice } from './helper_coin'
import Coin from './Coin'

class CoinContainer extends Component {
    static defaultProps = {
        Coins: [
            { side: "Heads", imgSRC: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "Tails", imgSRC: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlip: 0,
            nhead: 0,
            ntail: 0,

        };
        this.hnadleBar = this.hnadleBar.bind(this)
    }
    flipCoin() {
        const newCoin = choice(this.props.Coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlip: st.nFlip + 1,
                nhead: st.nhead + (newCoin.side === 'Heads' ? 1 : 0),
                ntail: st.ntail + (newCoin.side === 'Tails' ? 1 : 0)
            };
        });
    }
    hnadleBar(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div className="Coin">
                <h1>Lets flip</h1>
                <button onClick={this.hnadleBar}>FLIP</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p>Out of {this.state.nFlip} Flip 
                  ,there are {this.state.nhead} Heads {" "}
                    and {this.state.ntail} Tails
                </p>
 
            </div>
        )
    }
}
export default CoinContainer;