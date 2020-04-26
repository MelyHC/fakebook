import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./view/GetIn";
import Wall from "./view/Wall";

class App extends Component {
  state = {
    user: {
      email: '',
      nickName: '',
    },
    // post: {
    public: [],
    // friends: [],
    me: []
    // }
  }

  registerUser = (e) => {
    e.preventDefault();
    console.log(e.target['user-name'],);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() =>
            <Login register={this.registerUser} />} />
          <Route exact path="/publicaciones" component={() =>
            <Wall />} />
          {/* <Route exact path="/myposts" component={ModOptions} />
          <Route exact path="/friendsposts" component={ObsAsig} /> */}
          <Route exact path="/register" />
        </Switch>
      </Router>
    );
  }
}

export default App;
