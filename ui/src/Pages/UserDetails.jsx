import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  TextArea,
  Tab,
  Transition
} from "semantic-ui-react";
import BASE_URL from "../constants";
import axios from "axios";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      height: "",
      weight: "",
      age: 0,
      bloodGroup: "",
      contact: "",
      allergies: "",
      operations: "",
      provider: "",
      policyNum: "",
      activeIndex: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.registrationComplete = this.registrationComplete.bind(this);
  }
  registrationComplete(event) {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/api/Patient`, {
        $class: "com.phoenix.Patient",
        aadharId: localStorage.getItem("user"),
        firstName: this.state.name.split(" ")[0],
        lastName: this.state.name.split(" ")[1],
        age: this.state.age,
        address: this.state.address,
        emergencyContact: this.state.contact
      })
      .then(res => {
        this.props.history.push("/profile");
        axios.post(`${BASE_URL}/api/HospitalRecord`, {
          $class: "com.phoenix.HospitalRecord",
          recordId: Math.floor(Math.random() * 1000 + 1),
          patientId: localStorage.getItem("user"),
          doctorId: Math.floor(Math.random() * 1000 + 1),
          diagnosis: "Initial",
          prescription: "Full Well"
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleTabChange(tabIndex) {
    this.setState({
      activeIndex: tabIndex
    });
  }
  render() {
    const panes = [
      {
        menuItem: { key: "verify", icon: "unhide", content: "Verify Data" },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Primary Details.
            </Header>
            <Form size="large">
              <Form.Group widths="equal">
                <Form.Input
                  icon="user"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Name"
                />
                <Form.Input
                  icon="calendar"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Age"
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                name="address"
                onChange={this.handleInputChange}
                value={this.state.address}
                placeholder="Address"
              />
              <Form.Group>
                <Button fluid size="large">
                  Back
                </Button>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(1)}
                >
                  Continue
                </Button>
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "basic",
          icon: "male",
          content: "Basic Details"
        },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Enter your physical characteristics.
            </Header>
            <Form size="large">
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="info"
                  name="height"
                  value={this.state.height}
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Height"
                />
                <Form.Input
                  fluid
                  icon="info"
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Weight"
                  type="text"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="info"
                  name="bloodGroup"
                  value={this.state.bloodGroup}
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Blood Group"
                  type="text"
                />
                <Form.Input
                  fluid
                  icon="user circle"
                  name="contact"
                  onChange={this.handleInputChange}
                  iconPosition="left"
                  placeholder="Emergency Contact"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Button
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(0)}
                >
                  Back
                </Button>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(2)}
                >
                  Continue
                </Button>
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "allergy",
          icon: "remove user",
          content: "Allergies"
        },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Allergies
            </Header>
            <Form size="large">
              <Form.Field
                control={TextArea}
                name="allergies"
                value={this.state.alllergies}
                onChange={this.handleInputChange}
                placeholder="Enter any allergies that you have if any."
              />
              <Form.Group>
                <Button
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(1)}
                >
                  Back
                </Button>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(3)}
                >
                  Continue
                </Button>
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "operations",
          icon: "universal access",
          content: "Major Operations"
        },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Major Operations
            </Header>
            <Form size="large">
              <Form.Field
                name="operations"
                value={this.state.operations}
                onChange={this.handleInputChange}
                control={TextArea}
                placeholder="Enter any major operations that you had."
              />
              <Form.Group>
                <Button
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(2)}
                >
                  Back
                </Button>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(4)}
                >
                  Continue
                </Button>
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "insurance",
          icon: "hand peace",
          content: "Insurance Details"
        },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Enter your Insurance Details.
            </Header>
            <Form size="large">
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="provider"
                  onChange={this.handleInputChange}
                  value={this.state.provider}
                  icon="user outline"
                  iconPosition="left"
                  placeholder="Provider"
                />
                <Form.Input
                  fluid
                  name="policyNum"
                  value={this.state.policyNum}
                  onChange={this.handleInputChange}
                  icon="hashtag"
                  iconPosition="left"
                  placeholder="Policy Number"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Button
                  fluid
                  size="large"
                  onClick={() => this.handleTabChange(3)}
                >
                  Back
                </Button>
                <Button
                  color="blue"
                  fluid
                  size="large"
                  onClick={this.registrationComplete}
                >
                  Complete
                </Button>
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      }
    ];
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
      height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 800 }}>
            <Tab panes={panes} activeIndex={this.state.activeIndex} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
