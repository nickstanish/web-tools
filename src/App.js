import React, { Component } from 'react';
import CounterPage from './pages/CounterPage';
import Base64Page from './pages/Base64Page';
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css';

function NotFound() {
  return <h1>Not Found</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <span>Web Tools</span>
              <nav>
                <li><Link to="/count">Count</Link></li>
                <li><Link to="/base64">Base64</Link></li>
              </nav>
            </header>
            <div id="page-content">
              <div className="content-container">
                <Switch>
                  <Redirect exact path="/" to="/count"/>
                  <Route exact path="/count" component={CounterPage}/>
                  <Route exact path="/base64" component={Base64Page}/>
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
