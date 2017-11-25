/* eslint-disable */
import React, { Component } from "react";
import "whatwg-fetch";

class App extends Component {
  componentDidMount() {
    console.log("Done");
  }
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: {
        userId: 10,
        id: 123,
        title: "Click Happy",
        body:
          "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      }
    }).then(res => {
      this.setState({
        data: res
      });
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default App;
