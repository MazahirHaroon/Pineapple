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
            <Menu.Item
              as="a"
              name="register"
              active={activeItem === "register"}
            >
              Register
            </Menu.Item>
            <Menu.Item as="a" name="login" active={activeItem === "login"}>
              Login
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
export default Navbar;
