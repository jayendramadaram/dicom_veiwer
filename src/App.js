import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Routes
import Viewer from "./Component/Viewer.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/grid/:id'>
            <Viewer />
          </Route>
          <Route>
            <Redirect to='/grid/d15c251e-cbca-442f-8de2-8dd12a45f2cf' />
          </Route>
        </Switch>
      </Router>
    );
  }
}
