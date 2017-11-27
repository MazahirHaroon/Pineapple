import React from "react";
import { Button } from "semantic-ui-react";
import Profile from "../Shared/Profile";

class DocProfile extends React.Component {
  constructor(props) {
    super(props);
    this.addObservation = this.addObservation.bind(this);
  }
  addObservation(event) {
    event.preventDefault();
    this.props.history.push("/doctor/view");
  }
  render() {
    return (
      <section>
        <Button positive onClick={this.addObservation}>
          Add Observation
        </Button>
        <Profile user={localStorage.getItem("search")} />
      </section>
    );
  }
}

export default DocProfile;
