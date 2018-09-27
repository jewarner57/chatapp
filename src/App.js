import React, { Component } from 'react';
import MessagesBox from './MessagesBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
          <MessagesBox />
        </div>
      </div>
    );
  }
}

export default App;
