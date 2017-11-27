import React from "react";
import {
  Image,
  Grid,
  Segment,
  Container,
  Header,
  Divider,
  Card,
  Button,
  Icon,
  List
} from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import BASE_URL from "../constants";
import DetailCard from "./DetailCard";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userData: {}
    };
  }
  componentWillMount() {
    this.user = localStorage.getItem("user");
    if (!this.user) {
      this.props.history.push("/login");
    }
  }
  componentDidMount() {
    axios
      .get(`${BASE_URL}/api/Patient/${this.props.user}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            userData: res.data
          });
        } else {
          this.props.history.push("/register");
        }
      })
      .catch(err => {
        this.props.history.push("/register");
        console.error(err);
      });
    axios
      .get(`${BASE_URL}/api/queries/ListByPatient?id=${this.props.user}`)
      .then(res => {
        localStorage.setItem("lastTransaction", JSON.stringify(res.data[0]));
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let lastName = "";
    if (this.state.userData) {
      lastName = this.state.userData.lastName || "";
    }
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">
                <Icon name="user" />
                <Header.Content>
                  {this.state.userData &&
                    this.state.userData.firstName + " " + lastName}
                  <Header.Subheader>Your Basic Details</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider horizontal />
              <List divided relaxed>
                <List.Item>
                  <List.Icon name="home" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">
                      {this.state.userData && this.state.userData.address}
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="phone" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">
                      {this.state.userData &&
                        this.state.userData.emergencyContact}
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              <Header as="h1">Past Appointments</Header>
              <Divider horizontal />
              {this.state.data.map((patient, index) => {
                return (
                  <DetailCard
                    key={index}
                    description={patient.diagnosis}
                    prescription={patient.prescription}
                  />
                );
              })}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(Profile);
