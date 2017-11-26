import React from "react";
import {
  Image,
  Grid,
  Segment,
  Container,
  Header,
  Divider,
  Card,
  Icon,
  List
} from "semantic-ui-react";
import axios from "axios";
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
      this.props.push("/login");
    }
  }
  componentDidMount() {
    axios
      .get(`http://20.20.7.163:3000/api/Patient/${this.props.user}`)
      .then(res => {
        this.setState({
          userData: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
    axios
      .get(
        `http://20.20.7.163:3000/api/queries/ListByPatient?id=${this.props
          .user}`
      )
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">
                <Icon name="user" />
                <Header.Content>
                  {this.state.userData &&
                    this.state.userData.firstName +
                      " " +
                      this.state.userData.lastName}
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

export default Profile;
