import React, { Component } from 'react';
import './App.css';

import {
  Button
} from 'antd-mobile';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="warning">warning</Button>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;