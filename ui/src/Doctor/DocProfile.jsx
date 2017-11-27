import React from "react";
import { Button } from "semantic-ui-react";
import Profile from "../Shared/Profile";

class DocProfile extends React.Component {
  render() {
    return (
      <section>
        <Button positive>Add Observation</Button>
        <Profile />
      </section>
    );
  }
}

export default DocProfile;
