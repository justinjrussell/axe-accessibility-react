import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>Label for this text field.</p>
          <input type="text" id="nolabel" />
          <marquee>This text will scroll from right to left</marquee>
        </div>
      </div>
    );
  }
}

export default App;
