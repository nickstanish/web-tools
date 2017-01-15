import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, /* IndexRoute, */ Link } from 'react-router';

import ColorPage from './color/colorPage';
import CounterPage from './counter/counterPage';

const pages = [
  {
    name: 'Color Picker',
    component: ColorPage,
    absolutePath: '/color',
    path: 'color'
  },
  {
    name: 'Word Count',
    component: CounterPage,
    absolutePath: '/count',
    path: 'count'
  }
].sort((a, b) => a.name.localeCompare(b.name));

function Navigation(props) {
  return (
    <nav id="app-navigation">
      <div className="content-container">
        { pages.map(page => <Link key={page.path} to={page.absolutePath} activeClassName="active">{page.name}</Link>) }
      </div>
    </nav>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  toggleLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }
  render() {
    return (
      <div id="app">
        <Navigation />
        <div id="page-content" className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         Homepage
//       </div>
//     );
//   }
// }

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      { pages.map(page => <Route key={page.path} path={page.path} component={page.component} />) }
    </Route>
  </Router>
);

ReactDOM.render((
  routes
), document.getElementById('root'));
