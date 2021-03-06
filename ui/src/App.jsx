/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./Pages/Register";
import UserDetails from "./Pages/UserDetails";
import Doctor from "./Doctor";
import Patient from "./Patient";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content">
        <Router>
          <Route path="/">
            <div>
              <Navbar />
              <main>
                <Switch>
                  <Route path="/register" component={Register} />
                  <Route path="/user-detail" component={UserDetails} />
                  <Route path="/doctor" component={Doctor} />
                  <Route path="/" component={Patient} />
                </Switch>
              </main>
            </div>
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
