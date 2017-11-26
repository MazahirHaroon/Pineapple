import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import Logo from "../logo.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleRegister(event) {
    event.preventDefault();
    this.props.history.push("/");
  }
  render() {
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
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={Logo} /> Register to create an account.
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Aadhar Number"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="OTP"
                  type="text"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleRegister}
                >
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
