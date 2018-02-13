import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import GameField from "./components/GameField";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>

        <div className="App">

          <GameField/>

        </div>
        </MuiThemeProvider>

           );
  }
}

export default App;
