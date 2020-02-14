import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./view/Login";
import Wall from "./view/Wall";

class App extends Component {
  // state = {

  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Wall} />
          {/* <Route exact path="/myposts" component={ModOptions} />
          <Route exact path="/friendsposts" component={ObsAsig} /> */}
          <Route exact path="/register" />
        </Switch>
      </Router>
    );
  }
}

export default App;
