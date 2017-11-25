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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };

    this.handleTabChange = this.handleTabChange.bind(this);
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
                  iconPosition="left"
                  placeholder="Name"
                  readOnly
                />
                <Form.Input
                  icon="calendar"
                  iconPosition="left"
                  placeholder="Age"
                  readOnly
                />
              </Form.Group>
              <Form.Field control={TextArea} placeholder="Address" readOnly />
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
        menuItem: { key: "basic", icon: "male", content: "Basic Details" },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Enter your physical characteristics.
            </Header>
            <Form size="large">
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Height"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Weight"
                  type="text"
                />
              </Form.Group>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Blood Group"
                type="text"
              />
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
        menuItem: { key: "allergy", icon: "remove user", content: "Allergies" },
        render: () => (
          <Tab.Pane>
            <Header as="h2" color="teal" textAlign="center">
              Allergies
            </Header>
            <Form size="large">
              <Form.Field
                control={TextArea}
                placeholder="Enter any allergies that you have if any."
                readOnly
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
                control={TextArea}
                placeholder="Enter any major operations that you had."
                readOnly
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
