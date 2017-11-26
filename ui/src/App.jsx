/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Pages/Register";
import UserDetails from "./Pages/UserDetails";
import PatientSearch from "./Doctor/PatientSearch";
import Profile from "./Patient/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content">
        <Navbar />
        <Router>
          <main>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/doctor" component={PatientSearch} />
              <Route path="/" component={Profile} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
export default App;
