import React, { Component } from "react";

export class Welcome extends Component {
  // You cannot change props under any circumstances (Immutable)
  // In class component, you have to use this.props
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h1>
      </div>
    );
  }
}
