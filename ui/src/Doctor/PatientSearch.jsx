import React from "react";
import { Form, Button, Container, Grid } from "semantic-ui-react";

class PatientSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid
        centered
        container
        columns={1}
        textAlign="center"
        verticalAlign="middle"
        className="patient-search"
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Form>
              <Form.Field>
                <input type="number" placeholder="Enter Aadhar Number" />
              </Form.Field>
              <Button primary>View</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PatientSearch;
