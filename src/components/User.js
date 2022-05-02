import React, { Component } from "react";

/**
 * Render Props
 * The term "render prop" refers to a technique for sharing code between React Components
 * using a prop whose value is a function
 */

class User extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}

export default User;
