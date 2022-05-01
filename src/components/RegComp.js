import React, { Component } from "react";

class RegComp extends Component {
  // For a Regular Component, If parent component re-renders, child component re-renders as well.

  /**
   * Regular Component
   * A regular component does not implement the shouldComponentUpdate method.
   * It always returns true by default.
   */

  render() {
    console.log("Reg Comp render");
    return <div>Reg Component {this.props.name} </div>;
  }
}

export default RegComp;
