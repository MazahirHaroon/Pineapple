import React from "react";
import PatientSearch from "./PatientSearch";
import DocProfile from "./DocProfile";
import DocView from "./DocView";
import { Route, Switch } from "react-router-dom";

class Doctor extends React.Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/doctor/patient" component={DocProfile} />
          <Route path="/view" component={DocView} />
          <Route path="/" component={PatientSearch} />
        </Switch>
      </section>
    );
  }
}

export default Doctor;
