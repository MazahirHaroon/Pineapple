import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  TextArea,
  Menu,
  Tab
} from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "verify", icon: "unhide", content: "Verify Data" },
    render: () => (
      <Tab.Pane>
        <Header as="h2" color="teal" textAlign="center">
          Verify Details.
        </Header>
        <Form size="large">
          <Form.Group widths="equal">
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Name"
              placeholder="Name"
              readOnly
            />
            <Form.Input
              icon="calendar"
              iconPosition="left"
              label="Age"
              placeholder="Age"
              readOnly
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Address"
            placeholder="Address"
            readOnly
          />
          <Form.Group>
            <Button fluid size="large">
              Back
            </Button>
            <Button color="teal" fluid size="large">
              Continue
            </Button>
          </Form.Group>
        </Form>
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "basic", icon: "users", content: "Users" },
    render: () => (
      <Tab.Pane>
        <Header as="h2" color="teal" textAlign="center">
          Verify Details.
        </Header>
        <Form size="large">
          <Form.Group widths="equal">
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Name"
              placeholder="Name"
              readOnly
            />
            <Form.Input
              icon="calendar"
              iconPosition="left"
              label="Age"
              placeholder="Age"
              readOnly
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Address"
            placeholder="Address"
            readOnly
          />
          <Form.Group>
            <Button fluid size="large">
              Back
            </Button>
            <Button color="teal" fluid size="large">
              Continue
            </Button>
          </Form.Group>
        </Form>
      </Tab.Pane>
    )
  }
];

const UserProfile = () => (
  <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
      height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 800 }}>
        <Tab panes={panes} />
      </Grid.Column>
    </Grid>
  </div>
);

export default UserProfile;
