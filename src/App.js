import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Routes
import Viewer from "./Component/Viewer.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/grid/:id/'>
            <Viewer />
          </Route>
        </Switch>
      </Router>
    );
  }
}
