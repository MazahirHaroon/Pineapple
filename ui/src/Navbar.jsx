/* eslint-disable */
import React, { Component } from "react";
import { Button, Menu, Dropdown, Image, Container } from "semantic-ui-react";
import Logo from "./logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu borderless className="menuStyle" fixed={"top"}>
        <Container text>
          <Menu.Item>
            <Image size="mini" src={Logo} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown text="Login" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Item as="a">as Patient</Dropdown.Item>
                <Dropdown.Item as="a">as Doctor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item header as="a">
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
export default Navbar;
