import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // Method 1 - Using If Else
    // if (this.state.isLoggedIn) return <div>Welcome Suman!</div>;
    // else return <div>Welcome Guest</div>;
    // Method 2 - Element Variables
    // let message;
    // if (this.state.isLoggedIn) message = <div>Welcome Suman!</div>;
    // else message = <div>Welcome Guest</div>;
    // return <div>{message}</div>;
    // Method 3 (Preferred) - Ternary Operator (Keeps code simple and readable)
    return this.state.isLoggedIn ? (
      <div>Welcome Suman</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // Method 4 - (Shortcut - Something or Nothing)
    // return this.state.isLoggedIn && <div>Welcome Suman!</div>;
  }
}

export default UserGreeting;
