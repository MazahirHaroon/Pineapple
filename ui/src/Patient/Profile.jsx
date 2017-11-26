import React from "react";
import {
  Image,
  Grid,
  Segment,
  Container,
  Header,
  Divider,
  Card,
  Icon
} from "semantic-ui-react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const description = [
      "Amy is a violinist with 2 years experience in the wedding industry.",
      "She enjoys the outdoors and currently resides in upstate New York."
    ].join(" ");
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">
                <Icon name="user" />
                <Header.Content>
                  Mazahir Haroon
                  <Header.Subheader>Your Basic Details</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider horizontal />
            </Segment>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              <Header as="h1">Past Appointments</Header>
              <Divider horizontal />
              <Card fluid>
                <Card.Content header="26th November 2017" />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name="medkit" />
                  Paracetamol
                </Card.Content>
              </Card>
              <Card fluid>
                <Card.Content header="26th November 2017" />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name="medkit" />
                  Paracetamol
                </Card.Content>
              </Card>
              <Card fluid>
                <Card.Content header="26th November 2017" />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name="medkit" />
                  Paracetamol
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
