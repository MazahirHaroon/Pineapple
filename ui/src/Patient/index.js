import React from "react";
import Profile from "../Shared/Profile";

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.user = localStorage.getItem("user");
  }
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.push("/register");
    }
  }
  render() {
    return <Profile user={this.user} />;
  }
}

export default Patient;
