import React, { Component } from 'react';
import './App.css';
import { Container } from './components/container.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      strings: ["c", "%", "DEL", "x", "1", "2", "3", "-", "4", "5", "6", "/", "7", "8", "9", "+", "0", ".", "="]
    }
  }

  render() {
    return (
      <div className="App" >
        <Container btnText={this.state.strings} />
      </div>
    );
  }

}

export default App;
