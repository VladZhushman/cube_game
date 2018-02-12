import React, { Component } from 'react';

import './App.css';
import Test from './components/Test';
import Cube from './components/Cube';
import GameField from "./components/GameField";

class App extends Component {
  render() {
    return (
      <div className="App">

          <GameField/>

      </div>
    );
  }
}

export default App;
