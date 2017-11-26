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
import axios from "axios";
import Logo from "../logo.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleRegister(event) {
    event.preventDefault();
    axios
      .get(`http://20.20.7.163:3000/api/Patient/${this.props.aadhar}`)
      .then(res => {
        if (res.statusCode === 200) {
          localStorage.setItem("user", this.state.aadhar);
          this.props.history.push("/");
        } else {
          localStorage.setItem("user", this.state.aadhar);
          this.props.history.push("/user-detail");
        }
      })
      .catch(err => {
        localStorage.setItem("user", this.state.aadhar);
        this.props.history.push("/user-detail");
      });
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
            <Form size="large" onSubmit={this.handleRegister}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="aadhar"
                  onChange={this.handleInputChange}
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
                <Button color="teal" fluid size="large">
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
