import React from "react";
import { Card, Icon } from "semantic-ui-react";

class DetailCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const description = [
      "Amy is a violinist with 2 years experience in the wedding industry.",
      "She enjoys the outdoors and currently resides in upstate New York."
    ].join(" ");
    return (
      <Card fluid>
        <Card.Content header={"26-11-2017"} />
        <Card.Content description={this.props.description} />
        <Card.Content extra>
          <Icon name="medkit" />
          {this.props.prescription}
        </Card.Content>
      </Card>
    );
  }
}

export default DetailCard;
