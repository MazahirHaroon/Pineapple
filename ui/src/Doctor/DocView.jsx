import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  TextArea
} from "semantic-ui-react";
import axios from "axios";
import Logo from "../logo.png";

class DocView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diagnosis: "",
      prescription: ""
    };
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
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header as="h2" color="teal" textAlign="center">
              Enter your Diagnosis.
            </Header>
            <Form size="large" onSubmit={this.handleRegister}>
              <Segment stacked>
                <Form.Field
                  control={TextArea}
                  name="diagnosis"
                  onChange={this.handleInputChange}
                  value={this.state.diagnosis}
                  placeholder="Enter your Diagnosis"
                />
                <Form.Field
                  control={TextArea}
                  name="prescription"
                  onChange={this.handleInputChange}
                  value={this.state.prescription}
                  placeholder="Enter the prescription"
                />
                <Button color="blue" fluid size="large">
                  Submit
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default DocView;
