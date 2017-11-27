import React from "react";
import { Form, Button, Container, Grid } from "semantic-ui-react";

class PatientSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSearch(event) {
    event.preventDefault();
    localStorage.setItem("user", this.state.search);
    this.props.history.push("/doctor/patient");
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
            <Form onSubmit={this.handleSearch}>
              <Form.Field>
                <input
                  type="number"
                  placeholder="Enter Aadhar Number"
                  value={this.state.search}
                  name="search"
                  onChange={this.handleInputChange}
                />
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
