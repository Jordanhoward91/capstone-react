import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/App.scss";
import Swapi from "../widgets/swapi.js";
import Counter from "../widgets/counter.js";
import ShowHide from "../widgets/showHide.js";
import FontSizer from "../widgets/fontSize";

class App extends Component {
  render() {
    return (
    <Router>
        <div className="header">
          <nav className="main-navbar">
          <ul className="navbar">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Swapi'} className="nav-link">Swapi</Link></li>
            <li><Link to={'/Counter'} className="nav-link">Counter</Link></li>
            <li><Link to={'/ShowHide'} className="nav-link">Show Hide</Link></li>
            <li><Link to={'/FontSizer'} className="nav-link">Font Size</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/swapi' component={Swapi} />
              <Route path='/counter' component={Counter} />
              <Route path='/showhide' component={ShowHide} />
              <Route path='/fontsizer' component={FontSizer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
