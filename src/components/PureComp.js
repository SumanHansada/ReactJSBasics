import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  /**
   * Pure Component
   * A pure component on the other hand implements shouldComponentUpdate with
   * a shallow props and state comparison.
   *
   * Shallow Comparison
   * - Primitive Types
   *    a (sc) returns true, if a and b have the same value and are of same type
   *    Ex - string 'Suman' (sc) string 'Suman' returns true
   *
   * - Complex Types
   *    a (sc) returns true if and b reference the exact same object
   *
   * A pure component implements shouldComponentUpdate with a shallow prop and state comparison
   *
   * SC of prevState with currentState ----->(Diff)-----> Re-render component
   * SC of prevProps with currentProps ----->(Diff)-----> Re-render component
   *
   * Always return new object or array when dealing with Pure Component
   */

  render() {
    console.log("Pure Comp render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
