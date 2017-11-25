/* eslint-disable */
import React, { Component } from "react";
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
        {/* <Register /> */}
        {/* <UserDetails /> */}
        {/* <PatientSearch /> */}
        <Profile />
      </div>
    );
  }
}
export default App;
