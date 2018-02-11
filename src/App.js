import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Cube from './components/Cube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Test/>
          <Cube number={1}/>
          <Cube number={19}/>
          <Cube number={1}/>
      </div>
    );
  }
}

export default App;
