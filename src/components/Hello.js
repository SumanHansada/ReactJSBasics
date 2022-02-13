import React, { Component } from "react";

export class Hello extends Component {
  render() {
    // return (
    //   <div>
    //     <h1>Hello Suman</h1>
    //   </div>
    // );
    return React.createElement(
      "div",
      { id: "hello", className: "dummyClass" },
      React.createElement("h1", null, "Hello Suman")
    );
  }
}
