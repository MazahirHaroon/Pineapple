import React from "react";
import PatientSearch from "./PatientSearch";
import DocProfile from "./DocProfile";
import DocView from "./DocView";
import { Route } from "react-router-dom";

class Doctor extends React.Component {
  render() {
    return (
      <section>
        <Route path="/" component={PatientSearch} />
        <Route path="/patient" component={DocProfile} />
        <Route path="/view" component={DocView} />
      </section>
    );
  }
}

export default Doctor;
