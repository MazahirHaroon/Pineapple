/* eslint-disable */
import React, { Component } from "react";
import Navbar from "./Navbar";
import Register from "./Pages/Register";
import UserDetails from "./Pages/UserDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* <Register /> */}
        <UserDetails />
      </div>
    );
  }
}
export default App;
