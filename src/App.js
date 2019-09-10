import React from 'react';
import './App.css'
import Roll_die from './Roll_die';
import Lottery from './Lpttery'
import Coin from './Coin_Container'

function App() {
  return (
    <div className="App">
      <Coin/>
      {/* <Roll_die  /> */}
      {/* <Lottery/>
      <Lottery title="Mini" maxNum="10" maxBall="3"/> */}
    </div>
  );
}

export default App;
