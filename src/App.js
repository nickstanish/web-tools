import React, { Component } from 'react';
import CounterPage from './pages/CounterPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Web Tools
        </header>
        <div id="page-content">
          <div className="content-container">
            <CounterPage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
